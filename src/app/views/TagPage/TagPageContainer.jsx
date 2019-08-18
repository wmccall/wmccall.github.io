import { connect } from 'react-redux';
import TagPage from './TagPage';
import {
  setCurrentTag,
  setCurrentWord,
  setCurrentPage,
} from '../ducks/ViewsActions';

const mapStateToProps = state => ({
  allWords: state.viewState.allWords,
  currentWord: state.viewState.word,
  currentTag: state.viewState.tag,
  currentTagType: state.viewState.tagType,
});

const mapDispatchToProps = {
  setCurrentTag,
  setCurrentWord,
  setCurrentPage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TagPage);
