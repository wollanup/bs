"use strict";

Bs.define('Bs.DataBinder', {

	require: ['Bs.Collection'],

	construct: function () {

		var _tagsWithValue = ['INPUT', 'SELECT', 'TEXTAREA'];

		var DataBinder = function () {
			this.initialize && this.initialize.apply(this, arguments);
		};

		/**
		 *
		 * @type {View}
		 */
		DataBinder.prototype.view = null;

		/**
		 *
		 * @type {boolean}
		 */
		DataBinder.prototype.autoBind = true;
		/**
		 * Attribute used to bind data
		 * Can be 'name' or 'data-bind'
		 * @type {string}
		 */
		DataBinder.prototype.bindAttribute = "name";

		/**
		 */
		DataBinder.prototype.initialize = function (init) {
			init = init || {};
			var me = this;
			$.extend(this, init);
			if (me.view === null) {
				throw new Error('You must create object with a view param');
			}
			if (me.view.model.length === 0) {
				throw new Error('No model used by ' + this.view.name);
			}

			if (me.autoBind) {
				if (me.view.isRendered()) {
					me.bind();
				}
				else {
					me.view.one('beforeDataBind', function () {
						me.bind();
					});
				}
			}
		};

		/**
		 *
		 * @param model
		 * @param property
		 */
		DataBinder.prototype.modelToView = function (model, property) {
			var value,
				view = this.view,
				$el,
				tagName,
				type,
				selector = '[data-bind-model="' + model.getNameAsAProperty() + '"][data-bind-property="' + property + '"]';

			if (property in model && typeof model[property] === "function") {
				value = model[property].call(model);
			}
			else {
				value = model.get(property)
			}

			$el = view.$el.find(selector);
			if ($el.length) {
				$el.each(function(){
					var $this = $(this);
					tagName = this.tagName;
					type = $this.attr('type');
					if (_tagsWithValue.indexOf(tagName) > -1) {
						if (type === 'radio') {
							$this.filter('[value="' + value + '"]').prop('checked', true)/*.change()*/;
						}
						else if (type === 'checkbox') {
							$this.prop('checked', value)/*.change()*/;
						}
						else if (type === 'file') {
							// Prevent InvalidStateError: Failed to set the 'value' property on 'HTMLInputElement': This input element accepts a filename, which may only be programmatically set to the empty string.
							$this.val("");
						}
						else {
							$this.val(value)/*.change()*/;
						}
					}
					else {
						if($el.data('bindAttr')){
							if($el.data('bindAttr') === 'class'){
								$this.toggleClass(value);
							}
							else {
								$this.attr($el.data('bindAttr'), value);
							}
						}
						else {
							if($el.data('bindHtml')) {
								$this.html(value);
							}
							else{
								if(value) {
									$this.text(value);
								}
							}
						}
					}
				});
			}
		};

		/**
		 *
		 */
		DataBinder.prototype.bind = function () {
			var me = this,
				view = me.view,
				attr = this.bindAttribute,
				modelsToChange = {},
				selector = '[' + attr + '], [data-bind]';
			view.$el.find(selector).each(function () {
				var model;
				var $elToBind = $(this);
				if ($elToBind.hasClass('dataBind')) {
					return true;
				}
				// Try to get property name from "name" (or other if modified) attribute
				var property = $elToBind.attr("data-bind") || $elToBind.attr(attr);
				if (property) {
					// Set data-bind attribute
					$elToBind.attr('data-bind', property);
				}
				else {
					// Try to get property name from data-bind attribute
					property = $elToBind.data('bind');
				}
				if (!property) {
					return true;
				}

				var modelAndProperty = buildModelAndPropertyFromBindAttribute(property, view);
				model = modelAndProperty.model;
				if(model === null || $.isEmptyObject(model)){
					// console.warn('Can\'t bind value of a null Model');
					return true;
				}
				property = modelAndProperty.property;
				$elToBind.attr('data-bind-model', model.getNameAsAProperty());
				$elToBind.attr('data-bind-property', property);
				$elToBind.addClass('dataBind');

				// Add model to list of models with tweaked "set" method
				if (modelsToChange.hasOwnProperty(model.getNameAsAProperty()) === false) {
					modelsToChange[model.getNameAsAProperty()] = model;
				}

				$elToBind.on('change', function () {
					var $el = $(this),
						property = $el.attr('data-bind'),
						value,
						tagName = $el[0].tagName,
						type = $($el[0]).attr('type');

					if (_tagsWithValue.indexOf(tagName) > -1) {
						if (type === 'radio') {
							var name = $el.attr("name");
							value = view.$el.find("input[name='" + name + "']").filter(':checked').val();
						}
						else if (type === 'checkbox') {
							value = $el.prop('checked');
						}
						else {
							value = $el.val();
						}
					}
					else {
						value = $el.html();
					}

					var modelAndProperty = buildModelAndPropertyFromBindAttribute(property, view);
					model = modelAndProperty.model;
					property = modelAndProperty.property;
					if (property in model && typeof model[property] === "function") {
						model[property].call(model, value);
						// value = model[property].call(model);
					}
					else {
						model.set(property, value, true); // true to avoid binding loop
						// value = model.get(property);
					}
					// TODO write value in HTML, with a special state/data to avoid "change" listener to be triggered
				});

				// Trigger a first bind
				me.modelToView(model, property);
			});

			// Add main model to list of models o change and change their "set" method
			for (var modelName in modelsToChange) {
				if (modelsToChange.hasOwnProperty(modelName) === false) {
					continue;
				}
				// JS to HTML
				if ('set' in modelsToChange[modelName] && typeof modelsToChange[modelName] === "object") {

					var originalSetFn = modelsToChange[modelName].set;
					var originalSetInitialDataFn = modelsToChange[modelName].setInitialData;

					(function (previousSetFn, previousSetInitialDataFn) {
						modelsToChange[modelName].set = function (property, value, fromView) {
							fromView = fromView || false;
							// Call only, why not use previous Set, loop ??
							// Broken if set method is overriden in a model
							this.constructor.prototype.set.call(this, property, value, fromView);
							if (!fromView) {
								me.modelToView(this, property);
							}
							return this;
						};
						modelsToChange[modelName].setInitialData = function (data) {
							data = data || {};
							previousSetInitialDataFn.call(this, data);
							for (var key in data) {
								if (data.hasOwnProperty(key) && this.has(key)) {
									me.modelToView(this, key);
								}
							}
						};

					})(originalSetFn, originalSetInitialDataFn);

				}
			}
		};

		var buildModelAndPropertyFromBindAttribute = function (property, view) {
			var modelName,
				model;
			// To allow shortcut in HTML notation without model prefix is view as only one model
			if (property.indexOf('.') === -1) {
				model = view.getModel();
			}
			else {
				var parts = property.split('.');
				property = parts.pop();
				modelName = parts[0];
				// Try to get Model directly in View from its modelPropertyName ...
				model = view.getModel(modelName);
				if (model === null) {
					// Model not found, assume it's a child of main model
					model = view.getModel().get(parts.join('.'));
				} else {
					// If we have no intermediate levels, just get this model
					// Else, we want o subModel of this Model,
					if (parts.length > 1) {
						modelName = parts[parts.length - 1];
						model = model.get(modelName)
					}
				}
			}

			return {
				model   : model,
				property: property
			};
		};

		return DataBinder;
	}
});
