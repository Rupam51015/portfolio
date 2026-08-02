import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="card about-card">
        <h2>About Me</h2>
        <p>{profile.summary}</p>
        <p>
          I enjoy designing scalable infrastructure, automating delivery pipelines,
          and improving reliability with practical DevOps and DevSecOps solutions.
        </p>
      </div>
    </section>
  );
}