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

Bs.define('Bs.Util.Cookie', {
	construct: function () {
		var read = function (name) {
			var nameEQ = name + '=';
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) === ' ') {
					c = c.substring(1, c.length);
				}
				if (c.indexOf(nameEQ) === 0) {
					return c.substring(nameEQ.length, c.length);
				}
			}
			return null;
		}

		return {
			read: read
		};

	}
});
