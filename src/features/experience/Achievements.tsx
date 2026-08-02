import { motion } from "framer-motion";

const achievements = [
  {
    icon: "🚀",
    title: "End-to-End DevSecOps Pipeline",
    description:
      "Built CI/CD pipelines using GitHub Actions, SonarQube, Trivy and OWASP ZAP.",
  },
  {
    icon: "☁️",
    title: "Multi-Cloud Infrastructure",
    description:
      "Managed and automated AWS, Azure and GCP infrastructure using Terraform.",
  },
  {
    icon: "🔒",
    title: "Secure CI/CD",
    description:
      "Integrated security scanning and secrets management into deployment workflows.",
  },
  {
    icon: "⚙️",
    title: "Container Platform",
    description:
      "Deployed and managed Docker and Kubernetes workloads for production environments.",
  },
];

export default function Achievements() {
  return (
    <section className="achievement-section">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">
            Highlights
          </span>

          <h2 className="section-heading">
            Key Achievements
          </h2>
        </div>

        <div className="achievement-grid">
          {achievements.map((item) => (
            <motion.div
              key={item.title}
              className="achievement-card glass"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="achievement-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}