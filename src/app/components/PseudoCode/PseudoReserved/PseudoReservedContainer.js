import { connect } from 'react-redux';
import PseudoReserved from './PseudoReserved';

const mapStateToProps = state => ({
  hoverCategory: state.homeState.hoverCategory,
  permanentCategory: state.homeState.permanentCategory,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PseudoReserved);
