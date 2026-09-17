import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{i as t,n,r,t as i}from"./mobx-NDfu625Y.js";import{n as a,t as o}from"./react-DNLHFTBW.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var s=e(t(),1),c=a(),l={runt:{kind:`runt`,name:`Гоблин`,hint:`Мелкий и быстрый. Ходит толпой, брони нет.`,hp:52,speed:1.6,armour:0,slowResist:0,bounty:9,leak:1,gait:`walk`,plan:`goblin`,scale:.62,color:[.62,.85,.22],accent:[.95,.5,.25],cadence:1.4},hound:{kind:`hound`,name:`Гончая`,hint:`Бежит на четырёх лапах вдвое быстрее прочих. Замедление — обязательно.`,hp:70,speed:2.5,armour:.08,slowResist:0,bounty:14,leak:1,gait:`walk`,plan:`hound`,scale:.6,color:[.55,.3,.26],accent:[.95,.66,.3],cadence:1.05},slime:{kind:`slime`,name:`Слизень`,hint:`Прыгает. В воздухе его не достать замедлением.`,hp:120,speed:1.1,armour:0,slowResist:.5,bounty:16,leak:1,gait:`hop`,plan:`slime`,scale:.68,color:[.22,.78,.95],accent:[.9,1,1],cadence:1},grub:{kind:`grub`,name:`Личинка`,hint:`Ползёт медленно, но панцирь съедает половину урона.`,hp:165,speed:.82,armour:.5,slowResist:.25,bounty:20,leak:2,gait:`crawl`,plan:`grub`,scale:.66,color:[.78,.6,.35],accent:[.42,.3,.22],cadence:1.8},wisp:{kind:`wisp`,name:`Огонёк`,hint:`Летит над дорогой. Замедление на него почти не действует.`,hp:95,speed:1.9,armour:.1,slowResist:.8,bounty:22,leak:1,gait:`fly`,plan:`wisp`,scale:.54,color:[.95,.85,.45],accent:[1,.55,.8],cadence:4.2},brute:{kind:`brute`,name:`Громила`,hint:`Тяжёлый шаг, много здоровья. Забирает сразу три жизни.`,hp:420,speed:.95,armour:.25,slowResist:.2,bounty:38,leak:3,gait:`stomp`,plan:`brute`,scale:.95,color:[.62,.32,.4],accent:[1,.78,.35],cadence:1.35},golem:{kind:`golem`,name:`Голем`,hint:`Каменный. Без пробития брони почти неуязвим.`,hp:760,speed:.72,armour:.62,slowResist:.45,bounty:58,leak:4,gait:`stomp`,plan:`golem`,scale:1.05,color:[.46,.48,.55],accent:[.5,.85,1],cadence:1.4},warden:{kind:`warden`,name:`Смотритель`,hint:`Босс. Броня, здоровье и шесть жизней ядра за один прорыв.`,hp:2600,speed:.66,armour:.45,slowResist:.55,bounty:180,leak:6,gait:`stomp`,plan:`warden`,scale:1.45,color:[.3,.24,.42],accent:[1,.42,.75],cadence:1.35}},u=[`runt`,`hound`,`slime`,`grub`,`wisp`,`brute`,`golem`,`warden`];function d(e){return e.gait===`fly`?.75:0}function f(e,t,n){return e*(1-Math.max(0,Math.min(t,1))*(1-Math.max(0,Math.min(n,1))))}function p(e,t){let n=Math.max(0,Math.min(t,1));return e+(1-e)*n}function m(e){return{s:e>>>0||2654435769}}function h(e){e.s=e.s+1831565813>>>0;let t=e.s;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function g(e,t,n){return n<=t?t:t+Math.floor(h(e)*(n-t+1))}function _(e,t,n){return t+h(e)*(n-t)}var v=[`ruby`,`sapphire`,`topaz`,`emerald`,`amethyst`,`onyx`],y={ruby:{kind:`ruby`,name:`Рубин`,glyph:`◆`,element:`Огонь`,trait:`Урон и поджог`,color:[1,.24,.22],weight:26},sapphire:{kind:`sapphire`,name:`Сапфир`,glyph:`❖`,element:`Лёд`,trait:`Замедление`,color:[.28,.58,1],weight:24},topaz:{kind:`topaz`,name:`Топаз`,glyph:`⬢`,element:`Молния`,trait:`Скорострельность и цепь`,color:[1,.82,.25],weight:20},emerald:{kind:`emerald`,name:`Изумруд`,glyph:`⬟`,element:`Природа`,trait:`Яд и дальность`,color:[.26,.92,.45],weight:16},amethyst:{kind:`amethyst`,name:`Аметист`,glyph:`✦`,element:`Тайна`,trait:`Пробитие брони и сплэш`,color:[.72,.42,1],weight:10},onyx:{kind:`onyx`,name:`Оникс`,glyph:`⬣`,element:`Тьма`,trait:`Критический урон`,color:[.52,.34,.68],weight:4}},b=[100,30,8,2,.5],x=.55;function S(e){return e>=5?1/0:Math.round(120*1.85**e)}function C(e){let t=1+x*Math.max(0,Math.min(e,5));return b.map((e,n)=>e*t**+n)}function w(e){let t=C(e),n=t.reduce((e,t)=>e+t,0);return t.map(e=>e/n)}function T(e,t){let n=0;for(let e of t)n+=Math.max(0,e);if(n<=0)return 0;let r=h(e)*n;for(let e=0;e<t.length;e++)if(r-=Math.max(0,t[e]),r<=0)return e;return t.length-1}function E(e,t,n){return{id:n,kind:v[T(e,v.map(e=>y[e].weight))],level:T(e,C(t))+1}}function D(e,t){let n=[];for(let r=0;r<4;r++){let i=v[g(e,0,3)];n.push({id:t+r,kind:i,level:1})}return n}function O(e){return Math.round(8*1.9**(e.level-1))}function k(e){return`shard-${e}`}function ee(e){return e.startsWith(`shard-`)}var A=e=>({splash:0,slowFactor:1,slowFor:0,dotDps:0,dotFor:0,chains:0,pierce:0,critChance:0,critMultiplier:1,...e}),te=[{id:`spark`,name:`Искра`,blurb:`Простая огненная башня. Бьёт по одной цели, поджигает.`,tier:1,ingredients:[{kind:`ruby`,level:1},{kind:`ruby`,level:1},{kind:`ruby`,level:1}],stats:A({damage:55,range:3.2,fireRate:1.1,dotDps:10,dotFor:2,shot:`bolt`,color:[1,.4,.16]})},{id:`frostbud`,name:`Изморозь`,blurb:`Бьёт слабо, зато держит врага на месте.`,tier:1,ingredients:[{kind:`sapphire`,level:1},{kind:`sapphire`,level:1},{kind:`sapphire`,level:1}],stats:A({damage:25,range:3,fireRate:1,slowFactor:.55,slowFor:1.4,shot:`bolt`,color:[.42,.78,1]})},{id:`coil`,name:`Катушка`,blurb:`Частые слабые разряды. Хороша против толпы мелочи.`,tier:1,ingredients:[{kind:`topaz`,level:1},{kind:`topaz`,level:1},{kind:`topaz`,level:1}],stats:A({damage:22,range:2.8,fireRate:3,shot:`arc`,color:[1,.9,.35]})},{id:`thorn`,name:`Терновник`,blurb:`Почти не бьёт, но отравляет надолго и достаёт далеко.`,tier:1,ingredients:[{kind:`emerald`,level:1},{kind:`emerald`,level:1},{kind:`emerald`,level:1}],stats:A({damage:15,range:3.8,fireRate:1,dotDps:22.5,dotFor:3,shot:`lob`,color:[.4,.95,.4]})},{id:`emberglass`,name:`Жар-стекло`,blurb:`Огонь, разогнанный молнией: быстрее «Искры» и злее.`,tier:1,ingredients:[{kind:`ruby`,level:1},{kind:`topaz`,level:1},{kind:`ruby`,level:1}],stats:A({damage:40,range:3.2,fireRate:1.9,dotDps:15,dotFor:2,shot:`bolt`,color:[1,.62,.2]})},{id:`brine`,name:`Стужа`,blurb:`Морозный яд: тормозит и травит разом.`,tier:1,ingredients:[{kind:`sapphire`,level:1},{kind:`emerald`,level:1},{kind:`sapphire`,level:1}],stats:A({damage:20,range:3.6,fireRate:1.2,slowFactor:.7,slowFor:1.6,dotDps:17.5,dotFor:2.5,shot:`lob`,color:[.4,.95,.85]})},{id:`forge`,name:`Горнило`,blurb:`Тяжёлый снаряд, взрывается и оставляет пожар.`,tier:2,ingredients:[{kind:`ruby`,level:3},{kind:`ruby`,level:2},{kind:`ruby`,level:2}],stats:A({damage:120,range:3.4,fireRate:.9,splash:1.1,dotDps:30,dotFor:3,shot:`lob`,color:[1,.35,.1]})},{id:`glacier`,name:`Глетчер`,blurb:`Волна холода: бьёт по площади и почти останавливает.`,tier:2,ingredients:[{kind:`sapphire`,level:3},{kind:`sapphire`,level:2},{kind:`sapphire`,level:2}],stats:A({damage:65,range:3.4,fireRate:1,splash:.9,slowFactor:.4,slowFor:2.2,shot:`beam`,color:[.5,.85,1]})},{id:`tesla`,name:`Тесла`,blurb:`Разряд перескакивает на соседей.`,tier:2,ingredients:[{kind:`topaz`,level:3},{kind:`topaz`,level:2},{kind:`topaz`,level:2}],stats:A({damage:50,range:3.6,fireRate:2.2,chains:2,shot:`arc`,color:[1,.95,.5]})},{id:`bloom`,name:`Цветение`,blurb:`Облако спор: медленно, но выкашивает всю группу.`,tier:2,ingredients:[{kind:`emerald`,level:3},{kind:`emerald`,level:2},{kind:`emerald`,level:2}],stats:A({damage:30,range:4.4,fireRate:1.1,splash:1.3,dotDps:65,dotFor:4,shot:`lob`,color:[.45,1,.5]})},{id:`prism`,name:`Призма`,blurb:`Луч, которому броня почти не мешает.`,tier:2,ingredients:[{kind:`amethyst`,level:2},{kind:`ruby`,level:2},{kind:`sapphire`,level:2}],stats:A({damage:85,range:4,fireRate:1.4,pierce:.6,shot:`beam`,color:[.95,.75,1]})},{id:`eclipse`,name:`Затмение`,blurb:`Редкий тяжёлый выстрел с шансом на критический удар.`,tier:2,ingredients:[{kind:`onyx`,level:2},{kind:`amethyst`,level:2},{kind:`amethyst`,level:2}],stats:A({damage:175,range:5.2,fireRate:.55,critChance:.3,critMultiplier:2.5,shot:`beam`,color:[.72,.5,1]})},{id:`sunspire`,name:`Солнечный шпиль`,blurb:`Столб огня по площади. Дорого и очень больно.`,tier:3,ingredients:[{kind:`ruby`,level:4},{kind:`topaz`,level:3},{kind:`amethyst`,level:3}],stats:A({damage:225,range:4.2,fireRate:1,splash:1.6,dotDps:75,dotFor:3,pierce:.3,shot:`lob`,color:[1,.55,.12]})},{id:`permafrost`,name:`Вечная мерзлота`,blurb:`Замораживает целые волны почти насмерть.`,tier:3,ingredients:[{kind:`sapphire`,level:4},{kind:`emerald`,level:3},{kind:`amethyst`,level:3}],stats:A({damage:112,range:4.4,fireRate:1.1,splash:1.5,slowFactor:.28,slowFor:3,dotDps:35,dotFor:3,shot:`beam`,color:[.6,.92,1]})},{id:`stormcrown`,name:`Венец бури`,blurb:`Молния прыгает по половине волны за раз.`,tier:3,ingredients:[{kind:`topaz`,level:4},{kind:`onyx`,level:3},{kind:`amethyst`,level:3}],stats:A({damage:115,range:4.6,fireRate:2.4,chains:4,pierce:.35,shot:`arc`,color:[1,.98,.65]})},{id:`voidwell`,name:`Провал`,blurb:`Один выстрел раз в две секунды — и от босса остаётся немного.`,tier:3,ingredients:[{kind:`onyx`,level:4},{kind:`onyx`,level:3},{kind:`amethyst`,level:4}],stats:A({damage:650,range:6,fireRate:.45,pierce:.8,critChance:.45,critMultiplier:3,shot:`beam`,color:[.6,.35,.95]})}],ne={ruby:A({damage:32,range:2.8,fireRate:.9,dotDps:5,dotFor:1.6,shot:`bolt`,color:[1,.45,.2]}),sapphire:A({damage:15,range:2.7,fireRate:.9,slowFactor:.74,slowFor:1.1,shot:`bolt`,color:[.45,.8,1]}),topaz:A({damage:18,range:2.6,fireRate:1.7,shot:`arc`,color:[1,.86,.3]}),emerald:A({damage:12,range:3.4,fireRate:.8,dotDps:12.5,dotFor:3,shot:`bolt`,color:[.4,.95,.5]}),amethyst:A({damage:30,range:3,fireRate:.8,splash:.55,pierce:.3,shot:`lob`,color:[.72,.5,1]}),onyx:A({damage:38,range:3,fireRate:.7,critChance:.25,critMultiplier:2,shot:`bolt`,color:[.62,.6,.72]})},re=Object.fromEntries(v.map(e=>[e,{id:k(e),name:`Осколок: ${y[e].name.toLowerCase()}`,blurb:`Камень, выставленный как есть. ${y[e].trait}, но вполсилы.`,tier:0,ingredients:[{kind:e,level:1}],stats:ne[e]}])),ie=v.map(e=>re[e]),ae=Object.fromEntries([...te,...ie].map(e=>[e.id,e]));function j(e){return ae[e]}function oe(e){if(e<=1)return[[0].slice(0,e)];let t=[];for(let n=0;n<e;n++)for(let r of oe(e-1)){let e=r.map(e=>e>=n?e+1:e);t.push([n,...e])}return t}var se=[oe(0),oe(1),oe(2),oe(3)];function ce(e,t){if(e.ingredients.length!==t.length)return null;let n=null;for(let r of se[t.length]){let i=0,a=!0;for(let n=0;n<e.ingredients.length;n++){let o=e.ingredients[n],s=t[r[n]];if(s.kind!==o.kind||s.level<o.level){a=!1;break}i+=s.level-o.level}a&&(n===null||i<n)&&(n=i)}return n}function le(e){if(e.length===1){let t=e[0];return{recipe:re[t.kind],surplus:t.level-1}}if(e.length<3||e.length>3)return null;let t=null,n=-1;for(let r of te){let i=ce(r,e);if(i===null)continue;let a=r.ingredients.reduce((e,t)=>e+t.level,0);a>n&&(n=a,t={recipe:r,surplus:i})}return t}function ue(e){let t=new Map,n=e.length;for(let r=0;r<n;r++)for(let i=r+1;i<n;i++)for(let a=i+1;a<n;a++){let n=[e[r],e[i],e[a]],o=le(n);if(!o)continue;let s=t.get(o.recipe.id);s&&s.surplus<=o.surplus||t.set(o.recipe.id,{...o,gemIds:n.map(e=>e.id)})}let r=e=>e.recipe.ingredients.reduce((e,t)=>e+t.level,0);return[...t.values()].sort((e,t)=>r(t)-r(e)||e.surplus-t.surplus)}var de=[0,1,1.8,3],fe=[0,1,1.1,1.2],pe=.14;function me(e,t){return de[Math.max(1,Math.min(e,3))]*(1+pe*t)}function he(e,t){return e.stats.range*fe[Math.max(1,Math.min(t,3))]}var M=o();function N({variant:e=`ghost`,size:t=`md`,block:n=!1,icon:r,meta:i,children:a,className:o=``,type:s=`button`,...c}){let l=[`btn`,`btn--${e}`,`btn--${t}`,n?`btn--block`:``,o].filter(Boolean).join(` `);return(0,M.jsxs)(`button`,{type:s,className:l,...c,children:[r?(0,M.jsx)(`span`,{className:`btn__icon`,"aria-hidden":`true`,children:r}):null,(0,M.jsx)(`span`,{className:`btn__label`,children:a}),i?(0,M.jsx)(`span`,{className:`btn__meta`,children:i}):null]})}function ge({title:e,hint:t,action:n,children:r,className:i=``,fullscreen:a=!1}){return(0,M.jsxs)(`section`,{className:`panel surface ${a?`panel--full`:``} ${i}`.trim(),children:[(e||n)&&(0,M.jsxs)(`header`,{className:`panel__head`,children:[(0,M.jsxs)(`div`,{className:`panel__heading`,children:[e?(0,M.jsx)(`h2`,{className:`panel__title`,children:e}):null,t?(0,M.jsx)(`p`,{className:`panel__hint`,children:t}):null]}),n?(0,M.jsx)(`div`,{className:`panel__action`,children:n}):null]}),(0,M.jsx)(`div`,{className:`panel__body scroll`,children:r})]})}var _e=()=>{let e=new Map;return{get:t=>e.get(t)??null,set:(t,n)=>void e.set(t,n),remove:t=>void e.delete(t)}};function ve(){try{if(typeof localStorage>`u`)return _e();let e=`__prism_probe__`;localStorage.setItem(e,`1`),localStorage.removeItem(e)}catch{return _e()}return{get:e=>{try{return localStorage.getItem(e)}catch{return null}},set:(e,t)=>{try{localStorage.setItem(e,t)}catch{}},remove:e=>{try{localStorage.removeItem(e)}catch{}}}}function ye(e,t,n){let r=e.get(t);if(r===null)return n;try{return JSON.parse(r)??n}catch{return n}}function be(e,t,n){try{e.set(t,JSON.stringify(n))}catch{}}var xe=`prism.history.v1`,Se=50,Ce=4e3;function we(e={}){let t=e.VITE_API_URL;return t?t.replace(/\/+$/,``):`/api`}var Te=class{baseUrl;store;fetchImpl;now;timeoutMs;reachable=null;constructor(e={}){this.baseUrl=e.baseUrl??`/api`,this.store=e.store??ve(),this.fetchImpl=e.fetchImpl??(typeof fetch==`function`?fetch.bind(globalThis):void 0),this.now=e.now??(()=>Date.now()),this.timeoutMs=e.timeoutMs??Ce}get online(){return this.reachable}async request(e,t){if(!this.fetchImpl)return null;let n=typeof AbortController==`function`?new AbortController:null,r=n?setTimeout(()=>n.abort(),this.timeoutMs):null;try{let r=await this.fetchImpl(`${this.baseUrl}${e}`,{...t,signal:n?.signal});return r.ok?(this.reachable=!0,await r.json()):(this.reachable=!1,null)}catch{return this.reachable=!1,null}finally{r!==null&&clearTimeout(r)}}localHistory(){let e=ye(this.store,xe,[]);return Array.isArray(e)?e:[]}remember(e){let t={...e,id:this.now(),createdAt:this.now(),local:!0},n=[t,...this.localHistory()].slice(0,Se);return be(this.store,xe,n),t}async submit(e,t){return this.remember(e),t?await this.request(`/scores`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)})?`published`:`local-only`:`declined`}async top(e,t=20){let n=new URLSearchParams;e&&n.set(`map`,e),n.set(`limit`,String(t));let r=await this.request(`/leaderboard?${n}`);return r&&Array.isArray(r.entries)?r.entries:this.localHistory().filter(t=>!e||t.mapId===e).sort((e,t)=>t.score-e.score||t.wave-e.wave).slice(0,t)}async ping(){return(await this.request(`/health`))?.ok===!0}clearHistory(){this.store.remove(xe)}},P=1/60,Ee=.6,De=.4,Oe=6.5,ke=3.2,Ae=1.5,je=.22,Me=.28,Ne=2.6,F=(e,t)=>({x:e,y:t}),Pe=(e,t)=>Math.hypot(e.x-t.x,e.y-t.y),Fe=(e,t)=>{let n=e.x-t.x,r=e.y-t.y;return n*n+r*r};function Ie(e,t,n){return e+(t-e)*n}function Le(e,t,n){return{x:Ie(e.x,t.x,n),y:Ie(e.y,t.y,n)}}function I(e,t,n){return e<t?t:e>n?n:e}function Re(e){return I(e,0,1)}function ze(e,t,n){let r=n.x-t.x,i=n.y-t.y,a=r*r+i*i;if(a<1e-12)return Pe(e,t);let o=((e.x-t.x)*r+(e.y-t.y)*i)/a;return o=Re(o),Math.hypot(e.x-(t.x+r*o),e.y-(t.y+i*o))}var L=[{id:`ridge`,name:`Тропа`,width:11,height:15,clearance:1,waves:20,blurb:`Три поворота и широкие поляны. Место, чтобы разобраться с рецептами.`,waypoints:[F(5.5,-1.5),F(5.5,2.5),F(2,2.5),F(2,6.5),F(9,6.5),F(9,10.5),F(5.5,10.5),F(5.5,16.5)],blocked:[[7,1],[8,2],[0,4],[1,9],[8,13],[3,13]]},{id:`spiral`,name:`Спираль`,width:12,height:16,clearance:.95,waves:24,blurb:`Дорога сворачивается внутрь: одна башня в середине достаёт до трёх витков.`,waypoints:[F(6,-1.5),F(6,2),F(10,2),F(10,13.5),F(2,13.5),F(2,5.5),F(7.5,5.5),F(7.5,10),F(5,10)],blocked:[[0,0],[11,0],[0,15],[11,15],[4,3],[8,8]]},{id:`rift`,name:`Разлом`,width:11,height:18,clearance:1,waves:28,blurb:`Длинная змейка с узкими перешейками. Каждая клетка на счету.`,waypoints:[F(2,-1.5),F(2,3),F(9,3),F(9,7),F(2,7),F(2,11),F(9,11),F(9,15),F(2,15),F(2,19.5)],blocked:[[5,1],[6,5],[4,9],[6,13],[9,17],[0,17]]}];function Be(e){return L.find(t=>t.id===e)??L[0]}function Ve(e){let t=e.waypoints,n=[0];for(let e=1;e<t.length;e++)n.push(n[e-1]+Pe(t[e-1],t[e]));return{points:t,cumulative:n,length:n[n.length-1]}}function He(e,t){let{points:n,cumulative:r,length:i}=e;if(t<=0)return{...n[0]};if(t>=i)return{...n[n.length-1]};let a=1;for(;a<r.length-1&&r[a]<t;)a++;let o=r[a]-r[a-1],s=o>1e-9?(t-r[a-1])/o:0;return Le(n[a-1],n[a],s)}function Ue(e,t){let{points:n,cumulative:r}=e,i=1;for(;i<r.length-1&&r[i]<t;)i++;let a=n[i-1],o=n[i],s=Pe(a,o)||1;return F((o.x-a.x)/s,(o.y-a.y)/s)}function We(e,t){let n=1/0;for(let r=1;r<e.points.length;r++){let i=ze(t,e.points[r-1],e.points[r]);i<n&&(n=i)}return n}var R=(e,t)=>F(e+.5,t+.5);function Ge(e,t,n){return t>=0&&n>=0&&t<e.width&&n<e.height}function Ke(e,t,n){return e.blocked.some(([e,r])=>e===t&&r===n)}function qe(e,t,n,r,i){return Ge(e,n,r)?Ke(e,n,r)?`blocked`:We(t,R(n,r))<e.clearance?`on-path`:i(n,r)?`occupied`:null:`out-of-bounds`}function Je(e,t){let n=new Uint8Array(e.width*e.height);for(let r=0;r<e.height;r++)for(let i=0;i<e.width;i++){let a=!Ke(e,i,r)&&We(t,R(i,r))>=e.clearance;n[r*e.width+i]=+!!a}return n}var Ye=[{kind:`runt`,wave:1,weight:12},{kind:`hound`,wave:3,weight:9},{kind:`slime`,wave:5,weight:8},{kind:`grub`,wave:7,weight:7},{kind:`brute`,wave:8,weight:4},{kind:`wisp`,wave:9,weight:6},{kind:`golem`,wave:12,weight:3}];function Xe(e){let t=Math.max(0,e-1);return 1+.15*t+.0075*t*t}function Ze(e){return 1+Math.min(.35,.012*Math.max(0,e-1))}function Qe(e){return e%10==0}function $e(e){return Math.min(30,5+Math.floor(e*1.1))}function et(e,t,n){let r=0;for(let e of n)r+=e;let i=e*r;for(let e=0;e<t.length;e++)if(i-=n[e],i<=0)return t[e];return t[t.length-1]}function tt(e,t,n){let r=m((t^e*2654435761)>>>0),i=Ye.filter(t=>e>=t.wave),a=i.map(e=>e.kind),o=i.map(t=>t.kind===`runt`?Math.max(1,t.weight-Math.floor(e/2)):t.weight),s=[],c=Xe(e),l=Ze(e),u=Math.max(16,Math.round(42-e*.7)),d=n,f=$e(e);for(let e=0;e<f;e++){let e=et(_(r,0,1),a,o);s.push({atTick:Math.round(d),kind:e,hpMul:c,speedMul:l}),d+=u*_(r,.78,1.25),g(r,0,5)===0&&(d+=u*1.6)}return Qe(e)&&s.push({atTick:Math.round(d+90),kind:`warden`,hpMul:c*(.7+e/10*.06),speedMul:l}),s.sort((e,t)=>e.atTick-t.atTick),s}function nt(e,t){let n=new Map;for(let r of tt(e,t,0))n.set(r.kind,(n.get(r.kind)??0)+1);return[...n.entries()].map(([e,t])=>({kind:e,count:t})).sort((e,t)=>t.count-e.count||e.kind.localeCompare(t.kind))}function rt(e){let t=Be(e);return{map:t,path:Ve(t)}}function it(e,t,n={}){let r=Be(e),i=m(t),a=n.emptyTray?[]:D(i,1);return{tick:0,mapId:r.id,seed:t>>>0,rng:i,status:`building`,gold:n.gold??140,lives:n.lives??20,wave:0,totalWaves:n.totalWaves??r.waves,refinement:0,placedOnWave:-1,towers:[],enemies:[],projectiles:[],beams:[],tray:a,queue:[],nextTowerId:1,nextEnemyId:1,nextGemId:a.length+1,nextShotId:1,score:0,kills:0,leaked:0,gemsForged:0,discovered:[],events:[]}}function z(e){return e.status===`won`||e.status===`lost`}function at(e,t,n){return e.towers.find(e=>e.cell.x===t&&e.cell.y===n)}function ot(e,t){return e.tray.find(e=>e.id===t)}function st(e){let t=j(e.kind).ingredients.length*e.level;return Math.floor(t*34*Ee)}function ct(e,t,n){if(z(t))return`wrong-state`;switch(n.type){case`forge`:{if(t.tray.length>=8)return`tray-full`;if(t.gold<32)return`no-gold`;t.gold-=32;let e=E(t.rng,t.refinement,t.nextGemId++);return t.tray.push(e),t.gemsForged+=1,t.events.push({type:`forge`,gem:e}),`ok`}case`refine`:{if(t.refinement>=5)return`maxed`;let e=S(t.refinement);return t.gold<e?`no-gold`:(t.gold-=e,t.refinement+=1,t.events.push({type:`refine`,level:t.refinement}),`ok`)}case`sellGem`:{let e=t.tray.findIndex(e=>e.id===n.gemId);return e<0?`no-gem`:(t.gold+=O(t.tray[e]),t.tray.splice(e,1),`ok`)}case`craft`:return lt(e,t,n);case`sellTower`:{let e=t.towers.findIndex(e=>e.id===n.towerId);if(e<0)return`no-tower`;let r=t.towers[e];return t.gold+=st(r),t.towers.splice(e,1),t.events.push({type:`sell`,x:r.cell.x+.5,y:r.cell.y+.5}),`ok`}case`startWave`:{if(t.wave>=t.totalWaves)return`wrong-state`;let e=t.status===`wave`;return t.wave+=1,t.queue.push(...tt(t.wave,t.seed,t.tick+36)),t.queue.sort((e,t)=>e.atTick-t.atTick),t.status=`wave`,e&&(t.gold+=Math.round((30+8*t.wave)*De)),t.events.push({type:`waveStart`,wave:t.wave}),`ok`}default:return`wrong-state`}}function lt(e,t,n){let r=[];for(let e of n.gemIds){let n=ot(t,e);if(!n||r.some(t=>t.id===e))return`no-gem`;r.push(n)}let i=le(r);if(!i)return`no-recipe`;if(t.placedOnWave>=t.wave)return`no-turn`;let a=Math.floor(n.cell.x),o=Math.floor(n.cell.y),s=at(t,a,o);if(s)return s.kind===i.recipe.id?s.level>=3?`max-level`:(s.level+=1,s.surplus+=i.surplus,ut(t,n.gemIds),t.placedOnWave=t.wave,t.events.push({type:`upgrade`,x:a+.5,y:o+.5,kind:s.kind,level:s.level}),`ok`):`wrong-tower`;let c=qe(e.map,e.path,a,o,(e,n)=>!!at(t,e,n));if(c)return c===`occupied`?`occupied`:`invalid-cell`;ut(t,n.gemIds),t.placedOnWave=t.wave;let l=!t.discovered.includes(i.recipe.id);return l&&t.discovered.push(i.recipe.id),t.towers.push({id:t.nextTowerId++,kind:i.recipe.id,cell:F(a,o),level:1,surplus:i.surplus,owner:n.owner,cooldown:0,facing:0,targetId:0,builtAtTick:t.tick}),t.events.push({type:`craft`,x:a+.5,y:o+.5,kind:i.recipe.id,level:1,firstTime:l}),`ok`}function ut(e,t){e.tray=e.tray.filter(e=>!t.includes(e.id))}function dt(e,t,n,r){let i=l[t],a=i.hp*n;e.enemies.push({id:e.nextEnemyId++,kind:t,dist:0,prevDist:0,hp:a,maxHp:a,speed:i.speed*r,armour:i.armour,slowResist:i.slowResist,bounty:i.bounty,leak:i.leak,slowFactor:1,slowFor:0,dotDps:0,dotFor:0,flash:0,phase:0,wobble:_(e.rng,0,Math.PI*2)})}function ft(e,t,n=[]){if(t.events.length=0,z(t))return;for(let r of n)ct(e,t,r);for(;t.queue.length>0&&t.queue[0].atTick<=t.tick;){let e=t.queue.shift();dt(t,e.kind,e.hpMul,e.speedMul)}let r=pt(e,t);if(mt(t),gt(e,t,r),Ct(t,r),wt(t),Tt(e,t,r),t.lives<=0){t.lives=0,t.status=`lost`,t.events.push({type:`lost`}),t.tick+=1;return}if(t.status===`wave`&&t.queue.length===0&&t.enemies.length===0){let e=30+8*t.wave;t.gold+=e,t.score+=e,t.events.push({type:`waveClear`,wave:t.wave,bonus:e}),t.wave>=t.totalWaves?(t.status=`won`,t.score+=t.lives*60,t.events.push({type:`won`})):t.status=`building`}t.tick+=1}function pt(e,t){let n=Array(t.enemies.length);for(let r=0;r<t.enemies.length;r++){let i=t.enemies[r];i.prevDist=i.dist,i.slowFor>0&&(i.slowFor=Math.max(0,i.slowFor-P),i.slowFor===0&&(i.slowFactor=1));let a=i.speed*i.slowFactor*P;i.dist+=a,i.phase+=a*l[i.kind].cadence,i.flash=Math.max(0,i.flash-P*4),n[r]=He(e.path,i.dist)}return n}function mt(e){for(let t of e.enemies)t.dotFor<=0||(t.dotFor=Math.max(0,t.dotFor-P),t.hp-=t.dotDps*P,t.dotFor===0&&(t.dotDps=0))}function ht(e,t,n,r){let i=r*r,a=-1,o=-1;for(let r=0;r<e.enemies.length;r++){let s=e.enemies[r];s.hp<=0||Fe(t[r],n)>i||s.dist>o&&(o=s.dist,a=r)}return a}function gt(e,t,n){for(let r of t.towers){r.cooldown=Math.max(0,r.cooldown-P);let i=j(r.kind),a=R(r.cell.x,r.cell.y),o=ht(t,n,a,he(i,r.level));if(o<0){r.targetId=0;continue}r.targetId=t.enemies[o].id;let s=n[o];r.facing=Math.atan2(s.x-a.x,s.y-a.y),!(r.cooldown>0)&&(r.cooldown=1/Math.max(.05,i.stats.fireRate),vt(e,t,r,i,a,o,n))}}function _t(e,t,n){let r=me(n.level,n.surplus),i=t.stats.damage*r;return t.stats.critChance>0&&h(e.rng)<t.stats.critChance&&(i*=t.stats.critMultiplier),i}function vt(e,t,n,r,i,a,o){let s=r.stats,c=_t(t,r,n),l=fe[Math.min(n.level,3)],u=s.splash*l,d=t.enemies[a],f=o[a];if(s.shot===`bolt`||s.shot===`lob`){if(t.projectiles.length>=220)return;t.projectiles.push({id:t.nextShotId++,kind:n.kind,style:s.shot,from:i,aim:{...f},targetId:d.id,t:0,speed:(s.shot===`lob`?ke:Oe)/Math.max(.6,Pe(i,f)),damage:c,splash:u,pierce:s.pierce,slowFactor:s.slowFactor,slowFor:s.slowFor,dotDps:s.dotDps,dotFor:s.dotFor,color:s.color,arc:s.shot===`lob`?Ae:0});return}let p=[i,{...f}];xt(t,a,c,s.pierce,s.slowFactor,s.slowFor,s.dotDps,s.dotFor),u>0&&bt(t,o,f,u,c*.6,s.pierce,a),s.shot===`arc`&&s.chains>0&&yt(t,o,a,s.chains,c,r,p),St(t,{id:t.nextShotId++,style:s.shot,points:p,color:s.color,life:s.shot===`arc`?Me:je,maxLife:s.shot===`arc`?Me:je,width:s.shot===`arc`?.07:.11}),t.events.push({type:`impact`,x:f.x,y:f.y,color:s.color,splash:u})}function yt(e,t,n,r,i,a,o){let s=new Set([n]),c=n,l=i;for(let n=0;n<r;n++){l*=.72;let n=-1,r=Ne*Ne;for(let i=0;i<e.enemies.length;i++){if(s.has(i)||e.enemies[i].hp<=0)continue;let a=Fe(t[i],t[c]);a<r&&(r=a,n=i)}if(n<0)break;s.add(n),xt(e,n,l,a.stats.pierce,a.stats.slowFactor,a.stats.slowFor,0,0),o.push({...t[n]}),c=n}}function bt(e,t,n,r,i,a,o){let s=r*r;for(let r=0;r<e.enemies.length;r++)r===o||e.enemies[r].hp<=0||Fe(t[r],n)>s||xt(e,r,i,a,1,0,0,0)}function xt(e,t,n,r,i,a,o,s){let c=e.enemies[t];if(!(!c||c.hp<=0)){if(c.hp-=f(n,c.armour,r),c.flash=1,i<1&&a>0){let e=p(i,c.slowResist);(e<c.slowFactor||c.slowFor<=0)&&(c.slowFactor=e),c.slowFor=Math.max(c.slowFor,a)}o>0&&s>0&&(c.dotDps=Math.max(c.dotDps,o),c.dotFor=Math.max(c.dotFor,s))}}function St(e,t){e.beams.length>=120&&e.beams.shift(),e.beams.push(t)}function Ct(e,t){for(let n=e.projectiles.length-1;n>=0;n--){let r=e.projectiles[n],i=e.enemies.findIndex(e=>e.id===r.targetId&&e.hp>0);i>=0&&(r.aim={...t[i]}),r.t+=r.speed*P,!(r.t<1)&&(e.projectiles.splice(n,1),i>=0&&xt(e,i,r.damage,r.pierce,r.slowFactor,r.slowFor,r.dotDps,r.dotFor),r.splash>0&&bt(e,t,r.aim,r.splash,r.damage*.6,r.pierce,i),e.events.push({type:`impact`,x:r.aim.x,y:r.aim.y,color:r.color,splash:r.splash}))}}function wt(e){for(let t=e.beams.length-1;t>=0;t--)e.beams[t].life-=P,e.beams[t].life<=0&&e.beams.splice(t,1)}function Tt(e,t,n){let r=e.path.length;for(let e=t.enemies.length-1;e>=0;e--){let i=t.enemies[e];if(i.hp<=0){t.gold+=i.bounty,t.score+=i.bounty,t.kills+=1,t.events.push({type:`kill`,x:n[e].x,y:n[e].y,bounty:i.bounty,color:l[i.kind].color}),t.enemies.splice(e,1);continue}i.dist>=r&&(t.lives-=i.leak,t.leaked+=1,t.events.push({type:`leak`,x:n[e].x,y:n[e].y,damage:i.leak}),t.enemies.splice(e,1))}}function Et(e,t,n){return He(e.path,t.prevDist+(t.dist-t.prevDist)*Re(n))}function Dt(e){return d(l[e.kind])}var Ot=class{inputDelay;owner;tick=0;remoteHorizon;solo=!1;dropped=0;pending=new Map;seq=0;constructor(e={}){this.inputDelay=Math.max(1,e.inputDelay??8),this.owner=e.owner??0,this.remoteHorizon=this.inputDelay}get localHorizon(){return this.tick+this.inputDelay}schedule(e){let t={t:`cmd`,tick:this.localHorizon,seq:this.seq++,owner:this.owner,cmd:e};return this.enqueue(t),t}receive(e){return e.tick<this.tick?(this.dropped+=1,!1):(this.enqueue(e),e.tick-this.inputDelay>this.remoteHorizon&&(this.remoteHorizon=e.tick-this.inputDelay),!0)}receiveHorizon(e){e>this.remoteHorizon&&(this.remoteHorizon=e)}enqueue(e){let t=this.pending.get(e.tick);t?t.push(e):this.pending.set(e.tick,[e])}canAdvance(){return this.solo||this.tick<this.remoteHorizon}get slack(){return this.solo?1/0:this.remoteHorizon-this.tick}commandsForTick(){let e=this.pending.get(this.tick);return e?(e.sort((e,t)=>e.owner-t.owner||e.seq-t.seq),e.map(e=>e.cmd)):[]}advance(){this.pending.delete(this.tick),this.tick+=1}reset(e){this.pending.clear(),this.tick=e,this.remoteHorizon=e+this.inputDelay}get queuedCount(){let e=0;for(let t of this.pending.values())e+=t.length;return e}},kt={tick:0,gold:0,lives:0,wave:0,totalWaves:0,status:`building`,kills:0,leaked:0,score:0,enemies:0,towers:0,refinement:0,refineCost:0,queued:0,canPlace:!1,tray:[],discovered:[]},At=6,jt=4,Mt=class e{ctx=null;state=null;lockstep=new Ot({inputDelay:1,owner:0});hud={...kt};active=!1;mode=`solo`;mapId=`ridge`;seed=1;selectedGemIds=[];selectedTowerId=null;hoverCell=null;hoverValid=!1;hoverReason=null;speed=1;paused=!1;stalled=!1;towerPeak=0;onEvent;onLocalCommand;onFinished;accumulator=0;finished=!1;constructor(){n(this,{ctx:!1,state:!1,lockstep:!1,onEvent:!1,onLocalCommand:!1,onFinished:!1})}start(e,t,n=`solo`,r=0){let i=Be(e);this.mapId=i.id,this.seed=t>>>0,this.mode=n,this.ctx=rt(i.id),this.state=it(i.id,this.seed),this.active=!0,this.lockstep=new Ot({inputDelay:n===`solo`?1:8,owner:r}),this.lockstep.solo=n===`solo`,this.accumulator=0,this.finished=!1,this.stalled=!1,this.paused=!1,this.speed=1,this.selectedGemIds=[],this.selectedTowerId=null,this.hoverCell=null,this.towerPeak=0,this.syncHud()}get running(){return this.active}get map(){return Be(this.mapId)}get isOver(){return this.state?z(this.state):!1}get forgeCost(){return 32}get trayFull(){return this.hud.tray.length>=8}get canForge(){return!this.trayFull&&this.hud.gold>=32&&!this.isOver}get canRefine(){return this.hud.refinement<5&&this.hud.gold>=this.hud.refineCost}get nextWavePreview(){return this.state?nt(Math.min(this.state.wave+1,this.state.totalWaves),this.seed):[]}get selectedGems(){let e=new Map(this.hud.tray.map(e=>[e.id,e]));return this.selectedGemIds.map(t=>e.get(t)).filter(e=>e!==void 0)}get pendingRecipe(){let e=this.selectedGems;return e.length===0?null:le(e)}get combinations(){return ue(this.hud.tray)}get readyGemIds(){let e=new Set;for(let t of this.combinations)for(let n of t.gemIds)e.add(n);return e}selectCombination(e=0){let t=this.combinations[e];t&&(this.selectedGemIds=[...t.gemIds],this.selectedTowerId=null,this.refreshHoverValidity())}get selectedTower(){if(!this.state||this.selectedTowerId===null)return null;let e=this.state.towers.find(e=>e.id===this.selectedTowerId);if(!e)return null;let t=j(e.kind),n=me(e.level,e.surplus);return{tower:e,recipe:t,level:e.level,maxLevel:3,range:he(t,e.level),damage:Math.round(t.stats.damage*n),fireRate:t.stats.fireRate,sellValue:st(e),canUpgradeNow:e.level<3&&this.pendingRecipe?.recipe.id===e.kind}}toggleGem(e){this.selectedGemIds=this.selectedGemIds.indexOf(e)>=0?this.selectedGemIds.filter(t=>t!==e):this.selectedGemIds.length>=3?[...this.selectedGemIds.slice(1),e]:[...this.selectedGemIds,e],this.selectedTowerId=null,this.refreshHoverValidity()}clearSelection(){this.selectedGemIds=[],this.refreshHoverValidity()}forge(){this.canForge&&this.issue({type:`forge`,owner:this.lockstep.owner})}refine(){this.canRefine&&this.issue({type:`refine`,owner:this.lockstep.owner})}sellGem(e){this.selectedGemIds=this.selectedGemIds.filter(t=>t!==e),this.issue({type:`sellGem`,gemId:e,owner:this.lockstep.owner})}select(e){this.selectedTowerId=e}towerAtCell(e,t){return this.state?.towers.find(n=>n.cell.x===e&&n.cell.y===t)}setHoverWorld(e){if(!e||!this.ctx||!this.state){this.hoverCell=null,this.hoverValid=!1,this.hoverReason=null;return}let t=Math.floor(e.x),n=Math.floor(e.y);this.hoverCell&&this.hoverCell.x===t&&this.hoverCell.y===n||(this.hoverCell=F(t,n),this.refreshHoverValidity())}refreshHoverValidity(){let e=this.pendingRecipe;if(!this.hoverCell||!this.ctx||!this.state||!e){this.hoverValid=!1,this.hoverReason=e?null:`no-recipe`;return}if(!this.hud.canPlace){this.hoverValid=!1,this.hoverReason=`no-turn`;return}let{x:t,y:n}=this.hoverCell,r=this.towerAtCell(t,n);if(r){if(r.kind!==e.recipe.id){this.hoverValid=!1,this.hoverReason=`wrong-tower`;return}if(r.level>=3){this.hoverValid=!1,this.hoverReason=`max-level`;return}this.hoverValid=!0,this.hoverReason=null;return}let i=qe(this.ctx.map,this.ctx.path,t,n,(e,t)=>!!this.towerAtCell(e,t));this.hoverValid=i===null,this.hoverReason=i}tapWorld(e){if(!this.state||!this.ctx)return;let t=Math.floor(e.x),n=Math.floor(e.y);if(this.pendingRecipe){if(this.hoverCell=F(t,n),this.refreshHoverValidity(),!this.hoverValid)return;this.issue({type:`craft`,gemIds:[...this.selectedGemIds],cell:F(t,n),owner:this.lockstep.owner}),this.selectedGemIds=[],this.refreshHoverValidity();return}let r=this.towerAtCell(t,n);this.select(r?r.id:null)}sellSelectedTower(){this.selectedTowerId!==null&&(this.issue({type:`sellTower`,towerId:this.selectedTowerId,owner:this.lockstep.owner}),this.selectedTowerId=null)}issue(e){if(!this.state||this.isOver)return;let t=this.lockstep.schedule(e);this.onLocalCommand?.(t)}startWave(){this.issue({type:`startWave`,owner:this.lockstep.owner})}setSpeed(e){this.speed=e}cycleSpeed(){this.speed=this.speed===1?2:this.speed===2?3:1}togglePause(){this.paused=!this.paused}advance(e){let t=this.state,n=this.ctx;if(!t||!n)return 0;if(this.paused||z(t))return this.finish(t),this.accumulator/P;this.accumulator+=Math.min(e,.25)*this.speed;let i=0,a=!1,o=!1;for(;this.accumulator>=.016666666666666666&&i<At;){if(!this.lockstep.canAdvance()){o=!0;break}if(ft(n,t,this.lockstep.commandsForTick()),t.events.length>0){a=!0;for(let e of t.events)this.onEvent?.(e)}this.lockstep.advance(),this.accumulator-=P,i+=1}return o!==this.stalled&&r(()=>void(this.stalled=o)),(a||t.tick%jt===0)&&this.syncHud(),z(t)&&this.finish(t),Math.min(1,this.accumulator/P)}finish(e){!this.finished&&z(e)&&(this.finished=!0,this.syncHud(),this.onFinished?.(e))}static traySignature(e){return e.map(e=>`${e.id}:${e.kind}:${e.level}`).join(`|`)}syncHud(){let t=this.state;if(!t){r(()=>void(this.hud={...kt}));return}let n={tick:t.tick,gold:Math.floor(t.gold),lives:t.lives,wave:t.wave,totalWaves:t.totalWaves,status:t.status,kills:t.kills,leaked:t.leaked,score:Math.floor(t.score),enemies:t.enemies.length,towers:t.towers.length,refinement:t.refinement,refineCost:S(t.refinement),queued:t.queue.length,canPlace:t.placedOnWave<t.wave,tray:t.tray.map(e=>({...e})),discovered:[...t.discovered]},i=this.hud,a=e.traySignature(i.tray)!==e.traySignature(n.tray)||i.discovered.length!==n.discovered.length;if(!a){for(let e of Object.keys(n))if(e!==`tray`&&e!==`discovered`&&i[e]!==n[e]){a=!0;break}}a&&r(()=>{this.hud=n,n.towers>this.towerPeak&&(this.towerPeak=n.towers);let e=new Set(n.tray.map(e=>e.id)),t=this.selectedGemIds.filter(t=>e.has(t));t.length!==this.selectedGemIds.length&&(this.selectedGemIds=t),this.refreshHoverValidity()})}adoptState(e){this.state=e,this.ctx=rt(e.mapId),this.lockstep.reset(e.tick),this.accumulator=0,this.selectedGemIds=[],this.syncHud()}stop(){this.state=null,this.ctx=null,this.active=!1,this.selectedGemIds=[],this.selectedTowerId=null,this.hoverCell=null,this.finished=!1,this.syncHud()}};function Nt(e){let t=2166136261,n=e=>{let n=e|0;t^=n&255,t=Math.imul(t,16777619),t^=n>>>8&255,t=Math.imul(t,16777619),t^=n>>>16&255,t=Math.imul(t,16777619),t^=n>>>24&255,t=Math.imul(t,16777619)};n(e.tick),n(Math.round(e.gold)),n(e.lives),n(e.wave),n(e.refinement),n(e.placedOnWave),n(e.kills),n(e.leaked),n(e.rng.s),n(e.nextTowerId),n(e.nextEnemyId),n(e.nextGemId),n(e.towers.length),n(e.enemies.length),n(e.tray.length),n(e.queue.length),n(e.status.charCodeAt(0));for(let t of e.towers)n(t.id),n(t.cell.x),n(t.cell.y),n(t.level),n(t.surplus),n(t.kind.charCodeAt(0)*31+t.kind.length);for(let t of e.tray)n(t.id),n(t.level),n(t.kind.charCodeAt(0));for(let t of e.enemies)n(t.id),n(Math.round(t.dist*1e3)),n(Math.round(t.hp*100)),n(Math.round(t.slowFor*100)),n(Math.round(t.dotFor*100));return t>>>0}function Pt(e){return JSON.stringify({tick:e.tick,mapId:e.mapId,seed:e.seed,rng:e.rng.s,status:e.status,gold:e.gold,lives:e.lives,wave:e.wave,totalWaves:e.totalWaves,refinement:e.refinement,placedOnWave:e.placedOnWave,nextTowerId:e.nextTowerId,nextEnemyId:e.nextEnemyId,nextGemId:e.nextGemId,nextShotId:e.nextShotId,score:e.score,kills:e.kills,leaked:e.leaked,gemsForged:e.gemsForged,discovered:e.discovered,towers:e.towers.map(e=>[e.id,e.kind,e.cell.x,e.cell.y,e.level,e.surplus,e.owner,e.builtAtTick]),tray:e.tray.map(e=>[e.id,e.kind,e.level]),enemies:e.enemies.map(e=>[e.id,e.kind,e.dist,e.hp,e.maxHp,e.speed,e.armour,e.slowResist,e.bounty,e.leak,e.slowFactor,e.slowFor,e.dotDps,e.dotFor,e.phase,e.wobble]),queue:e.queue.map(e=>[e.atTick,e.kind,e.hpMul,e.speedMul])})}var Ft=new Set([`building`,`wave`,`won`,`lost`]),It=class extends Error{constructor(e){super(e),this.name=`DeserializeError`}},B=(e,t=0)=>typeof e==`number`&&Number.isFinite(e)?e:t;function Lt(e){let t;try{t=JSON.parse(e)}catch{throw new It(`Снимок состояния повреждён`)}if(!t||typeof t!=`object`)throw new It(`Снимок состояния повреждён`);if(typeof t.mapId!=`string`)throw new It(`В снимке нет карты`);let n=t.status,r=Array.isArray(t.towers)?t.towers.map(e=>({id:B(e[0]),kind:e[1],cell:F(B(e[2]),B(e[3])),level:B(e[4],1),surplus:B(e[5]),owner:B(e[6]),cooldown:0,facing:0,targetId:0,builtAtTick:B(e[7])})):[],i=Array.isArray(t.tray)?t.tray.map(e=>({id:B(e[0]),kind:e[1],level:B(e[2],1)})):[],a=Array.isArray(t.enemies)?t.enemies.map(e=>{let t=B(e[2]);return{id:B(e[0]),kind:e[1],dist:t,prevDist:t,hp:B(e[3]),maxHp:B(e[4],1),speed:B(e[5]),armour:B(e[6]),slowResist:B(e[7]),bounty:B(e[8]),leak:B(e[9],1),slowFactor:B(e[10],1),slowFor:B(e[11]),dotDps:B(e[12]),dotFor:B(e[13]),flash:0,phase:B(e[14]),wobble:B(e[15])}}):[],o=Array.isArray(t.queue)?t.queue.map(e=>({atTick:B(e[0]),kind:e[1],hpMul:B(e[2],1),speedMul:B(e[3],1)})):[],s=m(B(t.seed));return s.s=B(t.rng,s.s)>>>0,{tick:B(t.tick),mapId:t.mapId,seed:B(t.seed)>>>0,rng:s,status:Ft.has(n)?n:`building`,gold:B(t.gold),lives:B(t.lives),wave:B(t.wave),totalWaves:B(t.totalWaves,20),refinement:B(t.refinement),placedOnWave:B(t.placedOnWave,-1),towers:r,enemies:a,projectiles:[],beams:[],tray:i,queue:o,nextTowerId:B(t.nextTowerId,r.length+1),nextEnemyId:B(t.nextEnemyId,a.length+1),nextGemId:B(t.nextGemId,i.length+1),nextShotId:B(t.nextShotId,1),score:B(t.score),kills:B(t.kills),leaked:B(t.leaked),gemsForged:B(t.gemsForged),discovered:Array.isArray(t.discovered)?t.discovered:[],events:[]}}var Rt=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`;function zt(e){let t=``;for(let n=0;n<e.length;n+=3){let r=e[n],i=e[n+1],a=e[n+2];if(t+=Rt[r>>2],t+=Rt[(r&3)<<4|(i??0)>>4],i===void 0||(t+=Rt[(i&15)<<2|(a??0)>>6],a===void 0))break;t+=Rt[a&63]}return t}function Bt(e){let t=e.replace(/[^A-Za-z0-9\-_]/g,``),n=new Uint8Array(Math.floor(t.length*3/4)),r=0,i=0,a=0;for(let e of t){let t=Rt.indexOf(e);t<0||(r=r<<6|t,i+=6,i>=8&&(i-=8,n[a++]=r>>i&255))}return n.subarray(0,a)}var V=class extends Error{constructor(e){super(e),this.name=`SignalCodeError`}},Vt=`m=application 9 UDP/DTLS/SCTP webrtc-datachannel,a=fingerprint:sha-256 ,a=max-message-size:,a=extmap-allow-mixed,a=end-of-candidates,a=ice-options:trickle,a=msid-semantic: WMS, IN IP4 127.0.0.1,c=IN IP4 0.0.0.0,a=group:BUNDLE ,a=setup:actpass,a=setup:passive,a=setup:active,a=tcptype active,a=candidate:,a=ice-ufrag:,a=sctp-port:,a=ice-pwd:,generation 0,network-cost ,tcptype active,network-id ,typ srflx,typ relay,typ prflx,typ host,raddr ,rport ,a=mid:, udp , tcp ,o=- ,t=0 0,\r
,v=0,s=-`.split(`,`),Ht=``,Ut=32,Wt=Vt.map((e,t)=>({token:e,index:t})).sort((e,t)=>t.token.length-e.token.length),Gt=/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/;function Kt(e){if(Gt.test(e)||Vt.length>95)return null;let t=``,n=0;outer:for(;n<e.length;){for(let{token:r,index:i}of Wt)if(e.startsWith(r,n)){t+=Ht+String.fromCharCode(Ut+i),n+=r.length;continue outer}t+=e[n],n+=1}return t}function qt(e){let t=``;for(let n=0;n<e.length;n++){if(e[n]!==Ht){t+=e[n];continue}let r=Vt[e.charCodeAt(n+1)-Ut];if(r===void 0)throw new V(`Код повреждён — скопируйте его целиком`);t+=r,n+=1}return t}function Jt(){return typeof CompressionStream<`u`&&typeof DecompressionStream<`u`}async function Yt(e,t){let n=new Blob([e]).stream().pipeThrough(t),r=await new Response(n).arrayBuffer();return new Uint8Array(r)}async function Xt(e){return Jt()?Yt(e,new CompressionStream(`deflate-raw`)):e}async function Zt(e){return Jt()?Yt(e,new DecompressionStream(`deflate-raw`)):e}var Qt=new Set([`T`,`D`,`S`,`R`]);async function $t(e){let t=Kt(e.sdp),n=t!==null,r=await Xt(new TextEncoder().encode(t??e.sdp)),i=Jt()?n?`T`:`D`:n?`S`:`R`;return`PL1${e.kind}${i}${zt(r)}`}async function en(e){let t=e.trim().replace(/^.*?[#?](?:j|join|code)=/i,``).replace(/\s+/g,``);if(!t.startsWith(`PL1`))throw new V(`Не похоже на код подключения`);let n=t[3],r=t[4];if(n!==`o`&&n!==`a`)throw new V(`Неизвестный тип кода`);if(!Qt.has(r))throw new V(`Неизвестный формат кода`);let i=t.slice(5);if(i.length===0)throw new V(`Код пустой`);let a=Bt(i),o;try{o=r===`T`||r===`D`?await Zt(a):a}catch{throw new V(`Код повреждён — скопируйте его целиком`)}let s=new TextDecoder().decode(o),c=r===`T`||r===`S`?qt(s):s;if(!c.startsWith(`v=`))throw new V(`Код повреждён — скопируйте его целиком`);return{kind:n,sdp:c}}function tn(e,t){let[n]=t.split(`#`);return`${n}#j=${e}`}function nn(e){let t=e.match(/[#?](?:j|join|code)=([A-Za-z0-9\-_]+)/);return t?t[1]:null}function rn(e){return JSON.stringify(e)}function an(e){if(typeof e!=`string`)return null;let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!=`object`)return null;let n=t;switch(n.t){case`hello`:{let e=n;return typeof e.v!=`number`||typeof e.seed!=`number`||typeof e.mapId!=`string`||e.mode!==`coop`&&e.mode!==`duel`?null:{t:`hello`,v:e.v,name:typeof e.name==`string`?e.name.slice(0,24):`Игрок`,seed:e.seed>>>0,mapId:e.mapId,mode:e.mode}}case`ready`:return{t:`ready`};case`cmd`:{let e=n;return typeof e.tick!=`number`||typeof e.seq!=`number`||typeof e.owner!=`number`||!cn(e.cmd)?null:{t:`cmd`,tick:e.tick|0,seq:e.seq|0,owner:e.owner|0,cmd:e.cmd}}case`hz`:{let e=n;return typeof e.tick==`number`?{t:`hz`,tick:e.tick|0,checkTick:typeof e.checkTick==`number`?e.checkTick|0:-1,check:typeof e.check==`number`?e.check>>>0:0}:null}case`sync`:{let e=n;return typeof e.state==`string`?{t:`sync`,state:e.state}:null}case`ping`:case`pong`:{let e=n;return typeof e.id!=`number`||typeof e.sent!=`number`?null:{t:n.t,id:e.id,sent:e.sent}}case`bye`:{let e=n;return{t:`bye`,reason:typeof e.reason==`string`?e.reason.slice(0,120):``}}default:return null}}var on=3;function sn(e){if(!e||typeof e!=`object`)return!1;let t=e;return typeof t.x==`number`&&typeof t.y==`number`&&Number.isFinite(t.x)&&Number.isFinite(t.y)}function cn(e){if(!e||typeof e!=`object`)return!1;let t=e;if(typeof t.owner!=`number`)return!1;switch(t.type){case`craft`:return!Array.isArray(t.gemIds)||t.gemIds.length===0||t.gemIds.length>on||!t.gemIds.every(e=>typeof e==`number`&&Number.isFinite(e))||new Set(t.gemIds).size!==t.gemIds.length?!1:sn(t.cell);case`sellGem`:return typeof t.gemId==`number`&&Number.isFinite(t.gemId);case`sellTower`:return typeof t.towerId==`number`&&Number.isFinite(t.towerId);case`forge`:case`refine`:case`startWave`:return!0;default:return!1}}var ln=[{urls:`stun:stun.l.google.com:19302`},{urls:`stun:stun.cloudflare.com:3478`}],un=class extends Error{constructor(){super(`WebRTC недоступен в этом браузере`),this.name=`PeerUnavailableError`}},dn=`prism`,fn=class{role=null;status=`idle`;onStatus;onMessage;onOpen;onClose;pc=null;channel=null;options;rttMs=0;pingId=0;constructor(e={}){let t=e.createConnection??(e=>{if(typeof RTCPeerConnection>`u`)throw new un;return new RTCPeerConnection(e)});this.options={iceServers:e.iceServers??ln,createConnection:t,gatherTimeoutMs:e.gatherTimeoutMs??3500,now:e.now??(()=>Date.now())}}get rtt(){return this.rttMs}get isConnected(){return this.status===`connected`&&this.channel?.readyState===`open`}setStatus(e,t){this.status!==e&&(this.status=e,this.onStatus?.(e,t))}createConnection(){let e=this.options.createConnection({iceServers:this.options.iceServers});return e.onconnectionstatechange=()=>{switch(e.connectionState){case`connected`:this.setStatus(`connected`);break;case`failed`:this.setStatus(`failed`,`Соединение не установилось`);break;case`disconnected`:this.setStatus(`connecting`,`Связь потеряна, пробуем восстановить`);break;case`closed`:this.setStatus(`closed`)}},this.pc=e,e}attachChannel(e){this.channel=e,e.binaryType=`arraybuffer`,e.onopen=()=>{this.setStatus(`connected`),this.onOpen?.()},e.onclose=()=>{this.status!==`closed`&&(this.setStatus(`closed`),this.onClose?.(`Канал закрыт`))},e.onmessage=e=>this.handleFrame(e.data)}handleFrame(e){let t=an(e);if(t){if(t.t===`ping`){this.send({t:`pong`,id:t.id,sent:t.sent});return}if(t.t===`pong`){this.rttMs=Math.max(0,this.options.now()-t.sent);return}if(t.t===`bye`){this.onClose?.(t.reason||`Игрок вышел`),this.close();return}this.onMessage?.(t)}}waitForGathering(e){return e.iceGatheringState===`complete`?Promise.resolve():new Promise(t=>{let n=!1,r=()=>{n||(n=!0,clearTimeout(a),e.removeEventListener?.(`icegatheringstatechange`,i),t())},i=()=>{e.iceGatheringState===`complete`&&r()},a=setTimeout(r,this.options.gatherTimeoutMs);e.addEventListener?.(`icegatheringstatechange`,i),e.addEventListener||(e.onicegatheringstatechange=i)})}async createOffer(){this.role=`host`,this.setStatus(`offering`);let e=this.createConnection();this.attachChannel(e.createDataChannel(dn,{ordered:!0}));let t=await e.createOffer();await e.setLocalDescription(t),await this.waitForGathering(e);let n=e.localDescription?.sdp??t.sdp??``;if(!n)throw this.setStatus(`failed`,`Не удалось собрать предложение`),new V(`Не удалось создать код — попробуйте ещё раз`);return this.setStatus(`awaiting-answer`),$t({kind:`o`,sdp:n})}async acceptOffer(e){let t=await en(e);if(t.kind!==`o`)throw new V(`Это код ответа, а не приглашение`);this.role=`guest`,this.setStatus(`answering`);let n=this.createConnection();n.ondatachannel=e=>this.attachChannel(e.channel),await n.setRemoteDescription({type:`offer`,sdp:t.sdp});let r=await n.createAnswer();await n.setLocalDescription(r),await this.waitForGathering(n);let i=n.localDescription?.sdp??r.sdp??``;if(!i)throw this.setStatus(`failed`,`Не удалось собрать ответ`),new V(`Не удалось создать ответный код`);return this.setStatus(`connecting`),$t({kind:`a`,sdp:i})}async acceptAnswer(e){let t=await en(e);if(t.kind!==`a`)throw new V(`Это приглашение, а не код ответа`);if(!this.pc)throw new V(`Сначала создайте приглашение`);await this.pc.setRemoteDescription({type:`answer`,sdp:t.sdp}),this.setStatus(`connecting`)}send(e){let t=this.channel;if(!t||t.readyState!==`open`)return!1;try{return t.send(rn(e)),!0}catch{return!1}}ping(){this.send({t:`ping`,id:this.pingId++,sent:this.options.now()})}close(e=``){e&&this.send({t:`bye`,reason:e});try{this.channel?.close()}catch{}try{this.pc?.close()}catch{}this.channel=null,this.pc=null,this.setStatus(`closed`)}};function pn(){return typeof crypto<`u`&&typeof crypto.getRandomValues==`function`?crypto.getRandomValues(new Uint32Array(1))[0]>>>0:(Date.now()^Date.now()<<13)>>>0}var mn=4,hn=60,gn=30,_n=class{game;settings;makeLink;stage=`idle`;peerStatus=`idle`;role=null;mode=`coop`;outboundCode=``;error=``;peerName=``;rtt=0;desyncs=0;resyncing=!1;link=null;history=new Map;lastHorizonSent=-1;pingTimer=null;constructor(e,t,r=e=>new fn(e)){this.game=e,this.settings=t,this.makeLink=r,n(this,{},{autoBind:!0})}get connected(){return this.peerStatus===`connected`}get iceServers(){return this.settings.useStun?ln:[]}static inviteFromUrl(e){return nn(e)}shareUrl(e){return tn(this.outboundCode,e)}attach(e){e.onStatus=(e,t)=>{r(()=>{this.peerStatus=e,e===`failed`&&(this.stage=`error`,this.error=t??`Не удалось подключиться`)})},e.onOpen=()=>this.handleOpen(),e.onClose=e=>this.handleClose(e),e.onMessage=e=>this.handleMessage(e),this.link=e}async host(e,t){this.reset(),this.role=`host`,this.mode=t;let n=this.makeLink({iceServers:this.iceServers});this.attach(n);try{let i=await n.createOffer();return r(()=>{this.outboundCode=i,this.stage=`invite-ready`}),this.pendingStart={mapId:e,seed:pn(),mode:t},i}catch(e){throw this.fail(e),e}}async join(e){this.reset(),this.role=`guest`;let t=this.makeLink({iceServers:this.iceServers});this.attach(t);try{let n=await t.acceptOffer(e);return r(()=>{this.outboundCode=n,this.stage=`answer-ready`}),n}catch(e){throw this.fail(e),e}}async completeHandshake(e){if(!this.link){this.fail(Error(`Сначала создайте приглашение`));return}try{await this.link.acceptAnswer(e),r(()=>void(this.stage=`connecting`))}catch(e){throw this.fail(e),e}}pendingStart=null;handleOpen(){if(r(()=>{this.stage=`connecting`,this.error=``}),this.role===`host`&&this.pendingStart){let{mapId:e,seed:t,mode:n}=this.pendingStart;this.link?.send({t:`hello`,v:1,name:this.settings.displayName,seed:t,mapId:e,mode:n}),this.beginMatch(e,t,n,0)}this.pingTimer??=setInterval(()=>this.link?.ping(),2e3)}handleClose(e){r(()=>{this.stage=this.stage===`playing`?`error`:`idle`,this.error=e,this.peerStatus=`closed`}),this.stopTimers()}handleMessage(e){switch(e.t){case`hello`:if(e.v!==1){this.fail(Error(`У игроков разные версии игры`)),this.link?.close(`версия`);return}r(()=>void(this.peerName=e.name)),this.role===`guest`&&(this.beginMatch(e.mapId,e.seed,e.mode,1),this.link?.send({t:`hello`,v:1,name:this.settings.displayName,seed:e.seed,mapId:e.mapId,mode:e.mode}),this.link?.send({t:`ready`}));break;case`ready`:r(()=>void(this.stage=`playing`));break;case`cmd`:this.game.lockstep.receive(e);break;case`hz`:this.game.lockstep.receiveHorizon(e.tick),e.checkTick>=0&&this.compare(e.checkTick,e.check);break;case`sync`:this.applySync(e.state)}r(()=>void(this.rtt=this.link?.rtt??0))}beginMatch(e,t,n,i){this.mode=n,this.game.start(e,t,n,i),this.game.onLocalCommand=e=>void this.link?.send(e),this.history.clear(),this.lastHorizonSent=-1,r(()=>void(this.stage=`playing`))}pump(){let e=this.link,t=this.game.state;if(!e||!t||this.stage!==`playing`)return;let n=this.game.lockstep;if(t.tick%hn===0&&this.history.set(t.tick,Nt(t)),this.history.size>8){let e=Math.min(...this.history.keys());this.history.delete(e)}if(n.tick-this.lastHorizonSent<mn)return;this.lastHorizonSent=n.tick;let r=Math.max(0,Math.floor((t.tick-gn)/hn)*hn),i=this.history.get(r);e.send({t:`hz`,tick:n.localHorizon,checkTick:i===void 0?-1:r,check:i??0})}compare(e,t){let n=this.history.get(e);n!==void 0&&n!==t&&(r(()=>{this.desyncs+=1,this.resyncing=!0}),this.role===`host`&&this.game.state&&(this.link?.send({t:`sync`,state:Pt(this.game.state)}),r(()=>void(this.resyncing=!1))))}applySync(e){if(this.role!==`host`)try{this.game.adoptState(Lt(e)),r(()=>void(this.resyncing=!1))}catch(e){this.fail(e)}}fail(e){let t=e instanceof Error?e.message:String(e);r(()=>{this.stage=`error`,this.error=t})}reset(e=``){this.link?.close(e),this.stopTimers(),r(()=>{this.link=null,this.stage=`idle`,this.peerStatus=`idle`,this.role=null,this.outboundCode=``,this.error=``,this.peerName=``,this.rtt=0,this.resyncing=!1}),this.history.clear(),this.pendingStart=null,this.game.onLocalCommand=void 0}leave(){this.reset(`Игрок вышел`)}stopTimers(){this.pingTimer!==null&&(clearInterval(this.pingTimer),this.pingTimer=null)}},vn={midnight:{id:`midnight`,name:`Полночь`,blurb:`Тёмное поле под звёздами. Светится только то, что стреляет.`,sky:{zenith:[.012,.014,.035],horizon:[.055,.048,.115],glow:[.1,.05,.16],nebula:[.06,.02,.14],tint:[.24,.3,.5],stars:1},ground:{grassLow:[.012,.032,.022],grassHigh:[.03,.068,.04],tuft:[.02,.052,.02],roadLow:[.3,.26,.21],roadHigh:[.42,.37,.3],kerb:[.3,.28,.25],flow:[.16,.13,.07],accent:[.45,.78,1],sun:[1,1,1],ambient:.5,void:[0,0,0]},post:{threshold:1.1,bloom:1,vignette:.55,grain:1}},meadow:{id:`meadow`,name:`Полдень`,blurb:`Солнечный день: зелёная трава, песчаная дорога, всё видно сразу.`,sky:{zenith:[.1,.22,.52],horizon:[.52,.68,.88],glow:[.38,.4,.3],nebula:[.16,.18,.2],tint:[.7,.78,.9],stars:0},ground:{grassLow:[.038,.098,.03],grassHigh:[.105,.225,.062],tuft:[.04,.085,.018],roadLow:[.34,.28,.19],roadHigh:[.56,.47,.32],kerb:[.4,.38,.33],flow:[.18,.15,.08],accent:[.95,.92,.55],sun:[1.12,1.08,.95],ambient:.62,void:[.14,.2,.28]},post:{threshold:1.35,bloom:.55,vignette:.32,grain:.4}},dusk:{id:`dusk`,name:`Закат`,blurb:`Длинный тёплый свет, оранжевый горизонт, фиолетовые тени.`,sky:{zenith:[.035,.03,.095],horizon:[.34,.14,.13],glow:[.55,.2,.06],nebula:[.2,.07,.11],tint:[.8,.42,.28],stars:.45},ground:{grassLow:[.014,.02,.016],grassHigh:[.04,.052,.026],tuft:[.03,.03,.012],roadLow:[.3,.19,.13],roadHigh:[.52,.34,.2],kerb:[.3,.22,.19],flow:[.24,.13,.05],accent:[1,.68,.34],sun:[1.12,.88,.7],ambient:.52,void:[.09,.04,.07]},post:{threshold:1,bloom:1.25,vignette:.62,grain:.9}},frost:{id:`frost`,name:`Стужа`,blurb:`Снежное поле и тёмная мокрая дорога. Врага видно за версту.`,sky:{zenith:[.055,.085,.145],horizon:[.4,.5,.62],glow:[.26,.3,.34],nebula:[.14,.17,.22],tint:[.62,.74,.9],stars:.25},ground:{grassLow:[.145,.195,.29],grassHigh:[.56,.63,.74],tuft:[-.06,-.06,-.05],roadLow:[.055,.06,.075],roadHigh:[.135,.145,.175],kerb:[.24,.27,.32],flow:[.1,.13,.18],accent:[.4,.82,1],sun:[.98,1.02,1.1],ambient:.66,void:[.1,.14,.2]},post:{threshold:1.45,bloom:.7,vignette:.38,grain:.5}},ember:{id:`ember`,name:`Пепел`,blurb:`Чёрный базальт, тлеющие трещины, пепельное небо.`,sky:{zenith:[.03,.014,.014],horizon:[.19,.075,.045],glow:[.42,.12,.03],nebula:[.24,.07,.03],tint:[.9,.35,.12],stars:.15},ground:{grassLow:[.014,.012,.014],grassHigh:[.046,.034,.032],tuft:[.2,.055,.01],roadLow:[.22,.2,.19],roadHigh:[.4,.36,.33],kerb:[.17,.14,.13],flow:[.3,.1,.02],accent:[1,.44,.18],sun:[1.05,.9,.82],ambient:.55,void:[.03,.01,.01]},post:{threshold:.95,bloom:1.35,vignette:.66,grain:1.1}},jade:{id:`jade`,name:`Нефрит`,blurb:`Плоские чистые цвета без свечения и зерна. Ровно и спокойно.`,sky:{zenith:[.045,.115,.135],horizon:[.16,.34,.36],glow:[.12,.24,.22],nebula:[0,0,0],tint:[.4,.7,.68],stars:0},ground:{grassLow:[.035,.115,.098],grassHigh:[.075,.205,.168],tuft:[.022,.055,.042],roadLow:[.3,.34,.3],roadHigh:[.5,.55,.48],kerb:[.22,.28,.26],flow:[.1,.16,.12],accent:[.55,1,.86],sun:[1,1.04,1],ambient:.78,void:[.05,.11,.11]},post:{threshold:1.6,bloom:.3,vignette:.24,grain:0}}},yn=[`midnight`,`dusk`,`ember`,`meadow`,`frost`,`jade`],bn=`midnight`;function xn(e){return typeof e==`string`&&Object.prototype.hasOwnProperty.call(vn,e)}function Sn(e){return xn(e)?vn[e]:vn[bn]}var Cn=`prism.settings.v1`,H={quality:`high`,theme:bn,sound:!0,haptics:!0,playerName:`Игрок`,useStun:!0,shareScores:!1},wn=class{store;quality=H.quality;theme=H.theme;sound=H.sound;haptics=H.haptics;playerName=H.playerName;useStun=H.useStun;shareScores=H.shareScores;constructor(e=ve()){this.store=e;let t=ye(this.store,Cn,{});this.apply(t),n(this,{},{autoBind:!0})}apply(e){(e.quality===`low`||e.quality===`medium`||e.quality===`high`)&&(this.quality=e.quality),xn(e.theme)&&(this.theme=e.theme),typeof e.sound==`boolean`&&(this.sound=e.sound),typeof e.haptics==`boolean`&&(this.haptics=e.haptics),typeof e.useStun==`boolean`&&(this.useStun=e.useStun),typeof e.shareScores==`boolean`&&(this.shareScores=e.shareScores),typeof e.playerName==`string`&&e.playerName.trim()&&(this.playerName=e.playerName.trim().slice(0,24))}get snapshot(){return{quality:this.quality,theme:this.theme,sound:this.sound,haptics:this.haptics,playerName:this.playerName,useStun:this.useStun,shareScores:this.shareScores}}setQuality(e){this.quality=e,this.persist()}setTheme(e){this.theme=e,this.persist()}setPlayerName(e){this.playerName=e.slice(0,24),this.persist()}get displayName(){return this.playerName.trim()||H.playerName}toggleSound(){this.sound=!this.sound,this.persist()}toggleHaptics(){this.haptics=!this.haptics,this.persist()}toggleStun(){this.useStun=!this.useStun,this.persist()}toggleShareScores(){this.shareScores=!this.shareScores,this.persist()}reset(){this.apply(H),this.quality=H.quality,this.theme=H.theme,this.playerName=H.playerName,this.persist()}persist(){be(this.store,Cn,this.snapshot)}},Tn=2600,En=class{schedule;screen=`menu`;toasts=[];sheetOpen=!1;resultsOpen=!1;nextToastId=1;timers=new Map;constructor(e=setTimeout){this.schedule=e,n(this,{},{autoBind:!0})}go(e){this.screen=e,e!==`game`&&(this.sheetOpen=!1,this.resultsOpen=!1)}toast(e,t=`info`){let n=this.nextToastId++;if(this.toasts.push({id:n,text:e,tone:t}),this.toasts.length>3){let e=this.toasts.shift();e&&this.clearTimer(e.id)}let r=this.schedule(()=>this.dismiss(n),Tn);return this.timers.set(n,r),n}dismiss(e){this.toasts=this.toasts.filter(t=>t.id!==e),this.clearTimer(e)}clearTimer(e){let t=this.timers.get(e);t!==void 0&&(clearTimeout(t),this.timers.delete(e))}openSheet(){this.sheetOpen=!0}closeSheet(){this.sheetOpen=!1}showResults(){this.resultsOpen=!0,this.sheetOpen=!1}hideResults(){this.resultsOpen=!1}dispose(){for(let e of this.timers.values())clearTimeout(e);this.timers.clear(),this.toasts=[]}},Dn=class{settings=new wn;ui=new En;game=new Mt;net;leaderboard;constructor(e){this.net=new _n(this.game,this.settings),this.leaderboard=e??new Te({baseUrl:we({BASE_URL:`./`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1})}),this.game.onFinished=e=>{this.ui.showResults(),this.recordRun(e.status===`won`)}}async recordRun(e){let{hud:t,mapId:n,mode:r,towerPeak:i}=this.game;try{await this.leaderboard.submit({player:this.settings.displayName,mapId:n,mode:r,score:t.score,wave:t.wave,kills:t.kills,leaked:t.leaked,towerPeak:i,won:e},this.settings.shareScores)===`local-only`&&this.settings.shareScores&&this.ui.toast(`Таблица недоступна — результат сохранён локально`)}catch{}}personalBest(e=5){return this.leaderboard.localHistory().filter(e=>e.mapId===this.game.mapId).sort((e,t)=>t.score-e.score||t.wave-e.wave).slice(0,e)}dispose(){this.net.reset(),this.game.stop(),this.ui.dispose()}},On=(0,s.createContext)(null),kn=On.Provider;function An(){let e=(0,s.useContext)(On);if(!e)throw Error(`useStores вызван вне StoreProvider`);return e}var U=()=>An().game,W=()=>An().ui,jn=()=>An().settings,Mn=()=>An().net,Nn={1:`Простые`,2:`Составные`,3:`Высшие`};function Pn(e){let t=e=>Math.round(Math.max(0,Math.min(1,e))*255);return`rgb(${t(e[0])}, ${t(e[1])}, ${t(e[2])})`}var Fn=i(function({initialTab:e=`recipes`}={}){let t=W(),n=U(),[r,i]=(0,s.useState)(e),a=new Set(n.hud.discovered);return(0,M.jsxs)(ge,{fullscreen:!0,title:`Книга алхимика`,hint:`Три камня складываются в башню. Уровень камня в рецепте — это «не ниже».`,action:(0,M.jsx)(N,{size:`sm`,"aria-label":`Закрыть`,onClick:()=>t.go(`menu`),children:`✕`}),children:[(0,M.jsx)(`div`,{className:`book__tabs`,role:`tablist`,children:[[`recipes`,`Рецепты`],[`gems`,`Камни`],[`enemies`,`Враги`]].map(([e,t])=>(0,M.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":r===e,className:`book__tab ${r===e?`book__tab--on`:``}`.trim(),onClick:()=>i(e),children:t},e))}),r===`recipes`?(0,M.jsx)(In,{discovered:a}):null,r===`gems`?(0,M.jsx)(Rn,{refinement:n.hud.refinement}):null,r===`enemies`?(0,M.jsx)(zn,{}):null]})});function In({discovered:e}){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`p`,{className:`book__lead`,children:[(0,M.jsx)(`strong`,{children:`Ход — это волна.`}),` За ход на поле ложится ровно одна вещь: собранный рецепт или один камень как есть. Повышение уровня — тоже ход, так что копить камни ради хорошей комбинации имеет смысл.`]}),(0,M.jsxs)(`p`,{className:`book__lead`,children:[`Повторите рецепт и поставьте его на свою же башню — она поднимется на уровень выше, до `,3,`-го. Камни выше требуемого уровня не пропадают: каждый лишний уровень добавляет башне силы.`]}),(0,M.jsx)(`p`,{className:`book__lead`,children:`Не сложилось ничего — не беда: одинокий камень тоже можно поставить. Осколок бьёт примерно вполсилы рецепта, зато занимает клетку и тянет время.`}),[1,2,3].map(t=>(0,M.jsxs)(`section`,{className:`book__tier`,children:[(0,M.jsx)(`h3`,{className:`book__tier-name`,children:Nn[t]}),(0,M.jsx)(`ul`,{className:`book__list`,children:te.filter(e=>e.tier===t).map(t=>(0,M.jsx)(Ln,{recipe:t,known:e.has(t.id)},t.id))})]},t))]})}function Ln({recipe:e,known:t}){let n=e.stats;return(0,M.jsxs)(`li`,{className:`recipe ${t?`recipe--known`:``}`.trim(),children:[(0,M.jsx)(`div`,{className:`recipe__formula`,children:e.ingredients.map((e,t)=>{let n=y[e.kind];return(0,M.jsxs)(`span`,{className:`recipe__ing`,children:[(0,M.jsx)(`span`,{className:`recipe__gem`,style:{background:Pn(n.color)},"aria-hidden":`true`,children:n.glyph}),(0,M.jsxs)(`span`,{className:`recipe__ing-name`,children:[n.name,(0,M.jsxs)(`b`,{className:`mono`,children:[` `,e.level,`+`]})]})]},`${e.kind}-${t}`)})}),(0,M.jsxs)(`div`,{className:`recipe__result`,children:[(0,M.jsxs)(`strong`,{className:`recipe__name`,style:{color:Pn(n.color)},children:[e.name,t?(0,M.jsx)(`span`,{className:`recipe__known`,title:`Уже собирали`,children:`✓`}):null]}),(0,M.jsx)(`p`,{className:`recipe__blurb`,children:e.blurb}),(0,M.jsxs)(`ul`,{className:`recipe__stats mono`,children:[(0,M.jsxs)(`li`,{children:[Math.round(n.damage),` урона`]}),(0,M.jsxs)(`li`,{children:[n.fireRate.toFixed(1),`/с`]}),(0,M.jsxs)(`li`,{children:[n.range.toFixed(1),` радиус`]}),n.splash>0?(0,M.jsx)(`li`,{className:`recipe__tag`,children:`сплэш`}):null,n.slowFactor<1?(0,M.jsx)(`li`,{className:`recipe__tag`,children:`замедление`}):null,n.dotDps>0?(0,M.jsx)(`li`,{className:`recipe__tag`,children:`яд/огонь`}):null,n.chains>0?(0,M.jsxs)(`li`,{className:`recipe__tag`,children:[`цепь ×`,n.chains]}):null,n.pierce>0?(0,M.jsxs)(`li`,{className:`recipe__tag`,children:[`броня −`,Math.round(n.pierce*100),`%`]}):null,n.critChance>0?(0,M.jsx)(`li`,{className:`recipe__tag`,children:`крит`}):null]})]})]})}function Rn({refinement:e}){let t=w(e);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`p`,{className:`book__lead`,children:[`Очистка не открывает новых камней — она поднимает уровень тех, что падают. Сейчас ступень `,e,` из `,5,`.`]}),(0,M.jsxs)(`section`,{className:`book__tier`,children:[(0,M.jsx)(`h3`,{className:`book__tier-name`,children:`Шанс уровня при текущей очистке`}),(0,M.jsx)(`ul`,{className:`chances`,children:t.map((e,t)=>(0,M.jsxs)(`li`,{className:`chance`,children:[(0,M.jsx)(`span`,{className:`chance__level mono`,children:t+1}),(0,M.jsx)(`span`,{className:`chance__bar`,style:{"--w":`${Math.round(e*100)}%`}}),(0,M.jsxs)(`span`,{className:`chance__value mono`,children:[(e*100).toFixed(+(e<.1)),`%`]})]},t))})]}),(0,M.jsxs)(`section`,{className:`book__tier`,children:[(0,M.jsx)(`h3`,{className:`book__tier-name`,children:`Что даёт каждый камень`}),(0,M.jsx)(`ul`,{className:`book__list`,children:v.map(e=>{let t=y[e];return(0,M.jsxs)(`li`,{className:`gemrow`,children:[(0,M.jsx)(`span`,{className:`recipe__gem`,style:{background:Pn(t.color)},"aria-hidden":`true`,children:t.glyph}),(0,M.jsxs)(`div`,{className:`gemrow__text`,children:[(0,M.jsxs)(`strong`,{children:[t.name,` `,(0,M.jsx)(`span`,{className:`gemrow__element`,children:t.element})]}),(0,M.jsx)(`span`,{children:t.trait})]}),(0,M.jsx)(`span`,{className:`gemrow__rarity mono`,title:`Относительная частота выпадения`,children:t.weight})]},e)})}),(0,M.jsxs)(`p`,{className:`book__note`,children:[`Уровни камней — от 1 до `,5,`. Число справа — относительная частота: оникс попадается вшестеро реже рубина.`]})]})]})}function zn(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`p`,{className:`book__lead`,children:`Походка выдаёт врага раньше подписи: прыгуна не удержать замедлением в воздухе, летун не касается земли, а панцирная гусеница ползёт медленно, но съедает половину урона.`}),(0,M.jsx)(`ul`,{className:`book__list`,children:u.map(e=>{let t=l[e];return(0,M.jsxs)(`li`,{className:`enemyrow`,children:[(0,M.jsx)(`span`,{className:`enemyrow__dot`,style:{background:Pn(t.color)},"aria-hidden":`true`}),(0,M.jsxs)(`div`,{className:`enemyrow__text`,children:[(0,M.jsx)(`strong`,{children:t.name}),(0,M.jsx)(`span`,{children:t.hint})]}),(0,M.jsxs)(`ul`,{className:`enemyrow__stats mono`,children:[(0,M.jsxs)(`li`,{children:[t.hp,` ХП`]}),t.armour>0?(0,M.jsxs)(`li`,{children:[`броня `,Math.round(t.armour*100),`%`]}):null,(0,M.jsxs)(`li`,{children:[t.speed.toFixed(1),` кл/с`]})]})]},e)})})]})}function Bn(){return Vn(new Float32Array(16))}function Vn(e){return e.fill(0),e[0]=e[5]=e[10]=e[15]=1,e}function Hn(e,t,n,r,i){let a=1/Math.tan(t/2),o=1/(r-i);return e.fill(0),e[0]=a/n,e[5]=a,e[10]=(i+r)*o,e[11]=-1,e[14]=2*i*r*o,e}function Un(e,t,n,r){let i=t.x-n.x,a=t.y-n.y,o=t.z-n.z,s=Math.hypot(i,a,o)||1;i/=s,a/=s,o/=s;let c=r.y*o-r.z*a,l=r.z*i-r.x*o,u=r.x*a-r.y*i;s=Math.hypot(c,l,u),s<1e-6?(c=1,l=0,u=0):(c/=s,l/=s,u/=s);let d=a*u-o*l,f=o*c-i*u,p=i*l-a*c;return e[0]=c,e[1]=d,e[2]=i,e[3]=0,e[4]=l,e[5]=f,e[6]=a,e[7]=0,e[8]=u,e[9]=p,e[10]=o,e[11]=0,e[12]=-(c*t.x+l*t.y+u*t.z),e[13]=-(d*t.x+f*t.y+p*t.z),e[14]=-(i*t.x+a*t.y+o*t.z),e[15]=1,e}function Wn(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=t[9],p=t[10],m=t[11],h=t[12],g=t[13],_=t[14],v=t[15];for(let t=0;t<4;t++){let y=n[t*4],b=n[t*4+1],x=n[t*4+2],S=n[t*4+3];e[t*4]=y*r+b*s+x*d+S*h,e[t*4+1]=y*i+b*c+x*f+S*g,e[t*4+2]=y*a+b*l+x*p+S*_,e[t*4+3]=y*o+b*u+x*m+S*v}return e}function Gn(e,t){let n=e[0]*t.x+e[4]*t.y+e[8]*t.z+e[12],r=e[1]*t.x+e[5]*t.y+e[9]*t.z+e[13],i=e[2]*t.x+e[6]*t.y+e[10]*t.z+e[14],a=e[3]*t.x+e[7]*t.y+e[11]*t.z+e[15],o=Math.abs(a)>1e-9?1/a:1;return{x:n*o,y:r*o,z:i*o,w:a}}function Kn(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],m=t[12],h=t[13],g=t[14],_=t[15],v=n*s-r*o,y=n*c-i*o,b=n*l-a*o,x=r*c-i*s,S=r*l-a*s,C=i*l-a*c,w=u*h-d*m,T=u*g-f*m,E=u*_-p*m,D=d*g-f*h,O=d*_-p*h,k=f*_-p*g,ee=v*k-y*O+b*D+x*E-S*T+C*w;if(Math.abs(ee)<1e-12)return null;let A=1/ee;return e[0]=(s*k-c*O+l*D)*A,e[1]=(i*O-r*k-a*D)*A,e[2]=(h*C-g*S+_*x)*A,e[3]=(f*S-d*C-p*x)*A,e[4]=(c*E-o*k-l*T)*A,e[5]=(n*k-i*E+a*T)*A,e[6]=(g*b-m*C-_*y)*A,e[7]=(u*C-f*b+p*y)*A,e[8]=(o*O-s*E+l*w)*A,e[9]=(r*E-n*O-a*w)*A,e[10]=(m*S-h*b+_*v)*A,e[11]=(d*b-u*S-p*v)*A,e[12]=(s*T-o*D-c*w)*A,e[13]=(n*D-r*T+i*w)*A,e[14]=(h*y-m*x-g*v)*A,e[15]=(u*x-d*y+f*v)*A,e}var qn=(e,t,n)=>({x:e,y:t,z:n}),Jn={minDistance:7,maxDistance:46,minPitch:.62,maxPitch:1.34},Yn=class e{limits;target;distance;yaw;pitch;fov=52*Math.PI/180;view=Bn();proj=Bn();viewProj=Bn();invViewProj=Bn();invValid=!1;constructor(e=F(0,0),t=18,n=-Math.PI/4,r=1,i=Jn){this.limits=i,this.target={...e},this.distance=t,this.yaw=n,this.pitch=r}eye(){let e=Math.cos(this.pitch)*this.distance;return qn(this.target.x+Math.sin(this.yaw)*e,Math.sin(this.pitch)*this.distance,this.target.y+Math.cos(this.yaw)*e)}update(e,t=.4,n=160){let r=this.eye();Un(this.view,r,qn(this.target.x,0,this.target.y),qn(0,1,0)),Hn(this.proj,this.fov,Math.max(e,.001),t,n),Wn(this.viewProj,this.proj,this.view),this.invValid=!1}zoomBy(e){this.distance=I(this.distance*e,this.limits.minDistance,this.limits.maxDistance)}orbitBy(e,t){this.yaw+=e,this.pitch=I(this.pitch+t,this.limits.minPitch,this.limits.maxPitch)}panBy(e,t){let n=Math.sin(this.yaw),r=Math.cos(this.yaw);this.target=F(this.target.x+e*r-t*n,this.target.y-e*n-t*r)}static TILES_ACROSS=8.5;fitDistance(t,n,r){let i=Math.min(t,e.TILES_ACROSS),a=Math.tan(this.fov*.5),o=i*.5/(a*Math.max(r,.001)),s=Math.max(t,n)*.62/a;return Math.min(o,s)}frame(e,t,n){this.target=F(e/2,t/2),this.distance=I(this.fitDistance(e,t,n),this.limits.minDistance,this.limits.maxDistance)}clampTarget(e,t,n=4){this.target=F(I(this.target.x,-n,e+n),I(this.target.y,-n,t+n))}screenToGround(e,t){if(!this.invValid){if(!Kn(this.invViewProj,this.viewProj))return Vn(this.invViewProj),null;this.invValid=!0}let n=Gn(this.invViewProj,qn(e,t,-1)),r=Gn(this.invViewProj,qn(e,t,1)),i=r.y-n.y;if(Math.abs(i)<1e-6)return null;let a=-n.y/i;return a<0?null:F(n.x+(r.x-n.x)*a,n.z+(r.z-n.z)*a)}};function Xn(e,t,n){return F((e-n.left)/Math.max(n.width,1)*2-1,-((t-n.top)/Math.max(n.height,1)*2-1))}var Zn=class extends Error{constructor(e=`WebGL2 недоступен в этом браузере`){super(e),this.name=`WebGlUnavailableError`}},Qn=/Android|iPhone|iPad|iPod|Mobile|Silk/i;function $n(e){return Qn.test(e)}function er(e,t){let n=$n(e)?2:2.5;return Math.max(1,Math.min(t||1,n))}function tr(e){let t=e.getContext(`webgl2`,{alpha:!1,antialias:!1,depth:!0,stencil:!1,powerPreference:`high-performance`,preserveDrawingBuffer:!1,desynchronized:!0});if(!t)throw new Zn;let n=!!t.getExtension(`EXT_color_buffer_half_float`)||!!t.getExtension(`EXT_color_buffer_float`),r=typeof navigator>`u`?``:navigator.userAgent;return{gl:t,canvas:e,caps:{halfFloatColor:n,maxSamples:t.getParameter(t.MAX_SAMPLES),maxTextureSize:t.getParameter(t.MAX_TEXTURE_SIZE),maxPixelRatio:er(r,typeof devicePixelRatio>`u`?1:devicePixelRatio)}}}function nr(e,t=1){let{canvas:n,caps:r}=e,i=r.maxPixelRatio*t,a=Math.max(1,Math.round(n.clientWidth*i)),o=Math.max(1,Math.round(n.clientHeight*i));return n.width===a&&n.height===o?!1:(n.width=a,n.height=o,!0)}var G={torso:0,head:1,leg:2,arm:3,wing:4,segment:5,rigid:6,tail:7},rr={walk:0,hop:1,crawl:2,fly:3,stomp:4},K=(e,t,n)=>({shape:`ball`,pos:[e,t,n],size:[.09,.09,.07],role:G.head,phase:0,accent:1}),ir={goblin:[{shape:`box`,pos:[0,.6,0],size:[.38,.44,.3],role:G.torso,phase:0,accent:0},{shape:`ball`,pos:[0,.98,.03],size:[.34,.32,.32],role:G.head,phase:0,accent:0},{shape:`wedge`,pos:[-.21,1.06,-.02],size:[.16,.14,.08],role:G.head,phase:0,accent:1},{shape:`wedge`,pos:[.21,1.06,-.02],size:[.16,.14,.08],role:G.head,phase:0,accent:1},K(-.09,1,.16),K(.09,1,.16),{shape:`box`,pos:[-.27,.68,0],size:[.1,.32,.1],role:G.arm,phase:.5,accent:0},{shape:`box`,pos:[.27,.68,0],size:[.1,.32,.1],role:G.arm,phase:0,accent:0},{shape:`box`,pos:[-.12,.22,0],size:[.13,.28,.13],role:G.leg,phase:0,accent:0},{shape:`box`,pos:[.12,.22,0],size:[.13,.28,.13],role:G.leg,phase:.5,accent:0}],hound:[{shape:`box`,pos:[0,.46,-.02],size:[.3,.26,.62],role:G.torso,phase:0,accent:0},{shape:`box`,pos:[0,.56,.3],size:[.2,.2,.22],role:G.torso,phase:0,accent:0},{shape:`box`,pos:[0,.6,.48],size:[.24,.22,.28],role:G.head,phase:0,accent:0},{shape:`box`,pos:[0,.54,.66],size:[.15,.13,.16],role:G.head,phase:0,accent:1},{shape:`wedge`,pos:[-.1,.74,.44],size:[.1,.14,.07],role:G.head,phase:0,accent:1},{shape:`wedge`,pos:[.1,.74,.44],size:[.1,.14,.07],role:G.head,phase:0,accent:1},{shape:`box`,pos:[-.13,.19,.22],size:[.1,.32,.1],role:G.leg,phase:0,accent:0},{shape:`box`,pos:[.13,.19,.22],size:[.1,.32,.1],role:G.leg,phase:.5,accent:0},{shape:`box`,pos:[-.13,.19,-.24],size:[.1,.32,.1],role:G.leg,phase:.5,accent:0},{shape:`box`,pos:[.13,.19,-.24],size:[.1,.32,.1],role:G.leg,phase:0,accent:0},{shape:`box`,pos:[0,.56,-.38],size:[.07,.07,.28],role:G.tail,phase:0,accent:1}],slime:[{shape:`ball`,pos:[0,.32,0],size:[.56,.46,.56],role:G.torso,phase:0,accent:0},{shape:`ball`,pos:[0,.54,-.06],size:[.3,.22,.3],role:G.torso,phase:0,accent:1},K(-.13,.38,.24),K(.13,.38,.24),{shape:`ball`,pos:[0,.1,0],size:[.6,.12,.6],role:G.torso,phase:0,accent:0}],grub:[{shape:`ball`,pos:[0,.26,.46],size:[.34,.32,.32],role:G.head,phase:0,accent:1},K(-.1,.32,.6),K(.1,.32,.6),{shape:`ball`,pos:[0,.24,.2],size:[.4,.36,.34],role:G.segment,phase:.1,accent:0},{shape:`ball`,pos:[0,.24,-.06],size:[.42,.38,.34],role:G.segment,phase:.3,accent:0},{shape:`ball`,pos:[0,.23,-.32],size:[.38,.34,.32],role:G.segment,phase:.5,accent:0},{shape:`ball`,pos:[0,.2,-.56],size:[.3,.26,.26],role:G.segment,phase:.7,accent:1}],wisp:[{shape:`ball`,pos:[0,.5,0],size:[.3,.34,.3],role:G.torso,phase:0,accent:0},{shape:`wedge`,pos:[-.28,.54,-.04],size:[.36,.05,.24],role:G.wing,phase:0,accent:1},{shape:`wedge`,pos:[.28,.54,-.04],size:[.36,.05,.24],role:G.wing,phase:0,accent:1},{shape:`ball`,pos:[0,.78,0],size:[.14,.14,.14],role:G.rigid,phase:0,accent:1},{shape:`ball`,pos:[0,.26,0],size:[.16,.18,.16],role:G.segment,phase:.4,accent:0}],brute:[{shape:`box`,pos:[0,.78,0],size:[.62,.58,.44],role:G.torso,phase:0,accent:0},{shape:`box`,pos:[0,1.16,.02],size:[.34,.3,.34],role:G.head,phase:0,accent:0},{shape:`wedge`,pos:[-.16,1.34,0],size:[.12,.2,.1],role:G.head,phase:0,accent:1},{shape:`wedge`,pos:[.16,1.34,0],size:[.12,.2,.1],role:G.head,phase:0,accent:1},K(-.1,1.18,.18),K(.1,1.18,.18),{shape:`box`,pos:[-.44,.84,0],size:[.18,.46,.18],role:G.arm,phase:.5,accent:0},{shape:`box`,pos:[.44,.84,0],size:[.18,.46,.18],role:G.arm,phase:0,accent:0},{shape:`box`,pos:[-.18,.26,0],size:[.2,.34,.2],role:G.leg,phase:0,accent:0},{shape:`box`,pos:[.18,.26,0],size:[.2,.34,.2],role:G.leg,phase:.5,accent:0}],golem:[{shape:`box`,pos:[0,.8,0],size:[.68,.64,.5],role:G.torso,phase:0,accent:0},{shape:`box`,pos:[0,1.2,0],size:[.4,.26,.38],role:G.head,phase:0,accent:0},{shape:`ball`,pos:[0,1.22,.2],size:[.16,.1,.08],role:G.head,phase:0,accent:1},{shape:`wedge`,pos:[-.36,1.12,0],size:[.2,.28,.18],role:G.rigid,phase:0,accent:1},{shape:`wedge`,pos:[.36,1.12,0],size:[.2,.28,.18],role:G.rigid,phase:0,accent:1},{shape:`box`,pos:[-.5,.82,0],size:[.22,.5,.22],role:G.arm,phase:.5,accent:0},{shape:`box`,pos:[.5,.82,0],size:[.22,.5,.22],role:G.arm,phase:0,accent:0},{shape:`box`,pos:[-.2,.24,0],size:[.24,.32,.24],role:G.leg,phase:0,accent:0},{shape:`box`,pos:[.2,.24,0],size:[.24,.32,.24],role:G.leg,phase:.5,accent:0},{shape:`ball`,pos:[0,.86,.26],size:[.18,.18,.08],role:G.torso,phase:0,accent:1}],warden:[{shape:`box`,pos:[0,.95,0],size:[.6,.7,.42],role:G.torso,phase:0,accent:0},{shape:`box`,pos:[0,1.44,.02],size:[.34,.32,.32],role:G.head,phase:0,accent:0},{shape:`wedge`,pos:[-.2,1.68,-.02],size:[.13,.34,.12],role:G.head,phase:0,accent:1},{shape:`wedge`,pos:[.2,1.68,-.02],size:[.13,.34,.12],role:G.head,phase:0,accent:1},K(-.1,1.46,.17),K(.1,1.46,.17),{shape:`wedge`,pos:[0,1,-.3],size:[.72,.9,.16],role:G.tail,phase:0,accent:1},{shape:`box`,pos:[-.44,1.02,0],size:[.18,.54,.18],role:G.arm,phase:.5,accent:0},{shape:`box`,pos:[.44,1.02,0],size:[.18,.54,.18],role:G.arm,phase:0,accent:0},{shape:`box`,pos:[-.18,.3,0],size:[.22,.42,.22],role:G.leg,phase:0,accent:0},{shape:`box`,pos:[.18,.3,0],size:[.22,.42,.22],role:G.leg,phase:.5,accent:0},{shape:`ball`,pos:[0,1.06,.24],size:[.2,.2,.08],role:G.torso,phase:0,accent:1}]};function ar(e){let t=0;for(let n of ir[e])t=Math.max(t,n.pos[1]+n.size[1]*.5);return t}function or(e,t,n){let r=t[0]-e[0],i=t[1]-e[1],a=t[2]-e[2],o=n[0]-e[0],s=n[1]-e[1],c=n[2]-e[2],l=i*c-a*s,u=a*o-r*c,d=r*s-i*o,f=Math.hypot(l,u,d)||1;return[l/f,u/f,d/f]}function q(e,t){let n=[],r=[],i=[];for(let a of t)for(let t=1;t<a.length-1;t++){let o=e[a[0]],s=e[a[t]],c=e[a[t+1]],l=or(o,s,c);for(let[e,t]of[[0,o],[1,s],[2,c]])n.push(t[0],t[1],t[2]),r.push(l[0],l[1],l[2]),i.push(+(e===0),+(e===1),+(e===2))}return{positions:new Float32Array(n),normals:new Float32Array(r),edges:new Float32Array(i),vertexCount:n.length/3}}function sr(e=1){let t=e/2;return q([[-t,-t,-t],[t,-t,-t],[t,t,-t],[-t,t,-t],[-t,-t,t],[t,-t,t],[t,t,t],[-t,t,t]],[[0,3,2,1],[4,5,6,7],[0,1,5,4],[2,3,7,6],[1,2,6,5],[0,4,7,3]])}function cr(e=1){let t=(1+Math.sqrt(5))/2,n=[[-1,t,0],[1,t,0],[-1,-t,0],[1,-t,0],[0,-1,t],[0,1,t],[0,-1,-t],[0,1,-t],[t,0,-1],[t,0,1],[-t,0,-1],[-t,0,1]],r=e/Math.hypot(1,t);return q(n.map(e=>[e[0]*r,e[1]*r,e[2]*r]),[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]])}function lr(e=1){let t=e>>>0||1,n=()=>(t=Math.imul(t^t>>>15,t|1)+1831565813>>>0,(t>>>8)/16777216),r=[],i=[];for(let e=0;e<5;e++){let t=e/5*Math.PI*2,a=.28+n()*.16;i.push(r.length),r.push([Math.cos(t)*a,0,Math.sin(t)*a])}let a=r.length;r.push([(n()-.5)*.2,.45+n()*.45,(n()-.5)*.2]);let o=[[...i].reverse()];for(let e=0;e<5;e++)o.push([i[e],i[(e+1)%5],a]);return q(r,o)}function ur(){return q([[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5],[0,.5,0]],[[0,3,2,1],[0,1,4],[1,2,4],[2,3,4],[3,0,4]])}function dr(){let e=[],t=[],n=[{r:.46,y:0},{r:.42,y:.12},{r:.3,y:.18},{r:.26,y:.5},{r:.34,y:.58}],r=[];for(let t of n){r.push(e.length);for(let n=0;n<6;n++){let r=n/6*Math.PI*2+Math.PI/6;e.push([Math.cos(r)*t.r,t.y,Math.sin(r)*t.r])}}t.push(Array.from({length:6},(e,t)=>r[0]+t));for(let e=0;e+1<n.length;e++)for(let n=0;n<6;n++){let i=r[e]+n,a=r[e]+(n+1)%6,o=r[e+1]+(n+1)%6,s=r[e+1]+n;t.push([i,a,o,s])}return t.push(Array.from({length:6},(e,t)=>r[n.length-1]+6-1-t)),q(e,t)}function fr(){return q([[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0]],[[0,1,2,3]])}function pr(e,t,n=6){return q([[-n,0,-n],[e+n,0,-n],[e+n,0,t+n],[-n,0,t+n]],[[0,3,2,1]])}function mr(e){return e.reduce((e,t)=>e+t.size,0)*4}var J=class{gl;layout;capacity;vertexCount;vao;geometryBuffer;instanceBuffer;stride;floatsPerInstance;data;count=0;constructor(e,t,n,r,i,a=n.vertexCount){this.gl=e,this.layout=r,this.capacity=i,this.vertexCount=a,this.stride=mr(r),this.floatsPerInstance=this.stride/4,this.data=new Float32Array(i*this.floatsPerInstance);let o=e.createVertexArray(),s=e.createBuffer(),c=e.createBuffer();if(!o||!s||!c)throw Error(`не удалось создать буферы WebGL`);this.vao=o,this.geometryBuffer=s,this.instanceBuffer=c,e.bindVertexArray(o);let l=new Float32Array(n.vertexCount*9);for(let e=0;e<n.vertexCount;e++)l.set(n.positions.subarray(e*3,e*3+3),e*9),l.set(n.normals.subarray(e*3,e*3+3),e*9+3),l.set(n.edges.subarray(e*3,e*3+3),e*9+6);e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,l,e.STATIC_DRAW);let u=(n,r,i)=>{let a=t.attrib(n);a<0||(e.enableVertexAttribArray(a),e.vertexAttribPointer(a,r,e.FLOAT,!1,36,i))};u(`aPos`,3,0),u(`aNormal`,3,12),u(`aEdge`,3,24),e.bindBuffer(e.ARRAY_BUFFER,c),e.bufferData(e.ARRAY_BUFFER,this.data.byteLength,e.DYNAMIC_DRAW);let d=0;for(let n of r){let r=t.attrib(n.name);r>=0&&(e.enableVertexAttribArray(r),e.vertexAttribPointer(r,n.size,e.FLOAT,!1,this.stride,d),e.vertexAttribDivisor(r,1)),d+=n.size*4}e.bindVertexArray(null)}offsetOf(e){return e*this.floatsPerInstance}hasRoom(){return this.count<this.capacity}upload(){if(this.count===0)return;let{gl:e}=this;e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.data,0,this.count*this.floatsPerInstance)}draw(e=this.gl.TRIANGLES){if(this.count===0)return;let{gl:t}=this;t.bindVertexArray(this.vao),t.drawArraysInstanced(e,0,this.vertexCount,this.count),t.bindVertexArray(null)}dispose(){let{gl:e}=this;e.deleteVertexArray(this.vao),e.deleteBuffer(this.geometryBuffer),e.deleteBuffer(this.instanceBuffer)}get layoutSpec(){return this.layout}},hr=[.5,.88,1],gr=[.24,.26,.3],_r=[.34,.33,.38];function vr(e){return j(e).stats.color}function yr(e){return l[e].color}function br(e){return l[e].accent}function xr(e){return l[e].scale}function Sr(e){return .78+e*.09}function Cr(e){return .85+(e-1)*.45}function wr(e,t){return e&&t?[.72,1.05,1.05]:e?[.66,.86,1.25]:t?[.78,1.2,.72]:[1,1,1]}function Tr(e){return e>.5?[.35,1,.45]:e>.22?[1,.85,.25]:[1,.3,.25]}var Er=-3.4,Dr=.86,Or=class{capacity;pool=[];rng;constructor(e=600,t=12648430){this.capacity=e,this.rng=m(t)}get count(){return this.pool.length}clear(){this.pool.length=0}burst(e,t,n,r,i){let{count:a,speed:o,lift:s=.5,size:c=.16,life:l=.8,spread:u=1}=i;for(let i=0;i<a;i++){this.pool.length>=this.capacity&&this.pool.shift();let i=_(this.rng,0,Math.PI*2),a=_(this.rng,-.4,1.1)*u,d=o*_(this.rng,.45,1.25),f=l*_(this.rng,.7,1.3);this.pool.push({x:e,y:t,z:n,vx:Math.cos(i)*Math.cos(a)*d,vy:(Math.sin(a)+s)*d,vz:Math.sin(i)*Math.cos(a)*d,r:r[0],g:r[1],b:r[2],size:c*_(this.rng,.6,1.5),life:f,maxLife:f})}}update(e){let t=Dr**(e*60);for(let n=this.pool.length-1;n>=0;n--){let r=this.pool[n];if(r.life-=e,r.life<=0){this.pool[n]=this.pool[this.pool.length-1],this.pool.pop();continue}r.vy+=Er*e,r.vx*=t,r.vz*=t,r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.y<.02&&(r.y=.02,r.vy=Math.abs(r.vy)*.28)}}writeInto(e,t){let n=Math.min(this.pool.length,t);for(let t=0;t<n;t++){let n=this.pool[t],r=t*8;e[r]=n.x,e[r+1]=n.y,e[r+2]=n.z,e[r+3]=n.r,e[r+4]=n.g,e[r+5]=n.b,e[r+6]=n.size,e[r+7]=Math.max(0,n.life/n.maxLife)}return n}},kr=class extends Error{stage;log;source;constructor(e,t,n){super(`${e} shader failed: ${t}`),this.stage=e,this.log=t,this.source=n,this.name=`ShaderCompileError`}};function Ar(e,t,n,r){let i=e.createShader(t);if(!i)throw new kr(r,`createShader returned null`);if(e.shaderSource(i,n),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(i)??`unknown error`;throw e.deleteShader(i),new kr(r,t,n)}return i}var Y=class{gl;label;program;uniforms=new Map;attribs=new Map;constructor(e,t,n,r=`program`){this.gl=e,this.label=r;let i=Ar(e,e.VERTEX_SHADER,t,`vertex`),a=Ar(e,e.FRAGMENT_SHADER,n,`fragment`),o=e.createProgram();if(!o)throw new kr(`link`,`createProgram returned null`);if(e.attachShader(o,i),e.attachShader(o,a),e.linkProgram(o),e.deleteShader(i),e.deleteShader(a),!e.getProgramParameter(o,e.LINK_STATUS)){let t=e.getProgramInfoLog(o)??`unknown error`;throw e.deleteProgram(o),new kr(`link`,`${r}: ${t}`)}this.program=o;let s=e.getProgramParameter(o,e.ACTIVE_UNIFORMS);for(let t=0;t<s;t++){let n=e.getActiveUniform(o,t);if(!n)continue;let r=n.name.replace(/\[0\]$/,``);this.uniforms.set(r,e.getUniformLocation(o,n.name))}let c=e.getProgramParameter(o,e.ACTIVE_ATTRIBUTES);for(let t=0;t<c;t++){let n=e.getActiveAttrib(o,t);n&&this.attribs.set(n.name,e.getAttribLocation(o,n.name))}}use(){this.gl.useProgram(this.program)}loc(e){return this.uniforms.get(e)??null}attrib(e){return this.attribs.get(e)??-1}uniform1f(e,t){let n=this.loc(e);n&&this.gl.uniform1f(n,t)}uniform1i(e,t){let n=this.loc(e);n&&this.gl.uniform1i(n,t)}uniform2f(e,t,n){let r=this.loc(e);r&&this.gl.uniform2f(r,t,n)}uniform3f(e,t,n,r){let i=this.loc(e);i&&this.gl.uniform3f(i,t,n,r)}uniform4f(e,t,n,r,i){let a=this.loc(e);a&&this.gl.uniform4f(a,t,n,r,i)}uniformMatrix4fv(e,t){let n=this.loc(e);n&&this.gl.uniformMatrix4fv(n,!1,t)}dispose(){this.gl.deleteProgram(this.program)}},X=`precision highp float;
precision highp int;
`,Z=`
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
`,jr=`
mat3 rotateY(float a) {
  float s = sin(a);
  float c = cos(a);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}
