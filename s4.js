const places=[
{id:'mad-t1a',n:'①/⑯',day:'1005',lat:40.4637,lng:-3.5709,name:'马德里巴拉哈斯机场',local:'Adolfo Suárez Madrid–Barajas Airport',time:'10/5周一22:30抵达；10/7周三目标19:30–19:45返回',task:'FR5483抵达 / U22050申根离境',icon:'✈️'},
{id:'vertice',n:'②',day:'1005',lat:40.33234,lng:-3.70278,name:'Vértice Roomspace Madrid',local:'Vértice Roomspace Madrid · Calle Laguna Dalga 4',time:'10/5约23:35–00:00入住；10/7约09:00退房',task:'两晚住宿 · 两人早餐已含',icon:'🏨'},
{id:'sancristobal',n:'③',day:'1006',lat:40.33163,lng:-3.69938,name:'圣克里斯托瓦尔工业站',local:'San Cristóbal Industrial',time:'10/6早；10/7早',task:'Cercanías C3 直达交通节点',icon:'🚆'},
{id:'nuevos',n:'④',day:'1006',lat:40.4466,lng:-3.6923,name:'新部委站',local:'Nuevos Ministerios',time:'10/6约09:05',task:'C3下车 → S10替代公交',icon:'🚌'},
{id:'bernabeu',n:'⑤',day:'1006',lat:40.4531,lng:-3.6883,name:'伯纳乌球场 + 官方商店',local:'Santiago Bernabéu · Tour Bernabéu · Official Store',time:'10/6 10:00–12:30',task:'重点：球场参观 + 官方商店',icon:'⚽'},
{id:'palace',n:'⑥',day:'1006',lat:40.41796,lng:-3.71431,name:'马德里王宫',local:'Palacio Real de Madrid',time:'10/6 14:00–15:15',task:'重点：入内参观',icon:'👑'},
{id:'espana',n:'⑦/⑪',day:'1006',lat:40.4230,lng:-3.7116,name:'西班牙广场',local:'Plaza de España',time:'10/6约15:30转Moncloa；10/7约10:10开始马德里老城路线',task:'10/6交通过渡 / 10/7步行起点',icon:'⛲'},
{id:'moncloa',n:'⑧',day:'1006',lat:40.43535,lng:-3.71909,name:'蒙克洛亚交通枢纽',local:'Intercambiador de Moncloa',time:'10/6约15:40–16:10',task:'找625 / 628 / 629，坐最先合适班次',icon:'🚌'},
{id:'lasrozas',n:'⑨',day:'1006',lat:40.51831,lng:-3.90118,name:'拉斯罗萨斯购物村 / Burberry',local:'Las Rozas Village · Calle Juan Ramón Jiménez 3',time:'10/6约16:30/16:45–20:20',task:'先逛 Burberry；购买后办理退税文件',icon:'🛍️'},
{id:'locker',n:'⑩',day:'1007',lat:40.42075,lng:-3.71188,name:'Golden Locker 行李柜（西班牙广场）',local:'Golden Locker · Calle Fomento 37, Local 2',time:'10/7约09:55–10:10存；18:25–18:40取',task:'市中心自助行李柜',icon:'🧳'},
{id:'granvia',n:'⑫',day:'1007',lat:40.4208,lng:-3.7065,name:'格兰大道',local:'Gran Vía',time:'10/7 10:30–11:10',task:'马德里老城步行路线',icon:'🏙️'},
{id:'sol',n:'⑬',day:'1007',lat:40.4169,lng:-3.7035,name:'太阳门广场',local:'Puerta del Sol',time:'10/7 11:10–11:35',task:'马德里老城路线 / C3换乘节点',icon:'☀️'},
{id:'mayor',n:'⑭',day:'1007',lat:40.4155,lng:-3.7074,name:'马约尔广场',local:'Plaza Mayor',time:'10/7 11:35–12:00',task:'马德里老城步行路线',icon:'🏛️'},
{id:'sanmiguel',n:'⑮',day:'1007',lat:40.4154,lng:-3.7090,name:'圣米格尔市场',local:'Mercado de San Miguel',time:'10/7 12:00–13:00',task:'小食 / 午饭选择',icon:'🍴'}
];

