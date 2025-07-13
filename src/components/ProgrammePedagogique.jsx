import React from 'react';
import './ProgrammePedagogique.css';
import TWOstudents from '../assets/IMG-03-e1720537524581-1024x950-1.webp';
import MASK_GROUP_1 from '../assets/Mask-group-1.webp';
import MASK_GROUP_2 from '../assets/Mask-group-2.webp';
import MASK_GROUP_3 from '../assets/Mask-group-3.webp';


export default function ProgrammePedagogique() {
  return (
    <section className="programme-section">
      <div className="programme-top">
        <div className="programme-image">
          <img src={TWOstudents} alt="Étudiants" />
        </div>
        <div className="programme-content">
          <h2>Le programme pédagogique</h2>
          <p>
            Suivant le système LMD, jusqu’au Master, notre formation repose sur un programme pédagogique conçu en adéquation avec les attentes du marché.
            La formation est sanctionnée par un diplôme de Licence et de Master en Informatique reconnu par le MESupReS de Madagascar.
          </p>
          <a href="#" className="btn-primary">Notre Programme</a>
        </div>
      </div>

      <div className="programme-grid">
        <div className="grid-item">
          <h3>25%</h3>
          <p>Apprentissage théoriques en présentiel</p>
        </div>
        <div className="grid-item">
          <h3>25%</h3>
          <p>Apprentissage sur supports numériques</p>
        </div>
        <div className="grid-item">
          <h3>25%</h3>
          <p>Travaux individuels de l’étudiant</p>
        </div>
        <div className="grid-item">
          <h3>25%</h3>
          <p>Apprentissage en entreprise</p>
        </div>
      </div>

      <div className="programme-gallery">
        <img src={MASK_GROUP_1} alt="Cours 1" />
        <img src={MASK_GROUP_2} alt="Cours 2" />
        <img src={MASK_GROUP_3} alt="Cours 3" />
      </div>
    </section>
  );
}
