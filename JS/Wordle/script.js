const gameContainer = document.getElementById("game-screen");
const keyboard = document.getElementById("keyboard");
import playerTurn from "./playerTurn.js";
import gameState from "./gameState.js";
import updateWordCheckUI from "./updateWordCheckUI.js";
import handleKeySelect from "./handleKeySelect.js";
const fetchWord = async () => {
  let data = await fetch("https://trouve-mot.fr/api/random");
  let word = await data.json();
  return word[0].name;
};

const randomWord = await fetchWord();
// Création du clavier + gestion des événements de clic et de touche
gameState.answer = randomWord;

document.querySelector("p").innerText += " " + gameState.answer.length;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZéèùïîôüê".toLowerCase().split("");

letters.forEach((letter) => {
  const key = document.createElement("button");
  key.classList.add("key");
  key.id = letter;
  key.innerText = letter;
  keyboard.appendChild(key);
  key.addEventListener("click", () => {
    handleKeySelect(letter);
  });
});

window.addEventListener("keydown", (event) => {
  handleKeySelect(event.key);
});

for (let i = 0; i < gameState.maxAttempts; i++) {
  const row = document.createElement("div");
  row.id = i;
  row.classList.add("row");
  for (let j = 0; j < gameState.answer.length; j++) {
    const tile = document.createElement("div");
    tile.classList.add("tile", "blank");
    tile.id = j;
    row.appendChild(tile);
  }
  gameContainer.appendChild(row);
}
