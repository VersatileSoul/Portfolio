import { summary, personalInfo } from '../data/portfolio';

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
                <span className="detail-value">💼 Software Engineer at Ivalua</span>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">6+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">3</span>
              <span className="stat-label">Certifications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
