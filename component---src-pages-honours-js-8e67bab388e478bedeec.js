(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{SeId:function(e,t,n){"use strict";n.r(t);n("a1Th"),n("rE2o"),n("ioFf"),n("XfO3"),n("HEwt"),n("KKXr"),n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),o=n("7oih"),i=n("EYWl"),s=n("cfVx");n("9AAn");var c=n("23Ag"),u=n("p3AD"),m=n("L6NH"),f=n("+9lZ");function h(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"query",(function(){return b}));var d=Object.keys(f.b).sort().reverse();function E(e){var t=e.slug,n=e.title,a=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["slug","title"]);return r.a.createElement("section",{style:{margin:Object(u.a)(1)+" 0"}},r.a.createElement("header",null,r.a.createElement(l.Link,{to:t,style:{textDecoration:"none",color:"inherit"}},r.a.createElement("h4",{className:"season-link"},Object(m.a)(n)))),r.a.createElement(s.a,Object.assign({hideSeason:!0},a)))}function p(e){var t=e.title,n=e.items,a=d.map((function(e){return n.some((function(n){return n.season===t+"-"+e}))?e:null})).filter((function(e){return null!==e})).length,o=4===a;return r.a.createElement("section",{style:{margin:Object(u.a)(1)+" 0"}},r.a.createElement("header",null,r.a.createElement(l.Link,{to:"/"+t+"/",style:{textDecoration:"none",color:"inherit"}},r.a.createElement("h3",{className:"season-link"},t,o?" - Overview":""))),!o&&r.a.createElement("p",null,"Once all seasons for the year are available, a top 5 ranking for the year table will be displayed.",r.a.createElement("br",null)," Below are top 3 rankings for each season in ",t,". ",r.a.createElement("br",null),"Unfinished seasons will not display the overall rating column."),o&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Below is a top 5 ranking for the year of ",t,".",r.a.createElement("br",null),"Following that each individual season for ",t," has a top 3 ranking."),r.a.createElement(s.a,{items:n.slice(0,5)})),d.map((function(e,l){var o=t+"-"+e;return n.some((function(e){return e.season===o}))?r.a.createElement(E,{key:e,slug:"/"+o+"/",title:f.b[e],items:n.filter((function(e){return e.season===o})).slice(0,3),hideRatingColumn:l+1>=a}):null})))}t.default=function(e){var t,n=function(e,t){void 0===t&&(t=function(e){return e});var n=new Map;return e.forEach((function(e){var a=t(e),r=n.get(a);r?r.push(e):n.set(a,[e])})),n}(null!==(t=e.data.allDataJson.nodes)&&void 0!==t?t:[],(function(e){return e.season.split("-")[0]})),a=Array.from(n.entries()).map((function(e){return[e[0],e[1].reduce((function(e,t){return[].concat(h(e),h(t.series.map((function(e){return Object.assign({},e,{season:t.season})}))))}),[]).sort(c.a)]}));return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Honours"}),r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h2",null,"Honours")),r.a.createElement("p",null,"Below are the best series of each season that currently has data on the site.",r.a.createElement("br",null)," These are automated based on the on the sort order of average desc, rating desc, mode desc, and title asc."),a.map((function(e){var t=e[0],n=e[1];return r.a.createElement(p,{key:t,title:t,items:n})}))))};var b="424902834"}}]);
//# sourceMappingURL=component---src-pages-honours-js-8e67bab388e478bedeec.js.map