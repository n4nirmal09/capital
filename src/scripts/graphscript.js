import Highcharts from 'highcharts'
import graphData from '../scripts/graphdata'

// export default (graphData) => {
// 	if (!document.getElementById('graph-container')) return
// 	Highcharts.chart('graph-container', graphData);
// }

function select (s) {
	return document.querySelector(s)
}




(function (window) {

  'use strict';

  Highcharts.Tooltip.prototype.pin = function () {
        this._hide = this.hide
        this.hide = function(){} // overriding hide function to nothing to remove mouseout tooltip hide
  }

  Highcharts.Point.prototype.highlight = function(event) {
    this.onMouseOver(); // Show the hover marker
    this.series.chart.tooltip.refresh(this); // Show the tooltip
    this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
  };

  const SelectionGraph = function () {
  	this.graphMaker = select('#graph-maker')
  	this.graphContainer = select('#graph-container')
  	this.amtSelect = this.graphMaker.querySelector('#select_amt')
  	this.amt = this.amtSelect.value
  	this.yearSelect = this.graphMaker.querySelector('#select_year')
    this.yearRange =  select('#year-range')
    this.yearRangeInput =  select('#year-range-input')
    this.yearRangeLabelsHolder =  this.graphMaker.querySelector('.range-labels')
    this.yearRangeLabels = this.graphMaker.querySelectorAll('.range-labels li')
    this.yearHint = this.graphMaker.querySelector('#hint-year')
    this.amtHint = this.graphMaker.querySelector('#hint-amount')
  	this.chart = null
    this.years = [1, 5, 10, 15, 20]
  	this.init()
  }
  SelectionGraph.prototype = {
  	init () {
  		this.setGraph()
      this.setHint()
  		this.yearChangeListener()
      this.yearSliderInputListener()
      this.amtSelectListener()
      this.calculateGraphData()
  	},

  	setGraph () {
  		this.chart = Highcharts.chart(this.graphContainer, graphData)
      this.chart.update({
        xAxis: {
          categories:  this.years
        }
      })
      this.chart.series[0].setData(this.calculateGraphData(), true)
      this.chart.tooltip['pin']()
      setTimeout(() => { this.chart.series[0].points[0].highlight() }, 2000);
      
  	},

    setHint () {
      let year = this.yearSelect.value === "0" ? 1 : this.yearSelect.value,
          amt = this.amt * year * 12
      this.yearHint.innerHTML = year
      this.amtHint.innerHTML = amt
    },

  	yearChangeListener () {
  		this.yearSelect.addEventListener("change", () => {
  			let yearVal = this.yearSelect.value
        this.yearRangeInput.value = yearVal
  			
  			this.setHint()
        this.showTooltip()
  		})
  	},

    yearSliderInputListener () {
      this.yearRangeInput.addEventListener('input', () => {
        let yearVal = this.yearRangeInput.value
        this.yearSelect.value = yearVal
        
        this.setHint()
        this.showTooltip()
      })
    },

    amtSelectListener () {

      this.amtSelect.addEventListener('input', () => {
         this.amt = this.amtSelect.value

         this.setHint()
         this.updateGraphData()
         this.showTooltip()
      })
    },

    calculateGraphData () {
      let data = this.years.map(year => {
        return this.amt * year * 12
      })

      return data
    },

    updateGraphData () {
      this.chart.series[0].setData(this.calculateGraphData(), true)
    },

    showTooltip () {
      let chart = this.chart,
      xAxis = chart.xAxis[0],
      yearIndex = this.years.findIndex(year => {
        if(parseInt(this.yearSelect.value)){
          return year === parseInt(this.yearSelect.value)
        }
        return 1
      }),
      tooltipPoint = chart.series[0].points[yearIndex]
      //console.log(yearIndex)
      //chart.tooltip.refresh(tooltipPoint)
      tooltipPoint.highlight()
    }
  }


  if (select('#graph-maker')) new SelectionGraph()

})(window)
