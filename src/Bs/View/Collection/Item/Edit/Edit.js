"use strict";

Bs.define('Bs.View.Collection.Item.Edit', {
	extend        : 'Bs.View',
	hasTranslation: false,
	hasStylesheet : false,
	hasTemplate   : false,
	elTag         : 'tr',
	bindData      : true,
	itemView      : null,

	cancel: function () {
		var me = this, model = me.getModel();
		model.reset(); // restore values if changed
		me.destroy(); // remove Edit view
		if (model.isNew()) {
			me.itemView.destroy(); // remove Item view if it is temporary
		}
		me.itemView.$el.show(); // restore Item View
		me.afterAlways();
	},

	save: function () {
		var me = this,
			model = me.getModel(),
			isNew = model.isNew(),
			viewCollection = me.itemView.getViewCollection();

		me.disableInputs();

		me.getModel().save({
			apiAction : "?useSlim=1",
			done  : function () {
				if (isNew) {
					viewCollection.addItem(model);
				}
				else{
					me.itemView.$el.show().data("view").reset()
				}
				me.destroy();
				me.afterDone(model);
			},
			fail  : function (r) {
				me.afterFailed(r);
			},
			always: function () {
				me.enableInputs();
				me.afterAlways();
			}
		});
	},


	/**
	 *
	 * @param {Model} model
	 */
	afterDone: function (model) {
		Bs.View.Alert.Toast.success();
		// Implement me !
	},

	/**
	 *
	 * @param {Response} response
	 */
	afterFailed: function (response) {
		Bs.View.Alert.error(response.getErrorDescription());
		// Implement me !
	},

	/**
	 *
	 */
	afterAlways: function () {
		// Implement me !
	}

});
