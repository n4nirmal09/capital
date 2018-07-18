import $ from 'jquery';

var current_fs, next_fs, previous_fs; //fieldsets
// var left, opacity, scale; //fieldset properties which we will animate
// var animating; //flag to prevent quick multi-click glitches

$(".next").click(function () {
  current_fs = $(this).closest('.step');
  next_fs = $(this).closest('.step').next();

  //activate next step on progressbar using the index of next_fs
  $(".progressbar li").eq($(".step").index(next_fs)).addClass("active");
  $(".progressbar li").eq($(".step").index(current_fs)).removeClass("active");

  //show the next fieldset
  next_fs.show();
  current_fs.hide();
});

$(".previous").click(function () {
  current_fs = $(this).closest('.step');
  previous_fs = $(this).closest('.step').prev();

  //de-activate current step on progressbar
  $(".progressbar li").eq($(".step").index(current_fs)).removeClass("active");
  $(".progressbar li").eq($(".step").index(previous_fs)).addClass("active");

  //show the previous fieldset
  current_fs.hide();
  previous_fs.show();
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

