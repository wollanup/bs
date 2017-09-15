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

/** @namespace Bs.Stylesheet */

Bs.define('Bs.Stylesheet', {
	construct: function () {

		var count = 0;

		var loadedUrls = [];

		var head = document.getElementsByTagName('head')[0];

		var engine = window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)|AndroidWebKit\/([^ ;]*)/) || 0;

		// use <style> @import load method (IE < 9, Firefox < 18)
		var useImportLoad = false;

		// set to false for explicit <link> load checking when onload doesn't work perfectly (webkit)
		var useOnload = true;

		// trident / msie
		if (engine[1] || engine[7])
			useImportLoad = parseInt(engine[1]) < 6 || parseInt(engine[7]) <= 9;
		// webkit
		else if (engine[2] || engine[8])
			useOnload = false;
		// gecko
		else if (engine[4])
			useImportLoad = parseInt(engine[4]) < 18;

		//main api object
		var Stylesheet = {};

		// <style> @import load method
		var curStyle, curSheet;
		/**
		 *
		 * @param count
		 */
		var createStyle = function (count) {
			curStyle = document.createElement('style');
			head.appendChild(curStyle);
			curStyle.id = 'stylesheet-' + count;
			curSheet = curStyle.styleSheet || curStyle.sheet;
		};
		var ieCnt = 0;
		var ieLoads = [];
		var ieCurCallback;

		var createIeLoad = function (url, count) {
			curSheet.addImport(url);
			curStyle.onload = function () { processIeLoad() };

			ieCnt++;
			if (ieCnt == 31) {
				createStyle(count);
				ieCnt = 0;
			}
		};

		var processIeLoad = function () {
			ieCurCallback();

			var nextLoad = ieLoads.shift();

			if (!nextLoad) {
				ieCurCallback = null;
				return;
			}

			ieCurCallback = nextLoad[1];
			createIeLoad(nextLoad[0]);
		};

		var importLoad = function (url, count, callback) {
			if (!curSheet || !curSheet.addImport) {
				createStyle(count);
			}

			if (curSheet && curSheet.addImport) {
				//old IE
				if (ieCurCallback) {
					ieLoads.push([url, callback]);
				}
				else {
					createIeLoad(url, count);
					ieCurCallback = callback;
				}
			}
			else {
				// old Firefox
				curStyle.textContent = '@import "' + url + '";';

				var loadInterval = setInterval(function () {
					try {
						curStyle.sheet.cssRules;
						clearInterval(loadInterval);
						callback();
					} catch (e) {}
				}, 10);
			}
		};

		// <link> load method
		/**
		 *
		 * @param url
		 * @param count
		 * @param callback
		 */
		var linkLoad = function (url, count, callback) {
			var link = document.createElement('link');
			link.id = 'stylesheet-' + count;
			link.type = 'text/css';
			link.rel = 'stylesheet';
			if (useOnload)
				link.onload = function () {
					link.onload = function () {};
					// for style dimensions queries, a short delay can still be necessary
					setTimeout(callback, 7);
				};
			else
				var loadInterval = setInterval(function () {
					for (var i = 0; i < document.styleSheets.length; i++) {
						var sheet = document.styleSheets[i];
						if (sheet.href == link.href) {
							clearInterval(loadInterval);
							return callback();
						}
					}
				}, 10);
			link.href = url;
			head.appendChild(link);
		};

		/** @namespace Bs.Stylesheet.load */
		/**
		 *
		 * @param url
		 * @param callback
		 * @return {string} 'stylesheet-XXX'
		 */
		Stylesheet.load = function (url) {
			var dfd = new $.Deferred(),
				index = loadedUrls.indexOf(url);

			if (index > -1) {
				$('#stylesheet-' + index).remove();
				dfd.resolve();
			} else {
				++count;
				loadedUrls[count] = url;
				(useImportLoad ? importLoad : linkLoad)(url, count, function () {
					dfd.resolve();
				});
			}
			return dfd;
		};

		Stylesheet.unload = function (id) {
			//$('#' + id).remove();
		};

		return Stylesheet;
	}
});
