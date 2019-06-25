import { connect } from 'react-redux';
import App from './App';
import { NavBarActions } from './components/NavBar';

const mapStateToProps = state => ({
  page: state.navState.page,
});

const mapDispatchToProps = {
  changePage: NavBarActions.changePage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