`,Mr=`
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
`,Nr=`#version 300 es
${X}
out vec2 vUv;
void main() {
  vec2 pos = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = pos;
  gl_Position = vec4(pos * 2.0 - 1.0, 0.0, 1.0);
}
`,Pr=`#version 300 es
${X}
out vec2 vUv;
void main() {
  vec2 pos = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = pos;
  gl_Position = vec4(pos * 2.0 - 1.0, 0.0, 1.0);
}
`,Fr=`#version 300 es
${X}
${Z}
${Mr}

in vec2 vUv;
out vec4 fragColor;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uCamera;   // yaw, pitch — parallaxes the stars with the view
uniform vec3 uTint;      // общий оттенок сцены, подмешивается в туманность
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uGlow;      // тёплая полоса у самого горизонта
uniform vec3 uNebula;    // нулевой вектор выключает туманность
uniform float uStars;    // яркость звёзд, 0 — небо без звёзд

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / max(uResolution.y, 1.0);

  // Градиент по вертикали: к горизонту светлее, в зените темнее.
  float horizon = pow(1.0 - uv.y, 1.6);
  vec3 col = mix(uZenith, uHorizon, horizon);
  col += uGlow * pow(horizon, 3.0);

  // Slow nebula, dragged by the camera yaw so it does not feel painted on.
  vec2 nebulaUv = vec2(uv.x * aspect * 1.4 + uCamera.x * 0.35, uv.y * 1.4 - uCamera.y * 0.25);
  float neb = fbm(nebulaUv * 1.6 + vec2(uTime * 0.008, uTime * 0.004));
  neb = smoothstep(0.42, 0.95, neb) * horizon;
  col += mix(uNebula, uTint * 0.5, 0.55) * neb * 0.85;

  // Stars, on a grid so each cell holds at most one and they never clump.
  vec2 starUv = vec2(uv.x * aspect + uCamera.x * 0.5, uv.y - uCamera.y * 0.4) * 70.0;
  vec2 cell = floor(starUv);
  vec2 local = fract(starUv) - 0.5;
  vec2 jitter = hash22(cell) - 0.5;
  float brightness = hash12(cell + 7.0);
  if (brightness > 0.86 && uStars > 0.001) {
    float d = length(local - jitter * 0.7);
    float twinkle = 0.65 + 0.35 * sin(uTime * 1.7 + brightness * 40.0);
    float star = smoothstep(0.09, 0.0, d) * (brightness - 0.86) * 7.0 * twinkle;
    col += vec3(0.75, 0.82, 1.0) * star * (0.35 + horizon * 0.8) * uStars;
  }

  fragColor = vec4(col, 1.0);
}
`,Ir=`#version 300 es
${X}

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
`,Lr=`#version 300 es
${X}
${Z}

