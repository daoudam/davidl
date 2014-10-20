window.Modernizr=function(t,e,n){function i(t){p.cssText=t}function r(t,e){return typeof t===e}var o,a,s,l="2.6.2",c={},u=!0,f=e.documentElement,d="modernizr",h=e.createElement(d),p=h.style,g=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),m={},v=[],y=v.slice,x=function(t,n,i,r){var o,a,s,l,c=e.createElement("div"),u=e.body,h=u||e.createElement("body");if(parseInt(i,10))for(;i--;)s=e.createElement("div"),s.id=r?r[i]:d+(i+1),c.appendChild(s);return o=["&#173;",'<style id="s',d,'">',t,"</style>"].join(""),c.id=d,(u?c:h).innerHTML+=o,h.appendChild(c),u||(h.style.background="",h.style.overflow="hidden",l=f.style.overflow,f.style.overflow="hidden",f.appendChild(h)),a=n(c,t),u?c.parentNode.removeChild(c):(h.parentNode.removeChild(h),f.style.overflow=l),!!a},b={}.hasOwnProperty;s=r(b,"undefined")||r(b.call,"undefined")?function(t,e){return e in t&&r(t.constructor.prototype[e],"undefined")}:function(t,e){return b.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=y.call(arguments,1),i=function(){if(this instanceof i){var r=function(){};r.prototype=e.prototype;var o=new r,a=e.apply(o,n.concat(y.call(arguments)));return Object(a)===a?a:o}return e.apply(t,n.concat(y.call(arguments)))};return i}),m.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:x(["@media (",g.join("touch-enabled),("),d,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n};for(var _ in m)s(m,_)&&(a=_.toLowerCase(),c[a]=m[_](),v.push((c[a]?"":"no-")+a));return c.addTest=function(t,e){if("object"==typeof t)for(var i in t)s(t,i)&&c.addTest(i,t[i]);else{if(t=t.toLowerCase(),c[t]!==n)return c;e="function"==typeof e?e():e,"undefined"!=typeof u&&u&&(f.className+=" "+(e?"":"no-")+t),c[t]=e}return c},i(""),h=o=null,function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=v.elements;return"string"==typeof t?t.split(" "):t}function r(t){var e=m[t[p]];return e||(e={},g++,t[p]=g,m[g]=e),e}function o(t,n,i){if(n||(n=e),u)return n.createElement(t);i||(i=r(n));var o;return o=i.cache[t]?i.cache[t].cloneNode():h.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),o.canHaveChildren&&!d.test(t)?i.frag.appendChild(o):o}function a(t,n){if(t||(t=e),u)return t.createDocumentFragment();n=n||r(t);for(var o=n.frag.cloneNode(),a=0,s=i(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function s(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return v.shivMethods?o(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(v,e.frag)}function l(t){t||(t=e);var i=r(t);return v.shivCSS&&!c&&!i.hasCSS&&(i.hasCSS=!!n(t,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),u||s(t,i),t}var c,u,f=t.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",g=0,m={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",c="hidden"in t,u=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){c=!0,u=!0}}();var v={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:u,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:l,createElement:o,createDocumentFragment:a};t.html5=v,l(e)}(this,e),c._version=l,c._prefixes=g,c.testStyles=x,f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(u?" js "+v.join(" "):""),c}(this,this.document),function(t,e,n){function i(t){return"[object Function]"==m.call(t)}function r(t){return"string"==typeof t}function o(){}function a(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function s(){var t=v.shift();y=1,t?t.t?p(function(){("c"==t.t?d.injectCss:d.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),s()):y=0}function l(t,n,i,r,o,l,c){function u(e){if(!h&&a(f.readyState)&&(x.r=h=1,!y&&s(),f.onload=f.onreadystatechange=null,e)){"img"!=t&&p(function(){_.removeChild(f)},50);for(var i in T[n])T[n].hasOwnProperty(i)&&T[n][i].onload()}}var c=c||d.errorTimeout,f=e.createElement(t),h=0,m=0,x={t:i,s:n,e:o,a:l,x:c};1===T[n]&&(m=1,T[n]=[]),"object"==t?f.data=n:(f.src=n,f.type=t),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,m)},v.splice(r,0,x),"img"!=t&&(m||2===T[n]?(_.insertBefore(f,b?null:g),p(u,c)):T[n].push(f))}function c(t,e,n,i,o){return y=0,e=e||"j",r(t)?l("c"==e?C:w,t,e,this.i++,n,i,o):(v.splice(this.i++,0,t),1==v.length&&s()),this}function u(){var t=d;return t.loader={load:c,i:0},t}var f,d,h=e.documentElement,p=t.setTimeout,g=e.getElementsByTagName("script")[0],m={}.toString,v=[],y=0,x="MozAppearance"in h.style,b=x&&!!e.createRange().compareNode,_=b?h:g.parentNode,h=t.opera&&"[object Opera]"==m.call(t.opera),h=!!e.attachEvent&&!h,w=x?"object":h?"script":"img",C=h?"script":w,k=Array.isArray||function(t){return"[object Array]"==m.call(t)},S=[],T={},A={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};d=function(t){function e(t){var e,n,i,t=t.split("!"),r=S.length,o=t.pop(),a=t.length,o={url:o,origUrl:o,prefixes:t};for(n=0;a>n;n++)i=t[n].split("="),(e=A[i.shift()])&&(o=e(o,i));for(n=0;r>n;n++)o=S[n](o);return o}function a(t,r,o,a,s){var l=e(t),c=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(r&&(r=i(r)?r:r[t]||r[a]||r[t.split("/").pop().split("?")[0]]),l.instead?l.instead(t,r,o,a,s):(T[l.url]?l.noexec=!0:T[l.url]=1,o.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(i(r)||i(c))&&o.load(function(){u(),r&&r(l.origUrl,s,a),c&&c(l.origUrl,s,a),T[l.url]=2})))}function s(t,e){function n(t,n){if(t){if(r(t))n||(f=function(){var t=[].slice.call(arguments);d.apply(this,t),h()}),a(t,f,e,0,c);else if(Object(t)===t)for(l in s=function(){var e,n=0;for(e in t)t.hasOwnProperty(e)&&n++;return n}(),t)t.hasOwnProperty(l)&&(!n&&!--s&&(i(f)?f=function(){var t=[].slice.call(arguments);d.apply(this,t),h()}:f[l]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),h()}}(d[l])),a(t[l],f,e,l,c))}else!n&&h()}var s,l,c=!!t.test,u=t.load||t.both,f=t.callback||o,d=f,h=t.complete||o;n(c?t.yep:t.nope,!!u),u&&n(u)}var l,c,f=this.yepnope.loader;if(r(t))a(t,0,f,0);else if(k(t))for(l=0;l<t.length;l++)c=t[l],r(c)?a(c,0,f,0):k(c)?d(c):Object(c)===c&&s(c,f);else Object(t)===t&&s(t,f)},d.addPrefix=function(t,e){A[t]=e},d.addFilter=function(t){S.push(t)},d.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",f=function(){e.removeEventListener("DOMContentLoaded",f,0),e.readyState="complete"},0)),t.yepnope=u(),t.yepnope.executeStack=s,t.yepnope.injectJs=function(t,n,i,r,l,c){var u,f,h=e.createElement("script"),r=r||d.errorTimeout;h.src=t;for(f in i)h.setAttribute(f,i[f]);n=c?s:n||o,h.onreadystatechange=h.onload=function(){!u&&a(h.readyState)&&(u=1,n(),h.onload=h.onreadystatechange=null)},p(function(){u||(u=1,n(1))},r),l?h.onload():g.parentNode.insertBefore(h,g)},t.yepnope.injectCss=function(t,n,i,r,a,l){var c,r=e.createElement("link"),n=l?s:n||o;r.href=t,r.rel="stylesheet",r.type="text/css";for(c in i)r.setAttribute(c,i[c]);a||(g.parentNode.insertBefore(r,g),p(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};