import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="nav-logo">
          La Cabane d'Eva
        </Link>
        
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/shop" className="nav-link">
              Boutique
            </Link>
          </li>
          <li>
            <Link to="/custom" className="nav-link">
              Sur Mesure
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              À Propos
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              Panier ({cartItemsCount})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 