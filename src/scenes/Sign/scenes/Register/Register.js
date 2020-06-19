import React from "react";
import Logo from "../../../../components/Logo/Logo";
import FormField from "../../components/FormField/FormField";
import Button from "../../../../components/Button/Button";
import "../Login/Login.css";

const Register = ({ loginChange, isNewUser }) => {
  return (
    <div className="Login">
      <Logo className="Logo" style={{ margin: "2em" }} />
      <h2>Register</h2>
      <FormField label="Name" type="text" />
      <FormField label="Email" type="email" />
      <FormField label="Password" type="text" />
      <Button action="Register" handleClick={() => loginChange(true, 'register')} />
      <p onClick={() => isNewUser(false)}>Existing user? Sign in</p>
    </div>
  );
};

export default Register;
