import React from 'react';
import Tilt from "react-tilt";

const FaceRecognition = () => {
    return (
      <div className="face-recognition">
        <Tilt
          className="Tilt"
          options={{ max: 10, scale: 1.05 }}
          style={{ boxShadow: "none" }}
        >
          <div className="Tilt-inner">
            <div className="img-extent">
              <img
                alt="input url"
                style={{ width: "100%" }}
                src="https://huskypawprint.com/wp-content/uploads/2016/11/FullSizeRender-2-900x795.jpg"
              ></img>
              {/* <p style={{padding: '10em 0'}}>
                This Magic Brain will detect faces in your pictures. Give it a
                try by entering an image link.
              </p> */}
            </div>
          </div>
        </Tilt>
      </div>
    );
}

export default FaceRecognition;