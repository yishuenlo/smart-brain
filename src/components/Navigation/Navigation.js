import React from "react";

const Navigation = ({ loginChange }) => {
  const navbarCss = {
    display: "flex",
    justifyContent: "flex-end",
  };

  const btnCss = {
    cursor: "pointer",
    padding: "2em 4em",
  };

  return (
    <nav style={navbarCss}>
      <p style={btnCss} onClick={() => loginChange(false)}>
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;
