import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container section">
        <h1>Produit non trouvé</h1>
        <button 
          onClick={() => navigate('/shop')}
          className="btn btn-primary"
        >
          Retourner à la boutique
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    // Optionnel : rediriger vers le panier
    // navigate('/cart');
  };

  return (
    <div className="container section">
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        alignItems: 'start'
      }}>
        {/* Image du produit */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          />
        </div>

        {/* Informations du produit */}
        <div>
          <h1>{product.name}</h1>
          <p className="product-price" style={{ fontSize: '1.5rem' }}>
            {product.price.toFixed(2)} €
          </p>
          
          <div style={{ margin: '2rem 0' }}>
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div style={{ margin: '2rem 0' }}>
            <h3>Caractéristiques</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <strong>Dimensions :</strong> {product.dimensions}
              </li>
              <li>
                <strong>Matériaux :</strong> {product.materials.join(', ')}
              </li>
              <li>
                <strong>Catégorie :</strong> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </li>
            </ul>
          </div>

          <div style={{ margin: '2rem 0' }}>
            <label className="form-label">Quantité :</label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="input"
              style={{ width: 'auto', marginRight: '1rem' }}
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>

            <button
              onClick={handleAddToCart}
              className="btn btn-primary"
              disabled={!product.inStock}
            >
              {product.inStock ? 'Ajouter au panier' : 'Rupture de stock'}
            </button>
          </div>

          {/* Retour à la boutique */}
          <button
            onClick={() => navigate('/shop')}
            className="btn btn-secondary"
          >
            Retourner à la boutique
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 