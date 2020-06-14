import React from 'react';
import Information from '../Information/Information';
import FaceRecognition from '../FaceRecognition/FaceRecognition';

const AppWrapper = () => {
    return (
      <div className='app-wrapper'>
        <Information />
        <FaceRecognition />
      </div>
    );
}

export default AppWrapper;