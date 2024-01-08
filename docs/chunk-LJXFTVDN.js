import{A as L,B as j,C as R,D as P,E as I,F as X,G as V,H as v,I as O,J as Y,K as ee,O as te,Q as ie,R as ne,S as U,U as T,V as E,X as oe,a as q,b as H,c as A,d as J,e as C,f as Z,g as D,h as G,i as f,j as M,k as K,l as Q,m as N,n as l,o as h,p as c,q as m,r as o,s as r,t as d,u as W,v as _,w as y,x as S,y as a,z as g}from"./chunk-VKRPHOWX.js";var b=(()=>{let e=class e{constructor(i){this.httpClient=i,this.apiUrl="https://restcountries.com/v3.1",this.CacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]},byLanguage:{term:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.CacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.CacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountryRequest(i){return this.httpClient.get(i).pipe(A(()=>q([])))}searchByCapital(i){let n=`${this.apiUrl}/capital/${i}`;return this.getCountryRequest(n).pipe(C(p=>this.CacheStore.byCapital={term:i,countries:p}),C(()=>this.saveToLocalStorage()))}searchByCountry(i){let n=`${this.apiUrl}/name/${i}`;return this.getCountryRequest(n).pipe(C(p=>this.CacheStore.byCountries={term:i,countries:p}),C(()=>this.saveToLocalStorage()))}searchByRegion(i){let n=`${this.apiUrl}/region/${i}`;return this.getCountryRequest(n).pipe(C(p=>this.CacheStore.byRegion={region:i,countries:p}),C(()=>this.saveToLocalStorage()))}searchByLanguage(i){let n=`${this.apiUrl}/lang/${i}`;return this.getCountryRequest(n).pipe(C(p=>this.CacheStore.byLanguage={term:i,countries:p}),C(()=>this.saveToLocalStorage()))}searchByCode(i){return this.httpClient.get(`${this.apiUrl}/alpha/${i}`).pipe(H(n=>n.length>0?n[0]:null),A(n=>q(null)))}};e.\u0275fac=function(n){return new(n||e)(G(ee))},e.\u0275prov=Z({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ue=t=>["/countries/by",t];function ge(t,e){if(t&1&&(o(0,"tbody",10)(1,"tr",11)(2,"td",12),a(3),r(),o(4,"td",12),d(5,"img",13),r(),o(6,"td",12),a(7),r(),o(8,"td",12),a(9),r(),o(10,"td",12),a(11),R(12,"number"),r(),o(13,"td",12),a(14),r(),o(15,"td",12)(16,"a",14),a(17,"Ver m\xE1s"),r()()()()),t&2){let s=e.$implicit,i=e.index;l(3),g(i+1),l(2),c("src",s.flags.svg,N)("alt",s.name.common),l(2),g(s.name.common),l(2),g(s.capital),l(2),g(P(12,8,s.population)),l(3),g(s.region),l(2),c("routerLink",j(10,ue,s.cca2))}}var B=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=f({type:e,selectors:[["app-countries-country-table"]],inputs:{countries:"countries"},decls:29,vars:1,consts:[[1,"w-full","p-2"],[1,"overflow-x-auto"],[1,"w-full","bg-white","shadow-md","rounded-xl"],[1,"bg-blue-gray-100","text-gray-700"],[1,"py-3","px-4","text-left"],["class","text-blue-gray-900",4,"ngFor","ngForOf"],[1,"w-full","pt-5","px-4","mb-8","mx-auto"],[1,"text-sm","text-gray-700","py-1","text-center"],["href","https://www.material-tailwind.com/docs/html/table/?ref=tailwindcomponents","target","_blank",1,"text-gray-700","font-semibold"],["href","https://github.com/AlexanderAndreChavezCabana","target","_blank",1,"text-gray-700","font-semibold"],[1,"text-blue-gray-900"],[1,"border-b","border-blue-gray-200"],[1,"py-3","px-4"],[1,"w-5","h-5",3,"src","alt"],[1,"font-medium","text-blue-600","hover:text-blue-800",3,"routerLink"]],template:function(n,p){n&1&&(o(0,"div",0)(1,"div",1)(2,"table",2)(3,"thead")(4,"tr",3)(5,"th",4),a(6,"N\xB0"),r(),o(7,"th",4),a(8,"Flag"),r(),o(9,"th",4),a(10,"Country"),r(),o(11,"th",4),a(12,"Capital"),r(),o(13,"th",4),a(14,"Population"),r(),o(15,"th",4),a(16,"Region"),r(),o(17,"th",4),a(18,"Enlace"),r()()(),m(19,ge,18,12,"tbody",5),r(),o(20,"div",6)(21,"div",7),a(22," Made with "),o(23,"a",8),a(24,"Material Tailwind"),r(),a(25," by "),o(26,"a",9),a(27," Alexander Chavez Cabana"),r(),a(28,". "),r()()()()),n&2&&(l(19),c("ngForOf",p.countries))},dependencies:[V,ne,O]});let t=e;return t})();function fe(t,e){t&1&&d(0,"app-shared-loading-spinner")}function he(t,e){if(t&1&&(o(0,"div"),m(1,fe,1,0,"app-shared-loading-spinner",3),d(2,"app-countries-country-table",4),r()),t&2){let s=y();l(1),c("ngIf",s.isLoading),l(1),c("countries",s.countries)}}function ye(t,e){t&1&&(o(0,"div",5)(1,"div",6)(2,"div",7)(3,"p",8),a(4,"No hay paises que mostrar"),r(),o(5,"p"),a(6,"Realice una b\xFAsqueda"),r()()()())}var ae=(()=>{let e=class e{constructor(i){this.countryService=i,this.countries=[],this.isLoading=!1}ngOnInit(){this.countries=this.countryService.CacheStore.byCapital.countries,this.initialValue=this.countryService.CacheStore.byCapital.term}searchByCapital(i){this.isLoading=!0,this.countryService.searchByCapital(i).subscribe(n=>{this.countries=n,this.isLoading=!1})}};e.\u0275fac=function(n){return new(n||e)(h(b))},e.\u0275cmp=f({type:e,selectors:[["app-countries-by-capital-page"]],decls:5,vars:3,consts:[["placeholder","Buscar por capital",3,"initialValue","emitInput","onDebouncer"],[4,"ngIf","ngIfElse"],["warning",""],[4,"ngIf"],[3,"countries"],[1,"w-full","p-2"],[1,"overflow-x-auto"],["role","alert",1,"bg-orange-100","border-l-4","border-orange-500","text-orange-700","p-4"],[1,"font-bold"]],template:function(n,p){if(n&1&&(o(0,"div")(1,"app-shared-search-box",0),_("emitInput",function(x){return p.searchByCapital(x)})("onDebouncer",function(x){return p.searchByCapital(x)}),r()(),m(2,he,3,2,"div",1)(3,ye,7,0,"ng-template",null,2,I)),n&2){let u=S(4);l(1),c("initialValue",p.initialValue),l(1),c("ngIf",p.countries.length>0)("ngIfElse",u)}},dependencies:[v,T,E,B]});let t=e;return t})();function xe(t,e){t&1&&d(0,"app-shared-loading-spinner")}var ve=t=>({"bg-blue-500 text-white":t});function be(t,e){if(t&1){let s=W();o(0,"button",5),_("click",function(){let p=K(s).$implicit,u=y();return Q(u.searchByRegion(p))}),a(1),r()}if(t&2){let s=e.$implicit,i=y();c("ngClass",j(2,ve,i.selectedRegion===s)),l(1),L(" ",s," ")}}function Ce(t,e){if(t&1&&(o(0,"div",6),d(1,"app-countries-country-table",7),r()),t&2){let s=y();l(1),c("countries",s.countries)}}function _e(t,e){t&1&&(o(0,"div",8)(1,"div",9)(2,"div",10)(3,"p",11),a(4,"No hay paises que mostrar"),r(),o(5,"p"),a(6,"Seleccione una regi\xF3n"),r()()()())}var le=(()=>{let e=class e{constructor(i){this.countryService=i,this.countries=[],this.regions=["Africa","America","Asia","Europe","Oceania"],this.isLoading=!1}ngOnInit(){this.countries=this.countryService.CacheStore.byRegion.countries,this.selectedRegion=this.countryService.CacheStore.byRegion.region}searchByRegion(i){this.selectedRegion=i,this.isLoading=!0,this.countryService.searchByRegion(i).subscribe(n=>{this.countries=n,console.log(this.selectedRegion),this.isLoading=!1})}};e.\u0275fac=function(n){return new(n||e)(h(b))},e.\u0275cmp=f({type:e,selectors:[["app-countries-by-region-page"]],decls:7,vars:4,consts:[[4,"ngIf"],[1,"p-2","grid","grid-cols-5","gap-4","content-start"],["class","bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",3,"ngClass","click",4,"ngFor","ngForOf"],["class","p-2",4,"ngIf","ngIfElse"],["warning",""],[1,"bg-transparent","hover:bg-blue-500","text-blue-700","font-semibold","hover:text-white","py-2","px-4","border","border-blue-500","hover:border-transparent","rounded",3,"ngClass","click"],[1,"p-2"],[3,"countries"],[1,"w-full","p-2"],[1,"overflow-x-auto"],["role","alert",1,"bg-orange-100","border-l-4","border-orange-500","text-orange-700","p-4"],[1,"font-bold"]],template:function(n,p){if(n&1&&(o(0,"div"),m(1,xe,1,0,"app-shared-loading-spinner",0),o(2,"div",1),m(3,be,2,4,"button",2),r()(),m(4,Ce,2,1,"div",3)(5,_e,7,0,"ng-template",null,4,I)),n&2){let u=S(6);l(1),c("ngIf",p.isLoading),l(2),c("ngForOf",p.regions),l(1),c("ngIf",p.countries.length>0)("ngIfElse",u)}},dependencies:[X,V,v,E,B]});let t=e;return t})();function Se(t,e){t&1&&d(0,"app-shared-loading-spinner")}function Ie(t,e){if(t&1&&(o(0,"div"),m(1,Se,1,0,"app-shared-loading-spinner",3),d(2,"app-countries-country-table",4),r()),t&2){let s=y();l(1),c("ngIf",s.isLoading),l(1),c("countries",s.countries)}}function Ee(t,e){t&1&&(o(0,"div",5)(1,"div",6)(2,"div",7)(3,"p",8),a(4,"No hay paises que mostrar"),r(),o(5,"p"),a(6,"Realice una b\xFAsqueda"),r()()()())}var se=(()=>{let e=class e{constructor(i){this.countryService=i,this.countries=[],this.isLoading=!1}ngOnInit(){this.countries=this.countryService.CacheStore.byCountries.countries,this.initialValue=this.countryService.CacheStore.byCountries.term}searchByCountry(i){this.isLoading=!0,this.countryService.searchByCountry(i).subscribe(n=>{this.countries=n,this.isLoading=!1})}};e.\u0275fac=function(n){return new(n||e)(h(b))},e.\u0275cmp=f({type:e,selectors:[["app-countries-by-country-page"]],decls:5,vars:3,consts:[["placeholder","Buscar por pa\xEDs",3,"initialValue","emitInput","onDebouncer"],[4,"ngIf","ngIfElse"],["warning",""],[4,"ngIf"],[3,"countries"],[1,"w-full","p-2"],[1,"overflow-x-auto"],["role","alert",1,"bg-orange-100","border-l-4","border-orange-500","text-orange-700","p-4"],[1,"font-bold"]],template:function(n,p){if(n&1&&(o(0,"div")(1,"app-shared-search-box",0),_("emitInput",function(x){return p.searchByCountry(x)})("onDebouncer",function(x){return p.searchByCountry(x)}),r()(),m(2,Ie,3,2,"div",1)(3,Ee,7,0,"ng-template",null,2,I)),n&2){let u=S(4);l(1),c("initialValue",p.initialValue),l(1),c("ngIf",p.countries.length>0)("ngIfElse",u)}},dependencies:[v,T,E,B]});let t=e;return t})();function we(t,e){t&1&&d(0,"app-shared-loading-spinner")}function Be(t,e){if(t&1&&(o(0,"div",3),m(1,we,1,0,"app-shared-loading-spinner",4),d(2,"app-countries-country-table",5),r()),t&2){let s=y();l(1),c("ngIf",s.isLoading),l(1),c("countries",s.countries)}}function Le(t,e){t&1&&(o(0,"div",6)(1,"div",7)(2,"div",8)(3,"p",9),a(4,"No hay paises que mostrar"),r(),o(5,"p"),a(6,"Realice una b\xFAsqueda"),r()()()())}var pe=(()=>{let e=class e{constructor(i){this.countryService=i,this.countries=[],this.isLoading=!1}ngOnInit(){this.countries=this.countryService.CacheStore.byLanguage.countries,this.initialValue=this.countryService.CacheStore.byLanguage.term}searchByLanguage(i){this.isLoading=!0,this.countryService.searchByLanguage(i).subscribe(n=>{this.countries=n,this.isLoading=!1})}};e.\u0275fac=function(n){return new(n||e)(h(b))},e.\u0275cmp=f({type:e,selectors:[["app-by-language-page"]],decls:5,vars:3,consts:[["placeholder","Buscar por idioma",3,"initialValue","emitInput","onDebouncer"],["class","p-2",4,"ngIf","ngIfElse"],["warning",""],[1,"p-2"],[4,"ngIf"],[3,"countries"],[1,"w-full","p-2"],[1,"overflow-x-auto"],["role","alert",1,"bg-orange-100","border-l-4","border-orange-500","text-orange-700","p-4"],[1,"font-bold"]],template:function(n,p){if(n&1&&(o(0,"div")(1,"app-shared-search-box",0),_("emitInput",function(x){return p.searchByLanguage(x)})("onDebouncer",function(x){return p.searchByLanguage(x)}),r()(),m(2,Be,3,2,"div",1)(3,Le,7,0,"ng-template",null,2,I)),n&2){let u=S(4);l(1),c("initialValue",p.initialValue),l(1),c("ngIf",p.countries.length>0)("ngIfElse",u)}},dependencies:[v,T,E,B]});let t=e;return t})();function Te(t,e){if(t&1&&(o(0,"div",1)(1,"div",2),d(2,"img",3),r(),o(3,"div",4)(4,"h6",5),a(5),r(),o(6,"h4",6),a(7," Informaci\xF3n: "),r(),o(8,"dl",7)(9,"div",8)(10,"dt",9),a(11,"Zona Horaria:"),r(),o(12,"dd",10),a(13),r()(),o(14,"div",8)(15,"dt",9),a(16,"Poblaci\xF3n:"),r(),o(17,"dd",10),a(18),R(19,"number"),r()(),o(20,"div",8)(21,"dt",9),a(22,"\xC1rea:"),r(),o(23,"dd",10),a(24),R(25,"number"),r()(),o(26,"div",11)(27,"dt",12),a(28,"Traducciones:"),r(),o(29,"div",13)(30,"div",14),a(31),r()(),o(32,"div",13)(33,"div",14),a(34),r()(),o(35,"div",13)(36,"div",14),a(37),r()(),o(38,"div",13)(39,"div",14),a(40),r()(),o(41,"div",13)(42,"div",14),a(43),r()(),o(44,"div",15)(45,"div",14),a(46),r()()()()()()),t&2){let s=y();l(2),c("src",s.country.flags.png,N)("alt",s.country.flags.alt),l(3),L(" ",s.country.name.common," "),l(8),g(s.country.timezones),l(5),L("",P(19,12,s.country.population)," habitantes"),l(6),L("",P(25,14,s.country.area)," km2"),l(7),g(s.country.translations.ara.common),l(3),g(s.country.translations.kor.common),l(3),g(s.country.translations.jpn.common),l(3),g(s.country.translations.rus.common),l(3),g(s.country.translations.slk.common),l(3),g(s.country.translations.jpn.common)}}var ce=(()=>{let e=class e{constructor(i,n,p){this.activatedRoute=i,this.countryService=n,this.router=p}ngOnInit(){this.activatedRoute.params.pipe(J(({code:i})=>this.countryService.searchByCode(i))).subscribe(i=>(console.log(i),i?(console.log("Se encontr\xF3 un pa\xEDs"),this.country=i):this.router.navigateByUrl("")))}};e.\u0275fac=function(n){return new(n||e)(h(te),h(b),h(ie))},e.\u0275cmp=f({type:e,selectors:[["app-countries-country-page"]],decls:1,vars:1,consts:[["class","relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-full flex-row",4,"ngIf"],[1,"relative","flex","bg-clip-border","rounded-xl","bg-white","text-gray-700","shadow-md","w-full","max-w-full","flex-row"],[1,"relative","w-2/5","m-0","overflow-hidden","text-gray-700","bg-white","rounded-r-none","bg-clip-border","rounded-xl","shrink-0"],[1,"object-cover","w-full","h-full",3,"src","alt"],[1,"mr-6","ml-6","mt-3"],[1,"block","mb-1","font-sans","text-3xl","antialiased","font-semibold","leading-relaxed","tracking-normal","text-gray-700","uppercase"],[1,"block","mb-2","font-sans","text-2xl","antialiased","font-semibold","leading-snug","tracking-normal","text-blue-gray-900"],[1,"max-w","text-gray-900","divide-gray-200","dark:text-white","dark:divide-gray-700"],[1,"flex","flex-col","pb-3"],[1,"text-gray-500","md:text-sm","dark:text-gray-500"],[1,"block","font-sans","text-base","antialiased","font-normal","leading-relaxed","text-gray-700"],[1,"pb-6"],[1,"text-gray-500","pb-2","md:text-sm","dark:text-gray-500"],[1,"center","mr-1","mb-1","relative","inline-block","select-none","whitespace-nowrap","rounded-lg","bg-indigo-500","py-2","px-3.5","align-baseline","font-sans","text-xs","font-bold","uppercase","leading-none","text-white"],[1,"mt-px"],[1,"center","mr-1","relative","inline-block","select-none","whitespace-nowrap","rounded-lg","bg-indigo-500","py-2","px-3.5","align-baseline","font-sans","text-xs","font-bold","uppercase","leading-none","text-white"]],template:function(n,p){n&1&&m(0,Te,47,16,"div",0),n&2&&c("ngIf",p.country)},dependencies:[v,O]});let t=e;return t})();var Re=[{path:"by-capital",component:ae},{path:"by-country",component:se},{path:"by-region",component:le},{path:"by-language",component:pe},{path:"by/:code",component:ce},{path:"**",redirectTo:"by-capital"}],me=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=M({type:e}),e.\u0275inj=D({imports:[U.forChild(Re),U]});let t=e;return t})();var lt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=M({type:e}),e.\u0275inj=D({imports:[Y,me,oe]});let t=e;return t})();export{lt as CountriesModule};