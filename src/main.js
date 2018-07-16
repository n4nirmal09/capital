import 'babel-polyfill'
import 'nodelist-foreach-polyfill'
import 'TweenMax' // aliases given in base.config
import 'animation.gsap' // aliases given in base.config

import './utilities/modernizr'

// Site script
import siteScripts from './scripts/sitescripts'

siteScripts.init()

import "@/sass/main.scss"