"use strict";

Bs.define('Bs.View.Collection.Item', {
	extend        : 'Bs.View',
	restoreView   : 'Bs.View.Collection.Item.Restore',
	editView      : null,
	abstract      : true,
	restorable    : false,
	editable      : false,
	viewCollection: null,
	autoMask      : false,
	data          : {
		$restoreEl: null
	},

	initialize: function () {
		var me = this,
			dfd = new $.Deferred();

		if (me.editView !== null) {
			Bs.require(me.editView, function () {
				dfd.resolve();
			});
		}
		else {
			dfd.resolve();
		}

		return dfd;
	},

	/**
	 * 
	 * @return {View}
	 */
	edit: function () {
		var me = this,
			$ct = $("<div></div>"),
			model = me.getModel(),
			edit = Bs.create(me.editView, {
					renderTo: $ct,
					model   : model,
					itemView: me
			});

		edit.on("afterRender", function () {
			me.$el.hide();
			me.$el.after(edit.$el);
		});

		return edit;
	},

	getTplData : function(){
		return this.getModel();
	},

	/**
	 *
	 * @returns {Bs.View.Collection}
	 */
	getViewCollection: function () {
		return this.viewCollection;
	},

	"delete": function () {
		var me = this;
		me.mask();
		me.getModel().delete({
			done : function(){
				me.getViewCollection().getCollection().remove(this);
				me.unmask();
				me.remove();
			},
			fail : function(){
				me.unmask();
				Bs.require('Bs.View.Modal.Alert', function(){
					Bs.View.Modal.Alert.Error('danger.msg.notSaved');
				});
			}
		});
	},
	remove: function () {
		var me = this;
		me.getModel().suppress();
		me.options.restorable = false; // TODO
		if(me.options.restorable){
			me.$restoreEl = me.$el;
			me.$el.css({"position": "relative"});
			Bs.require(me.restoreView, function (View) {
				new View({
					renderTo: me.$el
				});
			});
		}
		else {
			// TODO
			//if(me.getViewCollection().getCollection().length === 1){
			//	me.getViewCollection().renderEmptyCollection();
			//}
			//else {
				me.$el.slideUp();
			//}
		}
	},

	restore: function () {
		var me = this;
		me.options.restorable = false; // TODO
		if(me.options.restorable){

		}
		else{
			me.$el.slideDown();
		}
	}

});
