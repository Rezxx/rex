(this.webpackJsonprex=this.webpackJsonprex||[]).push([[0],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(80),o=a.n(r),c=(a(98),a(81)),l=a(30),s=a(14),m=a(2),u=a(27),d=a(9),p=a(28),h=a(29),g=a(31),b={duration:.7,ease:[.43,.13,.23,.96]},f={exit:{x:[0,100],opacity:[1,0]},enter:{x:[-100,0],opacity:[0,1]}},y=function(e){var t="/"===e.location.pathname?{top:"80vh",marginLeft:"1vw"}:{top:"10vh",marginLeft:"43vw",color:"black"};return i.a.createElement(m.b.div,{variants:f,transition:b,className:"title",style:t},i.a.createElement(l.b,{to:"/",style:{fontWeight:400,fontSize:"30px",letterSpacing:"18px"}},"Rex Shen"),i.a.createElement("p",null,"S\u2205ftw@re De\u22c1\u2203l\xf6per"))},v=a(90),E=a(162).a.createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_1650837_efahpb1m6g.js"}),x=[["icon-ziyuan","https://github.com/Rezxx"],["icon-LinkedIn","https://www.linkedin.com/in/rex-shen-49485b148/"],["icon-facebook","https://www.facebook.com/profile.php?id=100008996261914"]],w=function(e){return i.a.createElement("div",{className:"icons"},x.map((function(e){var t=Object(v.a)(e,2),a=t[0],n=t[1];return i.a.createElement(m.b.button,{key:a,whileHover:{scale:.95},whileTap:{scale:.9}},i.a.createElement("a",{href:n},i.a.createElement(m.b.div,{whileHover:{scale:1.2,opacity:.8}},i.a.createElement(E,{key:a,type:a}))))})))},k=a(88),j=a.n(k),O=function(e){var t=e.component;return i.a.createElement(m.b.div,{className:"content"},t?i.a.createElement(t,null):"")},I=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"sidenav"},["/about","/project","/contact"].map((function(t){return i.a.createElement(l.b,{style:e.location.pathname===t?{color:"#4675d2"}:{},key:t,to:t},t.replace("/",""))})),i.a.createElement("a",{href:j.a},"Resume")),i.a.createElement(y,e),i.a.createElement(w,null),i.a.createElement(O,{component:e.component}))},C=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){document.body.style.backgroundImage='url("https://images.squarespace-cdn.com/content/56b7af6e4d088edd8e4612ea/1550109262629-Y7ZJPDS7Z2D8RP9E0PAK/317968_463440357053079_1870862263_n.jpg?content-type=image%2Fjpeg")'}},{key:"render",value:function(){return i.a.createElement(m.b.div,{animate:"enter",exit:"exit"},i.a.createElement(I,this.props))}}]),t}(n.Component),N=a(89),S=a.n(N),A=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){document.body.style.backgroundImage="none"}},{key:"render",value:function(){var e={exit:{x:[0,100],opacity:[1,0]},enter:{x:[-100,0],opacity:[0,1]}};return i.a.createElement(m.b.div,{animate:"enter",exit:"exit",variants:{exit:{transition:{staggerChildren:.3}},enter:{transition:{staggerChildren:.3}}}},i.a.createElement(I,Object.assign({},this.props,{component:function(t){return i.a.createElement(m.b.div,{variants:e},i.a.createElement("div",{className:"me"},i.a.createElement("img",{src:S.a,alt:""})),"Hey there, My name is Rex Shen and I am currently looking for a Graduate Developer position in Australia. ",i.a.createElement("br",null),i.a.createElement("br",null),"I have recently graduated from ",i.a.createElement("b",null,"University of Sydney")," with a ",i.a.createElement("b",null,"Bachelor of Computer Science and Technology(Advanced)(Honours)")," degree(I know, it is a long title) in 2019. I am a person who enjoys solving problems and learning new skills or knowledges, and that's the reason why I persued the advanced stream to push myself taking more challenges and landed with an 80+ WAM. I have also obtained a ",i.a.createElement("b",null,"First Class Honour")," from my degree as well with work focusing on Static Code Analysis.",i.a.createElement("br",null),i.a.createElement("br",null),"Apart from the coursework that I did in uni, I have also taken part in the teaching side of the classroom.  It has been more than one year since I started tutoring first-year Computer Science subject in USYD(",i.a.createElement("a",{className:"normal",href:"https://cusp.sydney.edu.au/students/view-unit-page/uos_id/289822/vid/317314"},"INFO1110")," and ",i.a.createElement("a",{className:"normal",href:"https://cusp.sydney.edu.au/students/view-unit-page/uos_id/289823/vid/318475"},"INFO1113"),"). I have learnt more about teamwork, communication and organisation as well as a deeper understanding of Computer Science from this experience.",i.a.createElement("br",null),i.a.createElement("br",null),"I would like to thank you for visiting my site and give me a thumbs up if liked my profile ;)",i.a.createElement("br",null))}})))}}]),t}(n.Component),R=a(160),F=a(37),D=a.n(F),B={duration:.5,ease:[.43,.13,.23,.96]},_={exit:{x:[0,-100],opacity:[1,0]},enter:{x:[-100,0],opacity:[0,1]}},H={exit:{x:[0,100],opacity:[1,0]},enter:{x:[100,0],opacity:[0,1]}},M=[{title:"Connect Four Solver",img:D.a,url:"https://github.com/Rezxx/ConnectFour_Solver",desc:"Offers a best move in a ConnectFour game using Alpha-Beta pruning MiniMax algo."},{title:"Face Recognition",img:"https://media.giphy.com/media/Kbwl4xM4ZhL1KD9RHd/giphy.gif",url:"https://github.com/Rezxx/Face-Recognition",desc:"Face recognition tool uses EigenFace and k-NN classifier"},{title:"Throw Balls",img:"https://media.giphy.com/media/L0xUOFkNYvZysYkOOv/giphy.gif",url:"https://github.com/Rezxx/Throw-Balls",desc:"A ball throwing game built using PyGame and OpenGL"},{title:"Pool Game",img:D.a,url:"https://github.com/Rezxx/PoolGame",desc:"Virtual pool game under Qt enviornment"},{title:"Bird",img:"https://media.giphy.com/media/cMEcAd8nS8UAQAdtLi/giphy.gif",url:"https://github.com/Rezxx/Bird",desc:"Web music player based on Django and React"},{title:"Digger",img:D.a,url:"https://bitbucket.org/Rex9611/info3600-bugchecker/src/master/",desc:"Static analysis tool finding Java Null Pointer Exceptions based on Souffl\xe9 and Doop"},{title:"ClearPay",img:D.a,url:"#",desc:"An Android App for splitting bill between users, supporting offline transactions via Bluetooth."}],P=function(e){var t=e.project,a=!(1&e.i),n=i.a.createElement(m.b.div,{key:"image",whileHover:{scale:.9},whileTap:{scale:.8},transition:B,style:{overflow:"hidden"}},i.a.createElement("a",{href:t.url},i.a.createElement(m.b.img,{src:t.img,alt:"Place Holder",whileHover:{scale:1.3},transition:B}))),r=i.a.createElement("div",{key:"text",style:{margin:"0 20px",minWidth:"15vw"}},i.a.createElement("div",{className:"porject_name"},i.a.createElement("a",{href:t.url},t.title)),t.desc);return i.a.createElement(R.a,{item:!0,xs:a?12:6},i.a.createElement(m.b.div,{variants:a?_:H,className:"thumbnail"},a?[n,r]:[r,n]))},z=function(e){return i.a.createElement("div",{className:"gallery"},i.a.createElement(m.b.div,{className:"line",variants:{enter:{scaleY:[0,1],opacity:[0,1]},exit:{scaleY:[1,0],opacity:[1,0]}}}),i.a.createElement(R.a,{container:!0,justify:"flex-end",alignContent:"space-around",alignItems:"center",spacing:10},M.map((function(e,t){return i.a.createElement(P,{key:t,project:e,i:t})}))))},L=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){document.body.style.backgroundImage="none"}},{key:"render",value:function(){return i.a.createElement(m.b.div,{animate:"enter",exit:"exit",variants:{exit:{transition:{staggerChildren:.2}},enter:{transition:{staggerChildren:.2}}}},i.a.createElement(I,Object.assign({},this.props,{component:z})))}}]),t}(n.Component),W=a(161),Y={exit:{x:[0,100],opacity:[1,0]},enter:{x:[-100,0],opacity:[0,1]}},G=function(e){return i.a.createElement(m.b.div,{style:{textAlign:"center",letterSpacing:5,margin:50},variants:Y},i.a.createElement(W.a,null),i.a.createElement("div",{style:{margin:100}},i.a.createElement("p",{className:"head"},"Email"),i.a.createElement("br",null)," jshe9611@uni.sydney.edu.au"),i.a.createElement(W.a,null))},T=function(e){return i.a.createElement(m.b.div,{animate:"enter",exit:"exit",variants:{exit:{transition:{staggerChildren:.3}},enter:{transition:{staggerChildren:.3}}}},i.a.createElement(I,Object.assign({},e,{component:G})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement((function(){return i.a.createElement(l.a,null,i.a.createElement(s.a,{render:function(e){return i.a.createElement(m.a,{exitBeforeEnter:!0},i.a.createElement(s.c,{location:e.location,key:e.location.pathname},i.a.createElement(s.a,{exact:!0,path:"/about"},i.a.createElement(A,e)),i.a.createElement(s.a,{exact:!0,path:"/project"},i.a.createElement(L,e)),i.a.createElement(s.a,{exact:!0,path:"/contact"},i.a.createElement(T,e)),i.a.createElement(s.a,{path:"/"},i.a.createElement(C,{props:e,location:Object(c.a)({},e.location,{pathname:"/"})}))))}}))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,t,a){e.exports=a.p+"static/media/face.868a54c0.jpg"},88:function(e,t,a){e.exports=a.p+"static/media/rex_cv.be5efb3b.pdf"},89:function(e,t,a){e.exports=a.p+"static/media/me.5d558d94.jpg"},93:function(e,t,a){e.exports=a(146)},98:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.d1d7675c.chunk.js.map