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

Bs.define('Bs.Util.Browser', {
	construct: function () {

		var _versionSearchString;

		var _searchString = function (data) {
				for (var i = 0; i < data.length; i++) {
					var dataString = data[i].string;
					var dataProp = data[i].prop;
					_versionSearchString = data[i].versionSearch || data[i].identity;
					if (dataString) {
						if (dataString.indexOf(data[i].subString) != -1)
							return data[i].identity;
					}
					else if (dataProp)
						return data[i].identity;
				}
			},

			_searchVersion = function (dataString) {
				var index = dataString.indexOf(_versionSearchString);
				if (index == -1) return;
				return parseFloat(dataString.substring(index + _versionSearchString.length + 1));
			},

			_dataBrowser = [
				{
					string   : navigator.userAgent,
					subString: "Chrome",
					identity : "Chrome"
				},
				{
					string       : navigator.userAgent,
					subString    : "OmniWeb",
					versionSearch: "OmniWeb/",
					identity     : "OmniWeb"
				},
				{
					string       : navigator.vendor,
					subString    : "Apple",
					identity     : "Safari",
					versionSearch: "Version"
				},
				{
					prop         : window.opera,
					identity     : "Opera",
					versionSearch: "Version"
				},
				{
					string   : navigator.vendor,
					subString: "iCab",
					identity : "iCab"
				},
				{
					string   : navigator.vendor,
					subString: "KDE",
					identity : "Konqueror"
				},
				{
					string   : navigator.userAgent,
					subString: "Firefox",
					identity : "Firefox"
				},
				{
					string   : navigator.vendor,
					subString: "Camino",
					identity : "Camino"
				},
				{		// for newer Netscapes (6+)
					string   : navigator.userAgent,
					subString: "Netscape",
					identity : "Netscape"
				},
				{
					string       : navigator.userAgent,
					subString    : "MSIE",
					identity     : "Explorer",
					versionSearch: "MSIE"
				},
				{
					string       : navigator.userAgent,
					subString    : "Gecko",
					identity     : "Mozilla",
					versionSearch: "rv"
				},
				{ 		// for older Netscapes (4-)
					string       : navigator.userAgent,
					subString    : "Mozilla",
					identity     : "Netscape",
					versionSearch: "Mozilla"
				},
				{ 		// IE11
					string       : navigator.userAgent,
					subString    : "Trident",
					identity     : "Explorer",
					versionSearch: "rv:"
				},
				{ 		// Edge
					string       : navigator.userAgent,
					subString    : "Edge",
					identity     : "Explorer",
					versionSearch: "Edge/"
				}
			],

			_dataOS = [
				{
					string   : navigator.platform,
					subString: "Win",
					identity : "Windows"
				},
				{
					string   : navigator.platform,
					subString: "Mac",
					identity : "Mac"
				},
				{
					string   : navigator.userAgent,
					subString: "iPhone",
					identity : "iPhone/iPod"
				},
				{
					string   : navigator.platform,
					subString: "Linux",
					identity : "Linux"
				}
			],
			_browser = _searchString(_dataBrowser) || "An unknown browser",
			_version = _searchVersion(navigator.userAgent) || _searchVersion(navigator.appVersion) || "an unknown version",
			_os = _searchString(_dataOS) || "an unknown OS";

		return {
			isChrome   : function () {
				return _browser === 'Chrome';
			},
			isIE       : function () {
				return _browser === 'Explorer';
			},
			isIE6      : function (strict) {
				return this.isIEVersion(6, strict);
			},
			isIE7      : function (strict) {
				return this.isIEVersion(7, strict);
			},
			isIE8      : function (strict) {
				return this.isIEVersion(8, strict);
			},
			isIE9      : function (strict) {
				return this.isIEVersion(9, strict);
			},
			isIE10     : function (strict) {
				return this.isIEVersion(10, strict);
			},
			isIE11     : function (strict) {
				return this.isIEVersion(11, strict);
			},
			isIEVersion: function (version, strict) {
				return _browser === 'Explorer' && (strict ? _version === version : _version <= version);
			},
			getVersion : function () {
				return _version;
			},
			getOS      : function () {
				return _os;
			}
		}
	}
});
