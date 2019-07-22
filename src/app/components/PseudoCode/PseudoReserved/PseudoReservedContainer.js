import { connect } from 'react-redux';
import PseudoReserved from './PseudoReserved';

const mapStateToProps = state => ({
  achievementVisible: state.homeState.achievementVisible,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PseudoReserved);
