(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{158:function(e,t,a){"use strict";a.r(t);a(184),a(40);var n=a(0),r=a.n(n),l=a(162),s=a(173),i=a.n(s),c=a(167),o=a(166),u=a(95),d=a.n(u),g=a(5),m=a.n(g),y={borderColor:"var(--table-border-colour)",verticalAlign:"top"};function h(e){var t=e.style,a=e.headers,n=e.children,l=d()(e,["style","headers","children"]);return r.a.createElement("table",Object.assign({style:Object.assign({},t)},l),r.a.createElement("thead",null,r.a.createElement("tr",null,a.map(function(e){var t=e.text,a=d()(e,["text"]);return r.a.createElement("th",Object.assign({key:t},a,{style:Object.assign({},y,a.style||{})}),t)}))),r.a.createElement("tbody",null,n&&n({tdStyle:y})))}h.defaultProps={style:{}},h.propTypes={style:m.a.object,headers:m.a.arrayOf(m.a.shape({text:m.a.string.isRequired})).isRequired,children:m.a.func};var b=h,p=a(165),f=a(183),v=a(172);var E=a(160);a.d(t,"query",function(){return w});var j={textAlign:"right"},O=[{text:"#",style:Object.assign({},j)},{text:"Title"},{text:"Rating",style:Object.assign({},j)},{text:"Average",style:Object.assign({},j)},{text:"Highest",style:Object.assign({},j)},{text:"Lowest",style:Object.assign({},j)},{text:"Mode",style:Object.assign({},j)}];function x(e){var t=e.next,a=e.previous;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,a&&r.a.createElement(l.a,{to:a.fields.slug,rel:"prev",style:{marginRight:20}},"← ",Object(f.a)(a.season))),r.a.createElement("li",null,t&&r.a.createElement(l.a,{to:t.fields.slug,rel:"next"},Object(f.a)(t.season)," →"))))}t.default=function(e){var t=e.data,a=e.pageContext,n=t.dataJson,l=n.series.sort(function(e,t){return t.average-e.average}),s=Object(f.a)(n.season),u=n.series.filter(function(e){return 0!==e.rating}),d=u.length,g=Object(v.b)(u.reduce(function(e,t){return e+t.rating},0)/d);return r.a.createElement(c.a,null,r.a.createElement(o.a,{title:s}),r.a.createElement("div",null,r.a.createElement("h2",null,s),!!d&&r.a.createElement("p",null,"Average: ",g," for ",d," rated series"),r.a.createElement("p",{style:{whiteSpace:"pre-line"}},"In the event I have yet to rate a series, the rating will appear as a hypen (-).","\n\r","This is usually the case for series that are still airing. ","\n\r","In the cases where multiple ratings are tied in the mode calculation, one will be arbitrarily selected."),r.a.createElement(b,{headers:O},function(e){var t=e.tdStyle;return l.map(function(e,a){var n,l,s,c,o,u,d=a+1,g=(l=(n=e).rating,s=n.average,c=n.highest,o=n.lowest,u=n.mode,n.episodes,{rating:l||"-",average:Object(v.b)(s),highest:c,lowest:o,mode:u});return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{style:Object.assign({},t,j)},d),r.a.createElement("td",{style:t},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(i.a,Object.assign({style:{flex:"0 0 96px"}},e.image.childImageSharp)),r.a.createElement(p.a,{style:{margin:"0 "+Object(E.a)(.5)},href:"https://myanimelist.net/anime/"+e.malId},e.title))),r.a.createElement("td",{style:Object.assign({},t,j)},g.rating),r.a.createElement("td",{style:Object.assign({},t,j)},g.average),r.a.createElement("td",{style:Object.assign({},t,j)},g.highest),r.a.createElement("td",{style:Object.assign({},t,j)},g.lowest),r.a.createElement("td",{style:Object.assign({},t,j)},g.mode))})})),r.a.createElement(x,a))};var w="4154285275"},184:function(e,t,a){"use strict";var n=a(9),r=a(31),l=a(42),s=a(11),i=[].sort,c=[1,2,3];n(n.P+n.F*(s(function(){c.sort(void 0)})||!s(function(){c.sort(null)})||!a(185)(i)),"Array",{sort:function(e){return void 0===e?i.call(l(this)):i.call(l(this),r(e))}})},185:function(e,t,a){"use strict";var n=a(11);e.exports=function(e,t){return!!e&&n(function(){t?e.call(null,function(){},1):e.call(null)})}}}]);
//# sourceMappingURL=component---src-templates-season-js-b1c02c30964e33989e14.js.map