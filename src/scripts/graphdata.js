export default {
	  chart: {
	    type: 'areaspline'
	  },
	  title: {
	    text: ''
	  },
	  // legend: {
	  //   layout: 'vertical',
	  //   align: 'left',
	  //   verticalAlign: 'top',
	  //   x: 150,
	  //   y: 100,
	  //   floating: true,
	  //   borderWidth: 1,
	  //   backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
	  // },
	  xAxis: {
	  	lineWidth: 1,
		lineColor: '#000',
		tickLength:0
	    // categories: [
	    //   '1',
	    //   '5',
	    //   '10',
	    //   '15',
	    //   '20'
	    // ]
	  },
	  yAxis: {
	    // title: {
	    //   tickWidth: 0
			// }
			tickWidth: 0,
			crosshair: false,
			lineWidth: 1,
			lineColor: '#000',
			gridLineWidth: 0,
			labels: {
				enabled: false
			},
			opposite: true
	  },
	  tooltip: {
	    shared: false,
	    followPointer: false,
	    valueSuffix: '$',
	    useHTML: true,
	    formatter () {
	    	return "in <strong>" + this.x + " Years</strong>, you would have already covered his " +
	    	"1st year of tuition <br/>" +
	    	"<strong>" + this.x + " Year : " + this.y + "$</strong>"
	    }
	  },
	  plotOptions: {
	    areaspline: {
	      color: '#1862a1',
	      fillOpacity: 0.5,
	      lineWidth: 2,
	      lineColor: '#000',
	      stickyTracking: false
	    }
	  },
	  credits: {
	  	enabled: false
	  },
	  series: [{
	    name: 'Year',
	   
	  }]
}