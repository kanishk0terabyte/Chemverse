import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTheory } from '../services/theory';

const TheoryView = () => {
  const { classId, experimentId } = useParams();
  const [theory, setTheory] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTheory(classId, experimentId.replace('-', ' '))
      .then((data) => {
        setTheory(data);
        setLoading(false);
      })
      .catch(() => {
        setTheory('Failed to load theory');
        setLoading(false);
      });
  }, [classId, experimentId]);

  return (
    <div className="p-8 text-white max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        Class {classId} – {experimentId}
      </h1>

      {loading ? (
        <p className="text-gray-400">Generating theory using AI...</p>
      ) : (
        <pre className="whitespace-pre-wrap bg-white/5 p-6 rounded-xl">
          {theory}
        </pre>
      )}
    </div>
  );
};

export default TheoryView;