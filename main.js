({
  plugins: ["jsdom-quokka-plugin"],
  jsdom: { html: `<div id="test">Hello</div>` },
});

// Function that houses all of the game code and score counts
const game = () => {
  //   let playerScore = 0;
  //   let computerScore = 0;

  // Function to transition from the splashscreen to the game page
  const startGame = () => {
    const startButton = document.getElementById("startButton");
    const splash = document.getElementById("splash");

    startButton.addEventListener("click", () => {
      splash.style.display = "none";
    });
  };
  // Plays the match and runs the compareHands function
  const playMatch = () => {
    const options = document.querySelectorAll(".options");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    // Computer Options
    const computerOptions = ["ROCK", "PAPER", "SCISSORS"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        // Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        compareHands(this.textContent, computerChoice);

        // Update images
        playerHand.src = `./images/${this.textContent}.svg`;
        computerHand.src = `./images/${computerChoice}.svg`;
      });
    });
  };

  // Function to update the score for both player and computer. Function is called during each round and after each score increment
  const updateScore = () => {
    const pScore = document.getElementById("player-score");
    const cScore = document.getElementById("computer-score");
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    roundsPlayed = roundsPlayed + 1;
    console.log(playerScore);
    if (roundsPlayed == 5 && playerScore > computerScore) {
      restartGame("win");
    } else if (roundsPlayed == 5 && computerScore > playerScore) {
      restartGame("lose");
    }
  };

  // Function to restart the game.

  const restartGame = (outcome) => {
    if (outcome === "win") {
      alert("Game over! You won!");
    } else if (outcome === "lose") {
      alert("you lost!");
    }

    // Needs 'You win' or lose text depending on the outcome above and the final scores, along with a play again / reset button that takes you back to the initial
    // splash page that is current hidden.
    // Current main container will need to be hidden and made visible when the play button is clicked on the splash page. Scores will also need to be reset.
  };

  // Function to compare the round between player and computer
  const compareHands = (playerChoice, computerChoice) => {
    // Update the round text
    const roundText = document.querySelector(".round-text");

    // Checking for a Tie
    if (playerChoice === computerChoice) {
      roundText.textContent = "It is a tie!";
      return;
    }

    // Checking for Rock
    if (playerChoice === "ROCK") {
      if (computerChoice === "SCISSORS") {
        roundText.textContent = "You win this round!";
        playerScore++;
        updateScore();
        return;
      } else {
        roundText.textContent = "The Computer wins this round!";
        computerScore++;
        updateScore();
        return;
      }
    }

    // Checking for Paper
    if (playerChoice === "PAPER") {
      if (computerChoice === "SCISSORS") {
        roundText.textContent = "The Computer wins this round!";
        computerScore++;
        updateScore();
        return;
      } else {
        roundText.textContent = "You win this round!";
        playerScore++;
        updateScore();
        return;
      }
    }

    // Checking for Scissors
    if (playerChoice === "SCISSORS") {
      if (computerChoice === "ROCK") {
        roundText.textContent = "The Computer wins this round!";
        computerScore++;
        updateScore();
        return;
      } else {
        roundText.textContent = "You win this round!";
        playerScore++;
        updateScore();
        return;
      }
    }
  };

  let playerScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  // Call all functions
  startGame();
  playMatch();
};

game();

// Features that could be added for more complexity. Good practice!

// Animated hands.
// Input your name.
// Two player local version. Chose from 1 or 2 player at the splash screen.
// Site color themes or pick your own hand colors.
// Pick your own round limit or 'first too' number.
// When you hover over a selecton. It could change to the current :hover selection and / or be animated as well.
