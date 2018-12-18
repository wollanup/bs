"use strict";

Bs.define('Bs.View.Alert', {
	extend       : 'Bs.View',
	hasStylesheet: false,
	autoMask     : false,
	elStyle      : {position: 'relative'},
	elClass      : "bootstrap",
	options      : {
		translate      			: true,
		translateTitle 			: true,
		icon           			: null,
		type           			: 'info',
		title          			: null,
		hasTitle       			: true,
		msg            			:	null,
		view           			: null,
		viewOptions    			: null,
		dismissible    			: true,
		autoDismissible			: false,
		cancelDismissOnHover: false,
		delay          			: 4000
	},
	data					: {
		idTimeout : null
	},

	initialize: function () {
		var me = this;
		me.callParent("initialize");
		if (!me.options.title) {
			if (me.options.type === 'default') {
				me.options.hasTitle = false;
			}
			else {
				me.options.title = me.options.type + '.title';
			}
		}

		if (!me.options.icon) {
			switch (me.options.type) {
				case 'danger':
					me.options.icon = 'fa fa-exclamation-circle';
					break;
				case 'warning':
					me.options.icon = 'fa fa-exclamation-triangle';
					break;
				case 'success':
					me.options.icon = 'fa fa-check';
					break;
				case 'info':
					me.options.icon = 'fa fa-info-circle';
					break;
				default:
					me.options.icon = "fa fa-" + me.options.type;
			}
		}
		if (me.options.type === 'danger') {
			me.options.autoDismissible = false;
		}
		if (me.options.view) {
			me.options.translate = false;
		}
		else {
			if (me.options.msg instanceof jQuery) {
				me.options.msg = $('<div></div>').html(me.options.msg).html();
				me.options.translate = false;
			}
			else {
				if ($.isArray(me.options.msg)) {
					me.options.msg = me.options.msg[0].urlPath + ':' + me.options.msg[1]
				}
				else if (!me.options.msg) {
					if (me.options.type === "success") {
						me.options.msg = Bs.Lang.t("success_");
					}
					else {
						me.options.msg = Bs.Lang.t('unknown_error');
					}
				}
			}
		}
		if ($.isArray(me.options.title)) {
			me.options.title = me.options.title[0].urlPath + ':' + me.options.title[1]
		}
	},

	render: function () {
		var me = this;
		me.callParent("render");
		me.$el.hide();

		if (me.options.view) {
			Bs.require(me.options.view, function (View) {
				var view,
					viewOptions = me.options.viewOptions || {};

				viewOptions.renderTo = me.$el.find('.content');
				view = new View(viewOptions);
				me.renderCallback();
				view.on('close', function () {
					me.trigger('close');
				});
			})
		} else {
      me.renderCallback();
    }
		me.trigger("ready");
	},

	renderCallback: function () {
		var me = this;

		me.$el.slideDown(function () {
			me.trigger('shown');
			me.$el.find('.alert-icon').fadeIn();
		});
		if (me.options.autoDismissible) {
			if(me.data.idTimeout) {
				clearTimeout(me.data.idTimeout)
			}
			me.data.idTimeout = setTimeout(function () {
				me.close();
			}, me.options.delay)
			if(me.options.cancelDismissOnHover) {
				me.$el.on('mouseover', function() {
					if(me.data.idTimeout) {
            clearTimeout(me.data.idTimeout)
            me.data.idTimeout = null;
          }
				})
			}
		}
	},

	close: function (e) {
		if (e) {
			e.preventDefault();
			e.stopPropagation();
		}
		var me = this;
		me.$el.find('.alert-icon').hide();
		this.$el.slideUp(function () {
			me.$el.remove();
		});
		return false;
	},

	events: {
		"click .close": "close"
	}

}, function () {
	Bs.View.Alert.error = function (msg, renderTo, translated) {
		return new Bs.View.Alert({
			type     : 'danger',
			title    : 'danger.title',
			msg      : msg || 'danger.msg.default',
			renderTo : renderTo || 'body',
			translate: !translated
		});
	};

	Bs.View.Alert.warning = function (msg, renderTo, translated) {
		return new Bs.View.Alert({
			type     : 'warning',
			title    : 'warning.title',
			msg      : msg,
			renderTo : renderTo || 'body',
			translate: !translated
		});
	};

	Bs.View.Alert.success = function (msg, renderTo, translated) {
		return new Bs.View.Alert({
			type     : 'success',
			title    : 'success.title',
			msg      : msg || 'success.msg.default',
			renderTo : renderTo || 'body',
			translate: !translated
		});
	};

	Bs.View.Alert.info = function (msg, renderTo, translated) {
		return new Bs.View.Alert({
			type     : 'info',
			title    : 'info.title',
			msg      : msg,
			renderTo : renderTo || 'body',
			translate: !translated
		});
	};

	Bs.View.Alert.apiProblem = function (response, renderTo) {
		console.log(response)
		if(response && response !== null && response.status && response.detail && response.title) {
			return new Bs.View.Alert({
				type          : (response.status >= 500) ? "danger" : "warning",
				msg           : response.detail,
				translate     : false,
				translateTitle: false,
				title         : response.title,
				delay         : 30000,
				renderTo      : renderTo || 'body'
			});
		}
		else {
			return Bs.View.Alert.error(null, renderTo);
		}
	}

});
