
/** control block **/
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

var slider = document.getElementById("slider");
slider.oninput = function(){
	var currentVal = this.value;
	outputObj.innerHTML = currentVal;

	var realDistance = realMinVal + Math.round(currentVal/100*maxDistance);
	console.log("realDistance", realDistance);
	childObj.style.marginLeft = realDistance+"px";
}

/** color picker **/
var red = document.getElementById("red").value;
var green = document.getElementById("green").value;
var blue = document.getElementById("blue").value;
var objDisplay = document.getElementById("color-display");
objDisplay.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
var color_code = "#" + get_code(red) + get_code(green) + get_code(blue);
document.getElementById("color-code").innerHTML = color_code ;

rgbObj = document.getElementsByClassName("color");
for (var i=0; i<rgbObj.length; ++i){
	rgbObj[i].oninput = function(){
		red = document.getElementById("red").value;
		green = document.getElementById("green").value;
		blue = document.getElementById("blue").value;
		console.log(red,green, blue);
		objDisplay.style.backgroundColor = "rgb("+red+","+green+","+blue+")";

		var color_code = "#" + get_code(red) + get_code(green) + get_code(blue);
		document.getElementById("color-code").innerHTML = color_code ;
	}
}

function get_code(num){
	var hexNum = parseInt(num).toString(16);
	//add leading zero
	return ("00"+hexNum).slice(-2);
}
