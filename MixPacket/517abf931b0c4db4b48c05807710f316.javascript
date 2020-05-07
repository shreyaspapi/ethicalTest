 function initSlideshowCarousel(){
	  displayImagesWithoutLazy(getMlDeviceType(), 'righttrail_slideshow');
	  setTimeout(function(){
	  $(".movie_sec_slide").removeClass('display_none');
	  $('.bxslider_simple_slide').bxSlider({ mode: 'fade',	adaptiveHeight: true, captions: false, auto: false, useCSS: false, speed: 300 });
	  $('.movie_sec_slide').find('.bx-loading').remove();
	  	}, 1000);
}


