const TRIP_YEAR=2026;
const places=[
{id:'airport',n:'⑧',day:'1001',lat:32.69417,lng:-16.77806,name:'马德拉C罗机场',local:'Madeira Cristiano Ronaldo Airport · FNC',time:'9/30周三 20:15抵达；10/1周四约18:00返回',task:'10/1 20:35 U27628 → 里斯本 LIS 22:20',icon:'✈️'},
{id:'hotel-madeira',n:'①/⑦',day:'1001',lat:32.64804,lng:-16.91236,name:'马德拉酒店',local:'Hotel Madeira',time:'10/1周四 早餐；最晚12:00退房寄存；约17:15取行李',task:'当天行李寄存点；取箱后直接去FNC机场',icon:'🏨'},
{id:'oldtown',n:'①',day:'0930',lat:32.64705,lng:-16.90015,name:'丰沙尔老城区·圣玛丽亚街',local:'Zona Velha / Rua de Santa Maria',time:'9/30周三约21:50',task:'抵达后的轻量散步',icon:'🌙'},
{id:'oregional',n:'②',day:'0930',lat:32.64781,lng:-16.90125,name:'晚餐',local:'Restaurante O Regional',time:'9/30周三约22:00',task:'排队超过约15分钟就换附近餐厅',icon:'🍽️'},
{id:'museum',n:'②',day:'1001',lat:32.64412,lng:-16.91385,name:'C罗博物馆',local:'Museu CR7 · Praça CR7',time:'10/1周四约11:00–12:10/12:20',task:'优先级1 · 博物馆内部 + C罗雕像 + Praça CR7周边',icon:'🏆'},
{id:'cable',n:'③',day:'1001',lat:32.64717,lng:-16.90230,name:'丰沙尔缆车',local:'Teleférico do Funchal',time:'10/1周四约13:20–13:40',task:'优先级2 · 单程上山至Monte；缆车体验本身优先',icon:'🚠'},
{id:'monte',n:'④',day:'1001',lat:32.67507,lng:-16.90247,name:'蒙特皇宫热带花园',local:'Monte Palace Madeira',time:'10/1周四约13:40–14:40/14:50',task:'弹性项目 · 正常约1小时；累了可缩至30–45分钟或进一步缩短',icon:'🌿'},
{id:'quinta',n:'⑤',day:'1001',lat:32.66713,lng:-16.93816,name:'C罗童年社区',local:'Quinta Falcão · Centro Comunitário da Quinta Falcão',time:'10/1周四约15:10–15:50',task:'优先级3 · 社区、C罗壁画和Santo António成长环境',icon:'⚽'},
{id:'pico',n:'⑥',day:'1001',lat:32.6677,lng:-16.9456,name:'皮科多斯巴塞罗斯观景台',local:'Miradouro do Pico dos Barcelos',time:'10/1周四约16:00–16:20',task:'可选 · 累了或前面晚了直接取消',icon:'🌄'}
];

