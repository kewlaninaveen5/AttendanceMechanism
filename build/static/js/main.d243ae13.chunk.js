(this.webpackJsonptechnokids=this.webpackJsonptechnokids||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),r=n.n(i),c=n(17),o=n.n(c),s=(n(27),n(3)),l=n(4),d=n(6),u=n(5),h=(n(28),n(29),function(e){return Object(a.jsx)("button",{disabled:e.disabled,className:["Button",[e.buttonType]].join(" "),onClick:e.clicked,children:e.children})}),j=n(2),b=n(18),g=n.n(b),v=n(19),p=n.n(v).a.create({baseURL:"https://technokids-cfec5-default-rtdb.firebaseio.com/"}),f=n(20),O=n.n(f),m=function(){return Object(a.jsx)("div",{className:O.a.Loader,children:"Loading..."})},y=(n(48),function(e){var t=null,n=["InputElement"];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push("Invalid"),e.elementType){case"input":t=Object(a.jsx)("input",Object(j.a)(Object(j.a)({className:n.join(" "),onChange:e.changed},e.elementConfig),{},{value:e.value}));break;case"textarea":t=Object(a.jsx)("textarea",Object(j.a)(Object(j.a)({className:n.join(" "),onChange:e.changed},e.elementConfig),{},{value:e.value}));break;case"select":t=Object(a.jsx)("select",{onChange:e.changed,className:n.join(" "),value:e.value,children:e.elementConfig.options.map((function(e){return Object(a.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;default:t=Object(a.jsx)("input",Object(j.a)(Object(j.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value}))}return Object(a.jsxs)("div",{className:"Input",children:[Object(a.jsx)("label",{className:"Label",children:e.label}),t]})}),x=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Email"},value:"",validation:{required:!0},valid:!1,touched:!1},Password:{elementType:"input",elementConfig:{type:"",placeholder:"Enter a Password"},value:"",validation:{required:!0},valid:!1,touched:!1}},formIsValid:!1,loading:!1},e.orderHandler=function(t){t.preventDefault();var n={};for(var a in e.state.orderForm)n[a]=e.state.orderForm[a].value;e.setState({loading:!0});var i={UserType:e.props.UserType,userDetails:n};"Teacher"===e.props.UserType&&p.post("teacher.json",i).then((function(t){e.setState({loading:!1}),e.props.history.push("/")})).catch((function(t){e.setState({loading:!1})})),"Student"===e.props.UserType&&p.post("students.json",i).then((function(t){e.setState({loading:!1}),e.props.history.push("/")})).catch((function(t){e.setState({loading:!1})})),console.log(i)},e.inputChangedHandler=function(t,n){var a=Object(j.a)({},e.state.orderForm),i=Object(j.a)({},a[n]);i.value=t.target.value,i.valid=e.checkValidity(i.value,i.validation),i.touched=!0,a[n]=i;var r=!0;for(var c in a)r=a[c].valid&&r;e.setState({orderForm:a,formIsValid:r})},e}return Object(l.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;return t.required&&(n=""!==e.trim()&&n),n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var i=Object(a.jsxs)("form",{onSubmit:this.orderHandler,children:[t.map((function(t){return Object(a.jsx)(y,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.value,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}},t.id)})),Object(a.jsx)(h,{buttonType:"Success",disabled:!this.state.formIsValid,children:"REGISTER"})]});return this.state.loading&&(i=Object(a.jsx)(m,{})),Object(a.jsx)("div",{className:g.a.RegistrationData,children:i})}}]),n}(i.Component),T=n(21),S=n.n(T),C=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={orderForm:{email:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Email"},value:"",validation:{required:!0},valid:!1,touched:!1},Password:{elementType:"input",elementConfig:{type:"",placeholder:"Enter a Password"},value:"",validation:{required:!0},valid:!1,touched:!1}},formIsValid:!1,loading:!1},e.orderHandler=function(e){},e.inputChangedHandler=function(t,n){var a=Object(j.a)({},e.state.orderForm),i=Object(j.a)({},a[n]);i.value=t.target.value,i.valid=e.checkValidity(i.value,i.validation),i.touched=!0,a[n]=i;var r=!0;for(var c in a)r=a[c].valid&&r;e.setState({orderForm:a,formIsValid:r})},e}return Object(l.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;return t.required&&(n=""!==e.trim()&&n),n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var i=Object(a.jsxs)("form",{onSubmit:this.orderHandler,children:[t.map((function(t){return Object(a.jsx)(y,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.value,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}},t.id)})),Object(a.jsx)(h,{buttonType:"Success",disabled:!this.state.formIsValid,children:"Login"})]});return this.state.loading&&(i=Object(a.jsx)(m,{})),Object(a.jsxs)("div",{className:S.a.RegistrationData,children:[console.log("Hello world"),Object(a.jsx)("h3",{children:"Enter Your Login Details"}),i]})}}]),n}(i.Component),k="Teacher",I="Student",L=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={Registering:!1,UserType:null,LogInDetails:!1},e.registerStudent=function(){e.setState({Registering:!0,UserType:I,LogInDetails:!1})},e.registerTeacher=function(){e.setState({Registering:!0,UserType:k,LogInDetails:!1})},e.login=function(){e.setState({LogInDetails:!0,Registering:!1})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=null;this.state.Registering&&(e=Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:["Registering as: ",this.state.UserType," "]}),Object(a.jsx)(x,{UserType:this.state.UserType})]}));var t=this.state.LogInDetails?Object(a.jsx)("div",{children:Object(a.jsx)(C,{})}):Object(a.jsx)(h,{buttonType:"Registration",clicked:this.login,children:"LOGIN"});return Object(a.jsxs)("div",{children:[Object(a.jsx)(h,{buttonType:"Registration",clicked:this.registerStudent,children:"Register as a Student"}),Object(a.jsx)(h,{buttonType:"Registration",clicked:this.registerTeacher,children:"Register as a Teacher"}),e,t]})}}]),n}(i.Component),U=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:" Welcome to Student Portal "}),Object(a.jsx)("h3",{children:"You will be marked Present"})]})},F=(n(49),function(e){return Object(a.jsxs)("div",{children:[console.log(e.key),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"Student",children:[e.name," "]}),Object(a.jsx)("span",{className:"present",children:"Present"})]})]})}),R=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={Students:[],loading:!0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.get("students.json").then((function(t){var n=[];for(var a in t.data)n.push(Object(j.a)(Object(j.a)({},t.data[a]),{},{id:a}));e.setState({loading:!1,Students:n})})).catch((function(t){e.setState({loading:!1})}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[console.log(this.state.Students),this.state.Students.map((function(e){return Object(a.jsx)(F,{name:e.userDetails.name},e.id)}))]})}}]),n}(i.Component),w=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:" Welcome to Teacher Portal "}),Object(a.jsx)("h3",{children:"Your Students are as below"}),Object(a.jsx)(R,{})]})},N=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:"Teacher"==this.props.UserType?Object(a.jsx)(w,{}):Object(a.jsx)(U,{})})}}]),n}(i.Component),V=(n(50),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={LoggedIn:!1,UserType:null},e.loggedInTeacher=function(){e.setState({LoggedIn:!0,UserType:"Teacher"})},e.loggedInStudent=function(){e.setState({LoggedIn:!0,UserType:"Student"})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"Layout",children:[this.state.LoggedIn?Object(a.jsx)(N,{UserType:this.state.UserType}):Object(a.jsx)(L,{}),Object(a.jsx)("button",{onClick:this.loggedInTeacher,children:"temporary Login as teacher"}),Object(a.jsx)("button",{onClick:this.loggedInStudent,children:"temporary Login as student"})]})}}]),n}(i.Component)),D=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(V,{})})}}]),n}(i.Component),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root")),P()}},[[51,1,2]]]);
//# sourceMappingURL=main.d243ae13.chunk.js.map