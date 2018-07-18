import $ from 'jquery'
$('.right-slider').slick({
  dots: true,
  infinite: true,
  // arrows: false,
  speed: 500,
  fade: false,
  cssEase: 'linear',
  autoplay: true,
  prevArrow: "<button type='button' class='slick-prev'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'><path d='M0,22L22,0l2.1,2.1L4.2,22l19.9,19.9L22,44L0,22L0,22L0,22z' fill='#999999'/></svg></button>",
    nextArrow: "<button type='button' class='slick-next'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'><path d='M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z' fill='#999999'/></svg></button>"
});