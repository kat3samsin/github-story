(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,n){e.exports=n(68)},50:function(e,t,n){},51:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(18),i=n.n(o),s=n(11),c=(n(50),n(51),n(52),n(7)),u=n(8),l=n(13),p=n(9),h=n(12),m=n(34),f=n.n(m),d=function(e){return{type:"GET_USER_SUCCESS",repos:e.repos,userInfo:e.userInfo}},b="",E=function(e){return b=e?e.replace(/\s/g,""):b,function(e){e({type:"GET_USER"});var t=["https://api.github.com/users/".concat(b,"/repos?sort=created&direction=asc"),"https://api.github.com/users/".concat(b)];Promise.all(t.map(function(e){return fetch(e)})).then(function(t){Promise.all(t.map(function(e){return e.text()})).then(function(t){var n={repos:JSON.parse(t[0]),userInfo:JSON.parse(t[1])};e(d(n))})})}},g=function(e){return function(t,n){var r=n();if(r.headers[e]){var a={url:r.headers[e],isFirstPage:"first"===e,isLastPage:"last"===e||Number(r.page)+1===Number(r.totalPage)};return v(t,a)}}},v=function(e,t){return fetch(t.url).then(function(e){return e.json()}).then(function(t){if("Not Found"===t.message)throw new Error("No such user found!!!");e(d({data:t}))}).catch(function(t){console.log("callApi",t.toString()),e({type:"GET_USER_ERROR"})})},O=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.props&&this.props.repo?a.a.createElement("li",null,a.a.createElement("div",null,a.a.createElement("time",null,this.props.repo.dateCreated),a.a.createElement("title",null,a.a.createElement("a",{href:this.props.repo.url},this.props.repo.name)),this.props.repo.description,a.a.createElement("br",null),"Language: ",this.props.repo.language," ",a.a.createElement("br",null),"\u2b50",this.props.repo.stars," ",a.a.createElement("br",null),"Forks: ",this.props.repo.forks)):null}}]),t}(r.Component),j=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).handleScroll=function(){n.props.getMore()},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){!function(){var e=document.querySelectorAll(".timeline li");function t(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function n(){for(var n=0;n<e.length;n++)t(e[n])&&e[n].classList.add("in-view")}window.addEventListener("load",n),window.addEventListener("resize",n),window.addEventListener("scroll",n)}()}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("section",{className:"intro"},a.a.createElement("div",{className:"container"},a.a.createElement("a",{href:this.props.userInfo.html_url},a.a.createElement("img",{height:"100px",width:"100px",alt:this.props.userInfo.login,src:this.props.userInfo.avatar_url})),a.a.createElement("h1",null,this.props.userInfo.name," \u2193"),this.props.userInfo.bio,a.a.createElement("p",null,"\ud83d\udccd",this.props.userInfo.location))),a.a.createElement("section",{className:"timeline"},a.a.createElement("ul",null,this.props.repos.map(function(e){return a.a.createElement(O,{key:e.id,repo:e})}))))}}]),t}(r.Component);var S=Object(s.b)(function(e){return e},function(e){return{getMore:function(t){e(g(t))}}})(j),w=n(16),y=n(70),C=n(71),k=n(39),I=n(72),_=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),n.props.loadUser(n.state.username)},n.handleChange=function(e){n.setState({username:e.target.value})},n.state={username:""},n.handleChange=n.handleChange.bind(Object(w.a)(Object(w.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(w.a)(Object(w.a)(n))),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(y.a,{sticky:"top"},a.a.createElement(y.a.Brand,{href:"https://github.com/kat3samsin/github-story"},"GitHub Story"),a.a.createElement(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),a.a.createElement(y.a.Collapse,{id:"basic-navbar-nav"},a.a.createElement(C.a,{inline:!0,onSubmit:this.handleSubmit},a.a.createElement(k.a,{type:"text",required:!0,className:"mr-sm-2",placeholder:"Enter GitHub User",value:this.state.username,onChange:this.handleChange}),a.a.createElement(I.a,{type:"submit",variant:"dark"},"Search"))))}}]),t}(r.Component);var N=Object(s.b)(function(e){return e},function(e){return{loadUser:function(t){e(E(t))}}})(_),R=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(N,null)," ",a.a.createElement("br",null),a.a.createElement(f.a,{loaded:!this.props.isFetching,color:"black"}),this.props.isError?a.a.createElement("h3",null,"User not found."):null,this.props.repos&&this.props.repos.length>0?a.a.createElement(S,null):null)}}]),t}(r.Component),U=Object(s.b)(function(e){return e})(R),F=n(20),G={isError:!1,isFetching:!1,repos:[],userInfo:{}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER":return Object.assign({},e,{isError:!1,isFetching:!0,repos:[],userInfo:{}});case"GET_USER_SUCCESS":return Object.assign({},e,{isError:!1,isFetching:!1,repos:T(t.repos),userInfo:x(t.userInfo)});case"GET_USER_ERROR":return Object.assign({},e,{isFetching:!1,isError:!0,repos:[],userInfo:{}});default:return e}},T=function(e){return e.map(function(e){return{dateCreated:new Date(e.created_at).toDateString(),name:e.name,url:e.html_url,description:e.description,id:e.id,stars:Number(e.stargazers_count).toLocaleString(),forks:Number(e.forks).toLocaleString(),language:e.language}})},x=function(e){return e},P=n(40),A=Object(F.c)(L,Object(F.a)(P.a));i.a.render(a.a.createElement(s.a,{store:A},a.a.createElement(U,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.97297c31.chunk.js.map