import { useNavigate } from "react-router-dom";

export default function Theory() {
  const navigate = useNavigate();

  const classes = [9, 10, 11, 12];

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl mb-6 font-bold">Select Class</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {classes.map((cls) => (
          <div
            key={cls}
            onClick={() => navigate(`/theory/${cls}`)}
            className="cursor-pointer bg-slate-700 hover:bg-slate-600 transition rounded-xl p-10 text-center text-2xl font-bold"
          >
            Class {cls}
          </div>
        ))}
      </div>
    </div>
  );
}