import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as d,i}from"./assets/vendor-BbbuE1sJ.js";/* empty css                      */d("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1});const s=document.getElementById("datetime-picker"),n=document.querySelector("[data-start]"),p=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),D=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let l=null,c=null;n.disabled=!0;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(i.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):(l=t,n.disabled=!1)}};d(s,C);function w(e){const m=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}function r(e){return String(e).padStart(2,"0")}function u({days:e,hours:t,minutes:o,seconds:a}){p.textContent=r(e),S.textContent=r(t),D.textContent=r(o),b.textContent=r(a)}function I(){n.disabled=!0,s.disabled=!0,c=setInterval(()=>{const t=l-new Date;if(t<=0){clearInterval(c),u({days:0,hours:0,minutes:0,seconds:0}),s.disabled=!1,i.success({title:"Success",message:"Countdown finished!"});return}const o=w(t);u(o)},1e3)}n.addEventListener("click",I);
//# sourceMappingURL=1-timer.js.map