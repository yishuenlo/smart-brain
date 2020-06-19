import React from "react";
import Logo from "../../../../components/Logo/Logo";
import FormField from "../../components/FormField/FormField";
import Button from "../../../../components/Button/Button";
import "./Login.css";

const Login = ({ loginChange, isNewUser }) => {
  return (
    <div className="Login">
      <Logo className="Logo" style={{ margin: "2em" }} />
      <h2>Sign In</h2>
      <FormField label="Name" type="text" />
      <FormField label="Password" type="password" />
      <Button action="Sign in" handleClick={() => loginChange(true, 'signin')} />
      <p onClick={() => isNewUser(true)}>New user? Register</p>
    </div>
  );
};

export default Login;
