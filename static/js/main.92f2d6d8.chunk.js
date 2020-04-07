(this.webpackJsonpnumerals=this.webpackJsonpnumerals||[]).push([[0],{121:function(e,a,t){e.exports=t(145)},126:function(e,a,t){},145:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(10),l=t.n(i),o=(t(126),t(79),t(29)),c=t(28),u=t(193),s=t(49),m=t(37),d=t(8),g=t(181),h=t(183),p=t(184),b=t(64),f=t(186),v=t(185),E=t(57),y=t.n(E),x=t(178),k=t(146),w=t(179),I=t(182),O=t(205),j=t(180),C=t(87),S=t.n(C),B=t(88),N=t.n(B),D=t(39),T=t.n(D),A=t(62),M=t.n(A),H=t(12),R=t(14),W=function(){function e(){Object(H.a)(this,e)}return Object(R.a)(e,[{key:"getValue",value:function(){return"I"}},{key:"getIndex",value:function(){return 1}}]),e}(),L=function(){function e(){Object(H.a)(this,e)}return Object(R.a)(e,[{key:"getValue",value:function(){return"II"}},{key:"getIndex",value:function(){return 2}}]),e}(),U=function(){function e(){Object(H.a)(this,e)}return Object(R.a)(e,[{key:"getValue",value:function(){return"III"}},{key:"getIndex",value:function(){return 3}}]),e}(),G=function(){function e(){Object(H.a)(this,e)}return Object(R.a)(e,[{key:"getValue",value:function(){return"IV"}},{key:"getIndex",value:function(){return 4}}]),e}(),V=function(){function e(){Object(H.a)(this,e)}return Object(R.a)(e,[{key:"getValue",value:function(){return"V"}},{key:"getIndex",value:function(){return 5}}]),e}(),z=function(){function e(){Object(H.a)(this,e),this.key=0,this.label="3 Chord",this.description="Poppy or sad; Simple 3 chord progression can do it all"}return Object(R.a)(e,[{key:"getBars",value:function(e){var a=e.makeNumeral(1),t=e.makeNumeral(Math.floor(5*Math.random())),n=e.makeNumeral(Math.floor(5*Math.random())),r=e.makeBar();r.beats[0].numeral=a,r.beats[1].numeral=t,r.beats[2].numeral=n,r.beats[3].numeral=a;var i=e.makeBar();return i.beats[0].numeral=n,i.beats[1].numeral=a,i.beats[2].numeral=t,i.beats[3].numeral=a,[r,i,r,i]}}]),e}(),P={numeral:void 0},_={numeral:new W},K={numeral:new L},Y=(new U,{numeral:new G}),F=(new V,{uuid:"1fe35579-5ce7-46ec-89e0-7e7236700297",lyrics:"All my Exes live in texas",beats:[_,Y,P,P]}),J={uuid:"1fe35579-5ce7-46ec-89e0-7e7236700294",lyrics:"Blowing in the weind",beats:[P,Y,P,K]},$={uuid:"1fe35579-5ce7-46ec-89e0-7e7236700297",label:"Verse",bars:[F,F,J]},Z={uuid:"1fe35579-5ce7-46ec-89e0-7e7236700297",label:"Chorus",bars:[F,F,J]},X={uuid:"1fe35579-5ce7-46ec-89e0-7e7236700297",label:"Bridge",bars:[F,F,J]},q={bpm:4,key:1},Q={uuid:"1fe35579-5ce7-46ec-89e0-7e7236704294",title:"Free Bird",bars:[F,F,J],arrangements:[$,Z,X],config:q},ee=[Q,{uuid:"1fe35539-5ce7-46ec-89e0-7e7236700294",title:"Love is a battlefield",bars:[F,J,F],arrangements:[$,Z,X],config:q},{uuid:"1fe35539-5ce7-46ec-89e0-7e7236720294",title:"Home on the range",bars:[F,J,J],arrangements:[$,Z,X],config:q}],ae=t(82),te=t.n(ae),ne=t(83),re=t.n(ne),ie=t(84),le=t.n(ie),oe=t(85),ce=t.n(oe),ue=[{key:1,label:"I",value:new W},{key:2,label:"II",value:new L},{key:3,label:"III",value:new U},{key:4,label:"IV",value:new G},{key:5,label:"V",value:new V}],se=[{key:1,label:"C"},{key:2,label:"D"},{key:3,label:"E"},{key:4,label:"F#"},{key:5,label:"G"},{key:6,label:"A"},{key:7,label:"B"}],me=[{key:1,label:"Bar",icon:r.a.createElement(y.a,null)},{key:2,label:"Add Chords",icon:r.a.createElement(M.a,null)},{key:3,label:"Add Lyric",icon:r.a.createElement(te.a,null)},{key:1,label:"Add Strum",icon:r.a.createElement(re.a,null)},{key:2,label:"Add Drum",icon:r.a.createElement(le.a,null)},{key:3,label:"Add Sound",icon:r.a.createElement(ce.a,null)}],de=[{key:2,label:"2"},{key:4,label:"4"}],ge=[new z],he=function(){function e(a){Object(H.a)(this,e),this.config=void 0,this.config=a}return Object(R.a)(e,[{key:"makeArrangement",value:function(e){return{uuid:"1fe35579-5ce7-46ec-89e0-7e7236700297",label:e,bars:[F]}}},{key:"makeBar",value:function(){for(var e={uuid:this.makeUUID(),lyrics:"",beats:[]},a=0;a<this.config.bpm;a++){var t={numeral:void 0};e.beats.push(t)}return e}},{key:"makeBeat",value:function(){return{numeral:this.makeNumeral(2)}}},{key:"makeSong",value:function(e){var a={uuid:this.makeUUID(),title:"Give me a title",bars:[],arrangements:[],config:this.config};if(e){var t=ge.find((function(a){return a.label===e}));t&&(a.bars=t.getBars(this))}return a}},{key:"makeNumeral",value:function(e){return[void 0,new W,new L,new U,new G,new V][Math.ceil(e)]}},{key:"makeUUID",value:function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(a){var t=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===a?t:3&t|8).toString(16)}))}}],[{key:"makeHistory",value:function(e,a){return{songState:e,handler:a}}}]),e}(),pe=function(){function e(){Object(H.a)(this,e)}return Object(R.a)(e,null,[{key:"getSong",value:function(e){return e?(console.log(e),ee[e]):(console.log(e),Q)}},{key:"getSongs",value:function(){return ee}},{key:"getHistory",value:function(e){if(e){var a="numeral-app-song-"+e+"-history",t=localStorage.getItem(a),n=t||"[]";return JSON.parse(n)}return[]}},{key:"setHistory",value:function(a,t){var n=e.getHistory(a.uuid),r=he.makeHistory(a,t);n.push(r);var i="numeral-app-song-"+a.uuid+"-history";return localStorage.setItem(i,JSON.stringify(n)),e.getHistory(a.uuid)}}]),e}(),be=function(e){var a=pe.getSongs();return r.a.createElement(x.a,{component:"nav","aria-label":"main mailbox folders"},a.map((function(e,a){return r.a.createElement(k.a,{button:!0,key:e.uuid,component:o.b,to:"/song/"+a},r.a.createElement(w.a,null,r.a.createElement(M.a,null)),r.a.createElement(j.a,{primary:e.title}))})))},fe=Object(g.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:250},fullList:{width:"auto"}}}));var ve=function(){var e,a=fe(),t=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),n=Object(d.a)(t,2),i=n[0],l=n[1],c=function(e,a){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&l(Object(m.a)({},i,Object(s.a)({},e,a)))}};return r.a.createElement(h.a,{position:"static"},r.a.createElement(O.a,{open:i.left,onClose:c("left",!1)},(e="left",r.a.createElement("div",{className:a.list,role:"presentation",onClick:c(e,!1),onKeyDown:c(e,!1)},r.a.createElement(x.a,null,r.a.createElement(k.a,{button:!0,key:"home",component:o.b,to:"/"},r.a.createElement(w.a,null,r.a.createElement(S.a,null)),r.a.createElement(j.a,{primary:"Home"})),r.a.createElement(k.a,{button:!0,key:"songs",component:o.b,to:"/songs"},r.a.createElement(w.a,null,r.a.createElement(N.a,null)),r.a.createElement(j.a,{primary:"Songs"})),r.a.createElement(k.a,{button:!0,key:"create-song",color:"secondary",component:o.b,to:"/new/empty"},r.a.createElement(w.a,{color:"secondary"},r.a.createElement(T.a,null)),r.a.createElement(j.a,{primary:"New Song"}))),r.a.createElement(I.a,null),r.a.createElement("h3",null,"Songs "),r.a.createElement(be,null)))),r.a.createElement(p.a,null,r.a.createElement(v.a,{onClick:c("left",!0),edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(y.a,null)),r.a.createElement(b.a,{variant:"h6",className:a.title},"Numerals"),r.a.createElement(f.a,{color:"inherit"},"Login")))};var Ee=function(){return r.a.createElement("nav",null)};var ye=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Page not found!"))},xe=t(207),ke=t(194),we=t(195),Ie=t(196),Oe=t(211),je=t(191),Ce=t(204),Se=function(){function e(){Object(H.a)(this,e),this.title="Changed Numeral",this.description="Numeral Description",this.beatIndex=void 0,this.barIndex=void 0,this.numeral=void 0}return Object(R.a)(e,[{key:"getDescription",value:function(){return"Changed Numeral @beat-"+this.beatIndex+"-bar-"+this.barIndex}},{key:"handle",value:function(e){console.log("Numeral changed",e,this.beatIndex,this.barIndex,this.numeral),e.bars[this.barIndex].beats[this.beatIndex].numeral=this.numeral,this.description=this.getDescription()}}]),e}();Se.KEY="NUMERAL_CHANGE";var Be=function(){function e(){Object(H.a)(this,e),this.title="Changed Lryic",this.description="Lyric Description",this.barIndex=void 0,this.lyric=void 0}return Object(R.a)(e,[{key:"getDescription",value:function(){return"Alterd lyrics '"+this.lyric+"' @"+this.barIndex}},{key:"handle",value:function(e){console.log("Lyric changed...",e,this.barIndex,this.lyric),e.bars[this.barIndex].lyrics=this.lyric,this.description=this.getDescription()}}]),e}();Be.KEY="LYRIC_CHANGE";var Ne=function(){function e(){Object(H.a)(this,e),this.title="Removed Bar",this.description="Removed a bar",this.barIndex=void 0}return Object(R.a)(e,[{key:"getDescription",value:function(){return"Removed bar @"+this.barIndex}},{key:"handle",value:function(e){console.log(e.bars,this.barIndex);var a=e.bars,t=this,n=a.filter((function(e,a,n){return a!==t.barIndex}));e.bars=n,this.description=this.getDescription()}}]),e}();Ne.KEY="BAR_REMOVE";var De=function(){function e(){Object(H.a)(this,e),this.title="Added Bar",this.description="Added a bar",this.barNum=void 0,this.label=""}return Object(R.a)(e,[{key:"getDescription",value:function(){return"Add ("+this.barNum+") Bars!"}},{key:"handle",value:function(e){console.log("Adding Bar...",e,this.barNum);var a=new he(e.config);e.arrangements.push(a.makeArrangement(this.label)),this.description=this.getDescription()}}]),e}();De.KEY="BAR_ADD";var Te=function(){function e(){Object(H.a)(this,e),this.title="Bar Moved",this.description="Moved a Bar",this.up=void 0,this.barIndex=void 0,this.allTheWay=void 0}return Object(R.a)(e,[{key:"getDescription",value:function(){return"Moved a bar: Up| "+this.up+", @index| "+this.barIndex+" @allTheWay|"+this.allTheWay}},{key:"handle",value:function(e){console.log("Moving Bar...",e,this.up,this.barIndex);var a=this.barIndex,t=e.bars.length;this.up&&0!==a?a=this.allTheWay?0:a-1:a<t&&(a=this.allTheWay?t-1:a+1),console.log(e.bars);var n=e.bars[a];e.bars[a]=e.bars[this.barIndex],e.bars[this.barIndex]=n,console.log(e.bars),this.description=this.getDescription()}}]),e}();Te.KEY="BAR_MOVE";var Ae=function(){function e(){Object(H.a)(this,e),this.title="Duplicated Bar",this.description="Duplicated a bar",this.barIndex=void 0}return Object(R.a)(e,[{key:"getDescription",value:function(){return"Duplicated Bar at index of "+this.barIndex}},{key:"handle",value:function(e){console.log("Duplicating Bar... ()",e,this.barIndex);var a=new he(e.config),t=Object(m.a)({},e.bars[this.barIndex]);t.uuid=a.makeUUID(),e.bars.push(t),this.description=this.getDescription()}}]),e}();Ae.KEY="BAR_DUPLICATED";var Me=function(){function e(){Object(H.a)(this,e),this.title="Changed Config",this.description="The Config changed",this.config=void 0}return Object(R.a)(e,[{key:"getTitle",value:function(){return"Changed Config"}},{key:"getDescription",value:function(){return"Changed Config to: Key|"+this.config.key+", BPM|"+this.config.bpm}},{key:"handle",value:function(e){console.log("Setting Config...",e,this.config),e.config=this.config,this.description=this.getDescription()}}]),e}();Me.KEY="CONFIG_CHANGED";var He=function(){function e(){Object(H.a)(this,e),this.title="Updated the Title",this.description="Updated the Song's title",this.updateTitle=void 0}return Object(R.a)(e,[{key:"getTitle",value:function(){return"Changed Song Title"}},{key:"getDescription",value:function(){return"Changed title to: "+this.updateTitle}},{key:"handle",value:function(e){console.log("Updating title...",this.updateTitle),e.title=this.updateTitle,this.description=this.getDescription()}}]),e}();He.KEY="TITLE_UPDATED";var Re=function(){function e(){Object(H.a)(this,e),this.title="Added Beat",this.description="Added a Song Beat",this.barIndex=void 0}return Object(R.a)(e,[{key:"getDescription",value:function(){return"Added a beat at "+this.barIndex}},{key:"handle",value:function(e){console.log("Adding beat...",this.barIndex);var a=new he(e.config);e.bars[this.barIndex].beats.push(a.makeBeat()),this.description=this.getDescription()}}]),e}();Re.KEY="BEAT_ADDED";var We=t(187),Le=t(209),Ue=Object(g.a)((function(e){return Object(xe.a)({margin:{margin:e.spacing(1)}})})),Ge=function(e){var a=e.numeral,t=e.beatIndex,n=e.barIndex,i=e.numeralHandler,l=e.config,o=Ue(),c=ue,u=r.a.useState(a?a.getIndex():""),s=Object(d.a)(u,2),m=s[0],g=s[1];return r.a.createElement("div",null,r.a.createElement(We.a,{className:o.margin},r.a.createElement(Le.a,{id:"demo-simple-select-helper-label"},function(e,a){var t=!!e&&e.getIndex();if(!t)return"";var n=((t-=1)+(a-1))%se.length;return r.a.createElement("div",null,se[n].label)}(a,l.key)),r.a.createElement(Ce.a,{value:m,onChange:function(e){g(e.target.value);var a=new Se;a.barIndex=n,a.beatIndex=t,a.numeral=ue[e.target.value].value,i(a)}},r.a.createElement(je.a,{key:"no-thing-selected",value:""},r.a.createElement("em",null,"-")),c.map((function(e){return r.a.createElement(je.a,{key:e.label,value:e.key},e.label)})))))},Ve=t(4),ze=t(192),Pe=t(201),_e=function(){function e(){Object(H.a)(this,e)}return Object(R.a)(e,null,[{key:"print",value:function(e){var a=!!e&&e.getIndex();if(!a)return"";var t=((a-=1)+0)%se.length;return se[t].label}}]),e}(),Ke=t(89),Ye=t.n(Ke),Fe=t(147),Je=Object(Fe.a)((function(e){return{ruleLine:function(a){return{height:e.spacing(12),width:"0px",backgroundColor:"none",borderRight:"dashed thin lightgray",left:a.xCoord}},root:{transform:"translateZ(0px)",flexGrow:1,textAlign:"center"},wrapper:{height:0,width:0},ruleDot:{height:25,width:25,position:"relative",left:0,bottom:0,backgroundColor:"lightgray",borderRadius:"25px",cursor:"pointer"}}})),$e=function(e){var a=Je(e);return r.a.createElement(Pe.a,{className:a.wrapper},e.xCoord>0&&r.a.createElement(Pe.a,{style:{position:"absolute"},className:a.ruleLine},r.a.createElement(v.a,{onClick:e.thumbClick,style:{marginLeft:"-25%"},color:"primary","aria-label":"add to shopping cart"},r.a.createElement(T.a,null))))},Ze=Object(g.a)((function(e){return Object(xe.a)({wrapper:{paddingTop:e.spacing(0),paddingBottom:e.spacing(),width:"100%"},root:{height:e.spacing(2.5),width:"100%",margin:e.spacing(1)},rulerRoot:{backgroundColor:e.palette.grey[400],paddingTop:e.spacing(1.5),paddingBottom:e.spacing(1.5),width:"100%",margin:e.spacing(0),cursor:"pointer"},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus,&:hover,&$active":{boxShadow:"inherit"}},shape:{width:20,height:20,fontSize:"20px"},badge:{marginTop:e.spacing(1)},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:3,borderRadius:4},rail:{height:8,borderRadius:4}})})),Xe=Object(Ve.a)((function(e){return Object(xe.a)({badge:{background:"none",border:"solid thin",padding:"1px",fontSize:"8px"}})}))(ze.a),qe=function(e){var a=e.songBar,t=e.barIndex,n=e.numeralHandler,i=Ze(),l=r.a.useState(0),o=Object(d.a)(l,2),c=o[0],u=o[1];function s(e,a){var n;return r.a.createElement(Ye.a,{key:"draggable-bar-index-"+t+"-beat-"+a,axis:"x",handle:".handle",defaultPosition:{x:0,y:0},position:void 0,grid:[50,50],scale:1},r.a.createElement(Xe,{color:"secondary",overlap:"circle",className:i.badge,key:"numeral-"+t+"-bar-"+a,badgeContent:null===(n=e.numeral)||void 0===n?void 0:n.getValue()},r.a.createElement("div",{className:i.shape},_e.print(e.numeral))))}for(var m=[],g=0;g<a.beats.length;g++)m.push(s(a.beats[g],g));return r.a.createElement(Pe.a,{className:i.wrapper,onMouseLeave:function(e){u(0)}},r.a.createElement($e,{xCoord:c,thumbClick:function(e){var a=new Re;a.barIndex=t,n(a)}}),r.a.createElement(Pe.a,{onClick:function(e){u(e.clientX)},className:i.rulerRoot}),r.a.createElement(Pe.a,{className:i.root},m))},Qe=t(102),ea=t(92),aa=t.n(ea),ta=function(e){var a=e.barIndex,t=e.configHandler,n=r.a.useState(null),i=Object(d.a)(n,2),l=i[0],o=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},color:"secondary","aria-label":"add an alarm"},r.a.createElement(aa.a,{fontSize:"large"})),r.a.createElement(Qe.a,{id:"simple-menu",anchorEl:l,keepMounted:!0,open:Boolean(l)},r.a.createElement(je.a,{onClick:function(){o(null);var e=new Ne;e.barIndex=a,t(e)}},"Delete"),r.a.createElement(je.a,{onClick:function(){o(null);var e=new Ae;e.barIndex=a,t(e)}},"Duplicate"),r.a.createElement(je.a,{onClick:function(){o(null);var e=new Te;e.up=!0,e.barIndex=a,t(e)}},"Move Up"),r.a.createElement(je.a,{onClick:function(){o(null);var e=new Te;e.up=!1,e.barIndex=a,t(e)}},"Move Down"),r.a.createElement(je.a,{onClick:function(){o(null);var e=new Te;e.up=!0,e.allTheWay=!0,e.barIndex=a,t(e)}},"Move To Top"),r.a.createElement(je.a,{onClick:function(){o(null);var e=new Te;e.up=!1,e.allTheWay=!0,e.barIndex=a,t(e)}},"Move To Bottom")))},na=t(93),ra=t.n(na),ia=Object(g.a)((function(e){return Object(xe.a)({barBox:{boxShadow:"none",padding:e.spacing(0),marginBottom:e.spacing(1),width:"100%"}})})),la=function(e){var a=e.bar,t=e.songHandler,n=e.barIndex,i=e.config,l=ia(),o=r.a.useState(!1),c=Object(d.a)(o,2),s=c[0],m=c[1],g=r.a.useState(""),h=Object(d.a)(g,2),p=h[0],b=h[1],f=r.a.useState(!1),v=Object(d.a)(f,2),E=v[0],y=v[1];function x(e,a,n){return r.a.createElement(u.a,{key:"griditem-"+a+"-"+n,item:!0,xs:3},r.a.createElement(Ge,{key:"select-"+a+"-"+n,config:i,numeralHandler:t,numeral:e.numeral?e.numeral:void 0,barIndex:a,beatIndex:n}))}for(var k=[],w=0;w<i.bpm;w++)k.push(x(a.beats[w],n,w));return r.a.createElement(u.a,{className:l.barBox,container:!0,spacing:0,alignItems:"center"},r.a.createElement(u.a,{item:!0,xs:1},r.a.createElement(ra.a,{fontSize:"small",color:"disabled"})),r.a.createElement(u.a,{item:!0,xs:10},r.a.createElement(u.a,{container:!0,spacing:0},r.a.createElement(qe,{barIndex:n,songBar:a,numeralHandler:t})),r.a.createElement(u.a,{container:!0,spacing:0,alignItems:"center"},r.a.createElement(Oe.a,{key:"numeral-bar-id-"+n,fullWidth:!0,variant:"standard",defaultValue:a.lyrics?a.lyrics:"",onChange:function(e){y(!0),b(e.target.value)},onMouseLeave:function(e){if(E){var a=new Be;a.lyric=p,a.barIndex=n,t(a),m(!s),y(!1)}}}))),r.a.createElement(u.a,{item:!0,xs:1},r.a.createElement(ta,{configHandler:t,barIndex:n})),r.a.createElement(I.a,{variant:"middle"}))},oa=Object(g.a)((function(e){return Object(xe.a)({root:{width:"100%"}})})),ca=function(e){var a=e.arrangementIndex,t=e.configHandler,n=oa(),i=r.a.useState(null),l=Object(d.a)(i,2),o=l[0],c=l[1];return r.a.createElement("div",{className:n.root},r.a.createElement(f.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)}},"Edit"),r.a.createElement(Qe.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){c(null)}},r.a.createElement(je.a,{onClick:function(){c(null);var e=new Ae;e.barIndex=a,t(e)}},"Duplicate"),r.a.createElement(je.a,{onClick:function(){c(null);var e=new Ne;e.barIndex=a,t(e)}},"Delete"),r.a.createElement(je.a,null,"Lock/Unlock"),r.a.createElement(je.a,null,"Inspiration"),r.a.createElement(je.a,{onClick:function(){c(null);var e=new Te;e.up=!0,e.barIndex=a,t(e)}},"Move Up"),r.a.createElement(je.a,{onClick:function(){c(null);var e=new Te;e.up=!1,e.barIndex=a,t(e)}},"Move Down"),r.a.createElement(je.a,{onClick:function(){c(null);var e=new Te;e.up=!0,e.allTheWay=!0,e.barIndex=a,t(e)}},"Move To Top"),r.a.createElement(je.a,{onClick:function(){c(null);var e=new Te;e.up=!1,e.allTheWay=!0,e.barIndex=a,t(e)}},"Move To Bottom")))},ua=Object(g.a)((function(e){return Object(xe.a)({root:{minWidth:275,width:"100%",overflow:"visible"},title:{fontSize:14}})})),sa=function(e){var a=e.arrangement,t=e.songHandler,n=e.arrangementIndex,i=e.config,l=ua();for(var o,c,u=[],s=0;s<a.bars.length;s+=1)u.push((o=a.bars[s],c=s,r.a.createElement(la,{key:"song-bar-"+c+o.uuid,config:i,bar:o,barIndex:c,songHandler:t})));return r.a.createElement(ke.a,{variant:"outlined",className:l.root},r.a.createElement(we.a,null,r.a.createElement(b.a,{className:l.title,color:"textSecondary"},a.label),u),r.a.createElement(Ie.a,{disableSpacing:!0},r.a.createElement(ca,{arrangementIndex:n,configHandler:t})))},ma={width:"100%",height:"100%",display:"flex",flexWrap:"wrap"},da=function(e){var a=e.song,t=e.songChangeHandler,n=r.a.useState(a),i=Object(d.a)(n,2),l=i[0],o=i[1];r.a.useEffect((function(){o(a)}),[a]);for(var c,u,s=[],m=0;m<l.arrangements.length;m+=1)s.push((c=l.arrangements[m],u=m,r.a.createElement(sa,{key:"song-arrangement-"+u,config:a.config,arrangement:c,arrangementIndex:u,songHandler:t})));return r.a.createElement("div",{style:ma},s)},ga=Object(Ve.a)({root:{border:"none",marginTop:"8px",marginBottom:"8px",width:"100%",maxWidth:"100%","& input":{padding:"8.5px 14px;",fontSize:"36px",border:"none"},"& .MuiInput-underline:before":{padding:"8.5px 14px;",fontSize:"36px",border:"none"}}})(Oe.a),ha=function(e){var a=e.title,t=e.titleHandler,n=r.a.useState(!1),i=Object(d.a)(n,2),l=i[0],o=i[1],c=r.a.useState(""),u=Object(d.a)(c,2),s=u[0],m=u[1],g=r.a.useState(!1),h=Object(d.a)(g,2),p=h[0],b=h[1];return r.a.createElement(ga,{key:"song-title",placeholder:"Untitled song",inputProps:{"aria-label":"Create a song name"},onChangeCapture:function(e){var a;(a=e.target.value).length>0&&a.length<64&&(m(e.target.value),b(!0))},onMouseLeave:function(){if(p){var e=new He;e.title=s,t(e),o(!l),b(!1)}},defaultValue:a})},pa=Object(g.a)((function(e){return{formControl:{margin:e.spacing(1)},selectEmpty:{marginTop:e.spacing(2)}}})),ba=function(e){var a=e.songConfig,t=e.songConfigHandler,n=pa(),i=r.a.useState(1),l=Object(d.a)(i,2),o=l[0],c=l[1],u=r.a.useState(2),s=Object(d.a)(u,2),m=s[0],g=s[1];return r.a.createElement("div",null,r.a.createElement(We.a,{variant:"outlined",className:n.formControl},r.a.createElement(Oe.a,{key:"song-config-key",id:"song-config-key",select:!0,placeholder:"Key",value:o,onChange:function(e){c(e.target.value),a.key=e.target.value;var n=new Me;n.config=a,t(n)}},se.map((function(e,a){return r.a.createElement(je.a,{key:e.key,value:e.key},e.label)})))),r.a.createElement(We.a,{variant:"outlined",className:n.formControl},r.a.createElement(Oe.a,{id:"song-config-bpm",select:!0,placeholder:"BPM",value:m,onChange:function(e){g(e.target.value),a.bpm=e.target.value;var n=new Me;n.config=a,t(n)}},de.map((function(e,a){return r.a.createElement(je.a,{key:e.key,value:e.key},e.label)})))))},fa=t(104),va=t(99),Ea=t.n(va),ya=t(97),xa=t.n(ya),ka=t(98),wa=t.n(ka),Ia=t(206),Oa=t(96),ja=t.n(Oa),Ca=t(95),Sa=t.n(Ca),Ba=t(94),Na=t.n(Ba),Da=Object(g.a)((function(e){return{root:{transform:"translateZ(0px)",flexGrow:1,textAlign:"center"},exampleWrapper:{position:"relative",marginTop:e.spacing(-1.5),height:79}}})),Ta=[{icon:r.a.createElement(Na.a,null),name:"Verse",value:0},{icon:r.a.createElement(Sa.a,null),name:"Chourus",value:1},{icon:r.a.createElement(ja.a,null),name:"Bridge",value:2}],Aa=function(e){var a=e.eventHandler,t=Da(),n=r.a.useState(!1),i=Object(d.a)(n,2),l=i[0],o=i[1],c=r.a.useState(null),u=Object(d.a)(c,2),s=u[0],m=u[1],g=function(){m(null),o(!1)};return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.exampleWrapper},r.a.createElement(f.a,{variant:"contained",color:"secondary",onClick:function(e){m(e.currentTarget),o(!0)}},r.a.createElement(T.a,null)),r.a.createElement(Qe.a,{id:"simple-menu",keepMounted:!0,open:l,anchorEl:s,onClose:g},Ta.map((function(e){return r.a.createElement(je.a,{key:e.name,onClick:function(t){!function(e,t){g();var n=new De;n.barNum=e,n.label=Ta[e].name,a(n)}(e.value)}},r.a.createElement(w.a,null,e.icon),r.a.createElement(b.a,{variant:"inherit"},e.name))})))))},Ma=t(210);function Ha(){var e,a=r.a.useState({checkedA:!0,checkedB:!0}),t=Object(d.a)(a,2),n=t[0],i=t[1];return r.a.createElement("div",null,r.a.createElement(Ma.a,{checked:n.checkedA,onChange:(e="checkedA",function(a){i(Object(m.a)({},n,Object(s.a)({},e,a.target.checked)))}),value:"checkedA",inputProps:{"aria-label":"secondary checkbox"}}))}var Ra=Object(g.a)((function(e){return Object(xe.a)({toolBar:{boxShadow:"none",borderBottom:"solid thin "+e.palette.primary.main},smallToolbarItem:{marginRight:e.spacing(1),fontSize:"large"}})})),Wa=function(e){var a=e.song,t=Ra(),n=r.a.useState(a),i=Object(d.a)(n,2),l=i[0],o=i[1],c=r.a.useState(!1),u=Object(d.a)(c,2),s=u[0],g=u[1],b=r.a.useState(""),E=Object(d.a)(b,2),y=E[0],x=E[1];r.a.useEffect((function(){localStorage.setItem("song",JSON.stringify(l))}),[l]);var k=function(e){console.log("Song Change Fired",e.title,e.description),e.handle(l),o(Object(m.a)({},l)),x(e.title),g(!0)},w=function(e,a){"clickaway"!==a&&g(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{className:t.toolBar,position:"sticky",color:"inherit"},r.a.createElement(p.a,{disableGutters:!0,variant:"dense"},r.a.createElement("div",null,r.a.createElement(v.a,{className:t.smallToolbarItem},r.a.createElement(xa.a,{fontSize:"small"})),r.a.createElement(v.a,{className:t.smallToolbarItem},r.a.createElement(wa.a,{fontSize:"small"}))),r.a.createElement(I.a,{orientation:"vertical"}),r.a.createElement(ba,{songConfigHandler:k,songConfig:l.config}),r.a.createElement(I.a,{orientation:"vertical"}),r.a.createElement(Ha,null),r.a.createElement(I.a,{orientation:"vertical"})),r.a.createElement(I.a,null),r.a.createElement(p.a,{disableGutters:!0,variant:"dense"},r.a.createElement(ha,{title:l.title,titleHandler:k}))),r.a.createElement(fa.a,null,r.a.createElement(da,{song:l,songChangeHandler:k})),r.a.createElement(Aa,{eventHandler:k}),r.a.createElement(Ia.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:s,autoHideDuration:6e3,onClose:w,message:y,action:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{color:"secondary",size:"small",onClick:w},"UNDO"),r.a.createElement(v.a,{size:"small","aria-label":"close",color:"inherit",onClick:w},r.a.createElement(Ea.a,{fontSize:"small"})))}))},La=t(100),Ua=t.n(La),Ga=function(e){var a=Object(c.f)().id,t=Q,n=r.a.useState(t),i=Object(d.a)(n,2),l=i[0],o=i[1];console.log(window.location.search);var u=Ua.a.parse(window.location.search).songJson;if(void 0===u||null===u||Array.isArray(u))void 0!==a&&l!==t&&o(pe.getSong(parseInt(a)));else{var s=JSON.parse(u);console.log(s)}return r.a.createElement(Wa,{song:l})},Va=t(197),za=t(198),Pa=ge,_a=Object(g.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})),Ka=function(e){var a=_a();return r.a.createElement("div",null,r.a.createElement("div",{className:a.heroContent},r.a.createElement(Va.a,{maxWidth:"sm"},r.a.createElement(b.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Numerals"),r.a.createElement(b.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Numerals simplfies songwriting process by exposing the fundamentals in an easy to use interface. Use some of the pre-configured templates below to get going!"),r.a.createElement("div",{className:a.heroButtons},r.a.createElement(u.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(u.a,{item:!0},r.a.createElement(o.b,{activeClassName:"active",to:"/new/empty"},r.a.createElement(f.a,{variant:"contained",color:"primary"},"Build Now"))),r.a.createElement(u.a,{item:!0},r.a.createElement(o.b,{activeClassName:"active",to:"/songwriting101"},r.a.createElement(f.a,{variant:"outlined",color:"primary"},"Songwriting 101"))))))),r.a.createElement(Va.a,{className:a.cardGrid,maxWidth:"md"},r.a.createElement(u.a,{container:!0,spacing:4},Pa.map((function(e){return r.a.createElement(u.a,{item:!0,key:e.key,xs:12,sm:6,md:4},r.a.createElement(ke.a,{className:a.card},r.a.createElement(za.a,{className:a.cardMedia,image:"https://source.unsplash.com/random",title:"Image title"}),r.a.createElement(we.a,{className:a.cardContent},r.a.createElement(b.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.label),r.a.createElement(b.a,null,e.description)),r.a.createElement(Ie.a,null,r.a.createElement(o.b,{activeClassName:"active",to:"/new/"+e.label},r.a.createElement(f.a,{variant:"contained",size:"small",color:"primary"},"Get started")))))})))))},Ya=function(e){var a=Object(c.f)().template,t=new he({bpm:4,key:1}).makeSong(a);return r.a.createElement(Wa,{song:t})},Fa=Object(g.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})),Ja=function(e){var a=Fa();return r.a.createElement("div",null,r.a.createElement("div",{className:a.heroContent},r.a.createElement(Va.a,{maxWidth:"sm"},r.a.createElement(b.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Songwriting 101"),r.a.createElement(b.a,{variant:"body1",align:"center",color:"textPrimary",paragraph:!0},"Numerals is primarily based off of the the ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Circle_of_fifths"},"Circle of Fifths")," and the latent ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Circle_of_fifths"},"chord progressions")," they unlock."),r.a.createElement(b.a,{variant:"body1",align:"center",color:"textPrimary",paragraph:!0},"Realistically, there is no hard and fast rule for creating a song...it's an artisitc endeavor which is impossible to 'program', that said, given all those possibilities that 'next' chord for a verse, chorus, bridge, or just something to go along with some guitar strums."),r.a.createElement(b.a,{variant:"body1",align:"center",color:"textPrimary",paragraph:!0},"Enter Numerals, a concept I've implemented privately over the years, but punched up for public consumption. Simply choose the key of your song, and start building out your song..."),r.a.createElement(b.a,{variant:"h4",align:"center",color:"textSecondary",paragraph:!0},'So why should I use "Numerals"?'),r.a.createElement(b.a,{variant:"body1",align:"center",color:"textPrimary",paragraph:!0},"Numerals takes the the guess work out finding out where songs should go. It exploits the Circle of Fifths to suggest and simply the songwriting process...You need a new bridge, just say you need a Bridge, and your off."),r.a.createElement(b.a,{variant:"body1",align:"center",color:"textSecondary",paragraph:!0},"It may not always make your song better, but it will make you a better song writer."))))},$a=(t(144),t(101)),Za=t(200),Xa=Object(g.a)((function(e){return Object(xe.a)({toolBar:{boxShadow:"none",border:"solid thin "+e.palette.primary.light,padding:e.spacing(0),marginBottom:e.spacing(1),width:"66px",textAlign:"center"},toolBarAction:{margin:e.spacing(1)}})})),qa=function(e){var a=e.items,t=Xa();for(var n,i,l=[],o=0;o<a.length;o++)l.push((n=a[o],i=o,r.a.createElement(Pe.a,{key:i,className:t.toolBarAction},r.a.createElement(v.a,null,n.icon))));return r.a.createElement(Pe.a,{className:t.toolBar,component:"div"},r.a.createElement("h4",null,"ADD"),l)},Qa=t(202),et=t(199),at=Object(Ve.a)({root:{},indicator:{backgroundColor:"yellow "}})(Qa.a),tt=Object(Ve.a)((function(e){return Object(xe.a)({root:{color:e.palette.grey[900],minWidth:50,padding:0,fontWeight:e.typography.fontWeightRegular,marginRight:e.spacing(0),borderTop:"solid thin",borderLeft:"solid thin",borderRight:"solid thin",borderTopRightRadius:"25px",background:e.palette.primary.light,"&$selected":{fontWeight:e.typography.fontWeightBold},"&:focus":{color:"#40a9ff"}},selected:{}})}))((function(e){return r.a.createElement(et.a,Object.assign({disableRipple:!0},e))})),nt=function(e){var a=e.versions,t=r.a.useState(0),n=Object(d.a)(t,2),i=n[0],l=n[1];for(var o,c,s=[],m=0;m<a.length;m++)s.push((o=a[m],c=m,r.a.createElement(tt,{key:"version-"+c,label:"v"+o})));return r.a.createElement(u.a,{container:!0,spacing:0},r.a.createElement(u.a,{item:!0,xs:1},r.a.createElement(v.a,{"aria-label":"Save song at version",color:"primary"},r.a.createElement(T.a,{fontWeight:"900"}))),r.a.createElement(u.a,{item:!0,xs:11},r.a.createElement(at,{value:i,indicatorColor:"primary",textColor:"primary",onChange:function(e,a){l(a)},"aria-label":"disabled tabs example"},s)))},rt=function(e){return r.a.createElement(Va.a,{maxWidth:"sm"},r.a.createElement(nt,{versions:[1,2,3]}),r.a.createElement(I.a,null),r.a.createElement(Wa,{song:Q}))},it=Object(g.a)((function(e){return Object(xe.a)({root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}})}));function lt(){var e=it(),a=me;return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{container:!0,spacing:3},r.a.createElement(u.a,{item:!0,xs:2},r.a.createElement(qa,{items:a})),r.a.createElement(u.a,{item:!0,xs:8},r.a.createElement(rt,null)),r.a.createElement(u.a,{item:!0,xs:2},r.a.createElement(fa.a,{className:e.paper},"xs=6"))))}var ot=function(){var e=Object($a.a)({palette:{type:"light",primary:{main:"#757575",light:"#a4a4a4",dark:"#494949",contrastText:"#ffffff"},secondary:{main:"#ff8a80",light:"#ffbcaf",dark:"#c85a54",contrastText:"#000000"}},typography:{fontFamily:["Roboto"].join(",")}});return r.a.createElement(Za.a,{theme:e},r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(ve,null),r.a.createElement("br",null),r.a.createElement(u.a,{container:!0,direction:"row",justify:"center",alignItems:"stretch"},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:Ka}),r.a.createElement(c.a,{path:"/songs",component:be}),r.a.createElement(c.a,{path:"/new/:template",component:Ya}),r.a.createElement(c.a,{path:"/song/load?=:jsonJson",component:Ga}),r.a.createElement(c.a,{path:"/song/:id",component:Ga}),r.a.createElement(c.a,{path:"/songwriting101",component:Ja}),r.a.createElement(c.a,{payt:"/layout",component:lt}),r.a.createElement(c.a,{component:ye})))),r.a.createElement(Ee,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},79:function(e,a,t){}},[[121,1,2]]]);
//# sourceMappingURL=main.92f2d6d8.chunk.js.map