import { motion } from "framer-motion";
import { experience } from "../../data/experience";
import TimelineItem from "./TimelineItem";
import Achievements from "./Achievements";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">
            Experience
          </span>

          <h2 className="section-heading">
            Professional Journey
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <TimelineItem experience={experience} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Achievements />
        </motion.div>

      </div>
    </section>
  );
}