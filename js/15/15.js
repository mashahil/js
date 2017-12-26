var arun=new Array();
var midhun=new Array();
for(var i=0,total=0; i<3;)  {

       j=i+1;
       arun[i]=prompt("mark for arun for "+j+"th sub is");
       arun[i]=parseInt(arun[i]);
       total += arun[i];
       i++; 

      }
for(var k=0,tot=0; k<3;)  {

       l=k+1;
       midhun[k]=prompt("mark for Midhun for "+l+"th sub is");
       midhun[k]=parseInt(midhun[k]);
       tot += midhun[k];
       k++; 

      }
document.write("marks :for Arun is "+arun[0]+","+arun[1]+","+arun[2]+"<br/>total is:"+total);
document.write("<br/>marks :for Arun is "+midhun[0]+","+midhun[1]+","+midhun[2]+"<br/>total is:"+tot);
if(tot>total)
{

			dif=tot-total;
			alert("Midhun has got "+dif+" marks more than Arun");
		
}

