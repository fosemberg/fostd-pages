import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{i as t,n,r,t as i}from"./mobx-NDfu625Y.js";import{n as a,t as o}from"./react-DNLHFTBW.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var s=e(t(),1),c=a(),l=(e,t)=>({x:e,y:t}),u=(e,t)=>({x:e.x-t.x,y:e.y-t.y}),d=(e,t)=>e.x*t.y-e.y*t.x,f=(e,t)=>Math.hypot(e.x-t.x,e.y-t.y);function p(e,t,n){return e+(t-e)*n}function m(e,t,n){return{x:p(e.x,t.x,n),y:p(e.y,t.y,n)}}function h(e,t,n){return e<t?t:e>n?n:e}function g(e){return h(e,0,1)}function _(e,t,n){let r=n.x-t.x,i=n.y-t.y,a=r*r+i*i;if(a<1e-12)return f(e,t);let o=((e.x-t.x)*r+(e.y-t.y)*i)/a;return o=g(o),Math.hypot(e.x-(t.x+r*o),e.y-(t.y+i*o))}function v(e,t,n,r){let i=d(u(n,t),u(e,t)),a=d(u(r,n),u(e,n)),o=d(u(t,r),u(e,r));return!((i<-1e-9||a<-1e-9||o<-1e-9)&&(i>1e-9||a>1e-9||o>1e-9))}function y(e,t,n){return Math.abs(d(u(t,e),u(n,e)))*.5}var b={r:0,g:0,b:0},x={r:1,g:0,b:0},S={r:0,g:1,b:0},C={r:0,g:0,b:1},w=1.35,T=(e,t,n)=>({r:e,g:t,b:n});function E(e,t){return{r:g(e.r+t.r),g:g(e.g+t.g),b:g(e.b+t.b)}}function D(e){return+(e.r>=.5)+ +(e.g>=.5)+ +(e.b>=.5)}function O(e){return D(e)===3}function k(e){return e.r+e.g+e.b}function ee(e,t){let n=O(e);if(t.whiteOnly&&!n)return 0;let r=k(e);if(r<=1e-6)return 0;let i=(e.r*(1-g(t.resist.r))+e.g*(1-g(t.resist.g))+e.b*(1-g(t.resist.b)))/r;return n?i*w:i}function A(e,t=.06){let n=e=>Math.round(g(Math.max(e,t))*255),r=e=>n(e).toString(16).padStart(2,`0`);return`#${r(e.r)}${r(e.g)}${r(e.b)}`}function te(e){return{"000":`Тьма`,100:`Красный`,"010":`Зелёный`,"001":`Синий`,110:`Жёлтый`,101:`Пурпурный`,"011":`Голубой`,111:`Белый`}[`${+(e.r>=.5)}${+(e.g>=.5)}${+(e.b>=.5)}`]??`Свет`}var j=1/60,ne=4.2,re=.34,ie=.7,ae=.35,M={ruby:{kind:`ruby`,name:`Рубин`,short:`R`,blurb:`Жёсткий ближний импульс. Красный канал.`,cost:90,spectrum:x,pulseDps:11,pulseRange:2.5,linkPower:10,linkRangeBonus:0,chill:0,relay:!1},verdant:{kind:`verdant`,name:`Изумруд`,short:`G`,blurb:`Длинные связи и широкий радиус. Зелёный канал.`,cost:90,spectrum:S,pulseDps:7,pulseRange:3.3,linkPower:10,linkRangeBonus:1.1,chill:0,relay:!1},azure:{kind:`azure`,name:`Сапфир`,short:`B`,blurb:`Замедляет всё, до чего дотянется. Синий канал.`,cost:100,spectrum:C,pulseDps:6,pulseRange:2.9,linkPower:9,linkRangeBonus:.3,chill:.9,relay:!1},prism:{kind:`prism`,name:`Призма`,short:`◇`,blurb:`Своего света нет — смешивает чужой и усиливает связи.`,cost:150,spectrum:b,pulseDps:0,pulseRange:0,linkPower:6,linkRangeBonus:1.6,chill:0,relay:!0}},oe=[`ruby`,`verdant`,`azure`,`prism`],se=[0,1,1.65,2.5],ce=[0,1,1.12,1.26],le=.3;function ue(e,t){return t>=3?1/0:Math.round(M[e].cost*(.85+.55*t))}function de(e,t){let n=M[e].cost;for(let r=1;r<t;r++)n+=ue(e,r);return Math.floor(n*ie)}var N={mote:{kind:`mote`,name:`Искра`,hp:46,speed:1.45,bounty:9,leak:1,resist:T(0,0,0),whiteOnly:!1,size:.32,hint:`Без защиты — бьётся любым светом.`},ember:{kind:`ember`,name:`Уголь`,hp:74,speed:1.3,bounty:13,leak:1,resist:T(.85,0,0),whiteOnly:!1,size:.36,hint:`Поглощает красный. Нужны зелёный и синий.`},moss:{kind:`moss`,name:`Мох`,hp:88,speed:1.15,bounty:14,leak:1,resist:T(0,.85,0),whiteOnly:!1,size:.38,hint:`Поглощает зелёный.`},frost:{kind:`frost`,name:`Иней`,hp:80,speed:1.55,bounty:14,leak:1,resist:T(0,0,.85),whiteOnly:!1,size:.35,hint:`Поглощает синий и не тормозит.`},wraith:{kind:`wraith`,name:`Фантом`,hp:120,speed:1.85,bounty:26,leak:1,resist:T(.4,.4,.4),whiteOnly:!0,size:.34,hint:`Сдвинут по фазе: ранит только белый свет.`},bulwark:{kind:`bulwark`,name:`Оплот`,hp:420,speed:.82,bounty:40,leak:3,resist:T(.45,.45,.45),whiteOnly:!1,size:.52,hint:`Много брони по всем каналам. Медленный.`},nova:{kind:`nova`,name:`Нова`,hp:1700,speed:.72,bounty:160,leak:6,resist:T(.6,.6,.6),whiteOnly:!0,size:.78,hint:`Босс. Только белая решётка снимает его щит.`}},fe=[`mote`,`ember`,`moss`,`frost`,`wraith`,`bulwark`,`nova`],P=o();function F({variant:e=`ghost`,size:t=`md`,block:n=!1,icon:r,meta:i,children:a,className:o=``,type:s=`button`,...c}){let l=[`btn`,`btn--${e}`,`btn--${t}`,n?`btn--block`:``,o].filter(Boolean).join(` `);return(0,P.jsxs)(`button`,{type:s,className:l,...c,children:[r?(0,P.jsx)(`span`,{className:`btn__icon`,"aria-hidden":`true`,children:r}):null,(0,P.jsx)(`span`,{className:`btn__label`,children:a}),i?(0,P.jsx)(`span`,{className:`btn__meta`,children:i}):null]})}function pe({title:e,hint:t,action:n,children:r,className:i=``,fullscreen:a=!1}){return(0,P.jsxs)(`section`,{className:`panel surface ${a?`panel--full`:``} ${i}`.trim(),children:[(e||n)&&(0,P.jsxs)(`header`,{className:`panel__head`,children:[(0,P.jsxs)(`div`,{className:`panel__heading`,children:[e?(0,P.jsx)(`h2`,{className:`panel__title`,children:e}):null,t?(0,P.jsx)(`p`,{className:`panel__hint`,children:t}):null]}),n?(0,P.jsx)(`div`,{className:`panel__action`,children:n}):null]}),(0,P.jsx)(`div`,{className:`panel__body scroll`,children:r})]})}var me=()=>{let e=new Map;return{get:t=>e.get(t)??null,set:(t,n)=>void e.set(t,n),remove:t=>void e.delete(t)}};function he(){try{if(typeof localStorage>`u`)return me();let e=`__prism_probe__`;localStorage.setItem(e,`1`),localStorage.removeItem(e)}catch{return me()}return{get:e=>{try{return localStorage.getItem(e)}catch{return null}},set:(e,t)=>{try{localStorage.setItem(e,t)}catch{}},remove:e=>{try{localStorage.removeItem(e)}catch{}}}}function ge(e,t,n){let r=e.get(t);if(r===null)return n;try{return JSON.parse(r)??n}catch{return n}}function _e(e,t,n){try{e.set(t,JSON.stringify(n))}catch{}}var ve=`prism.history.v1`,ye=50,be=4e3;function xe(e={}){let t=e.VITE_API_URL;return t?t.replace(/\/+$/,``):`/api`}var Se=class{baseUrl;store;fetchImpl;now;timeoutMs;reachable=null;constructor(e={}){this.baseUrl=e.baseUrl??`/api`,this.store=e.store??he(),this.fetchImpl=e.fetchImpl??(typeof fetch==`function`?fetch.bind(globalThis):void 0),this.now=e.now??(()=>Date.now()),this.timeoutMs=e.timeoutMs??be}get online(){return this.reachable}async request(e,t){if(!this.fetchImpl)return null;let n=typeof AbortController==`function`?new AbortController:null,r=n?setTimeout(()=>n.abort(),this.timeoutMs):null;try{let r=await this.fetchImpl(`${this.baseUrl}${e}`,{...t,signal:n?.signal});return r.ok?(this.reachable=!0,await r.json()):(this.reachable=!1,null)}catch{return this.reachable=!1,null}finally{r!==null&&clearTimeout(r)}}localHistory(){let e=ge(this.store,ve,[]);return Array.isArray(e)?e:[]}remember(e){let t={...e,id:this.now(),createdAt:this.now(),local:!0},n=[t,...this.localHistory()].slice(0,ye);return _e(this.store,ve,n),t}async submit(e,t){return this.remember(e),t?await this.request(`/scores`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)})?`published`:`local-only`:`declined`}async top(e,t=20){let n=new URLSearchParams;e&&n.set(`map`,e),n.set(`limit`,String(t));let r=await this.request(`/leaderboard?${n}`);return r&&Array.isArray(r.entries)?r.entries:this.localHistory().filter(t=>!e||t.mapId===e).sort((e,t)=>t.score-e.score||t.wave-e.wave).slice(0,t)}async ping(){return(await this.request(`/health`))?.ok===!0}clearHistory(){this.store.remove(ve)}},I=[{id:`ridge`,name:`Гряда`,width:18,height:12,clearance:1,waves:20,blurb:`Три петли и широкие поля — место, чтобы научиться плести решётку.`,waypoints:[l(-1.5,3),l(4.5,3),l(4.5,9),l(9.5,9),l(9.5,3),l(14,3),l(14,6.5),l(19.5,6.5)],blocked:[[7,5],[7,6],[8,5],[12,8],[12,9],[13,9],[2,7],[2,8]]},{id:`spiral`,name:`Спираль`,width:16,height:14,clearance:.95,waves:24,blurb:`Путь сворачивается внутрь. Одна башня в центре достаёт до четырёх витков.`,waypoints:[l(-1.5,1.5),l(14.5,1.5),l(14.5,12.5),l(1.5,12.5),l(1.5,4.5),l(11,4.5),l(11,9.5),l(5.5,9.5),l(5.5,7)],blocked:[[7,2],[8,2],[7,11],[8,11],[3,7],[12,7]]},{id:`rift`,name:`Разлом`,width:20,height:12,clearance:1,waves:28,blurb:`Длинная змейка с узкими перешейками. Каждая связь на счету.`,waypoints:[l(-1.5,6),l(3.5,6),l(3.5,2),l(8,2),l(8,10),l(12.5,10),l(12.5,2),l(16.5,2),l(16.5,6),l(21.5,6)],blocked:[[5,5],[5,6],[6,5],[10,5],[10,6],[14,6],[14,7],[15,7],[1,9],[18,9]]}];function Ce(e){return I.find(t=>t.id===e)??I[0]}function we(e){let t=e.waypoints,n=[0];for(let e=1;e<t.length;e++)n.push(n[e-1]+f(t[e-1],t[e]));return{points:t,cumulative:n,length:n[n.length-1]}}function Te(e,t){let{points:n,cumulative:r,length:i}=e;if(t<=0)return{...n[0]};if(t>=i)return{...n[n.length-1]};let a=1;for(;a<r.length-1&&r[a]<t;)a++;let o=r[a]-r[a-1],s=o>1e-9?(t-r[a-1])/o:0;return m(n[a-1],n[a],s)}function Ee(e,t){let n=1/0;for(let r=1;r<e.points.length;r++){let i=_(t,e.points[r-1],e.points[r]);i<n&&(n=i)}return n}var L=(e,t)=>l(e+.5,t+.5);function De(e,t,n){return t>=0&&n>=0&&t<e.width&&n<e.height}function Oe(e,t,n){return e.blocked.some(([e,r])=>e===t&&r===n)}function ke(e,t,n,r,i){return De(e,n,r)?Oe(e,n,r)?`blocked`:Ee(t,L(n,r))<e.clearance?`on-path`:i(n,r)?`occupied`:null:`out-of-bounds`}function Ae(e,t){let n=new Uint8Array(e.width*e.height);for(let r=0;r<e.height;r++)for(let i=0;i<e.width;i++){let a=!Oe(e,i,r)&&Ee(t,L(i,r))>=e.clearance;n[r*e.width+i]=+!!a}return n}function je(e){return ne+M[e.kind].linkRangeBonus*(1+.15*(e.level-1))}function Me(e,t){let n=(je(e)+je(t))*.5;return f(R(e),R(t))<=n}var R=e=>L(e.cell.x,e.cell.y);function Ne(e){switch(D(e)){case 3:return 1.25;case 2:return 1;case 1:return .8;default:return 0}}var Pe=4;function Fe(e,t){let n=e.map(e=>M[e.kind].spectrum),r=[];for(let t=0;t<e.length;t++)M[e[t].kind].relay&&r.push(t);if(r.length===0)return n;for(let e=0;e<Pe;e++){let e=!1;for(let i of r){let r=b;for(let e of t[i])r=E(r,n[e]);(r.r!==n[i].r||r.g!==n[i].g||r.b!==n[i].b)&&(n[i]=r,e=!0)}if(!e)break}return n}function Ie(e){let t=e.map(()=>[]);for(let n=0;n<e.length;n++)for(let r=n+1;r<e.length;r++)Me(e[n],e[r])&&(t[n].push(r),t[r].push(n));return t}function Le(e,t){let n=M[e.kind],r=n.relay?1+le*e.level:1,i=+(D(t)>0);return n.linkPower*se[e.level]*r*i}function Re(e){if(e.length<2){let t={};for(let n of e)t[n.id]=M[n.kind].spectrum;return{links:[],fields:[],totalPower:0,spectra:t}}let t=Ie(e),n=Fe(e,t),r=[],i=new Map,a=(e,t)=>e<t?e*1e5+t:t*1e5+e,o=0;for(let s=0;s<e.length;s++)for(let c of t[s]){if(c<s)continue;let t=E(n[s],n[c]),l=Ne(t);if(l===0)continue;let u=(Le(e[s],n[s])+Le(e[c],n[c]))*.5*l;u<=0||(i.set(a(s,c),r.length),r.push({a:e[s].id,b:e[c].id,from:R(e[s]),to:R(e[c]),spectrum:t,power:u}),o+=u)}let s={};for(let t=0;t<e.length;t++)s[e[t].id]=n[t];return{links:r,fields:ze(e,t,n,r,i,a),totalPower:o,spectra:s}}function ze(e,t,n,r,i,a){let o=[],s=t.map(e=>new Set(e));for(let c=0;c<e.length;c++)for(let l of t[c])if(!(l<=c))for(let u of t[l]){if(u<=l||!s[c].has(u))continue;let t=i.get(a(c,l)),d=i.get(a(l,u)),f=i.get(a(c,u));if(t===void 0||d===void 0||f===void 0||!O(E(E(n[c],n[l]),n[u])))continue;let p=y(R(e[c]),R(e[l]),R(e[u]));if(p<1.1)continue;let m=(r[t].power+r[d].power+r[f].power)*.45;o.push({towers:[e[c].id,e[l].id,e[u].id],corners:[R(e[c]),R(e[l]),R(e[u])],power:m,area:p})}return o.length<=24?o:(o.sort((e,t)=>t.power-e.power||e.towers[0]-t.towers[0]||e.towers[1]-t.towers[1]),o.slice(0,24))}function Be(e){return{s:e>>>0||2654435769}}function Ve(e){e.s=e.s+1831565813>>>0;let t=e.s;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function He(e,t,n){return n<=t?t:t+Math.floor(Ve(e)*(n-t+1))}function z(e,t,n){return t+Ve(e)*(n-t)}function Ue(e,t,n){let r=0;for(let e=0;e<t.length;e++)r+=Math.max(0,n[e]??0);if(r<=0)return t[0];let i=Ve(e)*r;for(let e=0;e<t.length;e++)if(i-=Math.max(0,n[e]??0),i<=0)return t[e];return t[t.length-1]}var We=[{kind:`mote`,wave:1,weight:10},{kind:`ember`,wave:3,weight:8},{kind:`moss`,wave:5,weight:8},{kind:`frost`,wave:7,weight:8},{kind:`bulwark`,wave:6,weight:3},{kind:`wraith`,wave:9,weight:5}];function Ge(e){let t=Math.max(0,e-1);return 1+.19*t+.014*t*t}function Ke(e){return 1+Math.min(.42,.014*Math.max(0,e-1))}function qe(e){return e%10==0}function Je(e){return Math.min(42,6+Math.floor(e*1.45))}function Ye(e,t,n){let r=Be((t^e*2654435761)>>>0),i=We.filter(t=>e>=t.wave),a=i.map(e=>e.kind),o=i.map(t=>t.kind===`mote`?Math.max(1,t.weight-Math.floor(e/3)):t.weight),s=[],c=Ge(e),l=Ke(e),u=Math.max(14,Math.round(37.2-e*.6)),d=n,f=Je(e);for(let e=0;e<f;e++){let e=Ue(r,a,o);s.push({atTick:Math.round(d),kind:e,hpMul:c,speedMul:l}),d+=u*z(r,.78,1.25),He(r,0,5)===0&&(d+=u*1.6)}return qe(e)&&s.push({atTick:Math.round(d+90),kind:`nova`,hpMul:c*(.75+e/10*.05),speedMul:l}),s.sort((e,t)=>e.atTick-t.atTick),s}function Xe(e,t){let n=new Map;for(let r of Ye(e,t,0))n.set(r.kind,(n.get(r.kind)??0)+1);return[...n.entries()].map(([e,t])=>({kind:e,count:t})).sort((e,t)=>t.count-e.count||e.kind.localeCompare(t.kind))}function Ze(e){let t=Ce(e);return{map:t,path:we(t)}}function Qe(e,t,n={}){let r=Ce(e);return{tick:0,mapId:r.id,seed:t>>>0,rng:Be(t),status:`building`,gold:n.gold??300,lives:n.lives??20,wave:0,totalWaves:n.totalWaves??r.waves,towers:[],enemies:[],queue:[],nextTowerId:1,nextEnemyId:1,score:0,kills:0,leaked:0,latticeDirty:!1,lattice:{links:[],fields:[],totalPower:0,spectra:{}},events:[]}}function B(e){return e.status===`won`||e.status===`lost`}function $e(e,t,n){return e.towers.find(e=>e.cell.x===t&&e.cell.y===n)}function et(e,t){return e.towers.find(e=>e.id===t)}function tt(e,t,n){if(B(t))return`wrong-state`;switch(n.type){case`build`:{let r=M[n.kind];if(!r)return`invalid-cell`;let i=Math.floor(n.cell.x),a=Math.floor(n.cell.y);return ke(e.map,e.path,i,a,(e,n)=>!!$e(t,e,n))?`invalid-cell`:t.gold<r.cost?`no-gold`:(t.gold-=r.cost,t.towers.push({id:t.nextTowerId++,kind:n.kind,cell:l(i,a),level:1,owner:n.owner,builtAtTick:t.tick}),t.latticeDirty=!0,t.events.push({type:`build`,x:i+.5,y:a+.5,kind:n.kind}),`ok`)}case`sell`:{let e=t.towers.findIndex(e=>e.id===n.towerId);if(e<0)return`no-tower`;let r=t.towers[e];return t.gold+=de(r.kind,r.level),t.towers.splice(e,1),t.latticeDirty=!0,t.events.push({type:`sell`,x:r.cell.x+.5,y:r.cell.y+.5}),`ok`}case`upgrade`:{let e=et(t,n.towerId);if(!e)return`no-tower`;if(e.level>=3)return`max-level`;let r=ue(e.kind,e.level);return t.gold<r?`no-gold`:(t.gold-=r,e.level+=1,t.latticeDirty=!0,t.events.push({type:`upgrade`,x:e.cell.x+.5,y:e.cell.y+.5,level:e.level}),`ok`)}case`startWave`:{if(t.wave>=t.totalWaves)return`wrong-state`;let e=t.status===`wave`;return t.wave+=1,t.queue.push(...Ye(t.wave,t.seed,t.tick+30)),t.queue.sort((e,t)=>e.atTick-t.atTick),t.status=`wave`,e&&(t.gold+=Math.round((25+6*t.wave)*ae)),t.events.push({type:`waveStart`,wave:t.wave}),`ok`}default:return`wrong-state`}}function nt(e,t,n,r){let i=N[t],a=i.hp*n;e.enemies.push({id:e.nextEnemyId++,kind:t,dist:0,prevDist:0,hp:a,maxHp:a,speed:i.speed*r,resist:i.resist,whiteOnly:i.whiteOnly,bounty:i.bounty,leak:i.leak,slowFor:0,flash:0,wobble:z(e.rng,0,Math.PI*2)})}var rt=.62;function it(e,t,n=[]){if(t.events.length=0,B(t))return;for(let r of n)tt(e,t,r);for(t.latticeDirty&&=(t.lattice=Re(t.towers),!1);t.queue.length>0&&t.queue[0].atTick<=t.tick;){let e=t.queue.shift();nt(t,e.kind,e.hpMul,e.speedMul)}let r=Array(t.enemies.length);for(let n=0;n<t.enemies.length;n++){let i=t.enemies[n];i.prevDist=i.dist;let a=i.slowFor>0?rt:1;i.dist+=i.speed*a*j,i.slowFor>0&&(i.slowFor=Math.max(0,i.slowFor-j)),i.flash=Math.max(0,i.flash-j*4),r[n]=Te(e.path,i.dist)}at(t,r),ot(t,r),st(t,r);let i=e.path.length;for(let e=t.enemies.length-1;e>=0;e--){let n=t.enemies[e];if(n.hp<=0){t.gold+=n.bounty,t.score+=n.bounty,t.kills+=1,t.events.push({type:`kill`,x:r[e].x,y:r[e].y,spectrum:N[n.kind].resist,bounty:n.bounty}),t.enemies.splice(e,1);continue}n.dist>=i&&(t.lives-=n.leak,t.leaked+=1,t.events.push({type:`leak`,x:r[e].x,y:r[e].y,damage:n.leak}),t.enemies.splice(e,1))}if(t.lives<=0){t.lives=0,t.status=`lost`,t.events.push({type:`lost`}),t.tick+=1;return}if(t.status===`wave`&&t.queue.length===0&&t.enemies.length===0){let e=25+6*t.wave;t.gold+=e,t.score+=e,t.events.push({type:`waveClear`,wave:t.wave,bonus:e}),t.wave>=t.totalWaves?(t.status=`won`,t.score+=t.lives*50,t.events.push({type:`won`})):t.status=`building`}t.tick+=1}function at(e,t){for(let n of e.towers){let r=M[n.kind];if(r.pulseDps<=0)continue;let i=r.pulseRange*ce[n.level],a=i*i,o=r.pulseDps*se[n.level],s=R(n);for(let n=0;n<e.enemies.length;n++){let i=e.enemies[n];if(i.hp<=0)continue;let c=t[n].x-s.x,l=t[n].y-s.y;if(c*c+l*l>a)continue;let u=ee(r.spectrum,i);u<=0||(i.hp-=o*u*j,i.flash=1,r.chill>0&&(i.slowFor=Math.max(i.slowFor,r.chill)))}}}function ot(e,t){for(let n of e.lattice.links){let r=Math.min(n.from.x,n.to.x)-re,i=Math.max(n.from.x,n.to.x)+re,a=Math.min(n.from.y,n.to.y)-re,o=Math.max(n.from.y,n.to.y)+re;for(let s=0;s<e.enemies.length;s++){let c=e.enemies[s];if(c.hp<=0)continue;let l=t[s];if(l.x<r||l.x>i||l.y<a||l.y>o||_(l,n.from,n.to)>.34)continue;let u=ee(n.spectrum,c);u<=0||(c.hp-=n.power*u*j,c.flash=1)}}}function st(e,t){for(let n of e.lattice.fields){let[r,i,a]=n.corners,o=Math.min(r.x,i.x,a.x),s=Math.max(r.x,i.x,a.x),c=Math.min(r.y,i.y,a.y),l=Math.max(r.y,i.y,a.y);for(let u=0;u<e.enemies.length;u++){let d=e.enemies[u];if(d.hp<=0)continue;let f=t[u];if(f.x<o||f.x>s||f.y<c||f.y>l||!v(f,r,i,a))continue;let p=ee({r:1,g:1,b:1},d);p<=0||(d.hp-=n.power*p*j,d.flash=1)}}}function ct(e,t,n){return Te(e.path,t.prevDist+(t.dist-t.prevDist)*g(n))}function lt(){return ut(new Float32Array(16))}function ut(e){return e.fill(0),e[0]=e[5]=e[10]=e[15]=1,e}function dt(e,t,n,r,i){let a=1/Math.tan(t/2),o=1/(r-i);return e.fill(0),e[0]=a/n,e[5]=a,e[10]=(i+r)*o,e[11]=-1,e[14]=2*i*r*o,e}function ft(e,t,n,r){let i=t.x-n.x,a=t.y-n.y,o=t.z-n.z,s=Math.hypot(i,a,o)||1;i/=s,a/=s,o/=s;let c=r.y*o-r.z*a,l=r.z*i-r.x*o,u=r.x*a-r.y*i;s=Math.hypot(c,l,u),s<1e-6?(c=1,l=0,u=0):(c/=s,l/=s,u/=s);let d=a*u-o*l,f=o*c-i*u,p=i*l-a*c;return e[0]=c,e[1]=d,e[2]=i,e[3]=0,e[4]=l,e[5]=f,e[6]=a,e[7]=0,e[8]=u,e[9]=p,e[10]=o,e[11]=0,e[12]=-(c*t.x+l*t.y+u*t.z),e[13]=-(d*t.x+f*t.y+p*t.z),e[14]=-(i*t.x+a*t.y+o*t.z),e[15]=1,e}function pt(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=t[9],p=t[10],m=t[11],h=t[12],g=t[13],_=t[14],v=t[15];for(let t=0;t<4;t++){let y=n[t*4],b=n[t*4+1],x=n[t*4+2],S=n[t*4+3];e[t*4]=y*r+b*s+x*d+S*h,e[t*4+1]=y*i+b*c+x*f+S*g,e[t*4+2]=y*a+b*l+x*p+S*_,e[t*4+3]=y*o+b*u+x*m+S*v}return e}function mt(e,t){let n=e[0]*t.x+e[4]*t.y+e[8]*t.z+e[12],r=e[1]*t.x+e[5]*t.y+e[9]*t.z+e[13],i=e[2]*t.x+e[6]*t.y+e[10]*t.z+e[14],a=e[3]*t.x+e[7]*t.y+e[11]*t.z+e[15],o=Math.abs(a)>1e-9?1/a:1;return{x:n*o,y:r*o,z:i*o,w:a}}function ht(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],m=t[12],h=t[13],g=t[14],_=t[15],v=n*s-r*o,y=n*c-i*o,b=n*l-a*o,x=r*c-i*s,S=r*l-a*s,C=i*l-a*c,w=u*h-d*m,T=u*g-f*m,E=u*_-p*m,D=d*g-f*h,O=d*_-p*h,k=f*_-p*g,ee=v*k-y*O+b*D+x*E-S*T+C*w;if(Math.abs(ee)<1e-12)return null;let A=1/ee;return e[0]=(s*k-c*O+l*D)*A,e[1]=(i*O-r*k-a*D)*A,e[2]=(h*C-g*S+_*x)*A,e[3]=(f*S-d*C-p*x)*A,e[4]=(c*E-o*k-l*T)*A,e[5]=(n*k-i*E+a*T)*A,e[6]=(g*b-m*C-_*y)*A,e[7]=(u*C-f*b+p*y)*A,e[8]=(o*O-s*E+l*w)*A,e[9]=(r*E-n*O-a*w)*A,e[10]=(m*S-h*b+_*v)*A,e[11]=(d*b-u*S-p*v)*A,e[12]=(s*T-o*D-c*w)*A,e[13]=(n*D-r*T+i*w)*A,e[14]=(h*y-m*x-g*v)*A,e[15]=(u*x-d*y+f*v)*A,e}var gt=(e,t,n)=>({x:e,y:t,z:n}),_t={minDistance:7,maxDistance:46,minPitch:.34,maxPitch:1.32},vt=class{limits;target;distance;yaw;pitch;fov=52*Math.PI/180;view=lt();proj=lt();viewProj=lt();invViewProj=lt();invValid=!1;constructor(e=l(0,0),t=18,n=-Math.PI/4,r=.78,i=_t){this.limits=i,this.target={...e},this.distance=t,this.yaw=n,this.pitch=r}eye(){let e=Math.cos(this.pitch)*this.distance;return gt(this.target.x+Math.sin(this.yaw)*e,Math.sin(this.pitch)*this.distance,this.target.y+Math.cos(this.yaw)*e)}update(e,t=.4,n=160){let r=this.eye();ft(this.view,r,gt(this.target.x,0,this.target.y),gt(0,1,0)),dt(this.proj,this.fov,Math.max(e,.001),t,n),pt(this.viewProj,this.proj,this.view),this.invValid=!1}zoomBy(e){this.distance=h(this.distance*e,this.limits.minDistance,this.limits.maxDistance)}orbitBy(e,t){this.yaw+=e,this.pitch=h(this.pitch+t,this.limits.minPitch,this.limits.maxPitch)}panBy(e,t){let n=Math.sin(this.yaw),r=Math.cos(this.yaw);this.target=l(this.target.x+e*r-t*n,this.target.y-e*n-t*r)}fitDistance(e,t,n,r=1.15){let i=this.fov*.5,a=Math.tan(i),o=Math.hypot(e,t)*.5*r/a,s=Math.min(e,t)*.5*r/(a*Math.max(n,.001));return Math.max(o,s)}frame(e,t,n){this.target=l(e/2,t/2),this.distance=h(this.fitDistance(e,t,n),this.limits.minDistance,this.limits.maxDistance)}clampTarget(e,t,n=4){this.target=l(h(this.target.x,-n,e+n),h(this.target.y,-n,t+n))}screenToGround(e,t){if(!this.invValid){if(!ht(this.invViewProj,this.viewProj))return ut(this.invViewProj),null;this.invValid=!0}let n=mt(this.invViewProj,gt(e,t,-1)),r=mt(this.invViewProj,gt(e,t,1)),i=r.y-n.y;if(Math.abs(i)<1e-6)return null;let a=-n.y/i;return a<0?null:l(n.x+(r.x-n.x)*a,n.z+(r.z-n.z)*a)}};function yt(e,t,n){return l((e-n.left)/Math.max(n.width,1)*2-1,-((t-n.top)/Math.max(n.height,1)*2-1))}var bt=class extends Error{constructor(e=`WebGL2 недоступен в этом браузере`){super(e),this.name=`WebGlUnavailableError`}},xt=/Android|iPhone|iPad|iPod|Mobile|Silk/i;function St(e){return xt.test(e)}function Ct(e,t){let n=St(e)?2:2.5;return Math.max(1,Math.min(t||1,n))}function wt(e){let t=e.getContext(`webgl2`,{alpha:!1,antialias:!1,depth:!0,stencil:!1,powerPreference:`high-performance`,preserveDrawingBuffer:!1,desynchronized:!0});if(!t)throw new bt;let n=!!t.getExtension(`EXT_color_buffer_half_float`)||!!t.getExtension(`EXT_color_buffer_float`),r=typeof navigator>`u`?``:navigator.userAgent;return{gl:t,canvas:e,caps:{halfFloatColor:n,maxSamples:t.getParameter(t.MAX_SAMPLES),maxTextureSize:t.getParameter(t.MAX_TEXTURE_SIZE),maxPixelRatio:Ct(r,typeof devicePixelRatio>`u`?1:devicePixelRatio)}}}function Tt(e,t=1){let{canvas:n,caps:r}=e,i=r.maxPixelRatio*t,a=Math.max(1,Math.round(n.clientWidth*i)),o=Math.max(1,Math.round(n.clientHeight*i));return n.width===a&&n.height===o?!1:(n.width=a,n.height=o,!0)}function Et(e,t,n){let r=t[0]-e[0],i=t[1]-e[1],a=t[2]-e[2],o=n[0]-e[0],s=n[1]-e[1],c=n[2]-e[2],l=i*c-a*s,u=a*o-r*c,d=r*s-i*o,f=Math.hypot(l,u,d)||1;return[l/f,u/f,d/f]}function V(e,t){let n=[],r=[],i=[];for(let a of t)for(let t=1;t<a.length-1;t++){let o=e[a[0]],s=e[a[t]],c=e[a[t+1]],l=Et(o,s,c);for(let[e,t]of[[0,o],[1,s],[2,c]])n.push(t[0],t[1],t[2]),r.push(l[0],l[1],l[2]),i.push(+(e===0),+(e===1),+(e===2))}return{positions:new Float32Array(n),normals:new Float32Array(r),edges:new Float32Array(i),vertexCount:n.length/3}}function Dt(e=1){let t=e;return V([[t,0,0],[-t,0,0],[0,t,0],[0,-t,0],[0,0,t],[0,0,-t]],[[0,2,4],[2,1,4],[1,3,4],[3,0,4],[2,0,5],[1,2,5],[3,1,5],[0,3,5]])}function Ot(e=1){let t=e/Math.sqrt(3);return V([[t,t,t],[t,-t,-t],[-t,t,-t],[-t,-t,t]],[[0,1,2],[0,3,1],[0,2,3],[1,3,2]])}function kt(e=1){let t=e/2;return V([[-t,-t,-t],[t,-t,-t],[t,t,-t],[-t,t,-t],[-t,-t,t],[t,-t,t],[t,t,t],[-t,t,t]],[[0,3,2,1],[4,5,6,7],[0,1,5,4],[2,3,7,6],[1,2,6,5],[0,4,7,3]])}function At(e=1){let t=(1+Math.sqrt(5))/2,n=[[-1,t,0],[1,t,0],[-1,-t,0],[1,-t,0],[0,-1,t],[0,1,t],[0,-1,-t],[0,1,-t],[t,0,-1],[t,0,1],[-t,0,-1],[-t,0,1]],r=e/Math.hypot(1,t);return V(n.map(e=>[e[0]*r,e[1]*r,e[2]*r]),[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]])}function jt(e=6,t=.36,n=.46,r=.55,i=1.25){let a=[],o=[],s=[];for(let n=0;n<e;n++){let r=n/e*Math.PI*2;o.push(a.length),a.push([Math.cos(r)*t,0,Math.sin(r)*t])}for(let t=0;t<e;t++){let i=(t+.5)/e*Math.PI*2;s.push(a.length),a.push([Math.cos(i)*n,r,Math.sin(i)*n])}let c=a.length;a.push([0,i,0]);let l=[];l.push([...o].reverse());for(let t=0;t<e;t++){let n=o[t],r=o[(t+1)%e],i=s[t],a=s[(t+1)%e];l.push([n,r,i]),l.push([r,a,i]),l.push([i,a,c])}return V(a,l)}function Mt(e=3,t=.5,n=.95,r=.1){let i=[],a=[],o=(n+r)*.42;for(let n=0;n<e;n++){let r=n/e*Math.PI*2;a.push(i.length),i.push([Math.cos(r)*t,o,Math.sin(r)*t])}let s=i.length;i.push([0,n,0]);let c=i.length;i.push([0,r,0]);let l=[];for(let t=0;t<e;t++){let n=a[t],r=a[(t+1)%e];l.push([n,r,s]),l.push([r,n,c])}return V(i,l)}function Nt(e=1){let t=e>>>0||1,n=()=>(t=Math.imul(t^t>>>15,t|1)+1831565813>>>0,(t>>>8)/16777216),r=[],i=[];for(let e=0;e<5;e++){let t=e/5*Math.PI*2,a=.28+n()*.16;i.push(r.length),r.push([Math.cos(t)*a,0,Math.sin(t)*a])}let a=r.length;r.push([(n()-.5)*.2,.45+n()*.45,(n()-.5)*.2]);let o=[[...i].reverse()];for(let e=0;e<5;e++)o.push([i[e],i[(e+1)%5],a]);return V(r,o)}function Pt(){return V([[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0]],[[0,1,2,3]])}function Ft(e,t,n=6){return V([[-n,0,-n],[e+n,0,-n],[e+n,0,t+n],[-n,0,t+n]],[[0,3,2,1]])}function It(e){return e.reduce((e,t)=>e+t.size,0)*4}var H=class{gl;layout;capacity;vertexCount;vao;geometryBuffer;instanceBuffer;stride;floatsPerInstance;data;count=0;constructor(e,t,n,r,i,a=n.vertexCount){this.gl=e,this.layout=r,this.capacity=i,this.vertexCount=a,this.stride=It(r),this.floatsPerInstance=this.stride/4,this.data=new Float32Array(i*this.floatsPerInstance);let o=e.createVertexArray(),s=e.createBuffer(),c=e.createBuffer();if(!o||!s||!c)throw Error(`не удалось создать буферы WebGL`);this.vao=o,this.geometryBuffer=s,this.instanceBuffer=c,e.bindVertexArray(o);let l=new Float32Array(n.vertexCount*9);for(let e=0;e<n.vertexCount;e++)l.set(n.positions.subarray(e*3,e*3+3),e*9),l.set(n.normals.subarray(e*3,e*3+3),e*9+3),l.set(n.edges.subarray(e*3,e*3+3),e*9+6);e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,l,e.STATIC_DRAW);let u=(n,r,i)=>{let a=t.attrib(n);a<0||(e.enableVertexAttribArray(a),e.vertexAttribPointer(a,r,e.FLOAT,!1,36,i))};u(`aPos`,3,0),u(`aNormal`,3,12),u(`aEdge`,3,24),e.bindBuffer(e.ARRAY_BUFFER,c),e.bufferData(e.ARRAY_BUFFER,this.data.byteLength,e.DYNAMIC_DRAW);let d=0;for(let n of r){let r=t.attrib(n.name);r>=0&&(e.enableVertexAttribArray(r),e.vertexAttribPointer(r,n.size,e.FLOAT,!1,this.stride,d),e.vertexAttribDivisor(r,1)),d+=n.size*4}e.bindVertexArray(null)}offsetOf(e){return e*this.floatsPerInstance}hasRoom(){return this.count<this.capacity}upload(){if(this.count===0)return;let{gl:e}=this;e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.data,0,this.count*this.floatsPerInstance)}draw(e=this.gl.TRIANGLES){if(this.count===0)return;let{gl:t}=this;t.bindVertexArray(this.vao),t.drawArraysInstanced(e,0,this.vertexCount,this.count),t.bindVertexArray(null)}dispose(){let{gl:e}=this;e.deleteVertexArray(this.vao),e.deleteBuffer(this.geometryBuffer),e.deleteBuffer(this.instanceBuffer)}get layoutSpec(){return this.layout}},Lt=class{gl;capacity;vao;buffer;data;floatsPerVertex;count=0;constructor(e,t,n,r){this.gl=e,this.capacity=r,this.floatsPerVertex=n.reduce((e,t)=>e+t.size,0),this.data=new Float32Array(r*this.floatsPerVertex);let i=e.createVertexArray(),a=e.createBuffer();if(!i||!a)throw Error(`не удалось создать буферы WebGL`);this.vao=i,this.buffer=a,e.bindVertexArray(i),e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,this.data.byteLength,e.DYNAMIC_DRAW);let o=0,s=this.floatsPerVertex*4;for(let r of n){let n=t.attrib(r.name);n>=0&&(e.enableVertexAttribArray(n),e.vertexAttribPointer(n,r.size,e.FLOAT,!1,s,o)),o+=r.size*4}e.bindVertexArray(null)}upload(){if(this.count===0)return;let{gl:e}=this;e.bindBuffer(e.ARRAY_BUFFER,this.buffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.data,0,this.count*this.floatsPerVertex)}draw(){if(this.count===0)return;let{gl:e}=this;e.bindVertexArray(this.vao),e.drawArrays(e.TRIANGLES,0,this.count),e.bindVertexArray(null)}dispose(){this.gl.deleteVertexArray(this.vao),this.gl.deleteBuffer(this.buffer)}},Rt={ruby:[1,.16,.26],verdant:[.22,1,.44],azure:[.22,.54,1],prism:[.55,.58,.78]},zt={mote:[.72,.8,.92],ember:[1,.3,.16],moss:[.38,1,.32],frost:[.32,.62,1],wraith:[.78,.42,1],bulwark:[.95,.74,.34],nova:[1,.45,.85]},Bt={mote:`octahedron`,ember:`tetrahedron`,moss:`cube`,frost:`icosahedron`,wraith:`octahedron`,bulwark:`cube`,nova:`icosahedron`},Vt={mote:[1,1,1],ember:[1,1.15,1],moss:[1,.85,1],frost:[1,1,1],wraith:[.7,2,.7],bulwark:[1.25,.8,1.25],nova:[1,1.1,1]};function Ht(e,t){return e!==`prism`||!t?Rt[e]:t.r+t.g+t.b<=0?Rt.prism:[.22+t.r*.78,.22+t.g*.78,.22+t.b*.78]}var Ut=[.35,.72,1],Wt=[.45,.85,1],Gt=[.2,.22,.32];function Kt(e){return .62+e*.1}function qt(e,t,n){return((M[e].relay?.35:.75)+(t-1)*.22)*(n?1:.35)}var Jt=-3.4,Yt=.86,Xt=class{capacity;pool=[];rng;constructor(e=600,t=12648430){this.capacity=e,this.rng=Be(t)}get count(){return this.pool.length}clear(){this.pool.length=0}burst(e,t,n,r,i){let{count:a,speed:o,lift:s=.5,size:c=.16,life:l=.8,spread:u=1}=i;for(let i=0;i<a;i++){this.pool.length>=this.capacity&&this.pool.shift();let i=z(this.rng,0,Math.PI*2),a=z(this.rng,-.4,1.1)*u,d=o*z(this.rng,.45,1.25),f=l*z(this.rng,.7,1.3);this.pool.push({x:e,y:t,z:n,vx:Math.cos(i)*Math.cos(a)*d,vy:(Math.sin(a)+s)*d,vz:Math.sin(i)*Math.cos(a)*d,r:r[0],g:r[1],b:r[2],size:c*z(this.rng,.6,1.5),life:f,maxLife:f})}}update(e){let t=Yt**(e*60);for(let n=this.pool.length-1;n>=0;n--){let r=this.pool[n];if(r.life-=e,r.life<=0){this.pool[n]=this.pool[this.pool.length-1],this.pool.pop();continue}r.vy+=Jt*e,r.vx*=t,r.vz*=t,r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.y<.02&&(r.y=.02,r.vy=Math.abs(r.vy)*.28)}}writeInto(e,t){let n=Math.min(this.pool.length,t);for(let t=0;t<n;t++){let n=this.pool[t],r=t*8;e[r]=n.x,e[r+1]=n.y,e[r+2]=n.z,e[r+3]=n.r,e[r+4]=n.g,e[r+5]=n.b,e[r+6]=n.size,e[r+7]=Math.max(0,n.life/n.maxLife)}return n}},Zt=class extends Error{stage;log;source;constructor(e,t,n){super(`${e} shader failed: ${t}`),this.stage=e,this.log=t,this.source=n,this.name=`ShaderCompileError`}};function Qt(e,t,n,r){let i=e.createShader(t);if(!i)throw new Zt(r,`createShader returned null`);if(e.shaderSource(i,n),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(i)??`unknown error`;throw e.deleteShader(i),new Zt(r,t,n)}return i}var U=class{gl;label;program;uniforms=new Map;attribs=new Map;constructor(e,t,n,r=`program`){this.gl=e,this.label=r;let i=Qt(e,e.VERTEX_SHADER,t,`vertex`),a=Qt(e,e.FRAGMENT_SHADER,n,`fragment`),o=e.createProgram();if(!o)throw new Zt(`link`,`createProgram returned null`);if(e.attachShader(o,i),e.attachShader(o,a),e.linkProgram(o),e.deleteShader(i),e.deleteShader(a),!e.getProgramParameter(o,e.LINK_STATUS)){let t=e.getProgramInfoLog(o)??`unknown error`;throw e.deleteProgram(o),new Zt(`link`,`${r}: ${t}`)}this.program=o;let s=e.getProgramParameter(o,e.ACTIVE_UNIFORMS);for(let t=0;t<s;t++){let n=e.getActiveUniform(o,t);if(!n)continue;let r=n.name.replace(/\[0\]$/,``);this.uniforms.set(r,e.getUniformLocation(o,n.name))}let c=e.getProgramParameter(o,e.ACTIVE_ATTRIBUTES);for(let t=0;t<c;t++){let n=e.getActiveAttrib(o,t);n&&this.attribs.set(n.name,e.getAttribLocation(o,n.name))}}use(){this.gl.useProgram(this.program)}loc(e){return this.uniforms.get(e)??null}attrib(e){return this.attribs.get(e)??-1}uniform1f(e,t){let n=this.loc(e);n&&this.gl.uniform1f(n,t)}uniform1i(e,t){let n=this.loc(e);n&&this.gl.uniform1i(n,t)}uniform2f(e,t,n){let r=this.loc(e);r&&this.gl.uniform2f(r,t,n)}uniform3f(e,t,n,r){let i=this.loc(e);i&&this.gl.uniform3f(i,t,n,r)}uniform4f(e,t,n,r,i){let a=this.loc(e);a&&this.gl.uniform4f(a,t,n,r,i)}uniformMatrix4fv(e,t){let n=this.loc(e);n&&this.gl.uniformMatrix4fv(n,!1,t)}dispose(){this.gl.deleteProgram(this.program)}},W=`precision highp float;
precision highp int;
`,G=`
float hash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash12(i);
  float b = hash12(i + vec2(1.0, 0.0));
  float c = hash12(i + vec2(0.0, 1.0));
  float d = hash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float sum = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i++) {
    sum += valueNoise(p) * amp;
    p = p * 2.03 + vec2(17.3, 9.1);
    amp *= 0.5;
  }
  return sum;
}
`,$t=`
mat3 rotateY(float a) {
  float s = sin(a);
  float c = cos(a);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}
