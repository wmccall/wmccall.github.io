import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  page: state.viewState.page,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
