(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/mTN":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("ZtVM");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.storeName=t,this.defaultValue=r}var t,r,a;return t=e,(r=[{key:"get",value:function(){var e=this.storage.getItem(this.storeName)||"",t=e?JSON.parse(e):this.defaultValue;return o({},this.defaultValue,{},t)}},{key:"getKey",value:function(e){var t,r=this.storage.getItem(this.storeName)||"",a=r?JSON.parse(r):this.defaultValue;return null!==(t=(0,n.prop)(a,e))&&void 0!==t?t:(0,n.prop)(this.defaultValue,e)}},{key:"set",value:function(e){var t=o({},this.get(),{},e);return this.storage.setItem(this.storeName,JSON.stringify(t)),t}},{key:"replace",value:function(e){var t=JSON.stringify(e);return this.storage.setItem(this.storeName,t),this.get()}},{key:"upgrade",value:function(){for(var e=this.get(),t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var a=r.reduce((function(e,t){return t(e)}),e);this.replace(a)}},{key:"storage",get:function(){return"undefined"!=typeof localStorage?localStorage:{getItem:function(e){return""},setItem:function(e,t){}}}}])&&u(t.prototype,r),a&&u(t,a),e}();t.default=c},"23Ag":function(e,t,r){"use strict";function n(e,t){var r=e.statistics,n=t.statistics;return n.average-r.average||t.rating-e.rating||n.mode-r.mode||e.title.localeCompare(t.title)||0}r.d(t,"a",(function(){return n}))},"2E55":function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e){var t="function"==typeof Map?new Map:void 0;return(o=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return u(e,arguments,l(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),c(n,e)})(e)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e,t,r){return(u=i()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&c(a,r.prototype),a}).apply(null,arguments)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;new Map([[0,"An error occurred."],[1,'Unsupported hex format. Make sure you include the leading "#" symbol.']]);var s=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=a(this,l(t).call(this,"An error occurred. Code: ".concat(e))),a(r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),t}(o(Error));t.default=s},"58M3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(e){var t,r=e[0]/255,n=e[1]/255,a=e[2]/255,o=e[3],i=Math.max(r,n,a),u=Math.min(r,n,a),c=(i+u)/2;if(i===u)return void 0!==o?[0,0,c,o]:[0,0,c];var l=i-u,s=c>.5?l/(2-i-u):l/(i+u);switch(i){case r:t=(n-a)/l+(n<a?6:0);break;case n:t=(a-r)/l+2;break;case a:default:t=(r-n)/l+4}if(t*=60,void 0!==o)return[t,s,c,o];return[t,s,c]}(function(e){if(e.match(i))return[o(e.substr(1,2)),o(e.substr(3,2)),o(e.substr(5,2))];if(e.match(u)){var t=parseFloat((parseInt(e.substr(7,2),16)/255).toFixed(2));return[o(e.substr(1,2)),o(e.substr(3,2)),o(e.substr(5,2)),t]}if(e.match(c))return e.slice(1).split("").map((function(e){return o(e.repeat(2))}));if(e.match(l)){var r=parseFloat((parseInt(e.slice(-1).repeat(2),16)/255).toFixed(2));return[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(n=e.slice(1,-1).split("").map((function(e){return o(e.repeat(2))})))||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}(),[r])}var n;throw new a.default(1)}(e))};var n,a=(n=r("2E55"))&&n.__esModule?n:{default:n};var o=function(e){return parseInt(e,16)},i=/^#[a-fA-F0-9]{6}$/,u=/^#[a-fA-F0-9]{8}$/,c=/^#[a-fA-F0-9]{3}$/,l=/^#[a-fA-F0-9]{4}$/},"8tv6":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"lighten",{enumerable:!0,get:function(){return n.lighten}}),Object.defineProperty(t,"darken",{enumerable:!0,get:function(){return n.darken}}),t.zIndexes=t.uiMessaging=t.ratingColours=t.tabControlBorderBottomColour=t.tabControlBorderColour=t.sidebarWidthCollapsed=t.sidebarWidthOpen=t.spinnerColour4=t.spinnerColour3=t.spinnerColour2=t.spinnerColour1=t.headerHeight=t.fileUploaderBorderColourFocused=t.fileUploaderBorderColour=t.dropdownMenuBackground=t.dateSelectorErrorMessageColour=t.calendarButtonBorderColour=t.calendarSelectedDayColour=t.calendarSelectedDayBackground=t.calendarViewShiftButtonBackground=t.disabledColour=t.disabledBackground=t.anchorColourHover=t.anchorColour=void 0;var n=r("le18");t.anchorColour="#0000ee";var a=(0,n.lighten)(15,"#0000ee");t.anchorColourHover=a;t.disabledBackground="#ccc";t.disabledColour="#666";t.calendarViewShiftButtonBackground="#fff";t.calendarSelectedDayBackground="#674ea7";t.calendarSelectedDayColour="#fff";t.calendarButtonBorderColour="#efefef";t.dateSelectorErrorMessageColour="#f00";t.dropdownMenuBackground="#fff";t.fileUploaderBorderColour="#ccc";t.fileUploaderBorderColourFocused="#000";t.headerHeight="50px";t.spinnerColour1="#f00";t.spinnerColour2="#0f0";t.spinnerColour3="#00f";t.spinnerColour4="#f00";t.sidebarWidthOpen="200px";t.sidebarWidthCollapsed="50px";t.tabControlBorderColour="#ccc";t.tabControlBorderBottomColour="#fff";var o=new Map([["low","#100c08"],["average","#cc6633"],["good","#cccccc"],["great","#ffcc00"]]);t.ratingColours=o;var i=new Map([["success",{background:"#0f0",colour:"#000",icon:"✓"}],["error",{background:"#f00",colour:"#fff",icon:"!"}],["warning",{background:"#ff9900",colour:"#000",icon:"⚠"}],["info",{background:"#0ff",colour:"#000",icon:"ℹ"}]]);t.uiMessaging=i;var u=new Map([["wafer",1],["above-siblings",10],["above-backdrop",25],["header",50],["popover",100],["menu",250],["alert",1e3]]);t.zIndexes=u},"91Qr":function(e,t,r){},L6NH:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return o}));var n=r("+9lZ");function a(e){var t=+(Math.round(e+"e+2")+"e-2");return Number(t).toFixed(2)}function o(){var e=new Date,t=(""+(e.getMonth()+1)).padStart(2,"0"),r=Object.keys(n.b).reverse().find((function(e){return e<=t}));return e.getFullYear()+"-"+r}},O0mD:function(e,t,r){"use strict";function n(e){var t=e.filter((function(e){return!!e}));return t.length?t.reduce((function(e,t){return e+t}))/t.length:0}r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return l}));var a=r("KQm4");function o(e){return Math.abs(e)!==1/0?e:0}function i(e){var t=e.filter((function(e){return!!e}));return o(Math.min.apply(Math,Object(a.a)(t)))}function u(e){return function e(t){var r=t[0];return r||0===r?[t.filter((function(e){return e===r}))].concat(e(t.filter((function(e){return e!==r})))):[]}(e).reduce((function(e,t){var r=t.length;if(r>e.length){var n=t[0];return n?{length:r,number:n}:e}return e}),{length:0,number:0}).number}function c(e){var t,r=e.map((function(e){return e.rating}));return{average:n(r),highest:(t=r,o(Math.max.apply(Math,Object(a.a)(t)))),lowest:i(r),mode:u(r)}}function l(e,t,r){var n=4===e.length;return t.map((function(t){var a=r.filter((function(e){return e.animeId===t.id})),o=c(a),i=n?""+t.season.year:t.season.season+" "+t.season.year;return Object.assign({},t,{isCarryOver:i!==e,episodes:a,statistics:o})}))}},XS0u:function(e,t,r){"use strict";var n=r("/mTN"),a=new(r.n(n).a)("higUserSettings",{minEpisodes:4,standoutEpisodeRating:8});t.a=a},ZtVM:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.prop=function(e,t){return e[t]}},cfVx:function(e,t,r){"use strict";r("91Qr");var n=r("q1tI"),a=r.n(n),o=r("9eSz"),i=r.n(o),u=r("aDxt"),c=r.n(u),l=r("qwlH"),s=r("L6NH");var f=r("KQm4");var d={textAlign:"right"},p=[{text:"#",style:Object.assign({},d)},{text:"Title"},{text:"Rating",style:Object.assign({},d)},{text:"Average",style:Object.assign({},d)},{text:"Highest",style:Object.assign({},d)},{text:"Lowest",style:Object.assign({},d)},{text:"Mode",style:Object.assign({},d)}];function b(e){var t=e.hideRatingColumn,r=e.items,n=e.hideSeason,o=e.getSeason,u=e.overrideHeaders,d=null!=u?u:p;return d=t?d.filter((function(e){return"Rating"!==e.text})):d,a.a.createElement(l.a,{headers:d},(function(){return r.map((function(e,r){var u,l,d,p,b,m=r+1,g=function(e){var t=e.rating,r=e.statistics,n=r.average,a=r.highest,o=r.lowest,i=r.mode;return{rating:t||"-",average:Object(s.b)(n),highest:a,lowest:o,mode:i}}(e),h=o(e.isCarryOver,e.season),y=(u=e.episodes,l=e.totalEpisodes,d=u.map((function(e){return e.episode})),p=Math.min.apply(Math,Object(f.a)(d)),b=Math.max.apply(Math,Object(f.a)(d)),p===b?"Episode "+p+(l&&p===l?" (END)":""):p+1===b?"Episodes "+p+" and "+b+(l&&b===l?" (END)":""):"Episodes "+p+"-"+b+(l&&b===l?" (END)":""));return a.a.createElement("tr",{key:e.id},a.a.createElement("td",{"column-title":"#",className:"cell cell--rhs cell--highlight-on-small"},a.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"}},a.a.createElement("div",null,m),!n&&h&&a.a.createElement("div",{style:{fontSize:"0.75rem"}},h))),a.a.createElement("td",{"column-title":"Title",className:"cell"},a.a.createElement("div",{className:"image-wrapper"},a.a.createElement(i.a,Object.assign({style:{flex:"0 0 96px"}},e.image.childImageSharp)),a.a.createElement("div",{className:"title-episode-wrapper"},a.a.createElement(c.a,{style:{display:"flex",justifyContent:"flex-start"},href:"https://myanimelist.net/anime/"+e.malId},e.title),a.a.createElement("div",{style:{fontSize:"0.75rem"}},y)))),!t&&a.a.createElement("td",{"column-title":"Rating",className:"cell cell--rhs"},g.rating),a.a.createElement("td",{"column-title":"Average",className:"cell cell--rhs"},g.average),a.a.createElement("td",{"column-title":"Highest",className:"cell cell--rhs"},g.highest),a.a.createElement("td",{"column-title":"Lowest",className:"cell cell--rhs"},g.lowest),a.a.createElement("td",{"column-title":"Mode",className:"cell cell--rhs"},g.mode))}))}))}b.defaultProps={style:{},hideRatingColumn:!1,hideSeason:!1,getSeason:function(e,t){return e?t.season+" "+t.year:null},overrideHeaders:null};t.a=b},dOGx:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("pVnL")),o=n(r("QILm")),i=n(r("qt7w")),u=n(r("HPmW")),c=n(r("q1tI")),l=n(r("mueY")),s=function(e){var t=e.containerClassName,r=e.className,n=e.text,u=(0,o.default)(e,["containerClassName","className","text"]);return c.default.createElement("div",{className:(0,i.default)("tickbox",l.default.tickbox,t)},c.default.createElement("label",{className:(0,i.default)("tickbox__label",{"tickbox__label--disabled":u.disabled},l.default.tickbox__label,u.disabled&&l.default.tickbox__label_disabled),htmlFor:u.id},c.default.createElement("input",(0,a.default)({type:"checkbox",className:(0,i.default)(l.default.tickbox__input,r)},u)),n||""))};s.displayName="Tickbox",s.propTypes={id:u.default.string.isRequired,checked:u.default.bool.isRequired,onChange:u.default.func.isRequired,text:u.default.oneOfType([u.default.string,u.default.element])};var f=s;t.default=f},dQon:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("q1tI");function a(){var e=Object(n.useState)(!1),t=e[0],r=e[1];return Object(n.useEffect)((function(){window.__theme&&r(!0)}),[]),t}},gMw9:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("L6NH"),a=r("xoD0");function o(e){var t=e.season,r=e.series,o=Object(a.a)(r,(function(e,t){return!e.episodes||t})),i=o.filter((function(e){return 0!==e.rating})),u=i.length,c=i.reduce((function(e,t){return e+t.rating}),0),l=Object(n.b)(c/u);return{season:t,seriesCount:o.length,ratedCount:u,average:l}}},ihzg:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("+9lZ"),i=r("qGn+"),u={error:{container:{boxShadow:"0 0 5px 0 red"},icon:{color:"red"}},information:{container:{boxShadow:"0 0 5px 0 blue"},icon:{color:"blue"}},warning:{container:{boxShadow:"0 0 5px 0 orange"},icon:{color:"orange"}}};function c(e){return e.items.map((function(t){var r,n=o.a[t.type],c=t.type+" message",l=u[t.type],s=t.seasons.filter((function(t){return t.includes(e.year)})).map((function(e){return Object(i.a)(e)})).join(", ");return a.a.createElement("div",{key:t.key,className:"special-message",style:Object.assign({display:"flex",alignItems:"center",padding:"5px"},l.container)},n&&a.a.createElement("div",{style:Object.assign({fontSize:"2rem",marginRight:"5px"},l.icon),"aria-label":c,title:c},a.a.createElement("span",{"aria-hidden":"true"},n)),a.a.createElement("div",{style:{whiteSpace:"pre-line"}},e.isYear?s+": ":"",e.isYear&&null!==(r=t.yearMessage)&&void 0!==r?r:t.message))}))}c.defaultProps={isYear:!1},t.a=c},le18:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.lighten=function(e,t){return i(e,t)},t.darken=function(e,t){return i(-e,t)};var n=o(r("58M3")),a=o(r("pkQK"));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var r=(0,n.default)(t),o=r[2]+e/100;return r[2]=Math.max(Math.min(o,100),0),(0,a.default)(r)}},mueY:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("Yymn"),a={tickbox:{display:"flex",minHeight:"35px",maxHeight:"45px",flex:1},tickbox__label:{display:"flex",justifyContent:"flex-start",alignItems:"center",padding:"2px",cursor:"pointer"},tickbox__label_disabled:{cursor:"default"},tickbox__input:{appearance:"none",transition:"all 0.3s",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",width:"20px",height:"20px",margin:"0 5px","&::before, &:checked::before":{color:"#000",transition:"all 0.3s",cursor:"pointer",zIndex:r("8tv6").zIndexes.get("wafer")},"&::before":{content:"'☐︎'",fontSize:"2em"},"&:disabled::before":{content:"'❌︎'",color:"#666",cursor:"default"},"&:checked::before":{content:"'☑︎'",color:"#0f0"}}},o=(0,n.sheet)(a);t.default=o},pkQK:function(e,t,r){"use strict";function n(e){return t=Math.round(255*e),1===(r=t.toString(16)).length?"0".concat(r):r;var t,r}function a(e,t,r){return 7===(a="#".concat(n(e)).concat(n(t)).concat(n(r))).length&&a[1]===a[2]&&a[3]===a[4]&&a[5]===a[6]?"#".concat(a[1]).concat(a[3]).concat(a[5]):a;var a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(i=e,u=3,function(e){if(Array.isArray(e))return e}(i)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}}(i,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),r=t[0],n=t[1],o=t[2];var i,u;if(0===n)return a(o,o,o);var c=r%360/60,l=(1-Math.abs(2*o-1))*n,s=l*(1-Math.abs(c%2-1)),f=0,d=0,p=0;c>=0&&c<1?(f=l,d=s):c>=1&&c<2?(f=s,d=l):c>=2&&c<3?(d=l,p=s):c>=3&&c<4?(d=s,p=l):c>=4&&c<5?(f=s,p=l):c>=5&&c<6&&(f=l,p=s);var b=o-l/2;return a(f+b,d+b,p+b)}},qB1S:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("KQm4");function a(e,t){return e.reduce((function(e,r){return[].concat(Object(n.a)(e),Object(n.a)(r[t]))}),[]).filter((function(e,t,r){return r.findIndex((function(t){return t.id===e.id}))===t}))}},qwlH:function(e,t,r){"use strict";var n=r("zLVn"),a=(r("91Qr"),r("q1tI")),o=r.n(a);function i(e){var t=e.style,r=e.headers,a=e.children,i=Object(n.a)(e,["style","headers","children"]);return o.a.createElement("table",Object.assign({style:Object.assign({},t)},i),o.a.createElement("thead",null,o.a.createElement("tr",null,r.map((function(e){var t=e.text,r=Object(n.a)(e,["text"]);return o.a.createElement("th",Object.assign({key:t},r,{style:Object.assign({},r.style||{})}),t)})))),o.a.createElement("tbody",null,a&&a()))}i.defaultProps={style:{}},t.a=i},xoD0:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("XS0u");function a(e,t){void 0===t&&(t=function(e,t){return t});var r=n.a.getKey("minEpisodes");return e.filter((function(e){return t(e,function(e,t){return e.episodes&&e.episodes.length>=t}(e,r),r)}))}}}]);
//# sourceMappingURL=3eccdb6c69a7af9f42dcd0281661a05ccdac7883-c4256fa306a10baa95f3.js.map