import { FaGithub } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
};

type Props = {
  project: Project;
};

export default function FeaturedProject({ project }: Props) {
  return (
    <div className="featured-project glass">

      <div className="featured-content">

        <span className="featured-label">
          ⭐ Featured Project
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tags">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-links">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            className="btn btn-secondary"
          >
            Case Study
          </a>

        </div>

      </div>

    </div>
  );
}