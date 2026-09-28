import { useState, useEffect } from 'react';
import './Noticias.scss';

export default function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [noticiaActual, setNoticiaActual] = useState(0);
  const [cargando, setCargando] = useState(true);
  const [imagenesCargadas, setImagenesCargadas] = useState({});

  useEffect(() => {
    // Cargar noticias del archivo JSON
    fetch('/noticias-texto/noticias.json')
      .then(response => response.json())
      .then(data => {
        setNoticias(data);
        setCargando(false);
      })
      .catch(error => {
        console.error('Error cargando noticias:', error);
        setCargando(false);
      });
  }, []);

  const siguiente = () => {
    setNoticiaActual((prev) => (prev + 1) % noticias.length);
  };

  const anterior = () => {
    setNoticiaActual((prev) => (prev - 1 + noticias.length) % noticias.length);
  };

  const handleImageError = (id) => {
    setImagenesCargadas(prev => ({
      ...prev,
      [id]: false
    }));
  };

  const handleImageSuccess = (id) => {
    setImagenesCargadas(prev => ({
      ...prev,
      [id]: true
    }));
  };

  if (cargando) {
    return <div className="noticias-container">Cargando noticias...</div>;
  }

  if (noticias.length === 0) {
    return <div className="noticias-container">No hay noticias disponibles</div>;
  }

  const noticia = noticias[noticiaActual];
  const imagenCargada = imagenesCargadas[noticia.id] !== false;

  return (
    <section className="noticias-section">
      <div className="noticias-container">
        <div className="noticias-content">
          <div className="noticias-imagen">
            {imagenCargada ? (
              <img 
                src={noticia.imagen} 
                alt={noticia.titulo}
                onError={() => handleImageError(noticia.id)}
                onLoad={() => handleImageSuccess(noticia.id)}
              />
            ) : (
              <div className="imagen-placeholder">
                <i className="bi bi-image"></i>
                <p>Imagen no disponible</p>
              </div>
            )}
          </div>
          
          <div className="noticias-texto">
            <h2>{noticia.titulo}</h2>
            <p>{noticia.descripcion}</p>
            
            <div className="noticias-controles">
              <button className="btn-anterior" onClick={anterior}>
                ← Anterior
              </button>
              
              <span className="contador">
                {noticiaActual + 1} de {noticias.length}
              </span>
              
              <button className="btn-siguiente" onClick={siguiente}>
                Siguiente →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
