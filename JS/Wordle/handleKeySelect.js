import gameState from "./gameState.js";
import handleSubmit from "./handleSubmit.js";
import updateWordCheckUI from "./updateWordCheckUI.js";
const gameScreen = document.getElementById("game-screen");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZéèùïîôüê".toLowerCase().split("");

const handleKeySelect = (key) => {
  if (gameState.gameOver || gameState.gameWon) return;
  if (
    gameState.playerInput.length === gameState.answer.length &&
    key === "Enter"
  ) {
    // check if the answer is correct
    handleSubmit();
    return;
  }
  if (
    gameState.playerInput.length < gameState.answer.length &&
    letters.includes(key)
  ) {
    gameState.playerInput.push(key);
    updateWordCheckUI(document.getElementById(gameState.attempts));
    console.log(gameState.playerInput);
  }
  if (gameState.playerInput.length !== 0 && key === "Backspace") {
    gameState.playerInput.pop();
    updateWordCheckUI(document.getElementById(gameState.attempts));
    console.log(gameState.playerInput);
  }
};

export default handleKeySelect;
