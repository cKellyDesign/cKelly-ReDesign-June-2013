var i = 0;

// ***** Pop It Up *****	
function popitup(url) {
	newwindow=window.open(url,'name','height=520,width=380,scrollbars=1');
	if (window.focus) {newwindow.focus()}
	return false;
}
function popitup2(url) {
	newwindow=window.open(url,'name','height=800,width=1050,scrollbars=1');
	if (window.focus) {newwindow.focus()}
	return false;
} 


$(document).ready(function(){
	var pageW = $(window).width();
	if ( pageW <= 767 ) {
		$('body').addClass("m");
	} else {
		$('body').addClass("d");
	}
	
	// ***** Nav Scripts *****
	// doc ready add or remove class stickToTop
	var topDist = $(document).scrollTop();
	if ( topDist >= 536 ) {
		$('div#deskNav').addClass("stickToTop");
	} else {
		$('div#deskNav').removeClass("stickToTop");
	}
	
	// nav scrollTo functions
	$('a#stt-logo').bind({click: function(){
		//scroll to top of page
		$('html, body').animate({
			scrollTop: 0
		}, 250);
		return false;
	}});
	$('div#deskNav li a.about').bind({click: function(){
		var topDist = $(document).scrollTop();
		var dist = $('#pitch-container').offset().top;
		//if stt nav is not present, compensate stt nav for scroll animation
		if ( topDist <= 536 ) {
			var dist = dist - 131;
		}	
		//scroll animation
		$('html, body').animate({
			scrollTop: dist
		}, 250);
		return false;
	}});
	$('div#deskNav li a.projects').bind({click: function(){
		var topDist = $(document).scrollTop();
		var dist = $('#gallery-container').offset().top - 55;
		if ( topDist < 536 ) {
			var dist = dist - 131;
		}
		$('html, body').animate({
			scrollTop: dist
		}, 250);
		return false;
	}});
	$('div#deskNav li a.contact').bind({click: function(){
		var topDist = $(document).scrollTop();
		var dist = $('#contact-container').offset().top - 125;
		if ( topDist < 536 ) {
			var dist = dist - 131;
		}
		$('html, body').animate({
			scrollTop: dist
		}, 250);
		return false;
	}});

	
	// ***** FlexSlider Trigger *****
/*	
	function startFlexSlider (){
		$('article.fancy-article#CPI div.gallery-plugin-container').flexslider({
			animation: "fade",
			controlNav: "thumbnails",
			startAt: 0,
			slideshow: false/*,
			start: function(){
				alert("flexslider loaded");
			},
			manualControls: "ol.thumbs li" */ /*
		});
	}
*/
	
	// ***** Gallery thumb click *****

var pageW = $(window).width();
if ( pageW >= 768 ) {

	$('.fancy-gallery-filmstrip ol.flex-control-nav li img').bind({click: function(){
		
		if ( $(this).parents('.fancy-gallery-filmstrip').hasClass('collapsed') ) {
		
				$(this).parents('article.fancy-article').children('span.area').slideToggle();
				$(this).parents('.fancy-gallery-filmstrip').toggleClass('collapsed').toggleClass('open');
				$(this).parent('a').parent('li').addClass('current');
				
				var listItem = $('ol li.current');
				var curIndex = $(this).parents('ol.thumbs').children('li').index(listItem);
				$('div.fancy-gallery-filmstrip.open ul.slides').children('li').eq(curIndex).addClass('current');
					
		} else {
			
			if ( $(this).parent('a').parent('li').hasClass('current') ) {
			
				$(this).parents('article.fancy-article').children('span.area').slideToggle();
				$(this).parents('.fancy-gallery-filmstrip').toggleClass('collapsed').toggleClass('open');
				$('ol.thumbs li.current').removeClass('current');	
				$('ul.slides li.current').removeClass('current');
				
			} else {
			
				$('li.current').removeClass('current');
				$(this).parent('a').parent('li').addClass('current');
				
				var listItem = $('ol li.current');
				var curIndex = $(this).parents('ol.thumbs').children('li').index(listItem);
				$('ul.slides li.current').removeClass('current');
				$('div.fancy-gallery-filmstrip.open ul.slides').children('li').eq(curIndex).addClass('current');

			}
		}
		return false;
	}
	});
}	
	
	
	// ***** Fancy Trigger *****
	
	$("body.d a.galThumb").fancybox({
		fitToView	: false,
		width		: '95%',
		height		: '100%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		afterClose	: function(){
    		$('ol.thumbs li.current').removeClass('current');	
			$('ul.slides li.current').removeClass('current');
			$('.fancy-gallery-filmstrip.open').parents('article.fancy-article').children('span.area').toggle();
			$('.fancy-gallery-filmstrip.open').toggleClass('collapsed').toggleClass('open');
    	}/*,
		afterLoad	: function(){ 
							startFlexSlider();
							//alert("fancy box loaded");				
					  }*/
	});
	$("body.m a.galThumb").fancybox({
		type		: 'inline'
	});
	
	
	
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