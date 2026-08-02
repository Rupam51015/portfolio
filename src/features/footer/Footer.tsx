import { profile } from "../../data/profile";
import { socialLinks } from "../../data/social";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-content">

          {/* Brand */}

          <div className="footer-brand">
            <h2>{profile.name}</h2>

            <p>
              DevOps Engineer specializing in Cloud Infrastructure,
              DevSecOps, CI/CD Automation, Terraform, Docker and Kubernetes.
            </p>
          </div>

          {/* Quick Links */}

          <div className="footer-links">
            <h3>Quick Links</h3>

            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Social Links */}

          <div className="footer-social">
            <h3>Connect</h3>

            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {currentYear} {profile.name}. All Rights Reserved.
          </p>

          <a
            href="#hero"
            className="back-to-top"
          >
            ↑ Back to Top
          </a>

        </div>

      </div>
    </footer>
  );
}