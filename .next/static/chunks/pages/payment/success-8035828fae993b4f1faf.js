_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"20a2":function(n,t,c){n.exports=c("nOHt")},"3MQS":function(n,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/payment/success",function(){return c("pQgT")}])},"HaE+":function(n,t,c){"use strict";function e(n,t,c,e,o,r,u){try{var a=n[r](u),i=a.value}catch(s){return void c(s)}a.done?t(i):Promise.resolve(i).then(e,o)}function o(n){return function(){var t=this,c=arguments;return new Promise((function(o,r){var u=n.apply(t,c);function a(n){e(u,o,r,a,i,"next",n)}function i(n){e(u,o,r,a,i,"throw",n)}a(void 0)}))}}c.d(t,"a",(function(){return o}))},VS8K:function(n,t,c){"use strict";c.d(t,"a",(function(){return e})),c.d(t,"e",(function(){return o})),c.d(t,"b",(function(){return r})),c.d(t,"c",(function(){return u})),c.d(t,"d",(function(){return a})),c.d(t,"f",(function(){return i}));var e="",o=12;console.log("API"),console.log(e);var r="".concat(e,"/auth/facebook/callback"),u=("".concat(e,"/connect/facebook"),"".concat(e,"/auth/google/callback")),a="".concat(e,"/connect/google"),i="pk_test_51Hw15gJ4rvPOyPXnQ6Rjf7X4RxmsSBqvTVy3h3Bfwdo2WddlWAgC64bzfHeQbn4V5jJpPrJ7eHeWrGQMWOlRzW8700mrQLCJpL"},pQgT:function(n,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return f}));var e=c("nKUr"),o=c("o0o1"),r=c.n(o),u=c("HaE+"),a=c("20a2"),i=c("q1tI"),s=c("VS8K");function f(){var n=Object(a.useRouter)();return Object(i.useEffect)((function(){var t=n.asPath,c=t.search("="),e=t.slice(c+1);(function(){var n=Object(u.a)(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s.a,"/orders/confirm"),{method:"POST",body:JSON.stringify({checkout_session:e}),headers:{"Content-Type":"application/json"}});case 2:n.sent;case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()(),n.push("/")}),[]),Object(e.jsx)("div",{children:Object(e.jsx)("h1",{children:"\xa1Gracias por tu compra!"})})}}},[["3MQS",0,1,2,3]]]);