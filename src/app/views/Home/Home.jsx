import React from 'react';
import { PropTypes } from 'prop-types';

import Emoji from 'a11y-react-emoji';
import BlurryCode from '../../resources/BlurryCode.png';
import WillHoodie from '../../resources/WillHoodie.jpg';
import Logo from '../../resources/LogoWhiteBackground.png';

import pseudoCode from '../../components/PseudoCode';

const Home = props => {
  const {
    setHoverCategory,
    setPermanentCategory,
    hoverCategory,
    permanentCategory,
  } = props;

  const hideProfile = hoverCategory || permanentCategory;

  return (
    <div className="home">
      <div className="code-container">
        {pseudoCode.pseudoImport(
          { type: 'skill', word: 'React' },
          { type: 'interest', word: 'react' },
        )}
        {pseudoCode.pseudoMethodCall({ type: 'interest', word: 'Photography' })}
      </div>
      <div className={`profile-container ${hideProfile ? 'opaque' : 'show'}`}>
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
          onMouseEnter={() => setHoverCategory('skill')}
          onMouseLeave={() => setHoverCategory(null)}
          onClick={() =>
            setPermanentCategory(permanentCategory === 'skill' ? null : 'skill')
          }
        >
          what are my skills
        </button>
        <button
          className="interests-button"
          type="button"
          onMouseEnter={() => setHoverCategory('interest')}
          onMouseLeave={() => setHoverCategory(null)}
          onClick={() =>
            setPermanentCategory(
              permanentCategory === 'interest' ? null : 'interest',
            )
          }
        >
          what are my interests
        </button>
        <button
          className="achievements-button"
          type="button"
          onMouseEnter={() => setHoverCategory('achievement')}
          onMouseLeave={() => setHoverCategory(null)}
          onClick={() =>
            setPermanentCategory(
              permanentCategory === 'achievement' ? null : 'achievement',
            )
          }
        >
          what are my achievements
        </button>
      </div>
    </div>
  );
};

Home.propTypes = {
  setHoverCategory: PropTypes.func.isRequired,
  hoverCategory: PropTypes.shape({}).isRequired,
  setPermanentCategory: PropTypes.func.isRequired,
  permanentCategory: PropTypes.shape({}).isRequired,
};

export default Home;
