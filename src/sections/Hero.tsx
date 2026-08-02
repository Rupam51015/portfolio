import { profile } from "../data/profile";
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <p className="eyebrow">Hi, I&apos;m</p>
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <p>{profile.summary}</p>

        <div className="hero-actions">
          <a className="button primary" href={profile.resumeUrl} download>
            Download Resume
          </a>
          <a className="button secondary" href="#contact">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="hero-card">
          <p>Cloud • CI/CD • DevSecOps</p>
          <strong>Build. Automate. Secure.</strong>
        </div>
      </div>
    </section>
  );
}