var i = 0;
$(document).ready(function(){
	var topDist = $(document).scrollTop();
	if ( topDist >= 536 ) {
		$('div#deskNav').addClass("stickToTop");
	//	$('section#header-container.container div#deskNav li.one-third.column').addClass("now");
	} else {
		$('div#deskNav').removeClass("stickToTop");
	//	$('section#header-container.container div#deskNav li.one-third.column').removeClass("now");
	}
});
$(document).scroll(function() {
	i++;
	var topDist = $(document).scrollTop();
	if ( topDist >= 536 ) {
		$('div#deskNav').addClass("stickToTop");
	//	$('section#header-container.container div#deskNav li.one-third.column.alpha').addClass("offset-by-four");
	//	$('section#header-container.container div#deskNav li.one-third.column').addClass("now");
	
	//	$('div#deskNav > nav > ul > li').css('width', '220px');
	//	$('div#deskNav > nav > ul > li').addClass('four').addClass('columns').removeClass('one-third').removeClass('column');
	//	$('div#deskNav > nav > ul > li:first-child').addClass('offset-by-four');
	} else {
		$('div#deskNav').removeClass("stickToTop");
	//	$('section#header-container.container div#deskNav li.one-third.column.alpha').removeClass("offset-by-four");
	//	$('section#header-container.container div#deskNav li.one-third.column').removeClass("now");
	//	$('div#deskNav > nav > ul > li').attr('style', '');
	//	$('div#deskNav > nav > ul > li').removeClass('four').removeClass('columns').addClass('one-third').addClass('column').removeClass('offset-by-four');
		
	}
});