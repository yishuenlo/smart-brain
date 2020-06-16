import React, { Component } from "react";

import Logo from "../../components/Logo/Logo";

import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import "./Home.css";

import Clarifai, { FACE_DETECT_MODEL } from "clarifai";

const app = new Clarifai.App({
  apiKey: "2ceeae7f36474cf8b24754fb5525e9ca",
});

class Home extends Component {
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
    const { left_col, right_col, top_row, bottom_row } = boxCoordinates;
    return {
      leftCol: left_col * 100,
      rightCol: (1 - right_col) * 100,
      topRow: top_row * 100,
      bottomRow: (1 - bottom_row) * 100,
    };
  };

  //assign state to calculated box
  displayBox = (box) => {
    this.setState({ box: box });
  };

  //detect input form change
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  //display imageUrl when button is clicked
  onButtonClick = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(FACE_DETECT_MODEL, this.state.input)
      .then((response) => this.displayBox(this.calculateBox(response)))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="Home">
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
    );
  }
}

export default Home;
