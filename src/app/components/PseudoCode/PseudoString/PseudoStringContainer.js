import { connect } from 'react-redux';
import PseudoString from './PseudoString';

const mapStateToProps = state => ({
  skillVisible: state.homeState.skillVisible,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PseudoString);
