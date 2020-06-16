import React, { Component } from 'react';
import Login from './scenes/Login/Login';
import './Sign.css'

class Sign extends Component {
    constructor(){
        super();
        this.state = {
            isNewUser: false, //show sign in, else register
        }
    }

    //if isNewUser, display register page
    //else, display sign in

    render(){
        return (
          <div className='Sign'>
            <Login />
          </div>
        );
    }
}

export default Sign;