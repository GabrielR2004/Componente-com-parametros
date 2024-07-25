import React from "react";
import ReactDOM from 'react-dom';
import './index.css'

import ComponenteParametro from "./componentes/basicos/ComponenteParametro";

ReactDOM.render (
  <div>
    <ComponenteParametro 
    titulo ='Ola pessoas'
    subtitulo = 'Estou aqui com mais uma pratica que foi estudada ontem' />
  </div> , document.getElementById('root')
)