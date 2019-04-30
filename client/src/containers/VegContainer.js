import { connect } from "react-redux";
import VegetableList from "../components/VegetableList";
import { getAllVegetables } from "../actions";

function mapStateToProps(state) {
  return {
    vegetableList: state.vegetableList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllVegetables: () => dispatch(getAllVegetables())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VegetableList);
