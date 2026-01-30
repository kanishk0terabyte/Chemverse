import { motion } from "framer-motion";

export default function ReactionParticles() {
  return (
    <div className="flex gap-6">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 1 + i * 0.2 }}
          className="w-6 h-6 rounded-full bg-green-400"
        />
      ))}
    </div>
  );
}