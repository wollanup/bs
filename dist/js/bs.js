/**!

 @license
 handlebars v4.5.3

Copyright (C) 2011-2017 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?exports.Handlebars=b():a.Handlebars=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";function d(){var a=r();return a.compile=function(b,c){return k.compile(b,c,a)},a.precompile=function(b,c){return k.precompile(b,c,a)},a.AST=i["default"],a.Compiler=k.Compiler,a.JavaScriptCompiler=m["default"],a.Parser=j.parser,a.parse=j.parse,a.parseWithoutProcessing=j.parseWithoutProcessing,a}var e=c(1)["default"];b.__esModule=!0;var f=c(2),g=e(f),h=c(40),i=e(h),j=c(41),k=c(46),l=c(49),m=e(l),n=c(44),o=e(n),p=c(39),q=e(p),r=g["default"].create,s=d();s.create=d,q["default"](s),s.Visitor=o["default"],s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b){"use strict";b["default"]=function(a){return a&&a.__esModule?a:{"default":a}},b.__esModule=!0},function(a,b,c){"use strict";function d(){var a=new h.HandlebarsEnvironment;return n.extend(a,h),a.SafeString=j["default"],a.Exception=l["default"],a.Utils=n,a.escapeExpression=n.escapeExpression,a.VM=p,a.template=function(b){return p.template(b,a)},a}var e=c(3)["default"],f=c(1)["default"];b.__esModule=!0;var g=c(4),h=e(g),i=c(33),j=f(i),k=c(6),l=f(k),m=c(5),n=e(m),o=c(34),p=e(o),q=c(39),r=f(q),s=d();s.create=d,r["default"](s),s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b){"use strict";b["default"]=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b},b.__esModule=!0},function(a,b,c){"use strict";function d(a,b,c){this.helpers=a||{},this.partials=b||{},this.decorators=c||{},i.registerDefaultHelpers(this),j.registerDefaultDecorators(this)}var e=c(1)["default"];b.__esModule=!0,b.HandlebarsEnvironment=d;var f=c(5),g=c(6),h=e(g),i=c(10),j=c(30),k=c(32),l=e(k),m="4.5.3";b.VERSION=m;var n=8;b.COMPILER_REVISION=n;var o=7;b.LAST_COMPATIBLE_COMPILER_REVISION=o;var p={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};b.REVISION_CHANGES=p;var q="[object Object]";d.prototype={constructor:d,logger:l["default"],log:l["default"].log,registerHelper:function(a,b){if(f.toString.call(a)===q){if(b)throw new h["default"]("Arg not supported with multiple helpers");f.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){if(f.toString.call(a)===q)f.extend(this.partials,a);else{if("undefined"==typeof b)throw new h["default"]('Attempting to register a partial called "'+a+'" as undefined');this.partials[a]=b}},unregisterPartial:function(a){delete this.partials[a]},registerDecorator:function(a,b){if(f.toString.call(a)===q){if(b)throw new h["default"]("Arg not supported with multiple decorators");f.extend(this.decorators,a)}else this.decorators[a]=b},unregisterDecorator:function(a){delete this.decorators[a]}};var r=l["default"].log;b.log=r,b.createFrame=f.createFrame,b.logger=l["default"]},function(a,b){"use strict";function c(a){return k[a]}function d(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function e(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1}function f(a){if("string"!=typeof a){if(a&&a.toHTML)return a.toHTML();if(null==a)return"";if(!a)return a+"";a=""+a}return m.test(a)?a.replace(l,c):a}function g(a){return!a&&0!==a||!(!p(a)||0!==a.length)}function h(a){var b=d({},a);return b._parent=a,b}function i(a,b){return a.path=b,a}function j(a,b){return(a?a+".":"")+b}b.__esModule=!0,b.extend=d,b.indexOf=e,b.escapeExpression=f,b.isEmpty=g,b.createFrame=h,b.blockParams=i,b.appendContextPath=j;var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},l=/[&<>"'`=]/g,m=/[&<>"'`=]/,n=Object.prototype.toString;b.toString=n;var o=function(a){return"function"==typeof a};o(/x/)&&(b.isFunction=o=function(a){return"function"==typeof a&&"[object Function]"===n.call(a)}),b.isFunction=o;var p=Array.isArray||function(a){return!(!a||"object"!=typeof a)&&"[object Array]"===n.call(a)};b.isArray=p},function(a,b,c){"use strict";function d(a,b){var c=b&&b.loc,g=void 0,h=void 0,i=void 0,j=void 0;c&&(g=c.start.line,h=c.end.line,i=c.start.column,j=c.end.column,a+=" - "+g+":"+i);for(var k=Error.prototype.constructor.call(this,a),l=0;l<f.length;l++)this[f[l]]=k[f[l]];Error.captureStackTrace&&Error.captureStackTrace(this,d);try{c&&(this.lineNumber=g,this.endLineNumber=h,e?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:j,enumerable:!0})):(this.column=i,this.endColumn=j))}catch(m){}}var e=c(7)["default"];b.__esModule=!0;var f=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];d.prototype=new Error,b["default"]=d,a.exports=b["default"]},function(a,b,c){a.exports={"default":c(8),__esModule:!0}},function(a,b,c){var d=c(9);a.exports=function(a,b,c){return d.setDesc(a,b,c)}},function(a,b){var c=Object;a.exports={create:c.create,getProto:c.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:c.getOwnPropertyDescriptor,setDesc:c.defineProperty,setDescs:c.defineProperties,getKeys:c.keys,getNames:c.getOwnPropertyNames,getSymbols:c.getOwnPropertySymbols,each:[].forEach}},function(a,b,c){"use strict";function d(a){h["default"](a),j["default"](a),l["default"](a),n["default"](a),p["default"](a),r["default"](a),t["default"](a)}function e(a,b,c){a.helpers[b]&&(a.hooks[b]=a.helpers[b],c||delete a.helpers[b])}var f=c(1)["default"];b.__esModule=!0,b.registerDefaultHelpers=d,b.moveHelperToHooks=e;var g=c(11),h=f(g),i=c(12),j=f(i),k=c(25),l=f(k),m=c(26),n=f(m),o=c(27),p=f(o),q=c(28),r=f(q),s=c(29),t=f(s)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5);b["default"]=function(a){a.registerHelper("blockHelperMissing",function(b,c){var e=c.inverse,f=c.fn;if(b===!0)return f(this);if(b===!1||null==b)return e(this);if(d.isArray(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):e(this);if(c.data&&c.ids){var g=d.createFrame(c.data);g.contextPath=d.appendContextPath(c.data.contextPath,c.name),c={data:g}}return f(b,c)})},a.exports=b["default"]},function(a,b,c){(function(d){"use strict";var e=c(13)["default"],f=c(1)["default"];b.__esModule=!0;var g=c(5),h=c(6),i=f(h);b["default"]=function(a){a.registerHelper("each",function(a,b){function c(b,c,d){l&&(l.key=b,l.index=c,l.first=0===c,l.last=!!d,m&&(l.contextPath=m+b)),k+=f(a[b],{data:l,blockParams:g.blockParams([a[b],b],[m+b,null])})}if(!b)throw new i["default"]("Must pass iterator to #each");var f=b.fn,h=b.inverse,j=0,k="",l=void 0,m=void 0;if(b.data&&b.ids&&(m=g.appendContextPath(b.data.contextPath,b.ids[0])+"."),g.isFunction(a)&&(a=a.call(this)),b.data&&(l=g.createFrame(b.data)),a&&"object"==typeof a)if(g.isArray(a))for(var n=a.length;j<n;j++)j in a&&c(j,j,j===a.length-1);else if(d.Symbol&&a[d.Symbol.iterator]){for(var o=[],p=a[d.Symbol.iterator](),q=p.next();!q.done;q=p.next())o.push(q.value);a=o;for(var n=a.length;j<n;j++)c(j,j,j===a.length-1)}else!function(){var b=void 0;e(a).forEach(function(a){void 0!==b&&c(b,j-1),b=a,j++}),void 0!==b&&c(b,j-1,!0)}();return 0===j&&(k=h(this)),k})},a.exports=b["default"]}).call(b,function(){return this}())},function(a,b,c){a.exports={"default":c(14),__esModule:!0}},function(a,b,c){c(15),a.exports=c(21).Object.keys},function(a,b,c){var d=c(16);c(18)("keys",function(a){return function(b){return a(d(b))}})},function(a,b,c){var d=c(17);a.exports=function(a){return Object(d(a))}},function(a,b){a.exports=function(a){if(void 0==a)throw TypeError("Can't call method on  "+a);return a}},function(a,b,c){var d=c(19),e=c(21),f=c(24);a.exports=function(a,b){var c=(e.Object||{})[a]||Object[a],g={};g[a]=b(c),d(d.S+d.F*f(function(){c(1)}),"Object",g)}},function(a,b,c){var d=c(20),e=c(21),f=c(22),g="prototype",h=function(a,b,c){var i,j,k,l=a&h.F,m=a&h.G,n=a&h.S,o=a&h.P,p=a&h.B,q=a&h.W,r=m?e:e[b]||(e[b]={}),s=m?d:n?d[b]:(d[b]||{})[g];m&&(c=b);for(i in c)j=!l&&s&&i in s,j&&i in r||(k=j?s[i]:c[i],r[i]=m&&"function"!=typeof s[i]?c[i]:p&&j?f(k,d):q&&s[i]==k?function(a){var b=function(b){return this instanceof a?new a(b):a(b)};return b[g]=a[g],b}(k):o&&"function"==typeof k?f(Function.call,k):k,o&&((r[g]||(r[g]={}))[i]=k))};h.F=1,h.G=2,h.S=4,h.P=8,h.B=16,h.W=32,a.exports=h},function(a,b){var c=a.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=c)},function(a,b){var c=a.exports={version:"1.2.6"};"number"==typeof __e&&(__e=c)},function(a,b,c){var d=c(23);a.exports=function(a,b,c){if(d(a),void 0===b)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}}},function(a,b){a.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a}},function(a,b){a.exports=function(a){try{return!!a()}catch(b){return!0}}},function(a,b,c){"use strict";var d=c(1)["default"];b.__esModule=!0;var e=c(6),f=d(e);b["default"]=function(a){a.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new f["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(1)["default"];b.__esModule=!0;var e=c(5),f=c(6),g=d(f);b["default"]=function(a){a.registerHelper("if",function(a,b){if(2!=arguments.length)throw new g["default"]("#if requires exactly one argument");return e.isFunction(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||e.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){if(2!=arguments.length)throw new g["default"]("#unless requires exactly one argument");return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("log",function(){for(var b=[void 0],c=arguments[arguments.length-1],d=0;d<arguments.length-1;d++)b.push(arguments[d]);var e=1;null!=c.hash.level?e=c.hash.level:c.data&&null!=c.data.level&&(e=c.data.level),b[0]=e,a.log.apply(a,b)})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0;var c=/^(constructor|__defineGetter__|__defineSetter__|__lookupGetter__|__proto__)$/;b.dangerousPropertyRegex=c,b["default"]=function(a){a.registerHelper("lookup",function(a,b){if(!a)return a;if(!c.test(String(b))||Object.prototype.propertyIsEnumerable.call(a,b))return a[b]})}},function(a,b,c){"use strict";var d=c(1)["default"];b.__esModule=!0;var e=c(5),f=c(6),g=d(f);b["default"]=function(a){a.registerHelper("with",function(a,b){if(2!=arguments.length)throw new g["default"]("#with requires exactly one argument");e.isFunction(a)&&(a=a.call(this));var c=b.fn;if(e.isEmpty(a))return b.inverse(this);var d=b.data;return b.data&&b.ids&&(d=e.createFrame(b.data),d.contextPath=e.appendContextPath(b.data.contextPath,b.ids[0])),c(a,{data:d,blockParams:e.blockParams([a],[d&&d.contextPath])})})},a.exports=b["default"]},function(a,b,c){"use strict";function d(a){g["default"](a)}var e=c(1)["default"];b.__esModule=!0,b.registerDefaultDecorators=d;var f=c(31),g=e(f)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5);b["default"]=function(a){a.registerDecorator("inline",function(a,b,c,e){var f=a;return b.partials||(b.partials={},f=function(e,f){var g=c.partials;c.partials=d.extend({},g,b.partials);var h=a(e,f);return c.partials=g,h}),b.partials[e.args[0]]=e.fn,f})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(5),e={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(a){if("string"==typeof a){var b=d.indexOf(e.methodMap,a.toLowerCase());a=b>=0?b:parseInt(a,10)}return a},log:function(a){if(a=e.lookupLevel(a),"undefined"!=typeof console&&e.lookupLevel(e.level)<=a){var b=e.methodMap[a];console[b]||(b="log");for(var c=arguments.length,d=Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];console[b].apply(console,d)}}};b["default"]=e,a.exports=b["default"]},function(a,b){"use strict";function c(a){this.string=a}b.__esModule=!0,c.prototype.toString=c.prototype.toHTML=function(){return""+this.string},b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=s.COMPILER_REVISION;if(!(b>=s.LAST_COMPATIBLE_COMPILER_REVISION&&b<=s.COMPILER_REVISION)){if(b<s.LAST_COMPATIBLE_COMPILER_REVISION){var d=s.REVISION_CHANGES[c],e=s.REVISION_CHANGES[b];throw new r["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new r["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){function c(c,d,e){e.hash&&(d=p.extend({},d,e.hash),e.ids&&(e.ids[0]=!0)),c=b.VM.resolvePartial.call(this,c,d,e);var f=p.extend({},e,{hooks:this.hooks}),g=b.VM.invokePartial.call(this,c,d,f);if(null==g&&b.compile&&(e.partials[e.name]=b.compile(c,a.compilerOptions,b),g=e.partials[e.name](d,f)),null!=g){if(e.indent){for(var h=g.split("\n"),i=0,j=h.length;i<j&&(h[i]||i+1!==j);i++)h[i]=e.indent+h[i];g=h.join("\n")}return g}throw new r["default"]("The partial "+e.name+" could not be compiled when running in runtime-only mode")}function d(b){function c(b){return""+a.main(g,b,g.helpers,g.partials,f,i,h)}var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],f=e.data;d._setup(e),!e.partial&&a.useData&&(f=j(b,f));var h=void 0,i=a.useBlockParams?[]:void 0;return a.useDepths&&(h=e.depths?b!=e.depths[0]?[b].concat(e.depths):e.depths:[b]),(c=k(a.main,c,g,e.depths||[],f,i))(b,e)}if(!b)throw new r["default"]("No environment passed to template");if(!a||!a.main)throw new r["default"]("Unknown template object: "+typeof a);a.main.decorator=a.main_d,b.VM.checkRevision(a.compiler);var e=a.compiler&&7===a.compiler[0],g={strict:function(a,b,c){if(!(a&&b in a))throw new r["default"]('"'+b+'" not defined in '+a,{loc:c});return a[b]},lookup:function(a,b){for(var c=a.length,d=0;d<c;d++)if(a[d]&&null!=a[d][b])return a[d][b]},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:p.escapeExpression,invokePartial:c,fn:function(b){var c=a[b];return c.decorator=a[b+"_d"],c},programs:[],program:function(a,b,c,d,e){var g=this.programs[a],h=this.fn(a);return b||e||d||c?g=f(this,a,h,b,c,d,e):g||(g=this.programs[a]=f(this,a,h)),g},data:function(a,b){for(;a&&b--;)a=a._parent;return a},nullContext:l({}),noop:b.VM.noop,compilerInfo:a.compiler};return d.isTop=!0,d._setup=function(c){if(c.partial)g.helpers=c.helpers,g.partials=c.partials,g.decorators=c.decorators,g.hooks=c.hooks;else{g.helpers=p.extend({},b.helpers,c.helpers),a.usePartial&&(g.partials=p.extend({},b.partials,c.partials)),(a.usePartial||a.useDecorators)&&(g.decorators=p.extend({},b.decorators,c.decorators)),g.hooks={};var d=c.allowCallsToHelperMissing||e;t.moveHelperToHooks(g,"helperMissing",d),t.moveHelperToHooks(g,"blockHelperMissing",d)}},d._child=function(b,c,d,e){if(a.useBlockParams&&!d)throw new r["default"]("must pass block params");if(a.useDepths&&!e)throw new r["default"]("must pass parent depths");return f(g,b,a[b],c,0,d,e)},d}function f(a,b,c,d,e,f,g){function h(b){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],h=g;return!g||b==g[0]||b===a.nullContext&&null===g[0]||(h=[b].concat(g)),c(a,b,a.helpers,a.partials,e.data||d,f&&[e.blockParams].concat(f),h)}return h=k(c,h,a,g,d,f),h.program=b,h.depth=g?g.length:0,h.blockParams=e||0,h}function g(a,b,c){return a?a.call||c.name||(c.name=a,a=c.partials[a]):a="@partial-block"===c.name?c.data["partial-block"]:c.partials[c.name],a}function h(a,b,c){var d=c.data&&c.data["partial-block"];c.partial=!0,c.ids&&(c.data.contextPath=c.ids[0]||c.data.contextPath);var e=void 0;if(c.fn&&c.fn!==i&&!function(){c.data=s.createFrame(c.data);var a=c.fn;e=c.data["partial-block"]=function(b){var c=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return c.data=s.createFrame(c.data),c.data["partial-block"]=d,a(b,c)},a.partials&&(c.partials=p.extend({},c.partials,a.partials))}(),void 0===a&&e&&(a=e),void 0===a)throw new r["default"]("The partial "+c.name+" could not be found");if(a instanceof Function)return a(b,c)}function i(){return""}function j(a,b){return b&&"root"in b||(b=b?s.createFrame(b):{},b.root=a),b}function k(a,b,c,d,e,f){if(a.decorator){var g={};b=a.decorator(b,g,c,d&&d[0],e,f,d),p.extend(b,g)}return b}var l=c(35)["default"],m=c(3)["default"],n=c(1)["default"];b.__esModule=!0,b.checkRevision=d,b.template=e,b.wrapProgram=f,b.resolvePartial=g,b.invokePartial=h,b.noop=i;var o=c(5),p=m(o),q=c(6),r=n(q),s=c(4),t=c(10)},function(a,b,c){a.exports={"default":c(36),__esModule:!0}},function(a,b,c){c(37),a.exports=c(21).Object.seal},function(a,b,c){var d=c(38);c(18)("seal",function(a){return function(b){return a&&d(b)?a(b):b}})},function(a,b){a.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}},function(a,b){(function(c){"use strict";b.__esModule=!0,b["default"]=function(a){var b="undefined"!=typeof c?c:window,d=b.Handlebars;a.noConflict=function(){return b.Handlebars===a&&(b.Handlebars=d),a}},a.exports=b["default"]}).call(b,function(){return this}())},function(a,b){"use strict";b.__esModule=!0;var c={helpers:{helperExpression:function(a){return"SubExpression"===a.type||("MustacheStatement"===a.type||"BlockStatement"===a.type)&&!!(a.params&&a.params.length||a.hash)},scopedId:function(a){return/^\.|this\b/.test(a.original)},simpleId:function(a){return 1===a.parts.length&&!c.helpers.scopedId(a)&&!a.depth}}};b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b){if("Program"===a.type)return a;i["default"].yy=o,o.locInfo=function(a){return new o.SourceLocation(b&&b.srcName,a)};var c=i["default"].parse(a);return c}function e(a,b){var c=d(a,b),e=new k["default"](b);return e.accept(c)}var f=c(1)["default"],g=c(3)["default"];b.__esModule=!0,b.parseWithoutProcessing=d,b.parse=e;var h=c(42),i=f(h),j=c(43),k=f(j),l=c(45),m=g(l),n=c(5);b.parser=i["default"];var o={};n.extend(o,m)},function(a,b){"use strict";b.__esModule=!0;var c=function(){function a(){this.yy={}}var b={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(a,b,c,d,e,f,g){var h=f.length-1;switch(e){case 1:return f[h-1];case 2:this.$=d.prepareProgram(f[h]);break;case 3:this.$=f[h];break;case 4:this.$=f[h];break;case 5:this.$=f[h];break;case 6:this.$=f[h];break;case 7:this.$=f[h];break;case 8:this.$=f[h];break;case 9:this.$={type:"CommentStatement",value:d.stripComment(f[h]),strip:d.stripFlags(f[h],f[h]),loc:d.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:f[h],value:f[h],loc:d.locInfo(this._$)};break;case 11:this.$=d.prepareRawBlock(f[h-2],f[h-1],f[h],this._$);break;case 12:this.$={path:f[h-3],params:f[h-2],hash:f[h-1]};break;case 13:this.$=d.prepareBlock(f[h-3],f[h-2],f[h-1],f[h],!1,this._$);break;case 14:this.$=d.prepareBlock(f[h-3],f[h-2],f[h-1],f[h],!0,this._$);break;case 15:this.$={open:f[h-5],path:f[h-4],params:f[h-3],hash:f[h-2],blockParams:f[h-1],strip:d.stripFlags(f[h-5],f[h])};break;case 16:this.$={path:f[h-4],params:f[h-3],hash:f[h-2],blockParams:f[h-1],strip:d.stripFlags(f[h-5],f[h])};break;case 17:this.$={path:f[h-4],params:f[h-3],hash:f[h-2],blockParams:f[h-1],strip:d.stripFlags(f[h-5],f[h])};break;case 18:this.$={strip:d.stripFlags(f[h-1],f[h-1]),program:f[h]};break;case 19:var i=d.prepareBlock(f[h-2],f[h-1],f[h],f[h],!1,this._$),j=d.prepareProgram([i],f[h-1].loc);j.chained=!0,this.$={strip:f[h-2].strip,program:j,chain:!0};break;case 20:this.$=f[h];break;case 21:this.$={path:f[h-1],strip:d.stripFlags(f[h-2],f[h])};break;case 22:this.$=d.prepareMustache(f[h-3],f[h-2],f[h-1],f[h-4],d.stripFlags(f[h-4],f[h]),this._$);break;case 23:this.$=d.prepareMustache(f[h-3],f[h-2],f[h-1],f[h-4],d.stripFlags(f[h-4],f[h]),this._$);break;case 24:this.$={type:"PartialStatement",name:f[h-3],params:f[h-2],hash:f[h-1],indent:"",strip:d.stripFlags(f[h-4],f[h]),loc:d.locInfo(this._$)};break;case 25:this.$=d.preparePartialBlock(f[h-2],f[h-1],f[h],this._$);break;case 26:this.$={path:f[h-3],params:f[h-2],hash:f[h-1],strip:d.stripFlags(f[h-4],f[h])};break;case 27:this.$=f[h];break;case 28:this.$=f[h];break;case 29:this.$={type:"SubExpression",path:f[h-3],params:f[h-2],hash:f[h-1],loc:d.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:f[h],loc:d.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:d.id(f[h-2]),value:f[h],loc:d.locInfo(this._$)};break;case 32:this.$=d.id(f[h-1]);break;case 33:this.$=f[h];break;case 34:this.$=f[h];break;case 35:this.$={type:"StringLiteral",value:f[h],original:f[h],loc:d.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(f[h]),original:Number(f[h]),loc:d.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:"true"===f[h],original:"true"===f[h],loc:d.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:d.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:d.locInfo(this._$)};break;case 40:this.$=f[h];break;case 41:this.$=f[h];break;case 42:this.$=d.preparePath(!0,f[h],this._$);break;case 43:this.$=d.preparePath(!1,f[h],this._$);break;case 44:f[h-2].push({part:d.id(f[h]),original:f[h],separator:f[h-1]}),this.$=f[h-2];break;case 45:this.$=[{part:d.id(f[h]),original:f[h]}];break;case 46:this.$=[];break;case 47:f[h-1].push(f[h]);break;case 48:this.$=[];break;case 49:f[h-1].push(f[h]);break;case 50:this.$=[];break;case 51:f[h-1].push(f[h]);break;case 58:this.$=[];break;case 59:f[h-1].push(f[h]);break;case 64:this.$=[];break;case 65:f[h-1].push(f[h]);break;case 70:this.$=[];break;case 71:f[h-1].push(f[h]);break;case 78:this.$=[];break;case 79:f[h-1].push(f[h]);break;case 82:this.$=[];break;case 83:f[h-1].push(f[h]);break;case 86:this.$=[];break;case 87:f[h-1].push(f[h]);break;case 90:this.$=[];break;case 91:f[h-1].push(f[h]);break;case 94:this.$=[];break;case 95:f[h-1].push(f[h]);break;case 98:this.$=[f[h]];break;case 99:f[h-1].push(f[h]);break;case 100:this.$=[f[h]];break;case 101:f[h-1].push(f[h])}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],
81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(a,b){throw new Error(a)},parse:function(a){function b(){var a;return a=c.lexer.lex()||1,"number"!=typeof a&&(a=c.symbols_[a]||a),a}var c=this,d=[0],e=[null],f=[],g=this.table,h="",i=0,j=0,k=0;this.lexer.setInput(a),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var l=this.lexer.yylloc;f.push(l);var m=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var n,o,p,q,r,s,t,u,v,w={};;){if(p=d[d.length-1],this.defaultActions[p]?q=this.defaultActions[p]:(null!==n&&"undefined"!=typeof n||(n=b()),q=g[p]&&g[p][n]),"undefined"==typeof q||!q.length||!q[0]){var x="";if(!k){v=[];for(s in g[p])this.terminals_[s]&&s>2&&v.push("'"+this.terminals_[s]+"'");x=this.lexer.showPosition?"Parse error on line "+(i+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[n]||n)+"'":"Parse error on line "+(i+1)+": Unexpected "+(1==n?"end of input":"'"+(this.terminals_[n]||n)+"'"),this.parseError(x,{text:this.lexer.match,token:this.terminals_[n]||n,line:this.lexer.yylineno,loc:l,expected:v})}}if(q[0]instanceof Array&&q.length>1)throw new Error("Parse Error: multiple actions possible at state: "+p+", token: "+n);switch(q[0]){case 1:d.push(n),e.push(this.lexer.yytext),f.push(this.lexer.yylloc),d.push(q[1]),n=null,o?(n=o,o=null):(j=this.lexer.yyleng,h=this.lexer.yytext,i=this.lexer.yylineno,l=this.lexer.yylloc,k>0&&k--);break;case 2:if(t=this.productions_[q[1]][1],w.$=e[e.length-t],w._$={first_line:f[f.length-(t||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(t||1)].first_column,last_column:f[f.length-1].last_column},m&&(w._$.range=[f[f.length-(t||1)].range[0],f[f.length-1].range[1]]),r=this.performAction.call(w,h,j,i,this.yy,q[1],e,f),"undefined"!=typeof r)return r;t&&(d=d.slice(0,-1*t*2),e=e.slice(0,-1*t),f=f.slice(0,-1*t)),d.push(this.productions_[q[1]][0]),e.push(w.$),f.push(w._$),u=g[d[d.length-2]][d[d.length-1]],d.push(u);break;case 3:return!0}}return!0}},c=function(){var a={EOF:1,parseError:function(a,b){if(!this.yy.parser)throw new Error(a);this.yy.parser.parseError(a,b)},setInput:function(a){return this._input=a,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var b=a.match(/(?:\r\n?|\n).*/g);return b?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var b=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-b-1),this.offset-=b;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var e=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===d.length?this.yylloc.first_column:0)+d[d.length-c.length].length-c[0].length:this.yylloc.first_column-b},this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-b]),this},more:function(){return this._more=!0,this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=new Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b,c,d,e;this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),g=0;g<f.length&&(c=this._input.match(this.rules[f[g]]),!c||b&&!(c[0].length>b[0].length)||(b=c,d=g,this.options.flex));g++);return b?(e=b[0].match(/(?:\r\n?|\n).*/g),e&&(this.yylineno+=e.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:e?e[e.length-1].length-e[e.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+b[0].length},this.yytext+=b[0],this.match+=b[0],this.matches=b,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(b[0].length),this.matched+=b[0],a=this.performAction.call(this,this.yy,this,f[d],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a?a:void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return"undefined"!=typeof a?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)}};return a.options={},a.performAction=function(a,b,c,d){function e(a,c){return b.yytext=b.yytext.substring(a,b.yyleng-c+a)}switch(c){case 0:if("\\\\"===b.yytext.slice(-2)?(e(0,1),this.begin("mu")):"\\"===b.yytext.slice(-1)?(e(0,1),this.begin("emu")):this.begin("mu"),b.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;case 3:return this.begin("raw"),15;case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(e(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;case 16:return this.popState(),44;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(b.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;case 30:return this.popState(),33;case 31:return b.yytext=e(1,2).replace(/\\"/g,'"'),80;case 32:return b.yytext=e(1,2).replace(/\\'/g,"'"),80;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return b.yytext=b.yytext.replace(/\\([\\\]])/g,"$1"),72;case 43:return"INVALID";case 44:return 5}},a.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],a.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},a}();return b.lexer=c,a.prototype=b,b.Parser=a,new a}();b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(){var a=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.options=a}function e(a,b,c){void 0===b&&(b=a.length);var d=a[b-1],e=a[b-2];return d?"ContentStatement"===d.type?(e||!c?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(d.original):void 0:c}function f(a,b,c){void 0===b&&(b=-1);var d=a[b+1],e=a[b+2];return d?"ContentStatement"===d.type?(e||!c?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(d.original):void 0:c}function g(a,b,c){var d=a[null==b?0:b+1];if(d&&"ContentStatement"===d.type&&(c||!d.rightStripped)){var e=d.value;d.value=d.value.replace(c?/^\s+/:/^[ \t]*\r?\n?/,""),d.rightStripped=d.value!==e}}function h(a,b,c){var d=a[null==b?a.length-1:b-1];if(d&&"ContentStatement"===d.type&&(c||!d.leftStripped)){var e=d.value;return d.value=d.value.replace(c?/\s+$/:/[ \t]+$/,""),d.leftStripped=d.value!==e,d.leftStripped}}var i=c(1)["default"];b.__esModule=!0;var j=c(44),k=i(j);d.prototype=new k["default"],d.prototype.Program=function(a){var b=!this.options.ignoreStandalone,c=!this.isRootSeen;this.isRootSeen=!0;for(var d=a.body,i=0,j=d.length;i<j;i++){var k=d[i],l=this.accept(k);if(l){var m=e(d,i,c),n=f(d,i,c),o=l.openStandalone&&m,p=l.closeStandalone&&n,q=l.inlineStandalone&&m&&n;l.close&&g(d,i,!0),l.open&&h(d,i,!0),b&&q&&(g(d,i),h(d,i)&&"PartialStatement"===k.type&&(k.indent=/([ \t]+$)/.exec(d[i-1].original)[1])),b&&o&&(g((k.program||k.inverse).body),h(d,i)),b&&p&&(g(d,i),h((k.inverse||k.program).body))}}return a},d.prototype.BlockStatement=d.prototype.DecoratorBlock=d.prototype.PartialBlockStatement=function(a){this.accept(a.program),this.accept(a.inverse);var b=a.program||a.inverse,c=a.program&&a.inverse,d=c,i=c;if(c&&c.chained)for(d=c.body[0].program;i.chained;)i=i.body[i.body.length-1].program;var j={open:a.openStrip.open,close:a.closeStrip.close,openStandalone:f(b.body),closeStandalone:e((d||b).body)};if(a.openStrip.close&&g(b.body,null,!0),c){var k=a.inverseStrip;k.open&&h(b.body,null,!0),k.close&&g(d.body,null,!0),a.closeStrip.open&&h(i.body,null,!0),!this.options.ignoreStandalone&&e(b.body)&&f(d.body)&&(h(b.body),g(d.body))}else a.closeStrip.open&&h(b.body,null,!0);return j},d.prototype.Decorator=d.prototype.MustacheStatement=function(a){return a.strip},d.prototype.PartialStatement=d.prototype.CommentStatement=function(a){var b=a.strip||{};return{inlineStandalone:!0,open:b.open,close:b.close}},b["default"]=d,a.exports=b["default"]},function(a,b,c){"use strict";function d(){this.parents=[]}function e(a){this.acceptRequired(a,"path"),this.acceptArray(a.params),this.acceptKey(a,"hash")}function f(a){e.call(this,a),this.acceptKey(a,"program"),this.acceptKey(a,"inverse")}function g(a){this.acceptRequired(a,"name"),this.acceptArray(a.params),this.acceptKey(a,"hash")}var h=c(1)["default"];b.__esModule=!0;var i=c(6),j=h(i);d.prototype={constructor:d,mutating:!1,acceptKey:function(a,b){var c=this.accept(a[b]);if(this.mutating){if(c&&!d.prototype[c.type])throw new j["default"]('Unexpected node type "'+c.type+'" found when accepting '+b+" on "+a.type);a[b]=c}},acceptRequired:function(a,b){if(this.acceptKey(a,b),!a[b])throw new j["default"](a.type+" requires "+b)},acceptArray:function(a){for(var b=0,c=a.length;b<c;b++)this.acceptKey(a,b),a[b]||(a.splice(b,1),b--,c--)},accept:function(a){if(a){if(!this[a.type])throw new j["default"]("Unknown type: "+a.type,a);this.current&&this.parents.unshift(this.current),this.current=a;var b=this[a.type](a);return this.current=this.parents.shift(),!this.mutating||b?b:b!==!1?a:void 0}},Program:function(a){this.acceptArray(a.body)},MustacheStatement:e,Decorator:e,BlockStatement:f,DecoratorBlock:f,PartialStatement:g,PartialBlockStatement:function(a){g.call(this,a),this.acceptKey(a,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:e,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(a){this.acceptArray(a.pairs)},HashPair:function(a){this.acceptRequired(a,"value")}},b["default"]=d,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b){if(b=b.path?b.path.original:b,a.path.original!==b){var c={loc:a.path.loc};throw new q["default"](a.path.original+" doesn't match "+b,c)}}function e(a,b){this.source=a,this.start={line:b.first_line,column:b.first_column},this.end={line:b.last_line,column:b.last_column}}function f(a){return/^\[.*\]$/.test(a)?a.substring(1,a.length-1):a}function g(a,b){return{open:"~"===a.charAt(2),close:"~"===b.charAt(b.length-3)}}function h(a){return a.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function i(a,b,c){c=this.locInfo(c);for(var d=a?"@":"",e=[],f=0,g=0,h=b.length;g<h;g++){var i=b[g].part,j=b[g].original!==i;if(d+=(b[g].separator||"")+i,j||".."!==i&&"."!==i&&"this"!==i)e.push(i);else{if(e.length>0)throw new q["default"]("Invalid path: "+d,{loc:c});".."===i&&f++}}return{type:"PathExpression",data:a,depth:f,parts:e,original:d,loc:c}}function j(a,b,c,d,e,f){var g=d.charAt(3)||d.charAt(2),h="{"!==g&&"&"!==g,i=/\*/.test(d);return{type:i?"Decorator":"MustacheStatement",path:a,params:b,hash:c,escaped:h,strip:e,loc:this.locInfo(f)}}function k(a,b,c,e){d(a,c),e=this.locInfo(e);var f={type:"Program",body:b,strip:{},loc:e};return{type:"BlockStatement",path:a.path,params:a.params,hash:a.hash,program:f,openStrip:{},inverseStrip:{},closeStrip:{},loc:e}}function l(a,b,c,e,f,g){e&&e.path&&d(a,e);var h=/\*/.test(a.open);b.blockParams=a.blockParams;var i=void 0,j=void 0;if(c){if(h)throw new q["default"]("Unexpected inverse block on decorator",c);c.chain&&(c.program.body[0].closeStrip=e.strip),j=c.strip,i=c.program}return f&&(f=i,i=b,b=f),{type:h?"DecoratorBlock":"BlockStatement",path:a.path,params:a.params,hash:a.hash,program:b,inverse:i,openStrip:a.strip,inverseStrip:j,closeStrip:e&&e.strip,loc:this.locInfo(g)}}function m(a,b){if(!b&&a.length){var c=a[0].loc,d=a[a.length-1].loc;c&&d&&(b={source:c.source,start:{line:c.start.line,column:c.start.column},end:{line:d.end.line,column:d.end.column}})}return{type:"Program",body:a,strip:{},loc:b}}function n(a,b,c,e){return d(a,c),{type:"PartialBlockStatement",name:a.path,params:a.params,hash:a.hash,program:b,openStrip:a.strip,closeStrip:c&&c.strip,loc:this.locInfo(e)}}var o=c(1)["default"];b.__esModule=!0,b.SourceLocation=e,b.id=f,b.stripFlags=g,b.stripComment=h,b.preparePath=i,b.prepareMustache=j,b.prepareRawBlock=k,b.prepareBlock=l,b.prepareProgram=m,b.preparePartialBlock=n;var p=c(6),q=o(p)},function(a,b,c){"use strict";function d(){}function e(a,b,c){if(null==a||"string"!=typeof a&&"Program"!==a.type)throw new l["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+a);b=b||{},"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var d=c.parse(a,b),e=(new c.Compiler).compile(d,b);return(new c.JavaScriptCompiler).compile(e,b)}function f(a,b,c){function d(){var d=c.parse(a,b),e=(new c.Compiler).compile(d,b),f=(new c.JavaScriptCompiler).compile(e,b,void 0,!0);return c.template(f)}function e(a,b){return f||(f=d()),f.call(this,a,b)}if(void 0===b&&(b={}),null==a||"string"!=typeof a&&"Program"!==a.type)throw new l["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+a);b=m.extend({},b),"data"in b||(b.data=!0),b.compat&&(b.useDepths=!0);var f=void 0;return e._setup=function(a){return f||(f=d()),f._setup(a)},e._child=function(a,b,c,e){return f||(f=d()),f._child(a,b,c,e)},e}function g(a,b){if(a===b)return!0;if(m.isArray(a)&&m.isArray(b)&&a.length===b.length){for(var c=0;c<a.length;c++)if(!g(a[c],b[c]))return!1;return!0}}function h(a){if(!a.path.parts){var b=a.path;a.path={type:"PathExpression",data:!1,depth:0,parts:[b.original+""],original:b.original+"",loc:b.loc}}}var i=c(47)["default"],j=c(1)["default"];b.__esModule=!0,b.Compiler=d,b.precompile=e,b.compile=f;var k=c(6),l=j(k),m=c(5),n=c(40),o=j(n),p=[].slice;d.prototype={compiler:d,equals:function(a){var b=this.opcodes.length;if(a.opcodes.length!==b)return!1;for(var c=0;c<b;c++){var d=this.opcodes[c],e=a.opcodes[c];if(d.opcode!==e.opcode||!g(d.args,e.args))return!1}b=this.children.length;for(var c=0;c<b;c++)if(!this.children[c].equals(a.children[c]))return!1;return!0},guid:0,compile:function(a,b){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=b,this.stringParams=b.stringParams,this.trackIds=b.trackIds,b.blockParams=b.blockParams||[],b.knownHelpers=m.extend(i(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0,lookup:!0},b.knownHelpers),this.accept(a)},compileProgram:function(a){var b=new this.compiler,c=b.compile(a,this.options),d=this.guid++;return this.usePartial=this.usePartial||c.usePartial,this.children[d]=c,this.useDepths=this.useDepths||c.useDepths,d},accept:function(a){if(!this[a.type])throw new l["default"]("Unknown type: "+a.type,a);this.sourceNode.unshift(a);var b=this[a.type](a);return this.sourceNode.shift(),b},Program:function(a){this.options.blockParams.unshift(a.blockParams);for(var b=a.body,c=b.length,d=0;d<c;d++)this.accept(b[d]);return this.options.blockParams.shift(),this.isSimple=1===c,this.blockParams=a.blockParams?a.blockParams.length:0,this},BlockStatement:function(a){h(a);var b=a.program,c=a.inverse;b=b&&this.compileProgram(b),c=c&&this.compileProgram(c);var d=this.classifySexpr(a);"helper"===d?this.helperSexpr(a,b,c):"simple"===d?(this.simpleSexpr(a),this.opcode("pushProgram",b),this.opcode("pushProgram",c),this.opcode("emptyHash"),this.opcode("blockValue",a.path.original)):(this.ambiguousSexpr(a,b,c),this.opcode("pushProgram",b),this.opcode("pushProgram",c),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(a){var b=a.program&&this.compileProgram(a.program),c=this.setupFullMustacheParams(a,b,void 0),d=a.path;this.useDecorators=!0,this.opcode("registerDecorator",c.length,d.original)},PartialStatement:function(a){this.usePartial=!0;var b=a.program;b&&(b=this.compileProgram(a.program));var c=a.params;if(c.length>1)throw new l["default"]("Unsupported number of partial arguments: "+c.length,a);c.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):c.push({type:"PathExpression",parts:[],depth:0}));var d=a.name.original,e="SubExpression"===a.name.type;e&&this.accept(a.name),this.setupFullMustacheParams(a,b,void 0,!0);var f=a.indent||"";this.options.preventIndent&&f&&(this.opcode("appendContent",f),f=""),this.opcode("invokePartial",e,d,f),this.opcode("append")},PartialBlockStatement:function(a){this.PartialStatement(a)},MustacheStatement:function(a){this.SubExpression(a),a.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(a){this.DecoratorBlock(a)},ContentStatement:function(a){a.value&&this.opcode("appendContent",a.value)},CommentStatement:function(){},SubExpression:function(a){h(a);var b=this.classifySexpr(a);"simple"===b?this.simpleSexpr(a):"helper"===b?this.helperSexpr(a):this.ambiguousSexpr(a)},ambiguousSexpr:function(a,b,c){var d=a.path,e=d.parts[0],f=null!=b||null!=c;this.opcode("getContext",d.depth),this.opcode("pushProgram",b),this.opcode("pushProgram",c),d.strict=!0,this.accept(d),this.opcode("invokeAmbiguous",e,f)},simpleSexpr:function(a){var b=a.path;b.strict=!0,this.accept(b),this.opcode("resolvePossibleLambda")},helperSexpr:function(a,b,c){var d=this.setupFullMustacheParams(a,b,c),e=a.path,f=e.parts[0];if(this.options.knownHelpers[f])this.opcode("invokeKnownHelper",d.length,f);else{if(this.options.knownHelpersOnly)throw new l["default"]("You specified knownHelpersOnly, but used the unknown helper "+f,a);e.strict=!0,e.falsy=!0,this.accept(e),this.opcode("invokeHelper",d.length,e.original,o["default"].helpers.simpleId(e))}},PathExpression:function(a){this.addDepth(a.depth),this.opcode("getContext",a.depth);var b=a.parts[0],c=o["default"].helpers.scopedId(a),d=!a.depth&&!c&&this.blockParamIndex(b);d?this.opcode("lookupBlockParam",d,a.parts):b?a.data?(this.options.data=!0,this.opcode("lookupData",a.depth,a.parts,a.strict)):this.opcode("lookupOnContext",a.parts,a.falsy,a.strict,c):this.opcode("pushContext")},StringLiteral:function(a){this.opcode("pushString",a.value)},NumberLiteral:function(a){this.opcode("pushLiteral",a.value)},BooleanLiteral:function(a){this.opcode("pushLiteral",a.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(a){var b=a.pairs,c=0,d=b.length;for(this.opcode("pushHash");c<d;c++)this.pushParam(b[c].value);for(;c--;)this.opcode("assignToHash",b[c].key);this.opcode("popHash")},opcode:function(a){this.opcodes.push({opcode:a,args:p.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(a){a&&(this.useDepths=!0)},classifySexpr:function(a){var b=o["default"].helpers.simpleId(a.path),c=b&&!!this.blockParamIndex(a.path.parts[0]),d=!c&&o["default"].helpers.helperExpression(a),e=!c&&(d||b);if(e&&!d){var f=a.path.parts[0],g=this.options;g.knownHelpers[f]?d=!0:g.knownHelpersOnly&&(e=!1)}return d?"helper":e?"ambiguous":"simple"},pushParams:function(a){for(var b=0,c=a.length;b<c;b++)this.pushParam(a[b])},pushParam:function(a){var b=null!=a.value?a.value:a.original||"";if(this.stringParams)b.replace&&(b=b.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),a.depth&&this.addDepth(a.depth),this.opcode("getContext",a.depth||0),this.opcode("pushStringParam",b,a.type),"SubExpression"===a.type&&this.accept(a);else{if(this.trackIds){var c=void 0;if(!a.parts||o["default"].helpers.scopedId(a)||a.depth||(c=this.blockParamIndex(a.parts[0])),c){var d=a.parts.slice(1).join(".");this.opcode("pushId","BlockParam",c,d)}else b=a.original||b,b.replace&&(b=b.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",a.type,b)}this.accept(a)}},setupFullMustacheParams:function(a,b,c,d){var e=a.params;return this.pushParams(e),this.opcode("pushProgram",b),this.opcode("pushProgram",c),a.hash?this.accept(a.hash):this.opcode("emptyHash",d),e},blockParamIndex:function(a){for(var b=0,c=this.options.blockParams.length;b<c;b++){var d=this.options.blockParams[b],e=d&&m.indexOf(d,a);if(d&&e>=0)return[b,e]}}}},function(a,b,c){a.exports={"default":c(48),__esModule:!0}},function(a,b,c){var d=c(9);a.exports=function(a,b){return d.create(a,b)}},function(a,b,c){"use strict";function d(a){this.value=a}function e(){}function f(a,b,c,d){var e=b.popStack(),f=0,g=c.length;for(a&&g--;f<g;f++)e=b.nameLookup(e,c[f],d);return a?[b.aliasable("container.strict"),"(",e,", ",b.quotedString(c[f]),", ",JSON.stringify(b.source.currentLocation)," )"]:e}var g=c(13)["default"],h=c(1)["default"];b.__esModule=!0;var i=c(4),j=c(6),k=h(j),l=c(5),m=c(50),n=h(m),o=c(28);e.prototype={nameLookup:function(a,b){function c(){return e.isValidJavaScriptVariableName(b)?[a,".",b]:[a,"[",JSON.stringify(b),"]"]}if(o.dangerousPropertyRegex.test(b)){var d=[this.aliasable("container.propertyIsEnumerable"),".call(",a,",",JSON.stringify(b),")"];return["(",d,"?",c()," : undefined)"]}return c()},depthedLookup:function(a){return[this.aliasable("container.lookup"),'(depths, "',a,'")']},compilerInfo:function(){var a=i.COMPILER_REVISION,b=i.REVISION_CHANGES[a];return[a,b]},appendToBuffer:function(a,b,c){return l.isArray(a)||(a=[a]),a=this.source.wrap(a,b),this.environment.isSimple?["return ",a,";"]:c?["buffer += ",a,";"]:(a.appendToBuffer=!0,a)},initializeBuffer:function(){return this.quotedString("")},compile:function(a,b,c,d){this.environment=a,this.options=b,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!d,this.name=this.environment.name,this.isChild=!!c,this.context=c||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(a,b),this.useDepths=this.useDepths||a.useDepths||a.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||a.useBlockParams;var e=a.opcodes,f=void 0,g=void 0,h=void 0,i=void 0;for(h=0,i=e.length;h<i;h++)f=e[h],this.source.currentLocation=f.loc,g=g||f.loc,this[f.opcode].apply(this,f.args);if(this.source.currentLocation=g,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new k["default"]("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend("var decorators = container.decorators;\n"),this.decorators.push("return fn;"),d?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),this.decorators.push("}\n"),this.decorators=this.decorators.merge()));var j=this.createFunctionContext(d);if(this.isChild)return j;var l={compiler:this.compilerInfo(),main:j};this.decorators&&(l.main_d=this.decorators,l.useDecorators=!0);var m=this.context,n=m.programs,o=m.decorators;for(h=0,i=n.length;h<i;h++)n[h]&&(l[h]=n[h],o[h]&&(l[h+"_d"]=o[h],l.useDecorators=!0));return this.environment.usePartial&&(l.usePartial=!0),this.options.data&&(l.useData=!0),this.useDepths&&(l.useDepths=!0),this.useBlockParams&&(l.useBlockParams=!0),this.options.compat&&(l.compat=!0),d?l.compilerOptions=this.options:(l.compiler=JSON.stringify(l.compiler),this.source.currentLocation={start:{line:1,column:0}},l=this.objectLiteral(l),b.srcName?(l=l.toStringWithSourceMap({file:b.destName}),l.map=l.map&&l.map.toString()):l=l.toString()),l},preamble:function(){this.lastContext=0,this.source=new n["default"](this.options.srcName),this.decorators=new n["default"](this.options.srcName)},createFunctionContext:function(a){var b=this,c="",d=this.stackVars.concat(this.registers.list);d.length>0&&(c+=", "+d.join(", "));var e=0;g(this.aliases).forEach(function(a){var d=b.aliases[a];d.children&&d.referenceCount>1&&(c+=", alias"+ ++e+"="+a,d.children[0]="alias"+e)});var f=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&f.push("blockParams"),this.useDepths&&f.push("depths");var h=this.mergeSource(c);return a?(f.push(h),Function.apply(this,f)):this.source.wrap(["function(",f.join(","),") {\n  ",h,"}"])},mergeSource:function(a){var b=this.environment.isSimple,c=!this.forceBuffer,d=void 0,e=void 0,f=void 0,g=void 0;return this.source.each(function(a){a.appendToBuffer?(f?a.prepend("  + "):f=a,g=a):(f&&(e?f.prepend("buffer += "):d=!0,g.add(";"),f=g=void 0),e=!0,b||(c=!1))}),c?f?(f.prepend("return "),g.add(";")):e||this.source.push('return "";'):(a+=", buffer = "+(d?"":this.initializeBuffer()),
f?(f.prepend("return buffer + "),g.add(";")):this.source.push("return buffer;")),a&&this.source.prepend("var "+a.substring(2)+(d?"":";\n")),this.source.merge()},blockValue:function(a){var b=this.aliasable("container.hooks.blockHelperMissing"),c=[this.contextName(0)];this.setupHelperArgs(a,0,c);var d=this.popStack();c.splice(1,0,d),this.push(this.source.functionCall(b,"call",c))},ambiguousBlockValue:function(){var a=this.aliasable("container.hooks.blockHelperMissing"),b=[this.contextName(0)];this.setupHelperArgs("",0,b,!0),this.flushInline();var c=this.topStack();b.splice(1,0,c),this.pushSource(["if (!",this.lastHelper,") { ",c," = ",this.source.functionCall(a,"call",b),"}"])},appendContent:function(a){this.pendingContent?a=this.pendingContent+a:this.pendingLocation=this.source.currentLocation,this.pendingContent=a},append:function(){if(this.isInline())this.replaceStack(function(a){return[" != null ? ",a,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var a=this.popStack();this.pushSource(["if (",a," != null) { ",this.appendToBuffer(a,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(a){this.lastContext=a},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(a,b,c,d){var e=0;d||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(a[e++])),this.resolvePath("context",a,e,b,c)},lookupBlockParam:function(a,b){this.useBlockParams=!0,this.push(["blockParams[",a[0],"][",a[1],"]"]),this.resolvePath("context",b,1)},lookupData:function(a,b,c){a?this.pushStackLiteral("container.data(data, "+a+")"):this.pushStackLiteral("data"),this.resolvePath("data",b,0,!0,c)},resolvePath:function(a,b,c,d,e){var g=this;if(this.options.strict||this.options.assumeObjects)return void this.push(f(this.options.strict&&e,this,b,a));for(var h=b.length;c<h;c++)this.replaceStack(function(e){var f=g.nameLookup(e,b[c],a);return d?[" && ",f]:[" != null ? ",f," : ",e]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(a,b){this.pushContext(),this.pushString(b),"SubExpression"!==b&&("string"==typeof a?this.pushString(a):this.pushStackLiteral(a))},emptyHash:function(a){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(a?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var a=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(a.ids)),this.stringParams&&(this.push(this.objectLiteral(a.contexts)),this.push(this.objectLiteral(a.types))),this.push(this.objectLiteral(a.values))},pushString:function(a){this.pushStackLiteral(this.quotedString(a))},pushLiteral:function(a){this.pushStackLiteral(a)},pushProgram:function(a){null!=a?this.pushStackLiteral(this.programExpression(a)):this.pushStackLiteral(null)},registerDecorator:function(a,b){var c=this.nameLookup("decorators",b,"decorator"),d=this.setupHelperArgs(b,a);this.decorators.push(["fn = ",this.decorators.functionCall(c,"",["fn","props","container",d])," || fn;"])},invokeHelper:function(a,b,c){var d=this.popStack(),e=this.setupHelper(a,b),f=[];c&&f.push(e.name),f.push(d),this.options.strict||f.push(this.aliasable("container.hooks.helperMissing"));var g=["(",this.itemsSeparatedBy(f,"||"),")"],h=this.source.functionCall(g,"call",e.callParams);this.push(h)},itemsSeparatedBy:function(a,b){var c=[];c.push(a[0]);for(var d=1;d<a.length;d++)c.push(b,a[d]);return c},invokeKnownHelper:function(a,b){var c=this.setupHelper(a,b);this.push(this.source.functionCall(c.name,"call",c.callParams))},invokeAmbiguous:function(a,b){this.useRegister("helper");var c=this.popStack();this.emptyHash();var d=this.setupHelper(0,a,b),e=this.lastHelper=this.nameLookup("helpers",a,"helper"),f=["(","(helper = ",e," || ",c,")"];this.options.strict||(f[0]="(helper = ",f.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",f,d.paramsInit?["),(",d.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",d.callParams)," : helper))"])},invokePartial:function(a,b,c){var d=[],e=this.setupParams(b,1,d);a&&(b=this.popStack(),delete e.name),c&&(e.indent=JSON.stringify(c)),e.helpers="helpers",e.partials="partials",e.decorators="container.decorators",a?d.unshift(b):d.unshift(this.nameLookup("partials",b,"partial")),this.options.compat&&(e.depths="depths"),e=this.objectLiteral(e),d.push(e),this.push(this.source.functionCall("container.invokePartial","",d))},assignToHash:function(a){var b=this.popStack(),c=void 0,d=void 0,e=void 0;this.trackIds&&(e=this.popStack()),this.stringParams&&(d=this.popStack(),c=this.popStack());var f=this.hash;c&&(f.contexts[a]=c),d&&(f.types[a]=d),e&&(f.ids[a]=e),f.values[a]=b},pushId:function(a,b,c){"BlockParam"===a?this.pushStackLiteral("blockParams["+b[0]+"].path["+b[1]+"]"+(c?" + "+JSON.stringify("."+c):"")):"PathExpression"===a?this.pushString(b):"SubExpression"===a?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:e,compileChildren:function(a,b){for(var c=a.children,d=void 0,e=void 0,f=0,g=c.length;f<g;f++){d=c[f],e=new this.compiler;var h=this.matchExistingProgram(d);if(null==h){this.context.programs.push("");var i=this.context.programs.length;d.index=i,d.name="program"+i,this.context.programs[i]=e.compile(d,b,this.context,!this.precompile),this.context.decorators[i]=e.decorators,this.context.environments[i]=d,this.useDepths=this.useDepths||e.useDepths,this.useBlockParams=this.useBlockParams||e.useBlockParams,d.useDepths=this.useDepths,d.useBlockParams=this.useBlockParams}else d.index=h.index,d.name="program"+h.index,this.useDepths=this.useDepths||h.useDepths,this.useBlockParams=this.useBlockParams||h.useBlockParams}},matchExistingProgram:function(a){for(var b=0,c=this.context.environments.length;b<c;b++){var d=this.context.environments[b];if(d&&d.equals(a))return d}},programExpression:function(a){var b=this.environment.children[a],c=[b.index,"data",b.blockParams];return(this.useBlockParams||this.useDepths)&&c.push("blockParams"),this.useDepths&&c.push("depths"),"container.program("+c.join(", ")+")"},useRegister:function(a){this.registers[a]||(this.registers[a]=!0,this.registers.list.push(a))},push:function(a){return a instanceof d||(a=this.source.wrap(a)),this.inlineStack.push(a),a},pushStackLiteral:function(a){this.push(new d(a))},pushSource:function(a){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),a&&this.source.push(a)},replaceStack:function(a){var b=["("],c=void 0,e=void 0,f=void 0;if(!this.isInline())throw new k["default"]("replaceStack on non-inline");var g=this.popStack(!0);if(g instanceof d)c=[g.value],b=["(",c],f=!0;else{e=!0;var h=this.incrStack();b=["((",this.push(h)," = ",g,")"],c=this.topStack()}var i=a.call(this,c);f||this.popStack(),e&&this.stackSlot--,this.push(b.concat(i,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var a=this.inlineStack;this.inlineStack=[];for(var b=0,c=a.length;b<c;b++){var e=a[b];if(e instanceof d)this.compileStack.push(e);else{var f=this.incrStack();this.pushSource([f," = ",e,";"]),this.compileStack.push(f)}}},isInline:function(){return this.inlineStack.length},popStack:function(a){var b=this.isInline(),c=(b?this.inlineStack:this.compileStack).pop();if(!a&&c instanceof d)return c.value;if(!b){if(!this.stackSlot)throw new k["default"]("Invalid stack pop");this.stackSlot--}return c},topStack:function(){var a=this.isInline()?this.inlineStack:this.compileStack,b=a[a.length-1];return b instanceof d?b.value:b},contextName:function(a){return this.useDepths&&a?"depths["+a+"]":"depth"+a},quotedString:function(a){return this.source.quotedString(a)},objectLiteral:function(a){return this.source.objectLiteral(a)},aliasable:function(a){var b=this.aliases[a];return b?(b.referenceCount++,b):(b=this.aliases[a]=this.source.wrap(a),b.aliasable=!0,b.referenceCount=1,b)},setupHelper:function(a,b,c){var d=[],e=this.setupHelperArgs(b,a,d,c),f=this.nameLookup("helpers",b,"helper"),g=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:d,paramsInit:e,name:f,callParams:[g].concat(d)}},setupParams:function(a,b,c){var d={},e=[],f=[],g=[],h=!c,i=void 0;h&&(c=[]),d.name=this.quotedString(a),d.hash=this.popStack(),this.trackIds&&(d.hashIds=this.popStack()),this.stringParams&&(d.hashTypes=this.popStack(),d.hashContexts=this.popStack());var j=this.popStack(),k=this.popStack();(k||j)&&(d.fn=k||"container.noop",d.inverse=j||"container.noop");for(var l=b;l--;)i=this.popStack(),c[l]=i,this.trackIds&&(g[l]=this.popStack()),this.stringParams&&(f[l]=this.popStack(),e[l]=this.popStack());return h&&(d.args=this.source.generateArray(c)),this.trackIds&&(d.ids=this.source.generateArray(g)),this.stringParams&&(d.types=this.source.generateArray(f),d.contexts=this.source.generateArray(e)),this.options.data&&(d.data="data"),this.useBlockParams&&(d.blockParams="blockParams"),d},setupHelperArgs:function(a,b,c,d){var e=this.setupParams(a,b,c);return e.loc=JSON.stringify(this.source.currentLocation),e=this.objectLiteral(e),d?(this.useRegister("options"),c.push("options"),["options=",e]):c?(c.push(e),""):e}},function(){for(var a="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),b=e.RESERVED_WORDS={},c=0,d=a.length;c<d;c++)b[a[c]]=!0}(),e.isValidJavaScriptVariableName=function(a){return!e.RESERVED_WORDS[a]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a)},b["default"]=e,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b,c){if(g.isArray(a)){for(var d=[],e=0,f=a.length;e<f;e++)d.push(b.wrap(a[e],c));return d}return"boolean"==typeof a||"number"==typeof a?a+"":a}function e(a){this.srcFile=a,this.source=[]}var f=c(13)["default"];b.__esModule=!0;var g=c(5),h=void 0;try{}catch(i){}h||(h=function(a,b,c,d){this.src="",d&&this.add(d)},h.prototype={add:function(a){g.isArray(a)&&(a=a.join("")),this.src+=a},prepend:function(a){g.isArray(a)&&(a=a.join("")),this.src=a+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}}),e.prototype={isEmpty:function(){return!this.source.length},prepend:function(a,b){this.source.unshift(this.wrap(a,b))},push:function(a,b){this.source.push(this.wrap(a,b))},merge:function(){var a=this.empty();return this.each(function(b){a.add(["  ",b,"\n"])}),a},each:function(a){for(var b=0,c=this.source.length;b<c;b++)a(this.source[b])},empty:function(){var a=this.currentLocation||{start:{}};return new h(a.start.line,a.start.column,this.srcFile)},wrap:function(a){var b=arguments.length<=1||void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1];return a instanceof h?a:(a=d(a,this,b),new h(b.start.line,b.start.column,this.srcFile,a))},functionCall:function(a,b,c){return c=this.generateList(c),this.wrap([a,b?"."+b+"(":"(",c,")"])},quotedString:function(a){return'"'+(a+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(a){var b=this,c=[];f(a).forEach(function(e){var f=d(a[e],b);"undefined"!==f&&c.push([b.quotedString(e),":",f])});var e=this.generateList(c);return e.prepend("{"),e.add("}"),e},generateList:function(a){for(var b=this.empty(),c=0,e=a.length;c<e;c++)c&&b.add(","),b.add(d(a[c],this));return b},generateArray:function(a){var b=this.generateList(a);return b.prepend("["),b.add("]"),b}},b["default"]=e,a.exports=b["default"]}])});
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.i18next=e()}(this,function(){"use strict";function t(t){return null==t?"":""+t}function e(t,e,n){t.forEach(function(t){e[t]&&(n[t]=e[t])})}function n(t,e,n){function o(t){return t&&t.indexOf("###")>-1?t.replace(/###/g,"."):t}function r(){return!t||"string"==typeof t}for(var i="string"!=typeof e?[].concat(e):e.split(".");i.length>1;){if(r())return{};var s=o(i.shift());!t[s]&&n&&(t[s]=new n),t=t[s]}return r()?{}:{obj:t,k:o(i.shift())}}function o(t,e,o){var r=n(t,e,Object),i=r.obj,s=r.k;i[s]=o}function r(t,e,o,r){var i=n(t,e,Object),s=i.obj,a=i.k;s[a]=s[a]||[],r&&(s[a]=s[a].concat(o)),r||s[a].push(o)}function i(t,e){var o=n(t,e),r=o.obj,i=o.k;if(r)return r[i]}function s(t,e,n){for(var o in e)o in t?"string"==typeof t[o]||t[o]instanceof String||"string"==typeof e[o]||e[o]instanceof String?n&&(t[o]=e[o]):s(t[o],e[o],n):t[o]=e[o];return t}function a(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function u(t){return"string"==typeof t?t.replace(/[&<>"'\/]/g,function(t){return L[t]}):t}function l(t){return t.charAt(0).toUpperCase()+t.slice(1)}function p(){var t={};return P.forEach(function(e){e.lngs.forEach(function(n){t[n]={numbers:e.nr,plurals:F[e.fc]}})}),t}function c(t,e){for(var n=t.indexOf(e);n!==-1;)t.splice(n,1),n=t.indexOf(e)}function f(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,nonExplicitWhitelist:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:function(){},parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var e={};return t[1]&&(e.defaultValue=t[1]),t[2]&&(e.tDescription=t[2]),e},interpolation:{escapeValue:!0,format:function(t,e,n){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",maxReplaces:1e3}}}function g(t){return"string"==typeof t.ns&&(t.ns=[t.ns]),"string"==typeof t.fallbackLng&&(t.fallbackLng=[t.fallbackLng]),"string"==typeof t.fallbackNS&&(t.fallbackNS=[t.fallbackNS]),t.whitelist&&t.whitelist.indexOf("cimode")<0&&(t.whitelist=t.whitelist.concat(["cimode"])),t}function h(){}var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},m=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},b=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},x=function(){function t(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(o=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&a.return&&a.return()}finally{if(r)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),S=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},k={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,e){var n;console&&console[t]&&(n=console)[t].apply(n,S(e))}},w=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};v(this,t),this.init(e,n)}return t.prototype.init=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=e.prefix||"i18next:",this.logger=t||k,this.options=e,this.debug=e.debug},t.prototype.setDebug=function(t){this.debug=t},t.prototype.log=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"log","",!0)},t.prototype.warn=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"warn","",!0)},t.prototype.error=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"error","")},t.prototype.deprecate=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"warn","WARNING DEPRECATED: ",!0)},t.prototype.forward=function(t,e,n,o){return o&&!this.debug?null:("string"==typeof t[0]&&(t[0]=""+n+this.prefix+" "+t[0]),this.logger[e](t))},t.prototype.create=function(e){return new t(this.logger,y({prefix:this.prefix+":"+e+":"},this.options))},t}(),O=new w,R=function(){function t(){v(this,t),this.observers={}}return t.prototype.on=function(t,e){var n=this;return t.split(" ").forEach(function(t){n.observers[t]=n.observers[t]||[],n.observers[t].push(e)}),this},t.prototype.off=function(t,e){var n=this;this.observers[t]&&this.observers[t].forEach(function(){if(e){var o=n.observers[t].indexOf(e);o>-1&&n.observers[t].splice(o,1)}else delete n.observers[t]})},t.prototype.emit=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];if(this.observers[t]){var r=[].concat(this.observers[t]);r.forEach(function(t){t.apply(void 0,n)})}if(this.observers["*"]){var i=[].concat(this.observers["*"]);i.forEach(function(e){e.apply(e,[t].concat(n))})}},t}(),L={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},N=function(t){function e(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};v(this,e);var r=b(this,t.call(this));return r.data=n||{},r.options=o,void 0===r.options.keySeparator&&(r.options.keySeparator="."),r}return m(e,t),e.prototype.addNamespaces=function(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)},e.prototype.removeNamespaces=function(t){var e=this.options.ns.indexOf(t);e>-1&&this.options.ns.splice(e,1)},e.prototype.getResource=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=void 0!==o.keySeparator?o.keySeparator:this.options.keySeparator,s=[t,e];return n&&"string"!=typeof n&&(s=s.concat(n)),n&&"string"==typeof n&&(s=s.concat(r?n.split(r):n)),t.indexOf(".")>-1&&(s=t.split(".")),i(this.data,s)},e.prototype.addResource=function(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},s=this.options.keySeparator;void 0===s&&(s=".");var a=[t,e];n&&(a=a.concat(s?n.split(s):n)),t.indexOf(".")>-1&&(a=t.split("."),r=e,e=a[1]),this.addNamespaces(e),o(this.data,a,r),i.silent||this.emit("added",t,e,n,r)},e.prototype.addResources=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var r in n)"string"==typeof n[r]&&this.addResource(t,e,r,n[r],{silent:!0});o.silent||this.emit("added",t,e,n)},e.prototype.addResourceBundle=function(t,e,n,r,a){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},l=[t,e];t.indexOf(".")>-1&&(l=t.split("."),r=n,n=e,e=l[1]),this.addNamespaces(e);var p=i(this.data,l)||{};r?s(p,n,a):p=y({},p,n),o(this.data,l,p),u.silent||this.emit("added",t,e,n)},e.prototype.removeResourceBundle=function(t,e){this.hasResourceBundle(t,e)&&delete this.data[t][e],this.removeNamespaces(e),this.emit("removed",t,e)},e.prototype.hasResourceBundle=function(t,e){return void 0!==this.getResource(t,e)},e.prototype.getResourceBundle=function(t,e){return e||(e=this.options.defaultNS),"v1"===this.options.compatibilityAPI?y({},this.getResource(t,e)):this.getResource(t,e)},e.prototype.getDataByLanguage=function(t){return this.data[t]},e.prototype.toJSON=function(){return this.data},e}(R),C={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,e,n,o,r){var i=this;return t.forEach(function(t){i.processors[t]&&(e=i.processors[t].process(e,n,o,r))}),e}},j=function(t){function n(o){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};v(this,n);var i=b(this,t.call(this));return e(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat"],o,i),i.options=r,void 0===i.options.keySeparator&&(i.options.keySeparator="."),i.logger=O.create("translator"),i}return m(n,t),n.prototype.changeLanguage=function(t){t&&(this.language=t)},n.prototype.exists=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}},n=this.resolve(t,e);return n&&void 0!==n.res},n.prototype.extractFromKey=function(t,e){var n=e.nsSeparator||this.options.nsSeparator;void 0===n&&(n=":");var o=void 0!==e.keySeparator?e.keySeparator:this.options.keySeparator,r=e.ns||this.options.defaultNS;if(n&&t.indexOf(n)>-1){var i=t.split(n);(n!==o||n===o&&this.options.ns.indexOf(i[0])>-1)&&(r=i.shift()),t=i.join(o)}return"string"==typeof r&&(r=[r]),{key:t,namespaces:r}},n.prototype.translate=function(t,e){var n=this;if("object"!==("undefined"==typeof e?"undefined":d(e))&&this.options.overloadTranslationOptionHandler&&(e=this.options.overloadTranslationOptionHandler(arguments)),e||(e={}),void 0===t||null===t||""===t)return"";"number"==typeof t&&(t=String(t)),"string"==typeof t&&(t=[t]);var o=void 0!==e.keySeparator?e.keySeparator:this.options.keySeparator,r=this.extractFromKey(t[t.length-1],e),i=r.key,s=r.namespaces,a=s[s.length-1],u=e.lng||this.language,l=e.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&"cimode"===u.toLowerCase()){if(l){var p=e.nsSeparator||this.options.nsSeparator;return a+p+i}return i}var c=this.resolve(t,e),f=c&&c.res,g=c&&c.usedKey||i,h=Object.prototype.toString.apply(f),v=["[object Number]","[object Function]","[object RegExp]"],m=void 0!==e.joinArrays?e.joinArrays:this.options.joinArrays,b=!this.i18nFormat||this.i18nFormat.handleAsObject,x="string"!=typeof f&&"boolean"!=typeof f&&"number"!=typeof f;if(b&&f&&x&&v.indexOf(h)<0&&(!m||"[object Array]"!==h)){if(!e.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,f,e):"key '"+i+" ("+this.language+")' returned an object instead of string.";if(o){var S="[object Array]"===h?[]:{};for(var k in f)if(Object.prototype.hasOwnProperty.call(f,k)){var w=""+g+o+k;S[k]=this.translate(w,y({},e,{joinArrays:!1,ns:s})),S[k]===w&&(S[k]=f[k])}f=S}}else if(b&&m&&"[object Array]"===h)f=f.join(m),f&&(f=this.extendTranslation(f,t,e));else{var O=!1,R=!1;if(!this.isValidLookup(f)&&void 0!==e.defaultValue){if(O=!0,void 0!==e.count){var L=this.pluralResolver.getSuffix(u,e.count);f=e["defaultValue"+L]}f||(f=e.defaultValue)}this.isValidLookup(f)||(R=!0,f=i);var N=e.defaultValue&&e.defaultValue!==f&&this.options.updateMissing;if(R||O||N){this.logger.log(N?"updateKey":"missingKey",u,a,i,N?e.defaultValue:f);var C=[],j=this.languageUtils.getFallbackCodes(this.options.fallbackLng,e.lng||this.language);if("fallback"===this.options.saveMissingTo&&j&&j[0])for(var E=0;E<j.length;E++)C.push(j[E]);else"all"===this.options.saveMissingTo?C=this.languageUtils.toResolveHierarchy(e.lng||this.language):C.push(e.lng||this.language);var P=function(t,o){n.options.missingKeyHandler?n.options.missingKeyHandler(t,a,o,N?e.defaultValue:f,N,e):n.backendConnector&&n.backendConnector.saveMissing&&n.backendConnector.saveMissing(t,a,o,N?e.defaultValue:f,N,e),n.emit("missingKey",t,a,o,f)};if(this.options.saveMissing){var F=void 0!==e.count&&"string"!=typeof e.count;this.options.saveMissingPlurals&&F?C.forEach(function(t){var e=n.pluralResolver.getPluralFormsOfKey(t,i);e.forEach(function(e){return P([t],e)})}):P(C,i)}}f=this.extendTranslation(f,t,e,c),R&&f===i&&this.options.appendNamespaceToMissingKey&&(f=a+":"+i),R&&this.options.parseMissingKeyHandler&&(f=this.options.parseMissingKeyHandler(f))}return f},n.prototype.extendTranslation=function(t,e,n,o){var r=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,n,o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init(y({},n,{interpolation:y({},this.options.interpolation,n.interpolation)}));var i=n.replace&&"string"!=typeof n.replace?n.replace:n;this.options.interpolation.defaultVariables&&(i=y({},this.options.interpolation.defaultVariables,i)),t=this.interpolator.interpolate(t,i,n.lng||this.language,n),n.nest!==!1&&(t=this.interpolator.nest(t,function(){return r.translate.apply(r,arguments)},n)),n.interpolation&&this.interpolator.reset()}var s=n.postProcess||this.options.postProcess,a="string"==typeof s?[s]:s;return void 0!==t&&null!==t&&a&&a.length&&n.applyPostProcessor!==!1&&(t=C.handle(a,t,e,n,this)),t},n.prototype.resolve=function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=void 0,r=void 0,i=void 0,s=void 0;return"string"==typeof t&&(t=[t]),t.forEach(function(t){if(!e.isValidLookup(o)){var a=e.extractFromKey(t,n),u=a.key;r=u;var l=a.namespaces;e.options.fallbackNS&&(l=l.concat(e.options.fallbackNS));var p=void 0!==n.count&&"string"!=typeof n.count,c=void 0!==n.context&&"string"==typeof n.context&&""!==n.context,f=n.lngs?n.lngs:e.languageUtils.toResolveHierarchy(n.lng||e.language,n.fallbackLng);l.forEach(function(t){e.isValidLookup(o)||(s=t,f.forEach(function(r){if(!e.isValidLookup(o)){i=r;var s=u,a=[s];if(e.i18nFormat&&e.i18nFormat.addLookupKeys)e.i18nFormat.addLookupKeys(a,u,r,t,n);else{var l=void 0;p&&(l=e.pluralResolver.getSuffix(r,n.count)),p&&c&&a.push(s+l),c&&a.push(s+=""+e.options.contextSeparator+n.context),p&&a.push(s+=l)}for(var f=void 0;f=a.pop();)e.isValidLookup(o)||(o=e.getResource(r,t,f,n))}}))})}}),{res:o,usedKey:r,usedLng:i,usedNS:s}},n.prototype.isValidLookup=function(t){return!(void 0===t||!this.options.returnNull&&null===t||!this.options.returnEmptyString&&""===t)},n.prototype.getResource=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,e,n,o):this.resourceStore.getResource(t,e,n,o)},n}(R),E=function(){function t(e){v(this,t),this.options=e,this.whitelist=this.options.whitelist||!1,this.logger=O.create("languageUtils")}return t.prototype.getScriptPartFromCode=function(t){if(!t||t.indexOf("-")<0)return null;var e=t.split("-");return 2===e.length?null:(e.pop(),this.formatLanguageCode(e.join("-")))},t.prototype.getLanguagePartFromCode=function(t){if(!t||t.indexOf("-")<0)return t;var e=t.split("-");return this.formatLanguageCode(e[0])},t.prototype.formatLanguageCode=function(t){if("string"==typeof t&&t.indexOf("-")>-1){var e=["hans","hant","latn","cyrl","cans","mong","arab"],n=t.split("-");return this.options.lowerCaseLng?n=n.map(function(t){return t.toLowerCase()}):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),e.indexOf(n[1].toLowerCase())>-1&&(n[1]=l(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),e.indexOf(n[1].toLowerCase())>-1&&(n[1]=l(n[1].toLowerCase())),e.indexOf(n[2].toLowerCase())>-1&&(n[2]=l(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t},t.prototype.isWhitelisted=function(t){return("languageOnly"===this.options.load||this.options.nonExplicitWhitelist)&&(t=this.getLanguagePartFromCode(t)),!this.whitelist||!this.whitelist.length||this.whitelist.indexOf(t)>-1},t.prototype.getFallbackCodes=function(t,e){if(!t)return[];if("string"==typeof t&&(t=[t]),"[object Array]"===Object.prototype.toString.apply(t))return t;if(!e)return t.default||[];var n=t[e];return n||(n=t[this.getScriptPartFromCode(e)]),n||(n=t[this.formatLanguageCode(e)]),n||(n=t.default),n||[]},t.prototype.toResolveHierarchy=function(t,e){var n=this,o=this.getFallbackCodes(e||this.options.fallbackLng||[],t),r=[],i=function(t){t&&(n.isWhitelisted(t)?r.push(t):n.logger.warn("rejecting non-whitelisted language code: "+t))};return"string"==typeof t&&t.indexOf("-")>-1?("languageOnly"!==this.options.load&&i(this.formatLanguageCode(t)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&i(this.getScriptPartFromCode(t)),"currentOnly"!==this.options.load&&i(this.getLanguagePartFromCode(t))):"string"==typeof t&&i(this.formatLanguageCode(t)),o.forEach(function(t){r.indexOf(t)<0&&i(n.formatLanguageCode(t))}),r},t}(),P=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","id","ja","jbo","ka","kk","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he"],nr:[1,2,20,21],fc:22}],F={1:function(t){return Number(t>1)},2:function(t){return Number(1!=t)},3:function(t){return 0},4:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},5:function(t){return Number(0===t?0:1==t?1:2==t?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5)},6:function(t){return Number(1==t?0:t>=2&&t<=4?1:2)},7:function(t){return Number(1==t?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},8:function(t){return Number(1==t?0:2==t?1:8!=t&&11!=t?2:3)},9:function(t){return Number(t>=2)},10:function(t){return Number(1==t?0:2==t?1:t<7?2:t<11?3:4)},11:function(t){return Number(1==t||11==t?0:2==t||12==t?1:t>2&&t<20?2:3)},12:function(t){return Number(t%10!=1||t%100==11)},13:function(t){return Number(0!==t)},14:function(t){return Number(1==t?0:2==t?1:3==t?2:3)},15:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2)},16:function(t){return Number(t%10==1&&t%100!=11?0:0!==t?1:2)},17:function(t){return Number(1==t||t%10==1?0:1)},18:function(t){return Number(0==t?0:1==t?1:2)},19:function(t){return Number(1==t?0:0===t||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3)},20:function(t){return Number(1==t?0:0===t||t%100>0&&t%100<20?1:2)},21:function(t){return Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0)},22:function(t){return Number(1===t?0:2===t?1:(t<0||t>10)&&t%10==0?2:3)}},A=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};v(this,t),this.languageUtils=e,this.options=n,this.logger=O.create("pluralResolver"),this.rules=p()}return t.prototype.addRule=function(t,e){this.rules[t]=e},t.prototype.getRule=function(t){return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]},t.prototype.needsPlural=function(t){var e=this.getRule(t);return e&&e.numbers.length>1},t.prototype.getPluralFormsOfKey=function(t,e){var n=this,o=[],r=this.getRule(t);return r?(r.numbers.forEach(function(r){var i=n.getSuffix(t,r);o.push(""+e+i)}),o):o},t.prototype.getSuffix=function(t,e){var n=this,o=this.getRule(t);if(o){var r=o.noAbs?o.plurals(e):o.plurals(Math.abs(e)),i=o.numbers[r];this.options.simplifyPluralSuffix&&2===o.numbers.length&&1===o.numbers[0]&&(2===i?i="plural":1===i&&(i=""));var s=function(){return n.options.prepend&&i.toString()?n.options.prepend+i.toString():i.toString()};return"v1"===this.options.compatibilityJSON?1===i?"":"number"==typeof i?"_plural_"+i.toString():s():"v2"===this.options.compatibilityJSON&&2===o.numbers.length&&1===o.numbers[0]?s():this.options.simplifyPluralSuffix&&2===o.numbers.length&&1===o.numbers[0]?s():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}return this.logger.warn("no plural rule found for: "+t),""},t}(),T=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};v(this,e),this.logger=O.create("interpolator"),this.init(t,!0)}return e.prototype.init=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];e&&(this.options=t,this.format=t.interpolation&&t.interpolation.format||function(t){return t}),t.interpolation||(t.interpolation={escapeValue:!0});var n=t.interpolation;this.escape=void 0!==n.escape?n.escape:u,this.escapeValue=void 0===n.escapeValue||n.escapeValue,this.useRawValueToEscape=void 0!==n.useRawValueToEscape&&n.useRawValueToEscape,this.prefix=n.prefix?a(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?a(n.suffix):n.suffixEscaped||"}}",this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||",",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?a(n.nestingPrefix):n.nestingPrefixEscaped||a("$t("),this.nestingSuffix=n.nestingSuffix?a(n.nestingSuffix):n.nestingSuffixEscaped||a(")"),this.maxReplaces=n.maxReplaces?n.maxReplaces:1e3,this.resetRegExp()},e.prototype.reset=function(){this.options&&this.init(this.options)},e.prototype.resetRegExp=function(){var t=this.prefix+"(.+?)"+this.suffix;this.regexp=new RegExp(t,"g");var e=""+this.prefix+this.unescapePrefix+"(.+?)"+this.unescapeSuffix+this.suffix;this.regexpUnescape=new RegExp(e,"g");var n=this.nestingPrefix+"(.+?)"+this.nestingSuffix;this.nestingRegexp=new RegExp(n,"g")},e.prototype.interpolate=function(e,n,o,r){function s(t){return t.replace(/\$/g,"$$$$")}var a=this,u=void 0,l=void 0,p=void 0,c=function(t){if(t.indexOf(a.formatSeparator)<0)return i(n,t);var e=t.split(a.formatSeparator),r=e.shift().trim(),s=e.join(a.formatSeparator).trim();return a.format(i(n,r),s,o)};this.resetRegExp();var f=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler;for(p=0;(u=this.regexpUnescape.exec(e))&&(l=c(u[1].trim()),e=e.replace(u[0],l),this.regexpUnescape.lastIndex=0,p++,!(p>=this.maxReplaces)););for(p=0;u=this.regexp.exec(e);){if(l=c(u[1].trim()),void 0===l)if("function"==typeof f){var g=f(e,u);l="string"==typeof g?g:""}else this.logger.warn("missed to pass in variable "+u[1]+" for interpolating "+e),l="";else"string"==typeof l||this.useRawValueToEscape||(l=t(l));if(l=s(this.escapeValue?this.escape(l):l),e=e.replace(u[0],l),this.regexp.lastIndex=0,p++,p>=this.maxReplaces)break}return e},e.prototype.nest=function(e,n){function o(t,e){if(t.indexOf(",")<0)return t;var n=t.split(",");t=n.shift();var o=n.join(",");o=this.interpolate(o,a),o=o.replace(/'/g,'"');try{a=JSON.parse(o),e&&(a=y({},e,a))}catch(e){this.logger.error("failed parsing options string in nesting for key "+t,e)}return t}var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=void 0,s=void 0,a=y({},r);for(a.applyPostProcessor=!1;i=this.nestingRegexp.exec(e);){if(s=n(o.call(this,i[1].trim(),a),a),s&&i[0]===e&&"string"!=typeof s)return s;"string"!=typeof s&&(s=t(s)),s||(this.logger.warn("missed to resolve "+i[1]+" for nesting "+e),s=""),e=e.replace(i[0],s),this.regexp.lastIndex=0}return e},e}(),V=function(t){function e(n,o,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};v(this,e);var s=b(this,t.call(this));return s.backend=n,s.store=o,s.languageUtils=r.languageUtils,s.options=i,s.logger=O.create("backendConnector"),s.state={},s.queue=[],s.backend&&s.backend.init&&s.backend.init(r,i.backend,i),s}return m(e,t),e.prototype.queueLoad=function(t,e,n,o){var r=this,i=[],s=[],a=[],u=[];return t.forEach(function(t){var o=!0;e.forEach(function(e){var a=t+"|"+e;!n.reload&&r.store.hasResourceBundle(t,e)?r.state[a]=2:r.state[a]<0||(1===r.state[a]?s.indexOf(a)<0&&s.push(a):(r.state[a]=1,o=!1,s.indexOf(a)<0&&s.push(a),i.indexOf(a)<0&&i.push(a),u.indexOf(e)<0&&u.push(e)))}),o||a.push(t)}),(i.length||s.length)&&this.queue.push({pending:s,loaded:{},errors:[],callback:o}),{toLoad:i,pending:s,toLoadLanguages:a,toLoadNamespaces:u}},e.prototype.loaded=function t(e,n,o){var i=e.split("|"),s=x(i,2),a=s[0],u=s[1];n&&this.emit("failedLoading",a,u,n),o&&this.store.addResourceBundle(a,u,o),this.state[e]=n?-1:2;var t={};this.queue.forEach(function(o){r(o.loaded,[a],u),c(o.pending,e),n&&o.errors.push(n),0!==o.pending.length||o.done||(Object.keys(o.loaded).forEach(function(e){t[e]||(t[e]=[]),o.loaded[e].length&&o.loaded[e].forEach(function(n){t[e].indexOf(n)<0&&t[e].push(n)})}),o.done=!0,o.errors.length?o.callback(o.errors):o.callback())}),this.emit("loaded",t),this.queue=this.queue.filter(function(t){return!t.done})},e.prototype.read=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=this,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:250,s=arguments[5];return t.length?this.backend[n](t,e,function(a,u){return a&&u&&o<5?void setTimeout(function(){r.read.call(r,t,e,n,o+1,2*i,s)},i):void s(a,u)}):s(null,{})},e.prototype.prepareLoading=function(t,e){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments[3];if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();"string"==typeof t&&(t=this.languageUtils.toResolveHierarchy(t)),"string"==typeof e&&(e=[e]);var i=this.queueLoad(t,e,o,r);return i.toLoad.length?void i.toLoad.forEach(function(t){n.loadOne(t)}):(i.pending.length||r(),null)},e.prototype.load=function(t,e,n){this.prepareLoading(t,e,{},n)},e.prototype.reload=function(t,e,n){this.prepareLoading(t,e,{reload:!0},n)},e.prototype.loadOne=function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=t.split("|"),r=x(o,2),i=r[0],s=r[1];this.read(i,s,"read",null,null,function(o,r){o&&e.logger.warn(n+"loading namespace "+s+" for language "+i+" failed",o),!o&&r&&e.logger.log(n+"loaded namespace "+s+" for language "+i,r),e.loaded(t,o,r)})},e.prototype.saveMissing=function(t,e,n,o,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};this.backend&&this.backend.create&&this.backend.create(t,e,n,o,null,y({},i,{isUpdate:r})),t&&t[0]&&this.store.addResource(t[0],e,n,o)},e}(R),U=function(t){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments[1];v(this,e);var r=b(this,t.call(this));if(r.options=g(n),r.services={},r.logger=O,r.modules={external:[]},o&&!r.isInitialized&&!n.isClone){var i;if(!r.options.initImmediate)return i=r.init(n,o),b(r,i);setTimeout(function(){r.init(n,o)},0)}return r}return m(e,t),e.prototype.init=function(){function t(t){return t?"function"==typeof t?new t:t:null}var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments[1];if("function"==typeof n&&(o=n,n={}),this.options=y({},f(),this.options,g(n)),this.format=this.options.interpolation.format,o||(o=h),!this.options.isClone){this.modules.logger?O.init(t(this.modules.logger),this.options):O.init(null,this.options);var r=new E(this.options);this.store=new N(this.options.resources,this.options);var i=this.services;i.logger=O,i.resourceStore=this.store,i.languageUtils=r,i.pluralResolver=new A(r,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),i.interpolator=new T(this.options),i.backendConnector=new V(t(this.modules.backend),i.resourceStore,i,this.options),i.backendConnector.on("*",function(t){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];e.emit.apply(e,[t].concat(o))}),this.modules.languageDetector&&(i.languageDetector=t(this.modules.languageDetector),i.languageDetector.init(i,this.options.detection,this.options)),this.modules.i18nFormat&&(i.i18nFormat=t(this.modules.i18nFormat),i.i18nFormat.init&&i.i18nFormat.init(this)),this.translator=new j(this.services,this.options),this.translator.on("*",function(t){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];e.emit.apply(e,[t].concat(o))}),this.modules.external.forEach(function(t){t.init&&t.init(e)})}var s=["getResource","addResource","addResources","addResourceBundle","removeResourceBundle","hasResourceBundle","getResourceBundle","getDataByLanguage"];s.forEach(function(t){e[t]=function(){var n;return(n=e.store)[t].apply(n,arguments)}});var a=function(){e.changeLanguage(e.options.lng,function(t,n){e.isInitialized=!0,e.logger.log("initialized",e.options),e.emit("initialized",e.options),o(t,n)})};return this.options.resources||!this.options.initImmediate?a():setTimeout(a,0),this},e.prototype.loadResources=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;if(!this.options.resources||this.options.partialBundledLanguages){if(this.language&&"cimode"===this.language.toLowerCase())return e();var n=[],o=function(e){if(e){var o=t.services.languageUtils.toResolveHierarchy(e);o.forEach(function(t){n.indexOf(t)<0&&n.push(t)})}};if(this.language)o(this.language);else{var r=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);r.forEach(function(t){return o(t)})}this.options.preload&&this.options.preload.forEach(function(t){return o(t)}),this.services.backendConnector.load(n,this.options.ns,e)}else e(null)},e.prototype.reloadResources=function(t,e,n){t||(t=this.languages),e||(e=this.options.ns),n||(n=function(){}),this.services.backendConnector.reload(t,e,n)},e.prototype.use=function(t){return"backend"===t.type&&(this.modules.backend=t),("logger"===t.type||t.log&&t.warn&&t.error)&&(this.modules.logger=t),"languageDetector"===t.type&&(this.modules.languageDetector=t),"i18nFormat"===t.type&&(this.modules.i18nFormat=t),"postProcessor"===t.type&&C.addPostProcessor(t),"3rdParty"===t.type&&this.modules.external.push(t),this},e.prototype.changeLanguage=function(t,e){var n=this,o=function(t,o){n.translator.changeLanguage(o),o&&(n.emit("languageChanged",o),n.logger.log("languageChanged",o)),e&&e(t,function(){return n.t.apply(n,arguments)})},r=function(t){t&&(n.language=t,n.languages=n.services.languageUtils.toResolveHierarchy(t),n.translator.language||n.translator.changeLanguage(t),n.services.languageDetector&&n.services.languageDetector.cacheUserLanguage(t)),n.loadResources(function(e){o(e,t)})};t||!this.services.languageDetector||this.services.languageDetector.async?!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(r):r(t):r(this.services.languageDetector.detect())},e.prototype.getFixedT=function(t,e){var n=this,o=function t(e,o){for(var r=arguments.length,i=Array(r>2?r-2:0),s=2;s<r;s++)i[s-2]=arguments[s];var a=y({},o);return"object"!==("undefined"==typeof o?"undefined":d(o))&&(a=n.options.overloadTranslationOptionHandler([e,o].concat(i))),a.lng=a.lng||t.lng,a.lngs=a.lngs||t.lngs,a.ns=a.ns||t.ns,n.t(e,a)};return"string"==typeof t?o.lng=t:o.lngs=t,o.ns=e,
o},e.prototype.t=function(){var t;return this.translator&&(t=this.translator).translate.apply(t,arguments)},e.prototype.exists=function(){var t;return this.translator&&(t=this.translator).exists.apply(t,arguments)},e.prototype.setDefaultNamespace=function(t){this.options.defaultNS=t},e.prototype.loadNamespaces=function(t,e){var n=this;return this.options.ns?("string"==typeof t&&(t=[t]),t.forEach(function(t){n.options.ns.indexOf(t)<0&&n.options.ns.push(t)}),void this.loadResources(e)):e&&e()},e.prototype.loadLanguages=function(t,e){"string"==typeof t&&(t=[t]);var n=this.options.preload||[],o=t.filter(function(t){return n.indexOf(t)<0});return o.length?(this.options.preload=n.concat(o),void this.loadResources(e)):e()},e.prototype.dir=function(t){if(t||(t=this.languages&&this.languages.length>0?this.languages[0]:this.language),!t)return"rtl";var e=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"];return e.indexOf(this.services.languageUtils.getLanguagePartFromCode(t))>=0?"rtl":"ltr"},e.prototype.createInstance=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1];return new e(t,n)},e.prototype.cloneInstance=function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h,r=y({},this.options,n,{isClone:!0}),i=new e(r),s=["store","services","language"];return s.forEach(function(e){i[e]=t[e]}),i.translator=new j(i.services,i.options),i.translator.on("*",function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];i.emit.apply(i,[t].concat(n))}),i.init(r,o),i.translator.options=i.options,i},e}(R),H=new U;return H});

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.jqueryI18next = factory());
}(this, (function () { 'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var defaults = {
  tName: 't',
  i18nName: 'i18n',
  handleName: 'localize',
  selectorAttr: 'data-i18n',
  targetAttr: 'i18n-target',
  optionsAttr: 'i18n-options',
  useOptionsAttr: false,
  parseDefaultValueFromContent: true
};

function init(i18next, $) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


  options = _extends({}, defaults, options);

  function parse(ele, key, opts) {
    if (key.length === 0) return;

    var attr = 'text';

    if (key.indexOf('[') === 0) {
      var parts = key.split(']');
      key = parts[1];
      attr = parts[0].substr(1, parts[0].length - 1);
    }

    if (key.indexOf(';') === key.length - 1) {
      key = key.substr(0, key.length - 2);
    }

    function extendDefault(o, val) {
      if (!options.parseDefaultValueFromContent) return o;
      return _extends({}, o, { defaultValue: val });
    }

    if (attr === 'html') {
      ele.html(i18next.t(key, extendDefault(opts, ele.html())));
    } else if (attr === 'text') {
      ele.text(i18next.t(key, extendDefault(opts, ele.text())));
    } else if (attr === 'prepend') {
      ele.prepend(i18next.t(key, extendDefault(opts, ele.html())));
    } else if (attr === 'append') {
      ele.append(i18next.t(key, extendDefault(opts, ele.html())));
    } else if (attr.indexOf('data-') === 0) {
      var dataAttr = attr.substr('data-'.length);
      var translated = i18next.t(key, extendDefault(opts, ele.data(dataAttr)));

      // we change into the data cache
      ele.data(dataAttr, translated);
      // we change into the dom
      ele.attr(attr, translated);
    } else {
      ele.attr(attr, i18next.t(key, extendDefault(opts, ele.attr(attr))));
    }
  }

  function localize(ele, opts) {
    var key = ele.attr(options.selectorAttr);
    if (!key && typeof key !== 'undefined' && key !== false) key = ele.text() || ele.val();
    if (!key) return;

    var target = ele,
        targetSelector = ele.data(options.targetAttr);

    if (targetSelector) target = ele.find(targetSelector) || ele;

    if (!opts && options.useOptionsAttr === true) opts = ele.data(options.optionsAttr);

    opts = opts || {};

    if (key.indexOf(';') >= 0) {
      var keys = key.split(';');

      $.each(keys, function (m, k) {
        // .trim(): Trim the comma-separated parameters on the data-i18n attribute.
        if (k !== '') parse(target, k.trim(), opts);
      });
    } else {
      parse(target, key, opts);
    }

    if (options.useOptionsAttr === true) {
      var clone = {};
      clone = _extends({ clone: clone }, opts);

      delete clone.lng;
      ele.data(options.optionsAttr, clone);
    }
  }

  function handle(opts) {
    return this.each(function () {
      // localize element itself
      localize($(this), opts);

      // localize children
      var elements = $(this).find('[' + options.selectorAttr + ']');
      elements.each(function () {
        localize($(this), opts);
      });
    });
  };

  // $.t $.i18n shortcut
  $[options.tName] = i18next.t.bind(i18next);
  $[options.i18nName] = i18next;

  // selector function $(mySelector).localize(opts);
  $.fn[options.handleName] = handle;
}

var index = {
  init: init
};

return index;

})));
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.i18nextXHRBackend = factory());
}(this, (function () { 'use strict';

var arr = [];
var each = arr.forEach;
var slice = arr.slice;

function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function addQueryString(url, params) {
  if (params && (typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
    var queryString = '',
        e = encodeURIComponent;

    // Must encode data
    for (var paramName in params) {
      queryString += '&' + e(paramName) + '=' + e(params[paramName]);
    }

    if (!queryString) {
      return url;
    }

    url = url + (url.indexOf('?') !== -1 ? '&' : '?') + queryString.slice(1);
  }

  return url;
}

// https://gist.github.com/Xeoncross/7663273
function ajax(url, options, callback, data, cache) {

  if (data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
    if (!cache) {
      data['_t'] = new Date();
    }
    // URL encoded form data must be in querystring format
    data = addQueryString('', data).slice(1);
  }

  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }

  try {
    var x;
    if (XMLHttpRequest) {
      x = new XMLHttpRequest();
    } else {
      x = new ActiveXObject('MSXML2.XMLHTTP.3.0');
    }
    x.open(data ? 'POST' : 'GET', url, 1);
    if (!options.crossDomain) {
      x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    }
    x.withCredentials = !!options.withCredentials;
    if (data) {
      x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    if (x.overrideMimeType) {
      x.overrideMimeType("application/json");
    }
    var h = options.customHeaders;
    if (h) {
      for (var i in h) {
        x.setRequestHeader(i, h[i]);
      }
    }
    x.onreadystatechange = function () {
      x.readyState > 3 && callback && callback(x.responseText, x);
    };
    x.send(data);
  } catch (e) {
    console && console.log(e);
  }
}

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getDefaults() {
  return {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    addPath: '/locales/add/{{lng}}/{{ns}}',
    allowMultiLoading: false,
    parse: JSON.parse,
    crossDomain: false,
    ajax: ajax
  };
}

var Backend = function () {
  function Backend(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Backend);

    this.init(services, options);

    this.type = 'backend';
  }

  _createClass(Backend, [{
    key: 'init',
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this.services = services;
      this.options = defaults(options, this.options || {}, getDefaults());
    }
  }, {
    key: 'readMulti',
    value: function readMulti(languages, namespaces, callback) {
      var loadPath = this.options.loadPath;
      if (typeof this.options.loadPath === 'function') {
        loadPath = this.options.loadPath(languages, namespaces);
      }

      var url = this.services.interpolator.interpolate(loadPath, { lng: languages.join('+'), ns: namespaces.join('+') });

      this.loadUrl(url, callback);
    }
  }, {
    key: 'read',
    value: function read(language, namespace, callback) {
      var loadPath = this.options.loadPath;
      if (typeof this.options.loadPath === 'function') {
        loadPath = this.options.loadPath([language], [namespace]);
      }

      var url = this.services.interpolator.interpolate(loadPath, { lng: language, ns: namespace });

      this.loadUrl(url, callback);
    }
  }, {
    key: 'loadUrl',
    value: function loadUrl(url, callback) {
      var _this = this;

      this.options.ajax(url, this.options, function (data, xhr) {
        if (xhr.status >= 500 && xhr.status < 600) return callback('failed loading ' + url, true /* retry */);
        if (xhr.status >= 400 && xhr.status < 500) return callback('failed loading ' + url, false /* no retry */);

        var ret = void 0,
            err = void 0;
        try {
          ret = _this.options.parse(data, url);
        } catch (e) {
          err = 'failed parsing ' + url + ' to json';
        }
        if (err) return callback(err, false);
        callback(null, ret);
      });
    }
  }, {
    key: 'create',
    value: function create(languages, namespace, key, fallbackValue) {
      var _this2 = this;

      if (typeof languages === 'string') languages = [languages];

      var payload = {};
      payload[key] = fallbackValue || '';

      languages.forEach(function (lng) {
        var url = _this2.services.interpolator.interpolate(_this2.options.addPath, { lng: lng, ns: namespace });

        _this2.options.ajax(url, _this2.options, function (data, xhr) {
          //const statusCode = xhr.status.toString();
          // TODO: if statusCode === 4xx do log
        }, payload);
      });
    }
  }]);

  return Backend;
}();

Backend.type = 'backend';

return Backend;

})));

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.i18nextBrowserLanguageDetector = factory());
}(this, function () { 'use strict';

  var arr = [];
  var each = arr.forEach;
  var slice = arr.slice;

  function defaults(obj) {
    each.call(slice.call(arguments, 1), function (source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] === undefined) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  }

  var cookie = {
    create: function create(name, value, minutes, domain) {
      var expires = void 0;
      if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + minutes * 60 * 1000);
        expires = '; expires=' + date.toGMTString();
      } else expires = '';
      domain = domain ? 'domain=' + domain + ';' : '';
      document.cookie = name + '=' + value + expires + ';' + domain + 'path=/';
    },

    read: function read(name) {
      var nameEQ = name + '=';
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1, c.length);
        }if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    },

    remove: function remove(name) {
      this.create(name, '', -1);
    }
  };

  var cookie$1 = {
    name: 'cookie',

    lookup: function lookup(options) {
      var found = void 0;

      if (options.lookupCookie && typeof document !== 'undefined') {
        var c = cookie.read(options.lookupCookie);
        if (c) found = c;
      }

      return found;
    },
    cacheUserLanguage: function cacheUserLanguage(lng, options) {
      if (options.lookupCookie && typeof document !== 'undefined') {
        cookie.create(options.lookupCookie, lng, options.cookieMinutes, options.cookieDomain);
      }
    }
  };

  var querystring = {
    name: 'querystring',

    lookup: function lookup(options) {
      var found = void 0;

      if (typeof window !== 'undefined') {
        var query = window.location.search.substring(1);
        var params = query.split('&');
        for (var i = 0; i < params.length; i++) {
          var pos = params[i].indexOf('=');
          if (pos > 0) {
            var key = params[i].substring(0, pos);
            if (key === options.lookupQuerystring) {
              found = params[i].substring(pos + 1);
            }
          }
        }
      }

      return found;
    }
  };

  var hasLocalStorageSupport = void 0;
  try {
    hasLocalStorageSupport = window !== 'undefined' && window.localStorage !== null;
    var testKey = 'i18next.translate.boo';
    window.localStorage.setItem(testKey, 'foo');
    window.localStorage.removeItem(testKey);
  } catch (e) {
    hasLocalStorageSupport = false;
  }

  var localStorage = {
    name: 'localStorage',

    lookup: function lookup(options) {
      var found = void 0;

      if (options.lookupLocalStorage && hasLocalStorageSupport) {
        var lng = window.localStorage.getItem(options.lookupLocalStorage);
        if (lng) found = lng;
      }

      return found;
    },
    cacheUserLanguage: function cacheUserLanguage(lng, options) {
      if (options.lookupLocalStorage && hasLocalStorageSupport) {
        window.localStorage.setItem(options.lookupLocalStorage, lng);
      }
    }
  };

  var navigator$1 = {
    name: 'navigator',

    lookup: function lookup(options) {
      var found = [];

      if (typeof navigator !== 'undefined') {
        if (navigator.languages) {
          // chrome only; not an array, so can't use .push.apply instead of iterating
          for (var i = 0; i < navigator.languages.length; i++) {
            found.push(navigator.languages[i]);
          }
        }
        if (navigator.userLanguage) {
          found.push(navigator.userLanguage);
        }
        if (navigator.language) {
          found.push(navigator.language);
        }
      }

      return found.length > 0 ? found : undefined;
    }
  };

  var htmlTag = {
    name: 'htmlTag',

    lookup: function lookup(options) {
      var found = void 0;
      var htmlTag = options.htmlTag || (typeof document !== 'undefined' ? document.documentElement : null);

      if (htmlTag && typeof htmlTag.getAttribute === 'function') {
        found = htmlTag.getAttribute('lang');
      }

      return found;
    }
  };

  var path = {
    name: 'path',

    lookup: function lookup(options) {
      var found = void 0;
      if (typeof window !== 'undefined') {
        var language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
        if (language instanceof Array) {
          if (typeof options.lookupFromPathIndex === 'number') {
            if (typeof language[options.lookupFromPathIndex] !== 'string') {
              return undefined;
            }
            found = language[options.lookupFromPathIndex].replace('/', '');
          } else {
            found = language[0].replace('/', '');
          }
        }
      }
      return found;
    }
  };

  var subdomain = {
    name: 'subdomain',

    lookup: function lookup(options) {
      var found = void 0;
      if (typeof window !== 'undefined') {
        var language = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
        if (language instanceof Array) {
          if (typeof options.lookupFromSubdomainIndex === 'number') {
            found = language[options.lookupFromSubdomainIndex].replace('http://', '').replace('https://', '').replace('.', '');
          } else {
            found = language[0].replace('http://', '').replace('https://', '').replace('.', '');
          }
        }
      }
      return found;
    }
  };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function getDefaults() {
    return {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',

      // cache user language
      caches: ['localStorage'],
      excludeCacheFor: ['cimode']
      //cookieMinutes: 10,
      //cookieDomain: 'myDomain'
    };
  }

  var Browser = function () {
    function Browser(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Browser);

      this.type = 'languageDetector';
      this.detectors = {};

      this.init(services, options);
    }

    _createClass(Browser, [{
      key: 'init',
      value: function init(services) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var i18nOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        this.services = services;
        this.options = defaults(options, this.options || {}, getDefaults());

        // backwards compatibility
        if (this.options.lookupFromUrlIndex) this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;

        this.i18nOptions = i18nOptions;

        this.addDetector(cookie$1);
        this.addDetector(querystring);
        this.addDetector(localStorage);
        this.addDetector(navigator$1);
        this.addDetector(htmlTag);
        this.addDetector(path);
        this.addDetector(subdomain);
      }
    }, {
      key: 'addDetector',
      value: function addDetector(detector) {
        this.detectors[detector.name] = detector;
      }
    }, {
      key: 'detect',
      value: function detect(detectionOrder) {
        var _this = this;

        if (!detectionOrder) detectionOrder = this.options.order;

        var detected = [];
        detectionOrder.forEach(function (detectorName) {
          if (_this.detectors[detectorName]) {
            var lookup = _this.detectors[detectorName].lookup(_this.options);
            if (lookup && typeof lookup === 'string') lookup = [lookup];
            if (lookup) detected = detected.concat(lookup);
          }
        });

        var found = void 0;
        detected.forEach(function (lng) {
          if (found) return;
          var cleanedLng = _this.services.languageUtils.formatLanguageCode(lng);
          if (_this.services.languageUtils.isWhitelisted(cleanedLng)) found = cleanedLng;
        });

        if (!found) {
          var fallbacks = this.i18nOptions.fallbackLng;
          if (typeof fallbacks === 'string') fallbacks = [fallbacks];
          if (!fallbacks) fallbacks = [];

          if (Object.prototype.toString.apply(fallbacks) === '[object Array]') {
            found = fallbacks[0];
          } else {
            found = fallbacks[0] || fallbacks.default && fallbacks.default[0];
          }
        };

        return found;
      }
    }, {
      key: 'cacheUserLanguage',
      value: function cacheUserLanguage(lng, caches) {
        var _this2 = this;

        if (!caches) caches = this.options.caches;
        if (!caches) return;
        if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1) return;
        caches.forEach(function (cacheName) {
          if (_this2.detectors[cacheName]) _this2.detectors[cacheName].cacheUserLanguage(lng, _this2.options);
        });
      }
    }]);

    return Browser;
  }();

  Browser.type = 'languageDetector';

  return Browser;

}));
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["Bs/View/Alert/alert"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " alert-dismissible";
},"3":function(container,depth0,helpers,partials,data) {
    return "	<button style=\"position: relative; z-index: 2\" type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<h4 "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.translateTitle : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":7},"end":{"line":11,"column":57}}})) != null ? stack1 : "")
    + ">\n				"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":12,"column":13}}}) : helper)))
    + "\n			</h4><br>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-i18n=\""
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":11,"column":40},"end":{"line":11,"column":49}}}) : helper)))
    + "\"";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-i18n=\""
    + container.escapeExpression(((helper = (helper = helpers.msg || (depth0 != null ? depth0.msg : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"msg","hash":{},"data":data,"loc":{"start":{"line":16,"column":51},"end":{"line":16,"column":58}}}) : helper)))
    + "\"";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.msg || (depth0 != null ? depth0.msg : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"msg","hash":{},"data":data,"loc":{"start":{"line":17,"column":24},"end":{"line":17,"column":33}}}) : helper))) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"alert alert-"
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":1,"column":24},"end":{"line":1,"column":32}}}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dismissible : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":32},"end":{"line":1,"column":76}}})) != null ? stack1 : "")
    + "\" role=\"alert\">\n	<div style=\"position: absolute;top: 0;bottom: 0;left: 0;right: 0;overflow: hidden;z-index:1\">\n		<i style=\"position: absolute;bottom: -30px;right:-30px;font-size:10em;opacity: .2;display:none\" class=\"alert-icon "
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":3,"column":116},"end":{"line":3,"column":124}}}) : helper)))
    + "\"></i>\n	</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dismissible : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":1},"end":{"line":7,"column":8}}})) != null ? stack1 : "")
    + "	<div style=\"position: relative; z-index: 2\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasTitle : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":2},"end":{"line":14,"column":9}}})) != null ? stack1 : "")
    + "\n		<div class=\"content\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.translate : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":23},"end":{"line":16,"column":66}}})) != null ? stack1 : "")
    + ">\n			"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.translate : depth0),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":3},"end":{"line":17,"column":44}}})) != null ? stack1 : "")
    + "\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["Bs/View/Alert/Toast/toast"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " toast-dismissible";
},"3":function(container,depth0,helpers,partials,data) {
    return "	<button style=\"position: relative; z-index: 2\" type=\"button\" class=\"close\" data-dismiss=\"toast\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<h4 "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.translateTitle : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":7},"end":{"line":11,"column":57}}})) != null ? stack1 : "")
    + ">\n				"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":12,"column":13}}}) : helper)))
    + "\n			</h4><br>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-i18n=\""
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":11,"column":40},"end":{"line":11,"column":49}}}) : helper)))
    + "\"";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "data-i18n=\""
    + container.escapeExpression(((helper = (helper = helpers.msg || (depth0 != null ? depth0.msg : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"msg","hash":{},"data":data,"loc":{"start":{"line":16,"column":51},"end":{"line":16,"column":58}}}) : helper)))
    + "\"";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.msg || (depth0 != null ? depth0.msg : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"msg","hash":{},"data":data,"loc":{"start":{"line":17,"column":24},"end":{"line":17,"column":33}}}) : helper))) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"toast toast-"
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":1,"column":24},"end":{"line":1,"column":32}}}) : helper)))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dismissible : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":32},"end":{"line":1,"column":76}}})) != null ? stack1 : "")
    + "\" role=\"alert\">\n	<div style=\"position: absolute;top: 0;bottom: 0;left: 0;right: 0;overflow: hidden;z-index:1\">\n		<i style=\"position: absolute;bottom: -30px;right:-30px;font-size:10em;opacity: .2;display:none\" class=\"alert-icon "
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":3,"column":116},"end":{"line":3,"column":124}}}) : helper)))
    + " text-"
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":3,"column":130},"end":{"line":3,"column":138}}}) : helper)))
    + "\"></i>\n	</div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dismissible : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":1},"end":{"line":7,"column":8}}})) != null ? stack1 : "")
    + "	<div style=\"position: relative; z-index: 2\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasTitle : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":2},"end":{"line":14,"column":9}}})) != null ? stack1 : "")
    + "\n		<div class=\"content\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.translate : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":23},"end":{"line":16,"column":66}}})) != null ? stack1 : "")
    + ">\n			"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.translate : depth0),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":3},"end":{"line":17,"column":44}}})) != null ? stack1 : "")
    + "\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["Bs/View/Collection/Empty/empty"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"text-center text-muted\">\n	<div style=\"margin: 30px 0\">\n		<span class=\"fa fa-meh-o fa-5x\" style=\"opacity: .4\"></span>\n		<div style=\"margin-top: 15px\">\n			<i data-i18n=\"nothingToDisplay\"></i>\n		</div>\n\n	</div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["Bs/View/Collection/Error/error"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"text-center text-danger\">\n	<div style=\"margin: 30px 0\">\n		<span class=\"fa fa-warning fa-5x\" style=\"opacity: .4\"></span>\n		<div style=\"margin-top: 15px\">\n			<i data-i18n=\"error\"></i>\n		</div>\n	</div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["Bs/View/Loading/loading"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"loading-spinner-outer\">\n	<div class=\"spinner\">\n		<div class=\"bounce1\"></div>\n		<div class=\"bounce2\"></div>\n		<div class=\"bounce3\"></div>\n	</div>\n</div>\n<div class=\"loading-text\">"
    + ((stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":8,"column":26},"end":{"line":8,"column":36}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["Bs/View/Modal/modal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "movable";
},"3":function(container,depth0,helpers,partials,data) {
    return "                        <button type=\"button\" class=\"close pull-right view-close\" data-dismiss=\"modal\"\n                                aria-label=\"Close\">\n                            <small class=\"text-uppercase\" data-i18n=\"close\"></small>\n                            <small class=\"fa fa-times\"></small>\n                        </button>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "no-padding";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <div class=\"media\">\n"
    + ((stack1 = container.invokePartial((helpers.getMediaInfoPartial||(depth0 && depth0.getMediaInfoPartial)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"getMediaInfoPartial","hash":{},"data":data,"loc":{"start":{"line":24,"column":32},"end":{"line":24,"column":53}}}),depth0,{"data":data,"indent":"                            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "                        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"modal fade\">\n    <div class=\"modal-dialog modal-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.size : stack1), depth0))
    + "\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.movable : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":37},"end":{"line":4,"column":74}}})) != null ? stack1 : "")
    + "\">\n                <h4 class=\"modal-title text-primary\">\n                    <span class=\"modal-title-main\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span>\n                    <small class=\"modal-title-sub\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.subTitle : stack1), depth0))
    + "</small>\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.closable : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":20},"end":{"line":14,"column":27}}})) != null ? stack1 : "")
    + "                </h4>\n            </div>\n            <div class=\"modal-body "
    + ((stack1 = helpers.unless.call(alias3,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.bodyPadding : stack1),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":35},"end":{"line":17,"column":87}}})) != null ? stack1 : "")
    + "\">\n                <div class=\"modal-icon-wrap\">\n                    <i class=\"modal-icon text-primary "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.icon : stack1), depth0))
    + "\"></i>\n                </div>\n                <div class=\"modal-content-wrap\">\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.mediaInfo : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":26,"column":27}}})) != null ? stack1 : "")
    + "                    <div class=\"view-content\" data-create></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["Bs/View/Modal/tpl/cancelBtn"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<button type=\"button\" class=\"view-close btn btn-link\" data-i18n=\"action.cancel\"></button>\n";
},"useData":true});
+function ($) {
	'use strict';

	(function IE8Compatibility() {
		if (!window.console) {
			window.console = {};
			window.console.log = function () {};
			window.console.warn = function () {};
			window.console.error = function () {};
			window.console.info = function () {};
		}
		if (!Array.prototype.indexOf) {
			Array.prototype.indexOf = function (obj, start) {
				for (var i = (start || 0), j = this.length; i < j; i++) {
					if (this[i] === obj) {
						return i;
					}
				}
				return -1;
			};
		}

		if ( typeof window.CustomEvent !== "function" ) {
			window.CustomEvent = function CustomEvent ( event, params ) {
				params = params || { bubbles: false, cancelable: false, detail: undefined };
				var evt = document.createEvent( 'CustomEvent' );
				evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
				return evt;
			};
			window.CustomEvent.prototype = window.Event.prototype;
		}
	})();

	var _async = false;

	/**
	 *
	 * @type {Bs}
	 */
	var Bs = {};

	/**
	 *
	 * @param bool
	 * @return {Bs}
	 */
	Bs.async = function (bool) {
		_async = bool;
		return this;
	};
	/**
	 *
	 * @return {boolean}
	 */
	Bs.isAsync = function () {
		return _async;
	};

	Bs.init = function (config) {
		_initialized = new $.Deferred();
		this.setConfig(config);

		$(function () {
			_async = true;
			_initialized.resolve();
		});
	};

	/**
	 *
	 * @param callback
	 */
	Bs.ready = function (callback) {
		if (_initialized === null) {
			console.error('Bs has not been initialized. Please call Bs.init()');
			return;
		}
		$.when(_initialized).then(function () {
			callback();
		});
	};

	/**
	 * @param config {{}}
	 */
	Bs.setConfig = function (config) {
		$.extend(_config, config);
		Bs.setDebug(_config.debug);
		if(_config.dev){
			Bs.setDev(true);
		}
	};

	/**
	 *
	 * @param {boolean} debug
	 */
	Bs.setDebug = function (debug) {
		_config.debug = debug;
		if (debug) {
			Bs._dependenciesLoaded = _dependenciesLoaded;
			Bs._store = _store;
			Bs._storeLib = _storeLib;
			Bs._dependencies = _dependencies;
			Bs._overriddenClasses = _overriddenClasses;
		}
		else {
			Bs._dependenciesLoaded = undefined;
			Bs._store = undefined;
			Bs._storeLib = undefined;
			Bs._dependencies = undefined;
      Bs._overriddenClasses = null;
		}
	};

	/**
	 *
	 * @param distPackages
	 * @param devClasses devClasses or callback
	 * @param callback
	 */
	Bs.requirePackage = function (distPackages, devClasses, callback) {
		var dfdJs, dfdCss;
		var dfds = [];

		if (typeof devClasses === 'function') {
			callback = devClasses;
			devClasses = [];
		}
		if (typeof devClasses === 'string') {
			devClasses = [devClasses];
		}

		callback = callback || function () {};

		if (Bs.isDev()) {
			if(devClasses.length){
				Bs.require(devClasses, callback);
			}
			else{
				callback();
			}
			return;
		}

		if (typeof distPackages === "string") {
			distPackages = [distPackages];
		}
		_async = false;
		for (var i = 0, aPackage; !!(aPackage = distPackages[i]); i++) {

			// JS
			dfdJs = _getScript(_config.urlDist + '/' + aPackage + '.min.js');
			(function (packageName) {
				dfdJs.fail(function (jqXHR, errorType, error) {
					console.error("Error in \"" + packageName + "\" package JS : " + errorType);
					throw error;
				});
			}(aPackage));
			dfds.push(dfdJs);

			// CSS
			dfdCss = Bs.Stylesheet.load(_config.urlDist + '/' + aPackage + '.min.css');
			(function (packageName) {
				dfdCss.fail(function (jqXHR, errorType, error) {
					console.error("Error in \"" + packageName + "\" package CSS: " + errorType);
					throw error;
				});
			}(aPackage));
			dfds.push(dfdCss);
		}
		$.when.apply($, dfds).then(function () {
			_async = true;
			callback();
		});
	};

	/**
	 *
	 * @param classes
	 * @param {requireCallback} [callback]
	 * @return {Bs}
	 */
	Bs.require = function (classes, callback) {
		var index;

		if (typeof classes === 'string') {
			classes = [classes];
		}

		/**
		 * @callback requireCallback
		 * @param {string|[]} required class or classes
		 */
		callback = callback || function () {};

		if (!classes.length) {
			callback.apply(null, []);
			return Bs;
		}

		_requireProgress.push(new $.Deferred());

		index = _requireProgress.length - 1;
		if (index === 0) {
			_doRequire(classes, callback, index);
		}
		else {
			$.when(_requireProgress[index - 1]).then(function () {
				_doRequire(classes, callback, index);
			});
		}

		return Bs;
	};

	/**
	 *
	 * @param {Array} classes
	 * @param {Function}  callback
	 * @param {Number} index
	 * @private
	 */
	var _doRequire = function doRequire(classes, callback, index) {

		var callbackArgs = [];
		_dependenciesLoaded[index] = new $.Deferred();
		_dependencies = {};

		for (var i = 0, className; className = classes[i]; i++) {

      // Search for overridden class
      if (_overriddenClasses.hasOwnProperty(className)) {
        className = _overriddenClasses[className]
      }

      _requireOne(className);
			(function (className) {
				callbackArgs.push(function (options) {
					return Bs.create(className, options)
				});
			})(className);
		}

		// Case everything is already defined (so, _dependencies is empty ran synchronously)
		_resolveDependenciesIfEmpty(index);
		$.when(_dependenciesLoaded[index]).then(function () {
			_requireProgress[index].resolve();
			_requireProgress[index] = null;
			_log(classes.join(', ') + ' READY');
			callback.apply(null, callbackArgs);
		});
	};

	var _requireLib = function (libs) {
		var lib, total = 0, done = 0, dfd = new $.Deferred();
		for (lib in libs) {
			if (libs.hasOwnProperty(lib)) {
				if (_storeLib.hasOwnProperty(lib)) {
					delete libs[lib];
				} else {
					total++;
				}
			}
		}
		if (total === 0) {
			dfd.resolve();
		}
		else {
			dfd.progress(function () {
				done++;
				if (done === total) {
					dfd.resolve();
				}
			});
			for (lib in libs) {
				if (libs.hasOwnProperty(lib)) {
					(function (oneLib) {
						var url = libs[oneLib];
						_getScript(url)
							.done(function () {
								_storeLib[oneLib] = true;
								dfd.notify();
							})
							.fail(function () {
								throw new Error('[Bs] Required lib ' + oneLib + ' at ' + url + ' not found or error during JS eval.');
							});
					})(lib);
				}
			}
		}

		return dfd;
	};

	/**
	 *
	 * @param className
	 * @param {Object} definition
	 * @param {defineCallback} [callback]
	 */
	Bs.define = function (className, definition, callback) {
		callback = callback || function () {};

		if (!_async) {
			_defineSync(className, definition);
			callback(_store[className]);
			return;
		}

		var dependencies,
			requiredDependencies;

		_log(className + ' is being defined, check for dependencies');

		definition = $.extend({}, _definition, definition);
		definition.require = _arrayFromString(definition.require);

		// Build array of dependencies (require + extend)
		dependencies = definition.require;
		if (definition.extend) {
			dependencies = Bs.Util.arrayUnion(dependencies, [definition.extend]);
		}

		// Build array of non already defined dependencies
		requiredDependencies = _filterNonDefinedClasses(dependencies);

		// Require all dependencies if have some...
		if (requiredDependencies.length) {
			_log(requiredDependencies + ' dependencies found for ' + className);
			for (var i = 0, requiredDependency; requiredDependency = requiredDependencies[i]; i++) {
				_requireOne(requiredDependency, null, className);
			}
		}
		// ... or resolve main class if no dependency
		else {
			_addDependencies(className);
			_dependencies[className].dfdRequire.resolve();
			_log('No dependency found for ' + className);
		}

		// When all dependencies are loaded, we can finalize define
		$.when(_dependencies[className].dfdRequire).then(function () {
			_log('All dependencies have been loaded for ' + className);

			if (definition.extend) {
				var dfd = new $.Deferred();
				if (_store[definition.extend]) {
					dfd.resolve();
				}
				else {
					_waitUntilLoaded(definition.extend, dfd);
				}
				$.when(dfd).then(function () {
					_store[definition.extend].define(className, definition, function (definedClass, require) {
						if (require && require.length) {
							for (var j = 0, requiredDependency; requiredDependency = require[j]; j++) {
								// // Do not add loop references
								if (!_dependencies.hasOwnProperty(requiredDependency)) {
									_requireOne(requiredDependency);
								}
							}
							$.when(_dependencies[className].dfdRequire).then(function () {
								_afterDefine(definedClass, className, callback);
								_dependencies[className].dfdDefine.resolve();
								callback(_store[className]);
							});
						}
						else {
							_afterDefine(definedClass, className, callback);
							_dependencies[className].dfdDefine.resolve();
							callback(_store[className]);
						}
					});
				});
			}
			else {
				_afterDefine(definition, className, callback);
				_dependencies[className].dfdDefine.resolve();
				callback(_store[className]);
			}

		});
	};

	/**
	 *
	 * @param className
	 * @param [config]
	 * @return {Model|View|*}
	 */
	Bs.create = function (className, config) {
		if (_isDefined(className) === false) {
			throw new Error('Unable to create "' + className + '" not previously loaded, use "Bs.require()" before');
		}

		// Search for overridden class
    if (_overriddenClasses.hasOwnProperty(className)) {
      className = _overriddenClasses[className]
    }

		// Force removing from queue and dependencies, in case of define without require
		_removeFromQueue(className);
		delete _dependencies[className];

		if (typeof _store[className] === 'function') {
			return new _store[className](config);
		}
		else {
			return _store[className];
		}
	};

  /**
	 *
   * @param baseClass
   * @param overriddenClass
   */
  Bs.override = function (baseClass, overriddenClass) {
    _overriddenClasses[baseClass] = overriddenClass
  }

  /**
	 * @todo remove all references (window, alias, CSS loaded)
	 * @param className
	 */
	Bs.unload = function (className) {
		delete _store[className];
	};

	/**
	 *
	 * @param [key]
	 * @returns {*|null}
	 */
	Bs.getConfig = function (key) {
		if (key) {
			return _config.hasOwnProperty(key) ? _config[key] : null;
		}
		return _config;
	};

	/**
	 *
	 * @return {boolean}
	 */
	Bs.isDebug = function () {
		return _config.debug;
	};

	/**
	 * Add an instance
	 * @param instance
	 */
	Bs.storeCmp = function (instance) {
		_cmpStore[instance.id] = instance;
	};

	/**
	 *
	 * @param {string} instanceId
	 * @param successFn
	 * @param notFoundFn
	 * @return {*}
	 */
	Bs.getCmp = function (instanceId, successFn, notFoundFn) {

		if (_cmpStore.hasOwnProperty(instanceId)) {
			successFn = successFn || function () {};
			successFn.call(_cmpStore[instanceId], _cmpStore[instanceId]);
			return _cmpStore[instanceId];
		}
		else {
			notFoundFn = notFoundFn || function () {};
			notFoundFn();
			return null;

		}
	};

	/**
	 *
	 * @param instanceId
	 * @return {boolean}
	 */
	Bs.hasCmp = function (instanceId) {
		return _cmpStore.hasOwnProperty(instanceId);
	};

	/**
	 *
	 * @param {string} instanceId
	 */
	Bs.removeCmp = function (instanceId) {
		if (_cmpStore.hasOwnProperty(instanceId)) {
			delete _cmpStore[instanceId];
		}
	};

	Bs.register = function (className, definition, alias) {
		return _buildStore(className, definition, alias);
	};

	Bs.getClass = function (className) {
		return _store[className];
	};

	Bs.isDev = function () {
		return _dev;
	};

	Bs.setDev = function (dev) {
		console.log(
			dev ? "%c .:Bs DEV MODE:. " : ' %cDEV MODE OFF',
			(dev ? 'color: #00ff00' : 'color: #ff0000') + ';background: #333;font-size:2em;border:3px solid #00ff00;'
		);
		_dev = dev;
		return this;
	};

	Bs.Util = {
		arrayUnion: function (array1, array2) {
			if (typeof array1 !== 'object') array1 = [];
			if (typeof array2 !== 'object') array2 = [];
			var hash = {}, union = [];
			$.each($.merge($.merge([], array1), array2), function (index, value) {
				hash[value] = value;
			});
			$.each(hash, function (key) {
				union.push(key);
			});
			return union;
		},

		arrayFromString   : function (string) {
			if (typeof string === 'string') {
				return [string];
			}
			return string;
		},
		/**
		 * Add given namespace if no provided in className
		 * @param namespaceToAdd
		 * @param className
		 * @return {*}
		 */
		addPrefixIfMissing: function (namespaceToAdd, className) {
			if (className.indexOf(namespaceToAdd) === -1) {
				return namespaceToAdd + "." + className;
			}
			return className;
		},
		String            : {
			ucfirst: function (str) {
				str += '';
				var f = str.charAt(0).toUpperCase();
				return f + str.substr(1);
			}
		}
	};

	Bs.requireLib = function(url){
		var obj = {};
		obj[url] = url;
		return _requireLib(obj);
	};


	var _dev = false;

	/**
	 * Basic configuration of application
	 *
	 * @type {{api: string, urlCore: string, urlApp: string, debug: boolean,initLang: boolean}}
	 * @private
	 */
	var _config = {
		api     : 'api',
		urlCore : '',
		urlApp  : '',
		urlDist : '',
		debug   : false,
		dev     : false,
		initLang: true,
		lang    : {}
	};

	/**
	 * Store of defined classes
	 *
	 * @type {{}}
	 * @private
	 */
	var _store = {};

  var _overriddenClasses = {};

  var _storeLib = {};

	/**
	 * List of instances available
	 *
	 * @type {Object}
	 * @private
	 */
	var _cmpStore = {};

	/**
	 *
	 * @var {[]}
	 * @private
	 */
	var _dependenciesLoaded = [];
	/**
	 *
	 * @type {Object}
	 * @private
	 */
	var _dependencies = {};
	var _circularDependencies = {};

	/**
	 *
	 * @type {jQuery.Deferred}
	 * @private
	 */
	var _initialized = null;

	var _requireProgress = [];

	/**
	 *
	 * @param className
	 * @return {boolean}
	 * @private
	 */
	var _isDefined = function (className) {
		return _store.hasOwnProperty(className);
	};

	/**
	 *
	 * @param url
	 * @param [options]
	 * @return {*}
	 * @private
	 */
	var _getScript = function (url, options) {
		options = $.extend(options || {}, {
			dataType: "script",
			cache   : true,
			url     : url
		});
		return jQuery.ajax(options);
	};

	/**
	 *
	 * @param className
	 * @param definition {Object}
	 * @param [alias]
	 * @return {*}
	 * @private
	 */
	var _buildStore = function (className, definition, alias) {
		var newClass = definition.construct ? definition.construct() : definition;
		var levels = className.split(".");
		var curLevel, name;
		var i = 0;
		if (levels[0] === 'Bs') {
			curLevel = Bs;
		}
		else {
			if (typeof window[levels[0]] === 'undefined') {
				window[levels[0]] = {}
			}
			curLevel = window[levels[0]];
		}
		levels = levels.slice(1);
		while (i < levels.length - 1) {
			if (typeof curLevel[levels[i]] === 'undefined') {
				curLevel[levels[i]] = {};
			}
			curLevel = curLevel[levels[i]];
			i++;
		}
		name = levels[levels.length - 1];
		// console.warn(curLevel[name],typeof curLevel[name],curLevel[name].length);
		// If we already have members in current Level...
		if (typeof curLevel[name] === 'object') {
			// ... we need to backup them ...
			var old = curLevel[name];
			// ... store the new constructor ...
			curLevel[name] = newClass;
			// and reapply old members as static properties of new class
			for (var member in old) {
				if (old.hasOwnProperty(member)) {
					curLevel[name][member] = old[member];
				}
			}
		}
		else {
			curLevel[name] = newClass;
		}
		_store[className] = curLevel[name];

		if (alias) {
			window[alias] = _store[className]
		}
		_log(className + ' has been defined');
		return newClass;
	};

	/**
	 *
	 * @param className
	 * @return {string}
	 * @private
	 */
	var _getUrlByClassName = function (className) {
		var file = className.split('.'),
			ns = file[0],
			url;

		url = ((ns === 'Bs') ? (_config.urlCore + '/Bs/src') : _config.urlApp) + '/';
		if (className.indexOf('View') > -1) {
			file = file[file.length - 1];
			url += className.replace(/\./g, "/") + '/' + file + '.js';
		}
		else {
			url += className.replace(/\./g, "/") + '.js';
		}
		return url;
	};

	/**
	 *
	 * @param className
	 * @private
	 */
	var _removeFromQueue = function (className) {
		if (_dependencies.hasOwnProperty(className)) {
			if (_dependencies[className].dependencies.length === 0) {
				_dependencies[className].dfdRequire.resolve();
			}
		}
		var dependencies, dfdRequire;
		for (var classInQueue in _dependencies) {
			if (_dependencies.hasOwnProperty(classInQueue) === false) {
				continue;
			}
			dependencies = _dependencies[classInQueue].dependencies;
			dfdRequire = _dependencies[classInQueue].dfdRequire;
			if (dfdRequire.state() !== 'resolved') {
				for (var i = 0, dependency; dependency = dependencies[i]; i++) {
					if (dependency === className) {
						dependencies.splice(i, 1);
					}
				}
				if (dependencies.length === 0) {
					_removeFromQueue(classInQueue);
				}
			}
		}
	};

	/**
	 *
	 * @param className
	 * @param dfd
	 * @private
	 */
	var _waitUntilLoaded = function (className, dfd) {
		_log('... Waiting for ' + className + '...');
		setTimeout(function () {
			if (_isDefined(className) === true) {
				dfd.resolve();
			}
			else {
				_waitUntilLoaded(className, dfd)
			}
		}, 10);
	};

	var _isInQueue = function (className) {
		for (var classInQueue in _dependencies) {
			if (_dependencies.hasOwnProperty(classInQueue) === false) {
				continue;
			}
			if (classInQueue === className) {
				return true;
			}
			for (var i = 0, dependency; dependency = _dependencies[classInQueue].dependencies[i]; i++) {
				if (dependency === className) {
					return true;
				}
			}
		}
		return false;
	};

	/**
	 *
	 * @param className
	 * @param [callback]
	 * @param [classWhichRequiresThisOne]

	 * @private
	 */
	var _requireOne = function (className, callback, classWhichRequiresThisOne) {
		var circularAt,
			loadFromQueue = false;

		callback = callback || function () {};
		_log(className + ' has been required');

		if (_isDefined(className)) {
			_log(className + ' is already defined');
			return;
		}

		if (_isInQueue(className)) {
			if (_dependencies[className] && _dependencies[className].dependencies) {
				circularAt = _dependencies[className].dependencies.indexOf(classWhichRequiresThisOne);
				if (circularAt > -1) {
					_circularDependencies[classWhichRequiresThisOne] = className;
					_log(className + ' is a circular reference in ' + classWhichRequiresThisOne);
					_dependencies[className].dependencies.splice(circularAt, 1);
				}
			}

			loadFromQueue = true;
			var dfd = new $.Deferred();
			_waitUntilLoaded(className, dfd);
			$.when(dfd).then(function () {
				_requireAfter(className, callback);
			});
		}

		if (classWhichRequiresThisOne) {
			_addDependencies(classWhichRequiresThisOne, className);
		}
		else {
			_addDependencies(className);
		}

		if (loadFromQueue) {
			return;
		}

		var url = _getUrlByClassName(className);
		_getScript(url)
			.fail(function () {
				console.error('"' + className + '" not found @"' + url + '" or error during JS eval.');
			})
			.done(function () {
					$.when(_dependencies[className].dfdDefine).then(function () {
						_requireAfter(className, callback);
					});
				}
			);
	};

	/**
	 *
	 */
	var _resolveDependenciesIfEmpty = function () {
		var size = 0, i, index;
		for (i in _dependencies) {
			if (_dependencies.hasOwnProperty(i) === false) {
				continue;
			}
			size++;
		}
		if (size === 0) {
			index = _dependenciesLoaded.length - 1;
			_dependenciesLoaded[index].resolve();
		}
	};

	/**
	 *
	 * @param className
	 * @param callback
	 * @private
	 */
	var _requireAfter = function (className, callback) {
		callback = callback || function () {};
		_log(className + ' and its dependencies are ready');
		_removeFromQueue(className);
		delete _dependencies[className];
		callback(_store[className]);
		_resolveDependenciesIfEmpty();
	};

	/**
	 *
	 * @param className
	 * @param dependency
	 * @private
	 */
	var _addDependencies = function (className, dependency) {
		dependency = dependency || null;

		if (dependency && (_circularDependencies[className] === dependency)) {
			_removeFromQueue(className);
		}

		if (_dependencies.hasOwnProperty(className)) {
			_dependencies[className].dfdRequire = new $.Deferred();
			_dependencies[className].dfdDefine = new $.Deferred();
		}
		else {
			_dependencies[className] = {
				dependencies: [],
				dfdRequire  : new $.Deferred(),
				dfdDefine   : new $.Deferred()
			};
		}

		if (dependency) {
			_dependencies[className].dependencies.push(dependency);
		}
	};

	/**
	 *
	 * @type {{require: Array, alias: boolean, extend: boolean, construct: boolean|Function}}
	 * @private
	 */
	var _definition = {
		require  : [],
		alias    : false,
		extend   : false,
		construct: false
	};

	/**
	 * Build array of non already defined dependencies
	 * @param classes
	 * @return {Array}
	 * @private
	 */
	var _filterNonDefinedClasses = function (classes) {
		var required = [];
		for (var i = 0, className; className = classes[i]; i++) {
			if (_isDefined(className) === false) {
				required.push(className);
			}
		}
		return required;
	};

	var _log = function (log) {
		if (_config.debug) {
			console.log(log);
		}
	};

	var _arrayFromString = function (value) {
		return (typeof value === 'string') ? [value] : value;
	};

	var _afterDefine = function (definedClass, className) {
		_buildStore(className, definedClass, definedClass.alias);
	};

	var _orphans = {};
	var _defineSync = function (className, definition) {
		var newDefinition;
		definition = $.extend({}, _definition, definition);
		if (definition.extend) {
			if (_store[definition.extend]) {
				newDefinition = _store[definition.extend].define(className, definition);
				_afterDefine(newDefinition, className);
				// Check orphans
				if (_orphans.hasOwnProperty(className)) {
					for (var orphanClassName in _orphans[className]) {
						if (_orphans[className].hasOwnProperty(orphanClassName)) {
							_defineSync(orphanClassName, _orphans[className][orphanClassName]);
							// delete _orphans[className][orphanClassName];
						}
					}
				}

			}
			else {
				// Store as orphan until parent come
				if (_orphans.hasOwnProperty(definition.extend) === false) {
					_orphans[definition.extend] = {};
				}
				_orphans[definition.extend][className] = definition;
			}
		}
		else {
			_afterDefine(definition, className);
		}
	};

	window['Bs'] = Bs;

}(jQuery);

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
            useOptionsAttr              : true,
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

