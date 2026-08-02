const timeline = [

  {
    year: "2022",
    title: "Joined Cognizant",
  },

  {
    year: "2023",
    title: "Cloud Infrastructure Engineer",
  },

  {
    year: "2024",
    title: "Terraform Automation",
  },

  {
    year: "2025",
    title: "Kubernetes & DevSecOps",
  },

  {
    year: "2026",
    title: "AWS Certified Solutions Architect",
  },

];

export default function Timeline() {

  return (

    <div className="timeline glass">

      <h3>Career Journey</h3>

      {timeline.map((item) => (

        <div
          key={item.year}
          className="timeline-item"
        >

          <div className="timeline-dot"></div>

          <div>

            <h4>{item.year}</h4>

            <p>{item.title}</p>

          </div>

        </div>

      ))}

    </div>

  );

}