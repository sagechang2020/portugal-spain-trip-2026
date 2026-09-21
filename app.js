const TRIP_YEAR=2026;
const places=[
{id:'airport',n:'①/⑮',day:'0930',lat:32.69417,lng:-16.77806,name:'马德拉C罗机场',local:'Madeira Cristiano Ronaldo Airport',time:'9/30 20:15抵达；10/2约19:25–19:40返回',task:'抵达 / U27628离岛',icon:'✈️'},
{id:'hotel-madeira',n:'②',day:'0930',lat:32.64804,lng:-16.91236,name:'马德拉酒店',local:'Hotel Madeira',time:'9/30约21:30入住；10/1约09:40退房寄存、14:10取行李',task:'第一晚住宿与10/1行李锚点',icon:'🏨'},
{id:'oldtown',n:'③',day:'0930',lat:32.64705,lng:-16.90015,name:'丰沙尔老城区·圣玛丽亚街',local:'Zona Velha / Rua de Santa Maria',time:'9/30约21:50',task:'轻量夜游',icon:'🌙'},
{id:'oregional',n:'④',day:'0930',lat:32.64781,lng:-16.90125,name:'晚餐',local:'Restaurante O Regional',time:'9/30约22:00',task:'主选；排队>15分钟换 Xarambinha',icon:'🍽️'},
{id:'cable',n:'⑤',day:'1001',lat:32.64717,lng:-16.90230,name:'丰沙尔—蒙特缆车',local:'Teleférico do Funchal',time:'10/1约10:10',task:'单程上山',icon:'🚠'},
{id:'monte',n:'⑥',day:'1001',lat:32.67507,lng:-16.90247,name:'蒙特皇宫热带花园',local:'Monte Palace Madeira',time:'10/1约10:40–12:40',task:'保护完整约2小时',icon:'🌿'},
{id:'cr7',n:'⑦/⑭',day:'1001',lat:32.644306,lng:-16.913861,name:'C罗酒店',local:'Pestana CR7 Funchal',time:'10/1约15:00入住；10/2 12:00退房寄存、18:05后取行李',task:'屋顶泳池；10/2寄存行李；晚饭可在 Inverse',icon:'🏊'},
{id:'cabo',n:'⑧',day:'1001',lat:32.65648,lng:-17.00445,name:'吉朗角玻璃观景台',local:'Cabo Girão Skywalk',time:'10/1约17:55–18:20',task:'天气差/落后直接删除',icon:'🌊'},
{id:'camara',n:'⑨',day:'1001',lat:32.64820,lng:-16.97649,name:'卡马拉-德洛布什海湾',local:'Câmara de Lobos',time:'10/1约18:40–19:05',task:'短海港/日落时段慢走',icon:'🌅'},
{id:'vila',n:'⑩',day:'1001',lat:32.64912,lng:-16.97472,name:'Vila do Peixe',local:'Restaurante Vila do Peixe',time:'10/1 19:30',task:'已确认预约 · 2人',icon:'🐟'},
{id:'quinta',n:'⑪',day:'1002',lat:32.66713,lng:-16.93816,name:'C罗童年社区',local:'Quinta Falcão · Centro Comunitário da Quinta Falcão',time:'10/2约13:20–13:50',task:'C罗童年社区、壁画和成长背景',icon:'⚽'},
{id:'pico',n:'⑫',day:'1002',lat:32.6677,lng:-16.9456,name:'皮库-杜斯巴塞洛斯观景台',local:'Miradouro do Pico dos Barcelos',time:'10/2约14:05–14:35',task:'俯瞰丰沙尔市区和海湾',icon:'🌄'},
{id:'museum',n:'⑬',day:'1002',lat:32.64412,lng:-16.91385,name:'C罗博物馆',local:'Museu CR7',time:'10/2约15:10–16:00',task:'住客权益不预设；普通购票可接受',icon:'🏆'}
];

