import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useContext(CartContext);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Informations personnelles
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    // Adresse de livraison
    address: '',
    addressComplement: '',
    city: '',
    postalCode: '',
    country: 'France',
    // Informations de paiement
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal >= 100 ? 0 : 5.90;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="container section">
        <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1>Paiement</h1>
          <p style={{ margin: '2rem 0' }}>Votre panier est vide</p>
          <button 
            onClick={() => navigate('/shop')}
            className="btn btn-primary"
          >
            Retour à la boutique
          </button>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Ici, vous pourriez ajouter l'envoi à une API
      console.log('Commande validée:', { formData, cart, total });
      clearCart();
      navigate('/confirmation');
    }
  };

  const renderStepIndicator = () => (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center',
      marginBottom: '2rem'
    }}>
      {['Livraison', 'Paiement', 'Confirmation'].map((label, index) => (
        <div 
          key={label}
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: step > index ? 'var(--color-green)' : 
                       step === index + 1 ? 'var(--color-brown)' : 
                       'var(--color-beige)',
            color: step > index || step === index + 1 ? 'white' : 'var(--color-brown)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '1rem'
          }}>
            {index + 1}
          </div>
          <span style={{
            color: step > index || step === index + 1 ? 'var(--color-brown)' : 'var(--color-brown-light)',
            marginRight: '2rem'
          }}>
            {label}
          </span>
          {index < 2 && (
            <div style={{
              height: '1px',
              width: '2rem',
              background: 'var(--color-beige)',
              marginRight: '2rem'
            }} />
          )}
        </div>
      ))}
    </div>
  );

  const renderDeliveryForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">Nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
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
          <label htmlFor="phone" className="form-label">Téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="address" className="form-label">Adresse</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="addressComplement" className="form-label">Complément d'adresse</label>
        <input
          type="text"
          id="addressComplement"
          name="addressComplement"
          value={formData.addressComplement}
          onChange={handleChange}
          className="input"
        />
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
        <div className="form-group">
          <label htmlFor="city" className="form-label">Ville</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode" className="form-label">Code postal</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country" className="form-label">Pays</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="input"
            required
          >
            <option value="France">France</option>
            <option value="Belgique">Belgique</option>
            <option value="Suisse">Suisse</option>
            <option value="Luxembourg">Luxembourg</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '2rem' }}>
        Continuer vers le paiement
      </button>
    </form>
  );

  const renderPaymentForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="cardName" className="form-label">Nom sur la carte</label>
        <input
          type="text"
          id="cardName"
          name="cardName"
          value={formData.cardName}
          onChange={handleChange}
          className="input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="cardNumber" className="form-label">Numéro de carte</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          className="input"
          placeholder="1234 5678 9012 3456"
          required
        />
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="form-group">
          <label htmlFor="expiryDate" className="form-label">Date d'expiration</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className="input"
            placeholder="MM/AA"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv" className="form-label">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            className="input"
            placeholder="123"
            required
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '2rem' }}>
        Confirmer le paiement
      </button>
    </form>
  );

  const renderConfirmation = () => (
    <div className="text-center">
      <h2>Récapitulatif de votre commande</h2>
      <div style={{ margin: '2rem 0' }}>
        <p><strong>Livraison à :</strong></p>
        <p>{formData.firstName} {formData.lastName}</p>
        <p>{formData.address}</p>
        {formData.addressComplement && <p>{formData.addressComplement}</p>}
        <p>{formData.postalCode} {formData.city}</p>
        <p>{formData.country}</p>
      </div>
      <button 
        onClick={handleSubmit}
        className="btn btn-primary"
        style={{ width: '100%' }}
      >
        Valider la commande
      </button>
    </div>
  );

  return (
    <div className="container section">
      <h1 className="text-center">Paiement</h1>

      {renderStepIndicator()}

      <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        {/* Formulaire */}
        <div className="card" style={{ padding: '2rem' }}>
          {step === 1 && renderDeliveryForm()}
          {step === 2 && renderPaymentForm()}
          {step === 3 && renderConfirmation()}
        </div>

        {/* Résumé de la commande */}
        <div>
          <div className="card" style={{ padding: '1.5rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Résumé</h2>
            
            {cart.map(item => (
              <div 
                key={item.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '1rem'
                }}
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>{(item.price * item.quantity).toFixed(2)} €</span>
              </div>
            ))}

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              margin: '1rem 0',
              paddingTop: '1rem',
              borderTop: '1px solid var(--color-beige)'
            }}>
              <span>Sous-total</span>
              <span>{subtotal.toFixed(2)} €</span>
            </div>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginBottom: '1rem'
            }}>
              <span>Frais de port</span>
              <span>
                {shipping === 0 ? (
                  <span style={{ color: 'var(--color-green)' }}>Gratuit</span>
                ) : (
                  `${shipping.toFixed(2)} €`
                )}
              </span>
            </div>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginTop: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--color-beige)',
              fontWeight: 'bold',
              fontSize: '1.2rem'
            }}>
              <span>Total</span>
              <span>{total.toFixed(2)} €</span>
            </div>
          </div>

          {/* Informations de livraison */}
          <div className="card" style={{ padding: '1.5rem', marginTop: '1rem' }}>
            <h3>Informations</h3>
            <ul style={{ marginTop: '1rem', lineHeight: '1.8' }}>
              <li>Livraison gratuite dès 100€ d'achat</li>
              <li>Expédition sous 3-5 jours ouvrés</li>
              <li>Paiement 100% sécurisé</li>
              <li>Service client disponible</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 