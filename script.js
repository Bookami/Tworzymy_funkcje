var a=3;
var h=4;




function getTriangleArea(a, h) {
	
	if ((a < 0) || (h < 0)) {
		return "incorrect data";
	} else {
		return a*h/2;
	}
}

var triangle1Area = getTriangleArea(10,15); 
var triangle2Area = getTriangleArea(15,20);
var triangle3Area = getTriangleArea(20,25); 


console.log(getTriangleArea(a,h));




 
