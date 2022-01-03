"use strict";

// Variables globales

const userSelection = document.querySelector(".js_user__selector");

const playBtn = document.querySelector(".js_user__selector--button");

let userScore = 0;

let computerScore = 0;

const notification = document.querySelector(".js_notification");

let gameCounter = 0;

const resetBtn = document.querySelector(".js_user__selector--reset");



// Funciones

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function getComputerSelection() {
  const randomNum = getRandomNumber(9);

  if (randomNum < 4) {
    // Es piedra
    console.log("El ordenador ha sacado Piedra");
    const computerSelection = "Piedra";
    return computerSelection;
  } else if (randomNum >= 7) {
    // Es papel
    console.log("El ordenador ha sacado Papel");
    const computerSelection = "Papel";
    return computerSelection;
  } else {
    // Es tijera
    console.log("El ordenador ha sacado Tijera");
    const computerSelection = "Tijera";
    return computerSelection;
  }
}

function compareSelection() {
  const userValue = userSelection.value;
  const computerValue = getComputerSelection();
  // const userTotal = parseInt(userScore.innerHTML);
  const computerTotal = parseInt(computerScore.innerHTML);

  if (userValue === computerValue) {
    handleNotification('Empate');
    console.log("Hay empate");
  } else if (userValue === "Papel" && computerValue === "Piedra") {
    handleNotification('¡Has ganado!');
    handleUserScore()
    console.log("Gana el Usuario");
  } else if (userValue === "Piedra" && computerValue === "Papel") {
    handleNotification('Has perdido');
    handlecomputerScore()
    console.log("Gana el Ordenador");
  } else if (userValue === "Tijera" && computerValue === "Papel") {
    handleNotification('¡Has ganado!');
    handleUserScore()
    console.log("Gana el Usuario");
  } else if (userValue === "Papel" && computerValue === "Tijera") {
    handleNotification('Has perdido');
    handlecomputerScore()
    console.log("Gana el Ordenador");
  } else if (userValue === "Piedra" && computerValue === "Tijera") {
    handleNotification('¡Has ganado!');
    handleUserScore()
    console.log("Gana el Usuario");
  } else if (userValue === "Tijera" && computerValue === "Piedra") {
    handleNotification('Has perdido');
    handlecomputerScore()
    console.log("Gana el Ordenador");
  } else if (userValue === "") {
    notification.innerHTML = "Por favor, selecciona tu jugada"
  }
}

function countGames() {
  gameCounter = gameCounter + 1;

  if (gameCounter === 10) {
    playBtn.classList.add("hidden");
    resetBtn.classList.remove("hidden");
  }
}

function handleClickUpdate() {
  compareSelection();
  countGames();
}
function handleReset(event) {
  event.preventDefault();
  window.location.reload();
}

function validateForm(event) {
  const userValue = userSelection.value;
  event.preventDefault();
  if (userValue === "") {
    handleNotification('Por favor, selecciona tu jugada');
  } else {
    handleClickUpdate();
  }
}

function handleNotification(message) {
  notification.innerHTML = message;
}

function handleUserScore() {
  userScore = userScore + 1;
  const resultTotal = document.querySelector('.js_score__user--total');
  resultTotal.innerHTML = userScore;
}

function handlecomputerScore() {
  computerScore = computerScore + 1;
  const resultTotal = document.querySelector('.js_score__computer--total');
  resultTotal.innerHTML = computerScore;
}

// Listeners

playBtn.addEventListener("click", validateForm);
resetBtn.addEventListener("click", handleReset);
