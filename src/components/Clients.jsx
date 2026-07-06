import React from 'react';

export default function Clients() {
  return (
    <section id="clients" className="clients section py-4 bg-light">
      <div className="container">
        <div className="row align-items-center g-4 justify-content-center text-center">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div className="col-4 col-md-2" key={num}>
              <img src={`/assets/img/clients/clients-${num}.webp`} className="img-fluid opacity-75" alt={`Client ${num}`} style={{ filter: 'grayscale(100%)', maxWidth: '100px' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}