(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),r=a(12),c=a.n(r),l=(a(22),a(23),a(0));var o=function(){var e={header:{margin:"0px auto 10px ",height:"200px",backgroundColor:"#FED766",color:"white",textShadow:"1px 1px black"},h1:{position:"relative",top:"35%"}};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("header",{style:e.header,children:Object(l.jsx)("h1",{style:e.h1,children:"Employee Directory"})})})},i=a(13),h=a(14),u=a(17),m=a(16),d=a(15),j=a.n(d),p={getEmployees:function(){return j.a.get("https://randomuser.me/api/?results=200&nat=us")}};var b=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("main",{children:Object(l.jsxs)("form",{id:"searchForm",onSubmit:e.handleSearch,style:{maxWidth:"500px",margin:"15px auto",display:"flex"},children:[Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Type employee name...","aria-label":"Recipient's username","aria-describedby":"button-addon2",name:"search",onChange:e.handleChange,value:e.value,id:"employees"}),Object(l.jsx)("button",{className:"btn btn-outline-primary",onClick:e.handleSearch,type:"submit",id:"search",children:"Search"})]})})})};var y=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("table",{className:"tableEmployee ",style:{margin:"30px auto"},children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{}),Object(l.jsx)("th",{onClick:e.sortByName,children:"Name"}),Object(l.jsx)("th",{children:"Phone"}),Object(l.jsx)("th",{children:"E-mail"})]})}),Object(l.jsx)("tbody",{className:"",children:e.results.map((function(e){return Object(l.jsxs)("tr",{className:"table",children:[Object(l.jsxs)("td",{children:[" ",Object(l.jsx)("img",{className:" ",src:e.picture.medium,alt:""})]}),Object(l.jsxs)("td",{children:[e.name.first+" "+e.name.last,"  "]}),Object(l.jsx)("td",{children:e.cell}),Object(l.jsx)("td",{className:"email",children:Object(l.jsx)("a",{href:e.email,children:e.email})})]},e.login.uuid)}))})]})})},f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={search:"",employees:[],employeesData:[],ascending:""},e.sortByName=function(){var t=e.state.employeesData;if("asc"===e.state.ascending){var a=t.sort((function(e,t){return e.name.first>t.name.first?1:-1}));console.log(a),e.setState({employeesData:a,ascending:"desc"})}else{var n=t.sort((function(e,t){return e.name.first>t.name.first?-1:1}));console.log(n),e.setState({employeesData:n,ascending:"asc"})}},e.handleChange=function(t){var a=e.state.employees,n=t.target.value,s=a.filter((function(e){return e.name.first.toLowerCase().indexOf(n.toLowerCase())>-1}));e.setState({employeesData:s})},e.searchEmployee=function(){p.getEmployees().then((function(t){return e.setState({employees:t.data.results,employeesData:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleSearch=function(t){t.preventDefault(),e.state.search||alert("Enter an employee name, please.");var a=e.state,n=a.employees,s=a.search,r=n.filter((function(e){return e.name.first.toLowerCase().includes(s.toLowerCase())}));e.setState({employeesData:r})},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.getEmployees().then((function(t){return e.setState({employees:t.data.results,employeesData:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{employee:this.state.employees,handleSearch:this.handleSearch,handleChange:this.handleChange}),Object(l.jsx)(y,{results:this.state.employeesData,sortByName:this.sortByName})]})}}]),a}(n.Component);var x=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(f,{})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};a(43);c.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),O()}},[[44,1,2]]]);
//# sourceMappingURL=main.3e8e195d.chunk.js.map