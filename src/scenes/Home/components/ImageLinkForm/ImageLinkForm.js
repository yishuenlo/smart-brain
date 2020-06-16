import React from "react";
import Button from "../../../../components/Button/Button";
import "./ImageLinkForm.css";

const validUrl = /^(http).*(\.(jpg|png|jpeg|))$/;

const ImageLinkForm = ({ onInputChange, onButtonClick, inputUrl }) => {
  return (
    <div className="image-link-form">
      <div className="link-bg">
        <input
          placeholder="Insert valid image URL"
          type="text"
          onChange={onInputChange}
        ></input>
      </div>
      <div className="detect-btn" style={{ position: "relative" }}>
        {validUrl.test(inputUrl) ? (
          <Button action="Detect" onButtonClick={onButtonClick} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ImageLinkForm;
