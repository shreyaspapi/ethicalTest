function pollLoad(uniqueId){
	OPINION_POLL.setSectionImage(uniqueId);
	OPINION_POLL.submitClick(uniqueId);
	OPINION_POLL.closeClick();
}

var OPINION_POLL = {
	setSectionImage : function(uniqueId){
		var sectionImage = $('#sectionImage_'+uniqueId).val();
         if(sectionImage != '' && sectionImage !=null && sectionImage != 'undefined' )
        	$('#opinion_'+uniqueId+' .user_post_bg').css({"background-image":"url('"+sectionImage+"')"});
	},
	submitClick : function(uniqueId){
		$('.opinion_submit_'+uniqueId).unbind().click(function(){
			 var nodePath = $('#nodePath_'+uniqueId).val();
			 var nodeName = $('#node_'+uniqueId).val();
			 var question = $('#question_'+uniqueId).val();
			 var cookiePresent = false;
			 var selectedVal = $("#opinion_"+uniqueId+" input[type='radio'][name='Radio"+uniqueId+"']:checked").val();
			 var d = new Date();
			 if (!OPINION_POLL.checkCookieExits("pollCheck"+nodePath) )
			 {
				cookiePresent = true;
			 }
			 if(selectedVal != '' && selectedVal != undefined && selectedVal!= null ){
				$.ajax({
				type : "POST",
				url : "/mm/polling.submitpoll.json",
				data : {
					selectedOption : selectedVal,
					nodePath : nodePath,
					question : question,
					nodeName : nodeName,
					cookiePresent : cookiePresent,
					rf:d.getTime()
				},
				success : function(response,status, xhr) {
					var ct = xhr.getResponseHeader("content-type") || "";
					if(ct.indexOf("text/plain")>-1 || ct.indexOf("text/html")>-1){
						OPINION_POLL.displayOpinionPopup(jQuery.parseJSON(response),uniqueId);
					}
					else{
						OPINION_POLL.displayOpinionPopup(response,uniqueId);
					}
					if(!cookiePresent){
						createCookie1("pollCheck"+nodePath,nodePath,1);
					}
					//createCookie("opinionPollContent"+nodePath,escape($('#pwrappers-box-' + nodeName).html()),1);
					$('#submit-but-'+uniqueId).trigger('click');
				},
				error : function(xhr) {
				}

				});

			}
			else
			{
				$('#pwrappers-box-'+uniqueId).html("Please select any option");
				$('#submit-but-'+uniqueId).trigger('click');

			}

			});

	},
	checkCookieExits : function(cookie) {
	   var response = readCookie(cookie);
	   if (response != null) {
		   return false;
	   } else {
		   return true;
	   }

    },
    displayOpinionPopup : function(jsonData,uniqueId)
    {
		var opinionSource = $("#opinion_popup_"+uniqueId).html();
		var opinionTemplate = Handlebars.compile(opinionSource);
		$('#pwrappers-box-' + uniqueId).html(opinionTemplate(jsonData));
    },
    closeClick : function(){
    	$('.opinionClose').on('click',function(){
			$('.radio-p').attr('checked',false);
		});
		$(document).on('click','#lean_overlay, #close-background, .reveal-modal-bg',function(){
		   $('.opinionClose').trigger('click');
		});
    }

}
