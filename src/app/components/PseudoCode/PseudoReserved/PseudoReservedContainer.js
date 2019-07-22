import { connect } from 'react-redux';
import PseudoReserved from './PseudoReserved';

const mapStateToProps = state => ({
  skillVisible: state.homeState.skillVisible,
  interestVisible: state.homeState.interestVisible,
  achievementVisible: state.homeState.AchievementVisible,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PseudoReserved);
