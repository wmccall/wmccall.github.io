import { connect } from 'react-redux';
import WordLink from './WordLink';
import { ViewsActions } from '../../views/ducks';

const mapStateToProps = state => ({
  currentWord: state.viewState.word,
  currentType: state.viewState.tagType,
});

const mapDispatchToProps = {
  setCurrentTag: ViewsActions.setCurrentTag,
  setCurrentWord: ViewsActions.setCurrentWord,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WordLink);
