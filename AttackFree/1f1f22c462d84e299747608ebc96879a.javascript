if ($('#tm_slider').length>0){
$('#tm_slider').bxSlider({
	auto: false,
	pager: true,
	autoHover:true,
	controls: false	
});
}
if ($('#popular_downloads').length>0){
	$('#popular_downloads').bxSlider({
	autoHover:true,
	infiniteLoop: true,
	controls: true
	});	
}
if ($('.htmtvSlider').length>0){
$('.htmtvSlider').bxSlider();
}
function homeHoroscope(a){
for(i=1; i<=15; i++)
	{
		$('#personalize' + i).hide();
		$('#h_hor' + i).removeClass('active');
	}	
		$('#personalize' + a).show();
		$('#h_hor' + a).addClass('active');
}
if ($('.astroSlider').length>0){
$('.astroSlider').bxSlider();
}