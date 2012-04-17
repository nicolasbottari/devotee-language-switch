$(document).ready(function () {
	$("a").click(function() {
	   var lang = $(this).attr("class");
	   $("div.lang").fadeOut(500);
	   $("div." + lang).fadeIn(500);
	});
});