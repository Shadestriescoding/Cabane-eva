import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';

const Home = () => {
  // Sélectionner quelques produits pour la page d'accueil
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="container section">
      {/* Hero Section */}
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>La Cabane d'Eva</h1>
        <p style={{ 
          fontSize: '1.2rem', 
          maxWidth: '600px', 
          margin: '0 auto 2rem',
          color: 'var(--color-brown-light)'
        }}>
          Créations artisanales uniques en crochet, macramé et origami
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/shop" className="btn btn-primary">
            Découvrir la boutique
          </Link>
          <Link to="/custom-order" className="btn btn-secondary">
            Commander sur mesure
          </Link>
        </div>
      </div>

      {/* Catégories */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 className="text-center" style={{ marginBottom: '2rem' }}>Nos Créations</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <div className="card text-center" style={{ padding: '2rem' }}>
            <h3>Crochet</h3>
            <p style={{ margin: '1rem 0' }}>
              Des accessoires et décorations en crochet, réalisés avec des matériaux de qualité
              pour un rendu unique et chaleureux.
            </p>
            <Link to="/shop?category=crochet" className="btn btn-secondary">
              Voir les créations
            </Link>
          </div>
          <div className="card text-center" style={{ padding: '2rem' }}>
            <h3>Macramé</h3>
            <p style={{ margin: '1rem 0' }}>
              Des suspensions et décorations murales en macramé pour apporter une touche
              bohème à votre intérieur.
            </p>
            <Link to="/shop?category=macrame" className="btn btn-secondary">
              Voir les créations
            </Link>
          </div>
          <div className="card text-center" style={{ padding: '2rem' }}>
            <h3>Origami</h3>
            <p style={{ margin: '1rem 0' }}>
              Des mobiles et décorations en origami pour une ambiance poétique et délicate
              dans votre maison.
            </p>
            <Link to="/shop?category=origami" className="btn btn-secondary">
              Voir les créations
            </Link>
          </div>
        </div>
      </div>

      {/* Produits mis en avant */}
      <div>
        <h2 className="text-center" style={{ marginBottom: '2rem' }}>Nos Dernières Créations</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {featuredProducts.map(product => (
            <Link 
              key={product.id}
              to={`/product/${product.id}`}
              className="card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
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
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center" style={{ marginTop: '2rem' }}>
          <Link to="/shop" className="btn btn-primary">
            Voir toute la collection
          </Link>
        </div>
      </div>

      {/* Section À propos */}
      <div style={{ marginTop: '4rem' }}>
        <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>À Propos de La Cabane d'Eva</h2>
          <p style={{ maxWidth: '800px', margin: '1rem auto' }}>
            Passionnée par l'artisanat depuis toujours, je crée des pièces uniques
            entièrement faites main. Chaque création est pensée et réalisée avec soin,
            pour apporter une touche d'authenticité à votre intérieur.
          </p>
          <Link to="/about" className="btn btn-secondary" style={{ marginTop: '1rem' }}>
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 