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
