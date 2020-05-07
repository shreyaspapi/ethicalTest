var isIE = window.navigator.msPointerEnabled;
jQuery(document).ready(function($) {
          $('.banner').bjqs({
            height      : 306,
            width       : 900,
			animduration : 750, // how fast the animation are
			animspeed : 6000, // the delay between each slide
			automatic : true,
			showcontrols : false,
			centermarkers : true,
            responsive  : true
          });
		  
		  $(".popupBg").height($(document).innerHeight());
		  $(document).keyup(function(e){
			if(e.keyCode ===27){
				$('.popupBg').hide();
				}
			})
			
		if(isIE){
			$('body').addClass('ie8')
			}
});

function openPopup($obj){
	var url = $($obj).attr('href');
	$(url).show()
	//alert($(window).innerHeight())
	
	$(".nano-height-01").css("max-height",""+($(window).innerHeight()-147)+"px"); //space form top (including popup heading) + space form bottom
	
	setTimeout( function(){
		$('.nano').nanoScroller({ flashDelay: 1000 });
	}, 0);
}
	
