import { Howl } from "howler";

export function useSound(src) {
  let sound;
  try {
    sound = new Howl({ src: [src], html5: true, volume: 0.9 });
  } catch (e) {
    sound = null;
  }
  const play = () => sound && sound.play();
  const stop = () => sound && sound.stop();
  const fade = (from, to, ms) => sound && sound.fade(from, to, ms);
  return { play, stop, fade };
}
