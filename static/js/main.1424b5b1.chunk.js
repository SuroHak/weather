(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{26:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),i=n.n(a),c=n(9),s=n.n(c),u=(n(26),n(2)),o=n.n(u),d=n(3),l=n(4),h=n(17),p=n(18),m="Weather",f=1,v=window.indexedDB,b="DataStore",j=new(function(){function e(){Object(h.a)(this,e)}return Object(p.a)(e,[{key:"getStore",value:function(){var t=Object(d.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.openDB();case 2:if(!(n=t.sent)){t.next=6;break}return r=n.transaction(b,"readwrite"),t.abrupt("return",r.objectStore(b));case 6:return t.abrupt("return",null);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getAllData",value:function(){var e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getStore();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return",null);case 5:return n=t.getAll(),e.abrupt("return",new Promise((function(e){n.onsuccess=function(){e(n.result)}})));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"addData",value:function(){var e=Object(d.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getStore();case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return");case 5:n.add(t);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"removeData",value:function(){var e=Object(d.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getStore();case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return");case 5:n.delete(t);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"removeAllData",value:function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getStore();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:t.clear();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"putData",value:function(){var e=Object(d.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getStore();case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return");case 5:n.put(t);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getData",value:function(){var e=Object(d.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getStore();case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return",null);case 5:return r=n.get(t),e.abrupt("return",new Promise((function(e){r.onsuccess=function(){return e(r.result)},r.onerror=function(){return e(null)}})));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}],[{key:"openDB",value:function(){return new Promise((function(e){if(v){var t=v.open(m,f);t.onupgradeneeded=function(){t.result.createObjectStore(b,{keyPath:"key"})},t.onsuccess=function(){e(t.result)},t.onerror=function(){if(!t.result)return null}}}))}}]),e}()),y=n(6),w=n(15),g=n(5),x=n(7);var O,k,N,S=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1?arguments[1]:void 0;return t.hasOwnProperty(r.type)?t[r.type](n,r):n}},L="SET_ACTIVE_LANG",C="ADD_CITY",E="SET_CURRENT_WEATHER",D="http://api.openweathermap.org/",_="2e11403a57273bd016db99e5e96d99d1",T=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,r,a,i,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.cityName,r=t.unit,a=void 0===r?"metric":r,i=t.isStore,e.prev=1,e.next=4,fetch("".concat(D,"/data/2.5/forecast?q=").concat(n,"&appid=").concat(_,"&units=").concat(a));case 4:return c=e.sent,e.next=7,c.json();case 7:if("404"!==(s=e.sent).cod){e.next=10;break}throw new Error(s.message);case 10:return i&&H({type:E,currentWeather:s}),e.next=13,j.addData(Object(g.a)({key:n},s));case 13:return e.abrupt("return",s);case 16:throw e.prev=16,e.t0=e.catch(1),new Error(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,r,a,i,c,s,u,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.lat,r=t.lon,a=t.unit,i=void 0===a?"metric":a,c=t.isStore,e.prev=1,e.next=4,fetch("".concat(D,"/data/2.5/forecast?lat=").concat(n,"&lon=").concat(r,"&appid=").concat(_,"&units=").concat(i));case 4:return s=e.sent,e.next=7,s.json();case 7:if("404"!==(u=e.sent).cod){e.next=10;break}throw new Error(u.message);case 10:return c&&(d={id:Date.now(),name:u.city.name,type:u.city.name.toLowerCase()},H({type:C,cities:{en:d,ru:d}}),H({type:E,currentWeather:u})),e.next=13,j.addData(Object(g.a)({key:u.city.name},u));case 13:return e.abrupt("return",u);case 16:throw e.prev=16,e.t0=e.catch(1),new Error(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.coords,r=n.latitude,a=n.longitude,e.next=3,W({lat:r,lon:a,isStore:!0});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n,r,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Y(),n=t.activeLang,r=t.cities,a=r[n][0].type,e.next=4,j.getData(a);case 4:if(!(i=e.sent)){e.next=8;break}return H({type:E,currentWeather:i}),e.abrupt("return");case 8:return e.next=10,T({cityName:a,isStore:!0});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return"http://openweathermap.org/img/wn/".concat(e,"@").concat(t,"x.png")};!function(e){e.moscow="Moscow",e.london="London",e.newYork="New York"}(O||(O={})),function(e){e.ru="ru",e.en="en"}(k||(k={}));var R={currentWeather:null,activeCity:null,activeLang:"en",cities:{en:[{id:1,name:"Moscow",type:"moscow"},{id:2,name:"London",type:"london"},{id:3,name:"New-York",type:"new york"}],ru:[{id:1,name:"\u041c\u043e\u0441\u043a\u0432\u0430",type:"moscow"},{id:2,name:"\u041b\u043e\u043d\u0434\u043e\u043d",type:"london"},{id:3,name:"\u041d\u044c\u044e-\u0419\u043e\u0440\u043a",type:"new york"}]}},B=S(R,(N={},Object(y.a)(N,E,(function(e,t){return Object(g.a)(Object(g.a)({},e),{},{currentWeather:t.currentWeather,activeCity:t.currentWeather.city.name.toLowerCase()})})),Object(y.a)(N,"SET_ACTIVE_CITY",(function(e,t){return Object(g.a)(Object(g.a)({},e),{},{activeCity:t.activeCity})})),Object(y.a)(N,L,(function(e,t){return Object(g.a)(Object(g.a)({},e),{},{activeLang:t.activeLang})})),Object(y.a)(N,C,(function(e,t){var n=[].concat(Object(w.a)(e.cities.en),[t.cities.en]),r=[].concat(Object(w.a)(e.cities.ru),[t.cities.ru]);return Object(g.a)(Object(g.a)({},e),{},{cities:{en:n,ru:r}})})),Object(y.a)(N,"RESET_STATE",(function(){return R})),N)),I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.b,V=Object(x.c)(B,I()),Y=V.getState,H=V.dispatch,U=l.c,G=V,J=n(19),X=n.n(J),q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:X.a;return U(e,t)},F=[{id:1,type:"ru",name:"RU"},{id:2,type:"en",name:"EN"}],z=function(){var e=Object(l.b)(),t=q((function(e){return e.activeLang}));return Object(r.jsx)("div",{className:"languages-container",children:F.map((function(n){return Object(r.jsx)("div",{className:"".concat(t===n.type?"active-lang":""),onClick:function(){return e({type:L,activeLang:n.type})},children:n.name},"lang-".concat(n.id))}))})},K=n(20),Q={en:[{id:10,name:"Paris",type:"pairs"},{id:11,name:"Berlin",type:"berlin"},{id:12,name:"Madrid",type:"madrid"},{id:13,name:"Barcelona",type:"barcelona"},{id:14,name:"Vienna",type:"vienna"},{id:15,name:"Amsterdam",type:"amsterdam"},{id:16,name:"Rome",type:"rome"},{id:17,name:"Helsinki",type:"helsinki"},{id:18,name:"Oslo",type:"oslo"},{id:19,name:"Lisbon",type:"lisbon"}],ru:[{id:10,name:"\u041f\u0430\u0440\u0438\u0436",type:"pairs"},{id:11,name:"\u0411\u0435\u0440\u043b\u0438\u043d",type:"berlin"},{id:12,name:"\u041c\u0430\u0434\u0440\u0438\u0434",type:"madrid"},{id:13,name:"\u0411\u0430\u0440\u0441\u0435\u043b\u043e\u043d\u0430",type:"barcelona"},{id:14,name:"\u0412\u0435\u043d\u0430",type:"vienna"},{id:15,name:"\u0410\u043c\u0441\u0442\u0435\u0440\u0434\u0430\u043c",type:"amsterdam"},{id:16,name:"\u0420\u0438\u043c",type:"rome"},{id:17,name:"\u0425\u0435\u043b\u044c\u0441\u0438\u043d\u043a\u0438",type:"helsinki"},{id:18,name:"\u041e\u0441\u043b\u043e",type:"oslo"},{id:19,name:"\u041b\u0438\u0441\u0441\u0430\u0431\u043e\u043d",type:"lisbon"}]},Z={ru:"\u0414\u043e\u0431. \u0433\u043e\u0440\u043e\u0434",en:"Add city"},$=function(){var e=Object(l.b)(),t=q((function(e){return{activeLang:e.activeLang,cities:e.cities}})),n=t.activeLang,i=t.cities,c=Object(a.useState)(""),s=Object(K.a)(c,2),u=s[0],h=s[1],p=function(){var t=Object(d.a)(o.a.mark((function t(n){var r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((r={en:Q.en.find((function(e){return e.id===n})),ru:Q.ru.find((function(e){return e.id===n}))})&&r.en){t.next=3;break}return t.abrupt("return");case 3:return i.en.find((function(e){return e.id===n}))||e({type:C,cities:r}),t.next=6,j.getData(r.en.type);case 6:if(!(a=t.sent)){t.next=11;break}return e({type:E,currentWeather:a}),h(""),t.abrupt("return");case 11:return t.next=13,T({cityName:r.en.type,isStore:!0});case 13:h("");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"search-container",children:[Object(r.jsx)("input",{type:"text",value:u,placeholder:Z[n],onChange:function(e){return h(e.target.value)}}),Object(r.jsx)("div",{className:"dropdown-cities",hidden:!u.length,children:u.length&&Q[n]?Q[n].filter((function(e){return e.name.toLowerCase().includes(u)})).map((function(e){var t=e.name,n=(e.type,e.id);return Object(r.jsx)("div",{onClick:Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p(n));case 1:case"end":return e.stop()}}),e)}))),children:t},"city-".concat(n))})):null})]})},ee=function(){var e=Object(l.b)(),t=q((function(e){return{activeCity:e.activeCity,activeLang:e.activeLang,cities:e.cities}})),n=t.activeCity,a=t.activeLang,i=t.cities,c=function(){var t=Object(d.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.getData(n);case 2:if(!(r=t.sent)){t.next=6;break}return e({type:E,currentWeather:r}),t.abrupt("return");case 6:return t.next=8,T({cityName:n,isStore:!0});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"cities-main",children:[Object(r.jsx)($,{}),Object(r.jsx)("div",{className:"cities",children:i[a]&&i[a].map((function(e){var t=e.name,a=e.id,i=e.type;return Object(r.jsx)("div",{className:"citi-tab ".concat(n===i?"active-city":""),onClick:Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c(i));case 1:case"end":return e.stop()}}),e)}))),children:t},"city-".concat(a))}))}),Object(r.jsx)(z,{})]})},te=n.p+"static/media/loading.633c8ffd.svg",ne=function(){return Object(r.jsx)("div",{className:"loading-container",children:Object(r.jsx)("img",{src:te,alt:"loading"})})},re=function(e){var t=e.weathers;return Object(r.jsx)("div",{className:"weather-list",children:t.map((function(e){return Object(r.jsxs)("div",{className:"one-weather",children:[Object(r.jsx)("div",{className:"weather-date weather-list-item",children:e.dt_txt.slice(0,-3)}),Object(r.jsxs)("div",{className:"weather-unit weather-list-item",children:[Math.round(e.main.temp),"\xb0C",Object(r.jsx)("img",{src:M(e.weather[0].icon),alt:"icon",draggable:!1})]}),Object(r.jsxs)("div",{className:"weather-feels weather-list-item",children:[Math.round(e.main.feels_like),"\xb0C"]}),Object(r.jsxs)("div",{className:"weather-cloudiness weather-list-item",children:[e.clouds.all," %"]}),Object(r.jsxs)("div",{className:"weather-visibility weather-list-item",children:[e.visibility/1e3," km"]}),Object(r.jsxs)("div",{className:"weather-sea-level weather-list-item",children:[e.main.sea_level," hPa"]}),Object(r.jsxs)("div",{className:"weather-ground-level weather-list-item",children:[e.main.grnd_level," hPa"]}),Object(r.jsxs)("div",{className:"weather-humidity weather-list-item",children:[e.main.humidity," %"]}),Object(r.jsxs)("div",{className:"weather-wind-speed weather-list-item",children:[e.wind.speed," m/s"]}),Object(r.jsxs)("div",{className:"weather-wind-deg weather-list-item",children:[e.wind.deg,"\xb0"]})]},e.dt_txt)}))})},ae={en:[{id:1,name:"Date",height:20},{id:2,name:"Temperature",height:40},{id:3,name:"Feels Like",height:20},{id:4,name:"Cloudiness",height:22},{id:5,name:"Visibility",height:20},{id:6,name:"Sea Lvl.",height:20},{id:7,name:"Ground Lvl.",height:20},{id:8,name:"Humidity",height:20},{id:9,name:"Wind Speed",height:20},{id:10,name:"Wind Dir.",height:20}],ru:[{id:1,name:"\u0414\u0430\u0442\u0430",height:20},{id:2,name:"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430",height:40},{id:3,name:"\u041e\u0449\u0443\u0449. \u043a\u0430\u043a",height:20},{id:4,name:"\u041e\u0431\u043b\u0430\u0447\u043d\u043e\u0441\u0442\u044c",height:22},{id:5,name:"\u0412\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u044c",height:20},{id:6,name:"\u0423\u0440. \u043c\u043e\u0440\u044f",height:20},{id:7,name:"\u041d\u0438\u0436\u043d\u0438\u0439 \u0443\u0440.",height:20},{id:8,name:"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c",height:20},{id:9,name:"\u0421\u043a\u043e\u0440. \u0432\u0435\u0442\u0440\u0430",height:20},{id:10,name:"\u041d\u0430\u043f. \u0432\u0435\u0442\u0440\u0430",height:20}]},ie=function(){var e=q((function(e){return e.activeLang}));return Object(r.jsx)("div",{className:"weather-options",children:ae[e]&&ae[e].map((function(e){var t=e.name,n=e.id,a=e.height;return Object(r.jsx)("div",{style:{height:a},children:t},"weather-option-".concat(n))}))})},ce=function(){var e=q((function(e){return e.currentWeather})),t=Object(a.useMemo)((function(){return e?e.list.filter((function(e){return e.dt_txt.includes("12:00")||e.dt_txt.includes("18:00")})):null}),[e]);return e?Object(r.jsxs)("div",{className:"weather-main",children:[Object(r.jsx)(ie,{}),Object(r.jsx)(re,{weathers:t})]}):Object(r.jsx)(ne,{})},se=n.p+"static/media/background.90b1203b.png",ue=function(){var e=Object(l.b)();return Object(a.useEffect)((function(){var t=navigator,n=t.geolocation,r=t.language;n.getCurrentPosition(A,P),r.includes(k.ru)?e({type:L,activeLang:k.ru}):r.includes(k.en)&&e({type:L,activeLang:k.en})}),[e]),Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)("div",{className:"background-container",children:Object(r.jsx)("img",{src:se,alt:"background",draggable:!1})}),Object(r.jsxs)("div",{className:"main-container",children:[Object(r.jsx)(ee,{}),Object(r.jsx)(ce,{})]})]})};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(l.a,{store:G,children:Object(r.jsx)(ue,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.1424b5b1.chunk.js.map