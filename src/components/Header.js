import iconMindNegativa from '../images/iconMindNegativa.png'
import txtMindNegativa from '../images/txtMindNegativa.png'
import { Link } from 'react-router-dom'; // Certifique-se de importar o Link

export default function Header() {
    return (

<div>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          <img src={iconMindNegativa} className="ms-4 ms-xl-5 me-3" alt="Logo" height={40} />
          <img src={txtMindNegativa} alt="LogoTxt" height={20} />
        </Link>
        <button
          className="navbar-toggler me-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="custom-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end me-xl-5"
          id="navbarNav"
        >
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
            <li className="nav-item">
              <Link className="nav-link" to="/login">LOGIN</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    );
};

