const places=[
{id:'mad-t1a',n:'①',day:'1005',lat:40.4637,lng:-3.5709,name:'马德里巴拉哈斯机场',local:'Adolfo Suárez Madrid–Barajas Airport',time:'10/5周一 22:30抵达',task:'FR5483 Porto → Madrid',icon:'✈️'},
{id:'vertice',n:'②',day:'1005',lat:40.33234,lng:-3.70278,name:'Vértice Roomspace Madrid',local:'Vértice Roomspace Madrid · Calle Laguna Dalga 4',time:'10/5约23:35–00:00入住；10/7约09:00退房',task:'两晚住宿 · 两人早餐已含',icon:'🏨'},
{id:'sancristobal',n:'③',day:'1006',lat:40.33163,lng:-3.69938,name:'圣克里斯托瓦尔工业站',local:'San Cristóbal Industrial',time:'10/6早；10/7早',task:'Cercanías C3 / current direct service 锚点',icon:'🚆'},
{id:'nuevos',n:'④',day:'1006',lat:40.4466,lng:-3.6923,name:'新部委站',local:'Nuevos Ministerios',time:'10/6约09:00',task:'C3 下车 → S10 replacement bus',icon:'🚌'},
{id:'bernabeu',n:'⑤',day:'1006',lat:40.4531,lng:-3.6883,name:'伯纳乌球场 + 官方商店',local:'Bernabéu · Tour Bernabéu · Official Store',time:'10/6约10:00–12:30',task:'核心：Tour + 20–30分钟商店',icon:'⚽'},
{id:'palace',n:'⑥',day:'1006',lat:40.41796,lng:-3.71431,name:'马德里王宫',local:'Palacio Real de Madrid',time:'10/6约14:30–16:00',task:'核心：进入内部',icon:'👑'},
{id:'espana',n:'⑦',day:'1006',lat:40.4230,lng:-3.7116,name:'西班牙广场',local:'Plaza de España',time:'10/6约17:15；10/7再次经过',task:'休息/过渡节点',icon:'⛲'},
{id:'debod',n:'⑧',day:'1006',lat:40.4240,lng:-3.7178,name:'德波神庙',local:'Templo de Debod',time:'10/6约18:30–20:00',task:'Good-to-have · sunset',icon:'🌅'},
{id:'locker',n:'⑨',day:'1007',lat:40.42075,lng:-3.71188,name:'Golden Locker Plaza España',local:'Golden Locker · Calle Fomento 37, Local 2',time:'10/7约09:55–10:20寄存；约19:00取',task:'central automated locker',icon:'🧳'},
{id:'granvia',n:'⑩',day:'1007',lat:40.4208,lng:-3.7065,name:'格兰大道',local:'Gran Vía',time:'10/7上午',task:'市中心慢走',icon:'🏙️'},
{id:'sol',n:'⑪',day:'1007',lat:40.4169,lng:-3.7035,name:'太阳门广场',local:'Puerta del Sol',time:'10/7上午',task:'Old Madrid 主线',icon:'☀️'},
{id:'mayor',n:'⑫',day:'1007',lat:40.4155,lng:-3.7074,name:'马约尔广场',local:'Plaza Mayor',time:'10/7中午',task:'Old Madrid 主线',icon:'🏛️'},
{id:'sanmiguel',n:'⑬',day:'1007',lat:40.4154,lng:-3.7090,name:'圣米格尔市场',local:'Mercado de San Miguel',time:'10/7中午',task:'短看/小食，不强制正餐',icon:'🍴'},
{id:'mad-t1d',n:'⑭',day:'1007',lat:40.4637,lng:-3.5709,name:'马德里巴拉哈斯机场',local:'Adolfo Suárez Madrid–Barajas Airport',time:'10/7目标20:00–20:30到；23:15起飞',task:'U22050 → Manchester · 申根出境',icon:'✈️'}
];

