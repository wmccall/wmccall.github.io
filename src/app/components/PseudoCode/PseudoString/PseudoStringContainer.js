import { connect } from 'react-redux';
import PseudoString from './PseudoString';

const mapStateToProps = state => ({
  hoverCategory: state.homeState.hoverCategory,
  permanentCategory: state.homeState.permanentCategory,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PseudoString);
