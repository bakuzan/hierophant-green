(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return u});a(40);var n=a(95),r=a.n(n),l=a(0),s=a.n(l),i=a(179),c=a(163);t.default=function(e){var t=e.data,a=r()(e,["data"]),n=t.dataJson,l=Object(c.a)(n.season);return s.a.createElement(i.a,Object.assign({},a,{title:l,series:n.series}))};var u="4154285275"},165:function(e,t,a){"use strict";var n=a(9),r=a(31),l=a(41),s=a(11),i=[].sort,c=[1,2,3];n(n.P+n.F*(s(function(){c.sort(void 0)})||!s(function(){c.sort(null)})||!a(173)(i)),"Array",{sort:function(e){return void 0===e?i.call(l(this)):i.call(l(this),r(e))}})},172:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(169);function r(e){var t=e.season,a=e.series,r=a.filter(function(e){return 0!==e.rating}),l=r.length,s=Object(n.b)(r.reduce(function(e,t){return e+t.rating},0)/l);return{season:t,seriesCount:a.length,ratedCount:l,average:s}}},173:function(e,t,a){"use strict";var n=a(11);e.exports=function(e,t){return!!e&&n(function(){t?e.call(null,function(){},1):e.call(null)})}},179:function(e,t,a){"use strict";a(165),a(40);var n=a(5),r=a.n(n),l=a(0),s=a.n(l),i=a(174),c=a.n(i),u=a(170),o=a(168),m=a(95),d=a.n(m);a(189);function g(e){var t=e.style,a=e.headers,n=e.children,r=d()(e,["style","headers","children"]);return s.a.createElement("table",Object.assign({style:Object.assign({},t)},r),s.a.createElement("thead",null,s.a.createElement("tr",null,a.map(function(e){var t=e.text,a=d()(e,["text"]);return s.a.createElement("th",Object.assign({key:t},a,{style:Object.assign({},a.style||{})}),t)}))),s.a.createElement("tbody",null,n&&n()))}g.defaultProps={style:{}},g.propTypes={style:r.a.object,headers:r.a.arrayOf(r.a.shape({text:r.a.string.isRequired})).isRequired,children:r.a.func};var h=g,v=a(167),f=a(162),y=a(163);function p(e){var t=e.next,a=e.previous;return s.a.createElement("nav",null,s.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},s.a.createElement("li",null,a&&s.a.createElement(f.a,{to:a.fields.slug,rel:"prev",style:{marginRight:20}},"←"," ",a.isYear?a.year+" Overview":Object(y.a)(a.season))),s.a.createElement("li",null,t&&s.a.createElement(f.a,{to:t.fields.slug,rel:"next"},t.isYear?t.year+" Overview":Object(y.a)(t.season)," ","→"))))}var E=r.a.shape({season:r.a.string.isRequired});p.propTypes={next:E,previous:E};var b=p,O={textAlign:"right"},x=[{text:""},{text:"Total",style:Object.assign({},O)},{text:"Rated",style:Object.assign({},O)},{text:"Average Rating",style:Object.assign({},O)}];var j=function(e){var t=e.data.sort(function(e,t){return e.season>t.season?1:-1});return s.a.createElement("div",null,s.a.createElement(h,{headers:x},function(){return t.map(function(e){return s.a.createElement("tr",{key:e.season},s.a.createElement("th",null,s.a.createElement(f.a,{to:"/"+e.season},Object(y.a)(e.season,!1))),s.a.createElement("td",{"column-title":"Total",className:"cell cell--rhs"},e.seriesCount),s.a.createElement("td",{"column-title":"Rated",className:"cell cell--rhs"},e.ratedCount),s.a.createElement("td",{"column-title":"Average Rating",className:"cell cell--rhs"},e.average))})}))},w=a(169);var R=a(172),q=a(161),C={textAlign:"right"},N=[{text:"#",style:Object.assign({},C)},{text:"Title"},{text:"Rating",style:Object.assign({},C)},{text:"Average",style:Object.assign({},C)},{text:"Highest",style:Object.assign({},C)},{text:"Lowest",style:Object.assign({},C)},{text:"Mode",style:Object.assign({},C)}],A=function(e,t){return t.average-e.average||t.rating-e.rating||t.mode-e.mode||0};function T(e){var t=e.title,a=e.series,n=e.overview,r=e.pageContext,l=Object(R.a)({series:a}),i=l.average,m=l.ratedCount,d=a.sort(A);return s.a.createElement(u.a,null,s.a.createElement(o.a,{title:t}),s.a.createElement("div",null,s.a.createElement("h2",null,t),!!m&&s.a.createElement("p",null,"Average: ",i," for ",m," rated series"),n&&s.a.createElement(j,{data:n}),s.a.createElement("p",{style:{whiteSpace:"pre-line"}},"In the event I have yet to rate a series, the rating will appear as a hyphen (-).","\n\r","This is usually the case for series that are still airing. ","\n\r","In the cases where multiple ratings are tied in the mode calculation, one will be arbitrarily selected."),s.a.createElement(h,{headers:N},function(){return d.map(function(e,t){var a=t+1,n=function(e){var t=e.rating,a=e.average,n=e.highest,r=e.lowest,l=e.mode;return e.episodes,{rating:t||"-",average:Object(w.b)(a),highest:n,lowest:r,mode:l}}(e);return s.a.createElement("tr",{key:e.id},s.a.createElement("td",{"column-title":"#",className:"cell cell--rhs"},s.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"}},s.a.createElement("div",null,a),e.season&&s.a.createElement("div",null,Object(y.a)(e.season,!1)))),s.a.createElement("td",{"column-title":"Title",className:"cell"},s.a.createElement("div",{style:{display:"flex"}},s.a.createElement(c.a,Object.assign({style:{flex:"0 0 96px"}},e.image.childImageSharp)),s.a.createElement(v.a,{style:{margin:"0 "+Object(q.a)(.5)},href:"https://myanimelist.net/anime/"+e.malId},e.title))),s.a.createElement("td",{"column-title":"Rating",className:"cell cell--rhs"},n.rating),s.a.createElement("td",{"column-title":"Average",className:"cell cell--rhs"},n.average),s.a.createElement("td",{"column-title":"Highest",className:"cell cell--rhs"},n.highest),s.a.createElement("td",{"column-title":"Lowest",className:"cell cell--rhs"},n.lowest),s.a.createElement("td",{"column-title":"Mode",className:"cell cell--rhs"},n.mode))})})),s.a.createElement(b,r))}T.propTypes={title:r.a.string.isRequired,series:r.a.arrayOf(r.a.shape({title:r.a.string,rating:r.a.number,average:r.a.number,highest:r.a.number,lowest:r.a.number,mode:r.a.number})).isRequired,overview:r.a.arrayOf(r.a.shape({season:r.a.string.isRequired,seriesCount:r.a.number.isRequired,ratedCount:r.a.number.isRequired,average:r.a.string.isRequired}))};t.a=T}}]);
//# sourceMappingURL=component---src-templates-season-js-fdd66b777f4c62b29cfb.js.map