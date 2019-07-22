import React from 'react';
import { PropTypes } from 'prop-types';

import Emoji from 'a11y-react-emoji';
import BlurryCode from '../../resources/BlurryCode.png';
import WillHoodie from '../../resources/WillHoodie.jpg';
import Logo from '../../resources/LogoWhiteBackground.png';

import pseudoCode from '../../components/PseudoCode';

const Home = props => {
  const { setSkillVisible, setInterestVisible, setAchievementVisible } = props;
  const { skillVisible, interestVisible, achievementVisible } = props;

  const isActionHover = skillVisible || interestVisible || achievementVisible;

  return (
    <div className="home">
      <div className="code-container">
        {pseudoCode.pseudoImport(
          { type: 'skill', word: 'React' },
          { type: 'interest', word: 'react' },
        )}
        {pseudoCode.pseudoMethodCall({ type: 'interest', word: 'Photography' })}
        {pseudoCode.pseudoImport(
          { type: 'skill', word: 'React' },
          { type: 'interest', word: 'react' },
        )}
        {pseudoCode.pseudoMethodCall({ type: 'interest', word: 'Photography' })}
        {pseudoCode.pseudoImport(
          { type: 'skill', word: 'React' },
          { type: 'interest', word: 'react' },
        )}
        {pseudoCode.pseudoMethodCall({ type: 'interest', word: 'Photography' })}
        {pseudoCode.pseudoImport(
          { type: 'skill', word: 'React' },
          { type: 'interest', word: 'react' },
        )}
        {pseudoCode.pseudoMethodCall({ type: 'interest', word: 'Photography' })}
        {pseudoCode.pseudoImport(
          { type: 'skill', word: 'React' },
          { type: 'interest', word: 'react' },
        )}
        {pseudoCode.pseudoMethodCall({ type: 'interest', word: 'Photography' })}
        {pseudoCode.pseudoImport(
          { type: 'skill', word: 'React' },
          { type: 'interest', word: 'react' },
        )}
        {pseudoCode.pseudoMethodCall({ type: 'interest', word: 'Photography' })}
        {pseudoCode.pseudoImport(
          { type: 'skill', word: 'React' },
          { type: 'interest', word: 'react' },
        )}
        {pseudoCode.pseudoMethodCall({ type: 'interest', word: 'Photography' })}
        {pseudoCode.pseudoImport(
          { type: 'skill', word: 'React' },
          { type: 'interest', word: 'react' },
        )}
        {pseudoCode.pseudoMethodCall({ type: 'interest', word: 'Photography' })}
        {pseudoCode.pseudoImport(
          { type: 'skill', word: 'React' },
          { type: 'interest', word: 'react' },
        )}
        {pseudoCode.pseudoMethodCall({ type: 'interest', word: 'Photography' })}
        {pseudoCode.pseudoImport(
          { type: 'skill', word: 'React' },
          { type: 'interest', word: 'react' },
        )}
        {pseudoCode.pseudoMethodCall({ type: 'interest', word: 'Photography' })}
        {pseudoCode.pseudoImport(
          { type: 'skill', word: 'React' },
          { type: 'interest', word: 'react' },
        )}
        {pseudoCode.pseudoMethodCall({ type: 'interest', word: 'Photography' })}
        {pseudoCode.pseudoImport(
          { type: 'skill', word: 'React' },
          { type: 'interest', word: 'react' },
        )}
        {pseudoCode.pseudoMethodCall({ type: 'interest', word: 'Photography' })}
        {pseudoCode.pseudoImport(
          { type: 'skill', word: 'React' },
          { type: 'interest', word: 'react' },
        )}
        {pseudoCode.pseudoMethodCall({ type: 'interest', word: 'Photography' })}
        {pseudoCode.pseudoImport(
          { type: 'skill', word: 'React' },
          { type: 'interest', word: 'react' },
        )}
        {pseudoCode.pseudoMethodCall({ type: 'interest', word: 'Photography' })}
        {pseudoCode.pseudoImport(
          { type: 'skill', word: 'React' },
          { type: 'interest', word: 'react' },
        )}
        {pseudoCode.pseudoMethodCall({ type: 'interest', word: 'Photography' })}
      </div>
      <div className={`profile-container ${isActionHover ? 'opaque' : 'show'}`}>
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
          onMouseEnter={() => setSkillVisible(true)}
          onMouseLeave={() => setSkillVisible(false)}
        >
          what are my skills
        </button>
        <button
          className="interests-button"
          type="button"
          onMouseEnter={() => setInterestVisible(true)}
          onMouseLeave={() => setInterestVisible(false)}
        >
          what are my interests
        </button>
        <button
          className="achievements-button"
          type="button"
          onMouseEnter={() => setAchievementVisible(true)}
          onMouseLeave={() => setAchievementVisible(false)}
        >
          what are my achievements
        </button>
      </div>
    </div>
  );
};

Home.propTypes = {
  setSkillVisible: PropTypes.func.isRequired,
  setInterestVisible: PropTypes.func.isRequired,
  setAchievementVisible: PropTypes.func.isRequired,
  skillVisible: PropTypes.bool.isRequired,
  interestVisible: PropTypes.bool.isRequired,
  achievementVisible: PropTypes.bool.isRequired,
};

export default Home;
