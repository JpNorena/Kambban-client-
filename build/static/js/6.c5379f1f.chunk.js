(this["webpackJsonpjumbo-react"]=this["webpackJsonpjumbo-react"]||[]).push([[6],{440:function(a,e,t){"use strict";var s=t(0),c=t.n(s),n=t(442),r=t(443),l=function(a,e,t){return 0===t?"#/":"#/"+a.split(e)[0]+e};e.a=function(a){var e=a.title,t=a.match.path.substr(1),s=t.split("/");return c.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},c.a.createElement("h2",{className:"title mb-3 mb-sm-0"},e),c.a.createElement(n.a,{className:"mb-0",tag:"nav"},s.map((function(a,e){return c.a.createElement(r.a,{active:s.length===e+1,tag:s.length===e+1?"span":"a",key:e,href:l(t,a,e)},function(a){var e=a.split("-");return e.length>1?e[0].charAt(0).toUpperCase()+e[0].slice(1)+" "+e[1].charAt(0).toUpperCase()+e[1].slice(1):a.charAt(0).toUpperCase()+a.slice(1)}(a))}))))}},442:function(a,e,t){"use strict";var s=t(2),c=t(16),n=t(0),r=t.n(n),l=t(1),i=t.n(l),m=t(58),u=t.n(m),o=t(13),p={tag:o.d,listTag:o.d,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},b=function(a){var e=a.className,t=a.listClassName,n=a.cssModule,l=a.children,i=a.tag,m=a.listTag,p=a["aria-label"],b=Object(c.a)(a,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),d=Object(o.b)(u()(e),n),g=Object(o.b)(u()("breadcrumb",t),n);return r.a.createElement(i,Object(s.a)({},b,{className:d,"aria-label":p}),r.a.createElement(m,{className:g},l))};b.propTypes=p,b.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},e.a=b},443:function(a,e,t){"use strict";var s=t(2),c=t(16),n=t(0),r=t.n(n),l=t(1),i=t.n(l),m=t(58),u=t.n(m),o=t(13),p={tag:o.d,active:i.a.bool,className:i.a.string,cssModule:i.a.object},b=function(a){var e=a.className,t=a.cssModule,n=a.active,l=a.tag,i=Object(c.a)(a,["className","cssModule","active","tag"]),m=Object(o.b)(u()(e,!!n&&"active","breadcrumb-item"),t);return r.a.createElement(l,Object(s.a)({},i,{className:m,"aria-current":n?"page":void 0}))};b.propTypes=p,b.defaultProps={tag:"li"},e.a=b},579:function(a,e,t){"use strict";t.r(e),t.d(e,"statistics",(function(){return p}));var s=t(21),c=t(22),n=t(25),r=t(23),l=t(24),i=t(0),m=t.n(i),u=t(440),o=t(17),p=function(a){function e(){return Object(s.a)(this,e),Object(n.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(l.a)(e,a),Object(c.a)(e,[{key:"render",value:function(){return m.a.createElement("div",{className:"app-wrapper"},m.a.createElement(u.a,{match:this.props.match,title:m.a.createElement(o.a,{id:"pages.statistics"})}),m.a.createElement("div",{className:"page-heading"},m.a.createElement("h3",null,"Se mostraran las estadisticas de la pagina")))}}]),e}(i.Component);e.default=p}}]);
//# sourceMappingURL=6.c5379f1f.chunk.js.map