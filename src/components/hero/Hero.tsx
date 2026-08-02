import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Download, Mail } from "lucide-react";

import { profile } from "../../data/profile";

import ProfileCard from "./ProfileCard";
import SocialLinks from "./SocialLinks";
import ScrollIndicator from "./ScrollIndicator";
import Background from "./Background";
import MouseGlow from "./MouseGlow";
import HeroStats from "./HeroStats";
import TechPills from "./TechPills";

import "../../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero-container">
      <MouseGlow />
      <Background />

      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="hero-tag">👋 Hello, I'm</span>

        <h1 className="hero-title">
          <span>Rupam</span>
          <span className="gradient-name">Debnath</span>
        </h1>

        <h2>
          <Typewriter
            words={[
              "DevOps Engineer",
              "Cloud Engineer",
              "AWS Certified Engineer",
              "Terraform Specialist",
              "Kubernetes Enthusiast",
              "DevSecOps Engineer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h2>

        <TechPills />

        <p>{profile.summary}</p>

        <HeroStats />

        <div className="hero-buttons">
          <a href="/resume.pdf" download className="hero-btn primary-btn">
            <Download size={18} />
            Download Resume
          </a>

          <a href="#contact" className="hero-btn secondary-btn">
            <Mail size={18} />
            Contact Me
          </a>
        </div>

        <SocialLinks />
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <ProfileCard />
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}