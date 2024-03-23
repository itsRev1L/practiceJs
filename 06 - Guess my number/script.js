"use strict";
const guessNumber = Math.trunc(Math.random() * 20 + 1);
let gameScore = 20;
document.querySelector(".check").addEventListener("click", function () {
  const inputGuess = Number(document.querySelector(".guess").value);
  //this is for when the number is higher than the random number

  if (inputGuess === guessNumber) {
    //css back ground style
    document.querySelector("body").style.backgroundColor = "#03a400";
    document.querySelector(".message").textContent = "Correct";
    //if number is higher than 0
  } else if (inputGuess > guessNumber) {
    if (gameScore > 0) {
      //and if number is equal to 1 do this
      if (gameScore == 1) {
        document.querySelector(".message").textContent = "game over";
        document.querySelector(".score").textContent = 0;
      } else {
        // and if its not 0 or less
        document.querySelector(".message").textContent = "Too high ";
        gameScore--;
        document.querySelector(".score").textContent = gameScore;
      }
    }
    //this is for when the number is lower than the random number
  } else if (inputGuess < guessNumber) {
    //if number is higher than 0
    if (gameScore > 0) {
      //and if number is equal to 1 do this
      if (gameScore == 1) {
        document.querySelector(".message").textContent = "game over ";
        document.querySelector(".score").textContent = 0;
      } else {
        // and if its not 0 or less
        document.querySelector(".message").textContent = "Too low ";
        gameScore--;

        document.querySelector(".score").textContent = gameScore;
      }
    }
  }
});
