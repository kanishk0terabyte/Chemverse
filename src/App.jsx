import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AIAssistant from "./pages/AIAssistant";
import VirtualLab from "./pages/VirtualLab";
import Practical from "./pages/Practical";
import Theory from "./pages/Theory";
import TheoryClass from "./pages/TheoryClass";
import TheoryExperiment from "./pages/TheoryExperiment";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<AIAssistant />} />
        <Route path="/lab" element={<VirtualLab />} />
        <Route path="/lab/practical" element={<Practical />} />

        {/* 🔥 THEORY FLOW */}
        <Route path="/theory" element={<Theory />} />
        <Route path="/theory/:classId" element={<TheoryClass />} />
        <Route
          path="/theory/:classId/:experimentSlug"
          element={<TheoryExperiment />}
        />

        <Route
          path="*"
          element={
            <div className="p-10 text-white text-xl">
              Page not found
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;