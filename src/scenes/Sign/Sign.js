import React, { Component } from 'react';

class Sign extends Component {
    constructor(){
        super();
        this.state = {
            isNewUser: false, //show sign in, else register
        }
    }
}

export default Sign;