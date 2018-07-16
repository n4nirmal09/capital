import 'babel-polyfill'
import 'nodelist-foreach-polyfill'
import 'TweenMax' // aliases given in base.config
import 'animation.gsap' // aliases given in base.config

import './utilities/modernizr'

// Site script
import siteScripts from './scripts/sitescripts'
import graph from './scripts/graphscript'
// import formdrop from './scripts/formdrop'


siteScripts.init()
graph()

// formdrop()
import "@/sass/main.scss"