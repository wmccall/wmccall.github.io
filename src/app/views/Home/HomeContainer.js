import { connect } from 'react-redux';
import Home from './Home';
import { setHoverCategory, setPermanentCategory } from './ducks/HomeActions';

const mapStateToProps = state => ({
  hoverCategory: state.homeState.hoverCategory,
  permanentCategory: state.homeState.permanentCategory,
});

const mapDispatchToProps = {
  setHoverCategory,
  setPermanentCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
