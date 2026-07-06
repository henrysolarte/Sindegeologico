import React from 'react';

export default function Stats() {
  const metrics = [
    { value: '15K+', label: 'Global Partners', desc: 'Collaborating with industry leaders worldwide.' },
    { value: '89%', label: 'Success Rate', desc: 'Consistently achieving outstanding outcomes.' },
    { value: '2.8M', label: 'Users Served', desc: 'Empowering millions with seamless experiences.' },
    { value: '24/7', label: 'Support Available', desc: 'Round-the-clock assistance ensuring peace of mind.' }
  ];

  return (
    <section id="stats" className="stats section py-5">
      <div className="container text-center mb-5">
        <h2 className="fw-bold">Measurable Excellence in Every Detail</h2>
        <p className="text-muted">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
      </div>

      <div className="container">
        <div className="row g-4 justify-content-center text-center">
          {metrics.map((m, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="p-4 border rounded shadow-sm bg-white h-100">
                <div className="display-5 fw-bold mb-2" style={{ color: '#069169' }}>{m.value}</div>
                <hr className="w-25 mx-auto my-3" style={{ borderColor: '#069169', borderWidth: '2px' }} />
                <h5 className="fw-bold small">{m.label}</h5>
                <p className="text-muted small mb-0">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="p-4 border rounded bg-light d-flex align-items-center gap-3">
              <div className="h2 mb-0" style={{ color: '#069169' }}><i className="bi bi-award"></i></div>
              <div>
                <h4 className="h6 fw-bold mb-1">Industry Recognition</h4>
                <p className="mb-0 small text-muted">Awarded "Excellence in Innovation" for three consecutive years by leading industry organizations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}