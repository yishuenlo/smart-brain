import React from "react";
import Navigation from "./components/Navigation/Navigation";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import Particles from "react-particles-js";

import "./App.css";

function App() {
  const particlesOptions = {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
    },
    shape:{
      type: 'cirlces',
      stroke: {
        width: 0,
      }
    },
    line_linked: {
      opacity: 0.015,
    },
    opacity: {
      value: 0.5,
      random: true
    }
  };

  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation />
      <AppWrapper />
    </div>
  );
}

export default App;
