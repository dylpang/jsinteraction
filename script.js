var userInput = document.getElementById("userInput");
var button = document.getElementById("button");
var userInput = document.getElementById("userInput");
var output = document.getElementById("outputText");
const fortunes = [
  "a secret admirer will soon send you a sign of affection.",
  "your heart is in a place to draw true happiness.",
  "a thrilling time is in your near future.",
  "the one you love is closer than you think.",
  "plan for many pleasures ahead."
]

button.addEventListener("click", restyle);


function fortune(name){
  output.innerText = name + ", " + fortunes[Math.floor(Math.random()*fortunes.length)];

}

function restyle() {
  var red = Math.random() * 255;
  var green = Math.random() * 255;
  var blue = Math.random() * 255;
  var color = "rgb(" + red + "," + green + "," + blue + ")";
  var bcolor = "rgba(" + red + "," + green + "," + blue + ", .10 )";
  output.style.backgroundColor = bcolor;
  output.style.color = color;
  output.style.fontSize = 100 + Math.floor(Math.random()* 500)+"%";
  output.style.transition = '.5s ease-in'

  fortune (document.getElementById("userInput").value);
}
