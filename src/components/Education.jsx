import { education, certifications, leadership } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">05.</span> Education & More
        </h2>

        <div className="education-grid">
          {/* Education Card */}
          <div className="edu-card">
            <div className="edu-card-icon">🎓</div>
            <h3 className="edu-card-title">Education</h3>
            <div className="edu-degree">
              <h4>{education.degree}</h4>
              <p className="edu-college">{education.college}</p>
              <div className="edu-meta">
                <span className="edu-period">📅 {education.period}</span>
                <span className="edu-cgpa">📊 CGPA: {education.cgpa}</span>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="edu-card">
            <div className="edu-card-icon">📜</div>
            <h3 className="edu-card-title">Certifications</h3>
            <ul className="cert-list">
              {certifications.map((cert, i) => (
                <li key={i} className="cert-item">
                  <span className="cert-bullet">▹</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Leadership Card */}
          <div className="edu-card">
            <div className="edu-card-icon">🏆</div>
            <h3 className="edu-card-title">Leadership & Activities</h3>
            <ul className="cert-list">
              {leadership.map((item, i) => (
                <li key={i} className="cert-item">
                  <span className="cert-bullet">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