`,en=`
vec3 tonemapACES(vec3 x) {
  const float a = 2.51;
  const float b = 0.03;
  const float c = 2.43;
  const float d = 0.59;
  const float e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}

vec3 toSrgb(vec3 linearColor) {
  return pow(max(linearColor, vec3(0.0)), vec3(1.0 / 2.2));
}
`,tn=`#version 300 es
${W}
out vec2 vUv;
void main() {
  vec2 pos = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = pos;
  gl_Position = vec4(pos * 2.0 - 1.0, 0.0, 1.0);
}
`,nn=`#version 300 es
${W}
out vec2 vUv;
void main() {
  vec2 pos = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = pos;
  gl_Position = vec4(pos * 2.0 - 1.0, 0.0, 1.0);
}
`,rn=`#version 300 es
${W}
${G}
${en}

in vec2 vUv;
out vec4 fragColor;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uCamera;   // yaw, pitch — parallaxes the stars with the view
uniform vec3 uTint;     // shifts with the dominant lattice colour

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / max(uResolution.y, 1.0);

  // Vertical gradient: lighter towards the horizon, near-black overhead.
  float horizon = pow(1.0 - uv.y, 1.6);
  vec3 col = mix(vec3(0.012, 0.014, 0.035), vec3(0.055, 0.048, 0.115), horizon);
  col += vec3(0.10, 0.05, 0.16) * pow(horizon, 3.0);

  // Slow nebula, dragged by the camera yaw so it does not feel painted on.
  vec2 nebulaUv = vec2(uv.x * aspect * 1.4 + uCamera.x * 0.35, uv.y * 1.4 - uCamera.y * 0.25);
  float neb = fbm(nebulaUv * 1.6 + vec2(uTime * 0.008, uTime * 0.004));
  neb = smoothstep(0.42, 0.95, neb) * horizon;
  col += mix(vec3(0.06, 0.02, 0.14), uTint * 0.5, 0.55) * neb * 0.85;

  // Stars, on a grid so each cell holds at most one and they never clump.
  vec2 starUv = vec2(uv.x * aspect + uCamera.x * 0.5, uv.y - uCamera.y * 0.4) * 70.0;
  vec2 cell = floor(starUv);
  vec2 local = fract(starUv) - 0.5;
  vec2 jitter = hash22(cell) - 0.5;
  float brightness = hash12(cell + 7.0);
  if (brightness > 0.86) {
    float d = length(local - jitter * 0.7);
    float twinkle = 0.65 + 0.35 * sin(uTime * 1.7 + brightness * 40.0);
    float star = smoothstep(0.09, 0.0, d) * (brightness - 0.86) * 7.0 * twinkle;
    col += vec3(0.75, 0.82, 1.0) * star * (0.35 + horizon * 0.8);
  }

  fragColor = vec4(col, 1.0);
}
`,an=`#version 300 es
${W}

