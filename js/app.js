var count = 0;
var bonus = 0;
var bonusPoint = 0;
var bonusmultiplier = 0;

var press = function() {
	count++;
	count=count+bonus;
	document.getElementById('score').innerHTML = "Current Brownies: " + count;
	console.log("press variable");
	if (Math.floor(Math.random() * 100) == 1){
		count= count+200
		document.getElementById('score').innerHTML = "Current Brownies: " + count;
		console.log("You got a Corner Brownie!")
	}
}

var grandma = function() {
	if (count>=500){
		bonus=1;
		count= count-500;
		document.getElementById('score').innerHTML = "Current Brownies: " + count;
	}
	else{
		bonus=0;
	}
} 

var ironchef = function() {
	if (count>=700){
		bonus=2;
	count= count-700;
	document.getElementById('score').innerHTML = "Current Brownies: " + count;
	}
	else{
		bonus=0;
	}
}
var truckload = function() {

	if (count>=1100){
		bonus=4;
	count= count-1100;
	document.getElementById('score').innerHTML = "Current Brownies: " + count;
	}
	else{
		bonus=0;
	}
} 