const schedules={
'1005':{label:'10/5 周一',subtitle:'Porto → Madrid · 深夜只去酒店',items:[
{iso:'2026-10-05T20:15:00+01:00',time:'20:15',title:'Porto OPO 起飞',sub:'Ryanair FR5483 → MAD 22:30',icon:'✈️',core:true},
{iso:'2026-10-05T22:30:00+02:00',time:'22:30',title:'Madrid-Barajas Airport 抵达',sub:'取托运行李后直接离开机场',place:'mad-t1a',icon:'🧳',core:true},
{iso:'2026-10-05T23:10:00+02:00',time:'~23:05–23:20',title:'MAD → Vértice Roomspace',sub:'Uber / official taxi direct；不要做深夜多次换乘',place:'vertice',icon:'🚕',core:true},
{iso:'2026-10-05T23:45:00+02:00',time:'~23:35–00:00',title:'Vértice check-in',sub:'24h reception；入住、洗漱、休息',place:'vertice',icon:'🏨'},
{time:'入住后',title:'直接休息',sub:'如果饿，用酒店 FoodSpace 24h；不夜游',place:'vertice',icon:'🌙'}]},
'1006':{label:'10/6 周二',subtitle:'Bernabéu + Palacio Real + Debod sunset',items:[
{iso:'2026-10-06T07:15:00+02:00',time:'07:15',title:'Vértice 早餐 buffet',sub:'07:15–08:00 · 已包含',place:'vertice',icon:'☕',core:true},
{iso:'2026-10-06T08:00:00+02:00',time:'08:00',title:'最终准备',sub:'08:10前完成，只带day items',place:'vertice',icon:'🎒'},
{iso:'2026-10-06T08:10:00+02:00',time:'~08:10',title:'步行 → San Cristóbal Industrial',sub:'酒店约200–300m；只需几分钟',place:'sancristobal',icon:'🚶'},
{iso:'2026-10-06T08:20:00+02:00',time:'~08:20',title:'等待 / 上车',sub:'不要假设固定15分钟班距；保留等车buffer',place:'sancristobal',icon:'🚆'},
{iso:'2026-10-06T08:45:00+02:00',time:'~08:45–09:05',title:'San Cristóbal Industrial → Nuevos Ministerios',sub:'Cercanías C3 / current direct service；出发前复核班次',place:'nuevos',icon:'🚆',core:true},
{iso:'2026-10-06T09:05:00+02:00',time:'~09:05',title:'Nuevos Ministerios → Bernabéu',sub:'L10施工；换 S10 replacement bus',place:'nuevos',icon:'🚌',core:true},
{iso:'2026-10-06T09:30:00+02:00',time:'~09:30',title:'抵达 Bernabéu / 找 Tour 入口',sub:'提前到，不把交通buffer吃完',place:'bernabeu',icon:'📍'},
{iso:'2026-10-06T10:00:00+02:00',time:'10:00',title:'Tour Bernabéu',sub:'目标到12:00 · 核心',place:'bernabeu',icon:'⚽',core:true},
{iso:'2026-10-06T12:00:00+02:00',time:'12:00',title:'Bernabéu Official Store',sub:'20–30分钟；不保证现场有CR7专属库存',place:'bernabeu',icon:'🛍️',core:true},
{iso:'2026-10-06T12:30:00+02:00',time:'12:30',title:'午饭',sub:'Bernabéu附近/去王宫路上；排队>15–20分钟就换',place:'bernabeu',icon:'🍽️'},
{iso:'2026-10-06T13:30:00+02:00',time:'~13:30',title:'向 Palacio Real 转移',sub:'公共交通或Uber，按现场最省摩擦方案',place:'palace',icon:'🚕'},
{iso:'2026-10-06T14:30:00+02:00',time:'14:30',title:'Palacio Real de Madrid',sub:'14:30–16:00 · 核心 · 进入内部',place:'palace',icon:'👑',core:true},
{iso:'2026-10-06T16:00:00+02:00',time:'16:00',title:'王宫周边 → Plaza de España',sub:'慢走/咖啡；不再加大景点',place:'espana',icon:'🚶',buffer:true},
{iso:'2026-10-06T17:15:00+02:00',time:'17:15',title:'Plaza de España / 休息',sub:'到18:20左右；为Debod保体力',place:'espana',icon:'⛲'},
{iso:'2026-10-06T18:30:00+02:00',time:'18:30',title:'Templo de Debod',sub:'外观+sunset为主；天气/体力差可删',place:'debod',icon:'🌅'},
{iso:'2026-10-06T20:00:00+02:00',time:'~20:00',title:'Plaza de España / Gran Vía 晚饭',sub:'灵活；不锁死单一餐厅',place:'espana',icon:'🍽️'},
{time:'饭后',title:'返回 Vértice',sub:'Central Madrid → Sol → C3 → San Cristóbal Industrial；等车>15–20分钟/太累则Uber',place:'vertice',icon:'🚆'}]},
'1007':{label:'10/7 周三',subtitle:'Locker + Old Madrid + 离境',items:[
{iso:'2026-10-07T07:30:00+02:00',time:'07:30',title:'Vértice 早餐 buffet',sub:'07:30–08:15 · 已包含',place:'vertice',icon:'☕',core:true},
{iso:'2026-10-07T08:15:00+02:00',time:'08:15',title:'打包 / 房间检查',sub:'到08:50；护照、钱包、银行卡、手机随身',place:'vertice',icon:'🧳'},
{iso:'2026-10-07T08:50:00+02:00',time:'~08:50–09:00',title:'Check-out',sub:'不把行李留酒店；一次性带进市中心',place:'vertice',icon:'🏨',core:true},
{iso:'2026-10-07T09:00:00+02:00',time:'~09:00',title:'步行带箱 → San Cristóbal Industrial',sub:'短距离；只做这一次拖箱步行',place:'sancristobal',icon:'🚶'},
{iso:'2026-10-07T09:10:00+02:00',time:'~09:10 onward',title:'San Cristóbal Industrial → Sol',sub:'C3 / current direct service；工作车程约18分钟，另算等车',place:'sol',icon:'🚆'},
{iso:'2026-10-07T09:45:00+02:00',time:'抵达Sol后',title:'Sol → Plaza de España',sub:'Metro L3，2 stops，减少拖箱步行',place:'locker',icon:'🚇'},
{iso:'2026-10-07T10:05:00+02:00',time:'目标09:55–10:20',title:'Golden Locker 寄存',sub:'存两只 cabin bags；全天空手游览',place:'locker',icon:'🧳',core:true},
{iso:'2026-10-07T10:30:00+02:00',time:'10:30',title:'Plaza de España',sub:'短停后开始Old Madrid单向线',place:'espana',icon:'⛲'},
{iso:'2026-10-07T10:50:00+02:00',time:'10:50',title:'Gran Vía',sub:'慢走/商店外观',place:'granvia',icon:'🏙️'},
{iso:'2026-10-07T11:30:00+02:00',time:'11:30',title:'Puerta del Sol',sub:'约30分钟',place:'sol',icon:'☀️'},
{iso:'2026-10-07T12:10:00+02:00',time:'12:10',title:'Plaza Mayor',sub:'约30分钟',place:'mayor',icon:'🏛️'},
{iso:'2026-10-07T12:40:00+02:00',time:'12:40',title:'Mercado de San Miguel',sub:'短看/小食；不强制昂贵正餐',place:'sanmiguel',icon:'🍴'},
{iso:'2026-10-07T13:15:00+02:00',time:'13:15',title:'附近午饭',sub:'普通餐厅/咖啡馆；之后自由逛街/咖啡/纪念品',place:'mayor',icon:'🍽️'},
{iso:'2026-10-07T17:30:00+02:00',time:'~17:30',title:'最后一餐 / 咖啡',sub:'轻松收尾；若不方便就机场吃',place:'granvia',icon:'☕',buffer:true},
{iso:'2026-10-07T18:45:00+02:00',time:'18:45',title:'开始回 Golden Locker',sub:'停止新增活动',place:'locker',icon:'🚶'},
{iso:'2026-10-07T19:00:00+02:00',time:'~19:00',title:'取行李',sub:'检查护照/登机牌/托运行李后立即叫车',place:'locker',icon:'🧳',core:true},
{iso:'2026-10-07T19:20:00+02:00',time:'~19:15–19:30',title:'Golden Locker → MAD',sub:'Uber / official taxi direct；不返回Vértice',place:'mad-t1d',icon:'🚕',core:true},
{iso:'2026-10-07T20:15:00+02:00',time:'目标20:00–20:30',title:'抵达 Madrid-Barajas Airport',sub:'托运行李 + 安检 + 申根出境；终端和bag-drop临近再核',place:'mad-t1d',icon:'🛂',core:true},
{iso:'2026-10-07T23:15:00+02:00',time:'23:15',title:'Madrid → Manchester',sub:'预计00:45次日到 MAN',place:'mad-t1d',icon:'✈️',core:true}
]}};

