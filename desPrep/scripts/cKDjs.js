var i = 0;
$(document).ready(function(){
	var topDist = $(document).scrollTop();
	if ( topDist >= 536 ) {
		$('div#deskNav').addClass("stickToTop");
	} else {
		$('div#deskNav').removeClass("stickToTop");
	}
	// ***** Fancy Trigger *****
	
	$("a.galThumb").fancybox({
		
		fitToView	: false,
		width		: '85%',
		height		: '100%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	
	// ***** Gallery thumb click *****
	
	$('.fancy-gallery-filmstrip ul.thumbs li a').bind({click: function(){
	/*	
		if ( $(this).hasClass("current") ) {
			$(this).addClass("super");
		} else {
			$('.current').removeClass("current");
			$(this).addClass('current');
			$('.super').removeClass("super");
		}
		return false;
	*/	
	}	/* end of function */
	}); /* click bind */
	
	
});
$(document).scroll(function() {
	i++;
	var topDist = $(document).scrollTop();
	if ( topDist >= 536 ) {
		$('div#deskNav').addClass("stickToTop");
	} else {
		$('div#deskNav').removeClass("stickToTop");
	}
});