const schedules={
'1005':{label:'10/5 周一',subtitle:'波尔图 → 马德里 · 深夜直接去酒店',items:[
{iso:'2026-10-05T20:15:00+01:00',time:'20:15',title:'波尔图 OPO 起飞',sub:'Ryanair FR5483 → MAD 22:30',icon:'✈️',core:true},
{iso:'2026-10-05T22:30:00+02:00',time:'22:30',title:'马德里巴拉哈斯机场 Madrid-Barajas Airport',sub:'取托运行李后直接离开机场',place:'mad-t1a',icon:'🧳',core:true},
{iso:'2026-10-05T23:10:00+02:00',time:'~23:05–23:20',title:'MAD → Vértice Roomspace',sub:'Uber / 正规出租车直达酒店',place:'vertice',icon:'🚕',core:true},
{iso:'2026-10-05T23:45:00+02:00',time:'~23:35–00:00',title:'Vértice 办理入住',sub:'24h reception；入住、洗漱、休息',place:'vertice',icon:'🏨'},
{time:'入住后',title:'直接休息',sub:'如果饿，用酒店 FoodSpace 24h；不夜游',place:'vertice',icon:'🌙'}]},
'1006':{label:'10/6 周二',subtitle:'伯纳乌 + 马德里王宫 + Las Rozas Village / Burberry',items:[
{iso:'2026-10-06T07:15:00+02:00',time:'07:15',title:'Vértice 自助早餐',sub:'07:15–08:00 · 已包含',place:'vertice',icon:'☕',core:true},
{iso:'2026-10-06T08:00:00+02:00',time:'08:00',title:'最终准备',sub:'08:10前完成，只带当天随身物品',place:'vertice',icon:'🎒'},
{iso:'2026-10-06T08:10:00+02:00',time:'08:10',title:'步行 → San Cristóbal Industrial',sub:'酒店约200–300m',place:'sancristobal',icon:'🚶'},
{iso:'2026-10-06T08:20:00+02:00',time:'~08:20',title:'等待 / 上车',sub:'班距以当天为准；已预留等车时间',place:'sancristobal',icon:'🚆'},
{iso:'2026-10-06T08:45:00+02:00',time:'~08:45–09:05',title:'圣克里斯托瓦尔工业站 San Cristóbal Industrial → 新部委站 Nuevos Ministerios',sub:'Cercanías C3 直达',place:'nuevos',icon:'🚆',core:true},
{iso:'2026-10-06T09:05:00+02:00',time:'~09:05',title:'新部委站 Nuevos Ministerios → 伯纳乌 Bernabéu',sub:'L10施工；换 S10 替代公交',place:'nuevos',icon:'🚌',core:true},
{iso:'2026-10-06T09:25:00+02:00',time:'~09:25',title:'抵达伯纳乌 Bernabéu / 找入口',sub:'预留找入口和检票时间',place:'bernabeu',icon:'📍'},
{iso:'2026-10-06T10:00:00+02:00',time:'10:00',title:'伯纳乌球场参观 Tour Bernabéu',sub:'10:00–12:00 · 当天重点',place:'bernabeu',icon:'⚽',core:true},
{iso:'2026-10-06T12:00:00+02:00',time:'12:00',title:'伯纳乌官方商店 Official Store',sub:'约20–30分钟；晚点时可压到15–20分钟',place:'bernabeu',icon:'🛍️'},
{iso:'2026-10-06T12:30:00+02:00',time:'12:30',title:'午饭',sub:'12:30–13:05；实用快餐/正常餐，不排>15–20分钟',place:'bernabeu',icon:'🍽️'},
{iso:'2026-10-06T13:05:00+02:00',time:'~13:05',title:'伯纳乌 → 马德里王宫 Palacio Real de Madrid',sub:'按现场最省事路线；预留约40分钟',place:'palace',icon:'🚇'},
{iso:'2026-10-06T13:45:00+02:00',time:'13:45',title:'马德里王宫入场预留时间',sub:'提前到入口',place:'palace',icon:'🎫',core:true},
{iso:'2026-10-06T14:00:00+02:00',time:'14:00',title:'马德里王宫 Palacio Real de Madrid',sub:'14:00–15:15 · 重点 · 入内参观',place:'palace',icon:'👑',core:true},
{iso:'2026-10-06T15:15:00+02:00',time:'15:15',title:'马德里王宫 → 西班牙广场 Plaza de España',sub:'步行，约15分钟',place:'espana',icon:'🚶'},
{iso:'2026-10-06T15:30:00+02:00',time:'~15:30',title:'西班牙广场 Plaza de España → Moncloa',sub:'地铁 L3 直达',place:'moncloa',icon:'🚇',core:true},
{iso:'2026-10-06T15:40:00+02:00',time:'15:40–15:55',title:'蒙克洛亚 Moncloa 找公交站台',sub:'站台参考：629约3号 / 628约4号 / 625约5号；当天看现场指示',place:'moncloa',icon:'🧭'},
{iso:'2026-10-06T15:55:00+02:00',time:'~15:55–16:10',title:'625 / 628 / 629 → 拉斯罗萨斯购物村 Las Rozas Village',sub:'看 CRTM / Google Maps，坐最先合适的一班',place:'lasrozas',icon:'🚌',core:true},
{iso:'2026-10-06T16:35:00+02:00',time:'~16:30–16:45',title:'抵达拉斯罗萨斯购物村 Las Rozas Village',sub:'到场后先去 Burberry',place:'lasrozas',icon:'📍',core:true},
{iso:'2026-10-06T16:45:00+02:00',time:'~16:45–19:45',title:'Las Rozas Village 购物 · 先逛 Burberry',sub:'先看风衣、库存和尺码；购买时索取 Tax Free / DIVA / DER 退税文件',place:'lasrozas',icon:'🛍️',core:true},
{iso:'2026-10-06T19:45:00+02:00',time:'19:45–20:20',title:'购物村晚饭 / 最后购物',sub:'如果 Burberry 还没买完，先完成购买再吃饭',place:'lasrozas',icon:'🍽️'},
{iso:'2026-10-06T20:20:00+02:00',time:'~20:15–20:30',title:'Las Rozas Village → Moncloa',sub:'625 / 628 / 629，坐最先合适的一班',place:'moncloa',icon:'🚌',core:true},
{iso:'2026-10-06T21:00:00+02:00',time:'~20:50–21:10',title:'抵达 Moncloa → 太阳门 Sol',sub:'地铁 L3 直达',place:'sol',icon:'🚇'},
{iso:'2026-10-06T21:20:00+02:00',time:'到达 Sol 后',title:'太阳门 Sol → 圣克里斯托瓦尔工业站 San Cristóbal Industrial',sub:'Cercanías C3；当天看实时班次',place:'sancristobal',icon:'🚆'},
{iso:'2026-10-06T21:55:00+02:00',time:'~21:45–22:15',title:'步行回 Vértice',sub:'购物较多、太累或交通异常时可改 Uber',place:'vertice',icon:'🏨'}]},
'1007':{label:'10/7 周三',subtitle:'寄存行李 + 马德里老城 + 提前到机场 + DIVA退税',items:[
{iso:'2026-10-07T07:30:00+02:00',time:'07:30',title:'Vértice 自助早餐',sub:'07:30–08:15 · 已包含',place:'vertice',icon:'☕',core:true},
{iso:'2026-10-07T08:15:00+02:00',time:'08:15',title:'打包 / 房间检查',sub:'到08:50；退税文件和相关商品放在容易拿到的位置',place:'vertice',icon:'🧳'},
{iso:'2026-10-07T08:50:00+02:00',time:'08:50–09:00',title:'退房',sub:'不把行李留酒店；全部带进市中心',place:'vertice',icon:'🏨',core:true},
{iso:'2026-10-07T09:00:00+02:00',time:'09:00',title:'步行带箱 → San Cristóbal Industrial',sub:'短距离；只做一次拖箱步行',place:'sancristobal',icon:'🚶'},
{iso:'2026-10-07T09:10:00+02:00',time:'~09:10–09:40',title:'圣克里斯托瓦尔工业站 San Cristóbal Industrial → 太阳门 Sol',sub:'C3 直达；已预留等车时间',place:'sol',icon:'🚆'},
{iso:'2026-10-07T09:40:00+02:00',time:'~09:40–09:55',title:'太阳门 Sol → 西班牙广场 Plaza de España',sub:'Metro L3，减少拖箱步行',place:'locker',icon:'🚇'},
{iso:'2026-10-07T09:55:00+02:00',time:'~09:55–10:10',title:'Golden Locker 行李寄存',sub:'存两只登机箱；退税文件和可能需要展示的商品要随手可取',place:'locker',icon:'🧳',core:true},
{iso:'2026-10-07T10:10:00+02:00',time:'10:10',title:'西班牙广场 Plaza de España',sub:'到10:30；开始马德里老城步行路线',place:'espana',icon:'⛲'},
{iso:'2026-10-07T10:30:00+02:00',time:'10:30',title:'格兰大道 Gran Vía',sub:'到11:10；逛街 / 拍照',place:'granvia',icon:'🏙️'},
{iso:'2026-10-07T11:10:00+02:00',time:'11:10',title:'太阳门广场 Puerta del Sol',sub:'到11:35',place:'sol',icon:'☀️'},
{iso:'2026-10-07T11:35:00+02:00',time:'11:35',title:'马约尔广场 Plaza Mayor',sub:'到12:00',place:'mayor',icon:'🏛️'},
{iso:'2026-10-07T12:00:00+02:00',time:'12:00',title:'圣米格尔市场 Mercado de San Miguel + 午饭',sub:'12:00–13:00；市场小吃或附近午饭',place:'sanmiguel',icon:'🍴'},
{iso:'2026-10-07T13:00:00+02:00',time:'13:00–17:15',title:'马德里老城自由活动',sub:'逛街、咖啡、纪念品或休息',place:'granvia',icon:'🫧',buffer:true},
{iso:'2026-10-07T17:15:00+02:00',time:'17:15–18:05',title:'提前晚饭',sub:'市中心；给机场和退税留足时间',place:'granvia',icon:'🍽️'},
{iso:'2026-10-07T18:05:00+02:00',time:'18:05–18:25',title:'返回西班牙广场 / Golden Locker',sub:'步行或短交通',place:'locker',icon:'🚶'},
{iso:'2026-10-07T18:25:00+02:00',time:'18:25–18:40',title:'取行李',sub:'检查护照、登机牌、退税文件和可能需要展示的商品',place:'locker',icon:'🧳',core:true},
{iso:'2026-10-07T18:40:00+02:00',time:'18:40–18:50',title:'叫 Uber / 正规出租车',sub:'直接去 MAD，不返回酒店',place:'mad-t1a',icon:'📱',core:true},
{iso:'2026-10-07T18:50:00+02:00',time:'~18:50',title:'西班牙广场 → MAD机场',sub:'考虑晚高峰交通',place:'mad-t1a',icon:'🚕',core:true},
{iso:'2026-10-07T19:35:00+02:00',time:'目标19:30–19:45',title:'抵达马德里巴拉哈斯机场 Madrid-Barajas Airport',sub:'如有退税，先按当天航站楼指示找 DIVA / 海关，再办理正常离境手续',place:'mad-t1a',icon:'🛂',core:true},
{iso:'2026-10-07T23:15:00+02:00',time:'23:15',title:'马德里 → 曼彻斯特',sub:'预计00:45次日到 MAN',place:'mad-t1a',icon:'✈️',core:true}]}}
;

