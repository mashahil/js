var i=prompt("enter the no. of the day");
i=parseInt(i);
var k=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
document.write("you entered no. is:"+i+"<br/>");
switch(i)
{
	case 1:
	document.write("Day is:"+k[0]);
	break;
	case 2:
	document.write("Day is:"+k[1]);
	break;
	case 3:
	document.write("Day is:"+k[2]);
	break;
	case 4:
	document.write("Day is:"+k[3]);
	break;
	case 5:
	document.write("Day is:"+k[4]);
	break;
	case 6:
	document.write("Day is:"+k[5]);
	break;
	case 7:
	document.write("Day is:"+k[6]);
	break;
	default:
	document.write("Day no. is not valid");
	break;


}