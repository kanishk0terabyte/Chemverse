import { useParams, Link } from "react-router-dom";
import experimentsData from "../data/experiments";
import { BookOpen, Cuboid } from "lucide-react";

const ExperimentDetail = () => {
  const { id } = useParams();

  const experiment = experimentsData
    .flatMap(cls => cls.experiments)
    .find(exp => exp.id === id);

  if (!experiment) {
    return (
      <div className="min-h-screen pt-24 text-center text-white">
        Experiment not found
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-3xl mx-auto glass rounded-xl p-8 border border-white/10">

        <h1 className="text-3xl font-bold mb-6 text-neon-blue">
          {experiment.title}
        </h1>

        <div className="flex gap-4 flex-wrap">
          {experiment.hasTheory && (
            <Link
              to={`/experiments/${id}/theory`}
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition"
            >
              <BookOpen size={18} /> View Theory
            </Link>
          )}

          {experiment.has3D && (
            <Link
              to={`/experiments/${id}/virtual-lab`}
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-neon-blue/20 text-neon-blue hover:bg-neon-blue/30 transition"
            >
              <Cuboid size={18} /> Open Virtual Lab
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperimentDetail;