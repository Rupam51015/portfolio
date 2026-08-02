import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { socialLinks } from "../../data/social";

const icons = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedin />,
  Email: <FaEnvelope />,
};

export default function SocialLinks() {
  return (
    <div className="social-links">
      {socialLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
        >
          {icons[item.label as keyof typeof icons]}
        </a>
      ))}
    </div>
  );
}