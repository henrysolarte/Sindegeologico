import React from 'react';

export default function About() {
  return (
    <section id="about" className="about section py-5">
      <div className="container section-title text-center mb-5">
        <h2>Historia</h2>
        <p className="lead text-muted">Find Out More About Us</p>
      </div>

      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="content">
              <h2>Building Excellence Through Innovation and Integrity</h2>
              <p className="lead my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="description text-muted">
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
              </div>

              <div className="stats-row d-flex justify-content-between mt-5 gap-3 text-center">
                <div>
                  <div className="h2 mb-0 fw-bold" style={{ color: '#069169' }}>15+</div>
                  <div className="small text-muted">Years of Excellence</div>
                </div>
                <div>
                  <div className="h2 mb-0 fw-bold" style={{ color: '#069169' }}>500+</div>
                  <div className="small text-muted">Satisfied Clients</div>
                </div>
                <div>
                  <div className="h2 mb-0 fw-bold" style={{ color: '#069169' }}>1200+</div>
                  <div className="small text-muted">Projects Completed</div>
                </div>
              </div>

              <div className="cta-section mt-5">
                <a href="#team" className="btn fw-bold p-0 text-decoration-none" style={{ color: '#069169' }}>
                  Meet Our Team <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="image-container position-relative">
              <img src="/assets/img/about/about-square-8.webp" alt="About Us" className="img-fluid rounded shadow" />
              <div className="image-overlay position-absolute top-0 start-0 m-4 p-3 bg-white rounded shadow-sm d-flex align-items-center gap-3">
                <i className="bi bi-award-fill" style={{ fontSize: '2rem', color: '#069169' }}></i>
                <div>
                  <h4 className="mb-0 h6 fw-bold">Award Winning</h4>
                  <p className="mb-0 small text-muted">Excellence in Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}