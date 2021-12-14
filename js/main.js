"use strict";

// Variables globales

const userSelection = document.querySelector(".js_user__selector");

const playBtn = document.querySelector(".js_user__selector--button");

const userTotal = document.querySelector(".js_score__user--total");

const computerTotal = document.querySelector(".js_score__computer--total");

const notification = document.querySelector(".js_notification");

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

  if (userValue === computerValue) {
    notification.innerHTML = "Empate";
    console.log("Hay empate");
  } else if (userValue === "Papel" && computerValue === "Piedra") {
    notification.innerHTML = "¡Has ganado!";
    console.log("Gana el Usuario");
  } else if (userValue === "Piedra" && computerValue === "Papel") {
    notification.innerHTML = "Has perdido";
    console.log("Gana el Ordenador");
  } else if (userValue === "Tijera" && computerValue === "Papel") {
    notification.innerHTML = "¡Has ganado!";
    console.log("Gana el Usuario");
  } else if (userValue === "Papel" && computerValue === "Tijera") {
    notification.innerHTML = "Has perdido";
    console.log("Gana el Ordenador");
  } else if (userValue === "Piedra" && computerValue === "Tijera") {
    notification.innerHTML = "¡Has ganado!";
    console.log("Gana el Usuario");
  } else if (userValue === "Tijera" && computerValue === "Piedra") {
    notification.innerHTML = "Has perdido";
    console.log("Gana el Ordenador");
  }
}

function handleClickUpdate(event) {
  event.preventDefault();

  compareSelection();
}

// Listeners

playBtn.addEventListener("click", handleClickUpdate);
