import { Link } from "react-router-dom";
import { BookOpen, Cuboid } from "lucide-react";

const ExperimentCard = ({ exp }) => {
  return (
    <Link
      to={`/experiments/${exp.id}`}
      className="glass rounded-xl border border-white/10 p-5 hover:border-neon-blue/40 transition block"
    >
      <h3 className="text-lg font-semibold text-white mb-2">
        {exp.title}
      </h3>

      <div className="flex gap-2 mt-3">
        {exp.hasTheory && (
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-white/10">
            <BookOpen size={14} /> Theory
          </span>
        )}
        {exp.has3D && (
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-neon-blue/10 text-neon-blue">
            <Cuboid size={14} /> 3D
          </span>
        )}
      </div>
    </Link>
  );
};

export default ExperimentCard;