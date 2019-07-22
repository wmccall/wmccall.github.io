import React, { useState } from 'react';
import Emoji from 'a11y-react-emoji';
import BlurryCode from '../resources/BlurryCode.png';
import WillHoodie from '../resources/WillHoodie.jpg';
import Logo from '../resources/LogoWhiteBackground.png';

import pseudoCode from '../constants/pseudoCode';

const Home = () => {
  const [skillHover, setSkillHover] = useState(false);
  const [interestHover, setInterestHover] = useState(false);
  const [achievementHover, setAchievementHover] = useState(false);

  const actionHovers = { skillHover, interestHover, achievementHover };
  return (
    <div className="home">
      <div className="code-container">
        {pseudoCode.pseudoImport(
          { type: 'skill', word: 'React' },
          { type: 'interest', word: 'react' },
          actionHovers,
        )}
      </div>
      <div
        className={`profile-container ${
          skillHover || interestHover || achievementHover ? 'opaque' : 'show'
        }`}
      >
        <img
          className="profile-picture"
          src={WillHoodie}
          alt="Will's profile"
        />
      </div>
      <div className="action-buttons">
        <button
          className="skills-button"
          type="button"
          onMouseEnter={() => setSkillHover(true)}
          onMouseLeave={() => setSkillHover(false)}
        >
          what are my skills
        </button>
        <button
          className="interests-button"
          type="button"
          onMouseEnter={() => setInterestHover(true)}
          onMouseLeave={() => setInterestHover(false)}
        >
          what are my interests
        </button>
        <button
          className="achievements-button"
          type="button"
          onMouseEnter={() => setAchievementHover(true)}
          onMouseLeave={() => setAchievementHover(false)}
        >
          what are my achievements
        </button>
      </div>
    </div>
  );
};

export default Home;
