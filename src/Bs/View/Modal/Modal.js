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

Bs.define('Bs.View.Modal', {
	extend        : 'Bs.View',
	autoRender    : true,
	elClass       : 'bootstrap',
	hasTranslation: false,
	autoMask      : false,
	options       : {
		view       : "",
		content    : "",
		title      : "",
		subTitle   : "",
		icon       : "",
		/**
		 * Available sizes are "sm" and "lg"
		 */
		size       : "",
		bodyPadding: true,
		viewOptions: null,
		closable   : true,
		backdrop   : 'static',
		data:{
			readyArgs:[]
		}
	},

	beforeCreateSubView: function () {
		var me = this,
			$modal = me.$el.find('.modal');

		if (me.options.view) {
			var options = $.extend(true, {
				"onbeforeDestroy"  : function () {
					// Before destroying the subview, hide th modal container
					$modal.modal('hide');
				},
				/**
				 * Override default "ready" behavior, prevent it,
				 * it will be fired again after modal will be shown
				 */
				"onafterInitialize": function () {
					var that = this;
					that.one("ready", function (e) {
						if (e) {
							// Store args received from initial ready event
							var args = [];
							for (var i = 1; i < arguments.length; i++) {
								args.push(arguments[i]);
							}
							me.data.readyArgs = args;

							e.preventDefault();
							e.stopImmediatePropagation();
						}
						return false;
					});
				}

			}, me.options.viewOptions);

			$modal.find('.view-content')
				.attr('data-create', me.options.view)
				.data('create', me.options.view)
				.data('options', options);
		}
		else {
			$modal.find('.view-content').html(me.options.content)
		}
	},

	close: function () {
		$(window).off("resize", this.resize);
		this.$el.find('.modal').modal('hide');
	},

	resize: function () {
		// padding 2 * 30
		// header 56
		// borders 4 to be safe
		this.$el.find(".view-content").css({height: $(window).height() - 120});
	},

	afterRender: function () {

		var me = this,
			$modal = me.$el.find('.modal');

		if (me.options.size !== "") {
			$modal.find('.modal-dialog').addClass('modal-' + me.options.size)
		}

		$modal.one('hidden.bs.modal', function () {
			me.destroy();
		});

		$modal.find('.modal-title-main').html(me.options.title);
		$modal.find('.modal-title-sub').html(me.options.subTitle);
		$modal.find('.modal-icon').addClass(me.options.icon);
		$modal.one('shown.bs.modal', function () {
			var flexSupport = (window['Modernizr'] && Modernizr.flexbox);
			for (var view in me.subViewList) {
				// re-trigger previously prevented "ready" event on subViews
				if (me.subViewList.hasOwnProperty(view)) {
					// TODO, maybe we want to pass args only from view which is the main view from options.view
					me.subViewList[view].trigger('ready', me.data.readyArgs);
				}
			}
			// In case, focus first input if exists
			me.$el.find('.view-content').find('input').first().focus().select();

			// Draggable
			if ($.fn.draggable) {
				$(me.$el.find(".modal-content")).draggable({
					handle: ".modal-header"
				});
			}

			if (me.options.size === Bs.View.Modal.SIZE_MAX && !flexSupport) {
				$(window).on("resize", $.proxy(me.resize, me));
				me.resize();
			}

			me.trigger('ready');
		});

		$modal.modal({
			backdrop: me.options.backdrop,
			keyboard: me.options.closable
		}).css({"z-index": 1051 + me.zIndex});

		$modal.data('bs.modal').$backdrop.css({"z-index": 1050 + me.zIndex});
	},

	mask : function(text){
		return Bs.View.prototype.mask.call(this, text, this.$el.find('.modal-body'));
	},
	unmask : function(noFade, callback){
		return Bs.View.prototype.unmask.call(this, this.$el.find('.modal-body'), noFade, callback);
	},
	events: {
		"click .view-close": function () {
			this.$el.find('.modal').modal('hide');
		}
	}
}, function () {
	Bs.View.Modal.SIZE_SMALL = "sm";
	Bs.View.Modal.SIZE_LARGE = "lg";
	Bs.View.Modal.SIZE_MAX = "max";
	Bs.View.Modal.SIZE_FULL_WIDTH = "fullWidth";
	Bs.View.Modal.SIZE_DEFAULT = "";
});
