(this.webpackJsonprex=this.webpackJsonprex||[]).push([[0],{106:function(e,t,a){e.exports=a(161)},111:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(38),o=a.n(r),c=(a(111),a(90)),l=a(32),s=a(17),m=a(2),u=a(29),d=a(10),p=a(30),h=a(31),g=a(33),f={duration:.7,ease:[.43,.13,.23,.96]},y={exit:{x:[0,100],opacity:[1,0]},enter:{x:[-100,0],opacity:[0,1]}},b=function(e){var t="/"===e.location.pathname?{top:"80vh",marginLeft:"1vw"}:{top:"10vh",marginLeft:"43vw",color:"black"};return i.a.createElement(m.b.div,{variants:y,transition:f,className:"title",style:t},i.a.createElement(l.b,{to:"/",style:{fontWeight:400,fontSize:"30px",letterSpacing:"18px"}},"Rex Shen"),i.a.createElement("p",null,"S\u2205ftw@re De\u22c1\u2203l\xf6per"))},v=a(102),E=a(101).a.createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_1650837_efahpb1m6g.js"}),x=[["icon-ziyuan","https://github.com/Rezxx"],["icon-LinkedIn","https://www.linkedin.com/in/rex-shen-49485b148/"],["icon-facebook","https://www.facebook.com/profile.php?id=100008996261914"]],k=function(e){return i.a.createElement("div",{className:"icons"},x.map((function(e){var t=Object(v.a)(e,2),a=t[0],n=t[1];return i.a.createElement(m.b.button,{key:a,whileHover:{scale:.95},whileTap:{scale:.8}},i.a.createElement("a",{href:n},i.a.createElement(m.b.div,{whileHover:{scale:1.2,opacity:.8}},i.a.createElement(E,{key:a,type:a}))))})))},w=a(96),j=a.n(w),O=function(e){var t=e.component;return i.a.createElement(m.b.div,{className:"content"},t?i.a.createElement(t,null):"")},C=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"sidenav"},["/about","/project","/contact"].map((function(t){return i.a.createElement(l.b,{style:e.location.pathname===t?{color:"#4675d2"}:{},key:t,to:t},t.replace("/",""))})),i.a.createElement("a",{href:j.a},"Resume")),i.a.createElement(b,e),i.a.createElement(k,null),i.a.createElement(O,{component:e.component}))},S=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){document.body.style.backgroundImage='url("https://images.squarespace-cdn.com/content/56b7af6e4d088edd8e4612ea/1550109262629-Y7ZJPDS7Z2D8RP9E0PAK/317968_463440357053079_1870862263_n.jpg?content-type=image%2Fjpeg")'}},{key:"render",value:function(){return i.a.createElement(m.b.div,{animate:"enter",exit:"exit"},i.a.createElement(C,this.props))}}]),t}(n.Component),I=a(97),N=a.n(I),R=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){document.body.style.backgroundImage="none"}},{key:"render",value:function(){var e={exit:{x:[0,100],opacity:[1,0]},enter:{x:[-100,0],opacity:[0,1]}};return i.a.createElement(m.b.div,{animate:"enter",exit:"exit",variants:{exit:{transition:{staggerChildren:.2}},enter:{transition:{staggerChildren:.2}}}},i.a.createElement(C,Object.assign({},this.props,{component:function(t){return i.a.createElement(m.b.div,{variants:e},i.a.createElement("div",{className:"me"},i.a.createElement("img",{src:N.a,alt:""})),"Hey there, My name is Rex Shen and I am currently looking for a Graduate Developer position in Australia. ",i.a.createElement("br",null),i.a.createElement("br",null),"I have recently graduated from ",i.a.createElement("b",null,"University of Sydney")," with a ",i.a.createElement("b",null,"Bachelor of Computer Science and Technology(Advanced)(Honours)")," degree(I know, it is a long title) in 2019. I am a person who enjoys solving problems and learning new skills or knowledges, and that's the reason why I pursued the advanced stream to push myself taking more challenges and landed with an 80+ WAM. I have also obtained a ",i.a.createElement("b",null,"First Class Honour")," from my degree as well with work focusing on Static Code Analysis.",i.a.createElement("br",null),i.a.createElement("br",null),"Apart from the coursework that I did in uni, I have also taken part in the teaching side of the classroom.  It has been more than one year since I started tutoring first-year Computer Science subject in USYD(",i.a.createElement("a",{className:"normal",href:"https://cusp.sydney.edu.au/students/view-unit-page/uos_id/289822/vid/317314"},"INFO1110")," and ",i.a.createElement("a",{className:"normal",href:"https://cusp.sydney.edu.au/students/view-unit-page/uos_id/289823/vid/318475"},"INFO1113"),"). I have learnt more about teamwork, communication and organisation as well as a deeper understanding of Computer Science from this experience.",i.a.createElement("br",null),i.a.createElement("br",null),"I would like to thank you for visiting my site and give me a thumbs up if you like my profile ;)",i.a.createElement("br",null))}})))}}]),t}(n.Component),A=a(53),D=a(174),F=a(176),H=a(73),P=a.n(H),W=a(98),L=a.n(W),_=(a(157),{duration:.5,ease:[.43,.13,.23,.96]}),z={exit:{x:[0,-100],opacity:[1,0]},enter:{x:[-100,0],opacity:[0,1]}},B={exit:{x:[0,100],opacity:[1,0]},enter:{x:[100,0],opacity:[0,1]}},G=[{title:"Connect Four Solver",stack:["Java"],img:"https://media.giphy.com/media/kEclKX8mH3W2F317vD/giphy.gif",url:"https://github.com/Rezxx/ConnectFour_Solver",desc:"Offers a best move in a ConnectFour game using Alpha-Beta pruning MiniMax algo."},{title:"Face Recognition",stack:["Python","OpenCV"],img:"https://media.giphy.com/media/Kbwl4xM4ZhL1KD9RHd/giphy.gif",url:"https://github.com/Rezxx/Face-Recognition",desc:"Face recognition tool uses EigenFace and k-NN classifier"},{title:"Throw Balls",stack:["Python","PyGame","OpenGL"],img:"https://media.giphy.com/media/L0xUOFkNYvZysYkOOv/giphy.gif",url:"https://github.com/Rezxx/Throw-Balls",desc:"A ball throwing game built using PyGame and OpenGL"},{title:"Pool Game",stack:["C++","Qt"],img:"https://media.giphy.com/media/KFoELF8nz5am78xA9Y/giphy.gif",url:"https://github.com/Rezxx/PoolGame",desc:"Virtual pool game under Qt enviornment"},{title:"Bird",stack:["React.js","Django","REST"],img:"https://media.giphy.com/media/cMEcAd8nS8UAQAdtLi/giphy.gif",url:"http://bird-host.s3-website.ap-southeast-2.amazonaws.com",desc:"Web music player based on Django and React, syncing Spotify and Youtube account"},{title:"ClearPay",stack:["Java","Android"],img:"https://media.giphy.com/media/RNWZ0rqJOLdGfWXG3R/giphy.gif",url:"#",desc:"An Android App for splitting bills between users, supporting offline transactions via Bluetooth."},{title:"Digger",stack:["Datalog"],img:P.a,url:"https://bitbucket.org/Rex9611/info3600-bugchecker/src/master/",desc:"Static analysis tool finding Java Null Pointer Exceptions based on Souffl\xe9 and Doop."},{title:"Trace Witness",stack:["Datalog"],img:P.a,url:L.a,desc:"Honour project of static program analysis to find valid trace for reported bugs."}],M=["cyan","red","purple","orange","gold","lime","green","pink","blue","geekblue","volcano","yellow"],Y=new Set;G.forEach((function(e){e.stack.forEach((function(e){Y.add(e)}))}));var J={};Object(A.a)(Y).forEach((function(e,t){J[e]=M[t]}));var T=function(e){var t=e.project,a=!(1&e.i),n=i.a.createElement(m.b.div,{key:"image",whileHover:{scale:.9},whileTap:{scale:.8},transition:_,style:{overflow:"hidden"}},i.a.createElement("a",{href:t.url},i.a.createElement(m.b.img,{src:t.img,alt:"Place Holder",whileHover:{scale:1.3},transition:_}))),r=i.a.createElement("div",{key:"text",style:{padding:"0 20px",minWidth:"15vw",maxWidth:"15vw"}},i.a.createElement("div",{className:"porject_name"},i.a.createElement("a",{href:t.url},t.title)),t.desc,i.a.createElement("div",{style:{lineHeight:"30px"}},i.a.createElement("b",null,"Stack:")," ",t.stack.map((function(e){return i.a.createElement(F.a,{key:e,color:J[e]},e)}))));return i.a.createElement(D.a,{item:!0,xs:a?12:6},i.a.createElement(m.b.div,{variants:a?z:B,className:"thumbnail"},a?[n,r]:[r,n]))},K=function(e){return i.a.createElement("div",{className:"gallery"},i.a.createElement(m.b.div,{className:"line",variants:{enter:{scaleY:[0,1],opacity:[0,1]},exit:{scaleY:[1,0],opacity:[1,0]}}}),i.a.createElement(D.a,{container:!0,justify:"flex-end",alignContent:"space-around",alignItems:"center",spacing:10},G.map((function(e,t){return i.a.createElement(T,{key:t,project:e,i:t})}))))},U=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){document.body.style.backgroundImage="none"}},{key:"render",value:function(){return i.a.createElement(m.b.div,{animate:"enter",exit:"exit",variants:{exit:{transition:{staggerChildren:.1}},enter:{transition:{staggerChildren:.1}}}},i.a.createElement(C,Object.assign({},this.props,{component:K})))}}]),t}(n.Component),Z=a(175),Q={exit:{x:[0,100],opacity:[1,0]},enter:{x:[-100,0],opacity:[0,1]}},q=function(e){return i.a.createElement(m.b.div,{style:{textAlign:"center",letterSpacing:5,margin:50},variants:Q},i.a.createElement(Z.a,null),i.a.createElement("div",{style:{margin:100}},i.a.createElement("p",{className:"head"},"Email"),i.a.createElement("br",null)," jshe9611@uni.sydney.edu.au"),i.a.createElement(Z.a,null))},V=function(e){return i.a.createElement(m.b.div,{animate:"enter",exit:"exit",variants:{exit:{transition:{staggerChildren:.2}},enter:{transition:{staggerChildren:.2}}}},i.a.createElement(C,Object.assign({},e,{component:q})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement((function(){return i.a.createElement(l.a,null,i.a.createElement(s.a,{render:function(e){return i.a.createElement(m.a,{exitBeforeEnter:!0},i.a.createElement(s.c,{location:e.location,key:e.location.pathname},i.a.createElement(s.a,{exact:!0,path:"/about"},i.a.createElement(R,e)),i.a.createElement(s.a,{exact:!0,path:"/project"},i.a.createElement(U,e)),i.a.createElement(s.a,{exact:!0,path:"/contact"},i.a.createElement(V,e)),i.a.createElement(s.a,{path:"/"},i.a.createElement(S,{props:e,location:Object(c.a)({},e.location,{pathname:"/"})}))))}}))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){e.exports=a.p+"static/media/face.868a54c0.jpg"},96:function(e,t,a){e.exports=a.p+"static/media/rex_cv.be5efb3b.pdf"},97:function(e,t,a){e.exports=a.p+"static/media/me.5d558d94.jpg"},98:function(e,t,a){e.exports=a.p+"static/media/thesis.b36fd504.pdf"}},[[106,1,2]]]);
//# sourceMappingURL=main.d26d6dbd.chunk.js.map