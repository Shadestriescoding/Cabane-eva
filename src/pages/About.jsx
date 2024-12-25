import React from 'react';

const About = () => {
  return (
    <div className="container section">
      <div className="text-center" style={{ marginBottom: '3rem' }}>
        <h1>À Propos</h1>
        <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
          Découvrez l'histoire de La Cabane d'Eva et ma passion pour l'artisanat
        </p>
      </div>

      {/* Histoire et Présentation */}
      <div style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
        <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
          <h2>Mon Histoire</h2>
          <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
            Bonjour, je suis Eva ! Depuis mon plus jeune âge, j'ai toujours été fascinée par 
            l'art de créer de mes mains. Cette passion m'a naturellement conduite à explorer 
            différentes techniques artisanales, en commençant par le crochet, que ma grand-mère 
            m'a enseigné quand j'étais petite.
          </p>
          <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
            Au fil des années, j'ai élargi mon horizon créatif en découvrant le macramé et 
            l'origami. Chaque technique m'apporte quelque chose d'unique : la douceur et le 
            confort du crochet, l'élégance et la texture du macramé, la précision et la poésie 
            de l'origami.
          </p>
        </div>

        <div className="card" style={{ padding: '2rem' }}>
          <h2>Ma Philosophie</h2>
          <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
            Je crois profondément en la valeur des objets faits main. Chaque pièce que je crée 
            est unique et porte en elle une histoire, du temps, et beaucoup d'amour. Je choisis 
            méticuleusement mes matériaux pour leur qualité et leur durabilité, privilégiant 
            autant que possible des sources éco-responsables.
          </p>
          <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
            La Cabane d'Eva est née de mon désir de partager cette passion et de créer des 
            pièces uniques qui apportent chaleur et personnalité à votre intérieur. Chaque 
            création est pensée et réalisée avec soin, dans mon atelier parisien.
          </p>
        </div>
      </div>

      {/* Valeurs et Engagements */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 className="text-center" style={{ marginBottom: '2rem' }}>Mes Valeurs</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <div className="card text-center" style={{ padding: '2rem' }}>
            <h3>Artisanat Authentique</h3>
            <p style={{ marginTop: '1rem' }}>
              Chaque pièce est entièrement réalisée à la main, avec attention et passion, 
              garantissant un produit unique et de qualité.
            </p>
          </div>
          <div className="card text-center" style={{ padding: '2rem' }}>
            <h3>Éco-responsabilité</h3>
            <p style={{ marginTop: '1rem' }}>
              Je sélectionne des matériaux durables et respectueux de l'environnement, 
              privilégiant les circuits courts et les emballages écologiques.
            </p>
          </div>
          <div className="card text-center" style={{ padding: '2rem' }}>
            <h3>Sur Mesure</h3>
            <p style={{ marginTop: '1rem' }}>
              Je crée des pièces personnalisées adaptées à vos envies et à votre intérieur, 
              pour des créations vraiment uniques.
            </p>
          </div>
        </div>
      </div>

      {/* Techniques et Savoir-faire */}
      <div>
        <h2 className="text-center" style={{ marginBottom: '2rem' }}>Mes Techniques</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <div className="card" style={{ padding: '2rem' }}>
            <h3>Crochet</h3>
            <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
              Le crochet permet de créer des pièces douces et confortables, parfaites pour 
              les accessoires et la décoration d'intérieur. Je travaille avec des fils de 
              qualité pour garantir la durabilité de mes créations.
            </p>
          </div>
          <div className="card" style={{ padding: '2rem' }}>
            <h3>Macramé</h3>
            <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
              Art ancestral des nœuds, le macramé apporte texture et élégance à la décoration. 
              Je crée principalement des suspensions et des décorations murales dans un style 
              bohème et naturel.
            </p>
          </div>
          <div className="card" style={{ padding: '2rem' }}>
            <h3>Origami</h3>
            <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
              L'art du pliage japonais me permet de créer des pièces délicates et poétiques. 
              Je réalise des mobiles et des décorations murales qui apportent légèreté et 
              originalité à votre intérieur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 