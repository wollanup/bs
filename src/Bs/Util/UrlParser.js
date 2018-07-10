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
		 * @deprecated use getParam()
		 * @returns {*}
		 */
		UrlParser.prototype.get = function (paramName, defaultValue) {
			return this.getParam(paramName, defaultValue);
		};

		/**
		 *
		 * @param {String} paramName
		 * @param defaultValue
		 * @returns {*}
		 */
		UrlParser.prototype.getParam = function (paramName, defaultValue) {
			var me = this;
			if(defaultValue === undefined){
                defaultValue = null;
			}
			if (me.params.hasOwnProperty(paramName)) {
				return me.params[paramName];
			}

			return defaultValue;
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
