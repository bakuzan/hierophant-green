(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{196:function(e,A,t){"use strict";t.r(A);t(92),t(134),t(67),t(14),t(52),t(40),t(29),t(140),t(141),t(132);var a=t(0),n=t.n(a),r=t(198),i=t(205),l=(t(23),t(238)),c=t(209),o=t.n(c),s=t(200),u=t(197);var f=function(){var e=l.data,A=e.site.siteMetadata,t=e.profilePic.childImageSharp,a=s.c[Math.floor(Math.random()*s.c.length)];return n.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:Object(u.a)(1)}},n.a.createElement(o.a,Object.assign({},t,{alt:A.author,style:{marginRight:Object(u.a)(1/3),marginBottom:0,borderRadius:"50%"}})),n.a.createElement("p",{style:{maxWidth:290,marginBottom:0}},"Seasonal rating data by"," ",n.a.createElement("a",{href:A.malUrl,target:"_blank",rel:"noopener noreferrer"},A.author),". Behold my ",a," taste"))},g=t(203);t(30),t(50);var E=function(e){var A=e.className,t=function(e,A){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],A.indexOf(t)>=0||(n[t]=e[t]);return n}(e,["className"]),a=["foe-link",A].filter(function(e){return!!e}).join(" ");return n.a.createElement("button",Object.assign({type:"button",className:a},t))},m=t(199),d=t(207);function h(e){return function(e){if(Array.isArray(e)){for(var A=0,t=new Array(e.length);A<e.length;A++)t[A]=e[A];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e){var A=e.slug,t=e.text;return n.a.createElement("li",{style:{display:"flex"}},n.a.createElement(r.a,{to:A,style:{textDecoration:"none",color:"inherit"}},n.a.createElement("h3",{className:"season-link",style:{fontSize:Object(u.a)(1),marginTop:Object(u.a)(1),marginBottom:Object(u.a)(.25)}},t)))}t.d(A,"query",function(){return B});A.default=function(e){var A=e.data,t=Object(a.useState)(null),l=t[0],c=t[1];Object(a.useEffect)(function(){window.__theme&&c(!1)},[]);var o=A.allDataJson.edges.map(function(e){return e.node}),s=o.filter(function(e){return"Currently Airing"!==e.season}),B=s.map(function(e){return e.season.slice(0,4)}).filter(function(e,A,t){return t.indexOf(e)===A}).length,j=o.filter(function(e){return"Currently Airing"===e.season}).sort(function(e,A){return e.date>A.date?-1:1}),y=!l&&null!==l&&j.length>4;return j=l?j:j.slice(0,4),n.a.createElement(i.a,null,n.a.createElement(g.a,{title:"Home"}),n.a.createElement("aside",null,n.a.createElement(f,null)),n.a.createElement("div",null,n.a.createElement("h2",{id:"airing"},n.a.createElement(r.a,{to:"/#airing"},"Currently Airing")),n.a.createElement("ul",{style:{listStyleType:"none",margin:0,marginBottom:Object(u.a)(4)}},j.map(function(e){var A=Object(d.a)(e.fields.slug);return n.a.createElement(p,{key:e.id,slug:e.fields.slug,text:"Week of "+A})}),y&&n.a.createElement(E,{onClick:function(){return c(!0)}},"Show more weeks"))),n.a.createElement("div",null,n.a.createElement("h2",{id:"history"},n.a.createElement(r.a,{to:"/#history"},"Season History")),n.a.createElement("div",null,s.length," seasons, over ",B," years"),n.a.createElement("ul",{style:{listStyleType:"none",margin:0,marginBottom:Object(u.a)(4)}},s.reduce(function(e,A){var t=A.season.includes("-10"),a=A.season.slice(0,4);return[].concat(h(e),[t&&n.a.createElement(p,{key:A.id+"-year",slug:"/"+a+"/",text:a+" Overview"}),n.a.createElement(p,{key:A.id,slug:A.fields.slug,text:Object(m.a)(A.season)})])},[]))))};var B="1993147847"},238:function(e){e.exports={data:{site:{siteMetadata:{author:"bakuzan",malUrl:"https://myanimelist.net/profile/bakuzan"}},profilePic:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAfABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgED/9oADAMBAAIQAxAAAAHotWBaRJZnZSo0g0Bn/8QAHBAAAgIDAQEAAAAAAAAAAAAAAQIAEQMSMSFB/9oACAEBAAEFAsbebRTY6TRguuT6MkyDcIgVl5//xAAYEQADAQEAAAAAAAAAAAAAAAAAAREQIf/aAAgBAwEBPwFKZDp//8QAGBEBAQADAAAAAAAAAAAAAAAAACEBAhL/2gAIAQIBAT8B2tYdRH//xAAZEAACAwEAAAAAAAAAAAAAAAAAARARITH/2gAIAQEABj8Ctuelowtw8eQ2af/EABwQAAIDAQEBAQAAAAAAAAAAAAABESExQVFhcf/aAAgBAQABPyFlhfB2qaHStMWFIctekq6cOhC/RUlscPUv0sRPlGHAscjODLBJ/D//2gAMAwEAAgADAAAAEAfpQ//EABgRAAMBAQAAAAAAAAAAAAAAAAABETEh/9oACAEDAQE/EJpo10SpaUf/xAAZEQADAAMAAAAAAAAAAAAAAAAAAREQIVH/2gAIAQIBAT8QpthqlgvB/8QAHBABAQADAAMBAAAAAAAAAAAAAREAITFBUWHh/9oACAEBAAE/ECaPQcBGcyzBQ88cMgV5MRcnonHnDRaINh7swyn6GcjpG3cRxzg1CnnzEaYWlc/Jk00D0YT39x7VpB2jljcnVbPDn//Z",width:75,height:75,src:"/hierophant-green/static/f11d87a54fa4ace528a58d58eaf9fdcb/d9983/profile-pic.jpg",srcSet:"/hierophant-green/static/f11d87a54fa4ace528a58d58eaf9fdcb/d9983/profile-pic.jpg 1x,\n/hierophant-green/static/f11d87a54fa4ace528a58d58eaf9fdcb/81a03/profile-pic.jpg 1.5x,\n/hierophant-green/static/f11d87a54fa4ace528a58d58eaf9fdcb/dae30/profile-pic.jpg 2x"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-2c1a98dfa9b498b8c784.js.map