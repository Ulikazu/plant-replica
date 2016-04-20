$(document).ready(function() {
	// tests for connectivity
	// all console.log functions used are solely for debugging purposes
	var msg = $('h1').text();

	console.log(msg);

	/**
	 * inViewport jQuery plugin by Roko C.B.
	 * http://stackoverflow.com/a/26831113/383904
	 * Returns a callback function with an argument holding
	 * the current amount of px an element is visible in viewport
	 * (The min returned value is 0 (element outside of viewport)
	 */
	(function($, win) {
	  $.fn.inViewport = function(cb) {
	     return this.each(function(i,el) {
	       function visPx(){
	         var elH = $(el).outerHeight(),
	             H = $(win).height(),
	             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
	         return cb.call(el, Math.max(0, t>0? Math.min(elH, H-t) : (b<H?b:H)));  
	       }
	       visPx();
	       $(win).on("resize scroll", visPx);
	     });
	  };
	}(jQuery, window));


	//initiates scroll events
	$(window).scroll(function() {
		//gets scroll position from top
		var wScroll = $(window).scrollTop();

		//tests the wScroll variable
		console.log("You've scrolled " + wScroll + " pixels so far.");

		// navigation/header hider and shower

	})

	// hover effect for "new on the blog" section
	var week15 = "http://plant.dk/content/uploads/2016/04/designlinksthumbnailgrafikweek15.jpg";
	var week14 = "http://plant.dk/content/uploads/2016/04/designlinksthumbnailgrafikweek14.jpg";
	var week13 = "http://plant.dk/content/uploads/2016/03/designlinksthumbnailgrafikweek13.jpg"

	var articles = [week15, week14, week13];

	$('.post-list li').hover(function() {
		var post = $(this).index();

		console.log(post);

		$('.latest-posts .ft-post-img').css('background-image', "url('" + articles[post] + "')");

	});

	// animates featured image when in viewport
	$('.row .ft-img').inViewport(function(px) {
		if (px) {
			$(this).delay(1500).removeClass('pre-slide');
		}
	});

	// animates post data when in viewport
	$('.context span,h2,p,a').inViewport(function(px) {
		if (px) {
			$(this).removeClass('pre-pop');
		};
	});

	$('.links .col2 a').inViewport(function(px) {
		if (px) {
			$(this).each(function() {
				$(this).delay(3500).removeClass('pre-slide');

			});
		}
	});

	$('header').headroom();


});