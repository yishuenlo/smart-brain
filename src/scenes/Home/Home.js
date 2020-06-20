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
  constructor(props) {
    super(props);
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
  handleAPICall = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(FACE_DETECT_MODEL, this.state.input)
      .then((response) => {
        if (response) {
          fetch("http://localhost:3001/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.props.userId,
            }),
          })
            .then((resp) => resp.json())
            .then((count) => {
              this.props.updateEntries(count);
            })
            .catch((err) => console.log(err, 'not getting reponse for entry count'));
        }
        this.displayBox(this.calculateBox(response));
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { userName, userEntries } = this.props;
    return (
      <div className="Home">
        <div className="info">
          <Logo />
          <p>
            {
              //customize greeting for returning user
              this.props.greeting === "signin"
                ? `Hey there, ${userName}! Welcome back to Smart Brain!`
                : `Greetings, ${userName}. Welcome to Smart Brain!`
            }
          </p>
          <h2>{`Face Searches: ${userEntries}`}</h2>
          <ImageLinkForm
            onInputChange={this.onInputChange}
            handleAPICall={this.handleAPICall}
            inputUrl={this.state.input}
          />
        </div>
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default Home;
