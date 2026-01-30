// src/lab3d/UI/ModeSwitch.jsx
import { setMode, getMode } from "../core/ModeEngine";
import { useState } from "react";

export default function ModeSwitch() {
  const [mode, setLocalMode] = useState(getMode());

  return (
    <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md
                    border border-white/10 rounded-lg p-3 text-white">
      <p className="text-sm font-semibold mb-2">Lab Mode</p>

      <div className="flex gap-2">
        <button
          onClick={() => {
            setMode("FREE");
            setLocalMode("FREE");
          }}
          className={`px-3 py-1 rounded ${
            mode === "FREE"
              ? "bg-emerald-600"
              : "bg-white/10"
          }`}
        >
          Free
        </button>

        <button
          onClick={() => {
            setMode("EXAM");
            setLocalMode("EXAM");
          }}
          className={`px-3 py-1 rounded ${
            mode === "EXAM"
              ? "bg-red-600"
              : "bg-white/10"
          }`}
        >
          Exam
        </button>
      </div>
    </div>
  );
}