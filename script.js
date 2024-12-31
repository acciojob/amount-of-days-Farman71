//your JS code here. If required.
function daysOfYear(numdays) {
	if(numdays%4==0 && numdays%100!=0 || numdays%400==0){
		return 366;
	}
	else{
		return 365;
	}
}
let numdays = prompt("Enter the Year:");
alert(daysOfYear(numdays));
