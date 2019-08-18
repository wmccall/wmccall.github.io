import { connect } from 'react-redux';
import Definition from './Definition';

const mapStateToProps = state => ({
  type: state.viewState.tagType,
  word: state.viewState.tag,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Definition);
