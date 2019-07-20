import React from 'react';
import { PropTypes } from 'prop-types';

const BasePage = props => {
  const { children } = props;

  return (
    <div className="base-page-container">
      <div className="base-page">
        <div className="base-page-inner">
          <div className="children-container">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

BasePage.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default BasePage;
