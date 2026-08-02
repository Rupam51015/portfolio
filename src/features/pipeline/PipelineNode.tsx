import { motion } from "framer-motion";

type Props = {
  node: {
    id: number;
    title: string;
    logo: string;
    description: string;
    details: string[];
  };
};

export default function PipelineNode({ node }: Props) {
  return (
    <motion.div
      className="pipeline-node glass"
      whileHover={{
        scale: 1.05,
        y: -6,
      }}
    >
      <div className="pipeline-number">
        {node.id}
      </div>

      <div className="pipeline-logo">
        <img
          src={node.logo}
          alt={node.title}
        />
      </div>

      <h3>{node.title}</h3>

      <p>{node.description}</p>

      <ul className="pipeline-details">
        {node.details.map((detail) => (
          <li key={detail}>
            {detail}
          </li>
        ))}
      </ul>

    </motion.div>
  );
}