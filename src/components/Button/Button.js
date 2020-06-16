import React from 'react';
import Tilt from "react-tilt";
import './Button.css';

const Button = ({ action, onButtonClick }) => {
  return (
    <div>
      <Tilt className="Tilt" options={{ max: 45 }}>
        <div className="Tilt-inner">
          <button
            style={{ padding: "1em 6em", border: 0, cursor: "pointer" }}
            onClick={onButtonClick}
          >
            {action}
          </button>
        </div>
      </Tilt>
    </div>
  );
};

export default Button;