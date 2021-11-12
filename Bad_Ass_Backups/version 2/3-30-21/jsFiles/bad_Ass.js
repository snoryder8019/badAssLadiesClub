// JavaScript Document
//Burger Menu Spinner Program by: Scott Wallace (18 hours of work 1/27/2021)
//pass function arguments through html onclick=" clickAnnie(top,top,display,rotate,rotate)"
var bTop=document.querySelector('#burger__top');
var bMid=document.querySelector('#burger__mid');
var bBot=document.querySelector('#burger__bottom');

//this function is useful in debugging
function logIt(yzy,yxy,zz,rotF,rotB){console.log(' yzy: "'+yzy+'" yxy: "'+yxy+'" zz: "'+zz+'" rotF: "'+rotF+'" rotB: "'+rotB+'"')}

function windUp(yzy,yxy,zzz,rotB,rotF){
		bTop.style.transform=rotF;
		bBot.style.transform=rotB;
	mainMenuBox0.style.display="block";
}
function unWind(yzy,yxy,zzz,rotB,rotF){
	bTop.style.top=yzy;
	bBot.style.top=yxy;
	bMid.style.display=zzz;
	bTop.style.transform='rotate(0deg)';
	bBot.style.transform='rotate(0deg)';
		mainMenuBox0.style.display="none";
}
function clickAnnie(yzy,yxy,zz,rotF,rotB){
	if(bTop.style.top!==yzy){
			bMid.style.display=zz;
			bTop.style.top=yzy;
			bBot.style.top=yxy;
			
		windUp(yzy,yxy,zz,rotF,rotB);
}
	else{
		unWind("0%","80%","block",rotF,rotB);
			}

}






//version 0.9 scott wallace 10/4/2020
//version 2 scott wallace 1/31/2021

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
var burgerMenu = document.getElementById("hamburgerMenu");


//main Menu
var mainMenu0= document.getElementById("mainMenuBox0");


//array of var(s)
var openingScene = [heartButton , instructions , mainHeart,];



var openAction = [splashBox , splashSlider , socialFB, socialInsta , socialYT , socialTT , burgerMenu];
var openSwag = [moreWindow , swagWindow , closeButton , merchWindow , buyForm , storeHeader];
var openSwagr = [buyForm , merchWindow , moreWindow , swagWindow , closeButton];




// photo gallery file root "PodcastPromoPhotos-[i].png"

//functions!!!!!!!

//mainMenuBox popup and close function

function menuOpener(){
	var mainMenu0= document.getElementById("mainMenuBox0");
	console.log('memu Opener');
	clickAnnie('35%','35%','none','rotate(405deg)','rotate(-405deg)');
	if(mainMenu0.style.display==='block'){
		mainMenu0.style.display="none";
		splashBox.style.display="none";
		console.log('noned');
	}
	else{
		mainMenu0.style.display='block';
		splashBox.style.display='block';
		console.log('blocked');
	}
}


//initial Title Landing page Function >>> goes into a fixed nav screen with podcast player
//heart "click" function into overlay (version 0.9)
function openSceneAction(){
	for (let x=0;x<openingScene.length;x++){
		openingScene[x].style.display="none";
	}
}
function openActionAction(){
	for(let i=0;i<openAction.length;i++){
		openAction[i].style.display="block";
}
}

function splashWindow(){
	
	openSceneAction();
	openActionAction();
	document.getElementById('hamburgerMenu').style.display='block';
	
}


function swagOpen(){
	for(let i=0;i<openSwag.length;i++){
		console.log('running swagoo!');
		openSwag[i].style.display="block";
}
}

function swagCloser(){
	for(let i=0;i<openSwagr.length;i++){
		openSwagr[i].style.display="none";
}
}