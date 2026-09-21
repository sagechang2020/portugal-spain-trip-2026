const TRIP_YEAR=2026;
const places=[
{id:'lis-airport',n:'①',day:'1002',lat:38.7742,lng:-9.1342,name:'里斯本机场',local:'Humberto Delgado Airport · Lisbon Airport',time:'10/2周五 23:00',task:'U27628 抵达里斯本',icon:'✈️'},
{id:'ibis',n:'②',day:'1002',lat:38.737046,lng:-9.163156,name:'宜必思里斯本若泽马尔霍亚',local:'ibis Lisboa José Malhoa',time:'10/2深夜入住；10/4约08:50退房寄存、12:00左右取行李',task:'两晚住宿 · Praça de Espanha 北厅',icon:'🏨'},
{id:'castle',n:'③',day:'1003',lat:38.7139,lng:-9.1335,name:'圣乔治城堡',local:'Castelo de São Jorge',time:'10/3 10:00–11:30',task:'重点景点 · 入内参观',icon:'🏰'},
{id:'portas',n:'④',day:'1003',lat:38.7118,lng:-9.1303,name:'太阳门观景台',local:'Miradouro das Portas do Sol',time:'10/3约11:35–11:50',task:'短停 · 顺路下坡',icon:'🌇'},
{id:'luzia',n:'⑤',day:'1003',lat:38.7116,lng:-9.1307,name:'圣卢西亚观景台',local:'Miradouro de Santa Luzia',time:'10/3约11:50–12:10',task:'拍照停留',icon:'📷'},
{id:'se',n:'⑥',day:'1003',lat:38.7098,lng:-9.1335,name:'里斯本主教座堂',local:'Sé de Lisboa',time:'10/3约12:10–12:30',task:'短停 / 外观区域为主',icon:'⛪'},
{id:'cais',n:'⑦',day:'1003',lat:38.7061,lng:-9.1443,name:'Cais do Sodré 火车站',local:'Cais do Sodré railway station',time:'10/3约14:00',task:'CP Cascais线 → Belém',icon:'🚆'},
{id:'jeronimos',n:'⑧',day:'1003',lat:38.6979,lng:-9.2066,name:'热罗尼莫斯修道院',local:'Mosteiro dos Jerónimos',time:'10/3约14:30–15:50',task:'重点景点 · 入内参观',icon:'⛪'},
{id:'pasteis',n:'⑨',day:'1003',lat:38.6975,lng:-9.2032,name:'贝伦蛋挞',local:'Pastéis de Belém',time:'10/3约15:55–16:20',task:'排队长就外带或缩短停留',icon:'🥧'},
{id:'padrao',n:'⑩',day:'1003',lat:38.6939,lng:-9.2058,name:'发现者纪念碑',local:'Padrão dos Descobrimentos',time:'10/3约16:25–16:50',task:'只看外观；时间紧可取消',icon:'🧭'},
{id:'belem',n:'⑪',day:'1003',lat:38.6916,lng:-9.2160,name:'贝伦塔',local:'Torre de Belém',time:'10/3约17:15–17:40',task:'只看外观；时间紧可取消',icon:'🗼'},
{id:'comercio',n:'⑫',day:'1004',lat:38.7076,lng:-9.1365,name:'商业广场',local:'Praça do Comércio',time:'10/4约09:25–09:40',task:'顺路短停；时间紧可取消',icon:'🏛️'},
{id:'augusta',n:'⑬',day:'1004',lat:38.7105,lng:-9.1372,name:'奥古斯塔街',local:'Rua Augusta',time:'10/4约09:40–10:00',task:'顺路向北走到 Rossio',icon:'🚶'},
{id:'rossio',n:'⑭',day:'1004',lat:38.7139,lng:-9.1394,name:'罗西欧广场',local:'Rossio / Praça Dom Pedro IV',time:'10/4约10:00–10:15',task:'10/4 顺路经过',icon:'📍'},
{id:'carmo',n:'⑮',day:'1004',lat:38.7122,lng:-9.1407,name:'卡尔莫广场 / 修道院外观',local:'Largo do Carmo / Convento do Carmo',time:'10/4约10:30–10:45',task:'外观即可',icon:'🏚️'},
{id:'chiado',n:'⑯',day:'1004',lat:38.7108,lng:-9.1422,name:'希亚多',local:'Chiado / Rua Garrett / Camões',time:'10/4约10:45–11:40',task:'街区慢走 + 简短午饭',icon:'☕'},
{id:'santa',n:'⑰',day:'1004',lat:38.7141,lng:-9.1220,name:'圣阿波隆尼亚站',local:'Lisboa Santa Apolónia',time:'10/4约12:45抵达；14:00发车',task:'AP133 → Porto Campanhã',icon:'🚄'}
];

