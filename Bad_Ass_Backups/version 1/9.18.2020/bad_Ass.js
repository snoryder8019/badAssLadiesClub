


var innerWindow = document.getElementById("contentWindow");
var micButton = document.getElementById("microphone");
var windowMore = document.getElementById("moreWindow");







//version 0.9
var socialMenu = document.getElementById("socialDiv");
var smokescreen = document.getElementById("smokescreen");
 var greetingsMenu = document.getElementById("greetingDiv");
 
  var podcastMenu = document.getElementById("podcastDiv");
  var imageMenuSocial = document.getElementById("menuImg");
  var imageMenuGreet = document.getElementById("menuImgGreet");
var siteBoxes = [socialMenu , greetingsMenu , podcastMenu];



var menuOverlay = document.getElementById("fullFrameOverlay");
var heartButton = document.getElementById("burgerOn");
var closeButton = document.getElementById("burgerOff");


var coverItems = [menuOverlay,closeButton,smokescreen,imageMenuGreet,imageMenuSocial];

//functions!!!!!!!

function windowOn(){
	for(let i=0;i<coverItems.length;i++){
		coverItems[i].style.display="none";
	}
	


}
//heart "click" function into overlay (version 0.9)
function menuOn(){
	for(let i=0;i<coverItems.length;i++){
		coverItems[i].style.display="block";
	}
}

//end of version 0.9