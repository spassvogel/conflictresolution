(this.webpackJsonpconflictresolution=this.webpackJsonpconflictresolution||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a,o,r=n(1),i=n.n(r),c=n(34),l=n.n(c),s=(n(57),n(12)),u=(n(58),n(45));!function(e){e.youtube="youtube",e.options="options",e.iframe="iframe",e.conflict="conflict"}(a||(a={})),function(e){e.caption="caption",e.speech="speech"}(o||(o={}));var m=u.map((function(e){switch(a[e.type]){case a.options:case a.youtube:case a.iframe:case a.conflict:return e}})),p=n(50),f=n(25),d=n(9),h=n(7),g=n(13),b=function(e){var t=Object(r.useRef)(null),n=Object(r.useRef)(),a=Object(r.useState)(e.position||new h.Point),o=Object(s.a)(a,2),c=o[0],l=o[1];Object(r.useEffect)((function(){g.a.from(t.current,{duration:1,ease:"elastic.out(2, 0.5)",pixi:{visible:!1,scale:.1}}).delay(e.delay||0)}),[e.delay]),Object(r.useEffect)((function(){var n;return!1!==e.bounce&&(n=g.a.to(t.current,{duration:.5,yoyo:!0,repeat:-1,pixi:{y:"-=40"}}).delay(1+Math.random())),function(){n.kill()}}),[e.bounce]);var u=function(e){n.current=e.data,e.stopPropagation()},m=function(){n.current=void 0,console.log(c)},p=function(){if(n.current){var e=n.current.getLocalPosition(t.current.parent);l(e)}};return i.a.createElement(d.Sprite,Object.assign({},e,{anchor:[.5,.5],position:c,ref:t,interactive:!0,image:"".concat("/conflictresolution","/images/ui/marker.svg"),mousedown:u,touchstart:u,mouseup:m,mouseupoutside:m,mousemove:p,touchmove:p}))},v=n(31),y=n.n(v),E=(n(81),n(47)),w=n.n(E),x=function(e){var t=e.content;return i.a.createElement(w.a,{url:t.url,width:"100%"})};function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var j=i.a.createElement("style",{type:"text/css"},"\n\t.st0{fill:none;stroke:#3FA548;stroke-width:32;}\n"),S=i.a.createElement("defs",null),N=i.a.createElement("g",{id:"Page-1"},i.a.createElement("polyline",{id:"checkmark",className:"st0",points:"11.33,88.97 88.95,166.87 244.67,11.32  "})),C=function(e){var t=e.svgRef,n=e.title,a=O(e,["svgRef","title"]);return i.a.createElement("svg",k({id:"m-check-mark",x:"0px",y:"0px",width:"255.97px",height:"189.51px",viewBox:"0 0 255.97 189.51",style:{enableBackground:"new 0 0 255.97 189.51"},xmlSpace:"preserve",ref:t},a),n?i.a.createElement("title",null,n):null,j,S,N)},I=i.a.forwardRef((function(e,t){return i.a.createElement(C,k({svgRef:t},e))})),A=(n.p,function(e){var t=e.content,n=Object(r.useState)(null),a=Object(s.a)(n,2),o=a[0],c=a[1];return i.a.createElement("div",{className:"modal-content modal-options"},i.a.createElement("p",null,t.description),i.a.createElement("div",{className:"banner",style:{backgroundImage:"url(".concat("/conflictresolution","/").concat(t.bannerImg,")")}}),i.a.createElement("ul",{className:"options"},t.options.map((function(e,t){return i.a.createElement("li",{key:e,className:t===o?"active":"",onClick:function(){return c(t)}},i.a.createElement("div",{className:"checkbox"},i.a.createElement(I,{className:"check"})),i.a.createElement("div",{className:"text"},e))}))),i.a.createElement("button",{disabled:null===o},i.a.createElement("b",null,"Okay")))}),R=function(e){var t=e.content;return i.a.createElement("iframe",{title:"21cc game",src:t.url,width:"100%",height:t.height})},W=n(5),K=n(102);n(98);g.a.registerPlugin(K.a);var P,H=function(e){var t=e.content,n=e.selectedAnswer,a=void 0===n?null:n,o=Object(r.useState)(a),c=Object(s.a)(o,2),l=c[0],u=c[1],m=Object(r.useMemo)((function(){return null===l?null:e.content.reactions[l]}),[e.content.reactions,l]),p=Object(r.useState)(null!=a),d=Object(s.a)(p,2),h=d[0],b=d[1],v=Object(r.useState)((null===m||void 0===m?void 0:m.situationImage)||t.situationImage),y=Object(s.a)(v,2),E=y[0],w=y[1],x=Object(r.useRef)(null),k=Object(r.useRef)(null),O=Object(r.useRef)(null),j=Object(r.useRef)(null);Object(r.useEffect)((function(){f.a.add("correct","".concat("/conflictresolution","/sound/correct.mp3")),f.a.add("wrong","".concat("/conflictresolution","/sound/wrong.mp3"))}),[]);var S=Object(r.useCallback)((function(){var e=g.a.timeline(),n=k.current,a=O.current;g.a.killTweensOf(n),x.current.removeAttribute("style"),a.removeAttribute("style"),n.innerHTML=t.sequence[0].text;var o="";t.sequence.forEach((function(t,a){o=t.balloonClass||o;var r="balloon ".concat(t.type," ").concat(o);e.to(n,{onStart:function(){x.current.className=r,t.situationImage&&w(t.situationImage)},delay:(a>0?3:0)/1,duration:.025*t.text.length/1,text:{value:t.text,oldClass:"hidden",newClass:"visible"},ease:W.b.easeNone})})),e.to(x.current,{delay:3,duration:.5,autoAlpha:0,ease:W.b.easeNone}),e.to(a,{duration:.5,left:0,ease:W.d.easeInOut},"-=1")}),[t.sequence]);Object(r.useEffect)((function(){a?(O.current.style.left="0px",x.current.style.visibility="hidden"):S()}),[t.sequence,S,a]);var N=function(){w(t.situationImage),u(null),S()},C=function(){b(!0),w(m.situationImage),m.correct?(f.a.play("correct"),e.setCorrectAnswer(l)):f.a.play("wrong")},I=function(e,t){if(null===l)return i.a.createElement("li",{key:e,className:"normal",onClick:function(e){return function(e,t){if(e.className="animating",j.current){var n=j.current.querySelectorAll(".options .normal");g.a.to(n,{duration:.5,opacity:0,ease:W.b.easeNone});var a=j.current.querySelector(".options").getBoundingClientRect().top,o=e.getBoundingClientRect().top,r=Math.abs(a-o);g.a.to(e,{duration:.5,top:-r,ease:W.b.easeNone,onComplete:function(){setTimeout((function(){e.className="",u(t)}),250)}})}}(e.currentTarget,t)}},i.a.createElement("div",{className:"text"},e));if(l===t){var n="";return h&&(n=(null===m||void 0===m?void 0:m.correct)?"correct":"wrong"),i.a.createElement("li",{key:e,className:n},i.a.createElement("div",{className:"text"},e))}};return i.a.createElement("div",{className:"modal-content modal-conflict",ref:j},i.a.createElement("div",{className:"situation"},i.a.createElement("div",{className:"inset",ref:O},i.a.createElement("p",null,t.description),i.a.createElement("ul",{className:"options"},t.options.map((function(e,t){return I(e,t)}))),m?h?i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,m.text),!(null===m||void 0===m?void 0:m.correct)&&i.a.createElement("button",{onClick:N,className:"replay"},"Replay")):i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,m.confirmText),i.a.createElement("button",{onClick:C},"yes"),i.a.createElement("button",{onClick:N},"no")):null),i.a.createElement("div",{className:"balloon",ref:x},i.a.createElement("span",{ref:k})),i.a.createElement("div",{className:"situation-image",style:{backgroundImage:"url(".concat("/conflictresolution","/").concat(E,")")}})),!l&&i.a.createElement("button",{className:"button-replay",onClick:N},"replay"))},T=function(e){var t=e.content,n=e.onClose,o=e.setCorrectAnswer,r=e.selectedAnswer,c=function(){n()};return i.a.createElement(y.a,{isOpen:!0,ariaHideApp:!1,overlayClassName:"modal-overlay",className:"modal",onRequestClose:c},i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"header"},i.a.createElement("h1",null,t.header," "),i.a.createElement("div",{className:"modal-close",onClick:function(){return c()}})),function(){switch(t.type){case a.youtube:return i.a.createElement(x,{content:t.content});case a.options:return i.a.createElement(A,{content:t.content});case a.iframe:return i.a.createElement(R,{content:t.content});case a.conflict:return i.a.createElement(H,{content:t.content,setCorrectAnswer:o,selectedAnswer:r})}}()))},q=n(48),B=i.a.forwardRef((function(e,t){var n=Object(d.useApp)();if(n){var a="url('".concat("/conflictresolution","/img/cursors/dwarven_gauntlet_extra_6.png'), auto");n.renderer.plugins.interaction.cursorStyles.pointer=a}return i.a.createElement(M,Object.assign({app:n},e,{ref:t}))})),M=Object(d.PixiComponent)("Viewport",{create:function(e){var t=new q.a({screenWidth:e.screenWidth,screenHeight:e.screenHeight,worldWidth:e.worldWidth,worldHeight:e.worldHeight,ticker:e.app.ticker,interaction:e.app.renderer.plugins.interaction}),n=e.minScale,a=void 0===n?.5:n,o=e.maxScale,r=void 0===o?1:o;return t.drag().pinch().wheel().clamp({direction:"all"}).clampZoom({minScale:a,maxScale:r}).decelerate(),t}}),F=B,Y=n(101),L="".concat("/conflictresolution","/images/map/conveyor-box.png"),z=function(e){var t=Object(r.useRef)(null),n=Object(r.useState)(),a=Object(s.a)(n,2),o=a[0],c=a[1],l=Object(d.useApp)();return Object(r.useEffect)((function(){l.loader.resources[L]?c(l.loader.resources[L].texture):l.loader.add(L).load((function(e,t){c(t[L].texture)}))}),[l]),Object(r.useEffect)((function(){if(o){var e=function(e){var n,a=new h.Sprite(o);null===(n=t.current)||void 0===n||n.addChild(a),a.x=568,a.y=160;var r=g.a.timeline({delay:e,repeat:-1,repeatDelay:1});r.to(a,{ease:W.b.easeNone,pixi:{x:956,y:256},duration:5}),r.to(a,{ease:W.b.easeNone,pixi:{x:959,y:278},duration:.5}),r.to(a,{ease:W.b.easeNone,pixi:{x:541,y:473},duration:6}),r.to(a,{delay:1,ease:W.b.easeNone,pixi:{alpha:0},duration:1})};e(0),e(3),e(5.5),e(7),e(9.5)}}),[o]),i.a.createElement(d.Container,e,i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/map/rack-small.png")}),i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/map/conveyor-right.png"),x:87,y:152}),i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/map/rack-small.png"),x:160,y:39}),i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/map/conveyor-right.png"),x:251,y:192}),i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/map/conveyor-left.png"),x:520,y:234}),i.a.createElement(d.Container,{ref:t}),i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/map/rack-small.png"),x:320,y:78}))};!function(e){e[e.northEast=0]="northEast",e[e.southEast=1]="southEast",e[e.southWest=2]="southWest",e[e.northWest=3]="northWest"}(P||(P={}));var D=i.a.forwardRef((function(e,t){return i.a.createElement(d.Container,Object.assign({},e,{ref:t}),e.orientation===P.northEast&&i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/map/forklift-up.png"),anchor:[.5,0]}),e.orientation===P.southEast&&i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/map/forklift-down.png"),anchor:[.5,0]}),e.orientation===P.southWest&&i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/map/forklift-down.png"),scale:[-1,1],anchor:[.5,0]}),e.orientation===P.northWest&&i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/map/forklift-up.png"),scale:[-1,1],anchor:[.5,0]}))})),J=function(e){var t=Object(r.useRef)(null),n=Object(r.useState)(P.southWest),a=Object(s.a)(n,2),o=a[0],c=a[1],l=Object(r.useState)(1),u=Object(s.a)(l,2),m=u[0],p=u[1];return Object(r.useEffect)((function(){var e=g.a.timeline({repeat:-1,repeatDelay:1});e.to(t.current,{onStart:function(){c(P.southEast),p(1)},ease:W.b.easeNone,pixi:{x:1135,y:148},duration:5}),e.to(t.current,{onStart:function(){c(P.southWest),p(0)},ease:W.b.easeNone,pixi:{x:782,y:330},duration:3.5}),e.to(t.current,{onStart:function(){c(P.northWest),p(3)},ease:W.b.easeNone,pixi:{x:42,y:130},duration:5}),e.to(t.current,{onStart:function(){c(P.northEast),p(0)},ease:W.b.easeNone,pixi:{x:306,y:58},duration:2}),e.to(t.current,{onStart:function(){c(P.southEast),p(2)},ease:W.b.easeNone,pixi:{x:906,y:241},duration:4}),e.to(t.current,{onStart:function(){c(P.southWest),p(0)},ease:W.b.easeNone,pixi:{x:782,y:330},duration:2}),e.to(t.current,{onStart:function(){c(P.northWest),p(3)},ease:W.b.easeNone,pixi:{x:42,y:130},duration:5})}),[]),i.a.createElement(d.Container,e,i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/map/rack-big.png"),x:385,y:-172}),i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/map/rack-big.png"),x:191,y:-84}),i.a.createElement(D,{orientation:o,ref:t,x:484,y:72}),1===m&&i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/map/rack-big.png"),x:385,y:-172}),m>0&&m<3&&i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/map/rack-big.png"),x:191,y:-84}),i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/map/rack-big.png"),y:0,x:0,name:"racks closest"}))};Y.a.registerPIXI(h),g.a.registerPlugin(Y.a);var _=function(e){var t=e.content,n=Object(r.useRef)(null),a=Object(r.useState)(null),o=Object(s.a)(a,2),c=o[0],l=o[1],u=Object(r.useState)([]),m=Object(s.a)(u,2),v=m[0],y=m[1],E=Object(r.useState)(1200),w=Object(s.a)(E,2),x=w[0],k=w[1],O=Object(r.useState)(600),j=Object(s.a)(O,2),S=j[0],N=j[1];Object(r.useEffect)((function(){var e=function(){var e=Math.min(window.innerWidth,window.outerWidth),t=Math.min(window.innerHeight,window.outerHeight);k(e),N(t)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(r.useEffect)((function(){if(n.current){var e=n.current;e.moveCenter(1748.5,709.5),e.scale=new h.Point(.5,.5)}}),[x,S]),Object(r.useEffect)((function(){c?g.a.to(n.current,{duration:.5,pixi:{blur:20}}):g.a.to(n.current,{duration:.5,pixi:{blur:0}})}),[c]),Object(r.useEffect)((function(){f.a.add("plops",{url:"".concat("/conflictresolution","/sound/plops.wav"),autoPlay:!0})}),[]);var C=Object(r.useMemo)((function(){return null===c?null:null===t||void 0===t?void 0:t[c]}),[t,c]),I=function(e,t){var n=.5*t,a=new h.Point(e.position[0],e.position[1]),o=!v.hasOwnProperty(t);return i.a.createElement(b,{position:a,pointerdown:function(){return function(e,t){l(t)}(0,t)},delay:n,bounce:o})};return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.Stage,{width:x,height:S,options:{transparent:!0}},i.a.createElement(F,{screenWidth:x,screenHeight:S,worldWidth:3497,worldHeight:1419,ref:n},i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/map/warehouse-back.png")},i.a.createElement(J,{x:1153,y:207}),i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/map/safe.png"),x:2086,y:296}),i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/map/middle.png"),x:806,y:334}),i.a.createElement(z,{name:"Conveyor",x:269,y:498}),i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/map/packing.png"),x:995,y:848,name:"packing-table"}),i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/map/warehouse-front-wall.png"),y:705,name:"front-wall"}),t.map((function(e,t){return I(e,t)}))))),C&&i.a.createElement(T,{content:C,onClose:function(){l(null)},setCorrectAnswer:function(e){var t=Object(p.a)(v);t[c]=e,y(t)},selectedAnswer:v[c]}))},V=(n(99),n(49)),X=function(e){var t=e.selectedAvatar,n=function(n,a){var o=t===n?[new V.a(3,4171061)]:void 0,r=t===n?.7:.6,c=t===n?2:0;return i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/avatars/").concat(n,".png"),filters:o,anchor:[.5,.5],scale:r,y:275,x:200+200*a,zIndex:c,interactive:!0,pointerdown:function(){return e.onChangeAvatar(n)}})};return i.a.createElement(y.a,{isOpen:!0,ariaHideApp:!1,overlayClassName:"modal-overlay modal-intro-overlay",className:"modal modal-intro",onRequestClose:e.onClose},i.a.createElement("div",null,i.a.createElement("h1",{className:"header"},"Conflict situations"),i.a.createElement("p",null,"You\u2019re a warehouse manager at Express Warehousing Ltd. Choose an avatar."),i.a.createElement("div",{className:"avatar-selection"},i.a.createElement(d.Stage,{width:1e3,height:550,options:{backgroundColor:16777215}},i.a.createElement(d.Sprite,{image:"".concat("/conflictresolution","/images/avatars/background.png"),filters:[new h.filters.BlurFilter(4)],scale:.95,anchor:.5,y:275,x:500}),i.a.createElement(d.Container,{sortableChildren:!0},n("avatar1",0),n("avatar2",1),n("avatar3",2),n("avatar4",3)))),i.a.createElement("p",{className:"footer"},i.a.createElement("button",{onClick:e.onClose},"Start"))))};var Z=function(){var e=Object(r.useState)(!0),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)("avatar1"),c=Object(s.a)(o,2),l=c[0],u=c[1];return i.a.createElement(i.a.Fragment,null,n&&i.a.createElement(X,{selectedAvatar:l,onClose:function(){a(!1)},onChangeAvatar:u}),!n&&i.a.createElement(_,{content:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},45:function(e){e.exports=JSON.parse('[{"position":[822,839],"type":"conflict","header":"The Trouble with Kumar","content":{"situationImage":"images/conflict/kumar-0a.png","sequence":[{"type":"caption","text":"As you\u2019re taking a round in the warehouse in the morning, Dev approaches you with a complaint against his team mate, Kumar"},{"type":"speech","text":"Kumar and I are scheduled for the same warehouse shift.","balloonClass":"balloon-69"},{"type":"speech","text":"He regularly plays games on his cell phone while I pick the orders.","situationImage":"images/conflict/kumar-0b.png"},{"type":"speech","text":"I have to do the bulk of the work while he plays.","situationImage":"images/conflict/kumar-0a.png"},{"type":"speech","text":"I\'ve asked him on four different occasions to help me, but he doesn\'t listen to me."}],"situationBalloonClass":"balloon-44","description":"After establishing the complaint to be true and giving Kumar a warning, what kind of disciplinary action should you take against Kumar if his behaviour persists?","situationSpeech":"Kumar and I are scheduled for the same warehouse shift. Kumar regularly plays games on his cell phone while I take inventory. I have to do the bulk of the work while he plays. I\'ve asked him on four different occasions to help me, but he doesn\'t listen to me.","bannerImg":"images/ui/banner/fire.jpg","options":["Send Kumar a notification of termination as he is hampering warehouse productivity","Reprimand Kumar in the morning meeting so as to discourage others from behaving this way too","Have Kumar report his productivity numbers to you or a team leader at the end of every shift"],"reactions":[{"confirmText":"Are you sure you want to terminate Kumar without giving him a chance to take responsibility?","correct":false,"text":"You picked the wrong choice. You chose to send Kumar a notification of termination without giving him a chance to change his behaviour. In such a situation, you should try to engage the employee in a meaningful conversation about his behaviour and allow him to take responsibility. In his way you will be able to cultivate a more trusting relationship with the employee in which he feels supported. ","situationImage":"images/conflict/kumar-1.png"},{"confirmText":"Are you sure you want to embarrass Kumar like that?","correct":false,"text":"You picked the wrong choice. You chose to reprimand Kumar in front of other employees in a morning meeting. In such a situation you should try to engage the employee in a meaningful private conversation about his behaviour and allow him to take responsibility. Reprimanding an employee publicly will lower the chances of affecting change or building trust in the employees. ","situationImage":"images/conflict/kumar-2.svg"},{"confirmText":"Are you sure you want to give Kumar a second chance?","correct":true,"text":"You picked the right choice. You chose to have Kumar report his productivity numbers to you or a team leader at the end of every shift. In this way you allowed the employee a chance to take responsibility and become more professional. ","situationImage":"images/conflict/kumar-3.svg"}]}}]')},52:function(e,t,n){e.exports=n(100)},57:function(e,t,n){},58:function(e,t,n){},81:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[52,1,2]]]);
//# sourceMappingURL=main.d4a07608.chunk.js.map