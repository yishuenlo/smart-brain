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
    };
  }

  //if login, display Home
  //else, display Sign
  loginChange = (status) => {
    this.setState({ login: status });
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={ParticlesSetting} />
        <Navigation loginStatus={this.state.login} loginChange={this.loginChange} />
        {this.state.login ? <Home /> : <Sign loginChange={this.loginChange} />}
      </div>
    );
  }
}

export default App;
