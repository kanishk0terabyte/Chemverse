import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTheory } from "../services/theory";

function TheoryExperiment() {
  const { classId, experimentSlug } = useParams();

  const [loading, setLoading] = useState(true);
  const [theory, setTheory] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // 🔒 Safety check (VERY IMPORTANT)
    if (!classId || !experimentSlug) {
      setError("Invalid experiment URL");
      setLoading(false);
      return;
    }

    // slug → proper experiment name
    const experimentName = experimentSlug
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    const loadTheory = async () => {
      try {
        setLoading(true);
        setError("");

        const result = await fetchTheory(classId, experimentName);
        setTheory(result);
      } catch (err) {
        console.error(err);
        setError("Failed to load theory. Check backend or API key.");
      } finally {
        setLoading(false);
      }
    };

    loadTheory();
  }, [classId, experimentSlug]);

  /* ================= UI ================= */

  if (loading) {
    return (
      <div className="p-10 text-blue-300 animate-pulse">
        Generating AI Theory...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-red-400">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto text-slate-100">
      <h1 className="text-2xl font-bold text-cyan-400 mb-4">
        Class {classId} – {experimentSlug.replace(/-/g, " ")}
      </h1>

      <div className="whitespace-pre-line leading-relaxed bg-slate-900 p-6 rounded-xl border border-slate-700">
        {theory}
      </div>
    </div>
  );
}

export default TheoryExperiment;