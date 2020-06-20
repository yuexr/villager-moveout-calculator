(this["webpackJsonpvillager-moveout-calculator"]=this["webpackJsonpvillager-moveout-calculator"]||[]).push([[0],{58:function(e,a,t){e.exports=t.p+"static/media/header.d81268f1.png"},69:function(e,a,t){e.exports=t(90)},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},79:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(8),r=t.n(i),c=t(37),s=t(132),o=(t(74),Object(n.createContext)({residents:void 0,setResidents:function(){throw new Error("setResidents() not implemented")}})),m=Object(n.createContext)({villagers:void 0,setVillagers:function(){throw new Error("setVillagers() not implemented")}}),u=Object(n.createContext)({exclusions:void 0,setExclusions:function(){throw new Error("setExclusions() not implemented")}}),d=(t(75),t(15)),v=t(12),h=(t(76),t(134)),E=t(22),g=t.n(E),p=t(23),f=(t(79),function(e){var a=e.residentName,t=e.friendshipLevel,n=e.onChange;return l.a.createElement("div",{className:"ResidentFriendshipField"},l.a.createElement("div",{className:"ResidentFriendshipField__header"},l.a.createElement("span",{className:"ResidentFriendshipField__name"},a),l.a.createElement("span",null,"LEVEL: ",t||"?")),l.a.createElement("div",{className:"ResidentFriendshipField__slider"},l.a.createElement(h.a,{min:0,max:6,value:t,onChange:n,ThumbComponent:function(e){return l.a.createElement("span",e,l.a.createElement(g.a,{path:p.a,size:"24px"}))}})))}),b=t(30),O=function(e,a){return e===a.lastVillagerToMoveIn?"Recently moved in.":e===a.lastVillagerToStay?"Recently asked to move out.":e===a.villagerRelocating?"House is being relocated.":~a.villagersWithUpcomingBirthday.indexOf(e)?"Birthday in the next 7 days.":null},N=function(e){var a=e.villager,t=e.villagerIndex,i=e.moveOutChanceA,r=e.moveOutChanceB,c=Object(n.useContext)(o).residents,s=Object(n.useContext)(m),h=s.villagers,E=s.setVillagers,g=Object(n.useContext)(u).exclusions,p=O(t,g);return l.a.createElement("div",{className:"VillagerChanceField ".concat(p?"disabled":"")},l.a.createElement("div",null,l.a.createElement("div",{className:"VillagerChanceField__name"},a.name),p?l.a.createElement("div",{className:"VillagerChanceField__disabled-text"},"Cannot ask to move because: ",p):l.a.createElement(l.a.Fragment,null,a.friendshipLevels.map((function(e,a){var n=c[a];return l.a.createElement(f,{key:n.id,residentName:n.name,friendshipLevel:e,onChange:function(e,n){return function(e,a,t){var n=Object(v.a)(h[e].friendshipLevels);n[a]=t,E([].concat(Object(v.a)(h.slice(0,e)),[Object(d.a)({},h[e],{friendshipLevels:n})],Object(v.a)(h.slice(e+1))))}(t,a,n)}})})))),l.a.createElement("div",{className:"VillagerChanceField__chance"},l.a.createElement("h4",null,"Villager Ask Chance:"),l.a.createElement("div",{className:"VillagerChanceField__chance-percentage"},p?"0.00%":Math.min(i,r)+" % - "+Math.max(i,r)+"%")))},y=function(){var e=Object(n.useContext)(m).villagers,a=function(e,a){var t=[0,0,30,60,100,150,200],n=[255,29,59,99,149,199,255],l=e.map((function(e,n){if(O(n,a))return 0;var l=e.friendshipLevels.map((function(e){return t[e]})),i=Object(b.mean)(l),r=Object(b.sumBy)(e.friendshipLevels,(function(e){return 6===e?1:0}));return Math.floor((300-i)/10)-r})),i=e.map((function(e,t){if(O(t,a))return 0;var l=e.friendshipLevels.map((function(e){return n[e]})),i=Object(b.mean)(l),r=Object(b.sumBy)(e.friendshipLevels,(function(e){return 6===e?1:0}));return Math.floor((300-i)/10)-r}));return[l.map((function(e){return(e/Object(b.sum)(l)*100).toFixed(2)})),i.map((function(e){return(e/Object(b.sum)(i)*100).toFixed(2)}))]}(e,Object(n.useContext)(u).exclusions),t=Object(c.a)(a,2),i=t[0],r=t[1];return l.a.createElement("div",{className:"VillagersChanceContainer"},l.a.createElement("h2",null,"Step 3: friendship information and move out chances!"),l.a.createElement("h4",null,"Villagers with higher friendship are less likely to move, and villagers with lower friendship are more likely to move. Move-out chance is calculated using their average friendship with all island residents."),l.a.createElement("h3",null,"HOW DO I KNOW WHAT FRIENDSHIP LEVEL I AM AT WITH MY VILLAGER?"),l.a.createElement("h4",null,"Make your best guess based on the information below. If you really don\u2019t know, click unknown."),l.a.createElement("div",{className:"VillagersChanceContainer__friendship-summary"},l.a.createElement("div",null,l.a.createElement("h4",null,l.a.createElement("span",null,"Level 1:")," Base friendship level when villager first moves in."),l.a.createElement("h4",null,l.a.createElement("span",null,"Level 2:")," You can give them daily gifts!"),l.a.createElement("h4",null,l.a.createElement("span",null,"Level 3:")," They can sell items to you, and they can give you a nickname."),l.a.createElement("h4",null,l.a.createElement("span",null,"Level 4:")," You can change their catchphrase."),l.a.createElement("h4",null,l.a.createElement("span",null,"Level 5:")," You can change their greeting, and you have a chance of obtaining their photo!"),l.a.createElement("h4",null,l.a.createElement("span",null,"Level 6:")," They can approach you to buy items*."),l.a.createElement("div",{className:"text-note"},"*Note: this is different from when they buy your items in a conversation. At level 6, they will run up to you to buy!"))),l.a.createElement("div",{className:"VillagersChanceContainer__villagers-container"},e.map((function(e,a){return l.a.createElement(N,{key:e.id,villager:e,villagerIndex:a,moveOutChanceA:i[a],moveOutChanceB:r[a]})}))))},C=t(128),x=t(129),V=(t(82),function(){var e=Object(n.useContext)(m).villagers,a=Object(n.useContext)(u),t=a.exclusions,i=a.setExclusions,r=t.lastVillagerToMoveIn,c=t.lastVillagerToStay,s=t.villagerRelocating,o=t.villagersWithUpcomingBirthday,h=function(e,a){var n=Object(d.a)({},t),l=e.target.value;n[a]=l?parseInt(e.target.value):l,i(n)};return l.a.createElement("div",{className:"VillagerExclusionsContainer"},l.a.createElement("h2",null,"Step 2: add exclusions"),l.a.createElement("h4",null,"Villagers who meet these conditions cannot ask to move out, and will be excluded from the calculation."),l.a.createElement("div",{className:"VillagerExclusionsContainer__field-label"},"A. Last villager to move into your island (newest villager):"),l.a.createElement(C.a,{variant:"outlined",displayEmpty:!0,value:""===r?"":r.toString(),onChange:function(e){return h(e,"lastVillagerToMoveIn")}},l.a.createElement(x.a,{value:""},"UNKNOWN OR NOT APPLICABLE"),e.map((function(e,a){return l.a.createElement(x.a,{key:e.id,value:a.toString()},e.name)}))),l.a.createElement("div",{className:"VillagerExclusionsContainer__field-label"},"B. Most recent villager to ask you to move, and you told them to stay:"),l.a.createElement(C.a,{variant:"outlined",displayEmpty:!0,value:""===c?"":c.toString(),onChange:function(e){return h(e,"lastVillagerToStay")}},l.a.createElement(x.a,{value:""},"UNKNOWN OR NOT APPLICABLE"),e.map((function(e,a){return l.a.createElement(x.a,{key:e.id,value:a.toString()},e.name)}))),l.a.createElement("div",{className:"VillagerExclusionsContainer__field-label"},"C. Villager is currently in the process of relocating their house (including if their moving kit is in your pocket):"),l.a.createElement(C.a,{variant:"outlined",displayEmpty:!0,value:""===s?"":s.toString(),onChange:function(e){return h(e,"villagerRelocating")}},l.a.createElement(x.a,{value:""},"UNKNOWN OR NOT APPLICABLE"),e.map((function(e,a){return l.a.createElement(x.a,{key:e.id,value:a.toString()},e.name)}))),l.a.createElement("div",{className:"VillagerExclusionsContainer__field-label"},"D. Villagers whose birthday is in the next 7 days:",l.a.createElement("div",{className:"text-note"},"Their up-coming birthday will be mentioned on the bulletin board 7 days prior.")),l.a.createElement("div",{className:"VillagerExclusionsContainer__birthday-fields"},o.map((function(a,n){return l.a.createElement(C.a,{variant:"outlined",displayEmpty:!0,value:""===a?"":a.toString(),onChange:function(e){return function(e,a){var n=e.target.value,l=Object(d.a)({},t,{villagersWithUpcomingBirthday:[].concat(Object(v.a)(o.slice(0,a)),[n?parseInt(e.target.value):n],Object(v.a)(o.slice(a+1)))});i(l)}(e,n)}},l.a.createElement(x.a,{value:""},"UNKNOWN OR NOT APPLICABLE"),e.map((function(e,a){return l.a.createElement(x.a,{key:e.id,value:a.toString()},e.name)})))}))),o.length<e.length&&l.a.createElement("div",{className:"VillagerExclusionsContainer__birthday-button"},l.a.createElement("button",{className:"plus-button",onClick:function(){var e=Object(d.a)({},t,{villagersWithUpcomingBirthday:[].concat(Object(v.a)(o),[""])});i(e)}},l.a.createElement(g.a,{path:p.c,size:"18px"})),"ADD ANOTHER VILLAGER"),o.length>1&&l.a.createElement("div",{className:"VillagerExclusionsContainer__birthday-button"},l.a.createElement("button",{className:"minus-button",onClick:function(){var e=Object(d.a)({},t,{villagersWithUpcomingBirthday:o.slice(0,o.length-1)});i(e)}},l.a.createElement(g.a,{path:p.b,size:"18px"})),"REMOVE A VILLAGER"))}),j=(t(83),t(58)),L=t.n(j),_=function(){return l.a.createElement("div",{className:"Header"},l.a.createElement("img",{className:"Header__image",src:L.a,alt:"banner"}),l.a.createElement("div",{className:"Header__navbar"}))},I=t(127),w=(t(84),t(85),t(86),t(130)),R=function(e){var a=e.name,t=e.index,n=e.onChange;return l.a.createElement("div",{className:"ResidentNameField"},l.a.createElement("div",{className:"ResidentNameField__name"},"RESIDENT #".concat(t+1," ")),l.a.createElement(w.a,{variant:"outlined",size:"small",value:a,onChange:n}))},k=(t(87),t(4)),A=t(133),S=Object(k.a)((function(){return{arrow:{color:"rgba(119, 154, 126, 0.8)"},tooltip:{backgroundColor:"rgba(119, 154, 126, 0.8)",fontFamily:["Nubito","sans-serif"],fontSize:14,fontWeight:400,padding:8}}}))(A.a),F=function(e){var a=e.value,t=e.minValue,n=void 0===t?1:t,i=e.maxValue,r=void 0===i?99:i,c=e.onDecrease,s=e.onIncrease;return l.a.createElement("div",{className:"NumberSelector"},a===n?l.a.createElement(S,{title:"MINIMUM ".concat(n),placement:"top",arrow:!0},l.a.createElement("button",{className:"minus-button disabled"},l.a.createElement(g.a,{path:p.b,size:"18px"}))):l.a.createElement("button",{className:"minus-button",onClick:c},l.a.createElement(g.a,{path:p.b,size:"18px"})),l.a.createElement("div",{className:"NumberSelector__value"},a),a===r?l.a.createElement(S,{title:"MAXIMUM ".concat(r),placement:"top",arrow:!0},l.a.createElement("button",{className:"plus-button disabled"},l.a.createElement(g.a,{path:p.c,size:"18px"}))):l.a.createElement("button",{className:"plus-button",onClick:s},l.a.createElement(g.a,{path:p.c,size:"18px"})))},M=function(){var e=Object(n.useContext)(o),a=e.residents,t=e.setResidents,i=Object(n.useContext)(m),r=i.villagers,c=i.setVillagers;return l.a.createElement("div",{className:"ResidentsInputContainer"},l.a.createElement("h3",null,"RESIDENTS"),l.a.createElement("h4",null,"How many residents (switch players) live on your island?"),l.a.createElement("div",{className:"text-note"},"Villager move-out chance considers friendship with ALL players."),l.a.createElement(F,{value:a.length,minValue:1,maxValue:8,onDecrease:function(){t(a.slice(0,a.length-1)),c(r.map((function(e){return Object(d.a)({},e,{friendshipLevels:e.friendshipLevels.slice(0,e.friendshipLevels.length-1)})})))},onIncrease:function(){t([].concat(Object(v.a)(a),[{id:Object(s.a)(),name:"Resident ".concat(a.length+1)}])),c(r.map((function(e){return Object(d.a)({},e,{friendshipLevels:[].concat(Object(v.a)(e.friendshipLevels),[0])})})))}}),l.a.createElement("h4",null,"Enter your residents' names below:"),l.a.createElement("div",{className:"ResidentsInputContainer__fields"},a.map((function(e,n){return l.a.createElement(R,{key:e.id,name:e.name,index:n,onChange:function(e){return l=n,i=e.target.value,void t([].concat(Object(v.a)(a.slice(0,l)),[Object(d.a)({},a[l],{name:i})],Object(v.a)(a.slice(l+1))));var l,i}})}))))},T=(t(88),t(89),function(e){var a=e.name,t=e.villagerIndex,n=e.onChange;return l.a.createElement("div",{className:"VillagerNameField"},l.a.createElement("div",{className:"VillagerNameField__name"},"VILLAGER #".concat(t+1," ")),l.a.createElement(w.a,{variant:"outlined",size:"small",value:a,onChange:n}))}),B=function(){var e=Object(n.useContext)(m),a=e.villagers,t=e.setVillagers,i=Object(n.useContext)(o).residents;return l.a.createElement("div",{className:"VillagersInputContainer"},l.a.createElement("h3",null,"VILLAGERS"),l.a.createElement("h4",null,"How many villagers (animals) live on your island?"),l.a.createElement("div",{className:"text-note"},"You need 6 or more villagers for one to ask to move."),l.a.createElement(F,{value:a.length,minValue:6,maxValue:10,onDecrease:function(){return t(a.slice(0,a.length-1))},onIncrease:function(){t([].concat(Object(v.a)(a),[{id:Object(s.a)(),name:"Villager ".concat(a.length+1),friendshipLevels:i.map((function(){return 0}))}]))}}),l.a.createElement("h4",null,"Enter your villagers\u2019 names below:"),l.a.createElement("div",{className:"VillagersInputContainer__fields"},a.map((function(e,n){return l.a.createElement(T,{key:e.id,name:e.name,villagerIndex:n,onChange:function(e){return l=n,i=e.target.value,void t([].concat(Object(v.a)(a.slice(0,l)),[Object(d.a)({},a[l],{name:i})],Object(v.a)(a.slice(l+1))));var l,i}})}))))},W=function(){return l.a.createElement("div",{className:"IslandersContainer"},l.a.createElement("h2",null,"Step 1: add island villagers and residents"),l.a.createElement(I.a,{container:!0},l.a.createElement(I.a,{item:!0,sm:12,md:6},l.a.createElement(B,null)),l.a.createElement(I.a,{item:!0,sm:12,md:6},l.a.createElement(M,null))))},P=function(){var e=Object(n.useState)([{id:Object(s.a)(),name:"Resident 1"}]),a=Object(c.a)(e,2),t=a[0],i=a[1],r=Object(n.useState)([{id:Object(s.a)(),name:"Villager 1",friendshipLevels:[0]},{id:Object(s.a)(),name:"Villager 2",friendshipLevels:[0]},{id:Object(s.a)(),name:"Villager 3",friendshipLevels:[0]},{id:Object(s.a)(),name:"Villager 4",friendshipLevels:[0]},{id:Object(s.a)(),name:"Villager 5",friendshipLevels:[0]},{id:Object(s.a)(),name:"Villager 6",friendshipLevels:[0]}]),d=Object(c.a)(r,2),v=d[0],h=d[1],E=Object(n.useState)({lastVillagerToMoveIn:"",lastVillagerToStay:"",villagerRelocating:"",villagersWithUpcomingBirthday:[""]}),g=Object(c.a)(E,2),p=g[0],f=g[1];return l.a.createElement(o.Provider,{value:{residents:t,setResidents:i}},l.a.createElement(m.Provider,{value:{villagers:v,setVillagers:h}},l.a.createElement(u.Provider,{value:{exclusions:p,setExclusions:f}},l.a.createElement("div",{className:"App"},l.a.createElement(_,null),l.a.createElement("div",{className:"App__content"},l.a.createElement("h1",null,"Move-Out Calculator"),l.a.createElement(W,null),l.a.createElement(V,null),l.a.createElement(y,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.9d7ed268.chunk.js.map