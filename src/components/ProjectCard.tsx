type Props = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
};

export default function ProjectCard({ title, description, tech, github, live }: Props) {
  return (
    <div className="card project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="chips">
        {tech.map((item) => (
          <span key={item} className="chip">
            {item}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {live ? (
          <a href={live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        ) : null}
      </div>
    </div>
  );
}