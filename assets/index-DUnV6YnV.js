(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const o=document.querySelector(".mobile-menu-button"),r=document.querySelector(".mobile-menu");o==null||o.addEventListener("click",()=>{r==null||r.classList.toggle("hidden")});const d=document.querySelectorAll(".mobile-menu .nav-link");d.forEach(n=>{n.addEventListener("click",()=>{r==null||r.classList.add("hidden")})});const m=[{role:"Senior Developer",company:"Tech Company",duration:"eternity",achievements:["Achievement 1","Achievement 2","Achievement 3"]},{role:"Role 2",company:"Company 2",duration:"2",achievements:["1","2","3"]}];function u(n){return`
    <div class="bg-secondary rounded-lg p-6 shadow-md hover:-translate-y-1 transition-all duration-300">
      <div class="flex items-center gap-2 mb-2">
        <i class="fas fa-briefcase text-accent"></i>
        <h3 class="font-mono text-text-light text-xl">${n.role}</h3>
      </div>
      
      <div class="flex items-center gap-2 mb-4">
        <i class="fas fa-calendar text-accent"></i>
        <span class="font-mono text-text text-sm">${n.duration}</span>
      </div>
      
      <div class="inline-block px-4 py-2 bg-primary rounded-full text-text mb-4">
        ${n.company}
      </div>
      
      <ul class="space-y-2">
        ${n.achievements.map(s=>`
          <li class="flex items-start gap-2 text-text">
            <i class="fas fa-caret-right text-accent mt-1"></i>
            <span class="font-mono">${s}</span>
          </li>
        `).join("")}
      </ul>
    </div>
  `}const a=document.getElementById("experienceGrid");a&&(a.innerHTML=m.map(n=>u(n)).join(""));
