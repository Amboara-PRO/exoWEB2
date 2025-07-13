import React from "react";
import Navbar from "./components/NavBar.jsx";
import Slider from "./components/Slider";
import Apropos from "./components/Apropos";
import EquipePedagogique from "./components/EquipePedagogique.jsx"

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Apropos />
      <EquipePedagogique />
    </>
  );
}

export default App;
