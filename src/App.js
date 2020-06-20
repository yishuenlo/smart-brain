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
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: "",
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

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
            <Home
              greeting={this.state.entry}
              userName={this.state.user.name}
              userEntries={this.state.user.entries}
            />
          ) : (
            <Sign loginChange={this.loginChange} loadUser={this.loadUser} />
          )
        }
      </div>
    );
  }
}

export default App;
