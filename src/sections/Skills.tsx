import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle title="Skills" subtitle="Tools and technologies I use regularly." />
      <div className="grid">
        {skillGroups.map((group) => (
          <SkillCard key={group.title} title={group.title} items={group.items} />
        ))}
      </div>
    </section>
  );
}