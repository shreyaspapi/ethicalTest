/*
Plugin Name: 	Advanced-Social-Widget
Plugin URI: 	http://codecanyon.net/item/advanced-social-widget/1189066
Description: 	Adds an advanced widget box to your sidebar giving users to link your site to all the popular Social Networking sites such as Delicious, Twitter, Facebook, StumbleUpon, Pinterest, LinkedIn and access to Feedburner Email Subscription.
Version: 		1.4
Author: 		WPInsite
Author URI: 	http://www.wpinsite.com
License: 		Sold exclusively on CodeCanyon
*/

//jQuery.noConflict();
jQuery(document).ready(function($) {
	// Fade social icons on hovers
	$(".fade").fadeTo("fast", 1.0); 

	$(".fade").hover(function(){
		$(this).fadeTo("fast", 0.6); 
	},function(){
		$(this).fadeTo("fast", 1.0);
	});
	
	// Newsletter Form
	$("#newsletter-text").attr("value", "Enter your email address...");
	
	var text = "Enter your email address...";
	
	$("#newsletter-text").focus(function() {
		$(this).addClass("active");
		if($(this).attr("value") == text) $(this).attr("value", "");
	});
	
	$("#newsletter-text").blur(function() {
		$(this).removeClass("active");
		if($(this).attr("value") == "") $(this).attr("value", text);
	});
});