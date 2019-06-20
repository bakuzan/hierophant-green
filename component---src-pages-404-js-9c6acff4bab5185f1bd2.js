(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(167),o=a(166),c=a(162);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Page Not found"}),r.a.createElement("h2",null,"Not Found"),r.a.createElement("p",null,"This is not the page you are looking for..."),r.a.createElement(c.a,{to:"/"},"Return to the homepage"))}},160:function(e,t,a){"use strict";a.d(t,"a",function(){return l});a(178),a(179);var n=a(180),r=a.n(n),i=a(181),o=a.n(i);o.a.overrideThemeStyles=function(){return{a:{color:"var(--link-colour)",backgroundImage:"none",textShadow:"none"},"h1,h2,h3,h4,h5,h6":{color:"var(--text-title-colour)"},"td,th":{padding:c.rhythm(.5)}}},delete o.a.googleFonts;var c=new r.a(o.a);var l=c.rhythm;c.scale},161:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r}),a.d(t,"c",function(){return i});a(177);var n=Object.freeze({"01":"winter","04":"spring","07":"summer",10:"fall"}),r=Object.freeze({tick:"✓︎",cross:"❌︎",moon:"🌙︎",sun:"☀︎"}),i=Object.freeze(["expert","godly","refined","eccentric","cultured","trash","crude","crass","perverted","pathetic"])},162:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(5),o=a.n(i),c=a(39),l=a.n(c);a.d(t,"a",function(){return l.a});a(163),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},163:function(e,t,a){var n;e.exports=(n=a(169))&&n.default||n},165:function(e,t,a){"use strict";a(40);var n=a(95),r=a.n(n),i=a(5),o=a.n(i),c=a(0),l=a.n(c);function s(e){var t=e.children,a=r()(e,["children"]);return l.a.createElement("a",Object.assign({},a,{target:"_blank",rel:"noopener noreferrer"}),t)}s.displayName="NewTabLink",s.propTypes={href:o.a.string.isRequired},t.a=s},166:function(e,t,a){"use strict";var n=a(171),r=a(5),i=a.n(r),o=a(0),c=a.n(o),l=a(164),s=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,o=n.data.site,l=t||o.siteMetadata.description;return c.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=u},167:function(e,t,a){"use strict";var n=a(168),r=a(5),i=a.n(r),o=a(0),c=a.n(o),l=a(164),s=a.n(l),u=a(162),d=(a(40),a(175),a(95)),m=a.n(d),p=(a(176),a(161)),g=[p.a.cross,p.a.tick],h=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(function(e){return!!e}).join(" ")};function f(e){var t=e.className,a=e.label,n=e.icons,r=void 0===n?g:n,i=m()(e,["className","label","icons"]),l=Object(o.useState)(!1),s=l[0],u=l[1],d=Object(o.useRef)(),p=h("radio-toggle",i.checked&&"radio-toggle--checked",s&&"radio-toggle--focused",t);return c.a.createElement("div",{className:p,onClick:function(e){var t=d.current;e.target!==t&&(e.preventDefault(),t.focus(),t.click())}},c.a.createElement("div",{className:"radio-toggle__options"},c.a.createElement("div",{className:"radio-toggle__option radio-toggle__checked"},r[0]),c.a.createElement("div",{className:"radio-toggle__option radio-toggle__unchecked"},r[1])),c.a.createElement("div",{className:"radio-toggle__control"}),c.a.createElement("input",Object.assign({},i,{ref:d,onFocus:function(){return u(!0)},onBlur:function(){return u(!1)},onChange:function(e){var t=e.target,a=t.checked,n=t.name;i.onChange(a,n)},className:"radio-toggle__for-screenreader",type:"checkbox","aria-label":a})))}f.displayName="RadioToggle",f.propTypes={label:i.a.string.isRequired,icons:i.a.arrayOf(i.a.string),onChange:i.a.func.isRequired};var b=f,v=a(160);function y(e){var t=e.siteTitle,a=Object(o.useState)(null),n=a[0],r=a[1];return Object(o.useEffect)(function(){r(window.__theme),window.__onThemeChange=function(){r(window.__theme)}},[]),c.a.createElement("header",{style:{marginBottom:Object(v.a)(1)}},c.a.createElement(s.a,{meta:[{name:"theme-color",content:"theme theme--light"===n?"#ffa8c5":"#282c35"}]}),c.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0 auto",maxWidth:960,padding:Object(v.a)(1)+" "+Object(v.a)(.75)}},c.a.createElement("h1",{style:{margin:0}},c.a.createElement(u.a,{to:"/"},t)),null!==n&&c.a.createElement(b,{label:"Switch between Dark and Light mode",name:"theme",icons:[p.a.moon,p.a.sun],checked:"theme theme--dark"===n,onChange:function(e){return window.__setPreferredTheme(e?"theme theme--dark":"theme theme--light")}})))}y.propTypes={siteTitle:i.a.string},y.defaultProps={siteTitle:""};var E=y,k=(a(96),a(170)),w=a(165);function j(){return c.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:Object(v.a)(.25),color:"var(--primary-colour)"}},"-")}var _=function(){var e=k.data.site.siteMetadata,t=(new Date).toISOString().split("T"),a=t[0],n=t[1];return c.a.createElement("footer",{style:{padding:Object(v.a)(.2)+" 0px",borderTop:"1px solid var(--primary-colour)"}},c.a.createElement("div",{style:{display:"flex",alignItems:"center"}},c.a.createElement(w.a,{href:e.githubUrl},"creator"),c.a.createElement(j,null),c.a.createElement(w.a,{href:e.repoUrl},"source"),c.a.createElement(j,null),c.a.createElement(w.a,{href:e.malUrl},"myanimelist"),c.a.createElement(j,null),c.a.createElement(w.a,{href:e.tierListUrl},"make a tier list")),c.a.createElement("div",null,"Last updated"," ",a.split("-").reverse().join("-")," ",n.slice(0,5)," UTC"))},T=102;function O(e){var t=e.children,a=n.data;return c.a.createElement(c.a.Fragment,null,c.a.createElement(E,{siteTitle:a.site.siteMetadata.title}),c.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px "+Object(v.a)(.75)+" "+Object(v.a)(1),paddingTop:0}},c.a.createElement("main",{style:{minHeight:"calc(100vh - "+T+"px)"}},t),c.a.createElement(_,null)))}O.propTypes={children:i.a.node.isRequired};t.a=O},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Seasonal Anime Ratings"}}}}},169:function(e,t,a){"use strict";a.r(t);a(40);var n=a(0),r=a.n(n),i=a(5),o=a.n(i),c=a(67),l=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},170:function(e){e.exports={data:{site:{siteMetadata:{malUrl:"https://myanimelist.net/profile/bakuzan",tierListUrl:"https://yotanwa.herokuapp.com/",repoUrl:"https://github.com/bakuzan/hierophant-green",githubUrl:"https://github.com/bakuzan"}}}}},171:function(e){e.exports={data:{site:{siteMetadata:{title:"Seasonal Anime Ratings",description:"Breakdown of seasonal anime ratings for myanimelist user bakuzan",author:"bakuzan"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-9c6acff4bab5185f1bd2.js.map