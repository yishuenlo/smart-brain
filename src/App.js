import React from "react";
import Navigation from "./components/Navigation/Navigation";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import Particles from "react-particles-js";
import ParticlesSetting from "./components/particlesJS.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Particles className="particles" params={ParticlesSetting} />
      <Navigation />
      <AppWrapper />
    </div>
  );
}

export default App;
