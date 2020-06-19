import React, { Component } from 'react';
import Login from './scenes/Login/Login';
import Register from './scenes/Register/Register';
import './Sign.css'

class Sign extends Component {
    constructor(){
        super();
        this.state = {
            isNewUser: true, //show sign in, else register
        }
    }

    //if isNewUser, display register page
    //else, display sign in
    isNewUser = ( status ) => {
      this.setState({isNewUser: status})
    }

    render(){
        return (
          <div className="Sign">
            {this.state.isNewUser ? (
              <Register
                loginChange={this.props.loginChange}
                isNewUser={this.isNewUser}
              />
            ) : (
              <Login
                loginChange={this.props.loginChange}
                isNewUser={this.isNewUser}
              />
            )}
          </div>
        );
    }
}

export default Sign;