import React from 'react';

const About = () => {
  return (
    <div className="about-page-container">
      <section className="about-hero">
        <div className="container">
          <h1 className="fade-in">À Propos de La Cabane d'Eva</h1>
          <p className="about-subtitle fade-in">
            L'histoire d'une passion pour l'artisanat et la création
          </p>
        </div>
      </section>

      <div className="container">
        {/* Histoire */}
        <section className="about-section fade-in">
          <div className="about-content">
            <div className="about-text">
              <span className="section-tag">Notre Histoire</span>
              <h2>Une passion née de l'amour du fait main</h2>
              <p>
                La Cabane d'Eva est née d'une passion profonde pour l'artisanat traditionnel et 
                le travail minutieux des matières nobles. Depuis mon plus jeune âge, j'ai toujours 
                été fascinée par la création manuelle, les textures et les possibilités infinies 
                qu'offrent le macramé, le crochet et l'origami.
              </p>
              <p>
                Après des années de pratique et de perfectionnement, j'ai décidé de partager 
                cette passion en créant des pièces uniques qui racontent chacune leur propre 
                histoire. Chaque création est pensée et réalisée avec amour dans mon atelier, 
                en respectant les techniques traditionnelles tout en y apportant une touche 
                contemporaine.
              </p>
            </div>
            <div className="about-image">
              <img src="/IMG/atelier.jpg" alt="L'atelier de création" />
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="values-section fade-in">
          <span className="section-tag">Nos Valeurs</span>
          <h2>Ce qui nous anime au quotidien</h2>
          <div className="values-grid">
            <div className="value-card">
              <i className="value-icon">🌿</i>
              <h3>Authenticité</h3>
              <p>
                Chaque pièce est unique et reflète l'authenticité du travail artisanal. 
                Nous privilégions les matériaux naturels et les techniques traditionnelles.
              </p>
            </div>
            <div className="value-card">
              <i className="value-icon">💝</i>
              <h3>Passion</h3>
              <p>
                La passion guide chacun de nos gestes, de la sélection des matériaux à 
                la finition minutieuse de chaque création.
              </p>
            </div>
            <div className="value-card">
              <i className="value-icon">🤝</i>
              <h3>Proximité</h3>
              <p>
                Nous créons des liens privilégiés avec nos clients, en étant à l'écoute 
                de leurs souhaits et en les accompagnant dans leurs projets.
              </p>
            </div>
            <div className="value-card">
              <i className="value-icon">✨</i>
              <h3>Excellence</h3>
              <p>
                La qualité est au cœur de notre démarche, avec une attention particulière 
                portée aux détails et à la durabilité de nos créations.
              </p>
            </div>
          </div>
        </section>

        {/* Processus de création */}
        <section className="process-section fade-in">
          <span className="section-tag">Notre Savoir-faire</span>
          <h2>Le processus de création</h2>
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-number">01</span>
                <h3>Inspiration</h3>
                <p>
                  Chaque création commence par une phase d'inspiration, nourrie par la nature, 
                  l'art et les tendances contemporaines.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-number">02</span>
                <h3>Sélection des matériaux</h3>
                <p>
                  Nous choisissons méticuleusement des matériaux de qualité, en privilégiant 
                  les fibres naturelles et les matières durables.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-number">03</span>
                <h3>Création artisanale</h3>
                <p>
                  Chaque pièce est réalisée à la main, avec patience et précision, en 
                  respectant les techniques traditionnelles.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-number">04</span>
                <h3>Contrôle qualité</h3>
                <p>
                  Une attention particulière est portée aux finitions et à la qualité 
                  globale de chaque création avant l'envoi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement */}
        <section className="engagement-section fade-in">
          <div className="engagement-content">
            <div className="engagement-text">
              <span className="section-tag">Notre Engagement</span>
              <h2>Un artisanat responsable</h2>
              <p>
                Nous nous engageons à créer des pièces durables et respectueuses de 
                l'environnement. Chaque création est pensée pour traverser le temps et 
                s'inscrire dans une démarche de consommation responsable.
              </p>
              <ul className="engagement-list">
                <li>Matériaux naturels et écologiques</li>
                <li>Emballages recyclables</li>
                <li>Production locale et artisanale</li>
                <li>Pièces durables et intemporelles</li>
              </ul>
            </div>
            <div className="engagement-image">
              <img src="/IMG/materiaux.jpg" alt="Nos matériaux naturels" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 