import 'babel-polyfill'
import 'nodelist-foreach-polyfill'
import 'TweenMax' // aliases given in base.config
import 'animation.gsap' // aliases given in base.config
import 'swiper'
import './utilities/modernizr'
// Site script
import siteScripts from './scripts/sitescripts'
import graph from './scripts/graphscript'
// import swiper from './scripts/gallerySlider'
import './scripts/gallerySlider'

import {bannerSlider} from './scripts/planselectionscript'
// Site basic scripts
siteScripts.init()
// intialize banner slider
new bannerSlider()
// intialize graph
graph()
// mySwiper()
// formdrop()
import "@/sass/main.scss"
