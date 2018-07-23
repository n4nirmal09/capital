import $ from 'jquery';

var current_fs, next_fs, previous_fs; //fieldsets
// var left, opacity, scale; //fieldset properties which we will animate
// var animating; //flag to prevent quick multi-click glitches
console.log("1");
// $('.right-slider').slick('setPosition');
$(".next").click(function () {
  // $('.right-slider')
  current_fs = $(this).closest('.step');
  
  next_fs = $(this).closest('.step').next();
  previous_fs = $(this).closest('.step').prev();

  //activate next step on progressbar using the index of next_fs
  $(".progressbar li").eq($(".step").index(next_fs)).addClass("active");
  $(".progressbar li").eq($(".step").index(current_fs)).removeClass("active");
  $(".progressbar li").eq($(".step").index(current_fs)).addClass("completed");

  //show the next fieldset
  // next_fs.show();
  next_fs.css({'height':'auto', 'overflow': 'visible'});
  
  // current_fs.hide();
  current_fs.css({'height':'0','overflow': 'hidden'});
  
  // current_fs.css({'height':'0','overflow':'hidden'})
});

$(".previous").click(function () {
  current_fs = $(this).closest('.step');
  previous_fs = $(this).closest('.step').prev();

  //de-activate current step on progressbar
  $(".progressbar li").eq($(".step").index(current_fs)).removeClass("active");
  $(".progressbar li").eq($(".step").index(previous_fs)).addClass("active");

  //show the previous fieldset
  // current_fs.hide();
  current_fs.css({'height':'0','overflow': 'hidden'})
  // current_fs.css({'height':'0','overflow':'hidden'})
  // previous_fs.show();
  previous_fs.css({'height':'auto','overflow': 'visible'})
});


$(".inner-next").click(function () {
  current_fs = $(this).closest('.inner-step');
  next_fs = $(this).closest('.inner-step').next();

  //show the next fieldset
  next_fs.show();
  current_fs.hide();
});

$(".inner-previous").click(function () {
  current_fs = $(this).closest('.inner-step');
  previous_fs = $(this).closest('.inner-step').prev();

  //show the previous fieldset
  current_fs.hide();
  previous_fs.show();
});

