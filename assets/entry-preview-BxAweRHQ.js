import{aa as p,a9 as w,i as N,a6 as v,V as d}from"./vue.esm-bundler-BV06ZB-3.js";var I=Object.defineProperty,j=(e,a)=>{for(var r in a)I(e,r,{get:a[r],enumerable:!0})};const{sanitizeStoryContextUpdate:E}=__STORYBOOK_MODULE_PREVIEW_API__;var F={};j(F,{applyDecorators:()=>U,mount:()=>b,parameters:()=>h,render:()=>y,renderToCanvas:()=>P});var y=(e,a)=>{let{id:r,component:i}=a;if(!i)throw new Error(`Unable to render story ${r} as the component annotation is missing from the default export`);return()=>p(i,e,L(e,a))},V=e=>{globalThis.PLUGINS_SETUP_FUNCTIONS??(globalThis.PLUGINS_SETUP_FUNCTIONS=new Set),globalThis.PLUGINS_SETUP_FUNCTIONS.add(e)},C=async(e,a)=>{globalThis&&globalThis.PLUGINS_SETUP_FUNCTIONS&&await Promise.all([...globalThis.PLUGINS_SETUP_FUNCTIONS].map(r=>r(e,a)))},g=new Map;async function P({storyFn:e,forceRemount:a,showMain:r,showException:i,storyContext:n,id:t},s){let o=g.get(s);if(o&&!a){let l=e(),c=O(l,n);return R(o.reactiveArgs,c),()=>{_(o.vueApp,s)}}o&&a&&_(o.vueApp,s);let u=w({setup(){n.args=d(n.args);let l=e(),c=O(l,n),f={vueApp:u,reactiveArgs:d(c)};return g.set(s,f),()=>p(l)}});return u.config.errorHandler=(l,c,f)=>{var S;(S=window.__STORYBOOK_PREVIEW__)!=null&&S.storyRenders.some(T=>T.id===t&&T.phase==="playing")?setTimeout(()=>{throw l},0):i(l)},await C(u,n),u.mount(s),r(),()=>{_(u,s)}}function L(e,a){let{argTypes:r}=a,i=Object.entries(e).filter(([n])=>{var t,s;return((s=(t=r[n])==null?void 0:t.table)==null?void 0:s.category)==="slots"}).map(([n,t])=>[n,typeof t=="function"?t:()=>t]);return Object.fromEntries(i)}function O(e,a){return e.props&&N(e)?e.props:a.args}function R(e,a){if(Object.keys(a).length===0)return;let r=v(e)?e:d(e);Object.keys(r).forEach(i=>{i in a||delete r[i]}),Object.assign(r,a)}function _(e,a){e==null||e.unmount(),g.has(a)&&g.delete(a)}function z(e){return typeof e=="function"?{render:e,name:e.name}:e}function m(e,a){let r=e;return r===null?null:typeof r=="function"?r:a?{...z(r),components:{...r.components||{},story:a}}:{render(){return p(r)}}}function U(e,a){return a.reduce((r,i)=>n=>{let t,s=i(o=>{let u=E(o);return o&&(u.args=Object.assign(n.args,u.args)),t=r({...n,...u}),t},n);return t||(t=r(n)),s===t?t:m(s,()=>p(t))},r=>m(e(r)))}var b=e=>async(a,r)=>(a&&(e.originalStoryFn=()=>()=>p(a,r==null?void 0:r.props,r==null?void 0:r.slots)),await e.renderToCanvas(),e.canvas),h={renderer:"vue3"};const A=Object.freeze(Object.defineProperty({__proto__:null,applyDecorators:U,mount:b,parameters:h,render:y,renderToCanvas:P},Symbol.toStringTag,{value:"Module"}));export{A as a,F as e,P as r,V as s};
