const TRIP_YEAR=2026;
const places=[
{id:'lis-airport',n:'①',day:'1002',lat:38.7742,lng:-9.1342,name:'里斯本机场',local:'Humberto Delgado Airport · Lisbon Airport',time:'10/2周五 16:55',task:'抵达里斯本',icon:'✈️'},
{id:'ibis',n:'②',day:'1002',lat:38.737046,lng:-9.163156,name:'宜必思里斯本若泽马尔霍亚',local:'ibis Lisboa José Malhoa',time:'10/2约18:10–18:25入住；10/4退房寄存/取行李',task:'两晚住宿 · Praça de Espanha 约100m',icon:'🏨'},
{id:'comercio',n:'③',day:'1002',lat:38.7076,lng:-9.1365,name:'商业广场',local:'Praça do Comércio',time:'10/2 19:00–19:30',task:'河岸与广场',icon:'🏛️'},
{id:'augusta',n:'④',day:'1002',lat:38.7105,lng:-9.1372,name:'奥古斯塔街',local:'Rua Augusta',time:'10/2 19:30–19:50',task:'向北步行',icon:'🚶'},
{id:'rossio',n:'⑤/⑰',day:'1002',lat:38.7139,lng:-9.1394,name:'罗西欧 / 复兴广场',local:'Rossio / Restauradores',time:'10/2约19:50；10/4约09:00',task:'两次经过的市中心节点',icon:'📍'},
{id:'bonjardim',n:'⑥',day:'1002',lat:38.7161,lng:-9.1404,name:'晚餐',local:'Bonjardim',time:'10/2约20:00–21:15',task:'排队>15分钟换附近备选',icon:'🍗'},
{id:'castle',n:'⑦',day:'1003',lat:38.7139,lng:-9.1335,name:'圣乔治城堡',local:'Castelo de São Jorge',time:'10/3 09:00–10:30',task:'核心 · 进入内部',icon:'🏰'},
{id:'portas',n:'⑧',day:'1003',lat:38.7118,lng:-9.1303,name:'太阳门观景台',local:'Miradouro das Portas do Sol',time:'10/3约10:35–10:50',task:'免费 · 连续下坡线',icon:'🌇'},
{id:'luzia',n:'⑨',day:'1003',lat:38.7116,lng:-9.1307,name:'圣卢西亚观景台',local:'Miradouro de Santa Luzia',time:'10/3约10:50–11:10',task:'拍照停留',icon:'📷'},
{id:'se',n:'⑩',day:'1003',lat:38.7098,lng:-9.1335,name:'里斯本主教座堂',local:'Sé de Lisboa',time:'10/3约11:20',task:'Alfama 下坡途中',icon:'⛪'},
{id:'bifana',n:'⑪',day:'1003',lat:38.7126,lng:-9.1406,name:'午餐',local:'Bifanas da Tia Alice · Calçada do Carmo 19',time:'10/3约12:10–12:50',task:'排队过长就换',icon:'🥪'},
{id:'cais',n:'⑫',day:'1003',lat:38.7061,lng:-9.1443,name:'Cais do Sodré 火车站',local:'Cais do Sodré railway station',time:'10/3约13:00',task:'转 CP Cascais Line 去 Belém',icon:'🚆'},
{id:'jeronimos',n:'⑬',day:'1003',lat:38.6979,lng:-9.2066,name:'热罗尼莫斯修道院',local:'Mosteiro dos Jerónimos',time:'10/3约13:35–15:00',task:'核心 · 付费进入',icon:'⛪'},
{id:'pasteis',n:'⑭',day:'1003',lat:38.6975,lng:-9.2032,name:'贝伦蛋挞',local:'Pastéis de Belém',time:'10/3约15:05–15:30',task:'长队则 takeaway / 跳过',icon:'🥧'},
{id:'padrao',n:'⑮',day:'1003',lat:38.6939,lng:-9.2058,name:'发现者纪念碑',local:'Padrão dos Descobrimentos',time:'10/3约15:35–16:00',task:'外观，不登顶',icon:'🧭'},
{id:'belem',n:'⑯',day:'1003',lat:38.6916,lng:-9.2160,name:'贝伦塔',local:'Torre de Belém',time:'10/3约16:25–16:55',task:'只看外观',icon:'🗼'},
{id:'carmo',n:'⑱',day:'1004',lat:38.7122,lng:-9.1407,name:'卡尔莫广场 / 修道院外观',local:'Largo do Carmo / Convento do Carmo',time:'10/4约09:40–10:00',task:'外观即可',icon:'🏚️'},
{id:'chiado',n:'⑲',day:'1004',lat:38.7108,lng:-9.1422,name:'希亚多',local:'Chiado / Rua Garrett / Camões',time:'10/4约10:00–11:15',task:'街区慢走 + early lunch',icon:'☕'},
{id:'santa',n:'⑳',day:'1004',lat:38.7141,lng:-9.1220,name:'圣阿波隆尼亚站',local:'Lisboa Santa Apolónia',time:'10/4约12:25抵达；14:00发车',task:'AP133 → Porto Campanhã',icon:'🚄'}
];

