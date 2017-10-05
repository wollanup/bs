this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["Bs/View/Alert/alert"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " alert-dismissible";
},"3":function(container,depth0,helpers,partials,data) {
    return "	<button style=\"position: relative; z-index: 2\" type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<h4 "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.translateTitle : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n				"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n			</h4><br>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-i18n=\""
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "\"";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-i18n=\""
    + container.escapeExpression(((helper = (helper = helpers.msg || (depth0 != null ? depth0.msg : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"msg","hash":{},"data":data}) : helper)))
    + "\"";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.msg || (depth0 != null ? depth0.msg : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"msg","hash":{},"data":data}) : helper))) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"alert alert-"
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dismissible : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" role=\"alert\">\n	<div style=\"position: absolute;top: 0;bottom: 0;left: 0;right: 0;overflow: hidden;z-index:1\">\n		<i style=\"position: absolute;bottom: -30px;right:-30px;font-size:10em;opacity: .2;display:none\" class=\"alert-icon "
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\"></i>\n	</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dismissible : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<div style=\"position: relative; z-index: 2\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasTitle : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		<div class=\"content\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.translate : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n			"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.translate : depth0),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["Bs/View/Alert/Toast/toast"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " toast-dismissible";
},"3":function(container,depth0,helpers,partials,data) {
    return "	<button style=\"position: relative; z-index: 2\" type=\"button\" class=\"close\" data-dismiss=\"toast\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<h4 "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.translateTitle : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n				"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n			</h4><br>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-i18n=\""
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "\"";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-i18n=\""
    + container.escapeExpression(((helper = (helper = helpers.msg || (depth0 != null ? depth0.msg : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"msg","hash":{},"data":data}) : helper)))
    + "\"";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.msg || (depth0 != null ? depth0.msg : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"msg","hash":{},"data":data}) : helper))) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"toast toast-"
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dismissible : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" role=\"alert\">\n	<div style=\"position: absolute;top: 0;bottom: 0;left: 0;right: 0;overflow: hidden;z-index:1\">\n		<i style=\"position: absolute;bottom: -30px;right:-30px;font-size:10em;opacity: .2;display:none\" class=\"alert-icon "
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + " text-"
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\"></i>\n	</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dismissible : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<div style=\"position: relative; z-index: 2\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasTitle : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		<div class=\"content\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.translate : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n			"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.translate : depth0),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["Bs/View/Collection/Empty/empty"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"text-center text-muted\">\n	<div style=\"margin: 30px 0\">\n		<span class=\"fa fa-meh-o fa-5x\" style=\"opacity: .4\"></span>\n		<div style=\"margin-top: 15px\">\n			<i data-i18n=\"nothingToDisplay\"></i>\n		</div>\n\n	</div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["Bs/View/Collection/Error/error"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"text-center text-danger\">\n	<div style=\"margin: 30px 0\">\n		<span class=\"fa fa-warning fa-5x\" style=\"opacity: .4\"></span>\n		<div style=\"margin-top: 15px\">\n			<i data-i18n=\"error\"></i>\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["Bs/View/Loading/loading"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"loading-spinner-outer\">\n	<div class=\"spinner\">\n		<div class=\"bounce1\"></div>\n		<div class=\"bounce2\"></div>\n		<div class=\"bounce3\"></div>\n	</div>\n</div>\n<div class=\"loading-text\">"
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["Bs/View/Modal/modal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "						<button type=\"button\" class=\"close pull-right view-close\" data-dismiss=\"modal\"\n						        aria-label=\"Close\">\n							<small class=\"text-uppercase\" data-i18n=\"close\"></small>\n							<span class=\"fa fa-times-thin\"></span>\n						</button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "no-padding";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"modal fade\">\n	<div class=\"modal-dialog\">\n		<div class=\"modal-content\">\n			<div class=\"modal-header\">\n				<h4 class=\"modal-title text-primary\">\n					<span class=\"modal-title-main\" data-i18n=\"title\"></span>\n					<small class=\"modal-title-sub\" data-i18n=\"subTitle\"></small>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.closable : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</h4>\n			</div>\n			<div class=\"modal-body "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.bodyPadding : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n				<div class=\"modal-icon-wrap\">\n					<i class=\"modal-icon text-primary\"></i>\n				</div>\n				<div class=\"view-content\" data-create></div>\n			</div>\n		</div>\n	</div>\n</div>\n";
},"useData":true});
+function ($) {
	'use strict';

	(function IE8Compatibility() {
		if (!window.console) {
			window.console = {};
			window.console.log = function () {};
			window.console.warn = function () {};
			window.console.error = function () {};
			window.console.info = function () {};
		}
		if (!Array.prototype.indexOf) {
			Array.prototype.indexOf = function (obj, start) {
				for (var i = (start || 0), j = this.length; i < j; i++) {
					if (this[i] === obj) {
						return i;
					}
				}
				return -1;
			};
		}
	})();

	var _async = false;

	var Bs = {};

	/**
	 *
	 * @param bool
	 * @return {Bs}
	 */
	Bs.async = function (bool) {
		_async = bool;
		return this;
	};
	/**
	 *
	 * @return {boolean}
	 */
	Bs.isAsync = function () {
		return _async;
	};

	Bs.init = function (config) {
		_initialized = new $.Deferred();
		this.setConfig(config);

		$(function () {
			_async = true;
			_initialized.resolve();
		});
	};

	/**
	 *
	 * @param callback
	 */
	Bs.ready = function (callback) {
		if (_initialized === null) {
			console.error('Bs has not been initialized. Please call Bs.init()');
			return;
		}
		$.when(_initialized).then(function () {
			callback();
		});
	};

	/**
	 * @param config {{}}
	 */
	Bs.setConfig = function (config) {
		$.extend(_config, config);
		Bs.setDebug(_config.debug);
		if(_config.dev){
			Bs.setDev(true);
		}
	};

	/**
	 *
	 * @param {boolean} debug
	 */
	Bs.setDebug = function (debug) {
		_config.debug = debug;
		if (debug) {
			Bs._dependenciesLoaded = _dependenciesLoaded;
			Bs._store = _store;
			Bs._storeLib = _storeLib;
			Bs._dependencies = _dependencies;
		}
		else {
			Bs._dependenciesLoaded = undefined;
			Bs._store = undefined;
			Bs._storeLib = undefined;
			Bs._dependencies = undefined;
		}
	};

	/**
	 *
	 * @param distPackages
	 * @param devClasses devClasses or callback
	 * @param callback
	 */
	Bs.requirePackage = function (distPackages, devClasses, callback) {
		var dfdJs, dfdCss;
		var dfds = [];

		if (typeof devClasses === 'function') {
			callback = devClasses;
			devClasses = [];
		}
		if (typeof devClasses === 'string') {
			devClasses = [devClasses];
		}

		callback = callback || function () {};

		if (Bs.isDev()) {
			if(devClasses.length){
				Bs.require(devClasses, callback);
			}
			else{
				callback();
			}
			return;
		}

		if (typeof distPackages === "string") {
			distPackages = [distPackages];
		}
		_async = false;
		for (var i = 0, aPackage; !!(aPackage = distPackages[i]); i++) {

			// JS
			dfdJs = _getScript(_config.urlDist + '/' + aPackage + '.min.js');
			(function (packageName) {
				dfdJs.fail(function (jqXHR, errorType, error) {
					console.error("Error in \"" + packageName + "\" package JS : " + errorType);
					throw error;
				});
			}(aPackage));
			dfds.push(dfdJs);

			// CSS
			dfdCss = Bs.Stylesheet.load(_config.urlDist + '/' + aPackage + '.min.css');
			(function (packageName) {
				dfdCss.fail(function (jqXHR, errorType, error) {
					console.error("Error in \"" + packageName + "\" package CSS: " + errorType);
					throw error;
				});
			}(aPackage));
			dfds.push(dfdCss);
		}
		$.when.apply($, dfds).then(function () {
			_async = true;
			callback();
		});
	};

	/**
	 *
	 * @param classes
	 * @param {requireCallback} [callback]
	 * @return {Bs}
	 */
	Bs.require = function (classes, callback) {
		var index;

		/**
		 * @callback requireCallback
		 * @param {string|[]} required class or classes
		 */
		callback = callback || function () {};

		_requireProgress.push(new $.Deferred());

		index = _requireProgress.length - 1;
		if (index === 0) {
			_doRequire(classes, callback, index);
		}
		else {
			$.when(_requireProgress[index - 1]).then(function () {
				_doRequire(classes, callback, index);
			});
		}

		return Bs;
	};

	var _doRequire = function doRequire(classes, callback, index) {

		var callbackArgs = [];
		_dependenciesLoaded[index] = new $.Deferred();
		_dependencies = {};

		if (typeof classes === 'string') {
			classes = [classes];
		}

		if (!classes.length) {
			callback.apply(null, []);
			return Bs;
		}

		for (var i = 0, className; className = classes[i]; i++) {
			_requireOne(className);
			(function (className) {
				callbackArgs.push(function (options) {
					return Bs.create(className, options)
				});
			})(className);
		}

		// Case everything is already defined (so, _dependencies is empty ran synchronously)
		_resolveDependenciesIfEmpty(index);
		$.when(_dependenciesLoaded[index]).then(function () {
			_requireProgress[index].resolve();
			_requireProgress[index] = null;
			_log(classes.join(', ') + ' READY');
			callback.apply(null, callbackArgs);
		});
	};

	var _requireLib = function (libs) {
		var lib, total = 0, done = 0, dfd = new $.Deferred();
		for (lib in libs) {
			if (libs.hasOwnProperty(lib)) {
				if (_storeLib.hasOwnProperty(lib)) {
					delete libs[lib];
				} else {
					total++;
				}
			}
		}
		if (total === 0) {
			dfd.resolve();
		}
		else {
			dfd.progress(function () {
				done++;
				if (done === total) {
					dfd.resolve();
				}
			});
			for (lib in libs) {
				if (libs.hasOwnProperty(lib)) {
					(function (oneLib) {
						var url = _config.urlApp + '/' + libs[oneLib];
						_getScript(url)
							.done(function () {
								_storeLib[oneLib] = true;
								dfd.notify();
							})
							.fail(function () {
								throw new Error('[Bs] Required lib ' + oneLib + ' at ' + url + ' not found or error during JS eval.');
							});
					})(lib);
				}
			}
		}

		return dfd;
	};

	/**
	 *
	 * @param className
	 * @param {Object} definition
	 * @param {defineCallback} [callback]
	 */
	Bs.define = function (className, definition, callback) {
		callback = callback || function () {};

		if (!_async) {
			_defineSync(className, definition);
			callback(_store[className]);
			return;
		}

		var dependencies,
			dfdRequiredLib,
			requiredDependencies;

		_log(className + ' is being defined, check for dependencies');

		definition = $.extend({}, _definition, definition);
		definition.require = _arrayFromString(definition.require);

		// Libs
		dfdRequiredLib = _requireLib(definition.requireLib);

		// Build array of dependencies (require + extend)
		dependencies = definition.require;
		if (definition.extend) {
			dependencies = Bs.Util.arrayUnion(dependencies, [definition.extend]);
		}

		// Build array of non already defined dependencies
		requiredDependencies = _filterNonDefinedClasses(dependencies);

		// Require all dependencies if have some...
		if (requiredDependencies.length) {
			_log(requiredDependencies + ' dependencies found for ' + className);
			for (var i = 0, requiredDependency; requiredDependency = requiredDependencies[i]; i++) {
				_requireOne(requiredDependency, null, className);
			}
		}
		// ... or resolve main class if no dependency
		else {
			_addDependencies(className);
			_dependencies[className].dfdRequire.resolve();
			_log('No dependency found for ' + className);
		}

		// When all dependencies are loaded, we can finalize define
		$.when(_dependencies[className].dfdRequire, dfdRequiredLib).then(function () {
			_log('All dependencies have been loaded for ' + className);

			if (definition.extend) {
				var dfd = new $.Deferred();
				if (_store[definition.extend]) {
					dfd.resolve();
				}
				else {
					_waitUntilLoaded(definition.extend, dfd);
				}
				$.when(dfd).then(function () {
					_store[definition.extend].define(className, definition, function (definedClass, require) {
						if (require && require.length) {
							for (var j = 0, requiredDependency; requiredDependency = require[j]; j++) {
								// // Do not add loop references
								if (!_dependencies.hasOwnProperty(requiredDependency)) {
									_requireOne(requiredDependency);
								}
							}
							$.when(_dependencies[className].dfdRequire).then(function () {
								_afterDefine(definedClass, className, callback);
								_dependencies[className].dfdDefine.resolve();
								callback(_store[className]);
							});
						}
						else {
							_afterDefine(definedClass, className, callback);
							_dependencies[className].dfdDefine.resolve();
							callback(_store[className]);
						}
					});
				});
			}
			else {
				_afterDefine(definition, className, callback);
				_dependencies[className].dfdDefine.resolve();
				callback(_store[className]);
			}

		});
	};

	/**
	 *
	 * @param className
	 * @param [config]
	 * @return {Model|View|*}
	 */
	Bs.create = function (className, config) {
		if (_isDefined(className) === false) {
			throw new Error('Unable to create "' + className + '" not previously loaded, use "Bs.require()" before');
		}

		// Force removing from queue and dependencies, in case of define without require
		_removeFromQueue(className);
		delete _dependencies[className];

		if (typeof _store[className] === 'function') {
			return new _store[className](config);
		}
		else {
			return _store[className];
		}
	};

	/**
	 * @todo remove all references (window, alias, CSS loaded)
	 * @param className
	 */
	Bs.unload = function (className) {
		delete _store[className];
	};

	/**
	 *
	 * @param [key]
	 * @returns {*|null}
	 */
	Bs.getConfig = function (key) {
		if (key) {
			return _config.hasOwnProperty(key) ? _config[key] : null;
		}
		return _config;
	};

	/**
	 *
	 * @return {boolean}
	 */
	Bs.isDebug = function () {
		return _config.debug;
	};

	/**
	 * Add an instance
	 * @param instance
	 */
	Bs.storeCmp = function (instance) {
		_cmpStore[instance.id] = instance;
	};

	/**
	 *
	 * @param {string} instanceId
	 * @param successFn
	 * @param notFoundFn
	 * @return {*}
	 */
	Bs.getCmp = function (instanceId, successFn, notFoundFn) {

		if (_cmpStore.hasOwnProperty(instanceId)) {
			successFn = successFn || function () {};
			successFn.call(_cmpStore[instanceId], _cmpStore[instanceId]);
			return _cmpStore[instanceId];
		}
		else {
			notFoundFn = notFoundFn || function () {};
			notFoundFn();
			return null;

		}
	};

	/**
	 *
	 * @param instanceId
	 * @return {boolean}
	 */
	Bs.hasCmp = function (instanceId) {
		return _cmpStore.hasOwnProperty(instanceId);
	};

	/**
	 *
	 * @param {string} instanceId
	 */
	Bs.removeCmp = function (instanceId) {
		if (_cmpStore.hasOwnProperty(instanceId)) {
			delete _cmpStore[instanceId];
		}
	};

	Bs.register = function (className, definition, alias) {
		return _buildStore(className, definition, alias);
	};

	Bs.getClass = function (className) {
		return _store[className];
	};

	Bs.isDev = function () {
		return _dev;
	};

	Bs.setDev = function (dev) {
		console.log(
			dev ? "%c .:Bs DEV MODE:. " : ' %cDEV MODE OFF',
			(dev ? 'color: #00ff00' : 'color: #ff0000') + ';background: #333;font-size:2em;border:3px solid #00ff00;'
		);
		_dev = dev;
		return this;
	};

	Bs.Util = {
		arrayUnion: function (array1, array2) {
			if (typeof array1 !== 'object') array1 = [];
			if (typeof array2 !== 'object') array2 = [];
			var hash = {}, union = [];
			$.each($.merge($.merge([], array1), array2), function (index, value) {
				hash[value] = value;
			});
			$.each(hash, function (key) {
				union.push(key);
			});
			return union;
		},

		arrayFromString   : function (string) {
			if (typeof string === 'string') {
				return [string];
			}
			return string;
		},
		/**
		 * Add given namespace if no provided in className
		 * @param namespaceToAdd
		 * @param className
		 * @return {*}
		 */
		addPrefixIfMissing: function (namespaceToAdd, className) {
			if (className.indexOf(namespaceToAdd) === -1) {
				return namespaceToAdd + "." + className;
			}
			return className;
		},
		String            : {
			ucfirst: function (str) {
				str += '';
				var f = str.charAt(0).toUpperCase();
				return f + str.substr(1);
			}
		}
	};

	var _dev = false;

	/**
	 * Basic configuration of application
	 *
	 * @type {{api: string, urlCore: string, urlApp: string, debug: boolean,initLang: boolean}}
	 * @private
	 */
	var _config = {
		api     : 'api',
		urlCore : '',
		urlApp  : '',
		urlDist : '',
		debug   : false,
		dev     : false,
		initLang: true,
		lang    : {}
	};

	/**
	 * Store of defined classes
	 *
	 * @type {{}}
	 * @private
	 */
	var _store = {};

	var _storeLib = {};

	/**
	 * List of instances available
	 *
	 * @type {Object}
	 * @private
	 */
	var _cmpStore = {};

	/**
	 *
	 * @var {[]}
	 * @private
	 */
	var _dependenciesLoaded = [];
	/**
	 *
	 * @type {Object}
	 * @private
	 */
	var _dependencies = {};
	var _circularDependencies = {};

	/**
	 *
	 * @type {jQuery.Deferred}
	 * @private
	 */
	var _initialized = null;

	var _requireProgress = [];

	/**
	 *
	 * @param className
	 * @return {boolean}
	 * @private
	 */
	var _isDefined = function (className) {
		return _store.hasOwnProperty(className);
	};

	/**
	 *
	 * @param url
	 * @param [options]
	 * @return {*}
	 * @private
	 */
	var _getScript = function (url, options) {
		options = $.extend(options || {}, {
			dataType: "script",
			cache   : true,
			url     : url
		});
		return jQuery.ajax(options);
	};

	/**
	 *
	 * @param className
	 * @param definition {Object}
	 * @param [alias]
	 * @return {*}
	 * @private
	 */
	var _buildStore = function (className, definition, alias) {
		var newClass = definition.construct ? definition.construct() : definition;
		var levels = className.split(".");
		var curLevel, name;
		var i = 0;
		if (levels[0] === 'Bs') {
			curLevel = Bs;
		}
		else {
			if (typeof window[levels[0]] === 'undefined') {
				window[levels[0]] = {}
			}
			curLevel = window[levels[0]];
		}
		levels = levels.slice(1);
		while (i < levels.length - 1) {
			if (typeof curLevel[levels[i]] === 'undefined') {
				curLevel[levels[i]] = {};
			}
			curLevel = curLevel[levels[i]];
			i++;
		}
		name = levels[levels.length - 1];
		// console.warn(curLevel[name],typeof curLevel[name],curLevel[name].length);
		// If we already have members in current Level...
		if (typeof curLevel[name] === 'object') {
			// ... we need to backup them ...
			var old = curLevel[name];
			// ... store the new constructor ...
			curLevel[name] = newClass;
			// and reapply old members as static properties of new class
			for (var member in old) {
				if (old.hasOwnProperty(member)) {
					curLevel[name][member] = old[member];
				}
			}
		}
		else {
			curLevel[name] = newClass;
		}
		_store[className] = curLevel[name];

		if (alias) {
			window[alias] = _store[className]
		}
		_log(className + ' has been defined');
		return newClass;
	};

	/**
	 *
	 * @param className
	 * @return {string}
	 * @private
	 */
	var _getUrlByClassName = function (className) {
		var file = className.split('.'),
			ns = file[0],
			url;

		url = ((ns === 'Bs') ? (_config.urlCore + '/Bs/src') : _config.urlApp) + '/';
		if (className.indexOf('View') > -1) {
			file = file[file.length - 1];
			url += className.replace(/\./g, "/") + '/' + file + '.js';
		}
		else {
			url += className.replace(/\./g, "/") + '.js';
		}
		return url;
	};

	/**
	 *
	 * @param className
	 * @private
	 */
	var _removeFromQueue = function (className) {
		if (_dependencies.hasOwnProperty(className)) {
			if (_dependencies[className].dependencies.length === 0) {
				_dependencies[className].dfdRequire.resolve();
			}
		}
		var dependencies, dfdRequire;
		for (var classInQueue in _dependencies) {
			if (_dependencies.hasOwnProperty(classInQueue) === false) {
				continue;
			}
			dependencies = _dependencies[classInQueue].dependencies;
			dfdRequire = _dependencies[classInQueue].dfdRequire;
			if (dfdRequire.state() !== 'resolved') {
				for (var i = 0, dependency; dependency = dependencies[i]; i++) {
					if (dependency === className) {
						dependencies.splice(i, 1);
					}
				}
				if (dependencies.length === 0) {
					_removeFromQueue(classInQueue);
				}
			}
		}
	};

	/**
	 *
	 * @param className
	 * @param dfd
	 * @private
	 */
	var _waitUntilLoaded = function (className, dfd) {
		_log('... Waiting for ' + className + '...');
		setTimeout(function () {
			if (_isDefined(className) === true) {
				dfd.resolve();
			}
			else {
				_waitUntilLoaded(className, dfd)
			}
		}, 10);
	};

	var _isInQueue = function (className) {
		for (var classInQueue in _dependencies) {
			if (_dependencies.hasOwnProperty(classInQueue) === false) {
				continue;
			}
			if (classInQueue === className) {
				return true;
			}
			for (var i = 0, dependency; dependency = _dependencies[classInQueue].dependencies[i]; i++) {
				if (dependency === className) {
					return true;
				}
			}
		}
		return false;
	};

	/**
	 *
	 * @param className
	 * @param [callback]
	 * @param [classWhichRequiresThisOne]

	 * @private
	 */
	var _requireOne = function (className, callback, classWhichRequiresThisOne) {
		var circularAt,
			loadFromQueue = false;

		callback = callback || function () {};
		_log(className + ' has been required');

		if (_isDefined(className)) {
			_log(className + ' is already defined');
			return;
		}

		if (_isInQueue(className)) {
			if (_dependencies[className] && _dependencies[className].dependencies) {
				circularAt = _dependencies[className].dependencies.indexOf(classWhichRequiresThisOne);
				if (circularAt > -1) {
					_circularDependencies[classWhichRequiresThisOne] = className;
					_log(className + ' is a circular reference in ' + classWhichRequiresThisOne);
					_dependencies[className].dependencies.splice(circularAt, 1);
				}
			}

			loadFromQueue = true;
			var dfd = new $.Deferred();
			_waitUntilLoaded(className, dfd);
			$.when(dfd).then(function () {
				_requireAfter(className, callback);
			});
		}

		if (classWhichRequiresThisOne) {
			_addDependencies(classWhichRequiresThisOne, className);
		}
		else {
			_addDependencies(className);
		}

		if (loadFromQueue) {
			return;
		}

		var url = _getUrlByClassName(className);
		_getScript(url)
			.fail(function () {
				console.error('"' + className + '" not found @"' + url + '" or error during JS eval.');
			})
			.done(function () {
					$.when(_dependencies[className].dfdDefine).then(function () {
						_requireAfter(className, callback);
					});
				}
			);
	};

	/**
	 *
	 */
	var _resolveDependenciesIfEmpty = function () {
		var size = 0, i, index;
		for (i in _dependencies) {
			if (_dependencies.hasOwnProperty(i) === false) {
				continue;
			}
			size++;
		}
		if (size === 0) {
			index = _dependenciesLoaded.length - 1;
			_dependenciesLoaded[index].resolve();
		}
	};

	/**
	 *
	 * @param className
	 * @param callback
	 * @private
	 */
	var _requireAfter = function (className, callback) {
		callback = callback || function () {};
		_log(className + ' and its dependencies are ready');
		_removeFromQueue(className);
		delete _dependencies[className];
		callback(_store[className]);
		_resolveDependenciesIfEmpty();
	};

	/**
	 *
	 * @param className
	 * @param dependency
	 * @private
	 */
	var _addDependencies = function (className, dependency) {
		dependency = dependency || null;

		if (dependency && (_circularDependencies[className] === dependency)) {
			_removeFromQueue(className);
		}

		if (_dependencies.hasOwnProperty(className)) {
			_dependencies[className].dfdRequire = new $.Deferred();
			_dependencies[className].dfdDefine = new $.Deferred();
		}
		else {
			_dependencies[className] = {
				dependencies: [],
				dfdRequire  : new $.Deferred(),
				dfdDefine   : new $.Deferred()
			};
		}

		if (dependency) {
			_dependencies[className].dependencies.push(dependency);
		}
	};

	/**
	 *
	 * @type {{require: Array, alias: boolean, extend: boolean, construct: boolean|Function}}
	 * @private
	 */
	var _definition = {
		require  : [],
		alias    : false,
		extend   : false,
		construct: false
	};

	/**
	 * Build array of non already defined dependencies
	 * @param classes
	 * @return {Array}
	 * @private
	 */
	var _filterNonDefinedClasses = function (classes) {
		var required = [];
		for (var i = 0, className; className = classes[i]; i++) {
			if (_isDefined(className) === false) {
				required.push(className);
			}
		}
		return required;
	};

	var _log = function (log) {
		if (_config.debug) {
			console.log(log);
		}
	};

	var _arrayFromString = function (value) {
		return (typeof value === 'string') ? [value] : value;
	};

	var _afterDefine = function (definedClass, className) {
		_buildStore(className, definedClass, definedClass.alias);
	};

	var _orphans = {};
	var _defineSync = function (className, definition) {
		var newDefinition;
		definition = $.extend({}, _definition, definition);
		if (definition.extend) {
			if (_store[definition.extend]) {
				newDefinition = _store[definition.extend].define(className, definition);
				_afterDefine(newDefinition, className);
				// Check orphans
				if (_orphans.hasOwnProperty(className)) {
					for (var orphanClassName in _orphans[className]) {
						if (_orphans[className].hasOwnProperty(orphanClassName)) {
							_defineSync(orphanClassName, _orphans[className][orphanClassName]);
							// delete _orphans[className][orphanClassName];
						}
					}
				}

			}
			else {
				// Store as orphan until parent come
				if (_orphans.hasOwnProperty(definition.extend) === false) {
					_orphans[definition.extend] = {};
				}
				_orphans[definition.extend][className] = definition;
			}
		}
		else {
			_afterDefine(definition, className);
		}
	};

	window['Bs'] = Bs;

}(jQuery);

