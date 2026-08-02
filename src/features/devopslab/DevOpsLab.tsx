import { labProjects } from "../../data/lab";
import LabCard from "./LabCard";

export default function DevOpsLab() {
  return (
    <section id="lab" className="lab-section">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">
            DevOps Lab
          </span>

          <h2 className="section-heading">
            Real Projects. Real Automation.
          </h2>
        </div>

        <div className="lab-grid">
          {labProjects.map((project) => (
            <LabCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}