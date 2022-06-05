var randomnumber1 = Math.floor(Math.random() * 6) + 1; // random number from 1 to 6
var randomDiceImage = "dice" + randomnumber1 + ".png"; // string of dice2.png varies form 1 to 6;

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomSourceImage2 = "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomSourceImage2);

if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomnumber1 < randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
