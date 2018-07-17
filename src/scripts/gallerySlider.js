// function reinitSwiper(swiper) {
//     setTimeout(function () {
//      swiper.reInit();
//     }, 500);
//   }
var mySwiper = new Swiper('.swiper-container', {
	slidesPerView : 1,
    dynamicBullets: true,
    // spaceBetween: 100,
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // scrollContainer: true,
    mousewheelControl: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // effect: 'fade',

})
