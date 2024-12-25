import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('newest');

  // Simulation des données produits (à remplacer par une vraie API)
  useEffect(() => {
    const fetchProducts = () => {
      const productsData = [
        {
          id: 1,
          name: "Suspension Macramé Bohème",
          category: "macrame",
          price: 89.90,
          image: "/images/suspension-macrame.jpg",
          technique: "Double nœud plat et nœud spirale",
          difficulty: "★★★☆☆",
          makingTime: "~4h de création",
          materials: ["Coton naturel", "Bois flotté"],
          description: "Suspension murale en macramé, réalisée à la main avec du coton naturel et du bois flotté. Parfaite pour un style bohème chic."
        },
        {
          id: 2,
          name: "Mobile Origami Oiseaux",
          category: "origami",
          price: 45.90,
          image: "/images/mobile-origami.jpg",
          technique: "Pliage traditionnel Orizuru",
          difficulty: "★★★★☆",
          makingTime: "~2h de pliage",
          materials: ["Papier washi", "Bambou"],
          description: "Mobile décoratif composé de grues en origami, symboles de paix et de bonheur. Papier washi traditionnel importé du Japon."
        },
        {
          id: 3,
          name: "Couverture Crochet Automne",
          category: "crochet",
          price: 129.90,
          image: "/images/couverture-crochet.jpg",
          technique: "Bride, point écaille",
          difficulty: "★★★★★",
          makingTime: "~15h de crochet",
          materials: ["Laine mérinos", "Mohair"],
          description: "Couverture douillette réalisée en points fantaisie, mêlant laine mérinos et mohair pour une douceur incomparable."
        },
        // Ajoutez plus de produits ici
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

    // Filtre par prix
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Tri
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [activeCategory, priceRange, sortBy, products]);

  return (
    <div className="shop-container">
      <section className="shop-hero">
        <div className="container">
          <h1 className="fade-in">Notre Collection</h1>
          <p className="shop-subtitle fade-in">Découvrez nos créations artisanales uniques</p>
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

            <div className="filter-section">
              <h3>Prix</h3>
              <div className="price-range">
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                />
                <span>Jusqu'à {priceRange[1]}€</span>
              </div>
            </div>

            <div className="filter-section">
              <h3>Trier par</h3>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="newest">Plus récents</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
              </select>
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
                      <Link to={`/produit/${product.id}`} className="button button-primary">Voir le produit</Link>
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
                    <p className="price">{product.price.toFixed(2)} €</p>
                    <p className="product-details">{product.description}</p>
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