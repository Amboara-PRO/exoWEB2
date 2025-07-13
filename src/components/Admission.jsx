import React from "react";
import "./Admission.css";

export default function Admission(){
  return (
    <div className="admission-container">
      <h1>Admission</h1>
      <p>
        Ouverte aux bacheliers de toutes les séries, l'admission chez HEI se
        fait par test de niveau :
      </p>
      <p>
        une épreuve de français niveau B2 et d'une épreuve de mathématiques
        niveau Terminale D.
      </p>
      <div className="steps">
        <div className="step">
          01
          <br />
          Dépôt de dossiers : pour les bacheliers de toutes séries sans limite
          d'âge
        </div>
        <span>&rarr;</span>
        <div className="step">
          02
          <br />
          Test de niveau : composée d'une épreuve de français niveau B2 et d'une
          épreuve de mathématiques niveau Terminale D
        </div>
        <span>&rarr;</span>
        <div className="step">
          03
          <br />
          Inscription définitive (si test réussi)
        </div>
      </div>
      <div className="buttons">
        <button>Inscrivez-vous ici</button>
        <button className="resultat">Résultat concours</button>
      </div>
    </div>
  );
};

