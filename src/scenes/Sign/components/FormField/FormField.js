import React from "react";
import './FormField.css';

const FormField = ({ type, label, onChange }) => {
  return (
    <div className='FormField'>
      <input type={type} onChange={onChange}></input>
      <p>{label}</p>
    </div>
  );
};

export default FormField;
