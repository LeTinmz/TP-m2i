const keyBoard = document.querySelector("#keyboard");
const submitBtn = document.getElementById("submit");
submitBtn.disabled = true;
let selectedLetter = "";
let turnCount = 1;
const turnCountDisplay = document.querySelector("h3");
turnCountDisplay.innerText = "Turn : " + turnCount;
const handleKeySelect = (letter) => {
  // Allez, ça dégage

  // Allez, ça repart
  if (/^[a-z]$/.test(letter)) {
    selectedLetter = letter;
    document.querySelectorAll("[id$='-button']").forEach((button) => {
      button.id !== letter && button.classList.remove("isSelected");
    });
    const letterButton = document.getElementById(selectedLetter + "-button");
    letterButton.classList.add("isSelected");
    document.querySelector("h2").innerText =
      "SelectedLetter : " + selectedLetter;
  }
  if (selectedLetter !== "") {
    submitBtn.disabled = false;
  }
};

const handleSubmit = (letter) => {
  console.log(letter);
  turnCount++;
  turnCountDisplay.innerText = "Turn : " + turnCount;
};
// Création des boutons du clavier (version tout moche)
"azertyuiopqsdfghjklmnbvcxw".split("").forEach((letter) => {
  const letterButton = document.createElement("button");
  letterButton.innerText = letter;
  letterButton.id = letter + "-button";
  keyBoard.appendChild(letterButton);
});

window.addEventListener("keydown", (e) => handleKeySelect(e.key));
document.querySelectorAll("[id$='-button']").forEach((button) => {
  button.addEventListener("click", () => handleKeySelect(button.innerText));
});
submitBtn.addEventListener("click", () => handleSubmit(selectedLetter));
