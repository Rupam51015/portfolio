import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="scroll-indicator"
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
      }}
    >
      <div className="mouse">
        <div className="wheel"></div>
      </div>

      <span>Scroll</span>
    </motion.div>
  );
}