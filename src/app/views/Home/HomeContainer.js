import { connect } from 'react-redux';
import Home from './Home';
import {
  setSkillVisible,
  setInterestVisible,
  setAchievementVisible,
} from './ducks/HomeActions';

const mapStateToProps = state => ({
  skillVisible: state.homeState.skillVisible,
  interestVisible: state.homeState.interestVisible,
  achievementVisible: state.homeState.achievementVisible,
});

const mapDispatchToProps = {
  setSkillVisible,
  setInterestVisible,
  setAchievementVisible,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
