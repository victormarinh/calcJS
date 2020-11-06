var displayBuffer = "";
var number = "";

function pressNumber(numBtn) {
	//number = number.concat(numBtn.innerHTML);
	showDisplay(numBtn.innerHTML);
}

function clearDisplay(){
	//number = "";
	//console.log(number);
	displayBuffer = "";
	var screen = document.querySelector('#display');
	screen.value = displayBuffer;
}

function showDisplay(content){
	displayBuffer = displayBuffer.concat(content);
	var screen = document.querySelector('#display');
	screen.value = displayBuffer;
}