import { connect } from 'react-redux';
import PseudoGlobal from './PseudoGlobal';

const mapStateToProps = state => ({
  skillVisible: state.homeState.skillVisible,
  interestVisible: state.homeState.interestVisible,
  achievementVisible: state.homeState.AchievementVisible,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PseudoGlobal);
