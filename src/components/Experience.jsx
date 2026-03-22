import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">03.</span> Experience
        </h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <p className="timeline-company">
                      {exp.company} <span className="timeline-location">• {exp.location}</span>
                    </p>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-period">{exp.period}</span>
                    <span className={`timeline-badge ${exp.type}`}>
                      {exp.type === 'full-time' ? 'Full-time' : 'Internship'}
                    </span>
                  </div>
                </div>
                <ul className="timeline-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