in vec3 vWorld;
in vec3 vNormal;
out vec4 fragColor;

uniform float uTime;
uniform vec2 uBoard;
uniform sampler2D uPathField;
uniform sampler2D uBuildMask;
uniform float uPathFieldRange;

uniform vec3 uCursor;   // xy — клетка под пальцем, z: 1 можно / 0 нельзя / -1 нет
uniform vec4 uRange;    // xy — центр, z — радиус, w — включено

// Палитра оформления. Всё, что задаёт настроение, приходит снаружи: шейдер
// один, а выглядеть поле может и полднем, и пепелищем.
uniform vec3 uAccent;
uniform vec3 uGrassLow;
uniform vec3 uGrassHigh;
uniform vec3 uTuft;
uniform vec3 uRoadLow;
uniform vec3 uRoadHigh;
uniform vec3 uKerb;
uniform vec3 uFlow;
uniform vec3 uSun;
uniform vec3 uVoid;
uniform float uAmbient;

/** Полуширина проезжей части и обочины, в клетках. */
const float ROAD_HALF = 0.62;
const float KERB_HALF = 0.82;

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
  float buildable = onBoard ? texture(uBuildMask, (tile + 0.5) / uBoard).r : 0.0;

  float d = pathDistance(world);
  float onRoad = 1.0 - smoothstep(ROAD_HALF - 0.06, ROAD_HALF + 0.06, d);
  float onKerb = (1.0 - smoothstep(KERB_HALF - 0.05, KERB_HALF + 0.05, d)) - onRoad;

  // --- трава и земля вокруг ---------------------------------------------
  // Цвета линейные, до гаммы: дорога должна остаться светлее травы с заметным
  // отрывом, иначе всё сливается в кисель.
  float turf = fbm(world * 1.7) * 0.6 + fbm(world * 6.5) * 0.25;
  vec3 col = mix(uGrassLow, uGrassHigh, turf);
  // Кустики через плавный шум, а не через хеш по решётке: хеш давал ровную
  // шахматку из квадратов, которую было видно через весь экран.
  float tuft = smoothstep(0.58, 0.82, fbm(world * 2.2 + 31.7));
  col += uTuft * tuft * (1.0 - onRoad);

  // --- сетка застройки ---------------------------------------------------
  // Только линии по границам клеток. Заливка целой клетки даёт ровную синюю
  // плёнку по всему полю и убивает контраст.
  //
  // Трава здесь темнее 0.07, поэтому добавка в десятую долю читается как неон
  // и превращает поле в миллиметровку. Держим линии еле заметными и гасим их
  // вдали от дороги: строить в дальнем углу всё равно незачем.
  vec2 gridDist = min(inTile, 1.0 - inTile);
  float line = 1.0 - smoothstep(0.004, 0.020, min(gridDist.x, gridDist.y));
  float nearRoad = 1.0 - smoothstep(1.3, 3.6, d);
  col += uAccent * line * buildable * (0.014 + 0.030 * nearRoad);

  // --- дорога -------------------------------------------------------------
  if (onRoad > 0.001) {
    // Утоптанная земля с брусчаткой: камни разного тона, швы темнее.
    vec2 stoneUv = world * 2.6;
    vec2 cell = floor(stoneUv);
    vec2 local = fract(stoneUv);
    float shade = hash12(cell);
    vec3 road = mix(uRoadLow, uRoadHigh, shade);
    float seam = 1.0 - smoothstep(0.0, 0.07, min(min(local.x, 1.0 - local.x), min(local.y, 1.0 - local.y)));
    road *= 1.0 - seam * 0.42;
    road *= 0.88 + fbm(world * 4.0) * 0.24;

    // Колея по центру — дорогу видно даже на самом краю экрана.
    float rut = 1.0 - smoothstep(0.0, 0.26, abs(d));
    road *= 1.0 - rut * 0.12;

    col = mix(col, road, onRoad);
  }

  // --- обочина ------------------------------------------------------------
  if (onKerb > 0.001) {
    float stones = hash12(floor(world * 5.0));
    vec3 kerb = mix(uKerb * 0.66, uKerb, stones);
    col = mix(col, kerb, onKerb * 0.9);
    // Светлая кромка по самому краю проезжей части.
    float lip = smoothstep(ROAD_HALF + 0.10, ROAD_HALF, d) * smoothstep(ROAD_HALF - 0.08, ROAD_HALF + 0.02, d);
    col += uKerb * 0.86 * lip;
  }

  // --- направление движения ------------------------------------------------
  // Бегущие метки на дороге: сразу видно, куда идут враги.
  float flow = fract((world.x + world.y) * 0.5 - uTime * 0.35);
  float arrow = smoothstep(0.86, 1.0, flow) * onRoad * (1.0 - smoothstep(0.0, ROAD_HALF * 0.8, d));
  col += uFlow * arrow;

  // --- курсор постройки ----------------------------------------------------
  if (uCursor.z >= 0.0) {
    vec2 toCursor = abs(world - (uCursor.xy + 0.5));
    float inside = max(toCursor.x, toCursor.y);
    float border = smoothstep(0.5, 0.46, inside) * smoothstep(0.36, 0.42, inside);
    float fill = smoothstep(0.5, 0.47, inside);
    vec3 cursorCol = mix(vec3(1.0, 0.25, 0.3), vec3(0.4, 1.0, 0.6), uCursor.z);
    float beat = 0.72 + 0.28 * sin(uTime * 5.5);
    col += cursorCol * (border * 2.2 * beat + fill * 0.12);
  }

  // --- круг радиуса --------------------------------------------------------
  if (uRange.w > 0.5) {
    float r = length(world - uRange.xy);
    float ring = smoothstep(0.075, 0.0, abs(r - uRange.z));
    float disc = smoothstep(uRange.z, uRange.z - 0.5, r) * 0.055;
    col += uAccent * (ring * 0.95 + disc);
  }

  // --- свет ----------------------------------------------------------------
  vec3 lightDir = normalize(vec3(0.45, 0.82, 0.36));
  float diffuse = max(dot(normalize(vNormal), lightDir), 0.0);
  col *= uSun * (uAmbient + (1.0 - uAmbient) * diffuse);

  // Карта — остров: у края земля уходит не в линию, а в цвет пустоты. Ночью
  // это чернота, днём — дымка под цвет горизонта, иначе остров вырезан ножом.
  vec2 edge = min(world, uBoard - world);
  float fade = smoothstep(-2.2, 0.5, min(edge.x, edge.y));
  col = mix(uVoid, col, fade);

  // Френель по земле при таком ракурсе накрывает весь экран синей дымкой,
  // поэтому его здесь нет вовсе; блики остаются на объектах.
  if (fade <= 0.002) discard;
  fragColor = vec4(col, 1.0);
}
`,Rr=`#version 300 es
${X}
${jr}

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
`,zr=`#version 300 es
${X}
${Z}

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
`,Br=`#version 300 es
${X}

