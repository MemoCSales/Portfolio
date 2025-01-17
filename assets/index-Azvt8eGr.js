(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function d(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=d(t);fetch(t.href,i)}})();const r=document.querySelector(".mobile-menu-button"),s=document.querySelector(".mobile-menu");r==null||r.addEventListener("click",()=>{s==null||s.classList.toggle("hidden")});const m=document.querySelectorAll(".mobile-menu .nav-link");m.forEach(e=>{e.addEventListener("click",()=>{s==null||s.classList.add("hidden")})});const u=[{role:"Project Controller Manager",company:"Huawei",duration:"September 2020 - October 2023",achievements:["Managed R$50M+ in purchase orders backlog","Achieved 95% SLA compliance across Brazil, Mexico and Argentina Office","Optimized processes for 100+ national projects"]},{role:"Account Sales Representative",company:"Pack&Pack",duration:"September 2019 - December 2019",achievements:["Increased sales by 15% in 4 montsh through cold calling","Improved sales metrics using client database analysis","Built strong client relationships driving repeat business"]}],p=[{degree:"Software Engineering Student",institution:"🇩🇪 42 Wolfsburg",duration:"November 2023 - Present",achievements:["Building projects in C/C++, Python, and JavaScript using Linux environment","Developed Unix shell with process handling and I/O redirections in C","Created 3D game engine with optimized multi-threading render system","Designed IRC server using OOP and Design Patterns in C++"]},{degree:"Logistics Engineering",institution:"🇲🇽 Universidad de las Américas Puebla",duration:"August 2015 - May 2019",achievements:["Specialized in process optimization using heuristic algorithms","Developed optimization models using FICO Xpress","Applied meta-heuristics for complex logistics problems"]}];function f(e){return`
    <div class="bg-secondary rounded-lg p-6 shadow-md hover:-translate-y-1 transition-all duration-300">
      <div class="flex items-center gap-2 mb-2">
        <i class="fas fa-briefcase text-accent"></i>
        <h3 class="font-mono text-text-light text-xl">${e.role}</h3>
      </div>
      
      <div class="flex items-center gap-2 mb-4">
        <i class="fas fa-calendar text-accent"></i>
        <span class="font-mono text-text text-sm">${e.duration}</span>
      </div>
      
      <div class="inline-block px-4 py-2 bg-primary rounded-full text-text mb-4">
        ${e.company}
      </div>
      
      <ul class="space-y-2">
        ${e.achievements.map(n=>`
          <li class="flex items-start gap-2 text-text">
            <i class="fas fa-caret-right text-accent mt-1"></i>
            <span class="font-mono">${n}</span>
          </li>
        `).join("")}
      </ul>
    </div>
  `}function g(e){return`
    <div class="bg-secondary rounded-lg p-6 shadow-md hover:-translate-y-1 transition-all duration-300">
      <div class="flex items-center gap-2 mb-2">
        <i class="fas fa-graduation-cap text-accent"></i>
        <h3 class="font-mono text-text-light text-xl">${e.degree}</h3>
      </div>
      
      <div class="flex items-center gap-2 mb-4">
        <i class="fas fa-calendar text-accent"></i>
        <span class="font-mono text-text text-sm">${e.duration}</span>
      </div>
      
      <div class="inline-block px-4 py-2 bg-primary rounded-full text-text mb-4">
        ${e.institution}
      </div>
      
      <ul class="space-y-2">
        ${e.achievements.map(n=>`
          <li class="flex items-start gap-2 text-text">
            <i class="fas fa-caret-right text-accent mt-1"></i>
            <span class="font-mono">${n}</span>
          </li>
        `).join("")}
      </ul>
    </div>
  `}const c=document.getElementById("experienceGrid");c&&(c.innerHTML=u.map(e=>f(e)).join(""));const l=document.getElementById("educationGrid");l&&(l.innerHTML=p.map(e=>g(e)).join(""));
