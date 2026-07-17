import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import JuntaDirectiva from './components/juntadirectiva.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JuntaDirectiva />
  </StrictMode>,
);