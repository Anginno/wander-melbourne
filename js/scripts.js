$(document).ready(function(){ 

//Hero text fade in
$(".heroText").hide().fadeIn(3000);



//This is the hamburger menu

//Clicking on the hamburger icon
 $(".hamburgerButton").click(function() { 
      $(".hamburgerContainer").toggleClass("hiddenLeft");
      $(".siteOverlay").toggleClass("invisible"); 
      $(".burgerLine1").toggleClass("rotateRight");
      $(".burgerLine2").toggleClass("rotateLeft");
      $("body").toggleClass("removeOverflow");
    });

 //Clicking the gray space
$(".siteOverlay").click(function() {
 	$(".hamburgerContainer").toggleClass("hiddenLeft");
	$(".siteOverlay").toggleClass("invisible"); 
	$(".burgerLine1").toggleClass("rotateRight");
	$(".burgerLine2").toggleClass("rotateLeft");
	$("body").toggleClass("removeOverflow");
	 }); 
 });