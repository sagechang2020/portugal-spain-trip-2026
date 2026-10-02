const TRIP_YEAR=2026;
const places=[
{id:'lis-airport',n:'①',day:'1001',lat:38.7742,lng:-9.1342,name:'里斯本机场',local:'Humberto Delgado Airport · Lisbon Airport',time:'10/1周四 22:20',task:'抵达里斯本',icon:'✈️'},
{id:'ibis',n:'②',day:'1001',lat:38.737046,lng:-9.163156,name:'宜必思里斯本若泽马尔霍亚',local:'ibis Lisboa José Malhoa',time:'10/1–10/4住宿',task:'酒店 · Praça de Espanha附近',icon:'🏨'},
{id:'lidl',n:'③',day:'1002',lat:38.74009,lng:-9.16699,name:'Lidl Sete Rios',local:'Lidl Lisboa · Sete Rios',time:'10/2约13:05–13:35',task:'生活用品、饮料、零食；买完回酒店放下',icon:'🛒'},
{id:'comercio',n:'④',day:'1002',lat:38.7076,lng:-9.1365,name:'商业广场',local:'Praça do Comércio',time:'10/2约14:30–14:50',task:'河边慢逛',icon:'🏛️'},
{id:'augusta',n:'⑤',day:'1002',lat:38.7105,lng:-9.1372,name:'奥古斯塔街',local:'Rua Augusta',time:'10/2约14:50–15:10',task:'一路向北走',icon:'🚶'},
{id:'rossio',n:'⑥',day:'1002',lat:38.7139,lng:-9.1394,name:'罗西欧广场',local:'Rossio / Praça Dom Pedro IV',time:'10/2约16:00–16:20；10/3午饭区域',task:'市中心顺路节点',icon:'📍'},
{id:'carmo',n:'⑦',day:'1002',lat:38.7122,lng:-9.1407,name:'卡尔莫广场 / 修道院外观',local:'Largo do Carmo / Convento do Carmo',time:'10/2约16:40–17:00',task:'外观即可',icon:'🏚️'},
{id:'chiado',n:'⑧',day:'1002',lat:38.7108,lng:-9.1422,name:'希亚多',local:'Chiado / Rua Garrett / Camões',time:'10/2约17:00以后',task:'慢逛、咖啡；20:00后附近随意找晚饭',icon:'☕'},
{id:'castle',n:'⑨',day:'1003',lat:38.7139,lng:-9.1335,name:'圣乔治城堡',local:'Castelo de São Jorge',time:'10/3 10:00–11:30',task:'重点景点 · 入内参观',icon:'🏰'},
{id:'portas',n:'⑩',day:'1003',lat:38.7118,lng:-9.1303,name:'太阳门观景台',local:'Miradouro das Portas do Sol',time:'10/3约11:35–11:50',task:'顺路下坡',icon:'🌇'},
{id:'luzia',n:'⑪',day:'1003',lat:38.7116,lng:-9.1307,name:'圣卢西亚观景台',local:'Miradouro de Santa Luzia',time:'10/3约11:50–12:10',task:'拍照停留',icon:'📷'},
{id:'se',n:'⑫',day:'1003',lat:38.7098,lng:-9.1335,name:'里斯本主教座堂',local:'Sé de Lisboa',time:'10/3约12:10–12:30',task:'短停 / 外观区域为主',icon:'⛪'},
{id:'cais',n:'⑬',day:'1003',lat:38.7061,lng:-9.1443,name:'Cais do Sodré 火车站',local:'Cais do Sodré railway station',time:'10/3约14:00',task:'CP Cascais线 → Belém',icon:'🚆'},
{id:'jeronimos',n:'⑭',day:'1003',lat:38.6979,lng:-9.2066,name:'热罗尼莫斯修道院',local:'Mosteiro dos Jerónimos',time:'10/3约14:30–15:50',task:'重点景点 · 入内参观',icon:'⛪'},
{id:'pasteis',n:'⑮',day:'1003',lat:38.6975,lng:-9.2032,name:'贝伦蛋挞',local:'Pastéis de Belém',time:'10/3约15:55–16:20',task:'排队长就外带或缩短停留',icon:'🥧'},
{id:'padrao',n:'⑯',day:'1003',lat:38.6939,lng:-9.2058,name:'发现者纪念碑',local:'Padrão dos Descobrimentos',time:'10/3约16:25–16:50',task:'外观；时间紧可取消',icon:'🧭'},
{id:'belem',n:'⑰',day:'1003',lat:38.6916,lng:-9.2160,name:'贝伦塔',local:'Torre de Belém',time:'10/3约17:15–17:40',task:'外观；时间紧可取消',icon:'🗼'},
{id:'purex',n:'⑱',day:'1003',lat:38.711,lng:-9.144389,name:'Purex Clube',local:'Purex Clube · R. das Salgadeiras 28',time:'10/3约22:00',task:'第一目标；合适就直接待着',icon:'🍸'},
{id:'friends',n:'⑲',day:'1003',lat:38.7136803,lng:-9.1441431,name:'Friends Bairro Alto',local:'Travessa da Água da Flor 17',time:'10/3夜间备用',task:'Purex不合适时第二选择',icon:'🍹'},
{id:'bar106',n:'⑳',day:'1003',lat:38.71525,lng:-9.15074,name:'Bar 106',local:'Rua de São Marçal 106',time:'10/3夜间备用',task:'第三选择',icon:'🍷'},
{id:'santa',n:'㉑',day:'1004',lat:38.7141,lng:-9.1220,name:'圣阿波隆尼亚站',local:'Lisboa Santa Apolónia',time:'10/4约10:50–11:00抵达；11:30发车',task:'IC621 → Porto Campanhã 14:43',icon:'🚄'}
];