in vec3 aPos;
in vec3 aNormal;
in vec3 aEdge;

in vec3 iOrigin;    // положение существа в мире
in vec3 iLocal;     // положение части в покое
in vec3 iSize;      // полный размер части
in vec3 iColor;
in vec4 iMotion;    // x: фаза цикла, y: код походки, z: роль, w: сдвиг фазы части
in vec4 iExtra;     // x: масштаб, y: вспышка, z: разворот, w: затемнение

uniform mat4 uViewProj;
uniform float uTime;

out vec3 vWorld;
out vec3 vNormal;
out vec3 vEdge;
out vec3 vColor;
out vec2 vHit;      // x: вспышка, y: затемнение

const float TAU = 6.283185307;

mat3 rotX(float a) {
  float s = sin(a);
  float c = cos(a);
  return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c);
}

mat3 rotY(float a) {
  float s = sin(a);
  float c = cos(a);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

mat3 rotZ(float a) {
  float s = sin(a);
  float c = cos(a);
  return mat3(c, s, 0.0, -s, c, 0.0, 0.0, 0.0, 1.0);
}

void main() {
  float cycle = iMotion.x;
  float gait = iMotion.y;
  float role = iMotion.z;
  float partPhase = iMotion.w;

  float scale = iExtra.x;
  float facing = iExtra.z;

  // --- походка: общее движение тела ------------------------------------
  vec3 bodyOffset = vec3(0.0);
  vec3 squash = vec3(1.0);
  float swing = 0.0;
  float lean = 0.0;
  float phase = (cycle + partPhase) * TAU;

  if (gait < 0.5) {
    // Шаг: тело подскакивает дважды за цикл и чуть переваливается вбок.
    bodyOffset.y = abs(sin(cycle * TAU)) * 0.05;
    bodyOffset.x = sin(cycle * TAU) * 0.025;
    swing = sin(phase) * 0.9;
    lean = 0.10;
  } else if (gait < 1.5) {
    // Прыжок: парабола вверх, приседание на приземлении, вытягивание в полёте.
    float air = sin(fract(cycle) * 3.14159265);
    float ground = 1.0 - air;
    bodyOffset.y = air * 0.55;
    squash = vec3(1.0 + ground * 0.30, 1.0 - ground * 0.32 + air * 0.20, 1.0 + ground * 0.30);
    lean = air * 0.18;
  } else if (gait < 2.5) {
    // Ползком: тело идёт волной, сегменты подхватывают её со сдвигом.
    bodyOffset.y = sin(phase) * 0.05;
    squash.y = 1.0 + sin(phase) * 0.18;
    squash.z = 1.0 - sin(phase) * 0.10;
  } else if (gait < 3.5) {
    // Полёт: медленное покачивание и частые взмахи.
    bodyOffset.y = sin(cycle * TAU * 0.25) * 0.14;
    swing = sin(phase) * 1.25;
    lean = 0.16;
  } else {
    // Тяжёлый шаг: медленнее, выше подъём, сильнее перевал.
    float stomp = abs(sin(cycle * TAU));
    bodyOffset.y = stomp * 0.09;
    bodyOffset.x = sin(cycle * TAU) * 0.05;
    swing = sin(phase) * 0.62;
    lean = 0.07;
  }

  // --- часть тела -------------------------------------------------------
  vec3 p = aPos * iSize;
  // Нормаль при неравномерном масштабе идёт через обратную матрицу.
  vec3 n = aNormal / max(abs(iSize), vec3(1e-4));

  vec3 pivot = vec3(0.0);
  float angle = 0.0;
  int axis = 0; // 0 — X, 1 — Z, 2 — Y

  if (role < 0.5) {
    p *= squash;
    n /= max(squash, vec3(1e-4));
  } else if (role < 1.5) {
    // Голова повторяет приседание вполсилы — иначе лицо «плывёт».
    vec3 soft = mix(vec3(1.0), squash, 0.45);
    p *= soft;
    n /= max(soft, vec3(1e-4));
  } else if (role < 2.5) {
    pivot = vec3(0.0, iSize.y * 0.5, 0.0);
    angle = swing;
  } else if (role < 3.5) {
    // Руки идут против ног — так шаг читается как шаг.
    pivot = vec3(0.0, iSize.y * 0.5, 0.0);
    angle = -swing * 0.75;
  } else if (role < 4.5) {
    // Крыло вращается вокруг корня; знак берём от стороны тела, чтобы оба
    // крыла махали синхронно, а не зеркально.
    pivot = vec3(-sign(iLocal.x) * iSize.x * 0.5, 0.0, 0.0);
    angle = swing * -sign(iLocal.x);
    axis = 1;
  } else if (role < 5.5) {
    float wave = sin((cycle + partPhase) * TAU);
    p.y += wave * 0.09;
    p.x += wave * 0.05;
    p.z *= 1.0 + wave * 0.12;
  } else if (role < 6.5) {
    // Жёсткая часть: только общее движение тела.
  } else {
    pivot = vec3(0.0, 0.0, iSize.z * 0.5);
    angle = sin(cycle * TAU) * 0.45;
    axis = 2;
  }

  if (abs(angle) > 1e-5) {
    mat3 r = axis == 0 ? rotX(angle) : (axis == 1 ? rotZ(angle) : rotY(angle));
    p = r * (p - pivot) + pivot;
    n = r * n;
  }

  // --- сборка существа --------------------------------------------------
  p += iLocal + bodyOffset;

  mat3 tilt = rotX(-lean);
  p = tilt * p;
  n = tilt * n;

  p *= scale;

  mat3 turn = rotY(facing);
  p = turn * p;
  n = turn * n;

  vec3 world = iOrigin + p;

  vWorld = world;
  vNormal = normalize(n);
  vEdge = aEdge;
  vColor = iColor;
  vHit = vec2(iExtra.y, iExtra.w);

  gl_Position = uViewProj * vec4(world, 1.0);
  // Время используется только фрагментом, но объявлено здесь ради интерфейса.
  gl_Position.w += uTime * 0.0;
}
`,Vr=`#version 300 es
${X}
${Z}

in vec3 vWorld;
in vec3 vNormal;
in vec3 vEdge;
in vec3 vColor;
in vec2 vHit;
out vec4 fragColor;

uniform vec3 uEye;
uniform float uTime;

void main() {
  vec3 n = normalize(vNormal);
  vec3 viewDir = normalize(uEye - vWorld);

  // Солнце сверху-сбоку плюс холодная подсветка снизу от земли.
  vec3 keyDir = normalize(vec3(0.45, 0.82, 0.36));
  float key = max(dot(n, keyDir), 0.0);
  float sky = max(dot(n, vec3(0.0, 1.0, 0.0)), 0.0);
  float bounce = max(dot(n, vec3(0.0, -1.0, 0.0)), 0.0);

  vec3 col = vColor * (0.34 + key * 0.78);
  col += vColor * sky * 0.14;
  col += vec3(0.16, 0.2, 0.3) * bounce * 0.35;

  // Мягкий блик, чтобы кубики не выглядели картонными.
  vec3 halfDir = normalize(keyDir + viewDir);
  col += vec3(1.0) * pow(max(dot(n, halfDir), 0.0), 26.0) * 0.22;

  // Контур на рёбрах граней: он и делает силуэт читаемым на тёмной земле.
  float edge = min(min(vEdge.x, vEdge.y), vEdge.z);
  float wire = 1.0 - smoothstep(0.0, 0.16, edge);
  col = mix(col, col * 0.22, wire * 0.75);

  float fres = pow(1.0 - max(dot(n, viewDir), 0.0), 3.0);
  col += vColor * fres * 0.5;

  // Раненый враг темнеет, попадание отбеливает его на пару кадров.
  col *= vHit.y;
  col = mix(col, vec3(2.4, 2.2, 2.0), clamp(vHit.x, 0.0, 1.0) * 0.8);

  col += (hash12(gl_FragCoord.xy + uTime) - 0.5) * 0.01;
  fragColor = vec4(col, 1.0);
}
`,Hr=`#version 300 es
${X}

in vec3 aPos;      // единичный квад: x вдоль отрезка, y поперёк

in vec3 iFrom;
in vec3 iTo;
in vec3 iColor;
in vec4 iParams;   // x: полуширина, y: яркость, z: скорость бега, w: стиль

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
  // Взгляд точно вдоль отрезка не даёт устойчивой нормали — берём любую.
  side = sideLen > 1e-4 ? side / sideLen : normalize(cross(dir, vec3(0.0, 1.0, 0.0)) + vec3(1e-3));

  vec3 world = mix(iFrom, iTo, u) + side * (aPos.y * iParams.x);

  vUv = vec2(u, aPos.y);
  vColor = iColor;
  vParams = iParams;
  vLength = segLength;

  gl_Position = uViewProj * vec4(world, 1.0);
}
`,Ur=`#version 300 es
${X}
${Z}

