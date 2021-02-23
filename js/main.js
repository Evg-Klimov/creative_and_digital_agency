const navMenu = () => {
	const wrapperMenu = document.querySelector('.wrapper-menu');
	const navActive = document.querySelector('.nav');
	const navLinks = document.querySelectorAll('.nav-list li');

	wrapperMenu.addEventListener('click', () => {
		wrapperMenu.classList.toggle('open');
		navActive.classList.toggle('nav-active');

		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ''
			} else {
				link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + .3}s`
			}
		});
	});
}

navMenu();