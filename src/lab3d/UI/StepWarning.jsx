// src/lab3d/UI/StepWarning.jsx
export default function StepWarning({ message }) {
  if (!message) return null;

  return (
    <div className="absolute top-20 left-1/2 -translate-x-1/2
                    bg-red-600/90 text-white
                    px-5 py-2 rounded-lg
                    shadow-xl border border-white/20
                    animate-pulse z-50">
      ⚠️ {message}
    </div>
  );
}