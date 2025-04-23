import checkWord from "./checkWord.js";
import gameState from "./gameState.js";
import updateWordCheckUI from "./updateWordCheckUI.js";
const gameScreen = document.getElementById("game-screen");

const handleSubmit = () => {
  updateWordCheckUI(document.getElementById(gameState.attempts), true);

  if (gameState.playerInput.join("") === gameState.answer) {
    gameState.gameWon = true;
    document.getElementById("message").innerText = "u win !";
  } else {
    console.log("no...");
    checkWord();
    gameState.attempts++;
    console.log(gameState.attempts);
  }
  gameState.playerInput = [];

  if (gameState.attempts === gameState.maxAttempts) {
    gameState.gameOver = true;
    document.getElementById("message").innerText =
      "u lose, right answer was " + gameState.answer;
  }
};
export default handleSubmit;
