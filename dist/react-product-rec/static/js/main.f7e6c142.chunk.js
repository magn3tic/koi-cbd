(this["webpackJsonpproduct-rec-embed"]=this["webpackJsonpproduct-rec-embed"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),c=n.n(i),o=n(2),s=n(1),l=function(e){var t=e.size,n=e.children;return r.a.createElement("div",{className:"k-inner k-inner--".concat(t)},n)},u=function(e){var t=e.size,n=e.tag,a=e.children,i="k-headline k-headline--".concat(t);return"h1"===n?r.a.createElement("h1",{className:i},a):r.a.createElement("h3",{className:i},a)},d=function(e){var t=e.children;return r.a.createElement("div",{className:"k-hero--bigtext"},r.a.createElement("p",null,t))},m=function(e){var t=e.variant,n=e.anchor,a=e.href,i=e.title,c=e.target,o=e.children,s=e.disabled,l=e.onClick,u="k-button k-button--".concat(t);return!1!==n?r.a.createElement("a",{href:a,title:i,className:u,target:c},o):r.a.createElement("button",{type:"button",className:u,disabled:s,onClick:l},o)},f=n(3),p=n(4),h=function(e,t,n){var a=t.indexOf(e),r=Object(p.a)(t);a>-1?r.splice(a,1):r.push(e),n(r)},b=function(){for(var e=[],t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return n.forEach((function(t){var n=typeof t;if("string"===n)e.push(t);else if(Array.isArray(t)&&t.length)e.push(t.join(" "));else if("object"===n)for(var a in t)hasOwnProperty.call(t,a)&&t[a]&&e.push(a)})),e.join(" ")},g=function(){return{width:window.innerWidth,height:window.innerHeight}},k=function(e){var t,n=e.src,i=e.onLoad,c=e.className,s=Object(a.useState)(!1),l=Object(o.a)(s,2),u=l[0],d=l[1];Object(a.useEffect)((function(){var e=new Image;e.onload=function(){i(),d(!0)},e.src=n}),[]);var m=b((t={},Object(f.a)(t,c,!0),Object(f.a)(t,"k-image-fill",!0),Object(f.a)(t,"k-image-loaded",u),t));return r.a.createElement("div",{style:{backgroundImage:"url(".concat(n,")")},className:m})};k.defaultProps={onLoad:function(){},className:""};var v=k;function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var E={hide:{opacity:0,y:40},show:{opacity:1,y:0}},O={initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0}},N={delay:.3,opacity:{ease:"linear",duration:.5},y:{type:"spring",duration:.5}},w={initial:{opacity:0,y:50},animate:{opacity:1,y:0}},j={duration:.4,ease:"easeInOut"},x={initial:function(e){var t={transition:j};return"none"===e?(t.opacity=0,t.transition={ease:"linear",duration:1}):t.x="next"===e?window.innerWidth:-window.innerWidth,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{opacity:1})},animate:{x:0,zIndex:99,transition:j},exit:function(e){return{x:"next"===e?-window.innerWidth:window.innerWidth,zIndex:0,transition:j}}},C=function(e){var t=e.direction,n=e.screenSize,i=e.setMinHeight,c=e.panelType,o=e.PanelBg,u=e.children,d=Object(a.createRef)(),m=Object(a.useRef)(window.innerHeight);return Object(a.useEffect)((function(){var e=d.current.offsetHeight;m.current=function(e){return e>window.innerHeight?e:window.innerHeight}(e),i(e)}),[n]),r.a.createElement(s.b.div,{className:"k-fshero--panel k-fshero--".concat(c),style:{height:m.current},variants:x,custom:t,initial:"initial",animate:"animate",exit:"exit"},r.a.createElement("div",{className:"k-fshero--centered",ref:d},r.a.createElement(l,{size:"md"},r.a.createElement(s.b.div,{initial:"initial",animate:"animate",variants:w,transition:N},u))),o)};C.defaultProps={PanelBg:""};var S=C,I=["intro","reason","feature","result"],P={default:"Why Are You Looking for CBD?",pet:"Why Are You Looking for CBD for your pet?"},B={default:[{name:"Stress / Anxiety",icon:"https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/stress-icon.png"},{name:"Sleep",icon:"https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/sleep-icon.png"},{name:"Aches & Pains",icon:"https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/aches-icon.png"},{name:"Skincare",icon:"https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/skincare-icon.png"},{name:"Relaxation",icon:"https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/relax-icon.png"},{name:"General Wellness",icon:"https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/wellness-icon.png"}],pet:[{name:"Stress / Anxiety",icon:"https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/stress-icon.png"},{name:"Aches & Pains",icon:"https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/aches-icon.png"},{name:"General Wellness",icon:"https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/wellness-icon.png"}]},K={default:["Discreet","Ease of Use","Easy To Bring Along","Topical","Fast Acting","Flavor","Flavorless"],pet:["Convenience","Can be added to pet food or treats"]},z={default:{"Tincture - Flavored":{id:[205342,205366,205491],sku:"",reasons:[0,1,4,5],features:[1,2,5],url:"/cbd-tinctures?flavored=true",description:"Find out why people around the world are using Koi Naturals full-spectrum CBD oils every day to restore balance to their lives.",image:"https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/results-fpo.jpg",weights:{}},"Tincture - Unflavored":{id:[205502],sku:"",reasons:[0,1,4,5],features:[1,2,6],url:"/product/koi-naturals-natural/",description:"Find out why people around the world are using Koi Naturals full-spectrum CBD oils every day to restore balance to their lives.",image:"https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/square-natural.jpg",weights:{}},"Gummies - Regular or Sour":{id:[30240],sku:"",reasons:[0,1,4,5],features:[0,1,2,5],url:"/product/cbd-gummies/",description:"CBD edibles with delectable flavors provide an even consistency of CBD to restore balance naturally.",image:"https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/square-edible.jpg",weights:{}},"Vape Juice - Flavored":{id:[30193,30198,30202,30211,30217],reasons:[0,4],features:[2,4,5],url:"/cbd-vape?flavored=true",description:"Enjoy an even distribution of CBD throughout your day. Vape them on their own or add to other e-liquids. Available in 7 awesome flavors.",image:"https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/square-vape.jpg",weights:{}},"Vape Juice - Unflavored":{id:[30207],sku:"",reasons:[0,4],features:[2,4,6],url:"/product/white-koi-cbd/",description:"Enjoy an even distribution of CBD throughout your day. Vape them on their own or add to other e-liquids.",image:"https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/square-natural-vape.jpg",weights:{}},"Healing Balm":{id:[424649,503515],reasons:[2],features:[3],url:"/cbd-topicals?balm_only=true",description:"Relax and rejuvenate with all-purpose CBD topicals. Perfect for promoting beautiful, naturally healthy skin.",image:"https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/square-balm.jpg",weights:{}},"Koi Lotion":{id:[559149],reasons:[3],features:[3],url:"/product/lavender-koi/",description:"Relax and rejuvenate with all-purpose CBD topicals. Perfect for promoting beautiful, naturally healthy skin.",image:"https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/square-lotion.jpg",weights:{}}},pet:{"Pet Spray":{id:[168056],sku:"PETSPRY",reasons:[],features:[1],url:"/product/koi-naturals-pet/",description:"Specially formulated to give your pet nutrition, combined with all the benefits of full-spectrum CBD.",image:"https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/square-spray.jpg",weights:{}},"Soft Pet Chews":{id:[116376],sku:"KPTSCHEWS",reasons:[],features:[0],url:"/product/koi-cbd-soft-chews/",description:"Specially formulated to give your pet nutrition, combined with all the benefits of full-spectrum CBD.",image:"https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/square-chews.jpg",weights:{}}}},D=r.a.createElement(v,{className:"k-fshero--intro-bg",src:"https://cdn2.hubspot.net/hubfs/5273025/mag/product-finder-hero.jpg"}),H=function(e){var t=e.direction,n=e.setMinHeight,a=e.screenSize,i=e.onPrimaryClick,c=e.onSecondaryClick;return r.a.createElement(S,{direction:t,screenSize:a,setMinHeight:n,panelType:"intro",PanelBg:D},r.a.createElement(u,{size:"lg"},"Welcome To The Koi CBD Product Finder"),r.a.createElement(d,null,"I'm interested in CBD products for..."),r.a.createElement("div",{className:"k-hero--action"},r.a.createElement(m,{anchor:!1,variant:"primary",onClick:i},"Myself or a Loved One \u2192"),r.a.createElement(m,{anchor:!1,variant:"secondary",onClick:c},"My Pet \u2192")))};H.defaultProps={onPrimaryClick:function(){},onSecondaryClick:function(){}};var M=H,R=function(e){var t=e.disabled,n=e.onNextClick,a=e.children;return r.a.createElement("div",{className:"k-fshero--btn"},r.a.createElement(s.b.div,{variants:E,initial:!1,animate:t?"hide":"show"},r.a.createElement(m,{anchor:!1,variant:"primary",disabled:t,onClick:n},a)))},T=function(e){var t=e.direction,n=e.mode,i=e.screenSize,c=e.reasons,o=e.setReasons,s=e.setMinHeight,l=e.onNextClick,d=Object(a.useRef)(null);return r.a.createElement(S,{direction:t,screenSize:i,setMinHeight:s,panelType:"reason"},r.a.createElement(u,{size:"md"},P[n]),r.a.createElement("ul",{className:"k-reasons--list"},B[n].map((function(e,t){return r.a.createElement("li",{key:t,className:b({"k-active":c.indexOf(e.name)>-1})},r.a.createElement("label",{htmlFor:"reason-".concat(t)},r.a.createElement("input",{id:"reason-".concat(t),type:"checkbox",checked:c.indexOf(e.name)>-1,onFocus:function(e){return n=t,d.current=n;var n},onChange:function(t){return h(e.name,c,(function(e){return o(e)}))}}),r.a.createElement("div",{className:"k-reason--icon"},r.a.createElement("figure",null,r.a.createElement("span",{className:"k-reason--icon-bg"}),r.a.createElement("span",{className:"k-reason--icon-img",style:{backgroundImage:"url(".concat(e.icon,")")}}))),r.a.createElement("div",{className:"k-reason--title"},r.a.createElement("h5",null,e.name))))}))),r.a.createElement(R,{disabled:0===c.length,onNextClick:l},"Next \u2192"))};T.defaultProps={setReasons:function(){},onNextClick:function(){}};var F=T,A=function(e){var t=e.direction,n=e.mode,a=e.screenSize,i=e.features,c=e.setFeatures,o=e.setMinHeight,s=e.onNextClick;return r.a.createElement(S,{direction:t,screenSize:a,setMinHeight:o,panelType:"feature"},r.a.createElement(u,{size:"md"},"Which Features of CBD are Most Important to You?"),r.a.createElement("ul",{className:"k-reasons--list"},K[n].map((function(e,t){return r.a.createElement("li",{key:t,className:b({"k-active":i.indexOf(e)>-1})},r.a.createElement("label",{htmlFor:"feature-".concat(t)},r.a.createElement("input",{id:"feature-".concat(t),type:"checkbox",checked:i.indexOf(e)>-1,onChange:function(t){return h(e,i,(function(e){return c(e)}))}}),r.a.createElement("div",{className:"k-feature--icon"},r.a.createElement("span",null,"0",t+1)),r.a.createElement("div",{className:"k-reason--title"},r.a.createElement("h5",null,e))))}))),r.a.createElement(R,{disabled:0===i.length,onNextClick:s},"Get Results \u2192"))};A.defaultProps={onNextClick:function(){}};var W=A,q=function(e,t,n){return t.map((function(t){var a=e.indexOf(t);return n.indexOf(a)})).filter((function(e){return e>-1}))},L=function(e){var t=e.direction,n=e.mode,i=e.reasons,c=e.screenSize,d=e.features,f=e.setMinHeight,h=Object(a.useRef)(),b=Object(a.useRef)(function(){var e=document.getElementById("k-products-data");return JSON.parse(e.textContent)}());Object(a.useEffect)((function(){f(h.current.offsetHeight)}),[c]);var g=function(e,t,n,a){var r=z[a],i=B[a].map((function(e){return e.name})),c=K[a],s=Object.keys(r),l=s.reduce((function(e,a){var o=r[a].reasons,s=r[a].features,l=q(i,t,o),u=q(c,n,s);return e[a]=(l.length+u.length)/(o.length+s.length),e}),{});console.log("Match Relevance: ",l);var u=Object(p.a)(s);u.sort((function(e,t){return l[t]-l[e]})),console.log("Matching groups: ",u);var d=u.reduce((function(e,t,n){return 0===n?e:[].concat(Object(p.a)(e),Object(p.a)(r[t].id))}),[]),m=r[u[0]],f=m.description,h=m.url,b=m.image;return{hero:{heading:u[0],description:f,url:h,image:b},products:d.map((function(t){var n=e.filter((function(e){return t===e.ID}));return Object(o.a)(n,1)[0]}))}}(b.current,i,d,n),k=g.hero,y=g.products,E=k.heading.includes("Vape"),O=y.filter((function(e){return!e.Name.includes("Vape")}));return r.a.createElement(s.b.div,{className:"k-fshero--panel k-fshero--result",variants:x,custom:t,initial:"initial",animate:"animate",exit:"exit"},r.a.createElement("div",{className:"k-fshero--result-parent",ref:h},k&&r.a.createElement("div",{className:"k-fshero--results-hero"},r.a.createElement("div",{className:"k-resulthero--top-img"},r.a.createElement("figure",null,r.a.createElement(v,{className:"k-fshero--intro-bg",src:k.image}))),r.a.createElement("div",{className:"k-resulthero--top-info"},r.a.createElement("div",{className:"k-resulthero--top-liner"},r.a.createElement("small",null,"Your Results Are In:"),r.a.createElement(u,{tag:"h1",size:"md"},k.heading),r.a.createElement("p",null,k.description),r.a.createElement("div",{className:"k-resulthero--top-btn"},r.a.createElement(m,{variant:"primary",anchor:!0,href:k.url},"Shop Now \u2192"),r.a.createElement("span",null,"Scroll For More"))))),y&&r.a.createElement("div",{className:"k-fshero--results-body"},r.a.createElement(l,{size:"md"},r.a.createElement(u,{tag:"h1",size:"md"},"More Results For You")),r.a.createElement(l,{size:"md"},r.a.createElement("div",{className:"k-fsresults--related"},E&&y.map((function(e,t){return r.a.createElement("div",{key:t,className:"k-productcard"},r.a.createElement("div",{className:"k-productcard--liner"},r.a.createElement("figure",{className:"k-figure"},r.a.createElement("img",{src:e.Images.split(",")[0],alt:e.Name})),r.a.createElement("div",{className:"k-productcard--title"},r.a.createElement("h3",{className:"k-headline k-headline--fake k-weight--lg"},e.Name)),r.a.createElement("div",{className:"k-productcard--action"},r.a.createElement("a",{href:e.LinkToProduct,className:"k-button k-button--default"},"Buy Now"))))})),!E&&O.map((function(e,t){return r.a.createElement("div",{key:t,className:"k-productcard"},r.a.createElement("div",{className:"k-productcard--liner"},r.a.createElement("figure",{className:"k-figure"},r.a.createElement("img",{src:e.Images.split(",")[0],alt:e.Name})),r.a.createElement("div",{className:"k-productcard--title"},r.a.createElement("h3",{className:"k-headline k-headline--fake k-weight--lg"},e.Name)),r.a.createElement("div",{className:"k-productcard--action"},r.a.createElement("a",{href:e.LinkToProduct,className:"k-button k-button--default"},"Buy Now"))))})))))))},V=function(e){var t=e.activeIndex,n=e.panelType,a=e.onBackClick,i=e.onStartOver;return r.a.createElement(s.b.div,{variants:O,transition:N,initial:"initial",animate:"animate",exit:"exit"},r.a.createElement("div",{className:"k-fshero--fixed"},r.a.createElement(l,{size:"lg"},r.a.createElement(s.a,null,"result"!==n&&r.a.createElement(s.b.div,{key:"btns-initial",className:"k-fshero--fixed-btns",initial:{opacity:0,y:-50},animate:{opacity:1,y:0,position:"relative"},exit:{opacity:0,y:-50,position:"absolute"},transition:N},r.a.createElement("button",{type:"button",className:"k-fshero--back",onClick:a},"\u2190 Back"),r.a.createElement("div",{className:"k-fshero--current"},r.a.createElement("span",null,"0",t)," / ",r.a.createElement("span",null,"02")))),r.a.createElement(s.a,null,"result"===n&&r.a.createElement(s.b.div,{key:"btns-result",className:"k-fshero--fixed-btns",initial:{opacity:0,y:50},animate:{opacity:1,y:0,position:"relative"},exit:{opacity:0,y:-50,position:"absolute"},transition:N},r.a.createElement("button",{type:"button",className:"k-fshero--back",onClick:i},"\u2190 Start Over"))))))},Y=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)("intro"),l=Object(o.a)(c,2),u=l[0],d=l[1],m=Object(a.useState)("default"),f=Object(o.a)(m,2),p=f[0],h=f[1],b=Object(a.useState)([]),k=Object(o.a)(b,2),v=k[0],y=k[1],E=Object(a.useState)([]),O=Object(o.a)(E,2),N=O[0],w=O[1],j=Object(a.useState)("none"),x=Object(o.a)(j,2),C=x[0],S=x[1],P=Object(a.useState)("none"),B=Object(o.a)(P,2),K=B[0],z=B[1],D=Object(a.useState)(g()),H=Object(o.a)(D,2),R=H[0],T=H[1],A=Object(a.useMemo)((function(){return I.indexOf(u)}),[u]),q=Object(a.useMemo)((function(){return A>0&&A<=I.length}),[A]),Y=Object(a.useRef)(null);Object(a.useEffect)((function(){n||(window.addEventListener("load",(function(){return i(!0)})),window.addEventListener("resize",(function(){Y.current&&window.clearTimeout(Y.current),Y.current=window.setTimeout((function(){T(g())}),350)})))}),[]);var J=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"next";e.preventDefault(),z(n),d(t)},G=function(e,t){h(t),J(e,"reason","next")},U={direction:K,mode:p,setMinHeight:S,screenSize:R};return r.a.createElement("section",{className:"k-fshero k-fshero-panel-".concat(u," k-fshero-mode-").concat(p),style:{minHeight:C,backgroundImage:"url(".concat("https://cdn2.hubspot.net/hubfs/5273025/mag/KOI/koi-product-rec-bg.jpg",")")}},q&&r.a.createElement(V,{key:"controls",activeIndex:A,panelType:u,onStartOver:function(e){return function(e){e.preventDefault(),y([]),w([]),h("default"),J(e,"intro","prev")}(e)},onBackClick:function(e){return J(e,I[A-1],"prev")}}),n&&r.a.createElement(s.a,{custom:K},"intro"===u&&r.a.createElement(M,Object.assign({},U,{key:"intro",onPrimaryClick:function(e){return G(e,"default")},onSecondaryClick:function(e){return G(e,"pet")}}))||"reason"===u&&r.a.createElement(F,Object.assign({},U,{key:"reason",reasons:v,setReasons:y,onNextClick:function(e){return J(e,"feature")}}))||"feature"===u&&r.a.createElement(W,Object.assign({},U,{key:"feature",features:N,setFeatures:w,onNextClick:function(e){return J(e,"result")}}))||"result"===u&&r.a.createElement(L,Object.assign({},U,{key:"result",reasons:v,features:N}))))},J=(n(12),document.getElementById("k-product-rec-root"));c.a.render(r.a.createElement(Y,null),J)},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.f7e6c142.chunk.js.map