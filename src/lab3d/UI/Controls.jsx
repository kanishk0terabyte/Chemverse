import { SoundEngine } from "../core/SoundEngine";

/*
  CONTROLS
  --------
  Buttons jo ExperimentEngine ko control karte hain
*/

export default function Controls({ engine }) {
  const buttons = [
    {
      label: "Add Salt (True Solution)",
      type: "true",
      color: "bg-emerald-600",
      sound: () => SoundEngine.addTrueSolution(),
    },
    {
      label: "Add Starch / Milk (Colloid)",
      type: "colloid",
      color: "bg-sky-600",
      sound: () => SoundEngine.addColloid(),
    },
    {
      label: "Add Chalk / Sand (Suspension)",
      type: "suspension",
      color: "bg-orange-600",
      sound: () => SoundEngine.addSuspension(),
    },
  ];

  return (
    <div
      className="absolute bottom-6 left-1/2 -translate-x-1/2
                 bg-black/60 backdrop-blur-md
                 border border-white/10
                 rounded-xl p-4 flex gap-4 z-20"
    >
      {buttons.map((btn) => (
        <button
          key={btn.type}
          onClick={() => {
            engine.setSolutionType(btn.type);
            engine.setIsStirring(true);
            btn.sound();

            // stop stirring after 1.2 sec
            setTimeout(() => {
              engine.setIsStirring(false);
            }, 1200);
          }}
          className={`${btn.color} px-4 py-2 rounded-lg text-white text-sm
            transition-all duration-200
            ${
              engine.solutionType === btn.type
                ? "ring-2 ring-white scale-105"
                : "opacity-80 hover:opacity-100"
            }`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}