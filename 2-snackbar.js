import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as m}from"./assets/vendor-BbbuE1sJ.js";/* empty css                      */const o=document.querySelector(".form");o.addEventListener("submit",e=>{e.preventDefault();const t=o.elements.delay.value,s=o.elements.state.value,r=Number(t);n(r,s).then(i=>{m.success({title:"Success",message:i})}).catch(i=>{m.error({title:"Error",message:i})})});function n(e,t){return new Promise((s,r)=>{setTimeout(()=>{t==="fulfilled"?s(`✅ Fulfilled promise in ${e}ms`):r(`❌ Rejected promise in ${e}ms`)},e)})}
//# sourceMappingURL=2-snackbar.js.map