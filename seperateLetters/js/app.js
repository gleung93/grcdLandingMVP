//console.log("loaded");

Draggable.create(".drag", {
	throwProps: true,
	throwResistance: "2000",
	bounds: document.getElementById("boundaries")
});

//var floater = document.getElementByClassName("focus");
//TweenLite.to(".focus", 10, {top:"0%"});

$( document ).ready(function() {
	$("#g").delay(1000).queue(function(){$("#g").addClass('active')});
	$("#r").delay(1030).queue(function(){$("#r").addClass('active')});
	$("#c").delay(1060).queue(function(){$("#c").addClass('active')});
	$("#d").delay(1090).queue(function(){$("#d").addClass('active')});
	$(".drag").delay(2700).fadeTo(1, 1);

});

