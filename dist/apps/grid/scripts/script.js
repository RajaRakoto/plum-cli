!function(c){function e(e){for(var t,a,r=e[0],o=e[1],s=e[2],n=0,i=[];n<r.length;n++)a=r[n],u[a]&&i.push(u[a][0]),u[a]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(c[t]=o[t]);for(p&&p(e);i.length;)i.shift()();return d.push.apply(d,s||[]),l()}function l(){for(var e,t=0;t<d.length;t++){for(var a=d[t],r=!0,o=1;o<a.length;o++){var s=a[o];0!==u[s]&&(r=!1)}r&&(d.splice(t--,1),e=n(n.s=a[0]))}return e}var a={},u={app:0},d=[];function n(e){var t;return(a[e]||(t=a[e]={i:e,l:!1,exports:{}},c[e].call(t.exports,t,t.exports,n),t.l=!0,t)).exports}n.m=c,n.c=a,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var t=(r=window.webpackJsonp=window.webpackJsonp||[]).push.bind(r);r.push=e;for(var r=r.slice(),o=0;o<r.length;o++)e(r[o]);var p=t;d.push([0,"chunk-vendors"]),l()}({0:function(e,t,a){e.exports=a("56d7")},1591:function(e,t,a){},2394:function(e){e.exports={header:{builtby:""},form:{columns:"Columns",rows:"Rows",columngap:"Columns magin",rowgap:"Rows magin",codebutton:"Get code",project:"",reset:"Reset"},modal:{header:{yourcode:"Your code",what:"Qu'est-ce que c'est ?"},copy:{title:"",clipboard:"Copy !"},button:"OK"},grid:{realcssunit:"Utilisez de vraies unités CSS !"},explain:{paragraph1:"Vous pouvez définir les nombres et unités de vos colonnes et rangées, et je générerai une grille CSS pour vous ! <strong>Déplacez le curseur dans les cases</strong> pour créer des divs à l'intérieur de la grille.",paragraph2:"Bien que ce projet puisse générer une mise en page de base pour vous, il ne constitue pas une visite complète des fonctionnalités de CSS Grid. C'est un moyen pour vous d'utiliser les fonctionnalités de CSS Grid rapidement.",paragraph3:"J'ai remarqué que beaucoup de gens n'utilisaient pas CSS Grid parce qu'ils trouvaient que c'était trop complexe à assimiler. CSS Grid a tellement de possibilités, et ce petit générateur n'en reproduit qu'une fraction. Le but de ce projet est de permettre aux gens d'être rapidement opérationnel et de créer des mises en pages plus intéressantes. ",paragraph4:"Une fois que vous aurez utilisé un peu ce générateur, je vous recommande de suivre le travail de",cssguide:"un guide CSS Grid sur CSS-Tricks",paragraph5:"pour approfondir vos connaissances sur le sujet. Il existe aussi",paragraph6:"et un petit jeu amusant appelé",paragraph7:"pour vous aider à en apprendre davantage !",contributions:"Ce projet est ouvert aux contributions !",fork:"Forkez le ici.",note:"À noter : les lecteurs d'écrans liront les divs dans l'ordre dans lequel vous les ajoutez. Gardez cela à l'esprit lorsque vous construisez une grille."},utils:{and:"et"}}},3418:function(e,t,a){},"558c":function(e,t,a){"use strict";var r=a("c1df");a.n(r).a},"56d7":function(e,t,a){"use strict";a.r(t),a("cadf"),a("551c"),a("f751"),a("097d");var t=a("2b0e"),r=(a("386d"),{}),o=(a("9fb0"),a("2877")),r=Object(o.a)(r,function(){var e=this,t=e.$createElement;return(t=e._self._c||t)("nav",[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"50",height:"50"}},[t("g",{staticClass:"logo",attrs:{"fill-rule":"nonzero"}},[t("path",{attrs:{d:"M23 23v65h65V23H23zm-1-1h67v67H22V22zM10 10v8h8v-8h-8zM9 9h10v10H9V9z"}}),t("path",{attrs:{d:"M9.146 9.854a.5.5 0 1 1 .708-.708l9 9a.5.5 0 0 1-.708.708l-9-9zM33 22h1v66.168h-1zM66 22h1v66.168h-1zM44 22h1v66.168h-1zM77 22h1v66.168h-1zM55 22h1v66.168h-1z"}}),t("path",{attrs:{d:"M88.584 34.084v-1H22.416v1zM88.584 78.084v-1H22.416v1zM88.584 56.084v-1H22.416v1zM88.584 45.084v-1H22.416v1zM89.084 67.084v-1H22.916v1zM13 18.5h1V89h-1zM18 14v-1h71v1z"}}),t("path",{attrs:{d:"M88 9h1v9h-1zM9 89v-1h9v1z"}})])]),e._v("\n GRID\n  "),t("p",{staticClass:"caveat"},[e._v("\n    "+e._s(e.$t("header.builtby"))+"\n    "),t("a",{attrs:{href:"https://twitter.com/sarah_edo",target:"_blank"}},[e._v("")])])])},[],!1,null,"1d215c44",null).exports,s={},s=(a("c123"),{components:{AppGithubCorner:Object(o.a)(s,function(){var e=this.$createElement;return(e=this._self._c||e)("a",{staticClass:"github-corner",attrs:{href:"","aria-label":"View source on GitHub"}},[e("svg",{staticStyle:{fill:"#64CEAA",color:"#192d38",position:"absolute",top:"0",border:"0",right:"0",display:"none"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[e("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),e("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),e("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},[],!1,null,"553b04e0",null).exports,AppLogo:r}}),r=Object(o.a)(s,function(){var e=this.$createElement;return(e=this._self._c||e)("header",[e("app-github-corner"),e("app-logo")],1)},[],!1,null,"7c1a213e",null).exports,n=a("768b"),s=(a("6762"),a("2fdb"),a("cebc")),i=a("2f62"),c={data:function(){return{child:{},widthfull:"widthfull",errors:{col:[],row:[]}}},computed:Object(s.a)({},Object(i.c)(["columngap","rowgap","colArr","rowArr","columns","rows","childarea"]),Object(i.b)(["rowTemplate","colTemplate","divNum"])),methods:{validateunit:function(e,t,a){e=e.target.value,/fr$/.test(e)||/px$/.test(e)||/%$/.test(e)||/em$/.test(e)||/rem$/.test(e)||/vw$/.test(e)||/vh$/.test(e)||/vmin$/.test(e)||/q$/.test(e)||/mm$/.test(e)||/cm$/.test(e)||/in$/.test(e)||/pt$/.test(e)||/pc$/.test(e)||/ex$/.test(e)||/ch$/.test(e)||/minmax/.test(e)||["auto","min-content","max-content"].includes(e)||0===parseInt(e,10)?this.errors[a].splice(this.errors[a].indexOf(t),1):this.errors[a].push(t)},delegatedTouchPlaceChild:function(e){var t=document.elementFromPoint(e.changedTouches[0].clientX,e.changedTouches[0].clientY),e="touchstart"===e.type?"s":"e";this.placeChild(t.dataset.id,e)},placeChild:function(e,t){var a,r;this.child["".concat(t,"row")]=Math.ceil(e/this.columns),this.child["".concat(t,"col")]=e-(this.child["".concat(t,"row")]-1)*this.columns,"e"===t&&(e=this.child.srow<=this.child.erow?[this.child.srow,this.child.erow]:[this.child.erow,this.child.srow],e=(t=Object(n.a)(e,2))[0],t=t[1],r=this.child.scol<=this.child.ecol?[this.child.scol,this.child.ecol]:[this.child.ecol,this.child.scol],a=(r=Object(n.a)(r,2))[0],r=r[1],e="".concat(e," / ").concat(a," / ").concat(t+1," / ").concat(r+1),this.$store.commit("addChildren",e))},removeChild:function(e){this.$store.commit("removeChildren",e)}}},c=(a("7573"),Object(o.a)(c,function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("main",[o("section",{staticClass:"colunits",style:{gridTemplateColumns:r.colTemplate,gridTemplateRows:"50px",gridColumnGap:r.columngap+"px",gridRowGap:r.rowgap+"px"}},r._l(r.colArr,function(t,a){return o("div",{key:a},[o("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.unit,expression:"col.unit",modifiers:{lazy:!0}}],class:[8<r.columns?r.widthfull:""],attrs:{"aria-label":"Grid Template Column Measurements"},domProps:{value:t.unit},on:{change:[function(e){return r.$set(t,"unit",e.target.value)},function(e){return r.validateunit(e,a,"col")}]}}),-1!==r.errors.col.indexOf(a)?o("div",{staticClass:"errors"},[r._v(r._s(r.$t("grid.realcssunit")))]):r._e()])}),0),o("section",{staticClass:"rowunits",style:{gridTemplateColumns:"50px",gridTemplateRows:r.rowTemplate,gridColumnGap:r.columngap+"px",gridRowGap:r.rowgap+"px"}},r._l(r.rowArr,function(t,a){return o("div",{key:a},[o("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.unit,expression:"row.unit",modifiers:{lazy:!0}}],attrs:{"aria-label":"Grid Template Row Measurements"},domProps:{value:t.unit},on:{change:[function(e){return r.$set(t,"unit",e.target.value)},function(e){return r.validateunit(e,a,"row")}]}}),-1!==r.errors.row.indexOf(a)?o("div",{staticClass:"errors"},[r._v(r._s(r.$t("grid.realcssunit")))]):r._e()])}),0),o("div",{attrs:{id:"gridcontainer"}},[o("section",{staticClass:"grid",style:{gridTemplateColumns:r.colTemplate,gridTemplateRows:r.rowTemplate,gridColumnGap:r.columngap+"px",gridRowGap:r.rowgap+"px"},on:{touchstart:function(e){return e.preventDefault(),r.delegatedTouchPlaceChild(e)},touchend:function(e){return e.preventDefault(),r.delegatedTouchPlaceChild(e)}}},r._l(r.divNum,function(t,e){return o("div",{key:e,class:"box"+e,attrs:{"data-id":t},on:{mousedown:function(e){return r.placeChild(t,"s")},mouseup:function(e){return r.placeChild(t,"e")}}})}),0),o("section",{staticClass:"grid gridchild",style:{gridTemplateColumns:r.colTemplate,gridTemplateRows:r.rowTemplate,gridColumnGap:r.columngap+"px",gridRowGap:r.rowgap+"px"}},r._l(r.childarea,function(e,t){return o("div",{key:e,class:"child"+t,style:{gridArea:e}},[o("button",{on:{click:function(e){return r.removeChild(t)}}},[r._v("×")])])}),0)])])},[],!1,null,"d328a46e",null).exports),l={},l=(a("a890"),Object(o.a)(l,function(){var e=this,t=e.$createElement;return(t=e._self._c||t)("section",[t("p",{domProps:{innerHTML:e._s(e.$t("explain.paragraph1"))}}),t("p",{domProps:{innerHTML:e._s(e.$t("explain.paragraph2"))}}),t("p",{domProps:{innerHTML:e._s(e.$t("explain.paragraph3"))}}),t("p",[e._v("\n    "+e._s(e.$t("explain.paragraph4"))+"\n    "),t("a",{attrs:{href:"https://twitter.com/rachelandrew",target:"_blank"}},[e._v("Rachel Andrew")]),e._v(",\n    "),t("a",{attrs:{href:"https://twitter.com/jensimmons",target:"_blank"}},[e._v("Jen Simmons")]),e._v(", "+e._s(e.$t("utils.and"))+"\n    "),t("a",{attrs:{href:"https://twitter.com/geddski",target:"_blank"}},[e._v("Dave Geddes")]),e._v(" "+e._s(e.$t("explain.paragraph5"))+"\n    "),t("a",{attrs:{href:"https://css-tricks.com/snippets/css/complete-guide-grid/",target:"_blank"}},[e._v(e._s(e.$t("explain.cssguide")))]),e._v(", "+e._s(e.$t("explain.paragraph6"))+"\n    "),t("a",{attrs:{href:"https://cssgridgarden.com/",target:"_blank"}},[e._v("Grid Garden")]),e._v(" "+e._s(e.$t("explain.paragraph7"))+"\n  ")]),t("p",[e._v(e._s(e.$t("explain.note")))]),t("p",{staticClass:"cursive"},[e._v("\n    "+e._s(e.$t("explain.contributions"))+"\n    "),t("a",{attrs:{href:"https://github.com/sdras/cssgridgenerator",target:"_blank"}},[e._v(e._s(e.$t("explain.fork")))])])])},[],!1,null,"054db666",null).exports),u=a("6c92"),d=a.n(u),u={data:function(){return{focusTrap:null}},mounted:function(){document.addEventListener("keydown",this.closeOnEsc),this.focusTrap=d()(this.$el),this.focusTrap.activate()},beforeDestroy:function(){document.removeEventListener("keydown",this.closeOnEsc),this.focusTrap.deactivate()},methods:{closeOnEsc:function(e){27==e.keyCode&&this.close()},close:function(){this.$emit("close")}}},u=(a("558c"),Object(o.a)(u,function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper",on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[e("div",{staticClass:"modal-container",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[e("header",{staticClass:"modal-header",attrs:{id:"modalTitle"}},[t._t("header",[t._v("default header")])],2),e("section",{staticClass:"modal-body",attrs:{id:"modalDescription"}},[t._t("body",[t._v("default body")])],2),e("button",{staticClass:"modal-button",attrs:{type:"button","aria-label":"Close modal"},on:{click:t.close}},[t._v(t._s(t.$t("modal.button")))])])])])])},[],!1,null,"170ed3bd",null).exports),p={data:function(){return{codeWasCopied:!1,showHtml:!1}},computed:Object(s.a)({},Object(i.c)(["columngap","rowgap","childarea"]),Object(i.b)(["rowTemplate","colTemplate"])),methods:{copy:function(){var e,t,a=this,r=this.$refs.code;document.body.createTextRange?((e=document.body.createTextRange()).moveToElementText(r),e.select()):window.getSelection&&(t=window.getSelection(),(e=document.createRange()).selectNodeContents(r),t.removeAllRanges(),t.addRange(e)),document.execCommand("copy")&&(this.codeWasCopied=!0,setTimeout(function(){a.codeWasCopied=!1},2e3))},toggleHtml:function(){this.showHtml=!this.showHtml}}};function m(e){var e=(0<arguments.length&&void 0!==e?e:[{unit:"1fr"}]).map(function(e){return e.unit}),t=[[e.shift()]],a=!0,r=!1,o=void 0;try{for(var s,n=e[Symbol.iterator]();!(a=(s=n.next()).done);a=!0){var i=s.value,c=t[t.length-1];-1!==c.indexOf(i)?c.push(i):t.push([i])}}catch(e){r=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(r)throw o}}return t}function h(e,t){var a=1<arguments.length&&void 0!==t?t:1;return e.map(function(e){return e.length===a?e.join(" "):"repeat(".concat(e.length,", ").concat(e[0],")")}).join(" ")}a("73c5"),l={components:{AppExplain:l,AppModal:u,AppCode:Object(o.a)(p,function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"group codegroup"},[r("h3",[a._v(a._s(a.$t("modal.copy.title")))]),r("div",{staticClass:"gridcode"},[r("button",{staticClass:"togglehtml",attrs:{role:"region",id:"toggleShowHtml","aria-live":"polite",type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),a.toggleHtml(e)}}},[a.showHtml?[a._v(a._s(a.$t("modal.copy.css")))]:[a._v(a._s(a.$t("modal.copy.html")))]],2),r("button",{staticClass:"copycode",attrs:{role:"region",id:"codeCopyStatus","aria-live":"polite",type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),a.copy(e)}}},[a.codeWasCopied?[a._v(a._s(a.$t("modal.copy.clipboardSuccess")))]:[a._v(a._s(a.$t("modal.copy.clipboard")))]],2),r("div",{ref:"code",attrs:{id:"code"}},[a.showHtml?r("div",[r("p",[a._v("\n          <"),r("span",{staticClass:"cname"},[a._v("div ")]),r("span",{staticClass:"cprop"},[a._v('class="parent"')]),a._v(">\n          "),r("br"),0<a.childarea.length?r("span",a._l(a.childarea,function(e,t){return r("span",{key:e},[r("span",{staticClass:"sp"},[a._v("\n                <"),r("span",{staticClass:"cname"},[a._v("div")]),r("span",{staticClass:"cprop"},[a._v(' class="div'+a._s(t+1)+'"')]),a._v(">\n                </"),r("span",{staticClass:"cname"},[a._v("div")]),a._v(">\n              ")]),r("br")])}),0):r("span",[r("br")]),a._v("\n          </"),r("span",{staticClass:"cname"},[a._v("div")]),a._v(">\n        ")])]):r("div",[r("p",[r("span",{staticClass:"cname"},[a._v(".parent")]),a._v(" {\n          "),r("br"),a._m(0),r("br"),r("span",{staticClass:"sp"},[r("span",{staticClass:"ckey"},[a._v("grid-template-columns")]),a._v(":\n            "),r("span",{staticClass:"cprop"},[a._v(a._s(a.colTemplate))]),a._v(";\n          ")]),r("br"),r("span",{staticClass:"sp"},[r("span",{staticClass:"ckey"},[a._v("grid-template-rows")]),a._v(":\n            "),r("span",{staticClass:"cprop"},[a._v(a._s(a.rowTemplate))]),a._v(";\n          ")]),r("br"),r("span",{staticClass:"sp"},[r("span",{staticClass:"ckey"},[a._v("grid-column-gap")]),a._v(":\n            "),r("span",{staticClass:"cprop"},[a._v(a._s(a.columngap)+"px;")])]),r("br"),r("span",{staticClass:"sp"},[r("span",{staticClass:"ckey"},[a._v("grid-row-gap")]),a._v(":\n            "),r("span",{staticClass:"cprop"},[a._v(a._s(a.rowgap)+"px")]),a._v(";\n          ")]),r("br"),a._v("}\n        ")]),r("p",[0<a.childarea.length?r("span",a._l(a.childarea,function(e,t){return r("span",{key:e},[r("span",[r("span",{staticClass:"cname"},[a._v(".div"+a._s(t+1))]),a._v(" {\n                "),r("span",{staticClass:"ckey"},[a._v("grid-area")]),a._v(":\n                "),r("span",{staticClass:"cprop"},[a._v(a._s(e))]),a._v("; }\n              ")]),r("br")])}),0):a._e()])])])])])},[function(){var e=this,t=e.$createElement;return(t=e._self._c||t)("span",{staticClass:"sp"},[t("span",{staticClass:"ckey"},[e._v("display")]),e._v(":\n            "),t("span",{staticClass:"cprop"},[e._v("grid")]),e._v(";\n          ")])}],!1,null,"5ac8b550",null).exports},data:function(){return{showCodeModal:!1,showExplainModal:!1}},computed:Object(s.a)({},Object(i.c)(["columngap","rowgap","columns","rows"])),watch:{columns:function(e,t){this.$store.commit("adjustArr",{newVal:e,oldVal:t,direction:"colArr"})},rows:function(e,t){this.$store.commit("adjustArr",{newVal:e,oldVal:t,direction:"rowArr"})}}},a("cc3f"),u={components:{AppHeader:r,AppGrid:c,AppForm:Object(o.a)(l,function(){var t=this,e=t.$createElement;return(e=t._self._c||e)("aside",[e("fieldset",[e("label",{attrs:{for:"columns"}},[t._v(t._s(t.$t("form.columns")))]),e("input",{attrs:{id:"columns",type:"number",min:"0",max:"12"},domProps:{value:t.columns},on:{input:function(e){return t.$store.commit("updateColumns",e.target.value)}}})]),e("fieldset",[e("label",{attrs:{for:"rows"}},[t._v(t._s(t.$t("form.rows")))]),e("input",{attrs:{id:"rows",type:"number",min:"0",max:"12"},domProps:{value:t.rows},on:{input:function(e){return t.$store.commit("updateRows",e.target.value)}}})]),e("fieldset",[e("label",{attrs:{for:"columngap"}},[t._v(t._s(t.$t("form.columngap"))+" "),e("span",{staticClass:"label-extra-info"},[t._v(t._s(t.$t("form.units")))])]),e("input",{attrs:{id:"columngap",type:"number",min:"0",max:"50"},domProps:{value:t.columngap},on:{input:function(e){return t.$store.commit("updateColumnGap",e.target.value)}}})]),e("fieldset",[e("label",{attrs:{for:"rowgap"}},[t._v(t._s(t.$t("form.rowgap"))+" "),e("span",{staticClass:"label-extra-info"},[t._v(t._s(t.$t("form.units")))])]),e("input",{attrs:{id:"rowgap",type:"number",min:"0",max:"50"},domProps:{value:t.rowgap},on:{input:function(e){return t.$store.commit("updateRowGap",e.target.value)}}})]),e("button",{on:{click:function(e){t.showCodeModal=!0}}},[t._v(t._s(t.$t("form.codebutton")))]),e("button",{attrs:{type:"reset"},on:{click:function(e){return t.$store.commit("resetGrid")}}},[t._v(t._s(t.$t("form.reset")))]),t.showCodeModal?e("app-modal",{on:{close:function(e){t.showCodeModal=!1}}},[e("h3",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("modal.header.yourcode")))]),e("div",{attrs:{slot:"body"},slot:"body"},[e("app-code")],1)]):t._e(),e("p",{staticClass:"wat",on:{click:function(e){t.showExplainModal=!0}}},[t._v(t._s(t.$t("form.project")))]),t.showExplainModal?e("app-modal",{on:{close:function(e){t.showExplainModal=!1}}},[e("h3",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("modal.header.what")))]),e("div",{attrs:{slot:"body"},slot:"body"},[e("app-explain")],1)]):t._e()],1)},[],!1,null,"21df1ba1",null).exports},created:function(){this.$store.commit("initialArrIndex",window.location.search)}},a("5c0b");var g=Object(o.a)(u,function(){var e=this.$createElement;return(e=this._self._c||e)("div",{attrs:{id:"app"}},[e("app-header"),e("section",{staticClass:"container"},[e("app-grid"),e("app-form")],1)],1)},[],!1,null,null,null).exports,v=(a("c5f6"),a("7618")),p=(a("ac4d"),a("8a81"),a("ac6a"),t.a.use(i.a),new i.a.Store({state:{columns:5,rows:5,columngap:0,rowgap:0,colArr:[],rowArr:[],childarea:[]},getters:{colTemplate:function(e){return h(e=m(e.colArr))},rowTemplate:function(e){return h(e=m(e.rowArr))},divNum:function(e){return Math.max(e.columns,0)*Math.max(e.rows,0)}},mutations:{initialArrIndex:function(e,t){if(""!==t){var a,r=new URLSearchParams(t);for(a in e){var o=r.has(a),s=Object(v.a)(e[a]);o&&"number"===s?e[a]=r.get(a):o&&"object"===s&&(e[a]=JSON.parse(r.get(a)))}}else f(e.columns,e.colArr),f(e.rows,e.rowArr)},adjustArr:function(e,t){var a=Math.max(Number(t.newVal),0),r=Math.max(Number(t.oldVal),0);if(a<r)for(var o=r-a,s=1;s<=o;s++)e[t.direction].pop();else for(var n=a-r,i=1;i<=n;i++)e[t.direction].push({unit:"1fr"})},addChildren:function(e,t){e.childarea.push(t)},removeChildren:function(e,t){e.childarea.splice(t,1)},updateColumns:function(e,t){e.columns=t},updateRows:function(e,t){e.rows=t},updateColumnGap:function(e,t){e.columngap=t},updateRowGap:function(e,t){e.rowgap=t},resetGrid:function(e,t){e.childarea=[]}}})),f=function(e,t){for(var a=1;a<=e;a++)t.push({unit:"1fr"})},s=a("a925"),r=a("e088"),c=a("d90a"),l=a("8066"),o=a("6a7b"),u=a("2394"),i=(t.a.use(s.a),window.navigator.language?window.navigator.language.substring(0,2):"en");t.a.config.productionTip=!1,a=new s.a({locale:i,fallbackLocale:"en",messages:{en:r,es:c,zh:l,pt:o,fr:u}}),new t.a({store:p,i18n:a,render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var r=a("5e27");a.n(r).a},"5e27":function(e,t,a){},"690a":function(e,t,a){},"6a7b":function(e){e.exports={header:{builtby:"construído com 🌮 por"},form:{columns:"Colunas",rows:"Linhas",columngap:"Espaçamento entre Colunas",rowgap:"Espaçamento entre Linhas",codebutton:"Poderia me ver um código?",project:"O que esse projeto faz?",reset:"Reiniciar grid"},modal:{header:{yourcode:"Seu código grid",what:"O que é isso?"},copy:{title:"Copie o código abaixo:",clipboard:"Copie para a área de transferência!",clipboardSuccess:"Código copiado!"},button:"Concluído"},grid:{realcssunit:"Use unidades CSS reais, seu bobo"},explain:{paragraph1:"Você pode selecionar o número de linhas e colunas e eu vou gerar uma grid CSS pra você! <strong>Clique e arraste dentro das caixas</strong> para criar divs dentro da grid.",paragraph2:"Apesar desse projeto poder criar um layout básico pra você, ele não é um tour completo das capacidades da CSS Grid. Ele é uma forma de você utilizar as funcionalidades da CSS Grid rapidamente.",paragraph3:"Eu percebi que várias pessoas não estavam usando a Grid porque sentiam que era complicado demais e não conseguiam entendê-la. A Grid é capaz de muitas coisas, e esse pequeno gerador só toca em uma fração das suas funcionalidades. O propósito dele é que as pessoas criem rapidamente layouts mais interessantes.",paragraph4:"Assim que você tiver utilizado um pouco o projeto, sugiro que vá conferir os recursos de ",cssguide:"Guia da CSS Grid no CSS-Tricks",paragraph5:"para entender mais profundamente. Também há um",paragraph6:"e um joguinho divertido chamado",paragraph7:"para ajudar você a aprender mais!",contributions:"Este projeto está aberto a contribuições!",fork:"Faça um fork aqui.",note:"Por favor note: Leitores de tela lerão as divs na ordem que você adicioná-las, por favor mantenha isso em mente enquanto você está construindo uma grid"},utils:{and:"e"}}},"6c23":function(e,t,a){},"6f7f":function(e,t,a){},"73c5":function(e,t,a){"use strict";var r=a("1591");a.n(r).a},7573:function(e,t,a){"use strict";var r=a("9109");a.n(r).a},8066:function(e){e.exports={header:{builtby:"built with 🌮 by"},form:{columns:"列",rows:"行",columngap:"列间距",rowgap:"行间距",codebutton:"请给我示例中的代码",project:"这个项目可以做什么？",reset:"重置布局",units:"(单位 px)"},modal:{header:{yourcode:"您的 Grid 代码",what:"这是什么？"},copy:{title:"复制以下代码：",clipboard:"复制",clipboardSuccess:"复制成功！",html:"展示 HTML",css:"展示 CSS"},button:"完成"},grid:{realcssunit:"请使用正确的 CSS 单位"},explain:{paragraph1:"您可以设置行和列的数字还有单位，我将为您生成一个 CSS Grid 网格布局！<strong>在方框中拖动</strong>来创建 div 放置在网格内。",paragraph2:"虽然这个项目可以为您提供一个基本的布局, 但是本项目不是对 CSS 网格功能的全面介绍。这只是一种快速使用 CSS Grid 网格布局功能的方法。",paragraph3:"我注意到很多人没有使用 Grid，因为他们觉得这个太复杂了，难以理解。 Grid 可以做很多事情，而这个小的生成器只涉及到了一小部分功能。 这样做的目的是让人们能够快速上手并创建更多有趣的布局。",paragraph4:"一旦你对此有所了解，我建议您可以通过以下资源，",cssguide:"CSS Grid Guide on CSS-Tricks",paragraph5:"进行更深入的了解。 还有一个",paragraph6:"和一个有趣的小游戏叫",paragraph7:"可以帮助您了解更多！",contributions:"这个项目是开源的!",fork:"请在这里 Fork",note:"请注意：读屏器将按照添加 div 的顺序读取 div，请在构建 Grid 网格布局时牢记这一点"},utils:{and:"和"}}},9109:function(e,t,a){},"9fb0":function(e,t,a){"use strict";var r=a("6f7f");a.n(r).a},a890:function(e,t,a){"use strict";var r=a("690a");a.n(r).a},c123:function(e,t,a){"use strict";var r=a("3418");a.n(r).a},c1df:function(e,t,a){},cc3f:function(e,t,a){"use strict";var r=a("6c23");a.n(r).a},d90a:function(e){e.exports={header:{builtby:"hecho con 🌮 por"},form:{columns:"Columnas",rows:"Filas",columngap:"Margen entre Columnas",rowgap:"Margen entre Filas",codebutton:"Mostrar Código",project:"¿Qué hace este proyecto?",reset:"Reiniciar cuadrícula",units:"(en px)"},modal:{header:{yourcode:"Tu código",what:"¿Qué es ésto?"},copy:{title:"Copia el siguiente código:",clipboard:"Copiar en el portapapeles",clipboardSuccess:"Código copiado!",html:"Ver HTML",css:"Ver CSS"},button:"Cerrar"},grid:{realcssunit:"Debes usar unidades reales de CSS"},explain:{paragraph1:"Puedes introducir el número y unidades de tus columnas y filas, y yo generaré el código de CSS Grid para ti! <strong>Arrastra dentro de las cajas</strong> para generar divs dentro de la cuadrícula.",paragraph2:"Aunque este proyecto puede generar un diseño básico por ti, no es un tour completo de las caracteríticas de CSS Grid sino una forma rápida de probar rápidamente sus capacidades.",paragraph3:"Me he dado cuenta de que mucha gente no está usando CSS Grid porque parece muy complicado y no consiguen entenderlo. CSS Grid puede hacer mucho más, y este generador de código sólo muestra una pequeña porción de sus posibilidades. La razón de ser de este proyecto es ayudar a la gente a empezar rápido y crear layouts más interesantes.",paragraph4:"Cuando hayas probado el proyecto, recomiendo leer algunos recursos de ",cssguide:"Guía de CSS Grid en CSS-Tricks",paragraph5:"para profundizar más. También existe una ",paragraph6:"y un divertido juego llamado",paragraph7:"para ayudarte a aprender más.",contributions:"¡Este proyecto está abierto a contribuciones!",fork:"Comprueba su código aquí",note:"Nota: Los lectores de pantalla leen los divs en el orden en el que son añadidos, ten ésto en cuenta al construir tu cuadrícula"},utils:{and:"y"}}},e088:function(e){e.exports={header:{builtby:"built with 🌮 by"},form:{columns:"Columns",rows:"Rows",columngap:"Column Gap",rowgap:"Row Gap",codebutton:"Please may I have some code",project:"What does this project do?",reset:"Reset grid",units:"(in px)"},modal:{header:{yourcode:"Your Grid Code",what:"What is this?"},copy:{title:"Copy the code below:",clipboard:"Copy to clipboard!",clipboardSuccess:"Code copied!",html:"Show HTML",css:"Show CSS"},button:"Done"},grid:{realcssunit:"Must use real CSS units, goofball"},explain:{paragraph1:"You can set the numbers, and units of your columns and rows, and I'll generate a CSS grid for you! <strong>Drag within the boxes</strong> to create divs placed within the grid.",paragraph2:"Though this project can get a basic layout started for you, this project is not a comprehensive tour of CSS Grid capabilities. It is a way for you to use CSS Grid features quickly.",paragraph3:"I noticed a lot of people weren't using Grid because they felt it was too complicated and they couldn't understand it. Grid is capable of so much, and this small generator only touches on a fraction of the features. The purpose of this is so people get up and running quickly, and create more interesting layouts.",paragraph4:"Once you work with this a bit, I suggest checking out resources by",cssguide:"CSS Grid Guide on CSS-Tricks",paragraph5:"to dive deeper. There is also a",paragraph6:"and a fun little game called",paragraph7:"to help you learn more!",contributions:"This project is open to contributions!",fork:"Fork it here.",note:"Please note: Screenreaders will read the divs in the order you add the divs in, please keep this in mind while you're building a grid"},utils:{and:"and"}}}});