in vec3 aPos;
in vec3 aNormal;

uniform mat4 uViewProj;

out vec3 vWorld;
out vec3 vNormal;

void main() {
  vWorld = aPos;
  vNormal = aNormal;
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,on=`#version 300 es
${W}
${G}

in vec3 vWorld;
in vec3 vNormal;
out vec4 fragColor;

uniform float uTime;
uniform vec2 uBoard;          // board size in tiles
uniform vec3 uEye;
uniform sampler2D uPathField; // r: normalised distance to the path
uniform sampler2D uBuildMask; // r: 1 where a tower may be placed
uniform float uPathFieldRange;

uniform vec3 uCursor;         // xy: hovered tile, z: 1 valid / 0 invalid / -1 none
uniform vec4 uRange;          // xy: centre, z: radius, w: enabled
uniform vec3 uAccent;

float pathDistance(vec2 world) {
  vec2 uv = world / uBoard;
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return uPathFieldRange;
  return texture(uPathField, uv).r * uPathFieldRange;
}

void main() {
  vec2 world = vWorld.xz;
  vec2 tile = floor(world);
  vec2 inTile = fract(world);

  bool onBoard = world.x > 0.0 && world.y > 0.0 && world.x < uBoard.x && world.y < uBoard.y;
  float buildable = 0.0;
  if (onBoard) {
    buildable = texture(uBuildMask, (tile + 0.5) / uBoard).r;
  }

  // --- base rock ---------------------------------------------------------
  float grain = fbm(world * 2.6) * 0.5 + fbm(world * 11.0) * 0.18;
  vec3 col = mix(vec3(0.030, 0.034, 0.055), vec3(0.055, 0.060, 0.090), grain);

  // --- tile grid ---------------------------------------------------------
  vec2 gridDist = min(inTile, 1.0 - inTile);
  float line = 1.0 - smoothstep(0.0, 0.035, min(gridDist.x, gridDist.y));
  vec3 gridCol = mix(vec3(0.10, 0.12, 0.18), uAccent * 0.55, buildable);
  col += gridCol * line * (0.35 + buildable * 0.75);

  // Buildable tiles get a faint inner glow so free space reads at a glance.
  col += uAccent * 0.045 * buildable * (0.6 + 0.4 * sin(uTime * 0.8 + tile.x * 0.7 + tile.y * 1.1));

  // --- the creep path ----------------------------------------------------
  float d = pathDistance(world);
  float channel = 1.0 - smoothstep(0.55, 0.92, d);
  if (channel > 0.001) {
    // Carved floor, darker than the rock around it.
    vec3 floorCol = vec3(0.020, 0.024, 0.042);
    col = mix(col, floorCol, channel);

    // Energy flowing towards the core, with a ripple across the channel.
    float flow = fract(world.x * 0.26 + world.y * 0.21 - uTime * 0.42);
    float pulse = smoothstep(0.62, 1.0, flow) * smoothstep(0.55, 0.0, d);
    col += vec3(0.20, 0.42, 0.78) * pulse * 0.55 * channel;

    // Hot rim where the channel meets the rock.
    float rim = smoothstep(0.92, 0.62, d) * smoothstep(0.42, 0.72, d);
    col += vec3(0.30, 0.58, 1.0) * rim * 1.15;
  }

  // --- build cursor ------------------------------------------------------
  if (uCursor.z >= 0.0) {
    vec2 toCursor = abs(world - (uCursor.xy + 0.5));
    float inside = max(toCursor.x, toCursor.y);
    float border = smoothstep(0.5, 0.46, inside) * smoothstep(0.36, 0.42, inside);
    float fill = smoothstep(0.5, 0.47, inside);
    vec3 cursorCol = mix(vec3(1.0, 0.25, 0.30), vec3(0.35, 1.0, 0.70), uCursor.z);
    float beat = 0.7 + 0.3 * sin(uTime * 5.0);
    col += cursorCol * (border * 2.4 * beat + fill * 0.10);
  }

  // --- range ring --------------------------------------------------------
  if (uRange.w > 0.5) {
    float r = length(world - uRange.xy);
    float ring = smoothstep(0.07, 0.0, abs(r - uRange.z));
    float disc = smoothstep(uRange.z, uRange.z - 0.4, r) * 0.05;
    col += uAccent * (ring * 0.9 + disc);
  }

  // --- lighting and edge falloff ----------------------------------------
  vec3 lightDir = normalize(vec3(0.35, 0.9, 0.25));
  float diffuse = max(dot(normalize(vNormal), lightDir), 0.0);
  col *= 0.55 + 0.45 * diffuse;

  // The board is an island: fade it into the void instead of ending on a hard line.
  vec2 edge = min(world, uBoard - world);
  float fade = smoothstep(-2.6, 0.35, min(edge.x, edge.y));
  col *= fade;

  // Cheap view-dependent sheen so the rock is not perfectly matte.
  vec3 viewDir = normalize(uEye - vWorld);
  float fres = pow(1.0 - max(dot(viewDir, normalize(vNormal)), 0.0), 4.0);
  col += uAccent * fres * 0.06 * fade;

  if (fade <= 0.002) discard;
  fragColor = vec4(col, 1.0);
}
`,sn=`#version 300 es
${W}
${$t}

in vec3 aPos;
in vec3 aNormal;
in vec3 aEdge;

in vec3 iOffset;
in vec3 iScale;
in vec3 iColor;
in vec4 iParams;   // x: glow, y: spin, z: flash, w: phase

uniform mat4 uViewProj;
uniform float uTime;

out vec3 vWorld;
out vec3 vNormal;
out vec3 vEdge;
out vec3 vColor;
out vec4 vParams;

void main() {
  mat3 spin = rotateY(iParams.y);
  vec3 local = spin * (aPos * iScale);
  // A slow bob keyed off the per-instance phase keeps identical models from
  // moving in lockstep with each other.
  float bob = sin(uTime * 1.6 + iParams.w) * 0.035 * iScale.y;
  vec3 world = local + iOffset + vec3(0.0, bob, 0.0);

  vWorld = world;
  vNormal = normalize(spin * (aNormal / max(iScale, vec3(1e-4))));
  vEdge = aEdge;
  vColor = iColor;
  vParams = iParams;

  gl_Position = uViewProj * vec4(world, 1.0);
}
`,cn=`#version 300 es
${W}
${G}

in vec3 vWorld;
in vec3 vNormal;
in vec3 vEdge;
in vec3 vColor;
in vec4 vParams;
out vec4 fragColor;

uniform vec3 uEye;
uniform float uTime;

void main() {
  vec3 n = normalize(vNormal);
  vec3 viewDir = normalize(uEye - vWorld);

  // Two lights: a cool key from above and a warm bounce from the board.
  vec3 keyDir = normalize(vec3(0.4, 0.86, 0.3));
  vec3 fillDir = normalize(vec3(-0.5, -0.2, -0.7));
  float key = max(dot(n, keyDir), 0.0);
  float fill = max(dot(n, fillDir), 0.0);

  vec3 base = vColor * 0.16 + vec3(0.02, 0.025, 0.04);
  vec3 col = base * (0.30 + key * 0.95) + vColor * fill * 0.22;

  // Specular glint off the facets.
  vec3 halfDir = normalize(keyDir + viewDir);
  col += vec3(0.7, 0.8, 1.0) * pow(max(dot(n, halfDir), 0.0), 48.0) * 0.5;

  // Fresnel rim, tinted by the object's own light.
  float fres = pow(1.0 - max(dot(n, viewDir), 0.0), 3.0);
  col += vColor * fres * (0.55 + vParams.x * 0.9);

  // Emissive body. This is what pushes into the bloom threshold.
  float breathe = 0.82 + 0.18 * sin(uTime * 2.2 + vParams.w);
  col += vColor * vParams.x * breathe;

  // Facet wireframe: distance to the nearest triangle edge.
  float edge = min(min(vEdge.x, vEdge.y), vEdge.z);
  float wire = 1.0 - smoothstep(0.0, 0.10, edge);
  col += mix(vColor, vec3(1.0), 0.45) * wire * (0.30 + vParams.x * 0.8);

  // Hit flash — blows the whole model out to white for a few frames.
  col = mix(col, vec3(2.2, 2.2, 2.4), clamp(vParams.z, 0.0, 1.0) * 0.75);

  // Break up large flat facets so they do not band.
  col += (hash12(gl_FragCoord.xy + uTime) - 0.5) * 0.012;

  fragColor = vec4(col, 1.0);
}
`,ln=`#version 300 es
${W}

in vec3 aPos;      // unit quad: x spans the segment, y spans its width

in vec3 iFrom;
in vec3 iTo;
in vec3 iColor;
in vec4 iParams;   // x: half width, y: intensity, z: flow speed, w: ghost flag

uniform mat4 uViewProj;
uniform vec3 uEye;

out vec2 vUv;
out vec3 vColor;
out vec4 vParams;
out float vLength;

void main() {
  float u = aPos.x * 0.5 + 0.5;
  vec3 mid = mix(iFrom, iTo, 0.5);
  vec3 delta = iTo - iFrom;
  float segLength = length(delta);
  vec3 dir = segLength > 1e-5 ? delta / segLength : vec3(1.0, 0.0, 0.0);

  vec3 toEye = normalize(uEye - mid);
  vec3 side = cross(dir, toEye);
  float sideLen = length(side);
  // Looking straight down the beam leaves no stable side vector; pick any.
  side = sideLen > 1e-4 ? side / sideLen : normalize(cross(dir, vec3(0.0, 1.0, 0.0)) + vec3(1e-3));

  vec3 world = mix(iFrom, iTo, u) + side * (aPos.y * iParams.x);

  vUv = vec2(u, aPos.y);
  vColor = iColor;
  vParams = iParams;
  vLength = segLength;

  gl_Position = uViewProj * vec4(world, 1.0);
}
`,un=`#version 300 es
${W}
${G}

in vec2 vUv;
in vec3 vColor;
in vec4 vParams;
in float vLength;
out vec4 fragColor;

uniform float uTime;

void main() {
  float across = abs(vUv.y);

  // Core plus halo: a tight hot line inside a soft glow.
  float core = exp(-across * across * 42.0);
  float halo = exp(-across * across * 5.0) * 0.42;
  float profile = core + halo;

  // Energy packets running along the beam.
  float travel = vUv.x * vLength * 0.55 - uTime * vParams.z;
  float packets = smoothstep(0.55, 1.0, fract(travel)) * core;

  // Flicker, so a live beam never looks like a static decal.
  float flicker = 0.88 + 0.12 * valueNoise(vec2(vUv.x * 9.0, uTime * 2.4));

  // Taper the ends into the tower bodies rather than stopping flat.
  float caps = smoothstep(0.0, 0.06, vUv.x) * smoothstep(1.0, 0.94, vUv.x);

  vec3 col = vColor * profile * vParams.y * flicker;
  col += mix(vColor, vec3(1.0), 0.6) * packets * vParams.y * 0.85;
  col *= caps;

  if (vParams.w > 0.5) {
    // Ghost preview of a link that placing the held tower would create.
    col *= 0.38;
    col *= 0.45 + 0.55 * step(0.5, fract(vUv.x * vLength * 0.8 - uTime * 1.2));
  }

  float alpha = clamp(profile * caps, 0.0, 1.0);
  if (alpha < 0.004) discard;
  fragColor = vec4(col, alpha);
}
`,dn=`#version 300 es
${W}

in vec3 aPos;
in vec3 aBary;
in vec2 aMeta;   // x: intensity, y: per-field phase

uniform mat4 uViewProj;

out vec3 vBary;
out vec2 vMeta;
out vec3 vWorld;

void main() {
  vBary = aBary;
  vMeta = aMeta;
  vWorld = aPos;
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,fn=`#version 300 es
${W}
${G}

in vec3 vBary;
in vec2 vMeta;
in vec3 vWorld;
out vec4 fragColor;

uniform float uTime;

void main() {
  float edge = min(min(vBary.x, vBary.y), vBary.z);

  // Bright border over a washed interior — a pane of light, not a solid slab.
  // This is the payoff for building a full-spectrum triangle, so it has to be
  // unmistakable at a glance on a phone.
  // A bright rim over a lit fill. The rim is what catches the eye at a glance;
  // the fill is what says the whole triangle is dangerous to walk through.
  float border = 1.0 - smoothstep(0.0, 0.05, edge);
  float interior = smoothstep(0.0, 0.25, edge) * 0.5;

  // Interference fringes crawling across the pane.
  float fringe = sin((vWorld.x + vWorld.z) * 5.5 - uTime * 2.1 + vMeta.y) * 0.5 + 0.5;
  fringe = pow(fringe, 3.0) * 0.20 * smoothstep(0.0, 0.2, edge);

  float shimmer = 0.85 + 0.15 * valueNoise(vWorld.xz * 3.0 + uTime * 0.6);

  // A slow breath keeps a live field distinct from the static beams around it.
  float breathe = 0.86 + 0.14 * sin(uTime * 1.9 + vMeta.y);

  vec3 col = vec3(1.0, 0.98, 0.95) * (border * 2.0 + interior + fringe) * vMeta.x * shimmer * breathe;
  float alpha = clamp(border * 0.95 + interior + fringe, 0.0, 1.0);
  if (alpha < 0.004) discard;
  fragColor = vec4(col, alpha);
}
`,pn=`#version 300 es
${W}

in vec3 aPos;      // unit quad in XY

in vec3 iPos;
in vec3 iColor;
in vec2 iParams;   // x: size, y: remaining life in 0..1

uniform mat4 uViewProj;
uniform vec3 uRight;
uniform vec3 uUp;

out vec2 vUv;
out vec3 vColor;
out float vLife;

void main() {
  float size = iParams.x * (0.35 + 0.65 * iParams.y);
  vec3 world = iPos + uRight * (aPos.x * size) + uUp * (aPos.y * size);
  vUv = aPos.xy;
  vColor = iColor;
  vLife = iParams.y;
  gl_Position = uViewProj * vec4(world, 1.0);
}
`,mn=`#version 300 es
${W}

in vec2 vUv;
in vec3 vColor;
in float vLife;
out vec4 fragColor;

void main() {
  float d = length(vUv);
  if (d > 1.0) discard;
  float falloff = pow(1.0 - d, 2.2);
  float core = exp(-d * d * 9.0);
  vec3 col = (vColor * falloff + mix(vColor, vec3(1.0), 0.7) * core) * vLife * 2.0;
  fragColor = vec4(col, clamp(falloff * vLife, 0.0, 1.0));
}
`,hn=tn,gn=`#version 300 es
${W}

in vec2 vUv;
out vec4 fragColor;

uniform sampler2D uScene;
uniform float uThreshold;
uniform float uSoftKnee;

void main() {
  vec3 c = texture(uScene, vUv).rgb;
  float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
  // Soft knee, so a highlight ramps into the bloom instead of popping in.
  float knee = uThreshold * uSoftKnee + 1e-5;
  float soft = clamp(luma - uThreshold + knee, 0.0, 2.0 * knee);
  soft = soft * soft / (4.0 * knee);
  float contribution = max(soft, luma - uThreshold) / max(luma, 1e-5);
  fragColor = vec4(c * contribution, 1.0);
}
`,_n=`#version 300 es
${W}

in vec2 vUv;
out vec4 fragColor;

uniform sampler2D uSource;
uniform vec2 uDirection;   // texel-sized step along one axis

const float W0 = 0.2270270270;
const float W1 = 0.3162162162;
const float W2 = 0.0702702703;

void main() {
  // Linear-sampled Gaussian: 5 taps buy the quality of 9.
  vec2 off1 = uDirection * 1.3846153846;
  vec2 off2 = uDirection * 3.2307692308;
  vec3 sum = texture(uSource, vUv).rgb * W0;
  sum += texture(uSource, vUv + off1).rgb * W1;
  sum += texture(uSource, vUv - off1).rgb * W1;
  sum += texture(uSource, vUv + off2).rgb * W2;
  sum += texture(uSource, vUv - off2).rgb * W2;
  fragColor = vec4(sum, 1.0);
}
`,vn=`#version 300 es
${W}
${G}
${en}

in vec2 vUv;
out vec4 fragColor;

uniform sampler2D uScene;
uniform sampler2D uBloom;
uniform sampler2D uBloomWide;
uniform float uBloomStrength;
uniform float uTime;
uniform float uAberration;
uniform float uVignette;
uniform float uGrain;
uniform float uFlash;      // screen-wide hit, e.g. a leak reaching the core
uniform vec3 uFlashColor;

/*
 * Aberration is measured in UV space, where the whole screen is 1.0. At the
 * corner the fromCentre * r2 term reaches about 0.25, so the offset has to be
 * scaled right down: this puts the maximum shift near one and a half pixels,
 * which reads as lens colour rather than as a broken render.
 */
const float ABERRATION_SCALE = 0.03;

void main() {
  vec2 uv = vUv;
  vec2 fromCentre = uv - 0.5;
  float r2 = dot(fromCentre, fromCentre);

  // Chromatic aberration grows towards the edges only.
  vec2 shift = fromCentre * r2 * uAberration * ABERRATION_SCALE;
  vec3 scene;
  scene.r = texture(uScene, uv + shift).r;
  scene.g = texture(uScene, uv).g;
  scene.b = texture(uScene, uv - shift).b;

  vec3 bloom = texture(uBloom, uv).rgb + texture(uBloomWide, uv).rgb * 0.7;
  vec3 col = scene + bloom * uBloomStrength;

  col += uFlashColor * uFlash;

  col = tonemapACES(col * 1.05);
  col = toSrgb(col);

  float vig = 1.0 - smoothstep(0.18, 0.78, r2) * uVignette;
  col *= vig;

  // Grain last, after gamma, so it reads as sensor noise.
  col += (hash12(gl_FragCoord.xy + fract(uTime) * 512.0) - 0.5) * uGrain;

  fragColor = vec4(col, 1.0);
}
`;function K(e,t,n,r,i){let a=e.createTexture(),o=e.createFramebuffer();if(!a||!o)throw Error(`не удалось создать кадровый буфер`);e.bindTexture(e.TEXTURE_2D,a);let s=r?e.RGBA16F:e.RGBA8,c=r?e.HALF_FLOAT:e.UNSIGNED_BYTE;e.texImage2D(e.TEXTURE_2D,0,s,t,n,0,e.RGBA,c,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,a,0);let l;if(i){let r=e.createRenderbuffer();if(!r)throw Error(`не удалось создать буфер глубины`);e.bindRenderbuffer(e.RENDERBUFFER,r),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,t,n),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,r),l=r}return e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null),{fbo:o,texture:a,width:t,height:n,depth:l}}var yn={threshold:.85,softKnee:.6,strength:.95,aberration:.5,vignette:.55,grain:.035},bn=class{gl;halfFloat;scene;bright;blurA;blurB;wideA;wideB;brightProgram;blurProgram;compositeProgram;emptyVao;width=0;height=0;settings={...yn};flash=0;flashColor=[1,.3,.35];constructor(e,t,n,r){this.gl=e,this.halfFloat=t,this.brightProgram=new U(e,hn,gn,`bright`),this.blurProgram=new U(e,hn,_n,`blur`),this.compositeProgram=new U(e,hn,vn,`composite`);let i=e.createVertexArray();if(!i)throw Error(`не удалось создать VAO`);this.emptyVao=i,this.resize(n,r)}resize(e,t){let n=Math.max(2,e),r=Math.max(2,t);if(n===this.width&&r===this.height)return;this.dispose(!1),this.width=n,this.height=r;let i={w:Math.max(2,n>>1),h:Math.max(2,r>>1)},a={w:Math.max(2,n>>2),h:Math.max(2,r>>2)};this.scene=K(this.gl,n,r,this.halfFloat,!0),this.bright=K(this.gl,i.w,i.h,this.halfFloat,!1),this.blurA=K(this.gl,i.w,i.h,this.halfFloat,!1),this.blurB=K(this.gl,i.w,i.h,this.halfFloat,!1),this.wideA=K(this.gl,a.w,a.h,this.halfFloat,!1),this.wideB=K(this.gl,a.w,a.h,this.halfFloat,!1)}beginScene(){let{gl:e}=this;e.bindFramebuffer(e.FRAMEBUFFER,this.scene.fbo),e.viewport(0,0,this.scene.width,this.scene.height)}blit(e,t){let{gl:n}=this;n.bindFramebuffer(n.FRAMEBUFFER,e?e.fbo:null),n.viewport(0,0,e?e.width:this.width,e?e.height:this.height),t.use(),n.bindVertexArray(this.emptyVao),n.drawArrays(n.TRIANGLES,0,3),n.bindVertexArray(null)}bind(e,t){let{gl:n}=this;n.activeTexture(n.TEXTURE0+e),n.bindTexture(n.TEXTURE_2D,t)}blurInto(e,t,n){this.blurProgram.use(),this.bind(0,e.texture),this.blurProgram.uniform1i(`uSource`,0),this.blurProgram.uniform2f(`uDirection`,1/e.width,0),this.blit(t,this.blurProgram),this.bind(0,t.texture),this.blurProgram.uniform1i(`uSource`,0),this.blurProgram.uniform2f(`uDirection`,0,1/t.height),this.blit(n,this.blurProgram)}present(e){let{gl:t}=this;t.disable(t.DEPTH_TEST),t.disable(t.BLEND),this.brightProgram.use(),this.bind(0,this.scene.texture),this.brightProgram.uniform1i(`uScene`,0),this.brightProgram.uniform1f(`uThreshold`,this.settings.threshold),this.brightProgram.uniform1f(`uSoftKnee`,this.settings.softKnee),this.blit(this.bright,this.brightProgram),this.blurInto(this.bright,this.blurB,this.blurA),this.blurInto(this.blurA,this.wideB,this.wideA),this.compositeProgram.use(),this.bind(0,this.scene.texture),this.bind(1,this.blurA.texture),this.bind(2,this.wideA.texture),this.compositeProgram.uniform1i(`uScene`,0),this.compositeProgram.uniform1i(`uBloom`,1),this.compositeProgram.uniform1i(`uBloomWide`,2),this.compositeProgram.uniform1f(`uBloomStrength`,this.settings.strength),this.compositeProgram.uniform1f(`uAberration`,this.settings.aberration),this.compositeProgram.uniform1f(`uVignette`,this.settings.vignette),this.compositeProgram.uniform1f(`uGrain`,this.settings.grain),this.compositeProgram.uniform1f(`uTime`,e),this.compositeProgram.uniform1f(`uFlash`,this.flash),this.compositeProgram.uniform3f(`uFlashColor`,this.flashColor[0],this.flashColor[1],this.flashColor[2]),this.blit(null,this.compositeProgram),this.bind(0,this.scene.texture)}dispose(e=!0){let{gl:t}=this;for(let e of[this.scene,this.bright,this.blurA,this.blurB,this.wideA,this.wideB]){if(!e)continue;t.deleteFramebuffer(e.fbo),t.deleteTexture(e.texture);let n=e.depth;n&&t.deleteRenderbuffer(n)}e&&(this.brightProgram.dispose(),this.blurProgram.dispose(),this.compositeProgram.dispose(),t.deleteVertexArray(this.emptyVao))}};function xn(e,t){let n=Math.max(2,Math.round(e.width*8)),r=Math.max(2,Math.round(e.height*8)),i=new Uint8Array(n*r);for(let a=0;a<r;a++){let o=(a+.5)/r*e.height;for(let r=0;r<n;r++){let s=(r+.5)/n*e.width,c=Math.min(Ee(t,l(s,o)),4);i[a*n+r]=Math.round(c/4*255)}}return{data:i,width:n,height:r}}function Sn(e,t){let n=Ae(e,t),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n[e]?255:0;return{data:r,width:e.width,height:e.height}}function Cn(e,t,n={}){let r=e.createTexture();if(!r)throw Error(`не удалось создать текстуру`);let i=n.smooth?e.LINEAR:e.NEAREST;return e.bindTexture(e.TEXTURE_2D,r),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.R8,t.width,t.height,0,e.RED,e.UNSIGNED_BYTE,t.data),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null),r}var wn={low:{resolutionScale:.68,bloom:!1,particles:140,grain:0,aberration:0},medium:{resolutionScale:.85,bloom:!0,particles:380,grain:.028,aberration:.35},high:{resolutionScale:1,bloom:!0,particles:700,grain:.035,aberration:.5}},q=[{name:`iOffset`,size:3},{name:`iScale`,size:3},{name:`iColor`,size:3},{name:`iParams`,size:4}],Tn=[{name:`iFrom`,size:3},{name:`iTo`,size:3},{name:`iColor`,size:3},{name:`iParams`,size:4}],En=[{name:`iPos`,size:3},{name:`iColor`,size:3},{name:`iParams`,size:2}],Dn=[{name:`aPos`,size:3},{name:`aBary`,size:3},{name:`aMeta`,size:2}],On=160,kn=220,An=520,jn=80,Mn=96,Nn=.95,Pn=class{camera=new vt;particles;gl;glctx;skyProgram;groundProgram;solidProgram;beamProgram;fieldProgram;particleProgram;post;emptyVao;towerMeshes;enemyMeshes;sceneryMesh;coreMesh;beamMesh;particleMesh;fieldMesh;groundMesh=null;pathFieldTex=null;buildMaskTex=null;mapId=``;board=l(1,1);quality=`high`;profile=wn.high;tint=[.3,.35,.8];lastTime=0;needsFraming=!1;constructor(e){this.glctx=e,this.gl=e.gl;let t=this.gl;this.skyProgram=new U(t,nn,rn,`sky`),this.groundProgram=new U(t,an,on,`ground`),this.solidProgram=new U(t,sn,cn,`solid`),this.beamProgram=new U(t,ln,un,`beam`),this.fieldProgram=new U(t,dn,fn,`field`),this.particleProgram=new U(t,pn,mn,`particle`);let n=t.createVertexArray();if(!n)throw Error(`не удалось создать VAO`);this.emptyVao=n,this.towerMeshes={emitter:new H(t,this.solidProgram,jt(6),q,On),prism:new H(t,this.solidProgram,Mt(3),q,On)},this.enemyMeshes={octahedron:new H(t,this.solidProgram,Dt(1),q,kn),tetrahedron:new H(t,this.solidProgram,Ot(1.15),q,kn),cube:new H(t,this.solidProgram,kt(1.4),q,kn),icosahedron:new H(t,this.solidProgram,At(1),q,kn)},this.sceneryMesh=new H(t,this.solidProgram,Nt(11),q,jn),this.coreMesh=new H(t,this.solidProgram,Mt(6,.8,1.4,-.4),q,8),this.beamMesh=new H(t,this.beamProgram,Pt(),Tn,An),this.particleMesh=new H(t,this.particleProgram,Pt(),En,wn.high.particles),this.fieldMesh=new Lt(t,this.fieldProgram,Dn,Mn),this.particles=new Xt(wn.high.particles),this.post=new bn(t,e.caps.halfFloatColor,e.canvas.width,e.canvas.height)}setQuality(e){this.quality=e,this.profile=wn[e],this.post.settings.strength=this.profile.bloom?.95:0,this.post.settings.grain=this.profile.grain,this.post.settings.aberration=this.profile.aberration}getQuality(){return this.quality}setMap(e){if(this.mapId===e.map.id)return;let t=this.gl;this.mapId=e.map.id,this.board=l(e.map.width,e.map.height),this.groundMesh?.dispose(),this.groundMesh=new H(t,this.groundProgram,Ft(e.map.width,e.map.height),[{name:`iOffset`,size:3}],1),this.groundMesh.count=1,this.groundMesh.data.fill(0),this.groundMesh.upload(),this.pathFieldTex&&t.deleteTexture(this.pathFieldTex),this.buildMaskTex&&t.deleteTexture(this.buildMaskTex),this.pathFieldTex=Cn(t,xn(e.map,e.path),{smooth:!0}),this.buildMaskTex=Cn(t,Sn(e.map,e.path),{smooth:!1}),this.camera.target=l(e.map.width/2,e.map.height/2),this.needsFraming=!0,this.particles.clear()}emit(e){switch(e.type){case`kill`:this.particles.burst(e.x,.35,e.y,[1,.95,.85],{count:Math.min(18,6+Math.floor(e.bounty/6)),speed:2.4,life:.6,size:.13});break;case`leak`:this.particles.burst(e.x,.4,e.y,[1,.25,.3],{count:26,speed:3.4,life:.9,size:.2}),this.post.flash=Math.min(.55,this.post.flash+.28*e.damage),this.post.flashColor=[1,.22,.28];break;case`build`:this.particles.burst(e.x,.2,e.y,[.6,.9,1],{count:22,speed:2,life:.7,size:.12,lift:1.2});break;case`upgrade`:this.particles.burst(e.x,.5,e.y,[1,.9,.6],{count:30,speed:2.6,life:.8,size:.14,lift:1.4});break;case`sell`:this.particles.burst(e.x,.3,e.y,[.6,.65,.8],{count:14,speed:1.8,life:.5,size:.1});break;case`waveClear`:this.post.flash=Math.min(.4,this.post.flash+.18),this.post.flashColor=[.35,.95,.8];break;case`won`:this.post.flash=.75,this.post.flashColor=[.8,1,.95];break;case`lost`:this.post.flash=.7,this.post.flashColor=[1,.2,.25]}}pick(e,t){return this.camera.screenToGround(e,t)}render(e){let t=this.gl,n=this.lastTime===0?1/60:Math.min(.1,e.time-this.lastTime);this.lastTime=e.time,Tt(this.glctx,this.profile.resolutionScale)&&this.post.resize(this.glctx.canvas.width,this.glctx.canvas.height);let r=this.glctx.canvas.width,i=this.glctx.canvas.height;this.particles.update(n),this.post.flash=Math.max(0,this.post.flash-n*1.6),this.updateTint(e.state,n);let a=r/Math.max(i,1);this.needsFraming&&=(this.camera.frame(this.board.x,this.board.y,a),!1),this.camera.clampTarget(this.board.x,this.board.y),this.camera.update(a);let o=this.camera.eye();this.post.beginScene(),t.viewport(0,0,r,i),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.disable(t.BLEND),t.enable(t.CULL_FACE),t.cullFace(t.BACK),t.disable(t.DEPTH_TEST),t.depthMask(!1),this.skyProgram.use(),this.skyProgram.uniform1f(`uTime`,e.time),this.skyProgram.uniform2f(`uResolution`,r,i),this.skyProgram.uniform2f(`uCamera`,this.camera.yaw,this.camera.pitch),this.skyProgram.uniform3f(`uTint`,this.tint[0],this.tint[1],this.tint[2]),t.bindVertexArray(this.emptyVao),t.drawArrays(t.TRIANGLES,0,3),t.bindVertexArray(null),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.depthMask(!0),this.drawGround(e,o),this.drawSolids(e,o),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE),t.depthMask(!1),t.disable(t.CULL_FACE),this.drawFields(e),this.drawBeams(e),this.drawParticles(),t.depthMask(!0),t.disable(t.BLEND),t.enable(t.CULL_FACE),this.post.present(e.time)}updateTint(e,t){let n=.12,r=.16,i=.42;for(let t of e.lattice.links)n+=t.spectrum.r*t.power,r+=t.spectrum.g*t.power,i+=t.spectrum.b*t.power;let a=Math.max(n+r+i,.001),o=[n/a,r/a,i/a],s=Math.min(1,t*1.5);for(let e=0;e<3;e++)this.tint[e]+=(o[e]-this.tint[e])*s}drawGround(e,t){let n=this.gl;if(!this.groundMesh||!this.pathFieldTex||!this.buildMaskTex)return;this.groundProgram.use(),this.groundProgram.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),this.groundProgram.uniform1f(`uTime`,e.time),this.groundProgram.uniform2f(`uBoard`,this.board.x,this.board.y),this.groundProgram.uniform3f(`uEye`,t.x,t.y,t.z),this.groundProgram.uniform1f(`uPathFieldRange`,4),this.groundProgram.uniform3f(`uAccent`,Ut[0],Ut[1],Ut[2]),e.hoverCell?this.groundProgram.uniform3f(`uCursor`,e.hoverCell.x,e.hoverCell.y,+!!e.hoverValid):this.groundProgram.uniform3f(`uCursor`,0,0,-1);let r=this.rangePreview(e);this.groundProgram.uniform4f(`uRange`,r.x,r.y,r.radius,+!!r.on),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.pathFieldTex),this.groundProgram.uniform1i(`uPathField`,0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,this.buildMaskTex),this.groundProgram.uniform1i(`uBuildMask`,1),this.groundMesh.draw()}rangePreview(e){let t=e.selectedTowerId?e.state.towers.find(t=>t.id===e.selectedTowerId):void 0;if(t){let e=M[t.kind],n=L(t.cell.x,t.cell.y),r=e.pulseRange>0?e.pulseRange*ce[t.level]:0;return{x:n.x,y:n.y,radius:r,on:r>0}}if(e.placing&&e.hoverCell){let t=M[e.placing];return{x:e.hoverCell.x+.5,y:e.hoverCell.y+.5,radius:t.pulseRange,on:t.pulseRange>0}}return{x:0,y:0,radius:0,on:!1}}drawSolids(e,t){let{state:n,ctx:r}=e;this.solidProgram.use(),this.solidProgram.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),this.solidProgram.uniform3f(`uEye`,t.x,t.y,t.z),this.solidProgram.uniform1f(`uTime`,e.time),this.sceneryMesh.count=0;for(let[e,t]of r.map.blocked){if(!this.sceneryMesh.hasRoom())break;let n=this.sceneryMesh.offsetOf(this.sceneryMesh.count++),r=this.sceneryMesh.data;r[n]=e+.5,r[n+1]=0,r[n+2]=t+.5,r[n+3]=r[n+4]=r[n+5]=.85,r[n+6]=Gt[0],r[n+7]=Gt[1],r[n+8]=Gt[2],r[n+9]=.12,r[n+10]=(e*7+t*13)%6.28,r[n+11]=0,r[n+12]=e*1.7+t}this.sceneryMesh.upload(),this.sceneryMesh.draw();let i=r.path.points[r.path.points.length-1],a=1-n.lives/Math.max(1,n.lives+n.leaked);this.coreMesh.count=1;{let t=this.coreMesh.data;t[0]=i.x,t[1]=.8,t[2]=i.y,t[3]=t[4]=t[5]=1.1,t[6]=Wt[0],t[7]=Wt[1]*(1-a*.6),t[8]=Wt[2]*(1-a*.4),t[9]=1.15,t[10]=e.time*.5,t[11]=0,t[12]=0}this.coreMesh.upload(),this.coreMesh.draw(),this.towerMeshes.emitter.count=0,this.towerMeshes.prism.count=0;for(let t of n.towers){let r=t.kind===`prism`?this.towerMeshes.prism:this.towerMeshes.emitter;if(!r.hasRoom())continue;let i=n.lattice.spectra[t.id],a=Ht(t.kind,i),o=!i||D(i)>0,s=Kt(t.level),c=e.selectedTowerId===t.id,l=r.offsetOf(r.count++),u=r.data;u[l]=t.cell.x+.5,u[l+1]=.02,u[l+2]=t.cell.y+.5,u[l+3]=u[l+5]=s,u[l+4]=s*(t.kind===`prism`?1.05:1),u[l+6]=a[0],u[l+7]=a[1],u[l+8]=a[2],u[l+9]=qt(t.kind,t.level,o)*(c?1.6:1),u[l+10]=t.kind===`prism`?e.time*.7+t.id:t.id*.9,u[l+11]=c?.18+.12*Math.sin(e.time*7):0,u[l+12]=t.id*1.7}this.towerMeshes.emitter.upload(),this.towerMeshes.emitter.draw(),this.towerMeshes.prism.upload(),this.towerMeshes.prism.draw();for(let e of Object.values(this.enemyMeshes))e.count=0;for(let t of n.enemies){let n=this.enemyMeshes[Bt[t.kind]];if(!n.hasRoom())continue;let i=ct(r,t,e.alpha),a=N[t.kind],o=Vt[t.kind],s=zt[t.kind],c=Math.max(0,t.hp/t.maxHp),l=a.size*(.78+.22*c),u=n.offsetOf(n.count++),d=n.data;d[u]=i.x,d[u+1]=a.size*1.35+.1,d[u+2]=i.y,d[u+3]=l*o[0],d[u+4]=l*o[1],d[u+5]=l*o[2],d[u+6]=s[0],d[u+7]=s[1],d[u+8]=s[2],d[u+9]=(t.whiteOnly?.95:.55)*(.45+.55*c),d[u+10]=e.time*(t.whiteOnly?2.4:1.1)+t.wobble,d[u+11]=t.flash,d[u+12]=t.wobble}for(let e of Object.values(this.enemyMeshes))e.upload(),e.draw()}drawFields(e){let t=this.fieldMesh;t.count=0;let n=t.data,r=[[1,0,0],[0,1,0],[0,0,1]];for(let i of e.state.lattice.fields){if(t.count+3>t.capacity)break;let e=Math.min(2.2,.75+i.power/42);for(let a=0;a<3;a++){let o=t.count*t.floatsPerVertex;n[o]=i.corners[a].x,n[o+1]=.055,n[o+2]=i.corners[a].y,n[o+3]=r[a][0],n[o+4]=r[a][1],n[o+5]=r[a][2],n[o+6]=e,n[o+7]=i.towers[0]*.7,t.count++}}t.count!==0&&(this.fieldProgram.use(),this.fieldProgram.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),this.fieldProgram.uniform1f(`uTime`,e.time),t.upload(),t.draw())}pushBeam(e,t,n,r,i,a,o,s,c){let l=this.beamMesh;if(!l.hasRoom())return;let u=l.offsetOf(l.count++),d=l.data;d[u]=e.x,d[u+1]=t,d[u+2]=e.y,d[u+3]=n.x,d[u+4]=r,d[u+5]=n.y,d[u+6]=i[0],d[u+7]=i[1],d[u+8]=i[2],d[u+9]=a,d[u+10]=o,d[u+11]=s,d[u+12]=+!!c}drawBeams(e){let t=this.beamMesh;t.count=0;for(let t of e.state.lattice.links){let e=O(t.spectrum),n=Math.min(2.6,.6+t.power/16);this.pushBeam(t.from,Nn,t.to,Nn,[t.spectrum.r,t.spectrum.g,t.spectrum.b],e?.105:.075,n,1.5+t.power*.02,!1)}for(let t of e.ghostLinks)this.pushBeam(t.from,Nn,t.to,Nn,[t.spectrum.r,t.spectrum.g,t.spectrum.b],.05,.9,2,!0);for(let t of e.state.enemies){let n=Math.max(0,Math.min(1,t.hp/t.maxHp));if(n>=.999)continue;let r=ct(e.ctx,t,e.alpha),i=N[t.kind],a=i.size*2.5+.35,o=.28*(i.size/.36),s=o*(n*2-1);this.pushBeam(l(r.x-o,r.y),a,l(r.x+s,r.y),a,n>.5?[.35,1,.5]:n>.22?[1,.85,.25]:[1,.3,.25],.035,1.4,0,!1)}if(t.count===0)return;let n=this.camera.eye();this.beamProgram.use(),this.beamProgram.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),this.beamProgram.uniform3f(`uEye`,n.x,n.y,n.z),this.beamProgram.uniform1f(`uTime`,e.time),t.upload(),t.draw(this.gl.TRIANGLES)}drawParticles(){let e=Math.min(this.profile.particles,this.particleMesh.capacity),t=this.particles.writeInto(this.particleMesh.data,e);if(this.particleMesh.count=t,t===0)return;let n=this.camera.view;this.particleProgram.use(),this.particleProgram.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),this.particleProgram.uniform3f(`uRight`,n[0],n[4],n[8]),this.particleProgram.uniform3f(`uUp`,n[1],n[5],n[9]),this.particleMesh.upload(),this.particleMesh.draw()}dispose(){let e=this.gl;this.groundMesh?.dispose();for(let e of Object.values(this.towerMeshes))e.dispose();for(let e of Object.values(this.enemyMeshes))e.dispose();this.sceneryMesh.dispose(),this.coreMesh.dispose(),this.beamMesh.dispose(),this.particleMesh.dispose(),this.fieldMesh.dispose(),this.pathFieldTex&&e.deleteTexture(this.pathFieldTex),this.buildMaskTex&&e.deleteTexture(this.buildMaskTex),e.deleteVertexArray(this.emptyVao),this.skyProgram.dispose(),this.groundProgram.dispose(),this.solidProgram.dispose(),this.beamProgram.dispose(),this.fieldProgram.dispose(),this.particleProgram.dispose(),this.post.dispose()}};function Fn(e,t,n){let r={id:-1,kind:n,cell:t,level:1,owner:0,builtAtTick:e.tick},i=[],a=L(t.x,t.y),o=M[n].spectrum;for(let t of e.towers){if(!Me(r,t))continue;let n=e.lattice.spectra[t.id]??M[t.kind].spectrum,s={r:Math.min(1,o.r+n.r),g:Math.min(1,o.g+n.g),b:Math.min(1,o.b+n.b)};D(s)!==0&&i.push({a:-1,b:t.id,from:a,to:L(t.cell.x,t.cell.y),spectrum:s,power:0})}return i}var In=class{inputDelay;owner;tick=0;remoteHorizon;solo=!1;pending=new Map;seq=0;constructor(e={}){this.inputDelay=Math.max(1,e.inputDelay??8),this.owner=e.owner??0,this.remoteHorizon=this.inputDelay}get localHorizon(){return this.tick+this.inputDelay}schedule(e){let t={t:`cmd`,tick:this.localHorizon,seq:this.seq++,owner:this.owner,cmd:e};return this.enqueue(t),t}receive(e){return e.tick<this.tick?!1:(this.enqueue(e),e.tick-this.inputDelay>this.remoteHorizon&&(this.remoteHorizon=e.tick-this.inputDelay),!0)}receiveHorizon(e){e>this.remoteHorizon&&(this.remoteHorizon=e)}enqueue(e){let t=this.pending.get(e.tick);t?t.push(e):this.pending.set(e.tick,[e])}canAdvance(){return this.solo||this.tick<=this.remoteHorizon}get slack(){return this.solo?1/0:this.remoteHorizon-this.tick}commandsForTick(){let e=this.pending.get(this.tick);return e?(e.sort((e,t)=>e.owner-t.owner||e.seq-t.seq),e.map(e=>e.cmd)):[]}advance(){this.pending.delete(this.tick),this.tick+=1}reset(e){this.pending.clear(),this.tick=e,this.remoteHorizon=e+this.inputDelay}get queuedCount(){let e=0;for(let t of this.pending.values())e+=t.length;return e}},Ln={tick:0,gold:0,lives:0,wave:0,totalWaves:0,status:`building`,kills:0,leaked:0,score:0,enemies:0,links:0,fields:0,latticePower:0,queued:0},Rn=6,zn=4,Bn=class{ctx=null;state=null;lockstep=new In({inputDelay:1,owner:0});hud={...Ln};active=!1;mode=`solo`;mapId=`ridge`;seed=1;selectedTowerId=null;placing=null;hoverCell=null;hoverValid=!1;hoverReason=null;speed=1;paused=!1;stalled=!1;onEvent;onLocalCommand;onFinished;accumulator=0;finished=!1;constructor(){n(this,{ctx:!1,state:!1,lockstep:!1,onEvent:!1,onLocalCommand:!1,onFinished:!1})}start(e,t,n=`solo`,r=0){let i=Ce(e);this.mapId=i.id,this.seed=t>>>0,this.mode=n,this.ctx=Ze(i.id),this.state=Qe(i.id,this.seed),this.active=!0,this.lockstep=new In({inputDelay:n===`solo`?1:8,owner:r}),this.lockstep.solo=n===`solo`,this.accumulator=0,this.finished=!1,this.stalled=!1,this.paused=!1,this.speed=1,this.selectedTowerId=null,this.placing=null,this.hoverCell=null,this.syncHud()}get running(){return this.active}get map(){return Ce(this.mapId)}get isOver(){return this.state?B(this.state):!1}get nextWavePreview(){return this.state?Xe(Math.min(this.state.wave+1,this.state.totalWaves),this.seed):[]}get selectedTower(){if(!this.state||this.selectedTowerId===null)return null;let e=this.state.towers.find(e=>e.id===this.selectedTowerId);if(!e)return null;let t=M[e.kind],n=ue(e.kind,e.level);return{tower:e,name:t.name,blurb:t.blurb,level:e.level,maxLevel:3,upgradeCost:n,sellValue:de(e.kind,e.level),canUpgrade:e.level<3&&this.hud.gold>=n}}get ghostLinks(){return!this.state||!this.placing||!this.hoverCell||!this.hoverValid?[]:Fn(this.state,this.hoverCell,this.placing)}canAfford(e){return this.hud.gold>=M[e].cost}choose(e){this.placing=this.placing===e?null:e,this.placing&&(this.selectedTowerId=null)}select(e){this.selectedTowerId=e,e!==null&&(this.placing=null)}towerAtCell(e,t){return this.state?.towers.find(n=>n.cell.x===e&&n.cell.y===t)}setHoverWorld(e){if(!e||!this.ctx||!this.state){this.hoverCell=null,this.hoverValid=!1,this.hoverReason=null;return}let t=Math.floor(e.x),n=Math.floor(e.y);this.hoverCell&&this.hoverCell.x===t&&this.hoverCell.y===n||(this.hoverCell=l(t,n),this.refreshHoverValidity())}refreshHoverValidity(){if(!this.hoverCell||!this.ctx||!this.state||!this.placing){this.hoverValid=!1,this.hoverReason=null;return}let{x:e,y:t}=this.hoverCell,n=ke(this.ctx.map,this.ctx.path,e,t,(e,t)=>!!this.towerAtCell(e,t));if(n){this.hoverValid=!1,this.hoverReason=n;return}let r=this.canAfford(this.placing);this.hoverValid=r,this.hoverReason=r?null:`no-gold`}tapWorld(e){if(!this.state||!this.ctx)return;let t=Math.floor(e.x),n=Math.floor(e.y),r=this.towerAtCell(t,n);if(this.placing){if(r){this.select(r.id);return}if(this.hoverCell=l(t,n),this.refreshHoverValidity(),!this.hoverValid)return;this.issue({type:`build`,kind:this.placing,cell:l(t,n),owner:this.lockstep.owner}),this.refreshHoverValidity();return}this.select(r?r.id:null)}issue(e){if(!this.state||this.isOver)return;let t=this.lockstep.schedule(e);this.onLocalCommand?.(t)}startWave(){this.issue({type:`startWave`,owner:this.lockstep.owner})}upgradeSelected(){this.selectedTowerId!==null&&this.issue({type:`upgrade`,towerId:this.selectedTowerId,owner:this.lockstep.owner})}sellSelected(){this.selectedTowerId!==null&&(this.issue({type:`sell`,towerId:this.selectedTowerId,owner:this.lockstep.owner}),this.selectedTowerId=null)}setSpeed(e){this.speed=e}cycleSpeed(){this.speed=this.speed===1?2:this.speed===2?3:1}togglePause(){this.paused=!this.paused}advance(e){let t=this.state,n=this.ctx;if(!t||!n)return 0;if(this.paused||B(t))return this.finish(t),this.accumulator/j;this.accumulator+=Math.min(e,.25)*this.speed;let i=0,a=!1,o=!1;for(;this.accumulator>=.016666666666666666&&i<Rn;){if(!this.lockstep.canAdvance()){o=!0;break}if(it(n,t,this.lockstep.commandsForTick()),t.events.length>0){a=!0;for(let e of t.events)this.onEvent?.(e)}this.lockstep.advance(),this.accumulator-=j,i+=1}return o!==this.stalled&&r(()=>void(this.stalled=o)),(a||t.tick%zn===0)&&this.syncHud(),B(t)&&this.finish(t),Math.min(1,this.accumulator/j)}finish(e){!this.finished&&B(e)&&(this.finished=!0,this.syncHud(),this.onFinished?.(e))}syncHud(){let e=this.state;if(!e){r(()=>void(this.hud={...Ln}));return}let t={tick:e.tick,gold:Math.floor(e.gold),lives:e.lives,wave:e.wave,totalWaves:e.totalWaves,status:e.status,kills:e.kills,leaked:e.leaked,score:Math.floor(e.score),enemies:e.enemies.length,links:e.lattice.links.length,fields:e.lattice.fields.length,latticePower:Math.round(e.lattice.totalPower),queued:e.queue.length},n=this.hud,i=!1;for(let e of Object.keys(t))if(n[e]!==t[e]){i=!0;break}i&&r(()=>{this.hud=t,this.placing&&this.refreshHoverValidity()})}adoptState(e){this.state=e,this.ctx=Ze(e.mapId),this.lockstep.reset(e.tick),this.accumulator=0,this.syncHud()}stop(){this.state=null,this.ctx=null,this.active=!1,this.selectedTowerId=null,this.placing=null,this.hoverCell=null,this.finished=!1,this.syncHud()}};function Vn(e){let t=2166136261,n=e=>{let n=e|0;t^=n&255,t=Math.imul(t,16777619),t^=n>>>8&255,t=Math.imul(t,16777619),t^=n>>>16&255,t=Math.imul(t,16777619),t^=n>>>24&255,t=Math.imul(t,16777619)};n(e.tick),n(e.gold),n(e.lives),n(e.wave),n(e.kills),n(e.leaked),n(e.rng.s),n(e.nextTowerId),n(e.nextEnemyId),n(e.towers.length),n(e.enemies.length),n(e.queue.length),n(e.status.charCodeAt(0));for(let t of e.towers)n(t.id),n(t.cell.x),n(t.cell.y),n(t.level),n(t.kind.charCodeAt(0));for(let t of e.enemies)n(t.id),n(Math.round(t.dist*1e3)),n(Math.round(t.hp*100)),n(Math.round(t.slowFor*100));return t>>>0}function Hn(e){return JSON.stringify({tick:e.tick,mapId:e.mapId,seed:e.seed,rng:e.rng.s,status:e.status,gold:e.gold,lives:e.lives,wave:e.wave,totalWaves:e.totalWaves,nextTowerId:e.nextTowerId,nextEnemyId:e.nextEnemyId,score:e.score,kills:e.kills,leaked:e.leaked,towers:e.towers.map(e=>[e.id,e.kind,e.cell.x,e.cell.y,e.level,e.owner,e.builtAtTick]),enemies:e.enemies.map(e=>[e.id,e.kind,e.dist,e.hp,e.maxHp,e.speed,e.resist.r,e.resist.g,e.resist.b,+!!e.whiteOnly,e.bounty,e.leak,e.slowFor,e.wobble]),queue:e.queue.map(e=>[e.atTick,e.kind,e.hpMul,e.speedMul])})}var Un=new Set([`building`,`wave`,`won`,`lost`]),Wn=class extends Error{constructor(e){super(e),this.name=`DeserializeError`}},J=(e,t=0)=>typeof e==`number`&&Number.isFinite(e)?e:t;function Gn(e){let t;try{t=JSON.parse(e)}catch{throw new Wn(`Снимок состояния повреждён`)}if(!t||typeof t!=`object`)throw new Wn(`Снимок состояния повреждён`);if(typeof t.mapId!=`string`)throw new Wn(`В снимке нет карты`);let n=t.status,r=Array.isArray(t.towers)?t.towers.map(e=>({id:J(e[0]),kind:e[1],cell:l(J(e[2]),J(e[3])),level:J(e[4],1),owner:J(e[5]),builtAtTick:J(e[6])})):[],i=Array.isArray(t.enemies)?t.enemies.map(e=>{let t=J(e[2]);return{id:J(e[0]),kind:e[1],dist:t,prevDist:t,hp:J(e[3]),maxHp:J(e[4],1),speed:J(e[5]),resist:{r:J(e[6]),g:J(e[7]),b:J(e[8])},whiteOnly:e[9]===1,bounty:J(e[10]),leak:J(e[11],1),slowFor:J(e[12]),flash:0,wobble:J(e[13])}}):[],a=Array.isArray(t.queue)?t.queue.map(e=>({atTick:J(e[0]),kind:e[1],hpMul:J(e[2],1),speedMul:J(e[3],1)})):[],o=Be(J(t.seed));return o.s=J(t.rng,o.s)>>>0,{tick:J(t.tick),mapId:t.mapId,seed:J(t.seed)>>>0,rng:o,status:Un.has(n)?n:`building`,gold:J(t.gold),lives:J(t.lives),wave:J(t.wave),totalWaves:J(t.totalWaves,20),towers:r,enemies:i,queue:a,nextTowerId:J(t.nextTowerId,r.length+1),nextEnemyId:J(t.nextEnemyId,i.length+1),score:J(t.score),kills:J(t.kills),leaked:J(t.leaked),latticeDirty:!0,lattice:{links:[],fields:[],totalPower:0,spectra:{}},events:[]}}var Kn=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`;function qn(e){let t=``;for(let n=0;n<e.length;n+=3){let r=e[n],i=e[n+1],a=e[n+2];if(t+=Kn[r>>2],t+=Kn[(r&3)<<4|(i??0)>>4],i===void 0||(t+=Kn[(i&15)<<2|(a??0)>>6],a===void 0))break;t+=Kn[a&63]}return t}function Jn(e){let t=e.replace(/[^A-Za-z0-9\-_]/g,``),n=new Uint8Array(Math.floor(t.length*3/4)),r=0,i=0,a=0;for(let e of t){let t=Kn.indexOf(e);t<0||(r=r<<6|t,i+=6,i>=8&&(i-=8,n[a++]=r>>i&255))}return n.subarray(0,a)}var Y=class extends Error{constructor(e){super(e),this.name=`SignalCodeError`}},Yn=`m=application 9 UDP/DTLS/SCTP webrtc-datachannel,a=fingerprint:sha-256 ,a=max-message-size:,a=extmap-allow-mixed,a=end-of-candidates,a=ice-options:trickle,a=msid-semantic: WMS, IN IP4 127.0.0.1,c=IN IP4 0.0.0.0,a=group:BUNDLE ,a=setup:actpass,a=setup:passive,a=setup:active,a=tcptype active,a=candidate:,a=ice-ufrag:,a=sctp-port:,a=ice-pwd:,generation 0,network-cost ,tcptype active,network-id ,typ srflx,typ relay,typ prflx,typ host,raddr ,rport ,a=mid:, udp , tcp ,o=- ,t=0 0,\r
,v=0,s=-`.split(`,`),Xn=``,Zn=32,Qn=Yn.map((e,t)=>({token:e,index:t})).sort((e,t)=>t.token.length-e.token.length),$n=/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/;function er(e){if($n.test(e)||Yn.length>95)return null;let t=``,n=0;outer:for(;n<e.length;){for(let{token:r,index:i}of Qn)if(e.startsWith(r,n)){t+=Xn+String.fromCharCode(Zn+i),n+=r.length;continue outer}t+=e[n],n+=1}return t}function tr(e){let t=``;for(let n=0;n<e.length;n++){if(e[n]!==Xn){t+=e[n];continue}let r=Yn[e.charCodeAt(n+1)-Zn];if(r===void 0)throw new Y(`Код повреждён — скопируйте его целиком`);t+=r,n+=1}return t}function nr(){return typeof CompressionStream<`u`&&typeof DecompressionStream<`u`}async function rr(e,t){let n=new Blob([e]).stream().pipeThrough(t),r=await new Response(n).arrayBuffer();return new Uint8Array(r)}async function ir(e){return nr()?rr(e,new CompressionStream(`deflate-raw`)):e}async function ar(e){return nr()?rr(e,new DecompressionStream(`deflate-raw`)):e}var or=new Set([`T`,`D`,`S`,`R`]);async function sr(e){let t=er(e.sdp),n=t!==null,r=await ir(new TextEncoder().encode(t??e.sdp)),i=nr()?n?`T`:`D`:n?`S`:`R`;return`PL1${e.kind}${i}${qn(r)}`}async function cr(e){let t=e.trim().replace(/^.*?[#?](?:j|join|code)=/i,``).replace(/\s+/g,``);if(!t.startsWith(`PL1`))throw new Y(`Не похоже на код подключения`);let n=t[3],r=t[4];if(n!==`o`&&n!==`a`)throw new Y(`Неизвестный тип кода`);if(!or.has(r))throw new Y(`Неизвестный формат кода`);let i=t.slice(5);if(i.length===0)throw new Y(`Код пустой`);let a=Jn(i),o;try{o=r===`T`||r===`D`?await ar(a):a}catch{throw new Y(`Код повреждён — скопируйте его целиком`)}let s=new TextDecoder().decode(o),c=r===`T`||r===`S`?tr(s):s;if(!c.startsWith(`v=`))throw new Y(`Код повреждён — скопируйте его целиком`);return{kind:n,sdp:c}}function lr(e,t){let[n]=t.split(`#`);return`${n}#j=${e}`}function ur(e){let t=e.match(/[#?](?:j|join|code)=([A-Za-z0-9\-_]+)/);return t?t[1]:null}function dr(e){return JSON.stringify(e)}function fr(e){if(typeof e!=`string`)return null;let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!=`object`)return null;let n=t;switch(n.t){case`hello`:{let e=n;return typeof e.v!=`number`||typeof e.seed!=`number`||typeof e.mapId!=`string`||e.mode!==`coop`&&e.mode!==`duel`?null:{t:`hello`,v:e.v,name:typeof e.name==`string`?e.name.slice(0,24):`Игрок`,seed:e.seed>>>0,mapId:e.mapId,mode:e.mode}}case`ready`:return{t:`ready`};case`cmd`:{let e=n;return typeof e.tick!=`number`||typeof e.seq!=`number`||typeof e.owner!=`number`||!mr(e.cmd)?null:{t:`cmd`,tick:e.tick|0,seq:e.seq|0,owner:e.owner|0,cmd:e.cmd}}case`hz`:{let e=n;return typeof e.tick==`number`?{t:`hz`,tick:e.tick|0,checkTick:typeof e.checkTick==`number`?e.checkTick|0:-1,check:typeof e.check==`number`?e.check>>>0:0}:null}case`sync`:{let e=n;return typeof e.state==`string`?{t:`sync`,state:e.state}:null}case`ping`:case`pong`:{let e=n;return typeof e.id!=`number`||typeof e.sent!=`number`?null:{t:n.t,id:e.id,sent:e.sent}}case`bye`:{let e=n;return{t:`bye`,reason:typeof e.reason==`string`?e.reason.slice(0,120):``}}default:return null}}var pr=new Set([`ruby`,`verdant`,`azure`,`prism`]);function mr(e){if(!e||typeof e!=`object`)return!1;let t=e;if(typeof t.owner!=`number`)return!1;switch(t.type){case`build`:{let e=t.cell;return typeof t.kind==`string`&&pr.has(t.kind)&&!!e&&typeof e.x==`number`&&typeof e.y==`number`&&Number.isFinite(e.x)&&Number.isFinite(e.y)}case`sell`:case`upgrade`:return typeof t.towerId==`number`&&Number.isFinite(t.towerId);case`startWave`:return!0;default:return!1}}var hr=[{urls:`stun:stun.l.google.com:19302`},{urls:`stun:stun.cloudflare.com:3478`}],gr=class extends Error{constructor(){super(`WebRTC недоступен в этом браузере`),this.name=`PeerUnavailableError`}},_r=`prism`,vr=class{role=null;status=`idle`;onStatus;onMessage;onOpen;onClose;pc=null;channel=null;options;rttMs=0;pingId=0;constructor(e={}){let t=e.createConnection??(e=>{if(typeof RTCPeerConnection>`u`)throw new gr;return new RTCPeerConnection(e)});this.options={iceServers:e.iceServers??hr,createConnection:t,gatherTimeoutMs:e.gatherTimeoutMs??3500,now:e.now??(()=>Date.now())}}get rtt(){return this.rttMs}get isConnected(){return this.status===`connected`&&this.channel?.readyState===`open`}setStatus(e,t){this.status!==e&&(this.status=e,this.onStatus?.(e,t))}createConnection(){let e=this.options.createConnection({iceServers:this.options.iceServers});return e.onconnectionstatechange=()=>{switch(e.connectionState){case`connected`:this.setStatus(`connected`);break;case`failed`:this.setStatus(`failed`,`Соединение не установилось`);break;case`disconnected`:this.setStatus(`connecting`,`Связь потеряна, пробуем восстановить`);break;case`closed`:this.setStatus(`closed`)}},this.pc=e,e}attachChannel(e){this.channel=e,e.binaryType=`arraybuffer`,e.onopen=()=>{this.setStatus(`connected`),this.onOpen?.()},e.onclose=()=>{this.status!==`closed`&&(this.setStatus(`closed`),this.onClose?.(`Канал закрыт`))},e.onmessage=e=>this.handleFrame(e.data)}handleFrame(e){let t=fr(e);if(t){if(t.t===`ping`){this.send({t:`pong`,id:t.id,sent:t.sent});return}if(t.t===`pong`){this.rttMs=Math.max(0,this.options.now()-t.sent);return}if(t.t===`bye`){this.onClose?.(t.reason||`Игрок вышел`),this.close();return}this.onMessage?.(t)}}waitForGathering(e){return e.iceGatheringState===`complete`?Promise.resolve():new Promise(t=>{let n=!1,r=()=>{n||(n=!0,clearTimeout(a),e.removeEventListener?.(`icegatheringstatechange`,i),t())},i=()=>{e.iceGatheringState===`complete`&&r()},a=setTimeout(r,this.options.gatherTimeoutMs);e.addEventListener?.(`icegatheringstatechange`,i),e.addEventListener||(e.onicegatheringstatechange=i)})}async createOffer(){this.role=`host`,this.setStatus(`offering`);let e=this.createConnection();this.attachChannel(e.createDataChannel(_r,{ordered:!0}));let t=await e.createOffer();await e.setLocalDescription(t),await this.waitForGathering(e);let n=e.localDescription?.sdp??t.sdp??``;if(!n)throw this.setStatus(`failed`,`Не удалось собрать предложение`),new Y(`Не удалось создать код — попробуйте ещё раз`);return this.setStatus(`awaiting-answer`),sr({kind:`o`,sdp:n})}async acceptOffer(e){let t=await cr(e);if(t.kind!==`o`)throw new Y(`Это код ответа, а не приглашение`);this.role=`guest`,this.setStatus(`answering`);let n=this.createConnection();n.ondatachannel=e=>this.attachChannel(e.channel),await n.setRemoteDescription({type:`offer`,sdp:t.sdp});let r=await n.createAnswer();await n.setLocalDescription(r),await this.waitForGathering(n);let i=n.localDescription?.sdp??r.sdp??``;if(!i)throw this.setStatus(`failed`,`Не удалось собрать ответ`),new Y(`Не удалось создать ответный код`);return this.setStatus(`connecting`),sr({kind:`a`,sdp:i})}async acceptAnswer(e){let t=await cr(e);if(t.kind!==`a`)throw new Y(`Это приглашение, а не код ответа`);if(!this.pc)throw new Y(`Сначала создайте приглашение`);await this.pc.setRemoteDescription({type:`answer`,sdp:t.sdp}),this.setStatus(`connecting`)}send(e){let t=this.channel;if(!t||t.readyState!==`open`)return!1;try{return t.send(dr(e)),!0}catch{return!1}}ping(){this.send({t:`ping`,id:this.pingId++,sent:this.options.now()})}close(e=``){e&&this.send({t:`bye`,reason:e});try{this.channel?.close()}catch{}try{this.pc?.close()}catch{}this.channel=null,this.pc=null,this.setStatus(`closed`)}};function yr(){return typeof crypto<`u`&&typeof crypto.getRandomValues==`function`?crypto.getRandomValues(new Uint32Array(1))[0]>>>0:(Date.now()^Date.now()<<13)>>>0}var br=4,xr=60,Sr=30,Cr=class{game;settings;makeLink;stage=`idle`;peerStatus=`idle`;role=null;mode=`coop`;outboundCode=``;error=``;peerName=``;rtt=0;desyncs=0;resyncing=!1;link=null;history=new Map;lastHorizonSent=-1;pingTimer=null;constructor(e,t,r=e=>new vr(e)){this.game=e,this.settings=t,this.makeLink=r,n(this,{},{autoBind:!0})}get connected(){return this.peerStatus===`connected`}get iceServers(){return this.settings.useStun?hr:[]}static inviteFromUrl(e){return ur(e)}shareUrl(e){return lr(this.outboundCode,e)}attach(e){e.onStatus=(e,t)=>{r(()=>{this.peerStatus=e,e===`failed`&&(this.stage=`error`,this.error=t??`Не удалось подключиться`)})},e.onOpen=()=>this.handleOpen(),e.onClose=e=>this.handleClose(e),e.onMessage=e=>this.handleMessage(e),this.link=e}async host(e,t){this.reset(),this.role=`host`,this.mode=t;let n=this.makeLink({iceServers:this.iceServers});this.attach(n);try{let i=await n.createOffer();return r(()=>{this.outboundCode=i,this.stage=`invite-ready`}),this.pendingStart={mapId:e,seed:yr(),mode:t},i}catch(e){throw this.fail(e),e}}async join(e){this.reset(),this.role=`guest`;let t=this.makeLink({iceServers:this.iceServers});this.attach(t);try{let n=await t.acceptOffer(e);return r(()=>{this.outboundCode=n,this.stage=`answer-ready`}),n}catch(e){throw this.fail(e),e}}async completeHandshake(e){if(!this.link){this.fail(Error(`Сначала создайте приглашение`));return}try{await this.link.acceptAnswer(e),r(()=>void(this.stage=`connecting`))}catch(e){throw this.fail(e),e}}pendingStart=null;handleOpen(){if(r(()=>{this.stage=`connecting`,this.error=``}),this.role===`host`&&this.pendingStart){let{mapId:e,seed:t,mode:n}=this.pendingStart;this.link?.send({t:`hello`,v:1,name:this.settings.displayName,seed:t,mapId:e,mode:n}),this.beginMatch(e,t,n,0)}this.pingTimer??=setInterval(()=>this.link?.ping(),2e3)}handleClose(e){r(()=>{this.stage=this.stage===`playing`?`error`:`idle`,this.error=e,this.peerStatus=`closed`}),this.stopTimers()}handleMessage(e){switch(e.t){case`hello`:if(e.v!==1){this.fail(Error(`У игроков разные версии игры`)),this.link?.close(`версия`);return}r(()=>void(this.peerName=e.name)),this.role===`guest`&&(this.beginMatch(e.mapId,e.seed,e.mode,1),this.link?.send({t:`hello`,v:1,name:this.settings.displayName,seed:e.seed,mapId:e.mapId,mode:e.mode}),this.link?.send({t:`ready`}));break;case`ready`:r(()=>void(this.stage=`playing`));break;case`cmd`:this.game.lockstep.receive(e);break;case`hz`:this.game.lockstep.receiveHorizon(e.tick),e.checkTick>=0&&this.compare(e.checkTick,e.check);break;case`sync`:this.applySync(e.state)}r(()=>void(this.rtt=this.link?.rtt??0))}beginMatch(e,t,n,i){this.mode=n,this.game.start(e,t,n,i),this.game.onLocalCommand=e=>void this.link?.send(e),this.history.clear(),this.lastHorizonSent=-1,r(()=>void(this.stage=`playing`))}pump(){let e=this.link,t=this.game.state;if(!e||!t||this.stage!==`playing`)return;let n=this.game.lockstep;if(t.tick%xr===0&&this.history.set(t.tick,Vn(t)),this.history.size>8){let e=Math.min(...this.history.keys());this.history.delete(e)}if(n.tick-this.lastHorizonSent<br)return;this.lastHorizonSent=n.tick;let r=Math.max(0,Math.floor((t.tick-Sr)/xr)*xr),i=this.history.get(r);e.send({t:`hz`,tick:n.localHorizon,checkTick:i===void 0?-1:r,check:i??0})}compare(e,t){let n=this.history.get(e);n!==void 0&&n!==t&&(r(()=>{this.desyncs+=1,this.resyncing=!0}),this.role===`host`&&this.game.state&&(this.link?.send({t:`sync`,state:Hn(this.game.state)}),r(()=>void(this.resyncing=!1))))}applySync(e){if(this.role!==`host`)try{this.game.adoptState(Gn(e)),r(()=>void(this.resyncing=!1))}catch(e){this.fail(e)}}fail(e){let t=e instanceof Error?e.message:String(e);r(()=>{this.stage=`error`,this.error=t})}reset(e=``){this.link?.close(e),this.stopTimers(),r(()=>{this.link=null,this.stage=`idle`,this.peerStatus=`idle`,this.role=null,this.outboundCode=``,this.error=``,this.peerName=``,this.rtt=0,this.resyncing=!1}),this.history.clear(),this.pendingStart=null,this.game.onLocalCommand=void 0}leave(){this.reset(`Игрок вышел`)}stopTimers(){this.pingTimer!==null&&(clearInterval(this.pingTimer),this.pingTimer=null)}},wr=`prism.settings.v1`,X={quality:`high`,sound:!0,haptics:!0,playerName:`Игрок`,useStun:!0,shareScores:!1},Tr=class{store;quality=X.quality;sound=X.sound;haptics=X.haptics;playerName=X.playerName;useStun=X.useStun;shareScores=X.shareScores;constructor(e=he()){this.store=e;let t=ge(this.store,wr,{});this.apply(t),n(this,{},{autoBind:!0})}apply(e){(e.quality===`low`||e.quality===`medium`||e.quality===`high`)&&(this.quality=e.quality),typeof e.sound==`boolean`&&(this.sound=e.sound),typeof e.haptics==`boolean`&&(this.haptics=e.haptics),typeof e.useStun==`boolean`&&(this.useStun=e.useStun),typeof e.shareScores==`boolean`&&(this.shareScores=e.shareScores),typeof e.playerName==`string`&&e.playerName.trim()&&(this.playerName=e.playerName.trim().slice(0,24))}get snapshot(){return{quality:this.quality,sound:this.sound,haptics:this.haptics,playerName:this.playerName,useStun:this.useStun,shareScores:this.shareScores}}setQuality(e){this.quality=e,this.persist()}setPlayerName(e){this.playerName=e.slice(0,24),this.persist()}get displayName(){return this.playerName.trim()||X.playerName}toggleSound(){this.sound=!this.sound,this.persist()}toggleHaptics(){this.haptics=!this.haptics,this.persist()}toggleStun(){this.useStun=!this.useStun,this.persist()}toggleShareScores(){this.shareScores=!this.shareScores,this.persist()}reset(){this.apply(X),this.quality=X.quality,this.playerName=X.playerName,this.persist()}persist(){_e(this.store,wr,this.snapshot)}},Er=2600,Dr=class{schedule;screen=`menu`;toasts=[];sheetOpen=!1;resultsOpen=!1;nextToastId=1;timers=new Map;constructor(e=setTimeout){this.schedule=e,n(this,{},{autoBind:!0})}go(e){this.screen=e,e!==`game`&&(this.sheetOpen=!1,this.resultsOpen=!1)}toast(e,t=`info`){let n=this.nextToastId++;if(this.toasts.push({id:n,text:e,tone:t}),this.toasts.length>3){let e=this.toasts.shift();e&&this.clearTimer(e.id)}let r=this.schedule(()=>this.dismiss(n),Er);return this.timers.set(n,r),n}dismiss(e){this.toasts=this.toasts.filter(t=>t.id!==e),this.clearTimer(e)}clearTimer(e){let t=this.timers.get(e);t!==void 0&&(clearTimeout(t),this.timers.delete(e))}openSheet(){this.sheetOpen=!0}closeSheet(){this.sheetOpen=!1}showResults(){this.resultsOpen=!0,this.sheetOpen=!1}hideResults(){this.resultsOpen=!1}dispose(){for(let e of this.timers.values())clearTimeout(e);this.timers.clear(),this.toasts=[]}},Or=class{settings=new Tr;ui=new Dr;game=new Bn;net;leaderboard;constructor(e){this.net=new Cr(this.game,this.settings),this.leaderboard=e??new Se({baseUrl:xe({BASE_URL:`./`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1})}),this.game.onFinished=e=>{this.ui.showResults(),this.recordRun(e.status===`won`)}}async recordRun(e){let{hud:t,mapId:n,mode:r}=this.game;try{await this.leaderboard.submit({player:this.settings.displayName,mapId:n,mode:r,score:t.score,wave:t.wave,kills:t.kills,leaked:t.leaked,latticePeak:t.latticePower,won:e},this.settings.shareScores)===`local-only`&&this.settings.shareScores&&this.ui.toast(`Таблица недоступна — результат сохранён локально`)}catch{}}personalBest(e=5){return this.leaderboard.localHistory().filter(e=>e.mapId===this.game.mapId).sort((e,t)=>t.score-e.score||t.wave-e.wave).slice(0,e)}dispose(){this.net.reset(),this.game.stop(),this.ui.dispose()}},kr=(0,s.createContext)(null),Ar=kr.Provider;function jr(){let e=(0,s.useContext)(kr);if(!e)throw Error(`useStores вызван вне StoreProvider`);return e}var Z=()=>jr().game,Q=()=>jr().ui,Mr=()=>jr().settings,Nr=()=>jr().net;function Pr(){let e=Q();return(0,P.jsxs)(pe,{fullscreen:!0,title:`Как играть`,action:(0,P.jsx)(F,{size:`sm`,"aria-label":`Закрыть`,onClick:()=>e.go(`menu`),children:`✕`}),children:[(0,P.jsxs)(`section`,{className:`codex__lead`,children:[(0,P.jsx)(`h3`,{className:`codex__h`,children:`Свет натягивается между башнями`}),(0,P.jsxs)(`p`,{children:[`Каждая башня сама по себе бьёт слабо. Настоящий урон — в `,(0,P.jsx)(`strong`,{children:`связях`}),`: две башни в пределах досягаемости натягивают между собой луч, и всё, что пересекает этот луч, горит.`]}),(0,P.jsxs)(`p`,{children:[`Цвет луча — это `,(0,P.jsx)(`strong`,{children:`смесь`}),` цветов башен. Красная и зелёная дают жёлтый. Луч бьёт только теми каналами, которые в нём есть.`]}),(0,P.jsxs)(`div`,{className:`codex__hero`,children:[(0,P.jsxs)(`span`,{className:`codex__mix`,children:[(0,P.jsx)(`i`,{style:{background:`var(--ch-r)`}}),`+`,(0,P.jsx)(`i`,{style:{background:`var(--ch-g)`}}),`+`,(0,P.jsx)(`i`,{style:{background:`var(--ch-b)`}}),`=`,(0,P.jsx)(`i`,{className:`codex__white`})]}),(0,P.jsxs)(`p`,{children:[`Три башни, которые связаны попарно и вместе закрывают все три канала, зажигают `,(0,P.jsx)(`strong`,{children:`призматическое поле`}),` — белый треугольник. Белый свет пробивает броню в `,w.toFixed(2).replace(`.`,`,`),` раза сильнее и единственный достаёт до тех, кто сдвинут по фазе.`]})]})]}),(0,P.jsxs)(`section`,{children:[(0,P.jsx)(`h3`,{className:`codex__h`,children:`Башни`}),(0,P.jsx)(`ul`,{className:`codex__list`,children:oe.map(e=>{let t=M[e];return(0,P.jsxs)(`li`,{className:`codex__row`,children:[(0,P.jsx)(`span`,{className:`codex__swatch`,style:{background:A(t.spectrum,.42)},"aria-hidden":`true`,children:t.short}),(0,P.jsxs)(`div`,{className:`codex__text`,children:[(0,P.jsxs)(`strong`,{children:[t.name,` `,(0,P.jsxs)(`span`,{className:`mono codex__cost`,children:[`◆`,t.cost]})]}),(0,P.jsx)(`span`,{children:t.blurb})]})]},e)})})]}),(0,P.jsxs)(`section`,{children:[(0,P.jsx)(`h3`,{className:`codex__h`,children:`Кто идёт`}),(0,P.jsx)(`ul`,{className:`codex__list`,children:fe.map(e=>{let t=N[e];return(0,P.jsxs)(`li`,{className:`codex__row`,children:[(0,P.jsx)(`span`,{className:`codex__swatch codex__swatch--enemy`,style:{background:A(t.resist,.3)},"aria-hidden":`true`}),(0,P.jsxs)(`div`,{className:`codex__text`,children:[(0,P.jsx)(`strong`,{children:t.name}),(0,P.jsx)(`span`,{children:t.hint})]})]},e)})})]}),(0,P.jsxs)(`section`,{children:[(0,P.jsx)(`h3`,{className:`codex__h`,children:`Управление`}),(0,P.jsxs)(`ul`,{className:`codex__keys`,children:[(0,P.jsxs)(`li`,{children:[(0,P.jsx)(`b`,{children:`Палец по полю`}),` — двигать камеру`]}),(0,P.jsxs)(`li`,{children:[(0,P.jsx)(`b`,{children:`Щипок`}),` — приблизить, `,(0,P.jsx)(`b`,{children:`поворот двумя пальцами`}),` — облететь`]}),(0,P.jsxs)(`li`,{children:[(0,P.jsx)(`b`,{children:`Тап по кристаллу внизу`}),` — взять башню, `,(0,P.jsx)(`b`,{children:`тап по полю`}),` — поставить`]}),(0,P.jsxs)(`li`,{children:[(0,P.jsx)(`b`,{children:`Тап по башне`}),` — улучшить или продать`]})]})]})]})}function Fr(e){let t=0,n=0;for(let r of e)t+=r.x,n+=r.y;return{x:t/e.length,y:n/e.length}}var Ir=class{pointers=new Map;pinchDistance=0;pinchAngle=0;pinchCentre={x:0,y:0};get pointerCount(){return this.pointers.size}get isDragging(){return this.pointers.size>0}down(e,t,n,r){this.pointers.set(e,{x:t,y:n,startX:t,startY:n,startTime:r,travelled:0}),this.pointers.size===2&&this.resetPinch()}resetPinch(){let[e,t]=[...this.pointers.values()];e&&t&&(this.pinchDistance=Math.hypot(t.x-e.x,t.y-e.y),this.pinchAngle=Math.atan2(t.y-e.y,t.x-e.x),this.pinchCentre=Fr([e,t]))}move(e,t,n){let r=this.pointers.get(e);if(!r)return this.pointers.size===0?{type:`hover`,x:t,y:n}:null;let i={x:r.x,y:r.y};if(r.travelled+=Math.hypot(t-r.x,n-r.y),r.x=t,r.y=n,this.pointers.size===1)return{type:`drag`,from:i,to:{x:t,y:n}};if(this.pointers.size===2){let[e,t]=[...this.pointers.values()],n=Math.hypot(t.x-e.x,t.y-e.y),r=Math.atan2(t.y-e.y,t.x-e.x),i=Fr([e,t]),a=this.pinchDistance>1?n/this.pinchDistance:1,o=r-this.pinchAngle;o>Math.PI&&(o-=Math.PI*2),o<-Math.PI&&(o+=Math.PI*2);let s=i.y-this.pinchCentre.y;return this.pinchDistance=n,this.pinchAngle=r,this.pinchCentre=i,{type:`pinch`,scale:a,twist:o,dy:s}}return null}up(e,t){let n=this.pointers.get(e);if(this.pointers.delete(e),this.pointers.size===2&&this.resetPinch(),!n)return null;let r=t-n.startTime;return Math.hypot(n.x-n.startX,n.y-n.startY)<=12&&n.travelled<=24&&r<=450?{type:`tap`,x:n.x,y:n.y}:null}cancel(e){this.pointers.delete(e),this.pointers.size===2&&this.resetPinch()}clear(){this.pointers.clear()}},Lr=.006,Rr=i(function(){let e=(0,s.useRef)(null),t=Z(),n=Nr(),r=Mr(),[i,a]=(0,s.useState)(null),o=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let i=e.current;if(!i)return;let s;try{s=new Pn(wt(i))}catch(e){a(e instanceof bt?`Нужен WebGL2. Обновите браузер или включите аппаратное ускорение.`:`Не удалось запустить графику: ${e instanceof Error?e.message:String(e)}`);return}o.current=s,s.setQuality(r.quality),t.onEvent=e=>s.emit(e);let c=new Ir,u=s.camera,d=(e,t)=>yt(e,t,i.getBoundingClientRect()),f=e=>{i.setPointerCapture?.(e.pointerId),c.down(e.pointerId,e.clientX,e.clientY,e.timeStamp)},p=e=>{let n=c.move(e.pointerId,e.clientX,e.clientY);if(n){if(n.type===`hover`){let e=d(n.x,n.y);t.setHoverWorld(s.pick(e.x,e.y));return}if(n.type===`drag`){let e=d(n.from.x,n.from.y),t=d(n.to.x,n.to.y),r=s.pick(e.x,e.y),i=s.pick(t.x,t.y);r&&i&&(u.target=l(u.target.x+(r.x-i.x),u.target.y+(r.y-i.y)));return}u.zoomBy(1/n.scale),u.orbitBy(-n.twist,n.dy*Lr)}},m=e=>{i.releasePointerCapture?.(e.pointerId);let n=c.up(e.pointerId,e.timeStamp);if(!n)return;let r=d(n.x,n.y),a=s.pick(r.x,r.y);a&&t.tapWorld(a)},h=e=>c.cancel(e.pointerId),g=e=>{e.preventDefault(),u.zoomBy(e.deltaY>0?1.12:1/1.12)};i.addEventListener(`pointerdown`,f),i.addEventListener(`pointermove`,p),i.addEventListener(`pointerup`,m),i.addEventListener(`pointercancel`,h),i.addEventListener(`wheel`,g,{passive:!1});let _=0,v=performance.now(),y=e=>{_=requestAnimationFrame(y);let r=Math.min(.25,(e-v)/1e3);v=e,t.ctx&&s.setMap(t.ctx);let i=t.advance(r);n.pump(),t.ctx&&t.state&&s.render({ctx:t.ctx,state:t.state,alpha:i,time:e/1e3,hoverCell:t.hoverCell,hoverValid:t.hoverValid,selectedTowerId:t.selectedTowerId,placing:t.placing,ghostLinks:t.ghostLinks})};return _=requestAnimationFrame(y),()=>{cancelAnimationFrame(_),i.removeEventListener(`pointerdown`,f),i.removeEventListener(`pointermove`,p),i.removeEventListener(`pointerup`,m),i.removeEventListener(`pointercancel`,h),i.removeEventListener(`wheel`,g),t.onEvent=void 0,o.current=null,s.dispose()}},[]),(0,s.useEffect)(()=>{o.current?.setQuality(r.quality)},[r.quality]),(0,P.jsxs)(`div`,{className:`board`,children:[(0,P.jsx)(`canvas`,{ref:e,className:`board__canvas`,"aria-label":`Игровое поле`,role:`img`}),i?(0,P.jsxs)(`div`,{className:`board__error`,role:`alert`,children:[(0,P.jsx)(`p`,{className:`board__error-title`,children:`Графика недоступна`}),(0,P.jsx)(`p`,{className:`board__error-text`,children:i})]}):null]})});function $({label:e,value:t,tone:n=`default`,icon:r,compact:i=!1}){return(0,P.jsxs)(`div`,{className:`stat stat--${n} ${i?`stat--compact`:``}`.trim(),children:[r?(0,P.jsx)(`span`,{className:`stat__icon`,"aria-hidden":`true`,children:r}):null,(0,P.jsxs)(`div`,{className:`stat__text`,children:[(0,P.jsx)(`span`,{className:`stat__label`,children:e}),(0,P.jsx)(`span`,{className:`stat__value mono`,children:t})]})]})}function zr(e,t=20){let n=e/t;return n>.5?`good`:n>.2?`warn`:`bad`}var Br=i(function(){let e=Z(),t=Q(),n=Nr(),{hud:r}=e;return(0,P.jsxs)(`header`,{className:`hud`,children:[(0,P.jsxs)(`div`,{className:`hud__row`,children:[(0,P.jsx)(F,{size:`sm`,variant:`ghost`,className:`hud__menu`,"aria-label":`Меню`,onClick:()=>t.go(`menu`),children:`☰`}),(0,P.jsxs)(`div`,{className:`hud__stats`,children:[(0,P.jsx)($,{compact:!0,label:`Кристаллы`,value:r.gold,tone:`gold`,icon:`◆`}),(0,P.jsx)($,{compact:!0,label:`Ядро`,value:r.lives,tone:zr(r.lives),icon:`❤`}),(0,P.jsx)($,{compact:!0,label:`Волна`,value:`${r.wave}/${r.totalWaves}`,icon:`≋`})]}),(0,P.jsxs)(`div`,{className:`hud__controls`,children:[(0,P.jsx)(F,{size:`sm`,variant:`ghost`,"aria-label":e.paused?`Продолжить`:`Пауза`,"aria-pressed":e.paused,onClick:()=>e.togglePause(),children:e.paused?`▶`:`❚❚`}),(0,P.jsxs)(F,{size:`sm`,variant:`ghost`,"aria-label":`Скорость ${e.speed}x`,onClick:()=>e.cycleSpeed(),children:[e.speed,`×`]})]})]}),(0,P.jsxs)(`div`,{className:`hud__row hud__row--secondary`,children:[(0,P.jsxs)(`div`,{className:`hud__lattice`,title:`Сила световой решётки`,children:[(0,P.jsxs)(`span`,{className:`hud__lattice-item`,children:[(0,P.jsx)(`span`,{className:`hud__lattice-glyph`,"aria-hidden":`true`,children:`⟋`}),r.links,(0,P.jsx)(`span`,{className:`sr-only`,children:` связей`})]}),(0,P.jsxs)(`span`,{className:`hud__lattice-item hud__lattice-item--field`,children:[(0,P.jsx)(`span`,{className:`hud__lattice-glyph`,"aria-hidden":`true`,children:`△`}),r.fields,(0,P.jsx)(`span`,{className:`sr-only`,children:` призматических полей`})]}),(0,P.jsx)(`span`,{className:`hud__lattice-item mono`,children:r.latticePower})]}),r.enemies>0?(0,P.jsxs)(`span`,{className:`hud__enemies`,children:[`Врагов: `,r.enemies]}):null,n.stage===`playing`?(0,P.jsx)(`span`,{className:`hud__net ${e.stalled?`hud__net--waiting`:``}`.trim(),children:e.stalled?`Ждём игрока…`:`${n.peerName||`Игрок 2`} · ${n.rtt}мс`}):null]})]})});function Vr(){return typeof crypto<`u`&&typeof crypto.getRandomValues==`function`?crypto.getRandomValues(new Uint32Array(1))[0]>>>0:(Date.now()&4294967295)>>>0}var Hr=i(function(){let e=Z(),t=Q(),[n,r]=(0,s.useState)(e.mapId),i=I.find(e=>e.id===n)??I[0];return(0,P.jsx)(`div`,{className:`menu`,children:(0,P.jsxs)(`div`,{className:`menu__inner`,children:[(0,P.jsxs)(`header`,{className:`menu__brand`,children:[(0,P.jsxs)(`h1`,{className:`menu__logo`,children:[(0,P.jsx)(`span`,{className:`menu__logo-r`,children:`PRISM`}),(0,P.jsx)(`span`,{className:`menu__logo-sub`,children:`LATTICE`})]}),(0,P.jsx)(`p`,{className:`menu__tagline`,children:`Башни не стреляют по одиночке. Между ними натягивается свет — и врага жжёт решётка, которую вы сплели.`})]}),(0,P.jsxs)(`section`,{className:`menu__maps`,"aria-label":`Выбор карты`,children:[(0,P.jsx)(`p`,{className:`label`,children:`Карта`}),(0,P.jsx)(`div`,{className:`menu__map-list`,children:I.map(e=>(0,P.jsxs)(`button`,{type:`button`,className:`mapcard ${e.id===n?`mapcard--active`:``}`.trim(),"aria-pressed":e.id===n,onClick:()=>r(e.id),children:[(0,P.jsx)(`span`,{className:`mapcard__name`,children:e.name}),(0,P.jsxs)(`span`,{className:`mapcard__meta mono`,children:[e.width,`×`,e.height,` · `,e.waves,` волн`]})]},e.id))}),(0,P.jsx)(`p`,{className:`menu__map-blurb`,children:i.blurb})]}),(0,P.jsxs)(`div`,{className:`menu__actions`,children:[(0,P.jsx)(F,{variant:`primary`,size:`lg`,block:!0,onClick:()=>{e.start(n,Vr(),`solo`),t.go(`game`)},children:`Играть`}),(0,P.jsxs)(`div`,{className:`menu__row`,children:[(0,P.jsx)(F,{block:!0,onClick:()=>t.go(`multiplayer`),icon:`⇄`,children:`Вдвоём`}),(0,P.jsx)(F,{block:!0,onClick:()=>t.go(`codex`),icon:`✦`,children:`Как играть`})]}),(0,P.jsx)(F,{block:!0,variant:`ghost`,onClick:()=>t.go(`settings`),icon:`⚙`,children:`Настройки`})]}),(0,P.jsx)(`footer`,{className:`menu__footer`,children:`Работает без сервера и без сети. Игра вдвоём — напрямую между устройствами.`})]})})});async function Ur(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}return!1}var Wr=i(function(){let e=Nr(),t=Q(),n=Mr(),[r,i]=(0,s.useState)(`host`),[a,o]=(0,s.useState)(I[0].id),[c,l]=(0,s.useState)(`coop`),[u,d]=(0,s.useState)(``),[f,p]=(0,s.useState)(!1),[m,h]=(0,s.useState)(!1);(0,s.useEffect)(()=>{if(typeof location>`u`)return;let e=Cr.inviteFromUrl(location.href);e&&(i(`join`),d(e))},[]),(0,s.useEffect)(()=>{e.stage===`playing`&&t.go(`game`)},[e.stage,t]);let g=async e=>{h(!0),p(!1);try{await e()}catch{}finally{h(!1)}},_=async()=>{let t=typeof location>`u`?e.outboundCode:e.shareUrl(location.href);if(typeof navigator<`u`&&navigator.share)try{await navigator.share({title:`PRISM LATTICE`,text:`Партия на двоих`,url:t});return}catch{}p(await Ur(t))};return(0,P.jsxs)(pe,{fullscreen:!0,title:`Игра вдвоём`,hint:`Прямое соединение между устройствами. Сервера нет — код передаётся любым мессенджером.`,action:(0,P.jsx)(F,{size:`sm`,"aria-label":`Закрыть`,onClick:()=>t.go(`menu`),children:`✕`}),children:[(0,P.jsxs)(`div`,{className:`mp__tabs`,role:`tablist`,children:[(0,P.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":r===`host`,className:`mp__tab ${r===`host`?`mp__tab--on`:``}`.trim(),onClick:()=>i(`host`),children:`Создать`}),(0,P.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":r===`join`,className:`mp__tab ${r===`join`?`mp__tab--on`:``}`.trim(),onClick:()=>i(`join`),children:`Присоединиться`})]}),r===`host`?(0,P.jsxs)(`div`,{className:`mp__section`,children:[(0,P.jsxs)(`div`,{className:`mp__field`,children:[(0,P.jsx)(`p`,{className:`label`,children:`Режим`}),(0,P.jsxs)(`div`,{className:`mp__choices`,children:[(0,P.jsxs)(`button`,{type:`button`,className:`mp__choice ${c===`coop`?`mp__choice--on`:``}`.trim(),"aria-pressed":c===`coop`,onClick:()=>l(`coop`),children:[(0,P.jsx)(`strong`,{children:`Вместе`}),(0,P.jsx)(`span`,{children:`Одно поле, общая казна, решётку плетёте вдвоём.`})]}),(0,P.jsxs)(`button`,{type:`button`,className:`mp__choice ${c===`duel`?`mp__choice--on`:``}`.trim(),"aria-pressed":c===`duel`,onClick:()=>l(`duel`),children:[(0,P.jsx)(`strong`,{children:`Дуэль`}),(0,P.jsx)(`span`,{children:`Одинаковые волны у обоих. Кто продержится дольше.`})]})]})]}),(0,P.jsxs)(`div`,{className:`mp__field`,children:[(0,P.jsx)(`p`,{className:`label`,children:`Карта`}),(0,P.jsx)(`div`,{className:`mp__choices mp__choices--row`,children:I.map(e=>(0,P.jsx)(`button`,{type:`button`,className:`mp__pill ${e.id===a?`mp__pill--on`:``}`.trim(),"aria-pressed":e.id===a,onClick:()=>o(e.id),children:e.name},e.id))})]}),e.outboundCode&&e.role===`host`?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`div`,{className:`mp__field`,children:[(0,P.jsx)(`p`,{className:`label`,children:`1. Отправьте приглашение`}),(0,P.jsx)(`textarea`,{className:`mp__code mono`,readOnly:!0,value:e.outboundCode,rows:3,"aria-label":`Код приглашения`}),(0,P.jsx)(`div`,{className:`mp__row`,children:(0,P.jsx)(F,{block:!0,onClick:_,icon:`↗`,children:f?`Скопировано`:`Поделиться`})})]}),(0,P.jsxs)(`div`,{className:`mp__field`,children:[(0,P.jsx)(`p`,{className:`label`,children:`2. Вставьте ответный код`}),(0,P.jsx)(`textarea`,{className:`mp__code mono`,value:u,rows:3,placeholder:`PL1a…`,"aria-label":`Ответный код`,onChange:e=>d(e.target.value)}),(0,P.jsx)(F,{variant:`primary`,block:!0,disabled:m||u.trim().length===0,onClick:()=>g(()=>e.completeHandshake(u.trim())),children:`Подключиться`})]})]}):(0,P.jsx)(F,{variant:`primary`,size:`lg`,block:!0,disabled:m,onClick:()=>g(()=>e.host(a,c)),children:m?`Готовим…`:`Создать приглашение`})]}):(0,P.jsxs)(`div`,{className:`mp__section`,children:[(0,P.jsxs)(`div`,{className:`mp__field`,children:[(0,P.jsx)(`p`,{className:`label`,children:`1. Вставьте приглашение`}),(0,P.jsx)(`textarea`,{className:`mp__code mono`,value:u,rows:3,placeholder:`PL1o…`,"aria-label":`Код приглашения`,onChange:e=>d(e.target.value)}),(0,P.jsx)(F,{variant:`primary`,block:!0,disabled:m||u.trim().length===0,onClick:()=>g(()=>e.join(u.trim())),children:m?`Готовим…`:`Принять`})]}),e.outboundCode&&e.role===`guest`?(0,P.jsxs)(`div`,{className:`mp__field`,children:[(0,P.jsx)(`p`,{className:`label`,children:`2. Отправьте ответ обратно`}),(0,P.jsx)(`textarea`,{className:`mp__code mono`,readOnly:!0,value:e.outboundCode,rows:3,"aria-label":`Ответный код`}),(0,P.jsx)(F,{block:!0,onClick:_,icon:`↗`,children:f?`Скопировано`:`Поделиться`})]}):null]}),(0,P.jsxs)(`div`,{className:`mp__status`,children:[(0,P.jsx)(`span`,{className:`mp__dot mp__dot--${e.peerStatus}`,"aria-hidden":`true`}),(0,P.jsx)(`span`,{children:Gr(e.stage,e.peerStatus,e.error)})]}),(0,P.jsxs)(`label`,{className:`mp__toggle`,children:[(0,P.jsx)(`input`,{type:`checkbox`,checked:!n.useStun,onChange:()=>n.toggleStun()}),(0,P.jsxs)(`span`,{children:[`Только локальная сеть`,(0,P.jsx)(`small`,{children:`Без публичных STUN-серверов. Работает, когда оба устройства в одном Wi-Fi.`})]})]})]})});function Gr(e,t,n){if(n)return n;switch(e){case`invite-ready`:return`Приглашение готово — ждём ответный код.`;case`answer-ready`:return`Ответ готов — отправьте его создателю партии.`;case`connecting`:return t===`connected`?`Синхронизируемся…`:`Устанавливаем соединение…`;case`playing`:return`Подключено.`;case`error`:return`Не удалось подключиться.`;default:return`Готово к подключению.`}}function Kr(){return typeof crypto<`u`&&typeof crypto.getRandomValues==`function`?crypto.getRandomValues(new Uint32Array(1))[0]>>>0:(Date.now()&4294967295)>>>0}var qr=i(function(){let e=Z(),t=Q(),n=jr();if(!t.resultsOpen)return null;let r=e.hud.status===`won`,i=n.personalBest(3);return(0,P.jsx)(`div`,{className:`results`,role:`dialog`,"aria-modal":`true`,"aria-label":r?`Победа`:`Поражение`,children:(0,P.jsxs)(`div`,{className:`results__card surface`,children:[(0,P.jsx)(`p`,{className:`results__verdict ${r?`results__verdict--win`:`results__verdict--loss`}`,children:r?`Решётка выстояла`:`Ядро погасло`}),(0,P.jsx)(`p`,{className:`results__sub`,children:r?`Все ${e.hud.totalWaves} волн отражены.`:`Вы держались до волны ${e.hud.wave}.`}),(0,P.jsxs)(`div`,{className:`results__stats`,children:[(0,P.jsx)($,{label:`Очки`,value:e.hud.score,tone:`gold`}),(0,P.jsx)($,{label:`Убито`,value:e.hud.kills}),(0,P.jsx)($,{label:`Прорвалось`,value:e.hud.leaked,tone:e.hud.leaked>0?`bad`:`good`})]}),i.length>0?(0,P.jsxs)(`section`,{className:`results__best`,children:[(0,P.jsx)(`p`,{className:`label`,children:`Лучшее на этой карте`}),(0,P.jsx)(`ol`,{className:`results__best-list`,children:i.map((e,t)=>(0,P.jsxs)(`li`,{className:`results__best-row`,children:[(0,P.jsx)(`span`,{className:`results__best-rank mono`,children:t+1}),(0,P.jsx)(`span`,{className:`results__best-score mono`,children:e.score}),(0,P.jsxs)(`span`,{className:`results__best-wave`,children:[`волна `,e.wave]})]},e.id))})]}):null,(0,P.jsxs)(`div`,{className:`results__actions`,children:[(0,P.jsx)(F,{variant:`primary`,block:!0,onClick:()=>{t.hideResults(),e.start(e.mapId,Kr(),`solo`)},children:`Ещё раз`}),(0,P.jsx)(F,{block:!0,onClick:()=>{t.hideResults(),t.go(`menu`)},children:`В меню`})]})]})})}),Jr=[{id:`low`,name:`Низкое`,hint:`Без свечения и зерна. Для слабых телефонов.`},{id:`medium`,name:`Среднее`,hint:`Свечение есть, разрешение чуть ниже.`},{id:`high`,name:`Высокое`,hint:`Полное свечение, полное разрешение.`}],Yr=i(function(){let e=Mr(),t=Q();return(0,P.jsxs)(pe,{fullscreen:!0,title:`Настройки`,action:(0,P.jsx)(F,{size:`sm`,"aria-label":`Закрыть`,onClick:()=>t.go(`menu`),children:`✕`}),children:[(0,P.jsxs)(`section`,{className:`settings__group`,children:[(0,P.jsx)(`p`,{className:`label`,children:`Имя`}),(0,P.jsx)(`input`,{className:`settings__input`,type:`text`,value:e.playerName,maxLength:24,"aria-label":`Имя игрока`,onChange:t=>e.setPlayerName(t.target.value)})]}),(0,P.jsxs)(`section`,{className:`settings__group`,children:[(0,P.jsx)(`p`,{className:`label`,children:`Качество графики`}),(0,P.jsx)(`div`,{className:`settings__options`,children:Jr.map(t=>(0,P.jsxs)(`button`,{type:`button`,className:`settings__option ${e.quality===t.id?`settings__option--on`:``}`.trim(),"aria-pressed":e.quality===t.id,onClick:()=>e.setQuality(t.id),children:[(0,P.jsx)(`strong`,{children:t.name}),(0,P.jsx)(`span`,{children:t.hint})]},t.id))})]}),(0,P.jsxs)(`section`,{className:`settings__group`,children:[(0,P.jsx)(`p`,{className:`label`,children:`Прочее`}),(0,P.jsx)(Xr,{checked:e.haptics,label:`Вибрация`,hint:`Короткий отклик при постройке и потере жизни.`,onChange:()=>e.toggleHaptics()}),(0,P.jsx)(Xr,{checked:e.useStun,label:`Публичные STUN-серверы`,hint:`Нужны, чтобы соединяться через интернет. Выключите — останется только локальная сеть.`,onChange:()=>e.toggleStun()}),(0,P.jsx)(Xr,{checked:e.shareScores,label:`Отправлять результаты`,hint:`Выключено по умолчанию. Игра полностью работает без всякого сервера.`,onChange:()=>e.toggleShareScores()})]}),(0,P.jsx)(F,{variant:`danger`,block:!0,onClick:()=>e.reset(),children:`Сбросить настройки`})]})});function Xr({checked:e,label:t,hint:n,onChange:r}){return(0,P.jsxs)(`label`,{className:`settings__toggle`,children:[(0,P.jsx)(`input`,{type:`checkbox`,checked:e,onChange:r}),(0,P.jsxs)(`span`,{children:[t,(0,P.jsx)(`small`,{children:n})]})]})}var Zr=i(function(){let e=Q();return e.toasts.length===0?null:(0,P.jsx)(`div`,{className:`toasts`,role:`status`,"aria-live":`polite`,children:e.toasts.map(t=>(0,P.jsx)(`button`,{type:`button`,className:`toast toast--${t.tone}`,onClick:()=>e.dismiss(t.id),children:t.text},t.id))})}),Qr={ruby:`ch-ruby`,verdant:`ch-verdant`,azure:`ch-azure`,prism:`ch-prism`},$r=i(function(){let e=Z();return(0,P.jsx)(`nav`,{className:`towerbar`,"aria-label":`Выбор башни`,children:(0,P.jsx)(`ul`,{className:`towerbar__list`,children:oe.map(t=>{let n=M[t],r=e.canAfford(t),i=e.placing===t;return(0,P.jsx)(`li`,{className:`towerbar__item`,children:(0,P.jsxs)(`button`,{type:`button`,className:`towercard ${Qr[t]} ${i?`towercard--active`:``}`.trim(),"aria-pressed":i,"aria-label":`${n.name}, ${n.cost} кристаллов. ${n.blurb}`,disabled:!r&&!i,onClick:()=>e.choose(t),children:[(0,P.jsx)(`span`,{className:`towercard__gem`,"aria-hidden":`true`,children:n.short}),(0,P.jsx)(`span`,{className:`towercard__name`,children:n.name}),(0,P.jsx)(`span`,{className:`towercard__cost mono ${r?``:`towercard__cost--short`}`.trim(),children:n.cost})]})},t)})})})}),ei=i(function(){let e=Z(),t=e.selectedTower;if(!t)return null;let n=M[t.tower.kind],r=e.state?.lattice.spectra[t.tower.id]??n.spectrum,i=D(r)>0,a=e.state?.lattice.links.filter(e=>e.a===t.tower.id||e.b===t.tower.id).length??0;return(0,P.jsxs)(`aside`,{className:`sheet surface`,role:`dialog`,"aria-label":`Башня ${t.name}`,children:[(0,P.jsxs)(`header`,{className:`sheet__head`,children:[(0,P.jsx)(`span`,{className:`sheet__gem`,style:{background:A(i?r:n.spectrum,.25)},"aria-hidden":`true`}),(0,P.jsxs)(`div`,{className:`sheet__title`,children:[(0,P.jsx)(`h3`,{className:`sheet__name`,children:t.name}),(0,P.jsxs)(`p`,{className:`sheet__spectrum`,children:[i?te(r):`Не освещена`,` · `,a,` связ`,a===1?`ь`:a<5?`и`:`ей`]})]}),(0,P.jsx)(`ol`,{className:`sheet__levels`,"aria-label":`Уровень ${t.level} из ${t.maxLevel}`,children:Array.from({length:t.maxLevel},(e,n)=>(0,P.jsx)(`li`,{className:`sheet__pip ${n<t.level?`sheet__pip--on`:``}`.trim()},n))}),(0,P.jsx)(F,{size:`sm`,variant:`ghost`,"aria-label":`Закрыть`,onClick:()=>e.select(null),children:`✕`})]}),(0,P.jsx)(`p`,{className:`sheet__blurb`,children:n.blurb}),(0,P.jsxs)(`dl`,{className:`sheet__stats`,children:[(0,P.jsxs)(`div`,{className:`sheet__stat`,children:[(0,P.jsx)(`dt`,{children:`Импульс`}),(0,P.jsx)(`dd`,{className:`mono`,children:n.pulseDps>0?`${Math.round(n.pulseDps*se[t.level])}/с`:`—`})]}),(0,P.jsxs)(`div`,{className:`sheet__stat`,children:[(0,P.jsx)(`dt`,{children:`Радиус`}),(0,P.jsx)(`dd`,{className:`mono`,children:n.pulseRange>0?(n.pulseRange*ce[t.level]).toFixed(1):`—`})]}),(0,P.jsxs)(`div`,{className:`sheet__stat`,children:[(0,P.jsx)(`dt`,{children:`В связь`}),(0,P.jsx)(`dd`,{className:`mono`,children:Math.round(n.linkPower*se[t.level])})]})]}),(0,P.jsxs)(`div`,{className:`sheet__actions`,children:[(0,P.jsx)(F,{variant:`primary`,block:!0,disabled:!t.canUpgrade,meta:t.level>=t.maxLevel?void 0:`◆${t.upgradeCost}`,onClick:()=>e.upgradeSelected(),children:t.level>=t.maxLevel?`Максимум`:`Улучшить`}),(0,P.jsx)(F,{variant:`danger`,meta:`◆${t.sellValue}`,onClick:()=>e.sellSelected(),children:`Продать`})]})]})}),ti=i(function(){let e=Z(),{hud:t}=e,n=e.nextWavePreview,r=Math.min(t.wave+1,t.totalWaves),i=t.status===`wave`;return t.wave>=t.totalWaves&&t.status!==`wave`?null:(0,P.jsxs)(`div`,{className:`wavectl`,children:[(0,P.jsxs)(`ul`,{className:`wavectl__preview`,"aria-label":`Состав волны ${r}`,children:[n.map(({kind:e,count:t})=>{let n=N[e];return(0,P.jsxs)(`li`,{className:`wavechip`,title:`${n.name}: ${n.hint}`,children:[(0,P.jsx)(`span`,{className:`wavechip__dot`,style:{background:A(n.resist,.35)},"aria-hidden":`true`}),(0,P.jsx)(`span`,{className:`wavechip__name`,children:n.name}),(0,P.jsxs)(`span`,{className:`wavechip__count mono`,children:[`×`,t]})]},e)}),qe(r)?(0,P.jsx)(`li`,{className:`wavechip wavechip--boss`,children:`Босс`}):null]}),(0,P.jsx)(F,{variant:`primary`,size:`lg`,className:`wavectl__go`,onClick:()=>e.startWave(),disabled:t.wave>=t.totalWaves,children:i?`Позвать волну ${r} раньше`:`Волна ${r}`})]})}),ni=i(function(){let e=Q(),t=Z();(0,s.useEffect)(()=>{typeof location<`u`&&Cr.inviteFromUrl(location.href)&&e.go(`multiplayer`)},[e]);let n=e.screen===`game`&&t.running;return(0,P.jsxs)(`div`,{className:`app`,children:[t.running?(0,P.jsx)(Rr,{}):null,n?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Br,{}),(0,P.jsx)(ti,{}),(0,P.jsx)(ei,{}),(0,P.jsx)($r,{}),(0,P.jsx)(qr,{})]}):null,e.screen===`menu`?(0,P.jsx)(Hr,{}):null,e.screen===`multiplayer`?(0,P.jsx)(Wr,{}):null,e.screen===`settings`?(0,P.jsx)(Yr,{}):null,e.screen===`codex`?(0,P.jsx)(Pr,{}):null,(0,P.jsx)(Zr,{})]})}),ri=document.getElementById(`root`);if(!ri)throw Error(`#root не найден`);var ii=new Or;(0,c.createRoot)(ri).render((0,P.jsx)(s.StrictMode,{children:(0,P.jsx)(Ar,{value:ii,children:(0,P.jsx)(ni,{})})}));