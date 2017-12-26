function val(){
	var d=document.getElementById('g').checked;
	var t=document.getElementById('pg').checked;
	if((d==true)||(t==true)){
		document.write("Thanks for responds");
}
	else{
		document.getElementById('p2').innerHTML="Please choose your Gender";
		
	}
}