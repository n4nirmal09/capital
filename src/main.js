import 'babel-polyfill'
import 'nodelist-foreach-polyfill'
import 'TweenMax' // aliases given in base.config
import 'animation.gsap' // aliases given in base.config

import './utilities/modernizr'

// Site script
import siteScripts from './scripts/sitescripts'
import graph from './scripts/graphscript'
import { bannerSlider } from './scripts/planselectionscript'
import './scripts/customselect'
import { selectionTabs } from './scripts/planselectiontab'

// Site basic scripts
siteScripts.init()
// intialize banner slider
if (select('#circle-nav')) new bannerSlider()

if (select('#plan-selection-slider')) new selectionTabs()

// intialize graph
graph()

// Initialize custom select firld
import './scripts/initCustomSelect'

import "@/sass/main.scss"
