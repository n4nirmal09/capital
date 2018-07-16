
export const bannerSlider = function () {
		this.sliderNavs = selectAll('.slide-nav')
		this.slides = selectAll('.illustration')
		this.mainTimeLine = null
        this.slideDelay = 3

        this.init();
        
}

bannerSlider.prototype = {
	init () { 
		this.addMainTimeline()
		this.sliderNavigation()
	},

	addMainTimeline () {
		let tl = new TimelineMax({repeat: -1})

		this.slides.forEach(slide => {
			let slideItems = slide.children
			tl.from(slide,0.2,{autoAlpha: 0}, slide.id)
			.staggerFrom(slideItems,0.5,{
				autoAlpha: 0,
				y: 100,
			}, 0.1, slide.id)
			.staggerTo(slideItems,0.5,{
				delay: this.slideDelay,
				y: 100,
				autoAlpha: 0
			}, -0.1)
			.to(slide,0.2,{autoAlpha: 0}, slide.id + 'leave')
			.addCallback(this.bannerUpdate,slide.id,[tl, this])
		})

		this.mainTimeLine = tl
	},

	sliderNavigation () {
		this.sliderNavs.forEach(nav => {
			nav.addEventListener('click', (e) => {
				e.preventDefault()
				let target = nav.dataset.slide
				this.mainTimeLine.seek(target)
			})
		})
	},

	bannerUpdate (tl, bannerObj) {
		let label = tl.currentLabel()
		bannerObj.sliderNavs.forEach(nav => {
			nav.classList.remove('active')
			if(nav.dataset.slide === label){
				nav.classList.add('active')
			}
		})
	}
}

