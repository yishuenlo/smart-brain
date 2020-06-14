import React from 'react';
import Logo from '../Logo/Logo'
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm'
import './Information.css'

const Information = () => {
    return (
      <div className="info">
        <Logo />
        <p>Welcome to Smart Brain, Pikachu.</p>
        <h2>Your Rank: 5</h2>
        <ImageLinkForm />
      </div>
    );
}

export default Information;