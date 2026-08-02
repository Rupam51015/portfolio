import { certifications } from "../../data/certifications";
import CertificationCard from "./CertificationCard";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            Certifications
          </span>

          <h2 className="section-heading">
            Professional Certifications
          </h2>

        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <CertificationCard
              key={cert.title}
              certification={cert}
            />
          ))}
        </div>

      </div>
    </section>
  );
}