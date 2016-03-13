//When dom has loaded
$(document).ready(function() {
	console.log("Time until DOMready: ", Date.now()-timerStart);
	(new Image()).src = "images/lightbulb4.gif";
	Draggable.create(".drag", {
		throwProps: true,
		throwResistance: "2000",
		bounds: document.getElementById("boundaries"),
	});
});

//When assets have loaded
$(window).on("load", function() {
    console.log("Time until everything loaded: ", Date.now()-timerStart);
    $('#loading').addClass('scale-out').fadeOut(500, function() {
    	$("#lightbulb").attr("src", "images/lightbulb4.gif");
    	//$('#logo-container').css("display","block").fadeTo(1000, 1);
    	$("#g").delay(1000).queue(function(){$("#g").addClass('active')});
		$("#r").delay(1030).queue(function(){$("#r").addClass('active')});
		$("#c").delay(1060).queue(function(){$("#c").addClass('active')});
		$("#d").delay(1090).queue(function(){$("#d").addClass('active')});
		//$(".drag").delay(2700).fadeTo(1, 1);
		$(".drag").delay(3800).queue(function(){$(".drag").css("display","block")});
    });
});

//Fallbacks
if(typeof window.getComputedStyle(document.body).mixBlendMode == 'undefined') {
    alert("noblend!");
}



