type Props = {
  role: string;
  company: string;
  duration: string;
  points: string[];
};

export default function TimelineItem({ role, company, duration, points }: Props) {
  return (
    <div className="timeline-item card">
      <h3>{role}</h3>
      <h4>{company}</h4>
      <span>{duration}</span>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}