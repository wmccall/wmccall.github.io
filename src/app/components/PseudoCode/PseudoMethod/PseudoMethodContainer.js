import { connect } from 'react-redux';
import PseudoMethod from './PseudoMethod';

const mapStateToProps = state => ({
  skillVisible: state.homeState.skillVisible,
  interestVisible: state.homeState.interestVisible,
  achievementVisible: state.homeState.AchievementVisible,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PseudoMethod);
