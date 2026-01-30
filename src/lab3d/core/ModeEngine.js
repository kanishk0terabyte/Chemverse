// src/lab3d/core/ModeEngine.js

let mode = "FREE"; // FREE | EXAM

export function setMode(newMode) {
  mode = newMode;
}

export function getMode() {
  return mode;
}

export function isExamMode() {
  return mode === "EXAM";
}