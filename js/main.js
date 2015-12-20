$(document).ready(function() {
	
	 /* Scrolling Transitions */
	jQuery.easing.def = "easeInOutSine";
	$('.navbar-brand').click(function(event){
		event.preventDefault();
        $("html, body").animate({ 
		scrollTop: "0px"
		}, 800);
    });
	$('.nav-home').click(function(event){
		event.preventDefault();
        $("html, body").animate({ 
		scrollTop: "0px"
		}, 800);
    });
	$('.nav-about').click(function(event){
		event.preventDefault();
        $("html, body").animate({ 
		scrollTop: $('#about').offset().top
		}, 800);
    });
	$('#about-me-btn').click(function(event){
		event.preventDefault();
        $("html, body").animate({ 
		scrollTop: $('#about').offset().top
		}, 800);
    });
	$('.nav-projects').click(function(event){
		event.preventDefault();
        $("html, body").animate({ 
		scrollTop: $('#projects').offset().top
		}, 800);
    });
	$('.nav-contact').click(function(event){
		event.preventDefault();
        $("html, body").animate({ 
		scrollTop: $('#contact').offset().top
		}, 800);
    });
	$('#arrow-container').click(function(event){
		event.preventDefault();
        $("html, body").animate({ 
		scrollTop: $('#about').offset().top
		}, 800);
    });
		
	/* Hamburger to X transition on click */
	var toggles = $(".c-hamburger");
	
	for (var i = toggles.length - 1; i >= 0; i--) {
   		var toggle = toggles[i];
    	toggleHandler(toggle);
  	};
	
});