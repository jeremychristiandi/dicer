const score0_el = document.querySelector("#score-0");
const score1_el = document.querySelector("#score-1");
const player0_el = document.querySelector(".player-0");
const player1_el = document.querySelector(".player-1");
const stored0_el = document.querySelector("#val-score-0");
const stored1_el = document.querySelector("#val-score-1");

const dice_img = document.querySelector(".dice");
const btn_new = document.querySelector(".btn-new");
const btn_roll = document.querySelector(".btn-roll");
const btn_store = document.querySelector(".btn-store");

let scores, currentScore, currentPlayer, isPlaying;

// Initial condition (new game)
const init = () => {
  score0_el.textContent = 0;
  score1_el.textContent = 0;
  dice_img.classList.add("hidden");
  scores = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  isPlaying = true;

  player0_el.classList.remove("winner");
  player1_el.classList.remove("winner");
  player0_el.classList.add("player-active");
  player1_el.classList.remove("player-active");
};

init();

const switchPlayer = () => {
  document.querySelector(`#val-score-${currentPlayer}`).textContent = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0_el.classList.toggle("player-active");
  player1_el.classList.toggle("player-active");
};

// When the roll button is pressed
btn_roll.addEventListener("click", () => {
  if (isPlaying) {
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    dice_img.classList.remove("hidden");
    dice_img.src = `./resource/dice-${diceNum}.png`;

    if (diceNum == 1) {
      switchPlayer();
    } else {
      currentScore += diceNum;
      console.log(diceNum);
      document.querySelector(`#val-score-${currentPlayer}`).textContent =
        currentScore;
    }
  }
});

btn_store.addEventListener("click", () => {
  if (isPlaying) {
    scores[currentPlayer] += currentScore;
    document.querySelector(`#score-${currentPlayer}`).textContent =
      scores[currentPlayer];

    if (scores[currentPlayer] >= 100) {
      isPlaying = false;
      let winner_el = document.querySelector(`.player-${currentPlayer}`);
      winner_el.classList.add("winner");
      winner_el.classList.remove("player-active");
    }
  }
});

btn_new.addEventListener("click", init);
