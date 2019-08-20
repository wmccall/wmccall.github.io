import { connect } from 'react-redux';
import TagPage from './TagPage';
import { goForwardPage, goBackPage } from '../ducks/ViewsActions';

const mapStateToProps = state => ({
  allWords: state.viewState.allWords,
  currentWord: state.viewState.pageSequence.slice(-1)[0].word,
  currentTag: state.viewState.pageSequence.slice(-1)[0].tag,
  currentTagType: state.viewState.pageSequence.slice(-1)[0].tagType,
  previousTagType: state.viewState.pageSequence.slice(-2)[0].tagType,
});

const mapDispatchToProps = {
  goForwardPage,
  goBackPage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TagPage);
