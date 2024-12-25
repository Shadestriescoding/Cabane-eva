import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  // Simulation de récupération des données produit
  useEffect(() => {
    const fetchProduct = () => {
      // Simuler une requête API
      const productData = {
        id: parseInt(id),
        name: "Suspension Murale en Crochet",
        category: "crochet",
        images: [
          "./IMG/suspension_bois_crochet.jpg",
          "./IMG/suspension_bois_crochet_2.jpg",
          "./IMG/deco_sapin_crochet.jpg",
          "./IMG/ensemble_patisserie_crochet.jpg"
        ],
        technique: "Point relief et point ajouré",
        difficulty: "★★★★☆",
        makingTime: "~6h de création",
        materials: ["Coton naturel", "Bois flotté"],
        description: "Élégante suspension murale en crochet, associant la douceur du coton à la beauté naturelle du bois flotté. Une pièce unique qui apporte une touche de poésie à votre intérieur.",
        dimensions: {
          height: "60 cm",
          width: "40 cm",
          depth: "3 cm"
        },
        care: "Dépoussiérer délicatement. Éviter l'exposition directe au soleil.",
        creationProcess: [
          "Sélection des matériaux naturels",
          "Crochet de la partie textile",
          "Assemblage avec le support en bois",
          "Finitions soignées"
        ],
        customization: [
          "Choix des dimensions",
          "Sélection des couleurs",
          "Type de support en bois",
          "Motifs personnalisés"
        ]
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

  return (
    <div className="product-detail-container">
      <div className="container">
        {/* Fil d'Ariane */}
        <nav className="breadcrumb fade-in">
          <Link to="/">Accueil</Link>
          <span className="separator">/</span>
          <Link to="/boutique">Créations</Link>
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

            <div className="customization-section">
              <h3>Personnalisation possible</h3>
              <ul className="customization-options">
                {product.customization.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
              <Link to="/commande-personnalisee" className="button button-primary custom-order-btn">
                Commander une création similaire
              </Link>
            </div>

            {/* Informations supplémentaires */}
            <div className="additional-info">
              <div className="info-section">
                <h3>Dimensions de l'exemple</h3>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 