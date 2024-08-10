(()=>{function O(t,n,i){return t.call.apply(t.bind,arguments)}function L(n,i,t){var e;if(n)return 2<arguments.length?(e=Array.prototype.slice.call(arguments,2),function(){var t=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(t,e),n.apply(i,t)}):function(){return n.apply(i,arguments)};throw Error()}function p(t,n,i){return(p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?O:L).apply(null,arguments)}var r=Date.now||function(){return+new Date};function D(t,n){this.a=t,this.m=n||t,this.c=this.m.document}var $=!!window.FontFace;function h(t,n,i,e){if(n=t.c.createElement(n),i)for(var o in i)i.hasOwnProperty(o)&&("style"==o?n.style.cssText=i[o]:n.setAttribute(o,i[o]));return e&&n.appendChild(t.c.createTextNode(e)),n}function c(t,n,i){(t=(t=t.c.getElementsByTagName(n)[0])||document.documentElement).insertBefore(i,t.lastChild)}function i(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t,n,i){n=n||[],i=i||[];for(var e=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var s=!1,a=0;a<e.length;a+=1)if(n[o]===e[a]){s=!0;break}s||e.push(n[o])}for(n=[],o=0;o<e.length;o+=1){for(s=!1,a=0;a<i.length;a+=1)if(e[o]===i[a]){s=!0;break}s||n.push(e[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function s(t,n){for(var i=t.className.split(/\s+/),e=0,o=i.length;e<o;e++)if(i[e]==n)return!0;return!1}function k(t){var n;return"string"==typeof t.f?t.f:"https:"==(n="about:"==(n=t.m.location.protocol)?t.a.location.protocol:n)?"https:":"http:"}function T(t,n,i){function e(){a&&o&&(a(s),a=null)}n=h(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,s=null,a=i||null;$?(n.onload=function(){o=!0,e()},n.onerror=function(){o=!0,s=Error("Stylesheet failed to load"),e()}):setTimeout(function(){o=!0,e()},0),c(t,"head",n)}function e(t,n,i,e){var o,s,a=t.c.getElementsByTagName("head")[0];return a?(o=h(t,"script",{src:n}),s=!1,o.onload=o.onreadystatechange=function(){s||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(s=!0,i&&i(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&a.removeChild(o))},a.appendChild(o),setTimeout(function(){s||(s=!0,i&&i(Error("Script load timeout")))},e||5e3),o):null}function S(){this.a=0,this.c=null}function C(t){return t.a++,function(){t.a--,o(t)}}function N(t,n){t.c=n,o(t)}function o(t){0==t.a&&t.c&&(t.c(),t.c=null)}function a(t){this.a=t||"-"}function A(t,n){this.c=t,this.f=4,this.a="n";t=(n||"n4").match(/^([nio])([1-9])$/i);t&&(this.a=t[1],this.f=parseInt(t[2],10))}function f(t){var n=[];t=t.split(/,\s*/);for(var i=0;i<t.length;i++){var e=t[i].replace(/['"]/g,"");-1!=e.indexOf(" ")||/^\d/.test(e)?n.push("'"+e+"'"):n.push(e)}return n.join(",")}function g(t){return t.a+t.f}function l(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function q(t,n){this.c=t,this.f=t.m.document.documentElement,this.h=n,this.a=new a("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function m(t){var n,i,e;t.g&&(n=s(t.f,t.a.c("wf","active")),i=[],e=[t.a.c("wf","loading")],n||i.push(t.a.c("wf","inactive")),d(t.f,i,e)),w(t,"inactive")}function w(t,n,i){t.j&&t.h[n]&&(i?t.h[n](i.c,g(i)):t.h[n]())}function H(){this.c={}}function u(t,n){this.c=t,this.f=n,this.a=h(this.c,"span",{"aria-hidden":"true"},this.f)}function v(t){c(t.c,"body",t.a)}function y(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+f(t.c)+";font-style:"+l(t)+";font-weight:"+t.f+"00;"}function b(t,n,i,e,o,s){this.g=t,this.j=n,this.a=e,this.c=i,this.f=o||3e3,this.h=s||void 0}function j(t,n,i,e,o,s,a){this.v=t,this.B=n,this.c=i,this.a=e,this.s=a||"BESbswy",this.f={},this.w=o||3e3,this.u=s||null,this.o=this.j=this.h=this.g=null,this.g=new u(this.c,this.s),this.h=new u(this.c,this.s),this.j=new u(this.c,this.s),this.o=new u(this.c,this.s),t=y(t=new A(this.a.c+",serif",g(this.a))),this.g.a.style.cssText=t,t=y(t=new A(this.a.c+",sans-serif",g(this.a))),this.h.a.style.cssText=t,t=y(t=new A("serif",g(this.a))),this.j.a.style.cssText=t,t=y(t=new A("sans-serif",g(this.a))),this.o.a.style.cssText=t,v(this.g),v(this.h),v(this.j),v(this.o)}a.prototype.c=function(t){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},b.prototype.start=function(){var o=this.c.m.document,s=this,a=r(),t=new Promise(function(i,e){!function n(){var t;r()-a>=s.f?e():o.fonts.load(l(t=s.a)+" "+t.f+"00 300px "+f(t.c),s.h).then(function(t){1<=t.length?i():setTimeout(n,25)},function(){e()})}()}),n=new Promise(function(t,n){setTimeout(n,s.f)});Promise.race([n,t]).then(function(){s.g(s.a)},function(){s.j(s.a)})};var x={D:"serif",C:"sans-serif"},n=null;function _(){var t;return null===n&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),n=!!t&&(parseInt(t[1],10)<536||536===parseInt(t[1],10)&&parseInt(t[2],10)<=11)),n}function E(t,n,i){for(var e in x)if(x.hasOwnProperty(e)&&n===t.f[x[e]]&&i===t.f[x[e]])return!0;return!1}function W(t){var n=t.g.a.offsetWidth,i=t.h.a.offsetWidth;n===t.f.serif&&i===t.f["sans-serif"]||_()&&E(t,n,i)?r()-t.A>=t.w?_()&&E(t,n,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?F(t,t.v):F(t,t.B):setTimeout(p(function(){W(this)},t),50):F(t,t.v)}function F(t,n){setTimeout(p(function(){i(this.g.a),i(this.h.a),i(this.j.a),i(this.o.a),n(this.a)},t),0)}function I(t,n,i){this.c=t,this.a=n,this.f=0,this.o=this.j=!1,this.s=i}j.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.o.a.offsetWidth,this.A=r(),W(this)};var P=null;function M(t){0==--t.f&&t.j&&(t.o?((t=t.a).g&&d(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),w(t,"active")):m(t.a))}function z(t){this.j=t,this.a=new H,this.h=0,this.f=this.g=!0}function G(t,n){this.c=t,this.a=n}function K(t,n){this.c=t,this.a=n}function R(t,n,i){this.c=t||n+"//fonts.googleapis.com/css",this.a=[],this.f=[],this.g=i||""}function U(t){this.f=t,this.a=[],this.c={}}I.prototype.g=function(t){var n=this.a;n.g&&d(n.f,[n.a.c("wf",t.c,g(t).toString(),"active")],[n.a.c("wf",t.c,g(t).toString(),"loading"),n.a.c("wf",t.c,g(t).toString(),"inactive")]),w(n,"fontactive",t),this.o=!0,M(this)},I.prototype.h=function(t){var n,i,e,o=this.a;o.g&&(n=s(o.f,o.a.c("wf",t.c,g(t).toString(),"active")),i=[],e=[o.a.c("wf",t.c,g(t).toString(),"loading")],n||i.push(o.a.c("wf",t.c,g(t).toString(),"inactive")),d(o.f,i,e)),w(o,"fontinactive",t),M(this)},z.prototype.load=function(t){this.c=new D(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes;var e=this,n=new q(this.c,t),i=t,o=[],t=i.timeout,o=((t=>{t.g&&d(t.f,[t.a.c("wf","loading")]),w(t,"loading")})(n),((t,n,i)=>{var e,o,s=[];for(e in n)n.hasOwnProperty(e)&&(o=t.c[e])&&s.push(o(n[e],i));return s})(e.a,i,e.c)),s=new I(e.c,n,t);for(e.h=o.length,n=0,i=o.length;n<i;n++)o[n].load(function(t,n,i){var h,c,f,l,u;h=s,c=t,f=n,l=i,u=0==--(t=e).h,(t.f||t.g)&&setTimeout(function(){var t=l||null,n=f||{};if(0===c.length&&u)m(h.a);else{h.f+=c.length,u&&(h.j=u);for(var i=[],e=0;e<c.length;e++){var o=c[e],s=n[o.c],a=h.a,r=o;a.g&&d(a.f,[a.a.c("wf",r.c,g(r).toString(),"loading")]),w(a,"fontloading",r),a=(P=(a=null)===P?!!window.FontFace&&(!(r=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))||42<parseInt(r[1],10)):P)?new b(p(h.g,h),p(h.h,h),h.c,o,h.s,s):new j(p(h.g,h),p(h.h,h),h.c,o,h.s,t,s),i.push(a)}for(e=0;e<i.length;e++)i[e].start()}},0)})},G.prototype.load=function(a){var r,t,n=this,h=n.a.projectId,i=n.a.version;h?(r=n.c.m,e(this.c,(t=h,i=i,k(n.c)+"//"+(n.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"")+"/"+t+".js"+(i?"?v="+i:"")),function(t){t?a([]):(r["__MonotypeConfiguration__"+h]=function(){return n.a},function t(){if(r["__mti_fntLst"+h]){var n,i=r["__mti_fntLst"+h](),e=[];if(i)for(var o=0;o<i.length;o++){var s=i[o].fontfamily;null!=i[o].fontStyle&&null!=i[o].fontWeight?(n=i[o].fontStyle+i[o].fontWeight,e.push(new A(s,n))):e.push(new A(s))}a(e)}else setTimeout(function(){t()},50)}())}).id="__MonotypeAPIScript__"+h):a([])},K.prototype.load=function(t){for(var n=this.a.urls||[],i=this.a.families||[],e=this.a.testStrings||{},o=new S,s=0,a=n.length;s<a;s++)T(this.c,n[s],C(o));var r=[];for(s=0,a=i.length;s<a;s++)if((n=i[s].split(":"))[1])for(var h=n[1].split(","),c=0;c<h.length;c+=1)r.push(new A(n[0],h[c]));else r.push(new A(n[0]));N(o,function(){t(r,e)})};var J={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},V={i:"i",italic:"i",n:"n",normal:"n"},X=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function Y(t,n){this.c=t,this.a=n}var Z={Arimo:!0,Cousine:!0,Tinos:!0};function tt(t,n){this.c=t,this.a=n}function nt(t,n){this.c=t,this.f=n,this.a=[]}Y.prototype.load=function(t){for(var n=new S,i=this.c,e=new R(this.a.api,k(i),this.a.text),o=this.a.families,s=e,a=o,r=a.length,h=0;h<r;h++){var c=a[h].split(":"),f=(3==c.length&&s.f.push(c.pop()),"");2==c.length&&""!=c[1]&&(f=":"),s.a.push(c.join(f))}for(var l=new U(o),u=l,p=u.f.length,d=0;d<p;d++){var g=u.f[d].split(":"),m=g[0].replace(/\+/g," "),w=["n4"];if(2<=g.length){var v,y,b=g[1],j=[];if(b)for(var x=(b=b.split(",")).length,_=0;_<x;_++)(y=!(y=b[_]).match(/^[\w-]+$/)||null==(v=X.exec(y.toLowerCase()))?"":[y=null==(y=v[2])||""==y?"n":V[y],v=null==(v=v[1])||""==v?"4":Q[v]||(isNaN(v)?"4":v.substr(0,1))].join(""))&&j.push(y);0<j.length&&(w=j),3==g.length&&(j=[],0<(g=(g=g[2])?g.split(","):j).length)&&(g=J[g[0]])&&(u.c[m]=g)}for(u.c[m]||(g=J[m])&&(u.c[m]=g),g=0;g<w.length;g+=1)u.a.push(new A(m,w[g]))}T(i,(t=>{if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,i=[],e=0;e<n;e++)i.push(t.a[e].replace(/ /g,"+"));return n=t.c+"?family="+i.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n})(e),C(n)),N(n,function(){t(l.a,l.c,Z)})},tt.prototype.load=function(a){var t=this.a.id,r=this.c.m;t?e(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",function(t){if(t)a([]);else if(r.Typekit&&r.Typekit.config&&r.Typekit.config.fn){t=r.Typekit.config.fn;for(var n=[],i=0;i<t.length;i+=2)for(var e=t[i],o=t[i+1],s=0;s<o.length;s++)n.push(new A(e,o[s]));try{r.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}a(n)}},2e3):a([])},nt.prototype.load=function(h){var t=this.f.id,n=this.c.m,c=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var i,e,o,s=0,a=n.fonts.length;s<a;++s){var r=n.fonts[s];c.a.push(new A(r.name,(o=e=i=void 0,i=4,e="n",o=null,(r="font-weight:"+r.weight+";font-style:"+r.style)&&((o=r.match(/(normal|oblique|italic)/i))&&o[1]&&(e=o[1].substr(0,1).toLowerCase()),o=r.match(/([1-9]00|normal|bold)/i))&&o[1]&&(/bold/i.test(o[1])?i=7:/[1-9]00/.test(o[1])&&(i=parseInt(o[1].substr(0,1),10))),e+i)))}h(c.a)},e(this.c,k(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+((n=this.c).m.location.hostname||n.a.location.hostname)+"/"+t+".js",function(t){t&&h([])})):h([])};var t=new z(window),B=(t.a.c.custom=function(t,n){return new K(n,t)},t.a.c.fontdeck=function(t,n){return new nt(n,t)},t.a.c.monotype=function(t,n){return new G(n,t)},t.a.c.typekit=function(t,n){return new tt(n,t)},t.a.c.google=function(t,n){return new Y(n,t)},{load:p(t.load,t)});"function"==typeof define&&define.amd?define(function(){return B}):"undefined"!=typeof module&&module.exports?module.exports=B:(window.WebFont=B,window.WebFontConfig&&t.load(window.WebFontConfig))})();