import React from "react";
import Button from "../../../../components/Button/Button";
import "./ImageLinkForm.css";

const validUrl = /^(http).*(\.(jpg|png|jpeg|))$/;

const ImageLinkForm = ({ onInputChange, handleAPICall, inputUrl }) => {
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
          <Button action="Detect" handleClick={handleAPICall} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ImageLinkForm;
