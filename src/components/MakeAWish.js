import React, { useState } from 'react';

const MakeAWish = () => {
  const [wish, setWish] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWishSubmit = () => {
    setSubmitted(true);
    setTimeout(() => alert('Votre vœu a été envoyé aux étoiles ! ✨'), 500);
  };

  return (
    <section id="wish" className="make-a-wish">
      <h2>Faites un Vœu</h2>
      {!submitted ? (
        <div>
          <input
            type="text"
            placeholder="Écrivez votre vœu ici..."
            value={wish}
            onChange={(e) => setWish(e.target.value)}
          />
          <button onClick={handleWishSubmit}>Envoyer</button>
        </div>
      ) : (
        <p>Merci pour votre vœu magique ! 🌟</p>
      )}
    </section>
  );
};

export default MakeAWish;
