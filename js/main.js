"use strict";

// Variables globales

const userSelection = document.querySelector(".js_user__selector");

const playBtn = document.querySelector(".js_user__selector--button");

const userScore = document.querySelector(".js_score__user--total");

const computerScore = document.querySelector(".js_score__computer--total");

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
  const userTotal = parseInt(userScore.innerHTML);
  const computerTotal = parseInt(computerScore.innerHTML);

  if (userValue === computerValue) {
    notification.innerHTML = "Empate";
    console.log("Hay empate");
  } else if (userValue === "Papel" && computerValue === "Piedra") {
    notification.innerHTML = "¡Has ganado!";
    const resultTotal = userTotal + 1;
    userScore.innerHTML = resultTotal;
    console.log("Gana el Usuario");
  } else if (userValue === "Piedra" && computerValue === "Papel") {
    notification.innerHTML = "Has perdido";
    const resultTotal = computerTotal + 1;
    computerScore.innerHTML = resultTotal;
    console.log("Gana el Ordenador");
  } else if (userValue === "Tijera" && computerValue === "Papel") {
    notification.innerHTML = "¡Has ganado!";
    const resultTotal = userTotal + 1;
    userScore.innerHTML = resultTotal;
    console.log("Gana el Usuario");
  } else if (userValue === "Papel" && computerValue === "Tijera") {
    notification.innerHTML = "Has perdido";
    const resultTotal = computerTotal + 1;
    computerScore.innerHTML = resultTotal;
    console.log("Gana el Ordenador");
  } else if (userValue === "Piedra" && computerValue === "Tijera") {
    notification.innerHTML = "¡Has ganado!";
    const resultTotal = userTotal + 1;
    userScore.innerHTML = resultTotal;
    console.log("Gana el Usuario");
  } else if (userValue === "Tijera" && computerValue === "Piedra") {
    notification.innerHTML = "Has perdido";
    const resultTotal = computerTotal + 1;
    computerScore.innerHTML = resultTotal;
    console.log("Gana el Ordenador");
  } else if (userValue === "")
    notification.innerHTML = "Por favor, selecciona tu jugada"
}

function countGames() {
  gameCounter = gameCounter + 1;

  if (gameCounter === 10) {
    playBtn.classList.add("hidden");
    resetBtn.classList.remove("hidden");
  }
}

function handleClickUpdate(event) {
  event.preventDefault();
  compareSelection();
  countGames();
}
function handleReset(event) {
  event.preventDefault();
  window.location.reload();
}

// Listeners

playBtn.addEventListener("click", handleClickUpdate);
resetBtn.addEventListener("click", handleReset);