/**
 * @return {{init: function, set: function, translateAll: function, t: function, loadNamespace: function, loadNamespaces: function}}
 */
Bs.define('Bs.Lang', {
	/**
	 *
	 * @return {{init: Function, set: Function, translateAll: Function, t: Function, loadNamespace: Function, loadNamespaces: Function}}
	 * @constructor
	 */
	construct : function Lang() {

		//noinspection JSMismatchedCollectionQueryUpdate
		/**
		 *
		 * @type {Array}
		 * @private
		 */
		var _loadedNamespaces = [];

		/**
		 *
		 * @type {string}
		 * @private
		 */
		var _urlPattern = '/__ns__/lng/__lng__.json';

		/**
		 *
		 * @type {{lang: string, fallbackLng: boolean, fallbackToDefaultNS: boolean, resGetPath: string}}
		 * @private
		 */
		var _defaultConfig = {
			load               : "unspecific",
			getAsync           : true,
			fallbackLng        : false,
			fallbackToDefaultNS: true,
			ns                 : 'Translation',
			shortcutFunction   : 'sprintf',
			useDataAttrOptions : true,
			resGetPath         : Bs.getConfig().urlApp + _urlPattern
		};

		var _bundles = [];

		return {

			/**
			 * @namespace Bs.Lang.init
			 * @param config {Object}
			 * @param [callback]
			 */
			init: function (config, callback) {
				callback = callback || function () {};
				config = $.extend({}, _defaultConfig, config);
				config.resGetPath = (config.ns) ? (Bs.getConfig().urlApp + _urlPattern) : _defaultConfig.resGetPath;
				return i18n.init(config, function () {
					for (var i = 0, bundle; bundle = _bundles[i]; i++) {
						i18n.addResourceBundle(bundle.lng, bundle.ns, bundle.resource);
					}
					callback();
				});
			},

			addResourceBundle: function (lng, ns, resource) {
				_bundles.push({
					lng: lng, ns: ns, resource: resource
				});
				return i18n.addResourceBundle(lng, ns, resource);
			},
			/**
			 * @namespace Bs.Lang.set
			 * @param lang
			 * @param [callback]
			 */
			set : function (lang, callback) {
				callback = callback || function () { };
				if (lang !== i18n.lng()) {
					document.cookie = "i18next=" + lang;
					i18n.setLng(lang, function () {
						Bs.Lang.translateAll();
						callback();
					});
				}
				else {
					callback();
				}
			},
			/**
			 * @namespace Bs.Lang.get
			 * @returns {string}
			 */
			get : function (full) {
				if (!full) {
					return i18n.options.lng.split("-")[0];
				}
				return i18n.options.lng;
			},

			/**
			 * @namespace Bs.Lang.translateAll
			 * @param $el
			 * @return {*}
			 */
			translateAll: function ($el) {
				$el = $el || $('[data-i18n]');
				$el.i18n();
				return $el;
			},

			/**
			 * @namespace Bs.Lang.t
			 * @param key
			 * @param [options]
			 * @return {*}
			 */
			t: function (key, options) {
				return i18n.t(key, options);
			},

			/**
			 * @namespace Bs.Lang.init
			 * @param ns
			 * @param url
			 * @param [callback]
			 * @return {*}
			 */
			loadNamespace: function (ns, url, callback) {
				var tmpResGetPath,
					_resetResGetPath = function(){
						if(tmpResGetPath){
							i18n.options.resGetPath = tmpResGetPath + _urlPattern;
						}
					};

				if(!callback){
					callback = url;
					url = null;
				}
				if(url){
					i18n.options.resGetPath = url + _urlPattern;
				}
				callback = callback || function () {};
				if (_loadedNamespaces.indexOf(ns) > -1) {
					_resetResGetPath();
					callback();
					return;
				}
				return i18n.loadNamespace(ns, function () {
					_loadedNamespaces.push(ns);
					_resetResGetPath();
					callback();
				});
			},

			/**
			 *
			 * @param nsList
			 * @param callback
			 */
			loadNamespaces: function (nsList, callback) {

				var nsToLoad = [];
				for (var i in nsList) {
					if (nsList.hasOwnProperty(i) && _loadedNamespaces.indexOf(nsList[i]) > -1) {
						nsToLoad.push(nsList[i]);
					}
				}

				var nbToLoad = nsList.length;

				// Exit if nothing to load
				if (nbToLoad === 0) {
					callback();
					return;
				}

				var dfd = [], ns;

				for (var j in nsList) {
					if (nsList.hasOwnProperty(j)) {
						dfd[j] = $.Deferred();
						ns = nsList[j];
						//i18n.options.resGetPath = _buildNamespaceUrl(ns);
						(function (ns, dfd) {
							return i18n.loadNamespace(ns, function () {
								_loadedNamespaces.push(ns);
								dfd.resolve(true);
							});
						}(ns, dfd[j]))
					}
				}

				$.when.apply($, dfd).then(function () {
					callback();
				});
			}
		}
	}
});

