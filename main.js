

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

//holdes x or o
var character ="o";

//handles x and o turns 
function turn(location) {
	document.getElementById(location).innerHTML = character;
	if(character == "x"){
		character = "o"; 
		}
		else {
		character
		
		}



}

//clears x's and o's 
function clearAll (){
	document.getElementById("r1c1").innerHTML = "";
	document.getElementById("r1c2").innerHTML = "";
	document.getElementById("r1c3").innerHTML = "";
	document.getElementById("r2c1").innerHTML = "";
	document.getElementById("r2c2").innerHTML = "";
	document.getElementById("r2c3").innerHTML = "";
	document.getElementById("r3c1").innerHTML = "";
	document.getElementById("r3c2").innerHTML = "";
	document.getElementById("r3c3").innerHTML = "";
}

