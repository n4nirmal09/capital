import $ from 'jquery'

$(document).ready(function () {

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
	$(".close-popup").click(function (e) {
		e.preventDefault();
		$("#exampleModalLong").hide();
		$("#modal-overlay").removeClass('active');
	})
});

$('#site-hamburger').on('click', function(e){
	e.preventDefault();
	console.log('show image pop')
	$("#imageModal").show();
		// $(this).parents("#main-content").find("#exampleModalLong").show();
	$("#image-overlay").addClass('active');
})
$('#imageModal').on('click', function(e){
	e.preventDefault();
	// console.log('show image pop')
	$("#imageModal").hide();
		// $(this).parents("#main-content").find("#exampleModalLong").show();
	$("#image-overlay").removeClass('active');
})

