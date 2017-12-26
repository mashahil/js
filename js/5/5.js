a=prompt("enter the value of height of triangle");
b=prompt("enter the value of base of the triangle");
a=parseInt(a);
b=parseInt(b);


var y=area(a,b);

document.write("area of the triangle is: "+y);
function area(a,b){
	return (1/2)*a*b;
}