'use strict';

/**
 * Api communication handler
 *
 * Performs REST/CRUD operation
 *
 * @class Bs.Api
 */
Bs.define('Bs.Api', {
	require  : 'Bs.Response',

	construct: function () {
		// TODO replace by "construct: function Api () {" when Api object will be removed or renamed in js/functions.js

		/**
		 *
		 * @type {string}
		 */
		var _sessionType = 'USR';

		/**
		 *
		 * @return {string}
		 */
		var _buildUrl = function (path) {
			if(path.match(/http|https|\/\//)){
				return path;
			}
			var url =  Bs.getConfig().api;
			if(_sessionType){
				url += '/' + _sessionType;
			}
			if(path){
				if(path.charAt(0) !== "/"){
					url += "/";
				}
				url += path;
			}
			return url;
		};

		/**
		 *
		 * @param options
		 * @return {{done: Function, fail: Function, always: Function, then: Function, loadComponent: Function}}
		 */
		var _buildCallbackObject = function (options) {

			var callback = {
				done         : function () {},
				fail         : function (response, jqXHR) {
					response = jqXHR.responseJSON;
					if (jqXHR.getResponseHeader('Content-Type') === 'application/problem+json') {
						Bs.require('Bs.View.Alert.Toast', function () {
							Bs.View.Alert.Toast.apiProblem(response);
						});
					}
				},
				always       : function () {},
				then         : function () {},
				loadComponent: function (className, response) {
					Bs.create(className, {
						options: {
							response: response,
							request : response.getRequest()
						}
					});
				}
			};

			if (typeof options === 'function') {
				callback.done = options
			}
			else if (typeof options === 'object') {
				callback.done = options.done || callback.done;
				callback.fail = options.fail || callback.fail;
				callback.always = options.always || callback.always;
				callback.then = options.then || callback.then;
				callback.loadComponent = options.loadComponent || callback.loadComponent;
			}

			return callback;
		};

		var _ajax = function (callback, options) {
			var config;

			callback = _buildCallbackObject(callback);

			config = {
                type    : "GET",
                url     : "",
                data    : null,
                dataType: "json",
                headers: _headers
			};
			$.extend(config, options);
			return $.ajax(config).always(function (dataOrJqXHR, textStatus, jqXHROrErrorThrown) {

				var data = (textStatus !== "success") ? dataOrJqXHR.responseJSON : dataOrJqXHR,
					jqXHR = (textStatus !== "success") ? dataOrJqXHR : jqXHROrErrorThrown,
					response = Bs.create('Bs.Response', data);

				if (response.hasComponent()) {
					response.requireComponent(function (className) {
						console.info('Server response requires a component');
						callback.loadComponent(className, response);
					});
					if (response.hasForkComponent()) {
						return;
					}
				}

				jqXHR.done(function () {
					callback.done(response);
				});

				jqXHR.fail(function () {
					callback.fail(response, jqXHR);
				});

				jqXHR.always(function () {
					callback.always(response);
				});

				jqXHR.then(function () {
					callback.then(response);
				});
			});
		};

		/**
		 * Headers sent in request
		 * @type {Object}
		 * @private
		 */
		var _headers = {};

        /**
         * Initializes a new instance of Api.
         * @constructs Bs.Api
         */
        function Api() {}

		/**
         * Transform array PK to string
         * @name Bs.Api#stringifyPK
         * @function
         * @param {array} pk - Primary Key
		 * @return {string} Primary key
		 */
		Api.stringifyPK = function (pk) {
			return pk.join('-');
		};

		/**
		 *
		 * @param sessionType
		 * @return {Api}
		 */
		Api.setSessionType = function (sessionType) {
			_sessionType = sessionType;
			return this;
		};

		/**
		 *
		 * @return {string}
		 */
		Api.getSessionType = function () {
			return _sessionType;
		};

		/**
		 *
		 * @param authToken
		 * @return {Api}
		 */
		Api.setAuthToken = function (authToken) {
			_headers['Auth-Token'] = authToken;
			return this;
		};

		/**
		 *
		 * @param authorization
		 * @return {Api}
		 */
		Api.setAuthorization = function (authorization) {
			_headers['Authorization'] = authorization;
			return this;
		};

		/**
		 *
		 * @return {*}
		 */
		Api.getAuthToken = function () {
			return _headers.hasOwnProperty('Auth-Token') ? _headers['Auth-Token'] : '';
		};

		/**
		 *
		 * @return {*}
		 */
		Api.getAuthorization = function () {
			return _headers.hasOwnProperty('Authorization') ? _headers['Authorization'] : '';
		};

		/**
		 *  API base URL
		 * @return {string}
		 */
		Api.url = function (path) {
			return _buildUrl(path);
		};

        /**
         *
         * @param options
         * @param [callback]
         * @return {*}
         */
        Api.call = function (options, callback) {
            return _ajax(callback, options);
        };

        /**
		 *
		 * @param url
		 * @param [data]
		 * @param [callback]
		 * @return {*}
		 */
		Api.get = function (url, data, callback) {

			if (typeof data === 'function') {
				callback = data;
				data = null;
			}

			return _ajax(callback, {
				type    : "GET",
				url     : _buildUrl(url),
				data    : data,
				dataType: "json",
				headers : _headers
			});

		};
		/**
		 *
		 * @param url
		 * @param [data]
		 * @param [callback]
		 * @return {*}
		 */
		Api.post = function (url, data, callback) {

			if (typeof data === 'function') {
				callback = data;
				data = null;
			}

			if (window.FormData && data instanceof FormData) {
				return _ajax(callback, {
					type       : "POST",
					url        : _buildUrl(url),
					data       : data,
					processData: false,
					contentType: false
				});
			}

			if (typeof data === 'object') {
				return _ajax(callback, {
					type       : "POST",
					url        : _buildUrl(url),
					data       : JSON.stringify(data),
					processData: false,
					contentType: 'application/json'
				});
			}

			return _ajax(callback, {
				type: "POST",
				url : _buildUrl(url),
				data: data
			});
		};
		/**
		 *
		 * @param url
		 * @param [data]
		 * @param [callback]
		 * @return {*}
		 */
		Api['delete'] = function (url, data, callback) { // this.delete fails in IE8
			if (typeof data === 'object') {
				return _ajax(callback, {
					type       : "DELETE",
					url        : _buildUrl(url),
					data       : JSON.stringify(data),
					processData: false,
					contentType: 'application/json'
				});
			}
			else {
				return _ajax(callback, {
					type: "DELETE",
					url : _buildUrl(url),
					data: data
				});
			}
		};
		/**
		 *
		 * @param url
		 * @param [data]
		 * @param [callback]
		 * @return {*}
		 */
		Api.patch = function (url, data, callback) {
			if (typeof data === 'object') {
				return _ajax(callback, {
					type       : "PATCH",
					url        : _buildUrl(url),
					data       : JSON.stringify(data),
					processData: false,
					contentType: 'application/json'
				});
			}
			else {
				return _ajax(callback, {
					type   : "PATCH",
					url    : _buildUrl(url),
					data   : data,
					success: callback
				});
			}
		};
		/**
		 *
		 * @param url
		 * @param [data]
		 * @param [callback]
		 * @return {*}
		 */
		Api.put = function (url, data, callback) {
			if (typeof data === 'object') {
				return _ajax(callback, {
					type       : "PUT",
					url        : _buildUrl(url),
					data       : JSON.stringify(data),
					processData: false,
					contentType: 'application/json'
				});
			}
			else {
				return _ajax(callback, {
					type: "PUT",
					url : _buildUrl(url),
					data: data
				});
			}
		};

		/**
		 * @param options
		 * @return {{done: Function, fail: Function, always: Function, nothing : Function}}
		 */

		Api.buildCallback = function (options) {
			var callback = {
				done   : function () {},
				fail   : function () {},
				always : function () {},
				nothing: function () {}
			};

			if (typeof options === 'function') {
				callback.done = options
			}
			else if (typeof options === 'object') {
				callback.done = options.done || callback.done;
				callback.fail = options.fail || callback.fail;
				callback.always = options.always || callback.always;
				callback.nothing = options.nothing || callback.nothing;
			}

			return callback;
		};

		return Api;
	}
});


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
		Template.loadPartial = function (url, tplName, additionalScriptsOnly) {
			var dfd = new $.Deferred();

			$.get(url)
				.done(function (tplHtml) {
					Handlebars.registerPartial(tplName, tplHtml);
					dfd.resolve();
				})
				.fail(function () {
					console.error('Partial "' + tplName + '" cannot be loaded @ "' + url + '".');
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

"use strict";

Bs.define('Bs.Collection', {

	require  : 'Bs.Model',
	/**
	 *
	 * @return {Collection}
	 * @constructor
	 */
	construct: function Collection() {

		/**
		 *
		 * @param child
		 * @param parent
		 * @param options
		 * @private
		 */
		var _extend = function (child, parent, options) {
			options = options || {};
			child.items = [];
			child.apiParams = $.extend(true, {}, parent.apiParams, options.apiParams);

			for (var key in options) {
				if (options.hasOwnProperty(key) === false) {
					continue;
				}
				if (key === "items") {
					child.addList(options[key]);
					continue;
				}

				child[key] = options[key];

			}
		};

		var Collection = function (options) {
			this.initialize(options);
		};

		Collection.pool = {};

		/**
		 * Instances present in collection
		 *
		 * @type {[Model]}
		 */
		Collection.prototype.items = [];
		Collection.prototype.itemsByPk = {};

		/**
		 * Number of instance derived from this class
		 * Used to create unique id
		 * @type {number}
		 */
		Collection.prototype.nbInstances = 0;

		/**
		 * Name Of the module, id will be generated from this property (id-1)
		 * @type {string}
		 */
		Collection.prototype.id = 'collection';

		/**
		 * Method identifier for API calls (myMethod)
		 * @type {string}
		 */
		Collection.prototype.apiMethod = "get";
		/**
		 * Resource identifier for API calls (myclass)
		 * @type {string}
		 */
		Collection.prototype.apiResource = "";

		/**
		 * Action identifier for API calls (myAction)
		 * @type {string}
		 */
		Collection.prototype.apiAction = "list";
		/**
		 * Params for API calls
		 * @type {string}
		 */
		Collection.prototype.apiParams = null;

		/**
		 * Says if instance is local & new or come from server
		 * @type {boolean}
		 */
		Collection.prototype.local = true;

		/**
		 *  Pagination object
		 * @type {null|{}}
		 */
		Collection.prototype.pagination = null;

		Collection.prototype.cache = false;

		/**
		 * Name of the model used in this collection
		 * @type {Model|String}
		 */
		Collection.prototype.model = '';

		Collection.prototype.itemCount = 0;

		/**
		 * Name of the Collection like a property
		 *
		 * e.g. if class name is Collection.MyEntity => myEntity
		 * @type {string}
		 */
		Collection.prototype.nameAsAProperty = '';

		/**
		 *
		 * @type {string}
		 */
		Collection.prototype.type = 'collection';

		/**
		 * Take a config object and set fields in class
		 */
		Collection.prototype.initialize = function (options) {
			this.itemCount = 0;
			this.id += '-' + (++Collection.prototype.nbInstances);
			_extend(this, this, options);
		};

		Collection.prototype.getPagination = function () {
			return this.pagination;
		};

		Collection.prototype.isNew = function () {
			return this.local === true;
		};

		/**
		 *
		 * @param bool
		 * @return {Collection}
		 */
		Collection.prototype.setNew = function (bool) {
			bool = !!bool;
			this.each(function (model) {
				model.setNew(bool);
			});
			this.local = bool;
			return this;
		};

		/**
		 * Reset items list
		 */
		Collection.prototype.reset = function () {
			this.items = [];
			this.itemCount = 0;
			return this;
		};

		/**
		 *
		 * @param {Model|Array|*} [item]
		 * @return {Model}
		 */
		Collection.prototype.add = function (item) {
			var me = this;
			if (item instanceof Bs.Model === false) {
				if (!me.model) {
					throw new Error('Collection must have a model');
				}
				item = Bs.create(me.model, item);
			}
			me.collectionIndex = ++me.itemCount;
			item.getCollection = function () {
				return me;
			};

			item.index = me.collectionIndex;
			item.getIndex = function () {
				return this.index;
			};
			me.items.push(item);

			return item;
		};

		/**
		 *
		 * @param {Model|Array|*} [item]
		 * @param {integer} index
		 * @return {Model}
		 */
		Collection.prototype.replaceAt = function (index, item) {
			var me = this;
			if (item instanceof Bs.Model === false) {
				item = Bs.create(me.model, item);
			}
			item.getCollection = function () {
				return me;
			};

			item.index = index;
			item.getIndex = function () {
				return this.index;
			};
			me.items[index] = item;

			return item;
		};

		/**
		 *
		 * @param {Array} dataList
		 * @return {Collection}
		 */

		Collection.prototype.addList = function (dataList) {
			if (!dataList) {
				return this;
			}
			for (var i = 0, item; item = dataList[i]; i++) {
				item = this.add(item);
			}
			return this;
		};

		/**
		 *
		 * @param index
		 * @return {Model}
		 */
		Collection.prototype.getAt = function (index) {
			return this.items.hasOwnProperty(index) ? this.items[index] : undefined;
		};

		/**
		 *
		 * @return {[Model]}
		 */
		Collection.prototype.getAll = function () {
			return this.items;
		};

		/**
		 *
		 * @return {[Model]|*}
		 */
		Collection.prototype.getLast = function () {
			if (this.items.length === 0) {
				return undefined;
			}
			return this.items[this.items.length - 1];
		};

		/**
		 *
		 * @return {[Model]|*}
		 */
		Collection.prototype.getFirst = function () {
			if (this.items.length === 0) {
				return undefined;
			}
			return this.items[0];
		};

		/**
		 * Add a param which will be sent to API on fetch operations
		 *
		 * @param name
		 * @param value
		 * @return {Collection}
		 */
		Collection.prototype.setParam = function (name, value) {
			this.apiParams[name] = value;

			return this;
		};

		Collection.prototype.isInPool = function () {
			return this.buildSignature() in Collection.pool;
		};

		Collection.prototype.addToPool = function () {
			Collection.pool[this.buildSignature()] = this;
		};

		Collection.prototype.getFromPool = function () {
			return Collection.pool[this.buildSignature()]
		};

		Collection.prototype.buildSignature = function () {
			return this.id;
		};

		/**
		 * Fetch object from Server
		 * @param options
		 * @return {{done: Function, fail: Function, always: Function}}
		 */
		Collection.prototype.fetch = function (options) {
			//noinspection JSDuplicatedDeclaration
			var me = this,
				url,
				callback = Bs.Api.buildCallback(options),
				item,
				originalDoneCallback = callback.done,
				options = options || {},
				page = options.page || 1,
				limit = options.limit || Bs.Collection.PAGE_SIZE,
				sort = options.sort || false,
				filter = options.filter || false,
				apiParams = options.apiParams || me.apiParams,
				apiMethod = options.apiMethod || me.apiMethod,
				apiAction = options.apiAction || me.apiAction,
				apiResource = options.apiResource || me.apiResource,
				apiRoute = options.apiRoute || me.apiRoute;

			callback.done = function (response) {
				if (me.cache) {
					me.addToPool();
				}
				me.reset();
				me.local = false;
				me.pagination = response.pagination();
				var list = response.getData();
				if (list) {
					if (typeof list === "object") {
						for (var i in list) {
							if (list.hasOwnProperty(i) === false) {
								continue;
							}
							var signature = Bs.Model.buildSignature(me.model, list[i].id);
							if (Bs.Model.isInPool(signature)) {
								item = me.add(Bs.Model.getFromPool(signature));
							}
							else {
								item = me.add(list[i]);
								item.setInitialData(list[i]);
							}
						}
					}
				}
				originalDoneCallback.call(me, response);
			};

			apiAction = apiAction ? '/' + apiAction : apiAction;
			url = apiRoute || (apiResource + apiAction);
			apiParams = $.extend(true, apiParams, {page: page, limit: limit});
			apiParams.sort = sort || null;
			apiParams.filter = filter || null;

			return Bs.Api[apiMethod.toLowerCase()](url, apiParams, callback);
		};

		/**
		 * Tells if at least one of the models in collection has specified value in specified field
		 *
		 * @param value
		 * @param property
		 * @return {boolean}
		 */
		Collection.prototype.hasValue = function (value, property) {
			var me = this;
			for (var i in me.items) {
				if (me.items.hasOwnProperty(i)) {
					if (me.items[i].get(property) === value) {
						return true;
					}
				}
			}
			return false;
		};

		/**
		 *
		 * @returns {Array}
		 */
		Collection.prototype.toObject = function (withFnAndExtra) {
			var me = this,
				data = [];

			me.each(function (model) {
				data.push(model.toObject(withFnAndExtra));
			});

			return data;
		};

		Collection.prototype.save = function (options) {
			options = options || {};
			var me = this,
				postList = [],
				patchList = [],
				deleteList = [],
				patchDfd, postDfd, deleteDfd,
				url,
				callback = Bs.Api.buildCallback(options),
				originalDoneCallback = callback.done,
				apiParams = options.apiParams || {};

			me.each(function (model) {

				if (model.isSuppressed()) {
					if (model.isNew() === false) {
						deleteList.push(model.toObject());
					}
				}
				else {
					if (model.isNew()) {
						postList.push(model.toObject());
					}
					else if (model.isModified()) {
						patchList.push(model.toObject());
					}
				}
			});

			/**
			 *
			 * @param {Response} response
			 */
			callback.done = function (response) {

				if (patchList.length > 0 || deleteList.length > 0) {
					me.each(function (model, modelIndex) {
						if (model.pk.length > 1) {
							throw new Error('You must implement an auto-incremented PK or implement multiple PK handling for collection');
						}

						for (var i = 0, item; item = response.getData()[i]; i++) {
							if (item[model.pk[0]] === model.getPK(true)) {
								me.replaceAt(modelIndex, item)
							}
						}
						model.modifiedFields = [];
						model.local = false;
					});
				} else {
					me.reset();
					me.addList(response.getData());
					me.each(function (model) {
						model.modifiedFields = [];
						model.local = false;
					});
				}

				originalDoneCallback.call(me, response);
			};
			url = me.apiResource + '/' + me.apiAction;

			if (!postList.length && !patchList.length && !deleteList.length) {
				callback.always();
				callback.nothing();
				return;
			}

			if (postList.length) {
				var postListParams = {'list': postList};
				postListParams = $.extend(true, postListParams, apiParams);
				postDfd = Bs.Api.post(url, postListParams);
			}
			else {
				postDfd = new $.Deferred().resolve();
			}

			if (patchList.length) {
				var patchListParams = {'list': patchList};
				patchListParams = $.extend(true, patchListParams, apiParams);
				patchDfd = Bs.Api.patch(url, patchListParams);
			}
			else {
				patchDfd = new $.Deferred().resolve();
			}

			if (deleteList.length) {
				var deleteListParams = {'list': deleteList};
				deleteListParams = $.extend(true, deleteListParams, apiParams);
				deleteDfd = Bs.Api.delete(url, deleteListParams);
			}
			else {
				deleteDfd = new $.Deferred().resolve();
			}

			$.when(postDfd, patchDfd, deleteDfd).then(function (rPost, rPatch, rDelete) {
					var r;
					// Need to check existence of post response before extend
					if (rPost) {
						if (rPatch) {
							$.extend(true, rPost[0].data, rPatch[0].data);
						}
						r = new Bs.Response(rPost[0]);
					}
					else {
						if(rPatch) {
							r = new Bs.Response(rPatch[0]);
						} else if(rDelete){
							r = new Bs.Response(rDelete[0]);
						}
					}

					callback.done(r);
					callback.always(r);
				},
				function () {
					callback.fail();
					callback.always();
				}
			);

			//TODO remove deleted elements from collection ?

		};

		/**
		 * Tells if collection has items
		 *
		 * @return {boolean}
		 */
		Collection.prototype.isEmpty = function () {
			return this.items.length === 0;
		};

		Collection.prototype.each = function (callback) {
			var me = this;
			for (var i = 0, item; item = me.items[i]; i++) {
				if(callback(item, i) === false){
					break;
				}
			}
		};

		/**
		 *
		 * @param property
		 * @param value
		 * @param operator
		 * @return {*}
		 */
		Collection.prototype.findFirstWhere = function (property, value, operator) {
			// TODO operator
			var me = this;
			for (var i = 0, item; item = me.items[i]; i++) {
				if (me.items[i].get(property) === value) {
					return me.items[i];
				}
			}

			return null;
		};

		/**
		 *
		 * @return {Number}
		 */
		Collection.prototype.count = function () {
			return this.items.length;
		};
		/**
		 *
		 * @return {Number}
		 */
		Collection.prototype.getLength = function () {
			return this.items.length;
		};

		/**
		 *
		 * @param property
		 * @param value
		 * @param operator
		 * @return {int} Index of removed item
		 */
		Collection.prototype.removeFirstWhere = function (property, value, operator) {
			// TODO operator
			var me = this;
			for (var i = 0, item; item = me.items[i]; i++) {
				if (me.items[i].get(property) === value) {
					me.items.splice(i, 1);

					return i;
				}
			}

			return -1;
		};

		/**
		 *
		 * @param {Model} model
		 */
		Collection.prototype.remove = function (model) {
			// TODO broken if multi pk
			if (model.pk.length > 1) {
				throw new Error('Composed PK is not managed yet, sorry... :(')
			}
			this.removeFirstWhere(model.pk[0], model.getPK()[0]);
		};

		Collection.prototype.suppress = function (model) {
			model.suppress();
		};

		Collection.prototype.restore = function (model) {
			model.restore();
		};

		Collection.prototype.getNameAsAProperty = function () {
			return this.nameAsAProperty;
		};

		Collection.prototype.toArray = function () {
			var me = this,
				itemsToArray = [];

			me.each(function (model) {
				itemsToArray.push(model.toObject());
			});

			return itemsToArray;
		};

		/**
		 * Sort collection by given property
		 * Local sorting, use `Collection.fetch({sort:{property:"name",direction:"DESC"}})` for remote sorting
		 *
		 * @param {String} property
		 * @param {Boolean} desc
		 */
		Collection.prototype.sortBy = function (property, desc) {
			var me = this;
			me.items.sort(function(a,b) {
				return (a.get(property) > b.get(property)) ? (desc ? -1 : 1) : ((b.get(property) > a.get(property)) ? (desc ? 1 : -1) : 0);
			});
		};

		/**
		 * Define a new Class derived from Collection
		 *
		 * @static
		 * @param className
		 * @param options
		 * @param callback
		 * @return {Collection}
		 */
		Collection.define = function (className, options, callback) {
			callback = callback || function () {};
			var parent = this,
				Surrogate = function Collection() {},
				Collection = function Collection() {
					return parent.apply(this, arguments);
				},
				apiResource, firstLetter;

			Collection.define = parent.define;

			Surrogate.prototype = parent.prototype;
			Collection.prototype = new Surrogate;

			apiResource = className.split('.');
			apiResource = apiResource[apiResource.length - 1];
			firstLetter = apiResource.charAt(0).toLowerCase();
			Collection.prototype.apiResource = firstLetter + apiResource.substr(1);

			_extend(Collection.prototype, parent.prototype, options);

			var str = className.split('.');
			str = str[str.length - 1];
			firstLetter = str.charAt(0).toLowerCase();
			Collection.prototype.nameAsAProperty = firstLetter + str.substr(1);

			Collection.prototype.id = className.replace(/\./g, "-").toLowerCase();
			callback(Collection, [Collection.prototype.model]);

			return Collection;
		};

		Collection.create = function (className, options) {
			options = options || {};
			options.extend = 'Bs.Collection';

			var Child = Collection.define(className, options);

			if (!Child.prototype.model) {
				throw new Error('Collection must have a model');
			}

			Bs.register(className, Child);
			return new Child();
		};

		return Collection;
	}
}, function () {
	Bs.Collection.PAGE_SIZE = 20
});

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
			if (!me.view.model || $.isEmptyObject(me.view.model)) {
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

"use strict";

/**
 * @return {Bs.Model}
 */
Bs.define('Bs.Model', {
	require: ['Bs.Api'],

	/**
	 *
	 * @return {Model}
	 * @constructor
	 */
	construct: function () {

		var _buildSignatureFromClass = function (className) {
			return className.replace(/\./g, "-").toLowerCase();
		};

		/**
		 *
		 * @constructor
		 */

		var Model = function () {
			this.initialize && this.initialize.apply(this, arguments);
		};

		/**
		 *
		 */
		Model.pool = {};
		/**
		 * Number of instance derived from this class
		 * Used to create unique id
		 * @type {number}
		 */
		Model.prototype.nbInstances = 0;
		/**
		 * Name of the model
		 * @type {string}
		 */
		Model.prototype.className = '';
		/**
		 * Name of the model like a property
		 *
		 * e.g. if class name is Model.MyEntity => myEntity
		 * @type {string}
		 */
		Model.prototype.nameAsAProperty = '';

		/**
		 * Name Of the module, id will be generated from this property (id-1)
		 * @type {string}
		 */
		Model.prototype.id = 'model';

		/**
		 * Resource identifier for API calls (myclass)
		 * @type {string}
		 */
		Model.prototype.apiResource = "";
		/**
		 * Route identifier for API calls (myclass)
		 *
		 * (Overwrites ApiRessource and ApiAction)
		 * @type {string|null}
		 */
		Model.prototype.apiRoute = null;

		/**
		 * action identifier for API calls
		 * @type {string}
		 */
		Model.prototype.apiAction = "";

		/**
		 * Primary Key fields
		 * @type {[]}
		 */
		Model.prototype.pk = ['id'];

		/**
		 * Auto Increment PK
		 * @type {boolean}
		 */
		Model.prototype.autoIncrement = true;

		/**
		 * Foreign Key fields
		 * @type {[]}
		 */
		//Model.prototype.fk = [];

		/**
		 * Foreign Key fields
		 * @type {{}} {"fkId" : "ModelName"}
		 */
		Model.prototype.relations = {};

		/**
		 * Says if instance is local & new or come from server
		 * @type {boolean}
		 */
		Model.prototype.local = true;

		/**
		 * Says if instance is being initialized
		 * @type {boolean}
		 */
		Model.prototype.initializingData = false;

		/**
		 *  @type {Object}
		 *
		 */
		Model.prototype.fields = {};
		/**
		 *
		 * @type {{}}
		 */
		Model.prototype.extraData = {};
		/**
		 * List of functions
		 * @type {{}}
		 */
		Model.prototype.fn = {};

		Model.prototype.modifiedFields = [];

		Model.prototype.suppressed = false;
		/**
		 *
		 * @type {string}
		 */
		Model.prototype.type = 'model';

        /**
		 *
         * @type {null}|{Object}
         */
        Model.prototype.triggeredEvents = null;

        /**
		 * Take a config object and set fields in class
		 * @param data
		 */
		Model.prototype.initialize = function (data) {
			var me = this;
			// var alreadyCreatedRelations = {name: true};
			me.fieldsDefault = $.extend({}, me.fields);
			me.fields = $.extend({}, me.fields);
			me.modifiedFields = [];
			me.initialData = {};
			me.extraData = {};

			// Create initial objects for relations
			for (var key in me.relations) {
				if (me.relations.hasOwnProperty(key) && !me.fields[key]) {
					if (typeof data === "object"
						&& data !== null
						&& "caller" in data
						&& me.relations[key] === data.caller
					){
						continue; // Avoid recursion of a model who wants to instantiate same model as caller
					}
					me.setRelation(key, {caller:me.className});
				}
			}

			// Set all data : fields and relations
			me.setData(data);

			me.id += '-' + (++Model.prototype.nbInstances);
		};

		/**
		 * Check if field exists in model
		 *
		 * @param field
		 * @return {*}
		 */
		Model.prototype.has = function (field) {
			return this.fields.hasOwnProperty(field);
		};

		/**
		 * Simple Getter
		 *
		 * @param field
		 * @return {*}
		 */
		Model.prototype.get = function (field) {
			if (field.indexOf('.') > 0) {
				var fieldParts = field.split('.');
				return this.getSubModel(fieldParts.shift(), fieldParts);
			}
			else {
				return this.has(field) ? this.fields[field] : null;
			}
		};

		Model.prototype.getSubModel = function (relation, field) {

			if (relation in this.relations) {
				return this.fields[relation].get(field);
			}
			if (typeof this.fields[relation] === 'object') {
				return this.fields[relation][field]
			}
			return null;
		};

		/**
		 * Get PK value
		 *
		 * @return []|String [toString]
		 */
		Model.prototype.getPK = function (toString) {
			var temp = [];
			for (var i = 0, field; field = this.pk[i]; i++) {
				temp.push(this.get(field));
			}
			return toString ? temp.join('-') : temp;
		};

		/**
		 * Get PK value
		 *
		 * @return {*}
		 */
		Model.prototype.isAutoIncrement = function () {
			return this.autoIncrement === true;
		};

		var _linkRelationToParent = function(relationInstance, parentFieldName){
			var me = this;
			relationInstance.getParentRelation = function(){
				return me;
			};
			relationInstance.getParentFieldName = function(){
				return parentFieldName;
			};
		};

		Model.prototype.setRelation = function (field, value) {

			var className = this.relations[field],
				relation = this.fields[field];

			if(!relation || $.isEmptyObject(relation)) {
				relation = this.fields[field] = Bs.create(className, value);
				_linkRelationToParent.call(this, relation, field);
			}

			// Value is an instance
			if (value instanceof Bs.Collection || value instanceof Bs.Model) {
				if(this.isInitializingData()){
					value.setNew(this.isNew());
				}
				this.fields[field] = value;
				return this;
			}

			// Value is plain data
			// Collection
			if (relation.type==="collection") {
				relation.reset();
				relation.addList(value);
				if(this.isInitializingData()){
					relation.setNew(this.isNew());
				}
				return this;
			}
			// Model
			else if (relation.type==="model") {
				// If no/null value, assume relation does not exist on server
				relation.setInitialData(value, value ? this.isNew() : true);
				return this;
			}

			throw new Error("[Bs.Model] Unknown relation type for '" + field + "' in '" + this.className +"'");
		};

		/**
		 * Simple Setter
		 *
		 * @param field
		 * @param value
		 * @return {Model}
		 */
		Model.prototype.set = function (field, value) {
			var object, objectName, objectFieldName;
			if (!field || this.has(field) === false || this.get(field) === value) {
				return this;
			}

			if (typeof value === "string") {
				value = $.trim(value);
			}

			if (field.indexOf('.') > 0) {
				object = field.split('.');
				objectName = object.shift();
				objectFieldName = object;
				if (objectName in this.relations) {
					this.fields[objectName].set(objectFieldName, value);
					return this;
				}
				if (this.fields[objectName]
					&& typeof this.fields[objectName] === 'object'
					&& this.fields[objectName].hasOwnProperty(objectFieldName)
				) {
					this.fields[objectName][objectFieldName] = value
				}
			}
			else {
				// Relations Collection/Model
				if (field in this.relations) {
					this.setRelation(field, value);
				}
				// Simple field
				else {
					this.fields[field] = value;
				}
			}
			if (!this.isInitializingData() && !this.isNew()) {
				// TODO - relations
				//if (this.fk.indexOf(field) > -1) {
				//	this.setRelation(field);
				//}

				var index = this.modifiedFields.indexOf(field);
				// New value is same as original, remove if previously modified
				if (this.getInitial(field) === value) {
					if (index > -1) { //remove if exists
						this.modifiedFields.splice(index, 1)
					}
				}
				// New value is different, push if not already modified
				else {
					if (index === -1) {
						this.addModifiedField(field);
					}
				}
			}

			return this;
		};

		/**
		 *
		 * @param field
		 */
		Model.prototype.addModifiedField = function (field) {
			this.modifiedFields.push(field);
		};

		/**
		 *
		 * @param data
		 */
		Model.prototype.setData = function (data) {
			data = data || {};

			for (var key in data) {
				if (data.hasOwnProperty(key) && this.has(key)) {
					this.set(key, data[key]);
				}
			}
		};

		Model.prototype.getSignature = function () {
			return _buildSignatureFromClass(this.className) + "-" + this.getPK(true);
		};

		Model.buildSignature = function (className, pkString) {
			return _buildSignatureFromClass(className) + "-" + pkString;
		};

		Model.isInPool = function (signature) {
			return typeof Model.pool[signature] !== "undefined";
		};

		Model.getFromPool = function (signature) {
			return Model.pool[signature];
		};

		Model.addToPool = function (signature, model) {
			return Model.pool[signature] = model;
		};
		Model.removeFromPool = function (signature) {
			if (Model.isInPool) {
				delete Model.pool[signature];
			}
		};

		/**
		 *
		 * @param className
		 * @param pkString
		 * @param callback
		 * @return {jQuery.Deferred|jQuery.Ajax}
		 */
		Model.getFromPoolOrFetch = function (className, pkString, callback) {
			var item,
				signature = Model.buildSignature(className, pkString);

			callback = callback || function () {};

			if (Model.isInPool(signature)) {
				item = Model.getFromPool(signature);
				callback.call(item, item);
				return new $.Deferred().resolve()
			}
			else {
				item = Bs.create(className);
				return item.fetch({
					pk  : pkString,
					done: function () {
						callback.call(item, item);
					}
				});
			}
		};

		/**
		 *
		 * @param data
		 * @param {boolean} fromLocal Data is local or come from server ?
		 */
		Model.prototype.setInitialData = function (data, fromLocal) {
			data = data || {};
			this.modifiedFields = [];
			this.setNew(fromLocal);
			this.setInitializingData(true);
			for (var key in data) {
				if (data.hasOwnProperty(key) && this.has(key)) {
					this.initialData[key] = data[key];
					this.set(key, data[key])
				}
			}
			this.setInitializingData(false);
		};

		/**
		 *
		 * @return {Model.initialData}
		 */
		Model.prototype.getInitial = function (field) {
			return this.has(field) ? this.initialData[field] : undefined;
		};

		/**
		 *
		 * @return {boolean}
		 */
		Model.prototype.isNew = function () {
			return this.local === true;
		};

		/**
		 *
		 * @param bool
		 * @return {Model}
		 */
		Model.prototype.setNew = function (bool) {
			bool = !!bool;
			this.local = bool;
			return this;
		};

		/**
		 *
		 * @param bool
		 * @return {Model}
		 */
		Model.prototype.setInitializingData = function (bool) {
			bool = !!bool;
			this.initializingData = bool;
			return this;
		};

		/**
		 *
		 * @return {boolean}
		 */
		Model.prototype.isInitializingData = function () {
			return this.initializingData === true;
		};


		/**
		 *
		 * @return {boolean}
		 */
		Model.prototype.isModified = function () {
			return this.modifiedFields.length > 0;
		};

		/**
		 *
		 * @return {boolean}
		 */
		Model.prototype.isSuppressed = function () {
			return this.suppressed;
		};

		/**
		 *
		 * @return {Model}
		 */
		Model.prototype.suppress = function () {
			this.suppressed = true;
			return this;
		};
		/**
		 *
		 * @return {Model}
		 */
		Model.prototype.restore = function () {
			this.suppressed = false;
			return this;
		};

		/**
		 *
		 * @param field
		 * @return {boolean}
		 */
		Model.prototype.isModifiedField = function (field) {
			return this.modifiedFields.indexOf(field) > -1;
		};

		/**
		 * reset fields with parent values
		 * @return {Model}
		 */
		Model.prototype.reset = function () {
			if(this.isNew()) {
				this.setData(this.fieldsDefault);
			}
			else{
				for (var i = 0, field; field = this.modifiedFields[i]; i++) {
					this.set(field, this.getInitial(field));
				}
			}
			return this;
		};

		/**
		 * Fetch object from Server
		 * @param options
		 * @return {jQuery.Ajax}
		 */
		Model.prototype.fetch = function (options) {
			var me = this,
				callback,
				originalDoneCallback,
				url,
				apiParams,
				apiAction,
				apiRoute,
				apiResource,
				pk;

			options = options || {};
			callback = Bs.Api.buildCallback(options);
			originalDoneCallback = callback.done;
			apiParams = options.apiParams || null;
			apiAction = options.apiAction || me.apiAction;
			apiRoute = options.apiRoute || me.apiRoute;
			apiResource = options.apiResource || me.apiResource;
			pk = options.pk || this.getPK(true);

			callback.done = function (response) {
				var data = response.getData();
				if (data) {
					me.setInitialData(data);
				}
				Model.addToPool(me.getSignature(), me);
				originalDoneCallback.call(me, response);
			};

			if(apiRoute) {
				url = apiRoute || apiResource + pk + apiAction;
			}
			else{
				apiAction = apiAction ? '/' + apiAction : apiAction;
				pk = pk ? '/' + pk : pk;
				url = apiResource + pk + apiAction;
			}

			return Bs.Api.get(url, apiParams, callback);
		};

		/**
		 *
		 * @param options
		 */
		Model.prototype.delete = function (options) {
			options = options || {};
			var me = this,
				callback = Bs.Api.buildCallback(options),
				originalDoneCallback = callback.done,
				apiParams = options.apiParams || null,
				apiAction = options.apiAction || me.apiAction,
				apiResource = options.apiResource || me.apiResource,
				pk = options.pk || this.getPK(true);

			callback.done = function (response) {
				me.setInitialData(response.getData(), true);
				Model.removeFromPool(me.getSignature(), me);
				originalDoneCallback.call(me, response);
			};

			apiAction = apiAction ? '/' + apiAction : apiAction;
			pk = pk ? '/' + pk : pk;

			Bs.Api.delete(apiResource + pk + apiAction, apiParams, callback);
		};

		/**
		 *
		 * @param options callback function on 'done' OR callback object {done: Function, fail: Function, always: Function}
		 */
		Model.prototype.save = function (options) {
			options = options || {};
			var me = this,
				url,
				callback = Bs.Api.buildCallback(options),
				originalDoneCallback = callback.done,
				apiParams = options.apiParams || {},
				apiAction = options.apiAction || me.apiAction,
				apiResource = options.apiResource || me.apiResource,
				apiRoute = options.apiRoute || me.apiRoute;

			callback.done = function (response) {
				me.setInitialData(response.getData());
				originalDoneCallback.call(me, response);
			};

			if (apiAction) {
				apiAction = '/' + apiAction;
			}

			var data = {};
			if (this.isNew()) {
				url = apiRoute || (apiResource + apiAction);
				if (me.isAutoIncrement() === false && !apiRoute) {
					url += '/' + this.getPK(true);
				}
				data = $.extend(true, {}, this.toObject(), apiParams);
				Bs.Api.post(url, data, callback)
			}
			else {
				url = apiRoute || (apiResource + '/' + this.getPK(true) + apiAction);
				if (me.isModified()) {
					data = $.extend(true, {}, this.toModifiedObject(), apiParams);
					Bs.Api.patch(url, data, callback)
				}
				else {
					if(options.force){
						Bs.Api.patch(url, apiParams, callback)
					}
					else {
						callback.always();
						callback.nothing();
					}
				}
			}
		};

		/**
		 *
		 * @return {Model}
		 */
		Model.prototype.setApiAction = function (apiAction) {
			this.apiAction = apiAction;
			return this;
		};

		Model.prototype.toObject = function (withFnAndExtra) {
			var me = this, temp = {}, o;
			for (var field in this.fields) {
				if (this.fields.hasOwnProperty(field)) {
					// If field is a subModel, get it and calls its toObject method
					if (this.relations.hasOwnProperty(field)) {
						o = this.get(field);
						temp[field] = o && o.toObject && o.toObject(withFnAndExtra) || null;
					}
					else {
						temp[field] = this.get(field);
					}
				}
			}
			if (withFnAndExtra) {
				var fnList = {};
				for (var fnName in me.fn) {
					if (me.fn.hasOwnProperty(fnName)) {
						(function (fnName) {
							fnList[fnName] = function () {
								return me.fn[fnName].apply(me, arguments);
							}
						})(fnName)
					}
				}
				$.extend(true, temp, this.getExtraData(), fnList)
			}
			return temp;
		};

		/**
		 *
		 * @param [name]
		 * @returns {*}
		 */
		Model.prototype.getExtraData = function (name) {

			if (name) {
				if (this.extraData.hasOwnProperty(name)) {
					return this.extraData[name];
				}
				return null;
			}
			return this.extraData;
		};

		/**
		 *
		 * @param name
		 * @param value
		 * @returns {Model}
		 */
		Model.prototype.setExtraData = function (name, value) {
			this.extraData[name] = value;
			return this;
		};

		/**
		 *
		 *
		 * @return {*}
		 */
		Model.prototype.toModifiedObject = function () {
			var temp = {}, o;
			for (var i = 0, field; field = this.modifiedFields[i]; i++) {

				// If field is a subModel, get it and calls its toObject method
				if (this.relations.hasOwnProperty(field)) {
					o = this.get(field);
					temp[field] = o && o.toObject && o.toObject() || null;
				}
				else {
					temp[field] = this.get(field);
				}
			}
			return temp;
		};

		/**
		 *
		 * @return {string}
		 */
		Model.prototype.toJSON = function () {
			return JSON.stringify(this.toObject());
		};

		/**
		 *
		 * @return {string}
		 */
		Model.prototype.getClassName = function () {
			return this.className;
		};

		Model.prototype.getNameAsAProperty = function () {
			return this.nameAsAProperty;
		};

		Model.prototype.on = function (event, callback) {
			var me = this;
			callback = callback || function () {};

			// Give a chance to execute a "on" registered after trigger
			if (me.triggeredEvents.hasOwnProperty(event)) {
				me.triggeredEvents[event].unshift(new CustomEvent(event));
				callback.apply(me, me.triggeredEvents[event]);
				delete me.triggeredEvents[event]
			}

			// Standard behavior
			$(me).on(event, function(){
				// Remove triggered event to avoid duplicate execution in some cases
				if (me.triggeredEvents.hasOwnProperty(event)) {
					delete this.triggeredEvents[event]
				}
				callback.apply(me, arguments);
			});

			return this;
		};

		/**
		 *
		 * @param event
		 * @param callback
		 */
		Model.prototype.one = function (event, callback) {
			var me = this;
			callback = callback || function () {};

			// Give a chance to execute a "on" registered after trigger
			if (me.triggeredEvents.hasOwnProperty(event)) {
				me.triggeredEvents[event].unshift(new CustomEvent(event));
				callback.apply(me, me.triggeredEvents[event]);
				delete me.triggeredEvents[event]
			}

			// Standard behavior
			$(me).one(event, function(){
				// Remove triggered event to avoid duplicate execution in some cases
				if (me.triggeredEvents.hasOwnProperty(event)) {
					delete this.triggeredEvents[event]
				}
				callback.apply(me, arguments);
			});

			return this;
		};

		Model.prototype.off = function (event) {
			$(this).off(event);
			if (this.triggeredEvents.hasOwnProperty(event)) {
				delete this.triggeredEvents[event]
			}
			return this;
		};

		/**
		 *
		 * @param event
		 * @param params
		 */
		Model.prototype.trigger = function (event, params) {
			if (!$.isArray(params)) {
				params = [params];
			}
			this.triggeredEvents[event] = params;
			$(this).trigger(event, params);

			return this;
		};

		/**
		 *
		 * @param event
		 * @param params
		 */
		Model.prototype.triggerHandler = function (event, params) {
			if (!$.isArray(params)) {
				params = [params];
			}
			this.triggeredEvents[event] = params;
			$(this).triggerHandler(event, params);

			return this;
		};

        var _extend = function (child, parent, options) {

			child.fields = $.extend(true, {}, parent.fields, options.fields);
			child.fn = $.extend(true, {}, parent.fn, options.fn);
			child.relations = $.extend(true, {}, parent.relations, options.relations);
            child.triggeredEvents = {};
			// Prevent loop below to erase values
			options.fields = undefined;
			options.relations = undefined;

			for (var key in options) {
				if (options.hasOwnProperty(key) === false || options[key] === undefined) {
					continue;
				}

				if (typeof options[key] === "function") {
					child.fn[key] = options[key];
				}
				child[key] = options[key];
			}

			child.modifiedFields = [];
			child.initialData = {};

			child.pk = Bs.Util.arrayFromString(child.pk);

		};

		/**
		 * Define a new Class derived from Model
		 *
		 * @static
		 * @param className
		 * @param options
		 * @param callback
		 * @return {Model}
		 */
		Model.define = function (className, options, callback) {
			callback = callback || function () {};
			options.fields = options.fields || {};
			var parent = this,
				relationList,
				Surrogate = function Model() {},
				Model = function Model() {
					return parent.apply(this, arguments);
				};

			Model.define = parent.define;

			Surrogate.prototype = parent.prototype;
			Model.prototype = new Surrogate;

			_extend(Model.prototype, parent.prototype, options);
			Model.prototype.id = _buildSignatureFromClass(className);
			Model.prototype.className = className;

			var str = className.split('.');
			str = str[str.length - 1];
			var f = str.charAt(0).toLowerCase();
			Model.prototype.nameAsAProperty = f + str.substr(1);

			if (options.apiResource) {
				Model.prototype.apiResource = options.apiResource;
			}
			else {
				if (!Model.prototype.apiResource) {
					Model.prototype.apiResource = Model.prototype.nameAsAProperty;
				}
			}

			relationList = [];
			for (var name in Model.prototype.relations) {
				if (Model.prototype.relations.hasOwnProperty(name)) {
					relationList.push(Model.prototype.relations[name])
				}
			}
			callback(Model, relationList);

			return Model;
		};

		Model.create = function (className, options) {
			options = options || {};
			options.extend = 'Bs.Model';

			var Child = Model.define(className, options);

			return new Child();
		};

		return Model;
	}
});

'use strict';

Bs.define('Bs.Response', {
	construct: function () {

		/**
		 * @class Response
		 * @constructor
		 */
		var Response = function Response() {
			this.initialize && this.initialize.apply(this, arguments);
		};

	/**
	 *
	 * @type {null|{}}
	 */
	Response.prototype.response = null;

		/**
		 * @param [property]
		 * @return {*}
		 * @this Response
		 */
		Response.prototype.getData = function (property) {
			if (this.response.data === null) {
				return null;
			}
			if (property) {
				if (this.response.data.hasOwnProperty(property)) {
					return this.response.data[property];
				}
				else {
					return null;
				}
			}
			else {
				return this.response.data
			}
		};

		/**
		 * @return {int}
		 * @this Response
		 */
		Response.prototype.getTotal = function () {
			return this.response.total;
		};

		/**
		 * @return {*}
		 * @this Response
		 */
		Response.prototype.getError = function () {
			return this.response.error;
		};

		/**
		 * @return int
		 * @this Response
		 */
		Response.prototype.getErrorCode = function () {
			return parseInt(this.response.error.code);
		};

		/**
		 * @return string
		 * @this Response
		 */
		Response.prototype.getErrorMsg = function () {
			return this.response.error.msg;
		};

		/**
		 * @return {*}
		 * @this Response
		 */
		Response.prototype.getErrorDescription = function () {
			return this.response.error.description;
		};

		/**
		 *
		 * @return {string}
		 * @this Response
		 */
		Response.prototype.getDescription = function () {
			return this.response.description;
		};

		/**
		 *
		 * @return {{}}
		 * @this Response
		 */
		Response.prototype.getRequest = function () {
			return this.response.request;
		};

		/**
		 *
		 * @return {{}}
		 * @this Response
		 */
		Response.prototype.getSessionType = function () {
			return this.response.sessionType;
		};

		/**
		 *
		 * @return {boolean}
		 * @this Response
		 */
		Response.prototype.hasComponent = function () {
			return this.response.loadComponent !== '';
		};

		/**
		 *
		 * @return {boolean}
		 * @this Response
		 */
		Response.prototype.hasForkComponent = function () {
			return this.response.forkComponent;
		};

		/**
		 *
		 * @param callback
		 */
		Response.prototype.requireComponent = function (callback) {
			var me = this;
			callback = callback || function () {};
			if (me.response.hasOwnProperty('loadComponent')) {
				Bs.require(me.response.loadComponent, function () {
					callback(me.response.loadComponent);
				})
			}
			else {
				callback(null, me.response, me.request);
			}
		};

		/**
		 *
		 * @return {boolean}
		 * @this Response
		 */
		Response.prototype.hasError = function () {
			return this.response.success !== true;
		};

		/**
		 * @this Response
		 *
		 */
		Response.prototype.dump = function () {
			console.log(this.response);
		};

		Response.prototype.first = function () {
			return this.response.first;
		};

		Response.prototype.firstPage = function () {
			return this.response.firstPage;
		};

		Response.prototype.haveToPaginate = function () {
			return this.response.haveToPaginate;
		};

		Response.prototype.last = function () {
			return this.response.last;
		};

		Response.prototype.lastPage = function () {
			return this.response.lastPage;
		};

		Response.prototype.limit = function () {
			return this.response.limit;
		};

		Response.prototype.links = function () {
			return this.response.links;
		};

		Response.prototype.page = function () {
			return this.response.page;
		};

		Response.prototype.total = function () {
			return this.response.total;
		};

		Response.prototype.pagination = function () {
			return {
				first         : this.response.first,
				firstPage     : this.response.firstPage,
				haveToPaginate: this.response.haveToPaginate,
				last          : this.response.last,
				lastPage      : this.response.lastPage,
				limit         : this.response.limit,
				links         : this.response.links,
				page          : this.response.page,
				total         : this.response.total
			}
		};

		/**
		 * @param response
		 */
		Response.prototype.initialize = function (response) {
			response = response || {};

			var me = this;

			me.response = {
				action        : '',
				apiVersion    : '',
				data          : {},
				method        : '',
				resource      : '',
				description   : '',
				success       : false,
				error         : {
					code       : 0,
					debug      : null,
					description: '',
					msg        : ''
				},
				first         : 0,
				firstPage     : 0,
				haveToPaginate: false,
				last          : 0,
				lastPage      : 0,
				limit         : 0,
				links         : [],
				page          : 0,
				total         : 0,
				start         : 0,
				filter        : {},
				sort          : {},
				loadComponent : '',
				forkComponent : false,
				request       : {},
				sessionType   : ''
			};

			for (var line in response) {
				if (response.hasOwnProperty(line) && me.response.hasOwnProperty(line)) {
					me.response[line] = response[line];
				}
			}

			if (response.hasOwnProperty('error') && typeof response.error === 'object') {
				me.response.success = (!('error' in response));
				for (var errorLine in response.error) {
					if (response.error.hasOwnProperty(errorLine) && me.response.error.hasOwnProperty(line)) {
						me.response.error[line] = response.error[line];
					}
				}
			}
			else {
				me.response.success = true;
			}

		};

		return Response;
	}
});

'use strict';

/** @namespace Bs.Storage */

Bs.define('Bs.Storage', {
    /**
	 * @constructor
     * @return {Bs.Storage}
     */
	construct: function () {


		/**
		 * returns a StorageAlt Instance
		 *
		 */
		var _getStorageAlt = function () {

			function StorageAlt() {
				this.store = {};
			}

			/**
			 *
			 * @param key
			 * @param value
			 */
			StorageAlt.prototype.setItem = function (key, value) {
				this.store[key] = value;
			};

			/**
			 *
			 * @param key
			 * @returns {*}
			 */
			StorageAlt.prototype.getItem = function (key) {
				if (typeof this.store[key] != 'undefined') {
					return this.store[key];
				}
				else {
					return null;
				}
			};

			/**
			 *
			 * @param key
			 */
			StorageAlt.prototype.removeItem = function (key) {
				this.store[key] = undefined;
			};

			/**
			 *
			 */
			StorageAlt.prototype.clear = function () {
				this.store = {};
			};
			/**
			 *
			 */
			StorageAlt.prototype.hasOwnProperty = function (key) {
				return this.store.hasOwnProperty(key);
			};

			return new StorageAlt();
		};

		/**
		 * Says if local storage is supported by browser and R/W available
		 *
		 * @returns {boolean}
		 */
		var _isLocalStorageSupported = function () {

			if (typeof localStorage !== 'object') {
				return false;
			}
			try {
				localStorage.setItem('support', 'support');
				if(localStorage.getItem('support') !== 'support'){
					return false;
				}
				localStorage.removeItem('support');
				return true;
			} catch (error) {
				return false;
			}
		};


		/**
		 * Private object native localStorage if supported or storageAlt
		 * {object}
		 */
		var _storage;


		this.hasItem = function (key) {
			return _storage.hasOwnProperty(key);
		};


		/**
		 * Save a JSON encoded object in browser localStorage
		 * @param key
		 * @param object
		 * @returns {*}
		 */
		this.setItem = function (key, object) {
			return _storage.setItem(key, JSON.stringify(object));
		};

		/**
		 * return an object previously saved in browser localStorage
		 * @param key
		 * @returns {*}
		 */
		this.getItem = function (key) {
			var v = _storage.getItem(key);
			return (v == "undefined") ? v : JSON.parse(v);
		};

		this.removeItem = function (key) {
			return _storage.removeItem(key);
		};

		/**
		 * Clear all entries in localStorage
		 */
		this.clear = function () {
			_storage.clear();
		};


			if(_isLocalStorageSupported() === true){
				_storage = localStorage;
			}
			else{
				console.warn('Your device does not support localStorage. Some features will be disabled and you will need to sign in again if you reload the page. On iOS (iPhone, iPad) you can disable "Private browsing" in Safari to enable all the application features');
				_storage = _getStorageAlt();
			}

		return this;
	}
});

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
            }
			++count;
			loadedUrls[count] = url;
			(useImportLoad ? importLoad : linkLoad)(url, count, function () {
				dfd.resolve();
			});

			return dfd;
		};

		Stylesheet.unload = function (id) {
			//$('#' + id).remove();
		};

		return Stylesheet;
	}
});

