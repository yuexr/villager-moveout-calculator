(this["webpackJsonpvillager-moveout-calculator"]=this["webpackJsonpvillager-moveout-calculator"]||[]).push([[0],{14:function(A,e,n){},15:function(A,e,n){"use strict";n.r(e);var a=n(0),t=n.n(a),g=n(5),c=n.n(g),o=n(8),B=n(3),i=n(7),r=n(17),E=(n(14),n(6)),v=n.n(E),w=function(){var A=Object(a.useState)([{id:Object(r.a)(),name:"Resident 1"}]),e=Object(i.a)(A,2),n=e[0],g=e[1];return t.a.createElement("div",{className:"App"},t.a.createElement("h1",null,"coming soon binch"),t.a.createElement("img",{src:v.a,alt:"Lily"}),t.a.createElement("div",{className:"ResidentsContainer"},n.map((function(A,e){return t.a.createElement("div",{key:A.id},"Resident ".concat(e+1," "),t.a.createElement("input",{type:"text",value:A.name,onChange:function(A){return a=e,t=A.target.value,void g([].concat(Object(B.a)(n.slice(0,a)),[Object(o.a)({},n[a],{name:t})],Object(B.a)(n.slice(a+1))));var a,t}}))})),n.length<8&&t.a.createElement("button",{onClick:function(){g([].concat(Object(B.a)(n),[{id:Object(r.a)(),name:"Resident ".concat(n.length+1)}]))}},"+ ADD MORE"),n.length>1&&t.a.createElement("button",{onClick:function(){g(n.slice(0,n.length-1))}},"REMOVE")),t.a.createElement("div",{className:"VillagersInputContainer"}),t.a.createElement("div",{className:"VillagersFriendshipContainer"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()})).catch((function(A){console.error(A.message)}))},6:function(A,e){A.exports="data:image/png;base64,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"},9:function(A,e,n){A.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.25fce7ec.chunk.js.map