(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(33)},23:function(e,t,n){},24:function(e,t,n){},27:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),u=n(6),r=n.n(u),o=(n(23),n(8)),s=n(5),i=n(12),l=n(9),d=n(11),h=n(3),C=(n(24),n(1)),v=n.n(C),b=n(14),m=(n(27),n(46)),f=function(e){var t=e.children,n=Object(b.a)(e,["children"]);return c.a.createElement(m.a,Object.assign({className:"icon-button"},n),t)},g=function(e){var t=e.onClickAdd;return c.a.createElement(f,{onClick:t},c.a.createElement("svg",{className:"svg",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"})))};g.propType={onClickAdd:v.a.func.isRequired};var j=g,p=function(e){var t=e.onClickRemove,n=e.index;return c.a.createElement(f,{onClick:t,id:n},c.a.createElement("svg",{id:n,className:"svg",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},c.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.a.createElement("path",{id:n,d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"})))};p.propType={onClickRemove:v.a.func.isRequired};var k=p,E=(n(30),function(e){var t=e.label,n=e.value,a=e.onChangeText;return c.a.createElement("p",{className:"textbox"},c.a.createElement("label",null,t),c.a.createElement("input",{type:"text",value:n,onChange:a}))});E.propType={label:v.a.string,value:v.a.string,onChangeText:v.a.func};var R=E,O=(n(31),function(e){var t=e.subject,n=e.course;return c.a.createElement("p",{className:"label"},t.concat(" ",n))});O.propType={subject:v.a.string.isRequired,course:v.a.string.isRequired};var S=O,y=function(e){var t=e.subject,n=e.course,a=e.onChangeSubject,u=e.onChangeCourse,r=e.onClickAdd;return c.a.createElement("div",null,c.a.createElement(R,{label:"Subject: ",value:t,onChangeText:a}),c.a.createElement(R,{label:"Course: ",value:n,onChangeText:u}),c.a.createElement(j,{onClickAdd:r}))};y.propType={subject:v.a.string.isRequired,course:v.a.string.isRequired,onChangeSubject:v.a.func.isRequired,onChangeCourse:v.a.func.isRequired,onClickAdd:v.a.func.isRequired};var w=y,x=function(e){var t=e.subject,n=e.course,a=e.onClickRemove,u=e.index;return c.a.createElement("div",null,c.a.createElement(S,{subject:t,course:n}),c.a.createElement(k,{onClickRemove:a,index:u}))};x.propType={subject:v.a.string.isRequired,course:v.a.string.isRequired,onClickRemove:v.a.func.isRequired};var Q=x,q=(n(32),function(e){var t=e.courseCart,n=e.courseQueue,a=e.onClickRemove,u=e.onChangeSubject,r=e.onChangeCourse,o=e.onClickAdd;return c.a.createElement("div",{className:"selection"},t.map(function(e,t){return c.a.createElement(Q,{subject:e.subject,course:e.course,onClickRemove:a,index:t})}),c.a.createElement(w,{subject:n.subject,course:n.course,onChangeSubject:u,onChangeCourse:r,onClickAdd:o}))}),A=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={courseCart:[{subject:"SPCOM",course:"225"},{subject:"SPCOM",course:"226"},{subject:"SPCOM",course:"227"}],courseQueue:{subject:"",course:""}},n.handleClickRemove=n.handleClickRemove.bind(Object(h.a)(n)),n.handleChangeSubject=n.handleChangeSubject.bind(Object(h.a)(n)),n.handleChangeCourse=n.handleChangeCourse.bind(Object(h.a)(n)),n.handleClickAdd=n.handleClickAdd.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleClickRemove",value:function(e){if(""!==e){var t=this.state.courseCart.slice();t.splice(e,1),this.setState({courseCart:t})}console.log(e)}},{key:"handleChangeSubject",value:function(e){this.setState({courseQueue:{subject:e,course:this.state.courseQueue.course}})}},{key:"handleChangeCourse",value:function(e){this.setState({courseQueue:{subject:this.state.courseQueue.subject,course:e}})}},{key:"handleClickAdd",value:function(){if(""!==this.state.courseQueue.subject&&""!==this.state.courseQueue.course){var e=this.state.courseCart.slice();e.push(this.state.courseQueue),this.setState({courseCart:e,courseQueue:{subject:"",course:""}})}}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(q,{courseCart:this.state.courseCart,courseQueue:this.state.courseQueue,onClickRemove:function(t){return e.handleClickRemove(t.target.id)},onChangeSubject:function(t){return e.handleChangeSubject(t.target.value)},onChangeCourse:function(t){return e.handleChangeCourse(t.target.value)},onClickAdd:this.handleClickAdd}),console.log(this.state.courseCart),console.log(this.state.courseQueue))}}]),t}(a.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(A,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.42c84cb6.chunk.js.map