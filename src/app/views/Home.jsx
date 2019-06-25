import React from 'react';
import { PropTypes } from 'prop-types';
import BasePage from './BasePage';
import willPhoto from '../resources/WillLizard.jpg';
import Photo from '../components/Photo';

const Home = props => {
  const { pages } = props;

  const pageContents = (
    <div className="home">
      <div className="profile-photo-container">
        <div className="profile-photo">
          <Photo
            photoPath={willPhoto}
            photoText="WillProfile"
            width="400px"
            fit="cover"
            position="50% 3%"
            scale={1.2}
          />
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
