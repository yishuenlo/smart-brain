import React from "react";
import Tilt from "react-tilt";
import brain from "./brain@2x.png";

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt"
        options={{ max: 45 }}
        style={{
          height: 70,
          width: 70,
          backgroundColor: "#F5E500",
          padding: "1em",
        }}
      >
        <div className="Tilt-inner">
          <img alt="brain logo" src={brain} style={{ width: "70px" }}></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
