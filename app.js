const TRIP_YEAR=2026;
const places=[
{id:'airport',n:'①/⑭',day:'0930',lat:32.69417,lng:-16.77806,name:'马德拉C罗机场',local:'Madeira Cristiano Ronaldo Airport',time:'9/30 20:15抵达；10/2约12:30返回',task:'抵达 / 离岛',icon:'✈️'},
{id:'hotel-madeira',n:'②/⑧',day:'0930',lat:32.64804,lng:-16.91236,name:'马德拉酒店',local:'Hotel Madeira',time:'9/30约21:30入住；10/1寄存/取行李',task:'第一晚住宿与行李锚点',icon:'🏨'},
{id:'oldtown',n:'③',day:'0930',lat:32.64705,lng:-16.90015,name:'丰沙尔老城区·圣玛丽亚街',local:'Zona Velha / Rua de Santa Maria',time:'9/30约21:50',task:'轻量夜游',icon:'🌙'},
{id:'oregional',n:'④',day:'0930',lat:32.64781,lng:-16.90125,name:'晚餐',local:'Restaurante O Regional',time:'9/30约22:00',task:'主选；排队>15分钟换 Xarambinha',icon:'🍽️'},
{id:'cable',n:'⑤',day:'1001',lat:32.64717,lng:-16.90230,name:'丰沙尔—蒙特缆车',local:'Teleférico do Funchal',time:'10/1 08:45',task:'单程上山',icon:'🚠'},
{id:'monte',n:'⑥',day:'1001',lat:32.67507,lng:-16.90247,name:'蒙特皇宫热带花园',local:'Monte Palace Madeira',time:'10/1 09:05–11:05',task:'约2小时主游览',icon:'🌿'},
{id:'quinta',n:'⑦',day:'1001',lat:32.66713,lng:-16.93816,name:'C罗童年社区',local:'Quinta Falcão',time:'10/1约11:40–12:00',task:'社区 / 足球成长背景 / 2026壁画',icon:'⚽'},
{id:'cr7',n:'⑨',day:'1001',lat:32.644306,lng:-16.913861,name:'C罗酒店',local:'Pestana CR7 Funchal',time:'10/1约15:00入住；15:20–16:50泳池',task:'完整 rooftop + infinity pool 体验',icon:'🏊'},
{id:'cabo',n:'⑩',day:'1001',lat:32.65648,lng:-17.00445,name:'吉朗角玻璃观景台',local:'Cabo Girão Skywalk',time:'10/1 18:00–18:35',task:'天气差直接删除',icon:'🌊'},
{id:'camara',n:'⑪',day:'1001',lat:32.64820,lng:-16.97649,name:'卡马拉-德洛布什海湾',local:'Câmara de Lobos',time:'10/1 19:00–19:45',task:'海港黄昏慢走',icon:'🌅'},
{id:'vila',n:'⑫',day:'1001',lat:32.64912,lng:-16.97472,name:'晚餐',local:'Restaurante Vila do Peixe',time:'10/1 20:00–21:20',task:'主要正式晚餐；建议预约',icon:'🐟'},
{id:'museum',n:'⑬',day:'1002',lat:32.64412,lng:-16.91385,name:'C罗博物馆',local:'Museu CR7',time:'10/2 10:20–11:10',task:'若上午拖延，第一个删除',icon:'🏆'}];

