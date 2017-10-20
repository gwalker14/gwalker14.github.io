var list = ["we shall see ",
			"yes",
			"no" ,
			"ask again later",
			"maybe",
			"signs point to yes",
			"as is see it, yes",
			"certainly",
			"doubtful" ,
			"try again later"];

function randomNumber(){
	return Math.floor (Math.random()* 10);
}

				//just testing javascript
function testJs() {
	alert("test") ;
}

function shake8ball() {
	document.getElementById("eightball").src="magic8ball.jpg"; 
	//alert ("we shall see!"); 

	//change paragraph to magic 8 ball text
	document.getElementById("results").innerHTML=list[randomNumber()]; 

	//alert(RandomNumber()) ;
}