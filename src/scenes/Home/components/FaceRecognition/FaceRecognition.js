import React from "react";
import Tilt from "react-tilt";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="face-recognition">
      <Tilt
        className="Tilt"
        options={{ max: 10, scale: 1.05 }}
        style={{ boxShadow: "none" }}
      >
        <div className="Tilt-inner">
          <div className="img-extent">
            {/* check to see if there is input */}
            {imageUrl ? (
              <div>
                <img
                  id="input-image"
                  alt="input url"
                  style={{ width: "100%" }}
                  src={imageUrl}
                />
                <div
                  className="bounding-box"
                  style={{
                    top: box.topRow + "%",
                    right: box.rightCol + "%",
                    bottom: box.bottomRow + "%",
                    left: box.leftCol + "%",
                  }}
                ></div>
              </div>
            ) : (
              //default message
              <p style={{ padding: "10em 0" }}>
                This Magic Brain will detect faces in your pictures. Give it a
                try by entering an image URL.
              </p>
            )}
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default FaceRecognition;
