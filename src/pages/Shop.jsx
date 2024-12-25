import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const categories = ['all', 'crochet', 'macrame', 'origami'];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' ? true : product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="container">
      <section className="section">
        <h1 className="text-center">Notre Boutique</h1>
        
        {/* Filtres et tri */}
        <div className="flex justify-between items-center mb-8" style={{ margin: '2rem 0' }}>
          <div>
            <label className="form-label">Catégorie : </label>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input"
              style={{ width: 'auto', marginLeft: '0.5rem' }}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="form-label">Trier par : </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input"
              style={{ width: 'auto', marginLeft: '0.5rem' }}
            >
              <option value="default">Par défaut</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="name">Nom</option>
            </select>
          </div>
        </div>

        {/* Liste des produits */}
        <div className="grid">
          {sortedProducts.map(product => (
            <div key={product.id} className="card product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">{product.price.toFixed(2)} €</p>
              <p style={{ marginBottom: '1rem' }}>
                {product.description.substring(0, 100)}...
              </p>
              <div style={{ marginTop: 'auto' }}>
                <Link 
                  to={`/shop/${product.id}`}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Voir le détail
                </Link>
              </div>
            </div>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <p className="text-center">
            Aucun produit ne correspond à vos critères.
          </p>
        )}
      </section>
    </div>
  );
};

export default Shop; 