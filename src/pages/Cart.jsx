import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? (subtotal >= 100 ? 0 : 5.90) : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="container section">
        <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1>Votre Panier</h1>
          <p style={{ margin: '2rem 0' }}>Votre panier est vide</p>
          <button 
            onClick={() => navigate('/shop')}
            className="btn btn-primary"
          >
            Découvrir nos créations
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container section">
      <h1 className="text-center">Votre Panier</h1>

      <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '2rem', marginTop: '2rem' }}>
        {/* Liste des produits */}
        <div>
          {cart.map(item => (
            <div 
              key={item.id} 
              className="card"
              style={{ 
                padding: '1rem',
                marginBottom: '1rem',
                display: 'grid',
                gridTemplateColumns: '100px 1fr auto',
                gap: '1rem',
                alignItems: 'center'
              }}
            >
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
                <p style={{ color: 'var(--color-brown)', marginTop: '0.5rem' }}>
                  {item.price.toFixed(2)} €
                </p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="input"
                    style={{ width: '80px' }}
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn btn-secondary"
                  >
                    Supprimer
                  </button>
                </div>
              </div>

              <p style={{ 
                fontWeight: 'bold',
                fontSize: '1.2rem',
                color: 'var(--color-brown)'
              }}>
                {(item.price * item.quantity).toFixed(2)} €
              </p>
            </div>
          ))}
        </div>

        {/* Résumé de la commande */}
        <div>
          <div className="card" style={{ padding: '1.5rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Résumé</h2>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginBottom: '1rem'
            }}>
              <span>Sous-total</span>
              <span>{subtotal.toFixed(2)} €</span>
            </div>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginBottom: '1rem'
            }}>
              <span>Frais de port</span>
              <span>
                {shipping === 0 ? (
                  <span style={{ color: 'var(--color-green)' }}>Gratuit</span>
                ) : (
                  `${shipping.toFixed(2)} €`
                )}
              </span>
            </div>

            {shipping > 0 && (
              <p style={{ 
                fontSize: '0.9rem',
                color: 'var(--color-brown)',
                marginBottom: '1rem'
              }}>
                Plus que {(100 - subtotal).toFixed(2)} € d'achat pour la livraison gratuite !
              </p>
            )}

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginTop: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--color-beige)',
              fontWeight: 'bold',
              fontSize: '1.2rem'
            }}>
              <span>Total</span>
              <span>{total.toFixed(2)} €</span>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '1.5rem' }}
            >
              Passer la commande
            </button>

            <button
              onClick={() => navigate('/shop')}
              className="btn btn-secondary"
              style={{ width: '100%', marginTop: '1rem' }}
            >
              Continuer mes achats
            </button>
          </div>

          {/* Informations de livraison */}
          <div className="card" style={{ padding: '1.5rem', marginTop: '1rem' }}>
            <h3>Informations</h3>
            <ul style={{ marginTop: '1rem', lineHeight: '1.8' }}>
              <li>Livraison gratuite dès 100€ d'achat</li>
              <li>Expédition sous 3-5 jours ouvrés</li>
              <li>Emballage soigné et écologique</li>
              <li>Retours acceptés sous 14 jours</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 