import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{i as t,n,r,t as i}from"./mobx-NDfu625Y.js";import{n as a,t as o}from"./react-DNLHFTBW.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var s=e(t(),1),c=a(),l={runt:{kind:`runt`,name:`Гоблин`,hint:`Мелкий и быстрый. Ходит толпой, брони нет.`,hp:52,speed:1.6,armour:0,slowResist:0,bounty:9,leak:1,gait:`walk`,plan:`goblin`,scale:.62,color:[.62,.85,.22],accent:[.95,.5,.25],cadence:1.4},hound:{kind:`hound`,name:`Гончая`,hint:`Бежит на четырёх лапах вдвое быстрее прочих. Замедление — обязательно.`,hp:70,speed:2.5,armour:.08,slowResist:0,bounty:14,leak:1,gait:`walk`,plan:`hound`,scale:.6,color:[.55,.3,.26],accent:[.95,.66,.3],cadence:1.05},slime:{kind:`slime`,name:`Слизень`,hint:`Прыгает. В воздухе его не достать замедлением.`,hp:120,speed:1.1,armour:0,slowResist:.5,bounty:16,leak:1,gait:`hop`,plan:`slime`,scale:.68,color:[.22,.78,.95],accent:[.9,1,1],cadence:1},grub:{kind:`grub`,name:`Личинка`,hint:`Ползёт медленно, но панцирь съедает половину урона.`,hp:165,speed:.82,armour:.5,slowResist:.25,bounty:20,leak:2,gait:`crawl`,plan:`grub`,scale:.66,color:[.78,.6,.35],accent:[.42,.3,.22],cadence:1.8},wisp:{kind:`wisp`,name:`Огонёк`,hint:`Летит над дорогой. Замедление на него почти не действует.`,hp:95,speed:1.9,armour:.1,slowResist:.8,bounty:22,leak:1,gait:`fly`,plan:`wisp`,scale:.54,color:[.95,.85,.45],accent:[1,.55,.8],cadence:4.2},brute:{kind:`brute`,name:`Громила`,hint:`Тяжёлый шаг, много здоровья. Забирает сразу три жизни.`,hp:420,speed:.95,armour:.25,slowResist:.2,bounty:38,leak:3,gait:`stomp`,plan:`brute`,scale:.95,color:[.62,.32,.4],accent:[1,.78,.35],cadence:1.35},golem:{kind:`golem`,name:`Голем`,hint:`Каменный. Без пробития брони почти неуязвим.`,hp:760,speed:.72,armour:.62,slowResist:.45,bounty:58,leak:4,gait:`stomp`,plan:`golem`,scale:1.05,color:[.46,.48,.55],accent:[.5,.85,1],cadence:1.4},warden:{kind:`warden`,name:`Смотритель`,hint:`Босс. Броня, здоровье и шесть жизней ядра за один прорыв.`,hp:2600,speed:.66,armour:.45,slowResist:.55,bounty:180,leak:6,gait:`stomp`,plan:`warden`,scale:1.45,color:[.3,.24,.42],accent:[1,.42,.75],cadence:1.35}},u=[`runt`,`hound`,`slime`,`grub`,`wisp`,`brute`,`golem`,`warden`];function d(e){return e.gait===`fly`?.75:0}function f(e,t,n){return e*(1-Math.max(0,Math.min(t,1))*(1-Math.max(0,Math.min(n,1))))}function p(e,t){let n=Math.max(0,Math.min(t,1));return e+(1-e)*n}function m(e){return{s:e>>>0||2654435769}}function h(e){e.s=e.s+1831565813>>>0;let t=e.s;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function g(e,t,n){return n<=t?t:t+Math.floor(h(e)*(n-t+1))}function _(e,t,n){return t+h(e)*(n-t)}var v=[`ruby`,`sapphire`,`topaz`,`emerald`,`amethyst`,`onyx`],y={ruby:{kind:`ruby`,name:`Рубин`,glyph:`◆`,element:`Огонь`,trait:`Урон и поджог`,color:[1,.24,.22],weight:22},sapphire:{kind:`sapphire`,name:`Сапфир`,glyph:`❖`,element:`Лёд`,trait:`Замедление`,color:[.28,.58,1],weight:21},topaz:{kind:`topaz`,name:`Топаз`,glyph:`⬢`,element:`Молния`,trait:`Скорострельность и цепь`,color:[1,.82,.25],weight:19},emerald:{kind:`emerald`,name:`Изумруд`,glyph:`⬟`,element:`Природа`,trait:`Яд и дальность`,color:[.26,.92,.45],weight:17},amethyst:{kind:`amethyst`,name:`Аметист`,glyph:`✦`,element:`Тайна`,trait:`Пробитие брони и сплэш`,color:[.72,.42,1],weight:13},onyx:{kind:`onyx`,name:`Оникс`,glyph:`⬣`,element:`Тьма`,trait:`Критический урон`,color:[.52,.34,.68],weight:8}},b=[100,30,8,2,.5],x=.55;function S(e){return e>=5?1/0:Math.round(120*1.85**e)}function ee(e){let t=1+x*Math.max(0,Math.min(e,5));return b.map((e,n)=>e*t**+n)}function te(e){let t=ee(e),n=t.reduce((e,t)=>e+t,0);return t.map(e=>e/n)}function ne(e,t){let n=0;for(let e of t)n+=Math.max(0,e);if(n<=0)return 0;let r=h(e)*n;for(let e=0;e<t.length;e++)if(r-=Math.max(0,t[e]),r<=0)return e;return t.length-1}function re(e,t,n){return{id:n,kind:v[ne(e,v.map(e=>y[e].weight))],level:ne(e,ee(t))+1}}function ie(e,t,n=4){let r=[];for(let i=0;i<n;i++){let n=v[g(e,0,3)];r.push({id:t+i,kind:n,level:1})}return r}function ae(e){return Math.round(8*1.9**(e.level-1))}function oe(e){return`shard-${e}`}function se(e){return e.startsWith(`shard-`)}var C=e=>({splash:0,slowFactor:1,slowFor:0,dotDps:0,dotFor:0,chains:0,pierce:0,critChance:0,critMultiplier:1,...e}),ce=[{id:`spark`,name:`Искра`,blurb:`Простая огненная башня. Бьёт по одной цели, поджигает.`,tier:1,ingredients:[{kind:`ruby`,level:1},{kind:`ruby`,level:1},{kind:`ruby`,level:1}],stats:C({damage:55,range:3.2,fireRate:1.1,dotDps:10,dotFor:2,shot:`bolt`,color:[1,.4,.16]})},{id:`frostbud`,name:`Изморозь`,blurb:`Бьёт слабо, зато держит врага на месте.`,tier:1,ingredients:[{kind:`sapphire`,level:1},{kind:`sapphire`,level:1},{kind:`sapphire`,level:1}],stats:C({damage:25,range:3,fireRate:1,slowFactor:.55,slowFor:1.4,shot:`bolt`,color:[.42,.78,1]})},{id:`coil`,name:`Катушка`,blurb:`Частые слабые разряды. Хороша против толпы мелочи.`,tier:1,ingredients:[{kind:`topaz`,level:1},{kind:`topaz`,level:1},{kind:`topaz`,level:1}],stats:C({damage:22,range:2.8,fireRate:3,shot:`arc`,color:[1,.9,.35]})},{id:`thorn`,name:`Терновник`,blurb:`Почти не бьёт, но отравляет надолго и достаёт далеко.`,tier:1,ingredients:[{kind:`emerald`,level:1},{kind:`emerald`,level:1},{kind:`emerald`,level:1}],stats:C({damage:15,range:3.8,fireRate:1,dotDps:22.5,dotFor:3,shot:`lob`,color:[.4,.95,.4]})},{id:`sigil`,name:`Знак`,blurb:`Парящий знак. Бьёт редко, зато сквозь любую броню.`,tier:1,ingredients:[{kind:`amethyst`,level:1},{kind:`amethyst`,level:1},{kind:`amethyst`,level:1}],stats:C({damage:45,range:3.4,fireRate:.8,pierce:.45,shot:`beam`,color:[.78,.55,1]})},{id:`cairn`,name:`Гурий`,blurb:`Чёрная пирамидка. Бьёт нечасто, но иногда — очень больно.`,tier:1,ingredients:[{kind:`onyx`,level:1},{kind:`onyx`,level:1},{kind:`onyx`,level:1}],stats:C({damage:60,range:3.2,fireRate:.7,critChance:.3,critMultiplier:2.4,shot:`bolt`,color:[.66,.6,.78]})},{id:`emberglass`,name:`Жар-стекло`,blurb:`Огонь, разогнанный молнией: быстрее «Искры» и злее.`,tier:1,ingredients:[{kind:`ruby`,level:1},{kind:`topaz`,level:1},{kind:`ruby`,level:1}],stats:C({damage:40,range:3.2,fireRate:1.9,dotDps:15,dotFor:2,shot:`bolt`,color:[1,.62,.2]})},{id:`brine`,name:`Стужа`,blurb:`Морозный яд: тормозит и травит разом.`,tier:1,ingredients:[{kind:`sapphire`,level:1},{kind:`emerald`,level:1},{kind:`sapphire`,level:1}],stats:C({damage:20,range:3.6,fireRate:1.2,slowFactor:.7,slowFor:1.6,dotDps:17.5,dotFor:2.5,shot:`lob`,color:[.4,.95,.85]})},{id:`veil`,name:`Пелена`,blurb:`Тёмная завеса. Замедляет и снимает броню разом.`,tier:1,ingredients:[{kind:`amethyst`,level:1},{kind:`amethyst`,level:1},{kind:`onyx`,level:1}],stats:C({damage:30,range:3.6,fireRate:1,slowFactor:.66,slowFor:1.5,pierce:.35,shot:`beam`,color:[.62,.42,.9]})},{id:`bramble`,name:`Ежевика`,blurb:`Горящие колючки. Бьёт по площади и поджигает.`,tier:1,ingredients:[{kind:`emerald`,level:1},{kind:`emerald`,level:1},{kind:`ruby`,level:1}],stats:C({damage:28,range:3.4,fireRate:1.2,splash:.8,dotDps:20,dotFor:2.5,shot:`lob`,color:[.85,.75,.25]})},{id:`forge`,name:`Горнило`,blurb:`Тяжёлый снаряд, взрывается и оставляет пожар.`,tier:2,ingredients:[{kind:`ruby`,level:3},{kind:`ruby`,level:2},{kind:`ruby`,level:2}],stats:C({damage:120,range:3.4,fireRate:.9,splash:1.1,dotDps:30,dotFor:3,shot:`lob`,color:[1,.35,.1]})},{id:`glacier`,name:`Глетчер`,blurb:`Волна холода: бьёт по площади и почти останавливает.`,tier:2,ingredients:[{kind:`sapphire`,level:3},{kind:`sapphire`,level:2},{kind:`sapphire`,level:2}],stats:C({damage:65,range:3.4,fireRate:1,splash:.9,slowFactor:.4,slowFor:2.2,shot:`beam`,color:[.5,.85,1]})},{id:`tesla`,name:`Тесла`,blurb:`Разряд перескакивает на соседей.`,tier:2,ingredients:[{kind:`topaz`,level:3},{kind:`topaz`,level:2},{kind:`topaz`,level:2}],stats:C({damage:50,range:3.6,fireRate:2.2,chains:2,shot:`arc`,color:[1,.95,.5]})},{id:`bloom`,name:`Цветение`,blurb:`Облако спор: медленно, но выкашивает всю группу.`,tier:2,ingredients:[{kind:`emerald`,level:3},{kind:`emerald`,level:2},{kind:`emerald`,level:2}],stats:C({damage:30,range:4.4,fireRate:1.1,splash:1.3,dotDps:65,dotFor:4,shot:`lob`,color:[.45,1,.5]})},{id:`prism`,name:`Призма`,blurb:`Луч, которому броня почти не мешает.`,tier:2,ingredients:[{kind:`amethyst`,level:2},{kind:`ruby`,level:2},{kind:`sapphire`,level:2}],stats:C({damage:85,range:4,fireRate:1.4,pierce:.6,shot:`beam`,color:[.95,.75,1]})},{id:`eclipse`,name:`Затмение`,blurb:`Редкий тяжёлый выстрел с шансом на критический удар.`,tier:2,ingredients:[{kind:`onyx`,level:2},{kind:`amethyst`,level:2},{kind:`amethyst`,level:2}],stats:C({damage:175,range:5.2,fireRate:.55,critChance:.3,critMultiplier:2.5,shot:`beam`,color:[.72,.5,1]})},{id:`beacon`,name:`Маяк`,blurb:`Луч вдоль дороги: бьёт далеко и насквозь, но разворачивается медленно.`,tier:2,ingredients:[{kind:`topaz`,level:2},{kind:`emerald`,level:2},{kind:`onyx`,level:2}],stats:C({damage:95,range:5,fireRate:.9,pierce:.5,critChance:.2,critMultiplier:2.2,shot:`beam`,color:[.95,.9,.55]})},{id:`sunspire`,name:`Солнечный шпиль`,blurb:`Столб огня по площади. Дорого и очень больно.`,tier:3,ingredients:[{kind:`ruby`,level:4},{kind:`topaz`,level:3},{kind:`amethyst`,level:3}],stats:C({damage:225,range:4.2,fireRate:1,splash:1.6,dotDps:75,dotFor:3,pierce:.3,shot:`lob`,color:[1,.55,.12]})},{id:`permafrost`,name:`Вечная мерзлота`,blurb:`Замораживает целые волны почти насмерть.`,tier:3,ingredients:[{kind:`sapphire`,level:4},{kind:`emerald`,level:3},{kind:`amethyst`,level:3}],stats:C({damage:112,range:4.4,fireRate:1.1,splash:1.5,slowFactor:.28,slowFor:3,dotDps:35,dotFor:3,shot:`beam`,color:[.6,.92,1]})},{id:`stormcrown`,name:`Венец бури`,blurb:`Молния прыгает по половине волны за раз.`,tier:3,ingredients:[{kind:`topaz`,level:4},{kind:`onyx`,level:3},{kind:`amethyst`,level:3}],stats:C({damage:115,range:4.6,fireRate:2.4,chains:4,pierce:.35,shot:`arc`,color:[1,.98,.65]})},{id:`voidwell`,name:`Провал`,blurb:`Один выстрел раз в две секунды — и от босса остаётся немного.`,tier:3,ingredients:[{kind:`onyx`,level:4},{kind:`onyx`,level:3},{kind:`amethyst`,level:4}],stats:C({damage:650,range:6,fireRate:.45,pierce:.8,critChance:.45,critMultiplier:3,shot:`beam`,color:[.6,.35,.95]})},{id:`heartwood`,name:`Сердцевина`,blurb:`Живое дерево. Ядовитое облако держится долго и накрывает целый поворот.`,tier:3,ingredients:[{kind:`emerald`,level:4},{kind:`ruby`,level:3},{kind:`sapphire`,level:3}],stats:C({damage:90,range:4.8,fireRate:1.3,splash:1.9,dotDps:120,dotFor:5,slowFactor:.6,slowFor:2,shot:`lob`,color:[.55,1,.45]})}],le={ruby:C({damage:32,range:2.8,fireRate:.9,dotDps:5,dotFor:1.6,shot:`bolt`,color:[1,.45,.2]}),sapphire:C({damage:15,range:2.7,fireRate:.9,slowFactor:.74,slowFor:1.1,shot:`bolt`,color:[.45,.8,1]}),topaz:C({damage:18,range:2.6,fireRate:1.7,shot:`arc`,color:[1,.86,.3]}),emerald:C({damage:12,range:3.4,fireRate:.8,dotDps:12.5,dotFor:3,shot:`bolt`,color:[.4,.95,.5]}),amethyst:C({damage:30,range:3,fireRate:.8,splash:.55,pierce:.3,shot:`lob`,color:[.72,.5,1]}),onyx:C({damage:38,range:3,fireRate:.7,critChance:.25,critMultiplier:2,shot:`bolt`,color:[.62,.6,.72]})},ue=Object.fromEntries(v.map(e=>[e,{id:oe(e),name:`Осколок: ${y[e].name.toLowerCase()}`,blurb:`Камень, выставленный как есть. ${y[e].trait}, но вполсилы.`,tier:0,ingredients:[{kind:e,level:1}],stats:le[e]}])),de=v.map(e=>ue[e]),fe=Object.fromEntries([...ce,...de].map(e=>[e.id,e]));function pe(e){return fe[e]}function me(e){if(e<=1)return[[0].slice(0,e)];let t=[];for(let n=0;n<e;n++)for(let r of me(e-1)){let e=r.map(e=>e>=n?e+1:e);t.push([n,...e])}return t}var he=[me(0),me(1),me(2),me(3)];function ge(e,t){if(e.ingredients.length!==t.length)return null;let n=null;for(let r of he[t.length]){let i=0,a=!0;for(let n=0;n<e.ingredients.length;n++){let o=e.ingredients[n],s=t[r[n]];if(s.kind!==o.kind||s.level<o.level){a=!1;break}i+=s.level-o.level}a&&(n===null||i<n)&&(n=i)}return n}function _e(e){if(e.length===1){let t=e[0];return{recipe:ue[t.kind],surplus:t.level-1}}if(e.length<3||e.length>3)return null;let t=null,n=-1;for(let r of ce){let i=ge(r,e);if(i===null)continue;let a=r.ingredients.reduce((e,t)=>e+t.level,0);a>n&&(n=a,t={recipe:r,surplus:i})}return t}function ve(e){let t=new Map,n=e.length;for(let r=0;r<n;r++)for(let i=r+1;i<n;i++)for(let a=i+1;a<n;a++){let n=[e[r],e[i],e[a]],o=_e(n);if(!o)continue;let s=t.get(o.recipe.id);s&&s.surplus<=o.surplus||t.set(o.recipe.id,{...o,gemIds:n.map(e=>e.id)})}let r=e=>e.recipe.ingredients.reduce((e,t)=>e+t.level,0);return[...t.values()].sort((e,t)=>r(t)-r(e)||e.surplus-t.surplus)}var ye=[0,1,1.8,3],be=[0,1,1.1,1.2],xe=.14;function Se(e,t){return ye[Math.max(1,Math.min(e,3))]*(1+xe*t)}function Ce(e,t){return e.stats.range*be[Math.max(1,Math.min(t,3))]}var w=o();function T({variant:e=`ghost`,size:t=`md`,block:n=!1,icon:r,meta:i,children:a,className:o=``,type:s=`button`,...c}){let l=[`btn`,`btn--${e}`,`btn--${t}`,n?`btn--block`:``,o].filter(Boolean).join(` `);return(0,w.jsxs)(`button`,{type:s,className:l,...c,children:[r?(0,w.jsx)(`span`,{className:`btn__icon`,"aria-hidden":`true`,children:r}):null,(0,w.jsx)(`span`,{className:`btn__label`,children:a}),i?(0,w.jsx)(`span`,{className:`btn__meta`,children:i}):null]})}function we({title:e,hint:t,action:n,children:r,className:i=``,fullscreen:a=!1}){return(0,w.jsxs)(`section`,{className:`panel surface ${a?`panel--full`:``} ${i}`.trim(),children:[(e||n)&&(0,w.jsxs)(`header`,{className:`panel__head`,children:[(0,w.jsxs)(`div`,{className:`panel__heading`,children:[e?(0,w.jsx)(`h2`,{className:`panel__title`,children:e}):null,t?(0,w.jsx)(`p`,{className:`panel__hint`,children:t}):null]}),n?(0,w.jsx)(`div`,{className:`panel__action`,children:n}):null]}),(0,w.jsx)(`div`,{className:`panel__body scroll`,children:r})]})}var Te=()=>{let e=new Map;return{get:t=>e.get(t)??null,set:(t,n)=>void e.set(t,n),remove:t=>void e.delete(t)}};function Ee(){try{if(typeof localStorage>`u`)return Te();let e=`__prism_probe__`;localStorage.setItem(e,`1`),localStorage.removeItem(e)}catch{return Te()}return{get:e=>{try{return localStorage.getItem(e)}catch{return null}},set:(e,t)=>{try{localStorage.setItem(e,t)}catch{}},remove:e=>{try{localStorage.removeItem(e)}catch{}}}}function De(e,t,n){let r=e.get(t);if(r===null)return n;try{return JSON.parse(r)??n}catch{return n}}function Oe(e,t,n){try{e.set(t,JSON.stringify(n))}catch{}}var ke=`prism.history.v1`,Ae=50,je=4e3;function Me(e={}){let t=e.VITE_API_URL;return t?t.replace(/\/+$/,``):`/api`}var Ne=class{baseUrl;store;fetchImpl;now;timeoutMs;reachable=null;constructor(e={}){this.baseUrl=e.baseUrl??`/api`,this.store=e.store??Ee(),this.fetchImpl=e.fetchImpl??(typeof fetch==`function`?fetch.bind(globalThis):void 0),this.now=e.now??(()=>Date.now()),this.timeoutMs=e.timeoutMs??je}get online(){return this.reachable}async request(e,t){if(!this.fetchImpl)return null;let n=typeof AbortController==`function`?new AbortController:null,r=n?setTimeout(()=>n.abort(),this.timeoutMs):null;try{let r=await this.fetchImpl(`${this.baseUrl}${e}`,{...t,signal:n?.signal});return r.ok?(this.reachable=!0,await r.json()):(this.reachable=!1,null)}catch{return this.reachable=!1,null}finally{r!==null&&clearTimeout(r)}}localHistory(){let e=De(this.store,ke,[]);return Array.isArray(e)?e:[]}remember(e){let t={...e,id:this.now(),createdAt:this.now(),local:!0},n=[t,...this.localHistory()].slice(0,Ae);return Oe(this.store,ke,n),t}async submit(e,t){return this.remember(e),t?await this.request(`/scores`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)})?`published`:`local-only`:`declined`}async top(e,t=20){let n=new URLSearchParams;e&&n.set(`map`,e),n.set(`limit`,String(t));let r=await this.request(`/leaderboard?${n}`);return r&&Array.isArray(r.entries)?r.entries:this.localHistory().filter(t=>!e||t.mapId===e).sort((e,t)=>t.score-e.score||t.wave-e.wave).slice(0,t)}async ping(){return(await this.request(`/health`))?.ok===!0}clearHistory(){this.store.remove(ke)}},E=1/60,Pe=.6,Fe=.4,Ie=6.5,Le=3.2,Re=1.5,ze=.22,Be=.28,Ve=2.6,D=(e,t)=>({x:e,y:t}),He=(e,t)=>Math.hypot(e.x-t.x,e.y-t.y),Ue=(e,t)=>{let n=e.x-t.x,r=e.y-t.y;return n*n+r*r};function We(e,t,n){return e+(t-e)*n}function Ge(e,t,n){return{x:We(e.x,t.x,n),y:We(e.y,t.y,n)}}function Ke(e,t,n){return e<t?t:e>n?n:e}function qe(e){return Ke(e,0,1)}function Je(e,t,n){let r=n.x-t.x,i=n.y-t.y,a=r*r+i*i;if(a<1e-12)return He(e,t);let o=((e.x-t.x)*r+(e.y-t.y)*i)/a;return o=qe(o),Math.hypot(e.x-(t.x+r*o),e.y-(t.y+i*o))}var Ye=[{id:`ridge`,name:`Тропа`,width:11,height:15,clearance:1,waves:20,blurb:`Три поворота и широкие поляны. Место, чтобы разобраться с рецептами.`,waypoints:[D(5.5,-1.5),D(5.5,2.5),D(2,2.5),D(2,6.5),D(9,6.5),D(9,10.5),D(5.5,10.5),D(5.5,16.5)],blocked:[[7,1],[8,2],[0,4],[1,9],[8,13],[3,13]]},{id:`spiral`,name:`Спираль`,width:12,height:16,clearance:.95,waves:24,blurb:`Дорога сворачивается внутрь: одна башня в середине достаёт до трёх витков.`,waypoints:[D(6,-1.5),D(6,2),D(10,2),D(10,13.5),D(2,13.5),D(2,5.5),D(7.5,5.5),D(7.5,10),D(5,10)],blocked:[[0,0],[11,0],[0,15],[11,15],[4,3],[8,8]]},{id:`rift`,name:`Разлом`,width:11,height:18,clearance:1,waves:28,blurb:`Длинная змейка с узкими перешейками. Каждая клетка на счету.`,waypoints:[D(2,-1.5),D(2,3),D(9,3),D(9,7),D(2,7),D(2,11),D(9,11),D(9,15),D(2,15),D(2,19.5)],blocked:[[5,1],[6,5],[4,9],[6,13],[9,17],[0,17]]}];function Xe(e){return Ye.find(t=>t.id===e)??Ye[0]}function Ze(e){let t=e.waypoints,n=[0];for(let e=1;e<t.length;e++)n.push(n[e-1]+He(t[e-1],t[e]));return{points:t,cumulative:n,length:n[n.length-1]}}function Qe(e,t){let{points:n,cumulative:r,length:i}=e;if(t<=0)return{...n[0]};if(t>=i)return{...n[n.length-1]};let a=1;for(;a<r.length-1&&r[a]<t;)a++;let o=r[a]-r[a-1],s=o>1e-9?(t-r[a-1])/o:0;return Ge(n[a-1],n[a],s)}function $e(e,t){let{points:n,cumulative:r}=e,i=1;for(;i<r.length-1&&r[i]<t;)i++;let a=n[i-1],o=n[i],s=He(a,o)||1;return D((o.x-a.x)/s,(o.y-a.y)/s)}function et(e,t){let n=1/0;for(let r=1;r<e.points.length;r++){let i=Je(t,e.points[r-1],e.points[r]);i<n&&(n=i)}return n}var O=(e,t)=>D(e+.5,t+.5);function tt(e,t,n){return t>=0&&n>=0&&t<e.width&&n<e.height}function nt(e,t,n){return e.blocked.some(([e,r])=>e===t&&r===n)}function rt(e,t,n,r,i){return tt(e,n,r)?nt(e,n,r)?`blocked`:et(t,O(n,r))<e.clearance?`on-path`:i(n,r)?`occupied`:null:`out-of-bounds`}function it(e,t){let n=new Uint8Array(e.width*e.height);for(let r=0;r<e.height;r++)for(let i=0;i<e.width;i++){let a=!nt(e,i,r)&&et(t,O(i,r))>=e.clearance;n[r*e.width+i]=+!!a}return n}var at=[{kind:`runt`,wave:1,weight:12},{kind:`hound`,wave:3,weight:9},{kind:`slime`,wave:5,weight:8},{kind:`grub`,wave:7,weight:7},{kind:`brute`,wave:8,weight:4},{kind:`wisp`,wave:9,weight:6},{kind:`golem`,wave:12,weight:3}];function ot(e){let t=Math.max(0,e-1);return 1+.15*t+.0075*t*t}function st(e){return 1+Math.min(.35,.012*Math.max(0,e-1))}function ct(e){return e%10==0}function lt(e){return Math.min(30,5+Math.floor(e*1.1))}function ut(e,t,n){let r=0;for(let e of n)r+=e;let i=e*r;for(let e=0;e<t.length;e++)if(i-=n[e],i<=0)return t[e];return t[t.length-1]}function dt(e,t,n){let r=m((t^e*2654435761)>>>0),i=at.filter(t=>e>=t.wave),a=i.map(e=>e.kind),o=i.map(t=>t.kind===`runt`?Math.max(1,t.weight-Math.floor(e/2)):t.weight),s=[],c=ot(e),l=st(e),u=Math.max(16,Math.round(42-e*.7)),d=n,f=lt(e);for(let e=0;e<f;e++){let e=ut(_(r,0,1),a,o);s.push({atTick:Math.round(d),kind:e,hpMul:c,speedMul:l}),d+=u*_(r,.78,1.25),g(r,0,5)===0&&(d+=u*1.6)}return ct(e)&&s.push({atTick:Math.round(d+90),kind:`warden`,hpMul:c*(.7+e/10*.06),speedMul:l}),s.sort((e,t)=>e.atTick-t.atTick),s}function ft(e,t){let n=new Map;for(let r of dt(e,t,0))n.set(r.kind,(n.get(r.kind)??0)+1);return[...n.entries()].map(([e,t])=>({kind:e,count:t})).sort((e,t)=>t.count-e.count||e.kind.localeCompare(t.kind))}function pt(e){let t=Xe(e);return{map:t,path:Ze(t)}}function mt(e,t,n={}){let r=Xe(e),i=m(t),a=n.emptyTray?[]:ie(i,1,5);return{tick:0,mapId:r.id,seed:t>>>0,rng:i,status:`building`,gold:n.gold??140,lives:n.lives??20,wave:0,totalWaves:n.totalWaves??r.waves,refinement:0,placedOnWave:-1,towers:[],enemies:[],projectiles:[],beams:[],tray:a,queue:[],nextTowerId:1,nextEnemyId:1,nextGemId:a.length+1,nextShotId:1,score:0,kills:0,leaked:0,gemsForged:0,discovered:[],events:[]}}function ht(e){for(;e.tray.length<5;){let t=re(e.rng,e.refinement,e.nextGemId++);e.tray.push(t),e.gemsForged+=1,e.events.push({type:`gem`,gem:t})}}function gt(e){return{id:0,kind:e.kind.slice(6),level:e.surplus+1}}function _t(e){return e.status===`won`||e.status===`lost`}function vt(e,t,n){return e.towers.find(e=>e.cell.x===t&&e.cell.y===n)}function yt(e,t){return e.tray.find(e=>e.id===t)}function bt(e){let t=pe(e.kind).ingredients.length*e.level;return Math.floor(t*34*Pe)}function xt(e,t,n){if(_t(t))return`wrong-state`;switch(n.type){case`discard`:{let e=t.tray.findIndex(e=>e.id===n.gemId);return e<0?`no-gem`:t.gold<28?`no-gold`:(t.gold-=28,t.tray.splice(e,1),ht(t),`ok`)}case`refine`:{if(t.refinement>=5)return`maxed`;let e=S(t.refinement);return t.gold<e?`no-gold`:(t.gold-=e,t.refinement+=1,t.events.push({type:`refine`,level:t.refinement}),`ok`)}case`sellGem`:{let e=t.tray.findIndex(e=>e.id===n.gemId);return e<0?`no-gem`:(t.gold+=ae(t.tray[e]),t.tray.splice(e,1),ht(t),`ok`)}case`craft`:return St(e,t,n);case`sellTower`:{let e=t.towers.findIndex(e=>e.id===n.towerId);if(e<0)return`no-tower`;let r=t.towers[e];return t.gold+=bt(r),t.towers.splice(e,1),t.events.push({type:`sell`,x:r.cell.x+.5,y:r.cell.y+.5}),`ok`}case`startWave`:{if(t.wave>=t.totalWaves)return`wrong-state`;let e=t.status===`wave`;return t.wave+=1,t.queue.push(...dt(t.wave,t.seed,t.tick+36)),t.queue.sort((e,t)=>e.atTick-t.atTick),t.status=`wave`,e&&(t.gold+=Math.round((30+8*t.wave)*Fe)),t.events.push({type:`waveStart`,wave:t.wave}),`ok`}default:return`wrong-state`}}function St(e,t,n){let r=[];for(let e of n.gemIds){let n=yt(t,e);if(!n||r.some(t=>t.id===e))return`no-gem`;r.push(n)}let i=Math.floor(n.cell.x),a=Math.floor(n.cell.y),o;if(n.shardId!==void 0){if(o=t.towers.find(e=>e.id===n.shardId),!o||!se(o.kind))return`no-tower`;if(o.cell.x!==i||o.cell.y!==a)return`invalid-cell`;r.unshift(gt(o))}let s=_e(r);if(!s)return`no-recipe`;if(t.placedOnWave>=t.wave)return`no-turn`;if(o){let e=t.towers.indexOf(o);t.towers.splice(e,1),Ct(t,n.gemIds),t.placedOnWave=t.wave;let r=!t.discovered.includes(s.recipe.id);return r&&t.discovered.push(s.recipe.id),t.towers.push({id:t.nextTowerId++,kind:s.recipe.id,cell:D(i,a),level:1,surplus:s.surplus,owner:n.owner,cooldown:0,facing:o.facing,targetId:0,builtAtTick:t.tick}),t.events.push({type:`craft`,x:i+.5,y:a+.5,kind:s.recipe.id,level:1,firstTime:r}),`ok`}let c=vt(t,i,a);if(c)return c.kind===s.recipe.id?c.level>=3?`max-level`:(c.level+=1,c.surplus+=s.surplus,Ct(t,n.gemIds),t.placedOnWave=t.wave,t.events.push({type:`upgrade`,x:i+.5,y:a+.5,kind:c.kind,level:c.level}),`ok`):`wrong-tower`;let l=rt(e.map,e.path,i,a,(e,n)=>!!vt(t,e,n));if(l)return l===`occupied`?`occupied`:`invalid-cell`;Ct(t,n.gemIds),t.placedOnWave=t.wave;let u=!t.discovered.includes(s.recipe.id);return u&&t.discovered.push(s.recipe.id),t.towers.push({id:t.nextTowerId++,kind:s.recipe.id,cell:D(i,a),level:1,surplus:s.surplus,owner:n.owner,cooldown:0,facing:0,targetId:0,builtAtTick:t.tick}),t.events.push({type:`craft`,x:i+.5,y:a+.5,kind:s.recipe.id,level:1,firstTime:u}),`ok`}function Ct(e,t){e.tray=e.tray.filter(e=>!t.includes(e.id)),ht(e)}function wt(e,t,n,r){let i=l[t],a=i.hp*n;e.enemies.push({id:e.nextEnemyId++,kind:t,dist:0,prevDist:0,hp:a,maxHp:a,speed:i.speed*r,armour:i.armour,slowResist:i.slowResist,bounty:i.bounty,leak:i.leak,slowFactor:1,slowFor:0,dotDps:0,dotFor:0,flash:0,phase:0,wobble:_(e.rng,0,Math.PI*2)})}function Tt(e,t,n=[]){if(t.events.length=0,_t(t))return;for(let r of n)xt(e,t,r);for(;t.queue.length>0&&t.queue[0].atTick<=t.tick;){let e=t.queue.shift();wt(t,e.kind,e.hpMul,e.speedMul)}let r=Et(e,t);if(Dt(t),kt(e,t,r),It(t,r),Lt(t),Rt(e,t,r),t.lives<=0){t.lives=0,t.status=`lost`,t.events.push({type:`lost`}),t.tick+=1;return}if(t.status===`wave`&&t.queue.length===0&&t.enemies.length===0){let e=30+8*t.wave;t.gold+=e,t.score+=e,t.events.push({type:`waveClear`,wave:t.wave,bonus:e}),t.wave>=t.totalWaves?(t.status=`won`,t.score+=t.lives*60,t.events.push({type:`won`})):t.status=`building`}t.tick+=1}function Et(e,t){let n=Array(t.enemies.length);for(let r=0;r<t.enemies.length;r++){let i=t.enemies[r];i.prevDist=i.dist,i.slowFor>0&&(i.slowFor=Math.max(0,i.slowFor-E),i.slowFor===0&&(i.slowFactor=1));let a=i.speed*i.slowFactor*E;i.dist+=a,i.phase+=a*l[i.kind].cadence,i.flash=Math.max(0,i.flash-E*4),n[r]=Qe(e.path,i.dist)}return n}function Dt(e){for(let t of e.enemies)t.dotFor<=0||(t.dotFor=Math.max(0,t.dotFor-E),t.hp-=t.dotDps*E,t.dotFor===0&&(t.dotDps=0))}function Ot(e,t,n,r){let i=r*r,a=-1,o=-1;for(let r=0;r<e.enemies.length;r++){let s=e.enemies[r];s.hp<=0||Ue(t[r],n)>i||s.dist>o&&(o=s.dist,a=r)}return a}function kt(e,t,n){for(let r of t.towers){r.cooldown=Math.max(0,r.cooldown-E);let i=pe(r.kind),a=O(r.cell.x,r.cell.y),o=Ot(t,n,a,Ce(i,r.level));if(o<0){r.targetId=0;continue}r.targetId=t.enemies[o].id;let s=n[o];r.facing=Math.atan2(s.x-a.x,s.y-a.y),!(r.cooldown>0)&&(r.cooldown=1/Math.max(.05,i.stats.fireRate),jt(e,t,r,i,a,o,n))}}function At(e,t,n){let r=Se(n.level,n.surplus),i=t.stats.damage*r;return t.stats.critChance>0&&h(e.rng)<t.stats.critChance&&(i*=t.stats.critMultiplier),i}function jt(e,t,n,r,i,a,o){let s=r.stats,c=At(t,r,n),l=be[Math.min(n.level,3)],u=s.splash*l,d=t.enemies[a],f=o[a];if(s.shot===`bolt`||s.shot===`lob`){if(t.projectiles.length>=220)return;t.projectiles.push({id:t.nextShotId++,kind:n.kind,style:s.shot,from:i,aim:{...f},targetId:d.id,t:0,speed:(s.shot===`lob`?Le:Ie)/Math.max(.6,He(i,f)),damage:c,splash:u,pierce:s.pierce,slowFactor:s.slowFactor,slowFor:s.slowFor,dotDps:s.dotDps,dotFor:s.dotFor,color:s.color,arc:s.shot===`lob`?Re:0});return}let p=[i,{...f}];Pt(t,a,c,s.pierce,s.slowFactor,s.slowFor,s.dotDps,s.dotFor),u>0&&Nt(t,o,f,u,c*.6,s.pierce,a),s.shot===`arc`&&s.chains>0&&Mt(t,o,a,s.chains,c,r,p),Ft(t,{id:t.nextShotId++,style:s.shot,points:p,color:s.color,life:s.shot===`arc`?Be:ze,maxLife:s.shot===`arc`?Be:ze,width:s.shot===`arc`?.07:.11}),t.events.push({type:`impact`,x:f.x,y:f.y,color:s.color,splash:u})}function Mt(e,t,n,r,i,a,o){let s=new Set([n]),c=n,l=i;for(let n=0;n<r;n++){l*=.72;let n=-1,r=Ve*Ve;for(let i=0;i<e.enemies.length;i++){if(s.has(i)||e.enemies[i].hp<=0)continue;let a=Ue(t[i],t[c]);a<r&&(r=a,n=i)}if(n<0)break;s.add(n),Pt(e,n,l,a.stats.pierce,a.stats.slowFactor,a.stats.slowFor,0,0),o.push({...t[n]}),c=n}}function Nt(e,t,n,r,i,a,o){let s=r*r;for(let r=0;r<e.enemies.length;r++)r===o||e.enemies[r].hp<=0||Ue(t[r],n)>s||Pt(e,r,i,a,1,0,0,0)}function Pt(e,t,n,r,i,a,o,s){let c=e.enemies[t];if(!(!c||c.hp<=0)){if(c.hp-=f(n,c.armour,r),c.flash=1,i<1&&a>0){let e=p(i,c.slowResist);(e<c.slowFactor||c.slowFor<=0)&&(c.slowFactor=e),c.slowFor=Math.max(c.slowFor,a)}o>0&&s>0&&(c.dotDps=Math.max(c.dotDps,o),c.dotFor=Math.max(c.dotFor,s))}}function Ft(e,t){e.beams.length>=120&&e.beams.shift(),e.beams.push(t)}function It(e,t){for(let n=e.projectiles.length-1;n>=0;n--){let r=e.projectiles[n],i=e.enemies.findIndex(e=>e.id===r.targetId&&e.hp>0);i>=0&&(r.aim={...t[i]}),r.t+=r.speed*E,!(r.t<1)&&(e.projectiles.splice(n,1),i>=0&&Pt(e,i,r.damage,r.pierce,r.slowFactor,r.slowFor,r.dotDps,r.dotFor),r.splash>0&&Nt(e,t,r.aim,r.splash,r.damage*.6,r.pierce,i),e.events.push({type:`impact`,x:r.aim.x,y:r.aim.y,color:r.color,splash:r.splash}))}}function Lt(e){for(let t=e.beams.length-1;t>=0;t--)e.beams[t].life-=E,e.beams[t].life<=0&&e.beams.splice(t,1)}function Rt(e,t,n){let r=e.path.length;for(let e=t.enemies.length-1;e>=0;e--){let i=t.enemies[e];if(i.hp<=0){t.gold+=i.bounty,t.score+=i.bounty,t.kills+=1,t.events.push({type:`kill`,x:n[e].x,y:n[e].y,bounty:i.bounty,color:l[i.kind].color}),t.enemies.splice(e,1);continue}i.dist>=r&&(t.lives-=i.leak,t.leaked+=1,t.events.push({type:`leak`,x:n[e].x,y:n[e].y,damage:i.leak}),t.enemies.splice(e,1))}}function zt(e,t,n){return Qe(e.path,t.prevDist+(t.dist-t.prevDist)*qe(n))}function Bt(e){return d(l[e.kind])}var Vt=class{inputDelay;owner;tick=0;remoteHorizon;solo=!1;dropped=0;pending=new Map;seq=0;constructor(e={}){this.inputDelay=Math.max(1,e.inputDelay??8),this.owner=e.owner??0,this.remoteHorizon=this.inputDelay}get localHorizon(){return this.tick+this.inputDelay}schedule(e){let t={t:`cmd`,tick:this.localHorizon,seq:this.seq++,owner:this.owner,cmd:e};return this.enqueue(t),t}receive(e){return e.tick<this.tick?(this.dropped+=1,!1):(this.enqueue(e),e.tick-this.inputDelay>this.remoteHorizon&&(this.remoteHorizon=e.tick-this.inputDelay),!0)}receiveHorizon(e){e>this.remoteHorizon&&(this.remoteHorizon=e)}enqueue(e){let t=this.pending.get(e.tick);t?t.push(e):this.pending.set(e.tick,[e])}canAdvance(){return this.solo||this.tick<this.remoteHorizon}get slack(){return this.solo?1/0:this.remoteHorizon-this.tick}commandsForTick(){let e=this.pending.get(this.tick);return e?(e.sort((e,t)=>e.owner-t.owner||e.seq-t.seq),e.map(e=>e.cmd)):[]}advance(){this.pending.delete(this.tick),this.tick+=1}reset(e){this.pending.clear(),this.tick=e,this.remoteHorizon=e+this.inputDelay}get queuedCount(){let e=0;for(let t of this.pending.values())e+=t.length;return e}},Ht={tick:0,gold:0,lives:0,wave:0,totalWaves:0,status:`building`,kills:0,leaked:0,score:0,enemies:0,towers:0,refinement:0,refineCost:0,queued:0,canPlace:!1,tray:[],discovered:[]},Ut=6,Wt=4,Gt=class e{ctx=null;state=null;lockstep=new Vt({inputDelay:1,owner:0});hud={...Ht};active=!1;mode=`solo`;mapId=`ridge`;seed=1;selectedGemIds=[];selectedShardId=null;selectedTowerId=null;hoverCell=null;hoverValid=!1;hoverReason=null;speed=1;paused=!1;stalled=!1;towerPeak=0;onEvent;onLocalCommand;onFinished;accumulator=0;finished=!1;constructor(){n(this,{ctx:!1,state:!1,lockstep:!1,onEvent:!1,onLocalCommand:!1,onFinished:!1})}start(e,t,n=`solo`,r=0){let i=Xe(e);this.mapId=i.id,this.seed=t>>>0,this.mode=n,this.ctx=pt(i.id),this.state=mt(i.id,this.seed),this.active=!0,this.lockstep=new Vt({inputDelay:n===`solo`?1:8,owner:r}),this.lockstep.solo=n===`solo`,this.accumulator=0,this.finished=!1,this.stalled=!1,this.paused=!1,this.speed=1,this.selectedGemIds=[],this.selectedTowerId=null,this.hoverCell=null,this.towerPeak=0,this.syncHud()}get running(){return this.active}get map(){return Xe(this.mapId)}get isOver(){return this.state?_t(this.state):!1}get discardCost(){return 28}get trayFull(){return this.hud.tray.length>=5}get canDiscard(){let e=this.selectedGemIds.length;if(e===0||this.isOver)return!1;let t=this.pendingRecipe;return t&&!se(t.recipe.id)?!1:this.hud.gold>=28*e}get canRefine(){return this.hud.refinement<5&&this.hud.gold>=this.hud.refineCost}get nextWavePreview(){return this.state?ft(Math.min(this.state.wave+1,this.state.totalWaves),this.seed):[]}get selectedGems(){let e=new Map(this.hud.tray.map(e=>[e.id,e]));return this.selectedGemIds.map(t=>e.get(t)).filter(e=>e!==void 0)}get selectedShard(){if(this.selectedShardId===null||!this.state)return null;let e=this.state.towers.find(e=>e.id===this.selectedShardId);return e&&se(e.kind)?e:null}get recipeGems(){let e=this.selectedShard;return e?[gt(e),...this.selectedGems]:this.selectedGems}get selectionRoom(){return 3-this.recipeGems.length}get pendingRecipe(){let e=this.recipeGems;return e.length===0||e.length===1&&this.selectedShard?null:_e(e)}get combinations(){return ve(this.hud.tray)}get readyGemIds(){let e=new Set;for(let t of this.combinations)for(let n of t.gemIds)e.add(n);return e}selectCombination(e=0){let t=this.combinations[e];t&&(this.selectedGemIds=[...t.gemIds],this.selectedTowerId=null,this.refreshHoverValidity())}get selectedTower(){if(!this.state||this.selectedTowerId===null)return null;let e=this.state.towers.find(e=>e.id===this.selectedTowerId);if(!e)return null;let t=pe(e.kind),n=Se(e.level,e.surplus);return{tower:e,recipe:t,level:e.level,maxLevel:3,range:Ce(t,e.level),damage:Math.round(t.stats.damage*n),fireRate:t.stats.fireRate,sellValue:bt(e),canUpgradeNow:e.level<3&&this.pendingRecipe?.recipe.id===e.kind}}toggleGem(e){this.selectedGemIds.indexOf(e)>=0?this.selectedGemIds=this.selectedGemIds.filter(t=>t!==e):this.selectionRoom>0?this.selectedGemIds=[...this.selectedGemIds,e]:this.selectedGemIds.length>0?this.selectedGemIds=[...this.selectedGemIds.slice(1),e]:(this.selectedShardId=null,this.selectedGemIds=[e]),this.selectedTowerId=null,this.refreshHoverValidity()}toggleShard(e){if(this.selectedShardId===e)this.selectedShardId=null;else{let t=this.state?.towers.find(t=>t.id===e);if(!t||!se(t.kind))return;for(this.selectedShardId=e;this.selectedGemIds.length>2;)this.selectedGemIds=this.selectedGemIds.slice(1)}this.selectedTowerId=null,this.refreshHoverValidity()}clearSelection(){this.selectedGemIds=[],this.selectedShardId=null,this.refreshHoverValidity()}discardSelected(){if(!this.canDiscard)return;let e=[...this.selectedGemIds];this.selectedGemIds=[],this.selectedShardId=null;for(let t of e)this.issue({type:`discard`,gemId:t,owner:this.lockstep.owner});this.refreshHoverValidity()}refine(){this.canRefine&&this.issue({type:`refine`,owner:this.lockstep.owner})}sellGem(e){this.selectedGemIds=this.selectedGemIds.filter(t=>t!==e),this.issue({type:`sellGem`,gemId:e,owner:this.lockstep.owner})}select(e){this.selectedTowerId=e}towerAtCell(e,t){return this.state?.towers.find(n=>n.cell.x===e&&n.cell.y===t)}setHoverWorld(e){if(!e||!this.ctx||!this.state){this.hoverCell=null,this.hoverValid=!1,this.hoverReason=null;return}let t=Math.floor(e.x),n=Math.floor(e.y);this.hoverCell&&this.hoverCell.x===t&&this.hoverCell.y===n||(this.hoverCell=D(t,n),this.refreshHoverValidity())}refreshHoverValidity(){let e=this.pendingRecipe;if(!this.hoverCell||!this.ctx||!this.state||!e){this.hoverValid=!1,this.hoverReason=e?null:`no-recipe`;return}if(!this.hud.canPlace){this.hoverValid=!1,this.hoverReason=`no-turn`;return}let{x:t,y:n}=this.hoverCell,r=this.towerAtCell(t,n);if(r&&r.id===this.selectedShardId){this.hoverValid=!0,this.hoverReason=null;return}if(this.selectedShardId!==null){this.hoverValid=!1,this.hoverReason=`wrong-cell`;return}if(r){if(r.kind!==e.recipe.id){this.hoverValid=!1,this.hoverReason=`wrong-tower`;return}if(r.level>=3){this.hoverValid=!1,this.hoverReason=`max-level`;return}this.hoverValid=!0,this.hoverReason=null;return}let i=rt(this.ctx.map,this.ctx.path,t,n,(e,t)=>!!this.towerAtCell(e,t));this.hoverValid=i===null,this.hoverReason=i}tapWorld(e){if(!this.state||!this.ctx)return;let t=Math.floor(e.x),n=Math.floor(e.y),r=this.towerAtCell(t,n);if(this.pendingRecipe&&(this.hoverCell=D(t,n),this.refreshHoverValidity(),this.hoverValid)){this.issue({type:`craft`,gemIds:[...this.selectedGemIds],shardId:this.selectedShardId??void 0,cell:D(t,n),owner:this.lockstep.owner}),this.selectedGemIds=[],this.selectedShardId=null,this.refreshHoverValidity();return}if(r&&se(r.kind)&&(this.selectedShardId===r.id||this.selectedGemIds.length>0)){this.toggleShard(r.id);return}this.select(r?r.id:null)}sellSelectedTower(){this.selectedTowerId!==null&&(this.issue({type:`sellTower`,towerId:this.selectedTowerId,owner:this.lockstep.owner}),this.selectedTowerId=null)}issue(e){if(!this.state||this.isOver)return;let t=this.lockstep.schedule(e);this.onLocalCommand?.(t)}startWave(){this.issue({type:`startWave`,owner:this.lockstep.owner})}setSpeed(e){this.speed=e}cycleSpeed(){this.speed=this.speed===1?2:this.speed===2?3:1}togglePause(){this.paused=!this.paused}advance(e){let t=this.state,n=this.ctx;if(!t||!n)return 0;if(this.paused||_t(t))return this.finish(t),this.accumulator/E;this.accumulator+=Math.min(e,.25)*this.speed;let i=0,a=!1,o=!1;for(;this.accumulator>=.016666666666666666&&i<Ut;){if(!this.lockstep.canAdvance()){o=!0;break}if(Tt(n,t,this.lockstep.commandsForTick()),t.events.length>0){a=!0;for(let e of t.events)this.onEvent?.(e)}this.lockstep.advance(),this.accumulator-=E,i+=1}return o!==this.stalled&&r(()=>void(this.stalled=o)),(a||t.tick%Wt===0)&&this.syncHud(),_t(t)&&this.finish(t),Math.min(1,this.accumulator/E)}finish(e){!this.finished&&_t(e)&&(this.finished=!0,this.syncHud(),this.onFinished?.(e))}static traySignature(e){return e.map(e=>`${e.id}:${e.kind}:${e.level}`).join(`|`)}syncHud(){let t=this.state;if(!t){r(()=>void(this.hud={...Ht}));return}let n={tick:t.tick,gold:Math.floor(t.gold),lives:t.lives,wave:t.wave,totalWaves:t.totalWaves,status:t.status,kills:t.kills,leaked:t.leaked,score:Math.floor(t.score),enemies:t.enemies.length,towers:t.towers.length,refinement:t.refinement,refineCost:S(t.refinement),queued:t.queue.length,canPlace:t.placedOnWave<t.wave,tray:t.tray.map(e=>({...e})),discovered:[...t.discovered]},i=this.hud,a=e.traySignature(i.tray)!==e.traySignature(n.tray)||i.discovered.length!==n.discovered.length;if(!a){for(let e of Object.keys(n))if(e!==`tray`&&e!==`discovered`&&i[e]!==n[e]){a=!0;break}}a&&r(()=>{this.hud=n,n.towers>this.towerPeak&&(this.towerPeak=n.towers);let e=new Set(n.tray.map(e=>e.id)),t=this.selectedGemIds.filter(t=>e.has(t));t.length!==this.selectedGemIds.length&&(this.selectedGemIds=t),this.refreshHoverValidity()})}adoptState(e){this.state=e,this.ctx=pt(e.mapId),this.lockstep.reset(e.tick),this.accumulator=0,this.selectedGemIds=[],this.syncHud()}stop(){this.state=null,this.ctx=null,this.active=!1,this.selectedGemIds=[],this.selectedTowerId=null,this.hoverCell=null,this.finished=!1,this.syncHud()}};function Kt(e){let t=2166136261,n=e=>{let n=e|0;t^=n&255,t=Math.imul(t,16777619),t^=n>>>8&255,t=Math.imul(t,16777619),t^=n>>>16&255,t=Math.imul(t,16777619),t^=n>>>24&255,t=Math.imul(t,16777619)};n(e.tick),n(Math.round(e.gold)),n(e.lives),n(e.wave),n(e.refinement),n(e.placedOnWave),n(e.kills),n(e.leaked),n(e.rng.s),n(e.nextTowerId),n(e.nextEnemyId),n(e.nextGemId),n(e.towers.length),n(e.enemies.length),n(e.tray.length),n(e.queue.length),n(e.status.charCodeAt(0));for(let t of e.towers)n(t.id),n(t.cell.x),n(t.cell.y),n(t.level),n(t.surplus),n(t.kind.charCodeAt(0)*31+t.kind.length);for(let t of e.tray)n(t.id),n(t.level),n(t.kind.charCodeAt(0));for(let t of e.enemies)n(t.id),n(Math.round(t.dist*1e3)),n(Math.round(t.hp*100)),n(Math.round(t.slowFor*100)),n(Math.round(t.dotFor*100));return t>>>0}function qt(e){return JSON.stringify({tick:e.tick,mapId:e.mapId,seed:e.seed,rng:e.rng.s,status:e.status,gold:e.gold,lives:e.lives,wave:e.wave,totalWaves:e.totalWaves,refinement:e.refinement,placedOnWave:e.placedOnWave,nextTowerId:e.nextTowerId,nextEnemyId:e.nextEnemyId,nextGemId:e.nextGemId,nextShotId:e.nextShotId,score:e.score,kills:e.kills,leaked:e.leaked,gemsForged:e.gemsForged,discovered:e.discovered,towers:e.towers.map(e=>[e.id,e.kind,e.cell.x,e.cell.y,e.level,e.surplus,e.owner,e.builtAtTick]),tray:e.tray.map(e=>[e.id,e.kind,e.level]),enemies:e.enemies.map(e=>[e.id,e.kind,e.dist,e.hp,e.maxHp,e.speed,e.armour,e.slowResist,e.bounty,e.leak,e.slowFactor,e.slowFor,e.dotDps,e.dotFor,e.phase,e.wobble]),queue:e.queue.map(e=>[e.atTick,e.kind,e.hpMul,e.speedMul])})}var Jt=new Set([`building`,`wave`,`won`,`lost`]),Yt=class extends Error{constructor(e){super(e),this.name=`DeserializeError`}},k=(e,t=0)=>typeof e==`number`&&Number.isFinite(e)?e:t;function Xt(e){let t;try{t=JSON.parse(e)}catch{throw new Yt(`Снимок состояния повреждён`)}if(!t||typeof t!=`object`)throw new Yt(`Снимок состояния повреждён`);if(typeof t.mapId!=`string`)throw new Yt(`В снимке нет карты`);let n=t.status,r=Array.isArray(t.towers)?t.towers.map(e=>({id:k(e[0]),kind:e[1],cell:D(k(e[2]),k(e[3])),level:k(e[4],1),surplus:k(e[5]),owner:k(e[6]),cooldown:0,facing:0,targetId:0,builtAtTick:k(e[7])})):[],i=Array.isArray(t.tray)?t.tray.map(e=>({id:k(e[0]),kind:e[1],level:k(e[2],1)})):[],a=Array.isArray(t.enemies)?t.enemies.map(e=>{let t=k(e[2]);return{id:k(e[0]),kind:e[1],dist:t,prevDist:t,hp:k(e[3]),maxHp:k(e[4],1),speed:k(e[5]),armour:k(e[6]),slowResist:k(e[7]),bounty:k(e[8]),leak:k(e[9],1),slowFactor:k(e[10],1),slowFor:k(e[11]),dotDps:k(e[12]),dotFor:k(e[13]),flash:0,phase:k(e[14]),wobble:k(e[15])}}):[],o=Array.isArray(t.queue)?t.queue.map(e=>({atTick:k(e[0]),kind:e[1],hpMul:k(e[2],1),speedMul:k(e[3],1)})):[],s=m(k(t.seed));return s.s=k(t.rng,s.s)>>>0,{tick:k(t.tick),mapId:t.mapId,seed:k(t.seed)>>>0,rng:s,status:Jt.has(n)?n:`building`,gold:k(t.gold),lives:k(t.lives),wave:k(t.wave),totalWaves:k(t.totalWaves,20),refinement:k(t.refinement),placedOnWave:k(t.placedOnWave,-1),towers:r,enemies:a,projectiles:[],beams:[],tray:i,queue:o,nextTowerId:k(t.nextTowerId,r.length+1),nextEnemyId:k(t.nextEnemyId,a.length+1),nextGemId:k(t.nextGemId,i.length+1),nextShotId:k(t.nextShotId,1),score:k(t.score),kills:k(t.kills),leaked:k(t.leaked),gemsForged:k(t.gemsForged),discovered:Array.isArray(t.discovered)?t.discovered:[],events:[]}}var Zt=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`;function Qt(e){let t=``;for(let n=0;n<e.length;n+=3){let r=e[n],i=e[n+1],a=e[n+2];if(t+=Zt[r>>2],t+=Zt[(r&3)<<4|(i??0)>>4],i===void 0||(t+=Zt[(i&15)<<2|(a??0)>>6],a===void 0))break;t+=Zt[a&63]}return t}function $t(e){let t=e.replace(/[^A-Za-z0-9\-_]/g,``),n=new Uint8Array(Math.floor(t.length*3/4)),r=0,i=0,a=0;for(let e of t){let t=Zt.indexOf(e);t<0||(r=r<<6|t,i+=6,i>=8&&(i-=8,n[a++]=r>>i&255))}return n.subarray(0,a)}var A=class extends Error{constructor(e){super(e),this.name=`SignalCodeError`}},en=`m=application 9 UDP/DTLS/SCTP webrtc-datachannel,a=fingerprint:sha-256 ,a=max-message-size:,a=extmap-allow-mixed,a=end-of-candidates,a=ice-options:trickle,a=msid-semantic: WMS, IN IP4 127.0.0.1,c=IN IP4 0.0.0.0,a=group:BUNDLE ,a=setup:actpass,a=setup:passive,a=setup:active,a=tcptype active,a=candidate:,a=ice-ufrag:,a=sctp-port:,a=ice-pwd:,generation 0,network-cost ,tcptype active,network-id ,typ srflx,typ relay,typ prflx,typ host,raddr ,rport ,a=mid:, udp , tcp ,o=- ,t=0 0,\r
,v=0,s=-`.split(`,`),tn=``,nn=32,rn=en.map((e,t)=>({token:e,index:t})).sort((e,t)=>t.token.length-e.token.length),an=/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/;function on(e){if(an.test(e)||en.length>95)return null;let t=``,n=0;outer:for(;n<e.length;){for(let{token:r,index:i}of rn)if(e.startsWith(r,n)){t+=tn+String.fromCharCode(nn+i),n+=r.length;continue outer}t+=e[n],n+=1}return t}function sn(e){let t=``;for(let n=0;n<e.length;n++){if(e[n]!==tn){t+=e[n];continue}let r=en[e.charCodeAt(n+1)-nn];if(r===void 0)throw new A(`Код повреждён — скопируйте его целиком`);t+=r,n+=1}return t}function cn(){return typeof CompressionStream<`u`&&typeof DecompressionStream<`u`}async function ln(e,t){let n=new Blob([e]).stream().pipeThrough(t),r=await new Response(n).arrayBuffer();return new Uint8Array(r)}async function un(e){return cn()?ln(e,new CompressionStream(`deflate-raw`)):e}async function dn(e){return cn()?ln(e,new DecompressionStream(`deflate-raw`)):e}var fn=new Set([`T`,`D`,`S`,`R`]);async function pn(e){let t=on(e.sdp),n=t!==null,r=await un(new TextEncoder().encode(t??e.sdp)),i=cn()?n?`T`:`D`:n?`S`:`R`;return`PL1${e.kind}${i}${Qt(r)}`}async function mn(e){let t=e.trim().replace(/^.*?[#?](?:j|join|code)=/i,``).replace(/\s+/g,``);if(!t.startsWith(`PL1`))throw new A(`Не похоже на код подключения`);let n=t[3],r=t[4];if(n!==`o`&&n!==`a`)throw new A(`Неизвестный тип кода`);if(!fn.has(r))throw new A(`Неизвестный формат кода`);let i=t.slice(5);if(i.length===0)throw new A(`Код пустой`);let a=$t(i),o;try{o=r===`T`||r===`D`?await dn(a):a}catch{throw new A(`Код повреждён — скопируйте его целиком`)}let s=new TextDecoder().decode(o),c=r===`T`||r===`S`?sn(s):s;if(!c.startsWith(`v=`))throw new A(`Код повреждён — скопируйте его целиком`);return{kind:n,sdp:c}}function hn(e,t){let[n]=t.split(`#`);return`${n}#j=${e}`}function gn(e){let t=e.match(/[#?](?:j|join|code)=([A-Za-z0-9\-_]+)/);return t?t[1]:null}function _n(e){return JSON.stringify(e)}function vn(e){if(typeof e!=`string`)return null;let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!=`object`)return null;let n=t;switch(n.t){case`hello`:{let e=n;return typeof e.v!=`number`||typeof e.seed!=`number`||typeof e.mapId!=`string`||e.mode!==`coop`&&e.mode!==`duel`?null:{t:`hello`,v:e.v,name:typeof e.name==`string`?e.name.slice(0,24):`Игрок`,seed:e.seed>>>0,mapId:e.mapId,mode:e.mode}}case`ready`:return{t:`ready`};case`cmd`:{let e=n;return typeof e.tick!=`number`||typeof e.seq!=`number`||typeof e.owner!=`number`||!xn(e.cmd)?null:{t:`cmd`,tick:e.tick|0,seq:e.seq|0,owner:e.owner|0,cmd:e.cmd}}case`hz`:{let e=n;return typeof e.tick==`number`?{t:`hz`,tick:e.tick|0,checkTick:typeof e.checkTick==`number`?e.checkTick|0:-1,check:typeof e.check==`number`?e.check>>>0:0}:null}case`sync`:{let e=n;return typeof e.state==`string`?{t:`sync`,state:e.state}:null}case`ping`:case`pong`:{let e=n;return typeof e.id!=`number`||typeof e.sent!=`number`?null:{t:n.t,id:e.id,sent:e.sent}}case`bye`:{let e=n;return{t:`bye`,reason:typeof e.reason==`string`?e.reason.slice(0,120):``}}default:return null}}var yn=3;function bn(e){if(!e||typeof e!=`object`)return!1;let t=e;return typeof t.x==`number`&&typeof t.y==`number`&&Number.isFinite(t.x)&&Number.isFinite(t.y)}function xn(e){if(!e||typeof e!=`object`)return!1;let t=e;if(typeof t.owner!=`number`)return!1;switch(t.type){case`craft`:return!Array.isArray(t.gemIds)||t.gemIds.length===0||t.gemIds.length>yn||!t.gemIds.every(e=>typeof e==`number`&&Number.isFinite(e))||new Set(t.gemIds).size!==t.gemIds.length||t.shardId!==void 0&&!(typeof t.shardId==`number`&&Number.isFinite(t.shardId))?!1:bn(t.cell);case`discard`:case`sellGem`:return typeof t.gemId==`number`&&Number.isFinite(t.gemId);case`sellTower`:return typeof t.towerId==`number`&&Number.isFinite(t.towerId);case`refine`:case`startWave`:return!0;default:return!1}}var Sn=[{urls:`stun:stun.l.google.com:19302`},{urls:`stun:stun.cloudflare.com:3478`}],Cn=class extends Error{constructor(){super(`WebRTC недоступен в этом браузере`),this.name=`PeerUnavailableError`}},wn=`prism`,Tn=class{role=null;status=`idle`;onStatus;onMessage;onOpen;onClose;pc=null;channel=null;options;rttMs=0;pingId=0;constructor(e={}){let t=e.createConnection??(e=>{if(typeof RTCPeerConnection>`u`)throw new Cn;return new RTCPeerConnection(e)});this.options={iceServers:e.iceServers??Sn,createConnection:t,gatherTimeoutMs:e.gatherTimeoutMs??3500,now:e.now??(()=>Date.now())}}get rtt(){return this.rttMs}get isConnected(){return this.status===`connected`&&this.channel?.readyState===`open`}setStatus(e,t){this.status!==e&&(this.status=e,this.onStatus?.(e,t))}createConnection(){let e=this.options.createConnection({iceServers:this.options.iceServers});return e.onconnectionstatechange=()=>{switch(e.connectionState){case`connected`:this.setStatus(`connected`);break;case`failed`:this.setStatus(`failed`,`Соединение не установилось`);break;case`disconnected`:this.setStatus(`connecting`,`Связь потеряна, пробуем восстановить`);break;case`closed`:this.setStatus(`closed`)}},this.pc=e,e}attachChannel(e){this.channel=e,e.binaryType=`arraybuffer`,e.onopen=()=>{this.setStatus(`connected`),this.onOpen?.()},e.onclose=()=>{this.status!==`closed`&&(this.setStatus(`closed`),this.onClose?.(`Канал закрыт`))},e.onmessage=e=>this.handleFrame(e.data)}handleFrame(e){let t=vn(e);if(t){if(t.t===`ping`){this.send({t:`pong`,id:t.id,sent:t.sent});return}if(t.t===`pong`){this.rttMs=Math.max(0,this.options.now()-t.sent);return}if(t.t===`bye`){this.onClose?.(t.reason||`Игрок вышел`),this.close();return}this.onMessage?.(t)}}waitForGathering(e){return e.iceGatheringState===`complete`?Promise.resolve():new Promise(t=>{let n=!1,r=()=>{n||(n=!0,clearTimeout(a),e.removeEventListener?.(`icegatheringstatechange`,i),t())},i=()=>{e.iceGatheringState===`complete`&&r()},a=setTimeout(r,this.options.gatherTimeoutMs);e.addEventListener?.(`icegatheringstatechange`,i),e.addEventListener||(e.onicegatheringstatechange=i)})}async createOffer(){this.role=`host`,this.setStatus(`offering`);let e=this.createConnection();this.attachChannel(e.createDataChannel(wn,{ordered:!0}));let t=await e.createOffer();await e.setLocalDescription(t),await this.waitForGathering(e);let n=e.localDescription?.sdp??t.sdp??``;if(!n)throw this.setStatus(`failed`,`Не удалось собрать предложение`),new A(`Не удалось создать код — попробуйте ещё раз`);return this.setStatus(`awaiting-answer`),pn({kind:`o`,sdp:n})}async acceptOffer(e){let t=await mn(e);if(t.kind!==`o`)throw new A(`Это код ответа, а не приглашение`);this.role=`guest`,this.setStatus(`answering`);let n=this.createConnection();n.ondatachannel=e=>this.attachChannel(e.channel),await n.setRemoteDescription({type:`offer`,sdp:t.sdp});let r=await n.createAnswer();await n.setLocalDescription(r),await this.waitForGathering(n);let i=n.localDescription?.sdp??r.sdp??``;if(!i)throw this.setStatus(`failed`,`Не удалось собрать ответ`),new A(`Не удалось создать ответный код`);return this.setStatus(`connecting`),pn({kind:`a`,sdp:i})}async acceptAnswer(e){let t=await mn(e);if(t.kind!==`a`)throw new A(`Это приглашение, а не код ответа`);if(!this.pc)throw new A(`Сначала создайте приглашение`);await this.pc.setRemoteDescription({type:`answer`,sdp:t.sdp}),this.setStatus(`connecting`)}send(e){let t=this.channel;if(!t||t.readyState!==`open`)return!1;try{return t.send(_n(e)),!0}catch{return!1}}ping(){this.send({t:`ping`,id:this.pingId++,sent:this.options.now()})}close(e=``){e&&this.send({t:`bye`,reason:e});try{this.channel?.close()}catch{}try{this.pc?.close()}catch{}this.channel=null,this.pc=null,this.setStatus(`closed`)}};function En(){return typeof crypto<`u`&&typeof crypto.getRandomValues==`function`?crypto.getRandomValues(new Uint32Array(1))[0]>>>0:(Date.now()^Date.now()<<13)>>>0}var Dn=4,On=60,kn=30,An=class{game;settings;makeLink;stage=`idle`;peerStatus=`idle`;role=null;mode=`coop`;outboundCode=``;error=``;peerName=``;rtt=0;desyncs=0;resyncing=!1;link=null;history=new Map;lastHorizonSent=-1;pingTimer=null;constructor(e,t,r=e=>new Tn(e)){this.game=e,this.settings=t,this.makeLink=r,n(this,{},{autoBind:!0})}get connected(){return this.peerStatus===`connected`}get iceServers(){return this.settings.useStun?Sn:[]}static inviteFromUrl(e){return gn(e)}shareUrl(e){return hn(this.outboundCode,e)}attach(e){e.onStatus=(e,t)=>{r(()=>{this.peerStatus=e,e===`failed`&&(this.stage=`error`,this.error=t??`Не удалось подключиться`)})},e.onOpen=()=>this.handleOpen(),e.onClose=e=>this.handleClose(e),e.onMessage=e=>this.handleMessage(e),this.link=e}async host(e,t){this.reset(),this.role=`host`,this.mode=t;let n=this.makeLink({iceServers:this.iceServers});this.attach(n);try{let i=await n.createOffer();return r(()=>{this.outboundCode=i,this.stage=`invite-ready`}),this.pendingStart={mapId:e,seed:En(),mode:t},i}catch(e){throw this.fail(e),e}}async join(e){this.reset(),this.role=`guest`;let t=this.makeLink({iceServers:this.iceServers});this.attach(t);try{let n=await t.acceptOffer(e);return r(()=>{this.outboundCode=n,this.stage=`answer-ready`}),n}catch(e){throw this.fail(e),e}}async completeHandshake(e){if(!this.link){this.fail(Error(`Сначала создайте приглашение`));return}try{await this.link.acceptAnswer(e),r(()=>void(this.stage=`connecting`))}catch(e){throw this.fail(e),e}}pendingStart=null;handleOpen(){if(r(()=>{this.stage=`connecting`,this.error=``}),this.role===`host`&&this.pendingStart){let{mapId:e,seed:t,mode:n}=this.pendingStart;this.link?.send({t:`hello`,v:1,name:this.settings.displayName,seed:t,mapId:e,mode:n}),this.beginMatch(e,t,n,0)}this.pingTimer??=setInterval(()=>this.link?.ping(),2e3)}handleClose(e){r(()=>{this.stage=this.stage===`playing`?`error`:`idle`,this.error=e,this.peerStatus=`closed`}),this.stopTimers()}handleMessage(e){switch(e.t){case`hello`:if(e.v!==1){this.fail(Error(`У игроков разные версии игры`)),this.link?.close(`версия`);return}r(()=>void(this.peerName=e.name)),this.role===`guest`&&(this.beginMatch(e.mapId,e.seed,e.mode,1),this.link?.send({t:`hello`,v:1,name:this.settings.displayName,seed:e.seed,mapId:e.mapId,mode:e.mode}),this.link?.send({t:`ready`}));break;case`ready`:r(()=>void(this.stage=`playing`));break;case`cmd`:this.game.lockstep.receive(e);break;case`hz`:this.game.lockstep.receiveHorizon(e.tick),e.checkTick>=0&&this.compare(e.checkTick,e.check);break;case`sync`:this.applySync(e.state)}r(()=>void(this.rtt=this.link?.rtt??0))}beginMatch(e,t,n,i){this.mode=n,this.game.start(e,t,n,i),this.game.onLocalCommand=e=>void this.link?.send(e),this.history.clear(),this.lastHorizonSent=-1,r(()=>void(this.stage=`playing`))}pump(){let e=this.link,t=this.game.state;if(!e||!t||this.stage!==`playing`)return;let n=this.game.lockstep;if(t.tick%On===0&&this.history.set(t.tick,Kt(t)),this.history.size>8){let e=Math.min(...this.history.keys());this.history.delete(e)}if(n.tick-this.lastHorizonSent<Dn)return;this.lastHorizonSent=n.tick;let r=Math.max(0,Math.floor((t.tick-kn)/On)*On),i=this.history.get(r);e.send({t:`hz`,tick:n.localHorizon,checkTick:i===void 0?-1:r,check:i??0})}compare(e,t){let n=this.history.get(e);n!==void 0&&n!==t&&(r(()=>{this.desyncs+=1,this.resyncing=!0}),this.role===`host`&&this.game.state&&(this.link?.send({t:`sync`,state:qt(this.game.state)}),r(()=>void(this.resyncing=!1))))}applySync(e){if(this.role!==`host`)try{this.game.adoptState(Xt(e)),r(()=>void(this.resyncing=!1))}catch(e){this.fail(e)}}fail(e){let t=e instanceof Error?e.message:String(e);r(()=>{this.stage=`error`,this.error=t})}reset(e=``){this.link?.close(e),this.stopTimers(),r(()=>{this.link=null,this.stage=`idle`,this.peerStatus=`idle`,this.role=null,this.outboundCode=``,this.error=``,this.peerName=``,this.rtt=0,this.resyncing=!1}),this.history.clear(),this.pendingStart=null,this.game.onLocalCommand=void 0}leave(){this.reset(`Игрок вышел`)}stopTimers(){this.pingTimer!==null&&(clearInterval(this.pingTimer),this.pingTimer=null)}};function jn(e){return e===`v1`||e===`v2`}var Mn={midnight:{id:`midnight`,name:`Полночь`,blurb:`Тёмное поле под звёздами. Светится только то, что стреляет.`,sky:{zenith:[.012,.014,.035],horizon:[.055,.048,.115],glow:[.1,.05,.16],nebula:[.06,.02,.14],tint:[.24,.3,.5],stars:1},ground:{grassLow:[.012,.032,.022],grassHigh:[.03,.068,.04],tuft:[.02,.052,.02],roadLow:[.3,.26,.21],roadHigh:[.42,.37,.3],kerb:[.3,.28,.25],flow:[.16,.13,.07],accent:[.45,.78,1],sun:[1,1,1],ambient:.5,void:[0,0,0]},post:{threshold:1.1,bloom:1,vignette:.55,grain:1}},meadow:{id:`meadow`,name:`Полдень`,blurb:`Солнечный день: зелёная трава, песчаная дорога, всё видно сразу.`,sky:{zenith:[.1,.22,.52],horizon:[.52,.68,.88],glow:[.38,.4,.3],nebula:[.16,.18,.2],tint:[.7,.78,.9],stars:0},ground:{grassLow:[.038,.098,.03],grassHigh:[.105,.225,.062],tuft:[.04,.085,.018],roadLow:[.34,.28,.19],roadHigh:[.56,.47,.32],kerb:[.4,.38,.33],flow:[.18,.15,.08],accent:[.95,.92,.55],sun:[1.12,1.08,.95],ambient:.62,void:[.14,.2,.28]},post:{threshold:1.35,bloom:.55,vignette:.32,grain:.4}},dusk:{id:`dusk`,name:`Закат`,blurb:`Длинный тёплый свет, оранжевый горизонт, фиолетовые тени.`,sky:{zenith:[.035,.03,.095],horizon:[.34,.14,.13],glow:[.55,.2,.06],nebula:[.2,.07,.11],tint:[.8,.42,.28],stars:.45},ground:{grassLow:[.014,.02,.016],grassHigh:[.04,.052,.026],tuft:[.03,.03,.012],roadLow:[.3,.19,.13],roadHigh:[.52,.34,.2],kerb:[.3,.22,.19],flow:[.24,.13,.05],accent:[1,.68,.34],sun:[1.12,.88,.7],ambient:.52,void:[.09,.04,.07]},post:{threshold:1,bloom:1.25,vignette:.62,grain:.9}},frost:{id:`frost`,name:`Стужа`,blurb:`Снежное поле и тёмная мокрая дорога. Врага видно за версту.`,sky:{zenith:[.055,.085,.145],horizon:[.4,.5,.62],glow:[.26,.3,.34],nebula:[.14,.17,.22],tint:[.62,.74,.9],stars:.25},ground:{grassLow:[.145,.195,.29],grassHigh:[.56,.63,.74],tuft:[-.06,-.06,-.05],roadLow:[.055,.06,.075],roadHigh:[.135,.145,.175],kerb:[.24,.27,.32],flow:[.1,.13,.18],accent:[.4,.82,1],sun:[.98,1.02,1.1],ambient:.66,void:[.1,.14,.2]},post:{threshold:1.45,bloom:.7,vignette:.38,grain:.5}},ember:{id:`ember`,name:`Пепел`,blurb:`Чёрный базальт, тлеющие трещины, пепельное небо.`,sky:{zenith:[.03,.014,.014],horizon:[.19,.075,.045],glow:[.42,.12,.03],nebula:[.24,.07,.03],tint:[.9,.35,.12],stars:.15},ground:{grassLow:[.014,.012,.014],grassHigh:[.046,.034,.032],tuft:[.2,.055,.01],roadLow:[.22,.2,.19],roadHigh:[.4,.36,.33],kerb:[.17,.14,.13],flow:[.3,.1,.02],accent:[1,.44,.18],sun:[1.05,.9,.82],ambient:.55,void:[.03,.01,.01]},post:{threshold:.95,bloom:1.35,vignette:.66,grain:1.1}},jade:{id:`jade`,name:`Нефрит`,blurb:`Плоские чистые цвета без свечения и зерна. Ровно и спокойно.`,sky:{zenith:[.045,.115,.135],horizon:[.16,.34,.36],glow:[.12,.24,.22],nebula:[0,0,0],tint:[.4,.7,.68],stars:0},ground:{grassLow:[.035,.115,.098],grassHigh:[.075,.205,.168],tuft:[.022,.055,.042],roadLow:[.3,.34,.3],roadHigh:[.5,.55,.48],kerb:[.22,.28,.26],flow:[.1,.16,.12],accent:[.55,1,.86],sun:[1,1.04,1],ambient:.78,void:[.05,.11,.11]},post:{threshold:1.6,bloom:.3,vignette:.24,grain:0}}},Nn=[`midnight`,`dusk`,`ember`,`meadow`,`frost`,`jade`],Pn=`midnight`;function Fn(e){return typeof e==`string`&&Object.prototype.hasOwnProperty.call(Mn,e)}function In(e){return Fn(e)?Mn[e]:Mn[Pn]}var Ln=`prism.settings.v1`,j={graphics:`v2`,quality:`high`,theme:Pn,sound:!0,haptics:!0,playerName:`Игрок`,useStun:!0,shareScores:!1},Rn=class{store;graphics=j.graphics;quality=j.quality;theme=j.theme;sound=j.sound;haptics=j.haptics;playerName=j.playerName;useStun=j.useStun;shareScores=j.shareScores;constructor(e=Ee()){this.store=e;let t=De(this.store,Ln,{});this.apply(t),n(this,{},{autoBind:!0})}apply(e){jn(e.graphics)&&(this.graphics=e.graphics),(e.quality===`low`||e.quality===`medium`||e.quality===`high`)&&(this.quality=e.quality),Fn(e.theme)&&(this.theme=e.theme),typeof e.sound==`boolean`&&(this.sound=e.sound),typeof e.haptics==`boolean`&&(this.haptics=e.haptics),typeof e.useStun==`boolean`&&(this.useStun=e.useStun),typeof e.shareScores==`boolean`&&(this.shareScores=e.shareScores),typeof e.playerName==`string`&&e.playerName.trim()&&(this.playerName=e.playerName.trim().slice(0,24))}get snapshot(){return{graphics:this.graphics,quality:this.quality,theme:this.theme,sound:this.sound,haptics:this.haptics,playerName:this.playerName,useStun:this.useStun,shareScores:this.shareScores}}setGraphics(e){this.graphics=e,this.persist()}setQuality(e){this.quality=e,this.persist()}setTheme(e){this.theme=e,this.persist()}setPlayerName(e){this.playerName=e.slice(0,24),this.persist()}get displayName(){return this.playerName.trim()||j.playerName}toggleSound(){this.sound=!this.sound,this.persist()}toggleHaptics(){this.haptics=!this.haptics,this.persist()}toggleStun(){this.useStun=!this.useStun,this.persist()}toggleShareScores(){this.shareScores=!this.shareScores,this.persist()}reset(){this.apply(j),this.quality=j.quality,this.theme=j.theme,this.playerName=j.playerName,this.persist()}persist(){Oe(this.store,Ln,this.snapshot)}},zn=2600,Bn=class{schedule;screen=`menu`;toasts=[];sheetOpen=!1;resultsOpen=!1;nextToastId=1;timers=new Map;constructor(e=setTimeout){this.schedule=e,n(this,{},{autoBind:!0})}go(e){this.screen=e,e!==`game`&&(this.sheetOpen=!1,this.resultsOpen=!1)}toast(e,t=`info`){let n=this.nextToastId++;if(this.toasts.push({id:n,text:e,tone:t}),this.toasts.length>3){let e=this.toasts.shift();e&&this.clearTimer(e.id)}let r=this.schedule(()=>this.dismiss(n),zn);return this.timers.set(n,r),n}dismiss(e){this.toasts=this.toasts.filter(t=>t.id!==e),this.clearTimer(e)}clearTimer(e){let t=this.timers.get(e);t!==void 0&&(clearTimeout(t),this.timers.delete(e))}openSheet(){this.sheetOpen=!0}closeSheet(){this.sheetOpen=!1}showResults(){this.resultsOpen=!0,this.sheetOpen=!1}hideResults(){this.resultsOpen=!1}dispose(){for(let e of this.timers.values())clearTimeout(e);this.timers.clear(),this.toasts=[]}},Vn=class{settings=new Rn;ui=new Bn;game=new Gt;net;leaderboard;constructor(e){this.net=new An(this.game,this.settings),this.leaderboard=e??new Ne({baseUrl:Me({BASE_URL:`./`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1})}),this.game.onFinished=e=>{this.ui.showResults(),this.recordRun(e.status===`won`)}}async recordRun(e){let{hud:t,mapId:n,mode:r,towerPeak:i}=this.game;try{await this.leaderboard.submit({player:this.settings.displayName,mapId:n,mode:r,score:t.score,wave:t.wave,kills:t.kills,leaked:t.leaked,towerPeak:i,won:e},this.settings.shareScores)===`local-only`&&this.settings.shareScores&&this.ui.toast(`Таблица недоступна — результат сохранён локально`)}catch{}}personalBest(e=5){return this.leaderboard.localHistory().filter(e=>e.mapId===this.game.mapId).sort((e,t)=>t.score-e.score||t.wave-e.wave).slice(0,e)}dispose(){this.net.reset(),this.game.stop(),this.ui.dispose()}},Hn=(0,s.createContext)(null),Un=Hn.Provider;function Wn(){let e=(0,s.useContext)(Hn);if(!e)throw Error(`useStores вызван вне StoreProvider`);return e}var Gn=()=>Wn().game,Kn=()=>Wn().ui,qn=()=>Wn().settings,Jn=()=>Wn().net,Yn={1:`Простые`,2:`Составные`,3:`Высшие`};function Xn(e){let t=e=>Math.round(Math.max(0,Math.min(1,e))*255);return`rgb(${t(e[0])}, ${t(e[1])}, ${t(e[2])})`}var Zn=i(function({initialTab:e=`recipes`}={}){let t=Kn(),n=Gn(),[r,i]=(0,s.useState)(e),a=new Set(n.hud.discovered);return(0,w.jsxs)(we,{fullscreen:!0,title:`Книга алхимика`,hint:`Три камня складываются в башню. Уровень камня в рецепте — это «не ниже».`,action:(0,w.jsx)(T,{size:`sm`,"aria-label":`Закрыть`,onClick:()=>t.go(`menu`),children:`✕`}),children:[(0,w.jsx)(`div`,{className:`book__tabs`,role:`tablist`,children:[[`recipes`,`Рецепты`],[`gems`,`Камни`],[`enemies`,`Враги`]].map(([e,t])=>(0,w.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":r===e,className:`book__tab ${r===e?`book__tab--on`:``}`.trim(),onClick:()=>i(e),children:t},e))}),r===`recipes`?(0,w.jsx)(Qn,{discovered:a}):null,r===`gems`?(0,w.jsx)(er,{refinement:n.hud.refinement}):null,r===`enemies`?(0,w.jsx)(tr,{}):null]})});function Qn({discovered:e}){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`p`,{className:`book__lead`,children:[(0,w.jsx)(`strong`,{children:`Ход — это волна.`}),` За ход на поле ложится ровно одна вещь: собранный рецепт или один камень как есть. Повышение уровня — тоже ход, так что копить камни ради хорошей комбинации имеет смысл.`]}),(0,w.jsxs)(`p`,{className:`book__lead`,children:[`Повторите рецепт и поставьте его на свою же башню — она поднимется на уровень выше, до `,3,`-го. Камни выше требуемого уровня не пропадают: каждый лишний уровень добавляет башне силы.`]}),(0,w.jsx)(`p`,{className:`book__lead`,children:`Не сложилось ничего — не беда: одинокий камень тоже можно поставить. Осколок бьёт примерно вполсилы рецепта, зато занимает клетку и тянет время. И он не тупик: возьмите два камня из лотка, тапните по осколку на поле — он пойдёт третьим ингредиентом, и на его же клетке встанет настоящая башня.`}),[1,2,3].map(t=>(0,w.jsxs)(`section`,{className:`book__tier`,children:[(0,w.jsx)(`h3`,{className:`book__tier-name`,children:Yn[t]}),(0,w.jsx)(`ul`,{className:`book__list`,children:ce.filter(e=>e.tier===t).map(t=>(0,w.jsx)($n,{recipe:t,known:e.has(t.id)},t.id))})]},t))]})}function $n({recipe:e,known:t}){let n=e.stats;return(0,w.jsxs)(`li`,{className:`recipe ${t?`recipe--known`:``}`.trim(),children:[(0,w.jsx)(`div`,{className:`recipe__formula`,children:e.ingredients.map((e,t)=>{let n=y[e.kind];return(0,w.jsxs)(`span`,{className:`recipe__ing`,children:[(0,w.jsx)(`span`,{className:`recipe__gem`,style:{background:Xn(n.color)},"aria-hidden":`true`,children:n.glyph}),(0,w.jsxs)(`span`,{className:`recipe__ing-name`,children:[n.name,(0,w.jsxs)(`b`,{className:`mono`,children:[` `,e.level,`+`]})]})]},`${e.kind}-${t}`)})}),(0,w.jsxs)(`div`,{className:`recipe__result`,children:[(0,w.jsxs)(`strong`,{className:`recipe__name`,style:{color:Xn(n.color)},children:[e.name,t?(0,w.jsx)(`span`,{className:`recipe__known`,title:`Уже собирали`,children:`✓`}):null]}),(0,w.jsx)(`p`,{className:`recipe__blurb`,children:e.blurb}),(0,w.jsxs)(`ul`,{className:`recipe__stats mono`,children:[(0,w.jsxs)(`li`,{children:[Math.round(n.damage),` урона`]}),(0,w.jsxs)(`li`,{children:[n.fireRate.toFixed(1),`/с`]}),(0,w.jsxs)(`li`,{children:[n.range.toFixed(1),` радиус`]}),n.splash>0?(0,w.jsx)(`li`,{className:`recipe__tag`,children:`сплэш`}):null,n.slowFactor<1?(0,w.jsx)(`li`,{className:`recipe__tag`,children:`замедление`}):null,n.dotDps>0?(0,w.jsx)(`li`,{className:`recipe__tag`,children:`яд/огонь`}):null,n.chains>0?(0,w.jsxs)(`li`,{className:`recipe__tag`,children:[`цепь ×`,n.chains]}):null,n.pierce>0?(0,w.jsxs)(`li`,{className:`recipe__tag`,children:[`броня −`,Math.round(n.pierce*100),`%`]}):null,n.critChance>0?(0,w.jsx)(`li`,{className:`recipe__tag`,children:`крит`}):null]})]})]})}function er({refinement:e}){let t=te(e);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`p`,{className:`book__lead`,children:[`Очистка не открывает новых камней — она поднимает уровень тех, что падают. Сейчас ступень `,e,` из `,5,`.`]}),(0,w.jsxs)(`section`,{className:`book__tier`,children:[(0,w.jsx)(`h3`,{className:`book__tier-name`,children:`Шанс уровня при текущей очистке`}),(0,w.jsx)(`ul`,{className:`chances`,children:t.map((e,t)=>(0,w.jsxs)(`li`,{className:`chance`,children:[(0,w.jsx)(`span`,{className:`chance__level mono`,children:t+1}),(0,w.jsx)(`span`,{className:`chance__bar`,style:{"--w":`${Math.round(e*100)}%`}}),(0,w.jsxs)(`span`,{className:`chance__value mono`,children:[(e*100).toFixed(+(e<.1)),`%`]})]},t))})]}),(0,w.jsxs)(`section`,{className:`book__tier`,children:[(0,w.jsx)(`h3`,{className:`book__tier-name`,children:`Что даёт каждый камень`}),(0,w.jsx)(`ul`,{className:`book__list`,children:v.map(e=>{let t=y[e];return(0,w.jsxs)(`li`,{className:`gemrow`,children:[(0,w.jsx)(`span`,{className:`recipe__gem`,style:{background:Xn(t.color)},"aria-hidden":`true`,children:t.glyph}),(0,w.jsxs)(`div`,{className:`gemrow__text`,children:[(0,w.jsxs)(`strong`,{children:[t.name,` `,(0,w.jsx)(`span`,{className:`gemrow__element`,children:t.element})]}),(0,w.jsx)(`span`,{children:t.trait})]}),(0,w.jsx)(`span`,{className:`gemrow__rarity mono`,title:`Относительная частота выпадения`,children:t.weight})]},e)})}),(0,w.jsxs)(`p`,{className:`book__note`,children:[`Уровни камней — от 1 до `,5,`. Число справа — относительная частота: оникс попадается вшестеро реже рубина.`]})]})]})}function tr(){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`p`,{className:`book__lead`,children:`Походка выдаёт врага раньше подписи: прыгуна не удержать замедлением в воздухе, летун не касается земли, а панцирная гусеница ползёт медленно, но съедает половину урона.`}),(0,w.jsx)(`ul`,{className:`book__list`,children:u.map(e=>{let t=l[e];return(0,w.jsxs)(`li`,{className:`enemyrow`,children:[(0,w.jsx)(`span`,{className:`enemyrow__dot`,style:{background:Xn(t.color)},"aria-hidden":`true`}),(0,w.jsxs)(`div`,{className:`enemyrow__text`,children:[(0,w.jsx)(`strong`,{children:t.name}),(0,w.jsx)(`span`,{children:t.hint})]}),(0,w.jsxs)(`ul`,{className:`enemyrow__stats mono`,children:[(0,w.jsxs)(`li`,{children:[t.hp,` ХП`]}),t.armour>0?(0,w.jsxs)(`li`,{children:[`броня `,Math.round(t.armour*100),`%`]}):null,(0,w.jsxs)(`li`,{children:[t.speed.toFixed(1),` кл/с`]})]})]},e)})})]})}function nr(){return rr(new Float32Array(16))}function rr(e){return e.fill(0),e[0]=e[5]=e[10]=e[15]=1,e}function ir(e,t,n,r,i){let a=1/Math.tan(t/2),o=1/(r-i);return e.fill(0),e[0]=a/n,e[5]=a,e[10]=(i+r)*o,e[11]=-1,e[14]=2*i*r*o,e}function ar(e,t,n,r,i,a,o){return e.fill(0),e[0]=2/(n-t),e[5]=2/(i-r),e[10]=-2/(o-a),e[12]=-(n+t)/(n-t),e[13]=-(i+r)/(i-r),e[14]=-(o+a)/(o-a),e[15]=1,e}function or(e,t,n,r){let i=t.x-n.x,a=t.y-n.y,o=t.z-n.z,s=Math.hypot(i,a,o)||1;i/=s,a/=s,o/=s;let c=r.y*o-r.z*a,l=r.z*i-r.x*o,u=r.x*a-r.y*i;s=Math.hypot(c,l,u),s<1e-6?(c=1,l=0,u=0):(c/=s,l/=s,u/=s);let d=a*u-o*l,f=o*c-i*u,p=i*l-a*c;return e[0]=c,e[1]=d,e[2]=i,e[3]=0,e[4]=l,e[5]=f,e[6]=a,e[7]=0,e[8]=u,e[9]=p,e[10]=o,e[11]=0,e[12]=-(c*t.x+l*t.y+u*t.z),e[13]=-(d*t.x+f*t.y+p*t.z),e[14]=-(i*t.x+a*t.y+o*t.z),e[15]=1,e}function sr(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=t[9],p=t[10],m=t[11],h=t[12],g=t[13],_=t[14],v=t[15];for(let t=0;t<4;t++){let y=n[t*4],b=n[t*4+1],x=n[t*4+2],S=n[t*4+3];e[t*4]=y*r+b*s+x*d+S*h,e[t*4+1]=y*i+b*c+x*f+S*g,e[t*4+2]=y*a+b*l+x*p+S*_,e[t*4+3]=y*o+b*u+x*m+S*v}return e}function cr(e,t){let n=e[0]*t.x+e[4]*t.y+e[8]*t.z+e[12],r=e[1]*t.x+e[5]*t.y+e[9]*t.z+e[13],i=e[2]*t.x+e[6]*t.y+e[10]*t.z+e[14],a=e[3]*t.x+e[7]*t.y+e[11]*t.z+e[15],o=Math.abs(a)>1e-9?1/a:1;return{x:n*o,y:r*o,z:i*o,w:a}}function lr(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],m=t[12],h=t[13],g=t[14],_=t[15],v=n*s-r*o,y=n*c-i*o,b=n*l-a*o,x=r*c-i*s,S=r*l-a*s,ee=i*l-a*c,te=u*h-d*m,ne=u*g-f*m,re=u*_-p*m,ie=d*g-f*h,ae=d*_-p*h,oe=f*_-p*g,se=v*oe-y*ae+b*ie+x*re-S*ne+ee*te;if(Math.abs(se)<1e-12)return null;let C=1/se;return e[0]=(s*oe-c*ae+l*ie)*C,e[1]=(i*ae-r*oe-a*ie)*C,e[2]=(h*ee-g*S+_*x)*C,e[3]=(f*S-d*ee-p*x)*C,e[4]=(c*re-o*oe-l*ne)*C,e[5]=(n*oe-i*re+a*ne)*C,e[6]=(g*b-m*ee-_*y)*C,e[7]=(u*ee-f*b+p*y)*C,e[8]=(o*ae-s*re+l*te)*C,e[9]=(r*re-n*ae-a*te)*C,e[10]=(m*S-h*b+_*v)*C,e[11]=(d*b-u*S-p*v)*C,e[12]=(s*ne-o*ie-c*te)*C,e[13]=(n*ie-r*ne+i*te)*C,e[14]=(h*y-m*x-g*v)*C,e[15]=(u*x-d*y+f*v)*C,e}var M=(e,t,n)=>({x:e,y:t,z:n}),ur={minDistance:7,maxDistance:46,minPitch:.62,maxPitch:1.34},dr=class e{limits;target;distance;yaw;pitch;fov=52*Math.PI/180;view=nr();proj=nr();viewProj=nr();invViewProj=nr();invValid=!1;constructor(e=D(0,0),t=18,n=-Math.PI/4,r=1,i=ur){this.limits=i,this.target={...e},this.distance=t,this.yaw=n,this.pitch=r}eye(){let e=Math.cos(this.pitch)*this.distance;return M(this.target.x+Math.sin(this.yaw)*e,Math.sin(this.pitch)*this.distance,this.target.y+Math.cos(this.yaw)*e)}update(e,t=.4,n=160){let r=this.eye();or(this.view,r,M(this.target.x,0,this.target.y),M(0,1,0)),ir(this.proj,this.fov,Math.max(e,.001),t,n),sr(this.viewProj,this.proj,this.view),this.invValid=!1}zoomBy(e){this.distance=Ke(this.distance*e,this.limits.minDistance,this.limits.maxDistance)}orbitBy(e,t){this.yaw+=e,this.pitch=Ke(this.pitch+t,this.limits.minPitch,this.limits.maxPitch)}panBy(e,t){let n=Math.sin(this.yaw),r=Math.cos(this.yaw);this.target=D(this.target.x+e*r-t*n,this.target.y-e*n-t*r)}static TILES_ACROSS=8.5;fitDistance(t,n,r){let i=Math.min(t,e.TILES_ACROSS),a=Math.tan(this.fov*.5),o=i*.5/(a*Math.max(r,.001)),s=Math.max(t,n)*.62/a;return Math.min(o,s)}frame(e,t,n){this.target=D(e/2,t/2),this.distance=Ke(this.fitDistance(e,t,n),this.limits.minDistance,this.limits.maxDistance)}clampTarget(e,t,n=4){this.target=D(Ke(this.target.x,-n,e+n),Ke(this.target.y,-n,t+n))}screenToGround(e,t){if(!this.invValid){if(!lr(this.invViewProj,this.viewProj))return rr(this.invViewProj),null;this.invValid=!0}let n=cr(this.invViewProj,M(e,t,-1)),r=cr(this.invViewProj,M(e,t,1)),i=r.y-n.y;if(Math.abs(i)<1e-6)return null;let a=-n.y/i;return a<0?null:D(n.x+(r.x-n.x)*a,n.z+(r.z-n.z)*a)}};function fr(e,t,n){return D((e-n.left)/Math.max(n.width,1)*2-1,-((t-n.top)/Math.max(n.height,1)*2-1))}var pr=class extends Error{constructor(e=`WebGL2 недоступен в этом браузере`){super(e),this.name=`WebGlUnavailableError`}},mr=/Android|iPhone|iPad|iPod|Mobile|Silk/i;function hr(e){return mr.test(e)}function gr(e,t){let n=hr(e)?2:2.5;return Math.max(1,Math.min(t||1,n))}function _r(e){let t=e.getContext(`webgl2`,{alpha:!1,antialias:!1,depth:!0,stencil:!1,powerPreference:`high-performance`,preserveDrawingBuffer:!1,desynchronized:!0});if(!t)throw new pr;let n=!!t.getExtension(`EXT_color_buffer_half_float`)||!!t.getExtension(`EXT_color_buffer_float`),r=typeof navigator>`u`?``:navigator.userAgent;return{gl:t,canvas:e,caps:{halfFloatColor:n,maxSamples:t.getParameter(t.MAX_SAMPLES),maxTextureSize:t.getParameter(t.MAX_TEXTURE_SIZE),maxPixelRatio:gr(r,typeof devicePixelRatio>`u`?1:devicePixelRatio)}}}function vr(e,t=1){let{canvas:n,caps:r}=e,i=r.maxPixelRatio*t,a=Math.max(1,Math.round(n.clientWidth*i)),o=Math.max(1,Math.round(n.clientHeight*i));return n.width===a&&n.height===o?!1:(n.width=a,n.height=o,!0)}var N={torso:0,head:1,leg:2,arm:3,wing:4,segment:5,rigid:6,tail:7},yr={walk:0,hop:1,crawl:2,fly:3,stomp:4},P=(e,t,n)=>({shape:`ball`,pos:[e,t,n],size:[.09,.09,.07],role:N.head,phase:0,accent:1}),br={goblin:[{shape:`box`,pos:[0,.6,0],size:[.38,.44,.3],role:N.torso,phase:0,accent:0},{shape:`ball`,pos:[0,.98,.03],size:[.34,.32,.32],role:N.head,phase:0,accent:0},{shape:`wedge`,pos:[-.21,1.06,-.02],size:[.16,.14,.08],role:N.head,phase:0,accent:1},{shape:`wedge`,pos:[.21,1.06,-.02],size:[.16,.14,.08],role:N.head,phase:0,accent:1},P(-.09,1,.16),P(.09,1,.16),{shape:`box`,pos:[-.27,.68,0],size:[.1,.32,.1],role:N.arm,phase:.5,accent:0},{shape:`box`,pos:[.27,.68,0],size:[.1,.32,.1],role:N.arm,phase:0,accent:0},{shape:`box`,pos:[-.12,.22,0],size:[.13,.28,.13],role:N.leg,phase:0,accent:0},{shape:`box`,pos:[.12,.22,0],size:[.13,.28,.13],role:N.leg,phase:.5,accent:0}],hound:[{shape:`box`,pos:[0,.46,-.02],size:[.3,.26,.62],role:N.torso,phase:0,accent:0},{shape:`box`,pos:[0,.56,.3],size:[.2,.2,.22],role:N.torso,phase:0,accent:0},{shape:`box`,pos:[0,.6,.48],size:[.24,.22,.28],role:N.head,phase:0,accent:0},{shape:`box`,pos:[0,.54,.66],size:[.15,.13,.16],role:N.head,phase:0,accent:1},{shape:`wedge`,pos:[-.1,.74,.44],size:[.1,.14,.07],role:N.head,phase:0,accent:1},{shape:`wedge`,pos:[.1,.74,.44],size:[.1,.14,.07],role:N.head,phase:0,accent:1},{shape:`box`,pos:[-.13,.19,.22],size:[.1,.32,.1],role:N.leg,phase:0,accent:0},{shape:`box`,pos:[.13,.19,.22],size:[.1,.32,.1],role:N.leg,phase:.5,accent:0},{shape:`box`,pos:[-.13,.19,-.24],size:[.1,.32,.1],role:N.leg,phase:.5,accent:0},{shape:`box`,pos:[.13,.19,-.24],size:[.1,.32,.1],role:N.leg,phase:0,accent:0},{shape:`box`,pos:[0,.56,-.38],size:[.07,.07,.28],role:N.tail,phase:0,accent:1}],slime:[{shape:`ball`,pos:[0,.32,0],size:[.56,.46,.56],role:N.torso,phase:0,accent:0},{shape:`ball`,pos:[0,.54,-.06],size:[.3,.22,.3],role:N.torso,phase:0,accent:1},P(-.13,.38,.24),P(.13,.38,.24),{shape:`ball`,pos:[0,.1,0],size:[.6,.12,.6],role:N.torso,phase:0,accent:0}],grub:[{shape:`ball`,pos:[0,.26,.46],size:[.34,.32,.32],role:N.head,phase:0,accent:1},P(-.1,.32,.6),P(.1,.32,.6),{shape:`ball`,pos:[0,.24,.2],size:[.4,.36,.34],role:N.segment,phase:.1,accent:0},{shape:`ball`,pos:[0,.24,-.06],size:[.42,.38,.34],role:N.segment,phase:.3,accent:0},{shape:`ball`,pos:[0,.23,-.32],size:[.38,.34,.32],role:N.segment,phase:.5,accent:0},{shape:`ball`,pos:[0,.2,-.56],size:[.3,.26,.26],role:N.segment,phase:.7,accent:1}],wisp:[{shape:`ball`,pos:[0,.5,0],size:[.3,.34,.3],role:N.torso,phase:0,accent:0},{shape:`wedge`,pos:[-.28,.54,-.04],size:[.36,.05,.24],role:N.wing,phase:0,accent:1},{shape:`wedge`,pos:[.28,.54,-.04],size:[.36,.05,.24],role:N.wing,phase:0,accent:1},{shape:`ball`,pos:[0,.78,0],size:[.14,.14,.14],role:N.rigid,phase:0,accent:1},{shape:`ball`,pos:[0,.26,0],size:[.16,.18,.16],role:N.segment,phase:.4,accent:0}],brute:[{shape:`box`,pos:[0,.78,0],size:[.62,.58,.44],role:N.torso,phase:0,accent:0},{shape:`box`,pos:[0,1.16,.02],size:[.34,.3,.34],role:N.head,phase:0,accent:0},{shape:`wedge`,pos:[-.16,1.34,0],size:[.12,.2,.1],role:N.head,phase:0,accent:1},{shape:`wedge`,pos:[.16,1.34,0],size:[.12,.2,.1],role:N.head,phase:0,accent:1},P(-.1,1.18,.18),P(.1,1.18,.18),{shape:`box`,pos:[-.44,.84,0],size:[.18,.46,.18],role:N.arm,phase:.5,accent:0},{shape:`box`,pos:[.44,.84,0],size:[.18,.46,.18],role:N.arm,phase:0,accent:0},{shape:`box`,pos:[-.18,.26,0],size:[.2,.34,.2],role:N.leg,phase:0,accent:0},{shape:`box`,pos:[.18,.26,0],size:[.2,.34,.2],role:N.leg,phase:.5,accent:0}],golem:[{shape:`box`,pos:[0,.8,0],size:[.68,.64,.5],role:N.torso,phase:0,accent:0},{shape:`box`,pos:[0,1.2,0],size:[.4,.26,.38],role:N.head,phase:0,accent:0},{shape:`ball`,pos:[0,1.22,.2],size:[.16,.1,.08],role:N.head,phase:0,accent:1},{shape:`wedge`,pos:[-.36,1.12,0],size:[.2,.28,.18],role:N.rigid,phase:0,accent:1},{shape:`wedge`,pos:[.36,1.12,0],size:[.2,.28,.18],role:N.rigid,phase:0,accent:1},{shape:`box`,pos:[-.5,.82,0],size:[.22,.5,.22],role:N.arm,phase:.5,accent:0},{shape:`box`,pos:[.5,.82,0],size:[.22,.5,.22],role:N.arm,phase:0,accent:0},{shape:`box`,pos:[-.2,.24,0],size:[.24,.32,.24],role:N.leg,phase:0,accent:0},{shape:`box`,pos:[.2,.24,0],size:[.24,.32,.24],role:N.leg,phase:.5,accent:0},{shape:`ball`,pos:[0,.86,.26],size:[.18,.18,.08],role:N.torso,phase:0,accent:1}],warden:[{shape:`box`,pos:[0,.95,0],size:[.6,.7,.42],role:N.torso,phase:0,accent:0},{shape:`box`,pos:[0,1.44,.02],size:[.34,.32,.32],role:N.head,phase:0,accent:0},{shape:`wedge`,pos:[-.2,1.68,-.02],size:[.13,.34,.12],role:N.head,phase:0,accent:1},{shape:`wedge`,pos:[.2,1.68,-.02],size:[.13,.34,.12],role:N.head,phase:0,accent:1},P(-.1,1.46,.17),P(.1,1.46,.17),{shape:`wedge`,pos:[0,1,-.3],size:[.72,.9,.16],role:N.tail,phase:0,accent:1},{shape:`box`,pos:[-.44,1.02,0],size:[.18,.54,.18],role:N.arm,phase:.5,accent:0},{shape:`box`,pos:[.44,1.02,0],size:[.18,.54,.18],role:N.arm,phase:0,accent:0},{shape:`box`,pos:[-.18,.3,0],size:[.22,.42,.22],role:N.leg,phase:0,accent:0},{shape:`box`,pos:[.18,.3,0],size:[.22,.42,.22],role:N.leg,phase:.5,accent:0},{shape:`ball`,pos:[0,1.06,.24],size:[.2,.2,.08],role:N.torso,phase:0,accent:1}]};function xr(e){let t=0;for(let n of br[e])t=Math.max(t,n.pos[1]+n.size[1]*.5);return t}function Sr(e,t,n){let r=t[0]-e[0],i=t[1]-e[1],a=t[2]-e[2],o=n[0]-e[0],s=n[1]-e[1],c=n[2]-e[2],l=i*c-a*s,u=a*o-r*c,d=r*s-i*o,f=Math.hypot(l,u,d)||1;return[l/f,u/f,d/f]}function F(e,t){let n=[],r=[],i=[];for(let a of t)for(let t=1;t<a.length-1;t++){let o=e[a[0]],s=e[a[t]],c=e[a[t+1]],l=Sr(o,s,c);for(let[e,t]of[[0,o],[1,s],[2,c]])n.push(t[0],t[1],t[2]),r.push(l[0],l[1],l[2]),i.push(+(e===0),+(e===1),+(e===2))}return{positions:new Float32Array(n),normals:new Float32Array(r),edges:new Float32Array(i),vertexCount:n.length/3}}function Cr(e=1){let t=e;return F([[t,0,0],[-t,0,0],[0,t,0],[0,-t,0],[0,0,t],[0,0,-t]],[[0,2,4],[2,1,4],[1,3,4],[3,0,4],[2,0,5],[1,2,5],[3,1,5],[0,3,5]])}function wr(e=1){let t=e/Math.sqrt(3);return F([[t,t,t],[t,-t,-t],[-t,t,-t],[-t,-t,t]],[[0,1,2],[0,3,1],[0,2,3],[1,3,2]])}function Tr(e=1){let t=e/2;return F([[-t,-t,-t],[t,-t,-t],[t,t,-t],[-t,t,-t],[-t,-t,t],[t,-t,t],[t,t,t],[-t,t,t]],[[0,3,2,1],[4,5,6,7],[0,1,5,4],[2,3,7,6],[1,2,6,5],[0,4,7,3]])}function Er(e=1){let t=(1+Math.sqrt(5))/2,n=[[-1,t,0],[1,t,0],[-1,-t,0],[1,-t,0],[0,-1,t],[0,1,t],[0,-1,-t],[0,1,-t],[t,0,-1],[t,0,1],[-t,0,-1],[-t,0,1]],r=e/Math.hypot(1,t);return F(n.map(e=>[e[0]*r,e[1]*r,e[2]*r]),[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]])}function Dr(e=6){let t=[],n=[],r=[];for(let r=0;r<e;r++){let i=r/e*Math.PI*2;n.push(t.length),t.push([Math.cos(i)*.3,-.5,Math.sin(i)*.3])}for(let n=0;n<e;n++){let i=(n+.5)/e*Math.PI*2;r.push(t.length),t.push([Math.cos(i)*.5,-.06,Math.sin(i)*.5])}let i=t.length;t.push([0,.5,0]);let a=[[...n].reverse()];for(let t=0;t<e;t++){let o=(t+1)%e;a.push([n[t],n[o],r[t]]),a.push([n[o],r[o],r[t]]),a.push([r[t],r[o],i])}return F(t,a)}function Or(e=8){let t=[],n=[],r=[];for(let r=0;r<e;r++){let i=r/e*Math.PI*2,a=Math.cos(i)*.5,o=Math.sin(i)*.5;n.push(t.length),t.push([a,-.5,o])}for(let n=0;n<e;n++){let i=n/e*Math.PI*2;r.push(t.length),t.push([Math.cos(i)*.5,.5,Math.sin(i)*.5])}let i=[[...n].reverse(),[...r]];for(let t=0;t<e;t++){let a=(t+1)%e;i.push([n[t],n[a],r[a],r[t]])}return F(t,i)}function kr(e=10,t=.6){let n=[],r=[],i=[],a=[],o=[],s=.5*Math.max(.05,Math.min(t,.95));for(let t=0;t<e;t++){let c=t/e*Math.PI*2,l=Math.cos(c),u=Math.sin(c);r.push(n.length),n.push([l*.5,-.5,u*.5]),i.push(n.length),n.push([l*.5,.5,u*.5]),a.push(n.length),n.push([l*s,-.5,u*s]),o.push(n.length),n.push([l*s,.5,u*s])}let c=[];for(let t=0;t<e;t++){let n=(t+1)%e;c.push([r[t],r[n],i[n],i[t]]),c.push([a[n],a[t],o[t],o[n]]),c.push([i[t],i[n],o[n],o[t]]),c.push([a[t],a[n],r[n],r[t]])}return F(n,c)}function Ar(e=1){let t=e>>>0||1,n=()=>(t=Math.imul(t^t>>>15,t|1)+1831565813>>>0,(t>>>8)/16777216),r=[],i=[];for(let e=0;e<5;e++){let t=e/5*Math.PI*2,a=.28+n()*.16;i.push(r.length),r.push([Math.cos(t)*a,0,Math.sin(t)*a])}let a=r.length;r.push([(n()-.5)*.2,.45+n()*.45,(n()-.5)*.2]);let o=[[...i].reverse()];for(let e=0;e<5;e++)o.push([i[e],i[(e+1)%5],a]);return F(r,o)}function jr(){return F([[-.5,-.5,-.5],[.5,-.5,-.5],[.5,-.5,.5],[-.5,-.5,.5],[0,.5,0]],[[0,3,2,1],[0,1,4],[1,2,4],[2,3,4],[3,0,4]])}function Mr(){return F([[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0]],[[0,1,2,3]])}function Nr(e,t,n=6){return F([[-n,0,-n],[e+n,0,-n],[e+n,0,t+n],[-n,0,t+n]],[[0,3,2,1]])}function Pr(e){return e.reduce((e,t)=>e+t.size,0)*4}var I=class{gl;layout;capacity;vertexCount;vao;geometryBuffer;instanceBuffer;stride;floatsPerInstance;data;count=0;constructor(e,t,n,r,i,a=n.vertexCount){this.gl=e,this.layout=r,this.capacity=i,this.vertexCount=a,this.stride=Pr(r),this.floatsPerInstance=this.stride/4,this.data=new Float32Array(i*this.floatsPerInstance);let o=e.createVertexArray(),s=e.createBuffer(),c=e.createBuffer();if(!o||!s||!c)throw Error(`не удалось создать буферы WebGL`);this.vao=o,this.geometryBuffer=s,this.instanceBuffer=c,e.bindVertexArray(o);let l=new Float32Array(n.vertexCount*9);for(let e=0;e<n.vertexCount;e++)l.set(n.positions.subarray(e*3,e*3+3),e*9),l.set(n.normals.subarray(e*3,e*3+3),e*9+3),l.set(n.edges.subarray(e*3,e*3+3),e*9+6);e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,l,e.STATIC_DRAW);let u=(n,r,i)=>{let a=t.attrib(n);a<0||(e.enableVertexAttribArray(a),e.vertexAttribPointer(a,r,e.FLOAT,!1,36,i))};u(`aPos`,3,0),u(`aNormal`,3,12),u(`aEdge`,3,24),e.bindBuffer(e.ARRAY_BUFFER,c),e.bufferData(e.ARRAY_BUFFER,this.data.byteLength,e.DYNAMIC_DRAW);let d=0;for(let n of r){let r=t.attrib(n.name);r>=0&&(e.enableVertexAttribArray(r),e.vertexAttribPointer(r,n.size,e.FLOAT,!1,this.stride,d),e.vertexAttribDivisor(r,1)),d+=n.size*4}e.bindVertexArray(null)}offsetOf(e){return e*this.floatsPerInstance}hasRoom(){return this.count<this.capacity}upload(){if(this.count===0)return;let{gl:e}=this;e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.data,0,this.count*this.floatsPerInstance)}draw(e=this.gl.TRIANGLES){if(this.count===0)return;let{gl:t}=this;t.bindVertexArray(this.vao),t.drawArraysInstanced(e,0,this.vertexCount,this.count),t.bindVertexArray(null)}dispose(){let{gl:e}=this;e.deleteVertexArray(this.vao),e.deleteBuffer(this.geometryBuffer),e.deleteBuffer(this.instanceBuffer)}get layoutSpec(){return this.layout}},Fr=[.5,.88,1],Ir=[.24,.26,.3],Lr=[.34,.33,.38];function Rr(e){return pe(e).stats.color}function zr(e){return l[e].color}function Br(e){return l[e].accent}function Vr(e){return l[e].scale}function Hr(e){return .78+e*.09}function Ur(e){return .85+(e-1)*.45}function Wr(e,t){return e&&t?[.72,1.05,1.05]:e?[.66,.86,1.25]:t?[.78,1.2,.72]:[1,1,1]}function Gr(e){return e>.5?[.35,1,.45]:e>.22?[1,.85,.25]:[1,.3,.25]}var Kr=-3.4,qr=.86,Jr=class{capacity;pool=[];rng;constructor(e=600,t=12648430){this.capacity=e,this.rng=m(t)}get count(){return this.pool.length}clear(){this.pool.length=0}burst(e,t,n,r,i){let{count:a,speed:o,lift:s=.5,size:c=.16,life:l=.8,spread:u=1}=i;for(let i=0;i<a;i++){this.pool.length>=this.capacity&&this.pool.shift();let i=_(this.rng,0,Math.PI*2),a=_(this.rng,-.4,1.1)*u,d=o*_(this.rng,.45,1.25),f=l*_(this.rng,.7,1.3);this.pool.push({x:e,y:t,z:n,vx:Math.cos(i)*Math.cos(a)*d,vy:(Math.sin(a)+s)*d,vz:Math.sin(i)*Math.cos(a)*d,r:r[0],g:r[1],b:r[2],size:c*_(this.rng,.6,1.5),life:f,maxLife:f})}}update(e){let t=qr**(e*60);for(let n=this.pool.length-1;n>=0;n--){let r=this.pool[n];if(r.life-=e,r.life<=0){this.pool[n]=this.pool[this.pool.length-1],this.pool.pop();continue}r.vy+=Kr*e,r.vx*=t,r.vz*=t,r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e,r.y<.02&&(r.y=.02,r.vy=Math.abs(r.vy)*.28)}}writeInto(e,t){let n=Math.min(this.pool.length,t);for(let t=0;t<n;t++){let n=this.pool[t],r=t*8;e[r]=n.x,e[r+1]=n.y,e[r+2]=n.z,e[r+3]=n.r,e[r+4]=n.g,e[r+5]=n.b,e[r+6]=n.size,e[r+7]=Math.max(0,n.life/n.maxLife)}return n}},Yr=class extends Error{stage;log;source;constructor(e,t,n){super(`${e} shader failed: ${t}`),this.stage=e,this.log=t,this.source=n,this.name=`ShaderCompileError`}};function Xr(e,t,n,r){let i=e.createShader(t);if(!i)throw new Yr(r,`createShader returned null`);if(e.shaderSource(i,n),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(i)??`unknown error`;throw e.deleteShader(i),new Yr(r,t,n)}return i}var L=class{gl;label;program;uniforms=new Map;attribs=new Map;constructor(e,t,n,r=`program`){this.gl=e,this.label=r;let i=Xr(e,e.VERTEX_SHADER,t,`vertex`),a=Xr(e,e.FRAGMENT_SHADER,n,`fragment`),o=e.createProgram();if(!o)throw new Yr(`link`,`createProgram returned null`);if(e.attachShader(o,i),e.attachShader(o,a),e.linkProgram(o),e.deleteShader(i),e.deleteShader(a),!e.getProgramParameter(o,e.LINK_STATUS)){let t=e.getProgramInfoLog(o)??`unknown error`;throw e.deleteProgram(o),new Yr(`link`,`${r}: ${t}`)}this.program=o;let s=e.getProgramParameter(o,e.ACTIVE_UNIFORMS);for(let t=0;t<s;t++){let n=e.getActiveUniform(o,t);if(!n)continue;let r=n.name.replace(/\[0\]$/,``);this.uniforms.set(r,e.getUniformLocation(o,n.name))}let c=e.getProgramParameter(o,e.ACTIVE_ATTRIBUTES);for(let t=0;t<c;t++){let n=e.getActiveAttrib(o,t);n&&this.attribs.set(n.name,e.getAttribLocation(o,n.name))}}use(){this.gl.useProgram(this.program)}loc(e){return this.uniforms.get(e)??null}attrib(e){return this.attribs.get(e)??-1}uniform1f(e,t){let n=this.loc(e);n&&this.gl.uniform1f(n,t)}uniform1i(e,t){let n=this.loc(e);n&&this.gl.uniform1i(n,t)}uniform2f(e,t,n){let r=this.loc(e);r&&this.gl.uniform2f(r,t,n)}uniform3f(e,t,n,r){let i=this.loc(e);i&&this.gl.uniform3f(i,t,n,r)}uniform4f(e,t,n,r,i){let a=this.loc(e);a&&this.gl.uniform4f(a,t,n,r,i)}uniformMatrix4fv(e,t){let n=this.loc(e);n&&this.gl.uniformMatrix4fv(n,!1,t)}dispose(){this.gl.deleteProgram(this.program)}},R=`precision highp float;
precision highp int;
`,z=`
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
`,Zr=`
mat3 rotateY(float a) {
  float s = sin(a);
  float c = cos(a);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}
`,Qr=`
mat3 rotateX(float a) {
  float s = sin(a);
  float c = cos(a);
  return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c);
}

mat3 rotateZ(float a) {
  float s = sin(a);
  float c = cos(a);
  return mat3(c, s, 0.0, -s, c, 0.0, 0.0, 0.0, 1.0);
}
`,$r=`
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
`,ei=`#version 300 es
${R}
out vec2 vUv;
void main() {
  vec2 pos = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = pos;
  gl_Position = vec4(pos * 2.0 - 1.0, 0.0, 1.0);
}
`,ti=`#version 300 es
${R}
out vec2 vUv;
void main() {
  vec2 pos = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = pos;
  gl_Position = vec4(pos * 2.0 - 1.0, 0.0, 1.0);
}
`,ni=`#version 300 es
${R}
${z}
${$r}

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
`,ri=`#version 300 es
${R}

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
`,ii=`#version 300 es
${R}
${z}

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
`,ai=`#version 300 es
${R}
${Zr}
${Qr}

in vec3 aPos;
in vec3 aNormal;
in vec3 aEdge;

in vec3 iOffset;
in vec3 iScale;
in vec3 iColor;
in vec4 iParams;   // x: glow, y: spin, z: flash, w: phase
in vec3 iTilt;     // x: наклон вперёд, y: наклон вбок, z: амплитуда покачивания

uniform mat4 uViewProj;
uniform float uTime;

out vec3 vWorld;
out vec3 vNormal;
out vec3 vEdge;
out vec3 vColor;
out vec4 vParams;

void main() {
  // Сначала наклоны в собственных осях детали, потом разворот всей башни.
  mat3 pose = rotateY(iParams.y) * rotateZ(iTilt.y) * rotateX(iTilt.x);
  vec3 local = pose * (aPos * iScale);
  // A slow bob keyed off the per-instance phase keeps identical models from
  // moving in lockstep with each other.
  float bob = sin(uTime * 1.6 + iParams.w) * iTilt.z * iScale.y;
  vec3 world = local + iOffset + vec3(0.0, bob, 0.0);

  vWorld = world;
  vNormal = normalize(pose * (aNormal / max(iScale, vec3(1e-4))));
  vEdge = aEdge;
  vColor = iColor;
  vParams = iParams;

  gl_Position = uViewProj * vec4(world, 1.0);
}
`,oi=`#version 300 es
${R}
${z}

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
`,si=`#version 300 es
${R}

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
`,ci=`#version 300 es
${R}
${z}

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
`,li=`#version 300 es
${R}

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
`,ui=`#version 300 es
${R}
${z}

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
`,di=`#version 300 es
${R}

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
`,fi=`#version 300 es
${R}

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
`,pi=ei,mi=`#version 300 es
${R}

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
`,hi=`#version 300 es
${R}

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
`,gi=`#version 300 es
${R}
${z}
${$r}

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
`;function _i(e,t,n,r,i){let a=e.createTexture(),o=e.createFramebuffer();if(!a||!o)throw Error(`не удалось создать кадровый буфер`);e.bindTexture(e.TEXTURE_2D,a);let s=r?e.RGBA16F:e.RGBA8,c=r?e.HALF_FLOAT:e.UNSIGNED_BYTE;e.texImage2D(e.TEXTURE_2D,0,s,t,n,0,e.RGBA,c,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,a,0);let l;if(i){let r=e.createRenderbuffer();if(!r)throw Error(`не удалось создать буфер глубины`);e.bindRenderbuffer(e.RENDERBUFFER,r),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,t,n),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,r),l=r}return e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindTexture(e.TEXTURE_2D,null),{fbo:o,texture:a,width:t,height:n,depth:l}}var vi={threshold:1.1,softKnee:.5,strength:.6,aberration:.5,vignette:.55,grain:.035},yi=class{gl;halfFloat;scene;bright;blurA;blurB;wideA;wideB;brightProgram;blurProgram;compositeProgram;emptyVao;width=0;height=0;settings={...vi};flash=0;flashColor=[1,.3,.35];constructor(e,t,n,r){this.gl=e,this.halfFloat=t,this.brightProgram=new L(e,pi,mi,`bright`),this.blurProgram=new L(e,pi,hi,`blur`),this.compositeProgram=new L(e,pi,gi,`composite`);let i=e.createVertexArray();if(!i)throw Error(`не удалось создать VAO`);this.emptyVao=i,this.resize(n,r)}resize(e,t){let n=Math.max(2,e),r=Math.max(2,t);if(n===this.width&&r===this.height)return;this.dispose(!1),this.width=n,this.height=r;let i={w:Math.max(2,n>>1),h:Math.max(2,r>>1)},a={w:Math.max(2,n>>2),h:Math.max(2,r>>2)};this.scene=_i(this.gl,n,r,this.halfFloat,!0),this.bright=_i(this.gl,i.w,i.h,this.halfFloat,!1),this.blurA=_i(this.gl,i.w,i.h,this.halfFloat,!1),this.blurB=_i(this.gl,i.w,i.h,this.halfFloat,!1),this.wideA=_i(this.gl,a.w,a.h,this.halfFloat,!1),this.wideB=_i(this.gl,a.w,a.h,this.halfFloat,!1)}beginScene(){let{gl:e}=this;e.bindFramebuffer(e.FRAMEBUFFER,this.scene.fbo),e.viewport(0,0,this.scene.width,this.scene.height)}blit(e,t){let{gl:n}=this;n.bindFramebuffer(n.FRAMEBUFFER,e?e.fbo:null),n.viewport(0,0,e?e.width:this.width,e?e.height:this.height),t.use(),n.bindVertexArray(this.emptyVao),n.drawArrays(n.TRIANGLES,0,3),n.bindVertexArray(null)}bind(e,t){let{gl:n}=this;n.activeTexture(n.TEXTURE0+e),n.bindTexture(n.TEXTURE_2D,t)}blurInto(e,t,n){this.blurProgram.use(),this.bind(0,e.texture),this.blurProgram.uniform1i(`uSource`,0),this.blurProgram.uniform2f(`uDirection`,1/e.width,0),this.blit(t,this.blurProgram),this.bind(0,t.texture),this.blurProgram.uniform1i(`uSource`,0),this.blurProgram.uniform2f(`uDirection`,0,1/t.height),this.blit(n,this.blurProgram)}present(e){let{gl:t}=this;t.disable(t.DEPTH_TEST),t.disable(t.BLEND),this.brightProgram.use(),this.bind(0,this.scene.texture),this.brightProgram.uniform1i(`uScene`,0),this.brightProgram.uniform1f(`uThreshold`,this.settings.threshold),this.brightProgram.uniform1f(`uSoftKnee`,this.settings.softKnee),this.blit(this.bright,this.brightProgram),this.blurInto(this.bright,this.blurB,this.blurA),this.blurInto(this.blurA,this.wideB,this.wideA),this.compositeProgram.use(),this.bind(0,this.scene.texture),this.bind(1,this.blurA.texture),this.bind(2,this.wideA.texture),this.compositeProgram.uniform1i(`uScene`,0),this.compositeProgram.uniform1i(`uBloom`,1),this.compositeProgram.uniform1i(`uBloomWide`,2),this.compositeProgram.uniform1f(`uBloomStrength`,this.settings.strength),this.compositeProgram.uniform1f(`uAberration`,this.settings.aberration),this.compositeProgram.uniform1f(`uVignette`,this.settings.vignette),this.compositeProgram.uniform1f(`uGrain`,this.settings.grain),this.compositeProgram.uniform1f(`uTime`,e),this.compositeProgram.uniform1f(`uFlash`,this.flash),this.compositeProgram.uniform3f(`uFlashColor`,this.flashColor[0],this.flashColor[1],this.flashColor[2]),this.blit(null,this.compositeProgram),this.bind(0,this.scene.texture)}dispose(e=!0){let{gl:t}=this;for(let e of[this.scene,this.bright,this.blurA,this.blurB,this.wideA,this.wideB]){if(!e)continue;t.deleteFramebuffer(e.fbo),t.deleteTexture(e.texture);let n=e.depth;n&&t.deleteRenderbuffer(n)}e&&(this.brightProgram.dispose(),this.blurProgram.dispose(),this.compositeProgram.dispose(),t.deleteVertexArray(this.emptyVao))}};function bi(e,t){let n=Math.max(2,Math.round(e.width*8)),r=Math.max(2,Math.round(e.height*8)),i=new Uint8Array(n*r);for(let a=0;a<r;a++){let o=(a+.5)/r*e.height;for(let r=0;r<n;r++){let s=(r+.5)/n*e.width,c=Math.min(et(t,D(s,o)),4);i[a*n+r]=Math.round(c/4*255)}}return{data:i,width:n,height:r}}function xi(e,t){let n=it(e,t),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n[e]?255:0;return{data:r,width:e.width,height:e.height}}function Si(e,t,n={}){let r=e.createTexture();if(!r)throw Error(`не удалось создать текстуру`);let i=n.smooth?e.LINEAR:e.NEAREST;return e.bindTexture(e.TEXTURE_2D,r),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,e.R8,t.width,t.height,0,e.RED,e.UNSIGNED_BYTE,t.data),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindTexture(e.TEXTURE_2D,null),r}var Ci=0;function B(e=.68,t=.13){return{shape:`drum`,pos:[0,t*.5,0],size:[e,t,e],stone:Ci}}function V(e,t,n=0){return Array.from({length:e},(r,i)=>t(n+i/e*Math.PI*2,i))}var wi={spark:[B(.7),{shape:`drum`,pos:[0,.3,0],size:[.5,.26,.5],stone:.15},{shape:`ball`,pos:[0,.56,0],size:[.34,.4,.34],glow:1.6,float:!0},{shape:`spike`,pos:[0,.82,0],size:[.18,.3,.18],glow:1.2,float:!0}],frostbud:[B(.62,.1),{shape:`spike`,pos:[0,.52,0],size:[.26,.86,.26],stone:.9,glow:.5},{shape:`spike`,pos:[-.19,.36,.11],size:[.19,.56,.19],roll:.28,stone:.85,glow:.4},{shape:`spike`,pos:[.18,.3,-.12],size:[.17,.44,.17],roll:-.34,stone:.85,glow:.4}],coil:[B(.6,.12),{shape:`drum`,pos:[0,.46,0],size:[.13,.72,.13],stone:.25},{shape:`ring`,pos:[0,.32,0],size:[.5,.07,.5],glow:1,spin:1.1},{shape:`ring`,pos:[0,.54,0],size:[.4,.06,.4],glow:1.1,spin:-1.5},{shape:`ball`,pos:[0,.84,0],size:[.22,.22,.22],glow:1.8}],thorn:[B(.66,.16),...V(5,(e,t)=>({shape:`spike`,pos:[Math.cos(e)*.19,.34+t%2*.14,Math.sin(e)*.19],size:[.14,.52+t%2*.18,.14],pitch:Math.sin(e)*.5,roll:-Math.cos(e)*.5,stone:.8,glow:.55}))],sigil:[{shape:`ring`,pos:[0,.04,0],size:[.74,.08,.74],stone:.1,spin:.25},{shape:`octa`,pos:[0,.52,0],size:[.42,.56,.42],glow:1.5,spin:.7,float:!0},...V(3,e=>({shape:`tetra`,pos:[Math.cos(e)*.3,.3,Math.sin(e)*.3],size:[.14,.14,.14],glow:1.2,spin:-.9,float:!0}))],cairn:[B(.66,.12),{shape:`drum`,pos:[0,.26,0],size:[.5,.2,.5],stone:.35,roll:.06},{shape:`drum`,pos:[.03,.44,-.02],size:[.36,.17,.36],stone:.5,roll:-.09},{shape:`drum`,pos:[-.02,.59,.02],size:[.24,.14,.24],stone:.7,roll:.12},{shape:`ball`,pos:[0,.76,0],size:[.2,.2,.2],glow:1.3}],emberglass:[B(.66,.11),{shape:`cube`,pos:[-.26,.4,0],size:[.1,.66,.14],stone:.2},{shape:`cube`,pos:[.26,.4,0],size:[.1,.66,.14],stone:.2},{shape:`drum`,pos:[0,.56,0],size:[.46,.1,.46],pitch:1.35,glow:1.5},{shape:`ball`,pos:[0,.2,0],size:[.16,.16,.16],glow:1}],brine:[{shape:`ring`,pos:[0,.12,0],size:[.76,.24,.76],stone:.15},{shape:`drum`,pos:[0,.16,0],size:[.46,.06,.46],glow:1.1},{shape:`spike`,pos:[-.2,.46,.14],size:[.14,.58,.14],roll:.34,stone:.9,glow:.5},{shape:`spike`,pos:[.22,.38,-.13],size:[.12,.46,.12],roll:-.4,stone:.9,glow:.5},{shape:`ball`,pos:[0,.5,0],size:[.3,.16,.3],glow:.9,float:!0},{shape:`octa`,pos:[0,.74,0],size:[.24,.3,.24],glow:1.4,spin:.5,float:!0}],veil:[B(.64,.1),{shape:`cube`,pos:[-.17,.46,.04],size:[.09,.76,.3],roll:.14,stone:.55},{shape:`cube`,pos:[.17,.4,-.04],size:[.09,.64,.28],roll:-.16,stone:.55},{shape:`octa`,pos:[0,.5,0],size:[.26,.34,.26],glow:1.4,spin:-.6,float:!0}],bramble:[B(.66,.15),...V(4,(e,t)=>({shape:`spike`,pos:[Math.cos(e)*.2,.42,Math.sin(e)*.2],size:[.13,.58,.13],pitch:Math.sin(e)*.62,roll:-Math.cos(e)*.62,stone:.7,glow:.4+t%2*.2})),...V(3,e=>({shape:`ball`,pos:[Math.cos(e)*.26,.66,Math.sin(e)*.26],size:[.16,.16,.16],glow:1.5,float:!0}),.6)],forge:[B(.78,.12),{shape:`cube`,pos:[0,.36,0],size:[.62,.44,.58],stone:.2},{shape:`cube`,pos:[0,.34,.3],size:[.3,.26,.06],glow:1.7},{shape:`drum`,pos:[-.18,.72,-.12],size:[.18,.34,.18],stone:.3},{shape:`ball`,pos:[-.18,.94,-.12],size:[.18,.18,.18],glow:1.2,float:!0},{shape:`cube`,pos:[.22,.68,.06],size:[.26,.12,.2],roll:-.2,stone:.4}],glacier:[B(.76,.1),{shape:`cube`,pos:[-.08,.32,.04],size:[.56,.4,.44],roll:.16,stone:.75,glow:.4},{shape:`spike`,pos:[.1,.66,-.06],size:[.4,.66,.36],roll:-.2,stone:.9,glow:.6},{shape:`spike`,pos:[-.24,.5,-.18],size:[.2,.42,.2],roll:.4,stone:.9,glow:.5}],tesla:[B(.64,.14),{shape:`drum`,pos:[0,.5,0],size:[.16,.82,.16],stone:.25},{shape:`ring`,pos:[0,.4,0],size:[.46,.06,.46],glow:1.1,spin:1.6},{shape:`ring`,pos:[0,.62,0],size:[.36,.06,.36],glow:1.2,spin:-2},{shape:`ball`,pos:[0,1,0],size:[.36,.36,.36],glow:2}],bloom:[B(.6,.1),{shape:`drum`,pos:[0,.38,0],size:[.12,.6,.12],stone:.35},...V(6,e=>({shape:`spike`,pos:[Math.cos(e)*.26,.72,Math.sin(e)*.26],size:[.24,.34,.14],pitch:Math.sin(e)*1.1,roll:-Math.cos(e)*1.1,glow:.8})),{shape:`ball`,pos:[0,.8,0],size:[.26,.24,.26],glow:1.8}],prism:[{shape:`ring`,pos:[0,.05,0],size:[.72,.1,.72],stone:.1,spin:.3},{shape:`octa`,pos:[0,.62,0],size:[.48,.78,.48],glow:1.6,spin:.55,float:!0},...V(3,e=>({shape:`octa`,pos:[Math.cos(e)*.32,.34,Math.sin(e)*.32],size:[.16,.24,.16],glow:1.3,spin:-1.1,float:!0}))],eclipse:[B(.6,.12),{shape:`ring`,pos:[0,.62,0],size:[.86,.1,.86],pitch:1.5708,glow:1.3},{shape:`ball`,pos:[0,.62,0],size:[.4,.4,.4],stone:.25,glow:.2},{shape:`drum`,pos:[0,.3,0],size:[.18,.36,.18],stone:.3}],beacon:[B(.72,.12),{shape:`drum`,pos:[0,.34,0],size:[.46,.44,.46],stone:.2},{shape:`drum`,pos:[0,.68,0],size:[.34,.28,.34],stone:.3},{shape:`ring`,pos:[0,.84,0],size:[.4,.06,.4],stone:.4},{shape:`drum`,pos:[0,.95,0],size:[.3,.22,.3],glow:1.9},{shape:`spike`,pos:[0,1.14,0],size:[.24,.2,.24],stone:.4}],sunspire:[B(.74,.14),{shape:`drum`,pos:[0,.5,0],size:[.24,.74,.24],stone:.25},{shape:`ring`,pos:[0,.74,0],size:[.56,.07,.56],glow:1.2,spin:.8},{shape:`ball`,pos:[0,1.06,0],size:[.46,.46,.46],glow:2.2},...V(4,e=>({shape:`spike`,pos:[Math.cos(e)*.3,1.06,Math.sin(e)*.3],size:[.12,.3,.12],pitch:Math.sin(e)*1.5708,roll:-Math.cos(e)*1.5708,glow:1.6}))],permafrost:[B(.82,.12),{shape:`cube`,pos:[0,.3,0],size:[.66,.36,.62],stone:.6,glow:.35},{shape:`cube`,pos:[-.06,.58,.04],size:[.5,.28,.46],roll:.1,stone:.75,glow:.45},{shape:`spike`,pos:[0,.94,0],size:[.28,.54,.28],stone:.95,glow:.7},{shape:`spike`,pos:[-.26,.76,-.2],size:[.16,.36,.16],roll:.34,stone:.95,glow:.6},{shape:`spike`,pos:[.26,.72,.2],size:[.15,.3,.15],roll:-.38,stone:.95,glow:.6}],stormcrown:[B(.72,.12),{shape:`drum`,pos:[0,.36,0],size:[.34,.42,.34],stone:.3},{shape:`ring`,pos:[0,.66,0],size:[.7,.12,.7],stone:.45,glow:.5},...V(5,e=>({shape:`spike`,pos:[Math.cos(e)*.3,.92,Math.sin(e)*.3],size:[.14,.5,.14],pitch:Math.sin(e)*.22,roll:-Math.cos(e)*.22,glow:1.5})),{shape:`ball`,pos:[0,.86,0],size:[.32,.32,.32],glow:2.1,float:!0}],voidwell:[{shape:`ring`,pos:[0,.1,0],size:[.92,.2,.92],stone:.2,spin:-.2},{shape:`ball`,pos:[0,.18,0],size:[.54,.34,.54],stone:.15,glow:.25},{shape:`octa`,pos:[0,.68,0],size:[.34,.62,.34],glow:1.9,spin:.9,float:!0},{shape:`octa`,pos:[0,1.06,0],size:[.2,.36,.2],glow:2.2,spin:-1.4,float:!0},...V(4,e=>({shape:`spike`,pos:[Math.cos(e)*.38,.5,Math.sin(e)*.38],size:[.12,.66,.12],pitch:-Math.sin(e)*.5,roll:Math.cos(e)*.5,stone:.4,glow:.6}))],heartwood:[B(.8,.14),{shape:`drum`,pos:[0,.4,0],size:[.3,.56,.3],stone:.35},...V(3,e=>({shape:`drum`,pos:[Math.cos(e)*.22,.66,Math.sin(e)*.22],size:[.13,.4,.13],pitch:Math.sin(e)*.6,roll:-Math.cos(e)*.6,stone:.4})),{shape:`ball`,pos:[0,.95,0],size:[.6,.44,.6],glow:1.5,float:!0},...V(3,e=>({shape:`ball`,pos:[Math.cos(e)*.3,.86,Math.sin(e)*.3],size:[.2,.18,.2],glow:1.1,float:!0}),.9)],"shard-ruby":Ti(),"shard-sapphire":Ti(),"shard-topaz":Ti(),"shard-emerald":Ti(),"shard-amethyst":Ti(),"shard-onyx":Ti()};function Ti(){return[{shape:`drum`,pos:[0,.04,0],size:[.46,.08,.46],stone:.1},{shape:`gemstone`,pos:[0,.26,0],size:[.34,.44,.34],glow:1.3}]}function Ei(e){let t=0;for(let n of wi[e])t=Math.max(t,n.pos[1]+n.size[1]*.5);return t}function Di(e){let t={cube:0,ball:0,spike:0,octa:0,tetra:0,drum:0,ring:0,gemstone:0};for(let n of wi[e])t[n.shape]+=1;return t}var Oi=(()=>{let e={cube:0,ball:0,spike:0,octa:0,tetra:0,drum:0,ring:0,gemstone:0};for(let t of Object.keys(wi)){let n=Di(t);for(let t of Object.keys(e))e[t]=Math.max(e[t],n[t])}return e})(),ki=.6,Ai={low:{resolutionScale:.7,bloom:!1,particles:140,grain:0,aberration:0},medium:{resolutionScale:.86,bloom:!0,particles:380,grain:.022,aberration:.3},high:{resolutionScale:1,bloom:!0,particles:700,grain:.03,aberration:.45}},H=[{name:`iOffset`,size:3},{name:`iScale`,size:3},{name:`iColor`,size:3},{name:`iParams`,size:4},{name:`iTilt`,size:3}],ji=[{name:`iOrigin`,size:3},{name:`iLocal`,size:3},{name:`iSize`,size:3},{name:`iColor`,size:3},{name:`iMotion`,size:4},{name:`iExtra`,size:4}],Mi=[{name:`iFrom`,size:3},{name:`iTo`,size:3},{name:`iColor`,size:3},{name:`iParams`,size:4}],Ni=[{name:`iPos`,size:3},{name:`iColor`,size:3},{name:`iParams`,size:2}],Pi=120,Fi=80,Ii=520,Li={box:460,ball:340,wedge:220},Ri={beam:0,arc:1,trail:2,health:3},zi=class{camera;particles;gl;glctx;skyProgram;groundProgram;solidProgram;creatureProgram;beamProgram;particleProgram;post;emptyVao;partMeshes;partMeshesSolid;sceneryMesh;coreMesh;beamMesh;particleMesh;groundMesh=null;pathFieldTex=null;buildMaskTex=null;mapId=``;board=D(1,1);quality=`high`;profile=Ai.high;theme=In(Pn);lastTime=0;needsFraming=!1;constructor(e,t=new dr){this.camera=t,this.glctx=e,this.gl=e.gl;let n=this.gl;this.skyProgram=new L(n,ti,ni,`sky`),this.groundProgram=new L(n,ri,ii,`ground`),this.solidProgram=new L(n,ai,oi,`solid`),this.creatureProgram=new L(n,si,ci,`creature`),this.beamProgram=new L(n,li,ui,`beam`),this.particleProgram=new L(n,di,fi,`particle`);let r=n.createVertexArray();if(!r)throw Error(`не удалось создать VAO`);this.emptyVao=r,this.partMeshes={box:new I(n,this.creatureProgram,Tr(1),ji,Li.box),ball:new I(n,this.creatureProgram,Er(.5),ji,Li.ball),wedge:new I(n,this.creatureProgram,jr(),ji,Li.wedge)};let i=(e,t=0)=>Pi*(Oi[e]+t);this.partMeshesSolid={cube:new I(n,this.solidProgram,Tr(1),H,i(`cube`)),ball:new I(n,this.solidProgram,Er(.5),H,i(`ball`,5)),spike:new I(n,this.solidProgram,jr(),H,i(`spike`)),octa:new I(n,this.solidProgram,Cr(.5),H,i(`octa`)),tetra:new I(n,this.solidProgram,wr(.5),H,i(`tetra`)),drum:new I(n,this.solidProgram,Or(8),H,i(`drum`)),ring:new I(n,this.solidProgram,kr(12,.58),H,i(`ring`)),gemstone:new I(n,this.solidProgram,Dr(6),H,i(`gemstone`))},this.sceneryMesh=new I(n,this.solidProgram,Ar(11),H,Fi),this.coreMesh=new I(n,this.solidProgram,Er(.5),H,8),this.beamMesh=new I(n,this.beamProgram,Mr(),Mi,Ii),this.particleMesh=new I(n,this.particleProgram,Mr(),Ni,Ai.high.particles),this.particles=new Jr(Ai.high.particles),this.post=new yi(n,e.caps.halfFloatColor,e.canvas.width,e.canvas.height)}setQuality(e){this.quality=e,this.profile=Ai[e],this.applyPost()}getQuality(){return this.quality}setTheme(e){this.theme=In(e),this.applyPost()}getTheme(){return this.theme.id}applyPost(){let{post:e}=this.theme;this.post.settings.threshold=e.threshold,this.post.settings.strength=this.profile.bloom?ki*e.bloom:0,this.post.settings.grain=this.profile.grain*e.grain,this.post.settings.aberration=this.profile.aberration,this.post.settings.vignette=e.vignette}setMap(e,t={}){if(this.mapId===e.map.id)return;let n=this.gl;this.mapId=e.map.id,this.board=D(e.map.width,e.map.height),this.groundMesh?.dispose(),this.groundMesh=new I(n,this.groundProgram,Nr(e.map.width,e.map.height),[{name:`iOffset`,size:3}],1),this.groundMesh.count=1,this.groundMesh.data.fill(0),this.groundMesh.upload(),this.pathFieldTex&&n.deleteTexture(this.pathFieldTex),this.buildMaskTex&&n.deleteTexture(this.buildMaskTex),this.pathFieldTex=Si(n,bi(e.map,e.path),{smooth:!0}),this.buildMaskTex=Si(n,xi(e.map,e.path),{smooth:!1}),(t.frame??!0)&&(this.camera.target=D(e.map.width/2,e.map.height/2),this.needsFraming=!0),this.particles.clear()}emit(e){switch(e.type){case`kill`:this.particles.burst(e.x,.4,e.y,e.color,{count:Math.min(20,7+Math.floor(e.bounty/6)),speed:2.6,life:.65,size:.14});break;case`impact`:this.particles.burst(e.x,.35,e.y,e.color,{count:e.splash>0?16:6,speed:e.splash>0?3.2:1.8,life:.35,size:e.splash>0?.18:.1});break;case`leak`:this.particles.burst(e.x,.5,e.y,[1,.25,.3],{count:26,speed:3.4,life:.9,size:.2}),this.post.flash=Math.min(.55,this.post.flash+.26*e.damage),this.post.flashColor=[1,.22,.28];break;case`craft`:this.particles.burst(e.x,.3,e.y,Rr(e.kind),{count:e.firstTime?44:26,speed:2.4,life:.8,size:.14,lift:1.3}),e.firstTime&&(this.post.flash=Math.min(.42,this.post.flash+.22),this.post.flashColor=[.9,.85,1]);break;case`upgrade`:this.particles.burst(e.x,.6,e.y,Rr(e.kind),{count:34,speed:2.8,life:.85,size:.15,lift:1.5});break;case`sell`:this.particles.burst(e.x,.3,e.y,[.6,.65,.8],{count:14,speed:1.8,life:.5,size:.1});break;case`waveClear`:this.post.flash=Math.min(.36,this.post.flash+.16),this.post.flashColor=[.35,.95,.8];break;case`won`:this.post.flash=.7,this.post.flashColor=[.85,1,.95];break;case`lost`:this.post.flash=.7,this.post.flashColor=[1,.2,.25]}}pick(e,t){return this.camera.screenToGround(e,t)}render(e){let t=this.gl,n=this.lastTime===0?1/60:Math.min(.1,e.time-this.lastTime);this.lastTime=e.time,vr(this.glctx,this.profile.resolutionScale)&&this.post.resize(this.glctx.canvas.width,this.glctx.canvas.height);let r=this.glctx.canvas.width,i=this.glctx.canvas.height;this.particles.update(n),this.post.flash=Math.max(0,this.post.flash-n*1.6);let a=r/Math.max(i,1);this.needsFraming&&=(this.camera.frame(this.board.x,this.board.y,a),!1),this.camera.clampTarget(this.board.x,this.board.y),this.camera.update(a);let o=this.camera.eye();this.post.beginScene(),t.viewport(0,0,r,i),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.disable(t.BLEND),t.enable(t.CULL_FACE),t.cullFace(t.BACK),t.disable(t.DEPTH_TEST),t.depthMask(!1),this.skyProgram.use(),this.skyProgram.uniform1f(`uTime`,e.time),this.skyProgram.uniform2f(`uResolution`,r,i),this.skyProgram.uniform2f(`uCamera`,this.camera.yaw,this.camera.pitch);let s=this.theme.sky;this.skyProgram.uniform3f(`uTint`,s.tint[0],s.tint[1],s.tint[2]),this.skyProgram.uniform3f(`uZenith`,s.zenith[0],s.zenith[1],s.zenith[2]),this.skyProgram.uniform3f(`uHorizon`,s.horizon[0],s.horizon[1],s.horizon[2]),this.skyProgram.uniform3f(`uGlow`,s.glow[0],s.glow[1],s.glow[2]),this.skyProgram.uniform3f(`uNebula`,s.nebula[0],s.nebula[1],s.nebula[2]),this.skyProgram.uniform1f(`uStars`,s.stars),t.bindVertexArray(this.emptyVao),t.drawArrays(t.TRIANGLES,0,3),t.bindVertexArray(null),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.depthMask(!0),this.drawGround(e,o),this.drawTowers(e,o),this.drawCreatures(e,o),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE),t.depthMask(!1),t.disable(t.CULL_FACE),this.drawBeams(e),this.drawParticles(),t.depthMask(!0),t.disable(t.BLEND),t.enable(t.CULL_FACE),this.post.present(e.time)}drawGround(e,t){let n=this.gl;if(!this.groundMesh||!this.pathFieldTex||!this.buildMaskTex)return;this.groundProgram.use(),this.groundProgram.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),this.groundProgram.uniform1f(`uTime`,e.time),this.groundProgram.uniform2f(`uBoard`,this.board.x,this.board.y),this.groundProgram.uniform3f(`uEye`,t.x,t.y,t.z),this.groundProgram.uniform1f(`uPathFieldRange`,4);let r=this.theme.ground;this.groundProgram.uniform3f(`uAccent`,r.accent[0],r.accent[1],r.accent[2]),this.groundProgram.uniform3f(`uGrassLow`,r.grassLow[0],r.grassLow[1],r.grassLow[2]),this.groundProgram.uniform3f(`uGrassHigh`,r.grassHigh[0],r.grassHigh[1],r.grassHigh[2]),this.groundProgram.uniform3f(`uTuft`,r.tuft[0],r.tuft[1],r.tuft[2]),this.groundProgram.uniform3f(`uRoadLow`,r.roadLow[0],r.roadLow[1],r.roadLow[2]),this.groundProgram.uniform3f(`uRoadHigh`,r.roadHigh[0],r.roadHigh[1],r.roadHigh[2]),this.groundProgram.uniform3f(`uKerb`,r.kerb[0],r.kerb[1],r.kerb[2]),this.groundProgram.uniform3f(`uFlow`,r.flow[0],r.flow[1],r.flow[2]),this.groundProgram.uniform3f(`uSun`,r.sun[0],r.sun[1],r.sun[2]),this.groundProgram.uniform3f(`uVoid`,r.void[0],r.void[1],r.void[2]),this.groundProgram.uniform1f(`uAmbient`,r.ambient),e.hoverCell?this.groundProgram.uniform3f(`uCursor`,e.hoverCell.x,e.hoverCell.y,+!!e.hoverValid):this.groundProgram.uniform3f(`uCursor`,0,0,-1);let i=this.rangePreview(e);this.groundProgram.uniform4f(`uRange`,i.x,i.y,i.radius,+!!i.on),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.pathFieldTex),this.groundProgram.uniform1i(`uPathField`,0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,this.buildMaskTex),this.groundProgram.uniform1i(`uBuildMask`,1),this.groundMesh.draw()}rangePreview(e){let t=e.selectedTowerId?e.state.towers.find(t=>t.id===e.selectedTowerId):void 0;if(t){let e=O(t.cell.x,t.cell.y);return{x:e.x,y:e.y,radius:Ce(pe(t.kind),t.level),on:!0}}return e.placing&&e.hoverCell?{x:e.hoverCell.x+.5,y:e.hoverCell.y+.5,radius:pe(e.placing).stats.range,on:!0}:{x:0,y:0,radius:0,on:!1}}drawTowers(e,t){let{state:n,ctx:r}=e;this.solidProgram.use(),this.solidProgram.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),this.solidProgram.uniform3f(`uEye`,t.x,t.y,t.z),this.solidProgram.uniform1f(`uTime`,e.time),this.sceneryMesh.count=0;for(let[e,t]of r.map.blocked){if(!this.sceneryMesh.hasRoom())break;let n=this.sceneryMesh.offsetOf(this.sceneryMesh.count++),r=this.sceneryMesh.data;r[n]=e+.5,r[n+1]=0,r[n+2]=t+.5,r[n+3]=r[n+4]=r[n+5]=.95,r[n+6]=Ir[0],r[n+7]=Ir[1],r[n+8]=Ir[2],r[n+9]=.05,r[n+10]=(e*7+t*13)%6.28,r[n+11]=0,r[n+12]=e*1.7+t}this.sceneryMesh.upload(),this.sceneryMesh.draw();let i=r.path.points[r.path.points.length-1],a=1-n.lives/Math.max(1,n.lives+n.leaked);this.coreMesh.count=1;{let t=this.coreMesh.data;t[0]=i.x,t[1]=.75,t[2]=i.y,t[3]=t[4]=t[5]=1.5,t[6]=Fr[0],t[7]=Fr[1]*(1-a*.6),t[8]=Fr[2]*(1-a*.4),t[9]=1.2,t[10]=e.time*.4,t[11]=0,t[12]=0}this.coreMesh.upload(),this.coreMesh.draw();for(let e of Object.values(this.partMeshesSolid))e.count=0;for(let t of n.towers){let n=O(t.cell.x,t.cell.y),r=Rr(t.kind),i=Hr(t.level),a=e.selectedTowerId===t.id,o=Ur(t.level)*(a?1.5:1);for(let s of wi[t.kind]){let c=this.partMeshesSolid[s.shape];if(!c.hasRoom())continue;let l=c.offsetOf(c.count++),u=c.data,d=s.stone??1,f=Math.cos(t.facing),p=Math.sin(t.facing),[m,h,g]=s.pos;u[l]=n.x+(m*f+g*p)*i,u[l+1]=h*i,u[l+2]=n.y+(g*f-m*p)*i,u[l+3]=s.size[0]*i,u[l+4]=s.size[1]*i,u[l+5]=s.size[2]*i,u[l+6]=Lr[0]+(r[0]-Lr[0])*d,u[l+7]=Lr[1]+(r[1]-Lr[1])*d,u[l+8]=Lr[2]+(r[2]-Lr[2])*d,u[l+9]=(s.glow??0)*o,u[l+10]=s.spin?e.time*s.spin*Math.PI*2+t.id:t.facing,u[l+11]=a?.12+.08*Math.sin(e.time*7):0,u[l+12]=t.id*1.7+h*3,u[l+13]=s.pitch??0,u[l+14]=s.roll??0,u[l+15]=s.float?.06:0}let s=Ei(t.kind)*i+.16;for(let a=1;a<t.level;a++){let c=e.time*1.2+a/Math.max(1,t.level-1)*Math.PI*2+t.id;this.pushGem(n.x+Math.cos(c)*.3*i,s,n.y+Math.sin(c)*.3*i,.12*i,r,o,c*2,t.id+a)}}for(let e of Object.values(this.partMeshesSolid))e.upload(),e.draw()}pushGem(e,t,n,r,i,a,o,s){let c=this.partMeshesSolid.ball;if(!c.hasRoom())return;let l=c.offsetOf(c.count++),u=c.data;u[l]=e,u[l+1]=t,u[l+2]=n,u[l+3]=u[l+4]=u[l+5]=r,u[l+6]=i[0],u[l+7]=i[1],u[l+8]=i[2],u[l+9]=a,u[l+10]=o,u[l+11]=0,u[l+12]=s,u[l+13]=0,u[l+14]=0,u[l+15]=.035}drawCreatures(e,t){let{state:n,ctx:r}=e;for(let e of Object.values(this.partMeshes))e.count=0;for(let t of n.enemies){let n=l[t.kind],i=br[n.plan],a=zt(r,t,e.alpha),o=$e(r.path,t.dist),s=Math.atan2(o.x,o.y),c=Math.max(0,Math.min(1,t.hp/t.maxHp)),u=Wr(t.slowFor>0,t.dotFor>0),d=.55+.45*c,f=zr(t.kind),p=Br(t.kind),m=Vr(t.kind),h=t.phase,g=yr[n.gait],_=Bt(t);for(let e of i){let n=this.partMeshes[e.shape];if(!n.hasRoom())continue;let r=e.accent>.5?p:f,i=n.offsetOf(n.count++),o=n.data;o[i]=a.x,o[i+1]=_,o[i+2]=a.y,o[i+3]=e.pos[0],o[i+4]=e.pos[1],o[i+5]=e.pos[2],o[i+6]=e.size[0],o[i+7]=e.size[1],o[i+8]=e.size[2],o[i+9]=r[0]*u[0],o[i+10]=r[1]*u[1],o[i+11]=r[2]*u[2],o[i+12]=h,o[i+13]=g,o[i+14]=e.role,o[i+15]=e.phase+t.wobble*.04,o[i+16]=m,o[i+17]=t.flash,o[i+18]=s,o[i+19]=d}}this.creatureProgram.use(),this.creatureProgram.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),this.creatureProgram.uniform3f(`uEye`,t.x,t.y,t.z),this.creatureProgram.uniform1f(`uTime`,e.time);for(let e of Object.values(this.partMeshes))e.upload(),e.draw()}pushBeam(e,t,n,r,i,a,o,s,c){let l=this.beamMesh;if(!l.hasRoom())return;let u=l.offsetOf(l.count++),d=l.data;d[u]=e.x,d[u+1]=t,d[u+2]=e.y,d[u+3]=n.x,d[u+4]=r,d[u+5]=n.y,d[u+6]=i[0],d[u+7]=i[1],d[u+8]=i[2],d[u+9]=a,d[u+10]=o,d[u+11]=s,d[u+12]=c}drawBeams(e){let{state:t,ctx:n}=e,r=this.beamMesh;r.count=0;for(let e of t.beams){let t=Math.max(0,e.life/e.maxLife);for(let n=0;n+1<e.points.length;n++){let r=n===0?.72:.45;this.pushBeam(e.points[n],r,e.points[n+1],.45,e.color,e.width*(.7+.5*t),1.8+2.2*t,6,e.style===`arc`?Ri.arc:Ri.beam)}}for(let e of t.projectiles){let t=Math.min(1,e.t),n=Math.max(0,t-.3),r=Bi(e.from,e.aim,t),i=Bi(e.from,e.aim,n),a=.7+e.arc*Vi(t),o=.7+e.arc*Vi(n);this.pushBeam(i,o,r,a,e.color,.13,3.4,0,Ri.trail)}for(let r of t.enemies){let t=Math.max(0,Math.min(1,r.hp/r.maxHp));if(t>=.999)continue;let i=l[r.kind],a=zt(n,r,e.alpha),o=Bt(r)+xr(i.plan)*i.scale+.24,s=.3*i.scale+.1,c=s*(t*2-1);this.pushBeam(D(a.x-s,a.y),o,D(a.x+s,a.y),o,[.05,.06,.1],.045,1,0,Ri.health),this.pushBeam(D(a.x-s,a.y),o,D(a.x+c,a.y),o,Gr(t),.04,1.9,0,Ri.health)}if(r.count===0)return;let i=this.camera.eye();this.beamProgram.use(),this.beamProgram.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),this.beamProgram.uniform3f(`uEye`,i.x,i.y,i.z),this.beamProgram.uniform1f(`uTime`,e.time),r.upload(),r.draw(this.gl.TRIANGLES)}drawParticles(){let e=Math.min(this.profile.particles,this.particleMesh.capacity),t=this.particles.writeInto(this.particleMesh.data,e);if(this.particleMesh.count=t,t===0)return;let n=this.camera.view;this.particleProgram.use(),this.particleProgram.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),this.particleProgram.uniform3f(`uRight`,n[0],n[4],n[8]),this.particleProgram.uniform3f(`uUp`,n[1],n[5],n[9]),this.particleMesh.upload(),this.particleMesh.draw()}dispose(){let e=this.gl;this.groundMesh?.dispose();for(let e of Object.values(this.partMeshes))e.dispose();for(let e of Object.values(this.partMeshesSolid))e.dispose();this.sceneryMesh.dispose(),this.coreMesh.dispose(),this.beamMesh.dispose(),this.particleMesh.dispose(),this.pathFieldTex&&e.deleteTexture(this.pathFieldTex),this.buildMaskTex&&e.deleteTexture(this.buildMaskTex),e.deleteVertexArray(this.emptyVao),this.skyProgram.dispose(),this.groundProgram.dispose(),this.solidProgram.dispose(),this.creatureProgram.dispose(),this.beamProgram.dispose(),this.particleProgram.dispose(),this.post.dispose()}};function Bi(e,t,n){return D(e.x+(t.x-e.x)*n,e.y+(t.y-e.y)*n)}function Vi(e){let t=Math.max(0,Math.min(1,e));return 4*t*(1-t)}var Hi=[0,0,0,1];function Ui(e,t,n,r){let i=Math.sin(r/2);return[e*i,t*i,n*i,Math.cos(r/2)]}function Wi(e,t){let[n,r,i,a]=e,[o,s,c,l]=t;return[a*o+n*l+r*c-i*s,a*s-n*c+r*l+i*o,a*c+n*s-r*o+i*l,a*l-n*o-r*s-i*c]}function Gi(e){return Ui(0,1,0,e)}function Ki(e,t,n){let r=Hi;return t&&(r=Gi(t)),n&&(r=Wi(r,Ui(0,0,1,n))),e&&(r=Wi(r,Ui(1,0,0,e))),r}function qi(e,t){let[n,r,i,a]=e,[o,s,c]=t,l=2*(r*c-i*s),u=2*(i*o-n*c),d=2*(n*s-r*o);return[o+a*l+(r*d-i*u),s+a*u+(i*l-n*d),c+a*d+(n*u-r*l)]}var Ji={torso:0,head:1,leg:2,arm:3,wing:4,segment:5,rigid:6,tail:7,orbit:8,cape:9},Yi={skin:0,cloth:1,metal:2,eye:3,glow:4,gel:5,stone:6,bone:7,crystal:8,shell:9},Xi={dark:[.03,.025,.035],light:[.92,.9,.84],leather:[.26,.15,.08],iron:[.4,.42,.46],gold:[1,.72,.3],bone:[.86,.8,.66],wood:[.32,.2,.11]},U=Ji;function Zi(e,t,n,r=.08,i=`light`){let a=[];for(let o of[-1,1])a.push({shape:`sphere`,pos:[e*o,t,n],size:[r,r,r*.75],role:U.head,phase:0,paint:i,mat:`eye`}),a.push({shape:`sphere`,pos:[e*o,t,n+r*.34],size:[r*.48,r*.52,r*.3],role:U.head,phase:0,paint:`dark`,mat:`eye`});return a}function Qi(e,t,n,r,i=`accent`,a=1){return[-1,1].map(o=>({shape:`sphere`,pos:[e*o,t,n],size:[r,r*.85,r*.6],role:U.head,phase:0,paint:i,mat:`glow`,glow:a}))}function W(e,t,n,r){return r.map(r=>({...r,role:e,phase:t,pivot:n}))}var $i={goblin:[{shape:`rbox`,pos:[0,.62,0],size:[.34,.36,.26],role:U.torso,phase:0,paint:`body`,mat:`skin`},{shape:`rbox`,pos:[0,.52,0],size:[.37,.22,.29],role:U.torso,phase:0,paint:`leather`,mat:`cloth`},{shape:`torus`,pos:[0,.44,0],size:[.38,.06,.3],role:U.torso,phase:0,paint:`accent`,mat:`cloth`},{shape:`sphere`,pos:[0,.98,.02],size:[.38,.34,.34],role:U.head,phase:0,paint:`body`,mat:`skin`},{shape:`petal`,pos:[-.25,1.02,-.02],size:[.1,.26,.05],rot:[.25,0,1.3],role:U.head,phase:0,paint:`body`,mat:`skin`},{shape:`petal`,pos:[.25,1.02,-.02],size:[.1,.26,.05],rot:[.25,0,-1.3],role:U.head,phase:0,paint:`body`,mat:`skin`},{shape:`cone`,pos:[0,.95,.21],size:[.07,.12,.07],rot:[Math.PI/2,0,0],role:U.head,phase:0,paint:`body`,mat:`skin`},...Qi(.08,1.02,.15,.075,`accent`,.9),{shape:`wedge`,pos:[-.045,.89,.16],size:[.03,.045,.02],rot:[Math.PI,0,0],role:U.head,phase:0,paint:`bone`,mat:`bone`},{shape:`wedge`,pos:[.045,.89,.16],size:[.03,.045,.02],rot:[Math.PI,0,0],role:U.head,phase:0,paint:`bone`,mat:`bone`},...W(U.arm,.5,[-.24,.78,0],[{shape:`capsule`,pos:[-.25,.65,0],size:[.09,.28,.09],paint:`body`,mat:`skin`},{shape:`sphere`,pos:[-.25,.5,.02],size:[.1,.1,.1],paint:`body`,mat:`skin`}]),...W(U.arm,0,[.24,.78,0],[{shape:`capsule`,pos:[.25,.65,0],size:[.09,.28,.09],paint:`body`,mat:`skin`},{shape:`sphere`,pos:[.25,.5,.02],size:[.1,.1,.1],paint:`body`,mat:`skin`},{shape:`cylinder`,pos:[.25,.55,.13],size:[.045,.26,.045],rot:[1.2,0,0],paint:`wood`,mat:`cloth`},{shape:`rock`,pos:[.25,.6,.27],size:[.12,.12,.12],paint:`wood`,mat:`cloth`}]),...W(U.leg,0,[-.11,.37,0],[{shape:`capsule`,pos:[-.11,.22,0],size:[.12,.3,.12],paint:`body`,mat:`skin`},{shape:`rbox`,pos:[-.11,.05,.04],size:[.12,.08,.18],paint:`leather`,mat:`cloth`}]),...W(U.leg,.5,[.11,.37,0],[{shape:`capsule`,pos:[.11,.22,0],size:[.12,.3,.12],paint:`body`,mat:`skin`},{shape:`rbox`,pos:[.11,.05,.04],size:[.12,.08,.18],paint:`leather`,mat:`cloth`}])],hound:[{shape:`capsule`,pos:[0,.46,-.05],size:[.28,.6,.26],rot:[Math.PI/2,0,0],role:U.torso,phase:0,paint:`body`,mat:`skin`},{shape:`sphere`,pos:[0,.5,.18],size:[.3,.32,.3],role:U.torso,phase:0,paint:`body`,mat:`skin`},...[-.12,.02,.16].map(e=>({shape:`cone`,pos:[0,.62,e],size:[.06,.12,.08],rot:[-.5,0,0],role:U.torso,phase:0,paint:`accent`,mat:`cloth`})),{shape:`capsule`,pos:[0,.6,.32],size:[.14,.24,.14],rot:[.8,0,0],role:U.head,phase:0,paint:`body`,mat:`skin`},{shape:`rbox`,pos:[0,.67,.45],size:[.24,.22,.25],role:U.head,phase:0,paint:`body`,mat:`skin`},{shape:`rbox`,pos:[0,.62,.61],size:[.14,.12,.18],role:U.head,phase:0,paint:`accent`,mat:`skin`},{shape:`sphere`,pos:[0,.64,.7],size:[.06,.05,.05],role:U.head,phase:0,paint:`dark`,mat:`eye`},{shape:`petal`,pos:[-.08,.81,.42],size:[.08,.16,.04],rot:[-.25,0,.3],role:U.head,phase:0,paint:`accent`,mat:`skin`},{shape:`petal`,pos:[.08,.81,.42],size:[.08,.16,.04],rot:[-.25,0,-.3],role:U.head,phase:0,paint:`accent`,mat:`skin`},...Qi(.08,.71,.56,.05,`accent`,1),...W(U.leg,0,[-.12,.38,.2],[{shape:`capsule`,pos:[-.12,.2,.2],size:[.09,.34,.09],paint:`body`,mat:`skin`},{shape:`sphere`,pos:[-.12,.04,.23],size:[.1,.07,.12],paint:`accent`,mat:`skin`}]),...W(U.leg,.5,[.12,.38,.2],[{shape:`capsule`,pos:[.12,.2,.2],size:[.09,.34,.09],paint:`body`,mat:`skin`},{shape:`sphere`,pos:[.12,.04,.23],size:[.1,.07,.12],paint:`accent`,mat:`skin`}]),...W(U.leg,.5,[-.12,.38,-.26],[{shape:`capsule`,pos:[-.12,.2,-.26],size:[.1,.34,.1],paint:`body`,mat:`skin`},{shape:`sphere`,pos:[-.12,.04,-.23],size:[.1,.07,.12],paint:`accent`,mat:`skin`}]),...W(U.leg,0,[.12,.38,-.26],[{shape:`capsule`,pos:[.12,.2,-.26],size:[.1,.34,.1],paint:`body`,mat:`skin`},{shape:`sphere`,pos:[.12,.04,-.23],size:[.1,.07,.12],paint:`accent`,mat:`skin`}]),{shape:`thorn`,pos:[0,.6,-.44],size:[.07,.3,.09],rot:[-1.2,0,0],role:U.tail,phase:0,pivot:[0,.55,-.32],paint:`accent`,mat:`skin`}],slime:[{shape:`sphere`,pos:[0,.3,0],size:[.6,.5,.6],role:U.torso,phase:0,paint:`body`,mat:`gel`},{shape:`sphere`,pos:[.02,.55,-.05],size:[.26,.2,.26],role:U.torso,phase:0,paint:`accent`,mat:`gel`},{shape:`sphere`,pos:[0,.07,0],size:[.7,.1,.7],role:U.torso,phase:0,paint:`body`,mat:`gel`},...Zi(.12,.38,.24,.13),{shape:`rbox`,pos:[0,.25,.29],size:[.1,.03,.03],role:U.head,phase:0,paint:`dark`,mat:`eye`},{shape:`sphere`,pos:[.34,.4,0],size:[.07,.07,.07],role:U.orbit,phase:0,paint:`accent`,mat:`gel`},{shape:`sphere`,pos:[-.3,.26,.1],size:[.05,.05,.05],role:U.orbit,phase:.5,paint:`accent`,mat:`gel`}],grub:[{shape:`sphere`,pos:[0,.27,.46],size:[.34,.32,.32],role:U.head,phase:0,paint:`body`,mat:`skin`},{shape:`dome`,pos:[0,.39,.44],size:[.3,.12,.26],role:U.head,phase:0,paint:`accent`,mat:`shell`},{shape:`thorn`,pos:[-.08,.19,.62],size:[.05,.14,.06],rot:[1.6,0,.35],role:U.head,phase:0,paint:`bone`,mat:`bone`},{shape:`thorn`,pos:[.08,.19,.62],size:[.05,.14,.06],rot:[1.6,0,-.35],role:U.head,phase:0,paint:`bone`,mat:`bone`},{shape:`thorn`,pos:[-.07,.46,.52],size:[.03,.18,.04],rot:[.5,0,.35],role:U.head,phase:0,paint:`accent`,mat:`shell`},{shape:`thorn`,pos:[.07,.46,.52],size:[.03,.18,.04],rot:[.5,0,-.35],role:U.head,phase:0,paint:`accent`,mat:`shell`},{shape:`sphere`,pos:[-.1,.33,.6],size:[.06,.06,.05],role:U.head,phase:0,paint:`dark`,mat:`eye`},{shape:`sphere`,pos:[.1,.33,.6],size:[.06,.06,.05],role:U.head,phase:0,paint:`dark`,mat:`eye`},...[{z:.2,w:.4,h:.36,y:.24,phase:.1},{z:-.06,w:.42,h:.38,y:.24,phase:.3},{z:-.32,w:.38,h:.34,y:.23,phase:.5},{z:-.56,w:.3,h:.26,y:.2,phase:.7}].flatMap((e,t)=>[{shape:`sphere`,pos:[0,e.y,e.z],size:[e.w,e.h,.34],role:U.segment,phase:e.phase,paint:`body`,mat:`skin`},{shape:`dome`,pos:[0,e.y+e.h*.34,e.z],size:[e.w*.92,e.h*.42,.3],role:U.segment,phase:e.phase,paint:`accent`,mat:`shell`},...t<3?[-1,1].map(n=>({shape:`capsule`,pos:[n*e.w*.42,.07,e.z],size:[.05,.13,.05],role:U.leg,phase:t%2*.5+(n>0?.5:0)-(n>0&&t%2?1:0),pivot:[n*e.w*.42,.13,e.z],paint:`accent`,mat:`shell`})):[]])],wisp:[{shape:`flame`,pos:[0,.54,-.02],size:[.34,.48,.34],role:U.torso,phase:0,paint:`body`,mat:`glow`,glow:.25},{shape:`sphere`,pos:[-.07,.55,.14],size:[.06,.08,.04],role:U.head,phase:0,paint:`dark`,mat:`eye`},{shape:`sphere`,pos:[.07,.55,.14],size:[.06,.08,.04],role:U.head,phase:0,paint:`dark`,mat:`eye`},{shape:`petal`,pos:[-.24,.56,-.05],size:[.22,.34,.04],rot:[Math.PI/2,-Math.PI/2,0],role:U.wing,phase:0,pivot:[-.08,.56,-.05],paint:`accent`,mat:`glow`,glow:.35},{shape:`petal`,pos:[.24,.56,-.05],size:[.22,.34,.04],rot:[Math.PI/2,Math.PI/2,0],role:U.wing,phase:0,pivot:[.08,.56,-.05],paint:`accent`,mat:`glow`,glow:.35},{shape:`flame`,pos:[0,.28,-.1],size:[.14,.26,.14],rot:[-2.6,0,0],role:U.segment,phase:.4,paint:`body`,mat:`glow`,glow:.3},{shape:`sphere`,pos:[0,.84,0],size:[.08,.08,.08],role:U.rigid,phase:0,paint:`accent`,mat:`glow`,glow:1.4},...[0,1,2].map(e=>({shape:`sphere`,pos:[Math.cos(e*2.1)*.3,.5+(e-1)*.08,Math.sin(e*2.1)*.3],size:[.04,.04,.04],role:U.orbit,phase:e/3,paint:`accent`,mat:`glow`,glow:1.6}))],brute:[{shape:`rbox`,pos:[0,.82,0],size:[.62,.54,.44],role:U.torso,phase:0,paint:`body`,mat:`skin`},{shape:`sphere`,pos:[0,.68,.1],size:[.5,.42,.36],role:U.torso,phase:0,paint:`body`,mat:`skin`},{shape:`rbox`,pos:[0,.52,0],size:[.58,.14,.44],role:U.torso,phase:0,paint:`leather`,mat:`cloth`},{shape:`box`,pos:[0,.52,.22],size:[.12,.1,.04],role:U.torso,phase:0,paint:`gold`,mat:`metal`},{shape:`dome`,pos:[-.36,1.05,0],size:[.3,.15,.32],rot:[0,0,.3],role:U.torso,phase:0,paint:`leather`,mat:`cloth`},{shape:`dome`,pos:[.36,1.05,0],size:[.3,.15,.32],rot:[0,0,-.3],role:U.torso,phase:0,paint:`leather`,mat:`cloth`},{shape:`cone`,pos:[-.4,1.14,0],size:[.06,.1,.06],rot:[0,0,.5],role:U.torso,phase:0,paint:`iron`,mat:`metal`},{shape:`cone`,pos:[.4,1.14,0],size:[.06,.1,.06],rot:[0,0,-.5],role:U.torso,phase:0,paint:`iron`,mat:`metal`},{shape:`rbox`,pos:[0,1.17,.05],size:[.32,.28,.3],role:U.head,phase:0,paint:`body`,mat:`skin`},{shape:`rbox`,pos:[0,1.07,.12],size:[.3,.12,.24],role:U.head,phase:0,paint:`body`,mat:`skin`},{shape:`box`,pos:[0,1.26,.18],size:[.28,.05,.06],role:U.head,phase:0,paint:`body`,mat:`skin`},{shape:`thorn`,pos:[-.1,1.12,.24],size:[.04,.12,.05],role:U.head,phase:0,paint:`bone`,mat:`bone`},{shape:`thorn`,pos:[.1,1.12,.24],size:[.04,.12,.05],role:U.head,phase:0,paint:`bone`,mat:`bone`},{shape:`thorn`,pos:[-.15,1.35,0],size:[.08,.2,.1],rot:[-.3,0,.6],role:U.head,phase:0,paint:`accent`,mat:`bone`},{shape:`thorn`,pos:[.15,1.35,0],size:[.08,.2,.1],rot:[-.3,0,-.6],role:U.head,phase:0,paint:`accent`,mat:`bone`},...Qi(.08,1.2,.2,.055,`accent`,.9),...W(U.arm,.5,[-.44,1.02,0],[{shape:`capsule`,pos:[-.44,.84,0],size:[.18,.44,.18],paint:`body`,mat:`skin`},{shape:`torus`,pos:[-.45,.7,0],size:[.22,.06,.22],paint:`iron`,mat:`metal`},{shape:`sphere`,pos:[-.46,.58,.04],size:[.2,.2,.2],paint:`body`,mat:`skin`}]),...W(U.arm,0,[.44,1.02,0],[{shape:`capsule`,pos:[.44,.84,0],size:[.18,.44,.18],paint:`body`,mat:`skin`},{shape:`torus`,pos:[.45,.7,0],size:[.22,.06,.22],paint:`iron`,mat:`metal`},{shape:`sphere`,pos:[.46,.58,.04],size:[.2,.2,.2],paint:`body`,mat:`skin`}]),...W(U.leg,0,[-.18,.44,0],[{shape:`capsule`,pos:[-.18,.26,0],size:[.2,.36,.2],paint:`body`,mat:`skin`},{shape:`rbox`,pos:[-.18,.06,.05],size:[.2,.1,.28],paint:`leather`,mat:`cloth`}]),...W(U.leg,.5,[.18,.44,0],[{shape:`capsule`,pos:[.18,.26,0],size:[.2,.36,.2],paint:`body`,mat:`skin`},{shape:`rbox`,pos:[.18,.06,.05],size:[.2,.1,.28],paint:`leather`,mat:`cloth`}])],golem:[{shape:`rock`,pos:[0,.8,0],size:[.7,.62,.52],role:U.torso,phase:0,paint:`body`,mat:`stone`},{shape:`gem`,pos:[0,.84,.25],size:[.16,.18,.08],rot:[Math.PI/2,0,0],role:U.torso,phase:0,paint:`accent`,mat:`glow`,glow:1.4},{shape:`rock`,pos:[0,1.22,.02],size:[.38,.26,.36],rot:[0,.6,0],role:U.head,phase:0,paint:`body`,mat:`stone`},{shape:`box`,pos:[0,1.23,.19],size:[.2,.04,.03],role:U.head,phase:0,paint:`accent`,mat:`glow`,glow:1.3},{shape:`quartz`,pos:[-.33,1.16,-.02],size:[.14,.34,.14],rot:[0,.3,.4],role:U.rigid,phase:0,paint:`accent`,mat:`crystal`,glow:.7},{shape:`quartz`,pos:[.33,1.16,-.02],size:[.14,.34,.14],rot:[0,-.3,-.4],role:U.rigid,phase:0,paint:`accent`,mat:`crystal`,glow:.7},{shape:`quartz`,pos:[-.24,1.18,-.14],size:[.08,.2,.08],rot:[-.3,0,.2],role:U.rigid,phase:0,paint:`accent`,mat:`crystal`,glow:.6},{shape:`quartz`,pos:[.24,1.18,-.14],size:[.08,.2,.08],rot:[-.3,0,-.2],role:U.rigid,phase:0,paint:`accent`,mat:`crystal`,glow:.6},...W(U.arm,.5,[-.5,1.05,0],[{shape:`rock`,pos:[-.5,.82,0],size:[.24,.5,.24],paint:`body`,mat:`stone`},{shape:`rock`,pos:[-.52,.52,.04],size:[.27,.24,.27],rot:[0,1,0],paint:`body`,mat:`stone`}]),...W(U.arm,0,[.5,1.05,0],[{shape:`rock`,pos:[.5,.82,0],size:[.24,.5,.24],rot:[0,2,0],paint:`body`,mat:`stone`},{shape:`rock`,pos:[.52,.52,.04],size:[.27,.24,.27],rot:[0,3,0],paint:`body`,mat:`stone`}]),...W(U.leg,0,[-.2,.42,0],[{shape:`rock`,pos:[-.2,.24,0],size:[.26,.36,.26],paint:`body`,mat:`stone`}]),...W(U.leg,.5,[.2,.42,0],[{shape:`rock`,pos:[.2,.24,0],size:[.26,.36,.26],rot:[0,1.4,0],paint:`body`,mat:`stone`}]),{shape:`rock`,pos:[.5,1.3,0],size:[.1,.08,.1],role:U.orbit,phase:0,paint:`body`,mat:`stone`},{shape:`rock`,pos:[-.46,1.1,.1],size:[.08,.07,.08],role:U.orbit,phase:.5,paint:`body`,mat:`stone`}],warden:[{shape:`rbox`,pos:[0,.96,0],size:[.58,.66,.4],role:U.torso,phase:0,paint:`body`,mat:`metal`},{shape:`gem`,pos:[0,1.08,.21],size:[.18,.2,.1],rot:[Math.PI/2,0,0],role:U.torso,phase:0,paint:`accent`,mat:`glow`,glow:1.6},{shape:`torus`,pos:[0,.66,0],size:[.6,.08,.44],role:U.torso,phase:0,paint:`gold`,mat:`metal`},{shape:`rbox`,pos:[0,.55,0],size:[.56,.2,.4],role:U.torso,phase:0,paint:`dark`,mat:`cloth`},{shape:`dome`,pos:[-.38,1.22,0],size:[.32,.18,.34],rot:[0,0,.35],role:U.torso,phase:0,paint:`body`,mat:`metal`},{shape:`dome`,pos:[.38,1.22,0],size:[.32,.18,.34],rot:[0,0,-.35],role:U.torso,phase:0,paint:`body`,mat:`metal`},{shape:`thorn`,pos:[-.44,1.34,0],size:[.06,.18,.07],rot:[0,0,.5],role:U.torso,phase:0,paint:`accent`,mat:`bone`},{shape:`thorn`,pos:[.44,1.34,0],size:[.06,.18,.07],rot:[0,0,-.5],role:U.torso,phase:0,paint:`accent`,mat:`bone`},{shape:`rbox`,pos:[0,1.46,.02],size:[.32,.32,.32],role:U.head,phase:0,paint:`body`,mat:`metal`},{shape:`box`,pos:[0,1.46,.18],size:[.22,.04,.03],role:U.head,phase:0,paint:`accent`,mat:`glow`,glow:1.5},{shape:`thorn`,pos:[-.16,1.67,-.02],size:[.1,.34,.12],rot:[-.35,0,.5],role:U.head,phase:0,paint:`light`,mat:`bone`},{shape:`thorn`,pos:[.16,1.67,-.02],size:[.1,.34,.12],rot:[-.35,0,-.5],role:U.head,phase:0,paint:`light`,mat:`bone`},{shape:`box`,pos:[0,.95,-.27],size:[.7,.92,.05],role:U.cape,phase:0,pivot:[0,1.38,-.24],paint:`accent`,mat:`cloth`},...W(U.arm,.5,[-.44,1.2,0],[{shape:`capsule`,pos:[-.44,1,0],size:[.18,.5,.18],paint:`body`,mat:`metal`},{shape:`rbox`,pos:[-.46,.72,.04],size:[.2,.18,.2],paint:`body`,mat:`metal`}]),...W(U.arm,0,[.44,1.2,0],[{shape:`capsule`,pos:[.44,1,0],size:[.18,.5,.18],paint:`body`,mat:`metal`},{shape:`rbox`,pos:[.46,.72,.04],size:[.2,.18,.2],paint:`body`,mat:`metal`},{shape:`cylinder`,pos:[.48,.9,.14],size:[.05,1.3,.05],paint:`dark`,mat:`metal`},{shape:`thorn`,pos:[.48,1.72,.14],size:[.07,.36,.16],paint:`accent`,mat:`glow`,glow:1.1}]),...W(U.leg,0,[-.18,.52,0],[{shape:`capsule`,pos:[-.18,.3,0],size:[.22,.44,.22],paint:`body`,mat:`metal`},{shape:`rbox`,pos:[-.18,.07,.05],size:[.22,.12,.3],paint:`dark`,mat:`metal`}]),...W(U.leg,.5,[.18,.52,0],[{shape:`capsule`,pos:[.18,.3,0],size:[.22,.44,.22],paint:`body`,mat:`metal`},{shape:`rbox`,pos:[.18,.07,.05],size:[.22,.12,.3],paint:`dark`,mat:`metal`}]),...[0,1,2].map(e=>({shape:`octa`,pos:[Math.cos(e*2.1)*.55,1.3+(e-1)*.12,Math.sin(e*2.1)*.55],size:[.08,.14,.08],role:U.orbit,phase:e/3,paint:`accent`,mat:`glow`,glow:1.2}))]},ea=new WeakMap;function ta(e){let t=ea.get(e);if(!t){let[n,r,i]=e.rot??[0,0,0];t=Ki(n,r,i),ea.set(e,t)}return t}function na(e){return e.pivot??[e.pos[0],e.pos[1]+e.size[1]*.5,e.pos[2]]}function ra(e){let t=0;for(let n of $i[e])t=Math.max(t,n.pos[1]+n.size[1]*.5);return t}var ia=-5.5,aa=class{capacity;items=[];rng;constructor(e,t=24301){this.capacity=e,this.rng=m(t)}clear(){this.items.length=0}burst(e,t,n,r,i){let{count:a,speed:o,lift:s=.5,size:c=.1,life:l=.7,drag:u=.9}=i;for(let i=0;i<a;i++){this.items.length>=this.capacity&&this.items.shift();let i=_(this.rng,0,Math.PI*2),a=_(this.rng,-.3,1.2),d=o*_(this.rng,.4,1.3),f=l*_(this.rng,.6,1.3);this.items.push({x:e,y:t,z:n,vx:Math.cos(i)*Math.cos(a)*d,vy:(Math.sin(a)+s)*d,vz:Math.sin(i)*Math.cos(a)*d,color:r,size:c*_(this.rng,.6,1.4),life:f,maxLife:f,drag:u})}}update(e){for(let t=this.items.length-1;t>=0;t--){let n=this.items[t];if(n.life-=e,n.life<=0){this.items[t]=this.items[this.items.length-1],this.items.pop();continue}let r=n.drag**(e*60);n.vy+=ia*.6*e,n.vx*=r,n.vy*=r,n.vz*=r,n.x+=n.vx*e,n.y+=n.vy*e,n.z+=n.vz*e,n.y<.02&&(n.y=.02,n.vy=Math.abs(n.vy)*.3)}}},oa=class{capacity;items=[];rng;constructor(e,t=14595093){this.capacity=e,this.rng=m(t)}clear(){this.items.length=0}burst(e,t,n,r,i,a,o,s=.6){for(let c=0;c<i;c++){this.items.length>=this.capacity&&this.items.shift();let i=_(this.rng,0,Math.PI*2),c=a*_(this.rng,.5,1.2),l=_(this.rng,-1,1),u=_(this.rng,-1,1),d=_(this.rng,-1,1),f=Math.hypot(l,u,d)||1,p=_(this.rng,.9,1.5);this.items.push({x:e,y:t,z:n,vx:Math.cos(i)*c,vy:_(this.rng,1.6,3.2),vz:Math.sin(i)*c,rot:Ui(l/f,u/f,d/f,_(this.rng,0,6.28)),axis:[l/f,u/f,d/f],spinRate:_(this.rng,4,11),color:r,size:o*_(this.rng,.6,1.3),life:p,maxLife:p,glow:s})}}update(e){for(let t=this.items.length-1;t>=0;t--){let n=this.items[t];if(n.life-=e,n.life<=0){this.items[t]=this.items[this.items.length-1],this.items.pop();continue}n.vy+=ia*e,n.x+=n.vx*e,n.y+=n.vy*e,n.z+=n.vz*e;let r=n.size*.4;n.y<r&&(n.y=r,n.vy<0&&(n.vy=-n.vy*.35),n.vx*=.6,n.vz*=.6,n.spinRate*=.6),n.rot=Wi(Ui(n.axis[0],n.axis[1],n.axis[2],n.spinRate*e),n.rot)}}},sa=class{rings=[];pillars=[];ring(e,t,n,r,i=.6,a=1){this.rings.length>48&&this.rings.shift(),this.rings.push({x:e,z:t,radius:n,color:r,life:i,maxLife:i,strength:a})}pillar(e,t,n,r=3,i=.34,a=.9){this.pillars.length>16&&this.pillars.shift(),this.pillars.push({x:e,z:t,height:r,width:i,color:n,life:a,maxLife:a})}clear(){this.rings.length=0,this.pillars.length=0}update(e){for(let t of[this.rings,this.pillars])for(let n=t.length-1;n>=0;n--)t[n].life-=e,t[n].life<=0&&t.splice(n,1)}};function ca(e){let t=Math.sin(e*127.1+311.7)*43758.5453;return t-Math.floor(t)}function la(e,t,n,r,i=7,a=.16){let o=Math.floor(r*30),s=t[0]-e[0],c=t[2]-e[2],l=Math.hypot(s,c)||1,u=-c/l,d=s/l,f=[e];for(let r=1;r<i;r++){let p=r/i,m=Math.sin(p*Math.PI),h=(ca(n*13.1+r*7.3+o*1.7)-.5)*2*a*m*Math.min(1.5,l*.5),g=(ca(n*5.7+r*3.1+o*2.3)-.5)*2*a*m*.8;f.push([e[0]+s*p+u*h,e[1]+(t[1]-e[1])*p+g,e[2]+c*p+d*h])}return f.push(t),f}function ua(e,t,n,r=.35){let i=Math.floor(n*30),a=ca(t*3.3+i*.9)*Math.PI*2;return la(e,[e[0]+Math.cos(a)*r,e[1]-.1-ca(t+i)*.2,e[2]+Math.sin(a)*r],t+91,n,3,.08)}var da=Math.PI*2;function G(e){let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]}function fa(e,t){return[e[0]-t[0],e[1]-t[1],e[2]-t[2]]}function pa(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function ma(e){let t=e>>>0||1;return()=>(t=Math.imul(t^t>>>15,t|1)+1831565813>>>0,t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296)}var K=class{positions=[];normals=[];aux=[];indices=[];get vertexCount(){return this.positions.length/3}vertex(e,t,n=1,r=0,i=0){let a=this.vertexCount;return this.positions.push(e[0],e[1],e[2]),this.normals.push(t[0],t[1],t[2]),this.aux.push(n,r,i),a}tri(e,t,n){this.indices.push(e,t,n)}quad(e,t,n,r){this.indices.push(e,t,n,e,n,r)}flatTri(e,t,n,r=1){let i=G(pa(fa(t,e),fa(n,e))),a=this.vertex(e,i,r),o=this.vertex(t,i,r),s=this.vertex(n,i,r);this.tri(a,o,s)}flatPoly(e,t=1){for(let n=1;n+1<e.length;n++)this.flatTri(e[0],e[n],e[n+1],t)}flatTriOut(e,t,n,r,i=1){let a=pa(fa(t,e),fa(n,e)),o=[(e[0]+t[0]+n[0])/3-r[0],(e[1]+t[1]+n[1])/3-r[1],(e[2]+t[2]+n[2])/3-r[2]];a[0]*o[0]+a[1]*o[1]+a[2]*o[2]<0?this.flatTri(e,n,t,i):this.flatTri(e,t,n,i)}flatPolyOut(e,t,n=1){for(let r=1;r+1<e.length;r++)this.flatTriOut(e[0],e[r],e[r+1],t,n)}append(e,t=[0,0,0],n=[1,1,1]){let r=this.vertexCount;for(let r=0;r<e.vertexCount;r++){let i=[e.positions[r*3]*n[0]+t[0],e.positions[r*3+1]*n[1]+t[1],e.positions[r*3+2]*n[2]+t[2]],a=G([e.normals[r*3]/n[0],e.normals[r*3+1]/n[1],e.normals[r*3+2]/n[2]]);this.vertex(i,a,e.aux[r*3],e.aux[r*3+1],e.aux[r*3+2])}for(let t=0;t<e.indexCount;t++)this.indices.push(e.indices[t]+r)}build(){let e=this.vertexCount,t=e>65535?new Uint32Array(this.indices):new Uint16Array(this.indices);return{positions:new Float32Array(this.positions),normals:new Float32Array(this.normals),aux:new Float32Array(this.aux),indices:t,vertexCount:e,indexCount:this.indices.length}}};function ha(e){let t=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(let r=0;r<e.vertexCount;r++)for(let i=0;i<3;i++)t[i]=Math.min(t[i],e.positions[r*3+i]),n[i]=Math.max(n[i],e.positions[r*3+i]);let r=[0,0,0],i=[0,0,0];for(let e=0;e<3;e++){let a=n[e]-t[e];r[e]=a>1e-6?1/a:1,i[e]=(n[e]+t[e])/2}let a=new Float32Array(e.positions.length),o=new Float32Array(e.normals.length);for(let t=0;t<e.vertexCount;t++){let n=[0,0,0];for(let o=0;o<3;o++)a[t*3+o]=(e.positions[t*3+o]-i[o])*r[o],n[o]=e.normals[t*3+o]/r[o];let s=G(n);o[t*3]=s[0],o[t*3+1]=s[1],o[t*3+2]=s[2]}return{...e,positions:a,normals:o}}function ga(e=2,t,n=!1){let r=(1+Math.sqrt(5))/2,i=[[-1,r,0],[1,r,0],[-1,-r,0],[1,-r,0],[0,-1,r],[0,1,r],[0,-1,-r],[0,1,-r],[r,0,-1],[r,0,1],[-r,0,-1],[-r,0,1]].map(e=>G(e)),a=[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]];for(let t=0;t<e;t++){let e=new Map,t=(t,n)=>{let r=t<n?`${t}_${n}`:`${n}_${t}`,a=e.get(r);if(a!==void 0)return a;let o=i[t],s=i[n];return i.push(G([(o[0]+s[0])/2,(o[1]+s[1])/2,(o[2]+s[2])/2])),e.set(r,i.length-1),i.length-1},n=[];for(let[e,r,i]of a){let a=t(e,r),o=t(r,i),s=t(i,e);n.push([e,a,s],[r,o,a],[i,s,o],[a,o,s])}a=n,i=[...i]}let o=i.map(e=>.5*(t?t(e):1)),s=i.map((e,t)=>[e[0]*o[t],e[1]*o[t],e[2]*o[t]]),c=new K;if(n){for(let[e,t,n]of a)c.flatTri(s[e],s[t],s[n]);return c.build()}let l=s.map(()=>[0,0,0]);for(let[e,t,n]of a){let r=pa(fa(s[t],s[e]),fa(s[n],s[e]));for(let i of[e,t,n])l[i][0]+=r[0],l[i][1]+=r[1],l[i][2]+=r[2]}s.forEach((e,t)=>c.vertex(e,G(l[t]),1,0,e[1]+.5));for(let[e,t,n]of a)c.tri(e,t,n);return c.build()}function _a(e,t={}){let n=t.sides??18,r=Math.cos((t.smoothAngle??36)*Math.PI/180),i=t.twist??0,a=new K,o=[];for(let t=0;t+1<e.length;t++){let n=e[t+1][0]-e[t][0],r=e[t+1][1]-e[t][1],i=Math.hypot(n,r)||1;o.push([r/i,-n/i])}let s=[0];for(let t=1;t<e.length;t++)s.push(s[t-1]+Math.hypot(e[t][0]-e[t-1][0],e[t][1]-e[t-1][1]));let c=s[s.length-1]||1,l=(t,r)=>{let[o,l,u=1]=e[t],d=a.vertexCount;for(let e=0;e<=n;e++){let d=(e+i)/n*da,f=Math.cos(d),p=Math.sin(d);a.vertex([f*o,l,p*o],G([f*r[0],r[1],p*r[0]]),u,e/n,s[t]/c)}return d};for(let e=0;e<o.length;e++){let t=o[e],i=(e,n)=>{if(n===void 0||n<0||n>=o.length)return t;let i=o[n];if(t[0]*i[0]+t[1]*i[1]<r)return t;let a=Math.hypot(t[0]+i[0],t[1]+i[1])||1;return[(t[0]+i[0])/a,(t[1]+i[1])/a]},s=l(e,i(e,e-1)),c=l(e+1,i(e+1,e+1));for(let e=0;e<n;e++)a.quad(s+e,c+e,c+e+1,s+e+1)}return a.build()}function va(e=18,t=.06){return _a([[0,-.5,.8],[.5-t,-.5,.85],[.5,-.5+t],[.5,.5-t],[.5-t,.5],[0,.5]],{sides:e,smoothAngle:20})}function ya(e=18){return _a([[0,-.5,.8],[.5,-.5,.85],[0,.5]],{sides:e,smoothAngle:10})}function ba(e=18){let t=[[0,-.5,.8]];for(let e=0;e<=8;e++){let n=e/8*(Math.PI/2);t.push([Math.cos(n)*.5,-.5+Math.sin(n),1])}return t[t.length-1][0]=0,_a(t,{sides:e,smoothAngle:50})}function xa(e=14){let t=[],n=.5;for(let e=0;e<=6;e++){let r=-Math.PI/2+e/6*(Math.PI/2);t.push([Math.cos(r)*n,-.5+Math.sin(r)*n,.85+e/6*.15])}for(let e=0;e<=6;e++){let r=e/6*(Math.PI/2);t.push([Math.cos(r)*n,.5+Math.sin(r)*n,1])}return t[0][0]=0,t[t.length-1][0]=0,ha(_a(t,{sides:e,smoothAngle:60}))}function Sa(e=14){return _a([[0,-.5],[.3,-.44],[.47,-.26],[.5,-.08],[.4,.12],[.22,.32],[0,.5]],{sides:e,smoothAngle:70})}function Ca(e=20){return _a([[0,-.5,.7],[.2,-.5,.75],[.26,-.38],[.4,-.18],[.48,.1],[.5,.36],[.5,.5],[.41,.5],[.39,.36,.8],[.33,.06,.55],[.18,-.14,.4],[0,-.18,.35]],{sides:e,smoothAngle:40})}function wa(e=20){return _a([[0,-.5,.7],[.5,-.5,.7],[.5,-.2],[.46,-.12],[.4,-.1,.8],[.39,.22],[.44,.26],[.45,.4],[.41,.5],[0,.5]],{sides:e,smoothAngle:20})}function Ta(e=16){return _a([[0,-.5,.7],[.5,-.5,.75],[.5,-.43],[.38,-.38],[.32,-.3,.9],[.33,0],[.31,.3],[.38,.37],[.5,.43],[.5,.5],[0,.5]],{sides:e,smoothAngle:30})}function Ea(e=18){return _a([[0,-.5,.7],[.32,-.5,.75],[.46,-.3],[.5,-.05],[.4,.25],[.3,.38],[.36,.46],[.38,.5],[.3,.5],[.2,.38,.6],[0,.3,.4]],{sides:e,smoothAngle:45})}function Da(e=28,t=10,n=.12){let r=new K,i=.5-n;for(let a=0;a<=e;a++){let o=a/e*da,s=Math.cos(o),c=Math.sin(o);for(let o=0;o<=t;o++){let l=o/t*da,u=Math.cos(l),d=Math.sin(l),f=[(i+n*u)*s,n*d,(i+n*u)*c],p=[u*s,d,u*c];r.vertex(f,p,.72+.28*(u*.5+.5),a/e,o/t)}}let a=t+1;for(let n=0;n<e;n++)for(let e=0;e<t;e++){let t=n*a+e;r.quad(t,t+1,t+a+1,t+a)}return ha(r.build())}function Oa(e=.1,t=2){let n=Math.max(.01,Math.min(.49,e)),r=.5-n,i=t>=2?[-.5,-.5+n*.3,-r,0,r,.5-n*.3,.5]:[-.5,-r,r,.5],a=new K;for(let{axis:e,sign:t}of[{axis:0,sign:1},{axis:0,sign:-1},{axis:1,sign:1},{axis:1,sign:-1},{axis:2,sign:1},{axis:2,sign:-1}]){let o=(e+1)%3,s=(e+2)%3,c=a.vertexCount;for(let c of i)for(let l of i){let i=[0,0,0];i[e]=.5*t,i[o]=l,i[s]=c;let u=[Math.max(-r,Math.min(r,i[0])),Math.max(-r,Math.min(r,i[1])),Math.max(-r,Math.min(r,i[2]))],d=G(fa(i,u)),f=[u[0]+d[0]*n,u[1]+d[1]*n,u[2]+d[2]*n],p=.78+.22*(f[1]+.5);a.vertex(f,d,p,l+.5,c+.5)}let l=i.length;for(let e=0;e+1<l;e++)for(let n=0;n+1<l;n++){let r=c+e*l+n;t>0?a.quad(r,r+1,r+l+1,r+l):a.quad(r,r+l,r+l+1,r+1)}}return a.build()}function ka(){let e=new K,t=(e,t,n)=>[Math.cos(n)*e,t,Math.sin(n)*e],n=[0,-.1,0],r=.27,i=.2,a=.2,o=-.25,s=[0,-.5,0],c=da/8,l=[];for(let e=0;e<8;e++)l.push(t(r,i,e*c));e.flatPolyOut(l,n);for(let l=0;l<8;l++){let u=l*c,d=(l+1)*c,f=u+c/2,p=t(r,i,u),m=t(r,i,d),h=t(.43,.1,f),g=t(.5,0,u),_=t(.5,0,f),v=t(.5,0,d);e.flatTriOut(p,h,m,n),e.flatTriOut(p,g,h,n),e.flatTriOut(h,v,m,n),e.flatTriOut(g,_,h,n),e.flatTriOut(h,_,v,n);let y=t(a,o,f),b=t(a,o,f+c);e.flatTriOut(g,y,_,n),e.flatTriOut(_,y,v,n),e.flatTriOut(v,y,b,n),e.flatTriOut(y,s,b,n,.8)}return ha(e.build())}function Aa(e=6){let t=new K,n=[],r=[];for(let t=0;t<e;t++){let i=t/e*da;n.push([Math.cos(i)*.44,-.5,Math.sin(i)*.44]),r.push([Math.cos(i)*.5,.18,Math.sin(i)*.5])}let i=[0,.5,0],a=[0,0,0];t.flatPolyOut(n,a,.6);for(let o=0;o<e;o++){let s=(o+1)%e;t.flatTriOut(n[o],r[o],r[s],a,.85),t.flatTriOut(n[o],r[s],n[s],a,.85),t.flatTriOut(r[o],i,r[s],a)}return ha(t.build())}function ja(){let e=new K,t=.5,n=[[t,0,0],[-.5,0,0],[0,t,0],[0,-.5,0],[0,0,t],[0,0,-.5]];for(let[t,r,i]of[[0,2,4],[2,1,4],[1,3,4],[3,0,4],[2,0,5],[1,2,5],[3,1,5],[0,3,5]])e.flatTriOut(n[t],n[r],n[i],[0,0,0]);return e.build()}function Ma(){let e=new K,t=.5/Math.sqrt(3),n=[[t,t,t],[t,-t,-t],[-t,t,-t],[-t,-t,t]];for(let[t,r,i]of[[0,1,2],[0,3,1],[0,2,3],[1,3,2]])e.flatTriOut(n[t],n[r],n[i],[0,0,0]);return ha(e.build())}function Na(){let e=new K,t=[],n=[];for(let e=0;e<4;e++){let r=e/4*da+Math.PI/4;t.push([Math.cos(r)*.5,-.5,Math.sin(r)*.5]),n.push([Math.cos(r)*.3,.28,Math.sin(r)*.3])}let r=[0,.5,0],i=[0,-.2,0];e.flatPolyOut(t,i,.6);for(let a=0;a<4;a++){let o=(a+1)%4;e.flatPolyOut([t[a],n[a],n[o],t[o]],i),e.flatTriOut(n[a],r,n[o],i)}return ha(e.build())}function Pa(){let e=new K,t=[[-.5,-.5,.5],[.5,-.5,.5],[0,.5,.5]],n=[[-.5,-.5,-.5],[.5,-.5,-.5],[0,.5,-.5]],r=[0,-.17,0];return e.flatTriOut(t[0],t[1],t[2],r),e.flatTriOut(n[0],n[2],n[1],r),e.flatPolyOut([t[0],n[0],n[1],t[1]],r,.7),e.flatPolyOut([t[1],n[1],n[2],t[2]],r),e.flatPolyOut([t[2],n[2],n[0],t[0]],r),e.build()}function Fa(e=7){let t=ma(e),n=Array.from({length:6},()=>[t()*2-1,t()*2-1,t()*2-1,.12+t()*.16]);return ha(ga(1,e=>{let t=.86;for(let[r,i,a,o]of n)t+=o*Math.max(0,e[0]*r+e[1]*i+e[2]*a)**2;return e[1]<-.3?t*(.62+.38*(1+e[1])):t},!0))}function Ia(e=3){let t=ma(e),n=Array.from({length:9},()=>G([t()*2-1,t()*1.6-.4,t()*2-1]));return ha(ga(2,e=>{let t=.78;for(let r of n)t+=.16*Math.max(0,e[0]*r[0]+e[1]*r[1]+e[2]*r[2])**3;return t}))}function La(e=10,t=8,n=.45){let r=new K,i=e=>[0,e,n*e*e],a=e=>.5*(1-e)**1.15;for(let n=0;n<=t;n++){let o=n/t,s=i(o),c=.001,l=G(fa(i(Math.min(1,o+c)),i(Math.max(0,o-c)))),u=[1,0,0],d=G(pa(l,u)),f=a(o);for(let t=0;t<=e;t++){let n=t/e*da,i=[u[0]*Math.cos(n)+d[0]*Math.sin(n),u[1]*Math.cos(n)+d[1]*Math.sin(n),u[2]*Math.cos(n)+d[2]*Math.sin(n)];r.vertex([s[0]+i[0]*f,s[1]+i[1]*f,s[2]+i[2]*f],i,.8+.2*o,t/e,o)}}let o=e+1;for(let n=0;n<t;n++)for(let t=0;t<e;t++){let e=n*o+t;r.quad(e,e+1,e+o+1,e+o)}let s=r.vertex([0,0,0],[0,-1,0],.7);for(let t=0;t<e;t++)r.tri(s,t+1,t);return ha(r.build())}function Ra(e=6,t=8){let n=new K,r=(e,t,n)=>{let r=Math.sin(Math.PI*Math.min(1,t*.92+.04))**.75*.5,i=-.22*e*e+.18*t*t;return[e*r,t,i+n*.035*(1-t*.7)]};for(let i of[1,-1]){let a=n.vertexCount;for(let a=0;a<=t;a++){let o=a/t;for(let t=0;t<=e;t++){let a=t/e*2-1,s=r(a,o,i),c=G(pa(fa(r(Math.min(1,a+.01),o,i),r(Math.max(-1,a-.01),o,i)),fa(r(a,Math.min(1,o+.01),i),r(a,Math.max(0,o-.01),i))));i<0&&(c=[-c[0],-c[1],-c[2]]),n.vertex(s,c,.75+.25*o,a*.5+.5,o)}}let o=e+1;for(let r=0;r<t;r++)for(let t=0;t<e;t++){let e=a+r*o+t;i>0?n.quad(e,e+1,e+o+1,e+o):n.quad(e,e+o,e+o+1,e+1)}}return ha(n.build())}function za(e=6,t=11){let n=ma(t),r=new K;for(let t=0;t<e;t++){let i=t/e*da+n()*.8,a=.12+n()*.22,o=.6+n()*.4,s=.022+n()*.014,c=[Math.cos(i)*.05,0,Math.sin(i)*.05],l=[Math.cos(i),0,Math.sin(i)],u=[-l[2],0,l[0]],d=(e,t)=>{let n=s*(1-e*.85)*t,r=a*e*e;return[c[0]+l[0]*r+u[0]*n,o*e,c[2]+l[2]*r+u[2]*n]},f=G([l[0]*.4,1,l[2]*.4]),p=r.vertex(d(0,-1),f,.5,0,0),m=r.vertex(d(0,1),f,.5,1,0),h=r.vertex(d(.55,-1),f,.8,0,.55),g=r.vertex(d(.55,1),f,.8,1,.55),_=r.vertex(d(1,0),f,1,.5,1);r.quad(p,m,g,h),r.tri(h,g,_)}let i=r.build();for(let e=0;e<i.vertexCount;e++)i.aux[e*3+1]=i.aux[e*3+2];return i}function Ba(){let e=new K,t=[0,1,0],n=e.vertex([-1,0,-1],t,1,0,0),r=e.vertex([1,0,-1],t,1,1,0),i=e.vertex([1,0,1],t,1,1,1),a=e.vertex([-1,0,1],t,1,0,1);return e.quad(n,a,i,r),e.build()}function Va(){let e=new K,t=[0,0,1],n=e.vertex([-1,-1,0],t),r=e.vertex([1,-1,0],t),i=e.vertex([1,1,0],t),a=e.vertex([-1,1,0],t);return e.quad(n,r,i,a),e.build()}var Ha=3.2,Ua=180,Wa=.72;function Ga(e){let t=e.width/2,n=e.height/2,r=e.width/2+Ha,i=e.height/2+Ha,a=0;for(let t of e.id)a=a*31+t.charCodeAt(0)>>>0;let o=ma(a||1),s=o()*6.28,c=o()*6.28,l=o()*6.28,u=[],d=1/0,f=1/0,p=-1/0,m=-1/0;for(let e=0;e<Ua;e++){let a=e/Ua*Math.PI*2,o=Math.cos(a),h=Math.sin(a),g=((Math.abs(o)/r)**4+(Math.abs(h)/i)**4)**-.25+(.28*Math.sin(3*a+s)+.17*Math.sin(7*a+c)+.08*Math.sin(13*a+l)),_=t+o*g,v=n+h*g;u.push([_,v]),d=Math.min(d,_),f=Math.min(f,v),p=Math.max(p,_),m=Math.max(m,v)}return{outline:u,centre:[t,n],bounds:{minX:d,minZ:f,maxX:p,maxZ:m}}}function Ka(e,t,n){let{outline:r}=e,i=!1,a=1/0;for(let e=0,o=r.length-1;e<r.length;o=e++){let[s,c]=r[e],[l,u]=r[o];c>n!=u>n&&t<(l-s)*(n-c)/(u-c)+s&&(i=!i);let d=l-s,f=u-c,p=d*d+f*f||1,m=Math.max(0,Math.min(1,((t-s)*d+(n-c)*f)/p));a=Math.min(a,Math.hypot(t-(s+d*m),n-(c+f*m)))}return i?a:-a}function qa(e){let t=new K,{outline:n,centre:r}=e,i=n.length,a=[0,1,0],o=t.vertex([r[0],0,r[1]],a,1,0,0),s=[];for(let e=0;e<i;e++)s.push(t.vertex([n[e][0],0,n[e][1]],a,1,e/i,0));for(let e=0;e<i;e++)t.tri(o,s[(e+1)%i],s[e]);let c=[{y:0,out:0,rough:0,ao:1},{y:-.1,out:.07,rough:.02,ao:.95},{y:-.34,out:.03,rough:.08,ao:.85},{y:-.8,out:-.06,rough:.16,ao:.78},{y:-1.4,out:-.28,rough:.24,ao:.7},{y:-2.2,out:-.75,rough:.34,ao:.62},{y:-3,out:-1.55,rough:.4,ao:.52},{y:-3.8,out:-2.7,rough:.42,ao:.44},{y:-4.5,out:-4.1,rough:.4,ao:.38},{y:-5.1,out:-5.7,rough:.3,ao:.32}],l=[];for(let e=0;e<c.length;e++){let t=c[e],a=[];for(let e=0;e<i;e++){let[o,s]=n[e],c=o-r[0],l=s-r[1],u=Math.hypot(c,l)||1,d=e/i*Math.PI*2,f=Math.sin(d*11+t.y*1.7)*.6+Math.sin(d*23-t.y*2.3)*.3+Math.sin(d*5+t.y*.9)*.5,p=t.out+f*t.rough,m=Math.max(.12,(u+p)/u);a.push([r[0]+c*m,t.y,r[1]+l*m])}l.push(a)}let u=l.map(e=>e.map(()=>[0,0,0])),d=(e,t,n,r,i,a)=>{let o=l[e][t],s=l[n][r],c=l[i][a],d=s[0]-o[0],f=s[1]-o[1],p=s[2]-o[2],m=c[0]-o[0],h=c[1]-o[1],g=c[2]-o[2],_=f*g-p*h,v=p*m-d*g,y=d*h-f*m;for(let[o,s]of[[e,t],[n,r],[i,a]])u[o][s][0]+=_,u[o][s][1]+=v,u[o][s][2]+=y};for(let e=0;e+1<c.length;e++)for(let t=0;t<i;t++){let n=(t+1)%i;d(e,t,e,n,e+1,n),d(e,t,e+1,n,e+1,t)}let f=[];for(let e=0;e<c.length;e++){let n=[];for(let r=0;r<=i;r++){let a=r%i,o=u[e][a],s=Math.hypot(o[0],o[1],o[2])||1;n.push(t.vertex(l[e][a],[o[0]/s,o[1]/s,o[2]/s],c[e].ao,r/i,-c[e].y))}f.push(n)}for(let e=0;e+1<c.length;e++)for(let n=0;n<i;n++)t.quad(f[e][n],f[e][n+1],f[e+1][n+1],f[e+1][n]);let p=c.length-1,m=t.vertex([r[0],c[p].y-.6,r[1]],[0,-1,0],.3,0,-c[p].y+.6);for(let e=0;e<i;e++)t.tri(m,f[p][e],f[p][e+1]);return t.build()}var Ja=6;function Ya(e,t){let{minX:n,minZ:r,maxX:i,maxZ:a}=e.bounds,o=i-n,s=a-r,c=Math.max(2,Math.round(o*Ja)),l=Math.max(2,Math.round(s*Ja)),u=new Uint8Array(c*l);for(let e=0;e<l;e++){let i=r+(e+.5)/l*s;for(let r=0;r<c;r++){let a=n+(r+.5)/c*o,s=Math.min(et(t,D(a,i)),4);u[e*c+r]=Math.round(s/4*255)}}return{data:u,width:c,height:l,origin:[n,r],size:[o,s]}}function Xa(e,t,n=5){let r=ma(n),i=.25,a=[],o=t.points;for(let e=1;e<o.length;e++){let t=o[e-1],n=o[e],r=n.x-t.x,s=n.y-t.y,c=Math.hypot(r,s)||1,l=r/c,u=s/c,d=Math.atan2(l,u);for(let e=i*.5;e<c;e+=i)for(let n of[-1,1])a.push({x:t.x+l*e-u*n*Wa,z:t.y+u*e+l*n*Wa,yaw:d})}for(let e=1;e+1<o.length;e++){let t=o[e],n=Math.ceil(Math.PI*2*Wa/i);for(let e=0;e<n;e++){let r=e/n*Math.PI*2,i=t.x+Math.cos(r)*Wa,o=t.y+Math.sin(r)*Wa;a.push({x:i,z:o,yaw:Math.atan2(-Math.sin(r),Math.cos(r))})}}let s=[];for(let n of a){let a=et(t,D(n.x,n.z));Math.abs(a-.72)>.03||Ka(e,n.x,n.z)<.35||s.some(e=>Math.hypot(e.x-n.x,e.z-n.z)<i*.7)||s.push({x:n.x,z:n.z,yaw:n.yaw+(r()-.5)*.3,length:.17+r()*.07,width:.1+r()*.035,height:.065+r()*.035,shade:.82+r()*.3})}return s}function Za(e,t,n,r=0){return e.every(e=>Math.hypot(e.x-t,e.z-n)>=e.radius+r)}function Qa(e,t,n,r,i=9,a=.23){let o=ma(i),s=[],{minX:c,minZ:l,maxX:u,maxZ:d}=n.bounds;for(let i=l;i<d;i+=a)for(let l=c;l<u;l+=a){let c=l+(o()-.5)*a*.9,u=i+(o()-.5)*a*.9,d=Ka(n,c,u);if(d<.25)continue;let f=et(t,D(c,u));if(f<.9199999999999999)continue;let p=Math.floor(c),m=Math.floor(u);if(nt(e,p,m)){let e=O(p,m);if(Math.hypot(e.x-c,e.y-u)<.42)continue}if(!Za(r,c,u))continue;let h=Math.min(1,(f-Wa-.2)/1.2);if(o()>.45+.55*h)continue;let g=(.08+o()*.1)*(.6+.5*h)*(d<.8?.8:1);s.push([c,u,o()*Math.PI*2,g,o(),o()*Math.PI*2])}for(let e=s.length-1;e>0;e--){let t=Math.floor(o()*(e+1));[s[e],s[t]]=[s[t],s[e]]}let f=new Float32Array(s.length*6);return s.forEach((e,t)=>f.set(e,t*6)),f}function $a(e,t,n,r,i=13){let a=ma(i),o=[],{minX:s,minZ:c,maxX:l,maxZ:u}=n.bounds,d=.85;for(let i=c;i<u;i+=d)for(let c=s;c<l;c+=d){let s=c+(a()-.5)*d*.8,l=i+(a()-.5)*d*.8;(s<-.3||l<-.3||s>e.width+.3||l>e.height+.3)&&(Ka(n,s,l)<.55||et(t,D(s,l))<1.3||Za(r,s,l,.3)&&(a()>.55||o.push({x:s,z:l,yaw:a()*Math.PI*2,scale:.7+a()*.55,pick:a(),variant:a()})))}return o}var eo={clouds:0,space:1,lava:2},to={firefly:0,dust:1,snow:2,ember:3},no={midnight:{sunDir:[-.55,.68,.36],sunColor:[.72,.8,1.12],skyAmbient:[.2,.23,.38],groundAmbient:[.05,.05,.1],rim:[.28,.4,.85],fog:[.018,.02,.05],fogDensity:.022,env:{zenith:[.02,.025,.07],horizon:[.08,.07,.18],ground:[.01,.012,.02]},abyss:{mode:eo.space,deep:[.004,.005,.016],lit:[.07,.05,.16],shade:[.01,.01,.03],glow:[.16,.06,.3],stars:1,coverage:.5},rock:{light:[.11,.11,.15],dark:[.025,.025,.04],vein:[.25,.45,1.2]},grass:{density:1,root:[.006,.02,.014],tip:[.05,.13,.07]},cracks:0,flowers:.35,flowerColor:[.35,.6,1.4],sparkle:0,motes:{kind:to.firefly,color:[.75,1.3,.45],count:70,size:.05},decor:`night`,post:{exposure:1.08,bloom:1,threshold:1,saturation:1.08,contrast:1.06,vignette:.5,grain:1,lift:[0,.004,.018],gain:[.98,1,1.06]}},meadow:{sunDir:[.5,.7,.5],sunColor:[1.2,1.12,.94],skyAmbient:[.24,.3,.42],groundAmbient:[.12,.15,.08],rim:[.26,.26,.22],fog:[.46,.6,.8],fogDensity:.012,env:{zenith:[.22,.38,.8],horizon:[.72,.82,.95],ground:[.14,.2,.09]},abyss:{mode:eo.clouds,deep:[.32,.48,.74],lit:[1.15,1.14,1.08],shade:[.46,.56,.74],glow:[.55,.6,.62],stars:0,coverage:.62},rock:{light:[.44,.35,.25],dark:[.19,.14,.1],vein:[.62,.55,.4]},grass:{density:1,root:[.025,.07,.018],tip:[.2,.42,.08]},cracks:0,flowers:1,flowerColor:[1.1,.95,.4],sparkle:0,motes:{kind:to.dust,color:[.9,.85,.6],count:45,size:.035},decor:`meadow`,post:{exposure:1,bloom:.5,threshold:1.45,saturation:1.1,contrast:1.05,vignette:.28,grain:.35,lift:[0,0,.006],gain:[1.02,1,.97]}},dusk:{sunDir:[.92,.34,-.12],sunColor:[1.9,1.02,.58],skyAmbient:[.3,.22,.38],groundAmbient:[.14,.07,.1],rim:[1,.5,.28],fog:[.3,.13,.17],fogDensity:.02,env:{zenith:[.08,.06,.2],horizon:[.95,.42,.26],ground:[.08,.05,.06]},abyss:{mode:eo.clouds,deep:[.1,.04,.12],lit:[1.5,.66,.36],shade:[.2,.1,.22],glow:[.9,.35,.14],stars:.35,coverage:.58},rock:{light:[.36,.22,.17],dark:[.1,.06,.07],vein:[.9,.5,.3]},grass:{density:.9,root:[.01,.014,.01],tip:[.12,.1,.035]},cracks:0,flowers:.2,flowerColor:[1.2,.5,.35],sparkle:0,motes:{kind:to.firefly,color:[1.3,.8,.35],count:55,size:.045},decor:`autumn`,post:{exposure:1.1,bloom:1.2,threshold:.95,saturation:1.12,contrast:1.08,vignette:.58,grain:.8,lift:[.012,0,.016],gain:[1.05,.98,.94]}},ember:{sunDir:[.4,.78,.44],sunColor:[1,.6,.42],skyAmbient:[.2,.12,.1],groundAmbient:[.55,.18,.05],rim:[.85,.32,.1],fog:[.11,.035,.018],fogDensity:.024,env:{zenith:[.05,.02,.02],horizon:[.36,.1,.04],ground:[.45,.12,.02]},abyss:{mode:eo.lava,deep:[.02,.008,.006],lit:[.09,.035,.022],shade:[.02,.01,.008],glow:[2.4,.62,.1],stars:0,coverage:.5},rock:{light:[.1,.08,.075],dark:[.022,.016,.015],vein:[2.2,.55,.08]},grass:{density:0,root:[0,0,0],tip:[0,0,0]},cracks:1,flowers:0,flowerColor:[0,0,0],sparkle:0,motes:{kind:to.ember,color:[1.6,.55,.12],count:130,size:.04},decor:`ash`,post:{exposure:1.05,bloom:1.3,threshold:.9,saturation:1.1,contrast:1.1,vignette:.62,grain:1,lift:[.012,.003,0],gain:[1.04,.98,.94]}},frost:{sunDir:[.58,.58,.48],sunColor:[1.05,1.08,1.15],skyAmbient:[.3,.36,.48],groundAmbient:[.3,.34,.42],rim:[.42,.56,.82],fog:[.5,.6,.72],fogDensity:.016,env:{zenith:[.2,.3,.52],horizon:[.72,.8,.92],ground:[.5,.56,.66]},abyss:{mode:eo.clouds,deep:[.3,.38,.52],lit:[.98,1.02,1.12],shade:[.4,.48,.64],glow:[.5,.62,.8],stars:.2,coverage:.72},rock:{light:[.44,.49,.58],dark:[.15,.17,.23],vein:[.55,.8,1.1]},grass:{density:.2,root:[.34,.37,.42],tip:[.72,.74,.78]},cracks:0,flowers:0,flowerColor:[0,0,0],sparkle:1,motes:{kind:to.snow,color:[.85,.9,1],count:240,size:.03},decor:`snow`,post:{exposure:.95,bloom:.65,threshold:1.45,saturation:.96,contrast:1.04,vignette:.34,grain:.45,lift:[0,.004,.012],gain:[.97,1,1.04]}},jade:{sunDir:[.38,.8,.42],sunColor:[.75,.8,.75],skyAmbient:[.38,.44,.42],groundAmbient:[.16,.24,.22],rim:[.24,.38,.36],fog:[.2,.42,.42],fogDensity:.014,env:{zenith:[.1,.26,.3],horizon:[.36,.6,.6],ground:[.1,.2,.18]},abyss:{mode:eo.clouds,deep:[.07,.2,.22],lit:[.55,.86,.8],shade:[.12,.3,.3],glow:[.3,.55,.5],stars:0,coverage:.55},rock:{light:[.25,.4,.36],dark:[.09,.17,.16],vein:[.45,.85,.72]},grass:{density:.7,root:[.03,.1,.08],tip:[.12,.3,.22]},cracks:0,flowers:.3,flowerColor:[.95,.95,.85],sparkle:0,motes:{kind:to.dust,color:[.6,.95,.8],count:35,size:.035},decor:`jade`,post:{exposure:1,bloom:.3,threshold:1.6,saturation:1,contrast:1,vignette:.2,grain:0,lift:[0,0,0],gain:[1,1,1]}}};function ro(e){return no[e]??no.midnight}function io(e){let[t,n,r]=e.sunDir,i=Math.hypot(t,n,r)||1;return[t/i,n/i,r/i]}var ao=9,oo=36,so=class{gl;vbo;ibo;indexCount;indexType;constructor(e,t){this.gl=e;let n=e.createBuffer(),r=e.createBuffer();if(!n||!r)throw Error(`не удалось создать буферы геометрии`);this.vbo=n,this.ibo=r,this.indexCount=t.indexCount,this.indexType=t.indices instanceof Uint32Array?e.UNSIGNED_INT:e.UNSIGNED_SHORT;let i=new Float32Array(t.vertexCount*ao);for(let e=0;e<t.vertexCount;e++)i.set(t.positions.subarray(e*3,e*3+3),e*ao),i.set(t.normals.subarray(e*3,e*3+3),e*ao+3),i.set(t.aux.subarray(e*3,e*3+3),e*ao+6);e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t.indices,e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}bindTo(e){let{gl:t}=this;t.bindBuffer(t.ARRAY_BUFFER,this.vbo);let n=(n,r,i)=>{let a=e.attrib(n);a<0||(t.enableVertexAttribArray(a),t.vertexAttribPointer(a,r,t.FLOAT,!1,oo,i),t.vertexAttribDivisor(a,0))};n(`aPos`,3,0),n(`aNormal`,3,12),n(`aAux`,3,24),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.ibo)}dispose(){this.gl.deleteBuffer(this.vbo),this.gl.deleteBuffer(this.ibo)}},co=class{gl;geometry;capacity;vao;instanceBuffer;floatsPerInstance;data;count=0;constructor(e,t,n,r,i){this.gl=e,this.geometry=n,this.capacity=i,this.floatsPerInstance=r.reduce((e,t)=>e+t.size,0),this.data=new Float32Array(Math.max(1,i)*this.floatsPerInstance);let a=e.createVertexArray(),o=e.createBuffer();if(!a||!o)throw Error(`не удалось создать буферы инстансов`);this.vao=a,this.instanceBuffer=o,e.bindVertexArray(a),n.bindTo(t),e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,this.data.byteLength,e.DYNAMIC_DRAW);let s=this.floatsPerInstance*4,c=0;for(let n of r){let r=t.attrib(n.name);r>=0&&(e.enableVertexAttribArray(r),e.vertexAttribPointer(r,n.size,e.FLOAT,!1,s,c),e.vertexAttribDivisor(r,1)),c+=n.size*4}e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null)}offsetOf(e){return e*this.floatsPerInstance}hasRoom(){return this.count<this.capacity}upload(){if(this.count===0)return;let{gl:e}=this;e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.data,0,this.count*this.floatsPerInstance)}draw(){if(this.count===0)return;let{gl:e}=this;e.bindVertexArray(this.vao),e.drawElementsInstanced(e.TRIANGLES,this.geometry.indexCount,this.geometry.indexType,0,this.count),e.bindVertexArray(null)}dispose(){this.gl.deleteVertexArray(this.vao),this.gl.deleteBuffer(this.instanceBuffer)}},lo=class{gl;constants;vao;vbo;ibo;extraBuffer=null;program;indexCount;indexType;constructor(e,t,n,r,i=[]){this.gl=e,this.constants=i;let a=e.createVertexArray(),o=e.createBuffer(),s=e.createBuffer();if(!a||!o||!s)throw Error(`не удалось создать буферы меша`);this.vao=a,this.vbo=o,this.ibo=s,this.indexCount=n.indexCount,this.indexType=n.indices instanceof Uint32Array?e.UNSIGNED_INT:e.UNSIGNED_SHORT,this.program=t;let c=new Float32Array(n.vertexCount*ao);for(let e=0;e<n.vertexCount;e++)c.set(n.positions.subarray(e*3,e*3+3),e*ao),c.set(n.normals.subarray(e*3,e*3+3),e*ao+3),c.set(n.aux.subarray(e*3,e*3+3),e*ao+6);e.bindVertexArray(a),e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,c,e.STATIC_DRAW);let l=(n,r,i)=>{let a=t.attrib(n);a<0||(e.enableVertexAttribArray(a),e.vertexAttribPointer(a,r,e.FLOAT,!1,oo,i),e.vertexAttribDivisor(a,0))};if(l(`aPos`,3,0),l(`aNormal`,3,12),l(`aAux`,3,24),r){let n=e.createBuffer();if(!n)throw Error(`не удалось создать буфер атрибутов`);this.extraBuffer=n,e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,r.data,e.STATIC_DRAW);let i=r.layout.reduce((e,t)=>e+t.size,0),a=0;for(let n of r.layout){let r=t.attrib(n.name);r>=0&&(e.enableVertexAttribArray(r),e.vertexAttribPointer(r,n.size,e.FLOAT,!1,i*4,a),e.vertexAttribDivisor(r,0)),a+=n.size*4}}for(let{name:n}of i){let r=t.attrib(n);r>=0&&e.disableVertexAttribArray(r)}e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,s),e.bufferData(e.ELEMENT_ARRAY_BUFFER,n.indices,e.STATIC_DRAW),e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}draw(){if(this.indexCount===0)return;let{gl:e}=this;for(let{name:t,value:n}of this.constants){let r=this.program.attrib(t);r<0||e.vertexAttrib4f(r,n[0]??0,n[1]??0,n[2]??0,n[3]??1)}e.bindVertexArray(this.vao),e.drawElements(e.TRIANGLES,this.indexCount,this.indexType,0),e.bindVertexArray(null)}dispose(){let{gl:e}=this;e.deleteVertexArray(this.vao),e.deleteBuffer(this.vbo),e.deleteBuffer(this.ibo),this.extraBuffer&&e.deleteBuffer(this.extraBuffer)}},uo=class{gl;geometry;vao;instanceBuffer;count;constructor(e,t,n,r,i){this.gl=e,this.geometry=n;let a=r.reduce((e,t)=>e+t.size,0);this.count=Math.floor(i.length/a);let o=e.createVertexArray(),s=e.createBuffer();if(!o||!s)throw Error(`не удалось создать буферы инстансов`);this.vao=o,this.instanceBuffer=s,e.bindVertexArray(o),n.bindTo(t),e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW);let c=0;for(let n of r){let r=t.attrib(n.name);r>=0&&(e.enableVertexAttribArray(r),e.vertexAttribPointer(r,n.size,e.FLOAT,!1,a*4,c),e.vertexAttribDivisor(r,1)),c+=n.size*4}e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null)}draw(e=this.count){let t=Math.min(e,this.count);if(t<=0)return;let{gl:n}=this;n.bindVertexArray(this.vao),n.drawElementsInstanced(n.TRIANGLES,this.geometry.indexCount,this.geometry.indexType,0,t),n.bindVertexArray(null)}dispose(){this.gl.deleteVertexArray(this.vao),this.gl.deleteBuffer(this.instanceBuffer)}},q=[.36,.35,.37],fo=[.62,.58,.52],po=[.13,.125,.15],mo=[.2,.13,.08],ho=[.56,.62,.7],go=[.42,.2,.14],_o=[.8,.52,.28],J=[1,.74,.32],Y=[.42,.44,.48],vo=[.9,.48,.3],yo=[.28,.55,.45],bo=[.82,.82,.8],xo=[.3,.19,.11],So=[.2,.13,.085],Co=[.1,.3,.07],wo=[.03,.028,.04],To=[.72,.9,1],Eo=[.55,.26,.15],Do=[.78,.75,.7],Oo=[.6,.1,.08];function X(e,t,n=0){return Array.from({length:e},(r,i)=>t(n+i/e*Math.PI*2,i))}function Z(e){return Math.PI/2-e}var Q=(e,t,n)=>[Math.cos(t)*e,n,Math.sin(t)*e];function ko(e=.66,t=.14){return{shape:`plinth`,pos:[0,t/2,0],size:[e,t,e],mat:`stone`,color:q}}var Ao={spark:[ko(.66,.14),{shape:`column`,pos:[0,.25,0],size:[.24,.24,.24],mat:`stone`,color:q},{shape:`bowl`,pos:[0,.47,0],size:[.56,.22,.56],mat:`metal`,color:_o},{shape:`torus`,pos:[0,.575,0],size:[.58,.05,.58],mat:`metal`,color:J},...X(3,e=>({shape:`rock`,pos:Q(.1,e,.5),size:[.14,.09,.12],rot:[0,e*2,0],mat:`stone`,color:[.25,.08,.03],tint:.5,glow:1.1,flash:.6})),{shape:`flame`,pos:[0,.72,0],size:[.38,.4,.38],mat:`energy`,tint:.8,color:[1,.18,.04],glow:1.1,spin:-.2,flash:1},{shape:`flame`,pos:[0,.77,0],size:[.24,.46,.24],mat:`energy`,glow:1.9,spin:.3,flash:1},{shape:`sphere`,pos:[.12,.92,0],size:[.04,.04,.04],mat:`energy`,glow:2.2,orbit:.6,bob:.05}],frostbud:[{shape:`rock`,pos:[0,.08,0],size:[.62,.16,.58],mat:`stone`,color:ho,tint:.15},{shape:`quartz`,pos:[0,.46,0],size:[.2,.7,.2],rot:[0,.3,0],mat:`ice`,tint:.6,glow:.45},{shape:`quartz`,pos:[-.15,.34,.08],size:[.14,.46,.14],rot:[.2,.5,.35],mat:`ice`,tint:.55,glow:.35},{shape:`quartz`,pos:[.14,.31,-.1],size:[.13,.4,.13],rot:[-.25,.9,-.4],mat:`ice`,tint:.55,glow:.35},{shape:`quartz`,pos:[.06,.24,.17],size:[.1,.26,.1],rot:[.5,.1,-.1],mat:`ice`,tint:.5,glow:.3},{shape:`quartz`,pos:[-.1,.22,-.16],size:[.09,.22,.09],rot:[-.45,1.3,.3],mat:`ice`,tint:.5,glow:.3},{shape:`octa`,pos:[0,.92,0],size:[.1,.14,.1],mat:`crystal`,glow:1.4,spin:.8,bob:.03,flash:1}],coil:[ko(.6,.14),{shape:`cylinder`,pos:[0,.44,0],size:[.13,.62,.13],mat:`metal`,color:Y},...[.24,.31,.38,.45].map(e=>({shape:`torus`,pos:[0,e,0],size:[.22,.05,.22],mat:`metal`,color:vo})),{shape:`torus`,pos:[0,.6,0],size:[.5,.07,.5],rot:[.3,0,0],mat:`metal`,color:vo,spin:.8},{shape:`torus`,pos:[0,.6,0],size:[.38,.05,.38],rot:[-.35,0,.2],mat:`energy`,glow:1,spin:-1.3,flash:.6},{shape:`torus`,pos:[0,.79,0],size:[.3,.09,.3],mat:`metal`,color:Y},{shape:`sphere`,pos:[0,.89,0],size:[.18,.18,.18],mat:`energy`,glow:2,flash:1}],thorn:[{shape:`dome`,pos:[0,.1,0],size:[.64,.2,.64],mat:`stone`,color:mo},...X(6,(e,t)=>({shape:`thorn`,pos:Q(.13,e,.42+t%2*.07),size:[.13,.52+t%2*.14,.15],rot:[.55,Z(e),0],mat:`wood`,color:So,tint:.55,glow:.35})),...X(3,e=>({shape:`petal`,pos:Q(.2,e,.2),size:[.14,.22,.06],rot:[1.1,Z(e),0],mat:`leaf`,color:Co,tint:.6}),.5),{shape:`sphere`,pos:[0,.36,0],size:[.2,.24,.2],mat:`energy`,glow:1.5,bob:.02,flash:1}],sigil:[{shape:`torus`,pos:[0,.04,0],size:[.78,.08,.78],mat:`stone`,color:q},{shape:`cylinder`,pos:[0,.02,0],size:[.56,.04,.56],mat:`dark`,color:wo,tint:.35,glow:.35},...X(6,e=>({shape:`box`,pos:Q(.3,e,.07),size:[.07,.1,.05],rot:[0,Z(e),0],mat:`stone`,color:fo,tint:.4,glow:.8,orbit:.08})),{shape:`octa`,pos:[0,.52,0],size:[.3,.48,.3],mat:`crystal`,glow:1.2,spin:.5,bob:.04,flash:1},...X(3,e=>({shape:`tetra`,pos:Q(.28,e,.36),size:[.1,.1,.1],mat:`crystal`,glow:1.2,orbit:.35,spin:1,bob:.03}))],cairn:[{shape:`rock`,pos:[0,.06,0],size:[.62,.13,.56],mat:`stone`,color:q},{shape:`sphere`,pos:[0,.2,0],size:[.48,.18,.44],rot:[0,.3,.05],mat:`stone`,color:po,tint:.2},{shape:`sphere`,pos:[.02,.34,-.01],size:[.36,.15,.34],rot:[0,.8,.08],mat:`stone`,color:q,tint:.28},{shape:`sphere`,pos:[-.01,.46,.01],size:[.26,.12,.25],rot:[.1,1.4,-.06],mat:`stone`,color:po,tint:.4},{shape:`gem`,pos:[0,.63,0],size:[.2,.22,.2],mat:`crystal`,glow:1.2,spin:.4,bob:.03,flash:1},...X(3,e=>({shape:`rock`,pos:Q(.25,e,.05),size:[.08,.06,.07],rot:[0,e,0],mat:`stone`,color:fo,tint:.5,glow:.6}),.4)],emberglass:[ko(.66,.12),{shape:`column`,pos:[-.27,.39,0],size:[.13,.54,.13],mat:`metal`,color:_o},{shape:`column`,pos:[.27,.39,0],size:[.13,.54,.13],mat:`metal`,color:_o},{shape:`sphere`,pos:[-.27,.7,0],size:[.1,.1,.1],mat:`metal`,color:J},{shape:`sphere`,pos:[.27,.7,0],size:[.1,.1,.1],mat:`metal`,color:J},{shape:`cylinder`,pos:[0,.5,0],size:[.05,.54,.05],rot:[0,0,Math.PI/2],mat:`metal`,color:Y},{shape:`cylinder`,pos:[-.2,.5,0],size:[.12,.03,.12],rot:[0,0,Math.PI/2],mat:`metal`,color:J},{shape:`cylinder`,pos:[.2,.5,0],size:[.12,.03,.12],rot:[0,0,Math.PI/2],mat:`metal`,color:J},{shape:`torus`,pos:[0,.5,0],size:[.46,.1,.46],rot:[Math.PI/2,0,0],mat:`metal`,color:_o},{shape:`sphere`,pos:[0,.5,0],size:[.38,.38,.12],mat:`glass`,glow:1.9,flash:1},{shape:`cone`,pos:[0,.5,.17],size:[.12,.14,.12],rot:[Math.PI/2,0,0],mat:`energy`,glow:1.3,flash:1},{shape:`sphere`,pos:[0,.2,0],size:[.12,.12,.12],mat:`energy`,glow:1.1,flash:.5}],brine:[{shape:`torus`,pos:[0,.12,0],size:[.76,.24,.76],mat:`stone`,color:q,tint:.1},{shape:`cylinder`,pos:[0,.13,0],size:[.54,.04,.54],mat:`glass`,glow:1,flash:.5},{shape:`quartz`,pos:[-.18,.38,.12],size:[.12,.44,.12],rot:[.25,.3,.35],mat:`ice`,tint:.6,glow:.45},{shape:`quartz`,pos:[.2,.33,-.1],size:[.1,.36,.1],rot:[-.3,1.1,-.4],mat:`ice`,tint:.6,glow:.45},{shape:`sphere`,pos:[0,.4,0],size:[.24,.12,.24],mat:`energy`,glow:.6,bob:.02,spin:.3},{shape:`octa`,pos:[0,.62,0],size:[.2,.3,.2],mat:`crystal`,glow:1.3,spin:.5,bob:.04,flash:1}],veil:[ko(.64,.1),{shape:`box`,pos:[-.21,.45,.03],size:[.1,.68,.3],rot:[0,.25,.2],mat:`dark`,color:wo,tint:.5,glow:.25},{shape:`box`,pos:[.21,.4,-.03],size:[.1,.58,.28],rot:[0,-.25,-.22],mat:`dark`,color:wo,tint:.5,glow:.25},{shape:`box`,pos:[-.155,.46,.04],size:[.015,.42,.05],rot:[0,.25,.2],mat:`energy`,glow:1.2,flash:.6},{shape:`box`,pos:[.155,.41,-.02],size:[.015,.36,.05],rot:[0,-.25,-.22],mat:`energy`,glow:1.2,flash:.6},{shape:`octa`,pos:[0,.62,0],size:[.24,.36,.24],mat:`crystal`,glow:1.5,spin:-.6,bob:.04,flash:1},...X(2,e=>({shape:`sphere`,pos:Q(.14,e,.72),size:[.05,.05,.05],mat:`energy`,glow:1.6,orbit:.6,bob:.04}))],bramble:[{shape:`dome`,pos:[0,.08,0],size:[.62,.16,.62],mat:`stone`,color:mo},{shape:`canopy`,pos:[0,.3,0],size:[.5,.36,.5],rot:[0,.7,0],mat:`leaf`,color:[.05,.14,.05],tint:.2},...X(5,e=>({shape:`thorn`,pos:Q(.2,e,.34),size:[.06,.2,.07],rot:[1.1,Z(e),0],mat:`wood`,color:So}),.3),...X(4,(e,t)=>({shape:`sphere`,pos:Q(.17,e,.42+t%2*.08),size:[.09,.09,.09],mat:`energy`,glow:1.5,bob:.02,flash:1}),.8)],forge:[{shape:`box`,pos:[0,.06,0],size:[.8,.12,.74],mat:`stone`,color:q},{shape:`box`,pos:[0,.34,-.04],size:[.56,.44,.5],mat:`stone`,color:go},{shape:`dome`,pos:[0,.64,-.04],size:[.56,.22,.5],mat:`stone`,color:go},{shape:`box`,pos:[0,.3,.21],size:[.28,.2,.06],mat:`energy`,glow:1.7,flash:1},{shape:`box`,pos:[-.285,.32,-.04],size:[.02,.08,.26],mat:`energy`,glow:1.2,flash:.6},{shape:`box`,pos:[.285,.32,-.04],size:[.02,.08,.26],mat:`energy`,glow:1.2,flash:.6},{shape:`cylinder`,pos:[.08,.75,.02],size:[.14,.02,.14],mat:`energy`,glow:1.1,flash:.6},{shape:`box`,pos:[0,.43,.22],size:[.34,.06,.07],mat:`metal`,color:Y},{shape:`cylinder`,pos:[-.16,.88,-.12],size:[.14,.42,.14],mat:`stone`,color:go},{shape:`cylinder`,pos:[-.16,1.1,-.12],size:[.18,.04,.18],mat:`metal`,color:Y},{shape:`flame`,pos:[-.16,1.18,-.12],size:[.12,.14,.12],mat:`energy`,glow:1.3,spin:.4,flash:.8},{shape:`box`,pos:[.26,.21,.24],size:[.16,.08,.1],mat:`metal`,color:Y},{shape:`box`,pos:[.26,.15,.24],size:[.08,.06,.07],mat:`metal`,color:Y}],glacier:[{shape:`rock`,pos:[0,.07,0],size:[.76,.16,.72],mat:`stone`,color:ho,tint:.15},{shape:`box`,pos:[-.05,.32,.04],size:[.46,.38,.4],rot:[0,.3,.14],mat:`ice`,tint:.5,glow:.3},{shape:`quartz`,pos:[.08,.66,-.04],size:[.3,.82,.28],rot:[0,.2,-.16],mat:`ice`,tint:.7,glow:.45},{shape:`quartz`,pos:[-.2,.52,-.14],size:[.16,.5,.16],rot:[-.2,.7,.38],mat:`ice`,tint:.65,glow:.4},{shape:`quartz`,pos:[.2,.36,.2],size:[.13,.36,.13],rot:[.4,1.2,-.3],mat:`ice`,tint:.65,glow:.4},{shape:`octa`,pos:[.08,1.2,-.06],size:[.1,.14,.1],mat:`crystal`,glow:1.3,spin:.9,bob:.03,flash:1}],tesla:[ko(.64,.16),{shape:`column`,pos:[0,.5,0],size:[.16,.7,.16],mat:`metal`,color:Y},...[.3,.44,.58].map(e=>({shape:`cylinder`,pos:[0,e,0],size:[.26,.04,.26],mat:`stone`,color:bo})),{shape:`torus`,pos:[0,.55,0],size:[.5,.07,.5],rot:[.35,0,0],mat:`metal`,color:vo,spin:1.2},{shape:`torus`,pos:[0,.55,0],size:[.4,.06,.4],rot:[-.3,0,.3],mat:`energy`,glow:1.1,spin:-1.8,flash:.6},{shape:`torus`,pos:[0,.88,0],size:[.36,.1,.36],mat:`metal`,color:Y},{shape:`sphere`,pos:[0,1.02,0],size:[.3,.3,.3],mat:`energy`,glow:2,flash:1}],bloom:[{shape:`vase`,pos:[0,.13,0],size:[.46,.26,.46],mat:`stone`,color:Eo},{shape:`cylinder`,pos:[0,.23,0],size:[.34,.02,.34],mat:`stone`,color:mo},{shape:`cylinder`,pos:[0,.58,0],size:[.07,.72,.07],mat:`leaf`,color:Co,tint:.3},{shape:`petal`,pos:[.1,.44,0],size:[.16,.26,.06],rot:[1,Math.PI/2,0],mat:`leaf`,color:Co,tint:.3},{shape:`petal`,pos:[-.1,.58,0],size:[.15,.24,.06],rot:[1,-Math.PI/2,0],mat:`leaf`,color:Co,tint:.3},...X(7,e=>({shape:`petal`,pos:Q(.13,e,.98),size:[.22,.32,.07],rot:[1.2,Z(e),0],mat:`leaf`,color:[.1,.35,.12],tint:.85,glow:.4,orbit:.05})),...X(5,e=>({shape:`petal`,pos:Q(.07,e,1.02),size:[.14,.22,.06],rot:[.7,Z(e),0],mat:`leaf`,tint:1,glow:.7,orbit:-.08}),.4),{shape:`sphere`,pos:[0,1.03,0],size:[.14,.12,.14],mat:`energy`,glow:1.8,flash:1}],prism:[{shape:`cylinder`,pos:[0,.03,0],size:[.62,.06,.62],mat:`stone`,color:po},{shape:`torus`,pos:[0,.05,0],size:[.74,.08,.74],mat:`metal`,color:J},...X(3,e=>({shape:`column`,pos:Q(.27,e,.19),size:[.08,.28,.08],mat:`metal`,color:J}),.5),{shape:`octa`,pos:[0,.64,0],size:[.34,.72,.34],mat:`crystal`,glow:1.3,spin:.35,bob:.04,flash:1},{shape:`torus`,pos:[0,.64,0],size:[.56,.03,.56],rot:[.4,0,.2],mat:`energy`,glow:1,spin:.5},...X(3,e=>({shape:`octa`,pos:Q(.3,e,.42),size:[.1,.18,.1],mat:`crystal`,glow:1.2,orbit:.3,spin:1,bob:.03}))],eclipse:[ko(.6,.14),{shape:`column`,pos:[0,.27,0],size:[.16,.28,.16],mat:`metal`,color:J},{shape:`torus`,pos:[0,.66,0],size:[.8,.12,.8],rot:[Math.PI/2,0,0],mat:`metal`,color:J},{shape:`sphere`,pos:[0,.66,0],size:[.42,.42,.42],mat:`dark`,color:wo,tint:.2,glow:.12},{shape:`torus`,pos:[0,.66,0],size:[.54,.05,.54],rot:[Math.PI/2,0,0],mat:`energy`,glow:1.6,flash:1},...X(2,e=>({shape:`sphere`,pos:Q(.34,e,.66),size:[.07,.07,.07],mat:`energy`,glow:1.3,orbit:.4}))],beacon:[ko(.7,.14),{shape:`frustum`,pos:[0,.42,0],size:[.44,.56,.44],mat:`stone`,color:Do},{shape:`cylinder`,pos:[0,.33,0],size:[.42,.08,.42],mat:`stone`,color:Oo},{shape:`cylinder`,pos:[0,.54,0],size:[.37,.08,.37],mat:`stone`,color:Oo},{shape:`cylinder`,pos:[0,.73,0],size:[.42,.04,.42],mat:`metal`,color:Y},{shape:`torus`,pos:[0,.8,0],size:[.4,.03,.4],mat:`metal`,color:Y},{shape:`cylinder`,pos:[0,.86,0],size:[.22,.22,.22],mat:`glass`,glow:1.9,flash:.7},{shape:`cone`,pos:[0,1.04,0],size:[.28,.16,.28],mat:`metal`,color:yo},{shape:`sphere`,pos:[0,1.14,0],size:[.05,.05,.05],mat:`metal`,color:J}],sunspire:[ko(.74,.16),{shape:`spire`,pos:[0,.57,0],size:[.26,.82,.26],mat:`stone`,color:fo},{shape:`torus`,pos:[0,.9,0],size:[.56,.05,.56],rot:[.2,0,0],mat:`metal`,color:J,spin:.6},{shape:`sphere`,pos:[0,1.18,0],size:[.36,.36,.36],mat:`energy`,glow:2.2,bob:.03,flash:1},{shape:`torus`,pos:[0,1.18,0],size:[.5,.04,.5],rot:[.5,0,.3],mat:`energy`,glow:1.2,spin:-.4},...X(6,e=>({shape:`cone`,pos:Q(.27,e,1.18),size:[.07,.18,.07],rot:[Math.PI/2,Z(e),0],mat:`energy`,glow:1.6,orbit:.25,bob:.03}))],permafrost:[{shape:`box`,pos:[0,.07,0],size:[.82,.14,.78],mat:`stone`,color:ho},{shape:`box`,pos:[0,.3,0],size:[.64,.32,.6],mat:`ice`,tint:.4,glow:.25},...[[-.26,-.24],[.26,-.24],[-.26,.24],[.26,.24]].map(([e,t])=>({shape:`box`,pos:[e,.5,t],size:[.1,.1,.1],mat:`ice`,tint:.45,glow:.3})),{shape:`box`,pos:[-.03,.59,.02],size:[.44,.26,.4],rot:[0,.3,0],mat:`ice`,tint:.55,glow:.35},{shape:`quartz`,pos:[0,1.02,0],size:[.26,.64,.26],mat:`ice`,tint:.8,glow:.6},{shape:`quartz`,pos:[-.22,.84,-.16],size:[.14,.4,.14],rot:[-.2,.4,.3],mat:`ice`,tint:.75,glow:.5},{shape:`quartz`,pos:[.22,.8,.16],size:[.13,.36,.13],rot:[.25,.9,-.32],mat:`ice`,tint:.75,glow:.5},{shape:`octa`,pos:[0,1.46,0],size:[.12,.16,.12],mat:`crystal`,glow:1.5,spin:1,bob:.03,flash:1}],stormcrown:[ko(.72,.16),{shape:`column`,pos:[0,.47,0],size:[.3,.62,.3],mat:`stone`,color:po},{shape:`torus`,pos:[0,.84,0],size:[.66,.12,.66],mat:`metal`,color:J},...X(5,e=>({shape:`thorn`,pos:Q(.27,e,1.07),size:[.1,.44,.12],rot:[.3,Z(e),0],mat:`metal`,color:J})),...X(5,e=>({shape:`gem`,pos:Q(.33,e,.84),size:[.07,.07,.07],rot:[Math.PI/2,Z(e),0],mat:`crystal`,glow:1.2}),Math.PI/5),{shape:`sphere`,pos:[0,1.15,0],size:[.32,.32,.32],mat:`energy`,glow:2.1,bob:.03,flash:1},...X(3,e=>({shape:`sphere`,pos:Q(.22,e,1.15),size:[.04,.04,.04],mat:`energy`,glow:2.2,orbit:1.2,bob:.05}))],voidwell:[{shape:`torus`,pos:[0,.1,0],size:[.9,.2,.9],mat:`stone`,color:po},{shape:`cylinder`,pos:[0,.11,0],size:[.68,.03,.68],mat:`vortex`,glow:1.3},...X(4,e=>({shape:`spire`,pos:Q(.33,e,.36),size:[.11,.54,.11],rot:[.35,Z(e),0],mat:`dark`,color:wo,tint:.4,glow:.3}),Math.PI/4),{shape:`octa`,pos:[0,.72,0],size:[.3,.56,.3],mat:`crystal`,glow:1.8,spin:.9,bob:.05,flash:1},{shape:`octa`,pos:[0,1.14,0],size:[.18,.32,.18],mat:`crystal`,glow:2.1,spin:-1.4,bob:.04,flash:1},...X(3,e=>({shape:`tetra`,pos:Q(.28,e,.62),size:[.09,.09,.09],mat:`crystal`,glow:1.4,orbit:.5,spin:1.3,bob:.03}))],heartwood:[{shape:`dome`,pos:[0,.08,0],size:[.78,.16,.78],mat:`stone`,color:mo},{shape:`cone`,pos:[0,.22,0],size:[.42,.3,.42],mat:`wood`,color:So},...X(3,e=>({shape:`thorn`,pos:Q(.2,e,.15),size:[.1,.28,.1],rot:[1.25,Z(e),0],mat:`wood`,color:So}),.4),{shape:`capsule`,pos:[0,.55,0],size:[.24,.8,.24],mat:`wood`,color:So},...X(3,e=>({shape:`cylinder`,pos:Q(.12,e,.84),size:[.07,.34,.07],rot:[.7,Z(e),0],mat:`wood`,color:So}),1.1),...X(3,e=>({shape:`canopy`,pos:Q(.2,e,1),size:[.46,.36,.46],rot:[.2,e,0],mat:`leaf`,color:[.05,.2,.05],tint:.5,glow:.28}),.3),{shape:`canopy`,pos:[0,1.2,0],size:[.56,.42,.56],rot:[0,.4,0],mat:`leaf`,color:[.06,.24,.06],tint:.55,glow:.35,bob:.01},...X(5,(e,t)=>({shape:`sphere`,pos:Q(.3,e,.98+t%2*.18),size:[.08,.08,.08],mat:`energy`,glow:1.6,bob:.02,flash:1}),.9)],"shard-ruby":jo(),"shard-sapphire":jo(),"shard-topaz":jo(),"shard-emerald":jo(),"shard-amethyst":jo(),"shard-onyx":jo()};function jo(){return[{shape:`rock`,pos:[0,.05,0],size:[.44,.1,.4],mat:`stone`,color:q},{shape:`gem`,pos:[0,.25,0],size:[.3,.3,.3],rot:[.3,.2,.15],mat:`crystal`,glow:1.2,flash:1},{shape:`tetra`,pos:[.15,.13,.1],size:[.07,.07,.07],rot:[.4,.6,.2],mat:`crystal`,glow:.9}]}var Mo=[{shape:`plinth`,pos:[0,.1,0],size:[1.5,.2,1.5],mat:`stone`,color:q},{shape:`cylinder`,pos:[0,.22,0],size:[1,.05,1],mat:`dark`,color:wo,tint:.3,glow:.4},...X(4,e=>({shape:`column`,pos:Q(.6,e,.5),size:[.14,.6,.14],mat:`stone`,color:fo}),Math.PI/4),...X(4,e=>({shape:`octa`,pos:Q(.6,e,.94),size:[.1,.18,.1],mat:`crystal`,glow:1.2,spin:.5,bob:.03}),Math.PI/4),{shape:`octa`,pos:[0,1.22,0],size:[.58,1.12,.58],mat:`crystal`,glow:1.6,spin:.25,bob:.06},{shape:`torus`,pos:[0,1.22,0],size:[1.1,.06,1.1],rot:[.35,0,0],mat:`metal`,color:J,spin:.35},{shape:`torus`,pos:[0,1.22,0],size:[.86,.04,.86],rot:[-.4,0,.25],mat:`energy`,glow:1.2,spin:-.5}],No=[{shape:`torus`,pos:[0,.68,0],size:[2.5,.28,2.5],rot:[Math.PI/2,0,0],mat:`stone`,color:po},{shape:`cylinder`,pos:[0,.68,0],size:[1.62,.04,1.62],rot:[Math.PI/2,0,0],mat:`vortex`,glow:1.3},...X(7,e=>({shape:`box`,pos:[Math.cos(e)*1.1,.68+Math.sin(e)*1.1,.13],size:[.12,.2,.05],rot:[0,0,e-Math.PI/2],mat:`stone`,color:fo,glow:.9}),Math.PI*.1),{shape:`rock`,pos:[-1.05,.12,.05],size:[.5,.3,.5],mat:`stone`,color:po},{shape:`rock`,pos:[1.08,.1,-.05],size:[.46,.26,.44],rot:[0,1.2,0],mat:`stone`,color:po}];function Po(e,t,n){let r=n;switch(e){case`tree`:return[{shape:`capsule`,pos:[0,.34,0],size:[.14,.7,.14],mat:`wood`,color:So},{shape:`canopy`,pos:[0,.86,0],size:[.78,.62,.78],rot:[0,r*3,0],mat:`leaf`,color:t.leaf},{shape:`canopy`,pos:[.2,.7,.12],size:[.42,.36,.42],rot:[0,r*5,0],mat:`leaf`,color:t.leafAlt},{shape:`canopy`,pos:[-.18,.74,-.12],size:[.38,.32,.38],rot:[0,r*7,0],mat:`leaf`,color:t.leaf}];case`pine`:return[{shape:`cylinder`,pos:[0,.14,0],size:[.1,.28,.1],mat:`wood`,color:So},{shape:`cone`,pos:[0,.46,0],size:[.66,.5,.66],mat:`leaf`,color:t.needle},{shape:`cone`,pos:[0,.76,0],size:[.5,.42,.5],mat:`leaf`,color:t.needle},{shape:`cone`,pos:[0,1.02,0],size:[.32,.34,.32],mat:t.snowCaps?`stone`:`leaf`,color:t.snowCaps?[.85,.9,.98]:t.needle}];case`rocks`:return[{shape:`rock`,pos:[0,.14,0],size:[.56,.3,.5],rot:[0,r*2,0],mat:`stone`,color:t.rock},{shape:`rock`,pos:[.3,.08,.16],size:[.28,.16,.26],rot:[0,r*4,0],mat:`stone`,color:t.rock},{shape:`rock`,pos:[-.24,.06,.22],size:[.2,.12,.2],rot:[0,r*6,0],mat:`stone`,color:t.rock}];case`bush`:return[{shape:`canopy`,pos:[0,.16,0],size:[.5,.34,.5],rot:[0,r*3,0],mat:`leaf`,color:t.leafAlt},{shape:`canopy`,pos:[.2,.12,.1],size:[.3,.24,.3],rot:[0,r*5,0],mat:`leaf`,color:t.leaf}];case`mushroom`:return[{shape:`cylinder`,pos:[0,.12,0],size:[.08,.24,.08],mat:`stone`,color:[.6,.58,.55]},{shape:`dome`,pos:[0,.27,0],size:[.28,.12,.28],mat:`leaf`,color:t.glow,glow:1.1},{shape:`cylinder`,pos:[.18,.07,.08],size:[.05,.14,.05],mat:`stone`,color:[.6,.58,.55]},{shape:`dome`,pos:[.18,.16,.08],size:[.16,.07,.16],mat:`leaf`,color:t.glow,glow:1.1}];case`deadtree`:return[{shape:`thorn`,pos:[0,.45,0],size:[.16,.9,.2],rot:[.12,r*3,0],mat:`wood`,color:[.06,.045,.04]},{shape:`thorn`,pos:[.12,.62,.02],size:[.07,.34,.08],rot:[.9,1.2+r,0],mat:`wood`,color:[.06,.045,.04]},{shape:`thorn`,pos:[-.1,.54,-.02],size:[.06,.28,.07],rot:[.95,-1.8+r,0],mat:`wood`,color:[.06,.045,.04]}];default:return[{shape:`rock`,pos:[0,.08,0],size:[.46,.16,.42],rot:[0,r*2,0],mat:`stone`,color:t.rock},{shape:`quartz`,pos:[0,.36,0],size:[.14,.52,.14],rot:[.1,r*3,.12],mat:`crystal`,color:t.crystal,glow:.7},{shape:`quartz`,pos:[.12,.24,.06],size:[.1,.32,.1],rot:[.3,r*5,-.4],mat:`crystal`,color:t.crystal,glow:.6},{shape:`quartz`,pos:[-.1,.22,-.05],size:[.09,.28,.09],rot:[-.35,r*7,.45],mat:`crystal`,color:t.crystal,glow:.6}]}}var Fo={night:{leaf:[.03,.08,.06],leafAlt:[.02,.06,.05],needle:[.015,.05,.035],rock:[.12,.12,.15],crystal:[.35,.55,1.2],glow:[.3,.6,1.4],snowCaps:!1,mix:[[`pine`,3],[`mushroom`,2],[`rocks`,2],[`crystals`,1.5],[`bush`,1]]},meadow:{leaf:[.09,.24,.04],leafAlt:[.14,.31,.05],needle:[.04,.12,.05],rock:[.42,.4,.36],crystal:[.6,.85,1],glow:[1,.9,.5],snowCaps:!1,mix:[[`tree`,3],[`bush`,2.5],[`rocks`,1.5],[`pine`,1]]},autumn:{leaf:[.55,.2,.05],leafAlt:[.62,.36,.06],needle:[.06,.1,.05],rock:[.3,.22,.18],crystal:[1,.6,.35],glow:[1.2,.6,.3],snowCaps:!1,mix:[[`tree`,3],[`bush`,2],[`rocks`,1.5],[`pine`,1]]},ash:{leaf:[.05,.04,.035],leafAlt:[.05,.04,.035],needle:[.05,.04,.035],rock:[.07,.06,.06],crystal:[1.4,.4,.06],glow:[1.4,.4,.06],snowCaps:!1,mix:[[`deadtree`,3],[`rocks`,3],[`crystals`,1.5]]},snow:{leaf:[.6,.66,.72],leafAlt:[.7,.75,.8],needle:[.03,.09,.07],rock:[.4,.44,.5],crystal:[.6,.85,1.1],glow:[.6,.85,1.1],snowCaps:!0,mix:[[`pine`,4],[`rocks`,2],[`crystals`,1.5]]},jade:{leaf:[.06,.24,.18],leafAlt:[.1,.32,.24],needle:[.04,.16,.12],rock:[.3,.42,.38],crystal:[.5,1,.8],glow:[.5,1,.8],snowCaps:!1,mix:[[`tree`,3],[`bush`,2],[`rocks`,2]]}};function Io(e,t){let n=e.mix.reduce((e,[,t])=>e+t,0),r=0;for(let[i,a]of e.mix)if(r+=a/n,t<=r)return i;return e.mix[e.mix.length-1][0]}function Lo(e){let t=0;for(let n of e)t=Math.max(t,n.pos[1]+n.size[1]*.5+(n.bob??0));return t}var Ro=class{gl;size;fbo;texture;viewProj=nr();constructor(e,t){this.gl=e,this.size=t;let n=zo(e,t),r=e.createFramebuffer();if(!r)throw Error(`не удалось создать кадровый буфер теней`);e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,n,0),e.drawBuffers([e.NONE]),e.readBuffer(e.NONE);let i=e.checkFramebufferStatus(e.FRAMEBUFFER);if(e.bindFramebuffer(e.FRAMEBUFFER,null),i!==e.FRAMEBUFFER_COMPLETE)throw e.deleteFramebuffer(r),e.deleteTexture(n),Error(`карта теней не собирается: ${i}`);this.fbo=r,this.texture=n}fit(e,t,n,r){let i=(t.minX+t.maxX)/2,a=(t.minZ+t.maxZ)/2,o=(n+r)/2,s=M(i+e[0]*60,o+e[1]*60,a+e[2]*60),c=Math.abs(e[1])>.98?M(0,0,1):M(0,1,0),l=nr();or(l,s,M(i,o,a),c);let u=1/0,d=1/0,f=1/0,p=-1/0,m=-1/0,h=-1/0;for(let e of[t.minX,t.maxX])for(let i of[n,r])for(let n of[t.minZ,t.maxZ]){let t=cr(l,M(e,i,n));u=Math.min(u,t.x),p=Math.max(p,t.x),d=Math.min(d,t.y),m=Math.max(m,t.y),f=Math.min(f,t.z),h=Math.max(h,t.z)}let g=nr();ar(g,u,p,d,m,-h-1,-f+1),sr(this.viewProj,g,l)}begin(){let{gl:e}=this;e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.viewport(0,0,this.size,this.size),e.clear(e.DEPTH_BUFFER_BIT)}dispose(){this.gl.deleteFramebuffer(this.fbo),this.gl.deleteTexture(this.texture)}};function zo(e,t,n){let r=e.createTexture();if(!r)throw Error(`не удалось создать текстуру глубины`);e.bindTexture(e.TEXTURE_2D,r);let i=n===void 0?null:new Uint32Array(t*t).fill(n);return e.texImage2D(e.TEXTURE_2D,0,e.DEPTH_COMPONENT24,t,t,0,e.DEPTH_COMPONENT,e.UNSIGNED_INT,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_COMPARE_FUNC,e.LEQUAL),e.bindTexture(e.TEXTURE_2D,null),r}function Bo(e=.7){return _a([[0,-.5,.75],[.5,-.5,.8],[.5*e,.5],[0,.5]],{sides:18,smoothAngle:20})}var Vo={sphere:()=>ga(2),ball:()=>ga(1),cylinder:()=>va(18,.06),frustum:()=>Bo(.7),cone:()=>ya(18),dome:()=>ba(18),capsule:()=>xa(14),torus:()=>Da(24,8,.12),torusLow:()=>Da(14,6,.12),box:()=>Oa(.08),rbox:()=>Oa(.3),rboxLow:()=>Oa(.3,1),kerb:()=>Oa(.24,1),gem:()=>ka(),quartz:()=>Aa(6),octa:()=>ja(),tetra:()=>Ma(),spire:()=>Na(),wedge:()=>Pa(),rock:()=>Fa(7),canopy:()=>Ia(3),thorn:()=>La(10,8,.45),petal:()=>Ra(6,8),flame:()=>Sa(14),bowl:()=>Ca(20),plinth:()=>wa(20),column:()=>Ta(16),vase:()=>Ea(18)};Object.keys(Vo);function Ho(e,t){let n=Math.max(t[0],t[1],t[2]);return e===`sphere`&&n<.13?`ball`:e===`torus`&&n<.3?`torusLow`:e===`rbox`&&n<.16?`rboxLow`:e}var Uo={stone:0,metal:1,crystal:2,ice:3,energy:4,wood:5,leaf:6,dark:7,glass:8,vortex:9},$=`precision highp float;
precision highp int;
precision highp sampler2D;
precision highp sampler2DShadow;
`,Wo=`
vec3 qrot(vec4 q, vec3 v) {
  return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}
`,Go=`
uniform vec3 uEye;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyAmbient;
uniform vec3 uGroundAmbient;
uniform vec3 uRimColor;
uniform vec3 uFogColor;
uniform float uFogDensity;
uniform vec3 uEnvZenith;
uniform vec3 uEnvHorizon;
uniform vec3 uEnvGround;

uniform sampler2DShadow uShadowMap;
uniform mat4 uLightViewProj;
uniform float uShadowOn;
uniform float uShadowTexel;

const float PI = 3.14159265;

/**
 * Мягкая тень: четыре выборки со сдвигом, каждая — аппаратный PCF по
 * четырём текселям. Смещение по нормали убирает «угри» на пологих гранях.
 */
float shadowAt(vec3 world, vec3 n) {
  if (uShadowOn < 0.5) return 1.0;
  float slope = 1.0 - clamp(dot(n, uSunDir), 0.0, 1.0);
  vec3 p = world + n * (0.012 + 0.03 * slope);
  vec4 lp = uLightViewProj * vec4(p, 1.0);
  vec3 c = lp.xyz / lp.w * 0.5 + 0.5;
  if (c.x < 0.0 || c.y < 0.0 || c.x > 1.0 || c.y > 1.0 || c.z > 1.0) return 1.0;
  float z = c.z - 0.0009;
  float t = uShadowTexel;
  float s = texture(uShadowMap, vec3(c.xy + vec2(-0.6, -1.4) * t, z));
  s += texture(uShadowMap, vec3(c.xy + vec2(1.4, -0.6) * t, z));
  s += texture(uShadowMap, vec3(c.xy + vec2(0.6, 1.4) * t, z));
  s += texture(uShadowMap, vec3(c.xy + vec2(-1.4, 0.6) * t, z));
  return s * 0.25;
}

/** Одна выборка вместо четырёх — для травы, где тень считается на вершину. */
float shadowAtFast(vec3 world) {
  if (uShadowOn < 0.5) return 1.0;
  vec4 lp = uLightViewProj * vec4(world, 1.0);
  vec3 c = lp.xyz / lp.w * 0.5 + 0.5;
  if (c.x < 0.0 || c.y < 0.0 || c.x > 1.0 || c.y > 1.0 || c.z > 1.0) return 1.0;
  return texture(uShadowMap, vec3(c.xy, c.z - 0.0015));
}

/** Процедурное окружение: что видно в металле и самоцвете. */
vec3 envColor(vec3 dir, float rough) {
  float up = dir.y;
  vec3 sky = mix(uEnvHorizon, uEnvZenith, smoothstep(0.0, 0.7, up));
  vec3 below = mix(uEnvHorizon, uEnvGround, smoothstep(0.0, -0.35, up));
  vec3 c = up >= 0.0 ? sky : below;
  float sharp = mix(900.0, 6.0, rough);
  c += uSunColor * pow(max(dot(dir, uSunDir), 0.0), sharp) * (1.0 - rough) * 3.0;
  return c;
}

/** Рассеянный свет по нормали: сверху — небо, снизу — отражённый. */
vec3 hemiLight(vec3 n) {
  return mix(uGroundAmbient, uSkyAmbient, n.y * 0.5 + 0.5);
}

/**
 * Освещение по Куку — Торрансу: GGX, Шлик, Смит. Свет солнца в единицах,
 * где ламбертова поверхность белого цвета при прямом солнце даёт ровно
 * цвет солнца, — так проще подбирать темы.
 */
vec3 shadeSurface(vec3 albedo, float metal, float rough, vec3 n, vec3 v, float shadow, float ao) {
  vec3 l = uSunDir;
  vec3 h = normalize(l + v);
  float NoL = max(dot(n, l), 0.0);
  float NoV = max(dot(n, v), 1e-3);
  float NoH = max(dot(n, h), 0.0);
  float VoH = max(dot(v, h), 0.0);
  float a = max(rough * rough, 0.002);
  float a2 = a * a;
  float d = NoH * NoH * (a2 - 1.0) + 1.0;
  float D = a2 / (PI * d * d);
  float k = (rough + 1.0) * (rough + 1.0) / 8.0;
  float G = (NoL / (NoL * (1.0 - k) + k)) * (NoV / (NoV * (1.0 - k) + k));
  vec3 f0 = mix(vec3(0.04), albedo, metal);
  vec3 F = f0 + (1.0 - f0) * pow(1.0 - VoH, 5.0);
  vec3 spec = D * G * F / max(4.0 * NoL * NoV, 1e-3) * PI;
  vec3 kd = (1.0 - F) * (1.0 - metal);
  vec3 direct = (kd * albedo + spec) * uSunColor * NoL * shadow;

  vec3 Fr = f0 + (max(vec3(1.0 - rough), f0) - f0) * pow(1.0 - NoV, 5.0);
  // Металлу оставлена треть рассеянного света. По физике у него его нет, но
  // ночью бронза тогда отражает чёрное небо и превращается в силуэт.
  vec3 ambient = hemiLight(n) * albedo * mix(1.0, 0.32, metal) * ao;
  vec3 reflection = envColor(reflect(-v, n), rough) * Fr * mix(0.35, 1.0, ao) * mix(0.4, 1.0, shadow);
  return direct + ambient + reflection;
}

/** Контур по силуэту — отделяет модель от земли даже в тени. */
vec3 rimLight(vec3 n, vec3 v, float strength) {
  float f = pow(1.0 - max(dot(n, v), 0.0), 3.0);
  return uRimColor * f * strength;
}

/**
 * Дымка: по расстоянию до глаза и по глубине под островом. Низ обрыва
 * растворяется в том же цвете, что и бездна вокруг.
 */
vec3 applyFog(vec3 col, vec3 world) {
  float dist = length(world - uEye);
  float f = 1.0 - exp(-max(dist - 14.0, 0.0) * uFogDensity);
  float below = smoothstep(0.0, 6.0, -world.y);
  f = max(f, below * 0.92);
  return mix(col, uFogColor, clamp(f, 0.0, 1.0));
}
`,Ko=`
float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.zyx + 31.32);
  return fract((p.x + p.y) * p.z);
}
`,qo=`#version 300 es
${$}
out vec2 vNdc;
void main() {
  vec2 pos = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vNdc = pos * 2.0 - 1.0;
  // Фон лежит на дальней плоскости: рисуется после острова и моделей, и
  // тест глубины отсекает всё, что ими уже закрыто, — дорогие облака
  // считаются только там, где их действительно видно.
  gl_Position = vec4(pos * 2.0 - 1.0, 1.0, 1.0);
}
`,Jo=`#version 300 es
${$}
${z}

in vec2 vNdc;
out vec4 fragColor;

uniform mat4 uInvViewProj;
uniform vec3 uEye;
uniform float uTime;
uniform float uMode;      // 0 — облака, 1 — космос, 2 — лава
uniform vec3 uDeep;
uniform vec3 uLit;
uniform vec3 uShade;
uniform vec3 uGlow;
uniform vec3 uFogColor;
uniform vec3 uSunDir;
uniform float uStars;
uniform float uCoverage;

vec3 rayDir() {
  vec4 a = uInvViewProj * vec4(vNdc, -1.0, 1.0);
  vec4 b = uInvViewProj * vec4(vNdc, 1.0, 1.0);
  return normalize(b.xyz / b.w - a.xyz / a.w);
}

/** Слой облаков на высоте y: плотность и освещённость. */
vec2 cloudLayer(vec3 dir, float y, float scale, float speed) {
  float t = (y - uEye.y) / min(dir.y, -1e-3);
  vec2 p = uEye.xz + dir.xz * t;
  vec2 q = p * scale + vec2(uTime * speed, uTime * speed * 0.4);
  // Искривление координат: облака клубятся, а не лежат ровными пятнами.
  vec2 warp = vec2(fbm(q * 0.7 + 3.1), fbm(q * 0.7 + 7.7));
  float density = fbm(q + warp * 1.4);
  density = smoothstep(1.0 - uCoverage - 0.08, 1.0 - uCoverage + 0.28, density);
  // Освещённость: насколько облако тоньше в сторону солнца.
  float toward = fbm(q + warp * 1.4 + uSunDir.xz * 0.35);
  float light = clamp(0.55 + (density - smoothstep(1.0 - uCoverage - 0.08, 1.0 - uCoverage + 0.28, toward)) * 2.2, 0.0, 1.0);
  return vec2(density, light) * exp(-t * 0.004);
}

vec3 stars(vec3 dir) {
  vec2 sph = vec2(atan(dir.z, dir.x), asin(clamp(dir.y, -1.0, 1.0)));
  vec2 uv = sph * vec2(34.0, 34.0);
  vec2 cell = floor(uv);
  vec2 local = fract(uv) - 0.5;
  float bright = hash12(cell);
  vec2 jitter = hash22(cell) - 0.5;
  float d = length(local - jitter * 0.7);
  float twinkle = 0.6 + 0.4 * sin(uTime * 1.7 + bright * 50.0);
  float star = smoothstep(0.08, 0.0, d) * step(0.88, bright) * (bright - 0.88) * 9.0 * twinkle;
  vec3 tint = mix(vec3(0.7, 0.8, 1.0), vec3(1.0, 0.85, 0.7), hash12(cell + 5.3));
  return tint * star;
}

void main() {
  vec3 dir = rayDir();
  float down = clamp(-dir.y, 0.0, 1.0);
  vec3 col = mix(uFogColor, uDeep, smoothstep(0.1, 0.9, down));

  if (uMode < 0.5) {
    // Два слоя облаков: ближний быстрее, дальний медленнее — глубина от параллакса.
    vec2 far = cloudLayer(dir, -26.0, 0.035, 0.006);
    vec3 farCol = mix(uShade, uLit, far.y) * 0.85;
    col = mix(col, farCol, far.x * 0.8);
    vec2 near = cloudLayer(dir, -14.0, 0.06, 0.012);
    vec3 nearCol = mix(uShade, uLit, near.y);
    col = mix(col, nearCol, near.x);
    // Сияние снизу: солнце, отражённое облаками.
    col += uGlow * pow(1.0 - down, 3.0) * 0.25;
  } else if (uMode < 1.5) {
    // Космос: звёзды по всей сфере и туманность, медленно дрейфующая.
    col += stars(dir) * uStars;
    vec2 sph = vec2(atan(dir.z, dir.x), dir.y);
    float neb = fbm(sph * vec2(2.2, 3.4) + vec2(uTime * 0.004, 0.0));
    float neb2 = fbm(sph * vec2(4.5, 6.0) - 11.0);
    col += uGlow * smoothstep(0.45, 0.9, neb) * 0.9;
    col += uLit * smoothstep(0.5, 0.85, neb2) * 0.6;
    // Далеко внизу — редкая светящаяся дымка.
    vec2 mist = cloudLayer(dir, -30.0, 0.03, 0.004);
    col = mix(col, uLit * (0.6 + 0.6 * mist.y), mist.x * 0.35);
  } else {
    // Лава: корка трескается, в трещинах течёт свет, над ней стелется дым.
    float t = (-18.0 - uEye.y) / min(dir.y, -1e-3);
    vec2 p = uEye.xz + dir.xz * t;
    vec2 q = p * 0.09 + vec2(uTime * 0.01, -uTime * 0.006);
    float flowN = fbm(q + vec2(fbm(q * 1.7 + uTime * 0.02), fbm(q * 1.3 - uTime * 0.015)) * 1.5);
    float ridge = 1.0 - abs(flowN * 2.0 - 1.0);
    float hot = pow(ridge, 6.0);
    vec3 lava = mix(uShade, uLit, smoothstep(0.3, 0.7, flowN));
    lava += uGlow * hot * (0.8 + 0.4 * sin(uTime * 0.8 + flowN * 20.0));
    lava *= exp(-t * 0.006);
    col = mix(col, lava, smoothstep(0.02, 0.25, down));
    vec2 smoke = cloudLayer(dir, -9.0, 0.07, 0.015);
    col = mix(col, uShade * 2.0 + uGlow * 0.05, smoke.x * 0.55);
    col += uGlow * pow(1.0 - down, 4.0) * 0.18;
  }

  fragColor = vec4(col, 1.0);
}
`,Yo=`#version 300 es
${$}
${Wo}

in vec3 aPos;
in vec3 aNormal;
in vec3 aAux;

in vec3 iOrigin;    // где существо в мире
in vec3 iLocal;     // где часть в покое
in vec3 iSize;
in vec4 iQuat;      // поза части в покое
in vec3 iPivot;     // шарнир конечности
in vec3 iColor;
in vec4 iMotion;    // x: фаза цикла, y: походка, z: роль, w: сдвиг фазы части
in vec4 iExtra;     // x: масштаб, y: вспышка, z: разворот, w: затемнение
in vec4 iMat;       // x: материал, y: свечение, z: рост при появлении, w: зерно

uniform mat4 uViewProj;
uniform float uTime;

out vec3 vWorld;
out vec3 vNormal;
out vec3 vLocal;
out vec3 vColor;
out vec4 vMat;
out vec3 vHit;      // x: вспышка, y: затемнение, z: запечённое затенение

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
  float scale = iExtra.x * iMat.z;
  float facing = iExtra.z;

  // --- походка: общее движение тела ---------------------------------------
  vec3 bodyOffset = vec3(0.0);
  vec3 squash = vec3(1.0);
  float swing = 0.0;
  float lean = 0.0;
  float phase = (cycle + partPhase) * TAU;
  float breath = sin(uTime * 2.4 + iMat.w) * 0.015;

  if (gait < 0.5) {
    bodyOffset.y = abs(sin(cycle * TAU)) * 0.05;
    bodyOffset.x = sin(cycle * TAU) * 0.025;
    swing = sin(phase) * 0.9;
    lean = 0.1;
  } else if (gait < 1.5) {
    float air = sin(fract(cycle) * 3.14159265);
    float ground = 1.0 - air;
    bodyOffset.y = air * 0.55;
    squash = vec3(1.0 + ground * 0.3, 1.0 - ground * 0.32 + air * 0.2, 1.0 + ground * 0.3);
    lean = air * 0.18;
  } else if (gait < 2.5) {
    bodyOffset.y = sin(phase) * 0.04;
    swing = sin(phase * 2.0) * 0.6;
  } else if (gait < 3.5) {
    bodyOffset.y = sin(cycle * TAU * 0.25) * 0.14;
    swing = sin(phase) * 1.25;
    lean = 0.16;
  } else {
    float stomp = abs(sin(cycle * TAU));
    bodyOffset.y = stomp * 0.09;
    bodyOffset.x = sin(cycle * TAU) * 0.05;
    swing = sin(phase) * 0.62;
    lean = 0.07;
  }

  // --- часть тела -----------------------------------------------------------
  vec3 p = qrot(iQuat, aPos * iSize);
  vec3 n = qrot(iQuat, aNormal / max(iSize, vec3(1e-4)));
  vec3 local = iLocal;

  if (role < 0.5) {
    // Туловище дышит.
    p *= 1.0 + vec3(breath, breath * 0.6, breath);
  } else if (role < 1.5) {
    // Голова чуть покачивается в такт шагу.
    float nod = sin(cycle * TAU * 2.0) * 0.05;
    p = rotX(nod) * p;
    n = rotX(nod) * n;
  } else if (role < 3.5) {
    // Нога и рука качаются вокруг своего шарнира; рука — в противофазе.
    float angle = role < 2.5 ? swing : -swing * 0.75;
    mat3 r = rotX(angle);
    vec3 rel = local + p - iPivot;
    rel = r * rel;
    p = rel + iPivot - local;
    n = r * n;
  } else if (role < 4.5) {
    // Крыло машет вокруг корня.
    float side = iLocal.x < 0.0 ? 1.0 : -1.0;
    mat3 r = rotZ(swing * side * 0.8);
    vec3 rel = local + p - iPivot;
    p = r * rel + iPivot - local;
    n = r * n;
  } else if (role < 5.5) {
    float wave = sin((cycle + partPhase) * TAU);
    local.y += wave * 0.07;
    local.x += wave * 0.04;
    p.z *= 1.0 + wave * 0.1;
  } else if (role < 6.5) {
    // Жёсткая часть: только общее движение тела.
  } else if (role < 7.5) {
    mat3 r = rotY(sin(cycle * TAU) * 0.45);
    vec3 rel = local + p - iPivot;
    p = r * rel + iPivot - local;
    n = r * n;
  } else if (role < 8.5) {
    // Облёт: часть кружит вокруг вертикальной оси тела.
    float a = uTime * 2.2 + partPhase * TAU;
    mat3 r = rotY(a);
    local = r * local;
    local.y += sin(uTime * 3.0 + partPhase * TAU) * 0.05;
    p = r * p;
    n = r * n;
  } else {
    // Плащ: отлетает назад на ходу и колышется.
    float flap = 0.18 + sin(cycle * TAU * 2.0) * 0.08 + sin(uTime * 3.1) * 0.04;
    mat3 r = rotX(-flap);
    vec3 rel = local + p - iPivot;
    p = r * rel + iPivot - local;
    n = r * n;
  }

  // Прыгун приседает целиком: и глаза, и макушка опускаются вместе с телом.
  if (gait > 0.5 && gait < 1.5) {
    local *= squash;
    p *= squash;
    n /= max(squash, vec3(1e-4));
  }

  // --- сборка существа ------------------------------------------------------
  p += local + bodyOffset;
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
  vLocal = aPos * iSize + vec3(iMat.w * 1.3, iMat.w * 0.7, iMat.w * 2.1);
  vColor = iColor;
  vMat = iMat;
  vHit = vec3(iExtra.y, iExtra.w, aAux.x);
  gl_Position = uViewProj * vec4(world, 1.0);
}
`,Xo=`#version 300 es
${$}
${z}
${Ko}
${Go}

in vec3 vWorld;
in vec3 vNormal;
in vec3 vLocal;
in vec3 vColor;
in vec4 vMat;
in vec3 vHit;
out vec4 fragColor;

uniform float uTime;
uniform float uShadowPass;

const int SKIN = 0;
const int CLOTH = 1;
const int METAL = 2;
const int EYE = 3;
const int GLOW = 4;
const int GEL = 5;
const int STONE = 6;
const int BONE = 7;
const int CRYSTAL = 8;
const int SHELL = 9;

void main() {
  if (uShadowPass > 0.5) {
    fragColor = vec4(0.0);
    return;
  }

  vec3 n = normalize(vNormal);
  if (!gl_FrontFacing) n = -n;
  vec3 v = normalize(uEye - vWorld);
  int m = int(vMat.x + 0.5);
  float glow = vMat.y;
  float NoV = max(dot(n, v), 0.0);
  float ao = vHit.z * mix(0.6, 1.0, smoothstep(0.0, 0.2, vWorld.y));
  vec3 albedo = vColor;
  vec3 col;

  if (m == GLOW) {
    float flicker = 0.88 + 0.12 * sin(uTime * 11.0 + vMat.w * 3.0);
    vec3 hot = mix(vColor, vec3(1.0), 0.5);
    col = mix(vColor, hot * 1.6, pow(NoV, 1.5)) * (0.7 + glow) * flicker;
  } else {
    float shadow = shadowAt(vWorld, n);
    float metal = 0.0;
    float rough = 0.7;
    if (m == SKIN) {
      // Мех и кожа: мягкий полутон на границе света и лёгкий подкожный тон.
      float fur = valueNoise(vLocal.xy * 60.0 + vLocal.z * 23.0);
      albedo *= 0.85 + 0.25 * fur;
      rough = 0.62;
    } else if (m == CLOTH) {
      float weave = valueNoise(vLocal.xz * 80.0) * valueNoise(vLocal.xy * 80.0);
      albedo *= 0.8 + 0.35 * weave;
      rough = 0.92;
    } else if (m == METAL) {
      metal = 0.85;
      rough = 0.3;
    } else if (m == EYE || m == BONE || m == SHELL) {
      rough = m == EYE ? 0.08 : (m == SHELL ? 0.22 : 0.35);
    } else if (m == GEL) {
      rough = 0.12;
    } else if (m == STONE) {
      float big = fbm(vLocal.xz * 6.0 + vLocal.y * 4.0);
      albedo *= 0.7 + 0.45 * big;
      rough = 0.9;
    } else if (m == CRYSTAL) {
      rough = 0.06;
    }

    col = shadeSurface(albedo, metal, rough, n, v, shadow, ao);

    if (m == SKIN) {
      // Свет, заходящий за край: тёплая кайма по терминатору.
      float wrap = clamp((dot(n, uSunDir) + 0.35) / 1.35, 0.0, 1.0) - max(dot(n, uSunDir), 0.0);
      col += albedo * uSunColor * wrap * 0.35 * shadow;
    } else if (m == GEL) {
      // Желе светится толщей: середина плотнее, края прозрачнее и ярче.
      col = mix(col, albedo * 1.1 + hemiLight(n) * albedo * 0.3, 0.55);
      col += albedo * pow(1.0 - NoV, 2.0) * 0.8;
      col += albedo * 0.25 * (0.6 + 0.4 * sin(uTime * 2.0 + vMat.w));
    } else if (m == CRYSTAL) {
      float facet = hash13(floor(n * 6.0 + 0.5) + vMat.w);
      col += albedo * (0.3 + 0.7 * facet) * (0.4 + glow);
    }
    col += albedo * glow * 0.6;
  }

  // Контур у существ сильнее, чем у башен: враг должен читаться на любой земле.
  col += rimLight(n, v, 1.15) * (m == GLOW ? 0.3 : 1.0);

  // Раненый враг темнеет, попадание отбеливает его на пару кадров.
  col *= vHit.y;
  col = mix(col, vec3(2.6, 2.4, 2.2), clamp(vHit.x, 0.0, 1.0) * 0.8);
  fragColor = vec4(applyFog(col, vWorld), 1.0);
}
`,Zo=`#version 300 es
${$}

in vec3 aPos;

in vec4 iDecal;     // x, z, радиус, сила
in vec4 iTint;      // rgb, w: доля прожитого для кольца

uniform mat4 uViewProj;

out vec2 vUv;
out vec4 vTint;
out float vStrength;

void main() {
  vec3 world = vec3(iDecal.x + aPos.x * iDecal.z, 0.012, iDecal.y + aPos.z * iDecal.z);
  vUv = aPos.xz;
  vTint = iTint;
  vStrength = iDecal.w;
  gl_Position = uViewProj * vec4(world, 1.0);
}
`,Qo=`#version 300 es
${$}

in vec2 vUv;
in vec4 vTint;
in float vStrength;
out vec4 fragColor;

uniform float uMode;   // 0 — тень, 1 — кольцо, 2 — круг под башней
uniform float uTime;

const float TAU = 6.283185307;

void main() {
  float d = length(vUv);
  if (d > 1.0) discard;
  if (uMode < 0.5) {
    float a = (1.0 - smoothstep(0.15, 1.0, d)) * vStrength;
    a *= a * (3.0 - 2.0 * a);
    fragColor = vec4(vec3(1.0 - a), 1.0);
  } else if (uMode > 1.5) {
    // Рунический круг цвета рецепта: по нему башню узнают издалека, даже
    // когда сама модель мелкая. Внутренний пунктир медленно бежит по кругу.
    float ang = atan(vUv.y, vUv.x);
    float outer = exp(-pow((d - 0.86) * 16.0, 2.0));
    float dash = step(0.42, fract(ang * 9.0 / TAU + uTime * 0.04 + vTint.w));
    float inner = exp(-pow((d - 0.7) * 26.0, 2.0)) * dash;
    float glow = exp(-pow((d - 0.8) * 5.0, 2.0)) * 0.18;
    fragColor = vec4(vTint.rgb * (outer + inner * 0.7 + glow) * vStrength, 1.0);
  } else {
    float life = vTint.w;
    float radius = 0.2 + 0.8 * sqrt(life);
    float ring = exp(-pow((d - radius) * 14.0, 2.0));
    float fill = smoothstep(radius, 0.0, d) * 0.15;
    float fade = (1.0 - life) * vStrength;
    fragColor = vec4(vTint.rgb * (ring * 2.0 + fill) * fade, 1.0);
  }
}
`,$o=`#version 300 es
${$}

in vec3 aPos;

in vec3 iFrom;
in vec3 iTo;
in vec3 iColor;
in vec4 iParams;   // x: полуширина, y: яркость, z: бег, w: стиль

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
  float len = length(delta);
  vec3 dir = len > 1e-5 ? delta / len : vec3(1.0, 0.0, 0.0);
  vec3 toEye = normalize(uEye - mid);
  vec3 side = cross(dir, toEye);
  float sideLen = length(side);
  side = sideLen > 1e-4 ? side / sideLen : normalize(cross(dir, vec3(0.0, 1.0, 0.0)) + vec3(1e-3));
  vec3 world = mix(iFrom, iTo, u) + side * (aPos.y * iParams.x);
  vUv = vec2(u, aPos.y);
  vColor = iColor;
  vParams = iParams;
  vLength = len;
  gl_Position = uViewProj * vec4(world, 1.0);
}
`,es=`#version 300 es
${$}
${z}

in vec2 vUv;
in vec3 vColor;
in vec4 vParams;
in float vLength;
out vec4 fragColor;

uniform float uTime;

/** 0 — луч, 1 — молния, 2 — хвост снаряда, 3 — полоска здоровья, 4 — столб света. */
void main() {
  float across = abs(vUv.y);
  float style = vParams.w;
  float core = exp(-across * across * 40.0);
  float halo = exp(-across * across * 4.5) * 0.5;
  float profile = core + halo;
  float alongFade = 1.0;
  float extra = 0.0;

  if (style < 0.5) {
    float travel = vUv.x * vLength * 0.9 - uTime * vParams.z;
    extra = smoothstep(0.55, 1.0, fract(travel)) * core;
    float shimmer = valueNoise(vec2(vUv.x * vLength * 6.0 - uTime * 20.0, across * 4.0));
    profile *= 0.8 + 0.4 * shimmer;
  } else if (style < 1.5) {
    core = exp(-across * across * 60.0);
    profile = core * 1.3 + halo * 0.9;
    extra = core * (0.6 + 0.4 * sin(uTime * 80.0 + vUv.x * 10.0));
  } else if (style < 2.5) {
    alongFade = pow(vUv.x, 2.0);
    extra = core * smoothstep(0.8, 1.0, vUv.x) * 1.8;
  } else if (style < 3.5) {
    // Полоска здоровья: плоская, с тёмной каймой. Рисуется обычным смешением.
    float body = 1.0 - smoothstep(0.6, 0.85, across);
    float edge = 1.0 - smoothstep(0.85, 1.0, across);
    vec3 col = mix(vec3(0.02), vColor * vParams.y, body);
    fragColor = vec4(col, edge);
    return;
  } else {
    // Столб света: широкий, мягкий, тает кверху и струится.
    alongFade = pow(1.0 - vUv.x, 1.5) * smoothstep(0.0, 0.05, vUv.x);
    float stream = 0.7 + 0.3 * sin(vUv.x * 30.0 - uTime * 8.0 + across * 3.0);
    profile = (exp(-across * across * 6.0) * 0.8 + exp(-across * across * 30.0)) * stream;
  }

  float caps = style < 2.5 ? smoothstep(0.0, 0.04, vUv.x) * smoothstep(1.0, 0.96, vUv.x) : 1.0;
  vec3 col = vColor * profile * vParams.y * alongFade * caps;
  col += mix(vColor, vec3(1.0), 0.7) * extra * vParams.y * caps;
  float alpha = clamp(profile * caps * alongFade, 0.0, 1.0);
  if (alpha < 0.003) discard;
  fragColor = vec4(col, alpha);
}
`,ts=`#version 300 es
${$}

in vec3 aPos;

in vec3 iPos;
in vec3 iVel;
in vec3 iColor;
in vec2 iParams;   // x: размер, y: остаток жизни 0..1

uniform mat4 uViewProj;
uniform vec3 uRight;
uniform vec3 uUp;
uniform vec3 uEye;

out vec2 vUv;
out vec3 vColor;
out float vLife;

void main() {
  float size = iParams.x * (0.4 + 0.6 * iParams.y);
  vec3 toEye = normalize(uEye - iPos);
  vec3 vel = iVel - toEye * dot(iVel, toEye);
  float speed = length(vel);
  vec3 along = speed > 1e-3 ? vel / speed : uUp;
  vec3 across = normalize(cross(along, toEye));
  float stretch = 1.0 + min(speed * 0.09, 2.5);
  vec3 world = iPos + across * (aPos.x * size) + along * (aPos.y * size * stretch);
  vUv = aPos.xy;
  vColor = iColor;
  vLife = iParams.y;
  gl_Position = uViewProj * vec4(world, 1.0);
}
`,ns=`#version 300 es
${$}

in vec2 vUv;
in vec3 vColor;
in float vLife;
out vec4 fragColor;

void main() {
  float d = length(vUv);
  if (d > 1.0) discard;
  float falloff = pow(1.0 - d, 2.0);
  float core = exp(-d * d * 10.0);
  vec3 col = (vColor * falloff + mix(vColor, vec3(1.0), 0.75) * core) * vLife * 2.2;
  fragColor = vec4(col, clamp(falloff * vLife, 0.0, 1.0));
}
`,rs=`#version 300 es
${$}

in vec3 aPos;
in vec4 iSeed;

uniform mat4 uViewProj;
uniform vec3 uRight;
uniform vec3 uUp;
uniform float uTime;
uniform float uKind;     // 0 — светлячки, 1 — пыль, 2 — снег, 3 — угли
uniform vec4 uArea;      // minX, minZ, sizeX, sizeZ
uniform float uSize;

out vec2 vUv;
out float vBright;

void main() {
  vec3 base = vec3(uArea.x + iSeed.x * uArea.z, 0.0, uArea.y + iSeed.y * uArea.w);
  float t = uTime + iSeed.w * 100.0;
  vec3 p = base;
  float bright = 1.0;
  if (uKind < 0.5) {
    p.x += sin(t * 0.37 + iSeed.z * 9.0) * 0.8;
    p.z += cos(t * 0.29 + iSeed.w * 7.0) * 0.8;
    p.y = 0.25 + iSeed.z * 1.3 + sin(t * 0.8) * 0.2;
    bright = pow(0.5 + 0.5 * sin(t * 1.9 + iSeed.z * 20.0), 3.0);
  } else if (uKind < 1.5) {
    p.x += sin(t * 0.11 + iSeed.z * 5.0) * 1.4;
    p.z += cos(t * 0.09 + iSeed.w * 4.0) * 1.4;
    p.y = 0.2 + iSeed.z * 2.6 + sin(t * 0.3) * 0.3;
    bright = 0.45 + 0.35 * sin(t * 0.7 + iSeed.z * 9.0);
  } else if (uKind < 2.5) {
    float h = 5.0;
    p.y = h - mod(iSeed.z * h + uTime * (0.35 + iSeed.w * 0.25), h);
    p.x += sin(uTime * 0.7 + iSeed.w * 30.0) * 0.35 + uTime * 0.12;
    p.z += cos(uTime * 0.5 + iSeed.z * 30.0) * 0.25;
    p.x = uArea.x + mod(p.x - uArea.x, uArea.z);
    bright = 0.8;
  } else {
    float h = 4.0;
    p.y = mod(iSeed.z * h + uTime * (0.3 + iSeed.w * 0.4), h);
    p.x += sin(uTime * 1.1 + iSeed.w * 20.0) * 0.3;
    p.z += cos(uTime * 0.9 + iSeed.z * 20.0) * 0.3;
    bright = (1.0 - p.y / h) * (0.6 + 0.4 * sin(uTime * 9.0 + iSeed.z * 40.0));
  }
  float size = uSize * (0.6 + 0.8 * iSeed.w);
  vec3 world = p + uRight * (aPos.x * size) + uUp * (aPos.y * size);
  vUv = aPos.xy;
  vBright = bright;
  gl_Position = uViewProj * vec4(world, 1.0);
}
`,is=`#version 300 es
${$}

in vec2 vUv;
in float vBright;
out vec4 fragColor;

uniform vec3 uColor;

void main() {
  float d = length(vUv);
  if (d > 1.0) discard;
  float glow = pow(1.0 - d, 2.4);
  vec3 col = uColor * glow * vBright;
  fragColor = vec4(col, glow * vBright);
}
`,as=`#version 300 es
${$}
${z}
${Go}

in vec3 aPos;
in vec3 aNormal;
in vec3 aAux;

in vec4 iBlade;     // x, z, поворот, высота
in vec2 iVar;       // x: оттенок, y: фаза ветра

uniform mat4 uViewProj;
uniform float uTime;
uniform vec2 uBoard;
uniform sampler2D uOccupancy;
uniform vec3 uRoot;
uniform vec3 uTip;

out vec3 vColor;
out vec3 vWorld;

void main() {
  vec2 base = iBlade.xy;
  float height = iBlade.w;
  vec2 uv = base / uBoard;
  if (uv.x > 0.0 && uv.y > 0.0 && uv.x < 1.0 && uv.y < 1.0) {
    height *= 1.0 - texture(uOccupancy, uv).r * 0.85;
  }

  float c = cos(iBlade.z);
  float s = sin(iBlade.z);
  vec3 p = aPos;
  p = vec3(c * p.x + s * p.z, p.y * height, -s * p.x + c * p.z);
  p.xz *= 0.9 + height * 1.6;

  // Ветер: общий порыв волной по полю и мелкая дрожь каждой травинки.
  float along = aAux.y * aAux.y;
  float gust = sin(uTime * 1.3 + base.x * 0.45 + base.y * 0.3) * 0.5 + 0.5;
  float flutter = sin(uTime * 4.7 + iVar.y) * 0.3;
  vec2 wind = vec2(0.8, 0.45) * (gust * 0.9 + flutter) * height * 0.9;
  p.xz += wind * along;
  p.y -= length(wind) * along * 0.35;

  vec3 world = vec3(base.x, 0.0, base.y) + p;
  float shadow = shadowAtFast(vec3(base.x, 0.03, base.y));
  vec3 n = normalize(vec3(aNormal.x, aNormal.y + 0.6, aNormal.z));
  vec3 albedo = mix(uRoot, uTip, aAux.y) * (0.78 + 0.44 * iVar.x);
  float NoL = max(dot(n, uSunDir), 0.0) * 0.7 + 0.3;
  vec3 lit = albedo * (uSunColor * NoL * shadow + hemiLight(n) * mix(0.55, 1.0, aAux.y));
  // На просвет кончики светятся, если солнце сзади.
  vec3 v = normalize(uEye - world);
  lit += albedo * uSunColor * pow(max(dot(-v, uSunDir), 0.0), 4.0) * aAux.y * 0.6 * shadow;

  vColor = lit;
  vWorld = world;
  gl_Position = uViewProj * vec4(world, 1.0);
}
`,os=`#version 300 es
${$}
${z}
${Go}

in vec3 vColor;
in vec3 vWorld;
out vec4 fragColor;

void main() {
  fragColor = vec4(applyFog(vColor, vWorld), 1.0);
}
`,ss=`#version 300 es
${$}
${Wo}

in vec3 aPos;
in vec3 aNormal;
in vec3 aAux;

in vec3 iPos;
in vec3 iScale;
in vec4 iQuat;
in vec3 iColor;
in vec4 iMat;      // x: материал, y: свечение, z: подсветка, w: зерно

uniform mat4 uViewProj;
uniform float uTime;

out vec3 vWorld;
out vec3 vNormal;
out vec3 vLocal;
out vec3 vColor;
out vec4 vMat;
out vec3 vAux;

void main() {
  vec3 p = aPos * iScale;
  float mat = iMat.x;
  // Пламя и плазма живые: вершины колышутся, сильнее к макушке.
  if (mat > 3.5 && mat < 4.5) {
    float top = clamp(aPos.y + 0.5, 0.0, 1.0);
    float wob = sin(uTime * 9.0 + aPos.y * 9.0 + iMat.w) * 0.07 + sin(uTime * 14.0 + aPos.x * 12.0 + iMat.w * 1.7) * 0.04;
    p += aNormal * iScale * wob * (0.3 + top);
  }
  vec3 world = qrot(iQuat, p) + iPos;
  vec3 n = qrot(iQuat, aNormal / max(iScale, vec3(1e-4)));

  vWorld = world;
  vNormal = normalize(n);
  vLocal = aPos * iScale + vec3(iMat.w * 1.37, iMat.w * 0.71, iMat.w * 2.13);
  vColor = iColor;
  vMat = iMat;
  vAux = aAux;
  gl_Position = uViewProj * vec4(world, 1.0);
}
`,cs=`#version 300 es
${$}
${z}
${Ko}
${Go}

in vec3 vWorld;
in vec3 vNormal;
in vec3 vLocal;
in vec3 vColor;
in vec4 vMat;
in vec3 vAux;
out vec4 fragColor;

uniform float uTime;
uniform float uShadowPass;
/** Призрак будущей башни: 0 — нет, 1 — можно ставить, 2 — нельзя. */
uniform float uGhost;

const int STONE = 0;
const int METAL = 1;
const int CRYSTAL = 2;
const int ICE = 3;
const int ENERGY = 4;
const int WOOD = 5;
const int LEAF = 6;
const int DARK = 7;
const int GLASS = 8;
const int VORTEX = 9;

void main() {
  if (uShadowPass > 0.5) {
    fragColor = vec4(0.0);
    return;
  }

  vec3 n = normalize(vNormal);
  if (!gl_FrontFacing) n = -n;
  vec3 v = normalize(uEye - vWorld);
  int m = int(vMat.x + 0.5);
  float glow = vMat.y;
  float highlight = vMat.z;
  float seed = vMat.w;

  if (uGhost > 0.5) {
    // Голограмма: полупрозрачные грани, яркий контур и бегущие строки.
    vec3 tint = uGhost < 1.5 ? vec3(0.35, 1.0, 0.6) : vec3(1.0, 0.3, 0.35);
    float fres = pow(1.0 - abs(dot(n, v)), 2.0);
    float scan = 0.65 + 0.35 * sin(vWorld.y * 60.0 - uTime * 6.0);
    vec3 col = tint * (0.25 + fres * 1.6) * scan;
    fragColor = vec4(col, 0.35 + fres * 0.5);
    return;
  }

  vec3 albedo = vColor;
  float metal = 0.0;
  float rough = 0.8;
  vec3 emissive = vec3(0.0);
  float ao = vAux.x;
  // Контактное затенение у земли: низ любой детали темнее.
  ao *= mix(0.55, 1.0, smoothstep(0.0, 0.28, vWorld.y));
  float breathe = 0.85 + 0.15 * sin(uTime * 2.2 + seed);

  vec3 col;
  if (m == ENERGY) {
    float NoV = abs(dot(n, v));
    float flicker = 0.86 + 0.14 * sin(uTime * 13.0 + seed) * sin(uTime * 7.3 + seed * 1.7);
    vec3 hot = mix(vColor, vec3(1.0), 0.6);
    col = mix(vColor * 1.1, hot * 1.7, pow(NoV, 2.2)) * (0.5 + glow * 0.62) * flicker;
    col += vColor * highlight * 2.0;
    fragColor = vec4(applyFog(col, vWorld), 1.0);
    return;
  }

  if (m == VORTEX) {
    // Вихрь в плоскости диска: спиральные рукава закручиваются к центру.
    vec2 q = vLocal.xz - vec2(seed * 1.37, seed * 2.13);
    float r = length(q) * 2.2;
    float ang = atan(q.y, q.x);
    float arms = sin(ang * 3.0 + r * 9.0 - uTime * 3.2) * 0.5 + 0.5;
    float swirl = fbm(vec2(ang * 1.5 + uTime * 0.4, r * 3.0 - uTime * 0.8));
    float core = exp(-r * r * 3.0);
    vec3 deep = vColor * 0.08;
    col = mix(deep, vColor * (1.2 + glow), arms * swirl * 1.2);
    col += mix(vColor, vec3(1.0), 0.5) * core * 2.5;
    col *= smoothstep(1.15, 0.8, r);
    fragColor = vec4(applyFog(col, vWorld), 1.0);
    return;
  }

  float shadow = shadowAt(vWorld, n);

  if (m == CRYSTAL || m == ICE) {
    // Самоцвет: у каждой грани свой «огонь», свет сквозь камень окрашен его
    // цветом, солнце даёт острые искры.
    float NoV = max(dot(n, v), 0.0);
    float facet = hash13(floor(n * 6.0 + 0.5) + seed);
    vec3 through = envColor(refract(-v, n, 0.6), 0.25);
    float isIce = m == ICE ? 1.0 : 0.0;
    vec3 body = vColor * mix(0.25 + 0.75 * facet, 0.55 + 0.25 * facet, isIce);
    col = body * (0.35 + glow * 0.85) * breathe;
    col += through * vColor * mix(0.5, 0.35, isIce);
    col += hemiLight(n) * vColor * 0.22 * ao;
    float r2 = mix(0.05, 0.16, isIce);
    vec3 h = normalize(uSunDir + v);
    float spark = pow(max(dot(n, h), 0.0), mix(420.0, 120.0, isIce));
    col += uSunColor * spark * 4.0 * shadow;
    float F = 0.06 + 0.94 * pow(1.0 - NoV, 5.0);
    col += envColor(reflect(-v, n), r2) * F * 0.9;
    // Лёд подсвечен изнутри у кромок — как толща воды на просвет.
    col += vColor * isIce * pow(1.0 - NoV, 2.0) * 0.45;
    col += rimLight(n, v, 0.6);
    col += vColor * highlight * 1.6;
    fragColor = vec4(applyFog(col, vWorld), 1.0);
    return;
  }

  if (m == GLASS) {
    float NoV = max(dot(n, v), 0.0);
    float ripple = 0.85 + 0.15 * sin(vLocal.x * 30.0 + uTime * 2.0) * sin(vLocal.z * 26.0 - uTime * 1.7);
    col = vColor * (0.6 + glow * 0.9) * ripple * breathe;
    float F = 0.04 + 0.96 * pow(1.0 - NoV, 5.0);
    col += envColor(reflect(-v, n), 0.08) * F;
    col += vColor * highlight * 1.8;
    fragColor = vec4(applyFog(col, vWorld), 1.0);
    return;
  }

  if (m == STONE) {
    // Камень: крупные пятна, мелкое зерно и лёгкий рельеф от шума.
    float big = fbm(vLocal.xz * 5.0 + vLocal.y * 3.0);
    float grain = valueNoise(vLocal.xy * 38.0 + vLocal.z * 17.0);
    albedo *= 0.72 + 0.4 * big + 0.12 * (grain - 0.5);
    // Шероховатость: нормаль чуть сбита двумя дешёвыми шумами, а не
    // градиентом fbm — на размере клетки разницы не видно, а пикселю легче.
    vec3 bump = vec3(valueNoise(vLocal.yz * 16.0) - 0.5, 0.0, valueNoise(vLocal.xy * 16.0 + 7.0) - 0.5);
    n = normalize(n + bump * 0.35);
    rough = 0.86;
    emissive = vColor * glow * 0.9 * breathe;
  } else if (m == METAL) {
    metal = 1.0;
    float brush = valueNoise(vec2(vLocal.y * 60.0, (vLocal.x + vLocal.z) * 6.0));
    rough = 0.28 + 0.14 * brush;
    albedo *= 0.9 + 0.1 * brush;
    emissive = vColor * glow * breathe;
  } else if (m == WOOD) {
    float grainLine = sin(vLocal.y * 42.0 + fbm(vLocal.xz * 9.0) * 6.0) * 0.5 + 0.5;
    albedo *= 0.62 + 0.5 * grainLine;
    rough = 0.82;
    emissive = vColor * glow * breathe;
  } else if (m == LEAF) {
    float vein = fbm(vLocal.xy * 18.0 + vLocal.z * 5.0);
    albedo *= 0.75 + 0.45 * vein;
    rough = 0.62;
    // Листва на просвет: солнце сзади подсвечивает её насквозь.
    float back = pow(max(dot(-v, uSunDir), 0.0), 3.0);
    emissive = albedo * uSunColor * back * 0.45 * shadow + vColor * glow * breathe;
  } else if (m == DARK) {
    rough = 0.14;
    albedo = vColor;
    float sheen = pow(1.0 - max(dot(n, v), 0.0), 2.0);
    emissive = vColor * glow * breathe + mix(vColor, vec3(1.0), 0.3) * sheen * glow * 2.5;
  }

  col = shadeSurface(albedo, metal, rough, n, v, shadow, ao);
  col += rimLight(n, v, 0.5 + glow * 0.3);
  col += emissive;
  col += mix(vColor, vec3(1.0), 0.4) * highlight;

  // Ломаем полосы на больших плоских гранях.
  col += (hash12(gl_FragCoord.xy + fract(uTime) * 91.0) - 0.5) * 0.008;
  fragColor = vec4(applyFog(col, vWorld), 1.0);
}
`,ls=`#version 300 es
${$}

in vec3 aPos;
in vec3 aNormal;
in vec3 aAux;

uniform mat4 uViewProj;

out vec3 vWorld;
out vec3 vNormal;
out vec3 vAux;

void main() {
  vWorld = aPos;
  vNormal = aNormal;
  vAux = aAux;
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,us=`#version 300 es
${$}
${z}
${Go}

in vec3 vWorld;
in vec3 vNormal;
in vec3 vAux;
out vec4 fragColor;

uniform float uTime;
uniform float uShadowPass;
uniform vec2 uBoard;
uniform sampler2D uPathField;   // r — расстояние до дороги, g/b — фаза вдоль неё
uniform sampler2D uBuildMask;
uniform vec2 uFieldOrigin;
uniform vec2 uFieldSize;
uniform float uFieldRange;

uniform vec3 uCursor;   // xy — клетка, z: 1 можно / 0 нельзя / -1 нет
uniform vec4 uRange;    // xy — центр, z — радиус, w — включено
uniform float uPlacing;

uniform vec3 uAccent;
uniform vec3 uGrassLow;
uniform vec3 uGrassHigh;
uniform vec3 uTuft;
uniform vec3 uRoadLow;
uniform vec3 uRoadHigh;
uniform vec3 uKerb;
uniform vec3 uFlow;

uniform float uCracks;
uniform float uFlowers;
uniform vec3 uFlowerColor;
uniform float uSparkle;
uniform vec3 uRockLight;
uniform vec3 uRockDark;
uniform vec3 uRockVein;
uniform float uVeinGlow;
uniform float uGrassOn;

const float ROAD_HALF = 0.6;
const float KERB_OUT = 0.86;
const float TAU = 6.283185307;

vec4 field(vec2 world) {
  vec2 uv = (world - uFieldOrigin) / uFieldSize;
  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return vec4(1.0, 0.5, 0.5, 0.0);
  return texture(uPathField, uv);
}

/** Ячейки Вороного: x — расстояние до шва, y — номер камня, z — до центра. */
vec3 voronoi(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float d1 = 8.0;
  float d2 = 8.0;
  vec2 best = i;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 g = vec2(float(x), float(y));
      vec2 o = hash22(i + g) * 0.75 + 0.125;
      vec2 r = g + o - f;
      float d = dot(r, r);
      if (d < d1) {
        d2 = d1;
        d1 = d;
        best = i + g;
      } else if (d < d2) {
        d2 = d;
      }
    }
  }
  return vec3(sqrt(d2) - sqrt(d1), hash12(best), sqrt(d1));
}

/** Нормаль смещённой поверхности через производные — дёшево и без лишних выборок. */
vec3 bumpNormal(vec3 base, float height) {
  vec3 p = vWorld + base * height;
  vec3 nn = normalize(cross(dFdx(p), dFdy(p)));
  return dot(nn, base) < 0.0 ? -nn : nn;
}

vec3 shadeTop() {
  vec2 world = vWorld.xz;
  vec4 f = field(world);
  float d = f.r * uFieldRange;
  float phase = atan(f.g * 2.0 - 1.0, f.b * 2.0 - 1.0) / TAU + 0.5;
  bool onBoard = world.x > 0.0 && world.y > 0.0 && world.x < uBoard.x && world.y < uBoard.y;
  vec2 tile = floor(world);
  vec2 inTile = fract(world);
  float buildable = onBoard ? texture(uBuildMask, (tile + 0.5) / uBoard).r : 0.0;

  float onRoad = 1.0 - smoothstep(ROAD_HALF - 0.05, ROAD_HALF + 0.05, d);
  float onKerb = (1.0 - smoothstep(KERB_OUT - 0.06, KERB_OUT + 0.04, d)) - onRoad;

  vec3 n = vec3(0.0, 1.0, 0.0);
  float ao = 1.0;
  float rough = 0.95;
  vec3 emissive = vec3(0.0);

  // --- земля под травой -----------------------------------------------------
  float broad = fbm(world * 1.3);
  float turf = broad * 0.6 + valueNoise(world * 5.5) * 0.3;
  vec3 albedo = mix(uGrassLow, uGrassHigh, turf);
  float tuft = smoothstep(0.62, 0.86, valueNoise(world * 3.6 + 31.7) * 0.65 + broad * 0.35);
  albedo += uTuft * tuft;
  // Под травинками земля темнее: блики дают сами травинки.
  albedo *= mix(1.0, 0.72, uGrassOn);
  // Вытоптанная полоса вдоль обочины.
  float trodden = 1.0 - smoothstep(KERB_OUT, KERB_OUT + 0.5, d);
  albedo = mix(albedo, uKerb * 0.45, trodden * 0.35);

  // Цветы: точки на сетке, у каждой своя фаза покачивания.
  if (uFlowers > 0.001) {
    vec2 cell = floor(world * 3.2);
    vec2 local = fract(world * 3.2) - 0.5;
    vec2 jitter = hash22(cell) - 0.5;
    float present = step(1.0 - 0.22 * uFlowers, hash12(cell + 3.1)) * (1.0 - trodden);
    float petal = smoothstep(0.1, 0.04, length(local - jitter * 0.6));
    vec3 tint = mix(uFlowerColor, vec3(1.0, 0.98, 0.95), step(0.5, hash12(cell + 9.7)));
    albedo = mix(albedo, tint, petal * present);
  }

  // Тлеющие трещины: швы крупных ячеек светятся и дышат.
  if (uCracks > 0.001) {
    vec3 vc = voronoi(world * 0.9 + 4.0);
    // Тлеют не все швы, а обрывками: иначе поле превращается в сплошную
    // сетку лавы и спорит с башнями за внимание.
    float crack = (1.0 - smoothstep(0.0, 0.035, vc.x)) * smoothstep(0.42, 0.7, valueNoise(world * 0.8 + vc.y * 5.0));
    float pulse = 0.6 + 0.4 * sin(uTime * 1.6 + vc.y * 12.0);
    emissive += uTuft * 3.0 * crack * pulse * uCracks * (1.0 - onRoad);
    albedo *= 1.0 - crack * 0.5;
  }

  // --- дорога -------------------------------------------------------------------
  // Высота камня считается только на дороге, а производные — всегда, вне
  // ветвления: иначе на кромке дороги соседние пиксели квада получили бы
  // мусор вместо разности.
  float roadHeight = 0.0;
  if (onRoad > 0.001) {
    vec3 vc = voronoi(world * 3.1);
    float shade = vc.y;
    vec3 road = mix(uRoadLow, uRoadHigh, shade * 0.8 + valueNoise(world * 3.0) * 0.2);
    float seam = 1.0 - smoothstep(0.0, 0.09, vc.x);
    road *= 1.0 - seam * 0.55;
    // Выпуклый камень: высота растёт от шва к середине.
    roadHeight = smoothstep(0.0, 0.2, vc.x) * (1.0 - vc.z * 0.35) * 0.045 * onRoad;
    ao = mix(ao, 1.0 - seam * 0.5, onRoad);
    // Колея посередине.
    float rut = 1.0 - smoothstep(0.0, 0.24, d);
    road *= 1.0 - rut * 0.1;
    albedo = mix(albedo, road, onRoad);
    rough = mix(rough, 0.7, onRoad);

    // Бегущие метки вдоль дороги: видно, куда идут враги.
    float flow = fract(phase * 1.0 - uTime * 0.22);
    float mark = smoothstep(0.82, 0.96, flow) * (1.0 - smoothstep(0.96, 1.0, flow));
    emissive += uFlow * mark * 1.4 * onRoad * (1.0 - smoothstep(0.0, ROAD_HALF * 0.7, d));
  }

  n = bumpNormal(n, roadHeight);

  // --- обочина под камнями бордюра -----------------------------------------------
  if (onKerb > 0.001) {
    float gravel = hash12(floor(world * 18.0));
    vec3 kerbGround = mix(uKerb * 0.35, uKerb * 0.6, gravel);
    albedo = mix(albedo, kerbGround, onKerb * 0.9);
    ao = mix(ao, 0.75, onKerb);
  }

  // --- сетка застройки ------------------------------------------------------------
  vec2 gridDist = min(inTile, 1.0 - inTile);
  float line = 1.0 - smoothstep(0.006, 0.024, min(gridDist.x, gridDist.y));
  float nearRoad = 1.0 - smoothstep(1.3, 3.6, d);
  float gridStrength = mix(0.012 + 0.028 * nearRoad, 0.09, uPlacing);
  emissive += uAccent * line * buildable * gridStrength;

  // --- свет -----------------------------------------------------------------------
  float shadow = shadowAt(vWorld, vec3(0.0, 1.0, 0.0));
  vec3 v = normalize(uEye - vWorld);
  float NoL = max(dot(n, uSunDir), 0.0);
  vec3 col = albedo * (uSunColor * NoL * shadow + hemiLight(n) * ao);
  // Мокрая тёмная дорога «Стужи» и лак брусчатки: отражение неба.
  float F = 0.03 + 0.97 * pow(1.0 - max(dot(n, v), 0.0), 5.0);
  col += envColor(reflect(-v, n), rough) * F * (1.0 - rough) * 0.6 * ao;

  // Искры на снегу.
  if (uSparkle > 0.001) {
    vec2 cell = floor(world * 24.0);
    float h = hash12(cell);
    float glint = step(0.985, h) * pow(max(dot(reflect(-v, n), uSunDir), 0.0), 6.0);
    col += uSunColor * glint * 3.0 * uSparkle * shadow * (1.0 - onRoad);
  }

  col += emissive;

  // --- курсор постройки: уголки и мягкая заливка ----------------------------------
  if (uCursor.z >= 0.0) {
    vec2 rel = world - (uCursor.xy + 0.5);
    vec2 a = abs(rel);
    float inside = max(a.x, a.y);
    float frame = smoothstep(0.5, 0.465, inside) * smoothstep(0.41, 0.445, inside);
    float corner = step(0.25, min(a.x, a.y));
    float fill = smoothstep(0.5, 0.46, inside);
    vec3 cursorCol = mix(vec3(1.0, 0.22, 0.28), vec3(0.35, 1.0, 0.55), uCursor.z);
    float beat = 0.7 + 0.3 * sin(uTime * 5.5);
    col += cursorCol * (frame * mix(0.6, 2.6, corner) * beat + fill * 0.14);
  }

  // --- круг радиуса: линия, бегущий пунктир и лёгкий диск --------------------------
  if (uRange.w > 0.5) {
    vec2 rel = world - uRange.xy;
    float r = length(rel);
    float ringLine = smoothstep(0.06, 0.0, abs(r - uRange.z));
    float ang = atan(rel.y, rel.x);
    float dash = step(0.5, fract(ang * uRange.z * 1.6 / TAU - uTime * 0.3));
    float outer = smoothstep(0.05, 0.0, abs(r - uRange.z - 0.09)) * dash;
    float disc = smoothstep(uRange.z, uRange.z - 0.6, r) * 0.05;
    col += uAccent * (ringLine * 1.1 + outer * 0.6 + disc);
  }
  return col;
}

vec3 shadeCliff() {
  float depth = -vWorld.y;
  float u = vAux.y;
  float n1 = fbm(vec2(u * 70.0, depth * 2.4));
  float band = sin(depth * 6.5 + n1 * 4.0) * 0.5 + 0.5;
  float fine = sin(depth * 21.0 + n1 * 9.0) * 0.5 + 0.5;
  vec3 albedo = mix(uRockDark, uRockLight, band * 0.55 + fine * 0.2 + n1 * 0.3);
  float height = (fine * 0.4 + n1) * 0.07;
  vec3 base = normalize(vNormal);
  vec3 n = bumpNormal(base, height);

  // Дёрн свисает с кромки.
  float lip = 1.0 - smoothstep(0.02, 0.18 + n1 * 0.08, depth);
  albedo = mix(albedo, mix(uGrassLow, uGrassHigh, 0.7), lip);

  // Прожилки: у «Пепла» и «Полуночи» они светятся, у прочих — просто минерал.
  float veinN = fbm(vec2(u * 34.0, depth * 1.3) + 7.0);
  float vein = 1.0 - smoothstep(0.0, 0.028, abs(veinN - 0.5));
  vein *= smoothstep(0.25, 0.6, depth);
  albedo = mix(albedo, uRockVein * 0.5, vein * (1.0 - uVeinGlow) * 0.6);
  vec3 emissive = uRockVein * vein * uVeinGlow * (0.75 + 0.25 * sin(uTime * 1.4 + depth * 2.0 + u * 20.0));

  float ao = vAux.x;
  float shadow = shadowAt(vWorld, base);
  float NoL = max(dot(n, uSunDir), 0.0);
  vec3 col = albedo * (uSunColor * NoL * shadow + hemiLight(n) * ao);
  vec3 v = normalize(uEye - vWorld);
  col += rimLight(n, v, 0.35);
  return col + emissive;
}

void main() {
  if (uShadowPass > 0.5) {
    fragColor = vec4(0.0);
    return;
  }
  bool top = vWorld.y > -0.015 && vNormal.y > 0.9;
  vec3 col = top ? shadeTop() : shadeCliff();
  fragColor = vec4(applyFog(col, vWorld), 1.0);
}
`,ds=ei,fs=`#version 300 es
${$}

in vec2 vUv;
out vec4 fragColor;

uniform sampler2D uSource;
uniform vec2 uTexel;
uniform float uThreshold;
uniform float uKnee;

vec3 prefilter(vec3 c) {
  float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
  float knee = uThreshold * uKnee + 1e-5;
  float soft = clamp(luma - uThreshold + knee, 0.0, 2.0 * knee);
  soft = soft * soft / (4.0 * knee);
  return c * max(soft, luma - uThreshold) / max(luma, 1e-5);
}

float karis(vec3 c) {
  return 1.0 / (1.0 + dot(c, vec3(0.2126, 0.7152, 0.0722)));
}

void main() {
  vec2 t = uTexel;
  vec3 a = texture(uSource, vUv + t * vec2(-2.0, 2.0)).rgb;
  vec3 b = texture(uSource, vUv + t * vec2(0.0, 2.0)).rgb;
  vec3 c = texture(uSource, vUv + t * vec2(2.0, 2.0)).rgb;
  vec3 d = texture(uSource, vUv + t * vec2(-2.0, 0.0)).rgb;
  vec3 e = texture(uSource, vUv).rgb;
  vec3 f = texture(uSource, vUv + t * vec2(2.0, 0.0)).rgb;
  vec3 g = texture(uSource, vUv + t * vec2(-2.0, -2.0)).rgb;
  vec3 h = texture(uSource, vUv + t * vec2(0.0, -2.0)).rgb;
  vec3 i = texture(uSource, vUv + t * vec2(2.0, -2.0)).rgb;
  vec3 j = texture(uSource, vUv + t * vec2(-1.0, 1.0)).rgb;
  vec3 k = texture(uSource, vUv + t * vec2(1.0, 1.0)).rgb;
  vec3 l = texture(uSource, vUv + t * vec2(-1.0, -1.0)).rgb;
  vec3 m = texture(uSource, vUv + t * vec2(1.0, -1.0)).rgb;
  vec3 g0 = (a + b + d + e) * 0.25;
  vec3 g1 = (b + c + e + f) * 0.25;
  vec3 g2 = (d + e + g + h) * 0.25;
  vec3 g3 = (e + f + h + i) * 0.25;
  vec3 g4 = (j + k + l + m) * 0.25;
  float w0 = karis(g0), w1 = karis(g1), w2 = karis(g2), w3 = karis(g3), w4 = karis(g4);
  vec3 sum = (g0 * w0 + g1 * w1 + g2 * w2 + g3 * w3) * 0.125 + g4 * w4 * 0.5;
  float wsum = (w0 + w1 + w2 + w3) * 0.125 + w4 * 0.5;
  fragColor = vec4(prefilter(sum / max(wsum, 1e-5)), 1.0);
}
`,ps=`#version 300 es
${$}

in vec2 vUv;
out vec4 fragColor;

uniform sampler2D uSource;
uniform vec2 uTexel;

void main() {
  vec2 t = uTexel;
  vec3 a = texture(uSource, vUv + t * vec2(-2.0, 2.0)).rgb;
  vec3 b = texture(uSource, vUv + t * vec2(0.0, 2.0)).rgb;
  vec3 c = texture(uSource, vUv + t * vec2(2.0, 2.0)).rgb;
  vec3 d = texture(uSource, vUv + t * vec2(-2.0, 0.0)).rgb;
  vec3 e = texture(uSource, vUv).rgb;
  vec3 f = texture(uSource, vUv + t * vec2(2.0, 0.0)).rgb;
  vec3 g = texture(uSource, vUv + t * vec2(-2.0, -2.0)).rgb;
  vec3 h = texture(uSource, vUv + t * vec2(0.0, -2.0)).rgb;
  vec3 i = texture(uSource, vUv + t * vec2(2.0, -2.0)).rgb;
  vec3 j = texture(uSource, vUv + t * vec2(-1.0, 1.0)).rgb;
  vec3 k = texture(uSource, vUv + t * vec2(1.0, 1.0)).rgb;
  vec3 l = texture(uSource, vUv + t * vec2(-1.0, -1.0)).rgb;
  vec3 m = texture(uSource, vUv + t * vec2(1.0, -1.0)).rgb;
  vec3 sum = e * 0.125 + (a + c + g + i) * 0.03125 + (b + d + f + h) * 0.0625 + (j + k + l + m) * 0.125;
  fragColor = vec4(sum, 1.0);
}
`,ms=`#version 300 es
${$}

in vec2 vUv;
out vec4 fragColor;

uniform sampler2D uSource;
uniform vec2 uTexel;
uniform float uWeight;

void main() {
  vec2 t = uTexel;
  vec3 sum = texture(uSource, vUv).rgb * 4.0;
  sum += (texture(uSource, vUv + vec2(t.x, 0.0)).rgb + texture(uSource, vUv - vec2(t.x, 0.0)).rgb +
          texture(uSource, vUv + vec2(0.0, t.y)).rgb + texture(uSource, vUv - vec2(0.0, t.y)).rgb) * 2.0;
  sum += texture(uSource, vUv + t).rgb + texture(uSource, vUv - t).rgb +
         texture(uSource, vUv + vec2(t.x, -t.y)).rgb + texture(uSource, vUv + vec2(-t.x, t.y)).rgb;
  fragColor = vec4(sum / 16.0 * uWeight, 1.0);
}
`,hs=`#version 300 es
${$}
${z}

in vec2 vUv;
out vec4 fragColor;

uniform sampler2D uScene;
uniform sampler2D uBloom;
uniform float uBloomStrength;
uniform float uExposure;
uniform float uSaturation;
uniform float uContrast;
uniform vec3 uLift;
uniform vec3 uGain;
uniform float uVignette;
uniform float uGrain;
uniform float uAberration;
uniform float uTime;
uniform float uFlash;
uniform vec3 uFlashColor;

const mat3 ACES_IN = mat3(
  0.59719, 0.07600, 0.02840,
  0.35458, 0.90834, 0.13383,
  0.04823, 0.01566, 0.83777);
const mat3 ACES_OUT = mat3(
  1.60475, -0.10208, -0.00327,
  -0.53108, 1.10813, -0.07276,
  -0.07367, -0.00605, 1.07602);

vec3 acesFitted(vec3 c) {
  c = ACES_IN * c;
  vec3 a = c * (c + 0.0245786) - 0.000090537;
  vec3 b = c * (0.983729 * c + 0.4329510) + 0.238081;
  c = ACES_OUT * (a / b);
  return clamp(c, 0.0, 1.0);
}

const float ABERRATION_SCALE = 0.02;

void main() {
  vec2 fromCentre = vUv - 0.5;
  float r2 = dot(fromCentre, fromCentre);
  vec2 shift = fromCentre * r2 * uAberration * ABERRATION_SCALE;
  vec3 scene;
  scene.r = texture(uScene, vUv + shift).r;
  scene.g = texture(uScene, vUv).g;
  scene.b = texture(uScene, vUv - shift).b;

  vec3 col = scene + texture(uBloom, vUv).rgb * uBloomStrength;
  col += uFlashColor * uFlash;
  col = acesFitted(col * uExposure);

  float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(vec3(luma), col, uSaturation);
  col = col * uGain + uLift * (1.0 - col);
  col = pow(max(col, vec3(0.0)), vec3(1.0 / 2.2));
  col = (col - 0.5) * uContrast + 0.5;

  float vig = 1.0 - smoothstep(0.16, 0.8, r2) * uVignette;
  col *= vig;
  col += (hash12(gl_FragCoord.xy + fract(uTime) * 512.0) - 0.5) * uGrain;
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,gs=5,_s=class{gl;halfFloat;maxSamples;msaaFbo=null;msaaColor=null;msaaDepth=null;scene;sceneDepth=null;mips=[];downFirst;down;up;composite;emptyVao;width=0;height=0;samples=0;wantSamples=0;flash=0;flashColor=[1,.3,.35];settings={bloom:.6,threshold:1.1,exposure:1,saturation:1,contrast:1,lift:[0,0,0],gain:[1,1,1],vignette:.4,grain:.02,aberration:.3};constructor(e,t,n){this.gl=e,this.halfFloat=t,this.maxSamples=n,this.downFirst=new L(e,ds,fs,`bloom-down-first`),this.down=new L(e,ds,ps,`bloom-down`),this.up=new L(e,ds,ms,`bloom-up`),this.composite=new L(e,ds,hs,`composite-v2`);let r=e.createVertexArray();if(!r)throw Error(`не удалось создать VAO`);this.emptyVao=r}setSamples(e){let t=Math.max(0,Math.min(e,this.maxSamples));if(t===this.wantSamples)return;this.wantSamples=t;let{width:n,height:r}=this;this.width=0,this.height=0,n>0&&r>0&&this.resize(n,r)}resize(e,t){let n=Math.max(2,e),r=Math.max(2,t);if(n===this.width&&r===this.height)return;this.release(),this.width=n,this.height=r;let i=this.gl;if(this.scene=this.createTarget(n,r),this.samples=0,this.wantSamples>0&&(this.samples=this.tryMsaa(n,r,this.wantSamples)),this.samples===0){let e=i.createRenderbuffer();if(!e)throw Error(`не удалось создать буфер глубины`);i.bindRenderbuffer(i.RENDERBUFFER,e),i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT24,n,r),i.bindFramebuffer(i.FRAMEBUFFER,this.scene.fbo),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,e),i.bindFramebuffer(i.FRAMEBUFFER,null),this.sceneDepth=e}let a=n,o=r;this.mips=[];for(let e=0;e<gs;e++)a=Math.max(2,a>>1),o=Math.max(2,o>>1),this.mips.push(this.createTarget(a,o))}tryMsaa(e,t,n){let r=this.gl,i=r.createFramebuffer(),a=r.createRenderbuffer(),o=r.createRenderbuffer();if(!i||!a||!o)return 0;r.bindRenderbuffer(r.RENDERBUFFER,a),r.renderbufferStorageMultisample(r.RENDERBUFFER,n,this.halfFloat?r.RGBA16F:r.RGBA8,e,t),r.bindRenderbuffer(r.RENDERBUFFER,o),r.renderbufferStorageMultisample(r.RENDERBUFFER,n,r.DEPTH_COMPONENT24,e,t),r.bindFramebuffer(r.FRAMEBUFFER,i),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,a),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,o);let s=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE&&r.getError()===r.NO_ERROR;return r.bindFramebuffer(r.FRAMEBUFFER,null),s?(this.msaaFbo=i,this.msaaColor=a,this.msaaDepth=o,n):(r.deleteFramebuffer(i),r.deleteRenderbuffer(a),r.deleteRenderbuffer(o),0)}createTarget(e,t){let n=this.gl,r=n.createTexture(),i=n.createFramebuffer();if(!r||!i)throw Error(`не удалось создать кадровый буфер`);return n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,this.halfFloat?n.RGBA16F:n.RGBA8,e,t,0,n.RGBA,this.halfFloat?n.HALF_FLOAT:n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.bindFramebuffer(n.FRAMEBUFFER,i),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,r,0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindTexture(n.TEXTURE_2D,null),{fbo:i,texture:r,width:e,height:t}}beginScene(){let e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,this.msaaFbo??this.scene.fbo),e.viewport(0,0,this.width,this.height)}blit(e,t){let n=this.gl;n.bindFramebuffer(n.FRAMEBUFFER,e?e.fbo:null),n.viewport(0,0,e?e.width:this.width,e?e.height:this.height),t.use(),n.bindVertexArray(this.emptyVao),n.drawArrays(n.TRIANGLES,0,3),n.bindVertexArray(null)}bind(e,t){let n=this.gl;n.activeTexture(n.TEXTURE0+e),n.bindTexture(n.TEXTURE_2D,t)}present(e,t){let n=this.gl;n.disable(n.DEPTH_TEST),n.disable(n.BLEND),n.disable(n.CULL_FACE),this.msaaFbo&&(n.bindFramebuffer(n.READ_FRAMEBUFFER,this.msaaFbo),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,this.scene.fbo),n.blitFramebuffer(0,0,this.width,this.height,0,0,this.width,this.height,n.COLOR_BUFFER_BIT,n.NEAREST),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null));let r=this.settings;if(t){this.downFirst.use(),this.bind(0,this.scene.texture),this.downFirst.uniform1i(`uSource`,0),this.downFirst.uniform2f(`uTexel`,1/this.width,1/this.height),this.downFirst.uniform1f(`uThreshold`,r.threshold),this.downFirst.uniform1f(`uKnee`,.6),this.blit(this.mips[0],this.downFirst);for(let e=1;e<this.mips.length;e++){let t=this.mips[e-1];this.down.use(),this.bind(0,t.texture),this.down.uniform1i(`uSource`,0),this.down.uniform2f(`uTexel`,1/t.width,1/t.height),this.blit(this.mips[e],this.down)}n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE);for(let e=this.mips.length-1;e>0;e--){let t=this.mips[e];this.up.use(),this.bind(0,t.texture),this.up.uniform1i(`uSource`,0),this.up.uniform2f(`uTexel`,1/t.width,1/t.height),this.up.uniform1f(`uWeight`,.85),this.blit(this.mips[e-1],this.up)}n.disable(n.BLEND)}let i=this.composite;i.use(),this.bind(0,this.scene.texture),this.bind(1,this.mips[0].texture),i.uniform1i(`uScene`,0),i.uniform1i(`uBloom`,1),i.uniform1f(`uBloomStrength`,t?r.bloom:0),i.uniform1f(`uExposure`,r.exposure),i.uniform1f(`uSaturation`,r.saturation),i.uniform1f(`uContrast`,r.contrast),i.uniform3f(`uLift`,r.lift[0],r.lift[1],r.lift[2]),i.uniform3f(`uGain`,r.gain[0],r.gain[1],r.gain[2]),i.uniform1f(`uVignette`,r.vignette),i.uniform1f(`uGrain`,r.grain),i.uniform1f(`uAberration`,r.aberration),i.uniform1f(`uTime`,e),i.uniform1f(`uFlash`,this.flash),i.uniform3f(`uFlashColor`,this.flashColor[0],this.flashColor[1],this.flashColor[2]),this.blit(null,i)}release(){let e=this.gl;this.scene&&(e.deleteFramebuffer(this.scene.fbo),e.deleteTexture(this.scene.texture));for(let t of this.mips)e.deleteFramebuffer(t.fbo),e.deleteTexture(t.texture);this.mips=[],this.sceneDepth&&e.deleteRenderbuffer(this.sceneDepth),this.msaaFbo&&e.deleteFramebuffer(this.msaaFbo),this.msaaColor&&e.deleteRenderbuffer(this.msaaColor),this.msaaDepth&&e.deleteRenderbuffer(this.msaaDepth),this.sceneDepth=null,this.msaaFbo=null,this.msaaColor=null,this.msaaDepth=null}dispose(){this.release(),this.downFirst.dispose(),this.down.dispose(),this.up.dispose(),this.composite.dispose(),this.gl.deleteVertexArray(this.emptyVao)}},vs={low:{resolutionScale:.7,msaa:0,shadowSize:0,grass:0,bloom:!1,sparks:180,motes:.4,grain:0,aberration:0},medium:{resolutionScale:.86,msaa:2,shadowSize:1024,grass:.5,bloom:!0,sparks:450,motes:.7,grain:.02,aberration:.3},high:{resolutionScale:1,msaa:4,shadowSize:2048,grass:1,bloom:!0,sparks:900,motes:1,grain:.03,aberration:.4}},ys=.2,bs=1.65,xs=[{name:`iPos`,size:3},{name:`iScale`,size:3},{name:`iQuat`,size:4},{name:`iColor`,size:3},{name:`iMat`,size:4}],Ss=[{name:`iColor`,size:3},{name:`iMat`,size:4}],Cs=[{name:`iPos`,value:[0,0,0,1]},{name:`iScale`,value:[1,1,1,1]},{name:`iQuat`,value:[0,0,0,1]}],ws=[{name:`iOrigin`,size:3},{name:`iLocal`,size:3},{name:`iSize`,size:3},{name:`iQuat`,size:4},{name:`iPivot`,size:3},{name:`iColor`,size:3},{name:`iMotion`,size:4},{name:`iExtra`,size:4},{name:`iMat`,size:4}],Ts=[{name:`iBlade`,size:4},{name:`iVar`,size:2}],Es=[{name:`iDecal`,size:4},{name:`iTint`,size:4}],Ds=[{name:`iFrom`,size:3},{name:`iTo`,size:3},{name:`iColor`,size:3},{name:`iParams`,size:4}],Os=[{name:`iPos`,size:3},{name:`iVel`,size:3},{name:`iColor`,size:3},{name:`iParams`,size:2}],ks=[{name:`iSeed`,size:4}],As=120,js=72,Ms=180,Ns=1200,Ps=200,Fs=480,Is=64,Ls=260,Rs=40,zs=320,Bs=Math.PI*2,Vs={beam:0,arc:1,trail:2,health:3,pillar:4},Hs=[.62,.3,1],Us=[1,.22,.28],Ws=[[.55,.75,1],[.75,.6,1],[.5,.95,.85]],Gs={stone:q,metal:Y,crystal:null,ice:To,energy:null,wood:xo,leaf:Co,dark:wo,glass:null,vortex:null},Ks={stone:0,metal:0,crystal:1,ice:.5,energy:1,wood:0,leaf:0,dark:0,glass:1,vortex:1},qs=new WeakMap;function Js(e){let t=qs.get(e);if(!t){let[n,r,i]=e.rot??[0,0,0];t=Ki(n,r,i),qs.set(e,t)}return t}var Ys=new Map;function Xs(e){let t=Ys.get(e);if(t===void 0){let n=Ao[e],r=-1;for(let e of n)(e.glow??0)>=1&&!e.orbit&&(r=Math.max(r,e.pos[1]));t=r>0?r:Lo(n)*.75,Ys.set(e,t)}return t}function Zs(e,t,n){return[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n]}function Qs(e){return e<0?0:e>1?1:e}function $s(e){let t=e-1;return 1+2.7*t*t*t+1.7*t*t}var ec=class{camera;gl;glctx;litProgram;creatureProgram;terrainProgram;abyssProgram;grassProgram;decalProgram;beamProgram;sparkProgram;moteProgram;post;emptyVao;cpuMeshes=new Map;geometries=new Map;towerMeshes=new Map;ghostMeshes=new Map;creatureMeshes=new Map;blobs;halos;rings;beams;bars;sparksMesh;islandGeometry=null;staticBatch=null;grass=null;motes=null;fieldTex=null;buildMaskTex=null;occupancyTex=null;occupancy=new Uint8Array(1);occupancyKey=``;shadow=null;noShadow;map=null;path=null;layout=null;field=null;mapId=``;board=D(1,1);staticBlobs=[];portal=null;core=null;quality=`high`;profile=vs.high;themeId=Pn;theme=In(Pn);look=ro(Pn);sun=io(ro(Pn));sparks=new aa(vs.high.sparks);debris=new oa(Ms);flourish=new sa;invViewProj=nr();lastTime=0;needsFraming=!1;coreShake=0;towerAt=new Map;constructor(e,t=new dr){this.camera=t,this.glctx=e,this.gl=e.gl;let n=this.gl;this.litProgram=new L(n,ss,cs,`lit-v2`),this.creatureProgram=new L(n,Yo,Xo,`creature-v2`),this.terrainProgram=new L(n,ls,us,`terrain-v2`),this.abyssProgram=new L(n,qo,Jo,`abyss-v2`),this.grassProgram=new L(n,as,os,`grass-v2`),this.decalProgram=new L(n,Zo,Qo,`decal-v2`),this.beamProgram=new L(n,$o,es,`beam-v2`),this.sparkProgram=new L(n,ts,ns,`spark-v2`),this.moteProgram=new L(n,rs,is,`mote-v2`);let r=n.createVertexArray();if(!r)throw Error(`не удалось создать VAO`);this.emptyVao=r;let i=new Map,a=(e,t)=>i.set(e,(i.get(e)??0)+t),o=new Map;for(let e of Object.values(Ao)){let t=new Map;for(let n of e){let e=Ho(n.shape,n.size);t.set(e,(t.get(e)??0)+1)}for(let[e,n]of t)o.set(e,Math.max(o.get(e)??0,n))}for(let[e,t]of o)a(e,t*As);for(let e of[...Mo,...No])a(Ho(e.shape,e.size),1);a(`gem`,240),a(`octa`,Ms);for(let[e,t]of i)this.towerMeshes.set(e,new co(n,this.litProgram,this.geometry(e),xs,t)),this.ghostMeshes.set(e,new co(n,this.litProgram,this.geometry(e),xs,Rs));let s=new Map;for(let e of Object.values($i)){let t=new Map;for(let n of e){let e=Ho(n.shape,n.size);t.set(e,(t.get(e)??0)+1)}for(let[e,n]of t)s.set(e,Math.max(s.get(e)??0,n))}for(let[e,t]of s)this.creatureMeshes.set(e,new co(n,this.creatureProgram,this.geometry(e),ws,t*js));let c=this.geometryFrom(`groundQuad`,Ba()),l=this.geometryFrom(`billboard`,Va());this.blobs=new co(n,this.decalProgram,c,Es,Fs),this.halos=new co(n,this.decalProgram,c,Es,As),this.rings=new co(n,this.decalProgram,c,Es,Is),this.beams=new co(n,this.beamProgram,l,Ds,Ns),this.bars=new co(n,this.beamProgram,l,Ds,Ps),this.sparksMesh=new co(n,this.sparkProgram,l,Os,vs.high.sparks+Ls),this.noShadow=zo(n,1,4294967295),this.post=new _s(n,e.caps.halfFloatColor,e.caps.maxSamples),this.applyQuality(),this.post.resize(e.canvas.width,e.canvas.height)}cpuMesh(e){let t=this.cpuMeshes.get(e);return t||(t=Vo[e](),this.cpuMeshes.set(e,t)),t}geometry(e){return this.geometryFrom(e,void 0)}geometryFrom(e,t){let n=this.geometries.get(e);return n||(n=new so(this.gl,t??this.cpuMesh(e)),this.geometries.set(e,n)),n}setQuality(e){this.quality=e,this.profile=vs[e],this.applyQuality()}getQuality(){return this.quality}setTheme(e){(e!==this.themeId||this.theme.id!==e)&&(this.themeId=e,this.theme=In(e),this.look=ro(this.theme.id),this.sun=io(this.look),this.applyPost(),this.fitShadow(),this.map&&this.path&&this.layout&&(this.buildStatic(),this.buildMotes()))}getTheme(){return this.themeId}applyQuality(){let e=Math.min(this.profile.shadowSize,this.glctx.caps.maxTextureSize);if(this.shadow&&this.shadow.size!==e&&(this.shadow.dispose(),this.shadow=null),e>0&&!this.shadow){try{this.shadow=new Ro(this.gl,e)}catch{this.shadow=null}this.fitShadow()}this.post.setSamples(this.profile.msaa),this.applyPost(),this.map&&this.buildMotes()}applyPost(){let e=this.look.post,t=this.post.settings;t.bloom=ys*e.bloom,t.threshold=e.threshold,t.exposure=bs*e.exposure,t.saturation=e.saturation,t.contrast=e.contrast,t.lift=e.lift,t.gain=e.gain,t.vignette=e.vignette,t.grain=this.profile.grain*e.grain,t.aberration=this.profile.aberration}fitShadow(){this.shadow&&this.layout&&this.shadow.fit(this.sun,this.layout.bounds,-.6,3.2)}setMap(e,t={}){if(this.mapId===e.map.id)return;let n=this.gl;this.mapId=e.map.id,this.map=e.map,this.path=e.path,this.board=D(e.map.width,e.map.height),this.layout=Ga(e.map);let r=e.path.points,i=r[0],a=$e(e.path,0);this.portal={x:i.x-a.x*.35,z:i.y-a.y*.35,facing:Math.atan2(a.x,a.y)};let o=r[r.length-1];this.core={x:o.x,z:o.y},this.islandGeometry?.dispose(),this.islandGeometry=new lo(n,this.terrainProgram,qa(this.layout)),this.field=Ya(this.layout,e.path),this.fieldTex&&n.deleteTexture(this.fieldTex),this.fieldTex=this.createFieldTexture(this.field,e.path),this.buildMaskTex&&n.deleteTexture(this.buildMaskTex),this.buildMaskTex=Si(n,xi(e.map,e.path),{smooth:!1}),this.occupancyTex&&n.deleteTexture(this.occupancyTex),this.occupancy=new Uint8Array(e.map.width*e.map.height),this.occupancyTex=Si(n,{data:this.occupancy,width:e.map.width,height:e.map.height},{smooth:!1}),this.occupancyKey=``,this.buildStatic(),this.buildGrass(),this.buildMotes(),this.fitShadow(),(t.frame??!0)&&(this.camera.target=D(e.map.width/2,e.map.height/2),this.needsFraming=!0),this.sparks.clear(),this.debris.clear(),this.flourish.clear()}createFieldTexture(e,t){let n=this.gl,{width:r,height:i,origin:a,size:o}=e,s=new Uint8Array(r*i*4);for(let n=0;n<i;n++){let c=a[1]+(n+.5)/i*o[1];for(let i=0;i<r;i++){let l=ic(t,a[0]+(i+.5)/r*o[0],c)/1.6*Bs,u=(n*r+i)*4;s[u]=e.data[n*r+i],s[u+1]=Math.round((Math.sin(l)*.5+.5)*255),s[u+2]=Math.round((Math.cos(l)*.5+.5)*255),s[u+3]=255}}let c=n.createTexture();if(!c)throw Error(`не удалось создать текстуру`);return n.bindTexture(n.TEXTURE_2D,c),n.pixelStorei(n.UNPACK_ALIGNMENT,1),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,r,i,0,n.RGBA,n.UNSIGNED_BYTE,s),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.bindTexture(n.TEXTURE_2D,null),c}keepouts(){let e=[];return this.portal&&e.push({x:this.portal.x,z:this.portal.z,radius:1.5}),this.core&&e.push({x:this.core.x,z:this.core.z,radius:1.1}),e}buildStatic(){let{map:e,path:t,layout:n}=this;if(!e||!t||!n)return;let r=new K,i=[],a=[],o=(e,t,n,a,o,s,c,l)=>{let u=this.cpuMesh(e),d=r.vertexCount;for(let e=0;e<u.vertexCount;e++){let d=qi(a,[u.positions[e*3]*n[0],u.positions[e*3+1]*n[1],u.positions[e*3+2]*n[2]]),f=qi(a,[u.normals[e*3]/n[0],u.normals[e*3+1]/n[1],u.normals[e*3+2]/n[2]]),p=Math.hypot(f[0],f[1],f[2])||1;r.vertex([d[0]+t[0],d[1]+t[1],d[2]+t[2]],[f[0]/p,f[1]/p,f[2]/p],u.aux[e*3],u.aux[e*3+1],u.aux[e*3+2]),i.push(o[0],o[1],o[2],s,c,0,l)}for(let e=0;e<u.indexCount;e++)r.indices.push(u.indices[e]+d)};for(let[t,n]of e.blocked){let e=ma(t*73+n*151+7),r=t+.5,i=n+.5,s=Ws[Math.floor(e()*Ws.length)];o(`rock`,[r,.14,i],[.7,.3,.62],Gi(e()*Bs),this.look.rock.light,Uo.stone,0,e()*10),o(`rock`,[r+.26,.08,i-.2],[.3,.18,.28],Gi(e()*Bs),this.look.rock.dark,Uo.stone,0,e()*10);let c=3+Math.floor(e()*3);for(let t=0;t<c;t++){let n=e()*Bs,a=e()*.18,c=.3+e()*.55*(t===0?1.4:1),l=.1+e()*.08,u=(e()-.5)*.9;o(`quartz`,[r+Math.cos(n)*a,c*.45+.1,i+Math.sin(n)*a],[l,c,l],Ki(u,e()*Bs,(e()-.5)*.9),s,Uo.crystal,.35,e()*10)}a.push(r,i,.55,.7)}let s=this.theme.ground.kerb;for(let e of Xa(n,t)){let t=e.shade*1.35;o(`kerb`,[e.x,e.height*.5,e.z],[e.width,e.height,e.length],Gi(e.yaw),[s[0]*t,s[1]*t,s[2]*t],Uo.stone,0,e.x*3.1+e.z)}let c=Fo[this.look.decor];for(let r of $a(e,t,n,this.keepouts())){let e=Io(c,r.pick),t=Gi(r.yaw);for(let n of Po(e,c,r.variant)){let e=Ho(n.shape,n.size),i=qi(t,[n.pos[0]*r.scale,n.pos[1]*r.scale,n.pos[2]*r.scale]),a=Wi(t,Js(n)),s=n.color??Gs[n.mat]??q;o(e,[r.x+i[0],i[1],r.z+i[2]],[n.size[0]*r.scale,n.size[1]*r.scale,n.size[2]*r.scale],a,s,Uo[n.mat],n.glow??0,r.variant*10)}a.push(r.x,r.z,.42*r.scale,.6)}this.staticBatch?.dispose(),this.staticBatch=new lo(this.gl,this.litProgram,r.build(),{layout:Ss,data:new Float32Array(i)},Cs),this.staticBlobs=a}buildGrass(){let{map:e,path:t,layout:n}=this;if(!e||!t||!n)return;this.grass?.dispose();let r=Qa(e,t,n,this.keepouts());this.grass=new uo(this.gl,this.grassProgram,this.geometryFrom(`grass`,za()),Ts,r)}buildMotes(){if(!this.layout)return;this.motes?.dispose();let e=Math.min(zs,Math.round(this.look.motes.count*this.profile.motes)),t=ma(1799+this.themeId.length*17),n=new Float32Array(Math.max(1,e)*4);for(let r=0;r<e*4;r++)n[r]=t();this.motes=new uo(this.gl,this.moteProgram,this.geometryFrom(`billboard`,Va()),ks,n),this.motes.count=e}emit(e){switch(e.type){case`kill`:this.sparks.burst(e.x,.45,e.y,e.color,{count:Math.min(22,8+Math.floor(e.bounty/6)),speed:3.2,life:.6,size:.09}),this.debris.burst(e.x,.45,e.y,e.color,Math.min(9,4+Math.floor(e.bounty/15)),1.6,.12),this.flourish.ring(e.x,e.y,.8,e.color,.45,.7);break;case`impact`:this.sparks.burst(e.x,.4,e.y,e.color,{count:e.splash>0?14:6,speed:e.splash>0?3.6:2.2,life:.35,size:e.splash>0?.1:.07}),e.splash>0&&this.flourish.ring(e.x,e.y,Math.max(.6,e.splash),e.color,.5,1);break;case`leak`:this.sparks.burst(e.x,.6,e.y,Us,{count:28,speed:3.8,life:.9,size:.12}),this.flourish.ring(e.x,e.y,1.6,Us,.7,1.2),this.coreShake=Math.min(1,this.coreShake+.5+.1*e.damage),this.post.flash=Math.min(.55,this.post.flash+.26*e.damage),this.post.flashColor=[1,.22,.28];break;case`craft`:{let t=Rr(e.kind);this.sparks.burst(e.x,.3,e.y,t,{count:e.firstTime?46:28,speed:2.6,life:.9,size:.1,lift:1.4}),this.flourish.ring(e.x,e.y,1.1,t,.7,1.1),this.flourish.pillar(e.x,e.y,t,3.2,.34,.9),e.firstTime&&(this.post.flash=Math.min(.42,this.post.flash+.22),this.post.flashColor=[.9,.85,1]);break}case`upgrade`:{let t=Rr(e.kind);this.sparks.burst(e.x,.7,e.y,t,{count:36,speed:3,life:.9,size:.1,lift:1.6}),this.flourish.ring(e.x,e.y,1.3,t,.8,1.2),this.flourish.pillar(e.x,e.y,t,4,.42,1.1);break}case`sell`:this.sparks.burst(e.x,.3,e.y,[.6,.65,.8],{count:12,speed:2,life:.5,size:.08}),this.debris.burst(e.x,.3,e.y,[.4,.4,.44],6,1.4,.1,0);break;case`waveClear`:this.post.flash=Math.min(.36,this.post.flash+.16),this.post.flashColor=[.35,.95,.8];break;case`won`:this.post.flash=.7,this.post.flashColor=[.85,1,.95];break;case`lost`:this.post.flash=.7,this.post.flashColor=[1,.2,.25]}}pick(e,t){return this.camera.screenToGround(e,t)}render(e){let t=this.gl,n=this.lastTime===0?1/60:Math.min(.1,Math.max(0,e.time-this.lastTime));this.lastTime=e.time,(vr(this.glctx,this.profile.resolutionScale)||this.post.width===0)&&this.post.resize(this.glctx.canvas.width,this.glctx.canvas.height);let r=this.glctx.canvas.width,i=this.glctx.canvas.height;this.sparks.update(n),this.debris.update(n),this.flourish.update(n),this.post.flash=Math.max(0,this.post.flash-n*1.6),this.coreShake=Math.max(0,this.coreShake-n*2.2);let a=r/Math.max(i,1);this.needsFraming&&=(this.camera.frame(this.board.x,this.board.y,a),!1),this.camera.clampTarget(this.board.x,this.board.y),this.camera.update(a);let o=this.camera.eye();this.fillSolids(e),this.fillCreatures(e),this.fillDecals(e),this.fillBeams(e),this.fillSparks(),this.updateOccupancy(e.state);for(let e of this.towerMeshes.values())e.upload();for(let e of this.ghostMeshes.values())e.upload();for(let e of this.creatureMeshes.values())e.upload();if(this.blobs.upload(),this.halos.upload(),this.rings.upload(),this.beams.upload(),this.bars.upload(),this.sparksMesh.upload(),this.shadow){this.shadow.begin(),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.depthMask(!0),t.disable(t.BLEND),t.disable(t.CULL_FACE),t.enable(t.POLYGON_OFFSET_FILL),t.polygonOffset(1.6,3),this.bindShadowUnit(this.noShadow);for(let t of[this.litProgram,this.creatureProgram])if(t.use(),t.uniformMatrix4fv(`uViewProj`,this.shadow.viewProj),t.uniform1f(`uShadowPass`,1),t.uniform1f(`uTime`,e.time),t.uniform1i(`uShadowMap`,3),t.uniform1f(`uShadowOn`,0),t===this.litProgram){t.uniform1f(`uGhost`,0),this.staticBatch?.draw();for(let e of this.towerMeshes.values())e.draw()}else for(let e of this.creatureMeshes.values())e.draw();t.disable(t.POLYGON_OFFSET_FILL)}this.post.beginScene(),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),this.bindShadowUnit(this.shadow?this.shadow.texture:this.noShadow),t.disable(t.BLEND),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.depthMask(!0),t.enable(t.CULL_FACE),t.cullFace(t.BACK),this.drawTerrain(e,o),t.enable(t.BLEND),t.blendFunc(t.DST_COLOR,t.ZERO),t.depthMask(!1),t.enable(t.POLYGON_OFFSET_FILL),t.polygonOffset(-1,-2),this.decalProgram.use(),this.decalProgram.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),this.decalProgram.uniform1f(`uMode`,0),this.decalProgram.uniform1f(`uTime`,e.time),this.blobs.draw(),t.blendFunc(t.ONE,t.ONE),this.decalProgram.uniform1f(`uMode`,2),this.halos.draw(),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.BLEND),t.depthMask(!0),this.useLit(this.litProgram,e.time,o),this.litProgram.uniform1f(`uGhost`,0),this.staticBatch?.draw();for(let e of this.towerMeshes.values())e.draw();this.useLit(this.creatureProgram,e.time,o);for(let e of this.creatureMeshes.values())e.draw();if(this.grass&&this.profile.grass>0&&this.look.grass.density>0){t.disable(t.CULL_FACE);let n=this.grassProgram;this.useLit(n,e.time,o),n.uniform2f(`uBoard`,this.board.x,this.board.y),n.uniform3f(`uRoot`,...this.look.grass.root),n.uniform3f(`uTip`,...this.look.grass.tip),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,this.occupancyTex),n.uniform1i(`uOccupancy`,2),this.grass.draw(Math.floor(this.grass.count*this.profile.grass*this.look.grass.density)),t.enable(t.CULL_FACE)}if(t.depthMask(!1),t.disable(t.CULL_FACE),this.drawAbyss(e.time,o),t.enable(t.CULL_FACE),t.enable(t.BLEND),t.depthMask(!1),this.hasGhost()){this.useLit(this.litProgram,e.time,o),this.litProgram.uniform1f(`uGhost`,e.hoverValid?1:2),t.blendFunc(t.SRC_ALPHA,t.ONE);for(let e of this.ghostMeshes.values())e.draw();this.litProgram.uniform1f(`uGhost`,0)}t.disable(t.CULL_FACE),t.blendFunc(t.ONE,t.ONE),t.enable(t.POLYGON_OFFSET_FILL),t.polygonOffset(-1,-2),this.decalProgram.use(),this.decalProgram.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),this.decalProgram.uniform1f(`uMode`,1),this.rings.draw(),t.disable(t.POLYGON_OFFSET_FILL),t.blendFunc(t.SRC_ALPHA,t.ONE);let s=this.beamProgram;s.use(),s.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),s.uniform3f(`uEye`,o.x,o.y,o.z),s.uniform1f(`uTime`,e.time),this.beams.draw();let c=this.camera.view,l=this.sparkProgram;if(l.use(),l.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),l.uniform3f(`uRight`,c[0],c[4],c[8]),l.uniform3f(`uUp`,c[1],c[5],c[9]),l.uniform3f(`uEye`,o.x,o.y,o.z),this.sparksMesh.draw(),this.motes&&this.layout&&this.motes.count>0){let t=this.moteProgram,{minX:n,minZ:r,maxX:i,maxZ:a}=this.layout.bounds;t.use(),t.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),t.uniform3f(`uRight`,c[0],c[4],c[8]),t.uniform3f(`uUp`,c[1],c[5],c[9]),t.uniform1f(`uTime`,e.time),t.uniform1f(`uKind`,this.look.motes.kind),t.uniform4f(`uArea`,n,r,i-n,a-r),t.uniform1f(`uSize`,this.look.motes.size),t.uniform3f(`uColor`,...this.look.motes.color),this.motes.draw()}t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),s.use(),this.bars.draw(),t.depthMask(!0),t.disable(t.BLEND),t.enable(t.CULL_FACE),this.post.present(e.time,this.profile.bloom)}bindShadowUnit(e){let t=this.gl;t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,e)}useLit(e,t,n){let r=this.look;e.use(),e.uniformMatrix4fv(`uViewProj`,this.camera.viewProj),e.uniform1f(`uTime`,t),e.uniform1f(`uShadowPass`,0),e.uniform3f(`uEye`,n.x,n.y,n.z),e.uniform3f(`uSunDir`,this.sun[0],this.sun[1],this.sun[2]),e.uniform3f(`uSunColor`,...r.sunColor),e.uniform3f(`uSkyAmbient`,...r.skyAmbient),e.uniform3f(`uGroundAmbient`,...r.groundAmbient),e.uniform3f(`uRimColor`,...r.rim),e.uniform3f(`uFogColor`,...r.fog),e.uniform1f(`uFogDensity`,r.fogDensity),e.uniform3f(`uEnvZenith`,...r.env.zenith),e.uniform3f(`uEnvHorizon`,...r.env.horizon),e.uniform3f(`uEnvGround`,...r.env.ground),e.uniform1i(`uShadowMap`,3),this.shadow?(e.uniformMatrix4fv(`uLightViewProj`,this.shadow.viewProj),e.uniform1f(`uShadowOn`,1),e.uniform1f(`uShadowTexel`,1/this.shadow.size)):e.uniform1f(`uShadowOn`,0)}drawAbyss(e,t){let n=this.gl,r=this.abyssProgram,i=this.look.abyss,a=this.invViewProj;lr(a,this.camera.viewProj),r.use(),r.uniformMatrix4fv(`uInvViewProj`,a),r.uniform3f(`uEye`,t.x,t.y,t.z),r.uniform1f(`uTime`,e),r.uniform1f(`uMode`,i.mode),r.uniform3f(`uDeep`,...i.deep),r.uniform3f(`uLit`,...i.lit),r.uniform3f(`uShade`,...i.shade),r.uniform3f(`uGlow`,...i.glow),r.uniform3f(`uFogColor`,...this.look.fog),r.uniform3f(`uSunDir`,this.sun[0],this.sun[1],this.sun[2]),r.uniform1f(`uStars`,i.stars),r.uniform1f(`uCoverage`,i.coverage),n.bindVertexArray(this.emptyVao),n.drawArrays(n.TRIANGLES,0,3),n.bindVertexArray(null)}drawTerrain(e,t){let n=this.gl;if(!this.islandGeometry||!this.fieldTex||!this.buildMaskTex||!this.field)return;let r=this.terrainProgram,i=this.theme.ground,a=this.look;this.useLit(r,e.time,t),r.uniform2f(`uBoard`,this.board.x,this.board.y),r.uniform2f(`uFieldOrigin`,this.field.origin[0],this.field.origin[1]),r.uniform2f(`uFieldSize`,this.field.size[0],this.field.size[1]),r.uniform1f(`uFieldRange`,4),r.uniform3f(`uAccent`,...i.accent),r.uniform3f(`uGrassLow`,...i.grassLow),r.uniform3f(`uGrassHigh`,...i.grassHigh),r.uniform3f(`uTuft`,...i.tuft),r.uniform3f(`uRoadLow`,...i.roadLow),r.uniform3f(`uRoadHigh`,...i.roadHigh),r.uniform3f(`uKerb`,...i.kerb),r.uniform3f(`uFlow`,...i.flow),r.uniform1f(`uCracks`,a.cracks),r.uniform1f(`uFlowers`,a.flowers),r.uniform3f(`uFlowerColor`,...a.flowerColor),r.uniform1f(`uSparkle`,a.sparkle),r.uniform3f(`uRockLight`,...a.rock.light),r.uniform3f(`uRockDark`,...a.rock.dark),r.uniform3f(`uRockVein`,...a.rock.vein),r.uniform1f(`uVeinGlow`,Math.max(0,Math.min(1,(Math.max(...a.rock.vein)-1)*2)));let o=+(this.profile.grass>0&&a.grass.density>0);r.uniform1f(`uGrassOn`,o),r.uniform1f(`uPlacing`,+!!e.placing),e.hoverCell?r.uniform3f(`uCursor`,e.hoverCell.x,e.hoverCell.y,+!!e.hoverValid):r.uniform3f(`uCursor`,0,0,-1);let s=nc(e);r.uniform4f(`uRange`,s.x,s.y,s.radius,+!!s.on),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.fieldTex),r.uniform1i(`uPathField`,0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,this.buildMaskTex),r.uniform1i(`uBuildMask`,1),this.islandGeometry.draw()}pushLit(e,t,n,r,i,a,o,s,c,l,u,d,f){if(!e.hasRoom())return;let p=e.offsetOf(e.count++),m=e.data;m[p]=t,m[p+1]=n,m[p+2]=r,m[p+3]=i,m[p+4]=a,m[p+5]=o,m[p+6]=s[0],m[p+7]=s[1],m[p+8]=s[2],m[p+9]=s[3],m[p+10]=c[0],m[p+11]=c[1],m[p+12]=c[2],m[p+13]=l,m[p+14]=u,m[p+15]=d,m[p+16]=f}placeModel(e,t,n,r,i,a,o,s,c,l,u,d,f){for(let p=0;p<t.length;p++){let m=t[p],h=e.get(Ho(m.shape,m.size));if(!h||!h.hasRoom())continue;let g=m.orbit?c*m.orbit*Bs+l*.7:0,_=m.spin?c*m.spin*Bs+l*1.3:0,v=a+g,y=Math.cos(v),b=Math.sin(v),[x,S,ee]=m.pos,te=m.bob?Math.sin(c*1.6+l+p*.9)*m.bob:0,ne=Wi(Gi(v+_),Js(m)),re=Zs(m.color??Gs[m.mat]??s,s,m.tint??Ks[m.mat]),ie=m.flash??0,ae=(m.glow??0)*u*(1+ie*d*1.6);this.pushLit(h,n+(x*y+ee*b)*o,r+(S+te)*o,i+(ee*y-x*b)*o,m.size[0]*o,m.size[1]*o,m.size[2]*o,ne,re,Uo[m.mat],ae,f+ie*d*.25,l*.37+p*.13)}}fillSolids(e){let{state:t,time:n}=e;for(let e of this.towerMeshes.values())e.count=0;for(let e of this.ghostMeshes.values())e.count=0;this.towerAt.clear();for(let r of t.towers){let i=Ao[r.kind],a=O(r.cell.x,r.cell.y),o=Rr(r.kind),s=(t.tick-r.builtAtTick+e.alpha)*E,c=s<.5?Math.max(.02,$s(Qs(s/.45))):1,l=Hr(r.level)*c,u=e.selectedTowerId===r.id,d=Ur(r.level)*(u?1.35:1),f=1/Math.max(.05,pe(r.kind).stats.fireRate),p=r.targetId?f-r.cooldown:99,m=Math.exp(-Math.max(0,p)*9),h=u?.08+.06*Math.sin(n*7):0;this.towerAt.set(`${r.cell.x},${r.cell.y}`,Xs(r.kind)*l),this.placeModel(this.towerMeshes,i,a.x,0,a.y,r.facing,l,o,n,r.id,d,m,h);let g=Lo(i)*l+.14,_=this.towerMeshes.get(`gem`);for(let e=1;e<r.level&&_;e++){let t=n*1.2+e/Math.max(1,r.level-1)*Bs+r.id;this.pushLit(_,a.x+Math.cos(t)*.26*l,g+Math.sin(n*2+e)*.03,a.y+Math.sin(t)*.26*l,.11*l,.11*l,.11*l,Wi(Gi(t*2),Ki(.4,0,0)),o,Uo.crystal,d,0,r.id+e)}}if(this.core){let e=1-t.lives/Math.max(1,t.lives+t.leaked),r=Zs(Fr,Us,Qs(e*.85)),i=1-e*.35*(.5+.5*Math.sin(n*9)),a=this.coreShake*.06;this.placeModel(this.towerMeshes,Mo,this.core.x+Math.sin(n*53)*a,0,this.core.z+Math.cos(n*47)*a,0,1,r,n,777,i,this.coreShake,this.coreShake*.3)}this.portal&&this.placeModel(this.towerMeshes,No,this.portal.x,0,this.portal.z,this.portal.facing,1,Hs,n,313,1,0,0);let r=this.towerMeshes.get(`octa`);if(r)for(let e of this.debris.items){let t=Math.min(1,e.life/.3),n=e.size*t;this.pushLit(r,e.x,e.y,e.z,n,n*1.4,n,e.rot,e.color,Uo.crystal,e.glow*t,0,e.x*7+e.z)}if(e.placing&&e.hoverCell){let t=O(e.hoverCell.x,e.hoverCell.y);this.placeModel(this.ghostMeshes,Ao[e.placing],t.x,0,t.y,n*.4,Hr(1),Rr(e.placing),n,1,1,0,0)}}hasGhost(){for(let e of this.ghostMeshes.values())if(e.count>0)return!0;return!1}fillCreatures(e){let{state:t,ctx:n}=e;for(let e of this.creatureMeshes.values())e.count=0;for(let r of t.enemies){let t=l[r.kind],i=$i[t.plan],a=zt(n,r,e.alpha),o=$e(n.path,r.dist),s=Math.atan2(o.x,o.y),c=Math.max(0,Math.min(1,r.hp/r.maxHp)),u=Wr(r.slowFor>0,r.dotFor>0),d=.6+.4*c,f=zr(r.kind),p=Br(r.kind),m=Vr(r.kind),h=yr[t.gait],g=Bt(r),_=Math.max(.05,$s(Qs(r.dist/.55)));for(let e=0;e<i.length;e++){let t=i[e],n=this.creatureMeshes.get(Ho(t.shape,t.size));if(!n||!n.hasRoom())continue;let o=tc(t,f,p),c=ta(t),l=na(t),v=n.offsetOf(n.count++),y=n.data;y[v]=a.x,y[v+1]=g,y[v+2]=a.y,y[v+3]=t.pos[0],y[v+4]=t.pos[1],y[v+5]=t.pos[2],y[v+6]=t.size[0],y[v+7]=t.size[1],y[v+8]=t.size[2],y[v+9]=c[0],y[v+10]=c[1],y[v+11]=c[2],y[v+12]=c[3],y[v+13]=l[0],y[v+14]=l[1],y[v+15]=l[2],y[v+16]=o[0]*u[0],y[v+17]=o[1]*u[1],y[v+18]=o[2]*u[2],y[v+19]=r.phase,y[v+20]=h,y[v+21]=t.role,y[v+22]=t.phase+r.wobble*.04,y[v+23]=m,y[v+24]=r.flash,y[v+25]=s,y[v+26]=d,y[v+27]=Yi[t.mat],y[v+28]=t.glow??0,y[v+29]=_,y[v+30]=r.id*.61+e*.17}}}pushBlob(e,t,n,r,i,a=[0,0,0],o=0){if(!e.hasRoom())return;let s=e.offsetOf(e.count++),c=e.data;c[s]=t,c[s+1]=n,c[s+2]=r,c[s+3]=i,c[s+4]=a[0],c[s+5]=a[1],c[s+6]=a[2],c[s+7]=o}fillDecals(e){let{state:t,ctx:n}=e;this.blobs.count=0,this.halos.count=0,this.rings.count=0;let r=this.shadow?.6:1;for(let e=0;e+3<this.staticBlobs.length;e+=4)this.pushBlob(this.blobs,this.staticBlobs[e],this.staticBlobs[e+1],this.staticBlobs[e+2],this.staticBlobs[e+3]*r);for(let n of t.towers){let t=O(n.cell.x,n.cell.y),i=Hr(n.level);this.pushBlob(this.blobs,t.x,t.y,.5*i,.62*r);let a=se(n.kind),o=e.selectedTowerId===n.id,s=(a?.35:.5+.22*(n.level-1))*(o?2:1);this.pushBlob(this.halos,t.x,t.y,(a?.36:.5)*i,s,Rr(n.kind),n.id*.13)}for(let i of t.enemies){let t=l[i.kind],a=zt(n,i,e.alpha),o=t.gait===`fly`,s=(o?.5:.42)*t.scale*(t.plan===`hound`||t.plan===`grub`?1.25:1);this.pushBlob(this.blobs,a.x,a.y,s,(o?.35:.6)*r)}this.core&&this.pushBlob(this.blobs,this.core.x,this.core.z,1,.55*r);for(let e of this.flourish.rings)this.pushBlob(this.rings,e.x,e.z,e.radius,e.strength,e.color,1-e.life/e.maxLife)}pushBeam(e,t,n,r,i,a,o,s){if(!e.hasRoom())return;let c=e.offsetOf(e.count++),l=e.data;l[c]=t[0],l[c+1]=t[1],l[c+2]=t[2],l[c+3]=n[0],l[c+4]=n[1],l[c+5]=n[2],l[c+6]=r[0],l[c+7]=r[1],l[c+8]=r[2],l[c+9]=i,l[c+10]=a,l[c+11]=o,l[c+12]=s}flares=[];fillBeams(e){let{state:t,ctx:n,time:r}=e;this.beams.count=0,this.bars.count=0,this.flares.length=0;let i=(e,t,n,r,i,a)=>{this.flares.push(e,t,n,r[0],r[1],r[2],i,a)},a=e=>this.towerAt.get(`${Math.floor(e.x)},${Math.floor(e.y)}`)??.8;for(let e of t.beams){let t=Math.max(0,e.life/e.maxLife);for(let n=0;n+1<e.points.length;n++){let o=e.points[n],s=e.points[n+1],c=[o.x,n===0?a(o):.45,o.y],l=[s.x,.45,s.y];if(e.style===`arc`){this.pushBeam(this.beams,c,l,e.color,.2,.5*t,0,Vs.beam);let i=la(c,l,e.id*7+n,r);for(let n=0;n+1<i.length;n++)this.pushBeam(this.beams,i[n],i[n+1],e.color,e.width*(.8+.6*t),2.2+2.4*t,0,Vs.arc);let a=ua(i[Math.floor(i.length/2)],e.id+n*3,r);for(let n=0;n+1<a.length;n++)this.pushBeam(this.beams,a[n],a[n+1],e.color,e.width*.6,1.5*t,0,Vs.arc)}else this.pushBeam(this.beams,c,l,e.color,e.width*(.75+.6*t),1.9+2.4*t,7,Vs.beam);i(l[0],l[1],l[2],e.color,.26*(.5+t),t)}if(e.points.length>0){let n=e.points[0];i(n.x,a(n),n.y,e.color,.22*t+.08,t)}}for(let e of t.projectiles){let t=Math.min(1,e.t),n=Math.max(0,t-.28),r=Xs(e.kind)*.95,a=t=>{let n=r+(.45-r)*t+e.arc*rc(t);return[e.from.x+(e.aim.x-e.from.x)*t,n,e.from.y+(e.aim.y-e.from.y)*t]},o=a(t);this.pushBeam(this.beams,a(n),o,e.color,.11,3.2,0,Vs.trail),i(o[0],o[1],o[2],e.color,e.style===`lob`?.2:.15,1)}for(let e of this.flourish.pillars){let t=e.life/e.maxLife;this.pushBeam(this.beams,[e.x,0,e.z],[e.x,e.height*(.6+.4*(1-t)),e.z],e.color,e.width*(.6+.4*t),2.2*t,0,Vs.pillar)}if(this.core){let e=Zs(Fr,Us,Qs((1-t.lives/Math.max(1,t.lives+t.leaked))*.85));this.pushBeam(this.beams,[this.core.x,1.2,this.core.z],[this.core.x,6,this.core.z],e,.22,.9+.2*Math.sin(r*2),0,Vs.pillar)}for(let r of t.enemies){let t=Math.max(0,Math.min(1,r.hp/r.maxHp));if(t>=.999)continue;let i=l[r.kind],a=zt(n,r,e.alpha),o=Bt(r)+ra(i.plan)*i.scale+.26,s=.28*i.scale+.12,c=s*(t*2-1);this.pushBeam(this.bars,[a.x-s-.02,o,a.y],[a.x+s+.02,o,a.y],[.02,.02,.03],.055,1,0,Vs.health),this.pushBeam(this.bars,[a.x-s,o,a.y],[a.x+c,o,a.y],Gr(t),.04,1.3,0,Vs.health)}}fillSparks(){let e=this.sparksMesh;e.count=0;let t=e.data,n=Math.min(e.capacity,this.profile.sparks+Ls),r=this.sparks.items,i=Math.min(r.length,this.profile.sparks);for(let a=0;a<i&&e.count<n;a++){let n=r[r.length-1-a],i=e.offsetOf(e.count++);t[i]=n.x,t[i+1]=n.y,t[i+2]=n.z,t[i+3]=n.vx,t[i+4]=n.vy,t[i+5]=n.vz,t[i+6]=n.color[0],t[i+7]=n.color[1],t[i+8]=n.color[2],t[i+9]=n.size,t[i+10]=Math.max(0,n.life/n.maxLife)}let a=this.flares;for(let r=0;r+7<a.length&&e.count<n;r+=8){let n=e.offsetOf(e.count++);t[n]=a[r],t[n+1]=a[r+1],t[n+2]=a[r+2],t[n+3]=0,t[n+4]=0,t[n+5]=0,t[n+6]=a[r+3],t[n+7]=a[r+4],t[n+8]=a[r+5],t[n+9]=a[r+6],t[n+10]=a[r+7]}}updateOccupancy(e){if(!this.occupancyTex||!this.map)return;let t=``;for(let n of e.towers)t+=`${n.cell.x},${n.cell.y};`;if(t===this.occupancyKey)return;this.occupancyKey=t;let n=this.map.width;this.occupancy.fill(0);for(let t of e.towers){let e=t.cell.y*n+t.cell.x;e>=0&&e<this.occupancy.length&&(this.occupancy[e]=255)}let r=this.gl;r.bindTexture(r.TEXTURE_2D,this.occupancyTex),r.pixelStorei(r.UNPACK_ALIGNMENT,1),r.texSubImage2D(r.TEXTURE_2D,0,0,0,n,this.map.height,r.RED,r.UNSIGNED_BYTE,this.occupancy),r.bindTexture(r.TEXTURE_2D,null)}dispose(){let e=this.gl;for(let e of this.towerMeshes.values())e.dispose();for(let e of this.ghostMeshes.values())e.dispose();for(let e of this.creatureMeshes.values())e.dispose();this.blobs.dispose(),this.halos.dispose(),this.rings.dispose(),this.beams.dispose(),this.bars.dispose(),this.sparksMesh.dispose(),this.islandGeometry?.dispose(),this.staticBatch?.dispose(),this.grass?.dispose(),this.motes?.dispose();for(let e of this.geometries.values())e.dispose();for(let t of[this.fieldTex,this.buildMaskTex,this.occupancyTex,this.noShadow])t&&e.deleteTexture(t);this.shadow?.dispose(),e.deleteVertexArray(this.emptyVao);for(let e of[this.litProgram,this.creatureProgram,this.terrainProgram,this.abyssProgram,this.grassProgram,this.decalProgram,this.beamProgram,this.sparkProgram,this.moteProgram])e.dispose();this.post.dispose()}};function tc(e,t,n){return e.paint===`body`?t:e.paint===`accent`?n:Xi[e.paint]}function nc(e){let t=e.selectedTowerId?e.state.towers.find(t=>t.id===e.selectedTowerId):void 0;if(t){let e=O(t.cell.x,t.cell.y);return{x:e.x,y:e.y,radius:Ce(pe(t.kind),t.level),on:!0}}return e.placing&&e.hoverCell?{x:e.hoverCell.x+.5,y:e.hoverCell.y+.5,radius:pe(e.placing).stats.range,on:!0}:{x:0,y:0,radius:0,on:!1}}function rc(e){let t=Math.max(0,Math.min(1,e));return 4*t*(1-t)}function ic(e,t,n){let r=1/0,i=0;for(let a=1;a<e.points.length;a++){let o=e.points[a-1],s=e.points[a],c=s.x-o.x,l=s.y-o.y,u=c*c+l*l||1,d=Math.max(0,Math.min(1,((t-o.x)*c+(n-o.y)*l)/u)),f=o.x+c*d,p=o.y+l*d,m=(t-f)*(t-f)+(n-p)*(n-p);m<r&&(r=m,i=e.cumulative[a-1]+Math.sqrt(u)*d)}return i}function ac(e,t,n){return t===`v2`?new ec(e,n):new zi(e,n)}function oc(e){let t=0,n=0;for(let r of e)t+=r.x,n+=r.y;return{x:t/e.length,y:n/e.length}}var sc=class{pointers=new Map;pinchDistance=0;pinchAngle=0;pinchCentre={x:0,y:0};get pointerCount(){return this.pointers.size}get isDragging(){return this.pointers.size>0}down(e,t,n,r){this.pointers.set(e,{x:t,y:n,startX:t,startY:n,startTime:r,travelled:0}),this.pointers.size===2&&this.resetPinch()}resetPinch(){let[e,t]=[...this.pointers.values()];e&&t&&(this.pinchDistance=Math.hypot(t.x-e.x,t.y-e.y),this.pinchAngle=Math.atan2(t.y-e.y,t.x-e.x),this.pinchCentre=oc([e,t]))}move(e,t,n){let r=this.pointers.get(e);if(!r)return this.pointers.size===0?{type:`hover`,x:t,y:n}:null;let i={x:r.x,y:r.y};if(r.travelled+=Math.hypot(t-r.x,n-r.y),r.x=t,r.y=n,this.pointers.size===1)return{type:`drag`,from:i,to:{x:t,y:n}};if(this.pointers.size===2){let[e,t]=[...this.pointers.values()],n=Math.hypot(t.x-e.x,t.y-e.y),r=Math.atan2(t.y-e.y,t.x-e.x),i=oc([e,t]),a=this.pinchDistance>1?n/this.pinchDistance:1,o=r-this.pinchAngle;o>Math.PI&&(o-=Math.PI*2),o<-Math.PI&&(o+=Math.PI*2);let s=i.y-this.pinchCentre.y;return this.pinchDistance=n,this.pinchAngle=r,this.pinchCentre=i,{type:`pinch`,scale:a,twist:o,dy:s}}return null}up(e,t){let n=this.pointers.get(e);if(this.pointers.delete(e),this.pointers.size===2&&this.resetPinch(),!n)return null;let r=t-n.startTime;return Math.hypot(n.x-n.startX,n.y-n.startY)<=12&&n.travelled<=24&&r<=450?{type:`tap`,x:n.x,y:n.y}:null}cancel(e){this.pointers.delete(e),this.pointers.size===2&&this.resetPinch()}clear(){this.pointers.clear()}},cc=.006,lc=i(function(){let e=(0,s.useRef)(null),t=Gn(),n=Jn(),r=qn(),i=Kn(),[a,o]=(0,s.useState)(null),c=(0,s.useRef)(null),l=(0,s.useRef)(null),u=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let a=e.current;if(!a)return;let s,d,f=r.graphics;try{s=_r(a);try{d=ac(s,f)}catch(e){if(f===`v1`)throw e;d=ac(s,`v1`),f=`v1`,r.setGraphics(`v1`),i.toast(`Графика v2 не запустилась на этом устройстве — включена v1`,`bad`)}}catch(e){o(e instanceof pr?`Нужен WebGL2. Обновите браузер или включите аппаратное ускорение.`:`Не удалось запустить графику: ${e instanceof Error?e.message:String(e)}`);return}l.current=s,c.current=d,u.current=f,d.setQuality(r.quality),d.setTheme(r.theme),t.onEvent=e=>c.current?.emit(e);let p=new sc,m=(e,t)=>fr(e,t,a.getBoundingClientRect()),h=e=>{a.setPointerCapture?.(e.pointerId),p.down(e.pointerId,e.clientX,e.clientY,e.timeStamp)},g=e=>{let n=c.current,r=p.move(e.pointerId,e.clientX,e.clientY);if(!r||!n)return;let i=n.camera;if(r.type===`hover`){let e=m(r.x,r.y);t.setHoverWorld(n.pick(e.x,e.y));return}if(r.type===`drag`){let e=m(r.from.x,r.from.y),t=m(r.to.x,r.to.y),a=n.pick(e.x,e.y),o=n.pick(t.x,t.y);a&&o&&(i.target=D(i.target.x+(a.x-o.x),i.target.y+(a.y-o.y)));return}i.zoomBy(1/r.scale),i.orbitBy(-r.twist,r.dy*cc)},_=e=>{a.releasePointerCapture?.(e.pointerId);let n=c.current,r=p.up(e.pointerId,e.timeStamp);if(!r||!n)return;let i=m(r.x,r.y),o=n.pick(i.x,i.y);o&&t.tapWorld(o)},v=e=>p.cancel(e.pointerId),y=e=>{e.preventDefault(),c.current?.camera.zoomBy(e.deltaY>0?1.12:1/1.12)};a.addEventListener(`pointerdown`,h),a.addEventListener(`pointermove`,g),a.addEventListener(`pointerup`,_),a.addEventListener(`pointercancel`,v),a.addEventListener(`wheel`,y,{passive:!1});let b=0,x=performance.now(),S=e=>{b=requestAnimationFrame(S);let r=Math.min(.25,(e-x)/1e3);x=e;let i=c.current;if(!i)return;t.ctx&&i.setMap(t.ctx);let a=t.advance(r);n.pump(),t.ctx&&t.state&&i.render({ctx:t.ctx,state:t.state,alpha:a,time:e/1e3,hoverCell:t.hoverCell,hoverValid:t.hoverValid,selectedTowerId:t.selectedTowerId,placing:t.pendingRecipe?.recipe.id??null})};return b=requestAnimationFrame(S),()=>{cancelAnimationFrame(b),a.removeEventListener(`pointerdown`,h),a.removeEventListener(`pointermove`,g),a.removeEventListener(`pointerup`,_),a.removeEventListener(`pointercancel`,v),a.removeEventListener(`wheel`,y),t.onEvent=void 0,c.current?.dispose(),c.current=null,l.current=null,u.current=null}},[]),(0,s.useEffect)(()=>{c.current?.setQuality(r.quality)},[r.quality]),(0,s.useEffect)(()=>{c.current?.setTheme(r.theme)},[r.theme]),(0,s.useEffect)(()=>{let e=c.current,n=l.current;if(!e||!n||u.current===r.graphics)return;let a;try{a=ac(n,r.graphics,e.camera)}catch{i.toast(`Эта версия графики не запустилась на этом устройстве`,`bad`),u.current&&r.setGraphics(u.current);return}e.dispose(),a.setQuality(r.quality),a.setTheme(r.theme),t.ctx&&a.setMap(t.ctx,{frame:!1}),c.current=a,u.current=r.graphics},[r.graphics]),(0,w.jsxs)(`div`,{className:`board`,children:[(0,w.jsx)(`canvas`,{ref:e,className:`board__canvas`,"aria-label":`Игровое поле`,role:`img`}),a?(0,w.jsxs)(`div`,{className:`board__error`,role:`alert`,children:[(0,w.jsx)(`p`,{className:`board__error-title`,children:`Графика недоступна`}),(0,w.jsx)(`p`,{className:`board__error-text`,children:a})]}):null]})});function uc({label:e,value:t,tone:n=`default`,icon:r,compact:i=!1}){return(0,w.jsxs)(`div`,{className:`stat stat--${n} ${i?`stat--compact`:``}`.trim(),children:[r?(0,w.jsx)(`span`,{className:`stat__icon`,"aria-hidden":`true`,children:r}):null,(0,w.jsxs)(`div`,{className:`stat__text`,children:[(0,w.jsx)(`span`,{className:`stat__label`,children:e}),(0,w.jsx)(`span`,{className:`stat__value mono`,children:t})]})]})}var dc=ce.length;function fc(e,t=20){let n=e/t;return n>.5?`good`:n>.2?`warn`:`bad`}var pc=i(function(){let e=Gn(),t=Kn(),n=Jn(),{hud:r}=e;return(0,w.jsxs)(`header`,{className:`hud`,children:[(0,w.jsxs)(`div`,{className:`hud__row`,children:[(0,w.jsx)(T,{size:`sm`,variant:`ghost`,className:`hud__menu`,"aria-label":`Меню`,onClick:()=>t.go(`menu`),children:`☰`}),(0,w.jsxs)(`div`,{className:`hud__stats`,children:[(0,w.jsx)(uc,{compact:!0,label:`Золото`,value:r.gold,tone:`gold`,icon:`◆`}),(0,w.jsx)(uc,{compact:!0,label:`Ядро`,value:r.lives,tone:fc(r.lives),icon:`❤`}),(0,w.jsx)(uc,{compact:!0,label:`Волна`,value:`${r.wave}/${r.totalWaves}`,icon:`≋`})]}),(0,w.jsxs)(`div`,{className:`hud__controls`,children:[(0,w.jsx)(T,{size:`sm`,variant:`ghost`,"aria-label":e.paused?`Продолжить`:`Пауза`,"aria-pressed":e.paused,onClick:()=>e.togglePause(),children:e.paused?`▶`:`❚❚`}),(0,w.jsxs)(T,{size:`sm`,variant:`ghost`,"aria-label":`Скорость ${e.speed}x`,onClick:()=>e.cycleSpeed(),children:[e.speed,`×`]})]})]}),(0,w.jsxs)(`div`,{className:`hud__row hud__row--secondary`,children:[(0,w.jsxs)(`button`,{type:`button`,className:`hud__book`,onClick:()=>t.go(`codex`),children:[(0,w.jsx)(`span`,{"aria-hidden":`true`,children:`📖`}),` Рецепты`,(0,w.jsxs)(`span`,{className:`hud__book-count mono`,children:[r.discovered.length,`/`,dc]})]}),(0,w.jsxs)(`span`,{className:`hud__towers`,title:`Башен на поле`,children:[(0,w.jsx)(`span`,{"aria-hidden":`true`,children:`⌂`}),` `,r.towers]}),(0,w.jsx)(`span`,{className:`hud__turn ${r.canPlace?`hud__turn--open`:``}`.trim(),children:r.canPlace?`Ход есть`:`Ход сделан`}),r.enemies>0?(0,w.jsxs)(`span`,{className:`hud__enemies`,children:[`Врагов: `,r.enemies]}):null,n.stage===`playing`?(0,w.jsx)(`span`,{className:`hud__net ${e.stalled?`hud__net--waiting`:``}`.trim(),children:e.stalled?`Ждём игрока…`:`${n.peerName||`Игрок 2`} · ${n.rtt}мс`}):null]})]})}),mc=`fosemberg`,hc=`FosTD © 2026`,gc={title:`Права на игру`,lead:`Игра «FosTD» целиком — код, графика, тексты, звук и название — принадлежит автору (fosemberg). Это не open-source и не бесплатный набор ассетов.`,sections:[{heading:`Нельзя без разрешения`,items:[`копировать игру и выкладывать её где-либо, в том числе под своим именем;`,`выкачивать графику, звук и тексты — поштучно или пачкой — и использовать их в своих проектах;`,`переделывать игру, делать переводы, порты и производные работы;`,`использовать код игры в своих проектах, коммерческих и некоммерческих;`,`использовать название игры и её оформление.`]},{heading:`Можно`,items:[`играть — бесплатно и сколько угодно;`,`рассказывать об игре: стримы, видео, разборы и скриншоты со ссылкой на игру;`,`читать исходный код и цитировать короткие фрагменты в статьях и обсуждениях.`]},{heading:`Разрешение`,body:`Нужно что-то из запрещённого — спросите у автора и получите письменное разрешение. Молчание разрешением не считается.`}]};function _c(){let e=Kn();return(0,w.jsxs)(we,{fullscreen:!0,className:`license`,title:gc.title,hint:hc,action:(0,w.jsx)(T,{size:`sm`,"aria-label":`Назад`,"data-testid":`license-back`,onClick:()=>e.go(`menu`),children:`✕`}),children:[(0,w.jsx)(`p`,{className:`license__lead`,"data-testid":`license-lead`,children:gc.lead}),gc.sections.map(e=>(0,w.jsxs)(`section`,{className:`license__group`,children:[(0,w.jsx)(`h3`,{className:`license__heading`,children:e.heading}),e.items?(0,w.jsx)(`ul`,{className:`license__list`,children:e.items.map(e=>(0,w.jsx)(`li`,{children:e},e))}):null,e.body?(0,w.jsx)(`p`,{className:`license__body`,children:e.body}):null]},e.heading)),(0,w.jsxs)(`p`,{className:`license__sign`,children:[`© `,mc,`. Все права защищены.`]})]})}function vc(){return typeof crypto<`u`&&typeof crypto.getRandomValues==`function`?crypto.getRandomValues(new Uint32Array(1))[0]>>>0:(Date.now()&4294967295)>>>0}var yc=i(function(){let e=Gn(),t=Kn(),[n,r]=(0,s.useState)(e.mapId),i=Ye.find(e=>e.id===n)??Ye[0];return(0,w.jsx)(`div`,{className:`menu`,children:(0,w.jsxs)(`div`,{className:`menu__inner`,children:[(0,w.jsxs)(`header`,{className:`menu__brand`,children:[(0,w.jsxs)(`h1`,{className:`menu__logo`,children:[(0,w.jsx)(`span`,{className:`menu__logo-r`,children:`FOS`}),(0,w.jsx)(`span`,{className:`menu__logo-sub`,children:`TD`})]}),(0,w.jsx)(`p`,{className:`menu__tagline`,children:`Башен тут не покупают. Камни падают в лоток, два-три складываются в рецепт — и рецепт встаёт на поле башней.`})]}),(0,w.jsxs)(`section`,{className:`menu__maps`,"aria-label":`Выбор карты`,children:[(0,w.jsx)(`p`,{className:`label`,children:`Карта`}),(0,w.jsx)(`div`,{className:`menu__map-list`,children:Ye.map(e=>(0,w.jsxs)(`button`,{type:`button`,className:`mapcard ${e.id===n?`mapcard--active`:``}`.trim(),"aria-pressed":e.id===n,onClick:()=>r(e.id),children:[(0,w.jsx)(`span`,{className:`mapcard__name`,children:e.name}),(0,w.jsxs)(`span`,{className:`mapcard__meta mono`,children:[e.width,`×`,e.height,` · `,e.waves,` волн`]})]},e.id))}),(0,w.jsx)(`p`,{className:`menu__map-blurb`,children:i.blurb})]}),(0,w.jsxs)(`div`,{className:`menu__actions`,children:[(0,w.jsx)(T,{variant:`primary`,size:`lg`,block:!0,onClick:()=>{e.start(n,vc(),`solo`),t.go(`game`)},children:`Играть`}),(0,w.jsxs)(`div`,{className:`menu__row`,children:[(0,w.jsx)(T,{block:!0,onClick:()=>t.go(`multiplayer`),icon:`⇄`,children:`Вдвоём`}),(0,w.jsx)(T,{block:!0,onClick:()=>t.go(`codex`),icon:`✦`,children:`Как играть`})]}),(0,w.jsx)(T,{block:!0,variant:`ghost`,onClick:()=>t.go(`settings`),icon:`⚙`,children:`Настройки`})]}),(0,w.jsxs)(`footer`,{className:`menu__footer`,children:[`Работает без сервера и без сети. Игра вдвоём — напрямую между устройствами.`,(0,w.jsxs)(`span`,{className:`menu__legal`,children:[(0,w.jsx)(`span`,{className:`menu__copy`,children:hc}),(0,w.jsx)(`button`,{type:`button`,className:`menu__legal-link`,"data-testid":`menu-legal`,onClick:()=>t.go(`legal`),children:`Права на игру`})]})]})]})})});async function bc(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}return!1}var xc=i(function(){let e=Jn(),t=Kn(),n=qn(),[r,i]=(0,s.useState)(`host`),[a,o]=(0,s.useState)(Ye[0].id),[c,l]=(0,s.useState)(`coop`),[u,d]=(0,s.useState)(``),[f,p]=(0,s.useState)(!1),[m,h]=(0,s.useState)(!1);(0,s.useEffect)(()=>{if(typeof location>`u`)return;let e=An.inviteFromUrl(location.href);e&&(i(`join`),d(e))},[]),(0,s.useEffect)(()=>{e.stage===`playing`&&t.go(`game`)},[e.stage,t]);let g=async e=>{h(!0),p(!1);try{await e()}catch{}finally{h(!1)}},_=async()=>{let t=typeof location>`u`?e.outboundCode:e.shareUrl(location.href);if(typeof navigator<`u`&&navigator.share)try{await navigator.share({title:`FosTD`,text:`Партия на двоих`,url:t});return}catch{}p(await bc(t))};return(0,w.jsxs)(we,{fullscreen:!0,title:`Игра вдвоём`,hint:`Прямое соединение между устройствами. Сервера нет — код передаётся любым мессенджером.`,action:(0,w.jsx)(T,{size:`sm`,"aria-label":`Закрыть`,onClick:()=>t.go(`menu`),children:`✕`}),children:[(0,w.jsxs)(`div`,{className:`mp__tabs`,role:`tablist`,children:[(0,w.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":r===`host`,className:`mp__tab ${r===`host`?`mp__tab--on`:``}`.trim(),onClick:()=>i(`host`),children:`Создать`}),(0,w.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":r===`join`,className:`mp__tab ${r===`join`?`mp__tab--on`:``}`.trim(),onClick:()=>i(`join`),children:`Присоединиться`})]}),r===`host`?(0,w.jsxs)(`div`,{className:`mp__section`,children:[(0,w.jsxs)(`div`,{className:`mp__field`,children:[(0,w.jsx)(`p`,{className:`label`,children:`Режим`}),(0,w.jsxs)(`div`,{className:`mp__choices`,children:[(0,w.jsxs)(`button`,{type:`button`,className:`mp__choice ${c===`coop`?`mp__choice--on`:``}`.trim(),"aria-pressed":c===`coop`,onClick:()=>l(`coop`),children:[(0,w.jsx)(`strong`,{children:`Вместе`}),(0,w.jsx)(`span`,{children:`Одно поле, общая казна, общий лоток камней.`})]}),(0,w.jsxs)(`button`,{type:`button`,className:`mp__choice ${c===`duel`?`mp__choice--on`:``}`.trim(),"aria-pressed":c===`duel`,onClick:()=>l(`duel`),children:[(0,w.jsx)(`strong`,{children:`Дуэль`}),(0,w.jsx)(`span`,{children:`Одинаковые волны у обоих. Кто продержится дольше.`})]})]})]}),(0,w.jsxs)(`div`,{className:`mp__field`,children:[(0,w.jsx)(`p`,{className:`label`,children:`Карта`}),(0,w.jsx)(`div`,{className:`mp__choices mp__choices--row`,children:Ye.map(e=>(0,w.jsx)(`button`,{type:`button`,className:`mp__pill ${e.id===a?`mp__pill--on`:``}`.trim(),"aria-pressed":e.id===a,onClick:()=>o(e.id),children:e.name},e.id))})]}),e.outboundCode&&e.role===`host`?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(`div`,{className:`mp__field`,children:[(0,w.jsx)(`p`,{className:`label`,children:`1. Отправьте приглашение`}),(0,w.jsx)(`textarea`,{className:`mp__code mono`,readOnly:!0,value:e.outboundCode,rows:3,"aria-label":`Код приглашения`}),(0,w.jsx)(`div`,{className:`mp__row`,children:(0,w.jsx)(T,{block:!0,onClick:_,icon:`↗`,children:f?`Скопировано`:`Поделиться`})})]}),(0,w.jsxs)(`div`,{className:`mp__field`,children:[(0,w.jsx)(`p`,{className:`label`,children:`2. Вставьте ответный код`}),(0,w.jsx)(`textarea`,{className:`mp__code mono`,value:u,rows:3,placeholder:`PL1a…`,"aria-label":`Ответный код`,onChange:e=>d(e.target.value)}),(0,w.jsx)(T,{variant:`primary`,block:!0,disabled:m||u.trim().length===0,onClick:()=>g(()=>e.completeHandshake(u.trim())),children:`Подключиться`})]})]}):(0,w.jsx)(T,{variant:`primary`,size:`lg`,block:!0,disabled:m,onClick:()=>g(()=>e.host(a,c)),children:m?`Готовим…`:`Создать приглашение`})]}):(0,w.jsxs)(`div`,{className:`mp__section`,children:[(0,w.jsxs)(`div`,{className:`mp__field`,children:[(0,w.jsx)(`p`,{className:`label`,children:`1. Вставьте приглашение`}),(0,w.jsx)(`textarea`,{className:`mp__code mono`,value:u,rows:3,placeholder:`PL1o…`,"aria-label":`Код приглашения`,onChange:e=>d(e.target.value)}),(0,w.jsx)(T,{variant:`primary`,block:!0,disabled:m||u.trim().length===0,onClick:()=>g(()=>e.join(u.trim())),children:m?`Готовим…`:`Принять`})]}),e.outboundCode&&e.role===`guest`?(0,w.jsxs)(`div`,{className:`mp__field`,children:[(0,w.jsx)(`p`,{className:`label`,children:`2. Отправьте ответ обратно`}),(0,w.jsx)(`textarea`,{className:`mp__code mono`,readOnly:!0,value:e.outboundCode,rows:3,"aria-label":`Ответный код`}),(0,w.jsx)(T,{block:!0,onClick:_,icon:`↗`,children:f?`Скопировано`:`Поделиться`})]}):null]}),(0,w.jsxs)(`div`,{className:`mp__status`,children:[(0,w.jsx)(`span`,{className:`mp__dot mp__dot--${e.peerStatus}`,"aria-hidden":`true`}),(0,w.jsx)(`span`,{children:Sc(e.stage,e.peerStatus,e.error)})]}),(0,w.jsxs)(`label`,{className:`mp__toggle`,children:[(0,w.jsx)(`input`,{type:`checkbox`,checked:!n.useStun,onChange:()=>n.toggleStun()}),(0,w.jsxs)(`span`,{children:[`Только локальная сеть`,(0,w.jsx)(`small`,{children:`Без публичных STUN-серверов. Работает, когда оба устройства в одном Wi-Fi.`})]})]})]})});function Sc(e,t,n){if(n)return n;switch(e){case`invite-ready`:return`Приглашение готово — ждём ответный код.`;case`answer-ready`:return`Ответ готов — отправьте его создателю партии.`;case`connecting`:return t===`connected`?`Синхронизируемся…`:`Устанавливаем соединение…`;case`playing`:return`Подключено.`;case`error`:return`Не удалось подключиться.`;default:return`Готово к подключению.`}}function Cc(){return typeof crypto<`u`&&typeof crypto.getRandomValues==`function`?crypto.getRandomValues(new Uint32Array(1))[0]>>>0:(Date.now()&4294967295)>>>0}var wc=i(function(){let e=Gn(),t=Kn(),n=Wn();if(!t.resultsOpen)return null;let r=e.hud.status===`won`,i=n.personalBest(3);return(0,w.jsx)(`div`,{className:`results`,role:`dialog`,"aria-modal":`true`,"aria-label":r?`Победа`:`Поражение`,children:(0,w.jsxs)(`div`,{className:`results__card surface`,children:[(0,w.jsx)(`p`,{className:`results__verdict ${r?`results__verdict--win`:`results__verdict--loss`}`,children:r?`Решётка выстояла`:`Ядро погасло`}),(0,w.jsx)(`p`,{className:`results__sub`,children:r?`Все ${e.hud.totalWaves} волн отражены.`:`Вы держались до волны ${e.hud.wave}.`}),(0,w.jsxs)(`div`,{className:`results__stats`,children:[(0,w.jsx)(uc,{label:`Очки`,value:e.hud.score,tone:`gold`}),(0,w.jsx)(uc,{label:`Убито`,value:e.hud.kills}),(0,w.jsx)(uc,{label:`Прорвалось`,value:e.hud.leaked,tone:e.hud.leaked>0?`bad`:`good`})]}),i.length>0?(0,w.jsxs)(`section`,{className:`results__best`,children:[(0,w.jsx)(`p`,{className:`label`,children:`Лучшее на этой карте`}),(0,w.jsx)(`ol`,{className:`results__best-list`,children:i.map((e,t)=>(0,w.jsxs)(`li`,{className:`results__best-row`,children:[(0,w.jsx)(`span`,{className:`results__best-rank mono`,children:t+1}),(0,w.jsx)(`span`,{className:`results__best-score mono`,children:e.score}),(0,w.jsxs)(`span`,{className:`results__best-wave`,children:[`волна `,e.wave]})]},e.id))})]}):null,(0,w.jsxs)(`div`,{className:`results__actions`,children:[(0,w.jsx)(T,{variant:`primary`,block:!0,onClick:()=>{t.hideResults(),e.start(e.mapId,Cc(),`solo`)},children:`Ещё раз`}),(0,w.jsx)(T,{block:!0,onClick:()=>{t.hideResults(),t.go(`menu`)},children:`В меню`})]})]})})}),Tc=1.05,Ec=.818;function Dc(e){let t=e*(2.51*e+.03)/(e*(2.43*e+.59)+.14);return Math.max(0,Math.min(1,t))}function Oc(e,t=Tc){let n=e=>{let n=Dc(Math.max(0,e)*t);return Math.round(n**(1/2.2)*255)};return`rgb(${n(e[0])}, ${n(e[1])}, ${n(e[2])})`}function kc(e,t){let{sun:n,ambient:r}=e.ground,i=r+(1-r)*Ec;return[t[0]*n[0]*i,t[1]*n[1]*i,t[2]*n[2]*i]}function Ac(e){let{sky:t,ground:n}=e;return{skyTop:Oc(t.zenith),skyBottom:Oc([t.horizon[0]+t.glow[0]*.5,t.horizon[1]+t.glow[1]*.5,t.horizon[2]+t.glow[2]*.5]),grassTop:Oc(kc(e,n.grassHigh)),grassBottom:Oc(kc(e,n.grassLow)),road:Oc(kc(e,n.roadHigh)),kerb:Oc(kc(e,n.kerb)),accent:Oc(n.accent)}}var jc=[{id:`v1`,name:`v1`,tag:`Кристаллы`,hint:`Гранёные модели с контуром по рёбрам — как игра выглядела с самого начала. Легче для слабых телефонов.`},{id:`v2`,name:`v2`,tag:`Диорама`,hint:`Парящий остров, живые тени, трава, материалы и вылепленные модели башен и врагов.`}],Mc=[{id:`low`,name:`Низкое`,hint:`Без свечения и зерна. Для слабых телефонов.`},{id:`medium`,name:`Среднее`,hint:`Свечение есть, разрешение чуть ниже.`},{id:`high`,name:`Высокое`,hint:`Полное свечение, полное разрешение.`}];function Nc({id:e}){let t=Ac(Mn[e]);return(0,w.jsx)(`span`,{className:`themescene`,"aria-hidden":`true`,style:{background:`linear-gradient(${t.skyTop}, ${t.skyBottom})`},children:(0,w.jsxs)(`span`,{className:`themescene__ground`,style:{background:`linear-gradient(${t.grassTop}, ${t.grassBottom})`},children:[(0,w.jsx)(`span`,{className:`themescene__road`,style:{background:t.road,borderColor:t.kerb}}),(0,w.jsx)(`span`,{className:`themescene__gem`,style:{background:t.accent,boxShadow:`0 0 6px ${t.accent}`}})]})})}var Pc=i(function(){let e=qn(),t=Kn();return(0,w.jsxs)(we,{fullscreen:!0,title:`Настройки`,action:(0,w.jsx)(T,{size:`sm`,"aria-label":`Закрыть`,onClick:()=>t.go(`menu`),children:`✕`}),children:[(0,w.jsxs)(`section`,{className:`settings__group`,children:[(0,w.jsx)(`p`,{className:`label`,children:`Имя`}),(0,w.jsx)(`input`,{className:`settings__input`,type:`text`,value:e.playerName,maxLength:24,"aria-label":`Имя игрока`,onChange:t=>e.setPlayerName(t.target.value)})]}),(0,w.jsxs)(`section`,{className:`settings__group`,children:[(0,w.jsx)(`p`,{className:`label`,children:`Графика`}),(0,w.jsx)(`div`,{className:`settings__versions`,children:jc.map(t=>(0,w.jsxs)(`button`,{type:`button`,className:`settings__option settings__version settings__version--${t.id} ${e.graphics===t.id?`settings__option--on`:``}`.trim(),"aria-pressed":e.graphics===t.id,onClick:()=>e.setGraphics(t.id),children:[(0,w.jsx)(`span`,{className:`settings__version-badge`,"aria-hidden":`true`}),(0,w.jsxs)(`strong`,{children:[t.name,` · `,t.tag]}),(0,w.jsx)(`span`,{children:t.hint})]},t.id))})]}),(0,w.jsxs)(`section`,{className:`settings__group`,children:[(0,w.jsx)(`p`,{className:`label`,children:`Оформление`}),(0,w.jsx)(`div`,{className:`settings__themes`,children:Nn.map(t=>{let n=Mn[t];return(0,w.jsxs)(`button`,{type:`button`,className:`themecard ${e.theme===t?`themecard--on`:``}`.trim(),"aria-pressed":e.theme===t,onClick:()=>e.setTheme(t),children:[(0,w.jsx)(Nc,{id:t}),(0,w.jsx)(`strong`,{className:`themecard__name`,children:n.name}),(0,w.jsx)(`span`,{className:`themecard__hint`,children:n.blurb})]},t)})})]}),(0,w.jsxs)(`section`,{className:`settings__group`,children:[(0,w.jsx)(`p`,{className:`label`,children:`Качество графики`}),(0,w.jsx)(`div`,{className:`settings__options`,children:Mc.map(t=>(0,w.jsxs)(`button`,{type:`button`,className:`settings__option ${e.quality===t.id?`settings__option--on`:``}`.trim(),"aria-pressed":e.quality===t.id,onClick:()=>e.setQuality(t.id),children:[(0,w.jsx)(`strong`,{children:t.name}),(0,w.jsx)(`span`,{children:t.hint})]},t.id))})]}),(0,w.jsxs)(`section`,{className:`settings__group`,children:[(0,w.jsx)(`p`,{className:`label`,children:`Прочее`}),(0,w.jsx)(Fc,{checked:e.haptics,label:`Вибрация`,hint:`Короткий отклик при постройке и потере жизни.`,onChange:()=>e.toggleHaptics()}),(0,w.jsx)(Fc,{checked:e.useStun,label:`Публичные STUN-серверы`,hint:`Нужны, чтобы соединяться через интернет. Выключите — останется только локальная сеть.`,onChange:()=>e.toggleStun()}),(0,w.jsx)(Fc,{checked:e.shareScores,label:`Отправлять результаты`,hint:`Выключено по умолчанию. Игра полностью работает без всякого сервера.`,onChange:()=>e.toggleShareScores()})]}),(0,w.jsx)(T,{variant:`danger`,block:!0,onClick:()=>e.reset(),children:`Сбросить настройки`})]})});function Fc({checked:e,label:t,hint:n,onChange:r}){return(0,w.jsxs)(`label`,{className:`settings__toggle`,children:[(0,w.jsx)(`input`,{type:`checkbox`,checked:e,onChange:r}),(0,w.jsxs)(`span`,{children:[t,(0,w.jsx)(`small`,{children:n})]})]})}var Ic=i(function(){let e=Kn();return e.toasts.length===0?null:(0,w.jsx)(`div`,{className:`toasts`,role:`status`,"aria-live":`polite`,children:e.toasts.map(t=>(0,w.jsx)(`button`,{type:`button`,className:`toast toast--${t.tone}`,onClick:()=>e.dismiss(t.id),children:t.text},t.id))})}),Lc=i(function(){let e=Gn(),{hud:t}=e,n=e.pendingRecipe,r=e.selectedGemIds.length,i=e.combinations,a=e.readyGemIds,o=i[0],s=e.selectedShard,c=s?gt(s):null;return(0,w.jsxs)(`div`,{className:`tray`,children:[n?(0,w.jsxs)(`div`,{className:`tray__recipe ${t.canPlace?``:`tray__recipe--spent`}`.trim(),role:`status`,children:[(0,w.jsx)(`span`,{className:`tray__recipe-label`,children:se(n.recipe.id)?`Как есть`:`Собирается`}),(0,w.jsx)(`strong`,{className:`tray__recipe-name`,style:{color:zc(n.recipe.stats.color)},children:n.recipe.name}),n.surplus>0?(0,w.jsxs)(`span`,{className:`tray__recipe-bonus`,children:[`+`,n.surplus,` к силе`]}):null,(0,w.jsx)(`span`,{className:`tray__recipe-hint`,children:t.canPlace?s?`Тапните тот же осколок на поле`:`Тапните клетку на поле`:`Ход уже сделан — начните волну`})]}):r>0?(0,w.jsx)(`div`,{className:`tray__recipe tray__recipe--empty`,role:`status`,children:(0,w.jsx)(`span`,{className:`tray__recipe-hint`,children:r===1?`Выберите ещё камень`:`Из этих камней ничего не выходит`})}):t.canPlace?o?(0,w.jsxs)(`button`,{type:`button`,className:`tray__found`,onClick:()=>e.selectCombination(0),children:[(0,w.jsx)(`span`,{className:`tray__found-label`,children:`Сложилось`}),(0,w.jsx)(`strong`,{className:`tray__found-name`,style:{color:zc(o.recipe.stats.color)},children:o.recipe.name}),i.length>1?(0,w.jsxs)(`span`,{className:`tray__found-more`,children:[`и ещё `,i.length-1]}):null,(0,w.jsx)(`span`,{className:`tray__found-hint`,children:`Тапните, чтобы выбрать`})]}):null:(0,w.jsx)(`div`,{className:`tray__recipe tray__recipe--empty`,role:`status`,children:(0,w.jsx)(`span`,{className:`tray__recipe-hint`,children:`Ход сделан. Следующая постановка — со следующей волной`})}),(0,w.jsxs)(`div`,{className:`tray__actions`,children:[(0,w.jsx)(T,{variant:`primary`,size:`sm`,disabled:!e.canDiscard,meta:r>0?`◆${e.discardCost*r}`:void 0,onClick:()=>e.discardSelected(),icon:`✕`,title:`Выбросить выбранные камни — на их место придут новые`,children:`Сбросить`}),(0,w.jsxs)(T,{size:`sm`,disabled:!e.canRefine,meta:t.refinement>=5?void 0:`◆${t.refineCost}`,onClick:()=>e.refine(),icon:`✦`,title:`Повышает шанс выпадения камней высокого уровня`,children:[`Очистка `,t.refinement,`/`,5]})]}),s?(0,w.jsxs)(`button`,{type:`button`,className:`tray__shard`,onClick:()=>e.toggleShard(s.id),"aria-label":`Осколок с поля: ${y[c.kind].name}, уровень ${c.level}. Убрать из рецепта`,children:[(0,w.jsx)(`span`,{className:`tray__shard-label`,children:`С поля`}),(0,w.jsxs)(`span`,{className:`gem gem--on gem--static`,style:{"--gem":zc(y[c.kind].color)},children:[(0,w.jsx)(`span`,{className:`gem__glyph`,"aria-hidden":`true`,children:y[c.kind].glyph}),(0,w.jsx)(`span`,{className:`gem__level mono`,children:c.level})]}),(0,w.jsx)(`span`,{className:`tray__shard-hint`,children:`Башня встанет на его клетку`})]}):null,(0,w.jsx)(`ul`,{className:`tray__slots`,"aria-label":`Камни в лотке`,children:Array.from({length:5},(n,r)=>{let i=t.tray[r];return i?(0,w.jsx)(`li`,{className:`gemslot`,children:(0,w.jsx)(Rc,{gem:i,selected:e.selectedGemIds.includes(i.id),ready:a.has(i.id),onClick:()=>e.toggleGem(i.id)})},i.id):(0,w.jsx)(`li`,{className:`gemslot gemslot--empty`,"aria-hidden":`true`},`empty-${r}`)})})]})});function Rc({gem:e,selected:t,ready:n,onClick:r}){let i=y[e.kind];return(0,w.jsxs)(`button`,{type:`button`,className:[`gem`,t?`gem--on`:``,n&&!t?`gem--ready`:``].filter(Boolean).join(` `),style:{"--gem":zc(i.color)},"aria-pressed":t,"aria-label":`${i.name}, уровень ${e.level}. ${i.element}: ${i.trait}${n?`. Входит в готовую комбинацию`:``}`,onClick:r,children:[(0,w.jsx)(`span`,{className:`gem__glyph`,"aria-hidden":`true`,children:i.glyph}),(0,w.jsx)(`span`,{className:`gem__level mono`,children:e.level})]})}function zc(e){let t=e=>Math.round(Math.max(0,Math.min(1,e))*255);return`rgb(${t(e[0])}, ${t(e[1])}, ${t(e[2])})`}function Bc(e){let t=e=>Math.round(Math.max(0,Math.min(1,e))*255);return`rgb(${t(e[0])}, ${t(e[1])}, ${t(e[2])})`}var Vc=i(function(){let e=Gn(),t=e.selectedTower;if(!t)return null;let{recipe:n}=t,r=t.level>=t.maxLevel;return(0,w.jsxs)(`aside`,{className:`sheet surface`,role:`dialog`,"aria-label":`Башня ${n.name}`,children:[(0,w.jsxs)(`header`,{className:`sheet__head`,children:[(0,w.jsx)(`span`,{className:`sheet__gem`,style:{background:Bc(n.stats.color)},"aria-hidden":`true`}),(0,w.jsxs)(`div`,{className:`sheet__title`,children:[(0,w.jsx)(`h3`,{className:`sheet__name`,children:n.name}),(0,w.jsxs)(`p`,{className:`sheet__sub`,children:[t.damage,` урона · `,t.fireRate.toFixed(1),`/с · радиус `,t.range.toFixed(1)]})]}),(0,w.jsx)(`ol`,{className:`sheet__levels`,"aria-label":`Уровень ${t.level} из ${t.maxLevel}`,children:Array.from({length:t.maxLevel},(e,n)=>(0,w.jsx)(`li`,{className:`sheet__pip ${n<t.level?`sheet__pip--on`:``}`.trim()},n))}),(0,w.jsx)(T,{size:`sm`,variant:`ghost`,"aria-label":`Закрыть`,onClick:()=>e.select(null),children:`✕`})]}),(0,w.jsx)(`p`,{className:`sheet__blurb`,children:n.blurb}),r?(0,w.jsx)(`p`,{className:`sheet__upgrade sheet__upgrade--max`,children:`Максимальный уровень.`}):(0,w.jsxs)(`div`,{className:`sheet__upgrade ${t.canUpgradeNow?`sheet__upgrade--ready`:``}`.trim(),children:[(0,w.jsxs)(`span`,{className:`sheet__upgrade-label`,children:[t.canUpgradeNow?`Тапните башню — станет `:`Соберите ещё раз для уровня `,t.level+1]}),(0,w.jsx)(`span`,{className:`sheet__upgrade-formula`,children:n.ingredients.map((e,t)=>{let n=y[e.kind];return(0,w.jsxs)(`span`,{className:`sheet__ing`,children:[(0,w.jsx)(`span`,{className:`sheet__ing-gem`,style:{background:Bc(n.color)},"aria-hidden":`true`,children:n.glyph}),(0,w.jsxs)(`span`,{className:`mono`,children:[e.level,`+`]})]},`${e.kind}-${t}`)})})]}),(0,w.jsx)(T,{variant:`danger`,block:!0,meta:`◆${t.sellValue}`,onClick:()=>e.sellSelectedTower(),children:`Снести`})]})});function Hc(e){let t=e=>Math.round(Math.max(0,Math.min(1,e))*255);return`rgb(${t(e[0])}, ${t(e[1])}, ${t(e[2])})`}var Uc=i(function(){let e=Gn(),{hud:t}=e,n=e.nextWavePreview,r=Math.min(t.wave+1,t.totalWaves),i=t.status===`wave`;return t.wave>=t.totalWaves&&t.status!==`wave`?null:(0,w.jsxs)(`div`,{className:`wavectl`,children:[(0,w.jsxs)(`ul`,{className:`wavectl__preview`,"aria-label":`Состав волны ${r}`,children:[n.map(({kind:e,count:t})=>{let n=l[e];return(0,w.jsxs)(`li`,{className:`wavechip`,title:`${n.name}: ${n.hint}`,children:[(0,w.jsx)(`span`,{className:`wavechip__dot`,style:{background:Hc(n.color)},"aria-hidden":`true`}),(0,w.jsx)(`span`,{className:`wavechip__name`,children:n.name}),(0,w.jsxs)(`span`,{className:`wavechip__count mono`,children:[`×`,t]})]},e)}),ct(r)?(0,w.jsx)(`li`,{className:`wavechip wavechip--boss`,children:`Босс`}):null]}),(0,w.jsx)(T,{variant:`primary`,size:`lg`,className:`wavectl__go`,onClick:()=>e.startWave(),disabled:t.wave>=t.totalWaves,children:i?`Позвать волну ${r} раньше`:`Волна ${r}`})]})}),Wc=i(function(){let e=Kn(),t=Gn(),n=qn();(0,s.useEffect)(()=>{typeof document<`u`&&(document.documentElement.dataset.theme=n.theme)},[n.theme]),(0,s.useEffect)(()=>{typeof location<`u`&&An.inviteFromUrl(location.href)&&e.go(`multiplayer`)},[e]);let r=e.screen===`game`&&t.running;return(0,w.jsxs)(`div`,{className:`app`,children:[t.running?(0,w.jsx)(lc,{}):null,r?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(pc,{}),(0,w.jsx)(Vc,{}),(0,w.jsxs)(`div`,{className:`bottombar`,children:[(0,w.jsx)(Uc,{}),(0,w.jsx)(Lc,{})]}),(0,w.jsx)(wc,{})]}):null,e.screen===`menu`?(0,w.jsx)(yc,{}):null,e.screen===`multiplayer`?(0,w.jsx)(xc,{}):null,e.screen===`settings`?(0,w.jsx)(Pc,{}):null,e.screen===`codex`?(0,w.jsx)(Zn,{}):null,e.screen===`legal`?(0,w.jsx)(_c,{}):null,(0,w.jsx)(Ic,{})]})}),Gc=document.getElementById(`root`);if(!Gc)throw Error(`#root не найден`);var Kc=new Vn;(0,c.createRoot)(Gc).render((0,w.jsx)(s.StrictMode,{children:(0,w.jsx)(Un,{value:Kc,children:(0,w.jsx)(Wc,{})})}));