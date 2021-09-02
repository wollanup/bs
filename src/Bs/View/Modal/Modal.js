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
		content        : '',
		view           : '',
		viewOptions    : null,
		title          : '',
		subTitle       : "",
		icon           : '',
		autofocus      : true,
		/**
		 * Available sizes are "sm" and "lg" and "max"
		 */
		size           : 'default',
		bodyPadding    : true,
		closable       : true,
		backdrop       : 'static',
		cancelBtnBefore: '[type=submit]',
		movable        : true,
		mediaInfo      : false // or string, name of partial
	},
	data          : {
		readyArgs: []
	},

	initialize: function () {
		var me = this;

		if (me.options.movable && !$.fn.draggable) {
			me.options.movable = false;
		}

		if (me.options.mediaInfo) {
			return me.getPartial(me.options.mediaInfo);
		}
	},

	getTplData: function () {
		var me = this;
		return {
			options            : me.options,
			getMediaInfoPartial: function () {
				return me.urlPath + '/tpl/' + me.options.mediaInfo;
			},
			model : me.getModel()
		};
	},

	beforeCreateSubView: function () {
		var me = this, $modal = me.$el.find('.modal'), model;

		// Prepare Modal
		$modal.one('hidden.bs.modal', function () {
			me.destroy();
		});
		me.mask();
		$modal.one('show.bs.modal', function () {
			me.unmask();
		});
		$modal.one('shown.bs.modal', function () {
			// Use our trigger mechanism, it allows to "listen after a trigger"
			me.trigger('shown.bs.modal');
		});
		$modal.modal({
			backdrop: me.options.backdrop,
			keyboard: me.options.closable
		}).css({ 'z-index': 1051 + me.zIndex });
		$modal.data('bs.modal').$backdrop.css({ 'z-index': 1050 + me.zIndex });

		if (me.options.viewOptions !== null && 'model' in me.options.viewOptions && me.options.viewOptions.model) {
			model = me.options.viewOptions.model;
		}
		else {
			model = me.getModel();
		}

		if (me.options.view) {
			var options = $.extend(true, {}, me.options.viewOptions, {
				'model'            : model,
				'onbeforeDestroy'  : function () {
					// Before destroying the subview, hide th modal container
					$modal.modal('hide');
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

	afterRender: function () {
		var me = this;

		me.one('shown.bs.modal', function () {
			// Focus first input if exists
			if (me.options.autofocus === true) {
				me.$el.find('.view-content').find(':input:not([readonly]):not([disabled])').first().trigger('focus').trigger('select');
			}
			// Draggable
			if ($.fn.draggable) {
				$(me.$el.find('.modal-content')).draggable({
					handle: '.modal-header'
				});
			}

			me.trigger('ready');
		});

		me.renderCancelBtn();
	},
	mask: function (text) {
		return Bs.View.prototype.mask.call(this, text, this.$el.find('.modal-body'));
	},

	unmask: function (noFade, callback) {
		return Bs.View.prototype.unmask.call(this, this.$el.find('.modal-body'), noFade, callback);
	},

	close: function () {
		this.$el.find('.modal').modal('hide');
	},

	renderCancelBtn: function () {
		var me = this;
		if (me.options.cancelBtnBefore) {
			Bs.View.Modal.prototype.renderCompiledTpl('cancelBtn', function (html) {
				me.$el.find(me.options.cancelBtnBefore).first().before(html);
			});
		}
	},

	events: {
		'click .view-close': 'close'
	}

}, function () {
	Bs.View.Modal.SIZE_SMALL = "sm";
	Bs.View.Modal.SIZE_LARGE = "lg";
	Bs.View.Modal.SIZE_MAX = "max";
	Bs.View.Modal.SIZE_DEFAULT = "";
});
