import { motion } from "framer-motion";

const stats = [
  {
    number: "3+",
    label: "Years Experience",
  },
  {
    number: "AWS",
    label: "Certified",
  },
  {
    number: "3",
    label: "Cloud Platforms",
  },
];

export default function HeroStats() {
  return (
    <div className="hero-stats">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          className="stat-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.2,
          }}
        >
          <h3>{item.number}</h3>
          <span>{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
}