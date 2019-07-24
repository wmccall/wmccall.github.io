import { connect } from 'react-redux';
import Home from './Home';
import { setHoverCategory, setPermanentCategory } from '../ducks/ViewsActions';

const mapStateToProps = state => ({
  hoverCategory: state.viewState.hoverCategory,
  permanentCategory: state.viewState.permanentCategory,
  allWords: state.viewState.allWords,
});

const mapDispatchToProps = {
  setHoverCategory,
  setPermanentCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
