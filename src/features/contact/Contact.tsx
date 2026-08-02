import { profile } from "../../data/profile";
import { socialLinks } from "../../data/social";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="card contact-card">
        <h2>Contact</h2>
        <p>Open to opportunities, interesting projects, and collaboration.</p>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
        <p>
          <strong>Location:</strong> {profile.location}
        </p>
        <div className="contact-links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}