"use strict";

Bs.define('Bs.View', {
	/**
	 *
	 */
	require  : [
		'Bs.Lang',
		'Bs.Stylesheet',
		'Bs.View.Loading'
	],
	/**
	 *
	 * @return {View}
	 */
	construct: function () {
		/**
		 * @class View
		 */
		var View = function (config) {
			var me = this,
				callback = function () {
					me.trigger('afterInitialize');
					if (me.autoRender) {
						me.render();
					}
				};
			_initialize.call(me, config).then(function () {
                var init;
                $(me).one("ready", function(){
                    me.$el.addClass("bs-view-ready");
                });
                init = me.initialize(config);
				if (init && "then" in init) {
					init.fail(function () {
						me.initializeFail.apply(me, arguments);
					}).then(function () {
						callback();
					})
				}
				else {
					callback();
				}
			});
		};

		/**
		 * Number of instance derived from this class
		 * Used to create unique id
		 * @type {number}
		 */
		View.nbInstances = 0;

		/**
		 * List of models used by this view
		 * @type {[Model]} Array of models identified by name
		 */
		View.prototype.model = null;

		/**
		 * DataBinder
		 * @type {bool}
		 */
		View.prototype.bindData = false;
		/**
		 * modelPK
		 * @type {int|string}
		 */
		View.prototype.modelPK = 0;

		/**
		 * Parameters given to the view
		 * @deprecated
		 * @type {Object}
		 */
		View.prototype.params = {};

		/**
		 * Options given to the view
		 * @type {Object}
		 */
		View.prototype.options = null;

		/**
		 * Tag of the main element of the module, will be created at the end of renderTo el
		 * @type {string}
		 */
		View.prototype.elTag = 'div';

		/**
		 * Style of the element
		 * JSON/Object syntax like {"width":"auto","height":0}
		 * @type {{}}
		 */
		View.prototype.elStyle = null;
		/**
		 *
		 * @type {number}
		 */
		View.prototype.zIndex = 0;
		/**
		 * Name Of the main HTML el, id will be generated from this property (id-1)
		 * @type {string}
		 */
		View.prototype.id = 'view';
		/**
		 * Name Of the Class
		 * @type {string}
		 */
		View.prototype.name = 'View';
		/**
		 * Name Of the Class
		 * @type {string}
		 */
		View.prototype.fullCamelName = 'view';
		/**
		 * Name of js,html,css files
		 * @type {string}
		 */
		View.prototype.fileName = 'View';
		/**
		 * Path of the Class after urlApp
		 *
		 * e.g View/MyView
		 *
		 * @type {string}
		 */
		View.prototype.urlPath = 'View';

		/**
		 * Url of the Class before path
		 *
		 * e.g http://mysite.com/templates
		 *
		 * @type {string}
		 */
		View.prototype.urlRoot = Bs.getConfig().urlApp;
		/**
		 * Element where the module will be append
		 * Accept CSS selector syntax (#myId) or DOMElement or jQuery el
		 *
		 * @type {string}
		 */
		View.prototype.renderTo = 'body';
		/**
		 * Class to add on the main element
		 * @type {string}
		 */
		View.prototype.elClass = '';

		/**
		 * HTML template.
		 *
		 * Will be inserted in elTag
		 * @type {string|Function}
		 */
		View.prototype.tpl = '';

		/**
		 * Global Store for all cached Tpl Views.
		 * @type {{}}
		 */
		View.prototype.cachedPartials = {};

		/**
		 * Contains all the script/handlebars templates included in view template
		 * @type {Object}
		 */
		View.compiledTpl = {};

		/**
		 *
		 * @type {boolean}
		 */
		View.prototype.hasTemplate = true;

		/**
		 *
		 * @type {boolean}
		 */
		View.prototype.hasStylesheet = true;
		/**
		 *
		 * @type {boolean}
		 */
		View.prototype.hasTranslation = true;
		/**
		 *
		 * @type {string}
		 */
		View.prototype.stylesheetId = null;

		/**
		 *
		 * @type {{render: string}}
		 */
		View.prototype.events = {};

		/**
		 * render and register events at the end of initialization
		 * @type {boolean}
		 */
		View.prototype.autoRender = true;
		/**
		 * auto mask
		 * @type {boolean}
		 */
		View.prototype.autoMask = true;

		/**
		 *
		 * @type {boolean}
		 */
		View.prototype.rendered = false;

		/**
		 * Array of dependencies
		 * @type {[]}
		 */
		View.prototype.require = [];

		View.prototype.cssPath = null;
		View.prototype.templatePath = null;
		View.prototype.translationPath = null;
		View.prototype.subViewList = null;
		View.prototype.subViewOptions = null;

		View.prototype.buildPartialId = function () {
			return this.fullCamelName;
		};
		/**
		 *
		 * @param param
		 * @deprecated, use object.options internally ore view.getOption()
		 * @returns {*}
		 */
		View.prototype.getParam = function (param) {
			var view = this;
			if (view.params.hasOwnProperty(param)) {
				return view.params[param];
			}
			else {
				return null;
			}
		};

		/**
		 *
		 * @returns {*}
		 */
		View.prototype.initializeFail = function () {
			var view = this;
			Bs.require('Bs.View.Alert', function () {
				Bs.View.Alert.error("", $(view.renderTo));
			});
		};

		/**
		 *
		 * @param option
		 * @return {*|null}
		 */
		View.prototype.getOption = function (option) {
			var view = this;
			if (view.options.hasOwnProperty(option)) {
				return view.options[option];
			}
			else {
				return null;
			}
		};

		/**
		 *
		 * @param key
		 * @param value
		 * @returns {View}
		 */
		View.prototype.setOption = function (key, value) {
			this.options[key] = value;
			return this;
		};

		View.prototype.initialize = function (options) {};

		/**
		 * Take an init object and set properties in class
		 * @param {object} [config]
		 */
		var _initialize = function (config) {
			config = config || {};
			var me = this,
				model, modelListToRequire = [],
				dfdRequire = new $.Deferred(),
				dfdInitialize = new $.Deferred();

			++View.nbInstances;
			me.id += '-' + (View.nbInstances);
			me.zIndex = View.nbInstances;

			// Extend view with options object
			_extend(me, me, config, false);

			// Add view id to options
			me.options.id = me.id;

			// Store component in Bs
			Bs.storeCmp(me);
			// Prepare HTML element
			me.$el = $('<' + me.elTag + ' />', {
				"id"   : me.id,
				"class": me.elClass + ' bs-view'
			});

			if (me.elStyle) {
				me.$el.css(me.elStyle);
			}

			// Add dependencies
			// if (me.bindData) {
			// 	me.require.push('Bs.DataBinder'); // removed because of async loading issue on collection rendering
			// }

			// Require models if name is given or use existing instances
			//if (options.model.length !== 1 || options.model.getClassName){
			for (var modelName in me.model) {
				if (me.model.hasOwnProperty(modelName) === false) {
					continue;
				}
				if (typeof me.model[modelName] === 'string') {
					modelName = Bs.Util.addPrefixIfMissing('Model', modelName);
					modelListToRequire.push(modelName);
					me.require.push(modelName);
				}
			}
			if (me.require.length) {
				Bs.require(me.require, function () {
					dfdRequire.resolve();
				});
			}
			else {
				dfdRequire.resolve();
			}

			$.when(dfdRequire).then(function () {
				for (var modelProp in me.model) {
					if (me.model.hasOwnProperty(modelProp) === false) {
						continue;
					}
					model = me.model[modelProp];
					if (model instanceof Bs.Model === false) {
						var modelInstance = Bs.create(model);
						delete me.model[model];
						modelInstance.createdByView = true;
						model = modelInstance;
					}
					me.model[model.getNameAsAProperty()] = model;
				}

				// main model only (modelPK is not an array for now)
				if (me.modelPK && me.getModel().createdByView) {
					$.when(me.fetchModel(me.modelPK)).then(function () {
						dfdInitialize.resolve();
					});
				}
				else {
					dfdInitialize.resolve();
				}
			});

			return dfdInitialize;
		};

		/**
		 *
		 * @param pk
		 * @param forceServerFetch
		 * @return {jQuery.Deferred}
		 */
		View.prototype.fetchModel = function (pk, forceServerFetch) {
			var me = this,
				dfd = new $.Deferred,
				model,
				signature = Bs.Model.buildSignature(me.getModel().className, pk);
			if (!forceServerFetch && Bs.Model.isInPool(signature)) {
				model = Bs.Model.getFromPool(signature);
				me.model[model.getNameAsAProperty()] = model;
				dfd.resolve();
			}
			else {
				me.getModel().fetch({
					pk  : pk,
					done: function () {
						dfd.resolve();
					},
					fail: function () {
						dfd.resolve();
						Bs.View.Modal.Alert.Error('danger.msg.notFetched');
						me.options.autoRender = false;
						throw new Error('Unable to autoFetch model');
					}
				});
			}

			return dfd;
		};

		/**
		 *
		 * @param {Model} model
		 */
		View.prototype.setModel = function (model) {
			this.model[model.getNameAsAProperty()] = model;
			this.model[model.className] = model;

			return this;
		};

		/**
		 *
		 * @param event
		 * @param callback
		 */
		View.prototype.on = function (event, callback) {
			var me = this;
			callback = callback || function () {};

			// Give a chance to execute a "on" registered after trigger
			if (me.triggeredEvents.hasOwnProperty(event)) {
				me.triggeredEvents[event].unshift(new CustomEvent(event));
				callback.apply(me, me.triggeredEvents[event]);
				delete me.triggeredEvents[event]
			}

			// Standard behavior
			$(me).on(event, function(){
				// Remove triggered event to avoid duplicate execution in some cases
				if (me.triggeredEvents.hasOwnProperty(event)) {
					delete this.triggeredEvents[event]
				}
				callback.apply(me, arguments);
			});

			return this;
		};

		/**
		 *
		 * @param event
		 * @param callback
		 */
		View.prototype.one = function (event, callback) {
			var me = this;
			callback = callback || function () {};

			// Give a chance to execute a "on" registered after trigger
			if (me.triggeredEvents.hasOwnProperty(event)) {
				me.triggeredEvents[event].unshift(new CustomEvent(event));
				callback.apply(me, me.triggeredEvents[event]);
				delete me.triggeredEvents[event]
			}

			// Standard behavior
			$(me).one(event, function(){
				// Remove triggered event to avoid duplicate execution in some cases
				if (me.triggeredEvents.hasOwnProperty(event)) {
					delete this.triggeredEvents[event]
				}
				callback.apply(me, arguments);
			});

			return this;
		};

		View.prototype.off = function (event) {
			$(this).off(event);
			if (this.triggeredEvents.hasOwnProperty(event)) {
				delete this.triggeredEvents[event]
			}
			return this;
		};

		/**
		 *
		 * @param event
		 * @param params
		 */
		View.prototype.trigger = function (event, params) {
			if (!$.isArray(params)) {
				params = [params];
			}
			this.triggeredEvents[event] = params;
			$(this).trigger(event, params);

			return this;
		};

		/**
		 *
		 * @param event
		 * @param params
		 */
		View.prototype.triggerHandler = function (event, params) {
			if (!$.isArray(params)) {
				params = [params];
			}
			this.triggeredEvents[event] = params;
			$(this).triggerHandler(event, params);

			return this;
		};

		/**
		 *
		 * @param [modelName] Name of the model to return or first model if omitted
		 * @return {Model}
		 */
		View.prototype.getModel = function (modelName) {
			if (!modelName) {
				//noinspection LoopStatementThatDoesntLoopJS
				for (var name in this.model) {
					if (this.model.hasOwnProperty(name)) {
						if (typeof this.model[name] === 'string') {
							// In case the model has been defined without 'Model.' prefix, the first string entry is still there
							continue;
						}
						return this.model[name];
					}
					return null;
				}
			}
			return this.model.hasOwnProperty(modelName) ? this.model[modelName] : null;
		};

		/**
		 *
		 * @param value
		 * @param [options]
		 * @return {*}
		 */
		View.prototype.t = function (value, options) {
			return Bs.Lang.t(this.translationPath + ':' + value, options);
		};

		/**
		 *
		 * @param compiledTplId
		 * @param {Array|Object|Collection|Function|Model}[data]
		 * @param {afterTranslate} [callback]
		 *
		 * @return {jQuery.Deferred}
		 */
		View.prototype.renderTpl = function (compiledTplId, data, callback) {
			return this.renderCompiledTpl(compiledTplId, data, callback);
		};

        View.prototype.getPartial = function (name, ns) {
            var me = this,
                dfd = new $.Deferred(),
                fullName,
                urlTemplate;

            if (!ns) {
                ns = me.tplPath;
            }
            else{
                ns = ns + "/tpl"
            }

            fullName = ns + '/' + name;

            if (Handlebars.partials.hasOwnProperty(fullName)) {
                dfd.resolve();
            }
            else {
                urlTemplate = me.urlRoot + '/' + fullName + '.partial';
                Bs.Template.loadPartial(urlTemplate, fullName).then(function () {
                    dfd.resolve();
                });
            }

            dfd.then(function () {
                if (!Handlebars.partials[fullName]) {
                    throw Error('Partial "' + fullName + '" Not found');
                }
            });

            return dfd;
        };

		View.prototype.getTpl = function (name, data, ns) {
			var me = this,
				dfd = new $.Deferred(),
				dfdFinal = new $.Deferred(),
				fullName,
				urlTemplate;

            if (!ns) {
                ns = me.tplPath;
            }
            else{
                ns = ns + "/tpl"
            }

            fullName = ns + '/' + name;

			if (Handlebars.templates.hasOwnProperty(fullName)) {
				dfd.resolve();
			}
			else {
				urlTemplate = me.urlRoot + '/' + fullName + '.handlebars';
				Bs.Template.load(urlTemplate, fullName).then(function () {
					dfd.resolve();
				});
			}

			dfd.then(function () {
				if (!data) {
					data = {};
				}
				else {
					data = _convertTplData(data)
				}

				if (!Handlebars.templates[fullName]) {
					throw Error('Template "' + fullName + '" Not found');
				}
				_prepareTranslation.call(me, Handlebars.templates[fullName](data), function (htmlAfterNs) {
					var $htmlTranslated = Bs.Lang.translateAll($(htmlAfterNs));
					dfdFinal.resolve($htmlTranslated);
				});
			});

			return dfdFinal;
		};

		View.prototype.loadTpl = function (compiledTplId) {
			var me = this, dfd = new $.Deferred(), templateName = me.tplPath + '/' + compiledTplId, urlTemplate;
			if (Handlebars.templates.hasOwnProperty(templateName)) {
				dfd.resolve();
			}
			else {
				urlTemplate = me.urlRoot + '/' + me.tplPath + '/' + compiledTplId + '.handlebars';
				Bs.Template.load(urlTemplate, templateName).then(function () {
					dfd.resolve();
				});
			}
			return dfd;
		};
		/**
		 *
		 * @param compiledTplId
		 * @param data
		 * @param callback
		 */
		View.prototype.renderCompiledTpl = function (compiledTplId, data, callback) {
			var me = this,
				dfdFinal = new $.Deferred(),
				htmlBeforeNs,
				tplFn,
				templateName = me.tplPath + '/' + compiledTplId;

			me.loadTpl(compiledTplId).then(function () {
				// No data
				if (typeof data === 'function') {
					callback = data;
					data = {};
				}
				else if (!data) {
					data = {};
				}
				else {
					data = _convertTplData(data)
				}
				callback = callback || function () { };
				tplFn = Handlebars.templates[templateName];
				if (!tplFn) {
					throw Error('Template "#' + compiledTplId + 'Tpl" not found in "' + me.name + '" view');
				}
				htmlBeforeNs = tplFn(data);
				return _prepareTranslation.call(me, htmlBeforeNs, function (htmlAfterNs) {
					var $htmlTranslated = Bs.Lang.translateAll($(htmlAfterNs));
					/**
					 * @callback afterTranslate
					 * @param {jQuery} $el jQuery selector of rendered and translated template
					 */
					callback($htmlTranslated);
					dfdFinal.resolve();
				})
			});

			return dfdFinal;
		};

		View.prototype.getTemplateHtml = function (callback) {
			var me = this, tpl;
			callback = callback || function () {};
            tpl = (typeof me.tpl === 'function') ? me.tpl(_convertTplData(me.getTplData())) : me.tpl;
			_prepareTranslation.call(me, tpl, function (tplHtml) {
				callback(tplHtml)
			});
		};

		var _renderer = function ($renderTo) {
			var me = this,
				dfd = new $.Deferred;

			$renderTo = $renderTo || $(me.renderTo);

			if (me.isRendered()) {
				console.warn('View "' + me.name + '" is already rendered');
				return dfd.resolve();
			}

			if ($renderTo.length === 0) {
				console.info($renderTo);
				throw new Error('View "' + me.name + '" cannot be rendered in renderTo element');
			}

			me.$el.appendTo($renderTo);
			me.$el.attr('data-view', true);
			me.$el.data('view', me);

			me.trigger('beforeRender');

			if (me.autoMask) {
				me.mask();
			}

			me.getTemplateHtml(function (tplHtml) {
				me.$el.append(tplHtml);
				// Register events
				me.addEvents(me.events);
				me.translate();
				me.trigger('beforeCreateSubView');
				me.createSubViews(function () {
					// TODO manage rendered with Deferred in subViews
					me.rendered = true;
					if (me.bindData) {
						me.trigger('beforeDataBind');
						me.dataBinder = Bs.create('Bs.DataBinder', {view: me});
					}
					if (me.autoMask) {
						me.unmask();
					}

					dfd.resolve();
				});
			});

			return dfd;
		};
		/**
		 * Render View in DOM
		 */
		View.prototype.render = function (renderTo) {
			var me = this;
			if (renderTo) {
				me.renderTo = $(renderTo);
			}
			return _renderer.call(this, me.renderTo).then(function () {
				me.trigger('afterRender');
			});
		};

		/**
		 * Reset View (re-render)
		 */
		View.prototype.reset = function () {
			var me = this;
			me.getTemplateHtml(function (tplHtml) {
				me.$el.html(tplHtml);
				// Register events
				//me.addEvents(me.events);
				me.translate();
				//me.trigger('beforeCreateSubView');
				me.createSubViews(function () {
					// TODO manage rendered with Deferred in subViews
					me.rendered = true;
					if (me.bindData) {
						//me.trigger('beforeDataBind');
						me.dataBinder = Bs.create('Bs.DataBinder', {view: me});
					}
					if (me.autoMask) {
						me.unmask();
					}
					me.afterRender();
				});
			});
		};

		/**
		 *
		 */
		View.prototype.translate = function () {
			var me = this;
			Bs.Lang.translateAll(me.$el);
		};

		/**
		 * Creation of subViews declared in HTML from data-attributes
		 * Supports data-create="My.View"
		 * Supports data-options='{"id":"myId","elTag":"p"}'
		 * Supports options in me.subViewOptions["Name.Of.View"]
		 *
		 * @param [callback]
		 */
		View.prototype.createSubViews = function (callback) {
			callback = callback || function () { };
			var me = this,
				$container, className, $subViews, require = [], options = [], initialOptions, queue = 0;

			$subViews = this.$el.find('[data-create]');

			if ($subViews.length === 0) {
				callback();
				return;
			}

			$subViews.each(function (index, el) {
				$container = $(el);
				className = $container.data('create');
				if (!className) {
					return true;
				}

				initialOptions = me.getSubViewOptions(className);
				initialOptions.renderTo = $container;

				// Build id of subView, automatically or specified by dev
				if ($container.data('id')) {
					initialOptions["id"] = $container.data('id');
				}

				// Model
				var dataModel = $container.data('model');
				if (dataModel) {
					if (dataModel === true) {
						initialOptions["model"] = me.getModel();
					}
					else {
						initialOptions["model"] = me.getModel().get(dataModel);
					}
				}

				// ModelPK
				var dataModelPK = $container.data('modelpk');
				if (dataModelPK) {
					initialOptions["modelPK"] = dataModelPK;
				}

				// Single option
				// TODO

				// Options
				if (typeof $container.data('options') === "object") {
					options.push($.extend({}, $container.data('options'), initialOptions));
				}
				else {
					options.push(initialOptions);
				}
				require.push(className);
			});

			queue = require.length;
			if (queue) {
				Bs.require(require, function () {
					var subView,
						dfd = new $.Deferred();
					for (var i = 0, view; view = require[i]; i++) {
						subView = Bs.create(view, options[i]);
						// TODO should be on("ready") but need to make sure all afterRender trigger a "ready" event
						subView.on('afterRender', function () {
							--queue;
							if (queue === 0) {
								dfd.resolve();
							}
						});
						me.subViewList[options[i].id || view] = subView;
					}
					$.when(dfd).then(function () {
						callback();
					});
				});
			}
			else {
				callback();
			}

		};

		/**
		 *
		 * @param [subView] specific id or class name
		 * @returns {View}
		 */
		View.prototype.getSubView = function (subView) {
			if (!subView) {
				for (var key in this.subViewList) {
					if (this.subViewList.hasOwnProperty(key) === false) {
						continue;
					}
					return this.subViewList[key];
				}
			}
			return this.subViewList[subView]
		};

		/**
		 * After full view has rendered
		 */
		View.prototype.onafterRender = function () {
			// User implemented
		};
		/**
		 * After full view has rendered
		 */
		View.prototype.afterRender = function () {
			// User implemented
			this.trigger('ready');
		};
		/**
		 * After renderTo element has been created, before view content
		 */
		View.prototype.beforeRender = function () {
			// User implemented
		};

		/**
		 * Before destruction, view still exists
		 */
		View.prototype.beforeDestroy = function () {
			// User implemented
		};

		/**
		 *
		 * @returns {boolean}
		 */
		View.prototype.isRendered = function () {
			return this.rendered === true;
		};

		View.prototype.hide = function ($el) {
			//TODO
		};

		View.prototype.show = function ($el) {
			//TODO
		};

		View.prototype.triggeredEvents = null;
		/**
		 *
		 * @param [text]
		 * @param [$el]
		 * @returns {View}
		 */
		View.prototype.mask = function (text, $el) {
			var me = this;

			$el = $el ? me.$el.find($($el)) : me.$el;

			if ($el.length === 0) {
				return me;
			}

			// Remove previous mask, usefull in case you re-mask with new text
			$el.find('.bs-view-loading').remove();

			Bs.create("Bs.View.Loading", {
				text    : text,
				renderTo: $el
			});
			return me;
		};

		/**
		 *
		 * @returns {View}
		 * @param [$el]
		 * @param noFade
		 * @param callback
		 */
		View.prototype.unmask = function ($el, noFade, callback) {
			var me = this;
			$el = $el ? me.$el.find($($el)) : me.$el;

			if (noFade) {
				$el.find('.bs-view-loading').remove();
				if (callback) {
					callback();
				}
			}
			else {
				$el.find('.bs-view-loading').fadeOut(function () {
					$(this).remove();
					if (callback) {
						callback();
					}
				});
			}
			return me;
		};

		View.prototype.close = function () {
			this.destroy();
		};

		/**
		 * Remove view from DOM
		 */
		View.prototype.destroy = function (callback) {
			var me = this, subView;
			callback = callback || function () {};

			// Model Reset
			if (me.bindData) {
				var model = me.getModel();
				if (typeof model === "object" && model !== null && model.isNew && model.isNew() === false) {
					model.reset()
				}
			}

			// Children
			if (me.isRendered()) {
				me.$el.find('[data-view]').each(function () {
					if (me === $(this).parent().closest("[data-view]").data('view')) {
						subView = $(this).data('view');
						subView.destroy.call(subView);
					}
				});
			}

			// Main view
			me.trigger('beforeDestroy');
			if (me.isRendered()) {
				me.$el.remove();
			}
			Bs.removeCmp(me.id);
			me.trigger('afterDestroy');
			me.off();
			callback();
		};

		View.prototype.formToObject = function (form) {
			var o = {};
			var a = $(form).serializeArray();
			$.each(a, function () {
				if (o[this.name] !== undefined) {
					if (!o[this.name].push) {
						o[this.name] = [o[this.name]];
					}
					o[this.name].push(this.value || '');
				} else {
					o[this.name] = this.value || '';
				}
			});
			return o;
		};

		/**
		 * Simple HTML5 InputForm Validation
		 *
		 * @param form InputForm DOM Element
		 * @param e submit event
		 *
		 * @return boolean
		 */
		View.prototype.validateForm = function (e, form) {
			var validity;

			if (!form.checkValidity) {
				console.warn('checkValidity is not supported by browser, todo implement manual check');
				e.preventDefault();
				return true;
			}
			validity = form.checkValidity();
			if (!validity) {
				$('<input type="submit">').hide().appendTo($(form)).click().remove();
			}
			e.preventDefault();

			return validity;
		};

		View.prototype.disableInputs = function () {
			this.$el.find(':input').prop('disabled', true).addClass('disabled');
		};

		View.prototype.enableInputs = function () {
			this.$el.find(':input').prop('disabled', false).removeClass('disabled');
		};

		View.prototype.selectText = function (el) {
			var range, selection;
			if (window.getSelection) {
				selection = window.getSelection();
				range = document.createRange();
				range.selectNodeContents(el);
				selection.removeAllRanges();
				selection.addRange(range);
			} else if (document.body.createTextRange) {
				range = document.body.createTextRange();
				range.moveToElementText(el);
				range.select();
			}
		};

		/**
		 *
		 * @param {Object} events
		 */
		View.prototype.addEvents = function (events) {
			var view = this,
				event,
				target,
				fnName,
				fn,
				origin;

			for (var key in events) {
				if (!events.hasOwnProperty(key)) {
					continue;
				}
				fnName = events[key];
				event = key.substr(0, key.indexOf(' '));
				target = key.substr(key.indexOf(' ') + 1);

				fn = (typeof fnName === 'function') ? fnName : view[fnName];
				if (typeof fn !== 'function') {
					console.warn('Unable to register function ' + fnName);
					console.trace();
					throw Error('Unable to register function ' + fnName);
				}
				// View event
				if (!event) { // If event is empty, assume elSelector will contains event name
					event = target;
					target = null;
					origin = $(this)
				}
				// DOM event
				else {
					origin = this.$el;
				}

				(function (view, event, fn, target, origin) {
					// LISTENER
					origin.on(event, target, function (e) {
						var args = Array.prototype.slice.call(arguments);
						args.push(this);
						fn.apply(view, args);
					});
				})(view, event, fn, target, origin);

			}
		};

		/**
		 * Return data passed to th main tpl on render
		 * Can be overriden
		 *
		 * @returns {Object}
		 */
		View.prototype.getTplData = function () {
			return this.options;
		};

		// var _isSameMethodAsParent = function(childMethod, parentMethod){
		// 	return  childMethod === parentMethod
		// };

		/**
		 *  Call View (not necessary parent, be careful, TODO rename !!!
		 * @param method
		 * @param params
		 * @return {*}
		 */
		View.prototype.callParent = function (method, params) {

			// TODO un truc qui marche
			// var parentClass, childMethod,parentMethod, cleanArgs;
			//
			// childMethod = this[method];
			// parentClass = Bs.getClass(this.extend);
			// parentMethod = parentClass.prototype[method];
			//
			// // PAS BON
			// if(this.extend === "Bs.View"){
			// 	console.log("VIEW")
			// 	return new $.Deferred().resolve();
			// }
			//
			//
			// while(_isSameMethodAsParent(childMethod, parentMethod)){
			// 	// return;
			// 	childMethod = parentMethod;
			// 	parentClass = Bs.getClass(parentClass.prototype.extend);
			// 	// PAS BON
			// 	// if(this.extend === "Bs.View"){
			// 	// 	console.log("VIEW")
			// 	// 	return new $.Deferred().resolve();
			// 	// }
			// 	parentMethod = parentClass.prototype[method]
			// }
			//
			// // Call Parent with args
			// if(params) {
			// 	cleanArgs = Array.prototype.slice.call(arguments, 1);
			// }
			// else{
			// 	cleanArgs = null;
			// }
			//
			// return parentMethod.call(this, cleanArgs);

			var result;
			// Parent has already been called, do not call again (infinite loop), call parent of parent
			if (_currentParentCallContext === this.extend) {
				_currentParentCallContext = Bs.getClass(_currentParentCallContext).prototype.extend
			}
			// Parent has never been called
			else {
				_currentParentCallContext = this.extend;
			}
			// Call Parent with args
			var cleanArgs = Array.prototype.slice.call(arguments, 1);
			result = Bs.getClass(_currentParentCallContext).prototype[method].apply(this, cleanArgs);

			if (result && "then" in result) {
				result.then(function () {
					_currentParentCallContext = null;
				})
			}
			else {
				_currentParentCallContext = null;
			}

			// Reset context, we're now outside recursion scope
			// _currentParentCallContext = null;

			return result;
		};

		/**
		 *
		 * @param urlTemplate
		 */
		View.prototype.loadAdditionalScriptTemplate = function (urlTemplate) {
			var me = this;
			urlTemplate = urlTemplate || me.urlRoot + '/' + me.urlPath + '/' + me.camelName + '.handlebars';
			return Bs.Template.load(urlTemplate, me.fullCamelName, true);
		};

		/**
		 *
		 * @param subView
		 * @param options
		 */
		View.prototype.setSubViewOptions = function (subView, options) {
			var me = this;
			me.subViewOptions[subView] = options;
			return me;
		};

		View.prototype.getSubViewOptions = function (subView) {
			var me = this;
			if (me.subViewOptions.hasOwnProperty(subView)) {
				return me.subViewOptions[subView];
			}
			return {};
		};

		/**
		 * Define a new Class derived from View
		 *
		 * @static
		 * @param className
		 * @param options
		 * @param callback
		 * @return {View}
		 */
		View.define = function (className, options, callback) {
			callback = callback || function () {};
			var parent = this,
				Surrogate = function View() { },
				View = function View() {
					return parent.apply(this, arguments);
				};

			View.define = parent.define;
			Surrogate.prototype = parent.prototype;
			View.prototype = new Surrogate;

			if (options.abstract) {
				View.prototype.hasStylesheet = false;
				View.prototype.hasTranslation = false;
				View.prototype.hasTemplate = false;
			}

			_extend(View.prototype, parent.prototype, options);

			// View.prototype.model =  $.extend(true, {}, parent.prototype.model, options.model);
			View.prototype.name = className;
			View.prototype.fullCamelName = _classNameToCamelCase(className);
			View.prototype.urlPath = View.prototype.name.replace(/\./g, "/");
			View.prototype.id = View.prototype.name.replace(/\./g, "-").toLowerCase();
			View.prototype.elClass += ' ' + View.prototype.id;
			var file = View.prototype.name.split('.');
			View.prototype.fileName = file[file.length - 1];
			View.prototype.urlRoot = (file[0] === 'Bs') ? Bs.getConfig().urlCore : Bs.getConfig().urlApp;
            View.prototype.tplPath = View.prototype.urlPath + "/tpl";

			// Translations
			if (options.translationPath === 'inherit') {
				View.prototype.translationPath = parent.prototype.translationPath
			}
			else {
				View.prototype.translationPath = options.translationPath || View.prototype.urlPath;
			}

			var f = View.prototype.fileName.charAt(0).toLowerCase();
			View.prototype.camelName = f + View.prototype.fileName.substr(1);

			// Style
			if (options.cssPath === 'inherit') {
				View.prototype.cssPath = parent.prototype.cssPath
			}
			else {
				View.prototype.cssPath = options.cssPath || (View.prototype.urlPath + '/' + View.prototype.camelName + '.css');
			}

            // Tpl
            if (options.tplPath === 'inherit') {
                View.prototype.tplPath = parent.prototype.tplPath;
            }

            if (Bs.isAsync()) {
				// Template
				var dfdTemplate;
				if (options.templatePath === 'inherit') {
					View.prototype.templatePath = parent.prototype.templatePath;
					dfdTemplate = new $.Deferred().resolve();
				}
				else {
					View.prototype.templatePath = options.templatePath || (View.prototype.urlPath + '/' + View.prototype.camelName + '.handlebars');
					dfdTemplate = _loadMainTemplate.call(View.prototype);
				}

				var dfdTranslation = _loadTranslation.call(View.prototype);
				var dfdStylesheet = _loadStylesheet.call(View.prototype);
				$.when(dfdTranslation, dfdTemplate, dfdStylesheet).then(function () {
					View.prototype.hasTranslation = true;
					View.prototype.hasTemplate = true;
					View.prototype.hasStylesheet = true;
					callback(View);
				});
			}
			else {
				var tplName;
				if (options.templatePath === 'inherit') {
					View.prototype.templatePath = parent.prototype.templatePath;
					tplName = parent.prototype.urlPath + '/' + parent.prototype.camelName
				}
				else {
					View.prototype.templatePath = options.templatePath || (View.prototype.urlPath + '/' + View.prototype.camelName + '.handlebars');
					tplName = View.prototype.urlPath + '/' + View.prototype.camelName
				}
				View.prototype.hasTranslation = true;
				View.prototype.hasTemplate = true;
				View.prototype.hasStylesheet = true;
				if (Handlebars.templates.hasOwnProperty(tplName)) {
					View.prototype.tpl = Handlebars.templates[tplName];
				}
				return View;
			}
		};

		// Private part

		var _currentParentCallContext = null;

		var _cleanModelSyntax = function (model, parent) {
			var cleanModel = {};
			// Model is an instance of Model
			if (typeof model === 'object' && model.getClassName) {
				if (typeof parent.model === 'object' && parent.model !== null && parent.model.hasOwnProperty(model.getClassName())) {
					delete parent.model[model.getClassName()];
				}
				cleanModel[model.getNameAsAProperty()] = model;
			}
			// Model is a simple string
			else {
				cleanModel[model] = model;
			}
			return cleanModel;
		};
		/**
		 *
		 * @param child {Object}
		 * @param parent {Object}
		 * @param config
		 * @private
		 */
		var _extend = function (child, parent, config) {
			var cloneConfig = $.extend({}, config);
			if (typeof config.require === 'string') {
				config.require = [config.require];
			}

            /// Transform config string/model into array
            config.model = config.model || [];
            if ($.isArray(config.model) === false) {
                config.model = [config.model];
            }
            if (config.model.length) {
                child.model = {};
            }
            else {
                // need to extend because some prototype sharing troubles (i.e. Collection.Item)
                child.model = child.model ? $.extend(true, {}, child.model) : {};
            }

            // Transform simple array into object
            for (var i = 0, modelName; modelName = config.model[i]; i++) {
                // String or model ?
                if (typeof modelName === 'object') {
                    child.model[modelName.className] = modelName;
                }
                else {
                    child.model[modelName] = modelName;
                }
            }

			child.data = $.extend(true, {}, parent.data, config.data);
			// todo : remove, use options instead
			child.params = $.extend(true, {}, parent.params, config.params);
			child.options = $.extend(true, {}, parent.options, config.options);
			child.events = $.extend(true, {}, parent.events, config.events);
			child.require = Bs.Util.arrayUnion(parent.require, config.require);
			child.triggeredEvents = {};
			child.subViewList = {};
			child.subViewOptions = {};

			// Special string extend
			if (config.elClass) {
				child.elClass += ' ' + config.elClass;
			}

			cloneConfig.options = undefined;
			cloneConfig.model = undefined;
			cloneConfig.data = undefined;
			cloneConfig.params = undefined;
			// cloneConfig.events = undefined; // Commented because it breaks some things...
			cloneConfig.require = undefined;
			cloneConfig.elClass = undefined;

			for (var key in cloneConfig) {
				if (cloneConfig.hasOwnProperty(key) === false || cloneConfig[key] === undefined || key === "events") {
					continue;
				}
				if (key in child.options) {
					if (cloneConfig[key] !== null && $.isPlainObject(cloneConfig[key])) {
						child.options[key] = $.extend(true, {}, child.options[key], cloneConfig[key]);
					} else {
						child.options[key] = cloneConfig[key];
					}
				}
				else {
					child[key] = cloneConfig[key];
				}
			}
		};

		/**
		 * @private
		 * @param el
		 * @param [callback]
		 * @return {jQuery.Deferred}
		 */
		var _prepareTranslation = function (el, callback) {
			callback = callback || function () {};

			var dfd = new $.Deferred(),
				me = this,
				requiredNs = [],
				value,
				prefixPos,
				prefix = '',
				$el = $(el),
				$wrapper = $('<div/>').html($el);

			if (this.hasTranslation === false) {
				callback($wrapper.html());
				dfd.resolve();
				return dfd;
			}

			$wrapper.find('[data-i18n]').each(function () {
				prefix = '';
				value = $(this).attr('data-i18n').split(';');

				for (var i in value) {
					if (value.hasOwnProperty(i)) {
						if (value[i].indexOf(':') === -1) {

							var currentNsValue = value[i];
							prefixPos = currentNsValue.indexOf(']');
							if (prefixPos > -1) {
								prefixPos++;
								prefix = currentNsValue.substring(0, prefixPos);
								currentNsValue = currentNsValue.substring(prefixPos);
							}

							var currentNsToken = prefix + me.translationPath + ':' + currentNsValue;
							if (i > 0) {
								$(this).attr('data-i18n', $(this).attr('data-i18n') + ';' + currentNsToken);
							} else {
								$(this).attr('data-i18n', currentNsToken);
							}
						}
						else {
							var ns = value[i].substring(0, value[i].indexOf(':'));
							prefixPos = ns.indexOf(']');
							if (prefixPos > -1) {
								prefixPos++;
								prefix = ns.substring(0, prefixPos);
								ns = ns.substring(prefixPos);
							}

							if (requiredNs.indexOf(ns) === -1) {
								requiredNs.push(ns);
							}
						}
					}
				}
			});
			if (requiredNs.length) {
				Bs.Lang.loadNamespaces(requiredNs, function () {
					callback($wrapper.html());
					dfd.resolve();
				});
			}
			else {
				callback($wrapper.html());
				dfd.resolve();
			}

			return dfd;
		};

		var _loadStylesheet = function () {
			var me = this, url;

			if (me.hasStylesheet) {
				url = me.urlRoot + '/' + me.cssPath;
				return Bs.Stylesheet.load(url);
			}
			else {
				return new $.Deferred().resolve();
			}
		};

		var _loadTranslation = function () {
			var me = this,
				dfd = new $.Deferred();

			if (me.hasTranslation) {
				Bs.Lang.loadNamespace(me.translationPath, me.urlRoot, function () {
					dfd.resolve();
				});
				return dfd;
			}
			else {
				return dfd.resolve();
			}
		};

		/**
		 * @private
		 * @returns {$.Deferred}
		 */
		var _loadMainTemplate = function () {

			var view = this,
				urlTemplate,
				tplName = view.urlPath + '/' + view.camelName,
				dfd = new $.Deferred();

			if (!view.hasTemplate) {
				dfd.resolve();
			}
			else {
				if (Handlebars.templates.hasOwnProperty(tplName)) {
					view.tpl = Handlebars.templates[tplName];
					dfd.resolve();
				}
				else {
					urlTemplate = view.urlRoot + '/' + view.templatePath;
					Bs.Template.load(urlTemplate, view.urlPath + '/' + view.camelName).then(function () {
						view.tpl = Handlebars.templates[tplName];
						dfd.resolve();
					});
				}
			}
			return dfd;
		};

		/**
		 *
		 * @param data
		 * @returns {*}
		 * @private
		 */
		var _convertTplData = function (data) {
			var convertedData;

			if (data === null) {
				return data;
			}
			// Data is a simple array
			if ($.isArray(data)) {
				return data;
			}
			// Data is a Model/Collection
			if (data.toObject) {
				return data.toObject(true);
			}
			// Data is a simple object
			convertedData = {};
			for (var key in data) {
				if (data.hasOwnProperty(key) === false || data[key] === null) {
					continue;
				}
				if (typeof data[key] === 'object') {
					if (data[key].toObject) {
						convertedData[key] = data[key].toObject(true);
					}
					else {
						convertedData[key] = data[key];
					}
				}
				else {
					convertedData[key] = data[key];
				}
			}

			return convertedData;
		};

		var _classNameToCamelCase = function (className) {
			var fullCamelName = className.replace(/\.(.)/g, function (match, group1) {
				return group1.toUpperCase();
			});
			var f = fullCamelName.charAt(0).toLowerCase();
			return f + fullCamelName.substr(1);
		};

		return View;
	}

});

