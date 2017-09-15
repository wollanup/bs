"use strict";

Bs.define('Bs.View.Alert.Toast', {
	extend         : 'Bs.View.Alert',
	translationPath: 'inherit',

	initialize: function () {
		var me = this;

		me.callParent('initialize');
		var $body = $('body');
		if ($body.find('#toast-container').length === 0) {
			$body.append('<div id="toast-container"></div>');
		}
		this.renderTo = $body.find('#toast-container');
		this.options.autoDismissible = true;
	}

}, function () {
	Bs.View.Alert.Toast.error = function (msg, translated) {
		return new Bs.View.Alert.Toast({type: 'danger', msg: msg, translate : !translated})
	};

	Bs.View.Alert.Toast.warning = function (msg, translated) {
		return new Bs.View.Alert.Toast({type: 'warning', msg: msg, translate : !translated})
	};

	Bs.View.Alert.Toast.success = function (msg, translated) {
		return new Bs.View.Alert.Toast({type: 'success', msg: msg, translate : !translated})
	};

	Bs.View.Alert.Toast.info = function (msg, translated) {
		return new Bs.View.Alert.Toast({type: 'info', msg: msg, translate : !translated})
	};

	Bs.View.Alert.Toast.default = function (msg, translated) {
		return new Bs.View.Alert.Toast({type: 'default', msg: msg, translate : !translated})
	};

	Bs.View.Alert.Toast.apiProblem = function (response) {
		if (response && response !== null && response.status && response.detail && response.title) {
			return new Bs.View.Alert.Toast({
				type          : (response.status >= 500) ? "danger" : "warning",
				msg           : response.detail,
				translate     : false,
				translateTitle: false,
				title         : response.title,
				delay         : 30000
			});
		}
		else {
			return Bs.View.Alert.Toast.error(null, renderTo);
		}
	}
});
