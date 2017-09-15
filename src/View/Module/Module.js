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
