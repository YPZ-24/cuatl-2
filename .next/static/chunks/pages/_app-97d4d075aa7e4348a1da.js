_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{0:function(e,n,t){t("74v/"),e.exports=t("nOHt")},"20a2":function(e,n,t){e.exports=t("nOHt")},"6Kf1":function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t("nKUr"),o=t("o0o1"),c=t.n(o),u=t("HaE+"),i=t("20a2"),a=t("q1tI"),s=t("VS8K"),f=function(){var e=Object(u.a)(c.a.mark((function e(n){var t,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.includes("id_token")?s.d:s.b,e.next=3,fetch(t+n);case 3:return r=e.sent,e.next=6,r.json();case 6:return o=e.sent,e.abrupt("return",{token:o.jwt,user:{id:o.user.id,username:o.user.username,email:o.user.email,avatar:o.user.avatar?o.user.avatar.formats.thumbnail:null}});case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=Object(a.createContext)(null);n.b=l;function p(e){var n=e.children,t=Object(a.useState)(null),o=t[0],s=t[1],p=Object(i.useRouter)(),b=function(){var e=Object(u.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("id_token"in p.query)&&!("access_token"in p.query)){e.next=7;break}return e.next=3,f(location.search);case 3:n=e.sent,p.replace("/"),sessionStorage.setItem("session",JSON.stringify(n)),s(n.user);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){try{return JSON.parse(sessionStorage.getItem("session"))}catch(e){return console.error(e.message),null}};return Object(r.jsx)(l.Provider,{value:{user:o,login:b,logout:function(){sessionStorage.removeItem("session"),s(null),p.push("/")},getToken:function(){return d().token},isUserLoggedIn:function(){return!!d()},useSession:function(){Object(a.useEffect)((function(){var e=d();s(null===e||void 0===e?void 0:e.user)}),[])}},children:n})}},"74v/":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("cha2")}])},"HaE+":function(e,n,t){"use strict";function r(e,n,t,r,o,c,u){try{var i=e[c](u),a=i.value}catch(s){return void t(s)}i.done?n(a):Promise.resolve(a).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,c){var u=e.apply(n,t);function i(e){r(u,o,c,i,a,"next",e)}function a(e){r(u,o,c,i,a,"throw",e)}i(void 0)}))}}t.d(n,"a",(function(){return o}))},VS8K:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"f",(function(){return o})),t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return u})),t.d(n,"d",(function(){return i})),t.d(n,"e",(function(){return a})),t.d(n,"g",(function(){return s}));var r="http://165.227.199.69:1337",o=12,c="".concat(r,"/auth/facebook/callback"),u="".concat(r,"/connect/facebook"),i="".concat(r,"/auth/google/callback"),a="".concat(r,"/connect/google"),s="pk_test_51Hw15gJ4rvPOyPXnQ6Rjf7X4RxmsSBqvTVy3h3Bfwdo2WddlWAgC64bzfHeQbn4V5jJpPrJ7eHeWrGQMWOlRzW8700mrQLCJpL"},bCPq:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("nKUr"),o=t("q1tI"),c=Object(o.createContext)(null);function u(e){var n=e.children,t=Object(o.useState)(null),u=t[0];t[1];return Object(r.jsx)(c.Provider,{value:{order:u,countProducts:function(){return u?u.variants.length:0}},children:n})}n.b=c},cha2:function(e,n,t){"use strict";t.r(n);var r=t("rePB"),o=t("nKUr"),c=t("VX74"),u=(t("uXJ4"),t("6Kf1")),i=t("bCPq"),a=t("+GZE");function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.default=function(e){var n=e.Component,t=e.pageProps,r=Object(a.a)(t.initialApolloState);return Object(o.jsx)(c.ApolloProvider,{client:r,children:Object(o.jsx)(u.a,{children:Object(o.jsx)(i.a,{children:Object(o.jsx)(n,f({},t))})})})}},uXJ4:function(e,n,t){}},[[0,0,2,1,5]]]);