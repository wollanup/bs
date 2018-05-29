"use strict";

/**
 * @return {Bs.Model}
 */
Bs.define('Bs.Model', {
	require: ['Bs.Api'],

	/**
	 *
	 * @return {Model}
	 * @constructor
	 */
	construct: function () {

		var _buildSignatureFromClass = function (className) {
			return className.replace(/\./g, "-").toLowerCase();
		};

		/**
		 *
		 * @constructor
		 */

		var Model = function () {
			this.initialize && this.initialize.apply(this, arguments);
		};

		/**
		 *
		 */
		Model.pool = {};
		/**
		 * Number of instance derived from this class
		 * Used to create unique id
		 * @type {number}
		 */
		Model.prototype.nbInstances = 0;
		/**
		 * Name of the model
		 * @type {string}
		 */
		Model.prototype.className = '';
		/**
		 * Name of the model like a property
		 *
		 * e.g. if class name is Model.MyEntity => myEntity
		 * @type {string}
		 */
		Model.prototype.nameAsAProperty = '';

		/**
		 * Name Of the module, id will be generated from this property (id-1)
		 * @type {string}
		 */
		Model.prototype.id = 'model';

		/**
		 * Resource identifier for API calls (myclass)
		 * @type {string}
		 */
		Model.prototype.apiResource = "";
		/**
		 * Route identifier for API calls (myclass)
		 *
		 * (Overwrites ApiRessource and ApiAction)
		 * @type {string|null}
		 */
		Model.prototype.apiRoute = null;

		/**
		 * action identifier for API calls
		 * @type {string}
		 */
		Model.prototype.apiAction = "";

		/**
		 * Primary Key fields
		 * @type {[]}
		 */
		Model.prototype.pk = ['id'];

		/**
		 * Auto Increment PK
		 * @type {boolean}
		 */
		Model.prototype.autoIncrement = true;

		/**
		 * Foreign Key fields
		 * @type {[]}
		 */
		//Model.prototype.fk = [];

		/**
		 * Foreign Key fields
		 * @type {{}} {"fkId" : "ModelName"}
		 */
		Model.prototype.relations = {};

		/**
		 * Says if instance is local & new or come from server
		 * @type {boolean}
		 */
		Model.prototype.local = true;

		/**
		 * Says if instance is being initialized
		 * @type {boolean}
		 */
		Model.prototype.initializingData = false;

		/**
		 *  @type {Object}
		 *
		 */
		Model.prototype.fields = {};
		/**
		 *
		 * @type {{}}
		 */
		Model.prototype.extraData = {};
		/**
		 * List of functions
		 * @type {{}}
		 */
		Model.prototype.fn = {};

		Model.prototype.modifiedFields = [];

		Model.prototype.suppressed = false;
		/**
		 *
		 * @type {string}
		 */
		Model.prototype.type = 'model';

        /**
		 *
         * @type {null}|{Object}
         */
        Model.prototype.triggeredEvents = null;

        /**
		 * Take a config object and set fields in class
		 * @param data
		 */
		Model.prototype.initialize = function (data) {
			var me = this;
			// var alreadyCreatedRelations = {name: true};
			me.fieldsDefault = $.extend({}, me.fields);
			me.fields = $.extend({}, me.fields);
			me.modifiedFields = [];
			me.initialData = {};
			me.extraData = {};

			// Create initial objects for relations
			for (var key in me.relations) {
				if (me.relations.hasOwnProperty(key) && !me.fields[key]) {
					if (typeof data === "object"
						&& data !== null
						&& "caller" in data
						&& me.relations[key] === data.caller
					){
						continue; // Avoid recursion of a model who wants to instantiate same model as caller
					}
					me.setRelation(key, {caller:me.className});
				}
			}

			// Set all data : fields and relations
			me.setData(data);

			me.id += '-' + (++Model.prototype.nbInstances);
		};

		/**
		 * Check if field exists in model
		 *
		 * @param field
		 * @return {*}
		 */
		Model.prototype.has = function (field) {
			return this.fields.hasOwnProperty(field);
		};

		/**
		 * Simple Getter
		 *
		 * @param field
		 * @return {*}
		 */
		Model.prototype.get = function (field) {
			if (field.indexOf('.') > 0) {
				var fieldParts = field.split('.');
				return this.getSubModel(fieldParts.shift(), fieldParts);
			}
			else {
				return this.has(field) ? this.fields[field] : null;
			}
		};

		Model.prototype.getSubModel = function (relation, field) {

			if (relation in this.relations) {
				return this.fields[relation].get(field);
			}
			if (typeof this.fields[relation] === 'object') {
				return this.fields[relation][field]
			}
			return null;
		};

		/**
		 * Get PK value
		 *
		 * @return []|String [toString]
		 */
		Model.prototype.getPK = function (toString) {
			var temp = [];
			for (var i = 0, field; field = this.pk[i]; i++) {
				temp.push(this.get(field));
			}
			return toString ? temp.join('-') : temp;
		};

		/**
		 * Get PK value
		 *
		 * @return {*}
		 */
		Model.prototype.isAutoIncrement = function () {
			return this.autoIncrement === true;
		};

		var _linkRelationToParent = function(relationInstance, parentFieldName){
			var me = this;
			relationInstance.getParentRelation = function(){
				return me;
			};
			relationInstance.getParentFieldName = function(){
				return parentFieldName;
			};
		};

		Model.prototype.setRelation = function (field, value) {

			var className = this.relations[field],
				relation = this.fields[field];

			if(!relation || $.isEmptyObject(relation)) {
				relation = this.fields[field] = Bs.create(className, value);
				_linkRelationToParent.call(this, relation, field);
			}

			// Value is an instance
			if (value instanceof Bs.Collection || value instanceof Bs.Model) {
				if(this.isInitializingData()){
					value.setNew(this.isNew());
				}
				this.fields[field] = value;
				return this;
			}

			// Value is plain data
			// Collection
			if (relation.type==="collection") {
				relation.reset();
				relation.addList(value);
				if(this.isInitializingData()){
					relation.setNew(this.isNew());
				}
				return this;
			}
			// Model
			else if (relation.type==="model") {
				// If no/null value, assume relation does not exist on server
				relation.setInitialData(value, value ? this.isNew() : true);
				return this;
			}

			throw new Error("[Bs.Model] Unknown relation type for '" + field + "' in '" + this.className +"'");
		};

		/**
		 * Simple Setter
		 *
		 * @param field
		 * @param value
		 * @return {Model}
		 */
		Model.prototype.set = function (field, value) {
			var object, objectName, objectFieldName;
			if (!field || this.has(field) === false || this.get(field) === value) {
				return this;
			}

			if (typeof value === "string") {
				value = $.trim(value);
			}

			if (field.indexOf('.') > 0) {
				object = field.split('.');
				objectName = object.shift();
				objectFieldName = object;
				if (objectName in this.relations) {
					this.fields[objectName].set(objectFieldName, value);
					return this;
				}
				if (this.fields[objectName]
					&& typeof this.fields[objectName] === 'object'
					&& this.fields[objectName].hasOwnProperty(objectFieldName)
				) {
					this.fields[objectName][objectFieldName] = value
				}
			}
			else {
				// Relations Collection/Model
				if (field in this.relations) {
					this.setRelation(field, value);
				}
				// Simple field
				else {
					this.fields[field] = value;
				}
			}
			if (!this.isInitializingData() && !this.isNew()) {
				// TODO - relations
				//if (this.fk.indexOf(field) > -1) {
				//	this.setRelation(field);
				//}

				var index = this.modifiedFields.indexOf(field);
				// New value is same as original, remove if previously modified
				if (this.getInitial(field) === value) {
					if (index > -1) { //remove if exists
						this.modifiedFields.splice(index, 1)
					}
				}
				// New value is different, push if not already modified
				else {
					if (index === -1) {
						this.addModifiedField(field);
					}
				}
			}

			return this;
		};

		/**
		 *
		 * @param field
		 */
		Model.prototype.addModifiedField = function (field) {
			this.modifiedFields.push(field);
		};

		/**
		 *
		 * @param data
		 */
		Model.prototype.setData = function (data) {
			data = data || {};

			for (var key in data) {
				if (data.hasOwnProperty(key) && this.has(key)) {
					this.set(key, data[key]);
				}
			}
		};

		Model.prototype.getSignature = function () {
			return _buildSignatureFromClass(this.className) + "-" + this.getPK(true);
		};

		Model.buildSignature = function (className, pkString) {
			return _buildSignatureFromClass(className) + "-" + pkString;
		};

		Model.isInPool = function (signature) {
			return typeof Model.pool[signature] !== "undefined";
		};

		Model.getFromPool = function (signature) {
			return Model.pool[signature];
		};

		Model.addToPool = function (signature, model) {
			return Model.pool[signature] = model;
		};
		Model.removeFromPool = function (signature) {
			if (Model.isInPool) {
				delete Model.pool[signature];
			}
		};

		/**
		 *
		 * @param className
		 * @param pkString
		 * @param callback
		 * @return {jQuery.Deferred|jQuery.Ajax}
		 */
		Model.getFromPoolOrFetch = function (className, pkString, callback) {
			var item,
				signature = Model.buildSignature(className, pkString);

			callback = callback || function () {};

			if (Model.isInPool(signature)) {
				item = Model.getFromPool(signature);
				callback.call(item, item);
				return new $.Deferred().resolve()
			}
			else {
				item = Bs.create(className);
				return item.fetch({
					pk  : pkString,
					done: function () {
						callback.call(item, item);
					}
				});
			}
		};

		/**
		 *
		 * @param data
		 * @param {boolean} fromLocal Data is local or come from server ?
		 */
		Model.prototype.setInitialData = function (data, fromLocal) {
			data = data || {};
			this.modifiedFields = [];
			this.setNew(fromLocal);
			this.setInitializingData(true);
			for (var key in data) {
				if (data.hasOwnProperty(key) && this.has(key)) {
					this.initialData[key] = data[key];
					this.set(key, data[key])
				}
			}
			this.setInitializingData(false);
		};

		/**
		 *
		 * @return {Model.initialData}
		 */
		Model.prototype.getInitial = function (field) {
			return this.has(field) ? this.initialData[field] : undefined;
		};

		/**
		 *
		 * @return {boolean}
		 */
		Model.prototype.isNew = function () {
			return this.local === true;
		};

		/**
		 *
		 * @param bool
		 * @return {Model}
		 */
		Model.prototype.setNew = function (bool) {
			bool = !!bool;
			this.local = bool;
			return this;
		};

		/**
		 *
		 * @param bool
		 * @return {Model}
		 */
		Model.prototype.setInitializingData = function (bool) {
			bool = !!bool;
			this.initializingData = bool;
			return this;
		};

		/**
		 *
		 * @return {boolean}
		 */
		Model.prototype.isInitializingData = function () {
			return this.initializingData === true;
		};


		/**
		 *
		 * @return {boolean}
		 */
		Model.prototype.isModified = function () {
			return this.modifiedFields.length > 0;
		};

		/**
		 *
		 * @return {boolean}
		 */
		Model.prototype.isSuppressed = function () {
			return this.suppressed;
		};

		/**
		 *
		 * @return {Model}
		 */
		Model.prototype.suppress = function () {
			this.suppressed = true;
			return this;
		};
		/**
		 *
		 * @return {Model}
		 */
		Model.prototype.restore = function () {
			this.suppressed = false;
			return this;
		};

		/**
		 *
		 * @param field
		 * @return {boolean}
		 */
		Model.prototype.isModifiedField = function (field) {
			return this.modifiedFields.indexOf(field) > -1;
		};

		/**
		 * reset fields with parent values
		 * @return {Model}
		 */
		Model.prototype.reset = function () {
			if(this.isNew()) {
				this.setData(this.fieldsDefault);
			}
			else{
				for (var i = 0, field; field = this.modifiedFields[i]; i++) {
					this.set(field, this.getInitial(field));
				}
			}
			return this;
		};

		/**
		 * Fetch object from Server
		 * @param options
		 * @return {jQuery.Ajax}
		 */
		Model.prototype.fetch = function (options) {
			var me = this,
				callback,
				originalDoneCallback,
				url,
				apiParams,
				apiAction,
				apiRoute,
				apiResource,
				pk;

			options = options || {};
			callback = Bs.Api.buildCallback(options);
			originalDoneCallback = callback.done;
			apiParams = options.apiParams || null;
			apiAction = options.apiAction || me.apiAction;
			apiRoute = options.apiRoute || me.apiRoute;
			apiResource = options.apiResource || me.apiResource;
			pk = options.pk || this.getPK(true);

			callback.done = function (response) {
				var data = response.getData();
				if (data) {
					me.setInitialData(data);
				}
				Model.addToPool(me.getSignature(), me);
				originalDoneCallback.call(me, response);
			};

			if(apiRoute) {
				url = apiRoute || apiResource + pk + apiAction;
			}
			else{
				apiAction = apiAction ? '/' + apiAction : apiAction;
				pk = pk ? '/' + pk : pk;
				url = apiResource + pk + apiAction;
			}

			return Bs.Api.get(url, apiParams, callback);
		};

		/**
		 *
		 * @param options
		 */
		Model.prototype.delete = function (options) {
			options = options || {};
			var me = this,
				callback = Bs.Api.buildCallback(options),
				originalDoneCallback = callback.done,
				apiParams = options.apiParams || null,
				apiAction = options.apiAction || me.apiAction,
				apiResource = options.apiResource || me.apiResource,
				pk = options.pk || this.getPK(true);

			callback.done = function (response) {
				me.setInitialData(response.getData(), true);
				Model.removeFromPool(me.getSignature(), me);
				originalDoneCallback.call(me, response);
			};

			apiAction = apiAction ? '/' + apiAction : apiAction;
			pk = pk ? '/' + pk : pk;

			Bs.Api.delete(apiResource + pk + apiAction, apiParams, callback);
		};

		/**
		 *
		 * @param options callback function on 'done' OR callback object {done: Function, fail: Function, always: Function}
		 */
		Model.prototype.save = function (options) {
			options = options || {};
			var me = this,
				url,
				callback = Bs.Api.buildCallback(options),
				originalDoneCallback = callback.done,
				apiParams = options.apiParams || {},
				apiAction = options.apiAction || me.apiAction,
				apiResource = options.apiResource || me.apiResource,
				apiRoute = options.apiRoute || me.apiRoute;

			callback.done = function (response) {
				me.setInitialData(response.getData());
				originalDoneCallback.call(me, response);
			};

			if (apiAction) {
				apiAction = '/' + apiAction;
			}

			var data = {};
			if (this.isNew()) {
				url = apiRoute || (apiResource + apiAction);
				if (me.isAutoIncrement() === false && !apiRoute) {
					url += '/' + this.getPK(true);
				}
				data = $.extend(true, {}, this.toObject(), apiParams);
				Bs.Api.post(url, data, callback)
			}
			else {
				url = apiRoute || (apiResource + '/' + this.getPK(true) + apiAction);
				if (me.isModified()) {
					data = $.extend(true, {}, this.toModifiedObject(), apiParams);
					Bs.Api.patch(url, data, callback)
				}
				else {
					if(options.force){
						Bs.Api.patch(url, apiParams, callback)
					}
					else {
						callback.always();
						callback.nothing();
					}
				}
			}
		};

		/**
		 *
		 * @return {Model}
		 */
		Model.prototype.setApiAction = function (apiAction) {
			this.apiAction = apiAction;
			return this;
		};

		Model.prototype.toObject = function (withFnAndExtra) {
			var me = this, temp = {}, o;
			for (var field in this.fields) {
				if (this.fields.hasOwnProperty(field)) {
					// If field is a subModel, get it and calls its toObject method
					if (this.relations.hasOwnProperty(field)) {
						o = this.get(field);
						temp[field] = o && o.toObject && o.toObject(withFnAndExtra) || null;
					}
					else {
						temp[field] = this.get(field);
					}
				}
			}
			if (withFnAndExtra) {
				var fnList = {};
				for (var fnName in me.fn) {
					if (me.fn.hasOwnProperty(fnName)) {
						(function (fnName) {
							fnList[fnName] = function () {
								return me.fn[fnName].apply(me, arguments);
							}
						})(fnName)
					}
				}
				$.extend(true, temp, this.getExtraData(), fnList)
			}
			return temp;
		};

		/**
		 *
		 * @param [name]
		 * @returns {*}
		 */
		Model.prototype.getExtraData = function (name) {

			if (name) {
				if (this.extraData.hasOwnProperty(name)) {
					return this.extraData[name];
				}
				return null;
			}
			return this.extraData;
		};

		/**
		 *
		 * @param name
		 * @param value
		 * @returns {Model}
		 */
		Model.prototype.setExtraData = function (name, value) {
			this.extraData[name] = value;
			return this;
		};

		/**
		 *
		 *
		 * @return {*}
		 */
		Model.prototype.toModifiedObject = function () {
			var temp = {}, o;
			for (var i = 0, field; field = this.modifiedFields[i]; i++) {

				// If field is a subModel, get it and calls its toObject method
				if (this.relations.hasOwnProperty(field)) {
					o = this.get(field);
					temp[field] = o && o.toObject && o.toObject() || null;
				}
				else {
					temp[field] = this.get(field);
				}
			}
			return temp;
		};

		/**
		 *
		 * @return {string}
		 */
		Model.prototype.toJSON = function () {
			return JSON.stringify(this.toObject());
		};

		/**
		 *
		 * @return {string}
		 */
		Model.prototype.getClassName = function () {
			return this.className;
		};

		Model.prototype.getNameAsAProperty = function () {
			return this.nameAsAProperty;
		};

        /**
         *
         * @param event
         * @param callback
         */
        Model.prototype.on = function (event, callback) {
            callback = callback || function () {};
            if (this.triggeredEvents.hasOwnProperty(event)) {
                callback(null, this.triggeredEvents[event]);
                delete this.triggeredEvents[event]
            }
            $(this).on(event, callback);

            return this;
        };

        Model.prototype.off = function (event) {
            $(this).off(event);

            return this;
        };

        /**
         *
         * @param event
         * @param callback
         */
        Model.prototype.one = function (event, callback) {
            callback = callback || function () {};
            if (this.triggeredEvents.hasOwnProperty(event)) {
                callback(null, this.triggeredEvents[event]);
                delete this.triggeredEvents[event]
            }
            $(this).one(event, callback);

            return this;
        };
        /**
         *
         * @param event
         * @param params
         */
        Model.prototype.trigger = function (event, params) {
            this.triggeredEvents[event] = params;
            $(this).triggerHandler(event, params);

            return this;
        };

        var _extend = function (child, parent, options) {

			child.fields = $.extend(true, {}, parent.fields, options.fields);
			child.fn = $.extend(true, {}, parent.fn, options.fn);
			child.relations = $.extend(true, {}, parent.relations, options.relations);
            child.triggeredEvents = {};
			// Prevent loop below to erase values
			options.fields = undefined;
			options.relations = undefined;

			for (var key in options) {
				if (options.hasOwnProperty(key) === false || options[key] === undefined) {
					continue;
				}

				if (typeof options[key] === "function") {
					child.fn[key] = options[key];
				}
				child[key] = options[key];
			}

			child.modifiedFields = [];
			child.initialData = {};

			child.pk = Bs.Util.arrayFromString(child.pk);

		};

		/**
		 * Define a new Class derived from Model
		 *
		 * @static
		 * @param className
		 * @param options
		 * @param callback
		 * @return {Model}
		 */
		Model.define = function (className, options, callback) {
			callback = callback || function () {};
			options.fields = options.fields || {};
			var parent = this,
				relationList,
				Surrogate = function Model() {},
				Model = function Model() {
					return parent.apply(this, arguments);
				};

			Model.define = parent.define;

			Surrogate.prototype = parent.prototype;
			Model.prototype = new Surrogate;

			_extend(Model.prototype, parent.prototype, options);
			Model.prototype.id = _buildSignatureFromClass(className);
			Model.prototype.className = className;

			var str = className.split('.');
			str = str[str.length - 1];
			var f = str.charAt(0).toLowerCase();
			Model.prototype.nameAsAProperty = f + str.substr(1);

			if (options.apiResource) {
				Model.prototype.apiResource = options.apiResource;
			}
			else {
				if (!Model.prototype.apiResource) {
					Model.prototype.apiResource = Model.prototype.nameAsAProperty;
				}
			}

			relationList = [];
			for (var name in Model.prototype.relations) {
				if (Model.prototype.relations.hasOwnProperty(name)) {
					relationList.push(Model.prototype.relations[name])
				}
			}
			callback(Model, relationList);

			return Model;
		};

		Model.create = function (className, options) {
			options = options || {};
			options.extend = 'Bs.Model';

			var Child = Model.define(className, options);

			return new Child();
		};

		return Model;
	}
});
