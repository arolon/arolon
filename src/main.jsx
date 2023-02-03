import React from 'react'
import ReactDOM from 'react-dom/client'
import Contenido from './Contenido'
import BarraSuperior from './BarraSuperior'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BarraSuperior/>
    <Contenido />
  </React.StrictMode>,
)
