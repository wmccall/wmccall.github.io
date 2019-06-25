import { connect } from 'react-redux';
import NavBar from './NavBar';
import { setCurrentPage } from './ducks/NavBarActions';

const mapStateToProps = state => ({
  currentPage: state.navState.page,
});

const mapDispatchToProps = {
  setCurrentPage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
