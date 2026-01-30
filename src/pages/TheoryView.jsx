import { useParams } from "react-router-dom";
import { experimentsData } from "../data/experiments";
import { useEffect, useState } from "react";

export default function TheoryView() {
  const { classId, slug } = useParams();
  const numericClassId = Number(classId);

  const experiment = experimentsData[numericClassId]?.find(
    (e) => e.slug === slug
  );

  const [theory, setTheory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!experiment) return;

    fetch("http://localhost:5000/api/theory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        classId: numericClassId,
        experiment: experiment.title,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTheory(data.content);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (!experiment) {
    return <div className="p-8 text-white">Experiment not found</div>;
  }

  return (
    <div className="p-4 text-white max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold mb-8">{experiment.title}</h1>

      {/* 🔥 IMAGES SECTION */}
{experiment.images?.length > 0 && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
    {experiment.images.map((img, i) => (
      <img
        key={i}
        src={img}
        alt="experiment"
        loading="lazy"
        className="rounded-xl border border-slate-700 bg-slate-800"
      />
    ))}
  </div>
)}
      {/* 🔥 THEORY CONTENT */}
      <div className="bg-slate-900 rounded-xl p-4 shadow-lg whitespace-pre-line leading-relaxed">
        {loading ? "Loading theory..." : theory}
      </div>
    </div>
  );
}
