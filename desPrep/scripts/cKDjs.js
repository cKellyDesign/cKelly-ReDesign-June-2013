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
		width		: '95%',
		height		: '100%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	
	// ***** Fancy Trigger *****
	
	
	
	//$('article.fancy-article#water1stOrg').flexslider();
	
  
	
	
	// ***** Gallery thumb click *****
	
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