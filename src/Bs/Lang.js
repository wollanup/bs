// Compat with old i18next v1.x
i18n = i18next;

/**
 * @return {{init: function, set: function, translateAll: function, t:
 *   function, loadNamespace: function, loadNamespaces: function}}
 */
Bs.define('Bs.Lang', {
  /**
   *
   * @return {{init: Function, set: Function, translateAll: Function, t:
   *   Function, loadNamespace: Function, loadNamespaces: Function}}
   * @constructor
   */
  construct: function Lang () {

    //noinspection JSMismatchedCollectionQueryUpdate
    /**
     *
     * @type {Array}
     * @private
     */
    var _loadedNamespaces = []

    /**
     *
     * @type {string}
     * @private
     */
    var _urlPattern = '/{{- ns}}/lng/{{lng}}.json'

    /**
     *
     * @type {{lang: string, fallbackLng: boolean, fallbackToDefaultNS:
     *   boolean, resGetPath: string}}
     * @private
     */
    var _defaultConfig = {
      fallbackLng: false,
      load       : 'languageOnly',
      ns         : 'Translation',
      defaultNS  : 'Translation',
      fallbackNS : 'Translation',
      backend    : {
        loadPath: Bs.getConfig().urlApp + _urlPattern,
      },
    }

    var _bundles = []

    return {

      /**
       * @namespace Bs.Lang.init
       * @param config {Object}
       * @param [callback]
       */
      init: function (config, callback) {
        callback = callback || function () {}
        config = $.extend(true, {}, _defaultConfig, config)
        config.backend.loadPath = (config.ns) ? (Bs.getConfig().urlApp +
          _urlPattern) : _defaultConfig.backend.loadPath
        i18next.use(i18nextXHRBackend)
        i18next.use(window.i18nextBrowserLanguageDetector)

        return i18next.init(config, function () {
          jqueryI18next.init(i18next, $, {
            tName                       : 't',
            i18nName                    : 'i18n',
            handleName                  : 'i18n',
            selectorAttr                : 'data-i18n',
            targetAttr                  : 'i18n-target',
            optionsAttr                 : 'i18n-options',
            useOptionsAttr              : false,
            parseDefaultValueFromContent: true,
          })
          for (var i = 0, bundle; bundle = _bundles[i]; i++) {
            i18next.addResourceBundle(bundle.lng, bundle.ns, bundle.resource)
          }
          callback()
        })
      },

      addResourceBundle: function (lng, ns, resource) {
        if (i18next.isInitialized) {
          // Add now
          i18next.addResourceBundle(lng, ns, resource)
        }
        else {
          // Store it to be added when Bs.lang.init will be called
          _bundles.push({
            lng: lng, ns: ns, resource: resource,
          })
        }
      },
      /**
       * @namespace Bs.Lang.set
       * @param lang
       * @param [callback]
       */
      set              : function (lang, callback) {
        callback = callback || function () { }
        if (lang !== i18next.language) {
          document.cookie = 'i18next=' + lang
          i18next.changeLanguage(lang, function () {
            Bs.Lang.translateAll()
            callback()
          })
        }
        else {
          callback()
        }
      },
      /**
       * @namespace Bs.Lang.get
       * @returns {string}
       */
      get              : function (full) {
        if (!full) {
          return i18next.options.lng.split('-')[0]
        }
        return i18next.options.lng
      },

      /**
       * @namespace Bs.Lang.translateAll
       * @param $el
       * @return {*}
       */
      translateAll: function ($el) {
        $el = $el || $('[data-i18n]')
        $el.i18n()
        return $el
      },

      /**
       * @namespace Bs.Lang.t
       * @param key
       * @param [options]
       * @return {*}
       */
      t: function (key, options) {
        return i18next.t(key, options)
      },

      /**
       * @namespace Bs.Lang.init
       * @param ns
       * @param url
       * @param [callback]
       * @return {*}
       */
      loadNamespace: function (ns, url, callback) {
        var tmpResGetPath,
          _resetResGetPath = function () {
            if (tmpResGetPath) {
              i18next.options.backend.loadPath = tmpResGetPath + _urlPattern
            }
          }

        if (!callback) {
          callback = url
          url = null
        }
        if (url) {
          i18next.options.backend.loadPath = url + _urlPattern
        }
        callback = callback || function () {}
        if (_loadedNamespaces.indexOf(ns) > -1) {
          _resetResGetPath()
          callback()
          return
        }
        return i18next.loadNamespaces(ns, function () {
          _loadedNamespaces.push(ns)
          _resetResGetPath()
          callback()
        })
      },

      /**
       *
       * @param nsList
       * @param callback
       */
      loadNamespaces: function (nsList, callback) {

        var nsToLoad = []
        for (var i in nsList) {
          if (nsList.hasOwnProperty(i) && _loadedNamespaces.indexOf(nsList[i]) >
            -1) {
            nsToLoad.push(nsList[i])
          }
        }

        var nbToLoad = nsList.length

        // Exit if nothing to load
        if (nbToLoad === 0) {
          callback()
          return
        }

        var dfd = [], ns

        for (var j in nsList) {
          if (nsList.hasOwnProperty(j)) {
            dfd[j] = $.Deferred()
            ns = nsList[j];
            (function (ns, dfd) {
              return i18next.loadNamespaces(ns, function () {
                _loadedNamespaces.push(ns)
                dfd.resolve(true)
              })
            }(ns, dfd[j]))
          }
        }

        $.when.apply($, dfd).then(function () {
          callback()
        })
      },
    }
  },
})
