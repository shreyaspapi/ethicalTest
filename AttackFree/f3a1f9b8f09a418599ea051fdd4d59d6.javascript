function trailerDisplay(jsonDataSource)
{
	
	var trailerdisplay = $("#trailercomp").html();
	var displaytemplate = Handlebars.compile(trailerdisplay);

	$("#trailersdiv").append(displaytemplate(jsonDataSource));

	if(jsonDataSource.videoPropertiesJson.length > 0) {
		if(jsonDataSource.videoPropertiesJson[0].videoType =='Akamai') {

			loadVideo("akamaiOnePlayerVideoContent"+jsonDataSource.videoPropertiesJson[0].uniqueId,jsonDataSource.videoPropertiesJson[0].videoUrl,"video/mp4",false,"",jsonDataSource.videoPropertiesJson[0].videoPreviewImage+".image.300.225.jpeg",jsonDataSource.overlayUrl,
				jsonDataSource.prerollUrl,jsonDataSource.overLayFirstAdTime,jsonDataSource.overlayFrequency,
				jsonDataSource.overlayMaxViewTime,jsonDataSource.overlayCount,'100%', '207');
		}

		if(jsonDataSource.videoPropertiesJson[0].videoType=='YouTube') {
			onScriptYouTube(jsonDataSource.videoPropertiesJson[0].videoUrl,"#video-playerOneYoutube-"+jsonDataSource.videoPropertiesJson[0].uniqueId, '207','100%');
		}

		if(jsonDataSource.videoPropertiesJson[0].videoType=='DailyMotion') {
			onScriptDailyMotion(jsonDataSource.videoPropertiesJson[0].videoUrl,"#video-playerOneDailyMotion-"+jsonDataSource.videoPropertiesJson[0].uniqueId, '207','100%');
		}
	}
}


