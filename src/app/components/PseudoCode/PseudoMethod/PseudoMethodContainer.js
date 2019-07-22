import { connect } from 'react-redux';
import PseudoMethod from './PseudoMethod';

const mapStateToProps = state => ({
  interestVisible: state.homeState.interestVisible,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PseudoMethod);
