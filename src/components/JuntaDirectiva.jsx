import React from 'react';
import Footer from './Footer';

export default function JuntaDirectiva() {
  return (
    <>
      <header id="header" className="header d-flex flex-column">
        <div className="branding d-flex align-items-center" style={{ background: 'linear-gradient(135deg, #069169 0%, #046a4f 100%)', padding: '15px 0', minHeight: '160px' }}>
          <div className="container-fluid d-flex align-items-center justify-content-between px-4">
            <div className="d-flex align-items-center gap-3">
              <a href="/" className="logo d-flex align-items-center text-decoration-none">
                <img src="/assets/img/logoSGC.jpg" alt="SGC Logo" style={{ height: '120px', width: 'auto', maxHeight: 'none', objectFit: 'contain' }} />
              </a>
            </div>

            <div className="d-none d-lg-block flex-grow-1 text-center px-4">
              <h2 className="mb-0" style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: '800',
                fontStyle: 'italic',
                fontSize: '1.7rem',
                color: '#ffffff',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)'
              }}>
                "Si estamos unidos, nadie queda atras"
              </h2>
            </div>

            <nav id="navmenu" className="navmenu">
              <ul className="d-flex gap-4 list-unstyled mb-0">
                <li><a href="/index.html" className="active text-white text-decoration-none">Home</a></li>
                <li><a href="/index.html#quienessomos" className="text-white text-decoration-none">Quienes Somos</a></li>
                <li><a href="/index.html#about" className="text-white text-decoration-none">Historia</a></li>
                <li><a href="#portfolio" className="text-white text-decoration-none">Mision</a></li>
                <li><a href="#team" className="text-white text-decoration-none">Vision</a></li>
                <li><a href="/formulario-sindegeologico.html" className="text-white text-decoration-none fw-bold">INSCRIBETE</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section id="juntadirectiva" className="hero section py-5" style={{ backgroundColor: '#e3f3f0', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="content">
                <h2 className="mb-4" style={{ color: '#046a4f', fontWeight: 'bold', fontSize: '2.5rem' }}>
                  Junta Directiva
                </h2>
                <p className="text-muted mb-3" style={{ lineHeight: '1.8', fontSize: '1.05rem', textAlign: 'justify' }}>
                  En el marco del fortalecimiento de la representación laboral y el ejercicio del derecho de asociación, se dio a conocer la conformación de los miembros que integran la nueva junta directiva de <strong>Sindegeológico</strong>.
                </p>

                <p className="text-muted mb-4" style={{ lineHeight: '1.8', fontSize: '1.05rem', textAlign: 'justify' }}>
                  A través del acto administrativo correspondiente, se oficializó la concesión de permiso sindical remunerado a los funcionarios designados, quienes asumirán la vocación de servicio y liderazgo en beneficio del colectivo de trabajadores:
                </p>

                <ul className="text-muted ps-4" style={{ lineHeight: '2.1', fontSize: '1.05rem' }}>
                  <li><strong>Mercedes Ortiz Montañez</strong> - Presidente</li>
                  <li><strong>Cristian Yobany Jiménez Sánchez</strong> - Vicepresidente</li>
                  <li><strong>Esperanza Sanabria Ortiz</strong> - Secretaria</li>
                  <li><strong>William Cifuentes Suárez</strong> - Fiscal</li>
                  <li><strong>Carlos Alberto Castillo Moreno</strong> - Tesorero</li>
                  <li><strong>Miguel Ángel Chía González</strong> - Vocal</li>
                  <li><strong>Andrés Stiven Lugo Cruz</strong> - Vocal</li>
                  <li><strong>Javier Danilo León Cuéllar</strong> - Vocal</li>
                  <li><strong>Henry Jesús Solarte Fajardo</strong> - Vocal</li>
                  <li><strong>Iván Camilo Ramírez Sanabria</strong> - Vocal</li>
                </ul>

                <p className="text-muted mt-4" style={{ lineHeight: '1.8', fontSize: '1.05rem', textAlign: 'justify' }}>
                  Este equipo directivo estará al frente de las actividades de gestión e intermediación en favor de sus afiliados durante el periodo estipulado para el desarrollo de sus funciones sindicales.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="image-container position-relative">
                <img
                  src="/assets/img/fotosind8.jpeg"
                  alt="Junta Directiva"
                  className="img-fluid rounded shadow-lg"
                  style={{ objectFit: 'cover', width: '100%', height: 'auto', maxHeight: '450px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}