import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          La Cabane d'Eva
        </Link>
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Accueil
          </Link>
          <Link 
            to="/boutique" 
            className={`nav-link ${location.pathname === '/boutique' ? 'active' : ''}`}
          >
            Créations
          </Link>
          <Link 
            to="/commande-personnalisee" 
            className={`nav-link ${location.pathname === '/commande-personnalisee' ? 'active' : ''}`}
          >
            Sur Mesure
          </Link>
          <Link 
            to="/a-propos" 
            className={`nav-link ${location.pathname === '/a-propos' ? 'active' : ''}`}
          >
            À Propos
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 