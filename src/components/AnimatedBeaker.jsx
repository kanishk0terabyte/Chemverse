import { motion } from "framer-motion";
import { Beaker } from "lucide-react";

export default function AnimatedBeaker() {
  return (
    <motion.div
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ repeat: Infinity, duration: 4 }}
      className="text-green-400"
    >
      <Beaker size={120} />
    </motion.div>
  );
}