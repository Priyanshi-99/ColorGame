
var numberofsquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colordis = document.getElementById("colordis");
var message = document.querySelector("#message");
var resetbutton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var mode = document.querySelectorAll(".mode");

init();

function init(){
	setupmode();
	setupsquares();
    reset();
}
function setupmode() {
		for(var i=0; i<mode.length;i++){
	    mode[i].addEventListener("click", function() {
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		// body...
		this.classList.add("selected");
		this.textContent ==="Easy" ? numberofsquares = 3: numberofsquares = 6;
		reset();

	  });
   }
}
function setupsquares() {
	for (var i = 0; i<squares.length; i++) {
	//add click listener
		squares[i].addEventListener("click",function(){
			var clickedcolor = this.style.background;
			if(clickedcolor === pickedColor){
				message.textContent= "Hurrah, correct!!"
				changeColor(clickedcolor);
				h1.style.background = clickedcolor;
				resetbutton.textContent = "Play again?"
			}
			else{
				this.style.background = "#232323";
				message.textContent = "Try Again!";
			}
	
        });
    }
}

function reset(){

	colors = generateRandomColors(numberofsquares);
	pickedColor = pickcolor();
	colordis.textContent = pickedColor;
	resetbutton.textContent = "New Colors"
	message.textContent = "";
	for (var i = 0;i < squares.length;i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

	h1.style.background = "steelblue";

}

resetbutton.addEventListener("click", function(){
	reset();
})


function changeColor(color) {

	// body...lopp through all square and change to match
	for (var i = 0;i < squares.length;i++) {
		squares[i].style.background = color;
	}
}
function pickcolor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
	// body...
}
function generateRandomColors(num){
	//make an array
	//add random colors
	// body...
	var arr = []
	for(var i=0; i<num; i++){
		//get random color and push in array
       arr.push(randomColor());

	}
	return arr;
}
function randomColor() {
	// body...
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}




























