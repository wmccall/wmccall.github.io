import { connect } from 'react-redux';
import TagPage from './TagPage';
import { setCurrentTags, setCurrentPage } from '../ducks/ViewsActions';

const mapStateToProps = state => ({
  allWords: state.viewState.allWords,
  currentTags: state.viewState.tags,
  currentTagType: state.viewState.tagType,
});

const mapDispatchToProps = {
  setCurrentTags,
  setCurrentPage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TagPage);
