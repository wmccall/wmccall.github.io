import { connect } from 'react-redux';
import App from './App';
import { ViewsActions } from './views/ducks';

const mapStateToProps = state => ({
  page: state.viewState.page,
});

const mapDispatchToProps = {
  changePage: ViewsActions.changePage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
