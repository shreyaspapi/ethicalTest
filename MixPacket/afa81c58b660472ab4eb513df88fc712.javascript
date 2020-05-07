$(document).ready(function(){
			$(".tab_area ul li .tab_cont_area").attr("style","display:none");
			$(".tab_area ul li span").click(function(){
				//alert("hello");
				$(".tab_area ul li .tab_cont_area").attr("style","display:none");
				$(".tab_area ul li").removeClass("selected");
				$(this).parent().addClass("selected");
				$(".tab_area ul li.selected .tab_cont_area").attr("style","display:block");
			});
		});