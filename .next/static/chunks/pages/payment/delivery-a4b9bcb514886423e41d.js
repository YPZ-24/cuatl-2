_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"20a2":function(e,n,t){e.exports=t("nOHt")},"6Kf1":function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t("nKUr"),c=t("o0o1"),u=t.n(c),o=t("HaE+"),a=t("20a2"),s=t("q1tI"),i=t("VS8K"),f=function(){var e=Object(o.a)(u.a.mark((function e(n){var t,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.includes("id_token")?i.c:i.b,e.next=3,fetch(t+n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",{token:c.jwt,user:{id:c.user.id,username:c.user.username,email:c.user.email,avatar:c.user.avatar?c.user.avatar.formats.thumbnail:null}});case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=Object(s.createContext)(null);n.b=l;function d(e){var n=e.children,t=Object(s.useState)(null),c=t[0],i=t[1],d=Object(a.useRouter)(),v=function(){var e=Object(o.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("id_token"in d.query)&&!("access_token"in d.query)){e.next=7;break}return e.next=3,f(location.search);case 3:n=e.sent,d.replace("/"),sessionStorage.setItem("session",JSON.stringify(n)),i(n.user);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){try{return JSON.parse(sessionStorage.getItem("session"))}catch(e){return console.error(e.message),null}};return Object(r.jsx)(l.Provider,{value:{user:c,login:v,logout:function(){sessionStorage.removeItem("session"),i(null),d.push("/")},getToken:function(){return p().token},isUserLoggedIn:function(){return!!p()},useSession:function(){Object(s.useEffect)((function(){var e=p();i(null===e||void 0===e?void 0:e.user)}),[])}},children:n})}},"HaE+":function(e,n,t){"use strict";function r(e,n,t,r,c,u,o){try{var a=e[u](o),s=a.value}catch(i){return void t(i)}a.done?n(s):Promise.resolve(s).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,u){var o=e.apply(n,t);function a(e){r(o,c,u,a,s,"next",e)}function s(e){r(o,c,u,a,s,"throw",e)}a(void 0)}))}}t.d(n,"a",(function(){return c}))},Lvf5:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/payment/delivery",function(){return t("xHbI")}])},VS8K:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"e",(function(){return c})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return a})),t.d(n,"f",(function(){return s}));var r="",c=12;console.log("API"),console.log(r);var u="".concat(r,"/auth/facebook/callback"),o=("".concat(r,"/connect/facebook"),"".concat(r,"/auth/google/callback")),a="".concat(r,"/connect/google"),s="pk_test_51Hw15gJ4rvPOyPXnQ6Rjf7X4RxmsSBqvTVy3h3Bfwdo2WddlWAgC64bzfHeQbn4V5jJpPrJ7eHeWrGQMWOlRzW8700mrQLCJpL"},xHbI:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var r=t("nKUr"),c=t("o0o1"),u=t.n(c),o=t("HaE+"),a=t("20a2"),s=t("q1tI"),i=t("VS8K"),f=t("6Kf1");function l(){var e=Object(s.useContext)(f.b),n=e.user,t=e.getToken,c=Object(a.useRouter)(),l=function(e,n){var t=Object(s.useState)([]),r=t[0],c=t[1];return Object(s.useEffect)((function(){!function(){var t=Object(o.a)(u.a.mark((function t(){var r,o,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=17;break}return t.prev=1,t.next=4,n();case 4:return r=t.sent,t.next=7,fetch("".concat(i.a,"/orders"),{headers:{Authorization:"Bearer ".concat(r)}});case 7:return o=t.sent,t.next=10,o.json();case 10:a=t.sent,c(a),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),c([]);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(){return t.apply(this,arguments)}}()()}),[e]),r}(n,t);return Object(s.useEffect)((function(){n||c.push("/sign_in")}),[]),Object(r.jsx)(r.Fragment,{children:l?l.map((function(e){return Object(r.jsxs)("div",{children:[new Date(e.createdAt).toLocaleDateString("es-MX"),e.product.name,e.total,e.status]},"order.id")})):Object(r.jsx)("div",{children:"Sin \xf3rdenes"})})}}},[["Lvf5",0,1,2,3]]]);