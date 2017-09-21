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
