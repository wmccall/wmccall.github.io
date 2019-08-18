import { connect } from 'react-redux';
import PseudoElement from './PseudoElement';
import { ViewsActions } from '../../../views/ducks';

const mapStateToProps = state => ({
  hoverCategory: state.viewState.hoverCategory,
  permanentCategory: state.viewState.permanentCategory,
  currentTags: state.viewState.tags,
});

const mapDispatchToProps = {
  setCurrentTags: ViewsActions.setCurrentTags,
  setCurrentWord: ViewsActions.setCurrentWord,
  setCurrentPage: ViewsActions.setCurrentPage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PseudoElement);