const schedules={
'1001':{label:'10/1 周四',subtitle:'抵达里斯本 · 机场 → ibis → 休息',items:[
{iso:'2026-10-01T20:35:00+01:00',time:'20:35',title:'丰沙尔 FNC 起飞',sub:'easyJet U27628 → LIS 22:20',icon:'✈️',core:true},
{iso:'2026-10-01T22:20:00+01:00',time:'22:20',title:'里斯本机场 Lisbon Airport',sub:'抵达后取行李，直接去酒店',place:'lis-airport',icon:'🧳',core:true},
{iso:'2026-10-01T23:00:00+01:00',time:'约22:50–23:10',title:'机场 → ibis Lisboa José Malhoa',sub:'Uber / 正规出租车直达',place:'ibis',icon:'🚕',core:true},
{time:'到店后',title:'办理入住 / 洗漱 / 睡觉',sub:'好好休息，第二天中午再出门',place:'ibis',icon:'🏨',core:true}]},
'1002':{label:'10/2 周五',subtitle:'生活用品 + 里斯本市中心慢逛 + 晚饭',items:[
{iso:'2026-10-02T13:00:00+01:00',time:'13:00',title:'从 ibis 出门',sub:'今天不赶，慢慢开始',place:'ibis',icon:'🌤️'},
{iso:'2026-10-02T13:05:00+01:00',time:'约13:05',title:'Lidl Sete Rios / 附近生活用品',sub:'买拖鞋、饮料、零食、洗漱用品等；没有合适拖鞋再看附近百货',place:'lidl',icon:'🛒',core:true},
{iso:'2026-10-02T13:35:00+01:00',time:'约13:35',title:'回酒店放东西',sub:'轻装再出发，不拎购物袋逛市区',place:'ibis',icon:'🏨'},
{iso:'2026-10-02T14:00:00+01:00',time:'约14:00',title:'Praça de Espanha → Terreiro do Paço',sub:'蓝线直达，去商业广场',place:'comercio',icon:'🚇'},
{iso:'2026-10-02T14:30:00+01:00',time:'14:30',title:'商业广场 Praça do Comércio',sub:'到14:50 · 河边、凯旋门外观，慢慢拍照',place:'comercio',icon:'🏛️'},
{iso:'2026-10-02T14:50:00+01:00',time:'14:50',title:'奥古斯塔街 Rua Augusta',sub:'到15:10 · 顺路一路向北',place:'augusta',icon:'🚶'},
{iso:'2026-10-02T15:10:00+01:00',time:'约15:10',title:'Baixa / Rossio 迟午饭',sub:'吃到16:00左右；看着顺眼就进，排队太久就换',place:'rossio',icon:'🍽️'},
{iso:'2026-10-02T16:00:00+01:00',time:'16:00',title:'罗西欧广场 Rossio',sub:'到16:20 · 随便逛逛',place:'rossio',icon:'📍'},
{iso:'2026-10-02T16:20:00+01:00',time:'16:20',title:'Rossio → Largo do Carmo',sub:'有一点上坡，慢慢走',place:'carmo',icon:'🚶'},
{iso:'2026-10-02T16:40:00+01:00',time:'16:40',title:'卡尔莫修道院 Convento do Carmo',sub:'到17:00 · 只看外观',place:'carmo',icon:'🏚️'},
{iso:'2026-10-02T17:00:00+01:00',time:'17:00以后',title:'希亚多 Chiado / Rua Garrett / Camões',sub:'逛店、咖啡、喝东西，时间完全放松',place:'chiado',icon:'☕',core:true},
{iso:'2026-10-02T20:00:00+01:00',time:'20:00以后',title:'Chiado / Baixa 附近晚饭',sub:'不锁死餐厅，继续溜达着看；想吃的时候就找附近合适的店',place:'chiado',icon:'🍽️'},
{time:'饭后',title:'回 ibis 休息',sub:'今天没有必须完成的晚间项目',place:'ibis',icon:'🏨'}]},
'1003':{label:'10/3 周六',subtitle:'圣乔治城堡 + Alfama + Belém + Bairro Alto夜晚',items:[
{iso:'2026-10-03T08:20:00+01:00',time:'~08:20',title:'起床 / 洗漱',sub:'不用特别早起',place:'ibis',icon:'🌤️'},
{iso:'2026-10-03T08:40:00+01:00',time:'08:40',title:'ibis 自助早餐',sub:'08:40–09:20',place:'ibis',icon:'☕',core:true},
{iso:'2026-10-03T09:20:00+01:00',time:'09:20',title:'最终准备 / 叫车',sub:'约09:35出发',place:'ibis',icon:'🎒'},
{iso:'2026-10-03T09:35:00+01:00',time:'~09:35',title:'ibis → 圣乔治城堡 Castelo de São Jorge',sub:'Uber/Bolt，直接上坡保存体力',place:'castle',icon:'🚕'},
{iso:'2026-10-03T10:00:00+01:00',time:'10:00',title:'圣乔治城堡 Castelo de São Jorge',sub:'10:00–11:30 · 重点 · 入内参观',place:'castle',icon:'🏰',core:true},
{iso:'2026-10-03T11:35:00+01:00',time:'11:35',title:'太阳门观景台 Miradouro das Portas do Sol',sub:'11:35–11:50 · 顺路短停',place:'portas',icon:'🌇'},
{iso:'2026-10-03T11:50:00+01:00',time:'11:50',title:'圣卢西亚观景台 Miradouro de Santa Luzia',sub:'到12:10 · 拍照停留',place:'luzia',icon:'📷'},
{iso:'2026-10-03T12:10:00+01:00',time:'12:10',title:'里斯本主教座堂 Sé de Lisboa',sub:'到12:30 · 外观区域为主',place:'se',icon:'⛪'},
{iso:'2026-10-03T12:30:00+01:00',time:'12:30',title:'继续下坡 → Baixa / Rossio',sub:'不折返',place:'rossio',icon:'🚶'},
{iso:'2026-10-03T12:50:00+01:00',time:'12:50',title:'午饭',sub:'12:50–13:35；Baixa/Rossio灵活选，排队久就换',place:'rossio',icon:'🍽️'},
{iso:'2026-10-03T13:35:00+01:00',time:'13:35',title:'下城 → Cais do Sodré',sub:'方便连接即可',place:'cais',icon:'🚇'},
{iso:'2026-10-03T14:00:00+01:00',time:'~14:00',title:'Cais do Sodré → 贝伦 Belém',sub:'CP Cascais Line',place:'cais',icon:'🚆'},
{iso:'2026-10-03T14:30:00+01:00',time:'14:30',title:'热罗尼莫斯修道院 Mosteiro dos Jerónimos',sub:'14:30–15:50 · 重点 · 入内参观',place:'jeronimos',icon:'⛪',core:true},
{iso:'2026-10-03T15:55:00+01:00',time:'15:55',title:'贝伦蛋挞 Pastéis de Belém',sub:'到16:20；排队长就外带或缩短停留',place:'pasteis',icon:'🥧'},
{iso:'2026-10-03T16:25:00+01:00',time:'16:25',title:'发现者纪念碑 Padrão dos Descobrimentos',sub:'外观到16:50；时间紧可取消',place:'padrao',icon:'🧭',buffer:true},
{iso:'2026-10-03T16:50:00+01:00',time:'16:50',title:'贝伦 Belém 河岸步行',sub:'慢慢走向贝伦塔',place:'belem',icon:'🚶',buffer:true},
{iso:'2026-10-03T17:15:00+01:00',time:'17:15',title:'贝伦塔 Torre de Belém',sub:'外观到17:40；时间紧可取消',place:'belem',icon:'🗼',buffer:true},
{iso:'2026-10-03T17:40:00+01:00',time:'约17:40后',title:'Belém → ibis',sub:'火车 + 地铁；太累就 Uber',place:'ibis',icon:'🚆'},
{iso:'2026-10-03T18:30:00+01:00',time:'18:30–20:45',title:'酒店休息 + 晚上准备',sub:'洗澡、换衣服、化妆、休息；这段不塞任何景点',place:'ibis',icon:'💄',core:true},
{iso:'2026-10-03T20:45:00+01:00',time:'约20:45',title:'ibis → Bairro Alto',sub:'建议 Uber/Bolt，省体力',place:'purex',icon:'🚕'},
{iso:'2026-10-03T21:10:00+01:00',time:'约21:10',title:'Bairro Alto 晚饭',sub:'附近灵活选，吃完再去酒吧',place:'purex',icon:'🍽️'},
{iso:'2026-10-03T22:00:00+01:00',time:'22:00',title:'Purex Clube',sub:'第一目标；开门且感觉合适就直接待着',place:'purex',icon:'🍸',core:true},
{time:'备用 ②',title:'Friends Bairro Alto',sub:'Purex没开、太满或不喜欢时再去',place:'friends',icon:'🍹',buffer:true},
{time:'备用 ③',title:'Bar 106',sub:'第三选择，不需要三家都去',place:'bar106',icon:'🍷',buffer:true},
{time:'结束后',title:'回 ibis',sub:'夜间直接 Uber/Bolt 最省事',place:'ibis',icon:'🚕'}]},
'1004':{label:'10/4 周日',subtitle:'早餐 + 退房 + 11:30 IC621去波尔图',items:[
{iso:'2026-10-04T08:45:00+01:00',time:'约08:45',title:'起床 / 洗漱',sub:'周六晚出去后不用过早起床',place:'ibis',icon:'🌤️'},
{iso:'2026-10-04T09:00:00+01:00',time:'09:00',title:'ibis 自助早餐',sub:'吃到09:40左右',place:'ibis',icon:'☕',core:true},
{iso:'2026-10-04T09:40:00+01:00',time:'09:40',title:'回房间最后收拾',sub:'到10:10左右',place:'ibis',icon:'🧳'},
{iso:'2026-10-04T10:10:00+01:00',time:'约10:10',title:'退房',sub:'带全部行李直接去车站',place:'ibis',icon:'🏨',core:true},
{iso:'2026-10-04T10:20:00+01:00',time:'约10:20',title:'步行 → Praça de Espanha',sub:'带行李，别赶',place:'ibis',icon:'🚶'},
{iso:'2026-10-04T10:25:00+01:00',time:'约10:25',title:'Praça de Espanha → Santa Apolónia',sub:'蓝线直达；异常时改 Uber/Bolt',place:'santa',icon:'🚇',core:true},
{iso:'2026-10-04T10:55:00+01:00',time:'约10:50–11:00',title:'抵达 Lisboa Santa Apolónia',sub:'看电子屏、买水、洗手间',place:'santa',icon:'🚉',core:true},
{iso:'2026-10-04T11:15:00+01:00',time:'11:15以后',title:'准备上车',sub:'不再离开车站区域',place:'santa',icon:'🎫'},
{iso:'2026-10-04T11:30:00+01:00',time:'11:30',title:'IC621 → 波尔图 Porto Campanhã',sub:'14:43抵达',place:'santa',icon:'🚄',core:true}]}}

