import React from 'react';
import { PropTypes } from 'prop-types';

import backgroundCode from '../../constants/backgroundCode';

import WillHoodie from '../../resources/WillHoodie.jpg';

const Home = props => {
  const {
    setHoverCategory,
    setPermanentCategory,
    hoverCategory,
    permanentCategory,
    allWords,
  } = props;

  const hideProfile = hoverCategory || permanentCategory;

  return (
    <div className="home">
      <div className="code-container">{backgroundCode(allWords)}</div>
      <div className={`profile-container ${hideProfile ? 'opaque' : 'show'}`}>
        <img
          className="profile-picture"
          src={WillHoodie}
          alt="Will's profile"
        />
      </div>
      <div className="action-buttons">
        <button
          className={`skills-button ${
            permanentCategory === 'skill' ? 'active' : ''
          }`}
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
          className={`interests-button ${
            permanentCategory === 'interest' ? 'active' : ''
          }`}
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
          className={`achievements-button ${
            permanentCategory === 'achievement' ? 'active' : ''
          }`}
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
  hoverCategory: PropTypes.string,
  setPermanentCategory: PropTypes.func.isRequired,
  permanentCategory: PropTypes.string,
  allWords: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Home.defaultProps = {
  hoverCategory: null,
  permanentCategory: null,
};

export default Home;
