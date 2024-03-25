"use strict";
let guessNumber = Math.trunc(Math.random() * 20 + 1);
let gameScore = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const inputGuess = Number(document.querySelector(".guess").value);
  //this is for when the number is higher than the random number

  if (inputGuess === guessNumber) {
    //css back ground style
    document.querySelector("body").style.backgroundColor = "#03a400";
    displayMessage("message", "correct");
    //highScore
    if (gameScore > highScore) {
      highScore = gameScore;
      document.querySelector(".Highscore").textContent = highScore;
    }
  } else if (inputGuess !== guessNumber) {
    if (gameScore > 0) {
      // if Number is higher than the random number then the game will say its too high other wise it says its too low
      document.querySelector(".message").textContent = inputGuess > guessNumber ? "Too high" : "too low";
      gameScore--;
      displayMessage("score", gameScore);
    } else {
      displayMessage("message", "game over");
      displayMessage("score", 0);
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  gameScore = 20;
  guessNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("score", gameScore);
  displayMessage("message", "Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});

function displayMessage(cl, ms) {
  document.querySelector(`.${cl}`).textContent = `${ms}`;
}
