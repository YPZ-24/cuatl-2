_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"20a2":function(n,t,e){n.exports=e("nOHt")},"3MQS":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/payment/success",function(){return e("pQgT")}])},VS8K:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"d",(function(){return c})),e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return o})),e.d(t,"e",(function(){return i}));var r="https://cuatl.shop/api",c=12,o="https://cuatl.shop/api/connect/google",u="".concat(r,"/auth/google/callback"),i="pk_live_51Hw15gJ4rvPOyPXnQvJZJh4bBA3ef2R4sx6iPfGSVNNQtvUaobMDUhrh2eQUjHPAyAcpEXsdY1QWu6wPFTL7Zkgw00X6BX6HZI"},pQgT:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return f}));var r=e("nKUr"),c=e("vJKn"),o=e.n(c),u=e("rg98"),i=e("20a2"),a=e("q1tI"),s=e("VS8K");function f(){var n=Object(i.useRouter)();return Object(a.useEffect)((function(){var t=n.asPath,e=t.search("="),r=t.slice(e+1);(function(){var n=Object(u.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s.a,"/orders/confirm"),{method:"POST",body:JSON.stringify({checkout_session:r}),headers:{"Content-Type":"application/json"}});case 2:n.sent;case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()(),n.push("/")}),[]),Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"\xa1Gracias por tu compra!"})})}},rg98:function(n,t,e){"use strict";function r(n,t,e,r,c,o,u){try{var i=n[o](u),a=i.value}catch(s){return void e(s)}i.done?t(a):Promise.resolve(a).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,o){var u=n.apply(t,e);function i(n){r(u,c,o,i,a,"next",n)}function a(n){r(u,c,o,i,a,"throw",n)}i(void 0)}))}}e.d(t,"a",(function(){return c}))}},[["3MQS",0,1,2,3]]]);