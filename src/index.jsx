import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importa os componentes necessários para o roteamento e a aplicação principal
import './index.css';
import App from './App.js';
import Contact from './pages/Contato.jsx';
import './App.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap para estilizar os componentes com as classes do Bootstrap


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/*Envolve a aplicação com o BrowserRouter para habilitar o roteamento*/}
      <Routes> {/* Define as rotas da aplicação */} 
        <Route path="/" element={<App />} /> {/*  Rota para a página principal */}
        <Route path="/contato" element={<Contact />} /> {/* Rota para a página de contato */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);