const schedules={
'0930':{label:'9/30 周三',subtitle:'抵达丰沙尔 + 老城晚餐',items:[
{time:'16:15',title:'曼彻斯特 MAN 起飞',sub:'Jet2 LS851 → FNC 20:15',icon:'✈️'},
{time:'20:15',title:'马德拉C罗机场 Madeira Cristiano Ronaldo Airport',sub:'预留40–50分钟下机、行李、洗手间',place:'airport',icon:'🧳',core:true},
{time:'~21:00',title:'机场 → Hotel Madeira',sub:'Uber；晚间不折腾公交',place:'hotel-madeira',icon:'🚕'},
{time:'~21:30',title:'Hotel Madeira 入住',sub:'前台时间临近出发再确认',place:'hotel-madeira',icon:'🏨',core:true},
{time:'21:45',title:'走向 Zona Velha / Rua de Santa Maria',sub:'只做轻量夜游',place:'oldtown',icon:'🚶'},
{time:'22:00',title:'O Regional 晚餐',sub:'Xarambinha 备用；预计等待>15分钟就换',place:'oregional',icon:'🍽️',core:true},
{time:'饭后',title:'短走老城 → 酒店',sub:'航班晚点就删除散步',place:'oldtown',icon:'🌙'}]},
'1001':{label:'10/1 周四',subtitle:'蒙特皇宫 + CR7泳池 + 西海岸 + 19:30晚餐',items:[
{time:'08:30',title:'起床 / 洗漱',sub:'轻松开始',place:'hotel-madeira',icon:'🌤️'},
{time:'08:45',title:'Hotel Madeira 早餐',sub:'08:45–09:30 · 已包含',place:'hotel-madeira',icon:'☕'},
{time:'09:30',title:'最终检查 → 退房 + 寄存行李',sub:'约09:30–09:50；空手游览',place:'hotel-madeira',icon:'🧳'},
{time:'09:50',title:'步行 → 缆车下站',sub:'约20分钟',place:'cable',icon:'🚶'},
{time:'~10:10',title:'丰沙尔缆车 Teleférico do Funchal',sub:'约10:10–10:30',place:'cable',icon:'🚠',core:true},
{time:'~10:40',title:'蒙特皇宫热带花园 Monte Palace Madeira',sub:'约10:40–12:40 · 保护完整约2小时',place:'monte',icon:'🌿',core:true},
{time:'~12:40',title:'开始叫 Uber → 丰沙尔市中心',sub:'下山后直接回丰沙尔市中心',place:'monte',icon:'📱'},
{time:'13:10',title:'正常午饭',sub:'13:10–14:05；市中心方便餐厅，不排长队',icon:'🍽️'},
{time:'14:05',title:'回 Hotel Madeira 取行李',sub:'14:15前完成',place:'hotel-madeira',icon:'🧳'},
{time:'14:15',title:'Hotel Madeira → Pestana CR7',sub:'带行李用短程 Uber',place:'cr7',icon:'🚕'},
{time:'14:35',title:'CR7 大堂 / 办理入住',sub:'15:00起办理入住，预留等房时间',place:'cr7',icon:'🏨'},
{time:'15:00',title:'进房 / 换泳衣',sub:'15:00–15:20',place:'cr7',icon:'🩱'},
{time:'15:20',title:'屋顶平台拍照',sub:'15:20–15:40',place:'cr7',icon:'📷',core:true},
{time:'15:40',title:'无边泳池',sub:'15:40–16:30 · 约50分钟实际下水，不压缩',place:'cr7',icon:'🏊',core:true},
{time:'16:30',title:'最后拍照 + 洗澡更衣',sub:'16:30–17:20',place:'cr7',icon:'🚿'},
{time:'17:20',title:'开始叫 Uber → Cabo Girão',sub:'预留等车',place:'cabo',icon:'📱'},
{time:'~17:55',title:'吉朗角玻璃观景台 Cabo Girão',sub:'约17:55–18:20；天气/能见度差直接删',place:'cabo',icon:'🌊'},
{time:'~18:25',title:'Uber → Câmara de Lobos',sub:'收尾时提前安排下一辆车',place:'camara',icon:'🚕'},
{time:'~18:40',title:'卡马拉-德洛布什海湾 Câmara de Lobos',sub:'约18:40–19:05；只短走',place:'camara',icon:'🌅'},
{time:'~19:05',title:'步行上坡 → Vila do Peixe',sub:'目标19:20到餐厅',place:'vila',icon:'🚶'},
{time:'19:30',title:'Vila do Peixe 晚餐（已预约）',sub:'2人 · 10/1 19:30 · 保护该硬锚点',place:'vila',icon:'🐟',core:true},
{time:'饭后',title:'Uber → Pestana CR7',sub:'结束主行程日',place:'cr7',icon:'🚕'}]},
'1002':{label:'10/2 周五',subtitle:'休息 + C罗童年社区 + C罗博物馆 + 21:20飞里斯本',items:[
{time:'08:00',title:'Pestana CR7 自助早餐',sub:'08:00–08:40 · 已含两人早餐',place:'cr7',icon:'☕',core:true},
{time:'08:45',title:'房间休息',sub:'08:45–11:15 · 自由休息',place:'cr7',icon:'🫧',buffer:true},
{time:'11:15',title:'洗澡 / 最终打包 / 房间检查',sub:'到11:50；不要拖到最后十分钟',place:'cr7',icon:'🧳'},
{time:'11:50',title:'退房 + 酒店寄存行李',sub:'12:00前完成；约18:20回来取',place:'cr7',icon:'🏨',core:true},
{time:'12:05',title:'正常午饭',sub:'12:05–13:05；CR7酒店 / 海滨 / 丰沙尔市中心附近',place:'cr7',icon:'🍽️'},
{time:'~13:05',title:'开始叫 Uber → Quinta Falcão',sub:'前往 Santo António',place:'quinta',icon:'📱'},
{time:'~13:20',title:'Quinta Falcão · C罗童年社区',sub:'约13:20–13:50；社区、壁画和C罗成长背景',place:'quinta',icon:'⚽'},
{time:'~13:50',title:'短程 Uber → Pico dos Barcelos',sub:'不强行走山路',place:'pico',icon:'🚕'},
{time:'~14:05',title:'皮库-杜斯巴塞洛斯观景台 Miradouro do Pico dos Barcelos',sub:'约14:05–14:35 · 俯瞰丰沙尔市区和海湾',place:'pico',icon:'🌄'},
{time:'~14:35',title:'Uber → Praça CR7 / C罗博物馆',sub:'目标14:55–15:05返回',place:'museum',icon:'🚕'},
{time:'15:10',title:'C罗博物馆 Museu CR7',sub:'15:10–16:00；住客权益到前台确认，否则正常购票',place:'museum',icon:'🏆',core:true},
{time:'16:00',title:'Praça CR7 / 海滨自由活动',sub:'16:00–17:00 · 休息、咖啡、买纪念品',place:'cr7',icon:'🫧',buffer:true},
{time:'17:00',title:'提前晚饭',sub:'约17:00–18:05；默认 Inverse by CR7，允许就近替换',place:'cr7',icon:'🍔'},
{time:'18:05',title:'回前台取行李 / 洗手间 / 最后检查',sub:'18:05–18:25',place:'cr7',icon:'🧳'},
{time:'18:25',title:'最后缓冲',sub:'吸收晚饭服务稍慢；不要新增活动',place:'cr7',icon:'⏳',buffer:true},
{time:'~18:45',title:'开始叫 Uber / taxi → FNC',sub:'Uber等待过久就改出租车；最迟约19:00离开',place:'airport',icon:'📱',core:true},
{time:'~19:25',title:'抵达 FNC Airport',sub:'目标19:25–19:40到；预留充足时间',place:'airport',icon:'🛂',core:true},
{time:'21:20',title:'easyJet U27628 起飞',sub:'FNC → LIS 23:00 · 当晚固定航班',place:'airport',icon:'✈️',core:true},
{time:'23:00',title:'抵达里斯本 Lisbon',sub:'下一步只去 ibis Lisboa José Malhoa，不夜游',icon:'🌙'}]}}
;

