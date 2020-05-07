function loadTrendingNow(jsonData) {
    var trendingNowDisplay = $("#trendingNowComp").html();
    var template = Handlebars.compile(trendingNowDisplay);
    $("#trendingnow-div").html(template(jsonData));
}

function redirect(path) {
	var splitArray= path.split('&');
	window.open(splitArray[0],splitArray[1]);
}
