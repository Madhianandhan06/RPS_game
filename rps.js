let player = 0;
let computer = 0;
let attempts = 5;

const scoreEl = document.getElementById("score");
const attemptEl = document.getElementById("attempt");
const resultEl = document.getElementById("result");
const playerEl = document.getElementById("player");
const computerEl = document.getElementById("computer");
const option1 = document.getElementById("option_1");
const option2 = document.getElementById("option_2");


const options = ["ROCK", "PAPER", "SCISSOR"];

attemptEl.textContent = "Attempts: 5";

function RPS(playerChoice) {
  attempts--;

  if (attempts < 0) return;

  let computerChoice = options[Math.floor(Math.random() * 3)];

  if (
    (playerChoice === "ROCK" && computerChoice === "SCISSOR") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK") ||
    (playerChoice === "SCISSOR" && computerChoice === "PAPER")
  ) {
    scoreEl.textContent = "You win this round!";
    scoreEl.style.color = "green";

    player++;
  } else if (playerChoice === computerChoice) {
    scoreEl.textContent = "It's a Tie!";
        scoreEl.style.color = "yellow"

  } else {
    scoreEl.textContent = "Computer wins this round!";
    scoreEl.style.color = "red";
    computer++;
  }

      option1.textContent = `Player: ${playerChoice}`;
    option2.textContent = `Computer: ${computerChoice}`;

  playerEl.textContent = `Player Score: ${player}`;
  computerEl.textContent = `Computer Score: ${computer}`;



  if (attempts > 0) {
    attemptEl.textContent = `Attempts: ${attempts}`;
  } else {
    attemptEl.style.display = "none";
    scoreEl.textContent = "Game Done!";
    scoreEl.style.color = "orangered"




    showFinalResult();
  }
}

function Rock() {
  RPS("ROCK");
}

function Paper() {
  RPS("PAPER");
}

function Scissor() {
  RPS("SCISSOR");
}

function showFinalResult() {
  if (player > computer) {
    resultEl.textContent = "🏆 You won the game!";
  } else if (player === computer) {
    resultEl.textContent = "🤝 The game is tied!";
  } else {
    resultEl.textContent = "💻 Computer won!";
  }

  // Show Play Again button
  document.getElementById("play-again").style.display = "inline-block";
}

function resetGame() {
  player = 0;
  computer = 0;
  attempts = 5;

  scoreEl.textContent = "Let's play!";
  attemptEl.textContent = "Attempts: 5";
  attemptEl.style.display = "block";
  resultEl.textContent = "";

  playerEl.textContent = "Player Score: 0";
  computerEl.textContent = "Computer Score: 0";

        option1.textContent = "";
    option2.textContent = "";

  document.getElementById("play-again").style.display = "none";
}



function Quit(){
    player = 0;
    computer = 0;
    attempts = 5;

  scoreEl.textContent = "Let's play!";
  attemptEl.textContent = "Attempts: 5";
  attemptEl.style.display = "block";
  resultEl.textContent = "";

  playerEl.textContent = "Player Score: 0";
  computerEl.textContent = "Computer Score: 0";

    option1.textContent = "";
    option2.textContent = "";
      document.getElementById("play-again").style.display = "none";

}
