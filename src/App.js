import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Particles from "react-particles-js";
import ParticlesSetting from "./components/particlesJS.json";

import "./App.css";

class App extends Component{
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={ParticlesSetting} />
        <Navigation />
        <div className="app-wrapper">
          <div className="info">
            <Logo />
            <p>Welcome to Smart Brain, Pikachu.</p>
            <h2>Your Rank: 5</h2>
            <ImageLinkForm />
          </div>
          <FaceRecognition />
        </div>
      </div>
    );
  }
}

export default App;
