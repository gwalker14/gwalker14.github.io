

function testjs () {
	alert("text ") ;
}

function shake8ball () {
	document.getElementById("eightball").src="magic8ball.jpg"; 
	alert ("we shall see!");
} 

/* 
Below is the code for tic tac toe
*/ 

//handles x and o signs 
function turn(location) {
	document.getElementById(location).innerHTML="X";
}