const photos=[
{title:'Bernabéu · renovated exterior',src:'https://arquitecturaviva.com/assets/uploads/obras/57072/av_imagen.webp',credit:'Arquitectura Viva · real exterior'},
{title:'Tour Bernabéu · trophy room',src:'https://www.realmadrid.com/sites/en/tour-bernabeu/media_1fb3952da10ab4b8f8c5f3dfffec91a45d10c99d9.jpeg?format=jpeg&optimize=medium&width=750',credit:'Real Madrid official'},
{title:'Bernabéu Official Store',src:'https://assets.realmadrid.com/is/image/realmadrid/noticia%20tienda?hei=675&wid=1200',credit:'Real Madrid official'},
{title:'Palacio Real de Madrid · exterior',src:'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2022/06/23/fotografia-palacio-real-de-madrid.jpeg',credit:'Real web photo'},
{title:'Palacio Real · grand staircase',src:'https://pbs.twimg.com/media/DzcTRYvWoAAWeB4.jpg',credit:'Patrimonio Nacional · official social image'},
{title:'Templo de Debod · sunset',src:'https://cdn.kimkim.com/files/a/images/e65b0d08223fc726e430afe3a3c906e42ef67cf6/big-d149a0b229f53878535123d1a06babc8.jpg',credit:'Kimkim · real photo'},
{title:'Puerta del Sol',src:'https://mediaportal.stage-entertainment.com/images/media/C4EEAA9E-47A8-4B66-9DFE509AA78F42FF?w=850',credit:'Real web photo'},
{title:'Plaza Mayor',src:'https://builder.livingtours.com/public/images/produtos/MADHIGRP0.jpg',credit:'Real web photo'},
{title:'Mercado de San Miguel',src:'https://media.timeout.com/images/105887825/image.webp',credit:'Time Out Madrid · real photo'}
];

