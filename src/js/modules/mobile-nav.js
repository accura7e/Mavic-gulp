function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.menu__btn');
	const nav = document.querySelector('.menu__list');
	
	navBtn.onclick = function(){
		navBtn.classList.toggle('menu__btn--active')
		nav.classList.toggle('menu__list--active');
		
	}

	nav.onclick = function(){
		navBtn.classList.remove('menu__btn--active')
		nav.classList.remove('menu__list--active');
	}


	

	

	
}

export default mobileNav;