"use strict";

Bs.define('Bs.View.Module', {
	extend     : 'Bs.View',
	hasTemplate: false,
	hasTranslation: false,
	hasStylesheet : false,
	options    : {
		request : null,
		response : null
	},

	getRequest: function() {
		return this.options.request;
	},

	getResponse: function() {
		return this.options.response;
	}
});

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
				},
				/**
				 * Override default "ready" behavior, prevent it,
				 * it will be fired again after modal will be shown
				 */
				'onafterInitialize': function () {
					var that = this;
					that.one('ready', function (e) {
						if (that.triggeredEvents && ('ready' in that.triggeredEvents)) {
							delete that.triggeredEvents.ready;
						}
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

	afterRender: function () {

		var me = this,
			$modal = me.$el.find('.modal');


		$modal.one('hidden.bs.modal', function () {
			me.destroy();
		});


		$modal.one('shown.bs.modal', function () {
			for (var view in me.subViewList) {
				// re-trigger previously prevented "ready" event on subViews
				if (me.subViewList.hasOwnProperty(view)) {
					// TODO, maybe we want to pass args only from view which is the main view from options.view
					me.subViewList[view].trigger('ready', me.data.readyArgs);
				}
			}
			// In case, focus first input if exists
			if (me.options.autofocus === true) {
				me.$el.find('.view-content').find(':input:not([readonly]):not([disabled])').first().focus().select();
			}
			// Draggable
			if ($.fn.draggable) {
				$(me.$el.find('.modal-content')).draggable({
					handle: '.modal-header'
				});
			}

			me.trigger('ready');
		});

		$modal.modal({
			backdrop: me.options.backdrop,
			keyboard: me.options.closable
		}).css({ 'z-index': 1051 + me.zIndex });

		$modal.data('bs.modal').$backdrop.css({ 'z-index': 1050 + me.zIndex });

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

"use strict";
Bs.define('Bs.View.Modal.Alert', {
	extend         : 'Bs.View.Modal',
	require        : ['Bs.View.Alert'],
	templatePath   : 'inherit',
	translationPath: 'inherit',
	options        : {
		type     : 'info',
		title    : 'info.title',
		msg      : "",
		translate: true
	},
	initialize     : function () {
		var me = this;
		me.options.dismissible = false;
		me.options.viewOptions = $.extend(true, {}, me.options);
		me.options.title = null;
		me.options.view = 'Bs.View.Alert';
	}
}, function () {

	Bs.View.Modal.Alert.errorPage = function (msg, translated) {
		$('body').empty().addClass('bootstrap');
		return new Bs.View.Modal.Alert({
			type     : 'danger',
			title    : 'danger.title',
			msg      : msg,
			translate: !translated
		});
	};

	Bs.View.Modal.Alert.Error = function (msg, translated) {
		return new Bs.View.Modal.Alert({
			type     : 'danger',
			title    : 'danger.title',
			msg      : msg,
			translate: !translated
		})
	};

	Bs.View.Modal.Alert.Warning = function (msg, translated) {
		return new Bs.View.Modal.Alert({
			type     : 'warning',
			title    : 'warning.title',
			msg      : msg,
			translate: !translated
		})
	};

	Bs.View.Modal.Alert.Success = function (msg, translated) {
		return new Bs.View.Modal.Alert({
			type     : 'success',
			title    : 'success.title',
			msg      : msg,
			translate: !translated
		})
	};

	Bs.View.Modal.Alert.Info = function (msg, translated) {
		return new Bs.View.Modal.Alert({
			type     : 'info',
			title    : 'info.title',
			msg      : msg,
			translate: !translated
		})
	}
});

/**
 * Created by steve on 15/09/16.
 */
"use strict";

Bs.define('Bs.View.Loading', {
	extend        : 'Bs.View',
	elClass       : 'bootstrap',
	hasTranslation: false,
	options       : {
		text: ""
	},

	afterInitialize: function () {
		if (typeof this.options.text === "object" && this.options.text !== null) {
			this.options.text = this.options.text.html();
		}
	},

	autoMask: false,
	urlRoot : Bs.getConfig().urlCore
});

"use strict";

Bs.define('Bs.View.Collection', {

	require : [
		'Bs.Collection',
		'Bs.View.Modal.Alert'
	],
	/**
	 * View.Collection is based on View
	 * To use Bs.View functions : this.constructor.prototype.[function].call(this, args);
	 */
	extend: 'Bs.View',

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
	itemView       : "",

	/**
	 *
	 */
	viewOptions: null,

	/*
	 * Store of Model instances
	 * @type {[View]}
	 */
	items: null,
	itemsByPk: null,

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
	autoFetch     : false,

	/**
	 *
	 */
	hasTemplate   : false,

	/**
	 *
	 */
	hasTranslation: false,

	/**
	 *
	 */
	hasStylesheet : false,

	data: {
		$elCollection     : null,
		$elEmptyCollection: null
	},

	initialize: function () {
		var me = this,
			dfd = new $.Deferred(),
			dfdCollection = new $.Deferred(),
			dfdView = new $.Deferred(),
			autoRenderState = me.autoRender;

		me.items = [];
		me.itemsByPk = {};
		me.autoRender = false;
		if (typeof me.collection === "string") {
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
			throw new Error("No item view defined");
		}
		Bs.require(Bs.Util.addPrefixIfMissing('View', me.itemView), function () {
			dfdView.resolve();
		});

		$.when(dfdCollection, dfdView).then(function () {
			if (me.autoFetch) {
				me.bindData = true;
				if(autoRenderState){
					me.fetchAndRender().then(function(){
						dfd.resolve();
					});
				}
				else{
					me.getCollection().fetch({done : function(){
						dfd.resolve();
					}});
				}
			}
			else {
				if(autoRenderState){
					me.render().then(function () {
						dfd.resolve();
					});
				}
				else {
					dfd.resolve();
				}
			}
		});

		return dfd;
	},

	fetchAndRender: function (fetchOptions) {
		var me = this,
			dfd = new $.Deferred();

		fetchOptions = fetchOptions || {};
		$.extend(fetchOptions, {
			done: function () {
				me.render().then(function () {
					dfd.resolve();
				});
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
				me.render().then(function () {
					dfd.resolve();
				});
			}
			else {
				me.getCollection().fetch(fetchOptions);
			}
		}
		else {
			me.render().then(function () {
				dfd.resolve();
			});
		}

		return dfd;
	},

	render: function () {
		var me = this,
			bindDataItems = me.bindData,
			dfd = new $.Deferred(),
			afterRender;

		me.bindData = false;

		// Store afterRender Code (may be overwritten in subclasses)
		afterRender = me.afterRender;
		me.afterRender = function(){
			// Empty afterRender to prevent code execution by trigger in View.prototype
		};

		Bs.View.prototype.render.call(me).then(function(){
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
						previousRemoveFn.call(me.collection, model);
						me.renderCollection();
						return model;
					}
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
	addItem : function(data, viewOptions){
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
	prependItem : function(data, viewOptions){
		var me = this;
		if (me.data.$elEmptyCollection && me.getCollection().isEmpty()) {
			me.data.$elEmptyCollection.empty();
		}
		var $tmp = $('<div></div>');
		var view = me.renderOne(me.getCollection().add(data), viewOptions, $tmp);
		me.data.$elCollection.prepend($tmp.children()[0]);
		return view
	},
	/**
	 *
	 * @param {Model} model
	 * @returns {View}
	 */
	removeItem : function(model){
		var me = this, view;
		me.getCollection().remove(model);
		view = me.itemsByPk[model.get('id')];
		view.destroy();
		if (me.data.$elEmptyCollection && me.getCollection().isEmpty()) {
			me.renderEmptyCollection();
		}

		return view;
	},
	/**
	 *
	 * @param {{}} data
	 * @param {boolean} editable
	 * @returns {View}
	 */
	addTmpItem : function(data, editable){
		var model = Bs.create(this.getCollection().model, data);
		var view =  this.renderOne(model);
		if(editable){
			return view.edit();
		}

		return view;
	},

	renderOne: function (model, viewOptions, $el) {
		var me = this;
		me.viewOptions = me.viewOptions || {};
		viewOptions = viewOptions || {};
		var options = $.extend(true, {}, me.viewOptions, viewOptions, {
			"bindData"       : me.bindData,
			"renderTo"       : $el || me.data.$elCollection,
			"model"          : model,
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
		if(model && "getPK" in model) {
			me.itemsByPk[model.getPK(true)] = view;
		}

		return view;
	},

	renderEmptyCollection: function (callback) {
		var me = this;
		callback = callback || function(){};
		if (me.emptyCollectionTemplate) {
			me.data.$elEmptyCollection.html(me.emptyCollectionTemplate);
			me.translate();
			callback();
		}
		else {
			Bs.require(me.emptyCollectionView, function (emptyCollectionView) {
				new emptyCollectionView({
					"renderTo": me.data.$elEmptyCollection,
					"options" : {
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
				"renderTo": me.data.$elEmptyCollection.empty(),
				"options" : {
					viewCollection: me
				},
				onready   : function () {
					callback();
				}
			});
		});
	},

	renderCollection: function (append) {
		var me = this,
			dfd = new $.Deferred(),
			progress = 0,
			total = 0,
			options,
			createView = function (model) {
				var view;
				options.model = model;
				view = Bs.create(Bs.Util.addPrefixIfMissing('View', me.itemView), options);
				me.items.push(view);
				if(model && "getPK" in model) {
					me.itemsByPk[model.getPK(true)] = view;
				}
				view.on("ready", function () {
					dfd.notify(view);
				});
			};

		if (!append) {
			me.items = [];
			me.itemsByPk = {};
			me.data.$elCollection.empty();
			me.data.$elEmptyCollection.empty();
		}
		if (me.getCollection().isEmpty() && (me.emptyCollectionView || me.emptyCollectionTemplate)) {
			me.renderEmptyCollection(function(){
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
					createView(me.getCollection().getAt(progress))
				}
			});

			me.viewOptions = me.viewOptions || {};
			options = $.extend(true, {}, me.viewOptions, {
				"bindData"       : me.bindData,
				"renderTo"       : me.data.$elCollection,
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
		return this.collection
	},

	/**
	 *
	 * @param callback
	 */
	each: function (callback) {
		var me = this;
		for (var i = 0, item; item = me.items[i]; i++) {
			if(callback(item, i) === false){
				break;
			}
		}
	}

});

"use strict";

Bs.define('Bs.View.Collection.Error', {
	extend       : 'Bs.View',
	hasStylesheet: false,
	urlRoot      : Bs.getConfig().urlCore,
	autoMask     : false
});

"use strict";

Bs.define('Bs.View.Collection.Empty', {
	extend       : 'Bs.View',
	hasStylesheet: false,
	urlRoot      : Bs.getConfig().urlCore,
	autoMask     : false
});

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

"use strict";

Bs.define('Bs.View.Collection.Item.Restore', {
	extend  : 'Bs.View',
	hasTranslation : false,
	hasStylesheet: false,
	hasTemplate : false,
	tpl : '<div>TODO</div>'
});
"use strict";

Bs.define('Bs.View.Alert', {
	extend       : 'Bs.View',
	hasStylesheet: false,
	autoMask     : false,
	elStyle      : {position: 'relative'},
	elClass      : "bootstrap",
	options      : {
		translate      			: true,
		translateTitle 			: true,
		icon           			: null,
		type           			: 'info',
		title          			: null,
		hasTitle       			: true,
		msg            			:	null,
		view           			: null,
		viewOptions    			: null,
		dismissible    			: true,
		autoDismissible			: false,
		cancelDismissOnHover: false,
		delay          			: 4000
	},
	data					: {
		idTimeout : null
	},

	initialize: function () {
		var me = this;
		me.callParent("initialize");
		if (!me.options.title) {
			if (me.options.type === 'default') {
				me.options.hasTitle = false;
			}
			else {
				me.options.title = me.options.type + '.title';
			}
		}

		if (!me.options.icon) {
			switch (me.options.type) {
				case 'danger':
					me.options.icon = 'fa fa-exclamation-circle';
					break;
				case 'warning':
					me.options.icon = 'fa fa-exclamation-triangle';
					break;
				case 'success':
					me.options.icon = 'fa fa-check';
					break;
				case 'info':
					me.options.icon = 'fa fa-info-circle';
					break;
				default:
					me.options.icon = "fa fa-" + me.options.type;
			}
		}
		if (me.options.type === 'danger') {
			me.options.autoDismissible = false;
		}
		if (me.options.view) {
			me.options.translate = false;
		}
		else {
			if (me.options.msg instanceof jQuery) {
				me.options.msg = $('<div></div>').html(me.options.msg).html();
				me.options.translate = false;
			}
			else {
				if ($.isArray(me.options.msg)) {
					me.options.msg = me.options.msg[0].urlPath + ':' + me.options.msg[1]
				}
				else if (!me.options.msg) {
					if (me.options.type === "success") {
						me.options.msg = Bs.Lang.t("success_");
					}
					else {
						me.options.msg = Bs.Lang.t('unknown_error');
					}
				}
			}
		}
		if ($.isArray(me.options.title)) {
			me.options.title = me.options.title[0].urlPath + ':' + me.options.title[1]
		}
	},

	render: function () {
		var me = this;
		me.callParent("render");
		me.$el.hide();

		if (me.options.view) {
			Bs.require(me.options.view, function (View) {
				var view,
					viewOptions = me.options.viewOptions || {};

				viewOptions.renderTo = me.$el.find('.content');
				view = new View(viewOptions);
				me.renderCallback();
				view.on('close', function () {
					me.trigger('close');
				});
			})
		} else {
      me.renderCallback();
    }
		me.trigger("ready");
	},

	renderCallback: function () {
		var me = this;

		me.$el.slideDown(function () {
			me.trigger('shown');
			me.$el.find('.alert-icon').fadeIn();
		});
		if (me.options.autoDismissible) {
			if(me.data.idTimeout) {
				clearTimeout(me.data.idTimeout)
			}
			me.data.idTimeout = setTimeout(function () {
				me.close();
			}, me.options.delay)
			if(me.options.cancelDismissOnHover) {
				me.$el.on('mouseover', function() {
					if(me.data.idTimeout) {
            clearTimeout(me.data.idTimeout)
            me.data.idTimeout = null;
          }
				})
			}
		}
	},

	close: function (e) {
		if (e) {
			e.preventDefault();
			e.stopPropagation();
		}
		var me = this;
		me.$el.find('.alert-icon').hide();
		this.$el.slideUp(function () {
			me.$el.remove();
		});
		return false;
	},

	events: {
		"click .close": "close"
	}

}, function () {
	Bs.View.Alert.error = function (msg, renderTo, translated) {
		return new Bs.View.Alert({
			type     : 'danger',
			title    : 'danger.title',
			msg      : msg || 'danger.msg.default',
			renderTo : renderTo || 'body',
			translate: !translated
		});
	};

	Bs.View.Alert.warning = function (msg, renderTo, translated) {
		return new Bs.View.Alert({
			type     : 'warning',
			title    : 'warning.title',
			msg      : msg,
			renderTo : renderTo || 'body',
			translate: !translated
		});
	};

	Bs.View.Alert.success = function (msg, renderTo, translated) {
		return new Bs.View.Alert({
			type     : 'success',
			title    : 'success.title',
			msg      : msg || 'success.msg.default',
			renderTo : renderTo || 'body',
			translate: !translated
		});
	};

	Bs.View.Alert.info = function (msg, renderTo, translated) {
		return new Bs.View.Alert({
			type     : 'info',
			title    : 'info.title',
			msg      : msg,
			renderTo : renderTo || 'body',
			translate: !translated
		});
	};

	Bs.View.Alert.apiProblem = function (response, renderTo) {
		console.log(response)
		if(response && response !== null && response.status && response.detail && response.title) {
			return new Bs.View.Alert({
				type          : (response.status >= 500) ? "danger" : "warning",
				msg           : response.detail,
				translate     : false,
				translateTitle: false,
				title         : response.title,
				delay         : 30000,
				renderTo      : renderTo || 'body'
			});
		}
		else {
			return Bs.View.Alert.error(null, renderTo);
		}
	}

});

"use strict";

Bs.define('Bs.View.Alert.Toast', {
	extend         : 'Bs.View.Alert',
	translationPath: 'inherit',
	options:{
		single: true
	},
	initialize: function () {
		var me = this,
			$body,
			$container;

		me.callParent('initialize');
		$body = $('body');

		$container = $body.find('#toast-container');
		if ($container.length === 0) {
			$container = $('<div id="toast-container"></div>').appendTo($body);		}

		if(me.options.single){
			$container.empty();
		}

		this.renderTo = $container;
		this.options.autoDismissible = true;
	}

}, function () {
	Bs.View.Alert.Toast.error = function (msg, translated) {
		return new Bs.View.Alert.Toast({type: 'danger', msg: msg, translate : !translated})
	};

	Bs.View.Alert.Toast.warning = function (msg, translated) {
		return new Bs.View.Alert.Toast({type: 'warning', msg: msg, translate : !translated})
	};

	Bs.View.Alert.Toast.success = function (msg, translated) {
		return new Bs.View.Alert.Toast({type: 'success', msg: msg, translate : !translated})
	};

	Bs.View.Alert.Toast.info = function (msg, translated) {
		return new Bs.View.Alert.Toast({type: 'info', msg: msg, translate : !translated})
	};

	Bs.View.Alert.Toast.default = function (msg, translated) {
		return new Bs.View.Alert.Toast({type: 'default', msg: msg, translate : !translated})
	};

	Bs.View.Alert.Toast.apiProblem = function (response) {
		if (response && response !== null && response.status && response.detail && response.title) {
			return new Bs.View.Alert.Toast({
				type          : (response.status >= 500) ? "danger" : "warning",
				msg           : response.detail,
				translate     : false,
				translateTitle: false,
				title         : response.title,
				delay         : 30000
			});
		}
		else {
			return Bs.View.Alert.Toast.error(null);
		}
	}
});

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

"use strict";
/**
 * @namespace CallbackBuilder
 */
Bs.define('Bs.Util.CallbackBuilder', {

	construct: function () {

		var CallbackBuilder = function () {
			this.callbackList = {};
		};

		CallbackBuilder.prototype = {

			/**
			 *
			 */
			callbackList: null,

			/**
			 *
			 * @param action
			 * @param data
			 * @returns {CallbackBuilder}
			 */
			add: function (action, data) {
				if (!(action in this.callbackList)) {
					// Create main "action" key ig not already exists
					this.callbackList[action] = [];
				}
				this.callbackList[action].push(data);
				return this;
			},

			/**
			 *
			 * @returns {*}
			 */
			getAll: function () {
				return this.callbackList;
			}
		};

		return CallbackBuilder;
	}
});

"use strict";

Bs.define('Bs.Util.UrlParser', {

	construct: function () {
		var UrlParser = function (options) {
			this.initialize && this.initialize.call(this, options);
		};

		UrlParser.prototype.protocol = null;
		UrlParser.prototype.hostname = null;
		UrlParser.prototype.host = null;
		UrlParser.prototype.port = null;
		UrlParser.prototype.hash = null;
		UrlParser.prototype.pathname = null;
		UrlParser.prototype.search = null;
		/**
		 *
		 * @type {Object}
		 */
		UrlParser.prototype.params = null;
		/**
		 *
		 * @return {{}|*|Object}
		 */
		UrlParser.prototype.getParams = function () {
			return this.params;
		};

		UrlParser.prototype.initialize = function (options) {
			var me = this;
			var url_search_arr,
				option_key,
				i,
				get_param,
				key,
				val,
				url_query,
				url_get_params = {},
				a = document.createElement('a'),
				default_options = {
					'url'        : window.location.href,
					'unescape'   : true,
					'convert_num': true
				};

			if (typeof options !== "object") {
				options = default_options;
			} else {
				for (option_key in default_options) {
					if (default_options.hasOwnProperty(option_key)) {
						if (options[option_key] === undefined) {
							options[option_key] = default_options[option_key];
						}
					}
				}
			}

			a.href = options.url;
			url_query = a.search.substring(1);
			url_search_arr = url_query.split('&');

			if (url_search_arr[0].length > 1) {
				for (i = 0; i < url_search_arr.length; i += 1) {
					get_param = url_search_arr[i].split("=");

					if (options.unescape) {
						key = decodeURI(get_param[0]);
						val = decodeURI(get_param[1]);
					} else {
						key = get_param[0];
						val = get_param[1];
					}

					if (options.convert_num) {
						if (val.match(/^\d+$/)) {
							val = parseInt(val, 10);
						} else if (val.match(/^\d+\.\d+$/)) {
							val = parseFloat(val);
						}
					}

					if (url_get_params[key] === undefined) {
						url_get_params[key] = val;
					} else if (typeof url_get_params[key] === "string") {
						url_get_params[key] = [url_get_params[key], val];
					} else {
						url_get_params[key].push(val);
					}

					get_param = [];
				}
			}

			me.protocol = a.protocol;
			me.hostname = a.hostname;
			me.host = a.host;
			me.port = a.port;
			me.hash = a.hash.substr(1);
			me.pathname = a.pathname;
			me.search = a.search;
			me.params = url_get_params;
		};

		/**
		 *
		 * @param {String} paramName
		 * @deprecated use getParam()
		 * @returns {*}
		 */
		UrlParser.prototype.get = function (paramName, defaultValue) {
			return this.getParam(paramName, defaultValue);
		};

		/**
		 *
		 * @param {String} paramName
		 * @param defaultValue
		 * @returns {*}
		 */
		UrlParser.prototype.getParam = function (paramName, defaultValue) {
			var me = this;
			if(defaultValue === undefined){
                defaultValue = null;
			}
			if (me.params.hasOwnProperty(paramName)) {
				return me.params[paramName];
			}

			return defaultValue;
		};

		/**
		 *
		 * @param {String} paramName
		 * @param {*} paramValue
		 * @returns UrlParser
		 */
		UrlParser.prototype.set = function (paramName, paramValue) {
			this.params[paramName] = paramValue;
			var url = window.location.href,
				newParam = paramName + "=" + paramValue,
				uriReplaced = url.replace(new RegExp("(&|\\?)" + paramName + "=[^\&|#]*"), '$1' + newParam);

			if (uriReplaced === url) {
				uriReplaced = (url.indexOf("?") != -1 ? url.split("?")[0] + "?" + newParam + "&" + url.split("?")[1]
					: (url.indexOf("#") != -1 ? url.split("#")[0] + "?" + newParam + "#" + url.split("#")[1]
						: url + '?' + newParam));
			}

			history.replaceState(null, null, uriReplaced);

			return this;
		};

		return UrlParser;
	}
}, function () {
	/**
	 *
	 * @type {Bs.Util.UrlParser}
	 * @private
	 */
	var _instance = null;

	/**
	 *
	 * @return {Bs.Util.UrlParser}
	 */
	var _getInstance = function (options) {
		options = options || {};
		if (!_instance) {
			_instance = new Bs.Util.UrlParser(options);
			return _instance;
		}
		else {
			return _instance;
		}
	};

	var _checkInstance = function () {
		if (!_instance) {
			throw Error('Initialization is not complete')
		}
	};

	Bs.Util.UrlParser.initialize = function (options) {
		_getInstance(options);
	};

	Bs.Util.UrlParser.getInstance = function () {
		_checkInstance();
		return _instance;
	};
});

+function(){Bs.Lang.addResourceBundle('en', 'Bs/View/Alert', {"info":{"title":"Information","msg":{"nothing":"Nothing to modify"}},"success":{"title":"Finished","msg":{"saved":"Saved","default":"Operation successful"}},"warning":{"title":"Warning"},"danger":{"title":"Oops","msg":{"notSaved":"Modifications not saved","notFetched":"Unexpected data received from server","default":"An error has occurred"}}})}();
+function(){Bs.Lang.addResourceBundle('en', 'Bs/View/Collection/Empty', {"nothingToDisplay":"Nothing to display..."})}();
+function(){Bs.Lang.addResourceBundle('en', 'Bs/View/Collection/Error', {"error":"Oops, something wrong happened there..."})}();
+function(){Bs.Lang.addResourceBundle('en', 'Bs/View/Modal', {})}();
+function(){Bs.Lang.addResourceBundle('es', 'Bs/View/Alert', {"info":{"title":"Información","msg":{"nothing":"Nada que modificar"}},"success":{"title":"Terminado","msg":{"saved":"Modificación realizada","default":"Operación exitosa"}},"warning":{"title":"Atención"},"danger":{"title":"Oups","msg":{"notSaved":"Los cambios no se pudieron guardar","notFetched":"El servidor no devolvió los datos esperados.","default":"Ha ocurrido un error"}}})}();
+function(){Bs.Lang.addResourceBundle('es', 'Bs/View/Collection/Empty', {"nothingToDisplay":"Nada que mostrar por ahora ..."})}();
+function(){Bs.Lang.addResourceBundle('es', 'Bs/View/Collection/Error', {"error":"Ha habido un problema..."})}();
+function(){Bs.Lang.addResourceBundle('es', 'Bs/View/Modal', {})}();
+function(){Bs.Lang.addResourceBundle('fr', 'Bs/View/Alert', {"info":{"title":"Information","msg":{"nothing":"Rien à modifier"}},"success":{"title":"Terminé","msg":{"saved":"Modification effectuée","default":"Opération réussie"}},"warning":{"title":"Attention"},"danger":{"title":"Oups","msg":{"notSaved":"Les modifications n'ont pas pu être enregistrées","notFetched":"Le serveur n'a pas renvoyé les données attendues","default":"Une erreur est survenue"}}})}();
+function(){Bs.Lang.addResourceBundle('fr', 'Bs/View/Collection/Empty', {"nothingToDisplay":"Rien à afficher pour le moment..."})}();
+function(){Bs.Lang.addResourceBundle('fr', 'Bs/View/Collection/Error', {"error":"Oups, il y a eu un problème..."})}();
+function(){Bs.Lang.addResourceBundle('fr', 'Bs/View/Modal', {})}();
+function(){Bs.Lang.addResourceBundle('nl', 'Bs/View/Alert', {"info":{"title":"Informatie","msg":{"nothing":"Niets te wijzigen"}},"success":{"title":"Klaar","msg":{"saved":"Wijziging doorgevoerd","default":"Met succes uitgevoerd"}},"warning":{"title":"Waarschuwing"},"danger":{"title":"Oops","msg":{"notSaved":"De wijzigingen konden niet opgeslagen worden","notFetched":"De server heeft de verwachte gegevens niet teruggestuurd","default":"Er is een fout opgetreden"}}})}();
+function(){Bs.Lang.addResourceBundle('nl', 'Bs/View/Collection/Empty', {"nothingToDisplay":"Momenteel niets te tonen…"})}();
+function(){Bs.Lang.addResourceBundle('nl', 'Bs/View/Collection/Error', {"error":"Oops, something wrong happened there..."})}();
+function(){Bs.Lang.addResourceBundle('nl', 'Bs/View/Modal', {})}();