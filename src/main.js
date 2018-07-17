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

// Site basic scripts
siteScripts.init()
// intialize banner slider
new bannerSlider()
// intialize graph
graph()

import "@/sass/main.scss"
