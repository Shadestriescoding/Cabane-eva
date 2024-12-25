import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="container section text-center">
        <h1>Votre panier est vide</h1>
        <p style={{ margin: '2rem 0' }}>
          Découvrez nos créations artisanales uniques dans notre boutique.
        </p>
        <Link to="/shop" className="btn btn-primary">
          Voir la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="container section">
      <h1 className="text-center">Votre Panier</h1>

      {/* Liste des articles */}
      <div style={{ margin: '2rem 0' }}>
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            {/* Image et infos produit */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  borderRadius: '4px'
                }}
              />
              <div>
                <h3>{item.name}</h3>
                <p className="product-price">{item.price.toFixed(2)} €</p>
              </div>
            </div>

            {/* Quantité */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <label className="form-label">Quantité :</label>
              <select
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="input"
                style={{ width: 'auto' }}
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            {/* Sous-total et suppression */}
            <div style={{ textAlign: 'right' }}>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Sous-total : {(item.price * item.quantity).toFixed(2)} €</strong>
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="btn btn-secondary"
                style={{ padding: '0.5rem 1rem' }}
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total et actions */}
      <div style={{ 
        marginTop: '2rem',
        padding: '2rem',
        backgroundColor: 'var(--color-cream)',
        borderRadius: '8px'
      }}>
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h2>Total de votre commande</h2>
            <p className="product-price" style={{ fontSize: '1.5rem' }}>
              {getCartTotal().toFixed(2)} €
            </p>
          </div>
          <div>
            <button
              onClick={() => navigate('/checkout')}
              className="btn btn-primary"
              style={{ marginRight: '1rem' }}
            >
              Passer la commande
            </button>
            <Link to="/shop" className="btn btn-secondary">
              Continuer les achats
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 