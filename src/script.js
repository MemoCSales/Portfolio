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
		role: "Senior Developer",
		company: "Tech Company",
		duration: "eternity",
		achievements: [
			"Achievement 1",
			"Achievement 2",
			"Achievement 3"
		]
	},
	{
		role: "Role 2",
		company: "Company 2",
		duration: "2",
		achievements: [
			"1",
			"2",
			"3"
		]
	}
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

const experienceGrid = document.getElementById('experienceGrid');
if (experienceGrid) {
	experienceGrid.innerHTML = experiences.map(exp => createExperienceCard(exp)).join('');
}