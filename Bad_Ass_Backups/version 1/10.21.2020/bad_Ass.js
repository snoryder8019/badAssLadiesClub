//version 0.9 scott wallace 10/4/2020

//main Heart Button
var heartButton = document.getElementById("openingSelector");
var instructions = document.getElementById("instructions");
var mainHeart = document.getElementById("mainHeart");

//get Social Icons
var socialFB = document.getElementById("socialFB");
var socialInsta = document.getElementById("socialInsta");
var socialTT = document.getElementById("socialTT");
var socialYT = document.getElementById("socialYT");

var socialGroup = document.getElementById("socialGroup");
//get Podcast Buttons
var appleIcon= document.getElementById("appleIcon");
var spotifyIcon = document.getElementById("spotifyIcon");

//merch button
var swagButton = document.getElementById("swagButton");
//close button
var closeButton = document.getElementById("closeX");


//elements
//main page
var headerImage = document.getElementById("headerImage");
var splashBox = document.getElementById("splashBox");
var smokescreen = document.getElementById("smokescreen");
var texture = document.getElementById("diamondplate");
//brushstroke img   var paintStroke = document.getElementById("paintStroke");


//elements
//merch page
var moreWindow = document.getElementById("moreWindow"); 
var swagWindow = document.getElementById("swagWindow");
var buyForm = document.getElementById("buyForm");
var merchWindow = document.getElementById("merchWindow");
var splashSlider = document.getElementById("splashSlider"); 
var storeHeader = document.getElementById("storeHeader");


//array of var(s)
var openingScene = [heartButton , instructions , mainHeart];



var openAction = [splashBox , splashSlider , socialFB, socialInsta , socialYT , socialTT ,  swagButton , texture];
var openSwag = [moreWindow , swagWindow , closeButton , merchWindow , buyForm , storeHeader];
var openSwagr = [buyForm , merchWindow , moreWindow , swagWindow , closeButton];




// photo gallery file root "PodcastPromoPhotos-[i].png"

//functions!!!!!!!

//initial Title Landing page Function >>> goes into a fixed nav screen with podcast player
//heart "click" function into overlay (version 0.9)

function splashWindow(){
	for (let x=0;x<openingScene.length;x++){
		openingScene[x].style.display="none";
	}
	for(let i=0;i<openAction.length;i++){
		openAction[i].style.display="block";
}
}


function swagOpen(){
	for(let i=0;i<openSwag.length;i++){
		openSwag[i].style.display="block";
}
}

function swagCloser(){
	for(let i=0;i<openSwagr.length;i++){
		openSwagr[i].style.display="none";
}
}