const schedules={
'1002':{label:'10/2 周五',subtitle:'抵达里斯本 + Baixa 夜游',items:[
{iso:'2026-10-02T15:10:00+01:00',time:'15:10',title:'Funchal FNC 起飞',sub:'easyJet U27626 → LIS 16:55',icon:'✈️'},
{iso:'2026-10-02T16:55:00+01:00',time:'16:55',title:'里斯本机场 Lisbon Airport',sub:'预留35–45分钟下机、行李和找地铁',place:'lis-airport',icon:'🧳',core:true},
{iso:'2026-10-02T17:35:00+01:00',time:'~17:35',title:'Aeroporto → São Sebastião',sub:'Metro Red Line 直达',place:'ibis',icon:'🚇'},
{iso:'2026-10-02T18:05:00+01:00',time:'~18:05',title:'São Sebastião → Praça de Espanha',sub:'Blue Line 往 Reboleira 方向 1 站；到站用 North Hall',place:'ibis',icon:'🚇'},
{iso:'2026-10-02T18:15:00+01:00',time:'~18:15',title:'步行 → ibis Lisboa José Malhoa',sub:'约100m级别酒店步行；入住、放行李',place:'ibis',icon:'🏨',core:true},
{iso:'2026-10-02T18:35:00+01:00',time:'18:35',title:'ibis → Praça de Espanha',sub:'步行；仍使用 North Hall',place:'ibis',icon:'🚶'},
{iso:'2026-10-02T18:45:00+01:00',time:'~18:45',title:'Praça de Espanha → Terreiro do Paço',sub:'Blue Line 直达，不换乘',place:'comercio',icon:'🚇'},
{iso:'2026-10-02T19:00:00+01:00',time:'19:00',title:'Praça do Comércio',sub:'19:00–19:30 · 河岸 + 广场',place:'comercio',icon:'🏛️'},
{iso:'2026-10-02T19:30:00+01:00',time:'19:30',title:'Rua Augusta',sub:'向北走到 Rossio / Restauradores',place:'augusta',icon:'🚶'},
{iso:'2026-10-02T19:50:00+01:00',time:'19:50',title:'Rossio / Restauradores',sub:'短停，不增加景点',place:'rossio',icon:'📍'},
{iso:'2026-10-02T20:00:00+01:00',time:'~20:00',title:'Bonjardim 晚餐',sub:'等待>15分钟就换',place:'bonjardim',icon:'🍽️',core:true},
{iso:'2026-10-02T21:45:00+01:00',time:'~21:45',title:'Blue Line 返回 Praça de Espanha / ibis',sub:'Restauradores 或 Baixa-Chiado 上车；早休息',place:'ibis',icon:'🌙'}]},
'1003':{label:'10/3 周六',subtitle:'Castelo + Alfama 连续下坡 + Belém',items:[
{iso:'2026-10-03T07:15:00+01:00',time:'07:15',title:'ibis 早餐 buffet',sub:'07:15–08:00 · 已包含，不再外找早餐',place:'ibis',icon:'☕',core:true},
{iso:'2026-10-03T08:00:00+01:00',time:'08:00',title:'最终准备 / 叫车',sub:'08:15前完成',place:'ibis',icon:'🎒'},
{iso:'2026-10-03T08:15:00+01:00',time:'~08:15',title:'ibis → Castelo',sub:'Uber / Bolt，上坡段直接打车保存体力',place:'castle',icon:'🚕'},
{iso:'2026-10-03T09:00:00+01:00',time:'09:00',title:'Castelo de São Jorge',sub:'09:00–10:30 · 核心',place:'castle',icon:'🏰',core:true},
{iso:'2026-10-03T10:35:00+01:00',time:'10:35',title:'Miradouro das Portas do Sol',sub:'顺坡向下，免费',place:'portas',icon:'🌇'},
{iso:'2026-10-03T10:50:00+01:00',time:'10:50',title:'Miradouro de Santa Luzia',sub:'约20分钟拍照',place:'luzia',icon:'📷'},
{iso:'2026-10-03T11:10:00+01:00',time:'11:10',title:'Alfama → Sé de Lisboa',sub:'持续下坡，不依赖 Tram 28E',place:'se',icon:'🚶'},
{iso:'2026-10-03T11:35:00+01:00',time:'11:35',title:'继续走向 Baixa / Rossio',sub:'无折返；若拖延就压缩这段',place:'rossio',icon:'🚶'},
{iso:'2026-10-03T12:10:00+01:00',time:'12:10',title:'Bifanas da Tia Alice 午餐',sub:'Calçada do Carmo 19；排队>15–20分钟就换',place:'bifana',icon:'🥪'},
{iso:'2026-10-03T12:50:00+01:00',time:'12:50',title:'Rossio → Cais do Sodré',sub:'Metro 短转移',place:'cais',icon:'🚇'},
{iso:'2026-10-03T13:20:00+01:00',time:'~13:20',title:'Cais do Sodré → Belém',sub:'CP Cascais Line；周末班次临近出发再看',place:'cais',icon:'🚆'},
{iso:'2026-10-03T13:35:00+01:00',time:'~13:35',title:'Mosteiro dos Jerónimos',sub:'到15:00左右 · 核心',place:'jeronimos',icon:'⛪',core:true},
{iso:'2026-10-03T15:05:00+01:00',time:'15:05',title:'Pastéis de Belém',sub:'点心+咖啡；长队 takeaway / 跳过',place:'pasteis',icon:'🥧'},
{iso:'2026-10-03T15:35:00+01:00',time:'15:35',title:'Padrão dos Descobrimentos',sub:'只看外观，不登顶',place:'padrao',icon:'🧭'},
{iso:'2026-10-03T16:00:00+01:00',time:'16:00',title:'Belém 河岸步行',sub:'约25分钟；属于可压缩段',place:'belem',icon:'🚶',buffer:true},
{iso:'2026-10-03T16:25:00+01:00',time:'16:25',title:'Torre de Belém',sub:'只看外观到16:55',place:'belem',icon:'🗼'},
{iso:'2026-10-03T17:00:00+01:00',time:'~17:00',title:'Belém → ibis',sub:'CP→Cais do Sodré；Green 到 Baixa-Chiado，再 Blue → Praça de Espanha；累则Uber/Bolt',place:'ibis',icon:'🚆'}]},
'1004':{label:'10/4 周日',subtitle:'市中心收尾 + 14:00 AP133 去 Porto',items:[
{iso:'2026-10-04T07:30:00+01:00',time:'07:30',title:'ibis 早餐 buffet',sub:'07:30–08:10 · 已包含',place:'ibis',icon:'☕',core:true},
{iso:'2026-10-04T08:15:00+01:00',time:'08:15',title:'ibis 退房 + 寄存行李',sub:'08:15–08:30；空手进市中心',place:'ibis',icon:'🧳',core:true},
{iso:'2026-10-04T08:35:00+01:00',time:'~08:35',title:'Praça de Espanha → Restauradores',sub:'Blue Line direct；North Hall',place:'rossio',icon:'🚇'},
{iso:'2026-10-04T09:00:00+01:00',time:'09:00',title:'Rossio',sub:'09:00–09:20 · 轻量停留',place:'rossio',icon:'📍'},
{iso:'2026-10-04T09:20:00+01:00',time:'09:20',title:'走向 Largo do Carmo',sub:'有一点上坡，时间留够',place:'carmo',icon:'🚶'},
{iso:'2026-10-04T09:40:00+01:00',time:'09:40',title:'Convento do Carmo 外观',sub:'09:40–10:00 · 不进入',place:'carmo',icon:'🏚️'},
{iso:'2026-10-04T10:00:00+01:00',time:'10:00',title:'Chiado / Rua Garrett / Camões',sub:'到10:45；街区体验',place:'chiado',icon:'☕'},
{iso:'2026-10-04T10:45:00+01:00',time:'10:45',title:'Early lunch / brunch',sub:'Chiado附近，到11:15',place:'chiado',icon:'🥪'},
{iso:'2026-10-04T11:15:00+01:00',time:'11:15',title:'Baixa-Chiado → Praça de Espanha',sub:'Blue Line direct；开始离城链条',place:'ibis',icon:'🚇',core:true},
{iso:'2026-10-04T11:35:00+01:00',time:'11:35',title:'ibis 取行李',sub:'11:50前完成',place:'ibis',icon:'🧳',core:true},
{iso:'2026-10-04T12:00:00+01:00',time:'12:00',title:'Praça de Espanha → Santa Apolónia',sub:'Blue Line direct；North Hall；Uber/Bolt仅作备用',place:'santa',icon:'🚇',core:true},
{iso:'2026-10-04T12:25:00+01:00',time:'12:25',title:'抵达 Lisboa Santa Apolónia',sub:'厕所 / 水 / 看站台；留足buffer',place:'santa',icon:'🚉',core:true},
{iso:'2026-10-04T13:20:00+01:00',time:'~13:20',title:'准备上车',sub:'不要最后几分钟才找站台',place:'santa',icon:'🎫'},
{iso:'2026-10-04T14:00:00+01:00',time:'14:00',title:'AP133 发车 → Porto Campanhã',sub:'当前基线16:48到；最终以实际车票为准',place:'santa',icon:'🚄',core:true}
]}};

