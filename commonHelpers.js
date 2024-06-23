import{a as P,S as M,i as L}from"./assets/vendor-b0d10f48.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const $="44373607-23d837ad960924b19f5bc44a0",H="https://pixabay.com/api/";async function w(e,r,s){const n=new URLSearchParams({key:$,q:e,page:r,per_page:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${H}?${n}`;try{const i=(await P.get(t,{params:n})).data;if(i.hits.length===0)throw new Error("No images found");return i}catch(o){throw new Error(o.message)}}let h;function S(e){const r=document.querySelector(".gallery"),s=e.map(n=>`
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
    `).join("");r.insertAdjacentHTML("beforeend",s),h?h.refresh():h=new M(".gallery a",{captionsData:"alt",captionDelay:250})}function b(e,r,s){e>=r?(m(s),r&&L.info({title:"The End!",message:"We're sorry, but you've reached the end of search results."})):E(s)}function c(e){L.error({title:"Error",message:e})}function E(e){e.classList.remove("active")}function m(e){e.classList.add("active")}function q(e){e.classList.remove("hidden")}function y(e){e.classList.add("hidden")}function T(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}const v=document.querySelector(".search-form"),I=document.querySelector('input[name="query"]'),u=document.querySelector(".gallery"),d=document.getElementById("loader"),a=document.querySelector(".btn-load-more");let f="",l=1,p=1,g=15;v.addEventListener("submit",async e=>{if(e.preventDefault(),f=I.value.trim(),f===""){c("Please enter a search query."),m(a);return}l=1,q(d),m(a),u.innerHTML="";try{const r=await w(f,l,g);if(p=Math.ceil(r.totalHits/g),p===0){c("Empty Result"),y(d),b(l,p,a);return}if(r.hits.length===0){u.innerHTML="",c("Sorry, there are no images matching your search query. Please try again!");return}E(a),S(r.hits)}catch{u.innerHTML="",c("Something went wrong. Please try again later.")}finally{y(d)}v.reset()});a.addEventListener("click",async()=>{l++,m(a),q(d);try{const e=await w(f,l,g);if(e.hits.length===0){c("No more images found");return}S(e.hits)}catch{u.innerHTML="",c("Something went wrong. Please try again later.")}finally{y(d),b(l,p,a),T()}});
//# sourceMappingURL=commonHelpers.js.map
