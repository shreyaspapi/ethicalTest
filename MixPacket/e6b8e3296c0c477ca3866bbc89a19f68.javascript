/*



function breakingNewsTicker(selection,value,checked)
{
	var dialog = selection.findParentByType('dialog');
	var pathField_section = dialog.find('name', './tickerlink')[0];
	var multiField_article = dialog.find('name', './tickerpath')[0];
	var variant_font = dialog.find('name', './FontSize')[0];

	
	if(value == 'Section')
		{
		pathField_section.enable();
		pathField_section.show();
		variant_font.enable();
		variant_font.show();
		multiField_article.disable();
		multiField_article.hide();
		
		}	else
         		{
         		pathField_section.disable();
         		pathField_section.hide();
         		variant_font.disable();
         		variant_font.hide();
         		multiField_article.enable();
         		multiField_article.show();

         		}


	if(value == 'Article')
		{
		pathField_section.disable();
		pathField_section.hide();
		variant_font.enable();
		variant_font.show();
		multiField_article.enable();
		multiField_article.show();
		}
else
		{
		pathField_section.enable();
		pathField_section.show();
		variant_font.enable();
		variant_font.show();
		multiField_article.disable();
		multiField_article.hide();
		}
	if(value == 'both')
		{
		pathField_section.enable();
		pathField_section.show();
		variant_font.enable();
		variant_font.show();
		multiField_article.enable();
		multiField_article.show();
		}
	
	
}
function breakingNewsTickerOnload(selection,value,checked)
{
	var dialog = selection.findParentByType('dialog');
	var pathField_section = dialog.find('name', './tickerlink')[0];
	var multiField_article = dialog.find('name', './tickerpath')[0];
	var variant_font = dialog.find('name', './FontSize')[0];


	if(value == 'Section')
    		{
    		pathField_section.enable();
    		pathField_section.show();
    		variant_font.enable();
    		variant_font.show();
    		multiField_article.disable();
    		multiField_article.hide();

    		}	else
             		{
             		pathField_section.disable();
             		pathField_section.hide();
             		variant_font.disable();
             		variant_font.hide();
             		multiField_article.enable();
             		multiField_article.show();

             		}


    	if(value == 'Article')
    		{
    		pathField_section.disable();
    		pathField_section.hide();
    		variant_font.enable();
    		variant_font.show();
    		multiField_article.enable();
    		multiField_article.show();
    		}
    else
    		{
    		pathField_section.enable();
    		pathField_section.show();
    		variant_font.enable();
    		variant_font.show();
    		multiField_article.disable();
    		multiField_article.hide();
    		}
    	if(value == 'both')
    		{
    		pathField_section.enable();
    		pathField_section.show();
    		variant_font.enable();
    		variant_font.show();
    		multiField_article.enable();
    		multiField_article.show();
    		}

}*/
