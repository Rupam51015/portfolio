type Props = {
  title: string;
  items: string[];
};

export default function SkillCard({ title, items }: Props) {
  return (
    <div className="card skill-card">
      <h3>{title}</h3>
      <div className="chips">
        {items.map((item) => (
          <span key={item} className="chip">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}