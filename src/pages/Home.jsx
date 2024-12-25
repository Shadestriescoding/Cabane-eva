import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content fade-in">
          <span className="pre-title">Artisanat d'exception</span>
          <h1>La Cabane d'Eva</h1>
          <p className="hero-subtitle">Créations artisanales uniques en crochet, macramé et origami</p>
          <div className="hero-buttons">
            <Link to="/boutique" className="button button-primary">Explorer la collection</Link>
            <Link to="/sur-mesure" className="button button-secondary">Création sur mesure</Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro container fade-in">
        <div className="intro-content">
          <span className="section-tag">Notre Savoir-faire</span>
          <h2>L'art de la création artisanale</h2>
          <p className="intro-text">Chaque pièce est créée à la main avec passion et minutie, utilisant des matériaux soigneusement sélectionnés pour leur qualité et leur authenticité.</p>
        </div>
      </section>

      {/* Catégories */}
      <section className="categories container">
        <div className="categories-header fade-in">
          <span className="section-tag">Nos Spécialités</span>
          <h2>Découvrez nos créations</h2>
        </div>
        <div className="categories-grid">
          <div className="category-card fade-in">
            <div className="category-image">
              <img src="/images/category-crochet.jpg" alt="Créations en crochet" />
            </div>
            <div className="category-content">
              <h3>Crochet</h3>
              <p>Des accessoires et décorations en crochet, réalisés avec des matériaux nobles pour un rendu unique et chaleureux.</p>
              <Link to="/boutique?category=crochet" className="button button-secondary">Découvrir</Link>
            </div>
          </div>
          <div className="category-card fade-in">
            <div className="category-image">
              <img src="/images/category-macrame.jpg" alt="Créations en macramé" />
            </div>
            <div className="category-content">
              <h3>Macramé</h3>
              <p>Des suspensions et décorations murales en macramé pour une touche bohème raffinée dans votre intérieur.</p>
              <Link to="/boutique?category=macrame" className="button button-secondary">Découvrir</Link>
            </div>
          </div>
          <div className="category-card fade-in">
            <div className="category-image">
              <img src="/images/category-origami.jpg" alt="Créations en origami" />
            </div>
            <div className="category-content">
              <h3>Origami</h3>
              <p>Des mobiles et décorations en origami pour une ambiance poétique et délicate dans votre espace.</p>
              <Link to="/boutique?category=origami" className="button button-secondary">Découvrir</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dernières Créations */}
      <section className="latest-products">
        <div className="container">
          <div className="products-header fade-in">
            <span className="section-tag">Nouveautés</span>
            <h2>Nos dernières créations</h2>
          </div>
          <div className="products-grid">
            <article className="product-card fade-in" data-category="macrame">
              <span className="handmade-badge">Fait main</span>
              <span className="making-time">~4h de création</span>
              <div className="product-image-container zoom-container">
                <img src="/images/suspension-macrame.jpg" alt="Suspension Macramé Bohème" className="product-image" />
                <div className="product-overlay">
                  <Link to="/produit/suspension-macrame" className="button button-primary">Voir le produit</Link>
                </div>
                <div className="detail-zoom"></div>
              </div>
              <div className="technique-info">
                Technique : Double nœud plat et nœud spirale
                <br />
                Difficulté : ★★★☆☆
              </div>
              <div className="product-info">
                <span className="product-category">
                  <i className="category-icon">🪢</i>
                  Macramé
                </span>
                <h3>Suspension Macramé Bohème</h3>
                <div className="materials-tags">
                  <span className="materials-tag">Coton naturel</span>
                  <span className="materials-tag">Bois flotté</span>
                </div>
                <p className="price">89.90 €</p>
                <p className="product-details">Suspension murale en macramé, réalisée à la main avec du coton naturel et du bois flotté. Parfaite pour un style bohème chic.</p>
              </div>
            </article>

            <article className="product-card fade-in" data-category="origami">
              <span className="handmade-badge">Fait main</span>
              <span className="making-time">~2h de pliage</span>
              <div className="product-image-container zoom-container">
                <img src="/images/mobile-origami.jpg" alt="Mobile Origami Oiseaux" className="product-image" />
                <div className="product-overlay">
                  <Link to="/produit/mobile-origami" className="button button-primary">Voir le produit</Link>
                </div>
                <div className="detail-zoom"></div>
              </div>
              <div className="technique-info">
                Technique : Pliage traditionnel Orizuru
                <br />
                Difficulté : ★★★★☆
              </div>
              <div className="product-info">
                <span className="product-category">
                  <i className="category-icon">🎋</i>
                  Origami
                </span>
                <h3>Mobile Origami Oiseaux</h3>
                <div className="materials-tags">
                  <span className="materials-tag">Papier washi</span>
                  <span className="materials-tag">Bambou</span>
                </div>
                <p className="price">45.90 €</p>
                <p className="product-details">Mobile décoratif composé de grues en origami, symboles de paix et de bonheur. Papier washi traditionnel importé du Japon.</p>
              </div>
            </article>

            <article className="product-card fade-in" data-category="crochet">
              <span className="handmade-badge">Fait main</span>
              <span className="making-time">~15h de crochet</span>
              <div className="product-image-container zoom-container">
                <img src="/images/couverture-crochet.jpg" alt="Couverture Crochet Automne" className="product-image" />
                <div className="product-overlay">
                  <Link to="/produit/couverture-crochet" className="button button-primary">Voir le produit</Link>
                </div>
                <div className="detail-zoom"></div>
              </div>
              <div className="technique-info">
                Points utilisés : Bride, point écaille
                <br />
                Difficulté : ★★★★★
              </div>
              <div className="product-info">
                <span className="product-category">
                  <i className="category-icon">🧶</i>
                  Crochet
                </span>
                <h3>Couverture Crochet Automne</h3>
                <div className="materials-tags">
                  <span className="materials-tag">Laine mérinos</span>
                  <span className="materials-tag">Mohair</span>
                </div>
                <p className="price">129.90 €</p>
                <p className="product-details">Couverture douillette réalisée en points fantaisie, mêlant laine mérinos et mohair pour une douceur incomparable. Parfaite pour les soirées d'automne.</p>
              </div>
            </article>
          </div>
          <div className="text-center fade-in">
            <Link to="/boutique" className="button button-secondary">Découvrir toute la collection</Link>
          </div>
        </div>
      </section>

      {/* À Propos */}
      <section className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image fade-in">
              <img src="/images/atelier.jpg" alt="Notre atelier" />
            </div>
            <div className="about-content fade-in">
              <span className="section-tag">Notre Histoire</span>
              <h2>À Propos de La Cabane d'Eva</h2>
              <p>Passionnée par l'artisanat depuis toujours, je crée des pièces uniques entièrement faites main. Chaque création est pensée et réalisée avec soin, pour apporter une touche d'authenticité à votre intérieur.</p>
              <Link to="/a-propos" className="button button-secondary">En savoir plus</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content fade-in">
            <span className="section-tag">Restez informé</span>
            <h2>Inscrivez-vous à notre newsletter</h2>
            <p>Recevez en avant-première nos nouvelles créations et inspirations</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Votre adresse email" className="newsletter-input" />
              <button type="submit" className="button button-primary">S'inscrire</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 