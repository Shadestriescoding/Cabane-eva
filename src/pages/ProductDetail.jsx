import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Simulation de récupération des données produit
  useEffect(() => {
    const fetchProduct = () => {
      // Simuler une requête API
      const productData = {
        id: parseInt(id),
        name: "Suspension Macramé Bohème",
        category: "macrame",
        price: 89.90,
        images: [
          "/images/suspension-macrame.jpg",
          "/images/suspension-macrame-detail1.jpg",
          "/images/suspension-macrame-detail2.jpg",
          "/images/suspension-macrame-context.jpg"
        ],
        technique: "Double nœud plat et nœud spirale",
        difficulty: "★★★☆☆",
        makingTime: "~4h de création",
        materials: ["Coton naturel", "Bois flotté"],
        description: "Suspension murale en macramé, réalisée à la main avec du coton naturel et du bois flotté. Parfaite pour un style bohème chic.",
        dimensions: {
          height: "80 cm",
          width: "60 cm",
          depth: "5 cm"
        },
        care: "Dépoussiérer délicatement. Éviter l'exposition directe au soleil.",
        inStock: true,
        creationProcess: [
          "Sélection et préparation des matériaux",
          "Création de la structure de base",
          "Réalisation des nœuds décoratifs",
          "Finitions et contrôle qualité"
        ],
        shipping: {
          time: "2-3 jours ouvrés",
          method: "Colissimo avec suivi",
          price: 6.90
        }
      };
      setProduct(productData);
      setSelectedImage(0);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="container">
        <div className="loading">Chargement...</div>
      </div>
    );
  }

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= 10) {
      setQuantity(value);
    }
  };

  const addToCart = () => {
    // Logique d'ajout au panier à implémenter
    console.log(`Ajout de ${quantity} ${product.name} au panier`);
  };

  return (
    <div className="product-detail-container">
      <div className="container">
        {/* Fil d'Ariane */}
        <nav className="breadcrumb fade-in">
          <Link to="/">Accueil</Link>
          <span className="separator">/</span>
          <Link to="/boutique">Boutique</Link>
          <span className="separator">/</span>
          <span className="current">{product.name}</span>
        </nav>

        <div className="product-detail-grid">
          {/* Galerie d'images */}
          <div className="product-gallery fade-in">
            <div className="main-image-container">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="main-image"
              />
              <span className="handmade-badge">Fait main</span>
            </div>
            <div className="thumbnail-grid">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail-button ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${product.name} - vue ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Informations produit */}
          <div className="product-info-container fade-in">
            <span className="product-category">
              <i className="category-icon">
                {product.category === 'macrame' ? '🪢' : 
                 product.category === 'crochet' ? '🧶' : '🎋'}
              </i>
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </span>
            <h1>{product.name}</h1>
            <p className="price">{product.price.toFixed(2)} €</p>
            
            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="materials-section">
              <h3>Matériaux utilisés</h3>
              <div className="materials-tags">
                {product.materials.map((material, index) => (
                  <span key={index} className="materials-tag">{material}</span>
                ))}
              </div>
            </div>

            <div className="making-info">
              <div className="making-info-item">
                <span className="label">Temps de création</span>
                <span className="value">{product.makingTime}</span>
              </div>
              <div className="making-info-item">
                <span className="label">Difficulté</span>
                <span className="value">{product.difficulty}</span>
              </div>
            </div>

            {product.inStock ? (
              <div className="purchase-section">
                <div className="quantity-selector">
                  <label htmlFor="quantity">Quantité</label>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      value={quantity}
                      onChange={handleQuantityChange}
                      min="1"
                      max="10"
                    />
                    <button 
                      onClick={() => quantity < 10 && setQuantity(quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button onClick={addToCart} className="button button-primary add-to-cart-btn">
                  Ajouter au panier
                </button>
              </div>
            ) : (
              <p className="out-of-stock">Produit actuellement indisponible</p>
            )}

            {/* Informations supplémentaires */}
            <div className="additional-info">
              <div className="info-section">
                <h3>Dimensions</h3>
                <ul className="specs-list">
                  <li>Hauteur : {product.dimensions.height}</li>
                  <li>Largeur : {product.dimensions.width}</li>
                  <li>Profondeur : {product.dimensions.depth}</li>
                </ul>
              </div>

              <div className="info-section">
                <h3>Entretien</h3>
                <p>{product.care}</p>
              </div>

              <div className="info-section">
                <h3>Processus de création</h3>
                <ol className="creation-process">
                  {product.creationProcess.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="info-section">
                <h3>Livraison</h3>
                <ul className="shipping-info">
                  <li>Délai : {product.shipping.time}</li>
                  <li>Mode : {product.shipping.method}</li>
                  <li>Frais : {product.shipping.price.toFixed(2)} €</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 