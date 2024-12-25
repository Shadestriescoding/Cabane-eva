import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>La Cabane d'Eva</h3>
            <p>Créations artisanales uniques et personnalisées</p>
          </div>
          
          <div>
            <h3>Navigation</h3>
            <ul>
              <li>
                <Link to="/" className="nav-link">Accueil</Link>
              </li>
              <li>
                <Link to="/shop" className="nav-link">Boutique</Link>
              </li>
              <li>
                <Link to="/custom" className="nav-link">Sur Mesure</Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">À Propos</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3>Contact</h3>
            <p>Email: contact@lacabanedeva.fr</p>
            <p>Téléphone: 06 XX XX XX XX</p>
          </div>
          
          <div>
            <h3>Suivez-nous</h3>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                Facebook
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center" style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--color-beige)' }}>
          <p>&copy; {new Date().getFullYear()} La Cabane d'Eva. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 