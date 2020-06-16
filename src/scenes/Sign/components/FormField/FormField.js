import React from "react";
import './FormField.css';

const FormField = ({ type, label }) => {
  return (
    <div className='FormField'>
      <input type={type}></input>
      <p>{label}</p>
    </div>
  );
};

export default FormField;
