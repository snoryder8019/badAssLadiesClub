var menuOverlay = document.getElementById("fullFrameOverlay");
var heartButton = document.getElementById("burgerOn");
var closeButton = document.getElementById("burgerOff");
var socialMenu = document.getElementById("socialDiv");
var smokescreen = document.getElementById("smokescreen");
 var greetingsMenu = document.getElementById("greetingDiv");
  var podcastMenu = document.getElementById("podcastDiv");
var siteBoxes = [socialMenu , greetingsMenu , podcastMenu];
var allElements = [smokescreen , socialMenu , podcastMenu , heartButton , closeButton , greetingsMenu];
function menuOn(){
	menuOverlay.style.display="block";
	heartButton.style.display="none";
	closeButton.style.display="block";
	smokescreen.style.display="block";
	socialMenu.style.display="block";
	podcastMenu.style.display="block";
	greetingsMenu.style.display="block";
}

function menuOff(){

	menuOverlay.style.display="none";
	menuOverlay.style.animationDirection="reverse";
	menuOverlay.style.animationDuration="3.2s";
	heartButton.style.display="block";
	closeButton.style.display="none";
}