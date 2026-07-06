import React from 'react';

export default function Skills() {
  const skillsList = [
    { name: 'Creative Design', level: 'Professional', value: 90, icon: 'bi-palette2' },
    { name: 'Frontend Development', level: 'Expert', value: 95, icon: 'bi-code-slash' },
    { name: 'Strategy & Planning', level: 'Advanced', value: 85, icon: 'bi-graph-up' },
    { name: 'Team Leadership', level: 'Professional', value: 88, icon: 'bi-people' },
    { name: 'Innovation', level: 'Advanced', value: 82, icon: 'bi-lightbulb' },
    { name: 'Technical Architecture', level: 'Expert', value: 92, icon: 'bi-gear' }
  ];

  return (
    <section id="skills" className="skills section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <p className="lead">Expertise refined through years of dedicated practice and continuous learning</p>
        </div>

        <div className="row g-4">
          {skillsList.map((skill, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="skill-item p-4 bg-white rounded shadow-sm h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="icon h4 mb-0" style={{ color: '#069169' }}><i className={`bi ${skill.icon}`}></i></div>
                  <h3 className="h6 mb-0 fw-bold">{skill.name}</h3>
                </div>
                <div className="skill-level mb-3">
                  <div className="d-flex justify-content-between small text-muted mb-1">
                    <span>{skill.level}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="progress" style={{ height: '6px' }}>
                    <div className="progress-bar" style={{ width: `${skill.value}%`, backgroundColor: '#069169' }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5 pt-4 align-items-center g-4">
          <div className="col-lg-6">
            <h4 className="fw-bold mb-3">Professional Certifications</h4>
            <div className="d-flex flex-column gap-2 text-muted">
              <div className="d-flex align-items-center gap-2"><i className="bi bi-award text-success"></i> Google UX Design Certificate</div>
              <div className="d-flex align-items-center gap-2"><i className="bi bi-award text-success"></i> AWS Certified Solutions Architect</div>
              <div className="d-flex align-items-center gap-2"><i className="bi bi-award text-success"></i> Certified Agile Project Manager</div>
            </div>
          </div>
          <div className="col-lg-6">
            <h5 className="fw-bold mb-3">Essential Tools</h5>
            <div className="d-flex flex-wrap gap-2">
              {['Figma', 'React', 'Node.js', 'Docker', 'TypeScript', 'MongoDB'].map((tool, i) => (
                <span className="badge bg-secondary-subtle text-secondary px-3 py-2 border rounded-pill" key={i}>{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}