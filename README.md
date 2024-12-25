# La Cabane d'Eva - Site E-commerce

Site e-commerce pour La Cabane d'Eva, proposant des créations artisanales en crochet, macramé et origami.

## Technologies utilisées

- React
- React Router
- Context API pour la gestion du panier
- CSS personnalisé

## Installation

```bash
# Cloner le repository
git clone https://github.com/Shadestriescoding/Cabane-eva.git

# Installer les dépendances
cd Cabane-eva
npm install

# Lancer le serveur de développement
npm run dev
```

## Structure du projet

```
src/
  ├── components/     # Composants réutilisables
  ├── context/       # Context API (panier)
  ├── data/          # Données statiques
  ├── pages/         # Pages de l'application
  └── styles/        # Fichiers CSS
```

## Fonctionnalités

- Catalogue de produits avec filtres et tri
- Système de panier
- Commandes personnalisées
- Interface administrateur (à venir)

## Déploiement

Le site est automatiquement déployé via GitHub Actions lors d'un push sur la branche main. 