const schedules={
'1002':{label:'10/2 周五',subtitle:'23:00抵达里斯本 · 入住后直接休息',items:[
{iso:'2026-10-02T21:20:00+01:00',time:'21:20',title:'丰沙尔 FNC 起飞',sub:'easyJet U27628 → LIS 23:00',icon:'✈️',core:true},
{iso:'2026-10-02T23:00:00+01:00',time:'23:00',title:'里斯本机场 Lisbon Airport',sub:'取行李后直接去酒店',place:'lis-airport',icon:'🧳',core:true},
{iso:'2026-10-02T23:40:00+01:00',time:'~23:30–23:45',title:'离开到达大厅',sub:'按实际下机和行李速度执行',place:'lis-airport',icon:'🚶'},
{iso:'2026-10-02T23:50:00+01:00',time:'~23:45–00:10',title:'里斯本机场 → ibis Lisboa José Malhoa',sub:'Uber / 正规出租车直达酒店',place:'ibis',icon:'🚕',core:true},
{time:'~00:10–00:25',title:'ibis 办理入住 / 洗漱 / 睡觉',sub:'如饿了只简单吃点东西，尽快休息',place:'ibis',icon:'🏨',core:true}]},
'1003':{label:'10/3 周六',subtitle:'圣乔治城堡 + Alfama老城 + Belém · 晚上休息',items:[
{iso:'2026-10-03T08:20:00+01:00',time:'~08:20',title:'起床 / 洗漱',sub:'给深夜抵达后的正常恢复时间',place:'ibis',icon:'🌤️'},
{iso:'2026-10-03T08:40:00+01:00',time:'08:40',title:'ibis 自助早餐',sub:'08:40–09:20 · 已包含',place:'ibis',icon:'☕',core:true},
{iso:'2026-10-03T09:20:00+01:00',time:'09:20',title:'最终准备 / 叫车',sub:'约09:35出发',place:'ibis',icon:'🎒'},
{iso:'2026-10-03T09:35:00+01:00',time:'~09:35',title:'ibis → Castelo',sub:'Uber/Bolt，直接上坡保存体力',place:'castle',icon:'🚕'},
{iso:'2026-10-03T10:00:00+01:00',time:'10:00',title:'圣乔治城堡 Castelo de São Jorge',sub:'10:00–11:30 · 重点 · 入内参观',place:'castle',icon:'🏰',core:true},
{iso:'2026-10-03T11:35:00+01:00',time:'11:35',title:'太阳门观景台 Miradouro das Portas do Sol',sub:'11:35–11:50 · 短暂停留',place:'portas',icon:'🌇'},
{iso:'2026-10-03T11:50:00+01:00',time:'11:50',title:'圣卢西亚观景台 Miradouro de Santa Luzia',sub:'到12:10 · 拍照停留',place:'luzia',icon:'📷'},
{iso:'2026-10-03T12:10:00+01:00',time:'12:10',title:'里斯本主教座堂 Sé de Lisboa',sub:'到12:30 · 短停/外观区域为主',place:'se',icon:'⛪'},
{iso:'2026-10-03T12:30:00+01:00',time:'12:30',title:'继续下坡 → Baixa / Rossio',sub:'到12:50；不折返',place:'rossio',icon:'🚶'},
{iso:'2026-10-03T12:50:00+01:00',time:'12:50',title:'午饭',sub:'12:50–13:35；Baixa/Rossio灵活选，排队>15–20分钟就换',place:'rossio',icon:'🍽️'},
{iso:'2026-10-03T13:35:00+01:00',time:'13:35',title:'Baixa / Rossio → Cais do Sodré',sub:'方便连接即可',place:'cais',icon:'🚇'},
{iso:'2026-10-03T14:00:00+01:00',time:'~14:00',title:'Cais do Sodré → Belém',sub:'CP Cascais Line；周末班次临近再看',place:'cais',icon:'🚆'},
{iso:'2026-10-03T14:30:00+01:00',time:'14:30',title:'热罗尼莫斯修道院 Mosteiro dos Jerónimos',sub:'14:30–15:50 · 重点 · 入内参观',place:'jeronimos',icon:'⛪',core:true},
{iso:'2026-10-03T15:55:00+01:00',time:'15:55',title:'贝伦蛋挞 Pastéis de Belém',sub:'到16:20；排队长就外带或缩短停留',place:'pasteis',icon:'🥧'},
{iso:'2026-10-03T16:25:00+01:00',time:'16:25',title:'发现者纪念碑 Padrão dos Descobrimentos',sub:'外观到16:50；时间紧可取消',place:'padrao',icon:'🧭',buffer:true},
{iso:'2026-10-03T16:50:00+01:00',time:'16:50',title:'Belém 河岸步行',sub:'约25分钟；可压缩',place:'belem',icon:'🚶',buffer:true},
{iso:'2026-10-03T17:15:00+01:00',time:'17:15',title:'贝伦塔 Torre de Belém',sub:'外观到17:40；时间紧可取消',place:'belem',icon:'🗼',buffer:true},
{iso:'2026-10-03T17:40:00+01:00',time:'约17:40后',title:'Belém → ibis 酒店',sub:'火车 + 地铁；太累就 Uber。晚上吃饭后休息',place:'ibis',icon:'🚆'}]},
'1004':{label:'10/4 周日',subtitle:'市中心顺路游览 + 14:00 AP133',items:[
{iso:'2026-10-04T07:45:00+01:00',time:'07:45',title:'起床',sub:'10/3晚上已故意留空',place:'ibis',icon:'🌤️'},
{iso:'2026-10-04T08:00:00+01:00',time:'08:00',title:'ibis 自助早餐',sub:'08:00–08:40 · 已包含',place:'ibis',icon:'☕',core:true},
{iso:'2026-10-04T08:40:00+01:00',time:'08:40',title:'退房 + 寄存行李',sub:'到08:55；贵重物随身',place:'ibis',icon:'🧳',core:true},
{iso:'2026-10-04T09:00:00+01:00',time:'~09:00',title:'步行 → Praça de Espanha North Hall',sub:'South Hall施工期不依赖',place:'ibis',icon:'🚶'},
{iso:'2026-10-04T09:05:00+01:00',time:'~09:05',title:'Praça de Espanha → Terreiro do Paço',sub:'Blue Line direct',place:'comercio',icon:'🚇'},
{iso:'2026-10-04T09:25:00+01:00',time:'09:25',title:'商业广场 Praça do Comércio',sub:'09:25–09:40 · 时间紧可缩短',place:'comercio',icon:'🏛️',buffer:true},
{iso:'2026-10-04T09:40:00+01:00',time:'09:40',title:'奥古斯塔街 Rua Augusta',sub:'09:40–10:00；一路向北走到 Rossio',place:'augusta',icon:'🚶',buffer:true},
{iso:'2026-10-04T10:00:00+01:00',time:'10:00',title:'罗西欧广场 Rossio / Praça Dom Pedro IV',sub:'到10:15',place:'rossio',icon:'📍'},
{iso:'2026-10-04T10:15:00+01:00',time:'10:15',title:'Rossio → Largo do Carmo',sub:'有一些上坡',place:'carmo',icon:'🚶'},
{iso:'2026-10-04T10:30:00+01:00',time:'10:30',title:'卡尔莫修道院 Convento do Carmo（外观）',sub:'10:30–10:45；不进入',place:'carmo',icon:'🏚️'},
{iso:'2026-10-04T10:45:00+01:00',time:'10:45',title:'希亚多 Chiado / Rua Garrett / Camões',sub:'到11:10 · 慢走',place:'chiado',icon:'☕'},
{iso:'2026-10-04T11:10:00+01:00',time:'11:10',title:'简短午饭',sub:'11:10–11:40；三明治、咖啡或简单热食',place:'chiado',icon:'🥪'},
{iso:'2026-10-04T11:40:00+01:00',time:'11:40',title:'Baixa-Chiado → Praça de Espanha',sub:'蓝线直达；开始去车站',place:'ibis',icon:'🚇',core:true},
{iso:'2026-10-04T12:00:00+01:00',time:'12:00',title:'回 ibis 酒店取行李',sub:'12:15前完成',place:'ibis',icon:'🧳',core:true},
{iso:'2026-10-04T12:20:00+01:00',time:'~12:20',title:'Praça de Espanha → Santa Apolónia',sub:'蓝线直达；地铁异常时改 Uber/Bolt',place:'santa',icon:'🚇',core:true},
{iso:'2026-10-04T12:45:00+01:00',time:'~12:45',title:'抵达 Lisboa Santa Apolónia',sub:'洗手间 / 买水 / 看站台；预留充足时间',place:'santa',icon:'🚉',core:true},
{iso:'2026-10-04T13:20:00+01:00',time:'约13:20起',title:'准备上车',sub:'不要再离开车站',place:'santa',icon:'🎫'},
{iso:'2026-10-04T14:00:00+01:00',time:'14:00',title:'AP133 → 波尔图 Porto Campanhã',sub:'16:48到达 · 固定车次',place:'santa',icon:'🚄',core:true}]}}
;