const schedules={
'0930':{label:'9/30 周三',subtitle:'抵达丰沙尔 + 老城晚餐',items:[
{time:'16:15',title:'Manchester MAN 起飞',sub:'Jet2 LS851 → FNC 20:15',icon:'✈️'},
{time:'20:15',title:'马德拉C罗机场 Madeira Cristiano Ronaldo Airport',sub:'预留40–50分钟下机、行李、洗手间',place:'airport',icon:'🧳',core:true},
{time:'~21:00',title:'机场 → Hotel Madeira',sub:'Uber；晚间不折腾公交',place:'hotel-madeira',icon:'🚕'},
{time:'~21:30',title:'Hotel Madeira 入住',sub:'晚到仍在前台营业窗口内',place:'hotel-madeira',icon:'🏨',core:true},
{time:'21:45',title:'走向 Zona Velha / Rua de Santa Maria',sub:'只做轻量夜游',place:'oldtown',icon:'🚶'},
{time:'22:00',title:'O Regional 晚餐',sub:'Xarambinha 备用；预计等待>15分钟就换',place:'oregional',icon:'🍽️',core:true},
{time:'饭后',title:'短走老城 → 酒店',sub:'航班晚点就直接删除散步',place:'oldtown',icon:'🌙'}]},
'1001':{label:'10/1 周四',subtitle:'Monte + CR7完整泳池 + 西海岸晚餐',items:[
{time:'07:30',title:'Hotel Madeira 早餐',sub:'07:30–08:10',place:'hotel-madeira',icon:'☕'},
{time:'08:10',title:'退房 + 寄存行李',sub:'大件留酒店；贵重物随身',place:'hotel-madeira',icon:'🧳'},
{time:'08:20',title:'步行 → 缆车下站',sub:'市中心直接走',place:'cable',icon:'🚶'},
{time:'08:45',title:'Teleférico do Funchal 单程上山',sub:'成人€16/人',place:'cable',icon:'🚠',core:true},
{time:'09:05',title:'Monte Palace Madeira',sub:'09:05–11:05；成人€18/人',place:'monte',icon:'🌿',core:true},
{time:'11:05',title:'开始叫 Uber',sub:'预留10–15分钟等待',place:'monte',icon:'📱'},
{time:'11:40',title:'Quinta Falcão',sub:'短停约20分钟；不是“保存完好的童年故居”',place:'quinta',icon:'⚽'},
{time:'12:00',title:'Uber → 丰沙尔市中心',sub:'再次预留叫车等待',place:'quinta',icon:'🚕'},
{time:'12:30',title:'轻午餐',sub:'12:30–13:25；不锁第二个正式餐厅',icon:'🥪'},
{time:'13:25',title:'主动留白',sub:'休息 / 咖啡 / 慢走，到14:10',icon:'🫧',buffer:true},
{time:'14:10',title:'回 Hotel Madeira 取行李',sub:'随后去 CR7',place:'hotel-madeira',icon:'🧳'},
{time:'14:40',title:'Pestana CR7 check-in buffer',sub:'15:00起入住，不假设15:00整拿房',place:'cr7',icon:'🏨'},
{time:'15:20',title:'Rooftop 干身拍照',sub:'先拍照再下水',place:'cr7',icon:'📷',core:true},
{time:'15:40',title:'Infinity pool',sub:'15:40–16:30：约50分钟实际下水，保护该时段',place:'cr7',icon:'🏊',core:true},
{time:'16:30',title:'最后拍照 + 洗澡更衣',sub:'16:30–17:20',place:'cr7',icon:'🚿'},
{time:'17:20',title:'开始叫 Uber → Cabo Girão',sub:'预留10–15分钟等待',place:'cabo',icon:'📱'},
{time:'18:00',title:'Cabo Girão Skywalk',sub:'18:00–18:35；€5/人；天气差直接删',place:'cabo',icon:'🌊'},
{time:'18:35',title:'Uber → Câmara de Lobos',sub:'短途转移',place:'camara',icon:'🚕'},
{time:'19:00',title:'Câmara de Lobos 海湾慢走',sub:'19:00–19:45',place:'camara',icon:'🌅',core:true},
{time:'20:00',title:'Vila do Peixe 晚餐',sub:'约20:00–21:20；建议预约两人',place:'vila',icon:'🐟',core:true},
{time:'饭后',title:'Uber → Pestana CR7',sub:'结束主行程日',place:'cr7',icon:'🚕'}]},
'1002':{label:'10/2 周五',subtitle:'CR7早餐 + Museu CR7 + 飞里斯本',items:[
{time:'08:30',title:'起床 / 洗漱 / 收大部分行李',sub:'低压力开始',place:'cr7',icon:'🧳'},
{time:'09:20',title:'Pestana CR7 早餐 buffet',sub:'09:20–10:10，当 brunch',place:'cr7',icon:'☕',core:true},
{time:'10:20',title:'Museu CR7',sub:'10:20–11:10；住客是否免费到前台确认',place:'museum',icon:'🏆'},
{time:'11:10',title:'回房最终收拾',sub:'到11:35',place:'cr7',icon:'🧳'},
{time:'11:35',title:'Check-out',sub:'酒店截止12:00',place:'cr7',icon:'🏨'},
{time:'~11:50',title:'开始叫 Uber / taxi',sub:'不要为了坚持Uber而过度等待',place:'cr7',icon:'📱',core:true},
{time:'~12:05',title:'CR7 → FNC Airport',sub:'目标约12:30到机场',place:'airport',icon:'🚕',core:true},
{time:'13:00',title:'机场候机 / 按需小食',sub:'早餐已当 brunch',place:'airport',icon:'🥪'},
{time:'15:10',title:'easyJet U27626 起飞',sub:'FNC → LIS 16:55；硬锚点',place:'airport',icon:'✈️',core:true}]}};

