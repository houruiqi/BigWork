//滚动1
var box = document.getElementById('box');
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var oNavlist = document.getElementById('yidong').children;
var index = 1; //打开页面生效的图片的下标为1
var timer;
var isMoving = false;

function getStyle(obj, attr) { //返回值带有单位px
  	if (obj.currentStyle) {
  		return obj.currentStyle[attr];
  	} else {
  		return getComputedStyle(obj, null)[attr];
  	}
}

function animate(obj, json, callback) {
    clearInterval(obj.timer);
  	obj.timer = setInterval(function () {
  		var flag = true;
  		for (var attr in json) {
  			(function (attr) {
  				if (attr == "opacity") {
  					var now = parseInt(getStyle(obj, attr) * 100);
  					var dest = json[attr] * 100;
  				} else {
  					var now = parseInt(getStyle(obj, attr));
  					var dest = json[attr];
  				}
  				var speed = (dest - now) / 6;
  				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
  				if (now != dest) {
  					flag = false;
  					if (attr == "opacity") {
  						obj.style[attr] = (now + speed) / 100;
  					} else {
  						obj.style[attr] = now + speed + "px";
  					}
  				}
  			})(attr);
  		}
  		if (flag) {
  			clearInterval(obj.timer);
  			callback && callback(); //如果回调函数存在，就调用回调函数
  		}
  	}, 30);
  }

box.onmouseover = function () {
	animate(left, {
		opacity: 0.6
	})
	animate(right, {
		opacity: 0.6
	})
	clearInterval(timer); //图片停止滚动
}
box.onmouseout = function () {
	animate(left, {
		opacity: 0
	})
	animate(right, {
		opacity: 0
	})
	timer = setInterval(next, 3000); //图片开始接着滚动
}
right.onclick = next;
left.onclick = prev;

function next() {
	if (isMoving) {
		return;
    }
	isMoving = true;
	index++;
	navmove();
	animate(slider, {
		left: -800 * index
	}, function () {
		if (index == 7) {
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}

function prev() {
	if (isMoving) {
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider, {
		left: -800 * index
	}, function () {
		if (index == 0) {
			slider.style.left = '-4800px';
			index = 6;
		}
		isMoving = false;
	});
}
//按钮点击切换事件
for (var i = 0; i < oNavlist.length; i++) {
	oNavlist[i].index = i;
	oNavlist[i].onclick = function () {
		index = this.index + 1;
		navmove();
		animate(slider, {
			left: -800 * index
		});
	}

}
//图片切换时按钮样式跟着切换
function navmove() {
	for (var i = 0; i < oNavlist.length; i++) {
		oNavlist[i].className = "";
	}
	if (index > 6) {
		oNavlist[0].className = "active";
	} else if (index <= 0) {
		oNavlist[5].className = "active";
	} else {
		oNavlist[index - 1].className = "active";
	}
}
//页面打开时自动滚动切换
timer = setInterval(next, 3000);
//滚动2
var gonggao = document.getElementById("gonggao");
function show() {
    var top = gonggao.offsetTop - 1;
    gonggao.style.top = top + "px"; 
	 //走完一半再返回
    if (-1 * gonggao.offsetTop >= gonggao.offsetHeight / 2) {
        gonggao.style.top = 0;
    }
}
var t = setInterval(show, 30);
//li添加鼠标移入移出事件
var gonggao1 = document.getElementsByClassName("gonggao1");
for (var i = 0; i < gonggao1.length; i++) {
   	//移出事件
	gonggao1[i].onmouseout = function () {
        //不能加 var
    	t = setInterval(show, 30);
	};
    //移入事件
    gonggao1[i].onmouseover = function () {
        clearInterval(t);
    };
}
//金额变化
var txt1;
var list1 = document.getElementById("list1");
var list = document.getElementById("list");
var active0 = document.getElementById("active0");
list.onchange = function(){
	for(var i=0;i<list.length;i++){
		if(list[i].selected==true){
			txt1=list[i].text;
			console.log(txt1);
			active0.innerHTML="￥"+txt1;
		}
	}
}
//悬浮
window.onload = function(){
	var nav1 = document.getElementsByClassName('nav1')[0];
	window.onscroll=function(){
		var stw = document.documentElement.scrollTop || document.body.scrollTop;
		console.log(stw);
		if(stw>180){
			nav1.style.position="fixed";
		}else{
			nav1.style.position="static";
		}
	}
}


//固定定位
var top0 = document.getElementById("top0");
var top1 = document.getElementById("top1");
var top2 = document.getElementById("top2");
var top3 = document.getElementById("top3");
var top4 = document.getElementById("top4");
var tu10 = document.getElementById("tu10");
var tu11 = document.getElementById("tu11");
function top00(){
	top0.setAttribute("style","right:0");
	top1.setAttribute("style","right:0");
	top0.onmouseout=function(){
		top0.setAttribute("style","right:-85px");
		top1.setAttribute("style","right:-85px");
	}
	top1.onmouseout=function(){
		top0.setAttribute("style","right:-85px");
		top1.setAttribute("style","right:-85px");
	}
}
function top02(){
	top2.setAttribute("style","right:0");
	top2.onmouseout=function(){
		top2.setAttribute("style","right:-85px");
	}
}
function top03(){
	top3.setAttribute("style","right:0");
	tu10.setAttribute("style","display:none");
	tu11.setAttribute("style","display:block");
	top3.onmouseout=function(){
		top3.setAttribute("style","right:-85px");
		tu11.setAttribute("style","display:none");
		tu10.setAttribute("style","display:block");
	}
}
function top04(){
	top4.setAttribute("style","right:0");
	top4.onmouseout=function(){
		top4.setAttribute("style","right:-85px");
	}
}