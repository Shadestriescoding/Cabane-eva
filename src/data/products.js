const products = [
  {
    id: 1,
    name: "Suspension Macramé Bohème",
    price: 89.90,
    description: "Magnifique suspension en macramé réalisée à la main avec de la corde en coton naturel. Son style bohème et ses franges apporteront une touche de douceur et d'authenticité à votre intérieur. Parfaite pour mettre en valeur vos plantes ou comme simple élément décoratif.",
    image: "/images/macrame-1.jpg",
    category: "macrame",
    dimensions: "L: 60cm, H: 80cm",
    materials: "Corde en coton naturel, anneau en bois",
    inStock: true,
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    name: "Mobile Origami Oiseaux",
    price: 45.90,
    description: "Délicat mobile composé d'oiseaux en origami, créé avec du papier japonais de haute qualité. Chaque oiseau est plié avec soin pour créer un ensemble harmonieux qui dansera au gré des courants d'air. Une pièce poétique parfaite pour une chambre d'enfant ou un espace zen.",
    image: "/images/origami-1.jpg",
    category: "origami",
    dimensions: "Ø: 30cm, H: 40cm",
    materials: "Papier washi japonais, fil de coton",
    inStock: true,
    createdAt: "2024-01-14"
  },
  {
    id: 3,
    name: "Couverture Crochet Automne",
    price: 129.90,
    description: "Couverture douillette réalisée au crochet dans des tons automnaux chaleureux. Confectionnée avec une laine douce et de qualité, elle vous tiendra chaud tout en apportant une touche décorative à votre canapé ou votre lit. Chaque point est travaillé avec soin pour créer un motif unique.",
    image: "/images/crochet-1.jpg",
    category: "crochet",
    dimensions: "130cm x 170cm",
    materials: "Laine mérinos, mohair",
    inStock: true,
    createdAt: "2024-01-13"
  },
  {
    id: 4,
    name: "Guirlande Origami Étoiles",
    price: 34.90,
    description: "Guirlande lumineuse ornée d'étoiles en origami, créée avec du papier aux reflets nacrés. Les étoiles diffusent une douce lumière créant une ambiance chaleureuse et féerique. Idéale pour une décoration de fête ou pour illuminer une pièce toute l'année.",
    image: "/images/origami-2.jpg",
    category: "origami",
    dimensions: "Longueur: 2m, 15 étoiles",
    materials: "Papier nacré, LED blanc chaud",
    inStock: false,
    createdAt: "2024-01-12"
  },
  {
    id: 5,
    name: "Pochette Crochet Bohème",
    price: 39.90,
    description: "Élégante pochette au crochet dans un style bohème chic. Parfaite pour ranger vos petits objets ou comme trousse de toilette. Son motif unique et ses finitions soignées en font un accessoire à la fois pratique et décoratif.",
    image: "/images/crochet-2.jpg",
    category: "crochet",
    dimensions: "25cm x 15cm",
    materials: "Coton peigné, doublure coton",
    inStock: true,
    createdAt: "2024-01-11"
  },
  {
    id: 6,
    name: "Suspension Macramé Double",
    price: 149.90,
    description: "Imposante suspension double en macramé, parfaite pour les grands espaces. Son design complexe mêle différentes techniques de nœuds pour créer un motif sophistiqué. Idéale pour accueillir deux plantes ou comme pièce décorative majeure.",
    image: "/images/macrame-2.jpg",
    category: "macrame",
    dimensions: "L: 80cm, H: 100cm",
    materials: "Corde en coton naturel, anneaux en laiton",
    inStock: true,
    createdAt: "2024-01-10"
  },
  {
    id: 7,
    name: "Couronne Origami Fleurs",
    price: 59.90,
    description: "Délicate couronne murale composée de fleurs en origami aux couleurs douces et harmonieuses. Chaque fleur est pliée à la main avec précision pour créer un bouquet éternel. Une décoration murale originale qui apportera fraîcheur et poésie à votre intérieur.",
    image: "/images/origami-3.jpg",
    category: "origami",
    dimensions: "Ø: 35cm",
    materials: "Papier japonais, cerceau en bois",
    inStock: true,
    createdAt: "2024-01-09"
  },
  {
    id: 8,
    name: "Châle Crochet Dentelle",
    price: 89.90,
    description: "Magnifique châle en crochet travaillé comme de la dentelle. Sa texture aérienne et son motif délicat en font un accessoire élégant pour toutes les occasions. La finesse du fil utilisé crée un effet de légèreté tout en gardant sa chaleur.",
    image: "/images/crochet-3.jpg",
    category: "crochet",
    dimensions: "180cm x 70cm",
    materials: "Laine mérinos extra-fine",
    inStock: true,
    createdAt: "2024-01-08"
  },
  {
    id: 9,
    name: "Décoration Murale Macramé",
    price: 79.90,
    description: "Pièce murale en macramé au design géométrique contemporain. Les différentes techniques de nœuds créent un motif captivant qui joue avec les ombres et la lumière. Une œuvre artisanale qui ajoutera texture et caractère à vos murs.",
    image: "/images/macrame-3.jpg",
    category: "macrame",
    dimensions: "60cm x 90cm",
    materials: "Corde en coton, bois flotté",
    inStock: true,
    createdAt: "2024-01-07"
  }
];

export default products; 