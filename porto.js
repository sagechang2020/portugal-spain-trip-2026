const places=[
{id:'campanha',n:'①',day:'1004',lat:41.1488,lng:-8.5853,name:'坎帕尼扬站',local:'Porto Campanhã',time:'10/4 16:48',task:'AP133 抵达 Porto',icon:'🚄'},
{id:'hf',n:'②/⑥/⑧/⑰',day:'1004',lat:41.154591,lng:-8.630506,name:'HF Tuela Porto',local:'HF Tuela Porto',time:'10/4入住；赛后返回；10/5退房寄存/取行李',task:'住宿与行李锚点',icon:'🏨'},
{id:'mercado',n:'③',day:'1004',lat:41.15584,lng:-8.62916,name:'博姆苏塞苏市场',local:'Mercado Bom Sucesso',time:'10/4 17:35–18:05',task:'比赛前快速晚餐',icon:'🍽️'},
{id:'casa-metro',n:'④/⑱',day:'1004',lat:41.16094,lng:-8.62830,name:'音乐之家地铁站',local:'Casa da Música Metro',time:'10/4去球场；10/5去机场',task:'Metro 交通锚点',icon:'🚇'},
{id:'dragao',n:'⑤',day:'1004',lat:41.16176,lng:-8.58393,name:'巨龙球场',local:'Estádio do Dragão',time:'10/4约18:45抵达；19:45开球',task:'Portugal vs Norway · 已购票',icon:'⚽'},
{id:'petulia',n:'⑦',day:'1005',lat:41.15545,lng:-8.62750,name:'早餐',local:'Confeitaria Petúlia',time:'10/5 07:45–08:20',task:'Rua Júlio Dinis 775',icon:'☕'},
{id:'saobento',n:'⑨',day:'1005',lat:41.14556,lng:-8.61092,name:'圣本笃火车站',local:'São Bento Station',time:'10/5 09:00–09:25',task:'azulejo 大厅',icon:'🚉'},
{id:'se',n:'⑩',day:'1005',lat:41.14282,lng:-8.61137,name:'波尔图主教座堂',local:'Sé do Porto',time:'10/5 09:35–09:55',task:'外观 + 观景',icon:'⛪'},
{id:'bridge',n:'⑪',day:'1005',lat:41.13955,lng:-8.60945,name:'路易一世大桥上层',local:'Ponte de Dom Luís I · upper deck',time:'10/5约10:00',task:'核心步行段',icon:'🌉'},
{id:'morro',n:'⑫',day:'1005',lat:41.13744,lng:-8.60990,name:'莫罗花园',local:'Jardim do Morro',time:'10/5 10:10–10:25',task:'经典观景',icon:'🌄'},
{id:'guedes',n:'⑬',day:'1005',lat:41.13732,lng:-8.61431,name:'午餐',local:'Casa Guedes Gaia',time:'10/5 11:15–12:00',task:'主选；排队>15分钟换备选',icon:'🥪'},
{id:'beirario',n:'⑬B',day:'1005',lat:41.13687,lng:-8.61621,name:'午餐备用',local:'Mercado Beira-Rio',time:'10/5约11:15',task:'Casa Guedes 排队过长时切换',icon:'🍴'},
{id:'ribeira',n:'⑭',day:'1005',lat:41.14070,lng:-8.61320,name:'里贝拉',local:'Ribeira / Cais da Ribeira',time:'10/5 12:15–12:35',task:'河岸步行',icon:'🏘️'},
{id:'bolsa',n:'⑮',day:'1005',lat:41.14105,lng:-8.61546,name:'证券交易宫',local:'Palácio da Bolsa',time:'10/5约12:35',task:'可选：英语导览马上开始才进',icon:'🏛️'},
{id:'taylors',n:'⑯',day:'1005',lat:41.13394,lng:-8.61435,name:'泰来波特酒窖',local:"Taylor's Port Cellars",time:'10/5 13:30–15:15',task:'核心 · 普通话音频 + 3杯品鉴 + 最后买酒',icon:'🍷'},
{id:'opo',n:'⑲',day:'1005',lat:41.24212,lng:-8.67855,name:'波尔图机场',local:'Francisco Sá Carneiro Airport · OPO',time:'10/5约16:50–17:05抵达；20:15起飞',task:'飞 Madrid',icon:'✈️'}
];
const schedules={
'1004':{label:'10/4 周日',subtitle:'抵达 Porto + 葡萄牙 vs 挪威',items:[
{iso:'2026-10-04T14:00:00+01:00',time:'14:00',title:'Lisboa Santa Apolónia 出发',sub:'AP133 → Porto Campanhã 16:48',icon:'🚄',core:true},
{iso:'2026-10-04T16:48:00+01:00',time:'16:48',title:'Porto Campanhã',sub:'到站后直接去酒店，不折腾公交',place:'campanha',icon:'🚉',core:true},
{iso:'2026-10-04T16:55:00+01:00',time:'~16:55',title:'Campanhã → HF Tuela',sub:'Uber/Bolt；预计约17:20到',place:'hf',icon:'🚕'},
{iso:'2026-10-04T17:20:00+01:00',time:'17:20',title:'HF Tuela check-in + 放行李',sub:'只做快速入住，不在房间磨蹭',place:'hf',icon:'🏨',core:true},
{iso:'2026-10-04T17:35:00+01:00',time:'17:35',title:'Mercado Bom Sucesso 快速晚餐',sub:'到18:05；不排单一摊位长队',place:'mercado',icon:'🍽️'},
{iso:'2026-10-04T18:05:00+01:00',time:'18:05',title:'步行 → Casa da Música Metro',sub:'比赛日开始硬时间链',place:'casa-metro',icon:'🚶'},
{iso:'2026-10-04T18:20:00+01:00',time:'~18:20',title:'Metro → Estádio do Dragão',sub:'看站内屏幕，乘直达 Estádio do Dragão 的班次',place:'dragao',icon:'🚇',core:true},
{iso:'2026-10-04T18:45:00+01:00',time:'~18:45',title:'抵达 Estádio do Dragão',sub:'Porta 12 · Setor 14 · Fila 46 · Lugares 10–11',place:'dragao',icon:'🎟️',core:true},
{iso:'2026-10-04T19:45:00+01:00',time:'19:45',title:'Portugal vs Norway',sub:'官方票已购 ×2 · 比赛硬锚点',place:'dragao',icon:'⚽',core:true},
{time:'赛后',title:'Metro → Casa da Música → HF Tuela',sub:'散场优先地铁，避免打车拥堵',place:'hf',icon:'🚇'}]},
'1005':{label:'10/5 周一',subtitle:'Historic Porto + Gaia + Taylor’s + OPO',items:[
{iso:'2026-10-05T07:45:00+01:00',time:'07:45',title:'Confeitaria Petúlia 早餐',sub:'07:45–08:20；若不想出门也可改酒店附近简单吃',place:'petulia',icon:'☕'},
{iso:'2026-10-05T08:20:00+01:00',time:'08:20',title:'回 HF Tuela 退房 + 寄存行李',sub:'贵重物随身；空手游览',place:'hf',icon:'🧳',core:true},
{iso:'2026-10-05T08:40:00+01:00',time:'08:40',title:'HF Tuela → São Bento',sub:'Uber/Bolt，约20分钟内',place:'saobento',icon:'🚕'},
{iso:'2026-10-05T09:00:00+01:00',time:'09:00',title:'São Bento Station',sub:'09:00–09:25 · azulejo 大厅',place:'saobento',icon:'🚉',core:true},
{iso:'2026-10-05T09:25:00+01:00',time:'09:25',title:'步行上坡 → Sé do Porto',sub:'短坡，留10分钟',place:'se',icon:'🚶'},
{iso:'2026-10-05T09:35:00+01:00',time:'09:35',title:'Sé / Terreiro da Sé',sub:'外观 + 观景到09:55',place:'se',icon:'⛪'},
{iso:'2026-10-05T09:55:00+01:00',time:'09:55',title:'Ponte de Dom Luís I 上层',sub:'核心；步行去 Gaia',place:'bridge',icon:'🌉',core:true},
{iso:'2026-10-05T10:10:00+01:00',time:'10:10',title:'Jardim do Morro',sub:'10:10–10:25 · 观景',place:'morro',icon:'🌄'},
{iso:'2026-10-05T10:25:00+01:00',time:'10:25',title:'下坡 → Gaia 河岸',sub:'不依赖缆车；慢走到10:45',place:'guedes',icon:'🚶'},
{iso:'2026-10-05T10:45:00+01:00',time:'10:45',title:'Gaia riverfront',sub:'约25分钟自由走',place:'guedes',icon:'🌊'},
{iso:'2026-10-05T11:15:00+01:00',time:'11:15',title:'Casa Guedes Gaia 午餐',sub:'到12:00；排队>15分钟切 Mercado Beira-Rio',place:'guedes',icon:'🥪'},
{iso:'2026-10-05T12:00:00+01:00',time:'12:00',title:'Luís I lower deck 回 Porto',sub:'约15分钟',place:'ribeira',icon:'🌉'},
{iso:'2026-10-05T12:15:00+01:00',time:'12:15',title:'Ribeira',sub:'12:15–12:35 · 河岸轻走',place:'ribeira',icon:'🏘️'},
{iso:'2026-10-05T12:35:00+01:00',time:'~12:35',title:'Palácio da Bolsa 可选判断',sub:'只问“Next English tour?”；约12:50前能开始才进',place:'bolsa',icon:'🏛️',buffer:true},
{iso:'2026-10-05T13:05:00+01:00',time:'~13:05',title:'Ribeira/Bolsa → Taylor’s',sub:'Uber/Bolt；Gaia 有坡，保存体力',place:'taylors',icon:'🚕'},
{iso:'2026-10-05T13:30:00+01:00',time:'13:30',title:"Taylor's Port Cellars",sub:'到15:00 · €25/人 · 普通话音频 · 3杯品鉴',place:'taylors',icon:'🍷',core:true},
{iso:'2026-10-05T15:00:00+01:00',time:'15:00',title:"Taylor's Shop",sub:'15分钟；先问 Porto/travel/cellar-exclusive',place:'taylors',icon:'🛍️'},
{iso:'2026-10-05T15:15:00+01:00',time:'15:15',title:'Taylor’s → HF Tuela',sub:'Uber/Bolt；不要拎酒继续逛',place:'hf',icon:'🚕'},
{iso:'2026-10-05T15:40:00+01:00',time:'15:40',title:'取行李 + 把酒装托运箱',sub:'到15:55；每人10kg托运行李',place:'hf',icon:'🧳',core:true},
{iso:'2026-10-05T15:55:00+01:00',time:'15:55',title:'步行 → Casa da Música Metro',sub:'开始机场链条',place:'casa-metro',icon:'🚶'},
{iso:'2026-10-05T16:10:00+01:00',time:'~16:10',title:'E Line → Aeroporto',sub:'Z4 €2.30/人；等车>15分钟或落后则打车',place:'opo',icon:'🚇',core:true},
{iso:'2026-10-05T16:50:00+01:00',time:'~16:50',title:'抵达 Porto Airport OPO',sub:'留3小时以上机场缓冲',place:'opo',icon:'✈️',core:true},
{iso:'2026-10-05T20:15:00+01:00',time:'20:15',title:'OPO → Madrid MAD',sub:'预计22:30落地',place:'opo',icon:'✈️',core:true}]}};
const photos=[
{title:'HF Tuela Porto',src:'https://dcontent.inviacdn.net/shared/img/web-1200x1024/2020/2/13/d52/24417605-hf-tuela-porto.jpg',credit:'HF Tuela 实景 · network source'},
{title:'São Bento · azulejo hall',src:'https://upload.wikimedia.org/wikipedia/commons/d/d8/Sao_Bento_Railway_Station%2C_Oporto_%2849475533858%29.jpg',credit:'Wikimedia Commons'},
{title:'São Bento · exterior',src:'https://www.douro.tours/assets/images/_4272x2849_crop_center-center_100_none/6954/Porto-Train-Station-Facade-min.webp',credit:'Douro Tours'},
{title:'Ponte de Dom Luís I',src:'https://www.portugaldenorteasul.pt/uploads/20180307190600_ponte-dom-luis.jpg',credit:'Portugal de Norte a Sul'},
{title:'Ribeira',src:'https://images.unsplash.com/photo-1748792582527-2199e72ce205?auto=format&fit=crop&q=80&w=1600',credit:'Unsplash'},
{title:"Taylor's · barrel cellar",src:'https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dauto%2Cquality%3D60%2Cwidth%3D900%2Cheight%3D900%2Cdpr%3D2/tour_img/1a1b3bfafd1b9fb5.jpeg',credit:'Taylor’s cellar · network source'},
{title:"Taylor's · tasting room",src:'https://cdn.ventrata.com/image/upload/s--cr3Hat1e--/v1692005020/Taylor_s_Porto-Sala_de_Provas_toi5wm.jpg',credit:'Taylor’s tasting room · network source'},
{title:'Palácio da Bolsa · Salão Árabe',src:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Palacio_da_Bolsa_Arab_Room_%2842141799374%29.jpg/960px-Palacio_da_Bolsa_Arab_Room_%2842141799374%29.jpg',credit:'Wikimedia Commons'}];
const map=L.map('map',{zoomControl:true}).setView([41.15,-8.62],13);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap contributors'}).addTo(map);
const markers={};
function dayClass(d){return d==='1004'?'marker-1004':'marker-1005'}
function apple(p){return `https://maps.apple.com/?ll=${p.lat},${p.lng}&q=${encodeURIComponent(p.local)}`}
function google(p){return `https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`}
function uber(p){return `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[latitude]=${p.lat}&dropoff[longitude]=${p.lng}&dropoff[nickname]=${encodeURIComponent(p.local)}`}
places.forEach(p=>{const icon=L.divIcon({className:'leaflet-div-icon',html:`<div class="num-marker ${dayClass(p.day)}">${p.n.split('/')[0]}</div>`,iconSize:[30,30],iconAnchor:[15,15]});const ua=['campanha','hf','dragao','saobento','taylors','opo'].includes(p.id)?`<a href="${uber(p)}" target="_blank">叫 Uber</a>`:'';const popup=`<div class="popup-title">${p.icon} ${p.name}<br>${p.local}</div><div class="popup-sub">${p.time}<br>${p.task}</div><div class="popup-actions"><a href="${apple(p)}" target="_blank">Apple Maps</a><a href="${google(p)}" target="_blank">Google Maps</a>${ua}</div>`;markers[p.id]=L.marker([p.lat,p.lng],{icon}).addTo(map).bindPopup(popup,{maxWidth:290})});
const allBounds=L.latLngBounds(places.map(p=>[p.lat,p.lng]));map.fitBounds(allBounds.pad(.06));document.getElementById('fitMapBtn').onclick=()=>map.fitBounds(allBounds.pad(.06));
function renderTimeline(day='all'){const root=document.getElementById('timeline');root.innerHTML='';Object.entries(schedules).filter(([k])=>day==='all'||day===k).forEach(([k,d])=>{const block=document.createElement('div');block.className='day-block';block.innerHTML=`<div class="day-heading"><span>${d.label}</span><h3>${d.subtitle}</h3></div><div class="timeline-list"></div>`;const list=block.querySelector('.timeline-list');d.items.forEach(it=>{const el=document.createElement('div');el.className=`timeline-item${it.core?' is-core':''}${it.buffer?' is-buffer':''}`;el.innerHTML=`<div class="timeline-time">${it.time}</div><div class="timeline-main"><b>${it.title}</b><small>${it.sub}</small></div><div class="timeline-icon">${it.icon||'•'}</div>`;if(it.place&&markers[it.place])el.onclick=()=>{const p=places.find(x=>x.id===it.place);map.setView([p.lat,p.lng],15,{animate:true});markers[it.place].openPopup();document.getElementById('map').scrollIntoView({behavior:'smooth',block:'center'})};list.appendChild(el)});root.appendChild(block)});}
function renderPhotos(){document.getElementById('photoGrid').innerHTML=photos.map(p=>`<figure class="photo-card"><img src="${p.src}" loading="lazy" alt="${p.title}" onerror="this.closest('figure').style.display='none'"><figcaption>${p.title}<small style="display:block;font-weight:500;opacity:.8">${p.credit}</small></figcaption></figure>`).join('')}
function tripDay(){const now=new Date();const md=`${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}`;return ['1004','1005'].includes(md)&&now.getFullYear()===2026?md:null}
function nextItem(day){const now=Date.now();return schedules[day].items.find(x=>x.iso&&new Date(x.iso).getTime()>=now)||schedules[day].items[schedules[day].items.length-1]}
function renderNow(){const day=tripDay(),card=document.getElementById('nowCard');if(!day){card.innerHTML=`<div class="now-card__label">TRIP MODE</div><h2>Porto · 出发前模式</h2><p>比赛票已购。现场打开“现在”后，会自动突出当前日期的下一步任务。</p><div class="now-card__actions"><button class="action-btn action-btn--primary" onclick="showDay('1004')">看 10/4 比赛日</button><button class="action-btn" onclick="showDay('1005')">看 10/5 主游览日</button></div>`;return}const n=nextItem(day);card.innerHTML=`<div class="now-card__label">NEXT · ${schedules[day].label}</div><h2>${n.icon||''} ${n.time} · ${n.title}</h2><p>${n.sub}</p><div class="now-card__actions"><button class="action-btn action-btn--primary" onclick="showDay('${day}')">只看今天</button>${n.place?`<button class="action-btn" onclick="focusPlace('${n.place}')">地图定位</button>`:''}</div>`}
window.focusPlace=id=>{const p=places.find(x=>x.id===id);if(!p)return;map.setView([p.lat,p.lng],15);markers[id].openPopup();document.getElementById('map').scrollIntoView({behavior:'smooth',block:'center'})};
window.showDay=day=>{document.querySelectorAll('.day-tab').forEach(b=>b.classList.toggle('is-active',b.dataset.day===day));renderTimeline(day==='today'?(tripDay()||'all'):day);if(day!=='today'&&schedules[day]){const ps=places.filter(p=>p.day===day);if(ps.length)map.fitBounds(L.latLngBounds(ps.map(p=>[p.lat,p.lng])).pad(.1))}else map.fitBounds(allBounds.pad(.06))};document.querySelectorAll('.day-tab').forEach(b=>b.onclick=()=>showDay(b.dataset.day));
renderTimeline();renderPhotos();renderNow();window.addEventListener('online',()=>document.getElementById('offlineBadge').hidden=true);window.addEventListener('offline',()=>document.getElementById('offlineBadge').hidden=false);document.getElementById('offlineBadge').hidden=navigator.onLine;if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});