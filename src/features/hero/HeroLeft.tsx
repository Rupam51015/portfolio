import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { profile } from "../../data/profile";

export default function HeroLeft() {
  return (
    <motion.div
      className="hero-left"
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="hero-tag">
        👋 Hello, I'm
      </span>

      <h1 className="hero-title">
        <span>Rupam</span>
        <span className="gradient-name">Debnath</span>
      </h1>

      <h2 className="hero-role">
        <Typewriter
          words={[
            "DevOps Engineer",
            "Cloud Engineer",
            "AWS Certified",
            "Terraform Specialist",
            "Kubernetes Enthusiast",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
        />
      </h2>

      <div className="tech-pills">

        <span className="tech-pill">AWS</span>

        <span className="tech-pill">Terraform</span>

        <span className="tech-pill">Kubernetes</span>

        <span className="tech-pill">DevSecOps</span>

      </div>

      <p className="hero-description">
        {profile.summary}
      </p>

      <div className="hero-buttons">

        <a
          href="/resume.pdf"
          download
          className="btn btn-primary"
        >
          <Download size={18} />
          Resume
        </a>

        <a
          href="#contact"
          className="btn btn-secondary"
        >
          <Mail size={18} />
          Contact
        </a>

      </div>

      <div className="social-icons">

        <a href={profile.github} target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href={`mailto:${profile.email}`}>
          <FaEnvelope />
        </a>

      </div>

      <div className="stats-grid">

        <div className="glass card stat-box">
          <h3>3+</h3>
          <p>Years Experience</p>
        </div>

        <div className="glass card stat-box">
          <h3>AWS</h3>
          <p>Certified</p>
        </div>

        <div className="glass card stat-box">
          <h3>3</h3>
          <p>Cloud Platforms</p>
        </div>

      </div>
    </motion.div>
  );
}