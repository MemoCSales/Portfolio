(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const r=document.querySelector(".mobile-menu-button"),s=document.querySelector(".mobile-menu");r==null||r.addEventListener("click",()=>{s==null||s.classList.toggle("hidden")});const g=document.querySelectorAll(".mobile-menu .nav-link");g.forEach(e=>{e.addEventListener("click",()=>{s==null||s.classList.add("hidden")})});const h=[{role:"Project Controller Manager",company:"Huawei",duration:"September 2020 - October 2023",achievements:["Managed R$50M+ in purchase orders backlog","Achieved 95% SLA compliance across Brazil, Mexico and Argentina Office","Optimized processes for 100+ national projects"]},{role:"Account Sales Representative",company:"Pack&Pack",duration:"September 2019 - December 2019",achievements:["Increased sales by 15% in 4 montsh through cold calling","Improved sales metrics using client database analysis","Built strong client relationships driving repeat business"]}],v=[{degree:"Software Engineering Student",institution:"🇩🇪 42 Wolfsburg",duration:"November 2023 - Present",achievements:["Building projects in C/C++, Python, and JavaScript using Linux environment","Developed Unix shell with process handling and I/O redirections in C","Created 3D game engine with optimized multi-threading render system","Designed IRC server using OOP and Design Patterns in C++"]},{degree:"Logistics Engineering",institution:"🇲🇽 Universidad de las Américas Puebla",duration:"August 2015 - May 2019",achievements:["Specialized in process optimization using heuristic algorithms","Developed optimization models using FICO Xpress","Applied meta-heuristics for complex logistics problems"]}],x=[{title:"IRC Server",description:"Internet Relay Chat server implementation in C++",image:"https://res.cloudinary.com/dbnex3949/image/upload/v1737137873/chaticon_iyflxk.png",link:"https://github.com/MemoCSales/ft_irc"},{title:"Mini Shell",description:"Unix shell implementation with process handling, and more...",image:"https://res.cloudinary.com/dbnex3949/image/upload/v1737139605/terminal_rkqa0z.png",link:"https://github.com/MemoCSales/42_minishell"},{title:"3D Game",description:"Developed with raycasting techniques. The project is inspired by the classic Wolfenstein 3D game.",image:"https://res.cloudinary.com/dbnex3949/image/upload/v1737139605/image_synrb2.png",link:"https://github.com/MemoCSales/42_cub3D"},{title:"A wireframe model",description:"This project is about showing a landscape as a 3D object with lines outlining all surfaces.",image:"https://res.cloudinary.com/dbnex3949/image/upload/v1737140010/FdF-42_b8cu5m.png",link:"https://github.com/MemoCSales/42_FdF"}];function y(e){return`
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
  `}function b(e){return`
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
  `}function S(e){return`
    <div class="flex-shrink-0 w-80 bg-primary rounded-lg overflow-hidden hover:-translate-y-1 transition-all duration-300">
      <div class="flex flex-col h-full">
        <img 
          src="${e.image}" 
          alt="${e.title}"
          class="w-full h-48 object-cover"
        >
        <div class="p-6 flex flex-col flex-grow">
          <h3 class="font-mono text-text-light text-xl mb-2">${e.title}</h3>
          <p class="font-mono text-text mb-4 flex-grow">${e.description}</p>
          <a 
            href="${e.link}"
            target="_blank"
            class="inline-flex items-center gap-2 px-4 py-2 bg-accent text-primary font-mono rounded-lg hover:bg-opacity-90 transition-all duration-300 w-fit"
          >
            Know more
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  `}const l=document.getElementById("experienceGrid");l&&(l.innerHTML=h.map(e=>y(e)).join(""));const d=document.getElementById("educationGrid");d&&(d.innerHTML=v.map(e=>b(e)).join(""));const m=document.getElementById("projectsContainer");m&&(m.innerHTML=x.map(e=>S(e)).join(""));document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(n){n.preventDefault();const o=document.querySelector(this.getAttribute("href"));o&&o.scrollIntoView({behavior:"smooth",block:"start"})})});const u=document.querySelector("#projects button:first-of-type"),p=document.querySelector("#projects button:last-of-type"),f=document.querySelector("#projectsContainer").parentElement;u&&p&&(u.addEventListener("click",()=>{f.scrollBy({left:-340,behavior:"smooth"})}),p.addEventListener("click",()=>{f.scrollBy({left:340,behavior:"smooth"})}));
