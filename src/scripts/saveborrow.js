import noUiSlider from "nouislider"

(function (w) {

	let SaveBorrow = function () {
		this.section = select('#save-borrow-section')
		this.slider = select('#saving-slider')
		this.userAmtTotalInput = select('#user-amt-total')
		this.userAmtPerMonthInput = select('#user-amt-pay-per-month')
		this.userAmt = this.userAmtTotalInput.value
		this.userAmtPerMonth = this.userAmtPerMonthInput.value

		this.borrowPrice = 36000
		this.savePrice = 18240
		this.priceDiffer = this.borrowPrice - this.savePrice
		this.init()
	}

	SaveBorrow.prototype = {
		init () {

			this.initSlider()
		},

		toolTipFormatter (v) {

			let toolTipWrapper = "<div class='custom-tool-tip-wrapper'>" +
			"<div class='tool-tip-header text-secondary'>" +
			"The difference you pay if you borrow: <span class='display-4 text-black ml-2'>$" + this.priceDiffer + "</span>" +
			"</div>" +
			"<div class='tool-tip-body'>" + 
			"<div class='tool-tip-row'>" +
			 "<div class='tool-tip-body-col'>" + 
			  "<p class='text-secondary'>Save (invest)</p><span class='display-4'>$" + this.savePrice + "</span>" +
			 "</div>" +
			 "<div class='tool-tip-body-col text-secondary'>or</div>" +
			 "<div class='tool-tip-body-col'>" + 
			  "<p class='text-secondary'>Borrow (you pay)</p><span class='display-4'>$" + this.borrowPrice + "</span>" +
			 "</div>" +
			"</div></div>" + 
			"<div class='tool-tip-footer'><strong>" + Math.round(v) + " Years" + "</strong></div>"
			"</div>"

			// let toolTipFooter = "<div class='tool-tip-footer'>" + 
			// Math.round(v) + " Years"
			// "</div>"

			//toolTipWrapper.appendChild(toolTipFooter)
			return toolTipWrapper
		},

		initSlider () {
			
			noUiSlider.create(this.slider, {
				start: [0],
				connect: true,
				range: {
					'min': 0,
					'max': 18
				},
				tooltips: [{to: (v) => this.toolTipFormatter(v)}]
			})

			let offset = select('.custom-tool-tip-wrapper').scrollHeight
			this.slider.style.marginTop = offset + 150 + "px"
		}
	}

	function select (s) {
		return document.querySelector(s)
	}

	function htmlToElement(html) {
	    var template = document.createElement('template');
	    html = html.trim();
	    template.innerHTML = html;
	    return template.content.firstChild;
	}

	if (select('#save-borrow-section')) new SaveBorrow()

})(window)