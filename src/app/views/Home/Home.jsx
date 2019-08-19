import React from 'react';
import { PropTypes } from 'prop-types';

import backgroundCode from '../../constants/backgroundCode';

import ProfilePhoto from '../../resources/WillKeeb.jpg';

const ACTIONS_BUTTONS_TYPES = ['skill', 'interest', 'project'];

const Home = props => {
  const {
    setHoverCategory,
    setPermanentCategory,
    hoverCategory,
    permanentCategory,
    allWords,
  } = props;

  const hideProfile = hoverCategory || permanentCategory;

  const profile = () => (
    <div className={`profile-container ${hideProfile ? 'opaque' : 'show'}`}>
      <img
        className="profile-picture"
        src={ProfilePhoto}
        alt="Will's profile"
      />
    </div>
  );

  const actionButtons = () => (
    <div className="action-buttons">
      {ACTIONS_BUTTONS_TYPES.map(actType => (
        <button
          className={`${actType}s-button ${
            permanentCategory === actType ? 'active' : ''
          }`}
          type="button"
          onMouseEnter={() => setHoverCategory(actType)}
          onMouseLeave={() => setHoverCategory(null)}
          onClick={() =>
            setPermanentCategory(permanentCategory === actType ? null : actType)
          }
        >
          <span className="button-will">Will</span>
          <span className="button-dot">.</span>
          <span className="button-type">{`${actType}s`}</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="home">
      <div className="code-container">{backgroundCode(allWords)}</div>
      {profile()}
      {actionButtons()}
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
