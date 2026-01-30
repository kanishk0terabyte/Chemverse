import { Link } from "react-router-dom";

export default function VirtualLab() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold mb-4">Virtual Chemistry Lab</h1>

      <p className="mb-4 text-gray-700">
        Perform realistic 3D chemistry experiments with interactive equipment.
      </p>

      <Link
        to="/lab/practical"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Start Practical Lab
      </Link>
    </div>
  );
}