const schedules={
'0930':{label:'9/30 周三',subtitle:'抵达丰沙尔 + Hotel Madeira + 老城晚餐',items:[
{time:'16:15',title:'曼彻斯特 MAN 起飞',sub:'Jet2 LS851 → FNC 20:15',icon:'✈️'},
{time:'20:15',title:'马德拉C罗机场 Madeira Cristiano Ronaldo Airport',sub:'预留下机、行李和洗手间时间',place:'airport',icon:'🧳',core:true},
{time:'~21:00',title:'机场 → 马德拉酒店 Hotel Madeira',sub:'Uber / Bolt / 正规出租车',place:'hotel-madeira',icon:'🚕'},
{time:'~21:30',title:'马德拉酒店 Hotel Madeira 入住',sub:'放行李后按体力决定是否简单散步',place:'hotel-madeira',icon:'🏨',core:true},
{time:'21:45',title:'前往丰沙尔老城 Zona Velha / Rua de Santa Maria',sub:'只做轻量夜游；累了可直接去吃饭',place:'oldtown',icon:'🚶'},
{time:'22:00',title:'O Regional 晚餐',sub:'排队超过约15分钟就换附近餐厅',place:'oregional',icon:'🍽️'}]},
'1001':{label:'10/1 周四',subtitle:'自然醒 · Museu CR7 → 缆车 → Monte弹性 → Quinta Falcão → FNC',items:[
{time:'约08:45–09:30',title:'自然醒 / 根据身体状态起床',sub:'参考时间，不是必须早起的节点；身体恢复优先',place:'hotel-madeira',icon:'🌤️',buffer:true},
{time:'起床后–最晚10:30',title:'Hotel Madeira 早餐',sub:'正常吃早餐，不为赶第一班缆车压缩睡眠',place:'hotel-madeira',icon:'☕'},
{time:'约10:30–11:00',title:'收拾 / 退房 / 前台寄存全部大件行李',sub:'唯一酒店硬节点：最晚12:00前完成退房；白天空手游览',place:'hotel-madeira',icon:'🧳',core:true},
{time:'约11:00–12:10/12:20',title:'C罗博物馆 Museu CR7',sub:'优先级1 · 博物馆内部 + Cristiano Ronaldo雕像 + Praça CR7周边',place:'museum',icon:'🏆',core:true},
{time:'约12:20–13:05',title:'正常午饭',sub:'Museu CR7 / 丰沙尔市中心附近即可；不追网红店，不排长队',place:'museum',icon:'🍽️'},
{time:'约13:05–13:20',title:'步行 → 丰沙尔缆车下站',sub:'按正常步速前往 Teleférico do Funchal',place:'cable',icon:'🚶'},
{time:'约13:20–13:40',title:'丰沙尔缆车 Teleférico do Funchal',sub:'优先级2 · 单程上山至Monte；缆车体验本身不要被压缩',place:'cable',icon:'🚠',core:true},
{time:'约13:40–14:40/14:50',title:'蒙特皇宫热带花园 Monte Palace Madeira',sub:'弹性游览：正常约1小时；累了缩至30–45分钟；明显落后可进一步缩短',place:'monte',icon:'🌿',buffer:true},
{time:'约14:50',title:'Monte → Quinta Falcão',sub:'优先 Uber / Bolt / 正规出租车，节省体力和时间',place:'quinta',icon:'🚕'},
{time:'约15:10–15:50',title:'C罗童年社区 Quinta Falcão',sub:'优先级3 · Centro Comunitário da Quinta Falcão、C罗壁画、Santo António社区环境；不以“可参观旧居”为目标',place:'quinta',icon:'⚽',core:true},
{time:'约15:50',title:'决定是否去 Pico dos Barcelos',sub:'只有时间、天气和身体状态都好才去；否则直接回丰沙尔市中心',place:'pico',icon:'🧭',buffer:true},
{time:'约16:00–16:20',title:'皮科多斯巴塞罗斯观景台 Miradouro do Pico dos Barcelos',sub:'可选项目 · 累了或前面晚了直接取消',place:'pico',icon:'🌄',buffer:true},
{time:'约16:30–17:15',title:'返回丰沙尔市中心 / Hotel Madeira附近',sub:'只用于休息、咖啡、补给、洗手间、短暂海边散步和整理随身物品',place:'hotel-madeira',icon:'🫧',buffer:true},
{time:'约17:15–17:25',title:'回 Hotel Madeira 取寄存行李',sub:'检查护照、手机、钱包/银行卡、登机牌和全部行李',place:'hotel-madeira',icon:'🧳',core:true},
{time:'约17:25–17:30',title:'Hotel Madeira → FNC机场',sub:'Uber / Bolt / 正规出租车；从这里开始不再增加任何项目',place:'airport',icon:'🚕',core:true},
{time:'约18:00',title:'抵达马德拉机场 FNC',sub:'给值机、安检和登机保留充足时间',place:'airport',icon:'🛂',core:true},
{time:'20:35',title:'easyJet U27628 起飞',sub:'FNC → LIS · 计划22:20抵达里斯本',place:'airport',icon:'✈️',core:true},
{time:'22:20',title:'抵达里斯本 LIS',sub:'取行李后 Uber / 正规出租车 → ibis Lisboa José Malhoa → 入住、洗漱、睡觉',icon:'🌙'}]}
};

