"use strict";

Bs.define('Bs.View', {
	/**
	 *
	 */
	require  : [
		'Bs.Lang',
		'Bs.Stylesheet',
		'Bs.View.Loading'
	],
	/**
	 *
	 * @return {View}
	 */
	construct: function () {
		/**
		 * @class View
		 */
		var View = function (config) {
			var me = this,
				callback = function () {
					me.trigger('afterInitialize');
					if (me.autoRender) {
						me.render();
					}
				};
			_initialize.call(me, config).then(function () {
				var init = me.initialize(config);
				if (init && "then" in init) {
					init.fail(function () {
						me.initializeFail.apply(me, arguments);
					}).then(function () {
						callback();
					})
				}
				else {
					callback();
				}
			});
		};

		/**
		 * Number of instance derived from this class
		 * Used to create unique id
		 * @type {number}
		 */
		View.nbInstances = 0;

		/**
		 * List of models used by this view
		 * @type {[Model]} Array of models identified by name
		 */
		View.prototype.model = null;

		/**
		 * DataBinder
		 * @type {bool}
		 */
		View.prototype.bindData = false;
		/**
		 * modelPK
		 * @type {int|string}
		 */
		View.prototype.modelPK = 0;

		/**
		 * Parameters given to the view
		 * @deprecated
		 * @type {Object}
		 */
		View.prototype.params = {};

		/**
		 * Options given to the view
		 * @type {Object}
		 */
		View.prototype.options = null;

		/**
		 * Tag of the main element of the module, will be created at the end of renderTo el
		 * @type {string}
		 */
		View.prototype.elTag = 'div';

		/**
		 * Style of the element
		 * JSON/Object syntax like {"width":"auto","height":0}
		 * @type {{}}
		 */
		View.prototype.elStyle = null;
		/**
		 *
		 * @type {number}
		 */
		View.prototype.zIndex = 0;
		/**
		 * Name Of the main HTML el, id will be generated from this property (id-1)
		 * @type {string}
		 */
		View.prototype.id = 'view';
		/**
		 * Name Of the Class
		 * @type {string}
		 */
		View.prototype.name = 'View';
		/**
		 * Name Of the Class
		 * @type {string}
		 */
		View.prototype.fullCamelName = 'view';
		/**
		 * Name of js,html,css files
		 * @type {string}
		 */
		View.prototype.fileName = 'View';
		/**
		 * Path of the Class after urlApp
		 *
		 * e.g View/MyView
		 *
		 * @type {string}
		 */
		View.prototype.urlPath = 'View';

		/**
		 * Url of the Class before path
		 *
		 * e.g http://mysite.com/templates
		 *
		 * @type {string}
		 */
		View.prototype.urlRoot = Bs.getConfig().urlApp;
		/**
		 * Element where the module will be append
		 * Accept CSS selector syntax (#myId) or DOMElement or jQuery el
		 *
		 * @type {string}
		 */
		View.prototype.renderTo = 'body';
		/**
		 * Class to add on the main element
		 * @type {string}
		 */
		View.prototype.elClass = '';

		/**
		 * HTML template.
		 *
		 * Will be inserted in elTag
		 * @type {string|Function}
		 */
		View.prototype.tpl = '';

		/**
		 * Global Store for all cached Tpl Views.
		 * @type {{}}
		 */
		View.prototype.cachedPartials = {};

		/**
		 * Contains all the script/handlebars templates included in view template
		 * @type {Object}
		 */
		View.compiledTpl = {};

		/**
		 *
		 * @type {boolean}
		 */
		View.prototype.hasTemplate = true;

		/**
		 *
		 * @type {boolean}
		 */
		View.prototype.hasStylesheet = true;
		/**
		 *
		 * @type {boolean}
		 */
		View.prototype.hasTranslation = true;
		/**
		 *
		 * @type {string}
		 */
		View.prototype.stylesheetId = null;

		/**
		 *
		 * @type {{render: string}}
		 */
		View.prototype.events = {};

		/**
		 * render and register events at the end of initialization
		 * @type {boolean}
		 */
		View.prototype.autoRender = true;
		/**
		 * auto mask
		 * @type {boolean}
		 */
		View.prototype.autoMask = true;

		/**
		 *
		 * @type {boolean}
		 */
		View.prototype.rendered = false;

		/**
		 * Array of dependencies
		 * @type {[]}
		 */
		View.prototype.require = [];

		View.prototype.cssPath = null;
		View.prototype.templatePath = null;
		View.prototype.translationPath = null;
		View.prototype.subViewList = null;
		View.prototype.subViewOptions = null;

		View.prototype.buildPartialId = function () {
			return this.fullCamelName;
		};
		/**
		 *
		 * @param param
		 * @deprecated, use object.options internally ore view.getOption()
		 * @returns {*}
		 */
		View.prototype.getParam = function (param) {
			var view = this;
			if (view.params.hasOwnProperty(param)) {
				return view.params[param];
			}
			else {
				return null;
			}
		};

		/**
		 *
		 * @returns {*}
		 */
		View.prototype.initializeFail = function () {
			var view = this;
			Bs.require('Bs.View.Alert', function () {
				Bs.View.Alert.error("", $(view.renderTo));
			});
		};

		/**
		 *
		 * @param option
		 * @return {*|null}
		 */
		View.prototype.getOption = function (option) {
			var view = this;
			if (view.options.hasOwnProperty(option)) {
				return view.options[option];
			}
			else {
				return null;
			}
		};

		/**
		 *
		 * @param key
		 * @param value
		 * @returns {View}
		 */
		View.prototype.setOption = function (key, value) {
			this.options[key] = value;
			return this;
		};

		View.prototype.initialize = function (options) {};

		/**
		 * Take an init object and set properties in class
		 * @param {object} [config]
		 */
		var _initialize = function (config) {
			config = config || {};
			var me = this,
				model, modelListToRequire = [],
				dfdRequire = new $.Deferred(),
				dfdInitialize = new $.Deferred();

			++View.nbInstances;
			me.id += '-' + (View.nbInstances);
			me.zIndex = View.nbInstances;

			// Extend view with options object
			_extend(me, me, config);

			// Add view id to options
			me.options.id = me.id;

			// Store component in Bs
			Bs.storeCmp(me);
			// Prepare HTML element
			me.$el = $('<' + me.elTag + ' />', {
				"id"   : me.id,
				"class": me.elClass + ' bs-view'
			});

			if (me.elStyle) {
				me.$el.css(me.elStyle);
			}

			// Add dependencies
			// if (me.bindData) {
			// 	me.require.push('Bs.DataBinder'); // removed because of async loading issue on collection rendering
			// }

			// Require models if name is given or use existing instances
			//if (options.model.length !== 1 || options.model.getClassName){
			for (var modelName in me.model) {
				if (me.model.hasOwnProperty(modelName) === false) {
					continue;
				}
				if (typeof me.model[modelName] === 'string') {
					modelName = Bs.Util.addPrefixIfMissing('Model', modelName);
					modelListToRequire.push(modelName);
					me.require.push(modelName);
				}
			}
			if (me.require.length) {
				Bs.require(me.require, function () {
					dfdRequire.resolve();
				});
			}
			else {
				dfdRequire.resolve();
			}

			$.when(dfdRequire).then(function () {
				for (var modelProp in me.model) {
					if (me.model.hasOwnProperty(modelProp) === false) {
						continue;
					}
					model = me.model[modelProp];
					if (model instanceof Bs.Model === false) {
						var modelInstance = Bs.create(model);
						delete me.model[model];
						modelInstance.createdByView = true;
						model = modelInstance;
					}
					me.model[model.getNameAsAProperty()] = model;
				}

				// main model only (modelPK is not an array for now)
				if (me.modelPK && me.getModel().createdByView) {
					$.when(me.fetchModel(me.modelPK)).then(function () {
						dfdInitialize.resolve();
					});
				}
				else {
					dfdInitialize.resolve();
				}
			});

			return dfdInitialize;
		};

		/**
		 *
		 * @param pk
		 * @param forceServerFetch
		 * @return {jQuery.Deferred}
		 */
		View.prototype.fetchModel = function (pk, forceServerFetch) {
			var me = this,
				dfd = new $.Deferred,
				model,
				signature = Bs.Model.buildSignature(me.getModel().className, pk);
			if (!forceServerFetch && Bs.Model.isInPool(signature)) {
				model = Bs.Model.getFromPool(signature);
				me.model[model.getNameAsAProperty()] = model;
				dfd.resolve();
			}
			else {
				me.getModel().fetch({
					pk  : pk,
					done: function () {
						dfd.resolve();
					},
					fail: function () {
						dfd.resolve();
						Bs.View.Modal.Alert.Error('danger.msg.notFetched');
						me.options.autoRender = false;
						throw new Error('Unable to autoFetch model');
					}
				});
			}

			return dfd;
		};

		/**
		 *
		 * @param {Model} model
		 */
		View.prototype.setModel = function (model) {
			this.model[model.getNameAsAProperty()] = model;

			return this;
		};

		/**
		 *
		 * @param event
		 * @param callback
		 */
		View.prototype.on = function (event, callback) {
			callback = callback || function () {};
			if (this.triggeredEvents.hasOwnProperty(event)) {
				callback(null, this.triggeredEvents[event]);
				delete this.triggeredEvents[event]
			}
			$(this).on(event, callback);

			return this;
		};

		View.prototype.off = function (event) {
			$(this).off(event);

			return this;
		};

		/**
		 *
		 * @param event
		 * @param callback
		 */
		View.prototype.one = function (event, callback) {
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
		View.prototype.trigger = function (event, params) {
			this.triggeredEvents[event] = params;
			$(this).trigger(event, params);

			return this;
		};

		/**
		 *
		 * @param event
		 * @param params
		 */
		View.prototype.triggerHandler = function (event, params) {
			this.triggeredEvents[event] = params;
			$(this).triggerHandler(event, params);

			return this;
		};

		/**
		 *
		 * @param [modelName] Name of the model to return or first model if omitted
		 * @return {Model}
		 */
		View.prototype.getModel = function (modelName) {
			if (!modelName) {
				//noinspection LoopStatementThatDoesntLoopJS
				for (var name in this.model) {
					if (this.model.hasOwnProperty(name)) {
						if (typeof this.model[name] === 'string') {
							// In case the model has been defined without 'Model.' prefix, the first string entry is still there
							continue;
						}
						return this.model[name];
					}
					return null;
				}
			}
			return this.model.hasOwnProperty(modelName) ? this.model[modelName] : null;
		};

		/**
		 *
		 * @param value
		 * @param [options]
		 * @return {*}
		 */
		View.prototype.t = function (value, options) {
			return Bs.Lang.t(this.translationPath + ':' + value, options);
		};

		/**
		 *
		 * @param compiledTplId
		 * @param {Array|Object|Collection|Function|Model}[data]
		 * @param {afterTranslate} [callback]
		 *
		 * @return {jQuery.Deferred}
		 */
		View.prototype.renderTpl = function (compiledTplId, data, callback) {
			return this.renderCompiledTpl(compiledTplId, data, callback);
		};

		View.prototype.getTpl = function (name, data, ns) {
			var me = this,
				dfd = new $.Deferred(),
				dfdFinal = new $.Deferred(),
				fullName,
				urlTemplate;

			if (!ns) {
				ns = me.urlPath + '/tpl/';
			}
			fullName = ns + '/tpl/' + name;

			if (Handlebars.templates.hasOwnProperty(fullName)) {
				dfd.resolve();
			}
			else {
				urlTemplate = me.urlRoot + '/' + fullName + '.handlebars';
				Bs.Template.load(urlTemplate, fullName).then(function () {
					dfd.resolve();
				});
			}

			dfd.then(function () {
				if (!data) {
					data = {};
				}
				else {
					data = _convertTplData(data)
				}

				if (!Handlebars.templates[fullName]) {
					throw Error('Template "' + fullName + '" Not found');
				}
				_prepareTranslation.call(me, Handlebars.templates[fullName](data), function (htmlAfterNs) {
					var $htmlTranslated = Bs.Lang.translateAll($(htmlAfterNs));
					dfdFinal.resolve($htmlTranslated);
				});
			});

			return dfdFinal;
		};

		/**
		 *
		 * @param compiledTplId
		 * @param data
		 * @param callback
		 */
		View.prototype.renderCompiledTpl = function (compiledTplId, data, callback) {
			var me = this,
				dfd = new $.Deferred(),
				dfdFinal = new $.Deferred(),
				htmlBeforeNs,
				tplFn,
				urlTemplate,
				templateName = me.urlPath + '/tpl/' + compiledTplId;
			if (Handlebars.templates.hasOwnProperty(templateName)) {
				dfd.resolve();
			}
			else {
				urlTemplate = me.urlRoot + '/' + me.urlPath + '/tpl/' + compiledTplId + '.handlebars';
				Bs.Template.load(urlTemplate, templateName).then(function () {
					dfd.resolve();
				});
			}

			dfd.then(function () {
				// No data
				if (typeof data === 'function') {
					callback = data;
					data = {};
				}
				else if (!data) {
					data = {};
				}
				else {
					data = _convertTplData(data)
				}
				callback = callback || function () { };
				tplFn = Handlebars.templates[templateName];
				if (!tplFn) {
					throw Error('Template "#' + compiledTplId + 'Tpl" not found in "' + me.name + '" view');
				}
				htmlBeforeNs = tplFn(data);
				return _prepareTranslation.call(me, htmlBeforeNs, function (htmlAfterNs) {
					var $htmlTranslated = Bs.Lang.translateAll($(htmlAfterNs));
					/**
					 * @callback afterTranslate
					 * @param {jQuery} $el jQuery selector of rendered and translated template
					 */
					callback($htmlTranslated);
					dfdFinal.resolve();
				})
			});

			return dfdFinal;
		};

		View.prototype.getTemplateHtml = function (callback) {
			var me = this, tpl;
			callback = callback || function () {};
			tpl = (typeof me.tpl === 'function') ? me.tpl(_convertTplData(me.getTplData())) : me.tpl;
			_prepareTranslation.call(me, tpl, function (tplHtml) {
				callback(tplHtml)
			});
		};

		var _renderer = function ($renderTo) {
			var me = this,
				dfd = new $.Deferred;

			$renderTo = $renderTo || $(me.renderTo);

			if (me.isRendered()) {
				console.warn('View "' + me.name + '" is already rendered');
				return dfd.resolve();
			}

			if ($renderTo.length === 0) {
				console.info($renderTo);
				throw new Error('View "' + me.name + '" cannot be rendered in renderTo element');
			}

			me.$el.appendTo($renderTo);
			me.$el.attr('data-view', true);
			me.$el.data('view', me);

			me.trigger('beforeRender');

			if (me.autoMask) {
				me.mask();
			}

			me.getTemplateHtml(function (tplHtml) {
				me.$el.append(tplHtml);
				// Register events
				me.addEvents(me.events);
				me.translate();
				me.trigger('beforeCreateSubView');
				me.createSubViews(function () {
					// TODO manage rendered with Deferred in subViews
					me.rendered = true;
					if (me.bindData) {
						me.trigger('beforeDataBind');
						me.dataBinder = Bs.create('Bs.DataBinder', {view: me});
					}
					if (me.autoMask) {
						me.unmask();
					}

					dfd.resolve();
				});
			});

			return dfd;
		};
		/**
		 * Render View in DOM
		 */
		View.prototype.render = function (renderTo) {
			var me = this;
			if (renderTo) {
				me.renderTo = $(renderTo);
			}
			return _renderer.call(this, me.renderTo).then(function () {
				me.trigger('afterRender');
			});
		};

		/**
		 * Reset View (re-render)
		 */
		View.prototype.reset = function () {
			var me = this;
			me.getTemplateHtml(function (tplHtml) {
				me.$el.html(tplHtml);
				// Register events
				//me.addEvents(me.events);
				me.translate();
				//me.trigger('beforeCreateSubView');
				me.createSubViews(function () {
					// TODO manage rendered with Deferred in subViews
					me.rendered = true;
					if (me.bindData) {
						//me.trigger('beforeDataBind');
						me.dataBinder = Bs.create('Bs.DataBinder', {view: me});
					}
					if (me.autoMask) {
						me.unmask();
					}
					me.afterRender();
				});
			});
		};

		/**
		 *
		 */
		View.prototype.translate = function () {
			var me = this;
			Bs.Lang.translateAll(me.$el);
		};

		/**
		 * Creation of subViews declared in HTML from data-attributes
		 * Supports data-create="My.View"
		 * Supports data-options='{"id":"myId","elTag":"p"}'
		 * Supports options in me.subViewOptions["Name.Of.View"]
		 *
		 * @param [callback]
		 */
		View.prototype.createSubViews = function (callback) {
			callback = callback || function () { };
			var me = this,
				$container, className, $subViews, require = [], options = [], initialOptions, queue = 0;

			$subViews = this.$el.find('[data-create]');

			if ($subViews.length === 0) {
				callback();
				return;
			}

			$subViews.each(function (index, el) {
				$container = $(el);
				className = $container.data('create');
				if (!className) {
					return true;
				}

				initialOptions = me.getSubViewOptions(className);
				initialOptions.renderTo = $container;

				// Build id of subView, automatically or specified by dev
				if ($container.data('id')) {
					initialOptions["id"] = $container.data('id');
				}

				// Model
				var dataModel = $container.data('model');
				if (dataModel) {
					if (dataModel === true) {
						initialOptions["model"] = me.getModel();
					}
					else {
						initialOptions["model"] = me.getModel().get(dataModel);
					}
				}

				// ModelPK
				var dataModelPK = $container.data('modelpk');
				if (dataModelPK) {
					initialOptions["modelPK"] = dataModelPK;
				}

				// Single option
				// TODO

				// Options
				if (typeof $container.data('options') === "object") {
					options.push($.extend({}, $container.data('options'), initialOptions));
				}
				else {
					options.push(initialOptions);
				}
				require.push(className);
			});

			queue = require.length;
			if (queue) {
				Bs.require(require, function () {
					var subView,
						dfd = new $.Deferred();
					for (var i = 0, view; view = require[i]; i++) {
						subView = Bs.create(view, options[i]);
						// TODO should be on("ready") but need to make sure all afterRender trigger a "ready" event
						subView.on('afterRender', function () {
							--queue;
							if (queue === 0) {
								dfd.resolve();
							}
						});
						me.subViewList[options[i].id || view] = subView;
					}
					$.when(dfd).then(function () {
						callback();
					});
				});
			}
			else {
				callback();
			}

		};

		/**
		 *
		 * @param [subView] specific id or class name
		 * @returns {View}
		 */
		View.prototype.getSubView = function (subView) {
			if (!subView) {
				for (var key in this.subViewList) {
					if (this.subViewList.hasOwnProperty(key) === false) {
						continue;
					}
					return this.subViewList[key];
				}
			}
			return this.subViewList[subView]
		};

		/**
		 * After full view has rendered
		 */
		View.prototype.onafterRender = function () {
			// User implemented
		};
		/**
		 * After full view has rendered
		 */
		View.prototype.afterRender = function () {
			// User implemented
			this.trigger('ready');
		};
		/**
		 * After renderTo element has been created, before view content
		 */
		View.prototype.beforeRender = function () {
			// User implemented
		};

		/**
		 * Before destruction, view still exists
		 */
		View.prototype.beforeDestroy = function () {
			// User implemented
		};

		/**
		 *
		 * @returns {boolean}
		 */
		View.prototype.isRendered = function () {
			return this.rendered === true;
		};

		View.prototype.hide = function ($el) {
			//TODO
		};

		View.prototype.show = function ($el) {
			//TODO
		};

		View.prototype.triggeredEvents = null;
		/**
		 *
		 * @param [text]
		 * @param [$el]
		 * @returns {View}
		 */
		View.prototype.mask = function (text, $el) {
			var me = this;

			$el = $el ? me.$el.find($($el)) : me.$el;

			if ($el.length === 0) {
				return me;
			}

			// Remove previous mask, usefull in case you re-mask with new text
			$el.find('.bs-view-loading').remove();

			Bs.create("Bs.View.Loading", {
				text    : text,
				renderTo: $el
			});
			return me;
		};

		/**
		 *
		 * @returns {View}
		 * @param [$el]
		 * @param noFade
		 * @param callback
		 */
		View.prototype.unmask = function ($el, noFade, callback) {
			var me = this;
			$el = $el ? me.$el.find($($el)) : me.$el;

			if (noFade) {
				$el.find('.bs-view-loading').remove();
				if (callback) {
					callback();
				}
			}
			else {
				$el.find('.bs-view-loading').fadeOut(function () {
					$(this).remove();
					if (callback) {
						callback();
					}
				});
			}
			return me;
		};

		View.prototype.close = function () {
			this.destroy();
		};

		/**
		 * Remove view from DOM
		 */
		View.prototype.destroy = function (callback) {
			var me = this, subView;
			callback = callback || function () {};

			// Model Reset
			if (me.bindData) {
				var model = me.getModel();
				if (typeof model === "object" && model !== null && model.isNew && model.isNew() === false) {
					model.reset()
				}
			}

			// Children
			if (me.isRendered()) {
				me.$el.find('[data-view]').each(function () {
					if (me === $(this).parent().closest("[data-view]").data('view')) {
						subView = $(this).data('view');
						subView.destroy.call(subView);
					}
				});
			}

			// Main view
			me.trigger('beforeDestroy');
			if (me.isRendered()) {
				me.$el.remove();
			}
			Bs.removeCmp(me.id);
			me.off();
			callback();
			me.trigger('afterDestroy');
		};

		View.prototype.formToObject = function (form) {
			var o = {};
			var a = $(form).serializeArray();
			$.each(a, function () {
				if (o[this.name] !== undefined) {
					if (!o[this.name].push) {
						o[this.name] = [o[this.name]];
					}
					o[this.name].push(this.value || '');
				} else {
					o[this.name] = this.value || '';
				}
			});
			return o;
		};

		/**
		 * Simple HTML5 InputForm Validation
		 *
		 * @param form InputForm DOM Element
		 * @param e submit event
		 *
		 * @return boolean
		 */
		View.prototype.validateForm = function (e, form) {
			var validity;

			if (!form.checkValidity) {
				console.warn('checkValidity is not supported by browser, todo implement manual check');
				e.preventDefault();
				return true;
			}
			validity = form.checkValidity();
			if (!validity) {
				$('<input type="submit">').hide().appendTo($(form)).click().remove();
			}
			e.preventDefault();

			return validity;
		};

		View.prototype.disableInputs = function () {
			this.$el.find(':input').prop('disabled', true).addClass('disabled');
		};

		View.prototype.enableInputs = function () {
			this.$el.find(':input').prop('disabled', false).removeClass('disabled');
		};

		View.prototype.selectText = function (el) {
			var range, selection;
			if (window.getSelection) {
				selection = window.getSelection();
				range = document.createRange();
				range.selectNodeContents(el);
				selection.removeAllRanges();
				selection.addRange(range);
			} else if (document.body.createTextRange) {
				range = document.body.createTextRange();
				range.moveToElementText(el);
				range.select();
			}
		};

		/**
		 *
		 * @param {Object} events
		 */
		View.prototype.addEvents = function (events) {
			var view = this,
				event,
				target,
				fnName,
				fn,
				origin;

			for (var key in events) {
				if (!events.hasOwnProperty(key)) {
					continue;
				}
				fnName = events[key];
				event = key.substr(0, key.indexOf(' '));
				target = key.substr(key.indexOf(' ') + 1);

				fn = (typeof fnName === 'function') ? fnName : view[fnName];
				if (typeof fn !== 'function') {
					console.warn('Unable to register function ' + fnName);
					console.trace();
					throw Error('Unable to register function ' + fnName);
				}
				// View event
				if (!event) { // If event is empty, assume elSelector will contains event name
					event = target;
					target = null;
					origin = $(this)
				}
				// DOM event
				else {
					origin = this.$el;
				}

				(function (view, event, fn, target, origin) {
					// LISTENER
					origin.on(event, target, function (e) {
						var args = $.extend(true, [], arguments);
						args.push(this);
						fn.apply(view, args);
					});
				})(view, event, fn, target, origin);

			}
		};

		/**
		 * Return data passed to th main tpl on render
		 * Can be overriden
		 *
		 * @returns {Object}
		 */
		View.prototype.getTplData = function () {
			return this.options;
		};

		// var _isSameMethodAsParent = function(childMethod, parentMethod){
		// 	return  childMethod === parentMethod
		// };

		/**
		 *  Call View (not necessary parent, be careful, TODO rename !!!
		 * @param method
		 * @param params
		 * @return {*}
		 */
		View.prototype.callParent = function (method, params) {

			// TODO un truc qui marche
			// var parentClass, childMethod,parentMethod, cleanArgs;
			//
			// childMethod = this[method];
			// parentClass = Bs.getClass(this.extend);
			// parentMethod = parentClass.prototype[method];
			//
			// // PAS BON
			// if(this.extend === "Bs.View"){
			// 	console.log("VIEW")
			// 	return new $.Deferred().resolve();
			// }
			//
			//
			// while(_isSameMethodAsParent(childMethod, parentMethod)){
			// 	// return;
			// 	childMethod = parentMethod;
			// 	parentClass = Bs.getClass(parentClass.prototype.extend);
			// 	// PAS BON
			// 	// if(this.extend === "Bs.View"){
			// 	// 	console.log("VIEW")
			// 	// 	return new $.Deferred().resolve();
			// 	// }
			// 	parentMethod = parentClass.prototype[method]
			// }
			//
			// // Call Parent with args
			// if(params) {
			// 	cleanArgs = Array.prototype.slice.call(arguments, 1);
			// }
			// else{
			// 	cleanArgs = null;
			// }
			//
			// return parentMethod.call(this, cleanArgs);

			var result;
			// Parent has already been called, do not call again (infinite loop), call parent of parent
			if (_currentParentCallContext === this.extend) {
				_currentParentCallContext = Bs.getClass(_currentParentCallContext).prototype.extend
			}
			// Parent has never been called
			else {
				_currentParentCallContext = this.extend;
			}
			// Call Parent with args
			var cleanArgs = Array.prototype.slice.call(arguments, 1);
			result = Bs.getClass(_currentParentCallContext).prototype[method].apply(this, cleanArgs);

			if (result && "then" in result) {
				result.then(function () {
					_currentParentCallContext = null;
				})
			}
			else {
				_currentParentCallContext = null;
			}

			// Reset context, we're now outside recursion scope
			// _currentParentCallContext = null;

			return result;
		};

		/**
		 *
		 * @param urlTemplate
		 */
		View.prototype.loadAdditionalScriptTemplate = function (urlTemplate) {
			var me = this;
			urlTemplate = urlTemplate || me.urlRoot + '/' + me.urlPath + '/' + me.camelName + '.handlebars';
			return Bs.Template.load(urlTemplate, me.fullCamelName, true);
		};

		/**
		 *
		 * @param subView
		 * @param options
		 */
		View.prototype.setSubViewOptions = function (subView, options) {
			var me = this;
			me.subViewOptions[subView] = options;
			return me;
		};

		View.prototype.getSubViewOptions = function (subView) {
			var me = this;
			if (me.subViewOptions.hasOwnProperty(subView)) {
				return me.subViewOptions[subView];
			}
			return {};
		};

		/**
		 * Define a new Class derived from View
		 *
		 * @static
		 * @param className
		 * @param options
		 * @param callback
		 * @return {View}
		 */
		View.define = function (className, options, callback) {
			callback = callback || function () {};
			var parent = this,
				Surrogate = function View() { },
				View = function View() {
					return parent.apply(this, arguments);
				};

			View.define = parent.define;
			Surrogate.prototype = parent.prototype;
			View.prototype = new Surrogate;

			if (options.abstract) {
				View.prototype.hasStylesheet = false;
				View.prototype.hasTranslation = false;
				View.prototype.hasTemplate = false;
			}

			_extend(View.prototype, parent.prototype, options);

			// View.prototype.model =  $.extend(true, {}, parent.prototype.model, options.model);
			View.prototype.name = className;
			View.prototype.fullCamelName = _classNameToCamelCase(className);
			View.prototype.urlPath = View.prototype.name.replace(/\./g, "/");
			View.prototype.id = View.prototype.name.replace(/\./g, "-").toLowerCase();
			View.prototype.elClass += ' ' + View.prototype.id;
			var file = View.prototype.name.split('.');
			View.prototype.fileName = file[file.length - 1];
			View.prototype.urlRoot = (file[0] === 'Bs') ? Bs.getConfig().urlCore : Bs.getConfig().urlApp;

			// Translations
			if (options.translationPath === 'inherit') {
				View.prototype.translationPath = parent.prototype.translationPath
			}
			else {
				View.prototype.translationPath = options.translationPath || View.prototype.urlPath;
			}

			var f = View.prototype.fileName.charAt(0).toLowerCase();
			View.prototype.camelName = f + View.prototype.fileName.substr(1);

			// Style
			if (options.cssPath === 'inherit') {
				View.prototype.cssPath = parent.prototype.cssPath
			}
			else {
				View.prototype.cssPath = options.cssPath || (View.prototype.urlPath + '/' + View.prototype.camelName + '.css');
			}
			if (Bs.isAsync()) {
				// Template
				var dfdTemplate;
				if (options.templatePath === 'inherit') {
					View.prototype.templatePath = parent.prototype.templatePath;
					dfdTemplate = new $.Deferred().resolve();
				}
				else {
					View.prototype.templatePath = options.templatePath || (View.prototype.urlPath + '/' + View.prototype.camelName + '.handlebars');
					dfdTemplate = _loadMainTemplate.call(View.prototype);
				}

				var dfdTranslation = _loadTranslation.call(View.prototype);
				var dfdStylesheet = _loadStylesheet.call(View.prototype);
				$.when(dfdTranslation, dfdTemplate, dfdStylesheet).then(function () {
					View.prototype.hasTranslation = true;
					View.prototype.hasTemplate = true;
					View.prototype.hasStylesheet = true;
					callback(View);
				});
			}
			else {
				var tplName;
				if (options.templatePath === 'inherit') {
					View.prototype.templatePath = parent.prototype.templatePath;
					tplName = parent.prototype.urlPath + '/' + parent.prototype.camelName
				}
				else {
					View.prototype.templatePath = options.templatePath || (View.prototype.urlPath + '/' + View.prototype.camelName + '.handlebars');
					tplName = View.prototype.urlPath + '/' + View.prototype.camelName
				}
				View.prototype.hasTranslation = true;
				View.prototype.hasTemplate = true;
				View.prototype.hasStylesheet = true;
				if (Handlebars.templates.hasOwnProperty(tplName)) {
					View.prototype.tpl = Handlebars.templates[tplName];
				}
				return View;
			}
		};

		// Private part

		var _currentParentCallContext = null;

		var _cleanModelSyntax = function (model, parent) {
			var cleanModel = {};
			// Model is an instance of Model
			if (typeof model === 'object' && model.getClassName) {
				if (typeof parent.model === 'object' && parent.model !== null && parent.model.hasOwnProperty(model.getClassName())) {
					delete parent.model[model.getClassName()];
				}
				cleanModel[model.getNameAsAProperty()] = model;
			}
			// Model is a simple string
			else {
				cleanModel[model] = model;
			}
			return cleanModel;
		};
		/**
		 *
		 * @param child {Object}
		 * @param parent {Object}
		 * @param config
		 * @private
		 */
		var _extend = function (child, parent, config) {
			var cloneConfig = $.extend({}, config);
			if (typeof config.require === 'string') {
				config.require = [config.require];
			}

			// Transform config string/model into array
			config.model = config.model || [];
			if ($.isArray(config.model) === false) {
				config.model = [config.model];
			}

			// Transform simple array into object
			// need to extend because some prototype sharing troubles (i.e. Collection.Item)
			child.model = child.model ? $.extend(true, {}, child.model) : {};
			for (var i = 0, modelName; modelName = config.model[i]; i++) {
				// String or model ?
				if (typeof modelName === 'object') {
					child.model[modelName.className] = modelName;
				}
				else {
					child.model[modelName] = modelName;
				}
			}

			child.data = $.extend(true, {}, parent.data, config.data);
			// todo : remove, use options instead
			child.params = $.extend(true, {}, parent.params, config.params);
			child.options = $.extend(true, {}, parent.options, config.options);
			child.events = $.extend(true, {}, parent.events, config.events);
			child.require = Bs.Util.arrayUnion(parent.require, config.require);
			child.triggeredEvents = {};
			child.subViewList = {};
			child.subViewOptions = {};

			// Special string extend
			if (config.elClass) {
				child.elClass += ' ' + config.elClass;
			}

			cloneConfig.options = undefined;
			cloneConfig.model = undefined;
			cloneConfig.data = undefined;
			cloneConfig.params = undefined;
			// cloneConfig.events = undefined; // Commented because it breaks some things...
			cloneConfig.require = undefined;
			cloneConfig.elClass = undefined;

			for (var key in cloneConfig) {
				if (cloneConfig.hasOwnProperty(key) === false || cloneConfig[key] === undefined || key === "events") {
					continue;
				}
				if (key in child.options) {
					if (cloneConfig[key] !== null && $.isPlainObject(cloneConfig[key])) {
						child.options[key] = $.extend(true, {}, child.options[key], cloneConfig[key]);
					} else {
						child.options[key] = cloneConfig[key];
					}
				}
				else {
					child[key] = cloneConfig[key];
				}
			}
		};

		/**
		 * @private
		 * @param el
		 * @param [callback]
		 * @return {jQuery.Deferred}
		 */
		var _prepareTranslation = function (el, callback) {
			callback = callback || function () {};

			var dfd = new $.Deferred(),
				me = this,
				requiredNs = [],
				value,
				prefixPos,
				prefix = '',
				$el = $(el),
				$wrapper = $('<div/>').html($el);

			if (this.hasTranslation === false) {
				callback($wrapper.html());
				dfd.resolve();
				return dfd;
			}

			$wrapper.find('[data-i18n]').each(function () {
				prefix = '';
				value = $(this).attr('data-i18n').split(';');

				for (var i in value) {
					if (value.hasOwnProperty(i)) {
						if (value[i].indexOf(':') === -1) {

							var currentNsValue = value[i];
							prefixPos = currentNsValue.indexOf(']');
							if (prefixPos > -1) {
								prefixPos++;
								prefix = currentNsValue.substring(0, prefixPos);
								currentNsValue = currentNsValue.substring(prefixPos);
							}

							var currentNsToken = prefix + me.translationPath + ':' + currentNsValue;
							if (i > 0) {
								$(this).attr('data-i18n', $(this).attr('data-i18n') + ';' + currentNsToken);
							} else {
								$(this).attr('data-i18n', currentNsToken);
							}
						}
						else {
							var ns = value[i].substring(0, value[i].indexOf(':'));
							prefixPos = ns.indexOf(']');
							if (prefixPos > -1) {
								prefixPos++;
								prefix = ns.substring(0, prefixPos);
								ns = ns.substring(prefixPos);
							}

							if (requiredNs.indexOf(ns) === -1) {
								requiredNs.push(ns);
							}
						}
					}
				}
			});
			if (requiredNs.length) {
				Bs.Lang.loadNamespaces(requiredNs, function () {
					callback($wrapper.html());
					dfd.resolve();
				});
			}
			else {
				callback($wrapper.html());
				dfd.resolve();
			}

			return dfd;
		};

		var _loadStylesheet = function () {
			var me = this,
				dfd = new $.Deferred(), url;

			if (me.hasStylesheet) {
				url = me.urlRoot + '/' + me.cssPath;
				return Bs.Stylesheet.load(url);
			}
			else {
				return dfd.resolve();
			}
		};

		var _loadTranslation = function () {
			var me = this,
				dfd = new $.Deferred();

			if (me.hasTranslation) {
				Bs.Lang.loadNamespace(me.translationPath, me.urlRoot, function () {
					dfd.resolve();
				});
				return dfd;
			}
			else {
				return dfd.resolve();
			}
		};

		/**
		 * @private
		 * @returns {$.Deferred}
		 */
		var _loadMainTemplate = function () {

			var view = this,
				urlTemplate,
				tplName = view.urlPath + '/' + view.camelName,
				dfd = new $.Deferred();

			if (!view.hasTemplate) {
				return dfd.resolve();
			}

			if (Handlebars.templates.hasOwnProperty(tplName)) {
				view.tpl = Handlebars.templates[tplName];
				return dfd.resolve();
			}
			else {
				urlTemplate = view.urlRoot + '/' + view.templatePath;
				Bs.Template.load(urlTemplate, view.urlPath + '/' + view.camelName).then(function () {
					view.tpl = Handlebars.templates[tplName];
					return dfd.resolve();
				});
			}
		};

		/**
		 *
		 * @param data
		 * @returns {*}
		 * @private
		 */
		var _convertTplData = function (data) {
			var convertedData;

			if (data === null) {
				return data;
			}
			// Data is a simple array
			if ($.isArray(data)) {
				return data;
			}
			// Data is a Model/Collection
			if (data.toObject) {
				return data.toObject(true);
			}
			// Data is a simple object
			convertedData = {};
			for (var key in data) {
				if (data.hasOwnProperty(key) === false || data[key] === null) {
					continue;
				}
				if (typeof data[key] === 'object') {
					if (data[key].toObject) {
						convertedData[key] = data[key].toObject(true);
					}
					else {
						convertedData[key] = data[key];
					}
				}
				else {
					convertedData[key] = data[key];
				}
			}

			return convertedData;
		};

		var _classNameToCamelCase = function (className) {
			var fullCamelName = className.replace(/\.(.)/g, function (match, group1) {
				return group1.toUpperCase();
			});
			var f = fullCamelName.charAt(0).toLowerCase();
			return f + fullCamelName.substr(1);
		};

		return View;
	}

});
