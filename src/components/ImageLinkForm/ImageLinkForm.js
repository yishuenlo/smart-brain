import React from "react";
import Button from "../Button/Button";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div className="image-link-form">
      <div className="link-bg">
        <input placeholder="Paste image URL"></input>
      </div>
      <div className="detect-btn" style={{position:'relative'}}>
        <Button
          action="Detect"
        />
      </div>
    </div>
  );
};

export default ImageLinkForm;
