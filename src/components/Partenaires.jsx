import React from "react";
import "./Partenaires.css";
import NEXTA from '../assets/LOGO-NEXTA-1536x862.webp';
import PN from '../assets/PN_Logo_baseline_color_ENG.png';
import YOOZ from '../assets/Yooz-2023-Logo-2.webp';
import ETECH from '../assets/logo-etech.png';
import EMIT from '../assets/logo_emit.png';
import NUMER from '../assets/Logo-Numer-vf.png';
import BP from '../assets/bp-logo-full-1024x331.webp';
import YIF from '../assets/YIF_LOGO_512x512_BL_on_WH-1.webp';
import KANTE from '../assets/logo-kante-company-1.png';

export default function Partenaires() {

  return (
    <section className="partenaires">
      <h2>Nos partenaires</h2>
      <p>
        L’employabilité de nos étudiants se base sur la pertinence de notre
        programme pédagogique et de la composition de notre corps enseignant
        mais aussi du soutien et la collaboration des entreprises partenaires
      </p>
      <div className="partenaire-logos">
        <img src={NEXTA} alt="" />
        <img src={PN} alt="" />
        <img src={YOOZ} alt="" />
        <img src={ETECH} alt="" />
        <img src={EMIT} alt="" />
        <img src={NUMER} alt="" />
        <img src={BP} alt="" />
        <img src={YIF} alt="" />
        <img src={KANTE} alt="" />
      </div>
    </section>
  );
}
