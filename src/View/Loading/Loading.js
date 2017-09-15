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
