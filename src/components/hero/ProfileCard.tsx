import { motion } from "framer-motion";

import profileImage from "../../assets/images/profile.jpg";

import {
  FaAws,
  FaDocker,
  FaGithub,
} from "react-icons/fa";

import {
  SiTerraform,
  SiKubernetes,
} from "react-icons/si";

export default function ProfileCard() {
  return (
    <motion.div
      className="profile-card"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="profile-glow"></div>

      <img
        src={profileImage}
        alt="Rupam Debnath"
        className="profile-photo"
      />

      <div className="availability">
        <span className="status-dot"></span>

        Available for opportunities
      </div>

      <div className="orbit orbit-top-left">
        <FaAws />
      </div>

      <div className="orbit orbit-top-right">
        <FaDocker />
      </div>

      <div className="orbit orbit-bottom-left">
        <SiTerraform />
      </div>

      <div className="orbit orbit-bottom-right">
        <SiKubernetes />
      </div>

      <div className="orbit orbit-bottom">
        <FaGithub />
      </div>

    </motion.div>
  );
}