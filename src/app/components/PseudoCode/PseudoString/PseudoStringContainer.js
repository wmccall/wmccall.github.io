import { connect } from 'react-redux';
import PseudoString from './PseudoString';

const mapStateToProps = state => ({
  skillVisible: state.homeState.skillVisible,
  interestVisible: state.homeState.interestVisible,
  achievementVisible: state.homeState.AchievementVisible,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PseudoString);
