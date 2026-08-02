import { motion } from "framer-motion";
import { pipeline } from "../../data/pipeline";
import PipelineNode from "./PipelineNode";

export default function DevOpsPipeline() {
  return (
    <section id="pipeline" className="pipeline-section">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            DevSecOps
          </span>

          <h2 className="section-heading">
            End-to-End Delivery Pipeline
          </h2>

        </div>

        <div className="pipeline">

          {pipeline.map((node, index) => (

            <motion.div
              key={node.id}
              initial={{
                opacity: 0,
                y: 50
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15
              }}
            >

              <PipelineNode node={node} />

              {index !== pipeline.length - 1 && (
                <motion.div
                  className="pipeline-line"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15
                  }}
                />
              )}

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}