import{J as f,L as l,M as d,N as u,P as h,S as a,T as g,U as C,W as b,X as y,g as r,i as c,j as i,r as m,s as p,t as s}from"./chunk-VKRPHOWX.js";var N=[{path:"about",component:g},{path:"search",component:C},{path:"countries",loadChildren:()=>import("./chunk-LJXFTVDN.js").then(o=>o.CountriesModule)},{path:"**",redirectTo:"countries"}],v=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[a.forRoot(N),a]});let o=t;return o})();var w=(()=>{let t=class t{constructor(){this.title="CountryApp"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"flex","bg-gray-50"],[1,"bg-gray-50","h-screen"],[1,"w-full","bg-gray-100","h-screen","overflow-auto","p-2"]],template:function(e,S){e&1&&(m(0,"div",0)(1,"div",1),s(2,"app-shared-sidebar"),p(),m(3,"div",2),s(4,"router-outlet"),p()())},dependencies:[h,b]});let o=t;return o})();var x=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t,bootstrap:[w]}),t.\u0275inj=r({imports:[f,u,v,y,l]});let o=t;return o})();d().bootstrapModule(x).catch(o=>console.error(o));
