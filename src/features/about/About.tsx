import AboutCard from "./AboutCard";
import Timeline from "./Timeline";

export default function About() {
  return (
    <section id="about" className="about-section">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            About Me
          </span>

          <h2 className="section-heading">
            Building scalable cloud infrastructure
            and reliable DevSecOps pipelines.
          </h2>

        </div>

        <div className="about-grid">

          <AboutCard />

          <Timeline />

        </div>

      </div>

    </section>
  );
}