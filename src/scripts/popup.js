import $ from 'jquery'
$(document).ready(function(){
	// var findClass = $("#main-content").find('.plan-selection-links li:first-child').hasClass('active');
	// console.log(findClass);
	// if(findClass) {
	// 	$("#exampleModalLong").show();
	// 	$("#modal-overlay").addClass('active');
	// }
	// $("#exampleModalLong").hide();
	// $("#modal-overlay").removeClass('active');
	$(".selection-link").click(function(e){
		e.preventDefault();
		if($("#main-content").find('.plan-selection-links li').first()) {
			$("#exampleModalLong").hide();
			$("#modal-overlay").removeClass('active');
		}
		$("#exampleModalLong").show();
		// $(this).parents("#main-content").find("#exampleModalLong").show();
		$("#modal-overlay").addClass('active');
	})
	$(".close-popup").click(function(e){
		e.preventDefault();
		$("#exampleModalLong").hide();
		$("#modal-overlay").removeClass('active');
	})
});