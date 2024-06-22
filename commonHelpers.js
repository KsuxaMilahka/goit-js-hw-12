import{a as P,S as M,i as w}from"./assets/vendor-b0d10f48.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const $="44373607-23d837ad960924b19f5bc44a0",H="https://pixabay.com/api/";async function S(e,r,a){const n=new URLSearchParams({key:$,q:e,page:r,per_page:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${H}?${n}`;try{const l=(await P.get(t,{params:n})).data;if(l.hits.length===0)throw new Error("No images found");return l}catch(o){throw new Error(o.message)}}let y;function b(e){const r=document.querySelector(".gallery"),a=e.map(n=>`
      <div class="photo-card">
        <a href="${n.largeImageURL}">
          <img src="${n.webformatURL}" alt="${n.tags}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <p class="info-title">Likes</p>
            <p class="info-value">${n.likes}</p>
          </div>
          <div class="info-item">
            <p class="info-title">Views</p>
            <p class="info-value">${n.views}</p>
          </div>
          <div class="info-item">
            <p class="info-title">Comments</p>
            <p class="info-value">${n.comments}</p>
          </div>
          <div class="info-item">
            <p class="info-title">Downloads</p>
            <p class="info-value">${n.downloads}</p>
          </div>
        </div>
      </div>
    `).join("");r.insertAdjacentHTML("beforeend",a),y?y.refresh():y=new M(".gallery a",{captionsData:"alt",captionDelay:250})}function q(e,r,a){e>=r?(v(a),r&&w.info({title:"The End!",message:"We're sorry, but you've reached the end of search results."})):u(a)}function c(e){w.error({title:"Error",message:e})}function u(e){e.classList.remove("active")}function v(e){e.classList.add("active")}function E(e){e.classList.remove("hidden")}function f(e){e.classList.add("hidden")}function T(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}const L=document.querySelector(".search-form");document.querySelector('input[name="query"]');const m=document.querySelector(".gallery"),i=document.getElementById("loader"),s=document.querySelector(".btn-load-more");let p="",d=1,h=1,g=15;L.addEventListener("submit",async e=>{if(e.preventDefault(),p=e.target.elements.query.value.trim(),p===""){c("Please enter a search query.");return}d=1,E(i),v(s),m.innerHTML="";try{const r=await S(p,d,g);if(h=Math.ceil(r.totalHits/g),h===0){c("Empty Result"),f(i),u(s);return}if(r.hits.length===0){m.innerHTML="",c("Sorry, there are no images matching your search query. Please try again!"),f(i),u(s);return}b(r.hits),q(d,h,s)}catch{m.innerHTML="",c("Something went wrong. Please try again later.")}finally{f(i),u(s)}L.reset()});s.addEventListener("click",async()=>{d++,v(s),E(i);try{const e=await S(p,d,g);if(f(i),u(s),e.hits.length===0){c("No more images found");return}b(e.hits),q(d,h,s)}catch{m.innerHTML="",c("Something went wrong. Please try again later.")}finally{f(i),T()}});
//# sourceMappingURL=commonHelpers.js.map
