import './style.css'

const mobileMenuBtn = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn?.addEventListener('click', () => {
	mobileMenu?.classList.toggle('hidden');
});

// Close menu when clicking a link

// Close menu when clicking a link
const navLinks = document.querySelectorAll('.mobile-menu .nav-link');
navLinks.forEach(link => {
	link.addEventListener('click', () => {
		mobileMenu?.classList.add('hidden');
	});
});

const experiences = [
  {
    role: "Project Controller Manager",
    company: "Huawei",
    duration: "September 2020 - October 2023",
    achievements: [
      "Managed R$50M+ in purchase orders backlog",
      "Achieved 95% SLA compliance across Brazil, Mexico and Argentina Office",
      "Optimized processes for 100+ national projects",
    ],
  },
  {
    role: "Account Sales Representative",
    company: "Pack&Pack",
    duration: "September 2019 - December 2019",
    achievements: [
      "Increased sales by 15% in 4 montsh through cold calling",
      "Improved sales metrics using client database analysis",
      "Built strong client relationships driving repeat business",
    ],
  },
];

const education = [
  {
    degree: "Software Engineering Student",
    institution: "🇩🇪 42 Wolfsburg",
    duration: "November 2023 - Present",
    achievements: [
      "Building projects in C/C++, Python, and JavaScript using Linux environment",
      "Developed Unix shell with process handling and I/O redirections in C",
      "Created 3D game engine with optimized multi-threading render system",
      "Designed IRC server using OOP and Design Patterns in C++",
    ],
  },
  {
    degree: "Logistics Engineering",
    institution: "🇲🇽 Universidad de las Américas Puebla",
    duration: "August 2015 - May 2019",
    achievements: [
      "Specialized in process optimization using heuristic algorithms",
      "Developed optimization models using FICO Xpress",
      "Applied meta-heuristics for complex logistics problems",
    ],
  },
];

function createExperienceCard(experience) {
	return `
    <div class="bg-secondary rounded-lg p-6 shadow-md hover:-translate-y-1 transition-all duration-300">
      <div class="flex items-center gap-2 mb-2">
        <i class="fas fa-briefcase text-accent"></i>
        <h3 class="font-mono text-text-light text-xl">${experience.role}</h3>
      </div>
      
      <div class="flex items-center gap-2 mb-4">
        <i class="fas fa-calendar text-accent"></i>
        <span class="font-mono text-text text-sm">${experience.duration}</span>
      </div>
      
      <div class="inline-block px-4 py-2 bg-primary rounded-full text-text mb-4">
        ${experience.company}
      </div>
      
      <ul class="space-y-2">
        ${experience.achievements
          .map(
            (achievement) => `
          <li class="flex items-start gap-2 text-text">
            <i class="fas fa-caret-right text-accent mt-1"></i>
            <span class="font-mono">${achievement}</span>
          </li>
        `
          )
          .join("")}
      </ul>
    </div>
  `;
}

function createEducationCard(education) {
  return `
    <div class="bg-secondary rounded-lg p-6 shadow-md hover:-translate-y-1 transition-all duration-300">
      <div class="flex items-center gap-2 mb-2">
        <i class="fas fa-graduation-cap text-accent"></i>
        <h3 class="font-mono text-text-light text-xl">${education.degree}</h3>
      </div>
      
      <div class="flex items-center gap-2 mb-4">
        <i class="fas fa-calendar text-accent"></i>
        <span class="font-mono text-text text-sm">${education.duration}</span>
      </div>
      
      <div class="inline-block px-4 py-2 bg-primary rounded-full text-text mb-4">
        ${education.institution}
      </div>
      
      <ul class="space-y-2">
        ${education.achievements
          .map(
            (achievement) => `
          <li class="flex items-start gap-2 text-text">
            <i class="fas fa-caret-right text-accent mt-1"></i>
            <span class="font-mono">${achievement}</span>
          </li>
        `
          )
          .join("")}
      </ul>
    </div>
  `;
}

const experienceGrid = document.getElementById('experienceGrid');
if (experienceGrid) {
	experienceGrid.innerHTML = experiences.map(exp => createExperienceCard(exp)).join('');
}

const educationGrid = document.getElementById("educationGrid");
if (educationGrid) {
  educationGrid.innerHTML = education
    .map((exp) => createEducationCard(exp))
    .join("");
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});