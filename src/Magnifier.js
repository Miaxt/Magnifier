window.onload = function(){
	var oDiv = document.getElementById("box");
	var oMiddleImgBox = getByClass(oDiv,"middle-img-box")[0];
	var oMiddleImg = getByClass(oDiv,"middle-img")[0];
	var oImageZoom = getByClass(oDiv,"image-zoom")[0];
	var oBigImgBox = getByClass(oDiv,"big-img-box")[0];
	var oBigImg = getByClass(oDiv,"big-img")[0];
	var oSmallImgBox = getByClass(oDiv,"small-img-box")[0];
	var aImg = oSmallImgBox.getElementsByTagName("img");
	
	for(var i=0;i<aImg.length;i++){
		aImg[i].onmouseover = function(){
			for(var i=0;i<aImg.length;i++){
				aImg[i].className = "";
			}
			this.className = "active";
			oMiddleImg.src = this.src;
			oBigImg.src = this.src;
		}
	}
	
	oMiddleImgBox.onmouseover =function(){
		oImageZoom.style.display = "block";
		oBigImgBox.style.display = "block";
	}
	oMiddleImgBox.onmouseout =function(){
		oImageZoom.style.display = "none";
		oBigImgBox.style.display = "none";
	}
	oMiddleImgBox.onmousemove = function(evt){
		var e = evt || window.event;
		var iScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var iScrollLeft = document.documentElement.scrollLeft ||document.body.scrollLeft;
		var iLeft = iScrollLeft +e.clientX -(oImageZoom.offsetWidth/2)-position(this).left;
		var iTop = iScrollTop +e.clientY -(oImageZoom.offsetHeight/2)-position(this).top;
		var iMaxLeft = this.offsetWidth-oImageZoom.offsetWidth;
		var iMaxTop = this.offsetHeight-oImageZoom.offsetHeight;
		if(iLeft<0){
			iLeft = 0;
		} else if(iLeft>iMaxLeft) {
			iLeft = iMaxLeft;
		}
		if(iTop<0){
			iTop = 0;
		} else if(iTop>iMaxTop) {
			iTop = iMaxTop;
		}
		
		oImageZoom.style.left = iLeft+"px";
		oImageZoom.style.top = iTop+"px";
		
		oBigImg.style.left = -iLeft*(oBigImg.offsetWidth-oBigImgBox.offsetWidth)/iMaxLeft+"px";
		oBigImg.style.top = -iTop*(oBigImg.offsetWidth-oBigImgBox.offsetWidth)/iMaxTop+"px";
	}
}
function position(obj){
	var pos = {left:0,top:0}
	while(obj){
		pos.left += obj.offsetLeft + parseInt(getStyle(obj,"borderLeftWidth"));
		pos.top  += obj.offsetTop + parseInt(getStyle(obj,"borderTopWidth"));
		obj = obj.offsetParent;
	}
	return pos;
}

function getStyle(obj, name) {
	if(window.getComputedStyle) {
		return getComputedStyle(obj, null)[name];
	} else {
		return obj.currentStyle[name]
	}
}

function getByClass(oParent, sClassName){
	var aResult = [];
	var aElement = oParent.getElementsByTagName("*");
		for(var i in aElement){
			if(aElement[i].className == sClassName){
				aResult.push(aElement[i]);
		}
	}
	return aResult;
}