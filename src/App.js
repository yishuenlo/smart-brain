import React, { Component } from "react";

import Navigation from "./components/Navigation/Navigation";
import Home from './scenes/Home/Home';
import Sign from './scenes/Sign/Sign';
import "./App.css";

import Particles from "react-particles-js";
import ParticlesSetting from "./services/particlesJS.json";

class App extends Component {
  constructor(){
    super();
    this.state = {
      routing: "home", //or sign
      login: true
    }
  }

  //if login, display Home
  //else, display Sign

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={ParticlesSetting} />
        <Navigation />
        <Sign />
        <Home />
      </div>
    );
  }
}

export default App;
