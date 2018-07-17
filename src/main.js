import 'babel-polyfill'
import 'nodelist-foreach-polyfill'
import 'TweenMax' // aliases given in base.config
import 'animation.gsap' // aliases given in base.config
import $ from 'jquery'

import './utilities/modernizr'
import './utilities/slick.js'
// import './utilities/dropdown.js'
// import './utilities/checkbox.js'

// Site script
import siteScripts from './scripts/sitescripts'
import graph from './scripts/graphscript'
import { bannerSlider } from './scripts/planselectionscript'
import './scripts/customselect'
import { selectionTabs } from './scripts/planselectiontab'
// import swiper from './scripts/gallerySlider'
// import './scripts/gallerySlider'

import './scripts/initCustomSelect'

// Site basic scripts
siteScripts.init()
// intialize banner slider
if (select('#circle-nav')) new bannerSlider()

if (select('#plan-selection-slider')) new selectionTabs()

// intialize graph
graph()

import './scripts/progressbar'

$('.carousel-slides').slick()

import "@/sass/main.scss"
