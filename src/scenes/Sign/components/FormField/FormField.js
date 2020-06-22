import React from "react";
import './FormField.css';

const FormField = ({ type, label, onChange, onKeyDown, inputFilled }) => {
  return (
    <div className="FormField">
      <input type={type} onChange={onChange} onKeyDown={onKeyDown}></input>
      <p>{label}</p>
    </div>
  );
};

export default FormField;
