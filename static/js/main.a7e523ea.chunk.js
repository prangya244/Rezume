(this["webpackJsonpreact-resume-builder"]=this["webpackJsonpreact-resume-builder"]||[]).push([[0],{13:function(e,a,n){},14:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(2),o=n.n(c),i=n(3),s=n(4),l=n(6),u=n(5),m=n(7),b=function(e){var a=e.Name,n=e.onClick,t=e.Active;return r.a.createElement("li",{className:"nav-item"+(t?" active":"")},r.a.createElement("span",{className:"nav-link",onClick:n},a))},v=function(e){var a=e.ChangePage,n=e.CurrentPage;return r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark justify-content-between"},r.a.createElement("span",{className:"navbar-brand mb-0 h1 col-1"},"React Resume Generator"),r.a.createElement("ul",{className:"navbar-nav"},["About","Sections","Contact","Design"].map((function(e){return r.a.createElement(b,{Name:e,Active:n===e,onClick:function(){return a(e)},key:e})}))),r.a.createElement("button",{className:"btn btn-primary btn-sm col-1"},"About Us"))},g=function(e){function a(){var e,n;Object(i.a)(this,a);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={CurrentPage:"About"},n.ChangePage=function(e){n.setState({CurrentPage:e})},n}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{ChangePage:this.ChangePage,CurrentPage:this.state.CurrentPage}))}}]),a}(t.Component);n(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.a7e523ea.chunk.js.map