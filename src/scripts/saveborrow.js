import noUiSlider from "nouislider"

(function (w) {

	let SaveBorrow = function () {
		this.section = select('#save-borrow-section')
		this.slider = select('#saving-slider')
		this.userAmtTotalInput = select('#user-amt-total')
		this.userAmtPerMonthInput = select('#user-amt-pay-per-month')
		this.userAmt = parseInt(this.userAmtTotalInput.value)
		this.userAmtPerMonth = parseInt(this.userAmtPerMonthInput.value)

		//this.savePriceVal = null
		//this.borrowPriceVal = null
		//this.borrowPrice = 36000
		//this.savePrice = this.userAmtPerMonthInput.value
		this.priceDiffer = this.borrowPrice - this.savePrice
		this.init()
	}

	SaveBorrow.prototype = {
		init () {
			this.perMonthUpdate()
			this.initSlider()
			this.userAmtTotalInputListener()
			this.userAmtPerMonthInputListener()
		},

		toolTipFormatter (v) {

			let toolTipWrapper = "<div class='custom-tool-tip-wrapper'>" +
			"<div class='tool-tip-header text-secondary'>" +
			"The difference you pay if you borrow: <span class='display-4 text-black ml-2'>$" + (this.borrowPrice(v) - this.savePrice(v)) + "</span>" +
			"</div>" +
			"<div class='tool-tip-body'>" + 
			"<div class='tool-tip-row'>" +
			 "<div class='tool-tip-body-col'>" + 
			  "<p class='text-secondary'>Save (invest)</p><span class='display-4'>$" + this.savePrice(v) + "</span>" +
			 "</div>" +
			 "<div class='tool-tip-body-col text-secondary'>or</div>" +
			 "<div class='tool-tip-body-col'>" + 
			  "<p class='text-secondary'>Borrow (you pay)</p><span class='display-4'>$" + this.borrowPrice(v) + "</span>" +
			 "</div>" +
			"</div></div>" + 
			"<div class='tool-tip-footer'><strong>" + Math.round(v) + " Years" + "</strong></div>"
			
			return toolTipWrapper
		},

		initSlider () {
			
			noUiSlider.create(this.slider, {
				start: [0],
				connect: true,
				step: 1,
				range: {
					'min': 0,
					'max': 18
				},
				tooltips: [{to: (v) => this.toolTipFormatter(v)}]
			})

			let offset = select('.custom-tool-tip-wrapper').scrollHeight
			this.slider.style.marginTop =  250 + "px"
		},

		userAmtPerMonthInputListener () {
			this.userAmtPerMonthInput.addEventListener('input', () => {
				this.userAmtPerMonth = parseInt(this.userAmtPerMonthInput.value)
				this.totalAmtUpdate()
				this.updateSlider()
			})
		},

		userAmtTotalInputListener () {
			this.userAmtTotalInput.addEventListener('input', () => {
				this.userAmt = parseInt(this.userAmtTotalInput.value)
				this.perMonthUpdate()
				this.updateSlider()
			})
		},

		totalAmtUpdate () {
			let perMonthVal = this.userAmtPerMonth,
				totalVal = Math.round((12 * 18 * perMonthVal)/1.9)
			this.userAmt = totalVal
			this.userAmtTotalInput.value = totalVal
		},

		perMonthUpdate () {
			let totalVal = this.userAmt,
			    perMonthValue = Math.round((totalVal + (totalVal*0.05*18))/(12*18))
			this.userAmtPerMonth = perMonthValue
			this.userAmtPerMonthInput.value = perMonthValue
		},

		updateSlider () {
			this.slider.noUiSlider.destroy()
			this.initSlider()
		},

		borrowPrice (year) {
			return Math.round(this.userAmtPerMonth * 12 * year || this.userAmtPerMonth)
		},

		savePrice (year) {
			let pricePerYear = this.userAmtPerMonth * 12 * year || this.userAmtPerMonth
			return Math.floor(pricePerYear * 0.912)
		}
	}

	function select (s) {
		return document.querySelector(s)
	}

	if (select('#save-borrow-section')) new SaveBorrow()

})(window)