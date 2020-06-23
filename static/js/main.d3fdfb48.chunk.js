(this["webpackJsonpvillager-moveout-calculator"]=this["webpackJsonpvillager-moveout-calculator"]||[]).push([[0],{59:function(e,a,t){e.exports=t.p+"static/media/header.d81268f1.png"},60:function(e,a,t){e.exports=t.p+"static/media/footer.65bdbac4.png"},61:function(e,a,t){e.exports=t.p+"static/media/tw.4d56b92d.png"},62:function(e,a,t){e.exports=t.p+"static/media/ig.55f6d48e.png"},72:function(e,a,t){e.exports=t(95)},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},82:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),i=t.n(r),c=t(37),o=t(137),s=(t(77),Object(n.createContext)({residents:void 0,setResidents:function(){throw new Error("setResidents() not implemented")}})),m=Object(n.createContext)({villagers:void 0,setVillagers:function(){throw new Error("setVillagers() not implemented")}}),u=Object(n.createContext)({exclusions:void 0,setExclusions:function(){throw new Error("setExclusions() not implemented")}}),d=(t(78),t(15)),v=t(12),h=(t(79),t(139)),g=t(22),E=t.n(g),p=t(23),f=(t(82),function(e){var a=e.residentName,t=e.friendshipLevel,n=e.onChange;return l.a.createElement("div",{className:"ResidentFriendshipField"},l.a.createElement("div",{className:"ResidentFriendshipField__header"},l.a.createElement("span",{className:"ResidentFriendshipField__name"},a),l.a.createElement("span",null,"LEVEL: ",t||"?")),l.a.createElement("div",{className:"ResidentFriendshipField__slider"},l.a.createElement(h.a,{min:0,max:6,value:t,onChange:n,ThumbComponent:function(e){return l.a.createElement("span",e,l.a.createElement(E.a,{path:p.a,size:"24px"}))}})))}),b=t(30),y=function(e,a){return e===a.lastVillagerToMoveIn?"Recently moved in.":e===a.lastVillagerToStay?"Recently asked to move out.":e===a.villagerRelocating?"House is being relocated.":~a.villagersWithUpcomingBirthday.indexOf(e)?"Birthday in the next 7 days.":null},O=function(e){var a=e.villager,t=e.villagerIndex,r=e.moveOutChanceA,i=e.moveOutChanceB,c=Object(n.useContext)(s).residents,o=Object(n.useContext)(m),h=o.villagers,g=o.setVillagers,E=Object(n.useContext)(u).exclusions,p=y(t,E);return l.a.createElement("div",{className:"VillagerChanceField ".concat(p?"disabled":"")},l.a.createElement("div",null,l.a.createElement("div",{className:"VillagerChanceField__name"},a.name),p?l.a.createElement("div",{className:"VillagerChanceField__disabled-text"},"Cannot ask to move because: ",p):l.a.createElement(l.a.Fragment,null,a.friendshipLevels.map((function(e,a){var n=c[a];return l.a.createElement(f,{key:n.id,residentName:n.name,friendshipLevel:e,onChange:function(e,n){return function(e,a,t){var n=Object(v.a)(h[e].friendshipLevels);n[a]=t,g([].concat(Object(v.a)(h.slice(0,e)),[Object(d.a)({},h[e],{friendshipLevels:n})],Object(v.a)(h.slice(e+1))))}(t,a,n)}})})))),l.a.createElement("div",{className:"VillagerChanceField__chance"},l.a.createElement("h4",null,"Villager Ask Chance:"),l.a.createElement("div",{className:"VillagerChanceField__chance-percentage"},p?"0.00%":Math.min(r,i)+" % - "+Math.max(r,i)+"%")))},N=function(){var e=Object(n.useContext)(m).villagers,a=function(e,a){var t=[0,0,30,60,100,150,200],n=[255,29,59,99,149,199,255],l=e.map((function(e,n){if(y(n,a))return 0;var l=e.friendshipLevels.map((function(e){return t[e]})),r=Object(b.mean)(l),i=Object(b.sumBy)(e.friendshipLevels,(function(e){return 6===e?1:0}));return Math.floor((300-r)/10)-i})),r=e.map((function(e,t){if(y(t,a))return 0;var l=e.friendshipLevels.map((function(e){return n[e]})),r=Object(b.mean)(l),i=Object(b.sumBy)(e.friendshipLevels,(function(e){return 6===e?1:0}));return Math.floor((300-r)/10)-i}));return[l.map((function(e){return(e/Object(b.sum)(l)*100).toFixed(2)})),r.map((function(e){return(e/Object(b.sum)(r)*100).toFixed(2)}))]}(e,Object(n.useContext)(u).exclusions),t=Object(c.a)(a,2),r=t[0],i=t[1];return l.a.createElement("div",{className:"VillagersChanceContainer"},l.a.createElement("h2",null,"Step 3: friendship information and move out chances!"),l.a.createElement("h4",null,"Villagers with higher friendship are less likely to move, and villagers with lower friendship are more likely to move. Move-out chance is calculated using their average friendship with all island residents."),l.a.createElement("h3",null,"HOW DO I KNOW WHAT FRIENDSHIP LEVEL I AM AT WITH MY VILLAGER?"),l.a.createElement("h4",null,"Make your best guess based on the information below. If you really don\u2019t know, click unknown."),l.a.createElement("div",{className:"VillagersChanceContainer__friendship-summary"},l.a.createElement("div",null,l.a.createElement("h4",null,l.a.createElement("span",null,"Level 1:")," Base friendship level when villager first moves in."),l.a.createElement("h4",null,l.a.createElement("span",null,"Level 2:")," You can give them daily gifts!"),l.a.createElement("h4",null,l.a.createElement("span",null,"Level 3:")," They can sell items to you, and they can give you a nickname."),l.a.createElement("h4",null,l.a.createElement("span",null,"Level 4:")," You can change their catchphrase."),l.a.createElement("h4",null,l.a.createElement("span",null,"Level 5:")," You can change their greeting, and you have a chance of obtaining their photo!"),l.a.createElement("h4",null,l.a.createElement("span",null,"Level 6:")," They can approach you to buy items*."),l.a.createElement("div",{className:"text-note"},"*Note: this is different from when they buy your items in a conversation. At level 6, they will run up to you to buy!"))),l.a.createElement("div",{className:"VillagersChanceContainer__villagers-container"},e.map((function(e,a){return l.a.createElement(O,{key:e.id,villager:e,villagerIndex:a,moveOutChanceA:r[a],moveOutChanceB:i[a]})}))))},x=t(133),C=t(134),j=(t(85),function(){var e=Object(n.useContext)(m).villagers,a=Object(n.useContext)(u),t=a.exclusions,r=a.setExclusions,i=t.lastVillagerToMoveIn,c=t.lastVillagerToStay,o=t.villagerRelocating,s=t.villagersWithUpcomingBirthday,h=function(e,a){var n=Object(d.a)({},t),l=e.target.value;n[a]=l?parseInt(e.target.value):l,r(n)};return l.a.createElement("div",{className:"VillagerExclusionsContainer"},l.a.createElement("h2",null,"Step 2: add exclusions"),l.a.createElement("h4",null,"Villagers who meet these conditions cannot ask to move out, and will be excluded from the calculation."),l.a.createElement("div",{className:"VillagerExclusionsContainer__field-label"},"A. Last villager to move into your island (newest villager):"),l.a.createElement(x.a,{variant:"outlined",displayEmpty:!0,value:""===i?"":i.toString(),onChange:function(e){return h(e,"lastVillagerToMoveIn")}},l.a.createElement(C.a,{value:""},"Unknown or not available"),e.map((function(e,a){return l.a.createElement(C.a,{key:e.id,value:a.toString()},e.name)}))),l.a.createElement("div",{className:"VillagerExclusionsContainer__field-label"},"B. Most recent villager to ask you to move, and you told them to stay:"),l.a.createElement(x.a,{variant:"outlined",displayEmpty:!0,value:""===c?"":c.toString(),onChange:function(e){return h(e,"lastVillagerToStay")}},l.a.createElement(C.a,{value:""},"Unknown or not available"),e.map((function(e,a){return l.a.createElement(C.a,{key:e.id,value:a.toString()},e.name)}))),l.a.createElement("div",{className:"VillagerExclusionsContainer__field-label"},"C. Villager is currently in the process of relocating their house (including if their moving kit is in your pocket):"),l.a.createElement(x.a,{variant:"outlined",displayEmpty:!0,value:""===o?"":o.toString(),onChange:function(e){return h(e,"villagerRelocating")}},l.a.createElement(C.a,{value:""},"Unknown or not available"),e.map((function(e,a){return l.a.createElement(C.a,{key:e.id,value:a.toString()},e.name)}))),l.a.createElement("div",{className:"VillagerExclusionsContainer__field-label"},"D. Villagers whose birthday is in the next 7 days:",l.a.createElement("div",{className:"text-note"},"Their up-coming birthday will be mentioned on the bulletin board 7 days prior.")),l.a.createElement("div",{className:"VillagerExclusionsContainer__birthday-fields"},s.map((function(a,n){return l.a.createElement("div",null,l.a.createElement(x.a,{variant:"outlined",displayEmpty:!0,value:""===a?"":a.toString(),onChange:function(e){return function(e,a){var n=e.target.value,l=Object(d.a)({},t,{villagersWithUpcomingBirthday:[].concat(Object(v.a)(s.slice(0,a)),[n?parseInt(e.target.value):n],Object(v.a)(s.slice(a+1)))});r(l)}(e,n)}},l.a.createElement(C.a,{value:""},"Unknown or not available"),e.map((function(e,a){return l.a.createElement(C.a,{key:e.id,value:a.toString()},e.name)}))),s.length>1&&l.a.createElement("button",{className:"minus-button",onClick:function(){return function(e){var a=Object(d.a)({},t,{villagersWithUpcomingBirthday:[].concat(Object(v.a)(s.slice(0,e)),Object(v.a)(s.slice(e+1)))});r(a)}(n)}},l.a.createElement(E.a,{path:p.b,size:"18px"})))}))),s.length<e.length&&l.a.createElement("div",{className:"VillagerExclusionsContainer__birthday-button"},l.a.createElement("button",{className:"plus-button",onClick:function(){var e=Object(d.a)({},t,{villagersWithUpcomingBirthday:[].concat(Object(v.a)(s),[""])});r(e)}},l.a.createElement(E.a,{path:p.c,size:"18px"})),"ADD ANOTHER VILLAGER"))}),_=t(132),V=(t(86),t(87),t(88),t(135)),w=function(e){var a=e.name,t=e.index,n=e.onChange;return l.a.createElement("div",{className:"ResidentNameField"},l.a.createElement("div",{className:"ResidentNameField__name"},"RESIDENT #".concat(t+1," ")),l.a.createElement(V.a,{variant:"outlined",size:"small",value:a,onChange:n}))},k=(t(89),t(4)),L=t(138),I=Object(k.a)((function(){return{arrow:{color:"rgba(119, 154, 126, 0.8)"},tooltip:{backgroundColor:"rgba(119, 154, 126, 0.8)",fontFamily:["Nubito","sans-serif"],fontSize:14,fontWeight:400,padding:8}}}))(L.a),S=function(e){var a=e.value,t=e.minValue,n=void 0===t?1:t,r=e.maxValue,i=void 0===r?99:r,c=e.onDecrease,o=e.onIncrease;return l.a.createElement("div",{className:"NumberSelector"},a===n?l.a.createElement(I,{title:"MINIMUM ".concat(n),placement:"top",arrow:!0},l.a.createElement("button",{className:"minus-button disabled"},l.a.createElement(E.a,{path:p.b,size:"18px"}))):l.a.createElement("button",{className:"minus-button",onClick:c},l.a.createElement(E.a,{path:p.b,size:"18px"})),l.a.createElement("div",{className:"NumberSelector__value"},a),a===i?l.a.createElement(I,{title:"MAXIMUM ".concat(i),placement:"top",arrow:!0},l.a.createElement("button",{className:"plus-button disabled"},l.a.createElement(E.a,{path:p.c,size:"18px"}))):l.a.createElement("button",{className:"plus-button",onClick:o},l.a.createElement(E.a,{path:p.c,size:"18px"})))},F=function(){var e=Object(n.useContext)(s),a=e.residents,t=e.setResidents,r=Object(n.useContext)(m),i=r.villagers,c=r.setVillagers;return l.a.createElement("div",{className:"ResidentsInputContainer"},l.a.createElement("h3",null,"RESIDENTS"),l.a.createElement("h4",null,"How many residents (switch players) live on your island?"),l.a.createElement("div",{className:"text-note"},"Villager move-out chance considers friendship with ALL players."),l.a.createElement(S,{value:a.length,minValue:1,maxValue:8,onDecrease:function(){t(a.slice(0,a.length-1)),c(i.map((function(e){return Object(d.a)({},e,{friendshipLevels:e.friendshipLevels.slice(0,e.friendshipLevels.length-1)})})))},onIncrease:function(){t([].concat(Object(v.a)(a),[{id:Object(o.a)(),name:"Resident ".concat(a.length+1)}])),c(i.map((function(e){return Object(d.a)({},e,{friendshipLevels:[].concat(Object(v.a)(e.friendshipLevels),[0])})})))}}),l.a.createElement("h4",null,"Enter your residents' names below:"),l.a.createElement("div",{className:"ResidentsInputContainer__fields"},a.map((function(e,n){return l.a.createElement(w,{key:e.id,name:e.name,index:n,onChange:function(e){return l=n,r=e.target.value,void t([].concat(Object(v.a)(a.slice(0,l)),[Object(d.a)({},a[l],{name:r})],Object(v.a)(a.slice(l+1))));var l,r}})}))))},R=(t(90),t(91),function(e){var a=e.name,t=e.villagerIndex,n=e.onChange;return l.a.createElement("div",{className:"VillagerNameField"},l.a.createElement("div",{className:"VillagerNameField__name"},"VILLAGER #".concat(t+1," ")),l.a.createElement(V.a,{variant:"outlined",size:"small",value:a,onChange:n}))}),M=function(){var e=Object(n.useContext)(m),a=e.villagers,t=e.setVillagers,r=Object(n.useContext)(s).residents;return l.a.createElement("div",{className:"VillagersInputContainer"},l.a.createElement("h3",null,"VILLAGERS"),l.a.createElement("h4",null,"How many villagers (animals) live on your island?"),l.a.createElement("div",{className:"text-note"},"You need 6 or more villagers for one to ask to move."),l.a.createElement(S,{value:a.length,minValue:6,maxValue:10,onDecrease:function(){return t(a.slice(0,a.length-1))},onIncrease:function(){t([].concat(Object(v.a)(a),[{id:Object(o.a)(),name:"Villager ".concat(a.length+1),friendshipLevels:r.map((function(){return 0}))}]))}}),l.a.createElement("h4",null,"Enter your villagers\u2019 names below:"),l.a.createElement("div",{className:"VillagersInputContainer__fields"},a.map((function(e,n){return l.a.createElement(R,{key:e.id,name:e.name,villagerIndex:n,onChange:function(e){return l=n,r=e.target.value,void t([].concat(Object(v.a)(a.slice(0,l)),[Object(d.a)({},a[l],{name:r})],Object(v.a)(a.slice(l+1))));var l,r}})}))))},T=function(){return l.a.createElement("div",{className:"IslandersContainer"},l.a.createElement("h2",null,"Step 1: add island villagers and residents"),l.a.createElement(_.a,{container:!0},l.a.createElement(_.a,{item:!0,sm:12,md:6},l.a.createElement(M,null)),l.a.createElement(_.a,{item:!0,sm:12,md:6},l.a.createElement(F,null))))},A=(t(92),t(59)),W=t.n(A),B=function(){return l.a.createElement("div",{className:"Header"},l.a.createElement("img",{className:"Header__image",src:W.a,alt:"banner"}),l.a.createElement("div",{className:"Header__navbar"}))},U=(t(93),t(60)),H=t.n(U),z=t(61),D=t.n(z),Y=t(62),G=t.n(Y),P=(t(94),function(){return l.a.createElement("a",{title:"Support me on ko-fi.com",class:"KofiWidget",href:"https://ko-fi.com/W7W21Q1LX",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"https://storage.ko-fi.com/cdn/cup-border.png"}),"Support Me on Ko-fi")}),K=function(){return l.a.createElement("div",{className:"Footer"},l.a.createElement("img",{className:"Footer__image",src:H.a,alt:"footer banner"}),l.a.createElement("div",{className:"Footer__content"},l.a.createElement("div",{className:"Footer__links"},l.a.createElement("a",{href:"https://twitter.com/yuecrossing",className:"Footer__icon",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:D.a,alt:"twitter link"})),l.a.createElement("a",{href:"https://www.instagram.com/yuecrossing/",className:"Footer__icon",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:G.a,alt:"instagram link"})),l.a.createElement(P,null)),l.a.createElement("p",null,"Made with love by Xiyuue (Yuecrossing)."),l.a.createElement("p",null,"If you remove credits from my guides or modify my guides without permission, I will hunt you down and feed your flesh to my villagers. Thanks for understanding.")))},X=function(){var e=Object(n.useState)([{id:Object(o.a)(),name:"Resident 1"}]),a=Object(c.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)([{id:Object(o.a)(),name:"Villager 1",friendshipLevels:[0]},{id:Object(o.a)(),name:"Villager 2",friendshipLevels:[0]},{id:Object(o.a)(),name:"Villager 3",friendshipLevels:[0]},{id:Object(o.a)(),name:"Villager 4",friendshipLevels:[0]},{id:Object(o.a)(),name:"Villager 5",friendshipLevels:[0]},{id:Object(o.a)(),name:"Villager 6",friendshipLevels:[0]}]),d=Object(c.a)(i,2),v=d[0],h=d[1],g=Object(n.useState)({lastVillagerToMoveIn:"",lastVillagerToStay:"",villagerRelocating:"",villagersWithUpcomingBirthday:[""]}),E=Object(c.a)(g,2),p=E[0],f=E[1];return l.a.createElement(s.Provider,{value:{residents:t,setResidents:r}},l.a.createElement(m.Provider,{value:{villagers:v,setVillagers:h}},l.a.createElement(u.Provider,{value:{exclusions:p,setExclusions:f}},l.a.createElement("div",{className:"App"},l.a.createElement(B,null),l.a.createElement("div",{className:"App__content"},l.a.createElement("h1",null,"Move-Out Calculator"),l.a.createElement(T,null),l.a.createElement("hr",null),l.a.createElement(j,null),l.a.createElement("hr",null),l.a.createElement(N,null)),l.a.createElement(K,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.d3fdfb48.chunk.js.map