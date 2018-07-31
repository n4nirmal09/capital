import $ from 'jquery'
import {NewBornChart} from './graphscript'

function getTrackStyle(el, $rangeLi, $rangeLables, prefs, originalData) {
  var curVal = el.value,
    val = (curVal - 1) * (100/($rangeLi.length - 1)),
    style = '';

  // Set active label
  $rangeLi.removeClass('active selected');

  var curLabel = $rangeLables.find('li:nth-child(' + curVal + ')');

  curLabel.addClass('active selected');
  curLabel.prevAll().addClass('selected');
  RangeInput.api = parseInt(curLabel.text().substring(1));
  NewBornChart.update({
    series: [{
      name: 'years',
      data: originalData.map(function(i){
            return i*RangeInput.api
      })
    }]
  });


  // Change background gradient
  for (var i = 0; i < prefs.length; i++) {
    style += '.amountRange {background: linear-gradient(to right, #37adbf 0%, #37adbf ' +
      val + '%, #fff ' + val + '%, #fff 100%)}';
    style += '.amountRange input::-' + prefs[i] + '{background: linear-gradient(to right, #37adbf 0%, #37adbf ' +
      val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
  }

  return style;
}

function RangeInput(elems){
  // prepare the style tag for the pseudo track
  var sheet = document.createElement('style'),
    prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'],
    labelWidth = elems.$amountRange.width()/(elems.$rangeLi.length-1),
    originalData = NewBornChart.series[0].data.map(function(i){
      return i.y
    });

  RangeInput.api = parseInt($('.range-labels .active').text().substring(1));

  document.body.appendChild(sheet);

  // set label and pseudo track styles
  elems.$rangeLi.width(labelWidth);
  elems.$rangeLables.css({marginLeft: '-'+labelWidth/2+'px'});

  elems.$input.on('input', function () {
    sheet.textContent = getTrackStyle(this, elems.$rangeLi, elems.$rangeLables, prefs, originalData);
  });

  // Change input value on label click
  elems.$rangeLi.on('click', {ref: this}, function (e) {
    var index = $(this).index();
    elems.$input.val(index + 1).trigger('input');
  });
}

export default RangeInput;
