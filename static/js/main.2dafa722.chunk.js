(this["webpackJsonpreact-mini-rocket-game"]=this["webpackJsonpreact-mini-rocket-game"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={wrapper:"style_wrapper__3nIS9",avatar:"style_avatar__23FnO",label:"style_label__36Vzg",userName:"style_userName__2Hqz6",endGameButton:"style_endGameButton__x6hVR"}},function(e,t,n){e.exports={wrapper:"style_wrapper__Vwj0A",bg:"style_bg__LscuR",title:"style_title__wc0QF",alien:"style_alien__267fJ",input:"style_input__NDSgW",button:"style_button__3Iiy2"}},function(e,t,n){e.exports={spaceship:"style_spaceship__1ZZLX",rotationLeft:"style_rotationLeft__3gF1i",rotationRight:"style_rotationRight__3VJB8",rotationDown:"style_rotationDown__IVUuP",rotationUp:"style_rotationUp__3iZMw"}},function(e,t,n){e.exports={wrapper:"style_wrapper__2Z6a4",selected:"style_selected__ajW3a",image:"style_image__1Cx1N",even:"style_even__2tlAI",name:"style_name__3bAJA"}},,function(e,t,n){e.exports={wrapper:"style_wrapper__HAptm",list:"style_list__1F3kf",title:"style_title__3F17J"}},function(e,t,n){e.exports={wrapper:"style_wrapper__1ntBE",bg:"style_bg__3LNYS"}},,function(e,t,n){e.exports=n.p+"static/media/alien.98390e3b.png"},,,function(e,t,n){e.exports={alien:"style_alien__1_Rd6"}},function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/rocketone.2a5863b5.png"},function(e,t,n){e.exports=n.p+"static/media/rockettwo.fbb7b056.png"},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(15),r=n.n(i),s=(n(23),n(1)),c=n(2),l=n(4),u=n(3),p=n(5),m=Object(a.createContext)({spaceshipId:null,username:"",screen:"menu",score:0,isGameOver:!1,setSpaceshipId:function(){},setUsername:function(){},setScreenGame:function(){},setScreenMenu:function(){},increaseScore:function(){},decreaseScore:function(){},setGameOver:function(){}}),f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).setUsername=function(e){n.setState({username:e})},n.setSpaceshipId=function(e){n.setState({spaceshipId:e})},n.setScreenGame=function(){n.setState({screen:"game"})},n.setScreenMenu=function(){n.setState({screen:"menu",spaceshipId:null,username:"",score:0})},n.increaseScore=function(){n.setState((function(e){return{score:e.score+1}}))},n.decreaseScore=function(){n.setState((function(e){return{score:e.score-1}}))},n.setGameOver=function(){n.setState({isGameOver:!0})},n.state={spaceshipId:null,username:"",screen:"menu",score:0,setSpaceshipId:n.setSpaceshipId,setUsername:n.setUsername,setScreenGame:n.setScreenGame,setScreenMenu:n.setScreenMenu,increaseScore:n.increaseScore,decreaseScore:n.decreaseScore,setGameOver:n.setGameOver},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(m.Provider,{value:this.state},this.props.children)}}]),t}(a.Component),h=m.Consumer,d=n(7),y=n.n(d),_=n(11),g=n.n(_),v=n(16),b=n(9),k=n.n(b),S=n(10),E=function(e){var t=Object(v.a)({},e);return o.a.createElement(h,null,(function(e){var n=t.id===e.spaceshipId,a=t.index%2===0;return o.a.createElement("div",{onClick:function(){return e.setSpaceshipId(t.id)},className:S(k.a.wrapper,n&&k.a.selected)},o.a.createElement("div",{className:S(k.a.image,a&&k.a.even),style:{backgroundImage:"url(".concat(t.url,")")}}),o.a.createElement("span",{className:k.a.name},t.name))}))},R=[{id:1,url:n(24),name:"Rocket APOLLO"},{id:2,url:n(25),name:"Rocket SATURN"}],w=function(){return o.a.createElement("div",{className:g.a.wrapper},o.a.createElement("span",{className:g.a.title},"Select your spaceship"),o.a.createElement("div",{className:g.a.list},R.map((function(e,t){return o.a.createElement(E,{key:e.id,id:e.id,url:e.url,name:e.name,index:t})}))))},P=function(e){var t=e.appData;return o.a.createElement("div",{className:y.a.wrapper},o.a.createElement("div",{className:y.a.bg}),o.a.createElement("span",{className:y.a.title},"Catch the Alien",o.a.createElement("img",{src:n(14),className:y.a.alien,alt:"Alien"})),o.a.createElement(w,null),o.a.createElement("input",{className:y.a.input,placeholder:"Your nickname",onChange:function(e){return t.setUsername(e.target.value)}}),o.a.createElement("button",{type:"button",className:y.a.button,onClick:function(){null!==t.spaceshipId?0!==t.username.length?t.setScreenGame():alert("Please, insert your nickname!"):alert("Please, select spaceship!")}},"START!"))},O=n(6),N=n.n(O),A=function(e){var t=e.username,n=e.spaceshipId,a=e.onEndGame,i=e.score;return o.a.createElement("div",{className:N.a.wrapper},o.a.createElement("div",{className:N.a.avatar}),o.a.createElement("span",{className:N.a.label},"COSMONAUT:",o.a.createElement("span",{className:N.a.userName},t)),o.a.createElement("span",{className:N.a.label},"SPACESHIP:",o.a.createElement("span",{className:N.a.userName},R.find((function(e){return e.id===n})).name)),o.a.createElement("span",{className:N.a.label},"SCORE:",o.a.createElement("span",{className:N.a.userName},i)),o.a.createElement("button",{type:"button",className:N.a.endGameButton,onClick:a},"END GAME!"))},G=n(12),I=n.n(G),j={ARROW_DOWN:40,ARROW_UP:38,ARROW_LEFT:37,ARROW_RIGHT:39,ESCAPE:27,ENTER:13,SPACE:32},D=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleKeyDown=function(e){var t=e.keyCode;Object.values(j).includes(t)&&n.props.onKeyDown(t)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return this.props.children}}]),t}(a.Component),L=n(8),C=n.n(L),x=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).spaceShipRef=null,n.rotation="top",n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"goUp",value:function(){this.rotation="top"}},{key:"goDown",value:function(){this.rotation="down"}},{key:"goLeft",value:function(){this.rotation="left"}},{key:"goRight",value:function(){this.rotation="right"}},{key:"getRotationStyle",value:function(){switch(this.rotation){case"top":return C.a.rotationTop;case"down":return C.a.rotationDown;case"left":return C.a.rotationLeft;case"right":return C.a.rotationRight;default:return C.a.rotationTop}}},{key:"render",value:function(){var e=this,t=this.props,n=t.rocketUrl,a=t.bottomPosition,i=t.leftPosition;return o.a.createElement("div",{ref:function(t){return e.spaceShipRef=t},className:S(C.a.spaceship,this.getRotationStyle()),style:{backgroundImage:"url(".concat(n,")"),bottom:a,left:i}})}}]),t}(a.Component),W=n(17),U=n.n(W),B=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.bottomPosition,a=e.leftPosition;return o.a.createElement("div",{className:U.a.alien,style:{backgroundImage:"url(".concat(n(14),")"),bottom:t,left:a}})}}]),t}(a.Component),T=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).spaceShipRef=null,n.playGroundRef=null,n.playgroundWidth=0,n.playgroundHeight=0,n.state={rocketBottomPosition:0,rocketLeftPosition:0,leftAlienPosition:150,bottomAlienPosition:150},n.alienTimeout=null,n.setColision=function(){clearTimeout(n.alienTimeout),n.setAlienPosition(-500,-500),n.props.increaseScore(),n.alienTimeout=setTimeout((function(){n.setAlienPosition(n.playGroundRef.offsetWidth,n.playGroundRef.offsetHeight)}),1e3)},n.setAlienPosition=function(e,t){n.setState({leftAlienPosition:n.getRandomInt(e-100),bottomAlienPosition:n.getRandomInt(t-100)})},n.handleKeyDown=function(e){switch(e){case j.ARROW_UP:n.handleGoUp();break;case j.ARROW_DOWN:n.handleGoDown();break;case j.ARROW_LEFT:n.handleGoLeft();break;case j.ARROW_RIGHT:n.handleGoRight()}},n.handleGoUp=function(){n.spaceShipRef.goUp(),n.setState((function(e){if(!(e.rocketBottomPosition+180>n.playgroundHeight))return{rocketBottomPosition:e.rocketBottomPosition+15}}))},n.handleGoDown=function(){n.spaceShipRef.goDown(),n.setState((function(e){if(!(e.rocketBottomPosition<=0))return{rocketBottomPosition:e.rocketBottomPosition-15}}))},n.handleGoLeft=function(){n.spaceShipRef.goLeft(),n.setState((function(e){if(!(e.rocketLeftPosition<=20))return{rocketLeftPosition:e.rocketLeftPosition-15}}))},n.handleGoRight=function(){n.spaceShipRef.goRight(),n.setState((function(e){if(!(e.rocketLeftPosition+160>n.playgroundWidth))return{rocketLeftPosition:e.rocketLeftPosition+15}}))},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){null!==this.playGroundRef&&(this.playgroundWidth=this.playGroundRef.offsetWidth,this.playgroundHeight=this.playGroundRef.offsetHeight,this.setState({rocketBottomPosition:10,rocketLeftPosition:this.playgroundWidth/2-45}),this.setAlienPosition(this.playGroundRef.offsetWidth,this.playGroundRef.offsetHeight))}},{key:"componentDidUpdate",value:function(e,t){this.isColision()}},{key:"getRandomInt",value:function(e){return Math.floor(Math.random()*Math.floor(e))}},{key:"isColision",value:function(){var e=this.state,t={x:e.rocketLeftPosition,y:e.rocketBottomPosition,width:90,height:175},n={x:e.leftAlienPosition,y:e.bottomAlienPosition,width:100,height:100};this.isCollide(t,n)&&this.setColision()}},{key:"isCollide",value:function(e,t){return!(e.y+e.height<t.y||e.y>t.y+t.height||e.x+e.width<t.x||e.x>t.x+t.width)}},{key:"render",value:function(){var e=this,t=this.props.spaceshipId,n=this.state,a=n.rocketLeftPosition,i=n.rocketBottomPosition,r=n.leftAlienPosition,s=n.bottomAlienPosition;return o.a.createElement(D,{onKeyDown:this.handleKeyDown},o.a.createElement("div",{className:I.a.wrapper,ref:function(t){return e.playGroundRef=t}},o.a.createElement("div",{className:I.a.bg}),o.a.createElement(B,{leftPosition:r,bottomPosition:s}),o.a.createElement(x,{ref:function(t){return e.spaceShipRef=t},bottomPosition:i,leftPosition:a,rocketUrl:R.find((function(e){return e.id===t})).url})))}}]),t}(a.Component),M=function(e){var t=e.appData;return o.a.createElement("div",{style:{height:"100%"}},o.a.createElement(A,{username:t.username,spaceshipId:t.spaceshipId,onEndGame:function(){return t.setScreenMenu()},score:t.score}),o.a.createElement(T,{spaceshipId:t.spaceshipId,increaseScore:function(){return t.increaseScore()}}))},H=function(e){var t=e.appData;return"game"===t.screen?o.a.createElement(M,{appData:t}):o.a.createElement(P,{appData:t})},F=function(){return o.a.createElement("div",{className:"container"},o.a.createElement(h,null,(function(e){return o.a.createElement(H,{appData:e})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement((function(){return o.a.createElement(f,null,o.a.createElement(F,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[18,1,2]]]);
//# sourceMappingURL=main.2dafa722.chunk.js.map