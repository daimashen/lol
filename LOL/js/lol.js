var oHead=document.getElementById('header');
	var oNav=document.getElementById('nav');
	oHead.onmouseover=function(){
		oNav.style.display="block";
	}
	// oHead.onmouseout=function(){
	// 	oNav.style.display="none";
	// }
	oNav.onmouseover=function(){
		oNav.style.display="block";
	}
	oNav.onmouseout=function(){
		oNav.style.display="none";
	}
// -------------------原计划js------------------------------
var oPlan01=document.getElementById('plan01');
var oPlan=document.getElementById('plan1');
var oLi=oPlan.getElementsByTagName('li');
var oA=document.getElementById('a');
var myarr=new Array();
	myarr[0]="images/plan-pic.jpg";
	myarr[1]="images/plan-pic01.jpg";
	myarr[2]="images/plan-pic02.jpg";
	myarr[3]="images/plan-pic03.jpg";
	myarr[4]="images/plan-pic04.jpg";
oLi[0].onmouseover=function(){
	oPlan01.src=myarr[0];
	oA.style.display="block";
}
oLi[1].onmouseover=function(){
	oPlan01.src=myarr[1];
	oA.style.display="none";
}
oLi[2].onmouseover=function(){
	oPlan01.src=myarr[2];
	oA.style.display="none";
}
oLi[3].onmouseover=function(){
	oPlan01.src=myarr[3];
	oA.style.display="none";
}
oLi[4].onmouseover=function(){
	oPlan01.src=myarr[4];
	oA.style.display="none";
}
// ----------------视频中心js------------------------------
var oCard=document.getElementById('cards');
var oF=document.getElementById('first01');
var oS=document.getElementById('first02');
var oEve=oCard.getElementsByTagName('li');
oEve[0].onmouseover=function(){
	oF.style.display="block";
	oS.style.display="none";
}
oEve[1].onmouseover=function(){
	oF.style.display="none";
	oS.style.display="block";
}
oEve[2].onmouseover=function(){
	oF.style.display="block";
	oS.style.display="none";
}
oEve[3].onmouseover=function(){
	oF.style.display="none";
	oS.style.display="block";
}
oEve[4].onmouseover=function(){
	oF.style.display="block";
	oS.style.display="none";
}
oEve[5].onmouseover=function(){
	oF.style.display="none";
	oS.style.display="block";
}
// -----------------比赛中心js-----------------------------
var oMatch=document.getElementById('match');
var oM1=document.getElementById('match02');
var oM2=document.getElementById('match01');
var oMa=oMatch.getElementsByTagName('li');
oMa[0].onmouseover=function(){
	oM1.style.display="block";
	oM2.style.display="none";
}
oMa[1].onmouseover=function(){
	oM1.style.display="none";
	oM2.style.display="block";
}
oMa[2].onmouseover=function(){
	oM1.style.display="block";
	oM2.style.display="none";
}
oMa[3].onmouseover=function(){
	oM1.style.display="none";
	oM2.style.display="block";
}
oMa[4].onmouseover=function(){
	oM1.style.display="block";
	oM2.style.display="none";
}
oMa[5].onmouseover=function(){
	oM1.style.display="none";
	oM2.style.display="block";
}
// -------------------客服专区js-----------------------------
var oSec01=document.getElementById('li01');
var oS1=document.getElementById('service01');
var oS2=document.getElementById('service02');
var oSec02=document.getElementById('li02');
oSec01.onmouseover=function(){
	oS1.style.display="block";
	oS2.style.display="none";
}
oSec02.onmouseover=function(){
	oS1.style.display="none";
	oS2.style.display="block";
}
// -----------------------新闻中心js--------------------------------------
var oNew=document.getElementById('news_list');
var oN1=document.getElementById('new01');
var oN2=document.getElementById('new02');
var oNa=oNew.getElementsByTagName('li');
oNa[0].onmouseover=function(){
	oN1.style.display="block";
	oN2.style.display="none";
}
oNa[1].onmouseover=function(){
	oN1.style.display="none";
	oN2.style.display="block";
}
oNa[2].onmouseover=function(){
	oN1.style.display="block";
	oN2.style.display="none";
}
oNa[3].onmouseover=function(){
	oN1.style.display="none";
	oN2.style.display="block";
}
// -------------------皮肤中心js-------------------------------------------
var oSkin=document.getElementById('skin');
var oK1=document.getElementById('skin01');
var oK2=document.getElementById('skin02');
var oKa=oSkin.getElementsByTagName('li');
oKa[0].onmouseover=function(){
	oK1.style.display="block";
	oK2.style.display="none";
}
oKa[1].onmouseover=function(){
	oK1.style.display="none";
	oK2.style.display="block";
}
oKa[2].onmouseover=function(){
	oK1.style.display="block";
	oK2.style.display="none";
}
// -----------------下拉列表js---------------------------------
var oBtn=document.getElementById('btn');
var oSec=document.getElementById('sec1');
oBtn.onclick=function (){
	if(oSec.style.display=="none"){
		oSec.style.display="block";
	}
	else{
		oSec.style.display="none";
	}
	
}