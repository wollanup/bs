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

