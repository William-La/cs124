(this.webpackJsonplab2=this.webpackJsonplab2||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},103:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),c=n(30),a=n.n(c),l=(n(68),n(5)),d=n(34),r=n(17),s=n(9),u=(n(93),n(157)),j=n(154),p=n(155),b=n(150),x=n(2),m={paddingLeft:"155px",paddingTop:"191px",transform:"scale(1.5)"};var O=function(e){return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{class:"header",children:[Object(x.jsx)("h1",{id:"title",children:"To do"}),Object(x.jsx)("div",{class:"dropdown",style:m,children:Object(x.jsx)(u.a,{sx:{minWidth:120},children:Object(x.jsxs)(p.a,{fullWidth:!0,children:[Object(x.jsx)(j.a,{variant:"standard",htmlFor:"uncontrolled-native",children:"View"}),Object(x.jsxs)(b.a,{onChange:function(t){return e.view(t.target.value)},defaultValue:0,inputProps:{type:"view",id:"uncontrolled-native"},children:[Object(x.jsx)("option",{value:"all",children:"All"}),Object(x.jsx)("option",{value:"completed",children:"Completed"}),Object(x.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})]})})})]})})},h=(n(99),n(100),n(71)),f=n.n(h);var v=function(e){return Object(x.jsx)("div",{children:Object(x.jsx)("div",{class:"todo-checkbox",onClick:e.onCompleted,children:e.completed?Object(x.jsxs)("div",{class:"completed",children:[" ",Object(x.jsx)(f.a,{style:{width:"100px",height:"100px"}})]}):Object(x.jsx)("div",{class:"uncompleted"})})})},k=(n(101),n(6)),g=n(140),T=n(156),w=n(149),C=n(152),y=n(73),S=n.n(y),E=n(74),D=n.n(E),z=n(72),R=n.n(z),M=n(158),A=n(148),L={position:"absolute",top:"50%",left:"50%",transform:"scale(1.4)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,marginLeft:"-215px"};function P(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),o=n[0],c=n[1],a=Object(i.useRef)(null);return Object(x.jsx)(A.a,{open:e.open,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(x.jsxs)(u.a,{sx:L,children:[Object(x.jsx)(M.a,{id:"modal-modal-title",variant:"h5",component:"h2",children:e.modalText}),Object(x.jsxs)("form",{onSubmit:function(){e.handleAction(o),c("")},children:[Object(x.jsx)("label",{children:Object(x.jsx)("input",{id:"inputText",type:"text",maxlength:"30",placeholder:e.placeholder,ref:a,value:o,onChange:function(e){c(e.target.value)}})}),Object(x.jsx)("input",{id:"submitButton",type:"submit",value:"Submit"})]})]})})}var I=Object(k.a)((function(e){return Object(x.jsx)(w.a,Object(d.a)({elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},e))}))((function(e){var t=e.theme;return{"& .MuiPaper-root":{borderRadius:6,minWidth:180,color:"light"===t.palette.mode?"rgb(55, 65, 81)":t.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:t.palette.text.secondary,marginRight:t.spacing(1.5)},"&:active":{backgroundColor:Object(g.a)(t.palette.primary.main,t.palette.action.selectedOpacity)}}}}}));function N(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),c=n[0],a=n[1],l=function(){return a(!1)},d=o.a.useState(null),r=Object(s.a)(d,2),u=r[0],j=r[1],p=Boolean(u),b=function(){j(null)};return Object(x.jsxs)("div",{children:[Object(x.jsx)(T.a,{id:"demo-customized-button","aria-controls":"demo-customized-menu","aria-haspopup":"true","aria-expanded":p?"true":void 0,variant:"contained",disableElevation:!0,onClick:function(e){j(e.currentTarget)},endIcon:Object(x.jsx)(R.a,{}),style:{marginRight:"100px",marginTop:"35px",left:"820px",transform:"scale(1.5)",background:"none",color:"black",position:"fixed"}}),Object(x.jsxs)(I,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:u,open:p,onClose:b,children:[Object(x.jsxs)(C.a,{onClick:function(){a(!0),b()},disableRipple:!0,children:[Object(x.jsx)(S.a,{}),"Edit"]}),Object(x.jsxs)(C.a,{onClick:function(){e.onDeleteTask(),b()},disableRipple:!0,children:[Object(x.jsx)(D.a,{}),"Delete"]})]}),Object(x.jsx)(P,{open:c,onClose:l,placeholder:e.title,modalText:"Please edit task",handleAction:function(t){e.onEditTask(e.id,t),l()}})]})}var W=function(e){return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{class:"todo-task",id:e.a,children:[Object(x.jsx)(v,{completed:e.a.completed,onCompleted:function(){return e.onCompleted(e.a.id)}}),Object(x.jsxs)("div",{class:"todo-item",children:[e.a.completed?Object(x.jsx)("p",{class:"task-text",id:"complete",children:e.a.title}):Object(x.jsx)("p",{class:"task-text",children:e.a.title}),Object(x.jsx)("div",{class:"todo-edit",children:Object(x.jsx)(N,{class:"dropdown-bar",id:e.a.id,title:e.a.title,onDeleteTask:function(){return e.onDeleteTask(e.a.id)},onEditTask:e.onEditTask})})]})]})})},B=n(76),G=n.n(B),J=n(75),V=n.n(J);n(103);var F=function(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),o=n[0],c=n[1];return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{class:"todo-body",children:[e.filteredTodos?e.filteredTodos.map((function(t){return Object(x.jsx)(W,{a:t,onCompleted:e.onCompleted,onEditTask:e.onEditTask,onDeleteTask:e.onDeleteTask})})):e.list.map((function(t){return Object(x.jsx)(W,{a:t,onCompleted:e.onCompleted,onEditTask:e.onEditTask,onDeleteTask:e.onDeleteTask})})),"completed"===e.view?Object(x.jsx)(V.a,{style:{fontSize:"150px",gridColumn:"1/ span 1",gridRow:"9/ span 1",marginLeft:"750px"},onClick:function(){return e.onDeleteAll(e.filteredTodos)}}):Object(x.jsx)(G.a,{style:{fontSize:"150px",gridColumn:"1/ span 1",gridRow:"9/ span 1",marginLeft:"750px"},onClick:function(){return c(!0)}}),Object(x.jsx)("div",{children:Object(x.jsx)(P,{open:o,placeholder:"Enter a new task",onNewTask:e.onNewTask,modalText:"Please enter a new task",handleAction:function(t){e.onNewTask(t),c(!1)}})})]})})},U=n(77),q=[{id:"0",title:"William spills the tea",completed:!1},{id:"1",title:"Get very happy",completed:!0},{id:"2",title:"Grab dinner with 121",completed:!1},{id:"3",title:"Rename ourselves",completed:!1}];var H=function(){var e=Object(i.useState)(q),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(i.useState)("all"),a=Object(s.a)(c,2),u=a[0],j=a[1],p=Object(i.useState)(null),b=Object(s.a)(p,2),m=b[0],h=b[1];Object(i.useEffect)((function(){f()}),[n,u]);var f=function(){switch(u){case"completed":h(n.filter((function(e){return!0===e.completed})));break;case"uncompleted":h(n.filter((function(e){return!1===e.completed})));break;default:h(n)}};return Object(x.jsxs)("div",{children:[Object(x.jsx)(O,{view:function(e){j(e)}}),Object(x.jsx)(F,{list:n,onNewTask:function(e){o([].concat(Object(r.a)(n),[{id:Object(U.a)(),title:e,completed:!1}]))},onCompleted:function(e){o(n.map((function(t){return t.id!==e?t:Object(d.a)(Object(d.a)({},t),{},Object(l.a)({},"completed",!t.completed))})))},filteredTodos:m,onDeleteTask:function(e){o(n.filter((function(t){return t.id!==e})))},onDeleteAll:function(e){o(n.filter((function(t){return!e.includes(t)})))},onEditTask:function(e,t){o(n.map((function(n){return n.id!==e?n:Object(d.a)(Object(d.a)({},n),{},Object(l.a)({},"title",t))})))},view:u})]})};a.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(H,{})}),document.getElementById("root"))},68:function(e,t,n){},93:function(e,t,n){},99:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.62031783.chunk.js.map