const photos=[
{title:'商业广场 Praça do Comércio',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Praca%20do%20Comercio%20Lisbon.jpg',credit:'Iantomferry · CC BY-SA 3.0',source:'https://commons.wikimedia.org/wiki/File:Praca_do_Comercio_Lisbon.jpg'},
{title:'奥古斯塔凯旋门 Arco da Rua Augusta',src:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Arco_Triunfal_da_Rua_Augusta%2C_Plaza_del_Comercio%2C_Lisboa%2C_Portugal%2C_2012-05-12%2C_DD_02.JPG/2560px-Arco_Triunfal_da_Rua_Augusta%2C_Plaza_del_Comercio%2C_Lisboa%2C_Portugal%2C_2012-05-12%2C_DD_02.JPG',credit:'Wikimedia Commons',source:'https://commons.wikimedia.org/wiki/File:Arco_Triunfal_da_Rua_Augusta,_Plaza_del_Comercio,_Lisboa,_Portugal,_2012-05-12,_DD_02.JPG'},
{title:'圣乔治城堡 Castelo de São Jorge',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Castelo%20de%20S%C3%A3o%20Jorge%20-%20Lisbon.jpg',credit:'Ø11 · CC BY-SA 4.0',source:'https://commons.wikimedia.org/wiki/File:Castelo_de_S%C3%A3o_Jorge_-_Lisbon.jpg'},
{title:'圣卢西亚观景台 Miradouro de Santa Luzia',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Miradouro%20de%20Santa%20Luzia.jpg',credit:'GiacomoAntonini1760 · CC BY-SA 4.0',source:'https://commons.wikimedia.org/wiki/File:Miradouro_de_Santa_Luzia.jpg'},
{title:'热罗尼莫斯修道院 Mosteiro dos Jerónimos',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Mosteiro%20dos%20Jer%C3%B3nimos%20-Lisboa.jpg',credit:'Ana Correia 28 · CC BY-SA 4.0',source:'https://commons.wikimedia.org/wiki/File:Mosteiro_dos_Jer%C3%B3nimos_-Lisboa.jpg'},
{title:'热罗尼莫斯修道院回廊 Jerónimos Cloister',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Mosteiro%20dos%20J%C3%A9ronimos.%20The%20Cloister.jpg',credit:'MFREYNAUD51 · CC BY-SA 4.0',source:'https://commons.wikimedia.org/wiki/File:Mosteiro_dos_J%C3%A9ronimos._The_Cloister.jpg'},
{title:'发现者纪念碑 Padrão dos Descobrimentos',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Padr%C3%A3o%20dos%20Descobrimentos%2C%20Lisboa.jpg',credit:'Bene Riobó · CC BY-SA 4.0',source:'https://commons.wikimedia.org/wiki/File:Padr%C3%A3o_dos_Descobrimentos,_Lisboa.jpg'},
{title:'贝伦塔 Torre de Belém',src:'https://commons.wikimedia.org/wiki/Special:FilePath/Torre%20de%20Bel%C3%A9m-%20Lisbon.jpg',credit:'Ana Correia 28 · CC BY-SA 4.0',source:'https://commons.wikimedia.org/wiki/File:Torre_de_Bel%C3%A9m-_Lisbon.jpg'}
];

const map=L.map('map',{zoomControl:true}).setView([38.71,-9.16],12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap contributors'}).addTo(map);
const markers={};
function dayClass(day){return day==='1002'||day==='1001'?'marker-1002':day==='1003'?'marker-1003':'marker-1004'}
function appleMap(p){return `https://maps.apple.com/?ll=${p.lat},${p.lng}&q=${encodeURIComponent(p.local)}`}
function googleMap(p){return `https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`}
function uber(p){return `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[latitude]=${p.lat}&dropoff[longitude]=${p.lng}&dropoff[nickname]=${encodeURIComponent(p.local)}`}
const uberIds=new Set(['lis-airport','ibis','castle','purex','friends','bar106','santa']);
places.forEach(p=>{
  const icon=L.divIcon({className:'leaflet-div-icon',html:`<div class="num-marker ${dayClass(p.day)}">${p.n.split('/')[0]}</div>`,iconSize:[30,30],iconAnchor:[15,15]});
  const popup=`<div class="popup-title">${p.icon} ${p.name}<br>${p.local}</div><div class="popup-sub">${p.time}<br>${p.task}</div><div class="popup-actions"><a href="${appleMap(p)}" target="_blank" rel="noopener">Apple Maps</a><a href="${googleMap(p)}" target="_blank" rel="noopener">Google Maps</a>${uberIds.has(p.id)?`<a href="${uber(p)}" target="_blank" rel="noopener">叫 Uber</a>`:''}</div>`;
  markers[p.id]=L.marker([p.lat,p.lng],{icon}).addTo(map).bindPopup(popup,{maxWidth:290});
});
const allBounds=L.latLngBounds(places.map(p=>[p.lat,p.lng]));
map.fitBounds(allBounds.pad(.06));
document.getElementById('fitMapBtn').addEventListener('click',()=>map.fitBounds(allBounds.pad(.06)));

function renderPhotos(){document.getElementById('photoGrid').innerHTML=photos.map(p=>`<figure class="photo-card"><img src="${p.src}" alt="${p.title}" loading="lazy" referrerpolicy="no-referrer"><figcaption><span>${p.title}</span><a class="photo-credit" href="${p.source}" target="_blank" rel="noopener">${p.credit}</a></figcaption></figure>`).join('')}
function renderTimeline(days=['1001','1002','1003','1004']){const html=days.map(d=>{const s=schedules[d];const items=s.items.map(it=>`<div class="timeline-item${it.core?' is-core':''}${it.buffer?' is-buffer':''}" ${it.place?`data-place="${it.place}"`:''}><div class="timeline-time">${it.time}</div><div class="timeline-main"><b>${it.title}</b><small>${it.sub}</small></div><div class="timeline-icon">${it.icon||''}</div></div>`).join('');return `<div class="day-block"><div class="day-heading"><h3>${s.label}</h3><span>${s.subtitle}</span></div><div class="timeline-list">${items}</div></div>`}).join('');document.getElementById('timeline').innerHTML=html;document.querySelectorAll('.timeline-item[data-place]').forEach(el=>el.addEventListener('click',()=>focusPlace(el.dataset.place)))}
function focusPlace(id){const p=places.find(x=>x.id===id);if(!p)return;map.setView([p.lat,p.lng],15,{animate:true});markers[id]?.openPopup();document.querySelector('.map-section')?.scrollIntoView({behavior:'smooth',block:'start'})}
function fitDay(day){if(day==='today'){map.fitBounds(allBounds.pad(.06));return}const ps=places.filter(p=>p.day===day||((day==='1002'||day==='1003'||day==='1004')&&p.id==='ibis')||(day==='1001'&&['lis-airport','ibis'].includes(p.id)));if(ps.length)map.fitBounds(L.latLngBounds(ps.map(p=>[p.lat,p.lng])).pad(.12))}
function dayFromDate(now){const fmt=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Lisbon',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);if(fmt==='2026-10-01')return'1001';if(fmt==='2026-10-02')return'1002';if(fmt==='2026-10-03')return'1003';if(fmt==='2026-10-04')return'1004';return null}
function allTimedItems(){return Object.entries(schedules).flatMap(([day,s])=>s.items.filter(i=>i.iso).map(i=>({...i,day,date:new Date(i.iso)}))).sort((a,b)=>a.date-b.date)}
function renderNow(){const now=new Date(),items=allTimedItems(),first=items[0],last=items[items.length-1],card=document.getElementById('nowCard');let label='出发前',title='里斯本行程已就绪',sub='打开“现在”会自动显示下一步。',item=null;if(now>=first.date&&now<=last.date){item=items.find(i=>i.date>=now)||last;label='下一步';title=`${item.time} · ${item.title}`;sub=item.sub}else if(now>last.date){label='行程完成';title='里斯本行程已结束';sub='下一站：波尔图 Porto。'}const actions=item?.place?`<div class="now-card__actions"><button class="action-btn action-btn--primary" data-now-place="${item.place}">地图定位</button><a class="action-btn" href="${googleMap(places.find(p=>p.id===item.place))}" target="_blank" rel="noopener">Google Maps</a></div>`:'';card.innerHTML=`<div class="now-card__label">${label}</div><h2>${title}</h2><p>${sub}</p>${actions}`;card.querySelector('[data-now-place]')?.addEventListener('click',e=>focusPlace(e.currentTarget.dataset.nowPlace))}
document.querySelectorAll('.day-tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.day-tab').forEach(b=>b.classList.remove('is-active'));btn.classList.add('is-active');const day=btn.dataset.day;if(day==='today'){const current=dayFromDate(new Date());renderTimeline(current?[current]:['1001','1002','1003','1004'])}else renderTimeline([day]);fitDay(day)}));
window.addEventListener('online',()=>document.getElementById('offlineBadge').hidden=true);window.addEventListener('offline',()=>document.getElementById('offlineBadge').hidden=false);document.getElementById('offlineBadge').hidden=navigator.onLine;if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});renderPhotos();renderTimeline();renderNow();