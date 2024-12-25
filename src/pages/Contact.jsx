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
    // Logique d'envoi du formulaire à implémenter
    console.log('Message envoyé:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <div className="container">
          <h1 className="fade-in">Contactez-nous</h1>
          <p className="contact-subtitle fade-in">
            Une question, une demande spéciale ? N'hésitez pas à nous écrire
          </p>
        </div>
      </section>

      <div className="container">
        <div className="contact-grid">
          {/* Informations de contact */}
          <div className="contact-info fade-in">
            <div className="info-card">
              <h2>Restons en contact</h2>
              <p className="info-text">
                Je serai ravie de répondre à vos questions et de discuter de vos projets.
                N'hésitez pas à me contacter par le moyen qui vous convient le mieux.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <i className="contact-icon">📧</i>
                  <div className="method-content">
                    <h3>Email</h3>
                    <p>contact@lacabanedeva.fr</p>
                    <span className="response-time">Réponse sous 24-48h</span>
                  </div>
                </div>

                <div className="contact-method">
                  <i className="contact-icon">📱</i>
                  <div className="method-content">
                    <h3>Téléphone</h3>
                    <p>+33 6 12 34 56 78</p>
                    <span className="response-time">Du lundi au vendredi, 9h-18h</span>
                  </div>
                </div>

                <div className="contact-method">
                  <i className="contact-icon">📍</i>
                  <div className="method-content">
                    <h3>Atelier</h3>
                    <p>12 rue des Artisans<br />75011 Paris, France</p>
                    <span className="response-time">Sur rendez-vous uniquement</span>
                  </div>
                </div>
              </div>

              <div className="social-media">
                <h3>Suivez-nous</h3>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <i className="social-icon">📸</i>
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="social-link">
                    <i className="social-icon">📘</i>
                    <span>Facebook</span>
                  </a>
                  <a href="#" className="social-link">
                    <i className="social-icon">📌</i>
                    <span>Pinterest</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="faq-card">
              <h2>Questions fréquentes</h2>
              <div className="faq-list">
                <div className="faq-item">
                  <h3>Délais de fabrication</h3>
                  <p>Les délais varient selon la complexité de la création, généralement entre 1 et 3 semaines.</p>
                </div>
                <div className="faq-item">
                  <h3>Livraison</h3>
                  <p>Livraison en France métropolitaine via Colissimo, délai de 2-3 jours ouvrés.</p>
                </div>
                <div className="faq-item">
                  <h3>Retours et échanges</h3>
                  <p>Possibles sous 14 jours pour les articles non personnalisés.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="contact-form-container fade-in">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Envoyez-nous un message</h2>
              
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
                <label htmlFor="subject">Sujet</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="question">Question générale</option>
                  <option value="custom">Demande sur mesure</option>
                  <option value="wholesale">Demande professionnelle</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" className="button button-primary submit-btn">
                Envoyer le message
              </button>

              {submitted && (
                <div className="success-message">
                  <i className="success-icon">✓</i>
                  <p>Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 