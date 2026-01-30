// src/lab3d/core/SoundEngine.js

/**
 * SoundEngine
 * Central audio controller for ChemVerse 3D Lab
 * Lightweight, reusable, mobile-safe
 */

const sounds = {
  pour: new Audio("/sounds/pour.mp3"),
  stir: new Audio("/sounds/stir.mp3"),
  fizz: new Audio("/sounds/fizz.mp3"),
  drop: new Audio("/sounds/drop.mp3"),
};

// Prepare sounds
Object.values(sounds).forEach((s) => {
  s.preload = "auto";
  s.volume = 0.6;
});

function play(sound) {
  if (!sounds[sound]) return;
  sounds[sound].currentTime = 0;
  sounds[sound].play().catch(() => {});
}

/**
 * Public API
 */
export const SoundEngine = {
  addTrueSolution() {
    play("pour");
    setTimeout(() => play("stir"), 500);
  },

  addColloid() {
    play("pour");
    setTimeout(() => play("fizz"), 600);
  },

  addSuspension() {
    play("pour");
    setTimeout(() => play("drop"), 500);
  },
};