import{j as m,f as h,k as p,p as _,C as v,H as a,E as u,u as c,X as y,F as d,l as f}from"./primevue-2aef5b60.js";import{_ as g}from"./CCheckbox.vue_vue_type_script_setup_true_lang-11ec537d.js";import{_ as w}from"./CTextClip.vue_vue_type_script_setup_true_lang-2acd9278.js";import{a as x}from"./setting.store-e57f9b22.js";const C=d("div",{style:{width:"100%",height:"1px","background-color":"var(--surface-border)"}},null,-1),S=d("div",{class:"w-full text-center"},[d("i",{class:"pi pi-question-circle"})],-1),T=m({__name:"CFrontCommonMatchDisplaySites",props:{tab:{type:Number,required:!0},height:{type:String,required:!0}},setup(s){const t=s,e=x(),l=h(()=>e.privateUseItems.filter(n=>n["display"+t.tab]).length==e.privateUseItems.length);return(n,o)=>{const r=p("Column"),b=p("DataTable");return _(),v("div",{style:y({height:t.height})},[C,a(b,{value:c(e).privateUseItems,loading:c(e).loading,scrollable:!0,"scroll-height":"flex"},{empty:u(()=>[S]),default:u(()=>[a(r,{style:{"max-width":"1.6rem"}},{header:u(()=>[a(g,{value:l.value,onToggle:o[0]||(o[0]=i=>c(e).onTogglecPrivateDisplayAll(t.tab,l.value))},null,8,["value"])]),body:u(({data:i})=>[a(g,{value:i["display"+t.tab],onToggle:k=>c(e).onToggleDisplay(t.tab,i)},null,8,["value","onToggle"])]),_:1}),a(r,{field:"name",header:"데이타표시사이트",style:{"max-width":"160px"}},{body:u(({data:i})=>[a(w,{text:i.name,width:"150px"},null,8,["text"])]),_:1})]),_:1},8,["value","loading"])],4)}}}),D=m({__name:"CFrontCommonAllOdds",props:{label:{type:String,required:!0},matchId:{type:String,required:!0}},setup(s){const t=s,e=l=>{window.api.ipc("odds_window_create",l)};return(l,n)=>{const o=p("PButton");return _(),f(o,{label:t.label,icon:"pi pi-info-circle",class:"w-full p-button-success p-button-xs mt-1",disabled:!t.matchId,onClick:n[0]||(n[0]=r=>e(t.matchId))},null,8,["label","disabled"])}}}),F=m({__name:"CFrontCommonMatchFind",props:{siteId:{type:String,required:!0},keyword:{type:String,required:!0},label:{type:String,required:!0}},setup(s){const t=s,e=h(()=>t),l=(n,o)=>{n&&o&&window.api.ipc("browser_window_find",{site_id:n,keyword:o,from:"main"})};return(n,o)=>{const r=p("PButton");return _(),f(r,{label:t.label,icon:"pi pi-search",class:"w-full p-button-xs mt-1",disabled:!e.value.siteId||!e.value.keyword,onClick:o[0]||(o[0]=b=>l(e.value.siteId,e.value.keyword))},null,8,["label","disabled"])}}});export{D as _,F as a,T as b};
