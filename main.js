$(document).ready(function() {
	jQuery.easing.def = "easeInOutSine";
	$('#logo-header').click(function(event){
		event.preventDefault();
        $("html, body").animate({ 
		scrollTop: "0px"
		}, 800);
    });
	$('#nav-home').click(function(event){
		event.preventDefault();
        $("html, body").animate({ 
		scrollTop: "0px"
		}, 800);
    });
	$('#nav-about').click(function(event){
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
	$('#nav-projects').click(function(event){
		event.preventDefault();
        $("html, body").animate({ 
		scrollTop: $('#projects').offset().top
		}, 800);
    });
	$('#arrow-container').click(function(event){
		event.preventDefault();
        $("html, body").animate({ 
		scrollTop: $('#about').offset().top
		}, 800);
    });
	function sendMail() {
    var link = "mailto:me@example.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
}
});