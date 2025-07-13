import React, { useState } from 'react';
import './Slider.css';
import slide1 from '../assets/hei-banner-1.webp';
import slide2 from '../assets/hei-banner-2.webp';
import slide3 from '../assets/hei-banner-3.webp';

const slides = [
  {
    image: slide1,
    title: "Haute École d'Informatique",
    subtitle: "Une équipe pédagogique et administrative qui travaille sans relâche..."
  },
  {
    image: slide2,
    title: "Une formation adaptée au marché",
    subtitle: "Habilitation MESupRES, suivant l’arrêté n°31309/2023"
  },
  {
    image: slide3,
    title: "Rejoignez HEI",
    subtitle: "L’éducation est l’arme la plus puissante pour changer le monde..."
  }
];

export default function Slider() {
  const [i, setI] = useState(0);
  const next = () => setI((i+1)%slides.length);
  const prev = () => setI((i-1+slides.length)%slides.length);

  return (
    <div className="slider" style={{ backgroundImage: `url(${slides[i].image})` }}>
      <div className="overlay">
        <h1>{slides[i].title}</h1>
        <p>{slides[i].subtitle}</p>
        <div className="btn-group">
          <button className="btn white">Inscrivez‑vous ici</button>
          <button className="btn yellow">Emploi du temps</button>
          <button className="btn blue">Programme pédagogique</button>
        </div>
        <div className="arrows">
          <button onClick={prev}>❮</button>
          <button onClick={next}>❯</button>
        </div>
      </div>
    </div>
  );
}
