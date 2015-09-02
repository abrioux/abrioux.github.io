$(document).ready(function() {
	
	 /* Scrolling Transitions */
	jQuery.easing.def = "easeInOutSine";
	$('#logo-header').click(function(event){
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
 
 	function toggleHandler(toggle) {
    	$(toggle).click(function(e) {
      		e.preventDefault();
      		(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    	});
  	}
		
	/* Show and Hide Mobile Nav */	
	var window_width = $(window).width();
	if ( window_width < 769) {
		$('.mobile-nav-menu').animate({height: 'toggle'}, 0);
	}
    
	$(function() {
  		var menuVisible = false;
		$('.c-hamburger').click(function() {
	  		if (menuVisible) {
				$('.mobile-nav-menu').animate({height: 'toggle', opacity: '0'}, 'easeInOutBack');
				menuVisible = false;
				return;
	  		}
			$('.mobile-nav-menu').animate({height: 'toggle', opacity: '1'}, 'easeInOutBack');
			menuVisible = true;
		});
		$('.mobile-nav-menu').click(function() {
	  		$(this).animate({height: 'toggle', opacity: '0'});
	  		menuVisible = false;
			(toggle.classList.contains("is-active") === true) ? toggle.classList.remove("is-active") : toggle.classList.add("is-active");
		});
  	});
});