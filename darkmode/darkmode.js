var buttonDiv=document.getElementById('buttonDiv');
var buttonSwitch=document.getElementById('buttonSwitch');
var settingsMenu=document.getElementById('settingsMenu');
var menuBar=document.getElementById('menuBar');
var burgerDiv0=document.getElementById('burgerDiv0');
//config colors from sass file
var bodyLight ="linear-gradient(to left, rgba(152 , 251, 152,.2), rgba(174,238,238,.4))";
var bodyDark = "linear-gradient(to left, rgba(47,47,47,1), rgba(25,25,112,1));";
var colorLight="#6b8e23";
var colorDark;"#fdf5e6";

function fontSwitch(x){

}

function menuOpen(){
	menuBar.style.display="block";
	burgerDiv0.style.display="none";
}




function menuExpander(x){
	let zed=document.getElementById('menuItem'+x);
	if(zed.style.height!=="100vh"){
zed.style.width="100vw";
zed.style.height="100vh";
zed.style.zIndex="20";
zed.style.top="0";
zed.style.left="0";
zed.style.position="fixed";
document.getElementById('article'+x).style.display="block";
}
else{
	zed.style.width="";
	zed.style.height="20%";
	zed.style.zIndex="";
	zed.style.position="";
	document.getElementById('article'+x).style.display="none";
}


}



function settingsOpen(){
	settingsMenu.style.display="block";
}
function menuClose(){
if(settingsMenu.style.display==="block"){
	settingsMenu.style.display="none";}

	else{
	menuBar.style.display="none";
	burgerDiv0.style.display="block";
	}
}

//elementCycle loops arrays returned when getting "className"
function elementCycle(zed,zyy){
	var elements=document.getElementsByClassName(zed);
	for(let i=0;i<elements.length;i++){
		elements[i].className=zyy;
	}
}
function darkmode(){
	if(buttonDiv.className==="light"){
buttonDiv.className="dark";
buttonDiv.animationName="switcher";
buttonSwitch.className="darkIn";
elementCycle('articleDivLight','articleDivDark');
elementCycle('contentBox0','contentBox0Dark');

document.body.style.background=bodyLight;
document.body.style.color=colorLight;
document.getElementById('switchName').innerHTML="Dark Mode";//"dark mode" indicator UI UX
document.getElementById('burgerImg0').src="burgerWhite.png";//menu burger icon
menuBar.className="menuDark";////////////////////////////background menu box
document.getElementById('cogImg0').src="cogWhite.png";//cog icon
document.getElementById('closeImg0').src="closeXWhite.png";//closrX button
document.getElementById('closeImg1').src="closeXWhite.png";//closeX button alternative
document.getElementById('settingsMenu').className="settingsDivDark";//setting menu background color
}
else{
	buttonDiv.className="light";
buttonDiv.animationName="switcher";
buttonSwitch.className="lighty";
elementCycle('articleDivDark','articleDivLight');//get Class returns array and requires a looped function
elementCycle('contentBox0Dark','contentBox0');//get Class requires a looped function
document.body.style.background=bodyDark;
document.body.style.color=colorLight;
document.getElementById('switchName').innerHTML="Light Mode";
document.getElementById('burgerImg0').src="burgerBlack.png";
menuBar.className="menuLight";
document.getElementById('closeImg0').src="closeXBlack.png";
document.getElementById('cogImg0').src="cogBlack.png";
document.getElementById('settingsMenu').className="settingsDivLight";

}
}
