(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,a,t){e.exports=t(60)},59:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(28),m=t.n(r),l=t(8),s=t.n(l),o=t(11),i=t(13),p=t(12),u=t.n(p),b=t(6);function E(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1];Object(n.useEffect)(function(){m()},[]);var m=function(){var e=Object(o.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u.a.get("https://pokeapi.co/api/v2/pokemon/?limit=764").then(function(e){return r(e.data.results)});case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"grid"},t?t.map(function(e,a){return c.a.createElement("div",{key:a,className:"card shadow p-2"},c.a.createElement("h6",{className:"py-2"},e.name),c.a.createElement("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(a+1,".png"),alt:e.name,width:"100px",height:"100px",className:"mx-auto"}),c.a.createElement(b.b,{to:"/poke/".concat(a+1)},c.a.createElement("h6",{className:"btn btn-sm btn-primary"},"info")))}):"Loading...")}var d=t(7);function h(e){var a=e.match,t=Object(n.useState)({name:"",abilities:[],sprites:[],types:[],moves:[]}),r=Object(i.a)(t,2),m=r[0],l=r[1],p="https://pokeapi.co/api/v2/pokemon/".concat(a.params.id);Object(n.useEffect)(function(){E()});var E=function(){var e=Object(o.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u.a.get(p).then(function(e){return l(e.data)});case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"container text-center"},c.a.createElement("div",{className:"card shadow p-2"},c.a.createElement("h5",{className:"my-2"},m.name),c.a.createElement("img",{src:m.sprites.front_default,alt:m.name,className:"mx-auto",width:"150px",height:"150px"}),c.a.createElement("h5",null,c.a.createElement("u",null,"Abilities")),c.a.createElement("div",{className:"flex-wrap mx-auto mb-2"},m.abilities.map(function(e,a){return c.a.createElement("h6",{key:a,className:"text-dark"},c.a.createElement("span",{className:"badge badge-pill badge-warning px-3 py-1 mx-2"},e.ability.name))})),c.a.createElement("h5",null,c.a.createElement("u",null,"Type")),c.a.createElement("div",{className:"flex mx-auto mb-2"},m.types.map(function(e,a){return c.a.createElement("span",{key:a,className:"badge badge-pill badge-success mx-2 px-3 py-1"},e.type.name)})),c.a.createElement("h5",null,c.a.createElement("u",null,"Moves")),c.a.createElement("div",{className:"flex-wrap mx-auto mb-2"},m.moves.map(function(e,a){return c.a.createElement("span",{key:a,className:"badge badge-pill badge-danger m-1 px-3 py-1"},e.move.name)})),c.a.createElement(b.b,{to:"/"},c.a.createElement("h6",{className:"mb-4 mt-3 btn btn-primary btn-sm"},"home"))),c.a.createElement(d.a,{path:"".concat(a.url),component:h}))}function f(){return c.a.createElement("h2",{className:"my-4"},c.a.createElement(b.b,{to:"/"},"Pokemon"))}function v(){return c.a.createElement("h6",{className:"my-5"},"built with"," ",c.a.createElement("span",{role:"img","aria-label":"heart"},"\u2764\ufe0f"," "),"by jana")}t(58),t(59);var x=document.getElementById("root");m.a.render(c.a.createElement(function(){return c.a.createElement(b.a,{basename:"/Pokemon"},c.a.createElement("div",{className:"container text-center"},c.a.createElement(f,null),c.a.createElement(d.c,null,c.a.createElement(d.a,{name:"home",path:"/",exact:!0,component:E}),c.a.createElement(d.a,{name:"pokemon",path:"/poke/:id",exact:!0,component:h})),c.a.createElement(v,null)))},null),x)}},[[31,1,2]]]);
//# sourceMappingURL=main.add6269e.chunk.js.map