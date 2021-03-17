const navMenu = () => {
	const wrapperMenu = document.querySelector('.wrapper-menu');
	const navActive = document.querySelector('.nav-list');
	const navLinks = document.querySelectorAll('.nav-list li');

	wrapperMenu.addEventListener('click', () => {
		wrapperMenu.classList.toggle('open');
		navActive.classList.toggle('nav-list-active');

		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade .4s ease forwards ${index / 7 + .3}s`;
			}
		});
	});
}

navMenu();