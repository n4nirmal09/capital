import 'babel-polyfill'
import 'nodelist-foreach-polyfill'
import 'TweenMax' // aliases given in base.config
import 'animation.gsap' // aliases given in base.config
// import 'swiper'
import './utilities/modernizr'
import $ from 'jquery'

import './utilities/modernizr'
import './utilities/slick.js'

// Site script
import siteScripts from './scripts/sitescripts'
import graph from './scripts/graphscript'

// import swiper from './scripts/gallerySlider'
import './scripts/gallerySlider'

import {bannerSlider} from './scripts/planselectionscript'
import {selectionTabs} from './scripts/planselectiontab'

// import {bannerSlider} from './scripts/planselectionscript'
// Site basic scripts
siteScripts.init()
// intialize banner slider
if(select('#circle-nav')) new bannerSlider()

if(select('#plan-selection-slider')) new selectionTabs()

// intialize graph
graph()
// mySwiper()
// formdrop()
import "@/sass/main.scss"

// Gallery Slider
$('.carousel-slides').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });