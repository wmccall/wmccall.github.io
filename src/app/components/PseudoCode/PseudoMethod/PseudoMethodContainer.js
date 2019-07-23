import { connect } from 'react-redux';
import PseudoMethod from './PseudoMethod';

const mapStateToProps = state => ({
  hoverCategory: state.homeState.hoverCategory,
  permanentCategory: state.homeState.permanentCategory,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PseudoMethod);