const map=L.map('map',{zoomControl:true}).setView([40.405,-3.69],11);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap contributors'}).addTo(map);
const markers={};
function dayClass(day){return day==='1005'?'marker-1005':day==='1006'?'marker-1006':'marker-1007'}
function appleMap(p){return `https://maps.apple.com/?ll=${p.lat},${p.lng}&q=${encodeURIComponent(p.local)}`}
function googleMap(p){return `https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`}
function uber(p){return `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[latitude]=${p.lat}&dropoff[longitude]=${p.lng}&dropoff[nickname]=${encodeURIComponent(p.local)}`}
places.forEach(p=>{const icon=L.divIcon({className:'leaflet-div-icon',html:`<div class="num-marker ${dayClass(p.day)}">${p.n.split('/')[0]}</div>`,iconSize:[30,30],iconAnchor:[15,15]});const showUber=['mad-t1a','vertice','bernabeu','palace','locker','mad-t1d'].includes(p.id);const popup=`<div class="popup-title">${p.icon} ${p.name}<br>${p.local}</div><div class="popup-sub">${p.time}<br>${p.task}</div><div class="popup-actions"><a href="${appleMap(p)}" target="_blank">Apple Maps</a><a href="${googleMap(p)}" target="_blank">Google Maps</a>${showUber?`<a href="${uber(p)}" target="_blank">叫 Uber</a>`:''}</div>`;markers[p.id]=L.marker([p.lat,p.lng],{icon}).addTo(map).bindPopup(popup,{maxWidth:290})});
const allBounds=L.latLngBounds(places.map(p=>[p.lat,p.lng]));map.fitBounds(allBounds.pad(.08));document.getElementById('fitMapBtn').addEventListener('click',()=>map.fitBounds(allBounds.pad(.08)));
function focusPlace(id){const p=places.find(x=>x.id===id);if(!p||!markers[id])return;map.setView([p.lat,p.lng],15,{animate:true});markers[id].openPopup();document.getElementById('map').scrollIntoView({behavior:'smooth',block:'center'})}
function renderTimeline(day='all'){const root=document.getElementById('timeline');root.innerHTML='';const keys=day==='all'?['1005','1006','1007']:[day];keys.forEach(k=>{const s=schedules[k];if(!s)return;const block=document.createElement('div');block.className='day-block';block.innerHTML=`<div class="day-heading"><h3>${s.label}</h3><span>${s.subtitle}</span></div><div class="timeline-list"></div>`;const list=block.querySelector('.timeline-list');s.items.forEach(it=>{const el=document.createElement('div');el.className=`timeline-item${it.core?' is-core':''}${it.buffer?' is-buffer':''}`;el.innerHTML=`<div class="timeline-time">${it.time}</div><div class="timeline-main"><b>${it.title}</b><small>${it.sub||''}</small></div><div class="timeline-icon">${it.icon||'•'}</div>`;if(it.place)el.addEventListener('click',()=>focusPlace(it.place));list.appendChild(el)});root.appendChild(block)})}
function renderPhotos(){const root=document.getElementById('photoGrid');photos.forEach(ph=>{const fig=document.createElement('figure');fig.className='photo-card';fig.innerHTML=`<img loading="lazy" referrerpolicy="no-referrer" src="${ph.src}" alt="${ph.title}" onerror="this.closest('figure').classList.add('photo-error');this.style.display='none'"><figcaption>${ph.title}<small>${ph.credit}</small></figcaption>`;root.appendChild(fig)})}renderPhotos();
function currentMadridNow(){return new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/Madrid'}))}
function isoLocalParts(d){return {m:d.getMonth()+1,day:d.getDate(),h:d.getHours(),min:d.getMinutes()}}
function pickCurrentDay(d){const p=isoLocalParts(d);if(p.m===10&&p.day===5)return'1005';if(p.m===10&&p.day===6)return'1006';if(p.m===10&&p.day===7)return'1007';return null}
function nextItemFor(day,d){const items=schedules[day].items.filter(x=>x.iso);const now=d.getTime();for(const it of items){const t=new Date(it.iso).getTime();if(t>=now-10*60*1000)return it}return null}
function renderNow(){const box=document.getElementById('nowCard');const now=currentMadridNow();const day=pickCurrentDay(now);if(!day){box.innerHTML=`<div class="now-card__label">TRIP MODE</div><h2>Madrid · 10/5–10/7</h2><p>住宿基线已更新为 Vértice Roomspace Madrid。旅行当天这里会自动突出“下一步做什么”。</p><div class="now-card__actions"><button class="action-btn action-btn--primary" data-jump="1006">查看核心日 10/6</button><button class="action-btn" data-jump="1007">查看离境日 10/7</button></div>`}else{const it=nextItemFor(day,now);if(it){box.innerHTML=`<div class="now-card__label">NEXT · ${schedules[day].label}</div><h2>${it.icon||'➡️'} ${it.time} · ${it.title}</h2><p>${it.sub||''}</p><div class="now-card__actions">${it.place?`<button class="action-btn action-btn--primary" id="nextMapBtn">地图定位</button>`:''}<button class="action-btn" data-jump="${day}">打开今天完整时间轴</button></div>`;if(it.place)box.querySelector('#nextMapBtn').onclick=()=>focusPlace(it.place)}else{box.innerHTML=`<div class="now-card__label">${schedules[day].label}</div><h2>今天的计划已接近完成</h2><p>检查明天 / 离境链条，不临时新增高风险项目。</p>`}}box.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>activateDay(b.dataset.jump))}
function activateDay(day){document.querySelectorAll('.day-tab').forEach(b=>b.classList.toggle('is-active',b.dataset.day===day));if(day==='today'){renderTimeline('all');renderNow();map.fitBounds(allBounds.pad(.08));return}renderTimeline(day);const pts=places.filter(p=>p.day===day||(day==='1007'&&['vertice','sancristobal'].includes(p.id)));if(pts.length)map.fitBounds(L.latLngBounds(pts.map(p=>[p.lat,p.lng])).pad(.12));document.getElementById('timelineSection').scrollIntoView({behavior:'smooth',block:'start'})}
document.querySelectorAll('.day-tab').forEach(b=>b.addEventListener('click',()=>activateDay(b.dataset.day)));renderTimeline('all');renderNow();window.addEventListener('online',()=>document.getElementById('offlineBadge').hidden=true);window.addEventListener('offline',()=>document.getElementById('offlineBadge').hidden=false);document.getElementById('offlineBadge').hidden=navigator.onLine;if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});