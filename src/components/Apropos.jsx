import React from 'react';
import './Apropos.css';
import aproposImg from '../assets/A-propos-left-1.webp';

export default function Apropos() {
  return (
    <section className="apropos">
      <div className="apropos-content">
        <div className="apropos-image">
          <img src={aproposImg} alt="À propos de HEI" />
        </div>

        <div className="apropos-text">
          <h2>À propos de nous</h2>

          <div className="apropos-row">
            <span className="icon">🎓</span>
            <div>
              <h3>+3 ans</h3>
              <p>Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l'informatique.</p>
            </div>
          </div>

          <div className="apropos-row">
            <span className="icon">👨‍🎓</span>
            <div>
              <h3>+250 étudiants</h3>
              <p>Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation.</p>
            </div>
          </div>

          <div className="apropos-row">
            <span className="icon">🎯</span>
            <div>
              <h3>Notre mission</h3>
              <p>Former les jeunes sur des domaines comme l’intelligence artificielle, la cybersécurité et la programmation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
