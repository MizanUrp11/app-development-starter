(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{37:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(28),i=n.n(c),o=n(29),l=n(11),r=n(12),d=n(14),u=n(13),h=(n(36),n(37),n(9)),j=n.n(h),m={BASE:"https://lwhh-js.herokuapp.com"},p=n(2),b=n(0),g=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isSignup:!0,fullname:"",email:"",password:""},e.showSignupForm=function(){e.setState({isSignup:!0})},e.showLogin=function(){e.setState({isSignup:!1})},e.updateStateValue=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(o.a)({},a,s))},e.loginSignup=function(){var t=e.state,n=t.email,a=t.password;if(e.state.isSignup)if(e.state.fullname&&e.state.email&&e.state.password){var s=e.state.fullname;j.a.post("".concat(m.BASE,"/signup"),{name:s,email:n,password:a}).then((function(t){alert("".concat(t.data.message)),e.setState({isSignup:!1})})).catch((function(e){console.log("Sign up Error! please try again")})).then((function(t){e.setState({fullname:"",email:"",password:""})}))}else alert("Parameter missing.");else j.a.post("".concat(m.BASE,"/login"),{email:n,password:a}).then((function(t){var n=t.data.token;localStorage.setItem("access_token",n),e.setState({loginSuccess:!0})})).catch((function(e){alert("login unsuccessful.")})),e.state.email&&e.state.password||alert("Parameter missing for login.")},e}return Object(r.a)(n,[{key:"componentWillMount",value:function(){localStorage.getItem("access_token")&&this.setState({loginSuccess:!0})}},{key:"render",value:function(){return this.state.loginSuccess?Object(b.jsx)(p.a,{to:"/"}):Object(b.jsx)("div",{className:"container full-height",children:Object(b.jsx)("div",{className:"row full-height col-md-6 offset-md-3 justify-content-center align-items-center",children:Object(b.jsxs)("div",{className:"p-4 bg-light border border-1 rounded",children:[Object(b.jsx)("h2",{className:"mb-4",id:"Sign-Up-heading",children:this.state.isSignup?"Sign up":"Login"}),Object(b.jsx)("div",{className:"mb-3",style:{display:this.state.isSignup?"block":"none"},children:Object(b.jsx)("input",{onChange:this.updateStateValue,name:"fullname",className:"form-control",type:"text",placeholder:"Enter Name"})}),Object(b.jsx)("div",{class:"mb-3",children:Object(b.jsx)("input",{onChange:this.updateStateValue,name:"email",className:"form-control",type:"email",placeholder:"Enter Email"})}),Object(b.jsx)("div",{class:"mb-3",children:Object(b.jsx)("input",{onChange:this.updateStateValue,name:"password",className:"form-control",type:"password",placeholder:"Enter Password"})}),Object(b.jsxs)("div",{class:"d-grid gap-2",children:[Object(b.jsx)("button",{onClick:this.loginSignup,className:"btn btn-primary",type:"button",children:this.state.isSignup?"Sign up":"Login"}),Object(b.jsx)("button",{style:{display:this.state.isSignup?"none":"block"},onClick:this.showSignupForm,className:"btn btn-primary",type:"button",children:"Sign Up Now \u2192"}),Object(b.jsx)("button",{style:{display:this.state.isSignup?"block":"none"},onClick:this.showLogin,className:"btn btn-primary",type:"button",children:"\u2190 Go Back To Login"})]})]})})})}}]),n}(a.Component);function f(e){return e.condition?Object(b.jsx)("div",{className:e.className,children:e.children}):null}function x(e){return e.condition?Object(b.jsx)("div",{className:"row py-3 rounded mb-3 bg-dark",children:Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsx)("h3",{className:"text-center text-light",children:"There is no shortend url"})})}):null}function O(e){return Object(b.jsx)("div",{className:"row bg-info py-3 rounded mb-3",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-8",children:Object(b.jsx)("p",{style:{"max-width":150},className:"text-secondary text-truncate",children:e.data.destination})}),Object(b.jsx)("div",{className:"col-md-4 d-none d-lg-block d-xl-none",children:Object(b.jsx)("p",{className:"text-secondary text-end",children:e.data.createdAt.split("T")[0]})})]}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",className:"h3 text-dark text-decoration-none",href:e.data.destination,children:"".concat(m.BASE,"/").concat(e.data.hash)})})]})})}var S=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={loggedIn:!0,loading:!1,newHash:"",token:"",urlList:[]},e.getMyList=function(){j.a.get("".concat(m.BASE,"/api/v1/redirects"),{headers:{"auth-token":e.state.token}}).then((function(t){e.setState({urlList:t.data})})).catch((function(e){console.log(e)}))},e.scheduleClear=function(){e.setState({newHash:""})},e.HandleKeyUp=function(t){if(13===t.keyCode){var n=t.target.value;t.target.value="",n&&n.match(/^https?:\/\/.{3,}/)&&(e.setState({loading:!0}),j.a.post("".concat(m.BASE,"/api/v1/redirects"),{url:n},{headers:{"auth-token":e.state.token}}).then((function(t){e.setState({newHash:t.data.hash}),setTimeout(e.scheduleClear,5e3)})).catch((function(e){console.log(e)})).finally((function(){e.setState({loading:!1})})))}},e}return Object(r.a)(n,[{key:"componentWillMount",value:function(){var e=localStorage.getItem("access_token");e?this.setState({token:e},this.getMyList):this.setState({loggedIn:!1})}},{key:"render",value:function(){return this.state.loggedIn?Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsx)("h2",{className:"text-center py-5 my-3",children:"Welcome to Dashboard"}),Object(b.jsx)("div",{className:"row bg-light py-3 rounded",children:Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{className:"form-label",for:"urls",children:"Input Url"}),Object(b.jsx)("input",{id:"urls",onKeyUp:this.HandleKeyUp,className:"form-control",type:"url",placeholder:"Enter url and press Enter to shorten."})]})})}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)(f,{condition:this.state.newHash,className:"alert alert-success alert-dismissible fade show",style:{position:"fixed",bottom:0,right:0},role:"alert",children:"".concat(m.BASE,"/").concat(this.state.newHash)})}),Object(b.jsx)("div",{className:"url-list",children:this.state.urlList.reverse().map((function(e,t){return Object(b.jsx)(O,{data:e},t)}))}),Object(b.jsx)(x,{condition:!this.state.urlList.length,children:" "})]})}):Object(b.jsx)(p.a,{to:"/"})}}]),n}(a.Component),v=n(31);function y(){return localStorage.getItem("access_token")?Object(b.jsx)(p.a,{to:"/urls"}):Object(b.jsx)(p.a,{to:"/loginsignup"})}var N=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(v.a,{children:[Object(b.jsx)(p.b,{exact:!0,path:"/",component:y}),Object(b.jsx)(p.b,{path:"/urls",component:S}),Object(b.jsx)(p.b,{path:"/loginsignup",component:g})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),w()}},[[62,1,2]]]);
//# sourceMappingURL=main.c84f6596.chunk.js.map