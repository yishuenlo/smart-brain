import React from "react";

const Navigation = ({ loginStatus, loginChange }) => {
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
      { loginStatus ? 
      //if logged in
      (<p style={btnCss} onClick={() => loginChange(false)}>
        Sign Out
      </p>) : (
        //if logged out
        <div>
        </div>
      )
      }
      
    </nav>
  );
};

export default Navigation;
