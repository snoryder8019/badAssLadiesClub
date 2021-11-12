//main Heart Button
var heartButton = document.getElementById("openingSelector");

var goldHeartLogo = document.getElementById("mainHeart");
//more button
var moreButton = document.getElementById("moreMenuButton");
var innerWindow = document.getElementById("contentWindow");
var micButton = document.getElementById("microphone");
var windowMore = document.getElementById("moreWindow");
var moreImg = document.getElementById("moreMenuButtonImg");

//version 0.9
var socialMenu = document.getElementById("socialDiv");
var greetingsMenu = document.getElementById("greetingDiv"); 
var podcastMenu = document.getElementById("podcastDiv");


var chalkDirections = document.getElementById("instructions");

var menuOverlay = document.getElementById("fullFrameOverlay");


//spacer for landing page
var topperDiv = document.getElementById("topper");
//main page background layer
var smokescreen = document.getElementById("smokescreen");
var texture = document.getElementById("diamondplate");
//brushstroke img
var imageMenuSocial = document.getElementById("menuImg");

var imageMenuGreet = document.getElementById("menuImgGreet");
//array of var(s)
var siteBoxes = [socialMenu , greetingsMenu , podcastMenu];
var coverItems = [menuOverlay , topperDiv , moreButton , smokescreen , texture , socialMenu , imageMenuGreet , imageMenuSocial];
var windowMorePopup =[innerWindow , windowMore , moreButton , goldHeartLogo , heartButton,  , socialMenu, moreImg];
//functions!!!!!!!


//note: 1st loop excludes the "zero" in array
//menuOverlay is the main framed div
function popupRun(){
		for(let i=0;i<windowMorePopup.length;i++){
		windowMorePopup[i].style.display="block";

	}
}


function windowOn(){
	for(let i=1;i<coverItems.length;i++){
		coverItems[i].style.display="none";
		podcastMenu.style.display="none";
	
	}



}
//initial Title Landing page Function >>> goes into a fixed nav screen with podcast player
//heart "click" function into overlay (version 0.9)
function openingWindow(){
	chalkDirections.style.display="none";
	goldHeartLogo.style.display="none";
	for(let i=0;i<coverItems.length;i++){
		coverItems[i].style.display="block";
	}


}



//end of version 0.2