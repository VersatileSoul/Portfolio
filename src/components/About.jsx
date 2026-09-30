import { summary, personalInfo, projects, skills, certifications } from '../data/portfolio';

const yearsOfExperience = Math.floor(
  (Date.now() - new Date(personalInfo.careerStart)) / (365.25 * 24 * 60 * 60 * 1000)
);

// "Engineering Practice" lists methodologies, not technologies, so it is left out of the count.
const technologyCount = new Set(
  skills.filter((g) => g.category !== 'Engineering Practice').flatMap((g) => g.items)
).size;

const stats = [
  { number: `${yearsOfExperience}+`, label: 'Years Experience' },
  { number: `${projects.length}`, label: 'Projects Built' },
  { number: `${Math.floor(technologyCount / 5) * 5}+`, label: 'Technologies' },
  { number: `${certifications.length}`, label: 'Certifications' },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">01.</span> About Me
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>{summary}</p>
            <div className="about-details">
              <div className="about-detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">📍 {personalInfo.location}</span>
              </div>
              <div className="about-detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">📧 {personalInfo.email}</span>
              </div>
              <div className="about-detail-item">
                <span className="detail-label">Current Role</span>
                <span className="detail-value">💼 {personalInfo.currentRole}</span>
              </div>
            </div>
          </div>
          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
