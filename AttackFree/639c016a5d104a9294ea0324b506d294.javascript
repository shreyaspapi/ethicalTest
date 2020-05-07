AmCharts.ready(function(){
	map=new AmCharts.AmMap();
	map.pathToImages="/amMap/ammap/images/";
	map.allowClickOnSelectedObject=false;
	map.areasSettings={balloonText:"[[title]]",
			   selectable:false,
			   colorSolid:"#185511",
			   color:"#ACDF90",
			   colorHover:"#DBEB00",
			   colorSelected:"",
			   disableWhenClicked:"true",
			   unlistedAreasColor:"#ACDF90"
	};
	map.zoomControl.zoomControlEnabled=false;
	map.zoomControl.panControlEnabled=false;
	map.backgroundColor="#DDEEFF";
	map.borderColor="#FFFFFF";
       


	var dataProvider= {
	    mapVar:AmCharts.maps.worldLow,
	    areas: ALEXA.viewsHelpers.map.areas
	}
	
	map.dataProvider = dataProvider;
	map.write(ALEXA.viewsHelpers.map.div);
	
    }
    );
