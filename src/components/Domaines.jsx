import React from 'react';
import './Domaines.css';
import Cloud_cybersecurite from '../assets/Cloud-et-cybersecurite_Plan-de-travail-1-150x150.png';
import Intelligence_artificielle from '../assets/Intelligence-artificielle_Plan-de-travail-1-150x150.png';
import Ingenierie_logicielle from '../assets/Ingenierie-logicielle_Plan-de-travail-1-1-150x150.png';

export default function Domaines() {
  return (
    <section className="domaines">
      <h2 className="domaines-title">Domaines</h2>
      <p className="domaines-subtitle">
        Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs
        du numérique du présent et de l’avenir :
      </p>
      <div className="domaines-cards">
        <div className="domaine-card">
          <img src={Cloud_cybersecurite} alt="Cloud et cybersécurité" />
          <h3>Cloud et cybersécurité</h3>
          <p>
            Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages
            (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne
            ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous
            former dans le domaine du cloud et de la cybersécurité.
          </p>
        </div>

        <div className="domaine-card">
          <img src={Intelligence_artificielle} alt="Intelligence artificielle" />
          <h3>Intelligence artificielle</h3>
          <p>
            Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures
            semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les
            bases de l’intelligence artificielle lors de vos cours chez HEI.
          </p>
        </div>

        <div className="domaine-card">
          <img src={Ingenierie_logicielle} alt="Ingénierie logicielle" />
          <h3>Ingénierie logicielle</h3>
          <p>
            Apprenez les principes de la conception ou le développement de programmes et
            d’applications web et mobile et explorez le monde fascinant des “codes”. À la fin
            de votre formation, vous serez aptes à proposer des solutions pratiques, créatives
            et innovantes à des particuliers ou des entreprises pour leurs besoins numériques.
          </p>
        </div>
      </div>
    </section>
  );
}
