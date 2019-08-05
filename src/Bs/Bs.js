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

		if ( typeof window.CustomEvent !== "function" ) {
			window.CustomEvent = function CustomEvent ( event, params ) {
				params = params || { bubbles: false, cancelable: false, detail: undefined };
				var evt = document.createEvent( 'CustomEvent' );
				evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
				return evt;
			};
			window.CustomEvent.prototype = window.Event.prototype;
		}
	})();

	var _async = false;

	/**
	 *
	 * @type {Bs}
	 */
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
			Bs._overriddenClasses = _overriddenClasses;
		}
		else {
			Bs._dependenciesLoaded = undefined;
			Bs._store = undefined;
			Bs._storeLib = undefined;
			Bs._dependencies = undefined;
      Bs._overriddenClasses = null;
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

		if (typeof classes === 'string') {
			classes = [classes];
		}

		/**
		 * @callback requireCallback
		 * @param {string|[]} required class or classes
		 */
		callback = callback || function () {};

		if (!classes.length) {
			callback.apply(null, []);
			return Bs;
		}

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

	/**
	 *
	 * @param {Array} classes
	 * @param {Function}  callback
	 * @param {Number} index
	 * @private
	 */
	var _doRequire = function doRequire(classes, callback, index) {

		var callbackArgs = [];
		_dependenciesLoaded[index] = new $.Deferred();
		_dependencies = {};

		for (var i = 0, className; className = classes[i]; i++) {

      // Search for overridden class
      if (_overriddenClasses.hasOwnProperty(className)) {
        className = _overriddenClasses[className]
      }

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

		// Search for overridden class
    if (_overriddenClasses.hasOwnProperty(className)) {
      className = _overriddenClasses[className]
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
	 *
   * @param baseClass
   * @param overriddenClass
   */
  Bs.override = function (baseClass, overriddenClass) {
    _overriddenClasses[baseClass] = overriddenClass
  }

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

  var _overriddenClasses = {};

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
