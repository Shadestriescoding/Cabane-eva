import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import products from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container section text-center">
        <h2>Produit non trouvé</h2>
        <p>Désolé, ce produit n'existe pas.</p>
        <button 
          onClick={() => navigate('/shop')}
          className="btn btn-primary"
          style={{ marginTop: '1rem' }}
        >
          Retour à la boutique
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <div className="container section">
      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        {/* Image du produit */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>

        {/* Informations du produit */}
        <div>
          <h1>{product.name}</h1>
          
          <p style={{ 
            fontSize: '1.5rem', 
            color: 'var(--color-brown)',
            margin: '1rem 0'
          }}>
            {product.price.toFixed(2)} €
          </p>

          <div style={{ margin: '2rem 0' }}>
            <h3>Description</h3>
            <p style={{ lineHeight: '1.8' }}>{product.description}</p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '2rem 0' }}>
            <div>
              <h3>Dimensions</h3>
              <p>{product.dimensions}</p>
            </div>
            <div>
              <h3>Matériaux</h3>
              <p>{product.materials}</p>
            </div>
          </div>

          {product.inStock ? (
            <div>
              <div className="form-group" style={{ maxWidth: '200px', margin: '2rem 0' }}>
                <label htmlFor="quantity" className="form-label">Quantité</label>
                <select
                  id="quantity"
                  className="input"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <button 
                onClick={handleAddToCart}
                className="btn btn-primary"
                style={{ width: '100%' }}
                disabled={addedToCart}
              >
                {addedToCart ? 'Ajouté au panier !' : 'Ajouter au panier'}
              </button>

              {addedToCart && (
                <div 
                  style={{ 
                    marginTop: '1rem',
                    padding: '1rem',
                    background: 'var(--color-green)',
                    color: 'white',
                    borderRadius: '4px',
                    textAlign: 'center'
                  }}
                >
                  Produit ajouté au panier avec succès !
                </div>
              )}
            </div>
          ) : (
            <div 
              style={{ 
                padding: '1rem',
                background: 'var(--color-rust)',
                color: 'white',
                borderRadius: '4px',
                textAlign: 'center'
              }}
            >
              Ce produit est actuellement en rupture de stock
            </div>
          )}

          {/* Informations supplémentaires */}
          <div style={{ marginTop: '3rem' }}>
            <div className="card" style={{ padding: '1.5rem' }}>
              <h3>Informations importantes</h3>
              <ul style={{ marginTop: '1rem', lineHeight: '1.8' }}>
                <li>Création artisanale unique faite à la main</li>
                <li>Délai de fabrication : 3-5 jours ouvrés</li>
                <li>Livraison soignée avec emballage protégé</li>
                <li>Entretien facile (instructions fournies)</li>
              </ul>
            </div>
          </div>

          {/* Personnalisation */}
          <div style={{ marginTop: '2rem' }}>
            <p>
              Vous souhaitez une version personnalisée de ce produit ?{' '}
              <button 
                onClick={() => navigate('/custom-order')}
                className="btn btn-secondary"
                style={{ marginLeft: '0.5rem' }}
              >
                Commander sur mesure
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 