const photos=[
{title:'丰沙尔老城区 Zona Velha',src:'https://www.visitmadeira.com/media/ds2jbgq0/zona-velha1-digitaltravelcouple.jpg?height=1080&rnd=133159449299630000&rxy=0.3832824084881226%2C0.6333186763238243&width=1920'},
{title:'丰沙尔缆车 Teleférico do Funchal',src:'https://madeiracablecar.com/media/5bdo1iox/madeira_cable_car_2024-45-2.jpg?height=1080&rnd=133843600889000000&width=1700'},
{title:'蒙特皇宫 Monte Palace Madeira',src:'https://visitmadeira.com/media/s4gfyfjk/madeira-monte-palace-jardim-014-madeira-monte-palace.jpg?height=1080&rnd=134135522042030000&width=1920'},
{title:'Pestana CR7 rooftop infinity pool',src:'https://www.pestana.com/content/dam/pestana/en_gb/destinations/portugal/madeira/pestana-cr7-funchal/gallery/overview/pestana-cr7-funchal-gallery-facilities-pool.jpg'},
{title:'吉朗角 Cabo Girão Skywalk',src:'https://visitmadeira.com/media/qh5nwhbj/cabo-gira-o3-ricardo-faria-paulino.jpg?height=1080&rnd=133316577671370000&width=1920'},
{title:'卡马拉-德洛布什 Câmara de Lobos',src:'https://visitmadeira.com/media/gpmicbu5/camera-de-lobos_drone-1_woodland-studio.jpg?height=1080&rnd=133282112293200000&width=1920'},
{title:'C罗博物馆 Museu CR7',src:'https://visitmadeira.com/media/40gp2w11/museu-cristianao-ronaldo1-francisco-correia.jpg?height=1080&rnd=133264795035770000&width=1920'}];

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
function renderNow(){const s=currentStatus(),card=document.getElementById('nowCard'),p=s.place?places.find(x=>x.id===s.place):null;card.innerHTML=`<div class="now-card__label">${s.mode==='live'?'LIVE EXECUTION':'TRIP READY'}</div><h2>${s.title}</h2><p>${s.sub}</p><div class="now-card__actions"><button class="action-btn action-btn--primary" id="showDayBtn">${s.mode==='live'?'查看今天':'查看完整行程'}</button>${p?`<a class="action-btn" target="_blank" href="${appleMap(p)}">Apple Maps</a><a class="action-btn" target="_blank" href="${googleMap(p)}">Google Maps</a>`:''}</div>`;document.getElementById('showDayBtn').onclick=()=>{renderTimeline(s.day==='all'?'all':s.day);if(s.place)focusPlace(s.place);else document.getElementById('timelineSection').scrollIntoView({behavior:'smooth'})}}
function setTab(day){document.querySelectorAll('.day-tab').forEach(b=>b.classList.toggle('is-active',b.dataset.day===day));if(day==='today'){const s=currentStatus();renderTimeline(s.day==='all'?'all':s.day);renderNow();return}renderTimeline(day);const ps=places.filter(p=>p.day===day);if(ps.length){map.fitBounds(L.latLngBounds(ps.map(p=>[p.lat,p.lng])).pad(.22));setTimeout(()=>map.invalidateSize(),150)}document.getElementById('timelineSection').scrollIntoView({behavior:'smooth',block:'start'})}
document.querySelectorAll('.day-tab').forEach(b=>b.addEventListener('click',()=>setTab(b.dataset.day)));
function updateNetwork(){document.getElementById('offlineBadge').hidden=navigator.onLine}window.addEventListener('online',updateNetwork);window.addEventListener('offline',updateNetwork);updateNetwork();renderTimeline('all');renderPhotos();renderNow();if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));setTimeout(()=>map.invalidateSize(),400);
