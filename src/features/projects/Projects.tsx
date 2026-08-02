import { featuredProject, projects } from "../../data/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">Projects</span>

          <h2 className="section-heading">
            Featured DevOps Projects
          </h2>
        </div>

        <FeaturedProject project={featuredProject} />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}