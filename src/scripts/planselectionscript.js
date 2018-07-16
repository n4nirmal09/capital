import ScrollMagic from "ScrollMagic"

export const bannerSlider = function () {
		this.sliderNavs = selectAll('.slide-nav')
		this.slides = selectAll('.illustration')
		this.circleNav = select('#circle-nav')
		this.circleRail = select('#circle-nav-rail circle')
		this.circleDots = selectAll('#circle-nav-dots circle')
		this.mainTimeLine = null
        this.slideDelay = 3

        this.init();
        
}

bannerSlider.prototype = {
	init () { 
		this.disappearCircles()
		this.entryTimeline()
		this.addMainTimeline()
		this.sliderNavigation()
	},

	disappearCircles () {
		const circleDots = this.circleDots
		const circleRail = this.circleRail

    	// circleDots.forEach(dot => {
	    // 	dot.style.strokeDasharray = dot.getTotalLength() 
	    // 	dot.style.strokeDashoffset = dot.getTotalLength()
	    // 	dot.dataset.strokeoffset = dot.getTotalLength()
	    // })

	    circleRail.style.strokeDasharray = circleRail.getTotalLength()
	    circleRail.style.strokeDashoffset = circleRail.getTotalLength()
	    circleRail.dataset.strokeoffset = circleRail.getTotalLength()
	},

	entryTimeline () {
		let tl = new TimelineMax({
			delay: 0.5, 
			onComplete: () => {
				this.mainTimeLine.play()
			}
		 }),
		controller = new ScrollMagic.Controller()

		tl.to(this.circleRail, 0.8, {
			strokeDashoffset: 0,
				//strokeDasharray: "5.006 5.006",
			transformOrigin: '50% 50%'
		})
		.staggerFrom(this.circleDots, 0.5, {
			scale: 0,
			transformOrigin: '50% 50%',
			ease: Back.easeOut.config(1.7)
		}, 0.1, 0.5)
		.to(this.circleRail, 0.5, {strokeDasharray: "5.006 5.006"})

		new ScrollMagic.Scene({triggerElement: this.circleNav,duration:0, triggerHook: 'onCenter', offset:-200})
		.setTween(tl)
		.addTo(controller)


	},

	addMainTimeline () {
		let tl = new TimelineMax({repeat: -1, paused: true})

		this.slides.forEach(slide => {
			let slideItems = slide.children
			tl.from(slide,0.2,{autoAlpha: 0}, slide.id)
			.staggerFrom(slideItems,0.5,{
				autoAlpha: 0,
				y: 100,
			}, 0.1, slide.id)
			.staggerTo(slideItems,0.5,{
				//delay: this.slideDelay,
				y: 100,
				autoAlpha: 0
			}, -0.1,slide.id + "+=" + this.slideDelay)
			.to(slide,0.2,{autoAlpha: 0}, slide.id + 'leave')
			.addCallback(this.bannerUpdate,slide.id,[tl, this])
		})

		this.mainTimeLine = tl
	},

	sliderNavigation () {
		this.sliderNavs.forEach(nav => {
			nav.addEventListener('click', (e) => {
				e.preventDefault()
				let currentLabel = this.mainTimeLine.currentLabel(),
				    target = nav.dataset.slide,
				    timeOut = "",
				    seekTo = () => {
				    	this.mainTimeLine.seek(target)
				    }
				if(currentLabel === target) return

				clearTimeout(timeOut)
				this.mainTimeLine.seek(currentLabel + "+=" + this.slideDelay)
				//this.mainTimeLine.seek(target)
				timeOut = setTimeout(seekTo,800) 
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

