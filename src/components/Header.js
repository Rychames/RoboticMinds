import React from 'react';
import iconMindNegativa from '../images/iconMindNegativa.png';
import txtMindNegativa from '../images/txtMindNegativa.png';
import { Link } from 'react-router-dom';
import { checkLoginStatus } from '../scripts/loginRedirect.js';
import { logout } from '../scripts//loginRedirect.js';
import logoRobotic from '../images/Logotipo versão negativa.png'

export default function Header() {
  return (
    <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={iconMindNegativa} className="ms-4 ms-xl-5 me-3" alt="Logo" height={40} />
            <img src={txtMindNegativa} alt="LogoTxt" height={20} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="custom-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">INÍCIO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projetos">PROJETOS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sobre">SOBRE</Link>
              </li>
              <li className="nav-item dropdown">
                {checkLoginStatus() ? (
                  <>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bi bi-person-circle"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item text-center" to="/profile">Perfil</Link></li>  
                      <li><hr className="dropdown-divider"/></li>
                      <li><Link className="dropdown-item text-center" to="/administration/alunos">Área Administração</Link></li> 
                      <li><hr className="dropdown-divider"/></li>
                      <li>
                        <button className="dropdown-item text-center" onClick={logout}>Sair</button>
                      </li>
                    </ul>
                  </>
                ) : (
                  <Link className="nav-link" to="/login">LOGIN</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
