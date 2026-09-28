import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import JuntaDirectiva from './components/JuntaDirectiva.jsx';
import './global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JuntaDirectiva />
  </StrictMode>,
);