// get initial value
var parentObj = document.getElementById("parent-block");
var parentWidth = parentObj.offsetWidth;
var childObj = document.getElementById("child-block");
var childWidth = childObj.offsetWidth;
console.log("parentWidth", parentWidth,"childWidth", childWidth);

var realMinVal = 0;
var realMaxVal = parentWidth-childWidth;
var maxDistance = realMaxVal-realMinVal;
console.log("realMinVal",realMinVal,"realMaxVal",realMaxVal,"maxDistance",maxDistance);

// setup action base on initial value
var slider_val = document.getElementById("slider").value;
var outputObj = document.getElementById("output");
outputObj.innerHTML = slider_val;
childObj.style.marginLeft = (realMinVal + Math.round(slider_val/100*maxDistance))+"px";

slider.oninput = function(){
	var currentVal = this.value;
	outputObj.innerHTML = currentVal;

	var realDistance = realMinVal + Math.round(currentVal/100*maxDistance);
	console.log("realDistance", realDistance);
	childObj.style.marginLeft = realDistance+"px";
}

