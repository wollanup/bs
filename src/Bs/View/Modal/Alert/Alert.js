"use strict";
Bs.define('Bs.View.Modal.Alert', {
	extend         : 'Bs.View.Modal',
	require        : ['Bs.View.Alert'],
	templatePath   : 'inherit',
	translationPath: 'inherit',
	options        : {
		type     : 'info',
		title    : 'info.title',
		msg      : "",
		translate: true
	},
	initialize     : function () {
		var me = this;
		me.options.dismissible = false;
		me.options.viewOptions = $.extend(true, {}, me.options);
		me.options.title = null;
		me.options.view = 'Bs.View.Alert';
	}
}, function () {

	Bs.View.Modal.Alert.errorPage = function (msg, translated) {
		$('body').empty().addClass('bootstrap');
		return new Bs.View.Modal.Alert({
			type     : 'danger',
			title    : 'danger.title',
			msg      : msg,
			translate: !translated
		});
	};

	Bs.View.Modal.Alert.Error = function (msg, translated) {
		return new Bs.View.Modal.Alert({
			type     : 'danger',
			title    : 'danger.title',
			msg      : msg,
			translate: !translated
		})
	};

	Bs.View.Modal.Alert.Warning = function (msg, translated) {
		return new Bs.View.Modal.Alert({
			type     : 'warning',
			title    : 'warning.title',
			msg      : msg,
			translate: !translated
		})
	};

	Bs.View.Modal.Alert.Success = function (msg, translated) {
		return new Bs.View.Modal.Alert({
			type     : 'success',
			title    : 'success.title',
			msg      : msg,
			translate: !translated
		})
	};

	Bs.View.Modal.Alert.Info = function (msg, translated) {
		return new Bs.View.Modal.Alert({
			type     : 'info',
			title    : 'info.title',
			msg      : msg,
			translate: !translated
		})
	}
});
