(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1QcF":function(e,t,n){},TsVF:function(e,t,n){},"n1n/":function(e,t,n){},uhgt:function(e,t,n){},yZlL:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),c=(n("TsVF"),function(){return a.a.createElement("hr",{className:"custom-hr"})}),l=n("hpys"),i=n("CC2r"),o=function(e){var t=e.title;return a.a.createElement("h1",null,t)},u=n("wd/R"),s=n.n(u),m=(n("1QcF"),function(e){var t=e.date;return a.a.createElement("p",{className:"post-date"},s()(t).fromNow())}),f=function(e){var t=e.html;return a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},d=n("lbRd"),h=n("Wbzz"),E=(n("n1n/"),function(e){var t=e.pageContext,n=t.previous,r=t.next;return a.a.createElement("ul",{className:"navigator"},a.a.createElement("li",{className:"left_navi"},n&&a.a.createElement(h.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),a.a.createElement("li",{className:"right_navi"},r&&a.a.createElement(h.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →")))}),p=n("VPS8"),v=n("JqEL"),b=n("2w9V"),g=n("WlAH"),w=null,k=function(e){var t=e.repo;Object(r.useContext)(p.a);var n=Object(r.useRef)(null),c=a.a.createRef();return Object(r.useEffect)((function(){var e=b.c(v.f(g.b.DARK));if(n.current!==e){n.current=e,c.current.firstChild&&c.current.removeChild(c.current.firstChild),w=document.createElement("script");var r={src:"https://utteranc.es/client.js",repo:t,branch:"master",async:!0,"issue-term":"pathname",crossorigin:"anonymous",theme:e?"github-dark":"github-light"};Object.keys(r).forEach((function(e){w.setAttribute(e,r[e])})),c.current.appendChild(w)}})),a.a.createElement("div",{className:"utterences",ref:c})},C=n("EXIE");n("uhgt"),t.default=function(e){var t=e.data,n=e.pageContext,u=e.location;Object(r.useEffect)((function(){return C.c(),function(){return C.a()}}),[]);var s=t.markdownRemark,h=t.site.siteMetadata,p=h.title,v=h.comment.utterances;return a.a.createElement(l.a,{location:u,title:p,maxWidth:32,className:"post",home:!0},a.a.createElement(i.a,{title:s.frontmatter.title,description:s.excerpt,keywords:s.frontmatter.keywords}),a.a.createElement(o,{title:s.frontmatter.title}),a.a.createElement(m,{date:s.frontmatter.date}),a.a.createElement(f,{html:s.html}),a.a.createElement(c,null),a.a.createElement(d.a,null),a.a.createElement(E,{pageContext:n}),a.a.createElement(k,{repo:v}))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-45d578965d593060c076.js.map