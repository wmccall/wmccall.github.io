import React from 'react';
import { PropTypes } from 'prop-types';

import Home from './views/Home';
import Projects from './views/Projects';

const PAGES = {
  home: Home,
  projects: Projects,
};

const PAGE_NAMES = Object.keys(PAGES).map(
  page => page.charAt(0).toUpperCase() + page.slice(1),
);

const renderPage = pageName => {
  const Page = PAGES[pageName];
  return <Page pages={PAGE_NAMES} />;
};

const App = props => {
  const { page } = props;
  return <div className="app">{renderPage(page)}</div>;
};

App.propTypes = {
  page: PropTypes.string.isRequired,
};

export default App;
