import { useParams, useNavigate } from "react-router-dom";
import { experimentsData } from "../data/experiments";

export default function TheoryClass() {
  const { classId } = useParams();
  const navigate = useNavigate();

  const experiments = experimentsData[classId] || [];

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl mb-6 font-bold">
        Class {classId} Experiments
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiments.map((exp) => (
          <div
            key={exp.slug}
            onClick={() =>
              navigate(`/theory/${classId}/${exp.slug}`)
            }
            className="cursor-pointer bg-gradient-to-br from-indigo-600 to-purple-700 hover:scale-105 transition-transform rounded-xl p-6"
          >
            <h2 className="text-lg font-semibold">{exp.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}