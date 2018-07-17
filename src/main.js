import 'babel-polyfill'
import 'nodelist-foreach-polyfill'
import 'TweenMax' // aliases given in base.config
import 'animation.gsap' // aliases given in base.config
// import 'swiper'
import './utilities/modernizr'
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
