import { connect } from 'react-redux';
import TagPage from './TagPage';
import {
  setCurrentTags,
  setCurrentWord,
  setCurrentPage,
} from '../ducks/ViewsActions';

const mapStateToProps = state => ({
  allWords: state.viewState.allWords,
  currentWord: state.viewState.word,
  currentTags: state.viewState.tags,
  currentTagType: state.viewState.tagType,
});

const mapDispatchToProps = {
  setCurrentTags,
  setCurrentWord,
  setCurrentPage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TagPage);
