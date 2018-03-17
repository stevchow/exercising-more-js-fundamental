/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, curPlayer, gameOn, lastDice1, lastDice2;

const diceDOM = document.querySelectorAll(".dice");
const score0 = document.getElementById("score-0");
const score1 = document.getElementById("score-1");
const current0 = document.getElementById("current-0");
const current1 = document.getElementById("current-1");
const player0Panel = document.querySelector(".player-0-panel");
const player1Panel = document.querySelector(".player-1-panel");

const playerScore = document.querySelector(`#current-${curPlayer}`);

const btnNew = document.querySelector(".btn-new");
const btnHold = document.querySelector(".btn-hold");
const rollDice = document.querySelector(".btn-roll");
const btnSubmit = document.querySelector(".btn-submit");

let finalScore;
let winningScore = 100;

init();

function init() {
  gameOn = true;
  scores = [0, 0];
  roundScore = 0;
  curPlayer = 0;
  player0Panel.classList.add("active");
  player1Panel.classList.remove("active");
  player0Panel.classList.remove("winner");
  player1Panel.classList.remove("winner");
  score0.textContent = "0";
  score1.textContent = "0";
  current0.textContent = "0";
  current1.textContent = "0";
  document.getElementById("name-0").textContent = "Player-1";
  document.getElementById("name-1").textContent = "Player-2";
}

diceDOM.forEach(a => (a.style.display = "none"));

rollDice.addEventListener("click", () => {
  if (gameOn) {
    //random value of dice
    const randomDice1 = Math.floor(Math.random() * 6) + 1;
    const randomDice2 = Math.floor(Math.random() * 6) + 1;
    //create diceDOM reference, and change the display and picture
    diceDOM.forEach(el => (el.style.display = "block"));

    document.querySelector("#dice1").src = `dice-${randomDice1}.png`;
    document.querySelector("#dice2").src = `dice-${randomDice2}.png`;

    //change player when dice === 1
    if (
      randomDice1 === 6 &&
      lastDice1 === 6 &&
      (randomDice2 === 6 && lastDice2 === 6)
    ) {
      scores[curPlayer] = 0;
      document.getElementById(`score-${curPlayer}`).textContent = "💣";
      nextPlayer();
    } else if (randomDice1 !== 1 && randomDice2 !== 1) {
      roundScore += randomDice1 + randomDice2;
      document.getElementById(`current-${curPlayer}`).textContent = roundScore;
    } else {
      nextPlayer();
    }

    lastDice1 = randomDice1;
    lastDice2 = randomDice2;
  }
});

btnHold.addEventListener("click", () => {
  if (gameOn) {
    scores[curPlayer] += roundScore;
    document.getElementById(`score-${curPlayer}`).textContent =
      scores[curPlayer];

    if (scores[curPlayer] >= winningScore) {
      document.getElementById(`name-${curPlayer}`).textContent = "Winner!";
      document
        .querySelector(`.player-${curPlayer}-panel`)
        .classList.add("winner");
      document
        .querySelector(`.player-${curPlayer}-panel`)
        .classList.remove("active");
      diceDOM.forEach(a => (a.style.display = "none"));
      gameOn = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  curPlayer === 0 ? (curPlayer = 1) : (curPlayer = 0);
  roundScore = 0;
  current0.textContent = "0";
  current1.textContent = "0";
  player0Panel.classList.toggle("active");
  player1Panel.classList.toggle("active");
  diceDOM.forEach(a => (a.style.display = "none"));
}

btnNew.addEventListener("click", init);

function newScore() {
  finalScore = document.querySelector(".final-score").value;
  winningScore = Number(finalScore);
}

btnSubmit.addEventListener("click", newScore);
