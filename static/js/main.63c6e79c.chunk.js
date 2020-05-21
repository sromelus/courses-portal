(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{136:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(39),c=a.n(r),o=(a(48),a(49),a(1)),l=a(2),i=a(4),u=a(5),m=a(7),d=a(6),h=function(e){var t=e.title,a=e.id;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"grid-33"},s.a.createElement(o.b,{className:"course--module course--link",to:"courses/".concat(a)},s.a.createElement("h4",{className:"course--label"},"Course"),s.a.createElement("h3",{className:"course--title"},t))))},p=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={courses:[],className:"show"},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.state;t&&("/signout"===t.from.pathname&&this.props.context.actions.signOut());fetch("https://courses-library-api.herokuapp.com/api/courses").then((function(e){if(e.ok)return e})).then((function(e){return e.json()})).then((function(t){e.setState({courses:t.courses,className:"hidden"})})).catch((function(t){console.log(t),e.props.history.push("/error")}))}},{key:"render",value:function(){var e=this.state.courses.map((function(e){return s.a.createElement(h,{key:e._id,id:e._id,title:e.title})}));return s.a.createElement("div",{className:"bounds"},s.a.createElement("h1",{className:this.state.className}," Loading... "),e,s.a.createElement("div",{className:"grid-33"},s.a.createElement(o.b,{className:"course--module course--add--module",to:"/courses/create"},s.a.createElement("h3",{className:"course--add--title"},s.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 13 13",className:"add"},s.a.createElement("polygon",{points:"7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "})),"New Course"))))}}]),a}(n.Component),E=a(55),f=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).displayPlayButton=function(e,t,a){if(e&&e.emailAddress===t)return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.b,{className:"button",to:"/courses/".concat(a,"/update")},"Update Course"),s.a.createElement(o.b,{className:"button",to:"/courses/".concat(a,"/delete")},"Delete Course"))},e.state={course:"",materialsNeeded:"",userCourse:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("https://courses-library-api.herokuapp.com/api/courses/".concat(t)).then((function(e){if(e.ok)return e;var t="".concat(e.status," (").concat(e.statusText,")"),a=new Error(t);throw a=404===e.status?{error:a,path:"/notfound"}:{error:a,path:"/error"}})).then((function(e){return e.json()})).then((function(t){e.setState({course:t.course,materialsNeeded:t.course.materialsNeeded,userCourse:t.course.userId}),console.log(e.state)})).catch((function(t){console.error(t),e.props.history.push(t.path)}))}},{key:"render",value:function(){console.log(this.state);var e=this.state.course,t=e.title,a=e.description,n=e.estimatedTime,r=this.state.userCourse,c=r.firstName,l=r.lastName,i=r.emailAddress,u=this.state.materialsNeeded,m=this.props.match.params.id,d=this.props.context.user;return s.a.createElement("div",null,this.state.course?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"actions--bar"},s.a.createElement("div",{className:"bounds"},s.a.createElement("div",{className:"grid-100"},s.a.createElement("span",null,this.displayPlayButton(d,i,m)),s.a.createElement(o.b,{className:"button button-secondary",to:"/"},"Return to List")))),s.a.createElement("div",{className:"bounds course--detail"},s.a.createElement("div",{className:"grid-66"},s.a.createElement("div",{className:"course--header"},s.a.createElement("h4",{className:"course--label"},"Course"),s.a.createElement("h3",{className:"course--title"},t),s.a.createElement("p",null,"By ","".concat(c," ").concat(l))),s.a.createElement("div",{className:"course--description"},a)),s.a.createElement("div",{className:"grid-25 grid-right"},s.a.createElement("div",{className:"course--stats"},s.a.createElement("ul",{className:"course--stats--list"},s.a.createElement("li",{className:"course--stats--list--item"},s.a.createElement("h4",null,"Estimated Time"),s.a.createElement("h3",null,n)),s.a.createElement("li",{className:"course--stats--list--item"},s.a.createElement("h4",null,"Materials Needed"),s.a.createElement("ul",null,s.a.createElement(E,{source:u})))))))):s.a.createElement("h1",{className:"loading"}," Loading... "))}}]),a}(n.Component),v=a(13),N=function(e){var t=e.errors,a=null;return t.length&&(a=s.a.createElement("div",null,s.a.createElement("h2",{className:"validation--errors--label"},"Validation errors"),s.a.createElement("div",{className:"validation-errors"},s.a.createElement("ul",null,t.map((function(e,t){return s.a.createElement("li",{key:t},e)})))))),a},b=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).cancel=function(t){t.preventDefault(),e.props.history.push("/")},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n={title:a.title,description:a.description,estimatedTime:a.estimatedTime,materialsNeeded:a.materialsNeeded},s=e.props.context.user.encodedCredentials;fetch("https://courses-library-api.herokuapp.com/api/courses",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Authorization:"Basic ".concat(s)},body:JSON.stringify(n)}).then((function(t){if(201===t.status)return e.props.history.push("/"),[];if(400===t.status||401===t.status)return t.json().then((function(t){e.setState({errors:t.message})}));var a="".concat(t.status," (").concat(t.statusText,")");throw new Error(a)})).catch((function(t){console.error(t),e.props.history.push("/error")}))},e.state={title:"",description:"",estimatedTime:"",materialsNeeded:"",errors:[]},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.context.user;return s.a.createElement("div",{className:"bounds course--detail"},s.a.createElement("h1",null,"Create Course"),s.a.createElement(N,{errors:this.state.errors}),s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"grid-66"},s.a.createElement("div",{className:"course--header"},s.a.createElement("h4",{className:"course--label"},"Course"),s.a.createElement("div",null,s.a.createElement("input",{id:"title",name:"title",type:"text",className:"input-title course--title--input",placeholder:"Course title...",onChange:this.handleChange,value:this.state.title})),s.a.createElement("p",null,"By",e?" ".concat(e.firstName," ").concat(e.lastName):" ")),s.a.createElement("div",{className:"course--description"},s.a.createElement("div",null,s.a.createElement("textarea",{id:"description",name:"description",className:"",placeholder:"Course description...",onChange:this.handleChange,value:this.state.description})))),s.a.createElement("div",{className:"grid-25 grid-right"},s.a.createElement("div",{className:"course--stats"},s.a.createElement("ul",{className:"course--stats--list"},s.a.createElement("li",{className:"course--stats--list--item"},s.a.createElement("h4",null,"Estimated Time"),s.a.createElement("div",null,s.a.createElement("input",{id:"estimatedTime",name:"estimatedTime",type:"text",className:"course--time--input",placeholder:"Hours",onChange:this.handleChange,value:this.state.estimatedTime}))),s.a.createElement("li",{className:"course--stats--list--item"},s.a.createElement("h4",null,"Materials Needed"),s.a.createElement("div",null,s.a.createElement("textarea",{id:"materialsNeeded",name:"materialsNeeded",className:"",placeholder:"List materials Format Example... \n * Address Line1\n * Address Line2\n * City State\n OR\n 1. Address Line1\n 2. Address Line2\n 3. City State",onChange:this.handleChange,value:this.state.materialsNeeded})))))),s.a.createElement("div",{className:"grid-100 pad-bottom"},s.a.createElement("button",{className:"button",type:"submit"},"Create Course"),s.a.createElement("button",{className:"button button-secondary",onClick:this.cancel},"Cancel")))))}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).submit=function(t){t.preventDefault();var a=e.props.context.user.encodedCredentials,n=e.props.match.params.id;fetch("https://courses-library-api.herokuapp.com/api/courses/".concat(n),{method:"DELETE",headers:{"Content-Type":"application/json; charset=utf-8",Authorization:"Basic ".concat(a)}}).then((function(t){if(204===t.status)return e.props.history.push("/"),[];if(403===t.status)return e.props.history.push("/forbidden"),[];if(401===t.status)return t.json().then((function(t){e.setState((function(e){return{errors:t.message}}))}));var a="".concat(t.status," (").concat(t.statusText,")");throw new Error(a)})).catch((function(t){console.log(t),e.props.history.push("/error")}))},e.cancel=function(t){t.preventDefault();var a=e.props.match.params.id;e.props.history.push("/courses/".concat(a))},e.state={title:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="",a=this.props.context.user;a&&(t=a.emailAddress);var n=this.props.match.params.id;fetch("https://courses-library-api.herokuapp.com/api/courses/".concat(n)).then((function(e){if(e.ok)return e;var t="".concat(e.status," (").concat(e.statusText,")"),a=new Error(t);throw a=404===e.status?{error:a,path:"/notfound"}:{error:a,path:"/error"}})).then((function(e){return e.json()})).then((function(a){e.setState({title:a.course.title,userCourse:a.course.userCourse}),t===e.state.userCourse.emailAddress?console.log("Access granted"):(e.props.history.push("/forbidden"),console.log("Access denied"))})).catch((function(t){console.log(t),e.props.history.push(t.path)}))}},{key:"render",value:function(){var e=this.props.context.user,t=e.firstName,a=e.lastName,n=this.state.title;return s.a.createElement("div",null,n?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"actions--bar"},s.a.createElement("div",{className:"bounds"},s.a.createElement("div",{className:"grid-100"},s.a.createElement("p",null," Are you sure want to delete this course?"),s.a.createElement("button",{className:"button button-secondary",onClick:this.cancel},"CANCEL"),s.a.createElement("button",{className:"button",onClick:this.submit},"YES")))),s.a.createElement("div",{className:"bounds course--detail"},s.a.createElement("div",{className:"grid-66"},s.a.createElement("div",{className:"course--header"},s.a.createElement("h4",{className:"course--label"},"Course"),s.a.createElement("h3",{className:"course--title"},n),s.a.createElement("p",null,"By ","".concat(t," ").concat(a))),s.a.createElement("div",{className:"course--description"})),s.a.createElement("div",{className:"grid-25 grid-right"},s.a.createElement("div",{className:"course--stats"},s.a.createElement("ul",{className:"course--stats--list"}))))):s.a.createElement("h1",{className:"loading"}," Loading... "))}}]),a}(n.Component),C=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).cancel=function(t){t.preventDefault();var a=e.props.match.params.id;e.props.history.push("/courses/".concat(a))},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n={title:a.title,description:a.description,estimatedTime:a.estimatedTime,materialsNeeded:a.materialsNeeded},s=e.props.context.user.encodedCredentials,r=e.props.match.params.id;fetch("https://courses-library-api.herokuapp.com/api/courses/".concat(r),{method:"PUT",headers:{"Content-Type":"application/json; charset=utf-8",Authorization:"Basic ".concat(s)},body:JSON.stringify(n)}).then((function(t){if(204===t.status)return e.props.history.push("/"),[];if(400===t.status||401===t.status)return t.json().then((function(t){e.setState((function(e){return{errors:t.message}}))}));if(403===t.status)return e.props.history.push("/forbidden"),[];var a="".concat(t.status," (").concat(t.statusText,")");throw new Error(a)})).catch((function(t){console.log(t),e.props.history.push("/error")}))},e.state={title:"",description:"",estimatedTime:"",materialsNeeded:"",userCourse:"",errors:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="",a=this.props.context.user;a&&(t=a.emailAddress);var n=this.props.match.params.id;fetch("https://courses-library-api.herokuapp.com/api/courses/".concat(n)).then((function(e){if(console.log(e),e.ok)return e;var t="".concat(e.status," (").concat(e.statusText,")"),a=new Error(t);throw a=404===e.status?{error:a,path:"/notfound"}:{error:a,path:"/error"}})).then((function(e){return e.json()})).then((function(a){e.setState({title:a.course.title,description:a.course.description,estimatedTime:a.course.estimatedTime,materialsNeeded:a.course.materialsNeeded,userCourse:a.course.userId}),t===e.state.userCourse.emailAddress?console.log("Access granted"):(e.props.history.push("/forbidden"),console.log("Access denied"))})).catch((function(t){console.log(t),e.props.history.push(t.path)}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.estimatedTime,r=e.materialsNeeded,c=this.state.userCourse,o=c.firstName,l=c.lastName;return s.a.createElement("div",{className:"bounds course--detail"},this.state.userCourse?s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"Update Course"),s.a.createElement(N,{errors:this.state.errors}),s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"grid-66"},s.a.createElement("div",{className:"course--header"},s.a.createElement("h4",{className:"course--label"},"Course"),s.a.createElement("div",null,s.a.createElement("input",{id:"title",name:"title",type:"text",className:"input-title course--title--input",placeholder:"Course title...",onChange:this.handleChange,value:t})),s.a.createElement("p",null,"By ","".concat(o," ").concat(l))),s.a.createElement("div",{className:"course--description"},s.a.createElement("div",null,s.a.createElement("textarea",{id:"description",name:"description",className:"",placeholder:"Course description...",onChange:this.handleChange,value:a})))),s.a.createElement("div",{className:"grid-25 grid-right"},s.a.createElement("div",{className:"course--stats"},s.a.createElement("ul",{className:"course--stats--list"},s.a.createElement("li",{className:"course--stats--list--item"},s.a.createElement("h4",null,"Estimated Time"),s.a.createElement("div",null,s.a.createElement("input",{id:"estimatedTime",name:"estimatedTime",type:"text",className:"course--time--input",placeholder:"Hours",onChange:this.handleChange,value:n}))),s.a.createElement("li",{className:"course--stats--list--item"},s.a.createElement("h4",null,"Materials Needed"),s.a.createElement("div",null,s.a.createElement("textarea",{id:"materialsNeeded",name:"materialsNeeded",className:"",placeholder:"List materials...",onChange:this.handleChange,value:r})))))),s.a.createElement("div",{className:"grid-100 pad-bottom"},s.a.createElement("button",{className:"button",type:"submit"},"Update Course"),s.a.createElement("button",{className:"button button-secondary",onClick:this.cancel},"Cancel"))))):s.a.createElement("h1",null," Loading... "))}}]),a}(n.Component),y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).cancel=function(t){t.preventDefault(),e.props.history.push("/")},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.firstName,s=a.lastName,r=a.emailAddress,c=a.password,o=a.confirmPassword;if(c!==o)"Password and Confirm Password does not match",e.setState((function(e){return{errors:["Password and Confirm Password does not match"]}}));else{var l={firstName:n,lastName:s,emailAddress:r,password:c},i=e.props.context.actions.signIn;fetch("https://courses-library-api.herokuapp.com/api/users",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(l)}).then((function(t){if(201===t.status)return i(r,c).then((function(){e.props.history.push("/")})),[];if(400===t.status)return t.json().then((function(t){e.setState({errors:t.errors})}));if(409===t.status)return t.json().then((function(t){e.setState((function(e){return{errors:[t.error]}}))}));var a="".concat(t.status," (").concat(t.statusText,")");throw new Error(a)})).catch((function(t){console.log(t),e.props.history.push("/error")}))}},e.state={firstName:"",lastName:"",emailAddress:"",password:"",confirmPassword:"",errors:[]},e}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"bounds"},s.a.createElement("div",{className:"grid-33 centered signin"},s.a.createElement("h1",null,"Sign Up"),s.a.createElement(N,{errors:this.state.errors}),s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",null,s.a.createElement("input",{id:"firstName",name:"firstName",type:"text",className:"",placeholder:"First Name",onChange:this.handleChange,value:this.state.firstName})),s.a.createElement("div",null,s.a.createElement("input",{id:"lastName",name:"lastName",type:"text",className:"",placeholder:"Last Name",onChange:this.handleChange,value:this.state.lastName})),s.a.createElement("div",null,s.a.createElement("input",{id:"emailAddress",name:"emailAddress",type:"text",className:"",placeholder:"Email Address",onChange:this.handleChange,value:this.state.emailAddress})),s.a.createElement("div",null,s.a.createElement("input",{id:"password",name:"password",type:"password",className:"",placeholder:"Password",onChange:this.handleChange,value:this.state.password})),s.a.createElement("div",null,s.a.createElement("input",{id:"confirmPassword",name:"confirmPassword",type:"password",className:"",placeholder:"Confirm Password",onChange:this.handleChange,value:this.state.confirmPassword})),s.a.createElement("div",{className:"grid-100 pad-bottom"},s.a.createElement("button",{className:"button",type:"submit"},"Sign Up"),s.a.createElement("button",{className:"button button-secondary",onClick:this.cancel},"Cancel")))),s.a.createElement("p",null,"Already have a user account? ",s.a.createElement(o.b,{to:"/signin"},"Click here")," to sign in!")))}}]),a}(n.Component),w=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).cancel=function(t){t.preventDefault(),e.props.history.push("/")},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.props.context.actions.signIn,n=(e.props.location.state||{from:{pathname:"/"}}).from,s=e.state;a(s.emailAddress,s.password).then((function(t){if(void 0===t)e.props.history.push(n);else{if(401!==t.status){var a="".concat(t.status," (").concat(t.statusText,")");throw new Error(a)}e.setState({errors:["Sign-in was unsuccessful"]})}})).catch((function(t){console.log(t),e.props.history.push("/error")}))},e.state={emailAddress:"",password:"",currentUser:"",user:"",errors:[]},e}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"bounds"},s.a.createElement("div",{className:"grid-33 centered signin"},s.a.createElement("h1",null,"Sign In"),s.a.createElement(N,{errors:this.state.errors}),s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",null,s.a.createElement("input",{id:"emailAddress",name:"emailAddress",type:"text",className:"",placeholder:"Email Address",onChange:this.handleChange,value:this.state.emailAddress})),s.a.createElement("div",null,s.a.createElement("input",{id:"password",name:"password",type:"password",className:"",placeholder:"Password",onChange:this.handleChange,value:this.state.password})),s.a.createElement("div",{className:"grid-100 pad-bottom"},s.a.createElement("button",{className:"button",type:"submit"},"Sign In"),s.a.createElement("button",{className:"button button-secondary",onClick:this.cancel},"Cancel")))),s.a.createElement("p",null,"\xa0"),s.a.createElement("p",null,"Don't have a user account? ",s.a.createElement(o.b,{to:"/signup"},"Click here")," to sign up!")))}}]),a}(n.Component),j=function(){return s.a.createElement("div",{className:"bounds"},s.a.createElement("h1",null,"Not Found"),s.a.createElement("p",null,"Sorry! We couldn't find the page you're looking for."),s.a.createElement(o.b,{className:"button button-secondary",to:"/"},"Return to List"))},O=function(){return s.a.createElement("div",{className:"bounds"},s.a.createElement("h1",null,"Forbidden"),s.a.createElement("p",null,"Oh oh! You can't access this page."),s.a.createElement(o.b,{className:"button button-secondary",to:"/"},"Return to List"))},S=function(){return s.a.createElement("div",{className:"bounds"},s.a.createElement("h1",null,"Error"),s.a.createElement("p",null,"Sorry! We just encountered an unexpected error."),s.a.createElement(o.b,{className:"button button-secondary",to:"/"},"Return to List"))},x=a(29),k=a.n(x),T=a(41),A=a(19),P=a.n(A),D=s.a.createContext(),L=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).signIn=function(){var t=Object(T.a)(k.a.mark((function t(a,n){var s,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=btoa("".concat(a,":").concat(n)),t.next=3,fetch("https://courses-library-api.herokuapp.com/api/users",{method:"GET",headers:{"Content-Type":"application/json; charset=utf-8",Authorization:"Basic ".concat(s)}}).then((function(t){return 200===t.status?t.json().then((function(e){return e.name})).then((function(t){e.setState({user:{firstName:t.firstName,lastName:t.lastName,emailAddress:a,encodedCredentials:s}}),P.a.set("authenticatedUser",JSON.stringify(e.state.user),{expires:1})})):t}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.signOut=function(){P.a.remove("authenticatedUser"),e.setState({user:null})},e.state={user:P.a.getJSON("authenticatedUser")||null,userCredential:""},e}return Object(u.a)(a,[{key:"render",value:function(){var e={user:this.state.user,actions:{signIn:this.signIn,signOut:this.signOut}};return s.a.createElement(D.Provider,{value:e},this.props.children)}}]),a}(n.Component),B=D.Consumer;function I(e){return function(t){return s.a.createElement(D.Consumer,null,(function(a){return s.a.createElement(e,Object.assign({},t,{context:a}))}))}}var U=a(42),F=function(e){var t=e.component,a=Object(U.a)(e,["component"]);return s.a.createElement(B,null,(function(e){return s.a.createElement(l.b,Object.assign({},a,{render:function(a){return e.user?s.a.createElement(t,a):s.a.createElement(l.a,{to:{pathname:"/signin",state:{from:a.location}}})}}))}))},M=I((function(e){var t=e.context.user;return s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"bounds"},s.a.createElement("h1",{className:"header--logo",title:"Click to navigate to homepage"},s.a.createElement(o.b,{to:"/"},"Courses")),t?s.a.createElement("nav",null,s.a.createElement("span",null,"Welcome, ",t.firstName,"!"),s.a.createElement(o.b,{className:"signout",to:"/signout"},"Sign Out")):s.a.createElement("nav",null,s.a.createElement(o.b,{className:"signup",to:"/signup"},"Sign Up"),s.a.createElement(o.b,{className:"signin",to:"/signin"},"Sign In"))))})),J=I(w),R=I(y),W=I((function(e){return s.a.createElement(l.a,{to:{pathname:"/",state:{from:e.location}}})})),z=I(b),H=I(C),Y=I(f),_=I(g),G=I(p),V=function(){return s.a.createElement(o.a,null,s.a.createElement("div",null,s.a.createElement(M,null),s.a.createElement(l.d,null,s.a.createElement(l.b,{exact:!0,path:"/",component:G}),s.a.createElement(l.b,{exact:!0,path:"/courses",component:G}),s.a.createElement(F,{path:"/courses/create",component:z}),s.a.createElement(F,{path:"/courses/:id/update",component:H}),s.a.createElement(F,{path:"/courses/:id/delete",component:_}),s.a.createElement(l.b,{exact:!0,path:"/courses/:id",component:Y}),s.a.createElement(l.b,{path:"/signup",component:R}),s.a.createElement(l.b,{path:"/signin",component:J}),s.a.createElement(l.b,{path:"/signout",component:W}),s.a.createElement(l.b,{path:"/forbidden",component:O}),s.a.createElement(l.b,{path:"/error",component:S}),s.a.createElement(l.b,{path:"/notfound",component:j}),s.a.createElement(l.b,{component:j}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(L,null,s.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,t,a){e.exports=a(136)},48:function(e,t,a){},49:function(e,t,a){}},[[43,1,2]]]);
//# sourceMappingURL=main.63c6e79c.chunk.js.map