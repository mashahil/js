var n=prompt("enter the value");
n=parseInt(n);
i=0;
var sum=0;
while(i<=n){
	sum=sum+i;
	i++;
}
document.write("the sum of "+n+" positive numbers is:"+sum);