import accordeon from './modules/accordeon.js';
import mobileNav from './modules/mobile-nav.js';
import productsSlider from './modules/swiper.js';
productsSlider();
accordeon();
mobileNav();



new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    sectionSelector: '.page-section',
    scrollOverflow: true,
    menu: '#header__nav',
    anchors: ['top', 'products', 'benefits', 'specification', 'questions', 'contacts']
});