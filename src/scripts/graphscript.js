import Highcharts from 'highcharts'

export default () => {
	if (!document.getElementById('graph-container')) return
	Highcharts.chart('graph-container', {
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
	    categories: [
	      '1',
	      '5',
	      '10',
	      '15',
	      '20'
	    ],
	    plotBands: [{ // visualize the weekend
	      from: 4.5,
	      to: 6.5,
	      // color: 'rgba(68, 170, 213, .2)'
	    }]
	  },
	  yAxis: {
	    // title: {
	    //   tickWidth: 0
			// }
			tickWidth: 0,
			crosshair: false,
			lineWidth: 0,
			gridLineWidth:0,
			labels: {
				format:'{value}',
						style: {
								opacity: '0',
								fontSize:'0'
						}
				}
	  },
	  tooltip: {
	    shared: false,
	    valueSuffix: ' $'
	  },
	  credits: {
	    enabled: false
	  },
	  plotOptions: {
	    areaspline: {
	      fillOpacity: 0.5
	    }
	  },
	  series: [{
	    name: 'Years',
	    data: [0, 1, 3, 8, 11]
	  }]
	});
}
