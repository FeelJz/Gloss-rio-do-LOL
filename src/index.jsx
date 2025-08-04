import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa de 'react-dom/client' para React 18+
import App from './App'; // Importa o componente App como um export default
import './index.css'; // Se tiver um ficheiro CSS global, mantenha esta linha

// Para React 18 e superior:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);