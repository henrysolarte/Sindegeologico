import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HistoriaDesplegado from './components/historiadesplegado.jsx';
import './global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HistoriaDesplegado />
  </StrictMode>,
);
