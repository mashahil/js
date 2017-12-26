var arun=new Array();

for(var i=0,total=0; i<5;)  {

       j=i+1;
       arun[i]=prompt("mark for arun for "+j+"th sub is");
       arun[i]=parseInt(arun[i]);
       total += arun[i];
       i++; 

      }
      
      perc=(total/500)*100;
      document.write("percentage of marks ::"+perc+"%");
if(perc>60)
{

			
			alert("He has passed in the examination");
		
}
else{
	
			alert("He has failed in the examination");
		
}

