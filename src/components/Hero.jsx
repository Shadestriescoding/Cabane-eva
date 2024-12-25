import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero section-texture">
      <div className="hero-content">
        <h1 className="hero-title fade-in">
          Artisanat d'Exception
        </h1>
        <p className="hero-subtitle fade-in">
          Créations artisanales uniques en crochet, macramé et origami.
          Chaque pièce raconte une histoire, la vôtre.
        </p>
        <div className="hero-buttons fade-in">
          <Link to="/boutique" className="button button-primary">
            Découvrir nos créations
          </Link>
          <Link to="/commande-personnalisee" className="button button-secondary">
            Créer votre pièce unique
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 