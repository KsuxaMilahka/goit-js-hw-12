import{a as q,S as P,i as w}from"./assets/vendor-b0d10f48.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const M="44373607-23d837ad960924b19f5bc44a0",$="https://pixabay.com/api/";async function S(e,r,s){const n=new URLSearchParams({key:M,q:e,page:r,per_page:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${$}?${n}`;try{const i=(await q.get(t,{params:n})).data;if(i.hits.length===0)throw new Error("No images found");return i}catch(o){throw new Error(o.message)}}let m;function b(e){const r=document.querySelector(".gallery"),s=e.map(n=>`
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
    `).join("");r.insertAdjacentHTML("beforeend",s),m?m.refresh():m=new P(".gallery a",{captionsData:"alt",captionDelay:250})}function h(e,r,s){e>=r?(v(s),r&&w.info({title:"The End!",message:"We're sorry, but you've reached the end of search results."})):H(s)}function c(e){w.error({title:"Error",message:e})}function H(e){e.classList.remove("active")}function v(e){e.classList.add("active")}function E(e){e.classList.remove("hidden")}function y(e){e.classList.add("hidden")}function T(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}const L=document.querySelector(".search-form"),I=document.querySelector('input[name="query"]'),f=document.querySelector(".gallery"),u=document.getElementById("loader"),l=document.querySelector(".btn-load-more");let p="",a=1,d=1,g=15;L.addEventListener("submit",async e=>{if(e.preventDefault(),p=I.value.trim(),p===""){c("Please enter a search query.");return}a=1,E(u),v(l),f.innerHTML="";try{const r=await S(p,a,g);if(d=Math.ceil(r.totalHits/g),d===0){c("Empty Result"),y(u),h(a,d,l);return}if(r.hits.length===0){f.innerHTML="",c("Sorry, there are no images matching your search query. Please try again!");return}b(r.hits)}catch{f.innerHTML="",c("Something went wrong. Please try again later.")}finally{y(u),h(a,d,l)}L.reset()});l.addEventListener("click",async()=>{a++,v(l),E(u);try{const e=await S(p,a,g);if(e.hits.length===0){c("No more images found");return}b(e.hits)}catch{f.innerHTML="",c("Something went wrong. Please try again later.")}finally{y(u),h(a,d,l),T()}});
//# sourceMappingURL=commonHelpers.js.map
