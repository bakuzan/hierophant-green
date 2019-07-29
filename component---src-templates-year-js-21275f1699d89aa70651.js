(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{193:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});a(92),a(134),a(67),a(52),a(40),a(29),a(30),a(14),a(50),a(23),a(13);var n=a(0),r=a.n(n),l=a(208),s=a(204);function i(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.default=function(e){var t=e.data,a=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["data"]),n=a.path.replace(/\//g,""),c=t.allDataJson.nodes,o=c.map(s.a),u=c.reduce(function(e,t){return[].concat(i(e),i(t.series.map(function(e){return Object.assign({},e,{season:t.season})})))},[]);return console.log(a),r.a.createElement(l.a,Object.assign({},a,{title:"Overview of "+n,overview:o,series:u}))};var c="104576545"},204:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(201);function r(e){var t=e.season,a=e.series,r=a.filter(function(e){return 0!==e.rating}),l=r.length,s=Object(n.b)(r.reduce(function(e,t){return e+t.rating},0)/l);return{season:t,seriesCount:a.length,ratedCount:l,average:s}}},208:function(e,t,a){"use strict";a(132),a(23);var n=a(0),r=a.n(n),l=a(209),s=a.n(l),i=a(205),c=a(203);a(29),a(30),a(14),a(50),a(215);function o(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}function u(e){var t=e.style,a=e.headers,n=e.children,l=o(e,["style","headers","children"]);return r.a.createElement("table",Object.assign({style:Object.assign({},t)},l),r.a.createElement("thead",null,r.a.createElement("tr",null,a.map(function(e){var t=e.text,a=o(e,["text"]);return r.a.createElement("th",Object.assign({key:t},a,{style:Object.assign({},a.style||{})}),t)}))),r.a.createElement("tbody",null,n&&n()))}u.defaultProps={style:{}};var m=u,g=a(202),d=a(198),f=a(199),h=a(207);function v(e){return e.date?"Week of "+Object(h.a)(e.date):e.isYear?e.year+" Overview":Object(f.a)(e.season)}var y=function(e){var t=e.next,a=e.previous;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,a&&r.a.createElement(d.a,{to:a.fields.slug,rel:"prev",style:{marginRight:20}},"← ",v(a))),r.a.createElement("li",null,t&&r.a.createElement(d.a,{to:t.fields.slug,rel:"next"},v(t)," →"))))},p={textAlign:"right"},E=[{text:""},{text:"Total",style:Object.assign({},p)},{text:"Rated",style:Object.assign({},p)},{text:"Average Rating",style:Object.assign({},p)}];var b=function(e){var t=e.data.sort(function(e,t){return e.season>t.season?1:-1});return r.a.createElement("div",null,r.a.createElement(m,{headers:E},function(){return t.map(function(e){return r.a.createElement("tr",{key:e.season},r.a.createElement("th",null,r.a.createElement(d.a,{to:"/"+e.season},Object(f.a)(e.season,!1))),r.a.createElement("td",{"column-title":"Total",className:"cell cell--rhs"},e.seriesCount),r.a.createElement("td",{"column-title":"Rated",className:"cell cell--rhs"},e.ratedCount),r.a.createElement("td",{"column-title":"Average Rating",className:"cell cell--rhs"},e.average))})}))},O=a(201);var j=a(204),x=a(197),w={textAlign:"right"},A=[{text:"#",style:Object.assign({},w)},{text:"Title"},{text:"Rating",style:Object.assign({},w)},{text:"Average",style:Object.assign({},w)},{text:"Highest",style:Object.assign({},w)},{text:"Lowest",style:Object.assign({},w)},{text:"Mode",style:Object.assign({},w)}],N=function(e,t){return t.average-e.average||t.rating-e.rating||t.mode-e.mode||0};function C(e){var t=e.title,a=e.series,n=e.overview,l=e.hideRatingColumn,o=e.customDescriptiveText,u=e.pageContext,d=l?A.filter(function(e){return"Rating"!==e.text}):A,h=Object(j.a)({series:a}),v=h.average,p=h.ratedCount,E=a.sort(N);return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:t}),r.a.createElement("div",null,r.a.createElement("h2",null,t),!!p&&r.a.createElement("p",null,"Average: ",v," for ",p," rated series"),n&&r.a.createElement(b,{data:n}),r.a.createElement("p",{style:{whiteSpace:"pre-line"}},o,!l&&"In the event I have yet to rate a series, the rating will appear as a hyphen (-).\n            This is usually the case for series that are still airing.","\n\r","In the cases where multiple ratings are tied in the mode calculation, one will be arbitrarily selected."),r.a.createElement(m,{headers:d},function(){return E.map(function(e,t){var a,n,i,c,o,u,m=t+1,d=(n=(a=e).rating,i=a.average,c=a.highest,o=a.lowest,u=a.mode,a.episodes,{rating:n||"-",average:Object(O.b)(i),highest:c,lowest:o,mode:u});return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{"column-title":"#",className:"cell cell--rhs"},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"}},r.a.createElement("div",null,m),e.season&&r.a.createElement("div",null,Object(f.a)(e.season,!1)))),r.a.createElement("td",{"column-title":"Title",className:"cell"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(s.a,Object.assign({style:{flex:"0 0 96px"}},e.image.childImageSharp)),r.a.createElement(g.a,{style:{margin:"0 "+Object(x.a)(.5)},href:"https://myanimelist.net/anime/"+e.malId},e.title))),!l&&r.a.createElement("td",{"column-title":"Rating",className:"cell cell--rhs"},d.rating),r.a.createElement("td",{"column-title":"Average",className:"cell cell--rhs"},d.average),r.a.createElement("td",{"column-title":"Highest",className:"cell cell--rhs"},d.highest),r.a.createElement("td",{"column-title":"Lowest",className:"cell cell--rhs"},d.lowest),r.a.createElement("td",{"column-title":"Mode",className:"cell cell--rhs"},d.mode))})})),r.a.createElement(y,u))}C.defaultProps={customDescriptiveText:""};t.a=C}}]);
//# sourceMappingURL=component---src-templates-year-js-21275f1699d89aa70651.js.map