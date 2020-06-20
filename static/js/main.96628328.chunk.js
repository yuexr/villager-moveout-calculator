(this["webpackJsonpvillager-moveout-calculator"]=this["webpackJsonpvillager-moveout-calculator"]||[]).push([[0],{59:function(e,a,t){e.exports=t.p+"static/media/header.d81268f1.png"},60:function(e,a,t){e.exports=t.p+"static/media/footer.65bdbac4.png"},61:function(e,a,t){e.exports=t.p+"static/media/tw.4d56b92d.png"},62:function(e,a,t){e.exports=t.p+"static/media/ig.55f6d48e.png"},72:function(e,a,t){e.exports=t(94)},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},82:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(8),r=t.n(i),c=t(37),s=t(136),o=(t(77),Object(n.createContext)({residents:void 0,setResidents:function(){throw new Error("setResidents() not implemented")}})),m=Object(n.createContext)({villagers:void 0,setVillagers:function(){throw new Error("setVillagers() not implemented")}}),u=Object(n.createContext)({exclusions:void 0,setExclusions:function(){throw new Error("setExclusions() not implemented")}}),d=(t(78),t(15)),v=t(12),h=(t(79),t(138)),g=t(22),E=t.n(g),p=t(23),f=(t(82),function(e){var a=e.residentName,t=e.friendshipLevel,n=e.onChange;return l.a.createElement("div",{className:"ResidentFriendshipField"},l.a.createElement("div",{className:"ResidentFriendshipField__header"},l.a.createElement("span",{className:"ResidentFriendshipField__name"},a),l.a.createElement("span",null,"LEVEL: ",t||"?")),l.a.createElement("div",{className:"ResidentFriendshipField__slider"},l.a.createElement(h.a,{min:0,max:6,value:t,onChange:n,ThumbComponent:function(e){return l.a.createElement("span",e,l.a.createElement(E.a,{path:p.a,size:"24px"}))}})))}),b=t(30),y=function(e,a){return e===a.lastVillagerToMoveIn?"Recently moved in.":e===a.lastVillagerToStay?"Recently asked to move out.":e===a.villagerRelocating?"House is being relocated.":~a.villagersWithUpcomingBirthday.indexOf(e)?"Birthday in the next 7 days.":null},N=function(e){var a=e.villager,t=e.villagerIndex,i=e.moveOutChanceA,r=e.moveOutChanceB,c=Object(n.useContext)(o).residents,s=Object(n.useContext)(m),h=s.villagers,g=s.setVillagers,E=Object(n.useContext)(u).exclusions,p=y(t,E);return l.a.createElement("div",{className:"VillagerChanceField ".concat(p?"disabled":"")},l.a.createElement("div",null,l.a.createElement("div",{className:"VillagerChanceField__name"},a.name),p?l.a.createElement("div",{className:"VillagerChanceField__disabled-text"},"Cannot ask to move because: ",p):l.a.createElement(l.a.Fragment,null,a.friendshipLevels.map((function(e,a){var n=c[a];return l.a.createElement(f,{key:n.id,residentName:n.name,friendshipLevel:e,onChange:function(e,n){return function(e,a,t){var n=Object(v.a)(h[e].friendshipLevels);n[a]=t,g([].concat(Object(v.a)(h.slice(0,e)),[Object(d.a)({},h[e],{friendshipLevels:n})],Object(v.a)(h.slice(e+1))))}(t,a,n)}})})))),l.a.createElement("div",{className:"VillagerChanceField__chance"},l.a.createElement("h4",null,"Villager Ask Chance:"),l.a.createElement("div",{className:"VillagerChanceField__chance-percentage"},p?"0.00%":Math.min(i,r)+" % - "+Math.max(i,r)+"%")))},O=function(){var e=Object(n.useContext)(m).villagers,a=function(e,a){var t=[0,0,30,60,100,150,200],n=[255,29,59,99,149,199,255],l=e.map((function(e,n){if(y(n,a))return 0;var l=e.friendshipLevels.map((function(e){return t[e]})),i=Object(b.mean)(l),r=Object(b.sumBy)(e.friendshipLevels,(function(e){return 6===e?1:0}));return Math.floor((300-i)/10)-r})),i=e.map((function(e,t){if(y(t,a))return 0;var l=e.friendshipLevels.map((function(e){return n[e]})),i=Object(b.mean)(l),r=Object(b.sumBy)(e.friendshipLevels,(function(e){return 6===e?1:0}));return Math.floor((300-i)/10)-r}));return[l.map((function(e){return(e/Object(b.sum)(l)*100).toFixed(2)})),i.map((function(e){return(e/Object(b.sum)(i)*100).toFixed(2)}))]}(e,Object(n.useContext)(u).exclusions),t=Object(c.a)(a,2),i=t[0],r=t[1];return l.a.createElement("div",{className:"VillagersChanceContainer"},l.a.createElement("h2",null,"Step 3: friendship information and move out chances!"),l.a.createElement("h4",null,"Villagers with higher friendship are less likely to move, and villagers with lower friendship are more likely to move. Move-out chance is calculated using their average friendship with all island residents."),l.a.createElement("h3",null,"HOW DO I KNOW WHAT FRIENDSHIP LEVEL I AM AT WITH MY VILLAGER?"),l.a.createElement("h4",null,"Make your best guess based on the information below. If you really don\u2019t know, click unknown."),l.a.createElement("div",{className:"VillagersChanceContainer__friendship-summary"},l.a.createElement("div",null,l.a.createElement("h4",null,l.a.createElement("span",null,"Level 1:")," Base friendship level when villager first moves in."),l.a.createElement("h4",null,l.a.createElement("span",null,"Level 2:")," You can give them daily gifts!"),l.a.createElement("h4",null,l.a.createElement("span",null,"Level 3:")," They can sell items to you, and they can give you a nickname."),l.a.createElement("h4",null,l.a.createElement("span",null,"Level 4:")," You can change their catchphrase."),l.a.createElement("h4",null,l.a.createElement("span",null,"Level 5:")," You can change their greeting, and you have a chance of obtaining their photo!"),l.a.createElement("h4",null,l.a.createElement("span",null,"Level 6:")," They can approach you to buy items*."),l.a.createElement("div",{className:"text-note"},"*Note: this is different from when they buy your items in a conversation. At level 6, they will run up to you to buy!"))),l.a.createElement("div",{className:"VillagersChanceContainer__villagers-container"},e.map((function(e,a){return l.a.createElement(N,{key:e.id,villager:e,villagerIndex:a,moveOutChanceA:i[a],moveOutChanceB:r[a]})}))))},C=t(132),x=t(133),V=(t(85),function(){var e=Object(n.useContext)(m).villagers,a=Object(n.useContext)(u),t=a.exclusions,i=a.setExclusions,r=t.lastVillagerToMoveIn,c=t.lastVillagerToStay,s=t.villagerRelocating,o=t.villagersWithUpcomingBirthday,h=function(e,a){var n=Object(d.a)({},t),l=e.target.value;n[a]=l?parseInt(e.target.value):l,i(n)};return l.a.createElement("div",{className:"VillagerExclusionsContainer"},l.a.createElement("h2",null,"Step 2: add exclusions"),l.a.createElement("h4",null,"Villagers who meet these conditions cannot ask to move out, and will be excluded from the calculation."),l.a.createElement("div",{className:"VillagerExclusionsContainer__field-label"},"A. Last villager to move into your island (newest villager):"),l.a.createElement(C.a,{variant:"outlined",displayEmpty:!0,value:""===r?"":r.toString(),onChange:function(e){return h(e,"lastVillagerToMoveIn")}},l.a.createElement(x.a,{value:""},"UNKNOWN OR NOT APPLICABLE"),e.map((function(e,a){return l.a.createElement(x.a,{key:e.id,value:a.toString()},e.name)}))),l.a.createElement("div",{className:"VillagerExclusionsContainer__field-label"},"B. Most recent villager to ask you to move, and you told them to stay:"),l.a.createElement(C.a,{variant:"outlined",displayEmpty:!0,value:""===c?"":c.toString(),onChange:function(e){return h(e,"lastVillagerToStay")}},l.a.createElement(x.a,{value:""},"UNKNOWN OR NOT APPLICABLE"),e.map((function(e,a){return l.a.createElement(x.a,{key:e.id,value:a.toString()},e.name)}))),l.a.createElement("div",{className:"VillagerExclusionsContainer__field-label"},"C. Villager is currently in the process of relocating their house (including if their moving kit is in your pocket):"),l.a.createElement(C.a,{variant:"outlined",displayEmpty:!0,value:""===s?"":s.toString(),onChange:function(e){return h(e,"villagerRelocating")}},l.a.createElement(x.a,{value:""},"UNKNOWN OR NOT APPLICABLE"),e.map((function(e,a){return l.a.createElement(x.a,{key:e.id,value:a.toString()},e.name)}))),l.a.createElement("div",{className:"VillagerExclusionsContainer__field-label"},"D. Villagers whose birthday is in the next 7 days:",l.a.createElement("div",{className:"text-note"},"Their up-coming birthday will be mentioned on the bulletin board 7 days prior.")),l.a.createElement("div",{className:"VillagerExclusionsContainer__birthday-fields"},o.map((function(a,n){return l.a.createElement(C.a,{variant:"outlined",displayEmpty:!0,value:""===a?"":a.toString(),onChange:function(e){return function(e,a){var n=e.target.value,l=Object(d.a)({},t,{villagersWithUpcomingBirthday:[].concat(Object(v.a)(o.slice(0,a)),[n?parseInt(e.target.value):n],Object(v.a)(o.slice(a+1)))});i(l)}(e,n)}},l.a.createElement(x.a,{value:""},"UNKNOWN OR NOT APPLICABLE"),e.map((function(e,a){return l.a.createElement(x.a,{key:e.id,value:a.toString()},e.name)})))}))),o.length<e.length&&l.a.createElement("div",{className:"VillagerExclusionsContainer__birthday-button"},l.a.createElement("button",{className:"plus-button",onClick:function(){var e=Object(d.a)({},t,{villagersWithUpcomingBirthday:[].concat(Object(v.a)(o),[""])});i(e)}},l.a.createElement(E.a,{path:p.c,size:"18px"})),"ADD ANOTHER VILLAGER"),o.length>1&&l.a.createElement("div",{className:"VillagerExclusionsContainer__birthday-button"},l.a.createElement("button",{className:"minus-button",onClick:function(){var e=Object(d.a)({},t,{villagersWithUpcomingBirthday:o.slice(0,o.length-1)});i(e)}},l.a.createElement(E.a,{path:p.b,size:"18px"})),"REMOVE A VILLAGER"))}),_=t(131),j=(t(86),t(87),t(88),t(134)),L=function(e){var a=e.name,t=e.index,n=e.onChange;return l.a.createElement("div",{className:"ResidentNameField"},l.a.createElement("div",{className:"ResidentNameField__name"},"RESIDENT #".concat(t+1," ")),l.a.createElement(j.a,{variant:"outlined",size:"small",value:a,onChange:n}))},w=(t(89),t(4)),I=t(137),k=Object(w.a)((function(){return{arrow:{color:"rgba(119, 154, 126, 0.8)"},tooltip:{backgroundColor:"rgba(119, 154, 126, 0.8)",fontFamily:["Nubito","sans-serif"],fontSize:14,fontWeight:400,padding:8}}}))(I.a),R=function(e){var a=e.value,t=e.minValue,n=void 0===t?1:t,i=e.maxValue,r=void 0===i?99:i,c=e.onDecrease,s=e.onIncrease;return l.a.createElement("div",{className:"NumberSelector"},a===n?l.a.createElement(k,{title:"MINIMUM ".concat(n),placement:"top",arrow:!0},l.a.createElement("button",{className:"minus-button disabled"},l.a.createElement(E.a,{path:p.b,size:"18px"}))):l.a.createElement("button",{className:"minus-button",onClick:c},l.a.createElement(E.a,{path:p.b,size:"18px"})),l.a.createElement("div",{className:"NumberSelector__value"},a),a===r?l.a.createElement(k,{title:"MAXIMUM ".concat(r),placement:"top",arrow:!0},l.a.createElement("button",{className:"plus-button disabled"},l.a.createElement(E.a,{path:p.c,size:"18px"}))):l.a.createElement("button",{className:"plus-button",onClick:s},l.a.createElement(E.a,{path:p.c,size:"18px"})))},A=function(){var e=Object(n.useContext)(o),a=e.residents,t=e.setResidents,i=Object(n.useContext)(m),r=i.villagers,c=i.setVillagers;return l.a.createElement("div",{className:"ResidentsInputContainer"},l.a.createElement("h3",null,"RESIDENTS"),l.a.createElement("h4",null,"How many residents (switch players) live on your island?"),l.a.createElement("div",{className:"text-note"},"Villager move-out chance considers friendship with ALL players."),l.a.createElement(R,{value:a.length,minValue:1,maxValue:8,onDecrease:function(){t(a.slice(0,a.length-1)),c(r.map((function(e){return Object(d.a)({},e,{friendshipLevels:e.friendshipLevels.slice(0,e.friendshipLevels.length-1)})})))},onIncrease:function(){t([].concat(Object(v.a)(a),[{id:Object(s.a)(),name:"Resident ".concat(a.length+1)}])),c(r.map((function(e){return Object(d.a)({},e,{friendshipLevels:[].concat(Object(v.a)(e.friendshipLevels),[0])})})))}}),l.a.createElement("h4",null,"Enter your residents' names below:"),l.a.createElement("div",{className:"ResidentsInputContainer__fields"},a.map((function(e,n){return l.a.createElement(L,{key:e.id,name:e.name,index:n,onChange:function(e){return l=n,i=e.target.value,void t([].concat(Object(v.a)(a.slice(0,l)),[Object(d.a)({},a[l],{name:i})],Object(v.a)(a.slice(l+1))));var l,i}})}))))},F=(t(90),t(91),function(e){var a=e.name,t=e.villagerIndex,n=e.onChange;return l.a.createElement("div",{className:"VillagerNameField"},l.a.createElement("div",{className:"VillagerNameField__name"},"VILLAGER #".concat(t+1," ")),l.a.createElement(j.a,{variant:"outlined",size:"small",value:a,onChange:n}))}),S=function(){var e=Object(n.useContext)(m),a=e.villagers,t=e.setVillagers,i=Object(n.useContext)(o).residents;return l.a.createElement("div",{className:"VillagersInputContainer"},l.a.createElement("h3",null,"VILLAGERS"),l.a.createElement("h4",null,"How many villagers (animals) live on your island?"),l.a.createElement("div",{className:"text-note"},"You need 6 or more villagers for one to ask to move."),l.a.createElement(R,{value:a.length,minValue:6,maxValue:10,onDecrease:function(){return t(a.slice(0,a.length-1))},onIncrease:function(){t([].concat(Object(v.a)(a),[{id:Object(s.a)(),name:"Villager ".concat(a.length+1),friendshipLevels:i.map((function(){return 0}))}]))}}),l.a.createElement("h4",null,"Enter your villagers\u2019 names below:"),l.a.createElement("div",{className:"VillagersInputContainer__fields"},a.map((function(e,n){return l.a.createElement(F,{key:e.id,name:e.name,villagerIndex:n,onChange:function(e){return l=n,i=e.target.value,void t([].concat(Object(v.a)(a.slice(0,l)),[Object(d.a)({},a[l],{name:i})],Object(v.a)(a.slice(l+1))));var l,i}})}))))},M=function(){return l.a.createElement("div",{className:"IslandersContainer"},l.a.createElement("h2",null,"Step 1: add island villagers and residents"),l.a.createElement(_.a,{container:!0},l.a.createElement(_.a,{item:!0,sm:12,md:6},l.a.createElement(S,null)),l.a.createElement(_.a,{item:!0,sm:12,md:6},l.a.createElement(A,null))))},T=(t(92),t(59)),B=t.n(T),W=function(){return l.a.createElement("div",{className:"Header"},l.a.createElement("img",{className:"Header__image",src:B.a,alt:"banner"}),l.a.createElement("div",{className:"Header__navbar"}))},P=(t(93),t(60)),U=t.n(P),H=t(61),z=t.n(H),D=t(62),Y=t.n(D),G=function(){return l.a.createElement("div",{className:"Footer"},l.a.createElement("img",{className:"Footer__image",src:U.a,alt:"footer banner"}),l.a.createElement("div",{className:"Footer__content"},l.a.createElement("div",{className:"Footer__links"},l.a.createElement("a",{href:"https://twitter.com/yuecrossing",className:"Footer__icon",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:z.a,alt:"twitter link"})),l.a.createElement("a",{href:"https://www.instagram.com/yuecrossing/",className:"Footer__icon",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:Y.a,alt:"instagram link"}))),l.a.createElement("p",null,"Made with love by Xiyuue (Yuecrossing)."),l.a.createElement("p",null,"If you remove credits from my guides or modify my guides without permission, I will hunt you down and feed your flesh to my villagers. Thanks for understanding.")))},K=function(){var e=Object(n.useState)([{id:Object(s.a)(),name:"Resident 1"}]),a=Object(c.a)(e,2),t=a[0],i=a[1],r=Object(n.useState)([{id:Object(s.a)(),name:"Villager 1",friendshipLevels:[0]},{id:Object(s.a)(),name:"Villager 2",friendshipLevels:[0]},{id:Object(s.a)(),name:"Villager 3",friendshipLevels:[0]},{id:Object(s.a)(),name:"Villager 4",friendshipLevels:[0]},{id:Object(s.a)(),name:"Villager 5",friendshipLevels:[0]},{id:Object(s.a)(),name:"Villager 6",friendshipLevels:[0]}]),d=Object(c.a)(r,2),v=d[0],h=d[1],g=Object(n.useState)({lastVillagerToMoveIn:"",lastVillagerToStay:"",villagerRelocating:"",villagersWithUpcomingBirthday:[""]}),E=Object(c.a)(g,2),p=E[0],f=E[1];return l.a.createElement(o.Provider,{value:{residents:t,setResidents:i}},l.a.createElement(m.Provider,{value:{villagers:v,setVillagers:h}},l.a.createElement(u.Provider,{value:{exclusions:p,setExclusions:f}},l.a.createElement("div",{className:"App"},l.a.createElement(W,null),l.a.createElement("div",{className:"App__content"},l.a.createElement("h1",null,"Move-Out Calculator"),l.a.createElement(M,null),l.a.createElement(V,null),l.a.createElement(O,null)),l.a.createElement(G,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.96628328.chunk.js.map