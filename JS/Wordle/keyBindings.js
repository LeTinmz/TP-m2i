const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split("");
const handleKeySelect = (key) => {
  if (letters.includes(key)) {
    handleLetterInput(key);
  }

  if (key === "Enter") {
    handleEnter();
  }

  if (key === "BackSpace") {
    handleBackSpace();
  }
};

export default handleKeySelect;
