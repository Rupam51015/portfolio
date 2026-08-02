type Props = {
  project: {
    icon: string;
    title: string;
    description: string;
    technologies: string[];
    github: string;
  };
};

export default function LabCard({ project }: Props) {
  return (
    <div className="lab-card glass">

      <div className="lab-icon">
        {project.icon}
      </div>

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
        className="btn btn-primary"
      >
        View Repository
      </a>

    </div>
  );
}