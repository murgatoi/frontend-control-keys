import React from 'react';
import * as ReactDOM from 'react-dom/client'
import App from './App'

import './css/index.css' // <-- Linha adicionada para carregar o Tailwind

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)