// src/lab3d/UI/ObservationPanel.jsx

export default function ObservationPanel({ solutionType }) {
  const data = {
    true: {
      title: "True Solution",
      observations: [
        "Solution is clear and transparent.",
        "No particles are visible to naked eye.",
        "Particles do not settle on standing.",
        "No scattering of light is observed.",
      ],
      result:
        "The given mixture is a true solution because solute particles are extremely small and uniformly distributed.",
    },

    colloid: {
      title: "Colloid",
      observations: [
        "Solution appears translucent or milky.",
        "Particles are not visible to naked eye.",
        "Particles do not settle on standing.",
        "Scattering of light (Tyndall Effect) is observed.",
      ],
      result:
        "The given mixture is a colloidal solution as it shows Tyndall effect and particles remain suspended.",
    },

    suspension: {
      title: "Suspension",
      observations: [
        "Solution appears cloudy or opaque.",
        "Particles are visible to naked eye.",
        "Particles settle down on standing.",
        "Strong scattering of light is observed.",
      ],
      result:
        "The given mixture is a suspension because particles are large and settle down under gravity.",
    },
  }[solutionType];

  return (
    <div className="absolute right-4 top-20 w-80 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-4 text-white shadow-xl">
      <h2 className="text-lg font-semibold text-sky-400 mb-2">
        Observation Panel
      </h2>

      <p className="text-sm text-gray-300 mb-3">
        <span className="font-semibold text-white">Type:</span>{" "}
        {data.title}
      </p>

      <ul className="list-disc list-inside space-y-1 text-sm text-gray-200 mb-3">
        {data.observations.map((obs, i) => (
          <li key={i}>{obs}</li>
        ))}
      </ul>

      <div className="text-sm bg-white/10 p-3 rounded-lg border border-white/10">
        <span className="font-semibold text-emerald-400">
          Conclusion:
        </span>{" "}
        {data.result}
      </div>
    </div>
  );
}