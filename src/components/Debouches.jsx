import React from "react";
import "./Debouches.css";
import Person_with_code from "../assets/IMG-02-e1720543344824-987x1024-1.webp";

const Debouches = () => {
  return (
    <div className="debouches-container">
      <div className="texte-container">
        <h1>Quelques débouchés</h1>
        <p>
          Formez-vous à une panoplie de métiers du numérique avec nous et venez
          acquérir les fondements de la programmation (qui vous servira pour les
          différents métiers) ! Ce sont des métiers porteurs, des métiers du
          présent, des métiers du futur...
        </p>
        <p>
          Développeur back end, développeur front end, développeurs mobile,
          chefs de projet, exploitants cloud, analystes cybersécurité,
          pentesters, auditeur technique SSI, auditeur organisationnel SSI,
          administrateur système et réseau, développeur de sécurité...
        </p>
      </div>
      <div className="image-container">
        <img src={Person_with_code} alt="" />
      </div>
    </div>
  );
};

export default Debouches;
