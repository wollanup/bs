/**
 * File description
 *
 * @package
 * @version      :$
 *               :$
 * @link         :$
 * @author       :$
 */
'use strict';

/** @namespace Bs.Template */

Bs.define('Bs.Template', {
	construct: function () {

		var _scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

		var _supportedTplTypeAttr = [
			'text/x-handlebars-template',
			'text/x-handlebars',
			'text/html'
		];
		var _supportedPartialTypeAttr = 'text/x-handlebars-partial';

		var _getAllMatches = function getAllMatches(html) {
			if (_scriptRegex.constructor !== RegExp) {
				throw new Error('not RegExp');
			}
			var res = [];
			var match = null;
			if (_scriptRegex.global) {
				while (match = _scriptRegex.exec(html)) {
					res.push(match);
				}
			}
			else {
				if (match = _scriptRegex.exec(html)) {
					res.push(match);
				}
			}
			return res;
		};

		var _registerPartial = function ($script, viewName) {
			var partialElId = $script.attr('id'),
				partialId;
			if (!partialElId) {
				partialElId = viewName;
			}
			partialId = partialElId.indexOf('Tpl') > -1 ? partialElId.substring(0, partialElId.indexOf('Tpl')) : partialElId;
			Handlebars.registerPartial(partialId, $script.html());
		};

		var Template = {};

		Template.cachedTpl = {};

		Template.load = function (url, tplName, additionalScriptsOnly) {
			var dfd = new $.Deferred();

			$.get(url)
				.done(function (tplHtml) {
					Handlebars.templates[tplName] = Handlebars.compile(tplHtml);
					// Bs.Template.registerLoadedTemplate(tplHtml, viewName, additionalScriptsOnly);
					dfd.resolve();
				})
				.fail(function () {
					console.error('Template "' + tplName + '" cannot be loaded @ "' + url + '".');
				});

			return dfd;
		};

		Template.registerLoadedTemplate = function (tplHtml, viewName, additionalScriptsOnly) {
			// TODO, use HTMl Parser instead of regex ?
			var res = _getAllMatches(tplHtml),
				tplHtmlWithoutScript = tplHtml.replace(_scriptRegex, ""),
				$script;

			for (var i = 0, script; script = res[i]; i++) {
				$script = $('<div></div>').html(script).find('script');
				if (_supportedTplTypeAttr.indexOf($script.attr('type')) === -1) {
					if ($script.attr('type') === _supportedPartialTypeAttr) {
						_registerPartial($script, viewName);
					}
					continue;
				}
				var tplElId = $script.attr('id');

				if (!tplElId) {
					continue;
				}
				var tplId = tplElId.indexOf('Tpl') > -1 ? tplElId.substring(0, tplElId.indexOf('Tpl')) : tplElId;
				Bs.View.compiledTpl[tplId] = Handlebars.compile($script.html());
			}

			Template.cachedTpl[viewName] = Handlebars.compile(tplHtmlWithoutScript);
			if (!additionalScriptsOnly) {
				Handlebars.registerPartial(viewName, tplHtmlWithoutScript);
			}
		};

		return Template;
	}
});
