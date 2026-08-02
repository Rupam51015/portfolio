import { FaGithub } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
};

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="project-card glass">

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="project-tags">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="project-github"
      >
        <FaGithub />
        View Repository
      </a>

    </div>
  );
}