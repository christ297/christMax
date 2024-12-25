import React from 'react';

const traditions = [
  {
    title: 'Décoration du Sapin 🎄',
    description: 'Une tradition où les familles se rassemblent pour décorer un sapin avec des guirlandes, des boules, et une étoile au sommet.',
  },
  {
    title: 'Chants de Noël 🎶',
    description: 'Des chants festifs qui réchauffent le cœur, souvent interprétés autour du sapin ou dans les églises.',
  },
  {
    title: 'Partage des Cadeaux 🎁',
    description: 'Une pratique où l\'on offre des cadeaux pour montrer son amour et sa gratitude envers ses proches.',
  },
  {
    title: 'Repas de Noël 🍽️',
    description: 'Un festin somptueux avec des plats traditionnels comme la dinde, la bûche de Noël et bien d\'autres.',
  },
];

const Traditions = () => {
  return (
    <section id="traditions" className="traditions">
      <h2>Traditions de Noël 🎄</h2>
      <div className="traditions-list">
        {traditions.map((tradition, index) => (
          <div key={index} className="tradition-item">
            <h3>{tradition.title}</h3>
            <p>{tradition.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Traditions;
