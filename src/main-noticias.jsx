import React from 'react'
import ReactDOM from 'react-dom/client'
import Noticias from './components/Noticias.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Noticias />
    <Footer />
  </React.StrictMode>,
)
