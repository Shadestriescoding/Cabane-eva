import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>La Cabane d'Eva</h1>
          <p>
            Découvrez des créations artisanales uniques en crochet, macramé et origami,
            faites avec amour pour embellir votre intérieur
          </p>
          <div className="hero-buttons">
            <Link to="/shop" className="btn btn-primary">
              Découvrir la boutique
            </Link>
            <Link to="/custom" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
              Création sur mesure
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">Nos Créations Populaires</h2>
          <div className="grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <h3 className="product-title">{product.name}</h3>
                <p className="product-price">{product.price.toFixed(2)} €</p>
                <Link to={`/shop/${product.id}`} className="btn btn-primary">
                  Voir le détail
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/shop" className="btn btn-secondary">
              Voir tous les produits
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>L'Histoire de La Cabane d'Eva</h2>
            <p style={{ marginBottom: '2rem' }}>
              Passionnée par l'artisanat depuis toujours, je crée des pièces uniques
              qui racontent une histoire et apportent une touche de poésie à votre intérieur.
            </p>
            <Link to="/about" className="btn btn-primary">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">Nos Catégories</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="card">
              <h3>Crochet</h3>
              <p>Accessoires et décorations en crochet fait main</p>
            </div>
            <div className="card">
              <h3>Macramé</h3>
              <p>Suspensions et décorations murales en macramé</p>
            </div>
            <div className="card">
              <h3>Origami</h3>
              <p>Sculptures et mobiles en papier plié</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home; 