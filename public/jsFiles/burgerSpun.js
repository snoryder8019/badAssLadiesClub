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
}
function unWind(yzy,yxy,zzz,rotB,rotF){
	bTop.style.top=yzy;
	bBot.style.top=yxy;
	bMid.style.display=zzz;
	bTop.style.transform='rotate(0deg)';
	bBot.style.transform='rotate(0deg)';
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




