import React, { Component } from "react";
import Logo from "../../../../components/Logo/Logo";
import FormField from "../../components/FormField/FormField";
import Button from "../../../../components/Button/Button";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: "",
      loginPassword: "",
      loginError: false,
    };
  }

  onEmailChange = (event) => {
    this.setState({ loginEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ loginPassword: event.target.value });
  };

  onSubmitSignIn = async () => {
    const res = await fetch("http://localhost:3001/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.loginEmail,
        password: this.state.loginPassword,
      }),
    });
    
    const user = await res.json();

    if(user.id){
      this.props.loadUser(user);
      this.props.loginChange(true, "signin")
    } else {
      this.setState({ loginError: true });
    }
  };

  onKeyDown = event => {
    if(event.key === 'Enter') return this.onSubmitSignIn();
  }

  render() {
    //destucture to get props.variables
    const { isNewUser } = this.props;

    return (
      <div className="Login">
        <Logo className="Logo" style={{ margin: "2em" }} />
        <h2>Sign In</h2>

        <p style={{ color: "red", fontSize: "0.8em" }}>
          {
            //sign in error message
            this.state.loginError ? "Email and password do not match" : ""
          }
        </p>

        <FormField
          label="Email"
          type="email"
          onChange={this.onEmailChange}
          onKeyDown={this.onKeyDown}
        />

        <FormField
          label="Password"
          type="password"
          onChange={this.onPasswordChange}
          onKeyDown={this.onKeyDown}
        />

        <Button action="Sign in" handleClick={this.onSubmitSignIn} />
        <p onClick={() => isNewUser(true)}>New user? Register</p>
      </div>
    );
  }
}

export default Login;
