const dateInput = document.getElementById("date-input");
const timeInput = document.getElementById("time-input");
const nameInput = document.getElementById("name-input");
const numberInput = document.getElementById("number-input");
const errorMessage = document.getElementById("error-msg");
const successMessage = document.getElementById("success-msg");

class Reservation {
  constructor(name, date, time, participants) {
    this.name = name;
    this.date = date;
    this.time = time;
    this.participants = participants;
  }
}

const reservations = [];

reservations.push(new Reservation("John Doe", "2025-04-25", "09:00", 4));
const showError = (message) => {
  errorMessage.innerText = message;
  errorMessage.style.display = "block";
  setTimeout(() => {
    errorMessage.style.display = "none";
  }, 3000);
};

const showSuccess = (message) => {
  successMessage.innerText = message;
  successMessage.style.display = "block";
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000);
};

const handleCheck = (e) => {
  e.preventDefault();
  // nameCheck
  if (nameInput.value.length < 3 || !/^[a-zA-Z]+$/.test(nameInput.value)) {
    showError("Name must be at least 3 characters and contain only letters.");
    return;
  }
  // dateCheck
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (today > new Date(dateInput.value)) {
    showError("Date must be today or in the future.");
    return;
  }
  // timeCheck
  const selectedHours = Number(timeInput.value.split("").slice(0, 2).join(""));
  const selectedMinutes = Number(
    timeInput.value.split("").slice(3, 5).join("")
  );
  if (
    selectedHours < 9 ||
    selectedHours > 18 ||
    (selectedHours === 18 && selectedMinutes !== 0)
  ) {
    showError("Time must be between 9:00 and 18:00.");
    return;
  }

  // numberCheck
  if (numberInput.value < 3 || numberInput.value > 10) {
    showError("Number of participants must be between 3 and 10.");
    return;
  }

  // If all checks pass, create a new reservation
  const newReservation = new Reservation(
    nameInput.value,
    dateInput.value,
    timeInput.value,
    numberInput.value
  );

  const isTaken = reservations.some(
    (res) =>
      res.date === newReservation.date && res.time === newReservation.time
  );

  if (isTaken) {
    showError("The selected date and time are already reserved.");
    return;
  }

  reservations.push(newReservation);
  showSuccess("it worked, yay!");
};

document.querySelector("button").addEventListener("click", handleCheck);

// jsonificator
const jsonReserv = JSON.stringify(reservations);

console.log(jsonReserv);
