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
      box: {},
    };
  }

  //calculate box coorindates from Clarifai data
  calculateBox = (data) => {
    const boxCoordinates =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const {left_col, right_col, top_row, bottom_row} = boxCoordinates;
    return {
      leftCol: left_col * 100,
      rightCol: (1 - right_col) * 100,
      topRow: top_row * 100,
      bottomRow: (1 - bottom_row) * 100,
    };
  };

  //assign state to calculated box
  displayBox = (box) => {
    console.log(box.topRow, box.rightCol, box.bottomRow, box.leftCol);
    this.setState({box: box});
  }

  //detect input form change
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  //display imageUrl when button is clicked
  onButtonClick = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => this.displayBox(this.calculateBox(response)))
      .catch((err) => console.log(err));
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
            <h2>Your Rank: 2</h2>
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonClick={this.onButtonClick}
              inputUrl={this.state.input}
            />
          </div>
          <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
        </div>
      </div>
    );
  }
}

export default App;
