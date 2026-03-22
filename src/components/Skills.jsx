import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">02.</span> Skills & Technologies
        </h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <h3 className="skill-category">{group.category}</h3>
              </div>
              <div className="skill-items">
                {group.items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
