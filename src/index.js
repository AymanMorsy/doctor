import { Swiper, Navigation,Pagination ,Autoplay,EffectCube} from 'swiper/js/swiper.esm.js';
import './sass/vendors/swiper.scss';
import './sass/main.scss';
import  './js/news-ticker';
import  './js/nav';

// Install modules
Swiper.use([Navigation,Pagination,Autoplay,EffectCube]);

// Now you can use Swiper
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
    autoplay: {
      delay: 2500,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });




