import{j as y,f as v,k as i,p,C as c,H as o,E as b,F as e,M as C,I as d,G as _,u as S,N as T,L as B,V as D,W as k}from"./primevue-2aef5b60.js";import{D as r}from"./dayjs.min-185a5676.js";import{u as I}from"./user.store-e2ce3946.js";import{a as M}from"./setting.store-e57f9b22.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const V=""+new URL("icon-044a71e4.png",import.meta.url).href,n=t=>(D("data-v-14037102"),t=t(),k(),t),z=["innerHTML"],L={class:"grid grid-nogutter",style:{"background-color":"#3e526d"}},P=n(()=>e("div",{class:"col-fixed drag-enable",style:{width:"25px",height:"30px"}},[e("img",{src:V,style:{width:"15px","margin-top":"7px","margin-left":"5px"}})],-1)),H=n(()=>e("div",{class:"col-fixed drag-enable",style:{width:"100px",height:"30px","font-size":"15px","line-height":"28px"}}," 자비스 ",-1)),j={class:"col text-right drag-enable"},E=n(()=>e("i",{class:"pi pi-calendar"},null,-1)),F=n(()=>e("i",{class:"pi pi-telegram ml-2"},null,-1)),U={class:"col-fixed text-right",style:{width:"60px"}},Y=y({__name:"TitleBar",props:{layout:{type:String,required:!0}},setup(t){const m=t,a=I();M();const s=v(()=>m.layout=="front"?{use:!0,label:`사용 만료일 : ${r(a.item.end_at).format("YY/MM/DD")} 23:59`,warn:r(a.item.end_at).diff(r(),"day")<3}:{use:!1,label:"",class:""}),u=()=>{window.api.ipc("main_window_minimize",{})},g=()=>{window.api.ipc("main_window_close",{})};return(q,G)=>{const h=i("Toast"),f=i("ConfirmPopup"),x=i("ConfirmDialog"),l=i("PButton");return p(),c(B,null,[o(h),o(f,{group:"popup"}),o(x,{group:"dialog"},{message:b(({message:w})=>[e("div",{innerHTML:w.message},null,8,z)]),_:1}),e("div",L,[P,H,e("div",j,[s.value.use?(p(),c("div",{key:0,class:C(["text-center","mt-1","border-round",{"bg-blue-400":!s.value.warn},{"bg-red-400":s.value.warn}]),style:{float:"right",width:"270px",height:"24px","line-height":"24px"}},[E,d(" "+_(s.value.label)+" ",1),F,d(" "+_(S(a).item.seller),1)],2)):T("",!0)]),e("div",U,[o(l,{icon:"pi pi-minus",class:"p-button-rounded p-button-text",style:{color:"white"},onClick:u}),o(l,{icon:"pi pi-power-off",class:"p-button-rounded p-button-text p-mr-2",style:{color:"white"},onClick:g})])])],64)}}});const K=N(Y,[["__scopeId","data-v-14037102"]]);export{K as T};
