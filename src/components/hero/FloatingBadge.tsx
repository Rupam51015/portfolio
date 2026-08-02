import { motion } from "framer-motion";

type FloatingBadgeProps = {
  icon: React.ReactNode;
  label: string;
  x: number;
  y: number;
  delay?: number;
};

export default function FloatingBadge({
  icon,
  label,
  x,
  y,
  delay = 0,
}: FloatingBadgeProps) {
  return (
    <motion.div
      className="floating-badge"
      initial={{
        opacity: 0,
        x,
        y,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        x,
        y: [y, y - 15, y],
        scale: 1,
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
      }}
    >
      <div className="badge-icon">{icon}</div>
      <span>{label}</span>
    </motion.div>
  );
}