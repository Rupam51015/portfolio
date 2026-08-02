import { motion } from "framer-motion";

type Skill = {
  name: string;
  level: string;
};

type Props = {
  category: {
    title: string;
    icon: string;
    skills: Skill[];
  };
};

export default function SkillCategory({ category }: Props) {
  return (
    <motion.div
      className="skill-category glass"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <h3>
        <span>{category.icon}</span>
        {category.title}
      </h3>

      <div className="skill-list">
        {category.skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div>
              <strong>{skill.name}</strong>
              <p>{skill.level}</p>
            </div>

            <span className="skill-level-dot"></span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}