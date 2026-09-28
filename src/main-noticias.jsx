import React from 'react'
import ReactDOM from 'react-dom/client'
import Noticias from './components/Noticias.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header hideVideo={true} />
    <Noticias />
    <Footer />
  </React.StrictMode>,
)
