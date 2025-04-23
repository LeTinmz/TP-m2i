import gameState from "./gameState.js";

const checkWord = () => {
  for (let i = 0; i < gameState.answer.length; i++) {
    if (gameState.playerInput[i] === gameState.answer[i]) {
      console.log(gameState.playerInput[i] + " at " + i + " is right");
    } else {
      if (gameState.answer.includes(gameState.playerInput[i])) {
        console.log(gameState.playerInput[i] + " at " + i + " is included");
      }
    }
  }
};

export default checkWord;
