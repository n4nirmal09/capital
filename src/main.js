import 'babel-polyfill'
import 'nodelist-foreach-polyfill'
import 'TweenMax' // aliases given in base.config
import 'animation.gsap' // aliases given in base.config
import './utilities/modernizr'
import $ from 'jquery'
// Semantic Ui
// import 'semantic-ui-popup/popup.css'
// $.fn.popup = require('semantic-ui-popup')

// import 'semantic-ui-dropdown/dropdown.css'
// $.fn.dropdown = require('semantic-ui-dropdown')

// import 'semantic-ui-transition/transition.css'
// $.fn.transition = require('semantic-ui-transition')


// Slick slider
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
import './scripts/progressbar'

import './scripts/initCustomSelect'

// popup js
import './scripts/popup'


// Site basic scripts
siteScripts.init()
// intialize banner slider
if(window.innerWidth > 992){
	if(select('#circle-nav')) new bannerSlider()
}

if (select('#plan-selection-slider')) new selectionTabs()



// intialize graph
graph()

// $('.dropdown').dropdown()

import "@/sass/main.scss"
