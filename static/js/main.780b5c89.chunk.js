(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{100:function(e,t,c){},102:function(e,t,c){},120:function(e,t,c){},121:function(e,t,c){},123:function(e,t,c){},141:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),s=c(22),i=c.n(s),r=(c(72),c(58)),o=c(8),l=(c(73),c(74),c(59)),d=c.n(l),j=c(60),u=c.n(j),m=c(17),h=c(2),b=Object(n.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(h.jsx)(b.Provider,{value:Object(n.useReducer)(t,c),children:a})},p=function(){return Object(n.useContext)(b)},x=c(39),_=x.a.initializeApp({apiKey:"AIzaSyCAyABZLNTlhHo9Ey-GgbufDlLkIpK4JcY",authDomain:"clone-9872a.firebaseapp.com",projectId:"clone-9872a",storageBucket:"clone-9872a.appspot.com",messagingSenderId:"528661208319",appId:"1:528661208319:web:988b96d5455dd5a5dc00ca",measurementId:"G-XFZ69GJ8Z2"}).firestore(),g=x.a.auth();var v=function(){var e=p(),t=Object(o.a)(e,2),c=t[0],n=c.basket,a=c.user;return t[1],Object(h.jsxs)("div",{className:"header",id:"page-wrap",children:[Object(h.jsx)(m.b,{to:"/",children:Object(h.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"Amazon Logo"})}),Object(h.jsxs)("div",{className:"header__search",children:[Object(h.jsx)("input",{className:"header__searchInput",type:"text"}),Object(h.jsx)(d.a,{className:"header__searchIcon"})]}),Object(h.jsxs)("div",{className:"header__nav",children:[Object(h.jsx)(m.b,{to:!a&&"/login",children:Object(h.jsxs)("div",{className:"header__option",onClick:function(){a&&g.signOut()},children:[Object(h.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",a?null===a||void 0===a?void 0:a.email.split("@")[0]:"Guest"]}),Object(h.jsx)("span",{className:"header__optionLineOne",children:a?"Sign Out":"Sign In"})]})}),Object(h.jsx)(m.b,{to:"/orders",children:Object(h.jsxs)("div",{className:"header__option",children:[Object(h.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(h.jsx)("span",{className:"header__optionLineOne",children:"& Orders"})]})}),Object(h.jsxs)("div",{className:"header__option",children:[Object(h.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(h.jsx)("span",{className:"header__optionLineOne",children:"Prime"})]}),Object(h.jsx)(m.b,{to:"/checkout",children:Object(h.jsxs)("div",{className:"header__optionbasket",children:[Object(h.jsx)(u.a,{}),Object(h.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===n||void 0===n?void 0:n.length})]})})]})]})},f=(c(87),c(88),c(61));c(94);var N=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(f.Carousel,{autoPlay:!0,interval:"3000",transitionTime:"3000",infiniteLoop:!0,showThumbs:!1,showStatus:!1,children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:"Img1"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:"Img1"})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:"Img1"})})]})})};c(95);var S=function(e){var t=e.id,c=e.title,n=e.image,a=e.price,s=e.rating,i=p(),r=Object(o.a)(i,2),l=(r[0].basket,r[1]);return Object(h.jsxs)("div",{className:"product",children:[Object(h.jsxs)("div",{className:"product__info",children:[Object(h.jsx)("p",{children:c}),Object(h.jsxs)("p",{className:"product__price",children:[Object(h.jsx)("small",{children:"$"}),Object(h.jsx)("strong",{children:a})]}),Object(h.jsx)("div",{className:"product__rating",children:Array(s).fill().map((function(e,t){return Object(h.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(h.jsx)("img",{src:n,alt:""}),Object(h.jsx)("button",{className:"product__basket",onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,image:n,price:a,rating:s}})},children:"Add to basket"})]})};var k=function(){return Object(h.jsx)("div",{className:"home",id:"page-wrap",children:Object(h.jsxs)("div",{className:"home__container",children:[Object(h.jsx)(N,{}),Object(h.jsxs)("div",{className:"home__row",children:[Object(h.jsx)(S,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),Object(h.jsx)(S,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})]}),Object(h.jsxs)("div",{className:"home__row",children:[Object(h.jsx)(S,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(h.jsx)(S,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),Object(h.jsx)(S,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(h.jsx)("div",{className:"home__row",children:Object(h.jsx)(S,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})})},y=c(10),C=(c(96),c(97),c(28)),A=c.n(C),E=c(26),T=c(23),B=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},P=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(T.a)(Object(T.a)({},e),{},{basket:[].concat(Object(E.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(E.a)(e.basket);return c>=0?n.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(T.a)(Object(T.a)({},e),{},{basket:n});case"SET_USER":return Object(T.a)(Object(T.a)({},e),{},{user:t.user});case"EMPTY_BASKET":return Object(T.a)(Object(T.a)({},e),{},{basket:[]});default:return e}};var w=function(){var e=Object(y.f)(),t=p(),c=Object(o.a)(t,2),n=c[0],a=n.basket,s=n.user;return c[1],console.log("user",s),Object(h.jsxs)("div",{className:"subtotal",children:[Object(h.jsx)(A.a,{renderText:function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:["Subtotal (",null===a||void 0===a?void 0:a.length," items): ",Object(h.jsx)("strong",{children:e})]}),Object(h.jsxs)("small",{className:"subtotal__gift",children:[Object(h.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:B(a),displayType:"text",thousandSeparator:!0,prefix:"$"}),!s&&Object(h.jsx)("button",{onClick:function(t){return e.push("/login")},children:"Proceed to Login"}),s&&Object(h.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proceed to Checkout"})]})},I=(c(99),Object(n.forwardRef)((function(e,t){var c=e.id,n=e.title,a=e.image,s=e.price,i=e.rating,r=e.hideButton,l=p(),d=Object(o.a)(l,2),j=d[0],u=(j.basket,j.user,d[1]);return Object(h.jsxs)("div",{className:"checkoutProduct",children:[Object(h.jsx)("img",{className:"checkoutProduct__image",src:a,alt:"Image"}),Object(h.jsxs)("div",{className:"checkoutProduct__info",children:[Object(h.jsx)("p",{className:"checkoutProduct__title",children:n}),Object(h.jsxs)("p",{className:"checkoutProduct__price",children:[Object(h.jsx)("small",{children:"$"}),Object(h.jsx)("strong",{children:s})]}),Object(h.jsx)("div",{className:"checkoutProduct__rating",children:Array(i).fill().map((function(e,t){return Object(h.jsx)("p",{children:"\ud83c\udf1f"})}))}),!r&&Object(h.jsx)("button",{onClick:function(){u({type:"REMOVE_FROM_BASKET",id:c})},children:"Remove from Basket"})]})]})}))),L=c(62);var G=function(){var e=p(),t=Object(o.a)(e,2),c=t[0],n=c.basket,s=c.user,i=(t[1],a.a.forwardRef((function(e,t){var c=e.item,n=e.index;return Object(h.jsx)("div",{ref:t,children:Object(h.jsx)(I,{title:c.title,id:c.id,rating:c.rating,price:c.price,image:c.image},"anim ".concat(n," ").concat(c.id))})})));return Object(h.jsxs)("div",{className:"checkout",children:[Object(h.jsxs)("div",{className:"checkout__left",children:[Object(h.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("h3",{children:["Hello ",s?null===s||void 0===s?void 0:s.email.split("@")[0]:"Guest"]}),Object(h.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),Object(h.jsx)(L.a,{staggerDelayBy:150,enterAnimation:"accordionVertical",leaveAnimation:"accordionVertical",children:null===n||void 0===n?void 0:n.map((function(e,t){return Object(h.jsx)(i,{item:e,index:t},"an ".concat(t," ").concat(e.id))}))})]})]}),Object(h.jsx)("div",{className:"checkout__right",children:Object(h.jsx)(w,{})})]})};c(100);var z=function(){var e=Object(y.f)(),t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(""),r=Object(o.a)(i,2),l=r[0],d=r[1];return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)(m.b,{to:"/",children:Object(h.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:"Logo"})}),Object(h.jsxs)("div",{className:"login__container",children:[Object(h.jsx)("h1",{children:"Sign-in"}),Object(h.jsxs)("form",{children:[Object(h.jsx)("h5",{children:"E-mail"}),Object(h.jsx)("input",{type:"text",value:a,onChange:function(e){return s(e.target.value)}}),Object(h.jsx)("h5",{children:"Password"}),Object(h.jsx)("input",{type:"password",value:l,onChange:function(e){return d(e.target.value)}}),Object(h.jsx)("button",{className:"login__signInButton",type:"submit",onClick:function(t){t.preventDefault(),g.signInWithEmailAndPassword(a,l).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]}),Object(h.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(h.jsx)("button",{className:"login__registerButton",onClick:function(t){t.preventDefault(),g.createUserWithEmailAndPassword(a,l).then((function(t){t&&e.push("/"),console.log(t)})).catch((function(e){return alert(e.message)}))},children:"Create your amazon account"})]})]})},D=c(30),R=c.n(D),M=c(38),K=(c(102),c(27)),H=c(63),U=c.n(H).a.create({baseURL:"http://localhost:5001/clone-9872a/us-central1/api"});var X=function(){var e=p(),t=Object(o.a)(e,2),c=t[0],a=c.basket,s=c.user,i=t[1],r=Object(y.f)(),l=Object(K.useStripe)(),d=Object(K.useElements)(),j=Object(n.useState)(!1),u=Object(o.a)(j,2),b=u[0],O=u[1],x=Object(n.useState)(""),g=Object(o.a)(x,2),v=g[0],f=g[1],N=Object(n.useState)(null),S=Object(o.a)(N,2),k=S[0],C=S[1],E=Object(n.useState)(!0),T=Object(o.a)(E,2),P=T[0],w=T[1],L=Object(n.useState)(!0),G=Object(o.a)(L,2),z=G[0],D=G[1];Object(n.useEffect)((function(){(function(){var e=Object(M.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U({method:"post",url:"/payments/create?total=".concat(100*B(a))});case 2:t=e.sent,D(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),console.log("THE SECRET IS >>>",z),console.log("\ud83d\udc71",s);var H=function(){var e=Object(M.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),f(!0),e.next=4,l.confirmCardPayment(z,{payment_method:{card:d.getElement(K.CardElement)}}).then((function(e){var t=e.paymentIntent;console.log("The paymentIntent:"+t),_.collection("users").doc(null===s||void 0===s?void 0:s.uid).collection("orders").doc(t.id).set({basket:a,amount:t.amount,created:t.created}),O(!0),C(null),f(!1),i({type:"EMPTY_BASKET"}),r.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"payment",children:Object(h.jsxs)("div",{className:"payment__container",children:[Object(h.jsxs)("h1",{children:["Checkout (",Object(h.jsxs)(m.b,{to:"/checkout",children:[null===a||void 0===a?void 0:a.length," items"]}),")"]}),Object(h.jsxs)("div",{className:"payment__section",children:[Object(h.jsx)("div",{className:"payment__title",children:Object(h.jsx)("h3",{children:"Delivery Address"})}),Object(h.jsxs)("div",{className:"payment__address",children:[Object(h.jsx)("p",{children:null===s||void 0===s?void 0:s.email}),Object(h.jsx)("p",{children:"123 React Lane"}),Object(h.jsx)("p",{children:"Los Angeles, CA"})]})]}),Object(h.jsxs)("div",{className:"payment__section",children:[Object(h.jsx)("div",{className:"payment__title",children:Object(h.jsx)("h3",{children:"Review items and delivery"})}),Object(h.jsx)("div",{className:"payment__items",children:a.map((function(e){return Object(h.jsx)(I,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(h.jsxs)("div",{className:"payment__section",children:[Object(h.jsx)("div",{className:"payment__title",children:Object(h.jsx)("h3",{children:"Payment Method"})}),Object(h.jsx)("div",{className:"payment__details",children:Object(h.jsxs)("form",{onSubmit:H,children:[Object(h.jsx)(K.CardElement,{onChange:function(e){w(e.empty),C(e.error?e.error.message:"")}}),Object(h.jsxs)("div",{className:"payment__priceContainer",children:[Object(h.jsx)(A.a,{renderText:function(e){return Object(h.jsxs)("h3",{children:["Order Total: ",e]})},decimalScale:2,value:B(a),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(h.jsx)("button",{disabled:v||P||b,children:Object(h.jsx)("span",{children:v?Object(h.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),k&&Object(h.jsx)("div",{children:k})]})})]})]})})},W=c(64),F=(c(120),c(121),c(65)),V=c.n(F);var Y=function(e){var t,c=e.order;return Object(h.jsxs)("div",{className:"order",children:[Object(h.jsx)("h2",{children:"Order"}),Object(h.jsx)("p",{children:V.a.unix(c.data.created).format("MMMM Do YYYY, h:mma")}),Object(h.jsx)("p",{className:"order__id",children:Object(h.jsx)("small",{children:c.id})}),null===(t=c.data.basket)||void 0===t?void 0:t.map((function(e){return Object(h.jsx)(I,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),Object(h.jsx)(A.a,{renderText:function(e){return Object(h.jsxs)("h3",{className:"order__total",children:["Order Total: ",e]})},decimalScale:2,value:c.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"})]})};var J=function(){var e=p(),t=Object(o.a)(e,2),c=t[0],a=(c.basket,c.user),s=(t[1],Object(n.useState)([])),i=Object(o.a)(s,2),r=i[0],l=i[1];return Object(n.useEffect)((function(){a?_.collection("users").doc(null===a||void 0===a?void 0:a.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return l(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):l([])}),[a]),Object(h.jsxs)("div",{className:"orders",children:[Object(h.jsx)("h1",{children:"Your Orders"}),Object(h.jsx)("div",{className:"orders__order",children:null===r||void 0===r?void 0:r.map((function(e){return Object(h.jsx)(Y,{order:e})}))})]})},Z=(c(123),c(66));var $=function(){return Object(h.jsxs)(Z.slide,{children:[Object(h.jsx)("a",{className:"menu-item",href:"/",children:"Home"}),Object(h.jsx)("a",{className:"menu-item",href:"/salads",children:"Returns & Orders"}),Object(h.jsx)("a",{className:"menu-item",href:"/pizzas",children:"Your Prime"}),Object(h.jsx)("a",{className:"menu-item",href:"/desserts",children:"Basket"})]})},q=Object(W.a)("pk_test_51IgQNeSGLIP75bnbl8kkpkdnzqDjRfAo1rfvw29vX4gJKZDKiwCmPnjAEau3NXxOHyaqlBZnWoJWYzTVmKh01TiG00qjAiexmr");var Q=function(){var e=p(),t=Object(o.a)(e,2);Object(r.a)(t[0]);var c=t[1];return Object(n.useEffect)((function(){g.onAuthStateChanged((function(e){console.log("The user is :"+JSON.stringify(e)),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(h.jsx)(m.a,{children:Object(h.jsxs)("div",{className:"App",id:"outer-container",children:[Object(h.jsx)($,{pageWrapId:"page-wrap",outerContainerId:"outer-container"}),Object(h.jsxs)(y.c,{children:[Object(h.jsx)(y.a,{path:"/login",children:Object(h.jsx)(z,{})}),Object(h.jsxs)(y.a,{path:"/checkout",children:[Object(h.jsx)(v,{}),Object(h.jsx)(G,{})]}),Object(h.jsxs)(y.a,{path:"/payment",children:[Object(h.jsx)(v,{}),Object(h.jsx)(K.Elements,{stripe:q,children:Object(h.jsx)(X,{})})]}),Object(h.jsxs)(y.a,{path:"/orders",children:[Object(h.jsx)(v,{}),Object(h.jsx)(J,{})]}),Object(h.jsxs)(y.a,{path:"/",children:[Object(h.jsx)(v,{}),Object(h.jsx)(k,{})]})]})]})})},ee=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,153)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(O,{initialState:{basket:[],user:null},reducer:P,children:Object(h.jsx)(Q,{})})}),document.getElementById("root")),ee()},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},87:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},99:function(e,t,c){}},[[141,1,2]]]);
//# sourceMappingURL=main.780b5c89.chunk.js.map