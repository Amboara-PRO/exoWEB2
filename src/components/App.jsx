import React from "react";
import Navbar from "./components/Navbar.jsx";
import Slider from "./components/Slider";
import Apropos from "./components/Apropos";
import Debouches from "./components/Debouches.jsx";
import EquipePedagogique from "./components/EquipePedagogique.jsx";
import Domaines from "./components/Domaines.jsx";
import Admission from "./components/Admission.jsx";
import ProgrammePedagogique from "./components/ProgrammePedagogique.jsx";
import Technos from "./components/Technos.jsx";
import Partenaires from "./components/Partenaires.jsx";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Apropos />
      <EquipePedagogique />
      <Debouches />
      <Domaines />
      <Admission />
      <ProgrammePedagogique />
      <Technos />
      <Partenaires />
      <Footer />
    </>
  );
}

export default App;
