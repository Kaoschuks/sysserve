(self.webpackChunkSysserve=self.webpackChunkSysserve||[]).push([[1843],{5902:()=>{var t=function(){return(t=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var s in e=arguments[r])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},e=function(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""};function r(t){return n(function(t){var r=new e;r.start=0,r.end=t.length;for(var n=r,s=0,a=t.length;s<a;s++)if(t[s]===o){n.rules||(n.rules=[]);var u=n,c=u.rules[u.rules.length-1]||null;(n=new e).start=s+1,n.parent=u,n.previous=c,u.rules.push(n)}else t[s]===i&&(n.end=s+1,n=n.parent||r);return r}(t=function(t){return t.replace(a.comments,"").replace(a.port,"")}(t)),t)}function n(t,e){var r=e.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=r.trim(),t.parent){r=(r=(r=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,function(){for(var t=arguments[1],e=6-t.length;e--;)t="0"+t;return"\\"+t})}(r=e.substring(t.previous?t.previous.end:t.parent.start,t.start-1))).replace(a.multipleSpaces," ")).substring(r.lastIndexOf(";")+1);var o=t.parsedSelector=t.selector=r.trim();t.atRule=0===o.indexOf(l),t.atRule?0===o.indexOf(c)?t.type=s.MEDIA_RULE:o.match(a.keyframesRule)&&(t.type=s.KEYFRAMES_RULE,t.keyframesName=t.selector.split(a.multipleSpaces).pop()):t.type=0===o.indexOf(u)?s.MIXIN_RULE:s.STYLE_RULE}var i=t.rules;if(i)for(var p=0,f=i.length,h=void 0;p<f&&(h=i[p]);p++)n(h,e);return t}var s={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},o="{",i="}",a={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},u="--",c="@media",l="@";function p(t,e,r){t.lastIndex=0;var n=e.substring(r).match(t);if(n){var s=r+n.index;return{start:s,end:s+n[0].length}}return null}var f=/\bvar\(/,h=/\B--[\w-]+\s*:/,v=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,m=/^[\t ]+\n/gm;function d(t,e,r){var n=function(t,e){var r=p(f,t,e);if(!r)return null;var n=function(t,e){for(var r=0,n=e;n<t.length;n++){var s=t[n];if("("===s)r++;else if(")"===s&&--r<=0)return n+1}return n}(t,r.start),s=t.substring(r.end,n-1).split(","),o=s[0],i=s.slice(1);return{start:r.start,end:n,propName:o.trim(),fallback:i.length>0?i.join(",").trim():void 0}}(t,r);if(!n)return e.push(t.substring(r,t.length)),t.length;var s=n.propName,o=null!=n.fallback?S(n.fallback):void 0;return e.push(t.substring(r,n.start),function(t){return function(t,e,r){return t[e]?t[e]:r?g(r,t):""}(t,s,o)}),n.end}function g(t,e){for(var r="",n=0;n<t.length;n++){var s=t[n];r+="string"==typeof s?s:s(e)}return r}function y(t,e){for(var r=!1,n=!1,s=e;s<t.length;s++){var o=t[s];if(r)n&&'"'===o&&(r=!1),n||"'"!==o||(r=!1);else if('"'===o)r=!0,n=!0;else if("'"===o)r=!0,n=!1;else{if(";"===o)return s+1;if("}"===o)return s}}return s}function S(t){var e=0;t=function(t){for(var e="",r=0;;){var n=p(h,t,r),s=n?n.start:t.length;if(e+=t.substring(r,s),!n)break;r=y(t,s)}return e}(t=t.replace(v,"")).replace(m,"");for(var r=[];e<t.length;)e=d(t,r,e);return r}function b(t){var e={};t.forEach(function(t){t.declarations.forEach(function(t){e[t.prop]=t.value})});for(var r={},n=Object.entries(e),s=function(t){var e=!1;if(n.forEach(function(t){var n=t[0],s=g(t[1],r);s!==r[n]&&(r[n]=s,e=!0)}),!e)return"break"},o=0;o<10&&"break"!==s();o++);return r}function E(t,e){if(void 0===e&&(e=0),!t.rules)return[];var r=[];return t.rules.filter(function(t){return t.type===s.STYLE_RULE}).forEach(function(t){var n=function(t){for(var e,r=[];e=x.exec(t.trim());){var n=w(e[2]),s=n.value,o=n.important;r.push({prop:e[1].trim(),value:S(s),important:o})}return r}(t.cssText);n.length>0&&t.parsedSelector.split(",").forEach(function(t){t=t.trim(),r.push({selector:t,declarations:n,specificity:1,nu:e})}),e++}),r}var M="!important",x=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;function w(t){var e=(t=t.replace(/\s+/gim," ").trim()).endsWith(M);return e&&(t=t.substr(0,t.length-M.length).trim()),{value:t,important:e}}function k(t){var e=[];return t.forEach(function(t){e.push.apply(e,t.selectors)}),e}function C(t){var e=r(t),n=S(t);return{original:t,template:n,selectors:E(e),usesCssVars:n.length>1}}function I(t,e){if(t.some(function(t){return t.styleEl===e}))return!1;var r=C(e.textContent);return r.styleEl=e,t.push(r),!0}function R(t){var e=b(k(t));t.forEach(function(t){t.usesCssVars&&(t.styleEl.textContent=g(t.template,e))})}function A(t,e,r){return function(t,e,r){return t.replace(new RegExp(e,"g"),r)}(t,"\\."+e,"."+r)}function L(t,e){return Array.from(t.querySelectorAll("style:not([data-styles]):not([data-no-shim])")).map(function(t){return I(e,t)}).some(Boolean)}function _(t,e,r){var n=r.href;return fetch(n).then(function(t){return t.text()}).then(function(s){if(function(t){return t.indexOf("var(")>-1||T.test(t)}(s)&&r.parentNode){(function(t){return U.lastIndex=0,U.test(t)})(s)&&(s=function(t,e){var r=e.replace(/[^/]*$/,"");return t.replace(U,function(t,e){return t.replace(e,r+e)})}(s,n));var o=t.createElement("style");o.setAttribute("data-styles",""),o.textContent=s,I(e,o),r.parentNode.insertBefore(o,r),r.remove()}}).catch(function(t){console.error(t)})}var O,T=/[\s;{]--[-a-zA-Z0-9]+\s*:/m,U=/url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim,N=function(){function e(t,e){this.win=t,this.doc=e,this.count=0,this.hostStyleMap=new WeakMap,this.hostScopeMap=new WeakMap,this.globalScopes=[],this.scopesMap=new Map,this.didInit=!1}return e.prototype.i=function(){var t=this;return this.didInit||!this.win.requestAnimationFrame?Promise.resolve():(this.didInit=!0,new Promise(function(e){t.win.requestAnimationFrame(function(){(function(t,e){"undefined"!=typeof MutationObserver&&new MutationObserver(function(){L(t,e)&&R(e)}).observe(document.head,{childList:!0})})(t.doc,t.globalScopes),function(t,e){return L(t,e),function(t,e){for(var r=[],n=t.querySelectorAll('link[rel="stylesheet"][href]:not([data-no-shim])'),s=0;s<n.length;s++)r.push(_(t,e,n[s]));return Promise.all(r)}(t,e).then(function(){R(e)})}(t.doc,t.globalScopes).then(function(){return e()})})}))},e.prototype.addLink=function(t){var e=this;return _(this.doc,this.globalScopes,t).then(function(){e.updateGlobal()})},e.prototype.addGlobalStyle=function(t){I(this.globalScopes,t)&&this.updateGlobal()},e.prototype.createHostStyle=function(e,r,n,s){if(this.hostScopeMap.has(e))throw new Error("host style already created");var o=this.registerHostTemplate(n,r,s),i=this.doc.createElement("style");return i.setAttribute("data-no-shim",""),o.usesCssVars?s?(i["s-sc"]=r=o.scopeId+"-"+this.count,i.textContent="/*needs update*/",this.hostStyleMap.set(e,i),this.hostScopeMap.set(e,function(e,r){var n=e.template.map(function(t){return"string"==typeof t?A(t,e.scopeId,r):t}),s=e.selectors.map(function(n){return t(t({},n),{selector:A(n.selector,e.scopeId,r)})});return t(t({},e),{template:n,selectors:s,scopeId:r})}(o,r)),this.count++):(o.styleEl=i,o.usesCssVars||(i.textContent=g(o.template,{})),this.globalScopes.push(o),this.updateGlobal(),this.hostScopeMap.set(e,o)):i.textContent=n,i},e.prototype.removeHost=function(t){var e=this.hostStyleMap.get(t);e&&e.remove(),this.hostStyleMap.delete(t),this.hostScopeMap.delete(t)},e.prototype.updateHost=function(t){var e=this.hostScopeMap.get(t);if(e&&e.usesCssVars&&e.isScoped){var r=this.hostStyleMap.get(t);if(r){var n=b(function(t,e,r){var n=[],s=function(t,e){for(var r=[];e;){var n=t.get(e);n&&r.push(n),e=e.parentElement}return r}(e,t);return r.forEach(function(t){return n.push(t)}),s.forEach(function(t){return n.push(t)}),function(t){return t.sort(function(t,e){return t.specificity===e.specificity?t.nu-e.nu:t.specificity-e.specificity}),t}(k(n).filter(function(e){return function(t,e){return":root"===e||"html"===e||t.matches(e)}(t,e.selector)}))}(t,this.hostScopeMap,this.globalScopes));r.textContent=g(e.template,n)}}},e.prototype.updateGlobal=function(){R(this.globalScopes)},e.prototype.registerHostTemplate=function(t,e,r){var n=this.scopesMap.get(e);return n||((n=C(t)).scopeId=e,n.isScoped=r,this.scopesMap.set(e,n)),n},e}();!(O="undefined"!=typeof window&&window)||O.__cssshim||O.CSS&&O.CSS.supports&&O.CSS.supports("color","var(--c)")||(O.__cssshim=new N(O,O.document))}}]);