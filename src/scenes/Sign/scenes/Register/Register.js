import React, { Component } from "react";
import Logo from "../../../../components/Logo/Logo";
import FormField from "../../components/FormField/FormField";
import Button from "../../../../components/Button/Button";
import "../Login/Login.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onSubmitSignIn = async () => {
    const res = await fetch("http://localhost:3001/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      }),
    });

    const user = await res.json();

    if(user){
      //update user profile
      this.props.loadUser(user);
      this.props.loginChange(true, "signin");
    }
  };

  render() {
    const { isNewUser } = this.props;
    return (
      <div className="Login">
        <Logo className="Logo" style={{ margin: "2em" }} />
        <h2>Register</h2>
        <FormField label="Name" type="text" onChange={this.onNameChange} />
        <FormField label="Email" type="email" onChange={this.onEmailChange} />
        <FormField
          label="Password"
          type="password"
          onChange={this.onPasswordChange}
        />
        <Button action="Register" handleClick={this.onSubmitSignIn} />
        <p onClick={() => isNewUser(false)}>Existing user? Sign in</p>
      </div>
    );
  }
}; 

export default Register;
