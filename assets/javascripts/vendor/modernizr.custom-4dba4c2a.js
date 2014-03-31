window.Modernizr=function(t,e,n){function r(t){p.cssText=t}function i(t,e){return typeof t===e}var o,a,s,u="2.6.2",l={},c=!0,h=e.documentElement,f="modernizr",d=e.createElement(f),p=d.style,g=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),m={},y=[],v=y.slice,x=function(t,n,r,i){var o,a,s,u,l=e.createElement("div"),c=e.body,d=c||e.createElement("body");if(parseInt(r,10))for(;r--;)s=e.createElement("div"),s.id=i?i[r]:f+(r+1),l.appendChild(s);return o=["&#173;",'<style id="s',f,'">',t,"</style>"].join(""),l.id=f,(c?l:d).innerHTML+=o,d.appendChild(l),c||(d.style.background="",d.style.overflow="hidden",u=h.style.overflow,h.style.overflow="hidden",h.appendChild(d)),a=n(l,t),c?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),h.style.overflow=u),!!a},b={}.hasOwnProperty;s=i(b,"undefined")||i(b.call,"undefined")?function(t,e){return e in t&&i(t.constructor.prototype[e],"undefined")}:function(t,e){return b.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=v.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=e.prototype;var o=new i,a=e.apply(o,n.concat(v.call(arguments)));return Object(a)===a?a:o}return e.apply(t,n.concat(v.call(arguments)))};return r}),m.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:x(["@media (",g.join("touch-enabled),("),f,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n};for(var w in m)s(m,w)&&(a=w.toLowerCase(),l[a]=m[w](),y.push((l[a]?"":"no-")+a));return l.addTest=function(t,e){if("object"==typeof t)for(var r in t)s(t,r)&&l.addTest(r,t[r]);else{if(t=t.toLowerCase(),l[t]!==n)return l;e="function"==typeof e?e():e,"undefined"!=typeof c&&c&&(h.className+=" "+(e?"":"no-")+t),l[t]=e}return l},r(""),d=o=null,function(t,e){function n(t,e){var n=t.createElement("p"),r=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var t=y.elements;return"string"==typeof t?t.split(" "):t}function i(t){var e=m[t[p]];return e||(e={},g++,t[p]=g,m[g]=e),e}function o(t,n,r){if(n||(n=e),c)return n.createElement(t);r||(r=i(n));var o;return o=r.cache[t]?r.cache[t].cloneNode():d.test(t)?(r.cache[t]=r.createElem(t)).cloneNode():r.createElem(t),o.canHaveChildren&&!f.test(t)?r.frag.appendChild(o):o}function a(t,n){if(t||(t=e),c)return t.createDocumentFragment();n=n||i(t);for(var o=n.frag.cloneNode(),a=0,s=r(),u=s.length;u>a;a++)o.createElement(s[a]);return o}function s(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return y.shivMethods?o(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(y,e.frag)}function u(t){t||(t=e);var r=i(t);return y.shivCSS&&!l&&!r.hasCSS&&(r.hasCSS=!!n(t,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),c||s(t,r),t}var l,c,h=t.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",g=0,m={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",l="hidden"in t,c=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){l=!0,c=!0}}();var y={elements:h.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:h.shivCSS!==!1,supportsUnknownElements:c,shivMethods:h.shivMethods!==!1,type:"default",shivDocument:u,createElement:o,createDocumentFragment:a};t.html5=y,u(e)}(this,e),l._version=u,l._prefixes=g,l.testStyles=x,h.className=h.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(c?" js "+y.join(" "):""),l}(this,this.document),function(t,e,n){function r(t){return"[object Function]"==m.call(t)}function i(t){return"string"==typeof t}function o(){}function a(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function s(){var t=y.shift();v=1,t?t.t?p(function(){("c"==t.t?f.injectCss:f.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),s()):v=0}function u(t,n,r,i,o,u,l){function c(e){if(!d&&a(h.readyState)&&(x.r=d=1,!v&&s(),h.onload=h.onreadystatechange=null,e)){"img"!=t&&p(function(){w.removeChild(h)},50);for(var r in A[n])A[n].hasOwnProperty(r)&&A[n][r].onload()}}var l=l||f.errorTimeout,h=e.createElement(t),d=0,m=0,x={t:r,s:n,e:o,a:u,x:l};1===A[n]&&(m=1,A[n]=[]),"object"==t?h.data=n:(h.src=n,h.type=t),h.width=h.height="0",h.onerror=h.onload=h.onreadystatechange=function(){c.call(this,m)},y.splice(i,0,x),"img"!=t&&(m||2===A[n]?(w.insertBefore(h,b?null:g),p(c,l)):A[n].push(h))}function l(t,e,n,r,o){return v=0,e=e||"j",i(t)?u("c"==e?C:k,t,e,this.i++,n,r,o):(y.splice(this.i++,0,t),1==y.length&&s()),this}function c(){var t=f;return t.loader={load:l,i:0},t}var h,f,d=e.documentElement,p=t.setTimeout,g=e.getElementsByTagName("script")[0],m={}.toString,y=[],v=0,x="MozAppearance"in d.style,b=x&&!!e.createRange().compareNode,w=b?d:g.parentNode,d=t.opera&&"[object Opera]"==m.call(t.opera),d=!!e.attachEvent&&!d,k=x?"object":d?"script":"img",C=d?"script":k,S=Array.isArray||function(t){return"[object Array]"==m.call(t)},T=[],A={},E={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};f=function(t){function e(t){var e,n,r,t=t.split("!"),i=T.length,o=t.pop(),a=t.length,o={url:o,origUrl:o,prefixes:t};for(n=0;a>n;n++)r=t[n].split("="),(e=E[r.shift()])&&(o=e(o,r));for(n=0;i>n;n++)o=T[n](o);return o}function a(t,i,o,a,s){var u=e(t),l=u.autoCallback;u.url.split(".").pop().split("?").shift(),u.bypass||(i&&(i=r(i)?i:i[t]||i[a]||i[t.split("/").pop().split("?")[0]]),u.instead?u.instead(t,i,o,a,s):(A[u.url]?u.noexec=!0:A[u.url]=1,o.load(u.url,u.forceCSS||!u.forceJS&&"css"==u.url.split(".").pop().split("?").shift()?"c":n,u.noexec,u.attrs,u.timeout),(r(i)||r(l))&&o.load(function(){c(),i&&i(u.origUrl,s,a),l&&l(u.origUrl,s,a),A[u.url]=2})))}function s(t,e){function n(t,n){if(t){if(i(t))n||(h=function(){var t=[].slice.call(arguments);f.apply(this,t),d()}),a(t,h,e,0,l);else if(Object(t)===t)for(u in s=function(){var e,n=0;for(e in t)t.hasOwnProperty(e)&&n++;return n}(),t)t.hasOwnProperty(u)&&(!n&&!--s&&(r(h)?h=function(){var t=[].slice.call(arguments);f.apply(this,t),d()}:h[u]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),d()}}(f[u])),a(t[u],h,e,u,l))}else!n&&d()}var s,u,l=!!t.test,c=t.load||t.both,h=t.callback||o,f=h,d=t.complete||o;n(l?t.yep:t.nope,!!c),c&&n(c)}var u,l,h=this.yepnope.loader;if(i(t))a(t,0,h,0);else if(S(t))for(u=0;u<t.length;u++)l=t[u],i(l)?a(l,0,h,0):S(l)?f(l):Object(l)===l&&s(l,h);else Object(t)===t&&s(t,h)},f.addPrefix=function(t,e){E[t]=e},f.addFilter=function(t){T.push(t)},f.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",h=function(){e.removeEventListener("DOMContentLoaded",h,0),e.readyState="complete"},0)),t.yepnope=c(),t.yepnope.executeStack=s,t.yepnope.injectJs=function(t,n,r,i,u,l){var c,h,d=e.createElement("script"),i=i||f.errorTimeout;d.src=t;for(h in r)d.setAttribute(h,r[h]);n=l?s:n||o,d.onreadystatechange=d.onload=function(){!c&&a(d.readyState)&&(c=1,n(),d.onload=d.onreadystatechange=null)},p(function(){c||(c=1,n(1))},i),u?d.onload():g.parentNode.insertBefore(d,g)},t.yepnope.injectCss=function(t,n,r,i,a,u){var l,i=e.createElement("link"),n=u?s:n||o;i.href=t,i.rel="stylesheet",i.type="text/css";for(l in r)i.setAttribute(l,r[l]);a||(g.parentNode.insertBefore(i,g),p(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};