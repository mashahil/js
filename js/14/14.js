var mark=new Array(89,86,64,67,75);
k=tot(mark);
alert("Total marks of the student out of 500:"+k);

function tot(mark)
{
	for(var i=0,sum=0;i<mark.length;){
		
		
		sum+=mark[i];
		i++;
	}
	return sum;
}
