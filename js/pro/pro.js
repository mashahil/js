function vals(){

	var asd=document.getElementById('Ef').value;
	var bsd=document.getElementById('psf').value;
	if((asd=="")&&(bsd=="")){
		pass();
		document.getElementById('la').innerHTML="Enter your Username";
		document.getElementById('lla').innerHTML="Enter your Password";
	}
	else if(asd==""){
		document.getElementById('Ef').style.borderColor="red";
		document.getElementById('la').innerHTML="Enter your Username";
	}
	else{
		document.getElementById('psf').style.borderColor="red";
		document.getElementById('lla').innerHTML="Enter your Password";
	}

}
function vald(){
	var brc=document.getElementById('fn').value;
	var crc=document.getElementById('ln').value;
	var drc=document.getElementById('mob').value;
	var erc=document.getElementById('np').value;
	var frc=document.getElementById('m').checked;
	var grc=document.getElementById('f').checked;
	if(brc==""){
		document.getElementById('fn').style.borderColor="red";
		document.getElementById('fnl').innerHTML="Enter Your Firstname";
	}
	if(crc==""){
		document.getElementById('ln').style.borderColor="red";
		document.getElementById('lnl').innerHTML="Enter Your Lastname";
	}
	if(drc==""){
		document.getElementById('mob').style.borderColor="red";
		document.getElementById('mbl').innerHTML="Enter Your Mobile Number or Email";
	}
	if(erc==""){
		document.getElementById('np').style.borderColor="red";
		document.getElementById('psl').innerHTML="Enter Your Password";
	}
	if((frc==false)&&(grc==false)){
		document.getElementById('gnd').innerHTML="Select Your Gender";
	}


}
function pass(){
document.getElementById('Ef').style.borderColor="red";
document.getElementById('psf').style.borderColor="red";
}


