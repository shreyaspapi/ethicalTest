 $(document).ready(function()
	{
	  displayImagesWithoutLazy(getMlDeviceType(), 'righttrail_slideshow');
	  $('.bxslider_simple_slide').bxSlider({ mode: 'fade',	adaptiveHeight: true, captions: false, auto: false, useCSS: false, speed: 300 });
    });
