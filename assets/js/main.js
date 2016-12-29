/**
 * Base Javascript 
 *
 * @author Jim Ramsden me@jimram.com
 * @copyright 2012 - Jim Ramsden
 */


(function($) {

	$('#greeting').hide();

	// Settings - Time sensitive greeting
	var now = new Date();
	var hrs = now.getHours();
	var msg = "Hey there.";

	if (hrs >  0) msg = "Hello, Night Owl."; // Really late     
	if (hrs >  5) msg = "Hello, Early Riser."; // Really early
	if (hrs >  7) msg = "Mornin' Sunshine!"; // Quite early
	if (hrs >  8) msg = "Good Morning.";      // After 6am
	if (hrs > 12) msg = "Lunchtime soon?";    // After 12pm
	if (hrs > 13) msg = "Good Afternoon.";    // After 12pm
	if (hrs > 17) msg = "Good Evening.";      // After 6pm
	if (hrs > 22) msg = "Bedtime soon?"; // After 10pm

	$(document).ready( function() { 

		// Display - Time sensitive greeting
		
		$('#greeting').text(msg).fadeTo(100,1);

		// Fit Text
		$("#page").find("header h1").fitText(0.7);
		$("#page").find("header h2.ft").fitText(1);

		// Lazy Ass Images
		$(".ll img").lazyload({ threshold : 400 });

		// Lazy Ass Images
		$("#page .post-content").find("a").attr("target","_blank");

	});
	
	$(window).load( function() {

	});
	
	$(window).resize( function() {
		
	});

	$(window).scroll( function() {
		
	});
	
})(jQuery);