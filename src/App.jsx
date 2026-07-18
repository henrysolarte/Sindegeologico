import React from 'react';
import Header from './components/Header';
import QuienesSomos from './components/quienessomos';
import Historia from './components/historia';
import Mision from './components/mision';
import Vision from './components/vision';
import Clients from './components/Clients';
import Services from './components/Services';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <QuienesSomos />
        
        {/* PASAMOS TU GALERÍA DE IMÁGENES AQUÍ ARRIBA DE ABOUT */}
        <Services /> 
        
        <Historia />
        <Mision />
        <Vision />
        <Clients />
      </main>
    </>
  );
}

export default App;