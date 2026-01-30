import { useParams, useNavigate } from "react-router-dom";
import { experimentsData } from "../data/experiments";

export default function ClassExperiments() {
  const { classId } = useParams();
  const navigate = useNavigate();

  // 🔥 FIX: string → number
  const numericClassId = Number(classId);

  const experiments = experimentsData[numericClassId];

  // 🛡️ Safety check (kabhi blank nahi hoga)
  if (!experiments || !Array.isArray(experiments)) {
    return (
      <div className="p-10 text-white text-xl">
        ❌ No experiments found for Class {classId}
      </div>
    );
  }

  return (
    <div className="p-8 text-white">
      <button
        onClick={() => navigate("/lab")}
        className="mb-6 text-blue-400 hover:underline"
      >
        ← Back to Classes
      </button>

      <h1 className="text-3xl font-bold mb-6">
        Class {classId} – Experiments
      </h1>

      <div className="space-y-4">
        {experiments.map((exp) => (
          <div
            key={exp.slug}
            className="bg-slate-800 rounded-xl p-5 flex justify-between items-center shadow-lg"
          >
            <h2 className="text-lg font-semibold">{exp.title}</h2>

            <div className="flex gap-3">
              <button
                onClick={() =>
                  navigate(`/lab/class/${classId}/theory/${exp.slug}`)
                }
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
              >
                Theory
              </button>

              <button
                onClick={() =>
                  navigate(`/lab/class/${classId}/3d/${exp.slug}`)
                }
                className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700"
              >
                3D Lab
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}