'use strict';

/** @namespace Bs.Api */

Bs.define('Bs.Api', {
	require  : 'Bs.Response',
	/**
	 *
	 * @constructor
	 */
	construct: function () {
		// TODO replace by "construct: function Api () {" when Api object will be removed or renamed in js/functions.js

		/**
		 *
		 * @type {string}
		 */
		var _sessionType = 'USR';

		/**
		 *
		 * @return {string}
		 */
		var _buildUrl = function (path) {
			var url =  Bs.getConfig().api;
			if(_sessionType){
				url += '/' + _sessionType;
			}
			if(path){
				if(path.charAt(0) !== "/"){
					url += "/";
				}
				url += path;
			}
			return url;
		};

		/**
		 *
		 * @param options
		 * @return {{done: Function, fail: Function, always: Function, then: Function, loadComponent: Function}}
		 */
		var _buildCallbackObject = function (options) {

			var callback = {
				done         : function () {},
				fail         : function (response, jqXHR) {
					response = jqXHR.responseJSON;
					if (jqXHR.getResponseHeader('Content-Type') === 'application/problem+json') {
						Bs.require('Bs.View.Alert.Toast', function () {
							Bs.View.Alert.Toast.apiProblem(response);
						});
					}
				},
				always       : function () {},
				then         : function () {},
				loadComponent: function (className, response) {
					Bs.create(className, {
						options: {
							response: response,
							request : response.getRequest()
						}
					});
				}
			};

			if (typeof options === 'function') {
				callback.done = options
			}
			else if (typeof options === 'object') {
				callback.done = options.done || callback.done;
				callback.fail = options.fail || callback.fail;
				callback.always = options.always || callback.always;
				callback.then = options.then || callback.then;
				callback.loadComponent = options.loadComponent || callback.loadComponent;
			}

			return callback;
		};

		var _ajax = function (callback, options) {
			var config;

			callback = _buildCallbackObject(callback);

			config = {
				type    : "",
				url     : "",
				data    : "",
				dataType: "json",
				headers: _headers
			};
			$.extend(config, options);
			return $.ajax(config).always(function (dataOrJqXHR, textStatus, jqXHROrErrorThrown) {

				var data = (textStatus !== "success") ? dataOrJqXHR.responseJSON : dataOrJqXHR,
					jqXHR = (textStatus !== "success") ? dataOrJqXHR : jqXHROrErrorThrown,
					response = Bs.create('Bs.Response', data);

				if (response.hasComponent()) {
					response.requireComponent(function (className) {
						console.info('Server response requires a component');
						callback.loadComponent(className, response);
					});
					if (response.hasForkComponent()) {
						return;
					}
				}

				jqXHR.done(function () {
					callback.done(response);
				});

				jqXHR.fail(function () {
					callback.fail(response, jqXHR);
				});

				jqXHR.always(function () {
					callback.always(response);
				});

				jqXHR.then(function () {
					callback.then(response);
				});
			});
		};

		/**
		 * Headers sent in request
		 * @type {Object}
		 * @private
		 */
		var _headers = {};

		var Api = new function Api() {};

		/**
		 *
		 * @param {[]}pk
		 * @return {string}
		 */
		Api.stringifyPK = function (pk) {
			return pk.join('-');
		};

		/**
		 *
		 * @param sessionType
		 * @return {Api}
		 */
		Api.setSessionType = function (sessionType) {
			_sessionType = sessionType;
			return this;
		};

		/**
		 *
		 * @return {string}
		 */
		Api.getSessionType = function () {
			return _sessionType;
		};

		/**
		 *
		 * @param authToken
		 * @return {Api}
		 */
		Api.setAuthToken = function (authToken) {
			_headers['Auth-Token'] = authToken;
			return this;
		};

		/**
		 *
		 * @return {*}
		 */
		Api.getAuthToken = function () {
			return _headers.hasOwnProperty('Auth-Token') ? _headers['Auth-Token'] : '';
		};

		/**
		 *  API base URL
		 * @return {string}
		 */
		Api.url = function (path) {
			return _buildUrl(path);
		};

		/**
		 *
		 * @param url
		 * @param [data]
		 * @param [callback]
		 * @return {*}
		 */
		Api.get = function (url, data, callback) {

			if (typeof data === 'function') {
				callback = data;
				data = null;
			}

			return _ajax(callback, {
				type    : "GET",
				url     : _buildUrl(url),
				data    : data,
				dataType: "json",
				headers : _headers
			});

		};
		/**
		 *
		 * @param url
		 * @param [data]
		 * @param [callback]
		 * @return {*}
		 */
		Api.post = function (url, data, callback) {

			if (typeof data === 'function') {
				callback = data;
				data = null;
			}

			if (window.FormData && data instanceof FormData) {
				return _ajax(callback, {
					type       : "POST",
					url        : _buildUrl(url),
					data       : data,
					processData: false,
					contentType: false
				});
			}

			if (typeof data === 'object') {
				return _ajax(callback, {
					type       : "POST",
					url        : _buildUrl(url),
					data       : JSON.stringify(data),
					processData: false,
					contentType: 'application/json'
				});
			}

			return _ajax(callback, {
				type: "POST",
				url : _buildUrl(url),
				data: data
			});
		};
		/**
		 *
		 * @param url
		 * @param [data]
		 * @param [callback]
		 * @return {*}
		 */
		Api['delete'] = function (url, data, callback) { // this.delete fails in IE8
			if (typeof data === 'object') {
				return _ajax(callback, {
					type       : "DELETE",
					url        : _buildUrl(url),
					data       : JSON.stringify(data),
					processData: false,
					contentType: 'application/json'
				});
			}
			else {
				return _ajax(callback, {
					type: "DELETE",
					url : _buildUrl(url),
					data: data
				});
			}
		};
		/**
		 *
		 * @param url
		 * @param [data]
		 * @param [callback]
		 * @return {*}
		 */
		Api.patch = function (url, data, callback) {
			if (typeof data === 'object') {
				return _ajax(callback, {
					type       : "PATCH",
					url        : _buildUrl(url),
					data       : JSON.stringify(data),
					processData: false,
					contentType: 'application/json'
				});
			}
			else {
				return _ajax(callback, {
					type   : "PATCH",
					url    : _buildUrl(url),
					data   : data,
					success: callback
				});
			}
		};
		/**
		 *
		 * @param url
		 * @param [data]
		 * @param [callback]
		 * @return {*}
		 */
		Api.put = function (url, data, callback) {
			if (typeof data === 'object') {
				return _ajax(callback, {
					type       : "PUT",
					url        : _buildUrl(url),
					data       : JSON.stringify(data),
					processData: false,
					contentType: 'application/json'
				});
			}
			else {
				return _ajax(callback, {
					type: "PUT",
					url : _buildUrl(url),
					data: data
				});
			}
		};

		/**
		 * @param options
		 * @return {{done: Function, fail: Function, always: Function, nothing : Function}}
		 */

		Api.buildCallback = function (options) {
			var callback = {
				done   : function () {},
				fail   : function () {},
				always : function () {},
				nothing: function () {}
			};

			if (typeof options === 'function') {
				callback.done = options
			}
			else if (typeof options === 'object') {
				callback.done = options.done || callback.done;
				callback.fail = options.fail || callback.fail;
				callback.always = options.always || callback.always;
				callback.nothing = options.nothing || callback.nothing;
			}

			return callback;
		};

		return Api;
	}
});


/**
 * File description
 *
 * @package
 * @version      :$
 *               :$
 * @link         :$
 * @author       :$
 */
'use strict';

