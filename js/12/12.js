document.write("<h1>Gobal</h1><br/>");
var j="apple";
function pr(){
	document.write(j+" inside function<br/>");
}
pr();
document.write(j+" outside function<br/>");
document.write("<h1>Private</h1><br/>");

function pr1(){
		var k="apple";
	document.write(k+" inside function<br/>");
}
pr1();
document.write(k+" outside function<br/>");
