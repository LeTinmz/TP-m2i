const screen = document.getElementById("ecran");

const handleSelect = (e) => {
  let input = e.target.innerText;
  if (input === "C") {
    screen.innerText = "";
    return;
  }
  if (input === "=") {
    screen.innerText = calculateResult(screen.innerText);
    return;
  }

  if (input === "+/-") {
    screen.innerText[0] === "-"
      ? (input = input.slice(1))
      : (screen.innerText = "-" + screen.innerText);
    return;
  }

  screen.innerText += input;
};

const calculateResult = (operation) => {
  operation = operation.replace(/,/g, ".");
  operation = operation.replace(/x/g, "*");
  return eval(operation);
};
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", handleSelect);
});
