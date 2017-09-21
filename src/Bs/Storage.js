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
