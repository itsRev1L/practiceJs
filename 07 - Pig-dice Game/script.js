//sections
const sectionP1 = document.querySelector('.player--0');
const sectionP2 = document.querySelector('.player--1');
//Hold scores
const scoreP1 = document.getElementById('score--0');
const scoreP2 = document.getElementById('score--1');
const currentP1 = document.getElementById('current--0');
const currentP2 = document.getElementById('current--1');
//dice image
const diceImg = document.querySelector('.dice');
//buttons
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
//player stuff
let activePlayer = 0;
let currentScore = 0;
let playable = true;
function switchActivePlayer() {
  sectionP1.classList.toggle('player--active');
  sectionP2.classList.toggle('player--active');
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
}

//total scores
let totalScoreP = [0, 0];

//conditions
scoreP1.textContent = 0;
scoreP2.textContent = 0;
diceImg.classList.add('hide');

//events
buttonRoll.addEventListener('click', function () {
  if (playable) {
    //random generator and variables
    const diceRoll = Math.trunc(Math.random() * 6 + 1);

    //showing dice img to user
    diceImg.classList.remove('hide');
    diceImg.src = `/07 - Pig-dice Game/images/dice-${diceRoll}.png`;

    // condition
    if (diceRoll !== 1) {
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore += diceRoll;
    } else {
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      activePlayer = activePlayer === 0 ? 1 : 0;
      switchActivePlayer();
    }
  }
});

buttonHold.addEventListener('click', function () {
  if (playable) {
    totalScoreP[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      totalScoreP[activePlayer];
    // checking if we have a winner

    if (totalScoreP[activePlayer] >= 50) {
      playable = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceImg.classList.add('hide');
      // document.querySelectorAll('.btn').classList.add('hide');
    } else {
      //switching players
      activePlayer = activePlayer === 0 ? 1 : 0;
      switchActivePlayer();
    }
  }
});

buttonNew.addEventListener('click', function () {
  scoreP1.textContent = 0;
  scoreP2.textContent = 0;
  currentP1.textContent = 0;
  currentP2.textContent = 0;
  diceImg.classList.add('hide');
  activePlayer = 0;
  currentScore = 0;
  playable = true;
  totalScoreP = [0, 0];
  sectionP1.classList.add('player--active');
  sectionP2.classList.remove('player--active');
  sectionP1.classList.remove('player--winner');
  sectionP2.classList.remove('player--winner');
});
