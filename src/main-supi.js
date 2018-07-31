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
// import graph from './scripts/graphscript'
import './scripts/graphscript'
import { bannerSlider } from './scripts/planselectionscript'
import './scripts/customselect'
import { selectionTabs } from './scripts/planselectiontab'
// import swiper from './scripts/gallerySlider'
import './scripts/progressbar'

import './scripts/initCustomSelect'
//import './scripts/yearAddCustomSelect'

// popup js
import './scripts/popup'
// slick slider
//import './scripts/slick-init'


// Site basic scripts
siteScripts.init()
// intialize banner slider

if (select('#circle-nav')) new bannerSlider()


if (select('#plan-selection-slider')) new selectionTabs()



// intialize graph
// graph()

// $('.dropdown').dropdown()

import "@/sass/main.scss"
import rangeScript from './scripts/rangeScript';

rangeScript({
  $amountRange: $('.amountRange'),
  $input: $('.amountRange input'),
  $rangeLi: $('.range-labels li'),
  $rangeLables: $('.range-labels')
});


$('.selectable-table .cg-table-list').on('click', function () {
	$('.selectable-table .cg-table-list').removeClass('selected');
	$(this).addClass('selected');
});

// $(fuction(){
// })

$(function () {
	$('.custom-tab-links a').on('click', function (e) {
		e.preventDefault();
		$('.custom-tab-inner').removeClass('active');
		$('.custom-tab-link').removeClass('active');
		$(this).addClass('active');
		$($(this).attr('href')).addClass('active');
	});
})

