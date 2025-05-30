import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  
  return (
    <footer className="py-3 bg-dark text-white text-center">
      <div className="container">
        <ul className="list-unstyled d-flex justify-content-center mb-0">
          <li className="ms-4">
            <a href="/termos" className="text-decoration-none text-white">Termos de uso</a>
          </li>
          <li className="ms-4">
            <span 
              className="text-decoration-none text-white" 
              style={{ cursor: 'pointer' }}
              onClick={() => navigate("/Contato")}
            >
              Contato
            </span>
          </li>
        </ul>
        <div className="mt-3">
          <a href="https://instagram.com/pataformapet" className="text-decoration-none text-white me-3" target="_blank">Instagram</a>
          <a href="https://www.youtube.com/@Pataformapet" className="text-decoration-none text-white" target="_blank">Youtube</a>
        </div>
        <p className="mt-3 mb-0">&copy; 2025 Pataforma. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;