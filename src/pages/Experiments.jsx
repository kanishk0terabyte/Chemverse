import { useState } from "react";
import experimentsData from "../data/experiments";
import ExperimentCard from "../components/ExperimentCard";

const Experiments = () => {
  const classes = experimentsData.map(c => c.class);
  const [activeClass, setActiveClass] = useState(classes[0]);

  const current = experimentsData.find(c => c.class === activeClass);

  return (
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8 text-neon-blue">
          CBSE / NCERT Experiments
        </h1>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {classes.map(cls => (
            <button
              key={cls}
              onClick={() => setActiveClass(cls)}
              className={`px-5 py-2 rounded-lg border transition ${
                activeClass === cls
                  ? "bg-neon-blue/20 border-neon-blue text-neon-blue"
                  : "border-white/10 text-gray-300 hover:border-white/30"
              }`}
            >
              Class {cls}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {current.experiments.map(exp => (
            <ExperimentCard key={exp.id} exp={exp} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experiments;