/* Check if $ is defined as jQuery if not define */
if(typeof $ == 'undefined') {
	var $ = jQuery;
}

/* Top Banner Cricket Score Start */
function tsc_ajax_call() {
        if($( '#crick_file' ).attr('value') != ''){
                $.ajax({
                        url: '/sports/cricket_score/topscore_banner.html',
                        dataType: 'html',
                        success: function(data){
                                if( $(data).filter('#crick_file').attr('status') == 'Off' ){
                                    if(typeof tsc_crick != 'undefined') {
                                        clearInterval(tsc_crick);
                                    }
                                    $( '#crick_file' ).attr('interval','0');
                                }
                                else {
                                    $('.livecric').empty().append($(data).filter('.livecric').html());
				    var show_buttons = $(data).filter('#crick_file').attr('show_btns');
				    if( show_buttons == 'true' ) {
					$("#livupd").bxSlider({ auto: false, pager: false, controls: show_buttons, infiniteLoop:false, hideControlOnEnd: true});
				    }
                                }
                        },
                        error: function(e){
                            if(typeof tsc_crick != 'undefined') {
                                    clearInterval(tsc_crick);
                            }
                        }
                });
        }
        else{
            ;
        }
}

function rhs_score_widget() {
    $.ajax({
            url: '/sports/cricket_score/rhs_score_widget.html',
            dataType: 'html',
            success: function(data){
                    if($(data).find('#rhs_score_widget').length){
                          clearInterval(rhs_csw);
                          $('#score_widget_script').empty().append($(data).filter('#score_widget_script').html());
                    }
                    else
                    {
                          $('#score_widget_script').empty();
                          clearInterval(rhs_csw);
                    }
            }
     });
}
/* Top Banner Cricket Score End */

function w620_ajax_call(id) {
    if(id) {
	$.ajax({
	    url: '/sports/cricket_score/'+id+'.html',
	    dataType: 'html',
	    success: function(data){
		$('.score_w620').empty();
		if ($(data) .filter('.score_w620').children() .length < 1) {
		    if(typeof w620_crick != 'undefined') {
			clearInterval(w620_crick);
		    }
		}
		else {
		    $('.score_w620').empty().append($(data).filter('.score_w620').html());
		}
	    },
	    error: function(e){
		if(typeof w620_crick != 'undefined') {
		    clearInterval(w620_crick);
		}
	    }
	});
    }
    else { 
	if(typeof w620_crick != 'undefined') {
	    clearInterval(w620_crick);
	}			    
    }
}
$(document).ready( function(){
if($('#rhs_score_widget').length) { rhs_score_widget(); }
});


