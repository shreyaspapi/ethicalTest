function setDefaultCityForWeather(option,regionVariant,landingPage){
	var d = new Date();
    d.setTime(d.getTime() + (7*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    if(regionVariant == 'IndiaInternational'){
    	document.cookie = "defaultweatherindiaintr"+ "=" + option.value + "; " + expires;
    }	
    else if ( regionVariant == 'Americas'){
    	document.cookie = "defaultweatheramerica"+ "=" + option.value + "; " + expires;
    }
    else if ( regionVariant == 'Gulf'){
    	document.cookie = "defaultweathergulfcity"+ "=" + option.value + "; " + expires;
    	document.cookie = "defaultweathergulfcountry"+ "=" + option.options[option.selectedIndex].text + "; " + expires;
    }
    getWeatherForCity(option.value,option.options[option.selectedIndex].text,regionVariant,landingPage);
}

function getWeatherForCity(city,country,region,landingPage){
	$.ajax({
        type : "GET",
        url : "/mm/malayalam/weather/getweatherforcity",
        data : {
        	city : city,
        	country : country,
        	region : region
        },
        success : function(listItems) {
          	 if(listItems != ""){
          		  obj=jQuery.parseJSON(listItems);
          		  var content = '';
          		  content += '<div class="'+obj[0].iconClass+'"></div>';
          		  content += '<div class="weatherRead">';
          		  content += '<p class="tempNow">'+obj[0].tempCelcius+'°C</p>';
          		  content += '<p class="weatherstatus">'+obj[0].desc+'</p>';
          		  content += '</div>';
          		  $('#header-mm-weather').html(content);
          		  content = '';
          		  if(region == 'IndiaInternational'){
          			  content += '<a title="'+obj[0].displayName+'" class="linkcol" href="'+landingPage+'/India.html">'+obj[0].displayName+'</a>';
          		  }
          		  else if (region == 'Americas'){
          			content += '<a title="'+obj[0].displayName+'" class="linkcol" href="'+landingPage+'/America.html">'+obj[0].displayName+'</a>';
          		  }else if (region == 'Gulf'){
          			content += '<a title="'+obj[0].displayName+'" class="linkcol" href="'+landingPage+'/Gulf.'+obj[0].displayName+'.html">'+obj[0].displayName+'</a>';
          		  }
          		 $('#header-mm-weather-loc').html(content);
          		 $('select.weather_dropdown').find('option[value="-1"]').prop('selected', true);
          	 }	  
               
           },
        error : function(xhr) {
        }
  });
}