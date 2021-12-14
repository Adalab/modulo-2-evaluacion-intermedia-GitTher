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
  // Generar un número aleatorio
  const randomNum = getRandomNumber(9);

  // Comprobar si es par
  if (randomNum < 4) {
    // Es piedra
    console.log("El ordenador ha sacado Piedra");
  } else if (randomNum >= 7) {
    // Es papel
    console.log("El ordenador ha sacado Papel");
  } else {
    // Es tijera
    console.log("El ordenador ha sacado Tijera");
  }
  console.log(randomNum);
}

function handleClickUpdate(event) {
  event.preventDefault();
  getComputerSelection();
}

// Listeners

playBtn.addEventListener("click", handleClickUpdate);
