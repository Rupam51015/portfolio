import {
  FaAws,
  FaDocker,
} from "react-icons/fa";

import {
  SiTerraform,
  SiKubernetes,
} from "react-icons/si";

const tech = [
  {
    icon: <FaAws />,
    name: "AWS",
  },
  {
    icon: <SiTerraform />,
    name: "Terraform",
  },
  {
    icon: <SiKubernetes />,
    name: "Kubernetes",
  },
  {
    icon: <FaDocker />,
    name: "Docker",
  },
];

export default function TechPills() {
  return (
    <div className="tech-pills">
      {tech.map((item) => (
        <div
          key={item.name}
          className="tech-pill"
        >
          {item.icon}

          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}