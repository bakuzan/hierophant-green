(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{JhFX:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return c}));a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("Z2Ku"),a("L9s1"),a("pIFo");var n=a("q1tI"),r=a.n(n),i=a("iI8e"),s=a("gMw9"),l=a("O0mD"),o=a("qB1S"),u=a("xoD0");t.default=function(e){var t=e.data,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["data"]),n=a.path.replace(/\//g,""),c=t.allDataJson.nodes,d=t.allInformationJson.nodes.filter((function(e){return e.seasons.some((function(e){return e.includes(n)}))})),f=c.map((function(e){return Object(s.a)({season:e.season,series:e.series.map((function(t){return Object.assign({},t,{episodes:e.episodes.filter((function(e){return e.animeId===t.id}))})}))})})),v=Object(o.a)(c,"series"),g=Object(o.a)(c,"episodes"),m=Object(u.a)(Object(l.a)(n,v,g));return r.a.createElement(i.a,Object.assign({},a,{messages:d,title:"Overview of "+n,series:m,overview:f,getSeason:function(e,t){return t.season+" "+t.year},showFilters:{hideCarryOvers:!0}}))};var c="3647365088"},Nr18:function(e,t,a){"use strict";var n=a("S/j/"),r=a("d/Gc"),i=a("ne8i");e.exports=function(e){for(var t=n(this),a=i(t.length),s=arguments.length,l=r(s>1?arguments[1]:void 0,a),o=s>2?arguments[2]:void 0,u=void 0===o?a:r(o,a);u>l;)t[l++]=e;return t}},bHtr:function(e,t,a){var n=a("XKFU");n(n.P,"Array",{fill:a("Nr18")}),a("nGyu")("fill")},hbIb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return"";var t=new Date(e);return"".concat((0,r.default)(t.getDate(),2)," ").concat(n.default[t.getMonth()]," ").concat(t.getFullYear())};var n=i(a("nlUt")),r=i(a("rSgb"));function i(e){return e&&e.__esModule?e:{default:e}}},iI8e:function(e,t,a){"use strict";a("xfY5"),a("dRSK"),a("91GP");var n=a("q1tI"),r=a.n(n),i=a("hbIb"),s=a.n(i),l=a("Dx0o"),o=a.n(l),u=a("dOGx"),c=a.n(u),d=a("1kws"),f=a("d6sP"),v=a("Wbzz"),g=a("qGn+");function m(e){return e.isYear?e.year+" Overview":Object(g.a)(e.season)}var p=function(e){var t=e.next,a=e.previous;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,a&&r.a.createElement(v.Link,{to:a.fields.slug,rel:"prev",style:{marginRight:20}},"← ",m(a))),r.a.createElement("li",null,t&&r.a.createElement(v.Link,{to:t.fields.slug,rel:"next"},m(t)," →"))))},h=a("qwlH"),b={textAlign:"right"},y=[{text:""},{text:"Total",style:Object.assign({},b)},{text:"Rated",style:Object.assign({},b)},{text:"Average Rating",style:Object.assign({},b)}];var O=function(e){var t=e.data.sort((function(e,t){return e.season>t.season?1:-1}));return r.a.createElement("div",null,r.a.createElement(h.a,{headers:y},(function(){return t.map((function(e){return r.a.createElement("tr",{key:e.season},r.a.createElement("th",null,r.a.createElement(v.Link,{to:"/"+e.season},Object(g.a)(e.season,!1))),r.a.createElement("td",{"column-title":"Total",className:"cell cell--rhs"},e.seriesCount),r.a.createElement("td",{"column-title":"Rated",className:"cell cell--rhs"},e.ratedCount),r.a.createElement("td",{"column-title":"Average Rating",className:"cell cell--rhs"},e.average))}))})))},x=a("cfVx"),w=a("ihzg"),j=a("dQon"),E=a("gMw9"),D=a("6jik"),S=a("23Ag"),k=(a("Z2Ku"),a("rE2o"),a("ioFf"),a("rGqo"),a("bHtr"),a("xjvq")),I=a.n(k),M=a("pwos"),_=a.n(M),A=a("qB1S"),C=a("O0mD"),q=[8,11];var P=function(e,t){var a;return"boolean"==typeof e?e:null!==(a=e[t])&&void 0!==a&&a},F={textAlign:"right"},R=[{text:"#",style:Object.assign({},F)},{text:"Title"},{text:"Episode Rating",style:Object.assign({},F)},{text:"Series Average",style:Object.assign({},F)},{text:"Series Highest",style:Object.assign({},F)},{text:"Series Lowest",style:Object.assign({},F)},{text:"Series Mode",style:Object.assign({},F)}];function N(e){var t=e.season,a=e.title,i=e.series,l=e.overview,u=e.hideRatingColumn,v=e.getSeason,g=e.customDescriptiveText,m=e.showFilters,h=e.pageContext,b=e.messages,y=Object(n.useState)(0),k=y[0],M=y[1],F=Object(n.useState)(!1),N=F[0],T=F[1],G=Object(j.a)(),J=0===k,H=P(m,"weeksDropdown"),W=P(m,"hideCarryOvers"),Y=Object(n.useMemo)((function(){return function(e,t){if(!t)return[];var a=[{value:0,text:"All"}],n=Array(13).fill(null).map((function(e,t){return t+1})),r=new Date(e+"-01T00:00:00.000Z"),i=n,s=Array.isArray(i),l=0;for(i=s?i:i[Symbol.iterator]();;){var o;if(s){if(l>=i.length)break;o=i[l++]}else{if((l=i.next()).done)break;o=l.value}var u=o,c=13===u&&q.includes(r.getMonth())?7:6,d=I()(r),f=_()(d);f.setDate(f.getDate()+c),a.push({value:u,text:"Week "+u,startDate:d.toISOString(),endDate:f.toISOString()}),(r=new Date(f)).setDate(r.getDate()+1)}return a.filter((function(e){return!e.startDate||e.startDate<_()(new Date).toISOString()}))}(t,H)}),[t,H]),L=Y.find((function(e){return e.value===k})),z=function(e,t){return t&&0!==t.value?Object(A.a)(e,"episodes").filter((function(e){return e.date>=t.startDate&&e.date<=t.endDate})).map((function(a){var n=e.find((function(e){return e.id===a.animeId})),r=Object(C.b)(n.episodes.filter((function(e){return e.date<=t.endDate})));return{id:a.id,animeId:a.animeId,episode:a.episode,rating:a.rating,title:n.title,image:n.image,malId:n.malId,statistics:r,episodes:[a]}})):e}(i.filter((function(e){return!e.isCarryOver||!N})),L).sort(S.a),B=Object(E.a)({series:i}),K=B.average,U=B.ratedCount;return r.a.createElement(d.a,null,r.a.createElement(f.a,{title:a}),r.a.createElement("div",null,r.a.createElement("h2",null,a),!!U&&r.a.createElement("p",null,"Average: ",K," for ",U," rated series"),l&&r.a.createElement(O,{data:l}),r.a.createElement("p",{style:{whiteSpace:"pre-line"}},g,!u&&"In the event I have yet to rate a series, the rating will appear as a hyphen (-).\n            This is usually the case for series that are still airing.","\n\r","In the cases where multiple ratings are tied in the mode calculation, one will be arbitrarily selected.","\n\r","Entries are sorted by average desc, rating desc, mode desc, and title asc."),r.a.createElement(w.a,{isYear:!!l,items:b,season:t}),r.a.createElement("div",Object(D.a)(m&&G,{display:"flex",alignItems:"center",backgroundColor:"var(--primary-colour)",color:"var(--primary-contrast)",padding:"5px",margin:"10px 0"}),H&&r.a.createElement("div",{style:{margin:"0 5px",minWidth:"200px"}},r.a.createElement(o.a,{style:{backgroundColor:"var(--primary-colour)",color:"var(--primary-contrast)"},className:"select-box--with-background",id:"weeks",name:"weeks",text:"Show week(s)",value:k,onChange:function(e){return M(Number(e.target.value))}},Y.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.text)})))),r.a.createElement("div",{style:{display:"flex",flex:1}}),W&&r.a.createElement("div",{style:{margin:"0 5px"}},r.a.createElement(c.a,{className:"hide-carry-overs hide-carry-overs--with-background",id:"hideCarryOvers",name:"hideCarryOvers",checked:N,text:" Hide carry overs",onChange:function(e){return T((function(e){return!e}))}}))),!J&&r.a.createElement("p",null,"You are currently viewing the season filtered to episodes watched between ",s()(L.startDate)," and"," ",s()(L.endDate)," inclusive. All series statistic columns are cumulative for the season up to and including"," ",L.text,"."),!z.length&&r.a.createElement("p",null,r.a.createElement("strong",null,"There are no items to display for the current filters selected.")),J?r.a.createElement(x.a,{hideRatingColumn:u,getSeason:v,items:z}):r.a.createElement(x.a,{overrideHeaders:R,getSeason:v,items:z})),r.a.createElement(p,h))}N.defaultProps={customDescriptiveText:"",showFilters:!1};t.a=N},nlUt:function(e,t,a){"use strict";a("DW2E"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=Object.freeze(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]);t.default=n},pwos:function(e,t,a){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,((n=a("q+ha"))&&n.__esModule?n:{default:n}).default)(23,59,59);t.default=r},"q+ha":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t,a){return function(n){var r=new Date(n);return new Date(r.getFullYear(),r.getMonth(),r.getDate(),e,t,a)}};t.default=n},rSgb:function(e,t,a){"use strict";a("a1Th"),a("Btvt"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return(e=e.toString()).length>=t?e:new Array(t-e.length+1).join(a)+e}},xjvq:function(e,t,a){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,((n=a("q+ha"))&&n.__esModule?n:{default:n}).default)(0,0,0);t.default=r}}]);
//# sourceMappingURL=component---src-templates-year-js-ab8ecb35e62949e76b58.js.map