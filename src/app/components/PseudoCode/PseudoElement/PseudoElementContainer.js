import { connect } from 'react-redux';
import PseudoElement from './PseudoElement';

const mapStateToProps = state => ({
  hoverCategory: state.viewState.hoverCategory,
  permanentCategory: state.viewState.permanentCategory,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PseudoElement);
