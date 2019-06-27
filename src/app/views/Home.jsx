import React from 'react';
import { PropTypes } from 'prop-types';
import BasePage from './BasePage';
import willPhoto from '../resources/WillHoodie.jpg';
import Photo from '../components/Photo';

const Home = props => {
  const { pages } = props;

  const pageContents = (
    <div className="home">
      <div className="profile-container">
        <img className="profile-photo" src={willPhoto} alt="Profile" />
        <div className="photo-overlay">
          <div className="profile-text">
            <h1 className="profile-name">Will McCall</h1>
          </div>
        </div>
      </div>
    </div>
  );

  return <BasePage pages={pages}>{pageContents}</BasePage>;
};

Home.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Home;