const photos=[
{title:'丰沙尔老城区 Zona Velha',src:'https://www.visitmadeira.com/media/ds2jbgq0/zona-velha1-digitaltravelcouple.jpg?height=1080&rnd=133159449299630000&rxy=0.3832824084881226%2C0.6333186763238243&width=1920'},
{title:'丰沙尔缆车 Teleférico do Funchal',src:'https://madeiracablecar.com/media/5bdo1iox/madeira_cable_car_2024-45-2.jpg?height=1080&rnd=133843600889000000&width=1700'},
{title:'蒙特皇宫 Monte Palace Madeira',src:'https://visitmadeira.com/media/s4gfyfjk/madeira-monte-palace-jardim-014-madeira-monte-palace.jpg?height=1080&rnd=134135522042030000&width=1920'},
{title:'Pestana CR7 rooftop infinity pool',src:'https://www.pestana.com/content/dam/pestana/en_gb/destinations/portugal/madeira/pestana-cr7-funchal/gallery/overview/pestana-cr7-funchal-gallery-facilities-pool.jpg'},
{title:'吉朗角 Cabo Girão Skywalk',src:'https://visitmadeira.com/media/qh5nwhbj/cabo-gira-o3-ricardo-faria-paulino.jpg?height=1080&rnd=133316577671370000&width=1920'},
{title:'卡马拉-德洛布什 Câmara de Lobos',src:'https://visitmadeira.com/media/gpmicbu5/camera-de-lobos_drone-1_woodland-studio.jpg?height=1080&rnd=133282112293200000&width=1920'},
{title:'Quinta Falcão · Cristiano Ronaldo mural',src:'https://static-storage.dnoticias.pt/www-assets.dnoticias.pt/images/configuration/OR/8a421df0-55fa-47e9-a073-b0b14adafce6.JPEG'},
{title:'Pico dos Barcelos viewpoint',src:'https://upload.wikimedia.org/wikipedia/commons/d/df/Madeira_Pico_dos_Barcelos_2016_1.jpg'},
{title:'C罗博物馆 Museu CR7',src:'https://visitmadeira.com/media/40gp2w11/museu-cristianao-ronaldo1-francisco-correia.jpg?height=1080&rnd=133264795035770000&width=1920'}
];

