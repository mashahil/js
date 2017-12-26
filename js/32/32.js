function val(){
	var m=document.getElementById('ml').checked;
	var f=document.getElementById('fm').checked;
	if((m==true)||(f==true)){
		document.write("Thanks for responds");
}
	else{
		document.getElementById('p2').innerHTML="Please choose your Gender";
		
	}
}