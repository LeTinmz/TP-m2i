import gameState from "./gameState.js";

const updateWordCheckUI = (target, isSubmit = false) => {
  target.innerHTML = "";
  for (let i = 0; i < gameState.answer.length; i++) {
    let tile = document.createElement("div");
    tile.classList.add("tile");
    tile.innerText = gameState.playerInput[i] || "";
    if (!gameState.playerInput[i]) {
      tile.classList.add("blank");
    }
    if (isSubmit) {
      if (gameState.playerInput[i] === gameState.answer[i]) {
        tile.classList.add("isRight");
        document
          .getElementById(gameState.playerInput[i])
          .classList.add("isRight");
      } else if (
        gameState.answer.split("").includes(gameState.playerInput[i])
      ) {
        tile.classList.add("isIncluded");
        document
          .getElementById(gameState.playerInput[i])
          .classList.add("isIncluded");
      }
    }
    target.appendChild(tile);
  }
};

export default updateWordCheckUI;
