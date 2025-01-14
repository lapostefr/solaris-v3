import{r as g,V as dt,m as tt,M as at,c as z,w as Ge,a4 as ut,k as nt,O as Xe,o as T,a as E,n as f,u as B,z as W,A as Z,v as ue,F as Ee,q as Pe,p as P,t as ae,B as We,G as Te,C as Je,J as lt,E as Me,x as Qe,y as ct,j as pt,H as je,D as vt,l as mt}from"./vue.esm-bundler-BV06ZB-3.js";import{S as Oe}from"./Icon-R0HSrbr6.js";import{S as yt}from"./Modal-NRfyb4RI.js";import{S as Ze}from"./Button-DIKv7yJx.js";import{a as ft,b as gt,o as bt}from"./index-Lw3s2UWX.js";import{_ as st}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{i as et}from"./isValidDate-CEoz4-cc.js";import{g as ht}from"./generateId-DPOzJEtM.js";function rt(ke,$e,M,o,Y,Ie,ce,S){const K=g(-1e15),pe=g(!1),ne=dt({startDay:"",startMonth:"",startYear:K.value,endDay:"",endMonth:"",endYear:K.value,startDayInput:"",startMonthInput:"",startYearInput:"",endDayInput:"",endMonthInput:"",endYearInput:"",startNewTime:K.value,endNewTime:K.value}),le=g([{abbr:"Lun",name:"Lundi"},{abbr:"Mar",name:"Mardi"},{abbr:"Mer",name:"Mercredi"},{abbr:"Jeu",name:"Jeudi"},{abbr:"Ven",name:"Vendredi"},{abbr:"Sam",name:"Samedi"},{abbr:"Dim",name:"Dimanche"}]),Se=g(["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]),xe=g(864e5),ve=g([{d:1,m:1},{d:1,m:5},{d:8,m:5},{d:14,m:7},{d:15,m:8},{d:1,m:11},{d:11,m:11},{d:25,m:12}]),me=g([17152488e5,17485128e5,17787528e5,18095976e5,18428616e5,17119656e5,17452296e5,17754696e5,18063144e5,18395784e5,17161992e5,17494632e5,17797032e5,1810548e6,1843812e6]),qe=(F,ee,U,b)=>{let A=ce.value,a=M.value,L=Y.value!==void 0?Y.value:o.value,h=ke.value,k=$e.value,D=S.value;b&&(A=b.weekend.value,a=b.disabledDaysByWeek.value,L=b.bankHolidays.value?b.bankHolidays.value:b.holidays.value,k=b.blackList.value,h=b.range.value,D=b.whiteList.value);let O=!1;const q=new Date(F,ee,U).getTime(),x=new Date(q).getDay(),H=!!(A&&[0,6].includes(x)),J=!!(a&&a.includes(x));if(L){const _e=ve.value.filter(oe=>oe.d===U&&oe.m-1===ee),re=new Date(F,ee,U,12,0,0,0).getTime(),fe=me.value.includes(re);O=_e.length>0||fe}const te=!!(k&&k.length>0&&k.includes(q)),ye=!!(D&&D.length>0&&!D.includes(q)),se=!!(h&&h.min&&q<h.min),G=!!(h&&h.max&&q>h.max),j=32-new Date(F,ee,32).getDate(),X=Array.from({length:j},(_e,re)=>re+1),Q=U>X.length;return H||J||O||te||ye||se||G||Q};return pe.value=Ie.value==="interval",{nullTime:K,interval:pe,inputData:ne,weekdays:le,allMonths:Se,oneDay:xe,holidaysList:ve,isDisabled:qe}}const kt={class:"lp-datepicker__direction"},_t=["aria-label","onKeydown"],Dt=["aria-label","onKeydown"],wt={class:"lp-datepicker__content"},Mt={class:"lp-datepicker__head"},$t={class:"lp-datepicker__head-month"},It={class:"lp-datepicker__head-year"},St=["title"],xt=["aria-current"],ot=tt({__name:"DatepickerDays",props:{startNumber:{},endNumber:{},isInModal:{type:Boolean},isSmall:{type:Boolean,default:!0},size:{default:"large"},blackList:{},buttonLayout:{default:"centered"},range:{},disabledDaysByWeek:{},holidays:{type:Boolean},bankHolidays:{type:Boolean},typage:{default:"default"},weekend:{type:Boolean},whiteList:{},withReset:{type:Boolean}},emits:["selection","hide","opened","reset"],setup(ke,{emit:$e}){const M=ke,o=$e,Y=g(null),Ie=g(null),{range:ce,blackList:S,disabledDaysByWeek:K,holidays:pe,bankHolidays:ne,typage:le,weekend:Se,whiteList:xe}=at(M),{nullTime:ve,allMonths:me,weekdays:qe,interval:F,isDisabled:ee,oneDay:U}=rt(ce,S,K,pe,ne,le,Se,xe),b=g(0),A=g(0),a=g([]),L=g([]),h=g(!1),k=g(0),D=g(0),O=g(!1),q=ft(),x=z(()=>{const l=!M.startNumber||M.startNumber===ve.value,s=!M.endNumber||M.endNumber===ve.value;if(!F.value&&l||F.value&&l&&s)return[];const r=[];return l||r.push(M.startNumber),s||r.push(M.endNumber),r}),H=z(()=>{if(x.value.length===0)return[];const s=[x.value[0]];if(F.value&&x.value.length>1){const r=x.value[1];s.push(r)}return s}),J=z(()=>{const s=F.value?2:1,r=new Date(j.value.year,j.value.month+b.value+-1),d=new Date(j.value.year,j.value.month+b.value+s);return{left:{month:r.getMonth(),year:r.getFullYear()},right:{month:d.getMonth(),year:d.getFullYear()}}}),te=z(()=>{const l=new Date(a.value[0]).getMonth(),s=new Date(a.value[1]).getMonth(),r=($=0)=>new Date(j.value.year,j.value.month+b.value+$),d=r().getMonth(),p=r(1).getMonth(),c=Ce(l,s),i=c.includes(d),w=c.includes(p),y=i?"lp-datepicker--has-interval":"",_=w?"lp-datepicker--has-interval":"",N=[{...X(r().getFullYear(),r().getMonth()),index:0,intervalClass:y}];if(F.value){const $={...X(r(1).getFullYear(),r(1).getMonth()),index:1,intervalClass:_};N.push($)}return N}),ye=z(()=>M.isInModal?"fromModal":"fromDropdown"),se=z(()=>{const l=M.size==="small",s=M.size==="medium",r=M.size==="large";return{isSmall:l,isMedium:s,isLarge:r}}),G=z(()=>{const l=new Date;return l.setHours(12,0,0,0),{time:l.getTime(),date:l}});Ge(D,l=>{l&&(b.value=0)}),Ge(()=>[x.value,O.value],([l,s])=>{l.length===2&&s&&(A.value=0)});const j=z(()=>{if(D.value){const d=D.value,p=new Date(d),c=p.getFullYear(),i=p.getMonth();return{year:c,month:i,time:d}}if(x.value.length===0&&!O.value)return{year:G.value.date.getFullYear(),month:G.value.date.getMonth(),time:G.value.time};if(x.value.length===2&&O.value){const d=new Date(x.value[1]).getFullYear(),p=new Date(x.value[1]).getMonth()-A.value,c=x.value[1];return{year:d,month:p,time:c}}const l=new Date(x.value[0]).getFullYear(),s=new Date(x.value[0]).getMonth(),r=x.value[0];return{year:l,month:s,time:r}}),X=(l,s)=>{const r=Q(l,s),d=_e(l,s),p=re(r.length,d.length,l,s),c=[...d,...r,...p],i=7;return{days:r,month:s,next:p,previous:d,year:l,weeklyList:c.reduce((y,_,R)=>{const N=Math.floor(R/i);return y[N]=y[N]||[],y[N].push(_),y},[])}},Q=(l,s)=>{const r=32-new Date(l,s,32).getDate();return Array.from({length:r},(c,i)=>i+1).map((c,i)=>{const w=new Date(l,s,c,12,0,0).getTime(),y=De(l,s,c,"CURRENT"),_=i===0;return{class:"lp-datepicker__day",day:c,itemProps:y,month:new Date(l,s,c,12,0,0).getMonth(),year:new Date(l,s,c,12,0,0).getFullYear(),time:w,isFirst:_,type:"day"}})},_e=(l,s)=>{const r=32-new Date(l,s-1,32).getDate(),d=new Date(l,s,1).getDay(),p=d>0?d-1:6,c=r-(p-1);return Array.from({length:p},(y,_)=>_+c).map(y=>{const _=new Date(l,s-1,y,12,0,0).getTime(),R=De(l,s-1,y,"PREVIOUS");return{class:"lp-datepicker__previous",day:y,itemProps:R,month:new Date(l,s-1,y).getMonth(),year:new Date(l,s-1,y).getFullYear(),time:_,type:"previous"}})},re=(l,s,r,d)=>{const p=l+s,i=Math.ceil(p/7)*7-p;return Array.from({length:i},(_,R)=>R+1).map(_=>{const R=new Date(r,d+1,_,12,0,0).getTime(),N=De(r,d+1,_,"NEXT");return{class:"lp-datepicker__next",day:_,itemProps:N,month:new Date(R).getMonth(),year:new Date(R).getFullYear(),time:R,type:"next"}})},fe=(l,s,r,d)=>{if(ee(l,s,r))return;h.value&&(a.value=[],h.value=!1);const p=new Date(l,s,r,12,0,0).getTime();k.value=p,D.value=0,F.value||(a.value=[p],o("selection",a.value),b.value=0),F.value&&(a.value.length<2?(A.value=d,a.value.push(p),L.value=[],a.value.sort(),O.value=!0,o("selection",a.value),b.value=0):(A.value=0,a.value=[p],o("selection",a.value)))},oe=()=>{o("hide",{from:ye.value})},Ae=()=>{h.value=!0,o("reset"),q.value.querySelector('[data-time-to-focus="'+k.value+'"]').focus()},Le=l=>{if(F.value&&a.value.length===1){const s=U.value;if(l<a.value[0]){const r=l,d=a.value[0]-s;L.value=Array.from({length:(d-r)/s+1},(p,c)=>r+c*s)}if(l>a.value[0]){const r=a.value[0]+s,d=l;L.value=Array.from({length:(d-r)/s+1},(p,c)=>r+c*s)}}},ge=async(l,s)=>{const r=l,d=s==="left"||s==="right",p=s==="left"||s==="up",c=d?U.value:U.value*7,i=p?-1*c:c,w=Fe(r,i);k.value=w,D.value=w,await Xe(),q.value.querySelector('[data-time-to-focus="'+k.value+'"]').focus()},Fe=(l,s)=>{let r=l;r+=s;const d=new Date(r);return d.setHours(12,0,0,0),d.getTime()},Ce=(l,s)=>{if(isNaN(s))return[];let r=[];if(l<=s)r=Array.from({length:s-l+1},(p,c)=>l+c);else{const p=Array.from({length:12-l},(i,w)=>l+w),c=Array.from({length:s+1},(i,w)=>w);r=p.concat(c)}return r},Re=()=>{q.value.querySelector(".lp-datepicker__arrow--right").focus()},Ye=async()=>{q.value.querySelector(".lp-datepicker__closer").focus()},Be=async()=>{q.value.querySelector('[data-time-to-focus="'+k.value+'"]').focus()},V=async()=>{q.value.querySelector(".lp-datepicker__arrow--left").focus()},De=(l,s,r,d)=>{let p="button",c="",i=" lp-datepicker__td ",w=!1,y=-1,_=null,R=!1;const N=new Date(l,s,r,12,0,0),$=N.getTime(),we={weekday:"long",year:"numeric",month:"long",day:"numeric"},ie=N.toLocaleDateString("fr-FR",we);let be=`${ie}.`;const He=d==="NEXT"||d==="PREVIOUS";(ee(l,s,r)||He)&&(p="span",c+=" lp-datepicker--disabled ",w=!0,be=`Date non sélectionnable. ${ie}.`),a.value.includes($)&&x.value.length!==0&&!h.value&&(p="button",c+=" lp-datepicker__selected ",y=-1,be=`Sélectionné, ${ie}.`,i+=" lp-datepicker--parent-selected "),$===G.value.time&&(c+=" lp-datepicker__today ",be=`Aujourd'hui, ${ie}.`,_="date"),$===G.value.time&&a.value.includes($)&&(be=`Aujourd'hui, Sélectionné, ${ie}.`),($===a.value[0]||$===a.value[1])&&!h.value&&(R=!0),k.value===$&&(y=0);const Ve=a.value[0]!==a.value[1];return a.value.length>0&&$===a.value[0]&&Ve&&!h.value&&(i+=" lp-datepicker--start "),a.value.length===2&&$===a.value[1]&&Ve&&!h.value&&(i+=" lp-datepicker--end "),a.value.length===2&&$>a.value[0]&&$<a.value[1]&&!h.value&&(c+=" lp-datepicker__interval ",i+=" lp-datepicker--parent-interval "),{tag:p,elementClass:c,parentClass:i,disabled:w,tabindex:y,ariaLabel:be,ariaCurrent:_,ariaSelected:R}};return ut(()=>{const l=te.value.flatMap(s=>s.days).map(s=>s.time);l.includes(k.value)||(k.value=l[0])}),nt(async()=>{o("opened",q.value.getBoundingClientRect()),Be(),M.isInModal&&await Xe(),q.value.querySelector('[data-time-to-focus="'+k.value+'"]').focus()}),a.value=H.value.sort(),k.value=j.value.time,(l,s)=>(T(),E("div",{ref_key:"datepickerBox",ref:Y,class:P(["lp-datepicker",[{"lp-datepicker--interval":B(F)},{"lp-datepicker--in-modal":l.isInModal},{"lp-datepicker--medium":se.value.isMedium},{"lp-datepicker--large":se.value.isLarge},{"lp-datepicker--frontof":l.isSmall}]]),onKeydown:W(oe,["esc"])},[f("div",kt,[f("button",{"aria-label":`${B(me)[J.value.left.month]} ${J.value.left.year}`,class:"lp-datepicker__arrow lp-datepicker__arrow--left",onKeydown:W(Z(Ye,["exact","shift","prevent"]),["tab"]),onClick:s[0]||(s[0]=r=>b.value-=1)},[ue(Oe,{class:"lp-datepicker__arrow-icon",name:"arrow-left",type:"light"})],40,_t),f("button",{ref_key:"datepickerArrowRight",ref:Ie,"aria-label":`${B(me)[J.value.right.month]} ${J.value.right.year}`,class:"lp-datepicker__arrow lp-datepicker__arrow--right",onKeydown:W(Z(Be,["exact","prevent"]),["tab"]),onClick:s[1]||(s[1]=r=>b.value+=1)},[ue(Oe,{class:"lp-datepicker__arrow-icon",name:"arrow-right",type:"light"})],40,Dt)]),f("div",wt,[(T(!0),E(Ee,null,Pe(te.value,(r,d)=>(T(),E("table",{key:`range-${d}`,class:P(["lp-datepicker__inside",r.intervalClass])},[f("caption",null,[f("div",Mt,[f("span",$t,ae(B(me)[r.month]),1),f("span",It,ae(r.year),1)])]),f("thead",null,[f("tr",null,[(T(!0),E(Ee,null,Pe(B(qe),(p,c)=>(T(),E("th",{key:`weekdays-${p}-${c}`,scope:"col",class:"lp-datepicker__th"},[f("abbr",{title:p.name,class:"lp-datepicker__weekday"},ae(p.abbr),9,St)]))),128))])]),f("tbody",null,[(T(!0),E(Ee,null,Pe(r.weeklyList,(p,c)=>(T(),E("tr",{key:`line-${d}-${c}`},[(T(!0),E(Ee,null,Pe(p,(i,w)=>(T(),E("td",{key:`item-${d}-${c}-${w}`,class:P([i.itemProps.parentClass,{"lp-datepicker__previous--hidden":i.type==="previous","lp-datepicker__next--hidden":i.type==="next"}]),"aria-current":i.itemProps.ariaCurrent},[(T(),We(lt(i.itemProps.tag),{"aria-label":i.itemProps.ariaLabel,"aria-selected":i.itemProps.ariaSelected,"data-time-to-focus":i.time,tabindex:i.itemProps.tabindex,class:P([[i.itemProps.elementClass,{"lp-datepicker__first":i.isFirst&&!r.index}],"lp-datepicker__day"]),onMouseover:y=>Le(i.time),onClick:y=>fe(i.year,i.month,i.day,r.index),onKeydown:[W(Z(y=>fe(i.year,i.month,i.day,r.index),["prevent"]),["space"]),W(Z(y=>fe(i.year,i.month,i.day,r.index),["prevent"]),["enter"]),W(Z(Re,["exact","shift","prevent"]),["tab"]),W(Z(y=>ge(i.time,"up"),["prevent"]),["up"]),W(Z(y=>ge(i.time,"down"),["prevent"]),["down"]),W(Z(y=>ge(i.time,"left"),["prevent"]),["left"]),W(Z(y=>ge(i.time,"right"),["prevent"]),["right"])]},{default:Te(()=>[Je(ae(i.day),1)]),_:2},1064,["aria-label","aria-selected","data-time-to-focus","tabindex","class","onMouseover","onClick","onKeydown"]))],10,xt))),128))]))),128))])],2))),128))]),f("div",{class:P(["lp-datepicker__actions",`lp-datepicker__actions--${l.withReset&&l.buttonLayout==="centered"?"btns-":""}${l.buttonLayout}`])},[l.withReset?(T(),We(Ze,{key:0,"aria-label":"réinitialiser le calendrier",type:"ghost",color:"darkgrey",size:"small",class:"lp-datepicker__reset",onClick:Ae},{default:Te(()=>s[2]||(s[2]=[Je(" Réinitialiser ")])),_:1})):Me("",!0),ue(Ze,{"aria-label":"Fermer le calendrier",color:"default",type:l.withReset?"secondary":"ghost",size:"small",class:"lp-datepicker__closer",onKeydown:W(Z(V,["exact","prevent"]),["tab"]),onClick:oe},{default:Te(()=>s[3]||(s[3]=[Je(" Fermer ")])),_:1},8,["type","onKeydown"])],2)],34))}}),Ke=st(ot,[["__scopeId","data-v-f0fc1079"]]);ot.__docgenInfo={exportName:"default",displayName:"DatepickerDays",description:"",tags:{},props:[{name:"startNumber",required:!1,type:{name:"number"}},{name:"endNumber",required:!1,type:{name:"number"}},{name:"isInModal",required:!1,type:{name:"boolean"}},{name:"isSmall",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'large'"}},{name:"blackList",required:!1,type:{name:"Array",elements:[{name:"number"}]}},{name:"buttonLayout",required:!1,type:{name:"union",elements:[{name:'"centered"'},{name:'"align-right"'}]},defaultValue:{func:!1,value:"'centered'"}},{name:"range",required:!1,type:{name:"Range"}},{name:"disabledDaysByWeek",required:!1,type:{name:"Array",elements:[{name:"number"}]}},{name:"holidays",required:!1,type:{name:"boolean"}},{name:"bankHolidays",required:!1,type:{name:"boolean"}},{name:"typage",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"interval"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"weekend",required:!1,type:{name:"boolean"}},{name:"whiteList",required:!1,type:{name:"Array",elements:[{name:"number"}]}},{name:"withReset",required:!1,type:{name:"boolean"}}],events:[{name:"selection"},{name:"hide"},{name:"opened"},{name:"reset"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/molecules/Datepicker/Tools/DatepickerDays.vue"]};const Zt=Object.freeze(Object.defineProperty({__proto__:null,default:Ke},Symbol.toStringTag,{value:"Module"})),ze={xxs:320,xs:375,s:700,m:992,l:1280,xl:1440,xxl:1680,xxxl:3e3},qt=["aria-describedby"],Rt=["aria-invalid","aria-required"],Bt=["aria-label","value","readonly","tabindex","disabled"],Tt=["aria-label","value","readonly","tabindex","disabled"],At=["aria-label","value","readonly","tabindex","disabled"],Lt=["aria-invalid","aria-required"],Ft={class:"lp-datepicker__inputs"},Ct=["aria-label","value","readonly","tabindex","disabled"],Yt=["aria-label","value","readonly","tabindex","disabled"],Vt=["aria-label","value","readonly","tabindex","disabled"],Nt=["aria-expanded","disabled"],Et=["aria-expanded","disabled"],Pt={key:1,class:"lp-datepicker__dropdown"},zt={class:"lp-datepicker__error-message-text"},Ot={key:2,class:"lp-datepicker__message"},it=tt({__name:"Datepicker",props:Qe({dataError:{},disabled:{type:Boolean},end:{},size:{default:"large"},start:{},blackList:{},buttonLayout:{},range:{},disabledDaysByWeek:{},holidays:{type:Boolean},bankHolidays:{type:Boolean},mandatory:{type:Boolean},typage:{default:"default"},inputReadonly:{type:Boolean},label:{},labelPosition:{default:"inside"},message:{},weekend:{type:Boolean},whiteList:{},withReset:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:Qe(["input","blur","change","selection","reset"],["update:modelValue"]),setup(ke,{emit:$e}){var Ue;const M=ct(ke,"modelValue"),o=ke,Y=$e,Ie=ht,ce=mt(),S=(Ue=ce==null?void 0:ce.proxy)==null?void 0:Ue.$el,K=g(),pe=g(),ne=g(),le=g(),{range:Se,blackList:xe,disabledDaysByWeek:ve,holidays:me,bankHolidays:qe,typage:F,weekend:ee,whiteList:U}=at(o),{nullTime:b,interval:A,inputData:a}=rt(Se,xe,ve,me,qe,F,ee,U),L=g(b.value),h=g(b.value),k=g(!1),D=g(!1),O=g({left:"0px",right:"inherit",transform:"translateX(0)",isSmall:!1}),q=g({maxHeight:"auto"}),x=z(()=>J.value?"fieldset":"div"),H=z(()=>o.typage==="default"),J=z(()=>!H.value&&o.labelPosition==="outside"),te=z(()=>H.value&&o.label||o.start.label),ye=g("lp-datepicker__opened--bottom"),se=g(!1),G=g(""),j=g(null),X=g(!1),Q=e=>{X.value=!1;const t=e.target,n=t.value,u=t.dataset.datepickerName||"",m=t.selectionStart,v=n.replace(/\D/g,"");if(t.value=v,m!==null){const I=n.length-v.length;t.setSelectionRange(m-I,m-I)}De(v,u,"start"),A.value&&De(v,u,"end"),(/^\d*$/.test(n)||!v)&&Y("input",e)},_e=z(()=>({colorBorderTop:"supernova",mobileFull:!1,size:"default",showTitle:!1,title:H.value?"Choisir la date":"Choisir les dates"})),re=e=>{const t=e.height,n=S==null?void 0:S.getBoundingClientRect(),u=n==null?void 0:n.top,m=window.innerHeight-(n==null?void 0:n.bottom);let v="bottom";m<t+16&&u>t+16&&(v="top"),ye.value=`lp-datepicker__opened--${v}`},fe=()=>{var e,t;return(e=o.dataError)!=null&&e.active&&((t=o.dataError)!=null&&t.message)?G.value:void 0},oe=()=>{const e=j.value;G.value=e&&e.id?e.id:"error-message"},Ae=gt({tablet_landscape:ze.m,tablet:ze.s}),Le=e=>{const t=Ae.isGreaterOrEqual("tablet_landscape"),n=Ae.isGreaterOrEqual("tablet"),u=t,m=A.value&&u?758:ze.xs,v=m===ze.xs,I=(S==null?void 0:S.getBoundingClientRect().left)+m>window.innerWidth,de=I?"inherit":"0px",he=I?"0px":"inherit";O.value={left:n?de:"50%",transform:n?"":"translateX(-50%)",right:he,isSmall:v},e==="modale"?(D.value=!D.value,k.value=!1):(k.value=!k.value,D.value=!1),X.value&&ge()},ge=()=>{L.value=b.value,h.value=b.value},Fe=()=>{X.value=!0,Object.keys(a).forEach(u=>{u.endsWith("Input")&&(a[u]="")});const e=L.value!==b.value,t=h.value!==b.value,n=[...e?[L.value]:[],...t?[h.value]:[]];Y("reset",n),e&&t&&(h.value=b.value)},Ce=e=>{var u,m;let t="dropdown";e.from==="fromDropdown"&&(k.value=!k.value),e.from==="fromModal"&&(t="modal",D.value=!D.value),(u=le.value)==null||u.focus(),(m=ne.value)==null||m.focus();const n=S==null?void 0:S.querySelector(".lp-datepicker__toggle--"+t);n==null||n.focus()},Re=()=>{k.value&&(k.value=!1);const e=S==null?void 0:S.querySelector(".lp-datepicker__toggle--dropdown");e==null||e.focus()},Ye=()=>{D.value&&(D.value=!1);const e=S==null?void 0:S.querySelector(".lp-datepicker__toggle--modal");e==null||e.focus()},Be=e=>{const t={day:`${e}DayInput`,month:`${e}MonthInput`,year:`${e}YearInput`},n=a[t.day];if(n){const v=parseInt(n);a[t.day]=v===0?"01":v.toString().padStart(2,"0")}const u=a[t.month];["0","1"].includes(u)&&(a[t.month]="01");const m=a[t.year];if(m){const v=parseInt(m);v<100?a[t.year]=(v+2e3).toString():a[t.year]=v.toString().padStart(4,"0")}},V=(e,t)=>{if(o.inputReadonly){se.value=!1;return}if(se.value=!!e,k.value=!1,e===!1&&t==="start"){if(Be(t),!a.startDayInput||!a.startMonthInput||!a.startYearInput)return;const n=`${a.startDayInput}/${a.startMonthInput}/${a.startYearInput}`;Y("input",n),Y("blur"),M.value[0]=`${n}`}if(e===!1&&t==="end"){if(Be(t),!a.endDayInput||!a.endMonthInput||!a.endYearInput)return;const n=`${a.endDayInput}/${a.endMonthInput}/${a.endYearInput}`;Y("input",n),Y("blur"),M.value[1]=`${n}`}},De=(e,t,n)=>{if(t===`${n}-day`){const u=p(e,a[`${n}MonthInput`],a[`${n}YearInput`]);a[`${n}DayInput`]=u,a[`${n}Day`]=u,a[`${n}DayInput`]==="0"&&(a[`${n}Day`]="01")}if(t===`${n}-month`){const u=c(e,n,a[`${n}DayInput`],a[`${n}YearInput`]);a[`${n}MonthInput`]=u,a[`${n}Month`]=u,a[`${n}MonthInput`]==="0"&&(a[`${n}Month`]="01")}if(t===`${n}-year`){const u=i(e,n,a[`${n}DayInput`],a[`${n}MonthInput`]);a[`${n}YearInput`]=e,a[`${n}Year`]=u}l(n)},l=e=>{a[`${e}NewTime`]=ie(a[`${e}Year`],a[`${e}Month`],a[`${e}Day`]);const t=s("start"),n=s("end");e==="start"?L.value=t?b.value:a.startNewTime:e==="end"&&(h.value=n?b.value:a.endNewTime)},s=e=>a[`${e}DayInput`]===""||a[`${e}MonthInput`]===""||a[`${e}YearInput`]==="",r=(e,t,n)=>t?`0${e}`:n?`0${e[0]}`:e.length===2&&e==="00"?"01":e,d=(e,t,n)=>{const u=parseInt(e),m=parseInt(t);let v=parseInt(n);v=v<100?v+2e3:v;const I=new Date(v,m,0).getDate();return{dayValue:u,monthValue:m,yearValue:v,daysInMonth:I}},p=(e,t,n)=>{const{dayValue:u,daysInMonth:m}=d(e,t,n),v=Math.floor(m/10)||3,I=e.length===1&&u>v,de=u>m||(!t||!n)&&u>31;return r(e,I,de)},c=(e,t,n,u)=>{const{monthValue:m,dayValue:v,daysInMonth:I}=d(n,e,u),de=e.length===1&&m>1,he=m>12,Ne=r(e,de,he);return w(v,I,t),Ne},i=(e,t,n,u)=>{const{dayValue:m,daysInMonth:v,yearValue:I}=d(n,u,e);return w(m,v,t),I},w=(e,t,n)=>{if(e>t){const m=n==="start"?"startDayInput":"endDayInput",v=n==="start"?"startDay":"endDay";a[m]=t.toString(),a[v]=t.toString()}},y=e=>{var n,u,m,v;X.value&&(ge(),X.value=!1);const t=new Date(e[0]);if(a.startDay=_(t.getDate()),a.startMonth=_(t.getMonth()+1),a.startYear=t.getFullYear(),we("start"),L.value=e[0],A.value||(M.value=[$(String(e[0]))],Y("selection",e[0]),Re(),Ye(),(n=le.value)==null||n.focus(),(u=ne.value)==null||u.focus()),A.value&&e.length===1&&(M.value=[$(String(e[0]))],Y("selection",e[0])),A.value&&e.length===2){const I=new Date(e[1]);a.endDay=_(I.getDate()),a.endMonth=_(I.getMonth()+1),a.endYear=I.getFullYear(),we("end"),h.value=e[1],M.value=[$(String(e[0])),$(String(e[1]))],Y("selection",e),Re(),Ye(),(m=le.value)==null||m.focus(),(v=ne.value)==null||v.focus()}},_=e=>e.toLocaleString("fr-FR",{minimumIntegerDigits:2}),R=e=>e.split("/"),N=e=>{const t=R(e),n=t[0],u=t[1],m=parseInt(t[2]);return ie(m,u,n)},$=e=>{const t=new Date(e),n=String(t.getDate()).padStart(2,"0"),u=String(t.getMonth()+1).padStart(2,"0"),m=t.getFullYear();return`${n}/${u}/${m}`},we=e=>{a[`${e}DayInput`]=a[`${e}Day`],a[`${e}MonthInput`]=a[`${e}Month`],a[`${e}YearInput`]=""+a[`${e}Year`]},ie=(e,t,n)=>new Date(e,parseInt(t)-1,parseInt(n),12,0,0).getTime(),be=e=>{if(!e.date||!et(e.date))return;const t=e.date,n=R(t);a.startDay=n[0],a.startMonth=n[1],a.startYear=parseInt(n[2]),we("start"),L.value=N(t)},He=e=>{if(!e||!e.date||!et(e.date))return;const t=e.date,n=R(t);a.endDay=n[0],a.endMonth=n[1],a.endYear=parseInt(n[2]),we("end"),h.value=N(t)},Ve=()=>{be(o.start),A.value&&He(o.end)};return bt(K,()=>Re()),L.value=b.value,h.value=b.value,Ve(),pt(()=>{oe()}),nt(()=>{oe()}),(e,t)=>{var n;return T(),We(lt(x.value),{class:P(["lp-datepicker__container",[{"lp-datepicker--error":(n=e.dataError)==null?void 0:n.active},{"lp-datepicker__container--outside-default":H.value&&o.labelPosition==="outside"}]])},{default:Te(()=>{var u,m,v,I,de,he,Ne;return[J.value&&o.label?(T(),E("legend",{key:0,class:P([{"lp-datepicker__label--outside":J.value}])},ae(o.label),3)):Me("",!0),f("div",{ref_key:"datepicker",ref:K,class:P(["lp-datepicker__wrapper",[`lp-datepicker__wrapper--${o.size}`,{"lp-datepicker__wrapper--outside":H.value&&o.labelPosition==="outside"},{"lp-datepicker__wrapper--focused":se.value},{"lp-datepicker__wrapper--disabled":o.disabled},{"lp-datepicker__wrapper--interval":B(A)},{"lp-datepicker__wrapper--readonly":o.inputReadonly},{"lp-datepicker__wrapper--empty":B(a).startDayInput===""&&B(a).startMonthInput===""&&B(a).startYearInput===null},{"lp-datepicker--error":(u=e.dataError)==null?void 0:u.active}]]),"aria-describedby":fe()},[f("fieldset",{class:P(["lp-datepicker__date",{[`lp-datepicker__default-${o.labelPosition}`]:H.value}]),"aria-invalid":((m=o.dataError)==null?void 0:m.active)??!1,"aria-required":o.mandatory},[f("legend",{class:P(["lp-datepicker__label",[{"visually-hidden":J.value,"lp-datepicker__label--mandatory":o.mandatory,"lp-datepicker__label--outside-default":o.labelPosition==="outside"},H.value?`lp-datepicker__label--${o.labelPosition}`:"lp-datepicker__label--inside"]])},ae(te.value),3),f("div",{class:P(["lp-datepicker__inputs",{[`lp-datepicker__inputs--${o.labelPosition}`]:H.value}])},[f("input",{id:"datepicker-start",type:"text",class:"lp-datepicker__input lp-datepicker__input--day",maxlength:"2","aria-label":`${te.value}, Jour, Format attendu : JJ (exemple: 12)`,value:B(a).startDayInput,readonly:o.inputReadonly,tabindex:o.inputReadonly?-1:0,disabled:o.disabled,placeholder:"JJ","data-datepicker-name":"start-day",onInput:Q,onFocus:t[0]||(t[0]=C=>V(!0,"start")),onBlur:t[1]||(t[1]=C=>V(!1,"start"))},null,40,Bt),t[15]||(t[15]=f("span",{class:"lp-datepicker__slash"},"/",-1)),f("input",{type:"text",class:"lp-datepicker__input lp-datepicker__input--month",maxlength:"2","aria-label":`${te.value}, Mois, Format attendu : MM (exemple : 08)`,value:B(a).startMonthInput,readonly:o.inputReadonly,tabindex:o.inputReadonly?-1:0,disabled:o.disabled,placeholder:"MM","data-datepicker-name":"start-month",onInput:Q,onFocus:t[2]||(t[2]=C=>V(!0,"start")),onBlur:t[3]||(t[3]=C=>V(!1,"start"))},null,40,Tt),t[16]||(t[16]=f("span",{class:"lp-datepicker__slash"},"/",-1)),f("input",{type:"text",class:"lp-datepicker__input lp-datepicker__input--year",maxlength:"4","aria-label":`${te.value}, Année, Format attendu : AAAA (exemple : 2018)`,value:B(a).startYearInput,readonly:o.inputReadonly,tabindex:o.inputReadonly?-1:0,disabled:o.disabled,placeholder:"AAAA","data-datepicker-name":"start-year",onInput:Q,onFocus:t[4]||(t[4]=C=>V(!0,"start")),onBlur:t[5]||(t[5]=C=>V(!1,"start"))},null,40,At)],2)],10,Rt),B(A)?(T(),E("fieldset",{key:0,class:"lp-datepicker__date lp-datepicker__label--inside","aria-invalid":((v=o.dataError)==null?void 0:v.active)??!1,"aria-required":e.mandatory},[f("legend",{class:P(["lp-datepicker__label",{"lp-datepicker__label--mandatory":e.mandatory,"visually-hidden":J.value}])},ae(e.end.label),3),f("div",Ft,[f("input",{id:"datepicker-end",type:"text",class:"lp-datepicker__input lp-datepicker__input--day",maxlength:"2","aria-label":`${e.end.label}, Jour, Format attendu : JJ (exemple: 12)`,value:B(a).endDayInput,readonly:o.inputReadonly,tabindex:o.inputReadonly?-1:0,disabled:o.disabled,placeholder:"JJ","data-datepicker-name":"end-day",onInput:Q,onFocus:t[6]||(t[6]=C=>V(!0,"end")),onBlur:t[7]||(t[7]=C=>V(!1,"end"))},null,40,Ct),t[17]||(t[17]=f("span",{class:"lp-datepicker__slash"},"/",-1)),f("input",{type:"text",class:"lp-datepicker__input lp-datepicker__input--month",maxlength:"2","aria-label":`${e.end.label}, Mois, Format attendu : MM (exemple: 08)`,value:B(a).endMonthInput,readonly:o.inputReadonly,tabindex:o.inputReadonly?-1:0,disabled:o.disabled,placeholder:"MM","data-datepicker-name":"end-month",onInput:Q,onFocus:t[8]||(t[8]=C=>V(!0,"end")),onBlur:t[9]||(t[9]=C=>V(!1,"end"))},null,40,Yt),t[18]||(t[18]=f("span",{class:"lp-datepicker__slash"},"/",-1)),f("input",{type:"text",class:"lp-datepicker__input lp-datepicker__input--year",maxlength:"4","aria-label":`${e.end.label}, Année, Format attendu : AAAA (exemple: 2018)`,value:B(a).endYearInput,readonly:o.inputReadonly,tabindex:o.inputReadonly?-1:0,disabled:o.disabled,placeholder:"AAAA","data-datepicker-name":"end-year",onInput:Q,onFocus:t[10]||(t[10]=C=>V(!0,"end")),onBlur:t[11]||(t[11]=C=>V(!1,"end"))},null,40,Vt)])],8,Lt)):Me("",!0),f("button",{ref_key:"datepickerButtonDropdown",ref:ne,"aria-expanded":k.value,"aria-label":"Choisir la date dans un calendrier",class:P([[`lp-datepicker__toggle--${e.size}`,{"lp-datepicker__toggle--readonly":e.inputReadonly}],"lp-datepicker__toggle lp-datepicker__toggle--dropdown"]),disabled:o.disabled,onClick:t[12]||(t[12]=C=>Le("dropdown"))},[ue(Oe,{name:"editing-calendar",type:"light"})],10,Nt),f("button",{ref_key:"datepickerButtonModal",ref:le,"aria-expanded":D.value,"aria-label":"Choisir la date dans un calendrier",class:P([[`lp-datepicker__toggle--${e.size}`,{"lp-datepicker__toggle--readonly":e.inputReadonly}],"lp-datepicker__toggle lp-datepicker__toggle--modal"]),disabled:o.disabled,onClick:t[13]||(t[13]=C=>Le("modale"))},[ue(Oe,{name:"editing-calendar",type:"light"})],10,Et),ue(yt,je({modelValue:D.value,"onUpdate:modelValue":t[14]||(t[14]=C=>D.value=C)},_e.value,{class:"lp-datepicker__modal"}),{content:Te(()=>[ue(Ke,je({ref_key:"datepickerDropdown",ref:pe,class:["lp-datepicker__opened",ye.value],"is-in-modal":!0,"is-small":O.value.isSmall,style:[O.value,q.value],"start-number":L.value,"end-number":h.value},e.$props,{onOpened:re,onSelection:y,onHide:Ce,onReset:Fe}),null,16,["is-small","class","style","start-number","end-number"])]),_:1},16,["modelValue"]),k.value?(T(),E("div",Pt,[ue(Ke,je({ref_key:"datepickerDropdown",ref:pe,class:["lp-datepicker__opened",ye.value],style:[O.value,q.value],"start-number":L.value,"end-number":h.value},o,{onOpened:re,onSelection:y,onHide:Ce,onReset:Fe}),null,16,["class","style","start-number","end-number"])])):Me("",!0)],10,qt),(I=e.dataError)!=null&&I.active&&((de=e.dataError)!=null&&de.message)?vt((T(),E("p",{key:1,ref_key:"errorMessage",ref:j,class:"lp-datepicker__error-message","aria-live":"polite"},[f("span",zt,ae((he=e.dataError)==null?void 0:he.message),1)])),[[B(Ie),"lp-datepicker-error-message--"]]):Me("",!0),e.message&&!((Ne=e.dataError)!=null&&Ne.active)?(T(),E("p",Ot,ae(e.message),1)):Me("",!0)]}),_:1},8,["class"])}}}),Ht=st(it,[["__scopeId","data-v-c1c45028"]]);it.__docgenInfo={exportName:"default",displayName:"Datepicker",description:"",tags:{},props:[{name:"dataError",required:!1,type:{name:"DataErrorType"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"end",required:!1,type:{name:"DateType"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'large'"}},{name:"start",required:!0,type:{name:"DateType"}},{name:"blackList",required:!1,type:{name:"Array",elements:[{name:"number"}]}},{name:"buttonLayout",required:!1,type:{name:"union",elements:[{name:'"center"'},{name:'"align-right"'}]}},{name:"range",required:!1,type:{name:"Range"}},{name:"disabledDaysByWeek",required:!1,type:{name:"Array",elements:[{name:"number"}]}},{name:"holidays",required:!1,type:{name:"boolean"}},{name:"bankHolidays",required:!1,type:{name:"boolean"}},{name:"mandatory",required:!1,type:{name:"boolean"}},{name:"typage",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"interval"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"inputReadonly",required:!1,type:{name:"boolean"}},{name:"label",required:!1,type:{name:"string"}},{name:"labelPosition",required:!1,type:{name:"union",elements:[{name:'"inside"'},{name:'"outside"'}]},defaultValue:{func:!1,value:"'inside'"}},{name:"message",required:!1,type:{name:"string"}},{name:"weekend",required:!1,type:{name:"boolean"}},{name:"whiteList",required:!1,type:{name:"Array",elements:[{name:"number"}]}},{name:"withReset",required:!1,type:{name:"boolean"}}],events:[{name:"input"},{name:"blur"},{name:"change"},{name:"selection"},{name:"reset"}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue3-solaris/src/components/molecules/Datepicker/Datepicker.vue"]};const ea=Object.freeze(Object.defineProperty({__proto__:null,default:Ht},Symbol.toStringTag,{value:"Module"}));export{Ht as S,ea as _,Zt as a};
