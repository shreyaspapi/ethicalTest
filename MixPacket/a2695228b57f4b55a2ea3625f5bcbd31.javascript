$(document).ready(function(){
	var wd = $('body').innerWidth();
	
	function adjust_mostpopular(){
		var mxwrpht = $('.featurestories').offset().top + $('.featurestories').outerHeight() - 25;
		$('.mpleft .popularlinks li').each(function(){
			var pop_el = $(this);
			var pop_pos = pop_el.offset().top;
			//console.log('el : '+pop_el.index+' -- '+pop_pos)
			if(pop_pos > mxwrpht){
				pop_el.hide();
			}
		});
	}
	
	
	if(wd > 479 && wd < 992 && $('.mostpopularleft').index() < 0){
		//$(".mostpopular").clone().addClass('mostpopularleft showblk').removeClass('hideblk').insertAfter(".featurestories");
		$('<div class="col-xs-12 col-sm-7 col-md-12 mpleft"></div>').insertAfter(".featurestories");
		$(".trending ").clone().addClass('trendingleft showblk').removeClass('hideblk').appendTo(".mpleft");
		$(".sidebarwraptop .mostpopular").clone().addClass('showblk').removeClass('hideblk col-sm-6 col-md-12').appendT