import { motion } from "framer-motion";

export default function Background() {
  return (
    <>
      <motion.div
        className="bg-gradient-one"
        animate={{
          x: [0, 120, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="bg-gradient-two"
        animate={{
          x: [0, -120, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
        }}
      />

      <div className="grid-overlay" />
    </>
  );
}