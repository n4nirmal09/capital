import 'babel-polyfill'
import 'nodelist-foreach-polyfill'
import 'TweenMax' // aliases given in base.config
import 'animation.gsap' // aliases given in base.config

import './utilities/modernizr'

// Site script
import siteScripts from './scripts/sitescripts'
import graph from './scripts/graphscript'


siteScripts.init()
graph()

import "@/sass/main.scss"