(this["webpackJsonpblog-user"]=this["webpackJsonpblog-user"]||[]).push([[0],{43:function(e,t,n){},45:function(e,t,n){},74:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(31),c=n.n(s),i=n(9),o=(n(40),n(41),n(43),n(2)),l=n.n(o),u=n(6),j=n(5),b=n(4),m=n(3),p=n(35);function d(){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(l.a.mark((function e(){var t,n,a=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.prev=1,e.next=4,fetch(t,{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}});case 4:return n=e.sent,e.abrupt("return",n.json());case 8:e.prev=8,e.t0=e.catch(1),window.flashes([{msg:"Something went wrong, please try again later."}]);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function f(){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(l.a.mark((function e(){var t,n,a,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n=r.length>1&&void 0!==r[1]?r[1]:{},e.prev=2,e.next=5,fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))},body:JSON.stringify(n)});case 5:return a=e.sent,e.abrupt("return",a.json());case 9:e.prev=9,e.t0=e.catch(2),window.flashes([{msg:"Something went wrong, please try again later."}]);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function x(e){window.flashes([{msg:e.message}])}var v=n(32),g=new(n.n(v).a),w=(n(45),n(0));var N=function(e){var t=e.type,n=e.size;return Object(w.jsx)("div",{className:"BootstrapSpinner",children:Object(w.jsx)("div",{className:"spinner-".concat(t," text-primary"),style:{width:n,height:n},role:"status",children:Object(w.jsx)("span",{className:"sr-only",children:"Loading..."})})})};var y=function(e){var t=e.user,n=e.signOut;return Object(w.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary sticky-top mb-4",children:[Object(w.jsx)(i.c,{to:"/",className:"navbar-brand",children:"Blog User"}),Object(w.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(w.jsx)("span",{className:"navbar-toggler-icon"})}),Object(w.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(w.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)(i.c,{exact:!0,to:"/posts",className:"nav-link",activeClassName:"active",children:"Posts"})}),t?Object(w.jsxs)("li",{className:"nav-item dropdown",children:[Object(w.jsx)("button",{className:"nav-link btn btn-link dropdown-toggle",id:"navbarDropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:t.username}),Object(w.jsx)("div",{className:"dropdown-menu dropdown-menu-right",children:Object(w.jsx)("button",{className:"dropdown-item",type:"button",onClick:n,children:"Sign out"})})]}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)(i.c,{exact:!0,to:"/auth/sign-up",className:"nav-link",activeClassName:"active",children:"Sign Up"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)(i.c,{exact:!0,to:"/auth/sign-in",className:"nav-link",activeClassName:"active",children:"Sign In"})})]})]})})]})};var S=function(e){var t=e.flashes,n=e.onFlashDelete;return Object(w.jsx)(r.a.Fragment,{children:t.map((function(e){return Object(w.jsxs)("div",{className:"alert alert-".concat(e.type||"danger"," alert-dismissible"),role:"alert",children:[e.msg,Object(w.jsx)("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){return n(e.id)},children:Object(w.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]},e.id)}))})},k=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){return r(!0),function(){return r(!1)}}),[]),n},C=n(15),F=n.n(C),P=n(18),D=n.n(P),I=n(34),L=n.n(I);var q=function(e){var t=e.post;return Object(w.jsxs)("article",{className:"card mb-2",children:[Object(w.jsxs)("div",{className:"card-header",children:[Object(w.jsx)("h5",{className:"card-title",children:t.title}),Object(w.jsx)("p",{className:"card-subtitle mb-2",children:t.author.firstName+" "+t.author.lastName}),Object(w.jsx)("p",{className:"card-subtitle",children:D()(new Date(t.createdAt),"PPpp")})]}),Object(w.jsxs)("div",{className:"card-body",children:[Object(w.jsx)("p",{className:"card-text",children:t.body}),Object(w.jsx)(i.b,{to:"/posts/".concat(t._id),className:"card-link",children:L()("comments",t.comments.length,!0)})]})]})};function E(e){var t=e.posts.map((function(e){return Object(w.jsx)(q,{post:e},e._id)}));return Object(w.jsx)(w.Fragment,{children:t})}E.propTypes={posts:F.a.array.isRequired};var T=E;var U=function(){var e=k(),t=Object(a.useState)(!1),n=Object(b.a)(t,2),r=n[0],s=n[1],c=Object(a.useState)([]),i=Object(b.a)(c,2),o=i[0],j=i[1];function m(){return(m=Object(u.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){return(n=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("".concat("https://blog-api-97575.herokuapp.com","/posts"));case 3:if(!(t=e.sent).err){e.next=8;break}x(t.err),e.next=9;break;case 8:return e.abrupt("return",t.posts);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),window.flashes([{msg:"Something went wrong, please try again later."}]);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)},t=function(){return n.apply(this,arguments)},s(!0),e.next=5,t();case 5:a=e.sent,s(!1),j(a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){e&&function(){m.apply(this,arguments)}()}),[e]),r?Object(w.jsx)("div",{className:"position-relative",style:{minHeight:"30em"},children:Object(w.jsx)(N,{type:"border",size:"2em"})}):Object(w.jsx)(T,{posts:o})};var z=function(){return Object(w.jsx)("div",{className:"container",children:Object(w.jsx)("div",{className:"row justify-content-center",children:Object(w.jsx)("div",{className:"col-md-8",children:Object(w.jsx)("section",{children:Object(w.jsx)(U,{})})})})})},B=n(14);function _(e){var t=e.text;return e.isSubmitting?Object(w.jsxs)("button",{type:"submit",className:"btn btn-primary w-100",disabled:!0,children:[Object(w.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Submitting..."]}):Object(w.jsx)("button",{type:"submit",className:"btn btn-primary w-100",children:t})}_.defaultProps={text:"Submit"};var A=_;var J=function(e){var t=e.postId,n=e.updatePostComments,r=k(),s=Object(a.useState)({body:""}),c=Object(b.a)(s,2),i=c[0],o=c[1],m=Object(a.useState)(!1),p=Object(b.a)(m,2),d=p[0],h=p[1];function O(){return(O=Object(u.a)(l.a.mark((function e(a){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.preventDefault(),h(!0),e.next=5,f("".concat("https://blog-api-97575.herokuapp.com","/posts/").concat(t,"/comments"),i);case 5:s=e.sent,h(!1),s.err?x(s.err):s.errors?(r&&o((function(e){return Object(j.a)(Object(j.a)({},e),{},{body:s.comment.body})})),window.flashes(s.errors)):(r&&(o((function(e){return Object(j.a)(Object(j.a)({},e),{},{body:""})})),n(t)),window.flashes([{msg:"Comment successfully created",type:"success"}])),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),window.flashes([{msg:"Something went wrong, please try again later."}]);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(w.jsxs)("form",{onSubmit:function(e){return O.apply(this,arguments)},className:"mb-2",children:[Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"body",children:"Write a comment"}),Object(w.jsx)("textarea",{className:"form-control",id:"body",name:"body",value:i.body,onChange:function(e){var t=e.target,n=t.name,a=t.value;o((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(B.a)({},n,a))}))},required:!0,maxLength:200})]}),Object(w.jsx)(A,{text:"Comment",isSubmitting:d})]})};var H=function(e){var t=e.postComments;return t.length>0?Object(w.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(w.jsxs)("li",{className:"list-group-item",children:[Object(w.jsx)("p",{className:"h6 mb-1",children:e.author.firstName+" "+e.author.lastName}),Object(w.jsx)("p",{className:"text-muted mb-2",children:D()(new Date(e.createdAt),"PPpp")}),Object(w.jsx)("p",{className:"mb-2",children:e.body})]},e._id)}))}):null};var Y=function(e){var t=e.user,n=Object(m.h)().postId,r=Object(m.g)(),s=k(),c=Object(a.useState)(!1),i=Object(b.a)(c,2),o=i[0],p=i[1],h=Object(a.useState)({comments:[]}),f=Object(b.a)(h,2),O=f[0],v=f[1],g=Object(a.useState)(!1),y=Object(b.a)(g,2),S=y[0],C=y[1];function F(e){return P.apply(this,arguments)}function P(){return(P=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("".concat("https://blog-api-97575.herokuapp.com","/posts/").concat(t,"/comments"));case 3:if(!(n=e.sent).err){e.next=9;break}[401,404].includes(n.err.status)&&r.push("/"),x(n.err),e.next=10;break;case 9:return e.abrupt("return",n.comments);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),window.flashes([{msg:"Something went wrong, please try again later."}]);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function D(){return(D=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=7;break}return C(!0),e.next=4,F(t);case 4:n=e.sent,C(!1),v((function(e){return Object(j.a)(Object(j.a)({},e),{},{comments:n})}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(e){return t.apply(this,arguments)}function t(){return(t=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d("".concat("https://blog-api-97575.herokuapp.com","/posts/").concat(t));case 3:if(!(n=e.sent).err){e.next=9;break}[401,404].includes(n.err.status)&&r.push("/"),x(n.err),e.next=10;break;case 9:return e.abrupt("return",n.post);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),window.flashes([{msg:"Something went wrong, please try again later."}]);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function a(){return(a=Object(u.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),C(!0),t.next=4,e(n);case 4:a=t.sent,p(!1),C(!1),v(a);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}s&&function(e){a.apply(this,arguments)}(n)}),[s,n]),Object(w.jsx)("div",{className:"container",children:Object(w.jsx)("div",{className:"row justify-content-center",children:Object(w.jsx)("div",{className:"col-md-8",children:Object(w.jsxs)("section",{children:[o?Object(w.jsx)("div",{className:"bootstrap-spinner-container",style:{minHeight:"30em"},children:Object(w.jsx)(N,{type:"border",size:"2em"})}):O._id&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(q,{post:O}),t&&O.published&&Object(w.jsx)(J,{postId:n,updatePostComments:function(e){return D.apply(this,arguments)}})]}),S?Object(w.jsx)("div",{className:"position-relative",style:{minHeight:"10em"},children:Object(w.jsx)(N,{type:"border",size:"2em"})}):Object(w.jsx)(H,{postComments:O.comments})]})})})})};var G=function(){var e=Object(m.g)(),t=k(),n=Object(a.useState)({firstName:"",lastName:"",username:"",password:"",confirmPassword:""}),r=Object(b.a)(n,2),s=r[0],c=r[1],i=Object(a.useState)(!1),o=Object(b.a)(i,2),p=o[0],d=o[1];function h(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(B.a)({},n,a))}))}function O(){return(O=Object(u.a)(l.a.mark((function n(a){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a.preventDefault(),d(!0),n.next=5,f("".concat("https://blog-api-97575.herokuapp.com","/users"),s);case 5:r=n.sent,d(!1),r.err?x(r.err):r.errors?(t&&c({firstName:r.userFormData.firstName,lastName:r.userFormData.lastName,username:r.userFormData.username,password:"",confirmPassword:""}),window.flashes(r.errors)):(window.flashes([{msg:"You have successfuly signed up",type:"success"}]),e.push("/")),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),window.flashes([{msg:"Something went wrong, please try again later."}]);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}return Object(w.jsxs)("form",{onSubmit:function(e){return O.apply(this,arguments)},children:[Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"firstName",children:"First name"}),Object(w.jsx)("input",{type:"text",className:"form-control",id:"firstName",placeholder:"John",name:"firstName",value:s.firstName,required:!0,maxLength:"255",onChange:h})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"lastName",children:"Last name"}),Object(w.jsx)("input",{type:"text",className:"form-control",id:"lastName",placeholder:"Doe",name:"lastName",value:s.lastName,required:!0,maxLength:"255",onChange:h})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"username",children:"Username"}),Object(w.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"johnDoe01",name:"username",value:s.username,required:!0,pattern:"^[a-zA-Z0-9-_]+$",title:"Username can only contain letters, numbers, - and _'",maxLength:"20",onChange:h})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"password",children:"Password"}),Object(w.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",value:s.password,required:!0,minLength:"8",onChange:h})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"confirmPassword",children:"Password confirmation"}),Object(w.jsx)("input",{type:"password",className:"form-control",id:"confirmPassword",name:"confirmPassword",value:s.confirmPassword,required:!0,minLength:"8",onChange:h})]}),Object(w.jsx)(A,{isSubmitting:p})]})};var M=function(){return Object(w.jsx)("div",{className:"container",children:Object(w.jsx)("div",{className:"row justify-content-center",children:Object(w.jsx)("div",{className:"col-md-6",children:Object(w.jsx)("section",{children:Object(w.jsx)(G,{})})})})})};var R=function(e){var t=e.setUser,n=Object(m.g)(),r=k(),s=Object(a.useState)({username:"",password:""}),c=Object(b.a)(s,2),i=c[0],o=c[1],p=Object(a.useState)(!1),d=Object(b.a)(p,2),h=d[0],O=d[1];function v(e){var t=e.target,n=t.name,a=t.value;o((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(B.a)({},n,a))}))}function g(){return(g=Object(u.a)(l.a.mark((function e(a){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.preventDefault(),O(!0),e.next=5,f("".concat("https://blog-api-97575.herokuapp.com","/auth/sign-in"),i);case 5:s=e.sent,O(!1),s.err?(r&&o((function(e){return Object(j.a)(Object(j.a)({},e),{},{password:""})})),x(s.err)):(localStorage.setItem("jwt",s.token),t(s.user),window.flashes([{msg:"You have successfuly signed in",type:"success"}]),n.push("/")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),window.flashes([{msg:"Something went wrong, please try again later."}]);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(w.jsxs)("form",{onSubmit:function(e){return g.apply(this,arguments)},children:[Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"username",children:"Username"}),Object(w.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"johnDoe01",name:"username",value:i.username,required:!0,maxLength:"20",onChange:v})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{htmlFor:"password",children:"Password"}),Object(w.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",value:i.password,required:!0,minLength:"8",onChange:v})]}),Object(w.jsx)(A,{isSubmitting:h})]})};var W=function(e){var t=e.setUser;return Object(w.jsx)("div",{className:"container",children:Object(w.jsx)("div",{className:"row justify-content-center",children:Object(w.jsx)("div",{className:"col-md-6",children:Object(w.jsx)("section",{children:Object(w.jsx)(R,{setUser:t})})})})})};n(74);var Z=function(){var e=Object(m.g)(),t=Object(a.useState)(null),n=Object(b.a)(t,2),r=n[0],s=n[1],c=Object(a.useState)([]),i=Object(b.a)(c,2),o=i[0],h=i[1];return Object(a.useEffect)((function(){g.addListener("flashes",(function(e){var t=e.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{id:Object(p.a)()})}));h(t)}))}),[]),Object(a.useEffect)((function(){window.flashes=function(e){return g.emit("flashes",e)}}),[]),Object(a.useEffect)((function(){if(o.length>0){var e=setTimeout((function(){return h([])}),4e3);return function(){return clearTimeout(e)}}}),[o]),Object(a.useEffect)((function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("".concat("https://blog-api-97575.herokuapp.com","/users/current-user"));case 2:t=e.sent,s(t.user);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e();var n=setInterval(e,3e4);return function(){return clearInterval(n)}}),[]),null===r?Object(w.jsx)(N,{type:"grow",size:"3em"}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(y,{user:r,signOut:function(){localStorage.removeItem("jwt"),s(!1),window.flashes([{msg:"You have successfully signed out",type:"success"}]),e.push("/")}}),o.length>0&&Object(w.jsx)("div",{className:"container",children:Object(w.jsx)("div",{className:"row justify-content-center",children:Object(w.jsx)("div",{className:"col-md-8",children:Object(w.jsx)(S,{flashes:o,onFlashDelete:function(e){var t=o.filter((function(t){return t.id!==e}));h(t)}})})})}),Object(w.jsx)("main",{children:Object(w.jsxs)(m.d,{children:[Object(w.jsx)(m.b,{exact:!0,path:"/",children:Object(w.jsx)(m.a,{to:"/posts"})}),Object(w.jsx)(m.b,{exact:!0,path:"/posts",children:Object(w.jsx)(z,{})}),Object(w.jsx)(m.b,{exact:!0,path:"/posts/:postId",children:Object(w.jsx)(Y,{user:r})}),Object(w.jsx)(m.b,{exact:!0,path:"/auth/sign-up",children:r?Object(w.jsx)(m.a,{to:"/"}):Object(w.jsx)(M,{})}),Object(w.jsx)(m.b,{exact:!0,path:"/auth/sign-in",children:r?Object(w.jsx)(m.a,{to:"/"}):Object(w.jsx)(W,{setUser:s})})]})})]})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};n(75).config(),c.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(i.a,{children:Object(w.jsx)(Z,{})})}),document.getElementById("root")),$()}},[[78,1,2]]]);
//# sourceMappingURL=main.810518ed.chunk.js.map