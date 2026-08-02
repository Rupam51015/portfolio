type Props = {
  experience: {
    company: string;
    role: string;
    duration: string;
    location: string;
    achievements: string[];
  };
};

export default function TimelineItem({ experience }: Props) {
  return (
    <div className="timeline-card glass">

      <div className="timeline-header">
        <h3>{experience.role}</h3>
        <span>{experience.duration}</span>
      </div>

      <h4>{experience.company}</h4>

      <p className="timeline-location">
        {experience.location}
      </p>

      <ul className="timeline-list">
        {experience.achievements.map((achievement) => (
          <li key={achievement}>
            {achievement}
          </li>
        ))}
      </ul>

    </div>
  );
}