const photos=[
{title:'商业广场 Praça do Comércio',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Praca%20do%20Comercio%20Lisbon.jpg',credit:'Iantomferry · CC BY-SA 3.0',source:'https://commons.wikimedia.org/wiki/File:Praca_do_Comercio_Lisbon.jpg'},
{title:'圣乔治城堡 Castelo de São Jorge',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Castelo%20de%20S%C3%A3o%20Jorge%20-%20Lisbon.jpg',credit:'Ø11 · CC BY-SA 4.0',source:'https://commons.wikimedia.org/wiki/File:Castelo_de_S%C3%A3o_Jorge_-_Lisbon.jpg'},
{title:'圣卢西亚观景台 Miradouro de Santa Luzia',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Miradouro%20de%20Santa%20Luzia.jpg',credit:'GiacomoAntonini1760 · CC BY-SA 4.0',source:'https://commons.wikimedia.org/wiki/File:Miradouro_de_Santa_Luzia.jpg'},
{title:'热罗尼莫斯修道院 Mosteiro dos Jerónimos',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Mosteiro%20dos%20Jer%C3%B3nimos%20-Lisboa.jpg',credit:'Ana Correia 28 · CC BY-SA 4.0',source:'https://commons.wikimedia.org/wiki/File:Mosteiro_dos_Jer%C3%B3nimos_-Lisboa.jpg'},
{title:'Jerónimos 回廊 Cloister',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Mosteiro%20dos%20J%C3%A9ronimos.%20The%20Cloister.jpg',credit:'MFREYNAUD51 · CC BY-SA 4.0',source:'https://commons.wikimedia.org/wiki/File:Mosteiro_dos_J%C3%A9ronimos._The_Cloister.jpg'},
{title:'发现者纪念碑 Padrão dos Descobrimentos',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Padr%C3%A3o%20dos%20Descobrimentos%2C%20Lisboa.jpg',credit:'Bene Riobó · CC BY-SA 4.0',source:'https://commons.wikimedia.org/wiki/File:Padr%C3%A3o_dos_Descobrimentos,_Lisboa.jpg'},
{title:'贝伦塔 Torre de Belém',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Torre%20de%20Bel%C3%A9m-%20Lisbon.jpg',credit:'Ana Correia 28 · CC BY-SA 4.0',source:'https://commons.wikimedia.org/wiki/File:Torre_de_Bel%C3%A9m-_Lisbon.jpg'}
];

const map=L.map('map',{zoomControl:true}).setView([38.71,-9.16],12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap contributors'}).addTo(map);
const markers={};
function dayClass(day){return day==='1002'?'marker-1002':day==='1003'?'marker-1003':'marker-1004'}
function appleMap(p){return `https://maps.apple.com/?ll=${p.lat},${p.lng}&q=${encodeURIComponent(p.local)}`}
function googleMap(p){return `https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`}
function uber(p){return `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[latitude]=${p.lat}&dropoff[longitude]=${p.lng}&dropoff[nickname]=${encodeURIComponent(p.local)}`}
const uberIds=new Set(['lis-airport','ibis','castle','santa']);
places.forEach(p=>{
  const icon=L.divIcon({className:'leaflet-div-icon',html:`<div class="num-marker ${dayClass(p.day)}">${p.n.split('/')[0]}</div>`,iconSize:[30,30],iconAnchor:[15,15]});
  const popup=`<div class="popup-title">${p.icon} ${p.name}<br>${p.local}</div><div class="popup-sub">${p.time}<br>${p.task}</div><div class="popup-actions"><a href="${appleMap(p)}" target="_blank" rel="noopener">Apple Maps</a><a href="${googleMap(p)}" target="_blank" rel="noopener">Google Maps</a>${uberIds.has(p.id)?`<a href="${uber(p)}" target="_blank" rel="noopener">叫 Uber</a>`:''}</div>`;
  markers[p.id]=L.marker([p.lat,p.lng],{icon}).addTo(map).bindPopup(popup,{maxWidth:290});
});
const allBounds=L.latLngBounds(places.map(p=>[p.lat,p.lng]));
map.fitBounds(allBounds.pad(.06));
document.getElementById('fitMapBtn').addEventListener('click',()=>map.fitBounds(allBounds.pad(.06)));

function renderPhotos(){document.getElementById('photoGrid').innerHTML=photos.map(p=>`<figure class="photo-card"><img src="${p.src}" alt="${p.title}" loading="lazy" referrerpolicy="no-referrer"><figcaption><span>${p.title}</span><a class="photo-credit" href="${p.source}" target="_blank" rel="noopener">${p.credit}</a></figcaption></figure>`).join('')}
function renderTimeline(days=['1002','1003','1004']){const html=days.map(d=>{const s=schedules[d];const items=s.items.map(it=>`<div class="timeline-item${it.core?' is-core':''}${it.buffer?' is-buffer':''}" ${it.place?`data-place="${it.place}"`:''}><div class="timeline-time">${it.time}</div><div class="timeline-main"><b>${it.title}</b><small>${it.sub}</small></div><div class="timeline-icon">${it.icon||''}</div></div>`).join('');return `<div class="day-block"><div class="day-heading"><h3>${s.label}</h3><span>${s.subtitle}</span></div><div class="timeline-list">${items}</div></div>`}).join('');document.getElementById('timeline').innerHTML=html;document.querySelectorAll('.timeline-item[data-place]').forEach(el=>el.addEventListener('click',()=>focusPlace(el.dataset.place)))}
function focusPlace(id){const p=places.find(x=>x.id===id);if(!p)return;map.setView([p.lat,p.lng],15,{animate:true});markers[id]?.openPopup();document.querySelector('.map-section')?.scrollIntoView({behavior:'smooth',block:'start'})}
function fitDay(day){if(day==='today'){map.fitBounds(allBounds.pad(.06));return}const ps=places.filter(p=>p.day===day||(day==='1004'&&['ibis','rossio'].includes(p.id)));if(ps.length)map.fitBounds(L.latLngBounds(ps.map(p=>[p.lat,p.lng])).pad(.12))}
function dayFromDate(now){const fmt=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Lisbon',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);if(fmt==='2026-10-02')return'1002';if(fmt==='2026-10-03')return'1003';if(fmt==='2026-10-04')return'1004';return null}
function allTimedItems(){return Object.entries(schedules).flatMap(([day,s])=>s.items.filter(i=>i.iso).map(i=>({...i,day,date:new Date(i.iso)}))).sort((a,b)=>a.date-b.date)}
function renderNow(){const now=new Date(),items=allTimedItems(),first=items[0],last=items[items.length-1],card=document.getElementById('nowCard');let label='出发前',title='Lisbon 行程已就绪',sub='10/2 16:55 抵达里斯本；住宿基线已改为 ibis Lisboa José Malhoa。',item=null;if(now>=first.date&&now<=last.date){item=items.find(i=>i.date>=now)||last;label='NEXT · 下一步';title=`${item.time} · ${item.title}`;sub=item.sub}else if(now>last.date){label='行程完成';title='Lisbon 段已结束';sub='下一站：Porto。'}const actions=item?.place?`<div class="now-card__actions"><button class="action-btn action-btn--primary" data-now-place="${item.place}">地图定位</button><a class="action-btn" href="${googleMap(places.find(p=>p.id===item.place))}" target="_blank" rel="noopener">Google Maps</a></div>`:'';card.innerHTML=`<div class="now-card__label">${label}</div><h2>${title}</h2><p>${sub}</p>${actions}`;card.querySelector('[data-now-place]')?.addEventListener('click',e=>focusPlace(e.currentTarget.dataset.nowPlace))}
document.querySelectorAll('.day-tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.day-tab').forEach(b=>b.classList.remove('is-active'));btn.classList.add('is-active');const day=btn.dataset.day;if(day==='today'){const current=dayFromDate(new Date());renderTimeline(current?[current]:['1002','1003','1004'])}else renderTimeline([day]);fitDay(day)}));
window.addEventListener('online',()=>document.getElementById('offlineBadge').hidden=true);window.addEventListener('offline',()=>document.getElementById('offlineBadge').hidden=false);document.getElementById('offlineBadge').hidden=navigator.onLine;if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});renderPhotos();renderTimeline();renderNow();