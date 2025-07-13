import React, { useRef } from "react";
import "./EquipePedagogique.css";
import JEAN_AIME from '../assets/Jean-Aime-Maxa-modified-150x150.jpg';
import PARISON from '../assets/Parison-e1716502987165-150x150.png';
import YANNICK from '../assets/5746AC1E761A42D1B7D89496C9A6BE9B_edited-e1716502720974-150x150.jpg';
import TAHINA from '../assets/Tahina-OK-e1716502943928-150x150.png';
import DR_LOU from '../assets/97-portraits-97_edited-e1716502895676-150x150.jpg';
import MIRADO from '../assets/Mirado-150x150.webp';
import JULIEN from '../assets/Julien-150x150.webp';
import RYAN from '../assets/ryan-min-150x150.webp';

export default function EquipePedagogique() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="equipe-section">
      <h2>L'équipe pédagogique</h2>
      <p className="intro">
        Notre équipe pédagogique se compose d’experts nationaux et
        internationaux de l’informatique, de la cybersécurité, de l’intelligence
        artificielle dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.
      </p>

      <div className="carousel-container">
        <button onClick={scrollLeft} className="carousel-btn left">
          &lt;
        </button>

        <div className="carousel" ref={scrollRef}>
          <div className="equipe-card">
            <img src={JEAN_AIME} alt="Jean Aimé Maxa" />
            <h3>Jean Aimé Maxa</h3>
            <p>Responsable technique cybersécurité chez CES</p>
            <p>Toulouse – France</p>
          </div>

          <div className="equipe-card">
            <img src={PARISON} alt="Parison Ravalomanda" />
            <h3>Parison Ravalomanda</h3>
            <p>Ingénieur chez Google</p>
            <p>Londres – UK</p>
          </div>

          <div className="equipe-card">
            <img src={YANNICK} alt="Yannick Raharijaona" />
            <h3>Yannick Raharijaona</h3>
            <p>Responsable ML chez Rocket Science</p>
            <p>Ottawa – Canada</p>
          </div>

          <div className="equipe-card">
            <img src={TAHINA} alt="Dre Tahina" />
            <h3>Dre Tahina Ralitera</h3>
            <p>Docteure-Ingénieure, CNRS France | Prix L'Oréal-</p>
            <p>UNESCO pour les Femmes en Science 2017</p>
          </div>

          <div className="equipe-card">
            <img src={DR_LOU} alt="DR_LOU" />
            <h3>Dr Lou Maurica</h3>
            <p>Docteur-Ingénieur en informatique | Fondateur et Directeur pédagogique du HEI</p>
          </div>

          <div className="equipe-card">
            <img src={MIRADO} alt="Mirado" />
            <h3>Mirado RAFENOMAHENINTSOA</h3>
            <p>Data and Business Intelligence Specialist 5+</p>
          </div>

          <div className="equipe-card">
            <img src={JULIEN} alt="Julien" />
            <h3>Julien RAJERISON</h3>
            <p>Lead Développeur | Fondateur de l'association Techzara Madagascar</p>
          </div>

          <div className="equipe-card">
            <img src={RYAN} alt="Ryan" />
            <h3>Ryan ANDRIAMAHERY</h3>
            <p>Développeur back end | Confodateur et Directeur des opérations de HEI</p>
          </div>
        </div>

        <button onClick={scrollRight} className="carousel-btn right">
          &gt;
        </button>
      </div>
    </section>
  );
}
