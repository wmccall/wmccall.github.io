import React, { useState } from 'react';
import Emoji from 'a11y-react-emoji';
import BlurryCode from '../resources/BlurryCode.png';
import WillHoodie from '../resources/WillHoodie.jpg';
import Logo from '../resources/LogoWhiteBackground.png';

const Home = () => {
  return (
    <div className="home">
      <div className="code-container">
        <img className="code-picture" src={BlurryCode} alt="Code" />
      </div>
      <div className="profile-container">
        <img
          className="profile-picture"
          src={WillHoodie}
          alt="Will's profile"
        />
      </div>
      <div className="action-buttons">
        <button className="skills-button" type="button">
          what are my skills
        </button>
        <button className="interests-button" type="button">
          what are my interests
        </button>
        <button className="achievements-button" type="button">
          what are my achievements
        </button>
      </div>
    </div>
  );
};

export default Home;
