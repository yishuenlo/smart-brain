import React, { Component } from "react";
import Clarifai, { FACE_DETECT_MODEL } from "clarifai";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Particles from "react-particles-js";
import ParticlesSetting from "./components/particlesJS.json";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "2ceeae7f36474cf8b24754fb5525e9ca",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  //display imageUrl when button is clicked
  onButtonClick = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function (response) {
        console.log(response);
      },
      function (err) {
        // there was an error
      }
    );
  };

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
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonClick={this.onButtonClick}
              inputUrl={this.state.input}
            />
          </div>
          <FaceRecognition imageUrl={this.state.imageUrl} />
        </div>
      </div>
    );
  }
}

export default App;