const photos=[
{title:'伯纳乌球场外观',src:'https://arquitecturaviva.com/assets/uploads/obras/57072/av_imagen.webp',credit:'Arquitectura Viva · real exterior'},
{title:'伯纳乌参观 · 奖杯展厅',src:'https://www.realmadrid.com/sites/en/tour-bernabeu/media_1fb3952da10ab4b8f8c5f3dfffec91a45d10c99d9.jpeg?format=jpeg&optimize=medium&width=750',credit:'Real Madrid official'},
{title:'伯纳乌官方商店 Official Store',src:'https://assets.realmadrid.com/is/image/realmadrid/noticia%20tienda?hei=675&wid=1200',credit:'Real Madrid official'},
{title:'马德里王宫 Palacio Real · 外观',src:'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2022/06/23/fotografia-palacio-real-de-madrid.jpeg',credit:'Real web photo'},
{title:'马德里王宫 · 主楼梯',src:'https://pbs.twimg.com/media/DzcTRYvWoAAWeB4.jpg',credit:'Patrimonio Nacional · official social image'},
{title:'拉斯罗萨斯购物村 Las Rozas Village',src:'https://visitmadrid-files.s3.eu-west-1.amazonaws.com/files/styles/scale_webp_600x400/public/2025-02/Las%20Rozas%20Village_HFV2931%C2%A9Hugo%20Fern%C3%A1ndez_Comunidad%20de%20Madrid_0.jpg?itok=m693U-1U',credit:'Comunidad de Madrid · real photo'},
{title:'Las Rozas Village · 入口',src:'https://vrdigitalprodcmsmedia.blob.core.windows.net/prod01-lzv/3505/img_0189.jpg',credit:'Las Rozas Village · real photo'},
{title:'Burberry · Las Rozas Village 店面',src:'https://www.nogarlicnoonions.com/images/article_images/2018-09/las-rozas-outlet-village-shopping-madrid-spain-nogarlicnoonions-262018-09-19-10-46-48.jpg',credit:'Real storefront photo'},
{title:'太阳门广场 Puerta del Sol',src:'https://mediaportal.stage-entertainment.com/images/media/C4EEAA9E-47A8-4B66-9DFE509AA78F42FF?w=850',credit:'Real web photo'},
{title:'马约尔广场 Plaza Mayor',src:'https://builder.livingtours.com/public/images/produtos/MADHIGRP0.jpg',credit:'Real web photo'},
{title:'圣米格尔市场 Mercado de San Miguel',src:'https://media.timeout.com/images/105887825/image.webp',credit:'Time Out Madrid · real photo'}
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
function renderNow(){const box=document.getElementById('nowCard');const now=currentMadridNow();const day=pickCurrentDay(now);if(!day){box.innerHTML=`<div class="now-card__label">行程准备</div><h2>马德里 Madrid · 10/5–10/7</h2><p>旅行当天这里会自动显示下一步要做什么。</p><div class="now-card__actions"><button class="action-btn action-btn--primary" data-jump="1006">查看核心日 10/6</button><button class="action-btn" data-jump="1007">查看离境日 10/7</button></div>`}else{const it=nextItemFor(day,now);if(it){box.innerHTML=`<div class="now-card__label">下一步 · ${schedules[day].label}</div><h2>${it.icon||'➡️'} ${it.time} · ${it.title}</h2><p>${it.sub||''}</p><div class="now-card__actions">${it.place?`<button class="action-btn action-btn--primary" id="nextMapBtn">地图定位</button>`:''}<button class="action-btn" data-jump="${day}">打开今天完整时间轴</button></div>`;if(it.place)box.querySelector('#nextMapBtn').onclick=()=>focusPlace(it.place)}else{box.innerHTML=`<div class="now-card__label">${schedules[day].label}</div><h2>今天的计划已接近完成</h2><p>查看明天安排或直接休息，不临时增加活动。</p>`}}box.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>activateDay(b.dataset.jump))}
function activateDay(day){document.querySelectorAll('.day-tab').forEach(b=>b.classList.toggle('is-active',b.dataset.day===day));if(day==='today'){renderTimeline('all');renderNow();map.fitBounds(allBounds.pad(.08));return}renderTimeline(day);const pts=places.filter(p=>p.day===day||(day==='1007'&&['vertice','sancristobal','espana','mad-t1a'].includes(p.id)));if(pts.length)map.fitBounds(L.latLngBounds(pts.map(p=>[p.lat,p.lng])).pad(.12));document.getElementById('timelineSection').scrollIntoView({behavior:'smooth',block:'start'})}
document.querySelectorAll('.day-tab').forEach(b=>b.addEventListener('click',()=>activateDay(b.dataset.day)));renderTimeline('all');renderNow();window.addEventListener('online',()=>document.getElementById('offlineBadge').hidden=true);window.addEventListener('offline',()=>document.getElementById('offlineBadge').hidden=false);document.getElementById('offlineBadge').hidden=navigator.onLine;if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});