const photos=[
{title:'商业广场 Praça do Comércio',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Praca%20do%20Comercio%20Lisbon.jpg',credit:'Iantomferry · CC BY-SA 3.0',source:'https://commons.wikimedia.org/wiki/File:Praca_do_Comercio_Lisbon.jpg'},
{title:'Rua Augusta Arch',src:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Arco_Triunfal_da_Rua_Augusta%2C_Plaza_del_Comercio%2C_Lisboa%2C_Portugal%2C_2012-05-12%2C_DD_02.JPG/2560px-Arco_Triunfal_da_Rua_Augusta%2C_Plaza_del_Comercio%2C_Lisboa%2C_Portugal%2C_2012-05-12%2C_DD_02.JPG',credit:'Wikimedia Commons',source:'https://commons.wikimedia.org/wiki/File:Arco_Triunfal_da_Rua_Augusta,_Plaza_del_Comercio,_Lisboa,_Portugal,_2012-05-12,_DD_02.JPG'},
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
function renderNow(){const now=new Date(),items=allTimedItems(),first=items[0],last=items[items.length-1],card=document.getElementById('nowCard');let label='出发前',title='里斯本行程已就绪',sub='10/2 U27628 23:00 抵达里斯本；下飞机后直接去 ibis Lisboa José Malhoa 休息。',item=null;if(now>=first.date&&now<=last.date){item=items.find(i=>i.date>=now)||last;label='下一步';title=`${item.time} · ${item.title}`;sub=item.sub}else if(now>last.date){label='行程完成';title='里斯本行程已结束';sub='下一站：波尔图 Porto。'}const actions=item?.place?`<div class="now-card__actions"><button class="action-btn action-btn--primary" data-now-place="${item.place}">地图定位</button><a class="action-btn" href="${googleMap(places.find(p=>p.id===item.place))}" target="_blank" rel="noopener">Google Maps</a></div>`:'';card.innerHTML=`<div class="now-card__label">${label}</div><h2>${title}</h2><p>${sub}</p>${actions}`;card.querySelector('[data-now-place]')?.addEventListener('click',e=>focusPlace(e.currentTarget.dataset.nowPlace))}
document.querySelectorAll('.day-tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.day-tab').forEach(b=>b.classList.remove('is-active'));btn.classList.add('is-active');const day=btn.dataset.day;if(day==='today'){const current=dayFromDate(new Date());renderTimeline(current?[current]:['1002','1003','1004'])}else renderTimeline([day]);fitDay(day)}));
window.addEventListener('online',()=>document.getElementById('offlineBadge').hidden=true);window.addEventListener('offline',()=>document.getElementById('offlineBadge').hidden=false);document.getElementById('offlineBadge').hidden=navigator.onLine;if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});renderPhotos();renderTimeline();renderNow();