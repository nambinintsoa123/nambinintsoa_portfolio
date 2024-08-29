document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.getElementById('hamburger');
	const navLinks = document.getElementById('nav-links');
  
	hamburger.addEventListener('click', () => {
	  navLinks.classList.toggle('show');
	  hamburger.classList.toggle('show');
	});
  });
