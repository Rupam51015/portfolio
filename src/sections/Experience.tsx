import SectionTitle from "../components/SectionTitle";
import TimelineItem from "../components/TimelineItem";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle title="Experience" subtitle="My professional journey so far." />
      <div className="stack">
        {experience.map((item) => (
          <TimelineItem key={item.role} {...item} />
        ))}
      </div>
    </section>
  );
}