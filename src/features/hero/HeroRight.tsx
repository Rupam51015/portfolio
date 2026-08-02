import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";

export default function HeroRight() {
  return (
    <motion.div
      className="hero-right"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ProfileCard />
    </motion.div>
  );
}