import { useRef } from "react";
import ExperimentEngine from "./ExperimentEngine";

export default function useExperimentEngine() {
  const engineRef = useRef(null);

  if (!engineRef.current) {
    engineRef.current = new ExperimentEngine(); // ✅ new keyword
  }

  return engineRef.current;
}