import React from 'react';
import { PropTypes } from 'prop-types';
import BasePage from './BasePage';
import willPhoto from '../resources/Will.jpg';
import Photo from '../components/Photo';

const Home = props => {
  const { pages } = props;

  const pageContents = (
    <div className="home">
      <Photo
        photoPath={willPhoto}
        photoText="WillProfile"
        width="300px"
        fit="cover"
      />
    </div>
  );

  return <BasePage pages={pages}>{pageContents}</BasePage>;
};

Home.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Home;
