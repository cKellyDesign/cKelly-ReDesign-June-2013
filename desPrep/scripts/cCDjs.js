$(document).ready(function(){
	var topDist = $(document).scrollTop();
	var deskNavTop = $('div#deskNav').scrollTop();
	if ( topDist >= deskNavTop ) {
		$('div#deskNav').addClass("stickToTop");
	} else {
		$('div#deskNav').removeClass("stickToTop");
	}
});
$(document).scroll(function() {
	var topDist = $(document).scrollTop();
	var deskNavTop = $('div#deskNav').scrollTop();
	if ( topDist >= deskNavTop ) {
		$('div#deskNav').addClass("stickToTop");
	} else {
		$('div#deskNav').removeClass("stickToTop");
	}
});