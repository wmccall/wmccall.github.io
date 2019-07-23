import { connect } from 'react-redux';
import PseudoGlobal from './PseudoGlobal';

const mapStateToProps = state => ({
  hoverCategory: state.homeState.hoverCategory,
  permanentCategory: state.homeState.permanentCategory,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PseudoGlobal);
