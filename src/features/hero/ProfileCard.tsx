import { FaAws, FaDocker, FaGithub } from "react-icons/fa";
import { SiTerraform, SiKubernetes } from "react-icons/si";

import profile from "../../assets/images/profile.jpg";

export default function ProfileCard() {
  return (
    <div className="profile-card glass">

      <div className="profile-photo-wrapper">
        <img
          src={profile}
          alt="Rupam Debnath"
          className="profile-photo"
        />
      </div>

      <div className="availability-badge">
        <span className="status-dot"></span>
        Available for opportunities
      </div>

      <div className="floating-icon aws">
        <FaAws />
      </div>

      <div className="floating-icon docker">
        <FaDocker />
      </div>

      <div className="floating-icon terraform">
        <SiTerraform />
      </div>

      <div className="floating-icon kubernetes">
        <SiKubernetes />
      </div>

      <div className="floating-icon github">
        <FaGithub />
      </div>

    </div>
  );
}