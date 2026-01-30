// src/lab3d/UI/PracticalReport.jsx

export default function PracticalReport({ report, onClose }) {
  if (!report) return null;

  return (
    <div className="absolute inset-0 bg-black/80 z-50 flex justify-center items-center overflow-y-auto">
      <div className="bg-white text-black max-w-2xl w-full rounded-xl p-6 m-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded"
        >
          Close
        </button>

        <h1 className="text-xl font-bold mb-3">
          {report.title}
        </h1>

        <Section title="Aim" content={report.aim} />
        <Section title="Materials Required" content={report.materials} />
        <Section title="Procedure" list={report.procedure} />
        <Section title="Observations" list={report.observations} />
        <Section title="Result" content={report.result} />
        <Section title="Precautions" list={report.precautions} />
      </div>
    </div>
  );
}

function Section({ title, content, list }) {
  return (
    <div className="mb-4">
      <h2 className="font-semibold mb-1">{title}</h2>
      {content && <p>{content}</p>}
      {list && (
        <ul className="list-decimal ml-5">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}