const map=L.map('map',{zoomControl:true}).setView([32.66,-16.93],11);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap contributors'}).addTo(map);
const markers={};
function dayClass(day){return day==='0930'?'marker-0930':day==='1001'?'marker-1001':'marker-1002'}
function appleMap(p){return `https://maps.apple.com/?ll=${p.lat},${p.lng}&q=${encodeURIComponent(p.local)}`}
function googleMap(p){return `https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`}
function uber(p){return `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[latitude]=${p.lat}&dropoff[longitude]=${p.lng}&dropoff[nickname]=${encodeURIComponent(p.local)}`}
places.forEach(p=>{const icon=L.divIcon({className:'leaflet-div-icon',html:`<div class="num-marker ${dayClass(p.day)}">${p.n.split('/')[0]}</div>`,iconSize:[30,30],iconAnchor:[15,15]});const popup=`<div class="popup-title">${p.icon} ${p.name}<br>${p.local}</div><div class="popup-sub">${p.time}<br>${p.task}</div><div class="popup-actions"><a href="${appleMap(p)}" target="_blank">Apple Maps</a><a href="${googleMap(p)}" target="_blank">Google Maps</a>${['airport','quinta','cr7','cabo','camara','vila'].includes(p.id)?`<a href="${uber(p)}" target="_blank">叫 Uber</a>`:''}</div>`;markers[p.id]=L.marker([p.lat,p.lng],{icon}).addTo(map).bindPopup(popup,{maxWidth:280});});
const allBounds=L.latLngBounds(places.map(p=>[p.lat,p.lng]));map.fitBounds(allBounds.pad(.08));document.getElementById('fitMapBtn').addEventListener('click',()=>map.fitBounds(allBounds.pad(.08)));
function renderTimeline(day='all'){const root=document.getElementById('timeline');root.innerHTML='';const keys=day==='all'?['0930','1001','1002']:[day];keys.forEach(k=>{const s=schedules[k];const block=document.createElement('section');block.className='day-block';block.innerHTML=`<div class="day-heading"><h3>${s.label}</h3><span>${s.subtitle}</span></div><div class="timeline-list"></div>`;const list=block.querySelector('.timeline-list');s.items.forEach(it=>{const el=document.createElement('article');el.className=`timeline-item${it.core?' is-core':''}${it.buffer?' is-buffer':''}`;el.innerHTML=`<div class="timeline-time">${it.time}</div><div class="timeline-main"><b>${it.title}</b><small>${it.sub}</small></div><div class="timeline-icon">${it.icon}</div>`;if(it.place)el.addEventListener('click',()=>focusPlace(it.place));list.appendChild(el)});root.appendChild(block)})}
function focusPlace(id){const p=places.find(x=>x.id===id);if(!p)return;map.setView([p.lat,p.lng],15,{animate:true});markers[id].openPopup();document.querySelector('.map-section').scrollIntoView({behavior:'smooth',block:'start'});setTimeout(()=>map.invalidateSize(),350)}
function renderPhotos(){const root=document.getElementById('photoGrid');photos.forEach(ph=>{const f=document.createElement('figure');f.className='photo-card';f.innerHTML=`<img loading="lazy" referrerpolicy="no-referrer" src="${ph.src}" alt="${ph.title}" onerror="this.closest('figure').style.display='none'"><figcaption>${ph.title}</figcaption>`;root.appendChild(f)})}
function nowMadeira(){return new Date()}function dateKey(d){return String(d.getMonth()+1).padStart(2,'0')+String(d.getDate()).padStart(2,'0')}function minuteOfDay(d){return d.getHours()*60+d.getMinutes()}function parseTime(t){const m=t.match(/(\d{1,2}):(\d{2})/);return m?Number(m[1])*60+Number(m[2]):null}
function currentStatus(){const d=nowMadeira(),key=dateKey(d);if(!['0930','1001','1002'].includes(key)||d.getFullYear()!==TRIP_YEAR)return{mode:'pre',title:'出发前模式',sub:'行程尚未开始。可先查看地图、门票和逐日时间轴。',day:'all'};const items=schedules[key].items,now=minuteOfDay(d);let next=items.find(it=>{const t=parseTime(it.time);return t!==null&&t>=now});if(!next)next=items[items.length-1];return{mode:'live',title:`下一步 · ${next.time} ${next.title}`,sub:next.sub,day:key,place:next.place}}
function renderNow(){const s=currentStatus(),card=document.getElementById('nowCard'),p=s.place?places.find(x=>x.id===s.place):null;card.innerHTML=`<div class="now-card__label">${s.mode==='live'?'现场执行':'行程准备'}</div><h2>${s.title}</h2><p>${s.sub}</p><div class="now-card__actions"><button class="action-btn action-btn--primary" id="showDayBtn">${s.mode==='live'?'查看今天':'查看完整行程'}</button>${p?`<a class="action-btn" target="_blank" href="${appleMap(p)}">Apple Maps</a><a class="action-btn" target="_blank" href="${googleMap(p)}">Google Maps</a>`:''}</div>`;document.getElementById('showDayBtn').onclick=()=>{renderTimeline(s.day==='all'?'all':s.day);if(s.place)focusPlace(s.place);else document.getElementById('timelineSection').scrollIntoView({behavior:'smooth'})}}
function setTab(day){document.querySelectorAll('.day-tab').forEach(b=>b.classList.toggle('is-active',b.dataset.day===day));if(day==='today'){const s=currentStatus();renderTimeline(s.day==='all'?'all':s.day);renderNow();return}renderTimeline(day);const repeated=day==='1002'?['airport','cr7']:[];const ps=places.filter(p=>p.day===day||repeated.includes(p.id));if(ps.length){map.fitBounds(L.latLngBounds(ps.map(p=>[p.lat,p.lng])).pad(.22));setTimeout(()=>map.invalidateSize(),150)}document.getElementById('timelineSection').scrollIntoView({behavior:'smooth',block:'start'})}
document.querySelectorAll('.day-tab').forEach(b=>b.addEventListener('click',()=>setTab(b.dataset.day)));
function updateNetwork(){document.getElementById('offlineBadge').hidden=navigator.onLine}window.addEventListener('online',updateNetwork);window.addEventListener('offline',updateNetwork);updateNetwork();renderTimeline('all');renderPhotos();renderNow();if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));setTimeout(()=>map.invalidateSize(),400);
