import React from "react";
import "./Technos.css";
import Java from "../assets/Java-150x150.png";
import Python from "../assets/python-150x150.png";
import Javascript from "../assets/JS-150x150.png";
import C from "../assets/C-150x150.png";
import TS from "../assets/TS-150x150.png";
import Docker from "../assets/docker-300x77.png";
import Next from "../assets/next.png";
import AWS from "../assets/aws.png";
import Serverless from "../assets/serverless.png";
import REACT from "../assets/react.png";
import openapi from "../assets/openapi.png";

export default function Technos() {
  return (
    <section className="technos">
      <h2>Les Technos et langages utilisés</h2>
      <p>
        Nos étudiants sont formés à l’utilisation et à la maîtrise des langages
        de programmation Java et JavaScript. Ces deux langages occupent une
        place de choix dans le domaine du développement logiciel et du web,
        offrant une polyvalence et une robustesse appréciées par les
        développeurs à travers le monde.
      </p>
      <div className="techno-logos">
        <img src={Java} alt="" />
        <img src={Python} alt="" />
        <img src={Javascript} alt="" />
        <img src={C} alt="" />
        <img src={TS} alt="" />
        <img src={Docker} alt="" />
        <img src={Next} alt="" />
        <img src={AWS} alt="" />
        <img src={Serverless} alt="" />
        <img src={REACT} alt="" />
        <img src={openapi} alt="" />
      </div>
    </section>
  );
}
