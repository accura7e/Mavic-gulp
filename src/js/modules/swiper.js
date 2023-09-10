import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function productsSlider(){
    const swiper = new Swiper('.products__slider', {
        // Optional parameters

        loop: true,
    
        // If we need pagination

    
        // Navigation arrows
        navigation: {
        nextEl: '.products__btn-next',
        prevEl: '.products__btn-prev',
        },
    
        // And if we need scrollbar

    });
}


export default productsSlider;
 