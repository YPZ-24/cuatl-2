_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"1BBf":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/orders",function(){return n("boiI")}])},"1iKp":function(e,t,n){"use strict";var a=n("TqRt"),r=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),i=(0,a(n("8/g6")).default)(o.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=i},"6Kf1":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("nKUr"),r=n("vJKn"),o=n.n(r),i=n("rg98"),s=n("20a2"),c=n("q1tI"),d=n("VS8K"),u=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.includes("id_token")?d.b:"",e.next=3,fetch(n+t);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",{token:r.jwt,user:{id:r.user.id,username:r.user.username,email:r.user.email,avatar:r.user.avatar?r.user.avatar.formats.thumbnail:null}});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=Object(c.createContext)(null);t.b=l;function p(e){var t=e.children,n=Object(c.useState)(null),r=n[0],d=n[1],p=Object(s.useRouter)(),b=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("id_token"in p.query)&&!("access_token"in p.query)){e.next=7;break}return e.next=3,u(location.search);case 3:t=e.sent,p.replace("/"),sessionStorage.setItem("session",JSON.stringify(t)),d(t.user);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){try{return JSON.parse(sessionStorage.getItem("session"))}catch(e){return console.error(e.message),null}};return Object(a.jsx)(l.Provider,{value:{user:r,login:b,logout:function(){sessionStorage.removeItem("session"),d(null),p.push("/")},getToken:function(){return f().token},isUserLoggedIn:function(){return!!f()},useSession:function(){Object(c.useEffect)((function(){var e=f();d(null===e||void 0===e?void 0:e.user)}),[])}},children:t})}},"8udc":function(e,t,n){"use strict";var a=n("vJKn"),r=n.n(a),o=n("rg98"),i=n("VS8K"),s=function(){return function(){try{return JSON.parse(sessionStorage.getItem("session"))}catch(e){return console.error(e.message),null}}().token};function c(){return(c=Object(o.a)(r.a.mark((function e(t){var n,a,o,c,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.method,a=t.path,o=t.body,e.prev=1,e.next=4,fetch(i.a+a,{method:n,body:JSON.stringify(o),headers:{"Content-type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(s())}});case 4:return c=e.sent,e.next=7,c.json();case 7:return d=e.sent,e.abrupt("return",d);case 11:return e.prev=11,e.t0=e.catch(1),console.log(e.t0),e.t0.message="Algo salio mal",e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}t.a=function(e){return c.apply(this,arguments)}},VS8K:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return s}));var a="https://cuatl.shop/api",r=12,o="https://cuatl.shop/api/connect/google",i="".concat(a,"/auth/google/callback"),s="pk_live_51Hw15gJ4rvPOyPXnQvJZJh4bBA3ef2R4sx6iPfGSVNNQtvUaobMDUhrh2eQUjHPAyAcpEXsdY1QWu6wPFTL7Zkgw00X6BX6HZI"},boiI:function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),r=n("vJKn"),o=n.n(r),i=n("rg98"),s=n("q1tI"),c=n("VS8K"),d=n("6Kf1"),u=n("bCPq"),l=n("tRbT"),p=n("ofer"),b=n("wx14"),f=n("DSFK"),h=n("25BE"),j=n("BsWD"),m=n("PYwp");var v=n("ODXe"),x=n("Ff2n"),g=(n("TOwV"),n("17x9"),n("iuhU")),O=n("JQEk"),w=n("kKAo"),y=n("H2TA");var k=s.createContext({}),R=n("yCxk"),C=s.forwardRef((function(e,t){var n,a=e.children,r=e.classes,o=e.className,i=e.defaultExpanded,c=void 0!==i&&i,d=e.disabled,u=void 0!==d&&d,l=e.expanded,p=e.onChange,y=e.square,C=void 0!==y&&y,N=e.TransitionComponent,I=void 0===N?O.a:N,E=e.TransitionProps,S=Object(x.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),A=Object(R.a)({controlled:l,default:c,name:"Accordion",state:"expanded"}),B=Object(v.a)(A,2),T=B[0],P=B[1],_=s.useCallback((function(e){P(!T),p&&p(e,!T)}),[T,p,P]),K=s.Children.toArray(a),q=(n=K,Object(f.a)(n)||Object(h.a)(n)||Object(j.a)(n)||Object(m.a)()),M=q[0],J=q.slice(1),L=s.useMemo((function(){return{expanded:T,disabled:u,toggle:_}}),[T,u,_]);return s.createElement(w.a,Object(b.a)({className:Object(g.a)(r.root,o,T&&r.expanded,u&&r.disabled,!C&&r.rounded),ref:t,square:C},S),s.createElement(k.Provider,{value:L},M),s.createElement(I,Object(b.a)({in:T,timeout:"auto"},E),s.createElement("div",{"aria-labelledby":M.props.id,id:M.props["aria-controls"],role:"region"},J)))})),N=Object(y.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(C),I=n("VD++"),E=n("PsDL"),S=s.forwardRef((function(e,t){var n=e.children,a=e.classes,r=e.className,o=e.expandIcon,i=e.IconButtonProps,c=e.onBlur,d=e.onClick,u=e.onFocusVisible,l=Object(x.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),p=s.useState(!1),f=p[0],h=p[1],j=s.useContext(k),m=j.disabled,v=void 0!==m&&m,O=j.expanded,w=j.toggle;return s.createElement(I.a,Object(b.a)({focusRipple:!1,disableRipple:!0,disabled:v,component:"div","aria-expanded":O,className:Object(g.a)(a.root,r,v&&a.disabled,O&&a.expanded,f&&a.focused),onFocusVisible:function(e){h(!0),u&&u(e)},onBlur:function(e){h(!1),c&&c(e)},onClick:function(e){w&&w(e),d&&d(e)},ref:t},l),s.createElement("div",{className:Object(g.a)(a.content,O&&a.expanded)},n),o&&s.createElement(E.a,Object(b.a)({className:Object(g.a)(a.expandIcon,O&&a.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},i),o))})),A=Object(y.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(S),B=n("wb2y"),T=s.forwardRef((function(e,t){var n=e.classes,a=e.className,r=Object(x.a)(e,["classes","className"]);return s.createElement("div",Object(b.a)({className:Object(g.a)(n.root,a),ref:t},r))})),P=Object(y.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(T),_=n("/EAt"),K=n("Imu7"),q=n("sRsu"),M=n("3PeG"),J=n("Uf6+"),L=n("1iKp"),U=n.n(L),V=n("1sxy"),D=n("20a2"),F=n("8udc"),$=n("NKQG");t.default=function(){var e=Object($.b)().enqueueSnackbar,t=Object(s.useContext)(d.b).getToken,n=Object(s.useContext)(u.b).setOrder,r=Object(s.useState)([]),b=r[0],f=r[1],h=Object(D.useRouter)(),j=function(){var t=Object(i.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(F.a)({method:"POST",path:"/orders/confirm",body:{checkout_session:n}});case 2:(a=t.sent)._id&&e("Listo: ".concat(a.status.toUpperCase()));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function m(){return(m=Object(i.a)(o.a.mark((function e(){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:return n=e.sent,e.next=5,fetch("".concat(c.a,"/orders"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 5:return e.next=7,e.sent.json();case 7:a=e.sent,f(a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){var e=h.asPath,t=e.search("="),a=e.slice(t+1);-1!=t&&(j(a),n([]),h.push("/user/orders"))}),[]),Object(s.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(l.a,{container:!0,spacing:5,children:[Object(a.jsx)(l.a,{item:!0,xs:12,children:Object(a.jsx)(p.a,{variant:"h4",align:"center",children:"MIS COMPRAS"})}),Object(a.jsx)(l.a,{item:!0,xs:12,children:b.map((function(e){return Object(a.jsxs)(N,{children:[Object(a.jsx)(A,{expandIcon:Object(a.jsx)(U.a,{}),children:Object(a.jsxs)(l.a,{container:!0,spacing:2,children:[Object(a.jsxs)(l.a,{item:!0,xs:8,children:[Object(a.jsx)(p.a,{gutterBottom:!0,variant:"overline",children:new Date(e.createdAt).toLocaleString()}),Object(a.jsx)(p.a,{gutterBottom:!0,variant:"subtitle1",children:e.status}),Object(a.jsx)(p.a,{variant:"subtitle1",children:Object(V.a)("MXN",e.total)})]}),Object(a.jsx)(l.a,{item:!0,xs:1,children:Object(a.jsx)(B.a,{orientation:"vertical"})}),Object(a.jsx)(l.a,{item:!0,xs:3,style:{display:"flex",alignItems:"center"},children:Object(a.jsx)(p.a,{variant:"h6",children:e.delivery_status.toUpperCase()})})]})}),Object(a.jsx)(P,{children:Object(a.jsxs)(_.a,{size:"small",children:[Object(a.jsx)(K.a,{children:Object(a.jsxs)(q.a,{children:[Object(a.jsx)(M.a,{align:"center",children:"ARTICULO"}),Object(a.jsx)(M.a,{align:"center",children:"COLOR"}),Object(a.jsx)(M.a,{align:"center",children:"TAMA\xd1O"})]})}),Object(a.jsx)(J.a,{children:e.variants.map((function(e){return Object(a.jsxs)(q.a,{children:[Object(a.jsx)(M.a,{children:e.name}),Object(a.jsx)(M.a,{align:"center",children:e.color}),Object(a.jsx)(M.a,{align:"center",children:e.size})]},"Variant-".concat(e.id))}))})]})})]},"Order-".concat(e.id))}))})]})})}},kKAo:function(e,t,n){"use strict";var a=n("Ff2n"),r=n("wx14"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),s=n("H2TA"),c=o.forwardRef((function(e,t){var n=e.classes,s=e.className,c=e.component,d=void 0===c?"div":c,u=e.square,l=void 0!==u&&u,p=e.elevation,b=void 0===p?1:p,f=e.variant,h=void 0===f?"elevation":f,j=Object(a.a)(e,["classes","className","component","square","elevation","variant"]);return o.createElement(d,Object(r.a)({className:Object(i.a)(n.root,s,"outlined"===h?n.outlined:n["elevation".concat(b)],!l&&n.rounded),ref:t},j))}));t.a=Object(s.a)((function(e){var t={};return e.shadows.forEach((function(e,n){t["elevation".concat(n)]={boxShadow:e}})),Object(r.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(c)},wb2y:function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),s=n("H2TA"),c=n("ye/S"),d=o.forwardRef((function(e,t){var n=e.absolute,s=void 0!==n&&n,c=e.classes,d=e.className,u=e.component,l=void 0===u?"hr":u,p=e.flexItem,b=void 0!==p&&p,f=e.light,h=void 0!==f&&f,j=e.orientation,m=void 0===j?"horizontal":j,v=e.role,x=void 0===v?"hr"!==l?"separator":void 0:v,g=e.variant,O=void 0===g?"fullWidth":g,w=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(l,Object(a.a)({className:Object(i.a)(c.root,d,"fullWidth"!==O&&c[O],s&&c.absolute,b&&c.flexItem,h&&c.light,"vertical"===m&&c.vertical),role:x,ref:t},w))}));t.a=Object(s.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(d)}},[["1BBf",0,1,2,3,4,5,7,6,8,13]]]);