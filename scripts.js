// fullscreen cover
jQuery(document).ready(function($) {
  // Defining a function to set size for #hero 
  function fullscreen() {
    jQuery('.cover').css({
      width: jQuery(window).width(),
      height: jQuery(window).height()
    });
  }
  
  $('img').addClass('img-responsive');

  fullscreen();

  // Run the function in case of window resize
  jQuery(window).resize(function() {
    fullscreen();
  });
  
	// Add responsive class iframes
	$("iframe, embed, object").wrap("<div class='flex-video widescreen'/>");

});
