import React, { Component } from "react";

import Navigation from "./components/Navigation/Navigation";
import Home from "./scenes/Home/Home";
import Sign from "./scenes/Sign/Sign";
import "./App.css";

import Particles from "react-particles-js";
import ParticlesSetting from "./services/particlesJS.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      login: false,
      entry: "signin",
    };
  }

  //if login, display Home
  //else, display Sign
  loginChange = (status, entry) => {
    this.setState({ login: status });
    this.setState({ entry: entry });
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={ParticlesSetting} />
        <Navigation
          loginStatus={this.state.login}
          loginChange={this.loginChange}
        />

        {
          //check for login status
          this.state.login ? (
            <Home greeting={this.state.entry} />
          ) : (
            <Sign loginChange={this.loginChange} />
          )
        }
      </div>
    );
  }
}

export default App;
