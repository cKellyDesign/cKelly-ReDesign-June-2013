var i = 0;
$(document).ready(function(){
	var topDist = $(document).scrollTop();
	if ( topDist >= 536 ) {
		$('div#deskNav').addClass("stickToTop");
	} else {
		$('div#deskNav').removeClass("stickToTop");
	}
	
	
	
	
	
	
	// ***** FlexSlider Trigger *****
	
	function startFlexSlider (){
		
	
	
	
	
	
	
	$('article.fancy-article#CPI div.gallery-plugin-container').flexslider({
    	animation: "fade",
    	controlNav: "thumbnails",
    	startAt: 0,
    	slideshow: false,
    	start: function(){
    		alert("flexslider loaded");
    	}/*,
    	manualControls: "ol.thumbs li" */
  	});
	
  }
	
	
	// ***** Gallery thumb click *****
	
	$('.fancy-gallery-filmstrip ol.flex-control-nav li img').bind({click: function(){
		
		if ( $(this).parents('.fancy-gallery-filmstrip').hasClass('collapsed') ) {
			$(this).parents('article.fancy-article').children('span.area').slideToggle();
			$(this).parents('.fancy-gallery-filmstrip').toggleClass('collapsed');
			
			
		}
		
	}
	});
	
	
	
	// ***** Fancy Trigger *****
	
	$("a.galThumb").fancybox({
		fitToView	: false,
		width		: '95%',
		height		: '100%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		afterLoad	: function(){ 
					startFlexSlider();
					//alert("fancy box loaded");				
								}
	});
	
	
	
	$('.fancy-gallery-filmstrip ol.thumbs li').bind({click: function(){
	/*	var par = $(this).parents('div.fancy-gallery-filmstrip');
		if ( $(par).hasClass("collapsed") ) {
			
			$(this).parents('div.fancy-gallery-filmstrip').removeClass("collapsed");
			$(this).parents('article.fancy-article').children('span.area').slideToggle();
			if ( $(this).hasClass("current") ) {
			//	var fancyPar = $(this).parents('article.fancy-article').attr('id');
    		//	$('article.fancy-article#' + fancyPar + ' div.gallery-plugin-container').flexslider();
			}
			
			
			//alert("detected");
		} else {
			
			if ( $(this).hasClass("current") ) {
				$(this).parents('div.fancy-gallery-filmstrip').addClass("collapsed");
				$(this).parents('article.fancy-article').children('span.area').slideToggle();
			} else {
				$('.current').removeClass("current");
				$(this).addClass('current');
				
			//	var fancyPar = $(this).parents('article.fancy-article').attr('id');
    		//	$('article.fancy-article#' + fancyPar + ' div.gallery-plugin-container').flexslider();
			}
			
			
			//alert("failed");
		}
	*/	
		/*
		if ( $(this).hasClass("current") ) {
		//	$(this).addClass("super");
		} else {
			$('.current').removeClass("current");
			$(this).addClass('current');
			//$('.super').removeClass("super");
		}
		*/
	
	
	
	
	}	/* end of function */
	}); /* click bind */
	
	
	
	/* ***** Star Paralax ***** */
	
	
	var scroll = $(window).scrollTop();
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var pageHeight = $('html').height();
	var starsHeight = $('img#stars').height();
	var constHeight = $('img#const').height();
	
	// distances between bottom of window and other elements
	var starDistance = starsHeight - windowHeight;
	var constDistance = constHeight - windowHeight;
	var pageDistance = pageHeight - windowHeight;
	// rates
	var starRate = starDistance / pageDistance;
	var constRate = constDistance / pageDistance;
	var scrollPos = ( scroll / pageHeight ) * pageHeight;
	var starTopDist = starRate * scrollPos;
	var constTopDist = constRate * scrollPos;
	
	$('img#stars').css('top', "-" + starTopDist + "px");
	$('img#const').css('top', "-" + constTopDist + "px");
	
	
});
$(document).scroll(function() {
	i++;
	var topDist = $(document).scrollTop();
	if ( topDist >= 536 ) {
		$('div#deskNav').addClass("stickToTop");
	} else {
		$('div#deskNav').removeClass("stickToTop");
	}
	
	/* ***** Star Paralax ***** */
	
	
	var scroll = $(window).scrollTop();
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var pageHeight = $('html').height();
	var starsHeight = $('img#stars').height();
	var constHeight = $('img#const').height();
	
	// distances between bottom of window and other elements
	var starDistance = starsHeight - windowHeight;
	var constDistance = constHeight - windowHeight;
	var pageDistance = pageHeight - windowHeight;
	// rates
	var starRate = starDistance / pageDistance;
	var constRate = constDistance / pageDistance;
	var scrollPos = ( scroll / pageHeight ) * pageHeight;
	var starTopDist = starRate * scrollPos;
	var constTopDist = constRate * scrollPos;
	
	$('img#stars').css('top', "-" + starTopDist + "px");
	$('img#const').css('top', "-" + constTopDist + "px");
	
});