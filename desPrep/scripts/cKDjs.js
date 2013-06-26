var i = 0;
$(document).ready(function(){
	var topDist = $(document).scrollTop();
	if ( topDist >= 536 ) {
		$('div#deskNav').addClass("stickToTop");
	} else {
		$('div#deskNav').removeClass("stickToTop");
	}
});
$(document).scroll(function() {
	i++;
	var topDist = $(document).scrollTop();
	if ( topDist >= 536 ) {
		$('div#deskNav').addClass("stickToTop");
	//	$('div#deskNav > nav > ul > li').addClass('four').addClass('columns').removeClass('one-third').removeClass('column');
	//	$('div#deskNav > nav > ul > li:first-child').addClass('offset-by-four');
	} else {
		$('div#deskNav').removeClass("stickToTop");
	//	$('div#deskNav > nav > ul > li').removeClass('four').removeClass('columns').addClass('one-third').addClass('column').removeClass('offset-by-four');
		
	}
});