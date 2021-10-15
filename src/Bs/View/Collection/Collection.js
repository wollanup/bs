'use strict';

Bs.define('Bs.View.Collection', {

    require: [
        'Bs.Collection', 'Bs.View.Modal.Alert'
    ],
    /**
     * View.Collection is based on View
     * To use Bs.View functions : this.constructor.prototype.[function].call(this, args);
     */
    extend : 'Bs.View',

    /**
     * Name of collection used.
     * Converted to instance of Collection
     */
    collection: null,

    collectionOptions: null,

    collectionCache: false,
    /**
     * View used by this ViewCollection
     * @type {{View}|string}
     */
    itemView       : '',

    /**
     *
     */
    viewOptions: null,

    /**
     * Store of Model instances
     * @type {[Bs.View]}
     */
    items    : null,
    /**
     * @type {[Bs.View]}
     */
    itemsByInternalId: null,

    /**
     *
     */
    id: 'ViewCollection',

    /**
     *
     */
    name: 'ViewCollection',

    /**
     *
     */
    fileName: 'Collection',

    /**
     *
     */
    path: 'Collection',

    /**
     * View to load if collection is empty when rendered
     */
    emptyCollectionView: 'Bs.View.Collection.Empty',

    /**
     * html fragment empty to use instead of View
     */
    emptyCollectionTemplate: null,

    /**
     *
     */
    autoFetch: false,

    /**
     *
     */
    hasTemplate: false,

    /**
     *
     */
    hasTranslation: false,

    /**
     *
     */
    hasStylesheet: false,

    data: {
        $elCollection     : null,
        $elEmptyCollection: null
    },

    initialize: function () {
        var me = this, dfd = new $.Deferred(), dfdCollection = new $.Deferred(), dfdView = new $.Deferred();

        me.items = [];
        me.itemsByInternalId = {};
        if (typeof me.collection === 'string') {
            Bs.require(Bs.Util.addPrefixIfMissing('Collection', me.collection), function (createCollection) {
                me.collection = createCollection(me.collectionOptions);
                if (me.collectionCache) {
                    me.collection.cache = true;
                }
                dfdCollection.resolve();
            });
        }
        else {
            dfdCollection.resolve();
        }

        if (!me.itemView) {
            throw new Error('No item view defined');
        }
        Bs.require(Bs.Util.addPrefixIfMissing('View', me.itemView), function () {
            dfdView.resolve();
        });

        $.when(dfdCollection, dfdView).then(function () {
            if (me.autoFetch) {
                me.bindData = true;
                me.fetch().then(function () {
                    dfd.resolve();
                });
            }
            else {
                dfd.resolve();
            }
        });

        return dfd;
    },

    fetch: function (fetchOptions) {
        var me = this, dfd = new $.Deferred();

        fetchOptions = fetchOptions || {};
        $.extend(fetchOptions, {
            done: function () {
                dfd.resolve();
            },
            fail: function () {
                me.destroy();
                Bs.View.Modal.Alert.Error('danger.msg.notFetched');
                throw new Error('Unable to autoFetch collection');
            }
        });

        if (me.getCollection() !== null) {
            if (me.collectionCache && me.getCollection().isInPool()) {
                me.collection = me.getCollection().getFromPool();
                dfd.resolve();
            }
            else {
                me.getCollection().fetch(fetchOptions);
            }
        }
        else {
            dfd.resolve();
        }

        return dfd;
    },

    render: function () {
        var me = this, bindDataItems = me.bindData, dfd = new $.Deferred(), afterRender;

        me.bindData = false;

        // Store afterRender Code (may be overwritten in subclasses)
        afterRender = me.afterRender;
        me.afterRender = function () {
            // Empty afterRender to prevent code execution by trigger in View.prototype
        };

        Bs.View.prototype.render.call(me).then(function () {
            me.bindData = bindDataItems;

            me.data.$elCollection = me.$el.find('[data-collection]');
            me.data.$elEmptyCollection = me.$el.find('[data-empty-collection]');

            // Determine elCollection and empty it
            if (!me.data.$elCollection.length) {
                me.data.$elCollection = me.$el;
            }

            // Determine elEmptyCollection and empty it if exists
            if (!me.data.$elEmptyCollection.length) {
                me.data.$elEmptyCollection = me.data.$elCollection;
            }

            me.renderCollection().then(function () {
                // Override default add/remove behavior for bound collections
                if (me.bindData) {
                    var previousAddFn = me.getCollection().add;
                    me.collection.add = function (data) {
                        var item = previousAddFn.call(me.collection, data);
                        if (me.rendered && item.isNew() === false) {
                            me.renderOne(item);
                        }
                        return item;
                    };

                    var previousRemoveFn = me.getCollection().remove;
                    me.collection.remove = function (model) {
                        var view = me.itemsByInternalId[model.id];
                        view.destroy();
                        var index = me.items.indexOf(view);
                        if(index > -1) {
                            me.items.splice(index, 1);
                        }
                        previousRemoveFn.call(me.collection, model);

                        return model;
                    };
                }
                dfd.resolve();
                afterRender.call(me);
            });
        });
        return dfd;
    },

    /**
     *
     * @param [data]
     * @param viewOptions
     * @returns {View}
     */
    addItem: function (data, viewOptions) {
        var me = this;
        if (me.data.$elEmptyCollection && me.getCollection().isEmpty()) {
            me.data.$elEmptyCollection.empty();
        }

        return me.renderOne(me.getCollection().add(data), viewOptions);
    },

    /**
     *
     * @param [data]
     * @param viewOptions
     * @returns {View}
     */
    prependItem: function (data, viewOptions) {
        var me = this;
        if (me.data.$elEmptyCollection && me.getCollection().isEmpty()) {
            me.data.$elEmptyCollection.empty();
        }
        var $tmp = $('<div></div>');
        var view = me.renderOne(me.getCollection().add(data), viewOptions, $tmp);
        me.data.$elCollection.prepend($tmp.children()[0]);
        return view;
    },
    /**
     *
     * @param {Model} model
     * @returns {View}
     */
    removeItem : function (model) {
        var me = this, view;
        view = me.itemsByInternalId[model.id];
        me.getCollection().remove(model);
        return view;
    },
    /**
     *
     * @param {{}} data
     * @param {boolean} editable
     * @returns {View}
     */
    addTmpItem : function (data, editable) {
        var model = Bs.create(this.getCollection().model, data);
        var view = this.renderOne(model);
        if (editable) {
            return view.edit();
        }

        return view;
    },

    renderOne: function (model, viewOptions, $el) {
        var me = this;
        me.viewOptions = me.viewOptions || {};
        viewOptions = viewOptions || {};
        var options = $.extend(true, {}, me.viewOptions, viewOptions, {
            'bindData'       : me.bindData,
            'renderTo'       : $el || me.data.$elCollection,
            'model'          : model,
            getCollection    : function () {
                return me.getCollection();
            },
            getViewCollection: function () {
                return me;
            },
            viewCollection   : me
        });

        var view = Bs.create(Bs.Util.addPrefixIfMissing('View', me.itemView), options);
        me.items.push(view);
        if (model) {
            me.itemsByInternalId[model.id] = view;
        }

        return view;
    },

    renderEmptyCollection: function (callback) {
        var me = this;
        callback = callback || function () {};
        if (me.emptyCollectionTemplate) {
            me.data.$elEmptyCollection.html(me.emptyCollectionTemplate);
            me.translate();
            callback();
        }
        else {
            Bs.require(me.emptyCollectionView, function (emptyCollectionView) {
                new emptyCollectionView({
                    'renderTo': me.data.$elEmptyCollection,
                    'options' : {
                        viewCollection: me
                    },
                    onready   : function () {
                        callback();
                    }
                });
            });
        }
    },
    renderErrorCollection: function (callback) {
        var me = this;
        callback = callback || function () {};
        Bs.require('Bs.View.Collection.Error', function (emptyCollectionView) {
            new emptyCollectionView({
                'renderTo': me.data.$elEmptyCollection.empty(),
                'options' : {
                    viewCollection: me
                },
                onready   : function () {
                    callback();
                }
            });
        });
    },

    renderCollection: function (append) {
        var me = this, dfd = new $.Deferred(), progress = 0, total = 0, options, createView = function (model) {
            var view;
            options.model = model;
            view = Bs.create(Bs.Util.addPrefixIfMissing('View', me.itemView), options);
            me.items.push(view);
            if (model) {
                me.itemsByInternalId[model.id] = view;
            }
            view.on('ready', function () {
                dfd.notify(view);
            });
        };

        if (!append) {
            me.items = [];
            me.itemsByInternalId = {};
            me.data.$elCollection.empty();
            me.data.$elEmptyCollection.empty();
        }
        if (me.getCollection().isEmpty() && (me.emptyCollectionView || me.emptyCollectionTemplate)) {
            me.renderEmptyCollection(function () {
                dfd.resolve();
            });
        }
        else {
            total = me.getCollection().getLength();
            dfd.progress(function () {
                ++progress;
                if (progress === total) {
                    dfd.resolve();
                }
                else {
                    createView(me.getCollection().getAt(progress));
                }
            });

            me.viewOptions = me.viewOptions || {};
            options = $.extend(true, {}, me.viewOptions, {
                'bindData'       : me.bindData,
                'renderTo'       : me.data.$elCollection,
                viewCollection   : me,
                getCollection    : function () {
                    return me.getCollection();
                },
                getViewCollection: function () {
                    return me;
                }
            });

            createView(me.getCollection().getAt(0)); // here we have at least one item;

        }

        return dfd;
    },

    /**
     *
     * @return {Bs.Collection}
     */
    getCollection: function () {
        return this.collection;
    },

    /**
     *
     * @param callback
     */
    each: function (callback) {
        var me = this;
        for (var i = 0, item; item = me.items[i]; i++) {
            if (callback(item, i) === false) {
                break;
            }
        }
    }

});
