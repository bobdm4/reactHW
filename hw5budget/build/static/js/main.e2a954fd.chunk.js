(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,n,t){e.exports=t(50)},49:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(8),u=t.n(o),i=t(13),c=t(6),l=t(22),s=t(27),p="SAVE_BUDGET",d="ADD_EXPENCE",m="REMOVE_EXPENSE",b=Object(c.combineReducers)({budget:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p:return n.payload.budget;default:return e}},expenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case d:return[a.expenseObject].concat(Object(s.a)(e));case m:return e.filter(function(e){return e.id!==a.id});default:return e}}}),f=Object(c.createStore)(b,Object(l.devToolsEnhancer)()),v=t(1),x=t(2),g=t(9),h=t(10),E=t(14),y=t(11),j=t(15);function O(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  width: 100%;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return O=function(){return e},e}var S=x.a.form(O()),w=function(e){var n=e.onSubmit,t=void 0===n?function(){return null}:n,a=e.children;return r.a.createElement(S,{onSubmit:t},a)};function C(){var e=Object(v.a)(["\n  display: inline-block;\n  font-size: 20px;\n  color: #171718;\n  cursor: pointer;\n  ","\n"]);return C=function(){return e},e}var k=x.a.label(C(),function(e){return e.customStyles}),D=function(e){var n=e.children,t=e.customStyles;return r.a.createElement(k,{customStyles:t},n)};function P(){var e=Object(v.a)(["\n  color: #171718;\n  font: inherit;\n  font-size: 1.2rem;\n  padding: 16px;\n  border-radius: 4px;\n  border: 1px solid #bdbdbd;\n  width: 100%;\n  outline: 0;\n\n  &:focus {\n    border: 1px solid #2b32b2;\n  }\n"]);return P=function(){return e},e}var B=x.a.input(P()),N=function(e){var n=e.type,t=void 0===n?" text":n,a=e.value,o=void 0===a?"":a,u=e.onChange,i=void 0===u?function(){return null}:u,c=e.name,l=void 0===c?"":c;return r.a.createElement(B,{type:t,value:o,onChange:i,name:l})};function A(){var e=Object(v.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #3f51b5;\n  border: 0;\n  outline: 0;\n  padding: 8px 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);\n  font: inherit;\n  text-transform: uppercase;\n  user-select: none;\n\n  transition: background-color 200ms ease-in-out;\n\n  &:hover {\n    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);\n    background-color: #303f9f;\n  }\n"]);return A=function(){return e},e}var z=x.a.button(A()),R=function(e){var n=e.type,t=void 0===n?"button":n,a=e.label,o=void 0===a?"":a,u=e.onClick,i=void 0===u?function(){return null}:u;return r.a.createElement(z,{type:t,onClick:i},o)},_=function(e){function n(){var e,t;Object(g.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(E.a)(this,(e=Object(y.a)(n)).call.apply(e,[this].concat(r)))).state={budget:0},t.handleChange=function(e){t.setState({budget:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSave(t.state.budget),t.setState({budget:0})},t}return Object(j.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this.state.budget;return r.a.createElement(w,{onSubmit:this.handleSubmit},r.a.createElement(D,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter your total budget",r.a.createElement(N,{type:"number",value:e,onChange:this.handleChange})),r.a.createElement(R,{label:"Save",type:"submit"}))}}]),n}(a.Component),F=t(25),J=t(12),L=t(26),T=t.n(L),V=function(e){function n(){var e,t;Object(g.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(E.a)(this,(e=Object(y.a)(n)).call.apply(e,[this].concat(r)))).state={name:"",amount:0},t.handleChange=function(e){t.setState(Object(J.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSave(Object(F.a)({},t.state,{id:T.a.generate()})),t.setState({name:"",amount:0})},t}return Object(j.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){return r.a.createElement(w,{onSubmit:this.handleSubmit},r.a.createElement(D,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter expense name",r.a.createElement(N,{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})),r.a.createElement(D,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter expense amount",r.a.createElement(N,{type:"number",name:"amount",value:this.state.amount,onChange:this.handleChange})),r.a.createElement(R,{label:"Add",type:"submit"}))}}]),n}(a.Component);function X(){var e=Object(v.a)(["\n  border-collapse: collapse;\n  text-align: center;\n  width: 100%;\n\n  tr {\n    border-bottom: 1px solid #212121;\n  }\n\n  td,\n  th {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n"]);return X=function(){return e},e}var G=x.a.table(X()),I=function(e){var n=e.items,t=void 0===n?[]:n,a=e.onRemove;return r.a.createElement(G,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Expense name"),r.a.createElement("th",null,"Expense amount"),r.a.createElement("th",null))),r.a.createElement("tbody",null,t.map(function(e){var n=e.id,t=e.name,o=e.amount;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t),r.a.createElement("td",null,o),r.a.createElement("td",null,r.a.createElement(R,{label:"Delete",onClick:function(){return a(n)}})))})))};function M(){var e=Object(v.a)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 48px;\n"]);return M=function(){return e},e}function U(){var e=Object(v.a)(["\n  margin-top: 0;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 24px;\n"]);return U=function(){return e},e}function $(){var e=Object(v.a)(["\n  text-align: center;\n  padding: 8px 24px;\n  color: ",";\n  user-select: none;\n"]);return $=function(){return e},e}var q=x.a.div($(),function(e){return e.isPositive?"#388E3C":"#D32F2F"}),H=x.a.p(U()),K=x.a.p(M()),Q=function(e){var n=e.label,t=e.value,a=e.isPositive;return r.a.createElement(q,{isPositive:a},r.a.createElement(H,null,n),r.a.createElement(K,null,t,"\xa0$"))};function W(){var e=Object(v.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return W=function(){return e},e}var Y=x.a.section(W()),Z=function(e){var n=e.budget,t=e.expenses,a=e.balance;return r.a.createElement(Y,null,r.a.createElement(Q,{label:"Budget",value:n,isPositive:!0}),r.a.createElement(Q,{label:"Expenses",value:t}),r.a.createElement(Q,{label:"Balance",value:a,isPositive:a>=0}))},ee=function(e){return Number(e.budget)},ne=function(e){return e.expenses},te=function(e){return ne(e).reduce(function(e,n){return e+Number(n.amount)},0)},ae=function(e){var n=ee(e),t=te(e);return Number(n)-Number(t)},re=function(e){return ne(e).length};function oe(){var e=Object(v.a)(["\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  align-items: flex-start;\n  grid-gap: 24px;\n  max-width: 960px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return oe=function(){return e},e}var ue=x.a.div(oe()),ie=Object(i.b)(function(e){return{budget:ee(e),totalExpenses:te(e),expenses:ne(e),balance:ae(e),expensesLength:re(e)}},function(e){return{saveBudget:function(n){return e(function(e){return{type:p,payload:{budget:e}}}(n))},addExpense:function(n){return e({type:d,payload:{expenseObject:n}})},removeExpence:function(n){return e(function(e){return{type:m,payload:{id:e}}}(n))}}})(function(e){var n=e.budget,t=e.expenses,a=e.balance,o=e.expensesLength,u=e.totalExpenses,i=e.saveBudget,c=e.addExpense,l=e.removeExpence;return r.a.createElement(ue,null,r.a.createElement(_,{onSave:i}),r.a.createElement(Z,{budget:n,expenses:u,balance:a}),r.a.createElement(V,{onSave:c}),o>0&&r.a.createElement(I,{items:t,onRemove:l}))});t(49);u.a.render(r.a.createElement(i.a,{store:f},r.a.createElement(ie,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.e2a954fd.chunk.js.map