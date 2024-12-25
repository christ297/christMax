import React, { useState } from 'react';

const days = Array.from({ length: 25 }, (_, i) => i + 1);

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const surprises = [
    "Une blague de Noël : Pourquoi les elfes ne font-ils pas confiance à leurs collègues ? Parce qu'ils sont toujours un peu louches !",
    "Recette du jour : Biscuits de Noël à la cannelle ! 🥧",
    "Citation inspirante : 'C'est Noël dans le cœur qui met Noël dans l'air.' – W.T. Ellis",
    // Ajoutez d'autres surprises ici...
  ];

  const handleDayClick = (day) => {
    const surprise = surprises[Math.floor(Math.random() * surprises.length)];
    setSelectedDay({ day, surprise });
  };

  return (
    <section id="calendar" className="calendar">
      <h2>Calendrier de l'Avent 🎁</h2>
      <div className="calendar-grid">
        {days.map((day) => (
          <button
            key={day}
            className="calendar-day"
            onClick={() => handleDayClick(day)}
          >
            {day}
          </button>
        ))}
      </div>
      {selectedDay && (
        <div className="surprise">
          <h3>Surprise pour le jour {selectedDay.day} :</h3>
          <p>{selectedDay.surprise}</p>
        </div>
      )}
    </section>
  );
};

export default Calendar;
