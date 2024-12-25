import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const orderNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');

  return (
    <div className="container section">
      <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ 
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'var(--color-green)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 2rem'
        }}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white"
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <h1>Merci pour votre commande !</h1>
        <p style={{ fontSize: '1.2rem', margin: '1rem 0' }}>
          Votre commande n°{orderNumber} a bien été enregistrée.
        </p>

        <div className="card" style={{ padding: '2rem', margin: '3rem 0', textAlign: 'left' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Prochaines étapes</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div>
              <div style={{ 
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--color-brown)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                1
              </div>
              <h3>Confirmation</h3>
              <p style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
                Vous allez recevoir un email de confirmation avec les détails de votre commande.
              </p>
            </div>
            <div>
              <div style={{ 
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--color-brown)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                2
              </div>
              <h3>Préparation</h3>
              <p style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
                Je vais préparer votre commande avec soin dans les 3-5 jours ouvrés.
              </p>
            </div>
            <div>
              <div style={{ 
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--color-brown)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                3
              </div>
              <h3>Expédition</h3>
              <p style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
                Vous recevrez un email avec le numéro de suivi dès l'expédition de votre colis.
              </p>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: '2rem', marginBottom: '3rem', textAlign: 'left' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Informations importantes</h2>
          <ul style={{ lineHeight: '1.8' }}>
            <li>Un email de confirmation a été envoyé à votre adresse email</li>
            <li>Vous pouvez suivre l'état de votre commande avec le numéro {orderNumber}</li>
            <li>Pour toute question, n'hésitez pas à me contacter via le formulaire de contact</li>
            <li>Les retours sont acceptés sous 14 jours à réception de votre commande</li>
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            onClick={() => navigate('/shop')}
            className="btn btn-primary"
          >
            Continuer mes achats
          </button>
          <button 
            onClick={() => navigate('/contact')}
            className="btn btn-secondary"
          >
            Nous contacter
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation; 