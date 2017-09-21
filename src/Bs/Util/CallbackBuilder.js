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
