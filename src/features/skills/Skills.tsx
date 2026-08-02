import { skillCategories } from "../../data/skills";
import SkillCategory from "./SkillCategory";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            Skills
          </span>

          <h2 className="section-heading">
            Technologies I Work With
          </h2>

        </div>

        <div className="skills-grid">

          {skillCategories.map((category) => (

            <SkillCategory
              key={category.title}
              category={category}
            />

          ))}

        </div>

      </div>

    </section>
  );
}