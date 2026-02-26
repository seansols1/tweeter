var maxChars = 160;

function updateCharacters(){
var textBox = document.getElementById("tweetText");
var label = document.getElementById("charLabel");

var textLength = textBox.value.length;
var remaining = maxChars - textLength;

label.innerHTML = remaining + " characters remaining";

validateInput();
}

function validateInput(){
var textBox = document.getElementById("tweetText");
var button = document.getElementById("tweetBtn");
var label = document.getElementById("charLabel");

if(textBox.value.length > maxChars){
label.innerHTML = "Too many characters!";
button.disabled = true;
}
else{
button.disabled = false;
}
}

document.getElementById("tweetText").onkeyup = updateCharacters;