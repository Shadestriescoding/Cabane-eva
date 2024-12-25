import React, { useState } from 'react';

const CustomOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    dimensions: '',
    colors: '',
    budget: '',
    deadline: '',
    description: '',
    reference_images: null
  });
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Crochet - Accessoire',
    'Crochet - Décoration',
    'Macramé - Suspension',
    'Macramé - Décoration Murale',
    'Origami - Mobile',
    'Origami - Décoration',
    'Autre'
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'reference_images') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pourriez ajouter l'envoi à une API
    console.log('Demande de création personnalisée:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: '',
      dimensions: '',
      colors: '',
      budget: '',
      deadline: '',
      description: '',
      reference_images: null
    });
  };

  return (
    <div className="container section">
      <div className="text-center" style={{ marginBottom: '3rem' }}>
        <h1>Création Sur Mesure</h1>
        <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
          Vous avez un projet spécifique en tête ? Je serai ravie de créer une pièce unique
          qui correspond exactement à vos envies.
        </p>
      </div>

      {/* Processus de commande */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 className="text-center" style={{ marginBottom: '2rem' }}>Comment ça marche ?</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          <div className="card text-center">
            <h3>1. Demande</h3>
            <p>Remplissez le formulaire avec vos souhaits et inspirations.</p>
          </div>
          <div className="card text-center">
            <h3>2. Échange</h3>
            <p>Je vous contacte pour affiner les détails de votre projet.</p>
          </div>
          <div className="card text-center">
            <h3>3. Devis</h3>
            <p>Je vous envoie un devis détaillé et un planning de réalisation.</p>
          </div>
          <div className="card text-center">
            <h3>4. Création</h3>
            <p>Une fois le devis validé, je commence la création de votre pièce.</p>
          </div>
        </div>
      </div>

      {/* Formulaire de commande */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {submitted ? (
          <div className="card text-center" style={{ padding: '2rem' }}>
            <h2>Demande Envoyée !</h2>
            <p>
              Merci pour votre demande de création personnalisée. Je vous contacterai
              dans les 48h pour discuter de votre projet en détail.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="btn btn-primary"
              style={{ marginTop: '1rem' }}
            >
              Faire une nouvelle demande
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card" style={{ padding: '2rem' }}>
            {/* Informations personnelles */}
            <h3 style={{ marginBottom: '1.5rem' }}>Vos Informations</h3>
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>
            </div>

            {/* Détails du projet */}
            <h3 style={{ marginBottom: '1.5rem' }}>Détails de votre Projet</h3>
            <div className="form-group">
              <label htmlFor="category" className="form-label">Type de Création</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="input"
                required
              >
                <option value="">Sélectionnez une catégorie</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label htmlFor="dimensions" className="form-label">Dimensions Souhaitées</label>
                <input
                  type="text"
                  id="dimensions"
                  name="dimensions"
                  value={formData.dimensions}
                  onChange={handleChange}
                  className="input"
                  placeholder="ex: 50cm x 30cm"
                />
              </div>
              <div className="form-group">
                <label htmlFor="colors" className="form-label">Couleurs Désirées</label>
                <input
                  type="text"
                  id="colors"
                  name="colors"
                  value={formData.colors}
                  onChange={handleChange}
                  className="input"
                  placeholder="ex: tons beiges et bruns"
                />
              </div>
            </div>

            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label htmlFor="budget" className="form-label">Budget Approximatif</label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="input"
                  placeholder="ex: 100-150€"
                />
              </div>
              <div className="form-group">
                <label htmlFor="deadline" className="form-label">Date Souhaitée</label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description" className="form-label">Description Détaillée</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="input"
                style={{ minHeight: '150px' }}
                placeholder="Décrivez votre projet en détail : style, utilisation prévue, inspirations..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="reference_images" className="form-label">Images de Référence</label>
              <input
                type="file"
                id="reference_images"
                name="reference_images"
                onChange={handleChange}
                className="input"
                accept="image/*"
              />
              <small style={{ display: 'block', marginTop: '0.5rem', color: 'var(--color-brown)' }}>
                Vous pouvez ajouter une image d'inspiration (optionnel)
              </small>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              Envoyer ma demande
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CustomOrder; 