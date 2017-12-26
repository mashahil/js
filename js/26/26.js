var image_tr='f';
function baab(){

	var image=document.getElementById("sd");
	if(image_tr=='f'){
	image.src="Desert.jpg";
	image_tr='t';
	}
	else{
		image.src="Chrysanthemum.jpg";
	image_tr='f';
	}
	;

}
var timer=setInterval('baab();',2000)