in vec2 vUv;
in vec3 vColor;
in vec4 vParams;
in float vLength;
out vec4 fragColor;

uniform float uTime;

/** Стили: 0 — луч, 1 — молния, 2 — хвост снаряда, 3 — полоска здоровья. */
void main() {
  float across = abs(vUv.y);
  float style = vParams.w;

  float core = exp(-across * across * 46.0);
  float halo = exp(-across * across * 5.5) * 0.45;
  float profile = core + halo;

  float alongFade = 1.0;
  float extra = 0.0;

  if (style < 0.5) {
    // Луч: ровный, с бегущими внутри сгустками.
    float travel = vUv.x * vLength * 0.8 - uTime * vParams.z;
    extra = smoothstep(0.6, 1.0, fract(travel)) * core * 0.9;
  } else if (style < 1.5) {
    // Молния: рваная, дрожит по ширине и мигает.
    float jitter = valueNoise(vec2(vUv.x * 22.0, uTime * 26.0)) - 0.5;
    core = exp(-pow(across + jitter * 0.5, 2.0) * 40.0);
    profile = core + halo * 0.8;
    extra = core * (0.5 + 0.5 * sin(uTime * 90.0));
  } else if (style < 2.5) {
    // Хвост снаряда: яркая голова, растворяющийся след.
    alongFade = pow(vUv.x, 2.2);
    extra = core * smoothstep(0.82, 1.0, vUv.x) * 1.6;
  } else {
    // Полоска здоровья: плоская, без свечения и без дрожи.
    profile = 1.0 - smoothstep(0.55, 1.0, across);
    alongFade = 1.0;
  }

  float caps = style < 2.5 ? smoothstep(0.0, 0.05, vUv.x) * smoothstep(1.0, 0.95, vUv.x) : 1.0;
  vec3 col = vColor * profile * vParams.y * alongFade * caps;
  col += mix(vColor, vec3(1.0), 0.65) * extra * vParams.y * caps;

  float alpha = clamp(profile * caps * alongFade, 0.0, 1.0);
  if (alpha < 0.004) discard;
  fragColor = vec4(col, alpha);
}
`,Wr=`#version 300 es
${X}

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
`,Gr=`#version 300 es
${X}

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
`,Kr=Nr,qr=`#version 300 es
${X}

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
`,Jr=`#version 300 es
${X}

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
`,Yr=`#version 300 es
${X}
${Z}
${Mr}

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
`;function Q(e,t,n,r,i){let a=e.createTexture(),o=e.createFramebuffer();if(!a||!o)throw Error(`не удалось создать кадровый буфер`);e.bindTexture(e.TEXTURE_2D,a);let s=r?e.RGBA16F:e.RGBA8,c=r?e.HALF_FLOAT:e.UNSIGNED_BYTE;e.texImage2D(e.TEXTURE_2D,0,s,t,n,0,e.RGBA,c,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,a,0);let l;if(i){let r=e.createRenderbuffer();if(!r)throw Error(`не удалось создать буфер глубины`);e.bindRenderbuffer(e.RENDERBUFFER,r),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,t,n),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,r),l=r}return e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null),{fbo:o,texture:a,width:t,height:n,depth:l}}var Xr={threshold:1.1,softKnee:.5,strength:.6,aberration:.5,vignette:.55,grain:.035},Zr=class{gl;halfFloat;scene;bright;blurA;blurB;wideA;wideB;brightProgram;blurProgram;compositeProgram;emptyVao;width=0;height=0;settings={...Xr};flash=0;flashColor=[1,.3,.35];constructor(e,t,n,r){this.gl=e,this.halfFloat=t,this.brightProgram=new Y(e,Kr,qr,`bright`),this.blurProgram=new Y(e,Kr,Jr,`blur`),this.compositeProgram=new Y(e,Kr,Yr,`composite`);let i=e.createVertexArray();if(!i)throw Error(`не удалось создать VAO`);this.emptyVao=i,this.resize(n,r)}resize(e,t){let n=Math.max(2,e),r=Math.max(2,t);if(n===this.width&&r===this.height)return;this.dispose(!1),this.width=n,this.height=r;let i={w:Math.max(2,n>>1),h:Math.max(2,r>>1)},a={w:Math.max(2,n>>2),h:Math.max(2,r>>2)};this.scene=Q(this.gl,n,r,this.halfFloat,!0),this.bright=Q(this.gl,i.w,i.h,this.halfFloat,!1),this.blurA=Q(this.gl,i.w,i.h,this.halfFloat,!1),this.blurB=Q(this.gl,i.w,i.h,this.halfFloat,!1),this.wideA=Q(this.gl,a.w,a.h,this.halfFloat,!1),this.wideB=Q(this.gl,a.w,a.h,this.halfFloat,!1)}beginScene(){let{gl:e}=this;e.bindFramebuffer(e.FRAMEBUFFER,this.scene.fbo),e.viewport(0,0,this.scene.width,this.scene.height)}blit(e,t){let{gl:n}=this;n.bindFramebuffer(n.FRAMEBUFFER,e?e.fbo:null),n.viewport(0,0,e?e.width:this.width,e?e.height:this.height),t.use(),n.bindVertexArray(this.emptyVao),n.drawArrays(n.TRIANGLES,0,3),n.bindVertexArray(null)}bind(e,t){let{gl:n}=this;n.activeTexture(n.TEXTURE0+e),n.bindTexture(n.TEXTURE_2D,t)}blurInto(e,t,n){this.blurProgram.use(),this.bind(0,e.texture),this.blurProgram.uniform1i(`uSource`,0),this.blurProgram.uniform2f(`uDirection`,1/e.width,0),this.blit(t,this.blurProgram),this.bind(0,t.texture),this.blurProgram.uniform1i(`uSource`,0),this.blurProgram.uniform2f(`uDirection`,0,1/t.height),this.blit(n,this.blurProgram)}present(e){let{gl:t}=this;t.disable(t.DEPTH_TEST),t.disable(t.BLEND),this.brightProgram.use(),this.bind(0,this.scene.texture),this.brightProgram.uniform1i(`uScene`,0),this.brightProgram.uniform1f(`uThreshold`,this.settings.threshold),this.brightProgram.uniform1f(`uSoftKnee`,this.settings.softKnee),this.blit(this.bright,this.brightProgram),this.blurInto(this.bright,this.blurB,this.blurA),this.blurInto(this.blurA,this.wideB,this.wideA),this.compositeProgram.use(),this.bind(0,this.scene.texture),this.bind(1,this.blurA.texture),this.bind(2,this.wideA.texture),this.compositeProgram.uniform1i(`uScene`,0),this.compositeProgram.uniform1i(`uBloom`,1),this.compositeProgram.uniform1i(`uBloomWide`,2),this.compositeProgram.uniform1f(`uBloomStrength`,this.settings.strength),this.compositeProgram.uniform1f(`uAberration`,this.settings.aberration),this.compositeProgram.uniform1f(`uVignette`,this.settings.vignette),this.compositeProgram.uniform1f(`uGrain`,this.settings.grain),this.compositeProgram.uniform1f(`uTime`,e),this.compositeProgram.uniform1f(`uFlash`,this.flash),this.compositeProgram.uniform3f(`uFlashColor`,this.flashColor[0],this.flashColor[1],this.flashColor[2]),this.blit(null,this.compositeProgram),this.bind(0,this.scene.texture)}dispose(e=!0){let{gl:t}=this;for(let e of[this.scene,this.bright,this.blurA,this.blurB,this.wideA,this.wideB]){if(!e)continue;t.deleteFramebuffer(e.fbo),t.deleteTexture(e.texture);let n=e.depth;n&&t.deleteRenderbuffer(n)}e&&(this.brightProgram.dispose(),this.blurProgram.dispose(),this.compositeProgram.dispose(),t.deleteVertexArray(this.emptyVao))}};function Qr(e,t){let n=Math.max(2,Math.round(e.width*8)),r=Math.max(2,Math.round(e.height*8)),i=new Uint8Array(n*r);for(let a=0;a<r;a++){let o=(a+.5)/r*e.height;for(let r=0;r<n;r++){let s=(r+.5)/n*e.width,c=Math.min(We(t,F(s,o)),4);i[a*n+r]=Math.round(c/4*255)}}return{data:i,width:n,height:r}}function $r(e,t){let n=Je(e,t),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n[e]?255:0;return{data:r,width:e.width,height:e.height}}function ei(e,t,n={}){let r=e.createTexture();if(!r)throw Error(`не удалось создать текстуру`);let i=n.smooth?e.LINEAR:e.NEAREST;return e.bindTexture(e.TEXTURE_2D,r),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.R8,t.width,t.height,0,e.RED,e.UNSIGNED_BYTE,t.data),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null),r}var ti=.6,ni={low:{resolutionScale:.7,bloom:!1,particles:140,grain:0,aberration:0},medium:{resolutionScale:.86,bloom:!0,particles:380,grain:.022,aberration:.3},high:{resolutionScale:1,bloom:!0,particles:700,grain:.03,aberration:.45}},ri=[{name:`iOffset`,size:3},{name:`iScale`,size:3},{name:`iColor`,size:3},{name:`iParams`,size:4}],ii=[{name:`iOrigin`,size:3},{name:`iLocal`,size:3},{name:`iSize`,size:3},{name:`iColor`,size:3},{name:`iMotion`,size:4},{name:`iExtra`,size:4}],ai=[{name:`iFrom`,size:3},{name:`iTo`,size:3},{name:`iColor`,size:3},{name:`iParams`,size:4}],oi=[{name:`iPos`,size:3},{name:`iColor`,size:3},{name:`iParams`,size:2}],si=120,ci=80,li=520,ui={box:460,ball:340,wedge:220},di={beam:0,arc:1,trail:2,health:3},fi=class{camera=new Yn;particles;gl;glctx;skyProgram;groundProgram;solidProgram;creatureProgram;beamProgram;particleProgram;post;emptyVao;partMeshes;pedestalMesh;gemMesh;sceneryMesh;coreMesh;beamMesh;particleMesh;groundMesh=null;pathFieldTex=null;buildMaskTex=null;mapId=``;board=F(1,1);quality=`high`;profile=ni.high;theme=Sn(bn);lastTime=0;needsFraming=!1;constructor(e){this.glctx=e,this.gl=e.gl;let t=this.gl;this.skyProgram=new Y(t,Pr,Fr,`sky`),this.groundProgram=new Y(t,Ir,Lr,`ground`),this.solidProgram=new Y(t,Rr,zr,`solid`),this.creatureProgram=new Y(t,Br,Vr,`creature`),this.beamProgram=new Y(t,Hr,Ur,`beam`),this.particleProgram=new Y(t,Wr,Gr,`particle`);let n=t.createVertexArray();if(!n)throw Error(`не удалось создать VAO`);this.emptyVao=n,this.partMeshes={box:new J(t,this.creatureProgram,sr(1),ii,ui.box),ball:new J(t,this.creatureProgram,cr(.5),ii,ui.ball),wedge:new J(t,this.creatureProgram,ur(),ii,ui.wedge)},this.pedestalMesh=new J(t,this.solidProgram,dr(),ri,si),this.gemMesh=new J(t,this.solidProgram,cr(.5),ri,480),this.sceneryMesh=new J(t,this.solidProgram,lr(11),ri,ci),this.coreMesh=new J(t,this.solidProgram,cr(.5),ri,8),this.beamMesh=new J(t,this.beamProgram,fr(),ai,li),this.particleMesh=new J(t,this.particleProgram,fr(),oi,ni.high.particles),this.particles=new Or(ni.high.particles),this.post=new Zr(t,e.caps.halfFloatColor,e.canvas.width,e.canvas.height)}setQuality(e){this.quality=e,this.profile=ni[e],this.applyPost()}getQuality(){return this.quality}setTheme(e){this.theme=Sn(e),this.applyPost()}getTheme(){return this.theme.id}applyPost(){let{post:e}=this.theme;this.post.settings.threshold=e.threshold,this.post.settings.strength=this.profile.bloom?ti*e.bloom:0,this.post.settings.grain=this.profile.grain*e.grain,this.post.settings.aberration=this.profile.aberration,this.post.settings.vignette=e.vignette}setMap(e){if(this.mapId===e.map.id)return;let t=this.gl;this.mapId=e.map.id,this.board=F(e.map.width,e.map.height),this.groundMesh?.dispose(),this.groundMesh=new J(t,this.groundProgram,pr(e.map.width,e.map.height),[{name:`iOffset`,size:3}],1),this.groundMesh.count=1,this.groundMesh.data.fill(0),this.groundMesh.upload(),this.pathFieldTex&&t.deleteTexture(this.pathFieldTex),this.buildMaskTex&&t.deleteTexture(this.buildMaskTex),this.pathFieldTex=ei(t,Qr(e.map,e.path),{smooth:!0}),this.buildMaskTex=ei(t,$r(e.map,e.path),{smooth:!1}),this.camera.target=F(e.map.width/2,e.map.height/2),this.needsFraming=!0,this.particles.clear()}emit(e){switch(e.type){case`kill`:this.particles.burst(e.x,.4,e.y,e.color,{count:Math.min(20,7+Math.floor(e.bounty/6)),speed:2.6,life:.65,size:.14});break;case`impact`:this.particles.burst(e.x,.35,e.y,e.color,{count:e.splash>0?16:6,speed:e.splash>0?3.2:1.8,life:.35,size:e.splash>0?.18:.1});break;case`leak`:this.particles.burst(e.x,.5,e.y,[1,.25,.3],{count:26,speed:3.4,life:.9,size:.2}),this.post.flash=Math.min(.55,this.post.flash+.26*e.damage),this.post.flashColor=[1,.22,.28];break;case`craft`:this.particles.burst(e.x,.3,e.y,vr(e.kind),{count:e.firstTime?44:26,speed:2.4,life:.8,size:.14,lift:1.3}),e.firstTime&&(this.post.flash=Math.min(.42,this.post.flash+.22),this.post.flashColor=[.9,.85,1]);break;case`upgrade`:this.particles.burst(e.x,.6,e.y,vr(e.kind),{count:34,speed:2.8,life:.85,size:.15,lift:1.5});break;case`sell`:this.particles.burst(e.x,.3,e.y,[.6,.65,.8],{count:14,speed:1.8,life:.5,size:.1});break;case`waveClear`:this.post.flash=Math.min(.36,this.post.flash+.16),this.post.flashColor=[.35,.95,.8];break;case`won`:this.post.flash=.7,this.post.flashColor=[.85,1,.95];break;case`lost`:this.post.flash=.7,this.post.flashColor=[1,.2,.25]}}pick(e,t){return this.camera.screenToGround(e,t)}render(e){let t=this.gl,n=this.lastTime===0?1/60:Math.min(.1,e.time-this.lastTime);this.lastTime=e.time,nr(this.glctx,this.profile.resolutionScale)&&this.post.resize(this.glctx.canvas.width,this.glctx.canvas.height);let r=this.glctx.canvas.width,i=this.glctx.canvas.height;this.particles.update(n),this.post.flash=Math.max(0,this.post.flash-n*1.6);let a=r/Math.max(i,1);this.needsFraming&&=(this.camera.frame(this.board.x,this.board.y,a),!1),this.camera.clampTarget(this.board.x,this.board.y),this.camera.update(a);let o=this.camera.eye();this.post.beginScene(),t.viewport(0,0,r,i),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.disable(t.BLEND),t.enable(t.CULL_FACE),t.cullFace(t.BACK),t.disable(t.DEPTH_TEST),t.depthMask(!1),this.skyProgram.use(),this.skyProgram.uniform1f(`uTime`,e.time),this.skyProgram.uniform2f(`uResolution`,r,i),this.skyProgram.uniform2f(`uCamera`,this.camera.yaw,this.camera.pitch);let s=this.theme.sky;this.skyProgram.uniform3f(`uTint`,s.tint[0],s.tint[1],s.tint[2]),this.skyProgram.uniform3f(`uZenith`,s.zenith[0],s.zenith[1],s.zenith[2]),this.skyProgram.uniform3f(`uHorizon`,s.horizon[0],s.horizon[1],s.horizon[2]),this.skyProgram.uniform3f(`uGlow`,s.glow[0],s.glow[1],s.glow[2]),this.skyProgram.uniform3f(`uNebula`,s.nebula[0],s.nebula[1],s.nebula[2]),this.skyProgram.uniform1f(`uStars`,s.stars),t.bindVertexArray(this.emptyVao),t.drawArrays(t.TRIANGLES,0,3),t.bindVertexArray(null),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.depthMask(!0),this.drawGround(e,o),this.drawTowers(e,o),this.drawCreatures(e,o),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE),t.depthMask(!1),t.disable(t.CULL_FACE),this.drawBeams(e),this.drawParticles(),t.depthMask(!0),t.disable(t.BLEND),t.enable(t.CULL_FACE),this.post.present(e.time)}drawGround(e,t){let n=this.gl;if(!this.groundMesh||!this.pathFieldTex||!this.buildMaskTex)return;this.groundProgram.use(),this.groundProgram.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),this.groundProgram.uniform1f(`uTime`,e.time),this.groundProgram.uniform2f(`uBoard`,this.board.x,this.board.y),this.groundProgram.uniform3f(`uEye`,t.x,t.y,t.z),this.groundProgram.uniform1f(`uPathFieldRange`,4);let r=this.theme.ground;this.groundProgram.uniform3f(`uAccent`,r.accent[0],r.accent[1],r.accent[2]),this.groundProgram.uniform3f(`uGrassLow`,r.grassLow[0],r.grassLow[1],r.grassLow[2]),this.groundProgram.uniform3f(`uGrassHigh`,r.grassHigh[0],r.grassHigh[1],r.grassHigh[2]),this.groundProgram.uniform3f(`uTuft`,r.tuft[0],r.tuft[1],r.tuft[2]),this.groundProgram.uniform3f(`uRoadLow`,r.roadLow[0],r.roadLow[1],r.roadLow[2]),this.groundProgram.uniform3f(`uRoadHigh`,r.roadHigh[0],r.roadHigh[1],r.roadHigh[2]),this.groundProgram.uniform3f(`uKerb`,r.kerb[0],r.kerb[1],r.kerb[2]),this.groundProgram.uniform3f(`uFlow`,r.flow[0],r.flow[1],r.flow[2]),this.groundProgram.uniform3f(`uSun`,r.sun[0],r.sun[1],r.sun[2]),this.groundProgram.uniform3f(`uVoid`,r.void[0],r.void[1],r.void[2]),this.groundProgram.uniform1f(`uAmbient`,r.ambient),e.hoverCell?this.groundProgram.uniform3f(`uCursor`,e.hoverCell.x,e.hoverCell.y,+!!e.hoverValid):this.groundProgram.uniform3f(`uCursor`,0,0,-1);let i=this.rangePreview(e);this.groundProgram.uniform4f(`uRange`,i.x,i.y,i.radius,+!!i.on),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.pathFieldTex),this.groundProgram.uniform1i(`uPathField`,0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,this.buildMaskTex),this.groundProgram.uniform1i(`uBuildMask`,1),this.groundMesh.draw()}rangePreview(e){let t=e.selectedTowerId?e.state.towers.find(t=>t.id===e.selectedTowerId):void 0;if(t){let e=R(t.cell.x,t.cell.y);return{x:e.x,y:e.y,radius:he(j(t.kind),t.level),on:!0}}return e.placing&&e.hoverCell?{x:e.hoverCell.x+.5,y:e.hoverCell.y+.5,radius:j(e.placing).stats.range,on:!0}:{x:0,y:0,radius:0,on:!1}}drawTowers(e,t){let{state:n,ctx:r}=e;this.solidProgram.use(),this.solidProgram.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),this.solidProgram.uniform3f(`uEye`,t.x,t.y,t.z),this.solidProgram.uniform1f(`uTime`,e.time),this.sceneryMesh.count=0;for(let[e,t]of r.map.blocked){if(!this.sceneryMesh.hasRoom())break;let n=this.sceneryMesh.offsetOf(this.sceneryMesh.count++),r=this.sceneryMesh.data;r[n]=e+.5,r[n+1]=0,r[n+2]=t+.5,r[n+3]=r[n+4]=r[n+5]=.95,r[n+6]=gr[0],r[n+7]=gr[1],r[n+8]=gr[2],r[n+9]=.05,r[n+10]=(e*7+t*13)%6.28,r[n+11]=0,r[n+12]=e*1.7+t}this.sceneryMesh.upload(),this.sceneryMesh.draw();let i=r.path.points[r.path.points.length-1],a=1-n.lives/Math.max(1,n.lives+n.leaked);this.coreMesh.count=1;{let t=this.coreMesh.data;t[0]=i.x,t[1]=.75,t[2]=i.y,t[3]=t[4]=t[5]=1.5,t[6]=hr[0],t[7]=hr[1]*(1-a*.6),t[8]=hr[2]*(1-a*.4),t[9]=1.2,t[10]=e.time*.4,t[11]=0,t[12]=0}this.coreMesh.upload(),this.coreMesh.draw(),this.pedestalMesh.count=0,this.gemMesh.count=0;for(let t of n.towers){if(!this.pedestalMesh.hasRoom())break;let n=R(t.cell.x,t.cell.y),r=vr(t.kind),i=Sr(t.level),a=e.selectedTowerId===t.id,o=this.pedestalMesh.offsetOf(this.pedestalMesh.count++),s=this.pedestalMesh.data;s[o]=n.x,s[o+1]=0,s[o+2]=n.y,s[o+3]=s[o+4]=s[o+5]=i,s[o+6]=_r[0],s[o+7]=_r[1],s[o+8]=_r[2],s[o+9]=.06,s[o+10]=t.facing,s[o+11]=a?.16+.1*Math.sin(e.time*7):0,s[o+12]=t.id*1.7;let c=.62*i+.16;this.pushGem(n.x,c,n.y,.34*i,r,Cr(t.level)*(a?1.5:1),e.time*1.1+t.id,t.id);for(let a=1;a<t.level;a++){let o=e.time*1.6+a/Math.max(1,t.level-1)*Math.PI*2+t.id,s=.34*i;this.pushGem(n.x+Math.cos(o)*s,c+.12,n.y+Math.sin(o)*s,.13*i,r,Cr(t.level),o*2,t.id+a)}}this.pedestalMesh.upload(),this.pedestalMesh.draw(),this.gemMesh.upload(),this.gemMesh.draw()}pushGem(e,t,n,r,i,a,o,s){let c=this.gemMesh;if(!c.hasRoom())return;let l=c.offsetOf(c.count++),u=c.data;u[l]=e,u[l+1]=t,u[l+2]=n,u[l+3]=u[l+4]=u[l+5]=r,u[l+6]=i[0],u[l+7]=i[1],u[l+8]=i[2],u[l+9]=a,u[l+10]=o,u[l+11]=0,u[l+12]=s}drawCreatures(e,t){let{state:n,ctx:r}=e;for(let e of Object.values(this.partMeshes))e.count=0;for(let t of n.enemies){let n=l[t.kind],i=ir[n.plan],a=Et(r,t,e.alpha),o=Ue(r.path,t.dist),s=Math.atan2(o.x,o.y),c=Math.max(0,Math.min(1,t.hp/t.maxHp)),u=wr(t.slowFor>0,t.dotFor>0),d=.55+.45*c,f=yr(t.kind),p=br(t.kind),m=xr(t.kind),h=t.phase,g=rr[n.gait],_=Dt(t);for(let e of i){let n=this.partMeshes[e.shape];if(!n.hasRoom())continue;let r=e.accent>.5?p:f,i=n.offsetOf(n.count++),o=n.data;o[i]=a.x,o[i+1]=_,o[i+2]=a.y,o[i+3]=e.pos[0],o[i+4]=e.pos[1],o[i+5]=e.pos[2],o[i+6]=e.size[0],o[i+7]=e.size[1],o[i+8]=e.size[2],o[i+9]=r[0]*u[0],o[i+10]=r[1]*u[1],o[i+11]=r[2]*u[2],o[i+12]=h,o[i+13]=g,o[i+14]=e.role,o[i+15]=e.phase+t.wobble*.04,o[i+16]=m,o[i+17]=t.flash,o[i+18]=s,o[i+19]=d}}this.creatureProgram.use(),this.creatureProgram.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),this.creatureProgram.uniform3f(`uEye`,t.x,t.y,t.z),this.creatureProgram.uniform1f(`uTime`,e.time);for(let e of Object.values(this.partMeshes))e.upload(),e.draw()}pushBeam(e,t,n,r,i,a,o,s,c){let l=this.beamMesh;if(!l.hasRoom())return;let u=l.offsetOf(l.count++),d=l.data;d[u]=e.x,d[u+1]=t,d[u+2]=e.y,d[u+3]=n.x,d[u+4]=r,d[u+5]=n.y,d[u+6]=i[0],d[u+7]=i[1],d[u+8]=i[2],d[u+9]=a,d[u+10]=o,d[u+11]=s,d[u+12]=c}drawBeams(e){let{state:t,ctx:n}=e,r=this.beamMesh;r.count=0;let i=new Map(t.enemies.map(e=>[e.id,e]));for(let r of t.towers){if(!r.targetId)continue;let t=i.get(r.targetId);if(!t)continue;let a=R(r.cell.x,r.cell.y),o=Et(n,t,e.alpha),s=vr(r.kind),c=.62*Sr(r.level)+.16;this.pushBeam(a,c,o,Dt(t)+.42,s,.022,.75,3,di.beam)}for(let e of t.beams){let t=Math.max(0,e.life/e.maxLife);for(let n=0;n+1<e.points.length;n++){let r=n===0?.72:.45;this.pushBeam(e.points[n],r,e.points[n+1],.45,e.color,e.width*(.7+.5*t),1.8+2.2*t,6,e.style===`arc`?di.arc:di.beam)}}for(let e of t.projectiles){let t=Math.min(1,e.t),n=Math.max(0,t-.3),r=pi(e.from,e.aim,t),i=pi(e.from,e.aim,n),a=.7+e.arc*mi(t),o=.7+e.arc*mi(n);this.pushBeam(i,o,r,a,e.color,.13,3.4,0,di.trail)}for(let r of t.enemies){let t=Math.max(0,Math.min(1,r.hp/r.maxHp));if(t>=.999)continue;let i=l[r.kind],a=Et(n,r,e.alpha),o=Dt(r)+ar(i.plan)*i.scale+.24,s=.3*i.scale+.1,c=s*(t*2-1);this.pushBeam(F(a.x-s,a.y),o,F(a.x+s,a.y),o,[.05,.06,.1],.045,1,0,di.health),this.pushBeam(F(a.x-s,a.y),o,F(a.x+c,a.y),o,Tr(t),.04,1.9,0,di.health)}if(r.count===0)return;let a=this.camera.eye();this.beamProgram.use(),this.beamProgram.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),this.beamProgram.uniform3f(`uEye`,a.x,a.y,a.z),this.beamProgram.uniform1f(`uTime`,e.time),r.upload(),r.draw(this.gl.TRIANGLES)}drawParticles(){let e=Math.min(this.profile.particles,this.particleMesh.capacity),t=this.particles.writeInto(this.particleMesh.data,e);if(this.particleMesh.count=t,t===0)return;let n=this.camera.view;this.particleProgram.use(),this.particleProgram.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),this.particleProgram.uniform3f(`uRight`,n[0],n[4],n[8]),this.particleProgram.uniform3f(`uUp`,n[1],n[5],n[9]),this.particleMesh.upload(),this.particleMesh.draw()}dispose(){let e=this.gl;this.groundMesh?.dispose();for(let e of Object.values(this.partMeshes))e.dispose();this.pedestalMesh.dispose(),this.gemMesh.dispose(),this.sceneryMesh.dispose(),this.coreMesh.dispose(),this.beamMesh.dispose(),this.particleMesh.dispose(),this.pathFieldTex&&e.deleteTexture(this.pathFieldTex),this.buildMaskTex&&e.deleteTexture(this.buildMaskTex),e.deleteVertexArray(this.emptyVao),this.skyProgram.dispose(),this.groundProgram.dispose(),this.solidProgram.dispose(),this.creatureProgram.dispose(),this.beamProgram.dispose(),this.particleProgram.dispose(),this.post.dispose()}};function pi(e,t,n){return F(e.x+(t.x-e.x)*n,e.y+(t.y-e.y)*n)}function mi(e){let t=Math.max(0,Math.min(1,e));return 4*t*(1-t)}function hi(e){let t=0,n=0;for(let r of e)t+=r.x,n+=r.y;return{x:t/e.length,y:n/e.length}}var gi=class{pointers=new Map;pinchDistance=0;pinchAngle=0;pinchCentre={x:0,y:0};get pointerCount(){return this.pointers.size}get isDragging(){return this.pointers.size>0}down(e,t,n,r){this.pointers.set(e,{x:t,y:n,startX:t,startY:n,startTime:r,travelled:0}),this.pointers.size===2&&this.resetPinch()}resetPinch(){let[e,t]=[...this.pointers.values()];e&&t&&(this.pinchDistance=Math.hypot(t.x-e.x,t.y-e.y),this.pinchAngle=Math.atan2(t.y-e.y,t.x-e.x),this.pinchCentre=hi([e,t]))}move(e,t,n){let r=this.pointers.get(e);if(!r)return this.pointers.size===0?{type:`hover`,x:t,y:n}:null;let i={x:r.x,y:r.y};if(r.travelled+=Math.hypot(t-r.x,n-r.y),r.x=t,r.y=n,this.pointers.size===1)return{type:`drag`,from:i,to:{x:t,y:n}};if(this.pointers.size===2){let[e,t]=[...this.pointers.values()],n=Math.hypot(t.x-e.x,t.y-e.y),r=Math.atan2(t.y-e.y,t.x-e.x),i=hi([e,t]),a=this.pinchDistance>1?n/this.pinchDistance:1,o=r-this.pinchAngle;o>Math.PI&&(o-=Math.PI*2),o<-Math.PI&&(o+=Math.PI*2);let s=i.y-this.pinchCentre.y;return this.pinchDistance=n,this.pinchAngle=r,this.pinchCentre=i,{type:`pinch`,scale:a,twist:o,dy:s}}return null}up(e,t){let n=this.pointers.get(e);if(this.pointers.delete(e),this.pointers.size===2&&this.resetPinch(),!n)return null;let r=t-n.startTime;return Math.hypot(n.x-n.startX,n.y-n.startY)<=12&&n.travelled<=24&&r<=450?{type:`tap`,x:n.x,y:n.y}:null}cancel(e){this.pointers.delete(e),this.pointers.size===2&&this.resetPinch()}clear(){this.pointers.clear()}},_i=.006,vi=i(function(){let e=(0,s.useRef)(null),t=U(),n=Mn(),r=jn(),[i,a]=(0,s.useState)(null),o=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let i=e.current;if(!i)return;let s;try{s=new fi(tr(i))}catch(e){a(e instanceof Zn?`Нужен WebGL2. Обновите браузер или включите аппаратное ускорение.`:`Не удалось запустить графику: ${e instanceof Error?e.message:String(e)}`);return}o.current=s,s.setQuality(r.quality),s.setTheme(r.theme),t.onEvent=e=>s.emit(e);let c=new gi,l=s.camera,u=(e,t)=>Xn(e,t,i.getBoundingClientRect()),d=e=>{i.setPointerCapture?.(e.pointerId),c.down(e.pointerId,e.clientX,e.clientY,e.timeStamp)},f=e=>{let n=c.move(e.pointerId,e.clientX,e.clientY);if(n){if(n.type===`hover`){let e=u(n.x,n.y);t.setHoverWorld(s.pick(e.x,e.y));return}if(n.type===`drag`){let e=u(n.from.x,n.from.y),t=u(n.to.x,n.to.y),r=s.pick(e.x,e.y),i=s.pick(t.x,t.y);r&&i&&(l.target=F(l.target.x+(r.x-i.x),l.target.y+(r.y-i.y)));return}l.zoomBy(1/n.scale),l.orbitBy(-n.twist,n.dy*_i)}},p=e=>{i.releasePointerCapture?.(e.pointerId);let n=c.up(e.pointerId,e.timeStamp);if(!n)return;let r=u(n.x,n.y),a=s.pick(r.x,r.y);a&&t.tapWorld(a)},m=e=>c.cancel(e.pointerId),h=e=>{e.preventDefault(),l.zoomBy(e.deltaY>0?1.12:1/1.12)};i.addEventListener(`pointerdown`,d),i.addEventListener(`pointermove`,f),i.addEventListener(`pointerup`,p),i.addEventListener(`pointercancel`,m),i.addEventListener(`wheel`,h,{passive:!1});let g=0,_=performance.now(),v=e=>{g=requestAnimationFrame(v);let r=Math.min(.25,(e-_)/1e3);_=e,t.ctx&&s.setMap(t.ctx);let i=t.advance(r);n.pump(),t.ctx&&t.state&&s.render({ctx:t.ctx,state:t.state,alpha:i,time:e/1e3,hoverCell:t.hoverCell,hoverValid:t.hoverValid,selectedTowerId:t.selectedTowerId,placing:t.pendingRecipe?.recipe.id??null})};return g=requestAnimationFrame(v),()=>{cancelAnimationFrame(g),i.removeEventListener(`pointerdown`,d),i.removeEventListener(`pointermove`,f),i.removeEventListener(`pointerup`,p),i.removeEventListener(`pointercancel`,m),i.removeEventListener(`wheel`,h),t.onEvent=void 0,o.current=null,s.dispose()}},[]),(0,s.useEffect)(()=>{o.current?.setQuality(r.quality)},[r.quality]),(0,s.useEffect)(()=>{o.current?.setTheme(r.theme)},[r.theme]),(0,M.jsxs)(`div`,{className:`board`,children:[(0,M.jsx)(`canvas`,{ref:e,className:`board__canvas`,"aria-label":`Игровое поле`,role:`img`}),i?(0,M.jsxs)(`div`,{className:`board__error`,role:`alert`,children:[(0,M.jsx)(`p`,{className:`board__error-title`,children:`Графика недоступна`}),(0,M.jsx)(`p`,{className:`board__error-text`,children:i})]}):null]})});function yi({label:e,value:t,tone:n=`default`,icon:r,compact:i=!1}){return(0,M.jsxs)(`div`,{className:`stat stat--${n} ${i?`stat--compact`:``}`.trim(),children:[r?(0,M.jsx)(`span`,{className:`stat__icon`,"aria-hidden":`true`,children:r}):null,(0,M.jsxs)(`div`,{className:`stat__text`,children:[(0,M.jsx)(`span`,{className:`stat__label`,children:e}),(0,M.jsx)(`span`,{className:`stat__value mono`,children:t})]})]})}var bi=te.length;function xi(e,t=20){let n=e/t;return n>.5?`good`:n>.2?`warn`:`bad`}var Si=i(function(){let e=U(),t=W(),n=Mn(),{hud:r}=e;return(0,M.jsxs)(`header`,{className:`hud`,children:[(0,M.jsxs)(`div`,{className:`hud__row`,children:[(0,M.jsx)(N,{size:`sm`,variant:`ghost`,className:`hud__menu`,"aria-label":`Меню`,onClick:()=>t.go(`menu`),children:`☰`}),(0,M.jsxs)(`div`,{className:`hud__stats`,children:[(0,M.jsx)(yi,{compact:!0,label:`Золото`,value:r.gold,tone:`gold`,icon:`◆`}),(0,M.jsx)(yi,{compact:!0,label:`Ядро`,value:r.lives,tone:xi(r.lives),icon:`❤`}),(0,M.jsx)(yi,{compact:!0,label:`Волна`,value:`${r.wave}/${r.totalWaves}`,icon:`≋`})]}),(0,M.jsxs)(`div`,{className:`hud__controls`,children:[(0,M.jsx)(N,{size:`sm`,variant:`ghost`,"aria-label":e.paused?`Продолжить`:`Пауза`,"aria-pressed":e.paused,onClick:()=>e.togglePause(),children:e.paused?`▶`:`❚❚`}),(0,M.jsxs)(N,{size:`sm`,variant:`ghost`,"aria-label":`Скорость ${e.speed}x`,onClick:()=>e.cycleSpeed(),children:[e.speed,`×`]})]})]}),(0,M.jsxs)(`div`,{className:`hud__row hud__row--secondary`,children:[(0,M.jsxs)(`button`,{type:`button`,className:`hud__book`,onClick:()=>t.go(`codex`),children:[(0,M.jsx)(`span`,{"aria-hidden":`true`,children:`📖`}),` Рецепты`,(0,M.jsxs)(`span`,{className:`hud__book-count mono`,children:[r.discovered.length,`/`,bi]})]}),(0,M.jsxs)(`span`,{className:`hud__towers`,title:`Башен на поле`,children:[(0,M.jsx)(`span`,{"aria-hidden":`true`,children:`⌂`}),` `,r.towers]}),(0,M.jsx)(`span`,{className:`hud__turn ${r.canPlace?`hud__turn--open`:``}`.trim(),children:r.canPlace?`Ход есть`:`Ход сделан`}),r.enemies>0?(0,M.jsxs)(`span`,{className:`hud__enemies`,children:[`Врагов: `,r.enemies]}):null,n.stage===`playing`?(0,M.jsx)(`span`,{className:`hud__net ${e.stalled?`hud__net--waiting`:``}`.trim(),children:e.stalled?`Ждём игрока…`:`${n.peerName||`Игрок 2`} · ${n.rtt}мс`}):null]})]})});function Ci(){return typeof crypto<`u`&&typeof crypto.getRandomValues==`function`?crypto.getRandomValues(new Uint32Array(1))[0]>>>0:(Date.now()&4294967295)>>>0}var wi=i(function(){let e=U(),t=W(),[n,r]=(0,s.useState)(e.mapId),i=L.find(e=>e.id===n)??L[0];return(0,M.jsx)(`div`,{className:`menu`,children:(0,M.jsxs)(`div`,{className:`menu__inner`,children:[(0,M.jsxs)(`header`,{className:`menu__brand`,children:[(0,M.jsxs)(`h1`,{className:`menu__logo`,children:[(0,M.jsx)(`span`,{className:`menu__logo-r`,children:`PRISM`}),(0,M.jsx)(`span`,{className:`menu__logo-sub`,children:`FORGE`})]}),(0,M.jsx)(`p`,{className:`menu__tagline`,children:`Башен тут не покупают. Камни падают в лоток, два-три складываются в рецепт — и рецепт встаёт на поле башней.`})]}),(0,M.jsxs)(`section`,{className:`menu__maps`,"aria-label":`Выбор карты`,children:[(0,M.jsx)(`p`,{className:`label`,children:`Карта`}),(0,M.jsx)(`div`,{className:`menu__map-list`,children:L.map(e=>(0,M.jsxs)(`button`,{type:`button`,className:`mapcard ${e.id===n?`mapcard--active`:``}`.trim(),"aria-pressed":e.id===n,onClick:()=>r(e.id),children:[(0,M.jsx)(`span`,{className:`mapcard__name`,children:e.name}),(0,M.jsxs)(`span`,{className:`mapcard__meta mono`,children:[e.width,`×`,e.height,` · `,e.waves,` волн`]})]},e.id))}),(0,M.jsx)(`p`,{className:`menu__map-blurb`,children:i.blurb})]}),(0,M.jsxs)(`div`,{className:`menu__actions`,children:[(0,M.jsx)(N,{variant:`primary`,size:`lg`,block:!0,onClick:()=>{e.start(n,Ci(),`solo`),t.go(`game`)},children:`Играть`}),(0,M.jsxs)(`div`,{className:`menu__row`,children:[(0,M.jsx)(N,{block:!0,onClick:()=>t.go(`multiplayer`),icon:`⇄`,children:`Вдвоём`}),(0,M.jsx)(N,{block:!0,onClick:()=>t.go(`codex`),icon:`✦`,children:`Как играть`})]}),(0,M.jsx)(N,{block:!0,variant:`ghost`,onClick:()=>t.go(`settings`),icon:`⚙`,children:`Настройки`})]}),(0,M.jsx)(`footer`,{className:`menu__footer`,children:`Работает без сервера и без сети. Игра вдвоём — напрямую между устройствами.`})]})})});async function Ti(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}return!1}var Ei=i(function(){let e=Mn(),t=W(),n=jn(),[r,i]=(0,s.useState)(`host`),[a,o]=(0,s.useState)(L[0].id),[c,l]=(0,s.useState)(`coop`),[u,d]=(0,s.useState)(``),[f,p]=(0,s.useState)(!1),[m,h]=(0,s.useState)(!1);(0,s.useEffect)(()=>{if(typeof location>`u`)return;let e=_n.inviteFromUrl(location.href);e&&(i(`join`),d(e))},[]),(0,s.useEffect)(()=>{e.stage===`playing`&&t.go(`game`)},[e.stage,t]);let g=async e=>{h(!0),p(!1);try{await e()}catch{}finally{h(!1)}},_=async()=>{let t=typeof location>`u`?e.outboundCode:e.shareUrl(location.href);if(typeof navigator<`u`&&navigator.share)try{await navigator.share({title:`PRISM FORGE`,text:`Партия на двоих`,url:t});return}catch{}p(await Ti(t))};return(0,M.jsxs)(ge,{fullscreen:!0,title:`Игра вдвоём`,hint:`Прямое соединение между устройствами. Сервера нет — код передаётся любым мессенджером.`,action:(0,M.jsx)(N,{size:`sm`,"aria-label":`Закрыть`,onClick:()=>t.go(`menu`),children:`✕`}),children:[(0,M.jsxs)(`div`,{className:`mp__tabs`,role:`tablist`,children:[(0,M.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":r===`host`,className:`mp__tab ${r===`host`?`mp__tab--on`:``}`.trim(),onClick:()=>i(`host`),children:`Создать`}),(0,M.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":r===`join`,className:`mp__tab ${r===`join`?`mp__tab--on`:``}`.trim(),onClick:()=>i(`join`),children:`Присоединиться`})]}),r===`host`?(0,M.jsxs)(`div`,{className:`mp__section`,children:[(0,M.jsxs)(`div`,{className:`mp__field`,children:[(0,M.jsx)(`p`,{className:`label`,children:`Режим`}),(0,M.jsxs)(`div`,{className:`mp__choices`,children:[(0,M.jsxs)(`button`,{type:`button`,className:`mp__choice ${c===`coop`?`mp__choice--on`:``}`.trim(),"aria-pressed":c===`coop`,onClick:()=>l(`coop`),children:[(0,M.jsx)(`strong`,{children:`Вместе`}),(0,M.jsx)(`span`,{children:`Одно поле, общая казна, общий лоток камней.`})]}),(0,M.jsxs)(`button`,{type:`button`,className:`mp__choice ${c===`duel`?`mp__choice--on`:``}`.trim(),"aria-pressed":c===`duel`,onClick:()=>l(`duel`),children:[(0,M.jsx)(`strong`,{children:`Дуэль`}),(0,M.jsx)(`span`,{children:`Одинаковые волны у обоих. Кто продержится дольше.`})]})]})]}),(0,M.jsxs)(`div`,{className:`mp__field`,children:[(0,M.jsx)(`p`,{className:`label`,children:`Карта`}),(0,M.jsx)(`div`,{className:`mp__choices mp__choices--row`,children:L.map(e=>(0,M.jsx)(`button`,{type:`button`,className:`mp__pill ${e.id===a?`mp__pill--on`:``}`.trim(),"aria-pressed":e.id===a,onClick:()=>o(e.id),children:e.name},e.id))})]}),e.outboundCode&&e.role===`host`?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`div`,{className:`mp__field`,children:[(0,M.jsx)(`p`,{className:`label`,children:`1. Отправьте приглашение`}),(0,M.jsx)(`textarea`,{className:`mp__code mono`,readOnly:!0,value:e.outboundCode,rows:3,"aria-label":`Код приглашения`}),(0,M.jsx)(`div`,{className:`mp__row`,children:(0,M.jsx)(N,{block:!0,onClick:_,icon:`↗`,children:f?`Скопировано`:`Поделиться`})})]}),(0,M.jsxs)(`div`,{className:`mp__field`,children:[(0,M.jsx)(`p`,{className:`label`,children:`2. Вставьте ответный код`}),(0,M.jsx)(`textarea`,{className:`mp__code mono`,value:u,rows:3,placeholder:`PL1a…`,"aria-label":`Ответный код`,onChange:e=>d(e.target.value)}),(0,M.jsx)(N,{variant:`primary`,block:!0,disabled:m||u.trim().length===0,onClick:()=>g(()=>e.completeHandshake(u.trim())),children:`Подключиться`})]})]}):(0,M.jsx)(N,{variant:`primary`,size:`lg`,block:!0,disabled:m,onClick:()=>g(()=>e.host(a,c)),children:m?`Готовим…`:`Создать приглашение`})]}):(0,M.jsxs)(`div`,{className:`mp__section`,children:[(0,M.jsxs)(`div`,{className:`mp__field`,children:[(0,M.jsx)(`p`,{className:`label`,children:`1. Вставьте приглашение`}),(0,M.jsx)(`textarea`,{className:`mp__code mono`,value:u,rows:3,placeholder:`PL1o…`,"aria-label":`Код приглашения`,onChange:e=>d(e.target.value)}),(0,M.jsx)(N,{variant:`primary`,block:!0,disabled:m||u.trim().length===0,onClick:()=>g(()=>e.join(u.trim())),children:m?`Готовим…`:`Принять`})]}),e.outboundCode&&e.role===`guest`?(0,M.jsxs)(`div`,{className:`mp__field`,children:[(0,M.jsx)(`p`,{className:`label`,children:`2. Отправьте ответ обратно`}),(0,M.jsx)(`textarea`,{className:`mp__code mono`,readOnly:!0,value:e.outboundCode,rows:3,"aria-label":`Ответный код`}),(0,M.jsx)(N,{block:!0,onClick:_,icon:`↗`,children:f?`Скопировано`:`Поделиться`})]}):null]}),(0,M.jsxs)(`div`,{className:`mp__status`,children:[(0,M.jsx)(`span`,{className:`mp__dot mp__dot--${e.peerStatus}`,"aria-hidden":`true`}),(0,M.jsx)(`span`,{children:Di(e.stage,e.peerStatus,e.error)})]}),(0,M.jsxs)(`label`,{className:`mp__toggle`,children:[(0,M.jsx)(`input`,{type:`checkbox`,checked:!n.useStun,onChange:()=>n.toggleStun()}),(0,M.jsxs)(`span`,{children:[`Только локальная сеть`,(0,M.jsx)(`small`,{children:`Без публичных STUN-серверов. Работает, когда оба устройства в одном Wi-Fi.`})]})]})]})});function Di(e,t,n){if(n)return n;switch(e){case`invite-ready`:return`Приглашение готово — ждём ответный код.`;case`answer-ready`:return`Ответ готов — отправьте его создателю партии.`;case`connecting`:return t===`connected`?`Синхронизируемся…`:`Устанавливаем соединение…`;case`playing`:return`Подключено.`;case`error`:return`Не удалось подключиться.`;default:return`Готово к подключению.`}}function Oi(){return typeof crypto<`u`&&typeof crypto.getRandomValues==`function`?crypto.getRandomValues(new Uint32Array(1))[0]>>>0:(Date.now()&4294967295)>>>0}var ki=i(function(){let e=U(),t=W(),n=An();if(!t.resultsOpen)return null;let r=e.hud.status===`won`,i=n.personalBest(3);return(0,M.jsx)(`div`,{className:`results`,role:`dialog`,"aria-modal":`true`,"aria-label":r?`Победа`:`Поражение`,children:(0,M.jsxs)(`div`,{className:`results__card surface`,children:[(0,M.jsx)(`p`,{className:`results__verdict ${r?`results__verdict--win`:`results__verdict--loss`}`,children:r?`Решётка выстояла`:`Ядро погасло`}),(0,M.jsx)(`p`,{className:`results__sub`,children:r?`Все ${e.hud.totalWaves} волн отражены.`:`Вы держались до волны ${e.hud.wave}.`}),(0,M.jsxs)(`div`,{className:`results__stats`,children:[(0,M.jsx)(yi,{label:`Очки`,value:e.hud.score,tone:`gold`}),(0,M.jsx)(yi,{label:`Убито`,value:e.hud.kills}),(0,M.jsx)(yi,{label:`Прорвалось`,value:e.hud.leaked,tone:e.hud.leaked>0?`bad`:`good`})]}),i.length>0?(0,M.jsxs)(`section`,{className:`results__best`,children:[(0,M.jsx)(`p`,{className:`label`,children:`Лучшее на этой карте`}),(0,M.jsx)(`ol`,{className:`results__best-list`,children:i.map((e,t)=>(0,M.jsxs)(`li`,{className:`results__best-row`,children:[(0,M.jsx)(`span`,{className:`results__best-rank mono`,children:t+1}),(0,M.jsx)(`span`,{className:`results__best-score mono`,children:e.score}),(0,M.jsxs)(`span`,{className:`results__best-wave`,children:[`волна `,e.wave]})]},e.id))})]}):null,(0,M.jsxs)(`div`,{className:`results__actions`,children:[(0,M.jsx)(N,{variant:`primary`,block:!0,onClick:()=>{t.hideResults(),e.start(e.mapId,Oi(),`solo`)},children:`Ещё раз`}),(0,M.jsx)(N,{block:!0,onClick:()=>{t.hideResults(),t.go(`menu`)},children:`В меню`})]})]})})}),Ai=1.05,ji=.818;function Mi(e){let t=e*(2.51*e+.03)/(e*(2.43*e+.59)+.14);return Math.max(0,Math.min(1,t))}function $(e,t=Ai){let n=e=>{let n=Mi(Math.max(0,e)*t);return Math.round(n**(1/2.2)*255)};return`rgb(${n(e[0])}, ${n(e[1])}, ${n(e[2])})`}function Ni(e,t){let{sun:n,ambient:r}=e.ground,i=r+(1-r)*ji;return[t[0]*n[0]*i,t[1]*n[1]*i,t[2]*n[2]*i]}function Pi(e){let{sky:t,ground:n}=e;return{skyTop:$(t.zenith),skyBottom:$([t.horizon[0]+t.glow[0]*.5,t.horizon[1]+t.glow[1]*.5,t.horizon[2]+t.glow[2]*.5]),grassTop:$(Ni(e,n.grassHigh)),grassBottom:$(Ni(e,n.grassLow)),road:$(Ni(e,n.roadHigh)),kerb:$(Ni(e,n.kerb)),accent:$(n.accent)}}var Fi=[{id:`low`,name:`Низкое`,hint:`Без свечения и зерна. Для слабых телефонов.`},{id:`medium`,name:`Среднее`,hint:`Свечение есть, разрешение чуть ниже.`},{id:`high`,name:`Высокое`,hint:`Полное свечение, полное разрешение.`}];function Ii({id:e}){let t=Pi(vn[e]);return(0,M.jsx)(`span`,{className:`themescene`,"aria-hidden":`true`,style:{background:`linear-gradient(${t.skyTop}, ${t.skyBottom})`},children:(0,M.jsxs)(`span`,{className:`themescene__ground`,style:{background:`linear-gradient(${t.grassTop}, ${t.grassBottom})`},children:[(0,M.jsx)(`span`,{className:`themescene__road`,style:{background:t.road,borderColor:t.kerb}}),(0,M.jsx)(`span`,{className:`themescene__gem`,style:{background:t.accent,boxShadow:`0 0 6px ${t.accent}`}})]})})}var Li=i(function(){let e=jn(),t=W();return(0,M.jsxs)(ge,{fullscreen:!0,title:`Настройки`,action:(0,M.jsx)(N,{size:`sm`,"aria-label":`Закрыть`,onClick:()=>t.go(`menu`),children:`✕`}),children:[(0,M.jsxs)(`section`,{className:`settings__group`,children:[(0,M.jsx)(`p`,{className:`label`,children:`Имя`}),(0,M.jsx)(`input`,{className:`settings__input`,type:`text`,value:e.playerName,maxLength:24,"aria-label":`Имя игрока`,onChange:t=>e.setPlayerName(t.target.value)})]}),(0,M.jsxs)(`section`,{className:`settings__group`,children:[(0,M.jsx)(`p`,{className:`label`,children:`Оформление`}),(0,M.jsx)(`div`,{className:`settings__themes`,children:yn.map(t=>{let n=vn[t];return(0,M.jsxs)(`button`,{type:`button`,className:`themecard ${e.theme===t?`themecard--on`:``}`.trim(),"aria-pressed":e.theme===t,onClick:()=>e.setTheme(t),children:[(0,M.jsx)(Ii,{id:t}),(0,M.jsx)(`strong`,{className:`themecard__name`,children:n.name}),(0,M.jsx)(`span`,{className:`themecard__hint`,children:n.blurb})]},t)})})]}),(0,M.jsxs)(`section`,{className:`settings__group`,children:[(0,M.jsx)(`p`,{className:`label`,children:`Качество графики`}),(0,M.jsx)(`div`,{className:`settings__options`,children:Fi.map(t=>(0,M.jsxs)(`button`,{type:`button`,className:`settings__option ${e.quality===t.id?`settings__option--on`:``}`.trim(),"aria-pressed":e.quality===t.id,onClick:()=>e.setQuality(t.id),children:[(0,M.jsx)(`strong`,{children:t.name}),(0,M.jsx)(`span`,{children:t.hint})]},t.id))})]}),(0,M.jsxs)(`section`,{className:`settings__group`,children:[(0,M.jsx)(`p`,{className:`label`,children:`Прочее`}),(0,M.jsx)(Ri,{checked:e.haptics,label:`Вибрация`,hint:`Короткий отклик при постройке и потере жизни.`,onChange:()=>e.toggleHaptics()}),(0,M.jsx)(Ri,{checked:e.useStun,label:`Публичные STUN-серверы`,hint:`Нужны, чтобы соединяться через интернет. Выключите — останется только локальная сеть.`,onChange:()=>e.toggleStun()}),(0,M.jsx)(Ri,{checked:e.shareScores,label:`Отправлять результаты`,hint:`Выключено по умолчанию. Игра полностью работает без всякого сервера.`,onChange:()=>e.toggleShareScores()})]}),(0,M.jsx)(N,{variant:`danger`,block:!0,onClick:()=>e.reset(),children:`Сбросить настройки`})]})});function Ri({checked:e,label:t,hint:n,onChange:r}){return(0,M.jsxs)(`label`,{className:`settings__toggle`,children:[(0,M.jsx)(`input`,{type:`checkbox`,checked:e,onChange:r}),(0,M.jsxs)(`span`,{children:[t,(0,M.jsx)(`small`,{children:n})]})]})}var zi=i(function(){let e=W();return e.toasts.length===0?null:(0,M.jsx)(`div`,{className:`toasts`,role:`status`,"aria-live":`polite`,children:e.toasts.map(t=>(0,M.jsx)(`button`,{type:`button`,className:`toast toast--${t.tone}`,onClick:()=>e.dismiss(t.id),children:t.text},t.id))})}),Bi=i(function(){let e=U(),{hud:t}=e,n=e.pendingRecipe,r=e.selectedGemIds.length,i=e.combinations,a=e.readyGemIds,o=i[0];return(0,M.jsxs)(`div`,{className:`tray`,children:[n?(0,M.jsxs)(`div`,{className:`tray__recipe ${t.canPlace?``:`tray__recipe--spent`}`.trim(),role:`status`,children:[(0,M.jsx)(`span`,{className:`tray__recipe-label`,children:ee(n.recipe.id)?`Как есть`:`Собирается`}),(0,M.jsx)(`strong`,{className:`tray__recipe-name`,style:{color:Hi(n.recipe.stats.color)},children:n.recipe.name}),n.surplus>0?(0,M.jsxs)(`span`,{className:`tray__recipe-bonus`,children:[`+`,n.surplus,` к силе`]}):null,(0,M.jsx)(`span`,{className:`tray__recipe-hint`,children:t.canPlace?`Тапните клетку на поле`:`Ход уже сделан — начните волну`})]}):r>0?(0,M.jsx)(`div`,{className:`tray__recipe tray__recipe--empty`,role:`status`,children:(0,M.jsx)(`span`,{className:`tray__recipe-hint`,children:r===1?`Выберите ещё камень`:`Из этих камней ничего не выходит`})}):o?(0,M.jsxs)(`button`,{type:`button`,className:`tray__found`,onClick:()=>e.selectCombination(0),children:[(0,M.jsx)(`span`,{className:`tray__found-label`,children:`Сложилось`}),(0,M.jsx)(`strong`,{className:`tray__found-name`,style:{color:Hi(o.recipe.stats.color)},children:o.recipe.name}),i.length>1?(0,M.jsxs)(`span`,{className:`tray__found-more`,children:[`и ещё `,i.length-1]}):null,(0,M.jsx)(`span`,{className:`tray__found-hint`,children:`Тапните, чтобы выбрать`})]}):t.canPlace?null:(0,M.jsx)(`div`,{className:`tray__recipe tray__recipe--empty`,role:`status`,children:(0,M.jsx)(`span`,{className:`tray__recipe-hint`,children:`Ход сделан. Следующая постановка — со следующей волной`})}),(0,M.jsxs)(`div`,{className:`tray__actions`,children:[(0,M.jsx)(N,{variant:`primary`,size:`sm`,disabled:!e.canForge,meta:`◆${e.forgeCost}`,onClick:()=>e.forge(),icon:`⚒`,children:e.trayFull?`Лоток полон`:`Ковать`}),(0,M.jsxs)(N,{size:`sm`,disabled:!e.canRefine,meta:t.refinement>=5?void 0:`◆${t.refineCost}`,onClick:()=>e.refine(),icon:`✦`,title:`Повышает шанс выпадения камней высокого уровня`,children:[`Очистка `,t.refinement,`/`,5]})]}),(0,M.jsx)(`ul`,{className:`tray__slots`,"aria-label":`Камни в лотке`,children:Array.from({length:8},(n,r)=>{let i=t.tray[r];return i?(0,M.jsx)(`li`,{className:`gemslot`,children:(0,M.jsx)(Vi,{gem:i,selected:e.selectedGemIds.includes(i.id),ready:a.has(i.id),onClick:()=>e.toggleGem(i.id)})},i.id):(0,M.jsx)(`li`,{className:`gemslot gemslot--empty`,"aria-hidden":`true`},`empty-${r}`)})})]})});function Vi({gem:e,selected:t,ready:n,onClick:r}){let i=y[e.kind];return(0,M.jsxs)(`button`,{type:`button`,className:[`gem`,t?`gem--on`:``,n&&!t?`gem--ready`:``].filter(Boolean).join(` `),style:{"--gem":Hi(i.color)},"aria-pressed":t,"aria-label":`${i.name}, уровень ${e.level}. ${i.element}: ${i.trait}${n?`. Входит в готовую комбинацию`:``}`,onClick:r,children:[(0,M.jsx)(`span`,{className:`gem__glyph`,"aria-hidden":`true`,children:i.glyph}),(0,M.jsx)(`span`,{className:`gem__level mono`,children:e.level})]})}function Hi(e){let t=e=>Math.round(Math.max(0,Math.min(1,e))*255);return`rgb(${t(e[0])}, ${t(e[1])}, ${t(e[2])})`}function Ui(e){let t=e=>Math.round(Math.max(0,Math.min(1,e))*255);return`rgb(${t(e[0])}, ${t(e[1])}, ${t(e[2])})`}var Wi=i(function(){let e=U(),t=e.selectedTower;if(!t)return null;let{recipe:n}=t,r=t.level>=t.maxLevel;return(0,M.jsxs)(`aside`,{className:`sheet surface`,role:`dialog`,"aria-label":`Башня ${n.name}`,children:[(0,M.jsxs)(`header`,{className:`sheet__head`,children:[(0,M.jsx)(`span`,{className:`sheet__gem`,style:{background:Ui(n.stats.color)},"aria-hidden":`true`}),(0,M.jsxs)(`div`,{className:`sheet__title`,children:[(0,M.jsx)(`h3`,{className:`sheet__name`,children:n.name}),(0,M.jsxs)(`p`,{className:`sheet__sub`,children:[t.damage,` урона · `,t.fireRate.toFixed(1),`/с · радиус `,t.range.toFixed(1)]})]}),(0,M.jsx)(`ol`,{className:`sheet__levels`,"aria-label":`Уровень ${t.level} из ${t.maxLevel}`,children:Array.from({length:t.maxLevel},(e,n)=>(0,M.jsx)(`li`,{className:`sheet__pip ${n<t.level?`sheet__pip--on`:``}`.trim()},n))}),(0,M.jsx)(N,{size:`sm`,variant:`ghost`,"aria-label":`Закрыть`,onClick:()=>e.select(null),children:`✕`})]}),(0,M.jsx)(`p`,{className:`sheet__blurb`,children:n.blurb}),r?(0,M.jsx)(`p`,{className:`sheet__upgrade sheet__upgrade--max`,children:`Максимальный уровень.`}):(0,M.jsxs)(`div`,{className:`sheet__upgrade ${t.canUpgradeNow?`sheet__upgrade--ready`:``}`.trim(),children:[(0,M.jsxs)(`span`,{className:`sheet__upgrade-label`,children:[t.canUpgradeNow?`Тапните башню — станет `:`Соберите ещё раз для уровня `,t.level+1]}),(0,M.jsx)(`span`,{className:`sheet__upgrade-formula`,children:n.ingredients.map((e,t)=>{let n=y[e.kind];return(0,M.jsxs)(`span`,{className:`sheet__ing`,children:[(0,M.jsx)(`span`,{className:`sheet__ing-gem`,style:{background:Ui(n.color)},"aria-hidden":`true`,children:n.glyph}),(0,M.jsxs)(`span`,{className:`mono`,children:[e.level,`+`]})]},`${e.kind}-${t}`)})})]}),(0,M.jsx)(N,{variant:`danger`,block:!0,meta:`◆${t.sellValue}`,onClick:()=>e.sellSelectedTower(),children:`Снести`})]})});function Gi(e){let t=e=>Math.round(Math.max(0,Math.min(1,e))*255);return`rgb(${t(e[0])}, ${t(e[1])}, ${t(e[2])})`}var Ki=i(function(){let e=U(),{hud:t}=e,n=e.nextWavePreview,r=Math.min(t.wave+1,t.totalWaves),i=t.status===`wave`;return t.wave>=t.totalWaves&&t.status!==`wave`?null:(0,M.jsxs)(`div`,{className:`wavectl`,children:[(0,M.jsxs)(`ul`,{className:`wavectl__preview`,"aria-label":`Состав волны ${r}`,children:[n.map(({kind:e,count:t})=>{let n=l[e];return(0,M.jsxs)(`li`,{className:`wavechip`,title:`${n.name}: ${n.hint}`,children:[(0,M.jsx)(`span`,{className:`wavechip__dot`,style:{background:Gi(n.color)},"aria-hidden":`true`}),(0,M.jsx)(`span`,{className:`wavechip__name`,children:n.name}),(0,M.jsxs)(`span`,{className:`wavechip__count mono`,children:[`×`,t]})]},e)}),Qe(r)?(0,M.jsx)(`li`,{className:`wavechip wavechip--boss`,children:`Босс`}):null]}),(0,M.jsx)(N,{variant:`primary`,size:`lg`,className:`wavectl__go`,onClick:()=>e.startWave(),disabled:t.wave>=t.totalWaves,children:i?`Позвать волну ${r} раньше`:`Волна ${r}`})]})}),qi=i(function(){let e=W(),t=U(),n=jn();(0,s.useEffect)(()=>{typeof document<`u`&&(document.documentElement.dataset.theme=n.theme)},[n.theme]),(0,s.useEffect)(()=>{typeof location<`u`&&_n.inviteFromUrl(location.href)&&e.go(`multiplayer`)},[e]);let r=e.screen===`game`&&t.running;return(0,M.jsxs)(`div`,{className:`app`,children:[t.running?(0,M.jsx)(vi,{}):null,r?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(Si,{}),(0,M.jsx)(Wi,{}),(0,M.jsxs)(`div`,{className:`bottombar`,children:[(0,M.jsx)(Ki,{}),(0,M.jsx)(Bi,{})]}),(0,M.jsx)(ki,{})]}):null,e.screen===`menu`?(0,M.jsx)(wi,{}):null,e.screen===`multiplayer`?(0,M.jsx)(Ei,{}):null,e.screen===`settings`?(0,M.jsx)(Li,{}):null,e.screen===`codex`?(0,M.jsx)(Fn,{}):null,(0,M.jsx)(zi,{})]})}),Ji=document.getElementById(`root`);if(!Ji)throw Error(`#root не найден`);var Yi=new Dn;(0,c.createRoot)(Ji).render((0,M.jsx)(s.StrictMode,{children:(0,M.jsx)(kn,{value:Yi,children:(0,M.jsx)(qi,{})})}));