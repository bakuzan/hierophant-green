(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Nr18:function(e,t,a){"use strict";var n=a("S/j/"),r=a("d/Gc"),i=a("ne8i");e.exports=function(e){for(var t=n(this),a=i(t.length),l=arguments.length,s=r(l>1?arguments[1]:void 0,a),o=l>2?arguments[2]:void 0,u=void 0===o?a:r(o,a);u>s;)t[s++]=e;return t}},bHtr:function(e,t,a){var n=a("XKFU");n(n.P,"Array",{fill:a("Nr18")}),a("nGyu")("fill")},hbIb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return"";var t=new Date(e);return"".concat((0,r.default)(t.getDate(),2)," ").concat(n.default[t.getMonth()]," ").concat(t.getFullYear())};var n=i(a("nlUt")),r=i(a("rSgb"));function i(e){return e&&e.__esModule?e:{default:e}}},iI8e:function(e,t,a){"use strict";a("xfY5"),a("dRSK"),a("91GP");var n=a("q1tI"),r=a.n(n),i=a("hbIb"),l=a.n(i),s=a("Dx0o"),o=a.n(s),u=a("dOGx"),c=a.n(u),d=a("1kws"),f=a("d6sP"),v=a("Wbzz"),g=a("qGn+");function m(e){return e.isYear?e.year+" Overview":Object(g.a)(e.season)}var p=function(e){var t=e.next,a=e.previous;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,a&&r.a.createElement(v.Link,{to:a.fields.slug,rel:"prev",style:{marginRight:20}},"← ",m(a))),r.a.createElement("li",null,t&&r.a.createElement(v.Link,{to:t.fields.slug,rel:"next"},m(t)," →"))))},h=a("qwlH"),y={textAlign:"right"},b=[{text:""},{text:"Total",style:Object.assign({},y)},{text:"Rated",style:Object.assign({},y)},{text:"Average Rating",style:Object.assign({},y)}];var x=function(e){var t=e.data.sort((function(e,t){return e.season>t.season?1:-1}));return r.a.createElement("div",null,r.a.createElement(h.a,{headers:b},(function(){return t.map((function(e){return r.a.createElement("tr",{key:e.season},r.a.createElement("th",null,r.a.createElement(v.Link,{to:"/"+e.season},Object(g.a)(e.season,!1))),r.a.createElement("td",{"column-title":"Total",className:"cell cell--rhs"},e.seriesCount),r.a.createElement("td",{"column-title":"Rated",className:"cell cell--rhs"},e.ratedCount),r.a.createElement("td",{"column-title":"Average Rating",className:"cell cell--rhs"},e.average))}))})))},O=a("cfVx"),w=a("dQon"),E=a("gMw9"),j=a("6jik"),D=a("23Ag"),S=(a("Z2Ku"),a("rE2o"),a("ioFf"),a("rGqo"),a("bHtr"),a("xjvq")),k=a.n(S),I=a("pwos"),_=a.n(I),M=a("qB1S"),A=a("O0mD"),q=[8,11];var C=function(e,t){var a;return"boolean"==typeof e?e:null!==(a=e[t])&&void 0!==a&&a},P={textAlign:"right"},R=[{text:"#",style:Object.assign({},P)},{text:"Title"},{text:"Episode Rating",style:Object.assign({},P)},{text:"Series Average",style:Object.assign({},P)},{text:"Series Highest",style:Object.assign({},P)},{text:"Series Lowest",style:Object.assign({},P)},{text:"Series Mode",style:Object.assign({},P)}];function G(e){var t=e.season,a=e.title,i=e.series,s=e.overview,u=e.hideRatingColumn,v=e.getSeason,g=e.customDescriptiveText,m=e.showFilters,h=e.pageContext,y=Object(n.useState)(0),b=y[0],S=y[1],I=Object(n.useState)(!1),P=I[0],G=I[1],N=Object(w.a)(),T=0===b,F=C(m,"weeksDropdown"),J=C(m,"hideCarryOvers"),H=Object(n.useMemo)((function(){return function(e,t){if(!t)return[];var a=[{value:0,text:"All"}],n=Array(13).fill(null).map((function(e,t){return t+1})),r=new Date(e+"-01T00:00:00.000Z"),i=n,l=Array.isArray(i),s=0;for(i=l?i:i[Symbol.iterator]();;){var o;if(l){if(s>=i.length)break;o=i[s++]}else{if((s=i.next()).done)break;o=s.value}var u=o,c=13===u&&q.includes(r.getMonth())?7:6,d=k()(r),f=_()(d);f.setDate(f.getDate()+c),a.push({value:u,text:"Week "+u,startDate:d.toISOString(),endDate:f.toISOString()}),(r=new Date(f)).setDate(r.getDate()+1)}return a.filter((function(e){return!e.startDate||e.startDate<_()(new Date).toISOString()}))}(t,F)}),[t,F]),W=H.find((function(e){return e.value===b})),Y=function(e,t){return t&&0!==t.value?Object(M.a)(e,"episodes").filter((function(e){return e.date>=t.startDate&&e.date<=t.endDate})).map((function(a){var n=e.find((function(e){return e.id===a.animeId})),r=Object(A.b)(n.episodes.filter((function(e){return e.date<=t.endDate})));return{id:a.id,animeId:a.animeId,episode:a.episode,rating:a.rating,title:n.title,image:n.image,malId:n.malId,statistics:r,episodes:[a]}})):e}(i.filter((function(e){return!e.isCarryOver||!P})),W).sort(D.a),L=Object(E.a)({series:i}),z=L.average,B=L.ratedCount;return r.a.createElement(d.a,null,r.a.createElement(f.a,{title:a}),r.a.createElement("div",null,r.a.createElement("h2",null,a),!!B&&r.a.createElement("p",null,"Average: ",z," for ",B," rated series"),s&&r.a.createElement(x,{data:s}),r.a.createElement("p",{style:{whiteSpace:"pre-line"}},g,!u&&"In the event I have yet to rate a series, the rating will appear as a hyphen (-).\n            This is usually the case for series that are still airing.","\n\r","In the cases where multiple ratings are tied in the mode calculation, one will be arbitrarily selected.","\n\r","Entries are sorted by average desc, rating desc, mode desc, and title asc."),r.a.createElement("div",Object(j.a)(m&&N,{display:"flex",alignItems:"center",backgroundColor:"var(--primary-colour)",color:"var(--primary-contrast)",padding:"5px",margin:"10px 0"}),F&&r.a.createElement("div",{style:{margin:"0 5px",minWidth:"200px"}},r.a.createElement(o.a,{style:{backgroundColor:"var(--primary-colour)",color:"var(--primary-contrast)"},className:"select-box--with-background",id:"weeks",name:"weeks",text:"Show week(s)",value:b,onChange:function(e){return S(Number(e.target.value))}},H.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.text)})))),r.a.createElement("div",{style:{display:"flex",flex:1}}),J&&r.a.createElement("div",{style:{margin:"0 5px"}},r.a.createElement(c.a,{className:"hide-carry-overs hide-carry-overs--with-background",id:"hideCarryOvers",name:"hideCarryOvers",checked:P,text:" Hide carry overs",onChange:function(e){return G((function(e){return!e}))}}))),!T&&r.a.createElement("p",null,"You are currently viewing the season filtered to episodes watched between ",l()(W.startDate)," and"," ",l()(W.endDate)," inclusive. All series statistic columns are cumulative for the season up to and including"," ",W.text,"."),!Y.length&&r.a.createElement("p",null,r.a.createElement("strong",null,"There are no items to display for the current filters selected.")),T?r.a.createElement(O.a,{hideRatingColumn:u,getSeason:v,items:Y}):r.a.createElement(O.a,{overrideHeaders:R,getSeason:v,items:Y})),r.a.createElement(p,h))}G.defaultProps={customDescriptiveText:"",showFilters:!1};t.a=G},nlUt:function(e,t,a){"use strict";a("DW2E"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=Object.freeze(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]);t.default=n},ptqJ:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return u}));a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP");var n=a("q1tI"),r=a.n(n),i=a("iI8e"),l=a("qGn+"),s=a("O0mD"),o=a("xoD0");t.default=function(e){var t=e.data,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["data"]),n=t.dataJson,u=Object(l.a)(n.season),c=Object(o.a)(Object(s.a)(u,n.series,n.episodes));return r.a.createElement(i.a,Object.assign({},a,{title:u,series:c,season:n.season,showFilters:!0}))};var u="2659129809"},pwos:function(e,t,a){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,((n=a("q+ha"))&&n.__esModule?n:{default:n}).default)(23,59,59);t.default=r},"q+ha":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t,a){return function(n){var r=new Date(n);return new Date(r.getFullYear(),r.getMonth(),r.getDate(),e,t,a)}};t.default=n},rSgb:function(e,t,a){"use strict";a("a1Th"),a("Btvt"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return(e=e.toString()).length>=t?e:new Array(t-e.length+1).join(a)+e}},xjvq:function(e,t,a){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,((n=a("q+ha"))&&n.__esModule?n:{default:n}).default)(0,0,0);t.default=r}}]);
//# sourceMappingURL=component---src-templates-season-js-7049baa01326fabb6b25.js.map