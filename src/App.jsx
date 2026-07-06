import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Clients from './components/Clients';
import Services from './components/Services';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        
        {/* PASAMOS TU GALERÍA DE IMÁGENES AQUÍ ARRIBA DE ABOUT */}
        <Services /> 
        
        <About />
        <Skills />
        <Stats />
        <Clients />
      </main>
    </>
  );
}

export default App;