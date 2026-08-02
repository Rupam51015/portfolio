type Certification = {
  title: string;
  issuer: string;
  year: string;
  description: string;
  skills: string[];
  credential: string;
};

type Props = {
  certification: Certification;
};

export default function CertificationCard({ certification }: Props) {
  return (
    <div className="cert-card glass">

      <div className="cert-badge">
        🏅
      </div>

      <h3>{certification.title}</h3>

      <p className="cert-issuer">
        {certification.issuer} • {certification.year}
      </p>

      <p className="cert-description">
        {certification.description}
      </p>

      <div className="cert-skills">
        {certification.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <a
        href={certification.credential}
        target="_blank"
        rel="noreferrer"
        className="btn btn-primary"
      >
        View Credential
      </a>

    </div>
  );
}