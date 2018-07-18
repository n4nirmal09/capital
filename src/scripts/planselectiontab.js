export const selectionTabs = function () {
	this.selectionTab = select('#plan-selection-slider')
	this.slider = this.selectionTab.querySelector('.slider')
	this.links = this.selectionTab.querySelectorAll('.selection-link>a')
	this.panels = selectAll('.plan-selection-tabs>div')
	this.init()
    
	
}

function moveSlider (activeNode) {
	let slider = select('.slider')
	let offsetX = activeNode.offsetLeft + activeNode.clientWidth/2 - slider.clientWidth/2
	TweenLite.to(slider,0.5,{x: offsetX})
}

function reset () {
	let tabs = selectAll('.selection-link>a'),
		panels = selectAll('.plan-selection-tabs>div')
	tabs.forEach((tab) => {
		tab.classList.remove('active')
	})

	panels.forEach((panel) => {
		panel.classList.remove('active')
	})
}

selectionTabs.prototype = {
	init () {
		
		this.initSlider()
		this.setLinkClicks()
	},

	initSlider () {

		this.links.forEach(link => {
			if(link.classList.contains('active')){
				TweenLite.set(this.slider,{x: link.offsetLeft + link.clientWidth/2 - this.slider.clientWidth/2})
			}
		})
	},

	clickListener (e) {
		e.preventDefault()
		reset()
		moveSlider(this)
		let target = this.dataset.tab
		this.classList.add('active')
		select('#'+target).classList.add('active')
	},

	setLinkClicks () {
		this.links.forEach(link => {
			link.addEventListener("click", this.clickListener)
		})
	}
}