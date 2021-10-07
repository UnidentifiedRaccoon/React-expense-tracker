(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),l=(n(14),n(9)),s=n(2),i=(n(15),n(16),n(0)),r=function(e){var t="card "+e.className;return Object(i.jsx)("div",{className:t,children:e.children})},o=(n(18),function(e){return Object(i.jsx)("div",{className:"expenses-filter",children:Object(i.jsxs)("div",{className:"expenses-filter__control",children:[Object(i.jsx)("label",{children:"Filter by year"}),Object(i.jsxs)("select",{value:e.currentDate,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(i.jsx)("option",{value:"2022",children:"2022"}),Object(i.jsx)("option",{value:"2021",children:"2021"}),Object(i.jsx)("option",{value:"2020",children:"2020"}),Object(i.jsx)("option",{value:"2019",children:"2019"})]})]})})}),u=n(1),d=(n(19),n(20),n(21),function(e){var t=e.date.getFullYear(),n=e.date.toLocaleString("en-US",{month:"long"}),a=e.date.toLocaleString("en-US",{day:"2-digit"});return Object(i.jsxs)("div",{className:"expense-date",children:[console.log(e),Object(i.jsx)("div",{className:"expense-date__month",children:n}),Object(i.jsx)("div",{className:"expense-date__year",children:t}),Object(i.jsx)("div",{className:"expense-date__day",children:a})]})}),j=function(e){return Object(i.jsx)("li",{children:Object(i.jsxs)(r,{className:"expense-item",children:[Object(i.jsx)(d,{date:e.date}),Object(i.jsxs)("div",{className:"expense-item__description",children:[Object(i.jsx)("h2",{children:e.title}),Object(i.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},b=function(e){return 0===e.expenses.length?Object(i.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(i.jsx)("ul",{className:"expenses-list",children:e.expenses.map((function(e){return Object(i.jsx)(j,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},x=n(8),h=(n(22),n(23),n(24),function(e){var t="0%";return e.value>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(i.jsxs)("li",{className:"chart-bar",children:[Object(i.jsx)("div",{className:"chart-bar__inner",children:Object(i.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(i.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),O=function(e){var t=e.dataPoints.reduce((function(e,t){return e+t.value}),0);return Object(i.jsx)("ul",{className:"chart",children:e.dataPoints.map((function(e){return Object(i.jsx)(h,{label:e.label,value:e.value,maxValue:t},e.label)}))})},v=function(e){var t,n=[{label:"Jen",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;console.log(c),n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(i.jsx)(O,{dataPoints:n})},m=function(e){var t=Object(u.useState)("2020"),n=Object(s.a)(t,2),a=n[0],c=n[1],l=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(i.jsx)("div",{children:Object(i.jsxs)(r,{className:"expenses",children:[Object(i.jsx)(o,{onChangeFilter:function(e){c(e)},currentDate:a}),Object(i.jsx)(v,{expenses:l}),Object(i.jsx)(b,{expenses:l})]})})},p=n(6),f=(n(25),n(26),function(e){var t=Object(u.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],l=Object(u.useState)(""),r=Object(s.a)(l,2),o=r[0],d=r[1],j=Object(u.useState)(""),b=Object(s.a)(j,2),x=b[0],h=b[1];return Object(i.jsxs)("form",{action:"post",onSubmit:function(t){t.preventDefault();var n={title:a,amount:parseInt(o),date:new Date(x)};e.onSaveExpenseData(n),e.onClose()},children:[Object(i.jsxs)("div",{className:"new-expense__controls",children:[Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{htmlFor:"title-field",children:"Title"}),Object(i.jsx)("input",{type:"text",id:"title-field",placeholder:"Title",value:a,onChange:function(e){c(e.target.value)}})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{htmlFor:"amount-field",children:"Amount"}),Object(i.jsx)("input",{type:"number",id:"amount-field",placeholder:"Amount",min:"0.01",step:"0.01",value:o,onChange:function(e){d(e.target.value)}})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{htmlFor:"date-field",children:"Date"}),Object(i.jsx)("input",{type:"date",id:"date-field",placeholder:"Date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){h(e.target.value)}})]})]}),Object(i.jsxs)("div",{className:"new-expense__actions",children:[Object(i.jsx)("button",{type:"button",onClick:e.onClose,children:"Cancel"}),Object(i.jsx)("button",{type:"submit",children:"Add Expense"})]})]})}),_=function(e){var t=Object(u.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(i.jsxs)("div",{className:"new-expense",children:[!a&&Object(i.jsx)("button",{onClick:function(){c(!0)},children:"Add New Expense"}),a&&Object(i.jsx)(f,{onSaveExpenseData:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n)},onClose:function(){c(!1)}})]})},N=[{id:"e1",title:"React.js course",amount:20,date:new Date(2021,9,4)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var g=function(){var e=Object(u.useState)(N),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(_,{onAddExpense:function(e){a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(i.jsx)(m,{items:n})]})};c.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.8462de7d.chunk.js.map