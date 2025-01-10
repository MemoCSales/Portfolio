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