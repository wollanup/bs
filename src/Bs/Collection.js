"use strict";

Bs.define('Bs.Collection', {

	require  : 'Bs.Model',
	/**
	 *
	 * @return {Collection}
	 * @constructor
	 */
	construct: function Collection() {

		/**
		 *
		 * @param child
		 * @param parent
		 * @param options
		 * @private
		 */
		var _extend = function (child, parent, options) {
			options = options || {};
			child.items = [];
			child.apiParams = $.extend(true, {}, parent.apiParams, options.apiParams);

			for (var key in options) {
				if (options.hasOwnProperty(key) === false) {
					continue;
				}
				if (key === "items") {
					child.addList(options[key]);
					continue;
				}

				child[key] = options[key];

			}
		};

		var Collection = function (options) {
			this.initialize(options);
		};

		Collection.pool = {};

		/**
		 * Instances present in collection
		 *
		 * @type {[Model]}
		 */
		Collection.prototype.items = [];

		/**
		 * Number of instance derived from this class
		 * Used to create unique id
		 * @type {number}
		 */
		Collection.prototype.nbInstances = 0;

		/**
		 * Name Of the module, id will be generated from this property (id-1)
		 * @type {string}
		 */
		Collection.prototype.id = 'collection';

		/**
		 * Class name of the Response handler
		 * @type {string}
		 */
		Collection.prototype.apiResponseHandler = 'Bs.Response';

		/**
		 * Api HTTP headers
		 *
		 * @type {Object}
		 */
		Collection.prototype.apiHeaders = {};

		/**
		 * Method identifier for API calls (myMethod)
		 * @type {string}
		 */
		Collection.prototype.apiMethod = "get";
		/**
		 * Resource identifier for API calls (myclass)
		 * @type {string}
		 */
		Collection.prototype.apiResource = "";

		/**
		 * Action identifier for API calls (myAction)
		 * @type {string}
		 */
		Collection.prototype.apiAction = "list";
		/**
		 * Params for API calls
		 * @type {string}
		 */
		Collection.prototype.apiParams = null;

		/**
		 * Says if instance is local & new or come from server
		 * @type {boolean}
		 */
		Collection.prototype.local = true;

		/**
		 *  Pagination object
		 * @type {null|{}}
		 */
		Collection.prototype.pagination = null;

		Collection.prototype.cache = false;

		/**
		 * Name of the model used in this collection
		 * @type {Model|String}
		 */
		Collection.prototype.model = '';

		/**
		 * Name of the Collection like a property
		 *
		 * e.g. if class name is Collection.MyEntity => myEntity
		 * @type {string}
		 */
		Collection.prototype.nameAsAProperty = '';

		/**
		 *
		 * @type {string}
		 */
		Collection.prototype.type = 'collection';

		/**
		 *
		 * @type {boolean}
		 */
		Collection.prototype.updateModelPoolOnFetch = true;

		/**
		 * Take a config object and set fields in class
		 */
		Collection.prototype.initialize = function (options) {
			this.id += '-' + (++Collection.prototype.nbInstances);
			_extend(this, this, options);
		};

		Collection.prototype.getPagination = function () {
			return this.pagination;
		};

		Collection.prototype.isNew = function () {
			return this.local === true;
		};

		/**
		 *
		 * @param bool
		 * @return {Collection}
		 */
		Collection.prototype.setNew = function (bool) {
			bool = !!bool;
			this.each(function (model) {
				model.setNew(bool);
			});
			this.local = bool;
			return this;
		};

		/**
		 * Reset items list
		 */
		Collection.prototype.reset = function () {
			this.items = [];
			return this;
		};

		/**
		 *
		 * @param {Model|Array|*} [item]
		 * @return {Model}
		 */
		Collection.prototype.add = function (item) {
			var me = this;
			if (item instanceof Bs.Model === false) {
				if (!me.model) {
					throw new Error('Collection must have a model');
				}
				item = Bs.create(me.model, item);
			}

			me.items.push(item);

			// Tweak item
			item.getCollection = function () {
				return me;
			};
			item.getIndex = function () {
				return this.getCollection().items.indexOf(this)
			};

			return item;
		};

		/**
		 *
		 * @param {Model|Array|*} [item]
		 * @param {integer} index
		 * @return {Model}
		 */
		Collection.prototype.replaceAt = function (index, item) {
			var me = this;
			if (item instanceof Bs.Model === false) {
				item = Bs.create(me.model, item);
			}
			me.items[index] = item;

			item.getCollection = function () {
				return me;
			};
			item.getIndex = function () {
				return this.getCollection().items.indexOf(this)
			};

			return item;
		};

		/**
		 *
		 * @param {Array} dataList
		 * @return {Collection}
		 */

		Collection.prototype.addList = function (dataList) {
			if (!dataList) {
				return this;
			}
			for (var i = 0, item; item = dataList[i]; i++) {
				item = this.add(item);
			}
			return this;
		};

		/**
		 *
		 * @param index
		 * @return {Model}
		 */
		Collection.prototype.getAt = function (index) {
			return this.items.hasOwnProperty(index) ? this.items[index] : undefined;
		};

		/**
		 *
		 * @return {[Model]}
		 */
		Collection.prototype.getAll = function () {
			return this.items;
		};

		/**
		 *
		 * @return {[Model]|*}
		 */
		Collection.prototype.getLast = function () {
			if (this.items.length === 0) {
				return undefined;
			}
			return this.items[this.items.length - 1];
		};

		/**
		 *
		 * @return {[Model]|*}
		 */
		Collection.prototype.getFirst = function () {
			if (this.items.length === 0) {
				return undefined;
			}
			return this.items[0];
		};

		/**
		 * Add a param which will be sent to API on fetch operations
		 *
		 * @param name
		 * @param value
		 * @return {Collection}
		 */
		Collection.prototype.setParam = function (name, value) {
			this.apiParams[name] = value;

			return this;
		};

		Collection.prototype.isInPool = function () {
			return this.buildSignature() in Collection.pool;
		};

		Collection.prototype.addToPool = function () {
			Collection.pool[this.buildSignature()] = this;
		};

		Collection.prototype.getFromPool = function () {
			return Collection.pool[this.buildSignature()]
		};

		Collection.prototype.buildSignature = function () {
			return this.id;
		};

		/**
		 * Fetch object from Server
		 * @param options
		 * @return {{done: Function, fail: Function, always: Function}}
		 */
		Collection.prototype.fetch = function (options) {
			//noinspection JSDuplicatedDeclaration
			var me = this,
				url,
				callback = Bs.Api.buildCallback(options),
				item,
				options = options || {},
				page = options.page || 1,
				limit = options.limit || Bs.Collection.PAGE_SIZE,
				sort = options.sort || false,
				filter = options.filter || false,
				apiParams = options.apiParams || me.apiParams,
				apiMethod = options.apiMethod || me.apiMethod,
				apiAction = options.apiAction || me.apiAction,
				apiResource = options.apiResource || me.apiResource,
				apiRoute = options.apiRoute || me.apiRoute,
				apiHeaders = options.apiHeaders || me.apiHeaders,
				apiResponseHandler = options.apiResponseHandler || me.apiResponseHandler,
				updateModelPool = options.updateModelPool || me.updateModelPoolOnFetch;


			apiAction = apiAction ? '/' + apiAction : apiAction;
			url = apiRoute || (apiResource + apiAction);
			apiParams = $.extend(true, apiParams, {page: page, limit: limit});
			apiParams.sort = sort || null;
			apiParams.filter = filter || null;

			var api = new Bs.Api({
				headers: apiHeaders,
				responseHandler: apiResponseHandler
			});

			var promise = api[apiMethod.toLowerCase()](url, apiParams, callback);

			Bs.require(apiResponseHandler, function() {
				promise.then(function (response) {
					response = Bs.create(apiResponseHandler, response);
					if (me.cache) {
						me.addToPool();
					}
					me.reset();
					me.local = false;
					me.pagination = response.pagination();
					var list = response.getData();
					if (list) {
						if (typeof list === "object") {
							for (var i in list) {
								if (list.hasOwnProperty(i) === false) {
									continue;
								}
								item = me.add(list[i]);
								item.setInitialData(list[i]);

								if(updateModelPool) {
									var signature = Bs.Model.buildSignature(me.model, list[i].id);
									if (Bs.Model.isInPool(signature)) {
										Bs.Model.pool[signature] = item;
									}
								}
							}
						}
					}
				});
			});

			return promise;
		};

		/**
		 * Tells if at least one of the models in collection has specified value in specified field
		 *
		 * @param value
		 * @param property
		 * @return {boolean}
		 */
		Collection.prototype.hasValue = function (value, property) {
			var me = this;
			for (var i in me.items) {
				if (me.items.hasOwnProperty(i)) {
					if (me.items[i].get(property) === value) {
						return true;
					}
				}
			}
			return false;
		};

		/**
		 *
		 * @returns {Array}
		 */
		Collection.prototype.toObject = function (withFnAndExtra) {
			var me = this,
				data = [];

			me.each(function (model) {
				data.push(model.toObject(withFnAndExtra));
			});

			return data;
		};

		Collection.prototype.save = function (options) {
			options = options || {};
			var me = this,
				postList = [],
				patchList = [],
				deleteList = [],
				patchDfd, postDfd, deleteDfd,
				url,
				callback = Bs.Api.buildCallback(options),
				originalDoneCallback = callback.done,
				apiParams = options.apiParams || {};

			me.each(function (model) {

				if (model.isSuppressed()) {
					if (model.isNew() === false) {
						deleteList.push(model.toObject());
					}
				}
				else {
					if (model.isNew()) {
						postList.push(model.toObject());
					}
					else if (model.isModified()) {
						patchList.push(model.toObject());
					}
				}
			});

			/**
			 *
			 * @param {Response} response
			 */
			callback.done = function (response) {

				if (patchList.length > 0 || deleteList.length > 0) {
					me.each(function (model, modelIndex) {
						if (model.pk.length > 1) {
							throw new Error('You must implement an auto-incremented PK or implement multiple PK handling for collection');
						}

						for (var i = 0, item; item = response.getData()[i]; i++) {
							if (item[model.pk[0]] === model.getPK(true)) {
								me.replaceAt(modelIndex, item)
							}
						}
						model.modifiedFields = [];
						model.local = false;
					});
				} else {
					me.reset();
					me.addList(response.getData());
					me.each(function (model) {
						model.modifiedFields = [];
						model.local = false;
					});
				}

				originalDoneCallback.call(me, response);
			};
			url = me.apiResource + '/' + me.apiAction;

			if (!postList.length && !patchList.length && !deleteList.length) {
				callback.always();
				callback.nothing();
				return;
			}

			if (postList.length) {
				var postListParams = {'list': postList};
				postListParams = $.extend(true, postListParams, apiParams);
				postDfd = Bs.Api.post(url, postListParams);
			}
			else {
				postDfd = new $.Deferred().resolve();
			}

			if (patchList.length) {
				var patchListParams = {'list': patchList};
				patchListParams = $.extend(true, patchListParams, apiParams);
				patchDfd = Bs.Api.patch(url, patchListParams);
			}
			else {
				patchDfd = new $.Deferred().resolve();
			}

			if (deleteList.length) {
				var deleteListParams = {'list': deleteList};
				deleteListParams = $.extend(true, deleteListParams, apiParams);
				deleteDfd = Bs.Api.delete(url, deleteListParams);
			}
			else {
				deleteDfd = new $.Deferred().resolve();
			}

			$.when(postDfd, patchDfd, deleteDfd).then(function (rPost, rPatch, rDelete) {
					var r;
					// Need to check existence of post response before extend
					if (rPost) {
						if (rPatch) {
							$.extend(true, rPost[0].data, rPatch[0].data);
						}
						r = new Bs.Response(rPost[0]);
					}
					else {
						if(rPatch) {
							r = new Bs.Response(rPatch[0]);
						} else if(rDelete){
							r = new Bs.Response(rDelete[0]);
						}
					}

					callback.done(r);
					callback.always(r);
				},
				function () {
					callback.fail();
					callback.always();
				}
			);

			//TODO remove deleted elements from collection ?

		};

		/**
		 * Tells if collection has items
		 *
		 * @return {boolean}
		 */
		Collection.prototype.isEmpty = function () {
			return this.items.length === 0;
		};

		Collection.prototype.each = function (callback) {
			var me = this;
			for (var i = 0, item; item = me.items[i]; i++) {
				if(callback(item, i) === false){
					break;
				}
			}
		};

		/**
		 *
		 * @param property
		 * @param value
		 * @param operator
		 * @return {*}
		 */
		Collection.prototype.findFirstWhere = function (property, value, operator) {
			// TODO operator
			var me = this;
			for (var i = 0, item; item = me.items[i]; i++) {
				if (me.items[i].get(property) === value) {
					return me.items[i];
				}
			}

			return null;
		};

		/**
		 *
		 * @return {Number}
		 */
		Collection.prototype.count = function () {
			return this.items.length;
		};
		/**
		 *
		 * @return {Number}
		 */
		Collection.prototype.getLength = function () {
			return this.items.length;
		};

		/**
		 *
		 * @param property
		 * @param value
		 * @param operator
		 * @return {int} Index of removed item
		 */
		Collection.prototype.removeFirstWhere = function (property, value, operator) {
			// TODO operator
			var me = this;
			for (var i = 0, item; item = me.items[i]; i++) {
				if (me.items[i].get(property) === value) {
					me.items.splice(i, 1);

					return i;
				}
			}

			return -1;
		};
		/**
		 *
		 * @param index
		 */
		Collection.prototype.removeAt = function (index) {
			var me = this;
			if(index > -1) {
				return me.items.splice(index, 1).length === 1;
			}
			return false;
		};

		/**
		 *
		 * @param {Model} model
		 */
		Collection.prototype.remove = function (model) {
			if((!model instanceof Bs.Model)){
				throw new Error('\'remove\' method only accepts Model parameter');
			}
			var me = this, index = me.items.indexOf(model);

			return me.removeAt(index);
		};

		Collection.prototype.suppress = function (model) {
			model.suppress();
		};

		Collection.prototype.restore = function (model) {
			model.restore();
		};

		Collection.prototype.getNameAsAProperty = function () {
			return this.nameAsAProperty;
		};

		Collection.prototype.toArray = function () {
			var me = this,
				itemsToArray = [];

			me.each(function (model) {
				itemsToArray.push(model.toObject());
			});

			return itemsToArray;
		};

		/**
		 * Sort collection by given property
		 * Local sorting, use `Collection.fetch({sort:{property:"name",direction:"DESC"}})` for remote sorting
		 *
		 * @param {String} property
		 * @param {Boolean} desc
		 */
		Collection.prototype.sortBy = function (property, desc) {
			var me = this;
			me.items.sort(function(a,b) {
				return (a.get(property) > b.get(property)) ? (desc ? -1 : 1) : ((b.get(property) > a.get(property)) ? (desc ? 1 : -1) : 0);
			});
		};

		/**
		 * Define a new Class derived from Collection
		 *
		 * @static
		 * @param className
		 * @param options
		 * @param callback
		 * @return {Collection}
		 */
		Collection.define = function (className, options, callback) {
			callback = callback || function () {};
			var parent = this,
				Surrogate = function Collection() {},
				Collection = function Collection() {
					return parent.apply(this, arguments);
				},
				apiResource, firstLetter;

			Collection.define = parent.define;

			Surrogate.prototype = parent.prototype;
			Collection.prototype = new Surrogate;

			apiResource = className.split('.');
			apiResource = apiResource[apiResource.length - 1];
			firstLetter = apiResource.charAt(0).toLowerCase();
			Collection.prototype.apiResource = firstLetter + apiResource.substr(1);

			_extend(Collection.prototype, parent.prototype, options);

			var str = className.split('.');
			str = str[str.length - 1];
			firstLetter = str.charAt(0).toLowerCase();
			Collection.prototype.nameAsAProperty = firstLetter + str.substr(1);

			Collection.prototype.id = className.replace(/\./g, "-").toLowerCase();
			callback(Collection, [Collection.prototype.model]);

			return Collection;
		};

		Collection.create = function (className, options) {
			options = options || {};
			options.extend = 'Bs.Collection';

			var Child = Collection.define(className, options);

			if (!Child.prototype.model) {
				throw new Error('Collection must have a model');
			}

			Bs.register(className, Child);
			return new Child();
		};

		return Collection;
	}
}, function () {
	Bs.Collection.PAGE_SIZE = 20
});
