import React, { useState } from 'react';

const CustomOrder = () => {
  const [formData, setFormData] = useState({
    category: '',
    description: '',
    dimensions: '',
    colors: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire à implémenter
    console.log('Formulaire soumis:', formData);
  };

  return (
    <div className="custom-order-container">
      <section className="custom-order-hero">
        <div className="container">
          <h1 className="fade-in">Création Sur Mesure</h1>
          <p className="custom-order-subtitle fade-in">
            Faites réaliser une pièce unique selon vos envies
          </p>
        </div>
      </section>

      <div className="container">
        <div className="custom-order-grid">
          {/* Informations */}
          <div className="custom-order-info fade-in">
            <div className="info-card">
              <h2>Comment ça marche ?</h2>
              <ol className="process-list">
                <li>
                  <span className="step-number">1</span>
                  <div className="step-content">
                    <h3>Décrivez votre projet</h3>
                    <p>Partagez vos idées, inspirations et contraintes techniques</p>
                  </div>
                </li>
                <li>
                  <span className="step-number">2</span>
                  <div className="step-content">
                    <h3>Devis personnalisé</h3>
                    <p>Je vous envoie une proposition détaillée sous 48h</p>
                  </div>
                </li>
                <li>
                  <span className="step-number">3</span>
                  <div className="step-content">
                    <h3>Création artisanale</h3>
                    <p>Votre pièce est réalisée avec soin selon vos spécifications</p>
                  </div>
                </li>
                <li>
                  <span className="step-number">4</span>
                  <div className="step-content">
                    <h3>Livraison soignée</h3>
                    <p>Votre création est emballée et expédiée avec le plus grand soin</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="guarantees-card">
              <h2>Nos Garanties</h2>
              <ul className="guarantees-list">
                <li>
                  <i className="guarantee-icon">✨</i>
                  <div className="guarantee-content">
                    <h3>Pièce Unique</h3>
                    <p>Création exclusive réalisée spécialement pour vous</p>
                  </div>
                </li>
                <li>
                  <i className="guarantee-icon">🤝</i>
                  <div className="guarantee-content">
                    <h3>Accompagnement</h3>
                    <p>Échanges réguliers tout au long du processus</p>
                  </div>
                </li>
                <li>
                  <i className="guarantee-icon">⭐</i>
                  <div className="guarantee-content">
                    <h3>Satisfaction</h3>
                    <p>Modifications possibles jusqu'à votre entière satisfaction</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Formulaire */}
          <form className="custom-order-form fade-in" onSubmit={handleSubmit}>
            <div className="form-section">
              <h2>Votre Projet</h2>
              
              <div className="form-group">
                <label htmlFor="category">Type de création</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionnez une catégorie</option>
                  <option value="macrame">Macramé</option>
                  <option value="crochet">Crochet</option>
                  <option value="origami">Origami</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="description">Description du projet</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet en détail..."
                  required
                  rows="4"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="dimensions">Dimensions souhaitées</label>
                <input
                  type="text"
                  id="dimensions"
                  name="dimensions"
                  value={formData.dimensions}
                  onChange={handleChange}
                  placeholder="Ex: 50cm x 70cm"
                />
              </div>

              <div className="form-group">
                <label htmlFor="colors">Couleurs désirées</label>
                <input
                  type="text"
                  id="colors"
                  name="colors"
                  value={formData.colors}
                  onChange={handleChange}
                  placeholder="Ex: tons naturels, beige, blanc cassé..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="budget">Budget approximatif</label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Votre budget en euros"
                />
              </div>

              <div className="form-group">
                <label htmlFor="timeline">Délai souhaité</label>
                <input
                  type="text"
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="Dans combien de temps souhaitez-vous recevoir votre création ?"
                />
              </div>
            </div>

            <div className="form-section">
              <h2>Vos Coordonnées</h2>
              
              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="additionalInfo">Informations complémentaires</label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Toute autre information utile pour votre projet..."
                  rows="3"
                ></textarea>
              </div>
            </div>

            <button type="submit" className="button button-primary submit-btn">
              Envoyer ma demande
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomOrder; 