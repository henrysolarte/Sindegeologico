import React from 'react';
import './VideoPresentation.scss';

export default function VideoPresentation() {
  return (
    <section className="video-presentation">
      <video 
        className="presentation-video" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/assets/video/video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </section>
  );
}
