// src/lab3d/core/HeatEngine.js

let temperature = 25; // room temp °C
let heating = false;

export function startHeating() {
  heating = true;
}

export function stopHeating() {
  heating = false;
}

export function resetHeat() {
  temperature = 25;
  heating = false;
}

export function updateHeat(delta) {
  if (heating && temperature < 100) {
    temperature += delta * 15; // heating speed
  }
}

export function getTemperature() {
  return Math.round(temperature);
}

export function isBoiling() {
  return temperature >= 95;
}