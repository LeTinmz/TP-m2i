import updateWordCheckUI from "./updateWordCheckUI.js";

const gameScreen = document.getElementById("game-screen");

const playerTurn = () => {
  const row = document.createElement("div");
  row.classList.add("row");
  gameScreen.appendChild(row);
};

export default playerTurn;
