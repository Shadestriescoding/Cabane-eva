import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'Tous les produits' },
    { id: 'crochet', name: 'Crochet' },
    { id: 'macrame', name: 'Macramé' },
    { id: 'origami', name: 'Origami' }
  ];

  const sortOptions = [
    { id: 'newest', name: 'Plus récents' },
    { id: 'price-low', name: 'Prix croissant' },
    { id: 'price-high', name: 'Prix décroissant' },
    { id: 'name-asc', name: 'A à Z' },
    { id: 'name-desc', name: 'Z à A' }
  ];

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'newest':
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

  return (
    <div className="container section">
      <div className="text-center" style={{ marginBottom: '3rem' }}>
        <h1>La Boutique</h1>
        <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
          Découvrez mes créations artisanales, faites main avec amour
        </p>
      </div>

      {/* Filtres et Tri */}
      <div className="card" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          {/* Recherche */}
          <div className="form-group">
            <label htmlFor="search" className="form-label">Rechercher</label>
            <input
              type="text"
              id="search"
              className="input"
              placeholder="Rechercher un produit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Catégories */}
          <div className="form-group">
            <label htmlFor="category" className="form-label">Catégorie</label>
            <select
              id="category"
              className="input"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Tri */}
          <div className="form-group">
            <label htmlFor="sort" className="form-label">Trier par</label>
            <select
              id="sort"
              className="input"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Liste des produits */}
      {filteredProducts.length === 0 ? (
        <div className="text-center" style={{ padding: '3rem' }}>
          <h2>Aucun produit trouvé</h2>
          <p>Essayez de modifier vos critères de recherche</p>
        </div>
      ) : (
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
          {filteredProducts.map(product => (
            <Link 
              to={`/product/${product.id}`} 
              key={product.id}
              className="card product-card"
              style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
            >
              <div style={{ position: 'relative' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    borderRadius: '8px 8px 0 0'
                  }}
                />
                {!product.inStock && (
                  <div 
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'var(--color-rust)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      fontSize: '0.9rem'
                    }}
                  >
                    Rupture de stock
                  </div>
                )}
              </div>
              
              <div style={{ padding: '1rem' }}>
                <h3>{product.name}</h3>
                <p style={{ 
                  color: 'var(--color-brown)',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  marginTop: '0.5rem'
                }}>
                  {product.price.toFixed(2)} €
                </p>
                <p style={{ 
                  marginTop: '0.5rem',
                  fontSize: '0.9rem',
                  color: 'var(--color-brown-light)'
                }}>
                  {product.description.slice(0, 100)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop; 