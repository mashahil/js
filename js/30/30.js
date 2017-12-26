function validate(){
	var s=document.getElementById('nm').value;
	var p=document.getElementById('pa').value;
	var e=document.getElementById('em').value;
	var m=document.getElementById('mb').value;
	var s=document.getElementById('ps').value;
	var rs=document.getElementById('cp').value;

	if(s==""){
		document.getElementById("p1").innerHTML="enter your name!!";
	}
	if(p==""){
		document.getElementById("p2").innerHTML="enter your address!!";
	}
	if(e==""){
		document.getElementById("p3").innerHTML="enter a valid email!!";
	}
	if(m==""){
		document.getElementById("p4").innerHTML="enter your Mobile!!";
	}
	if(s==""){
		document.getElementById("p5").innerHTML="enter your Password!!";
	}
	if(rs==""){
		document.getElementById("p6").innerHTML="Re-Enter Password!!";
	}

}
