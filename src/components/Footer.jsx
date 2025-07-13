import React from "react";
import "./Footer.css";
import logo from "../assets/cropped-Logo-e1662790239183.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} />
          <p>Formation habilitée par l’Etat suivant le système LMD</p>
          <p>Habilitation MESupRes n°31309/2023</p>
        </div>
        <div className="footer-address">
          <h3>Adresse</h3>
          <p>II J 161 R Ambodivoanjo</p>
          <p>Ivandry Antananarivo</p>
          <p>101, Madagascar</p>
        </div>
        <div className="footer-navigation">
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#apropos">À propos</a>
            </li>
            <li>
              <a href="#formations">Formations</a>
            </li>
            <li>
              <a href="#temoignages">Témoignages</a>
            </li>
          </ul>
        </div>

        <div className="footer-medias">
          <h3>Médias sociaux</h3>
          <ul>
          <i class='bx bxl-facebook-circle'></i>
          <i class='bx bxl-linkedin-square'></i>
          <i class='bx bxl-instagram-alt'></i>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; HEI - Madagascar</p>
      </div>
    </footer>
  );
}
