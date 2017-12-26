function baab(){
	var parid=document.getElementById('we');
	var fm=document.getElementById('fn').value;
	var lm=document.getElementById('ln').value;
	var p=document.getElementById('ps').value;
	var n=fm+" "+lm;
	var men=document.getElementById('em').value;
	if((fm!=null)&&(lm!=null)&&(em!=null)&&(p!=null)){
	document.getElementById('we').innerHTML="welcome "+n+" .My EmailId is "+men;
	}

}
