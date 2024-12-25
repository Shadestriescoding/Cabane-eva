import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');

  // Simulation des données produits
  useEffect(() => {
    const fetchProducts = () => {
      const productsData = [
        {
          id: 1,
          name: "Suspension Murale en Crochet",
          category: "crochet",
          image: "./IMG/suspension_bois_crochet.jpg",
          technique: "Point relief et point ajouré",
          difficulty: "★★★★☆",
          makingTime: "~6h de création",
          materials: ["Coton naturel", "Bois flotté"],
          description: "Élégante suspension murale en crochet, associant la douceur du coton à la beauté naturelle du bois flotté. Une pièce unique qui apporte une touche de poésie à votre intérieur."
        },
        {
          id: 2,
          name: "Mobile Origami Poétique",
          category: "origami",
          image: "./IMG/mobile_origamis.jpg",
          technique: "Pliage traditionnel",
          difficulty: "★★★★☆",
          makingTime: "~3h de pliage",
          materials: ["Papier washi", "Fil naturel"],
          description: "Mobile décoratif en origami, créé avec du papier washi traditionnel. Chaque pliage est réalisé avec précision pour créer une composition aérienne et poétique."
        },
        {
          id: 3,
          name: "Collection Noël en Crochet",
          category: "crochet",
          image: "./IMG/deco_sapin_crochet_paindepice.jpg",
          technique: "Point fantaisie et relief",
          difficulty: "★★★★★",
          makingTime: "~4h par pièce",
          materials: ["Laine mérinos", "Coton bio"],
          description: "Décorations de Noël en crochet, inspirées des traditions hivernales. Chaque pièce est unique et apporte une touche de chaleur et d'authenticité à votre sapin."
        },
        {
          id: 4,
          name: "Légumes de Saison au Crochet",
          category: "crochet",
          image: "./IMG/legumes_crochet.jpg",
          technique: "Point serré et relief",
          difficulty: "★★★☆☆",
          makingTime: "~3h par légume",
          materials: ["Coton bio", "Rembourrage naturel"],
          description: "Collection de légumes au crochet, parfaits pour les jeux d'enfants ou une décoration originale. Réalisés en coton biologique avec un souci du détail."
        }
      ];
      setProducts(productsData);
      setFilteredProducts(productsData);
    };

    fetchProducts();
  }, []);

  // Filtrage des produits
  useEffect(() => {
    let filtered = [...products];

    // Filtre par catégorie
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }

    setFilteredProducts(filtered);
  }, [activeCategory, products]);

  return (
    <div className="shop-container">
      <section className="shop-hero">
        <div className="container">
          <h1 className="fade-in">Nos Créations</h1>
          <p className="shop-subtitle fade-in">
            Découvrez nos créations artisanales uniques et laissez-vous inspirer pour votre projet personnalisé
          </p>
          <div className="hero-cta fade-in">
            <Link to="/commande-personnalisee" className="button button-primary">
              Créer votre pièce unique
            </Link>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="shop-grid">
          {/* Filtres */}
          <aside className="shop-filters fade-in">
            <div className="filter-section">
              <h3>Catégories</h3>
              <div className="filter-options">
                <button 
                  className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('all')}
                >
                  Toutes les créations
                </button>
                <button 
                  className={`filter-btn ${activeCategory === 'macrame' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('macrame')}
                >
                  Macramé
                </button>
                <button 
                  className={`filter-btn ${activeCategory === 'crochet' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('crochet')}
                >
                  Crochet
                </button>
                <button 
                  className={`filter-btn ${activeCategory === 'origami' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('origami')}
                >
                  Origami
                </button>
              </div>
            </div>

            <div className="inspiration-section">
              <h3>Inspiration</h3>
              <p>
                Ces créations sont des exemples de notre savoir-faire. 
                Chaque pièce peut être personnalisée selon vos envies : dimensions, 
                couleurs, matériaux... Laissez libre cours à votre imagination !
              </p>
              <Link to="/commande-personnalisee" className="button button-secondary">
                Commander sur mesure
              </Link>
            </div>
          </aside>

          {/* Liste des produits */}
          <div className="products-list">
            <div className="products-grid">
              {filteredProducts.map(product => (
                <article key={product.id} className="product-card fade-in" data-category={product.category}>
                  <span className="handmade-badge">Fait main</span>
                  <span className="making-time">{product.makingTime}</span>
                  <div className="product-image-container zoom-container">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-overlay">
                      <Link to={`/produit/${product.id}`} className="button button-primary">
                        Voir les détails
                      </Link>
                    </div>
                    <div className="detail-zoom"></div>
                  </div>
                  <div className="technique-info">
                    Technique : {product.technique}
                    <br />
                    Difficulté : {product.difficulty}
                  </div>
                  <div className="product-info">
                    <span className="product-category">
                      <i className="category-icon">
                        {product.category === 'macrame' ? '🪢' : 
                         product.category === 'crochet' ? '🧶' : '🎋'}
                      </i>
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </span>
                    <h3>{product.name}</h3>
                    <div className="materials-tags">
                      {product.materials.map((material, index) => (
                        <span key={index} className="materials-tag">{material}</span>
                      ))}
                    </div>
                    <p className="product-details">{product.description}</p>
                    <Link to="/commande-personnalisee" className="button button-secondary">
                      Commander une création similaire
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop; 