(function(){"use strict";var e={7724:function(e,t,n){var o=n(9242),i=(n(7658),n(3396)),a=n(7139),r=n(4870),s=n(1114),l=n(4543),c=n(4198),d=n(1989),u=n(2236),w=n(3803),p=n(8552);const f={style:{width:"100vw",height:"100vh"}},h={style:{padding:"100px 50px","font-size":"50px",color:"#fff"}};var v={__name:"App",setup(e){const t=new s.xsS,n=new s.cPb(75,window.innerWidth/window.innerHeight,.1,1e3);n.position.set(-3.23,2.98,4.06),n.updateProjectionMatrix();const o=new s.CP7({antialias:!0});o.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(o.domElement),o.outputEncoding=s.knz,o.toneMapping=s.LY2,o.toneMappingExposure=.5,o.shadowMap.enabled=!0,o.physicallyCorrectLights=!0;const v=new l.z(n,o.domElement);v.target.set(-8,2,0),v.enableDamping=!0;const x=new d._;x.setDecoderPath("./draco/");const m=new c.E;m.setDRACOLoader(x);let P=new u.x;P.load("./textures/sky.hdr",(e=>{e.mapping=s.dSO,t.background=e,t.environment=e})),m.load("./model/scene.glb",(e=>{const n=e.scene;n.traverse((e=>{"Plane"===e.name&&(e.visible=!1),e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})),t.add(n)}));const y=new s.zf8(300,32),b=new w.B(y,{textureWidth:1024,textureHeight:1024,color:15658751,flowDirection:new s.FM8(1,1),scale:100});b.rotation.x=-Math.PI/2,b.position.y=-.4,t.add(b);const g=new s.Ox3(16777215,1);g.position.set(0,50,0),t.add(g);const M=new s.cek(16777215,50);M.position.set(.1,2.4,0),M.castShadow=!0,t.add(M);const z=new s.ZAu;z.position.set(-8,2.5,-1.5);let k=3,O=[];for(let i=0;i<3;i++){const e=new s.xo$(.2,32,32),t=new s.Wid({color:16777215,emissive:16777215,emissiveIntensity:10}),n=new s.Kj0(e,t);O.push(n),n.position.set(k*Math.cos(2*i*Math.PI/3),Math.cos(2*i*Math.PI/3),k*Math.sin(2*i*Math.PI/3));let o=new s.cek(16777215,50);n.add(o),z.add(n)}t.add(z);let C={angle:0};function I(){requestAnimationFrame(I),o.render(t,n),v.update()}p.ZP.to(C,{angle:2*Math.PI,duration:10,repeat:-1,ease:"linear",onUpdate:()=>{z.rotation.y=C.angle,O.forEach(((e,t)=>{e.position.set(k*Math.cos(2*t*Math.PI/3),Math.cos(2*t*Math.PI/3+5*C.angle),k*Math.sin(2*t*Math.PI/3))}))}}),I();let T=p.ZP.timeline(),j=p.ZP.timeline();function S(e,t){T.to(n.position,{x:e.x,y:e.y,z:e.z,duration:1,ease:"power2.inOut"}),j.to(v.target,{x:t.x,y:t.y,z:t.z,duration:1,ease:"power2.inOut"})}let E=[{text:"圣诞快乐",callback:()=>{S(new s.Pa4(-3.23,3,4.06),new s.Pa4(-8,2,0))}},{text:"周彦伶，感谢在这么大的世界里遇见了你",callback:()=>{S(new s.Pa4(7,0,23),new s.Pa4(0,0,0))}},{text:"愿与你探寻世界的每一个角落",callback:()=>{S(new s.Pa4(10,3,0),new s.Pa4(5,2,0))}},{text:"愿将天上的星星送给你",callback:()=>{S(new s.Pa4(7,0,23),new s.Pa4(0,0,0)),F()}},{text:"愿疫情结束，大家健康快乐！",callback:()=>{S(new s.Pa4(-20,1.3,6.6),new s.Pa4(5,2,0))}}],A=(0,r.iH)(0),D=!1;window.addEventListener("wheel",(e=>{D||(D=!0,e.deltaY>0&&(A.value++,A.value>E.length-1&&(A.value=0,L())),E[A.value].callback(),setTimeout((()=>{D=!1}),1e3))}),!1);let U=new s.SPe(new s.xo$(.1,32,32),new s.Wid({color:16777215,emissive:16777215,emissiveIntensity:10}),100),Z=[],_=[];for(let i=0;i<100;i++){let e=100*Math.random()-50,t=100*Math.random()-50,n=100*Math.random()-50;Z.push(new s.Pa4(e,t,n));let o=new s.yGw;o.setPosition(e,t,n),U.setMatrixAt(i,o)}t.add(U);let H=new s.bnF;H.moveTo(25,25),H.bezierCurveTo(25,25,20,0,0,0),H.bezierCurveTo(-30,0,-30,35,-30,35),H.bezierCurveTo(-30,55,-10,77,25,95),H.bezierCurveTo(60,77,80,55,80,35),H.bezierCurveTo(80,35,80,0,50,0),H.bezierCurveTo(35,0,25,25,25,25);let W=new s.Pa4(0,2,10);for(let i=0;i<100;i++){let e=H.getPoint(i/100);_.push(new s.Pa4(.1*e.x+W.x,.1*e.y+W.y,W.z))}function F(){let e={time:0};p.ZP.to(e,{time:1,duration:1,onUpdate:()=>{for(let t=0;t<100;t++){let n=Z[t].x+(_[t].x-Z[t].x)*e.time,o=Z[t].y+(_[t].y-Z[t].y)*e.time,i=Z[t].z+(_[t].z-Z[t].z)*e.time,a=new s.yGw;a.setPosition(n,o,i),U.setMatrixAt(t,a)}U.instanceMatrix.needsUpdate=!0}})}function L(){let e={time:0};p.ZP.to(e,{time:1,duration:1,onUpdate:()=>{for(let t=0;t<100;t++){let n=_[t].x+(Z[t].x-_[t].x)*e.time,o=_[t].y+(Z[t].y-_[t].y)*e.time,i=_[t].z+(Z[t].z-_[t].z)*e.time,a=new s.yGw;a.setPosition(n,o,i),U.setMatrixAt(t,a)}U.instanceMatrix.needsUpdate=!0}})}return(e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"scenes",style:(0,a.j5)([{position:"fixed",left:"0",top:"0","z-index":"10","pointer-events":"none",transition:"all 1s"},{transform:`translate3d(0, ${100*-(0,r.SU)(A)}vh, 0)`}])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,r.SU)(E),(e=>((0,i.wg)(),(0,i.iD)("div",f,[(0,i._)("h1",h,(0,a.zw)(e.text),1)])))),256))],4))}};const x=v;var m=x;(0,o.ri)(m).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,a){if(!o){var r=1/0;for(d=0;d<e.length;d++){o=e[d][0],i=e[d][1],a=e[d][2];for(var s=!0,l=0;l<o.length;l++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,a<r&&(r=a));if(s){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,a,r=o[0],s=o[1],l=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var d=l(n)}for(t&&t(o);c<r.length;c++)a=r[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},o=self["webpackChunkapp"]=self["webpackChunkapp"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7724)}));o=n.O(o)})();
//# sourceMappingURL=app.b8bb1598.js.map