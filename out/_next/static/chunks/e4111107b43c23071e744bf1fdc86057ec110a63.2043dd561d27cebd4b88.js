(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{TSYQ:function(t,e,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)&&n.length){var c=o.apply(null,n);c&&t.push(c)}else if("object"===i)for(var a in n)r.call(n,a)&&n[a]&&t.push(a)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},mgtA:function(t,e,r){"use strict";r.d(e,"a",(function(){return U}));var n=r("nKUr"),o=r("CafY"),i=r("tFLP"),c=r.n(i),a=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),l=function(t){function e(e){var r=t.call(this,e)||this;return r.name="AssertionError",r}return a(e,t),e}(Error);function s(t,e){if(!t)throw new l(e)}function u(t){var e=Object.entries(t).filter((function(t){var e=t[1];return void 0!==e&&null!==e})).map((function(t){var e=t[0],r=t[1];return encodeURIComponent(e)+"="+encodeURIComponent(String(r))}));return e.length>0?"?"+e.join("&"):""}var h=r("q1tI"),p=r.n(h),d=r("TSYQ"),f=r.n(d),w=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),b=function(){return(b=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},y=function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function c(t){try{l(n.next(t))}catch(e){i(e)}}function a(t){try{l(n.throw(t))}catch(e){i(e)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(c,a)}l((n=n.apply(t,e||[])).next())}))},v=function(t,e){var r,n,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,n=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(a){i=[6,a],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},j=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r},m=function(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then},O=function(t,e){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-t/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-e/2}},g=function(t,e){return{top:(window.screen.height-e)/2,left:(window.screen.width-t)/2}};function k(t,e,r){var n=e.height,o=e.width,i=j(e,["height","width"]),c=b({height:n,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),a=window.open(t,"",Object.keys(c).map((function(t){return t+"="+c[t]})).join(", "));if(r)var l=window.setInterval((function(){try{(null===a||a.closed)&&(window.clearInterval(l),r(a))}catch(t){console.error(t)}}),1e3);return a}var _=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.openShareDialog=function(t){var r=e.props,n=r.onShareWindowClose,o=r.windowHeight,i=void 0===o?400:o,c=r.windowPosition,a=void 0===c?"windowCenter":c,l=r.windowWidth,s=void 0===l?550:l;k(t,b({height:i,width:s},"windowCenter"===a?O(s,i):g(s,i)),n)},e.handleClick=function(t){return y(e,void 0,void 0,(function(){var e,r,n,o,i,c,a,l,s,u;return v(this,(function(h){switch(h.label){case 0:return e=this.props,r=e.beforeOnClick,n=e.disabled,o=e.networkLink,i=e.onClick,c=e.url,a=e.openShareDialogOnClick,l=e.opts,s=o(c,l),n?[2]:(t.preventDefault(),r?(u=r(),m(u)?[4,u]:[3,2]):[3,2]);case 1:h.sent(),h.label=2;case 2:return a&&this.openShareDialog(s),i&&i(t,s),[2]}}))}))},e}return w(e,t),e.prototype.render=function(){var t=this.props,e=(t.beforeOnClick,t.children),r=t.className,n=t.disabled,o=t.disabledStyle,i=t.forwardedRef,c=(t.networkLink,t.networkName),a=(t.onShareWindowClose,t.openShareDialogOnClick,t.opts,t.resetButtonStyle),l=t.style,s=(t.url,t.windowHeight,t.windowPosition,t.windowWidth,j(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),u=f()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},r),h=b(b(a?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},l),n&&o);return p.a.createElement("button",b({},s,{"aria-label":s["aria-label"]||c,className:u,onClick:this.handleClick,ref:i,style:h}),e)},e.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},e}(h.Component),x=function(){return(x=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};var C=function(t,e,r,n){function o(o,i){var c=r(o),a=x({},o);return Object.keys(c).forEach((function(t){delete a[t]})),p.a.createElement(_,x({},n,a,{forwardedRef:i,networkName:t,networkLink:e,opts:r(o)}))}return o.displayName="ShareButton-"+t,Object(h.forwardRef)(o)};var S=C("facebook",(function(t,e){var r=e.quote,n=e.hashtag;return s(t,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+u({u:t,quote:r,hashtag:n})}),(function(t){return{quote:t.quote,hashtag:t.hashtag}}),{windowWidth:550,windowHeight:400}),N=function(){return(N=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},P=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r};function A(t){var e=function(e){var r=e.bgStyle,n=e.borderRadius,o=e.iconFillColor,i=e.round,c=e.size,a=P(e,["bgStyle","borderRadius","iconFillColor","round","size"]);return p.a.createElement("svg",N({viewBox:"0 0 64 64",width:c,height:c},a),i?p.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:t.color,style:r}):p.a.createElement("rect",{width:"64",height:"64",rx:n,ry:n,fill:t.color,style:r}),p.a.createElement("path",{d:t.path,fill:o}))};return e.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},e}var V=A({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var H=C("linkedin",(function(t,e){var r=e.title,n=e.summary,o=e.source;return s(t,"linkedin.url"),"https://linkedin.com/shareArticle"+u({url:t,mini:"true",title:r,summary:n,source:o})}),(function(t){return{title:t.title,summary:t.summary,source:t.source}}),{windowWidth:750,windowHeight:600}),z=A({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});var R=C("telegram",(function(t,e){var r=e.title;return s(t,"telegram.url"),"https://telegram.me/share/"+u({url:t,text:r})}),(function(t){return{title:t.title}}),{windowWidth:550,windowHeight:400}),E=A({color:"#37aee2",networkName:"telegram",path:"m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"});var W=C("email",(function(t,e){var r=e.subject,n=e.body,o=e.separator;return"mailto:"+u({subject:r,body:n?n+o+t:t})}),(function(t){return{subject:t.subject,body:t.body,separator:t.separator||" "}}),{openShareDialogOnClick:!1,onClick:function(t,e){window.location.href=e}}),F=A({color:"#7f7f7f",networkName:"email",path:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"});var D=C("twitter",(function(t,e){var r=e.title,n=e.via,o=e.hashtags,i=void 0===o?[]:o,c=e.related,a=void 0===c?[]:c;return s(t,"twitter.url"),s(Array.isArray(i),"twitter.hashtags is not an array"),s(Array.isArray(a),"twitter.related is not an array"),"https://twitter.com/share"+u({url:t,text:r,via:n,hashtags:i.length>0?i.join(","):void 0,related:a.length>0?a.join(","):void 0})}),(function(t){return{hashtags:t.hashtags,title:t.title,via:t.via,related:t.related}}),{windowWidth:550,windowHeight:400}),M=A({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var B=C("whatsapp",(function(t,e){var r=e.title,n=e.separator;return s(t,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+u({text:r?r+n+t:t})}),(function(t){return{title:t.title,separator:t.separator||" "}}),{windowWidth:550,windowHeight:400}),Z=A({color:"#25D366",networkName:"whatsapp",path:"m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"}),L=r("NmbW");r("+zXf");function U(t){var e=t.title,r=t.url,i=t.children;return Object(n.jsx)(o.a,{title:e,children:Object(n.jsxs)("section",{className:c.a.postContent,children:[Object(n.jsx)("article",{children:i}),Object(n.jsxs)("aside",{children:[Object(n.jsx)("h4",{className:"sub-title",children:"Compartilhe esse artigo"}),Object(n.jsxs)("div",{className:c.a.shareButtons,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(S,{url:r,children:Object(n.jsx)(V,{})}),Object(n.jsx)(H,{url:r,children:Object(n.jsx)(z,{})}),Object(n.jsx)(R,{url:r,children:Object(n.jsx)(E,{})})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(W,{url:r,children:Object(n.jsx)(F,{})}),Object(n.jsx)(D,{url:r,children:Object(n.jsx)(M,{})}),Object(n.jsx)(B,{url:r,children:Object(n.jsx)(Z,{})})]})]}),Object(n.jsx)("div",{className:c.a.recentPosts}),Object(n.jsxs)("div",{className:c.a.instagramFeed,children:[Object(n.jsx)("h4",{className:"sub-title",children:"Fique por dentro"}),Object(n.jsx)(L.a,{token:"IGQVJVOTJMMV9RVHhRSUtwaXRaUnFzcHRJcVlMUWFFbjNwVVZANX1RpTDdibWd4amkyTlM0ZAEE4d2U1T3BmR1RIZAzNZAVUFhRVFPUWt1ZAlZAScTFuS3hGZAndZAeXZAsdHFzcU5URlBmMTFKcEVfaVJCdi0wVwZDZD",counter:"9"})]})]})]})})}},tFLP:function(t,e,r){t.exports={postContent:"post_postContent__3AiJv",shareButtons:"post_shareButtons__1jp64",post:"post_post__2L3yr",details:"post_details__skc-N",title:"post_title__1x4ZK",author:"post_author__3bLD3",date:"post_date__3KhHl"}}}]);