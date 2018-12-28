var pi1 = document.getElementById('pi1');
var pi2 = document.getElementById('pi2');
var pic1=document.getElementById('pic1');
var Bimg = document.getElementById('Bimg');  
function change0(){
	if(pic1.getAttribute('src')=="img/pp0.jpeg"){
		Bimg.setAttribute('src',"img/pp1.jpeg");
		pic1.setAttribute('src',"img/pp1.jpeg");
		pi2.style.border="1px solid #ff9003";
		pi1.style.border="1px solid #ffffff";

	}else{
		pic1.setAttribute('src',"img/pp0.jpeg");
		Bimg.setAttribute('src',"img/pp0.jpeg");
		pi1.style.border="1px solid #ff9003";
		pi2.style.border="1px solid #ffffff";
	}
}
function change1(){
	pic1.setAttribute('src',"img/pp0.jpeg");
	Bimg.setAttribute('src',"img/pp0.jpeg");
	if(pic1.getAttribute('src')=="img/pp0.jpeg"){
		pi1.style.border="1px solid #ff9003";
		pi2.style.border="1px solid #ffffff";
	}
}
function change2(){
	pic1.setAttribute('src',"img/pp1.jpeg");
	Bimg.setAttribute('src',"img/pp1.jpeg");
	if(pic1.getAttribute('src')=="img/pp1.jpeg"){
		pi2.style.border="1px solid #ff9003";
		pi1.style.border="1px solid #ffffff";
	}

}
var shu1 = document.getElementById('shu1');
var shu2 = document.getElementById('shu2');
var pic4 = document.getElementById('pic4');
var pic5 = document.getElementById('pic5');
var shu3 = document.getElementById('shu3');
var kuang00 = document.getElementById('kuang00');
var kuang01 = document.getElementById('kuang01');

function change00(){
	shu3.innerHTML='"'+shu1.innerHTML+'"';
	kuang00.style.border="1px solid #fe0d4a";
	kuang01.style.border="1px solid #ffffff";
	pic4.style.opacity="1";
	pic5.style.opacity="0";
}
function change01(){
	shu3.innerHTML='"'+shu2.innerHTML+'"';
	kuang01.style.border="1px solid #fe0d4a";
	kuang00.style.border="1px solid #ffffff";
	pic4.style.opacity="0";
	pic5.style.opacity="1";
}
//加减数
var shu0=document.getElementById("shu0");
var jia0=document.getElementById("jia");
var jian0=document.getElementById("jian");
function jia(){
	var i=shu0.innerHTML;
	i++;
	if(i<6 && i>0){
		shu0.innerHTML=i;
		jia0.setAttribute("style","cursor:pointer");
		jian0.setAttribute("style","cursor:pointer");
	}else{
		jia0.setAttribute("style","cursor:not-allowed");
		jian0.setAttribute("style","cursor:not-allowed");
	}
}
function jian(){
	var i=shu0.innerHTML;
	i--;
	if(i>0 && i<6){
		shu0.innerHTML=i;
		jia0.setAttribute("style","cursor:pointer");
		jian0.setAttribute("style","cursor:pointer");
	}else{
		jia0.setAttribute("style","cursor:not-allowed");
		jian0.setAttribute("style","cursor:not-allowed");
	}
}
function jian00(){
	var i=shu0.innerHTML;
	if(i<=1){
		jian0.setAttribute("style","cursor:not-allowed");
	}
	else if(i>=5){
		jian0.setAttribute("style","cursor:pointer");
	}
}
function jia00(){
	var i=shu0.innerHTML;
	if(i<=1){
		jia0.setAttribute("style","cursor:pointer");
	}
	else if(i>=5){
		jia0.setAttribute("style","cursor:not-allowed");
	}
	
}

//放大镜
var img1 = document.getElementById("img1");
		var img2 = document.getElementById("img2");
		var slider = document.getElementById("slider");
		var Bimg = document.getElementById("Bimg");
		var box = document.getElementById('box');
		img1.onmouseover = function () {
			slider.style.display = 'block';
			img2.style.display = 'block';
		}
		img1.onmouseout = function () {
			slider.style.display = 'none';
			img2.style.display = 'none';
		}

		img1.onmousemove = function (ev) {
			var ev = ev || window.event;
			var TOP=document.body.scrollTop||document.documentElement.scrollTop;
			var oL = ev.clientX - box.offsetLeft - slider.offsetWidth / 2;
			var oT = ev.clientY+TOP - box.offsetTop - slider.offsetHeight / 2;

			var oMaxw = img1.offsetWidth - slider.offsetWidth;
			var oMaxh = img1.offsetHeight - slider.offsetHeight;

			oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
			oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;

			slider.style.left = oL +'px';
			slider.style.top = oT + 'px';

			var scale = img2.offsetWidth / slider.offsetWidth;
			Bimg.style.left = -scale * oL + 'px'
			Bimg.style.top = -scale * oT + 'px'
		}
//中间
var bigkuang = document.getElementById('bigkuang');
var smallkuang = document.getElementById('smallkuang');
function dis(){
	bigkuang.setAttribute("style","display:block");
	smallkuang.setAttribute("style","display:block");
}
function dis1(){
	bigkuang.setAttribute("style","display:none");
	smallkuang.setAttribute("style","display:none");
}