/** @namespace Bs.Template */

Bs.define('Bs.Template', {
	construct: function () {

		var _scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

		var _supportedTplTypeAttr = [
			'text/x-handlebars-template',
			'text/x-handlebars',
			'text/html'
		];
		var _supportedPartialTypeAttr = 'text/x-handlebars-partial';

		var _getAllMatches = function getAllMatches(html) {
			if (_scriptRegex.constructor !== RegExp) {
				throw new Error('not RegExp');
			}
			var res = [];
			var match = null;
			if (_scriptRegex.global) {
				while (match = _scriptRegex.exec(html)) {
					res.push(match);
				}
			}
			else {
				if (match = _scriptRegex.exec(html)) {
					res.push(match);
				}
			}
			return res;
		};

		var _registerPartial = function ($script, viewName) {
			var partialElId = $script.attr('id'),
				partialId;
			if (!partialElId) {
				partialElId = viewName;
			}
			partialId = partialElId.indexOf('Tpl') > -1 ? partialElId.substring(0, partialElId.indexOf('Tpl')) : partialElId;
			Handlebars.registerPartial(partialId, $script.html());
		};

		var Template = {};

		Template.cachedTpl = {};

		Template.load = function (url, tplName, additionalScriptsOnly) {
			var dfd = new $.Deferred();

			$.get(url)
				.done(function (tplHtml) {
					Handlebars.templates[tplName] = Handlebars.compile(tplHtml);
					// Bs.Template.registerLoadedTemplate(tplHtml, viewName, additionalScriptsOnly);
					dfd.resolve();
				})
				.fail(function () {
					console.error('Template "' + tplName + '" cannot be loaded @ "' + url + '".');
				});

			return dfd;
		};
		Template.loadPartial = function (url, tplName, additionalScriptsOnly) {
			var dfd = new $.Deferred();

			$.get(url)
				.done(function (tplHtml) {
					Handlebars.registerPartial(tplName, tplHtml);
					dfd.resolve();
				})
				.fail(function () {
					console.error('Partial "' + tplName + '" cannot be loaded @ "' + url + '".');
				});

			return dfd;
		};

		Template.registerLoadedTemplate = function (tplHtml, viewName, additionalScriptsOnly) {
			// TODO, use HTMl Parser instead of regex ?
			var res = _getAllMatches(tplHtml),
				tplHtmlWithoutScript = tplHtml.replace(_scriptRegex, ""),
				$script;

			for (var i = 0, script; script = res[i]; i++) {
				$script = $('<div></div>').html(script).find('script');
				if (_supportedTplTypeAttr.indexOf($script.attr('type')) === -1) {
					if ($script.attr('type') === _supportedPartialTypeAttr) {
						_registerPartial($script, viewName);
					}
					continue;
				}
				var tplElId = $script.attr('id');

				if (!tplElId) {
					continue;
				}
				var tplId = tplElId.indexOf('Tpl') > -1 ? tplElId.substring(0, tplElId.indexOf('Tpl')) : tplElId;
				Bs.View.compiledTpl[tplId] = Handlebars.compile($script.html());
			}

			Template.cachedTpl[viewName] = Handlebars.compile(tplHtmlWithoutScript);
			if (!additionalScriptsOnly) {
				Handlebars.registerPartial(viewName, tplHtmlWithoutScript);
			}
		};

		return Template;
	}
});

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
		Collection.prototype.itemsByPk = {};

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

		Collection.prototype.itemCount = 0;

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
		 * Take a config object and set fields in class
		 */
		Collection.prototype.initialize = function (options) {
			this.itemCount = 0;
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
			this.itemCount = 0;
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
			me.collectionIndex = ++me.itemCount;
			item.getCollection = function () {
				return me;
			};

			item.index = me.collectionIndex;
			item.getIndex = function () {
				return this.index;
			};
			me.items.push(item);

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
			item.getCollection = function () {
				return me;
			};

			item.index = index;
			item.getIndex = function () {
				return this.index;
			};
			me.items[index] = item;

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
				originalDoneCallback = callback.done,
				options = options || {},
				page = options.page || 1,
				limit = options.limit || Bs.Collection.PAGE_SIZE,
				sort = options.sort || false,
				filter = options.filter || false,
				apiParams = options.apiParams || me.apiParams,
				apiAction = options.apiAction || me.apiAction,
				apiResource = options.apiResource || me.apiResource,
				apiRoute = options.apiRoute || me.apiRoute;

			callback.done = function (response) {
				if (me.cache) {
					me.addToPool();
				}
				me.reset();
				me.local = false;
				me.pagination = response.pagination();
				var list = response.getData();
				if (list) {
					if (typeof list === "object")
						for (var i in list) {
							if (list.hasOwnProperty(i) === false) {
								continue;
							}
							var signature = Bs.Model.buildSignature(me.model, list[i].id);
							if (Bs.Model.isInPool(signature)) {
								item = me.add(Bs.Model.getFromPool(signature));
							}
							else {
								item = me.add(list[i]);
								item.setInitialData(list[i]);
							}
						}
				}
				originalDoneCallback.call(me, response);
			};

			apiAction = apiAction ? '/' + apiAction : apiAction;
			url = apiRoute || (apiResource + apiAction);
			apiParams = $.extend(true, apiParams, {page: page, limit: limit});
			apiParams.sort = sort || null;
			apiParams.filter = filter || null;

			return Bs.Api.get(url, apiParams, callback);
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
						r = new Bs.Response(rPatch[0]);
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
		 * @param {Model} model
		 */
		Collection.prototype.remove = function (model) {
			// TODO broken if multi pk
			if (model.pk.length > 1) {
				throw new Error('Composed PK is not managed yet, sorry... :(')
			}
			this.removeFirstWhere(model.pk[0], model.getPK()[0]);
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

"use strict";

Bs.define('Bs.DataBinder', {

	require: ['Bs.Collection'],

	construct: function () {

		var _tagsWithValue = ['INPUT', 'SELECT', 'TEXTAREA'];

		var DataBinder = function () {
			this.initialize && this.initialize.apply(this, arguments);
		};

		/**
		 *
		 * @type {View}
		 */
		DataBinder.prototype.view = null;

		/**
		 *
		 * @type {boolean}
		 */
		DataBinder.prototype.autoBind = true;
		/**
		 * Attribute used to bind data
		 * Can be 'name' or 'data-bind'
		 * @type {string}
		 */
		DataBinder.prototype.bindAttribute = "name";

		/**
		 */
		DataBinder.prototype.initialize = function (init) {
			init = init || {};
			var me = this;
			$.extend(this, init);
			if (me.view === null) {
				throw new Error('You must create object with a view param');
			}
			if (me.view.model.length === 0) {
				throw new Error('No model used by ' + this.view.name);
			}

			if (me.autoBind) {
				if (me.view.isRendered()) {
					me.bind();
				}
				else {
					me.view.one('beforeDataBind', function () {
						me.bind();
					});
				}
			}
		};

		/**
		 *
		 * @param model
		 * @param property
		 */
		DataBinder.prototype.modelToView = function (model, property) {
			var value,
				view = this.view,
				$el,
				tagName,
				type,
				selector = '[data-bind-model="' + model.getNameAsAProperty() + '"][data-bind-property="' + property + '"]';

			if (property in model && typeof model[property] === "function") {
				value = model[property].call(model);
			}
			else {
				value = model.get(property)
			}

			$el = view.$el.find(selector);
			if ($el.length) {
				$el.each(function(){
					var $this = $(this);
					tagName = this.tagName;
					type = $this.attr('type');
					if (_tagsWithValue.indexOf(tagName) > -1) {
						if (type === 'radio') {
							$this.filter('[value="' + value + '"]').prop('checked', true)/*.change()*/;
						}
						else if (type === 'checkbox') {
							$this.prop('checked', value)/*.change()*/;
						}
						else if (type === 'file') {
							// Prevent InvalidStateError: Failed to set the 'value' property on 'HTMLInputElement': This input element accepts a filename, which may only be programmatically set to the empty string.
							$this.val("");
						}
						else {
							$this.val(value)/*.change()*/;
						}
					}
					else {
						if($el.data('bindAttr')){
							$this.attr($el.data('bindAttr'), value);
						}
						else {
							$this.html(value);
						}
					}
				});
			}
		};

		/**
		 *
		 */
		DataBinder.prototype.bind = function () {
			var me = this,
				view = me.view,
				attr = this.bindAttribute,
				modelsToChange = {},
				selector = '[' + attr + '], [data-bind]';
			view.$el.find(selector).each(function () {
				var model;
				var $elToBind = $(this);
				if ($elToBind.hasClass('dataBind')) {
					return true;
				}
				// Try to get property name from "name" (or other if modified) attribute
				var property = $elToBind.attr(attr);
				if (property) {
					// Set data-bind attribute
					$elToBind.attr('data-bind', property);
				}
				else {
					// Try to get property name from data-bind attribute
					property = $elToBind.data('bind');
				}
				if (!property) {
					return true;
				}

				var modelAndProperty = buildModelAndPropertyFromBindAttribute(property, view);
				model = modelAndProperty.model;
				if(model === null || $.isEmptyObject(model)){
					// console.warn('Can\'t bind value of a null Model');
					return true;
				}
				property = modelAndProperty.property;
				$elToBind.attr('data-bind-model', model.getNameAsAProperty());
				$elToBind.attr('data-bind-property', property);
				$elToBind.addClass('dataBind');

				// Add model to list of models with tweaked "set" method
				if (modelsToChange.hasOwnProperty(model.getNameAsAProperty()) === false) {
					modelsToChange[model.getNameAsAProperty()] = model;
				}

				$elToBind.on('change', function () {
					var $el = $(this),
						property = $el.attr('data-bind'),
						value,
						tagName = $el[0].tagName,
						type = $($el[0]).attr('type');

					if (_tagsWithValue.indexOf(tagName) > -1) {
						if (type === 'radio') {
							value = $el.filter(':checked').val();
						}
						else if (type === 'checkbox') {
							value = $el.prop('checked');
						}
						else {
							value = $el.val();
						}
					}
					else {
						value = $el.html();
					}

					var modelAndProperty = buildModelAndPropertyFromBindAttribute(property, view);
					model = modelAndProperty.model;
					property = modelAndProperty.property;
					if (property in model && typeof model[property] === "function") {
						model[property].call(model, value);
						// value = model[property].call(model);
					}
					else {
						model.set(property, value, true); // true to avoid binding loop
						// value = model.get(property);
					}
					// TODO write value in HTML, with a special state/data to avoid "change" listener to be triggered
				});

				// Trigger a first bind
				me.modelToView(model, property);
			});

			// Add main model to list of models o change and change their "set" method
			for (var modelName in modelsToChange) {
				if (modelsToChange.hasOwnProperty(modelName) === false) {
					continue;
				}
				// JS to HTML
				if ('set' in modelsToChange[modelName] && typeof modelsToChange[modelName] === "object") {

					var originalSetFn = modelsToChange[modelName].set;
					var originalSetInitialDataFn = modelsToChange[modelName].setInitialData;

					(function (previousSetFn, previousSetInitialDataFn) {
						modelsToChange[modelName].set = function (property, value, fromView) {
							fromView = fromView || false;
							// Call only, why not use previous Set, loop ??
							// Broken if set method is overriden in a model
							this.constructor.prototype.set.call(this, property, value, fromView);
							if (!fromView) {
								me.modelToView(this, property);
							}
							return this;
						};
						modelsToChange[modelName].setInitialData = function (data) {
							data = data || {};
							previousSetInitialDataFn.call(this, data);
							for (var key in data) {
								if (data.hasOwnProperty(key) && this.has(key)) {
									me.modelToView(this, key);
								}
							}
						};

					})(originalSetFn, originalSetInitialDataFn);

				}
			}
		};

		var buildModelAndPropertyFromBindAttribute = function (property, view) {
			var modelName,
				model;
			// To allow shortcut in HTML notation without model prefix is view as only one model
			if (property.indexOf('.') === -1) {
				model = view.getModel();
			}
			else {
				var parts = property.split('.');
				property = parts.pop();
				modelName = parts[0];
				// Try to get Model directly in View from its modelPropertyName ...
				model = view.getModel(modelName);
				if (model === null) {
					// Model not found, assume it's a child of main model
					model = view.getModel().get(parts.join('.'));
				} else {
					// If we have no intermediate levels, just get this model
					// Else, we want o subModel of this Model,
					if (parts.length > 1) {
						modelName = parts[parts.length - 1];
						model = model.get(modelName)
					}
				}
			}

			return {
				model   : model,
				property: property
			};
		};

		return DataBinder;
	}
});

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
				if (me.isModified()) {
					url = apiRoute || (apiResource + '/' + this.getPK(true) + apiAction);
					data = $.extend(true, {}, this.toModifiedObject(), apiParams);
					Bs.Api.patch(url, data, callback)
				}
				else {
					callback.always();
					callback.nothing();
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

		var _extend = function (child, parent, options) {

			child.fields = $.extend(true, {}, parent.fields, options.fields);
			child.fn = $.extend(true, {}, parent.fn, options.fn);
			child.relations = $.extend(true, {}, parent.relations, options.relations);

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

'use strict';

Bs.define('Bs.Response', {
	construct: function () {

		/**
		 * @class Response
		 * @constructor
		 */
		var Response = function Response() {
			this.initialize && this.initialize.apply(this, arguments);
		};

	/**
	 *
	 * @type {null|{}}
	 */
	Response.prototype.response = null;

		/**
		 * @param [property]
		 * @return {*}
		 * @this Response
		 */
		Response.prototype.getData = function (property) {
			if (this.response.data === null) {
				return null;
			}
			if (property) {
				if (this.response.data.hasOwnProperty(property)) {
					return this.response.data[property];
				}
				else {
					return null;
				}
			}
			else {
				return this.response.data
			}
		};

		/**
		 * @return {int}
		 * @this Response
		 */
		Response.prototype.getTotal = function () {
			return this.response.total;
		};

		/**
		 * @return {*}
		 * @this Response
		 */
		Response.prototype.getError = function () {
			return this.response.error;
		};

		/**
		 * @return int
		 * @this Response
		 */
		Response.prototype.getErrorCode = function () {
			return parseInt(this.response.error.code);
		};

		/**
		 * @return string
		 * @this Response
		 */
		Response.prototype.getErrorMsg = function () {
			return this.response.error.msg;
		};

		/**
		 * @return {*}
		 * @this Response
		 */
		Response.prototype.getErrorDescription = function () {
			return this.response.error.description;
		};

		/**
		 *
		 * @return {string}
		 * @this Response
		 */
		Response.prototype.getDescription = function () {
			return this.response.description;
		};

		/**
		 *
		 * @return {{}}
		 * @this Response
		 */
		Response.prototype.getRequest = function () {
			return this.response.request;
		};

		/**
		 *
		 * @return {{}}
		 * @this Response
		 */
		Response.prototype.getSessionType = function () {
			return this.response.sessionType;
		};

		/**
		 *
		 * @return {boolean}
		 * @this Response
		 */
		Response.prototype.hasComponent = function () {
			return this.response.loadComponent !== '';
		};

		/**
		 *
		 * @return {boolean}
		 * @this Response
		 */
		Response.prototype.hasForkComponent = function () {
			return this.response.forkComponent;
		};

		/**
		 *
		 * @param callback
		 */
		Response.prototype.requireComponent = function (callback) {
			var me = this;
			callback = callback || function () {};
			if (me.response.hasOwnProperty('loadComponent')) {
				Bs.require(me.response.loadComponent, function () {
					callback(me.response.loadComponent);
				})
			}
			else {
				callback(null, me.response, me.request);
			}
		};

		/**
		 *
		 * @return {boolean}
		 * @this Response
		 */
		Response.prototype.hasError = function () {
			return this.response.success !== true;
		};

		/**
		 * @this Response
		 *
		 */
		Response.prototype.dump = function () {
			console.log(this.response);
		};

		Response.prototype.first = function () {
			return this.response.first;
		};

		Response.prototype.firstPage = function () {
			return this.response.firstPage;
		};

		Response.prototype.haveToPaginate = function () {
			return this.response.haveToPaginate;
		};

		Response.prototype.last = function () {
			return this.response.last;
		};

		Response.prototype.lastPage = function () {
			return this.response.lastPage;
		};

		Response.prototype.limit = function () {
			return this.response.limit;
		};

		Response.prototype.links = function () {
			return this.response.links;
		};

		Response.prototype.page = function () {
			return this.response.page;
		};

		Response.prototype.total = function () {
			return this.response.total;
		};

		Response.prototype.pagination = function () {
			return {
				first         : this.response.first,
				firstPage     : this.response.firstPage,
				haveToPaginate: this.response.haveToPaginate,
				last          : this.response.last,
				lastPage      : this.response.lastPage,
				limit         : this.response.limit,
				links         : this.response.links,
				page          : this.response.page,
				total         : this.response.total
			}
		};

		/**
		 * @param response
		 */
		Response.prototype.initialize = function (response) {
			response = response || {};

			var me = this;

			me.response = {
				action        : '',
				apiVersion    : '',
				data          : {},
				method        : '',
				resource      : '',
				description   : '',
				success       : false,
				error         : {
					code       : 0,
					debug      : null,
					description: '',
					msg        : ''
				},
				first         : 0,
				firstPage     : 0,
				haveToPaginate: false,
				last          : 0,
				lastPage      : 0,
				limit         : 0,
				links         : [],
				page          : 0,
				total         : 0,
				start         : 0,
				filter        : {},
				sort          : {},
				loadComponent : '',
				forkComponent : false,
				request       : {},
				sessionType   : ''
			};

			for (var line in response) {
				if (response.hasOwnProperty(line) && me.response.hasOwnProperty(line)) {
					me.response[line] = response[line];
				}
			}

			if (response.hasOwnProperty('error') && typeof response.error === 'object') {
				me.response.success = (!('error' in response));
				for (var errorLine in response.error) {
					if (response.error.hasOwnProperty(errorLine) && me.response.error.hasOwnProperty(line)) {
						me.response.error[line] = response.error[line];
					}
				}
			}
			else {
				me.response.success = true;
			}

		};

		return Response;
	}
});

'use strict';

/** @namespace Bs.Storage */

Bs.define('Bs.Storage', {
	construct: function () {


		/**
		 * returns a StorageAlt Instance
		 *
		 */
		var _getStorageAlt = function () {

			function StorageAlt() {
				this.store = {};
			}

			/**
			 *
			 * @param key
			 * @param value
			 */
			StorageAlt.prototype.setItem = function (key, value) {
				this.store[key] = value;
			};

			/**
			 *
			 * @param key
			 * @returns {*}
			 */
			StorageAlt.prototype.getItem = function (key) {
				if (typeof this.store[key] != 'undefined') {
					return this.store[key];
				}
				else {
					return null;
				}
			};

			/**
			 *
			 * @param key
			 */
			StorageAlt.prototype.removeItem = function (key) {
				this.store[key] = undefined;
			};

			/**
			 *
			 */
			StorageAlt.prototype.clear = function () {
				this.store = {};
			};
			/**
			 *
			 */
			StorageAlt.prototype.hasOwnProperty = function (key) {
				return this.store.hasOwnProperty(key);
			};

			return new StorageAlt();
		};

		/**
		 * Says if local storage is supported by browser and R/W available
		 *
		 * @returns {boolean}
		 */
		var _isLocalStorageSupported = function () {

			if (typeof localStorage !== 'object') {
				return false;
			}
			try {
				localStorage.setItem('support', 'support');
				if(localStorage.getItem('support') !== 'support'){
					return false;
				}
				localStorage.removeItem('support');
				return true;
			} catch (error) {
				return false;
			}
		};


		/**
		 * Private object native localStorage if supported or storageAlt
		 * {object}
		 */
		var _storage;


		this.hasItem = function (key) {
			return _storage.hasOwnProperty(key);
		};


		/**
		 * Save a JSON encoded object in browser localStorage
		 * @param key
		 * @param object
		 * @returns {*}
		 */
		this.setItem = function (key, object) {
			return _storage.setItem(key, JSON.stringify(object));
		};

		/**
		 * return an object previously saved in browser localStorage
		 * @param key
		 * @returns {*}
		 */
		this.getItem = function (key) {
			var v = _storage.getItem(key);
			return (v == "undefined") ? v : JSON.parse(v);
		};

		this.removeItem = function (key) {
			return _storage.removeItem(key);
		};

		/**
		 * Clear all entries in localStorage
		 */
		this.clear = function () {
			_storage.clear();
		};


			if(_isLocalStorageSupported() === true){
				_storage = localStorage;
			}
			else{
				console.warn('Your device does not support localStorage. Some features will be disabled and you will need to sign in again if you reload the page. On iOS (iPhone, iPad) you can disable "Private browsing" in Safari to enable all the application features');
				_storage = _getStorageAlt();
			}

		return this;
	}
});

/**
 * File description
 *
 * @package
 * @version      :$
 *               :$
 * @link         :$
 * @author       :$
 */
'use strict';

/** @namespace Bs.Stylesheet */

Bs.define('Bs.Stylesheet', {
	construct: function () {

		var count = 0;

		var loadedUrls = [];

		var head = document.getElementsByTagName('head')[0];

		var engine = window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)|AndroidWebKit\/([^ ;]*)/) || 0;

		// use <style> @import load method (IE < 9, Firefox < 18)
		var useImportLoad = false;

		// set to false for explicit <link> load checking when onload doesn't work perfectly (webkit)
		var useOnload = true;

		// trident / msie
		if (engine[1] || engine[7])
			useImportLoad = parseInt(engine[1]) < 6 || parseInt(engine[7]) <= 9;
		// webkit
		else if (engine[2] || engine[8])
			useOnload = false;
		// gecko
		else if (engine[4])
			useImportLoad = parseInt(engine[4]) < 18;

		//main api object
		var Stylesheet = {};

		// <style> @import load method
		var curStyle, curSheet;
		/**
		 *
		 * @param count
		 */
		var createStyle = function (count) {
			curStyle = document.createElement('style');
			head.appendChild(curStyle);
			curStyle.id = 'stylesheet-' + count;
			curSheet = curStyle.styleSheet || curStyle.sheet;
		};
		var ieCnt = 0;
		var ieLoads = [];
		var ieCurCallback;

		var createIeLoad = function (url, count) {
			curSheet.addImport(url);
			curStyle.onload = function () { processIeLoad() };

			ieCnt++;
			if (ieCnt == 31) {
				createStyle(count);
				ieCnt = 0;
			}
		};

		var processIeLoad = function () {
			ieCurCallback();

			var nextLoad = ieLoads.shift();

			if (!nextLoad) {
				ieCurCallback = null;
				return;
			}

			ieCurCallback = nextLoad[1];
			createIeLoad(nextLoad[0]);
		};

		var importLoad = function (url, count, callback) {
			if (!curSheet || !curSheet.addImport) {
				createStyle(count);
			}

			if (curSheet && curSheet.addImport) {
				//old IE
				if (ieCurCallback) {
					ieLoads.push([url, callback]);
				}
				else {
					createIeLoad(url, count);
					ieCurCallback = callback;
				}
			}
			else {
				// old Firefox
				curStyle.textContent = '@import "' + url + '";';

				var loadInterval = setInterval(function () {
					try {
						curStyle.sheet.cssRules;
						clearInterval(loadInterval);
						callback();
					} catch (e) {}
				}, 10);
			}
		};

		// <link> load method
		/**
		 *
		 * @param url
		 * @param count
		 * @param callback
		 */
		var linkLoad = function (url, count, callback) {
			var link = document.createElement('link');
			link.id = 'stylesheet-' + count;
			link.type = 'text/css';
			link.rel = 'stylesheet';
			if (useOnload)
				link.onload = function () {
					link.onload = function () {};
					// for style dimensions queries, a short delay can still be necessary
					setTimeout(callback, 7);
				};
			else
				var loadInterval = setInterval(function () {
					for (var i = 0; i < document.styleSheets.length; i++) {
						var sheet = document.styleSheets[i];
						if (sheet.href == link.href) {
							clearInterval(loadInterval);
							return callback();
						}
					}
				}, 10);
			link.href = url;
			head.appendChild(link);
		};

		/** @namespace Bs.Stylesheet.load */
		/**
		 *
		 * @param url
		 * @param callback
		 * @return {string} 'stylesheet-XXX'
		 */
		Stylesheet.load = function (url) {
			var dfd = new $.Deferred(),
				index = loadedUrls.indexOf(url);

			if (index > -1) {
				$('#stylesheet-' + index).remove();
				dfd.resolve();
			} else {
				++count;
				loadedUrls[count] = url;
				(useImportLoad ? importLoad : linkLoad)(url, count, function () {
					dfd.resolve();
				});
			}
			return dfd;
		};

		Stylesheet.unload = function (id) {
			//$('#' + id).remove();
		};

		return Stylesheet;
	}
});

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

		View.prototype.getPartial = function (name, ns) {
			var me = this,
				dfd = new $.Deferred(),
				fullName,
				urlTemplate;

			if (!ns) {
				ns = me.urlPath;
			}
			fullName = ns + '/tpl/' + name;

			if (Handlebars.partials.hasOwnProperty(fullName)) {
				dfd.resolve();
			}
			else {
				urlTemplate = me.urlRoot + '/' + fullName + '.partial';
				Bs.Template.loadPartial(urlTemplate, fullName).then(function () {
					dfd.resolve();
				});
			}

			dfd.then(function () {
				if (!Handlebars.partials[fullName]) {
					throw Error('Partial "' + fullName + '" Not found');
				}
			});

			return dfd;
		};

		View.prototype.getTpl = function (name, data, ns) {
			var me = this,
				dfd = new $.Deferred(),
				dfdFinal = new $.Deferred(),
				fullName,
				urlTemplate;

			if (!ns) {
				ns = me.urlPath;
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
			var me = this, url;

			if (me.hasStylesheet) {
				url = me.urlRoot + '/' + me.cssPath;
				return Bs.Stylesheet.load(url);
			}
			else {
				return new $.Deferred().resolve();
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
				dfd.resolve();
			}
			else {
				if (Handlebars.templates.hasOwnProperty(tplName)) {
					view.tpl = Handlebars.templates[tplName];
					dfd.resolve();
				}
				else {
					urlTemplate = view.urlRoot + '/' + view.templatePath;
					Bs.Template.load(urlTemplate, view.urlPath + '/' + view.camelName).then(function () {
						view.tpl = Handlebars.templates[tplName];
						dfd.resolve();
					});
				}
			}
			return dfd;
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

"use strict";

Bs.define('Bs.View.Module', {
	extend     : 'Bs.View',
	hasTemplate: false,
	hasTranslation: false,
	hasStylesheet : false,
	options    : {
		request : null,
		response : null
	},

	getRequest: function() {
		return this.options.request;
	},

	getResponse: function() {
		return this.options.response;
	}
});

/**
 * File description
 *
 * @package
 * @version      :$
 *               :$
 * @link         :$
 * @author       :$
 */
"use strict";

Bs.define('Bs.View.Modal', {
	extend        : 'Bs.View',
	autoRender    : true,
	elClass       : 'bootstrap',
	hasTranslation: false,
	autoMask      : false,
	options       : {
		view       : "",
		content    : "",
		title      : "",
		subTitle   : "",
		icon       : "",
		/**
		 * Available sizes are "sm" and "lg"
		 */
		size       : "",
		bodyPadding: true,
		viewOptions: null,
		closable   : true,
		backdrop   : 'static'
	},

	beforeCreateSubView: function () {
		var me = this,
			$modal = me.$el.find('.modal');

		if (me.options.view) {
			var options = $.extend(true, {
				"onbeforeDestroy"  : function () {
					// Before destroying the subview, hide th modal container
					$modal.modal('hide');
				},
				/**
				 * Override default "ready" behavior, prevent it,
				 * it will be fired again after modal will be shown
				 */
				"onafterInitialize": function () {
					var that = this;
					that.one("ready", function (e) {
						if (e) {
							e.preventDefault();
							e.stopImmediatePropagation();
						}
						return false;
					});
				}

			}, me.options.viewOptions);

			$modal.find('.view-content')
				.attr('data-create', me.options.view)
				.data('create', me.options.view)
				.data('options', options);
		}
		else {
			$modal.find('.view-content').html(me.options.content)
		}
	},

	close: function () {
		$(window).off("resize", this.resize);
		this.$el.find('.modal').modal('hide');
	},

	resize: function () {
		this.$el.find(".view-content").css({height: $(window).height() - 180});
	},

	afterRender: function () {

		var me = this,
			$modal = me.$el.find('.modal');

		if (me.options.size !== "") {
			$modal.find('.modal-dialog').addClass('modal-' + me.options.size)
		}

		$modal.one('hidden.bs.modal', function () {
			me.destroy();
		});

		$modal.find('.modal-title-main').html(me.options.title);
		$modal.find('.modal-title-sub').html(me.options.subTitle);
		$modal.find('.modal-icon').addClass(me.options.icon);
		$modal.one('shown.bs.modal', function () {
			for (var view in me.subViewList) {
				// re-trigger previously prevented "ready" event on subViews
				if (me.subViewList.hasOwnProperty(view)) {
					me.subViewList[view].trigger('ready');
				}
			}
			// In case, focus first input if exists
			me.$el.find('.view-content').find('input').first().focus().select();

			// Draggable
			$(me.$el.find(".modal-content")).draggable({
				handle: ".modal-header"
			});

			if (me.options.size === Bs.View.Modal.SIZE_MAX) {
				$(window).on("resize", $.proxy(me.resize, me));
				me.resize();
			}
			me.trigger('ready');
		});

		$modal.modal({
			backdrop: me.options.backdrop,
			keyboard: me.options.closable
		}).css({"z-index": 1051 + me.zIndex});

		$modal.data('bs.modal').$backdrop.css({"z-index": 1050 + me.zIndex});
	},

	mask : function(text){
		return Bs.View.prototype.mask.call(this, text, this.$el.find('.modal-body'));
	},
	unmask : function(noFade, callback){
		return Bs.View.prototype.unmask.call(this, this.$el.find('.modal-body'), noFade, callback);
	},
	events: {
		"click .view-close": function () {
			this.$el.find('.modal').modal('hide');
		}
	}
}, function () {
	Bs.View.Modal.SIZE_SMALL = "sm";
	Bs.View.Modal.SIZE_LARGE = "lg";
	Bs.View.Modal.SIZE_MAX = "max";
	Bs.View.Modal.SIZE_FULL_WIDTH = "fullWidth";
	Bs.View.Modal.SIZE_DEFAULT = "";
});

"use strict";
Bs.define('Bs.View.Modal.Alert', {
	extend         : 'Bs.View.Modal',
	require        : ['Bs.View.Alert'],
	templatePath   : 'inherit',
	translationPath: 'inherit',
	options        : {
		type     : 'info',
		title    : 'info.title',
		msg      : "",
		translate: true
	},
	initialize     : function () {
		var me = this;
		me.options.dismissible = false;
		me.options.viewOptions = $.extend(true, {}, me.options);
		me.options.title = null;
		me.options.view = 'Bs.View.Alert';
	}
}, function () {

	Bs.View.Modal.Alert.errorPage = function (msg, translated) {
		$('body').empty().addClass('bootstrap');
		return new Bs.View.Modal.Alert({
			type     : 'danger',
			title    : 'danger.title',
			msg      : msg,
			translate: !translated
		});
	};

	Bs.View.Modal.Alert.Error = function (msg, translated) {
		return new Bs.View.Modal.Alert({
			type     : 'danger',
			title    : 'danger.title',
			msg      : msg,
			translate: !translated
		})
	};

	Bs.View.Modal.Alert.Warning = function (msg, translated) {
		return new Bs.View.Modal.Alert({
			type     : 'warning',
			title    : 'warning.title',
			msg      : msg,
			translate: !translated
		})
	};

	Bs.View.Modal.Alert.Success = function (msg, translated) {
		return new Bs.View.Modal.Alert({
			type     : 'success',
			title    : 'success.title',
			msg      : msg,
			translate: !translated
		})
	};

	Bs.View.Modal.Alert.Info = function (msg, translated) {
		return new Bs.View.Modal.Alert({
			type     : 'info',
			title    : 'info.title',
			msg      : msg,
			translate: !translated
		})
	}
});

/**
 * Created by steve on 15/09/16.
 */
"use strict";

Bs.define('Bs.View.Loading', {
	extend        : 'Bs.View',
	elClass       : 'bootstrap',
	hasTranslation: false,
	options       : {
		text: ""
	},

	afterInitialize: function () {
		if (typeof this.options.text === "object" && this.options.text !== null) {
			this.options.text = this.options.text.html();
		}
	},

	autoMask: false,
	urlRoot : Bs.getConfig().urlCore
});

"use strict";

Bs.define('Bs.View.Collection', {

	require : [
		'Bs.Collection',
		'Bs.View.Modal.Alert'
	],
	/**
	 * View.Collection is based on View
	 * To use Bs.View functions : this.constructor.prototype.[function].call(this, args);
	 */
	extend: 'Bs.View',

	/**
	 * Name of collection used.
	 * Converted to instance of Collection
	 */
	collection: null,

	collectionOptions: null,

	collectionCache: false,
	/**
	 * View used by this ViewCollection
	 * @type {{View}|string}
	 */
	itemView       : "",

	/**
	 *
	 */
	viewOptions: null,

	/*
	 * Store of Model instances
	 * @type {[View]}
	 */
	items: null,
	itemsByPk: null,

	/**
	 *
	 */
	id: 'ViewCollection',

	/**
	 *
	 */
	name: 'ViewCollection',

	/**
	 *
	 */
	fileName: 'Collection',

	/**
	 *
	 */
	path: 'Collection',

	/**
	 * View to load if collection is empty when rendered
	 */
	emptyCollectionView: 'Bs.View.Collection.Empty',

	/**
	 * html fragment empty to use instead of View
	 */
	emptyCollectionTemplate: null,

	/**
	 *
	 */
	autoFetch     : false,

	/**
	 *
	 */
	hasTemplate   : false,

	/**
	 *
	 */
	hasTranslation: false,

	/**
	 *
	 */
	hasStylesheet : false,

	options : {
		preventReady: false
	},

	data: {
		$elCollection     : null,
		$elEmptyCollection: null
	},

	initialize: function () {
		var me = this,
			dfd = new $.Deferred(),
			dfdCollection = new $.Deferred(),
			dfdView = new $.Deferred(),
			autoRenderState = me.autoRender;

		me.items = [];
		me.itemsByPk = {};
		me.autoRender = false;
		if (typeof me.collection === "string") {
			Bs.require(Bs.Util.addPrefixIfMissing('Collection', me.collection), function (createCollection) {
				me.collection = createCollection(me.collectionOptions);
				if (me.collectionCache) {
					me.collection.cache = true;
				}
				dfdCollection.resolve();
			});
		}
		else {
			dfdCollection.resolve();
		}

		if (!me.itemView) {
			throw new Error("No item view defined");
		}
		Bs.require(Bs.Util.addPrefixIfMissing('View', me.itemView), function () {
			dfdView.resolve();
		});

		$.when(dfdCollection, dfdView).then(function () {
			if (me.autoFetch) {
				me.bindData = true;
				if(autoRenderState){
					me.fetchAndRender().then(function(){
						dfd.resolve();
					});
				}
				else{
					me.getCollection().fetch({done : function(){
						dfd.resolve();
					}});
				}
			}
			else {
				if(autoRenderState){
					me.render().then(function () {
						dfd.resolve();
					});
				}
				else {
					dfd.resolve();
				}
			}
		});

		return dfd;
	},

	fetchAndRender: function (fetchOptions) {
		var me = this,
			dfd = new $.Deferred();

		fetchOptions = fetchOptions || {};
		$.extend(fetchOptions, {
			done: function () {
				me.render().then(function () {
					dfd.resolve();
				});
			},
			fail: function () {
				me.destroy();
				Bs.View.Modal.Alert.Error('danger.msg.notFetched');
				throw new Error('Unable to autoFetch collection');
			}
		});

		if (me.getCollection() !== null) {
			if (me.collectionCache && me.getCollection().isInPool()) {
				me.collection = me.getCollection().getFromPool();
				me.render().then(function () {
					dfd.resolve();
				});
			}
			else {
				me.getCollection().fetch(fetchOptions);
			}
		}
		else {
			me.render().then(function () {
				dfd.resolve();
			});
		}

		return dfd;
	},

	afterRender: function () {
		// DO NOT TRIGGER READY, handled below
	},

	render: function () {
		var me = this,
			bindDataItems = me.bindData,
			dfd = new $.Deferred();

		me.bindData = false;
		Bs.View.prototype.render.call(me).then(function(){
			me.bindData = bindDataItems;

			me.data.$elCollection = me.$el.find('[data-collection]');
			me.data.$elEmptyCollection = me.$el.find('[data-empty-collection]');

			// Determine elCollection and empty it
			if (!me.data.$elCollection.length) {
				me.data.$elCollection = me.$el;
			}

			// Determine elEmptyCollection and empty it if exists
			if (!me.data.$elEmptyCollection.length) {
				me.data.$elEmptyCollection = me.data.$elCollection;
			}

			me.renderCollection().then(function () {
				dfd.resolve();
				if(!me.options.preventReady) {
					me.trigger('ready');
				}

				// Override default add/remove behavior for bound collections
				if (me.bindData) {
					var previousAddFn = me.getCollection().add;
					me.collection.add = function (data) {
						var item = previousAddFn.call(me.collection, data);
						if (me.rendered && item.isNew() === false) {
							me.renderOne(item);
						}
						return item;
					};

					var previousRemoveFn = me.getCollection().remove;
					me.collection.remove = function (model) {
						previousRemoveFn.call(me.collection, model);
						me.renderCollection();
						return model;
					}
				}
			});
		});
		return dfd;
	},

	/**
	 *
	 * @param [data]
	 * @returns {View}
	 */
	addItem : function(data){
		var me = this;
		if (me.data.$elEmptyCollection && me.getCollection().isEmpty()) {
			me.data.$elEmptyCollection.empty();
		}

		return me.renderOne(me.getCollection().add(data));
	},
	/**
	 *
	 * @param {{}} data
	 * @param {boolean} editable
	 * @returns {View}
	 */
	addTmpItem : function(data, editable){
		var model = Bs.create(this.getCollection().model, data);
		var view =  this.renderOne(model);
		if(editable){
			return view.edit();
		}

		return view;
	},

	renderOne: function (model) {
		var me = this;
		me.viewOptions = me.viewOptions || {};
		var options = $.extend(true, {}, me.viewOptions, {
			"bindData"       : me.bindData,
			"renderTo"       : me.data.$elCollection,
			"model"          : model,
			getCollection    : function () {
				return me.getCollection();
			},
			getViewCollection: function () {
				return me;
			},
			viewCollection   : me
		});

		var view = Bs.create(Bs.Util.addPrefixIfMissing('View', me.itemView), options);
		me.items.push(view);
		if(model && "getPK" in model) {
			me.itemsByPk[model.getPK(true)] = view;
		}

		return view;
	},

	renderEmptyCollection: function (callback) {
		var me = this;
		callback = callback || function(){};
		if (me.emptyCollectionTemplate) {
			me.data.$elEmptyCollection.html(me.emptyCollectionTemplate);
			me.translate();
		}
		else {
			Bs.require(me.emptyCollectionView, function (emptyCollectionView) {
				new emptyCollectionView({
					"renderTo": me.data.$elEmptyCollection,
					"options" : {
						viewCollection: me
					},
					onready   : function () {
						callback();
					}
				});
			});
		}
	},
	renderErrorCollection: function (callback) {
		var me = this;
		callback = callback || function () {};
		Bs.require('Bs.View.Collection.Error', function (emptyCollectionView) {
			new emptyCollectionView({
				"renderTo": me.data.$elEmptyCollection.empty(),
				"options" : {
					viewCollection: me
				},
				onready   : function () {
					callback();
				}
			});
		});
	},

	renderCollection: function (append) {
		var me = this,
			dfd = new $.Deferred(),
			progress = 0,
			total = 0,
			options,
			createView = function (model) {
				var view;
				options.model = model;
				view = Bs.create(Bs.Util.addPrefixIfMissing('View', me.itemView), options);
				me.items.push(view);
				if(model && "getPK" in model) {
					me.itemsByPk[model.getPK(true)] = view;
				}
				view.on("ready", function () {
					dfd.notify(view);
				});
			};

		if (!append) {
			me.items = [];
			me.itemsByPk = {};
			me.data.$elCollection.empty();
			me.data.$elEmptyCollection.empty();
		}
		if (me.getCollection().isEmpty() && (me.emptyCollectionView || me.emptyCollectionTemplate)) {
			me.renderEmptyCollection(function(){
				dfd.resolve();
			});
		}
		else {
			total = me.getCollection().getLength();
			dfd.progress(function () {
				++progress;
				if (progress === total) {
					dfd.resolve();
				}
				else {
					createView(me.getCollection().getAt(progress))
				}
			});

			me.viewOptions = me.viewOptions || {};
			options = $.extend(true, {}, me.viewOptions, {
				"bindData"       : me.bindData,
				"renderTo"       : me.data.$elCollection,
				viewCollection   : me,
				getCollection    : function () {
					return me.getCollection();
				},
				getViewCollection: function () {
					return me;
				}
			});

			createView(me.getCollection().getAt(0)); // here we have at least one item;

		}

		return dfd;
	},

	/**
	 *
	 * @return {Bs.Collection}
	 */
	getCollection: function () {
		return this.collection
	},

	/**
	 *
	 * @param callback
	 */
	each: function (callback) {
		var me = this;
		for (var i = 0, item; item = me.items[i]; i++) {
			callback(item, i);
		}
	}

});

"use strict";

Bs.define('Bs.View.Collection.Error', {
	extend       : 'Bs.View',
	hasStylesheet: false,
	urlRoot      : Bs.getConfig().urlCore,
	autoMask     : false
});

"use strict";

Bs.define('Bs.View.Collection.Empty', {
	extend       : 'Bs.View',
	hasStylesheet: false,
	urlRoot      : Bs.getConfig().urlCore,
	autoMask     : false
});

"use strict";

Bs.define('Bs.View.Collection.Item', {
	extend        : 'Bs.View',
	restoreView   : 'Bs.View.Collection.Item.Restore',
	editView      : null,
	abstract      : true,
	restorable    : false,
	editable      : false,
	viewCollection: null,
	autoMask      : false,
	data          : {
		$restoreEl: null
	},

	initialize: function () {
		var me = this,
			dfd = new $.Deferred();

		if (me.editView !== null) {
			Bs.require(me.editView, function () {
				dfd.resolve();
			});
		}
		else {
			dfd.resolve();
		}

		return dfd;
	},

	/**
	 * 
	 * @return {View}
	 */
	edit: function () {
		var me = this,
			$ct = $("<div></div>"),
			model = me.getModel(),
			edit = Bs.create(me.editView, {
					renderTo: $ct,
					model   : model,
					itemView: me
			});

		edit.on("afterRender", function () {
			me.$el.hide();
			me.$el.after(edit.$el);
		});

		return edit;
	},

	getTplData : function(){
		return this.getModel();
	},

	/**
	 *
	 * @returns {Bs.View.Collection}
	 */
	getViewCollection: function () {
		return this.viewCollection;
	},

	"delete": function () {
		var me = this;
		me.mask();
		me.getModel().delete({
			done : function(){
				me.getViewCollection().getCollection().remove(this);
				me.unmask();
				me.remove();
			},
			fail : function(){
				me.unmask();
				Bs.require('Bs.View.Modal.Alert', function(){
					Bs.View.Modal.Alert.Error('danger.msg.notSaved');
				});
			}
		});
	},
	remove: function () {
		var me = this;
		me.getModel().suppress();
		me.options.restorable = false; // TODO
		if(me.options.restorable){
			me.$restoreEl = me.$el;
			me.$el.css({"position": "relative"});
			Bs.require(me.restoreView, function (View) {
				new View({
					renderTo: me.$el
				});
			});
		}
		else {
			// TODO
			//if(me.getViewCollection().getCollection().length === 1){
			//	me.getViewCollection().renderEmptyCollection();
			//}
			//else {
				me.$el.slideUp();
			//}
		}
	},

	restore: function () {
		var me = this;
		me.options.restorable = false; // TODO
		if(me.options.restorable){

		}
		else{
			me.$el.slideDown();
		}
	}

});

"use strict";

Bs.define('Bs.View.Collection.Item.Edit', {
	extend        : 'Bs.View',
	hasTranslation: false,
	hasStylesheet : false,
	hasTemplate   : false,
	elTag         : 'tr',
	bindData      : true,
	itemView      : null,

	cancel: function () {
		var me = this, model = me.getModel();
		model.reset(); // restore values if changed
		me.destroy(); // remove Edit view
		if (model.isNew()) {
			me.itemView.destroy(); // remove Item view if it is temporary
		}
		me.itemView.$el.show(); // restore Item View
		me.afterAlways();
	},

	save: function () {
		var me = this,
			model = me.getModel(),
			isNew = model.isNew(),
			viewCollection = me.itemView.getViewCollection();

		me.disableInputs();

		me.getModel().save({
			apiAction : "?useSlim=1",
			done  : function () {
				if (isNew) {
					viewCollection.addItem(model);
				}
				else{
					me.itemView.$el.show().data("view").reset()
				}
				me.destroy();
				me.afterDone(model);
			},
			fail  : function (r) {
				me.afterFailed(r);
			},
			always: function () {
				me.enableInputs();
				me.afterAlways();
			}
		});
	},


	/**
	 *
	 * @param {Model} model
	 */
	afterDone: function (model) {
		Bs.View.Alert.Toast.success();
		// Implement me !
	},

	/**
	 *
	 * @param {Response} response
	 */
	afterFailed: function (response) {
		Bs.View.Alert.error(response.getErrorDescription());
		// Implement me !
	},

	/**
	 *
	 */
	afterAlways: function () {
		// Implement me !
	}

});

"use strict";

Bs.define('Bs.View.Collection.Item.Restore', {
	extend  : 'Bs.View',
	hasTranslation : false,
	hasStylesheet: false,
	hasTemplate : false,
	tpl : '<div>TODO</div>'
});
"use strict";

Bs.define('Bs.View.Alert', {
	extend       : 'Bs.View',
	hasStylesheet: false,
	autoMask     : false,
	elStyle      : {position: 'relative'},
	elClass      : "bootstrap",
	options      : {
		translate      : true,
		translateTitle : true,
		icon           : null,
		type           : 'info',
		title          : null,
		hasTitle       : true,
		msg            : null,
		view           : null,
		viewOptions    : null,
		dismissible    : true,
		autoDismissible: false,
		delay          : 4000
	},

	initialize: function () {
		var me = this;
		me.callParent("initialize");
		if (!me.options.title) {
			if (me.options.type === 'default') {
				me.options.hasTitle = false;
			}
			else {
				me.options.title = me.options.type + '.title';
			}
		}

		if (!me.options.icon) {
			switch (me.options.type) {
				case 'danger':
					me.options.icon = 'fa fa-exclamation-circle';
					break;
				case 'warning':
					me.options.icon = 'fa fa-exclamation-triangle';
					break;
				case 'success':
					me.options.icon = 'fa fa-check';
					break;
				case 'info':
					me.options.icon = 'fa fa-info-circle';
					break;
			}
		}
		if (me.options.type === 'danger') {
			me.options.autoDismissible = false;
		}
		if (me.options.view) {
			me.options.translate = false;
		}
		else {
			if (me.options.msg instanceof jQuery) {
				me.options.msg = $('<div></div>').html(me.options.msg).html();
				me.options.translate = false;
			}
			else {
				if ($.isArray(me.options.msg)) {
					me.options.msg = me.options.msg[0].urlPath + ':' + me.options.msg[1]
				}
				else if (!me.options.msg) {
					if (me.options.type === "success") {
						me.options.msg = Bs.Lang.t("success_");
					}
					else {
						me.options.msg = Bs.Lang.t('unknown_error');
					}
				}
			}
		}
		if ($.isArray(me.options.title)) {
			me.options.title = me.options.title[0].urlPath + ':' + me.options.title[1]
		}
	},

	render: function () {
		var me = this;
		me.callParent("render");
		me.$el.hide();

		if (me.options.view) {
			Bs.require(me.options.view, function (View) {
				var view,
					viewOptions = me.options.viewOptions || {};

				viewOptions.renderTo = me.$el.find('.content');
				view = new View(viewOptions);
				me.renderCallback();
				view.on('close', function () {
					me.trigger('close');
				});
			})
		}
		me.renderCallback();
		me.trigger("ready");
	},

	renderCallback: function () {
		var me = this;

		me.$el.slideDown(function () {
			me.trigger('shown');
			me.$el.find('.alert-icon').fadeIn();
		});
		if (me.options.autoDismissible) {
			setTimeout(function () {
				me.close();
			}, me.options.delay)
		}
	},

	close: function (e) {
		if (e) {
			e.preventDefault();
			e.stopPropagation();
		}
		var me = this;
		me.$el.find('.alert-icon').hide();
		this.$el.slideUp(function () {
			me.$el.remove();
		});
		return false;
	},

	events: {
		"click .close": "close"
	}

}, function () {
	Bs.View.Alert.error = function (msg, renderTo, translated) {
		return new Bs.View.Alert({
			type     : 'danger',
			title    : 'danger.title',
			msg      : msg || 'danger.msg.default',
			renderTo : renderTo || 'body',
			translate: !translated
		});
	};

	Bs.View.Alert.warning = function (msg, renderTo, translated) {
		return new Bs.View.Alert({
			type     : 'warning',
			title    : 'warning.title',
			msg      : msg,
			renderTo : renderTo || 'body',
			translate: !translated
		});
	};

	Bs.View.Alert.success = function (msg, renderTo, translated) {
		return new Bs.View.Alert({
			type     : 'success',
			title    : 'success.title',
			msg      : msg || 'success.msg.default',
			renderTo : renderTo || 'body',
			translate: !translated
		});
	};

	Bs.View.Alert.info = function (msg, renderTo, translated) {
		return new Bs.View.Alert({
			type     : 'info',
			title    : 'info.title',
			msg      : msg,
			renderTo : renderTo || 'body',
			translate: !translated
		});
	};

	Bs.View.Alert.apiProblem = function (response, renderTo) {
		console.log(response)
		if(response && response !== null && response.status && response.detail && response.title) {
			return new Bs.View.Alert({
				type          : (response.status >= 500) ? "danger" : "warning",
				msg           : response.detail,
				translate     : false,
				translateTitle: false,
				title         : response.title,
				delay         : 30000,
				renderTo      : renderTo || 'body'
			});
		}
		else {
			return Bs.View.Alert.error(null, renderTo);
		}
	}

});

"use strict";

Bs.define('Bs.View.Alert.Toast', {
	extend         : 'Bs.View.Alert',
	translationPath: 'inherit',

	initialize: function () {
		var me = this;

		me.callParent('initialize');
		var $body = $('body');
		if ($body.find('#toast-container').length === 0) {
			$body.append('<div id="toast-container"></div>');
		}
		this.renderTo = $body.find('#toast-container');
		this.options.autoDismissible = true;
	}

}, function () {
	Bs.View.Alert.Toast.error = function (msg, translated) {
		return new Bs.View.Alert.Toast({type: 'danger', msg: msg, translate : !translated})
	};

	Bs.View.Alert.Toast.warning = function (msg, translated) {
		return new Bs.View.Alert.Toast({type: 'warning', msg: msg, translate : !translated})
	};

	Bs.View.Alert.Toast.success = function (msg, translated) {
		return new Bs.View.Alert.Toast({type: 'success', msg: msg, translate : !translated})
	};

	Bs.View.Alert.Toast.info = function (msg, translated) {
		return new Bs.View.Alert.Toast({type: 'info', msg: msg, translate : !translated})
	};

	Bs.View.Alert.Toast.default = function (msg, translated) {
		return new Bs.View.Alert.Toast({type: 'default', msg: msg, translate : !translated})
	};

	Bs.View.Alert.Toast.apiProblem = function (response) {
		if (response && response !== null && response.status && response.detail && response.title) {
			return new Bs.View.Alert.Toast({
				type          : (response.status >= 500) ? "danger" : "warning",
				msg           : response.detail,
				translate     : false,
				translateTitle: false,
				title         : response.title,
				delay         : 30000
			});
		}
		else {
			return Bs.View.Alert.Toast.error(null, renderTo);
		}
	}
});

/**
 * File description
 *
 * @package
 * @version      :$
 *               :$
 * @link         :$
 * @author       :$
 */

"use strict";

Bs.define('Bs.Util.Browser', {
	construct: function () {

		var _versionSearchString;

		var _searchString = function (data) {
				for (var i = 0; i < data.length; i++) {
					var dataString = data[i].string;
					var dataProp = data[i].prop;
					_versionSearchString = data[i].versionSearch || data[i].identity;
					if (dataString) {
						if (dataString.indexOf(data[i].subString) != -1)
							return data[i].identity;
					}
					else if (dataProp)
						return data[i].identity;
				}
			},

			_searchVersion = function (dataString) {
				var index = dataString.indexOf(_versionSearchString);
				if (index == -1) return;
				return parseFloat(dataString.substring(index + _versionSearchString.length + 1));
			},

			_dataBrowser = [
				{
					string   : navigator.userAgent,
					subString: "Chrome",
					identity : "Chrome"
				},
				{
					string       : navigator.userAgent,
					subString    : "OmniWeb",
					versionSearch: "OmniWeb/",
					identity     : "OmniWeb"
				},
				{
					string       : navigator.vendor,
					subString    : "Apple",
					identity     : "Safari",
					versionSearch: "Version"
				},
				{
					prop         : window.opera,
					identity     : "Opera",
					versionSearch: "Version"
				},
				{
					string   : navigator.vendor,
					subString: "iCab",
					identity : "iCab"
				},
				{
					string   : navigator.vendor,
					subString: "KDE",
					identity : "Konqueror"
				},
				{
					string   : navigator.userAgent,
					subString: "Firefox",
					identity : "Firefox"
				},
				{
					string   : navigator.vendor,
					subString: "Camino",
					identity : "Camino"
				},
				{		// for newer Netscapes (6+)
					string   : navigator.userAgent,
					subString: "Netscape",
					identity : "Netscape"
				},
				{
					string       : navigator.userAgent,
					subString    : "MSIE",
					identity     : "Explorer",
					versionSearch: "MSIE"
				},
				{
					string       : navigator.userAgent,
					subString    : "Gecko",
					identity     : "Mozilla",
					versionSearch: "rv"
				},
				{ 		// for older Netscapes (4-)
					string       : navigator.userAgent,
					subString    : "Mozilla",
					identity     : "Netscape",
					versionSearch: "Mozilla"
				},
				{ 		// IE11
					string       : navigator.userAgent,
					subString    : "Trident",
					identity     : "Explorer",
					versionSearch: "rv:"
				},
				{ 		// Edge
					string       : navigator.userAgent,
					subString    : "Edge",
					identity     : "Explorer",
					versionSearch: "Edge/"
				}
			],

			_dataOS = [
				{
					string   : navigator.platform,
					subString: "Win",
					identity : "Windows"
				},
				{
					string   : navigator.platform,
					subString: "Mac",
					identity : "Mac"
				},
				{
					string   : navigator.userAgent,
					subString: "iPhone",
					identity : "iPhone/iPod"
				},
				{
					string   : navigator.platform,
					subString: "Linux",
					identity : "Linux"
				}
			],
			_browser = _searchString(_dataBrowser) || "An unknown browser",
			_version = _searchVersion(navigator.userAgent) || _searchVersion(navigator.appVersion) || "an unknown version",
			_os = _searchString(_dataOS) || "an unknown OS";

		return {
			isChrome   : function () {
				return _browser === 'Chrome';
			},
			isIE       : function () {
				return _browser === 'Explorer';
			},
			isIE6      : function (strict) {
				return this.isIEVersion(6, strict);
			},
			isIE7      : function (strict) {
				return this.isIEVersion(7, strict);
			},
			isIE8      : function (strict) {
				return this.isIEVersion(8, strict);
			},
			isIE9      : function (strict) {
				return this.isIEVersion(9, strict);
			},
			isIE10     : function (strict) {
				return this.isIEVersion(10, strict);
			},
			isIE11     : function (strict) {
				return this.isIEVersion(11, strict);
			},
			isIEVersion: function (version, strict) {
				return _browser === 'Explorer' && (strict ? _version === version : _version <= version);
			},
			getVersion : function () {
				return _version;
			},
			getOS      : function () {
				return _os;
			}
		}
	}
});

"use strict";
/**
 * @namespace CallbackBuilder
 */
Bs.define('Bs.Util.CallbackBuilder', {

	construct: function () {

		var CallbackBuilder = function () {
			this.callbackList = {};
		};

		CallbackBuilder.prototype = {

			/**
			 *
			 */
			callbackList: null,

			/**
			 *
			 * @param action
			 * @param data
			 * @returns {CallbackBuilder}
			 */
			add: function (action, data) {
				if (!(action in this.callbackList)) {
					// Create main "action" key ig not already exists
					this.callbackList[action] = [];
				}
				this.callbackList[action].push(data);
				return this;
			},

			/**
			 *
			 * @returns {*}
			 */
			getAll: function () {
				return this.callbackList;
			}
		};

		return CallbackBuilder;
	}
});

"use strict";

Bs.define('Bs.Util.UrlParser', {

	construct: function () {
		var UrlParser = function (options) {
			this.initialize && this.initialize.call(this, options);
		};

		UrlParser.prototype.protocol = null;
		UrlParser.prototype.hostname = null;
		UrlParser.prototype.host = null;
		UrlParser.prototype.port = null;
		UrlParser.prototype.hash = null;
		UrlParser.prototype.pathname = null;
		UrlParser.prototype.search = null;
		/**
		 *
		 * @type {Object}
		 */
		UrlParser.prototype.params = null;
		/**
		 *
		 * @return {{}|*|Object}
		 */
		UrlParser.prototype.getParams = function () {
			return this.params;
		};

		UrlParser.prototype.initialize = function (options) {
			var me = this;
			var url_search_arr,
				option_key,
				i,
				get_param,
				key,
				val,
				url_query,
				url_get_params = {},
				a = document.createElement('a'),
				default_options = {
					'url'        : window.location.href,
					'unescape'   : true,
					'convert_num': true
				};

			if (typeof options !== "object") {
				options = default_options;
			} else {
				for (option_key in default_options) {
					if (default_options.hasOwnProperty(option_key)) {
						if (options[option_key] === undefined) {
							options[option_key] = default_options[option_key];
						}
					}
				}
			}

			a.href = options.url;
			url_query = a.search.substring(1);
			url_search_arr = url_query.split('&');

			if (url_search_arr[0].length > 1) {
				for (i = 0; i < url_search_arr.length; i += 1) {
					get_param = url_search_arr[i].split("=");

					if (options.unescape) {
						key = decodeURI(get_param[0]);
						val = decodeURI(get_param[1]);
					} else {
						key = get_param[0];
						val = get_param[1];
					}

					if (options.convert_num) {
						if (val.match(/^\d+$/)) {
							val = parseInt(val, 10);
						} else if (val.match(/^\d+\.\d+$/)) {
							val = parseFloat(val);
						}
					}

					if (url_get_params[key] === undefined) {
						url_get_params[key] = val;
					} else if (typeof url_get_params[key] === "string") {
						url_get_params[key] = [url_get_params[key], val];
					} else {
						url_get_params[key].push(val);
					}

					get_param = [];
				}
			}

			me.protocol = a.protocol;
			me.hostname = a.hostname;
			me.host = a.host;
			me.port = a.port;
			me.hash = a.hash.substr(1);
			me.pathname = a.pathname;
			me.search = a.search;
			me.params = url_get_params;
		};

		/**
		 *
		 * @param {String} paramName
		 * @returns {*}
		 */
		UrlParser.prototype.get = function (paramName) {
			var me = this;

			if (me.params.hasOwnProperty(paramName)) {
				return me.params[paramName];
			}

			return null;
		};

		/**
		 *
		 * @param {String} paramName
		 * @param {*} paramValue
		 * @returns UrlParser
		 */
		UrlParser.prototype.set = function (paramName, paramValue) {
			this.params[paramName] = paramValue;
			var url = window.location.href,
				newParam = paramName + "=" + paramValue,
				uriReplaced = url.replace(new RegExp("(&|\\?)" + paramName + "=[^\&|#]*"), '$1' + newParam);

			if (uriReplaced === url) {
				uriReplaced = (url.indexOf("?") != -1 ? url.split("?")[0] + "?" + newParam + "&" + url.split("?")[1]
					: (url.indexOf("#") != -1 ? url.split("#")[0] + "?" + newParam + "#" + url.split("#")[1]
						: url + '?' + newParam));
			}

			history.replaceState(null, null, uriReplaced);

			return this;
		};

		return UrlParser;
	}
}, function () {
	/**
	 *
	 * @type {Bs.Util.UrlParser}
	 * @private
	 */
	var _instance = null;

	/**
	 *
	 * @return {Bs.Util.UrlParser}
	 */
	var _getInstance = function (options) {
		options = options || {};
		if (!_instance) {
			_instance = new Bs.Util.UrlParser(options);
			return _instance;
		}
		else {
			return _instance;
		}
	};

	var _checkInstance = function () {
		if (!_instance) {
			throw Error('Initialization is not complete')
		}
	};

	Bs.Util.UrlParser.initialize = function (options) {
		_getInstance(options);
	};

	Bs.Util.UrlParser.getInstance = function () {
		_checkInstance();
		return _instance;
	};
});

+function(){Bs.Lang.addResourceBundle('en', 'Bs/View/Alert', {"info":{"title":"Information","msg":{"nothing":"Nothing to modify"}},"success":{"title":"Finished","msg":{"saved":"Saved","default":"Operation successful"}},"warning":{"title":"Warning"},"danger":{"title":"Error","msg":{"notSaved":"Modifications not saved","notFetched":"Unexpected data received from server","default":"An error has occurred"}}})}();
+function(){Bs.Lang.addResourceBundle('en', 'Bs/View/Collection/Empty', {"nothingToDisplay":"Nothing to display..."})}();
+function(){Bs.Lang.addResourceBundle('en', 'Bs/View/Collection/Error', {"error":"Oops, something wrong happened there..."})}();
+function(){Bs.Lang.addResourceBundle('en', 'Bs/View/Modal', {})}();
+function(){Bs.Lang.addResourceBundle('fr', 'Bs/View/Alert', {"info":{"title":"Information","msg":{"nothing":"Rien à modifier"}},"success":{"title":"Terminé","msg":{"saved":"Modification effectuée","default":"Opération réussie"}},"warning":{"title":"Attention"},"danger":{"title":"Erreur","msg":{"notSaved":"Les modifications n'ont pas pu être enregistrées","notFetched":"Le serveur n'a pas renvoyé les données attendues","default":"Une erreur est survenue"}}})}();
+function(){Bs.Lang.addResourceBundle('fr', 'Bs/View/Collection/Empty', {"nothingToDisplay":"Rien à afficher pour le moment..."})}();
+function(){Bs.Lang.addResourceBundle('fr', 'Bs/View/Collection/Error', {"error":"Oups, il y a eu un problème..."})}();
+function(){Bs.Lang.addResourceBundle('fr', 'Bs/View/Modal', {})}();
+function(){Bs.Lang.addResourceBundle('nl', 'Bs/View/Alert', {"info":{"title":"Informatie","msg":{"nothing":"Niets te wijzigen"}},"success":{"title":"Klaar","msg":{"saved":"Wijziging doorgevoerd","default":"Met succes uitgevoerd"}},"warning":{"title":"Waarschuwing"},"danger":{"title":"Fout","msg":{"notSaved":"De wijzigingen konden niet opgeslagen worden","notFetched":"De server heeft de verwachte gegevens niet teruggestuurd","default":"Er is een fout opgetreden"}}})}();
+function(){Bs.Lang.addResourceBundle('nl', 'Bs/View/Collection/Empty', {"nothingToDisplay":"Momenteel niets te tonen…"})}();
+function(){Bs.Lang.addResourceBundle('nl', 'Bs/View/Collection/Error', {"error":"Oops, something wrong happened there..."})}();
+function(){Bs.Lang.addResourceBundle('nl', 'Bs/View/Modal', {})}();