import { Swiper, Navigation,Pagination,Parallax ,Autoplay,EffectCube} from 'swiper/js/swiper.esm.js';
// Install modules
Swiper.use([Navigation,Pagination,Parallax,Autoplay,EffectCube]);

// Now you can use Swiper
// لما تيجي تعمل سلايدر تاني هتعمله انستنس تانية بانشليز جديدة
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
loop: true,
});


// swiper.on('slideChange', function () {
//     // $('.swiper-slide h1').classList.remove("active")
//     $('.swiper-slide h1').classList.add("active")
//   });