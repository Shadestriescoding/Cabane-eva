import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pourriez ajouter l'envoi à une API
    console.log('Message envoyé:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container section">
      <div className="text-center" style={{ marginBottom: '3rem' }}>
        <h1>Contact</h1>
        <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
          Une question ? Une suggestion ? N'hésitez pas à me contacter !
        </p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Informations de contact */}
        <div>
          <h2 style={{ marginBottom: '2rem' }}>Mes Coordonnées</h2>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3>Adresse</h3>
            <p>La Cabane d'Eva<br />123 Rue des Artisans<br />75001 Paris</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3>Email</h3>
            <p>contact@lacabanedeva.fr</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3>Téléphone</h3>
            <p>+33 (0)1 23 45 67 89</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3>Horaires</h3>
            <p>
              Lundi - Vendredi : 9h - 18h<br />
              Samedi : 10h - 16h<br />
              Dimanche : Fermé
            </p>
          </div>

          <div>
            <h3>Réseaux Sociaux</h3>
            <div className="social-links" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="https://instagram.com/lacabanedeva" target="_blank" rel="noopener noreferrer" className="social-link">
                Instagram
              </a>
              <a href="https://facebook.com/lacabanedeva" target="_blank" rel="noopener noreferrer" className="social-link">
                Facebook
              </a>
              <a href="https://pinterest.com/lacabanedeva" target="_blank" rel="noopener noreferrer" className="social-link">
                Pinterest
              </a>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div>
          {submitted ? (
            <div className="card text-center" style={{ padding: '2rem' }}>
              <h2>Message Envoyé !</h2>
              <p>
                Merci pour votre message. Je vous répondrai dans les plus brefs délais.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="btn btn-primary"
                style={{ marginTop: '1rem' }}
              >
                Envoyer un nouveau message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card" style={{ padding: '2rem' }}>
              <h2 style={{ marginBottom: '2rem' }}>Envoyez-moi un Message</h2>

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

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="input"
                  style={{ minHeight: '150px' }}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Envoyer
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact; 