(this.webpackJsonphackathon_project=this.webpackJsonphackathon_project||[]).push([[0],{40:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var c=n(15),o=n.n(c),r=n(4),a=n(2),i=n(0),u=function(t){var e=t.note,n=t.deleteNote;return Object(i.jsxs)("li",{className:"note",children:[e.content,Object(i.jsx)("button",{onClick:n,children:"delete"})]})},s=function(t){var e=t.message;return null===e?null:Object(i.jsx)("div",{className:"error",children:e})},j=function(){return Object(i.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(i.jsx)("br",{}),Object(i.jsx)("em",{children:"Hackathon 2022"})]})},l=n(3),b=n.n(l),d="/api/notes",f=function(){return b.a.get(d).then((function(t){return t.data}))},h=function(t){return b.a.post(d,t).then((function(t){return t.data}))},O=function(t){var e=b.a.delete("".concat(d,"/").concat(t));return console.log("Calling delete"),e.then((function(t){return t.data}))},v=function(){var t=Object(a.useState)([]),e=Object(r.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(""),l=Object(r.a)(o,2),b=l[0],d=l[1],v=Object(a.useState)(!1),x=Object(r.a)(v,2),p=(x[0],x[1],Object(a.useState)(null)),m=Object(r.a)(p,2),g=m[0];m[1];Object(a.useEffect)((function(){f().then((function(t){c(t)}))}),[]);var S=n;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Notes"}),Object(i.jsx)(s,{message:g}),Object(i.jsx)("div",{}),Object(i.jsx)("ul",{children:S.map((function(t){return Object(i.jsx)(u,{note:t,deleteNote:function(){return function(t){n.find((function(e){return e.id===t}));var e=n.filter((function(e){return e.id!==t}));O(t).then((function(){c(e)})).catch((function(t){console.error(t)}))}(t.id)}},t.id)}))}),Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:b,date:(new Date).toISOString(),important:Math.random()>.5};h(e).then((function(t){c(n.concat(t)),d("")}))},children:[Object(i.jsx)("input",{value:b,onChange:function(t){console.log(t.target.value),d(t.target.value)}}),Object(i.jsx)("button",{type:"submit",children:"save"})]}),Object(i.jsx)(j,{})]})};n(40);o.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.b8cfbedb.chunk.js.map