const photos=[
{title:'马德拉酒店 Hotel Madeira',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Hotel%20Madeira%2C%20Funchal2.jpg'},
{title:'C罗博物馆 Museu CR7',src:'https://visitmadeira.com/media/40gp2w11/museu-cristianao-ronaldo1-francisco-correia.jpg?height=1080&rnd=133264795035770000&width=1920'},
{title:'Cristiano Ronaldo 雕像 · Museu CR7',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Funchal%20%28Madeira%2C%20Portugal%29%2C%20Museu%20CR7%2C%20Est%C3%A1tua%20de%20Cristiano%20Ronaldo%20--%202025%20--%201320.jpg'},
{title:'丰沙尔缆车 Teleférico do Funchal',src:'https://madeiracablecar.com/media/5bdo1iox/madeira_cable_car_2024-45-2.jpg?height=1080&rnd=133843600889000000&width=1700'},
{title:'蒙特皇宫热带花园 Monte Palace Madeira',src:'https://visitmadeira.com/media/s4gfyfjk/madeira-monte-palace-jardim-014-madeira-monte-palace.jpg?height=1080&rnd=134135522042030000&width=1920'},
{title:'Quinta Falcão · C罗壁画',src:'https://static-storage.dnoticias.pt/www-assets.dnoticias.pt/images/configuration/OR/8a421df0-55fa-47e9-a073-b0b14adafce6.JPEG'},
{title:'皮科多斯巴塞罗斯观景台 Pico dos Barcelos',src:'https://upload.wikimedia.org/wikipedia/commons/d/df/Madeira_Pico_dos_Barcelos_2016_1.jpg'}
];

const map=L.map('map',{zoomControl:true}).setView([32.66,-16.93],11);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap contributors'}).addTo(map);
const markers={};
function dayClass(day){return day==='0930'?'marker-0930':'marker-1001'}
function appleMap(p){return `https://maps.apple.com/?ll=${p.lat},${p.lng}&q=${encodeURIComponent(p.local)}`}
function googleMap(p){return `https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`}
function uber(p){return `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[latitude]=${p.lat}&dropoff[longitude]=${p.lng}&dropoff[nickname]=${encodeURIComponent(p.local)}`}

const rideCopyNames={"airport":"Aeroporto Internacional da Madeira Cristiano Ronaldo","hotel-madeira":"Hotel Madeira","museum":"Museu CR7","cable":"Teleférico do Funchal","monte":"Monte Palace Madeira","quinta":"Centro Comunitário da Quinta Falcão","pico":"Miradouro do Pico dos Barcelos"};
function copyRidePlace(id){const text=rideCopyNames[id];if(!text)return;const done=()=>{const el=document.querySelector(`[data-copy-place="${id}"]`);if(el){const old=el.textContent;el.textContent='已复制';setTimeout(()=>{el.textContent=old},1400)}};if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(text).then(done).catch(()=>fallbackCopy(text,done))}else fallbackCopy(text,done)}
function fallbackCopy(text,done){const ta=document.createElement('textarea');ta.value=text;ta.setAttribute('readonly','');ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done()}finally{document.body.removeChild(ta)}}
places.forEach(p=>{const icon=L.divIcon({className:'leaflet-div-icon',html:`<div class="num-marker ${dayClass(p.day)}">${p.n.split('/')[0]}</div>`,iconSize:[30,30],iconAnchor:[15,15]});const popup=`<div class="popup-title">${p.icon} ${p.name}<br>${p.local}</div><div class="popup-sub">${p.time}<br>${p.task}</div><div class="popup-actions"><a href="${appleMap(p)}" target="_blank">Apple Maps</a><a href="${googleMap(p)}" target="_blank">Google Maps</a>${['airport','hotel-madeira','museum','cable','monte','quinta','pico'].includes(p.id)?`<a href="${uber(p)}" target="_blank">叫 Uber</a><a href="https://bolt.eu/en/rides/" target="_blank" rel="noopener">叫 Bolt</a><a href="#" data-copy-place="${p.id}" onclick="copyRidePlace('${p.id}');return false">复制地点</a>`:''}</div>`;markers[p.id]=L.marker([p.lat,p.lng],{icon}).addTo(map).bindPopup(popup,{maxWidth:280});});
const allBounds=L.latLngBounds(places.map(p=>[p.lat,p.lng]));map.fitBounds(allBounds.pad(.08));document.getElementById('fitMapBtn').addEventListener('click',()=>map.fitBounds(allBounds.pad(.08)));
function renderTimeline(day='all'){const root=document.getElementById('timeline');root.innerHTML='';const keys=day==='all'?['0930','1001']:[day];keys.forEach(k=>{const s=schedules[k];if(!s)return;const block=document.createElement('section');block.className='day-block';block.innerHTML=`<div class="day-heading"><h3>${s.label}</h3><span>${s.subtitle}</span></div><div class="timeline-list"></div>`;const list=block.querySelector('.timeline-list');s.items.forEach(it=>{const el=document.createElement('article');el.className=`timeline-item${it.core?' is-core':''}${it.buffer?' is-buffer':''}`;el.innerHTML=`<div class="timeline-time">${it.time}</div><div class="timeline-main"><b>${it.title}</b><small>${it.sub}</small></div><div class="timeline-icon">${it.icon}</div>`;if(it.place)el.addEventListener('click',()=>focusPlace(it.place));list.appendChild(el)});root.appendChild(block)})}
function focusPlace(id){const p=places.find(x=>x.id===id);if(!p)return;map.setView([p.lat,p.lng],15,{animate:true});markers[id]?.openPopup();document.querySelector('.map-section').scrollIntoView({behavior:'smooth',block:'start'});setTimeout(()=>map.invalidateSize(),350)}
function renderPhotos(){const root=document.getElementById('photoGrid');photos.forEach(ph=>{const f=document.createElement('figure');f.className='photo-card';f.innerHTML=`<img loading="lazy" referrerpolicy="no-referrer" src="${ph.src}" alt="${ph.title}" onerror="this.closest('figure').style.display='none'"><figcaption>${ph.title}</figcaption>`;root.appendChild(f)})}
function nowMadeira(){return new Date()}function dateKey(d){return String(d.getMonth()+1).padStart(2,'0')+String(d.getDate()).padStart(2,'0')}function minuteOfDay(d){return d.getHours()*60+d.getMinutes()}function parseTime(t){const m=t.match(/(\d{1,2}):(\d{2})/);return m?Number(m[1])*60+Number(m[2]):null}
function currentStatus(){const d=nowMadeira(),key=dateKey(d);if(!['0930','1001'].includes(key)||d.getFullYear()!==TRIP_YEAR)return{mode:'pre',title:'行程准备',sub:'可先查看地图和逐日时间轴。10/1上午自然醒，只需要保证12:00前退房。',day:'all'};const items=schedules[key].items,now=minuteOfDay(d);let next=items.find(it=>{const t=parseTime(it.time);return t!==null&&t>=now});if(!next)next=items[items.length-1];return{mode:'live',title:`下一步 · ${next.time} ${next.title}`,sub:next.sub,day:key,place:next.place}}
function renderNow(){const s=currentStatus(),card=document.getElementById('nowCard'),p=s.place?places.find(x=>x.id===s.place):null;card.innerHTML=`<div class="now-card__label">${s.mode==='live'?'现场执行':'行程准备'}</div><h2>${s.title}</h2><p>${s.sub}</p><div class="now-card__actions"><button class="action-btn action-btn--primary" id="showDayBtn">${s.mode==='live'?'查看今天':'查看完整行程'}</button>${p?`<a class="action-btn" target="_blank" href="${appleMap(p)}">Apple Maps</a><a class="action-btn" target="_blank" href="${googleMap(p)}">Google Maps</a>`:''}</div>`;document.getElementById('showDayBtn').onclick=()=>{renderTimeline(s.day==='all'?'all':s.day);if(s.place)focusPlace(s.place);else document.getElementById('timelineSection').scrollIntoView({behavior:'smooth'})}}
function setTab(day){document.querySelectorAll('.day-tab').forEach(b=>b.classList.toggle('is-active',b.dataset.day===day));if(day==='today'){const s=currentStatus();renderTimeline(s.day==='all'?'all':s.day);renderNow();return}renderTimeline(day);const repeated=day==='0930'?['airport','hotel-madeira']:day==='1001'?['hotel-madeira','airport']:[];const ps=places.filter(p=>p.day===day||repeated.includes(p.id));if(ps.length){map.fitBounds(L.latLngBounds(ps.map(p=>[p.lat,p.lng])).pad(.22));setTimeout(()=>map.invalidateSize(),150)}document.getElementById('timelineSection').scrollIntoView({behavior:'smooth',block:'start'})}
document.querySelectorAll('.day-tab').forEach(b=>b.addEventListener('click',()=>setTab(b.dataset.day)));
function updateNetwork(){document.getElementById('offlineBadge').hidden=navigator.onLine}window.addEventListener('online',updateNetwork);window.addEventListener('offline',updateNetwork);updateNetwork();renderTimeline('all');renderPhotos();renderNow();if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));setTimeout(()=>map.invalidateSize(),400);
