import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

class VegetableList extends Component {
  componentDidMount() {
    this.props.getAllVegetables();
  }

  render() {
    console.log(this.props);

    // return null;
    // when user adds veggie to array, then run update, when db updates state also updates
    if (this.props.vegetableList.length < 1) {
      return <h2>Loading...</h2>;
    } else {
      return (
        <ul>
          {this.props.vegetableList.map(veggie => {
            return <li key={veggie._id}>{veggie.name}</li>;
          })}
        </ul>
      );
    }
  }
}
export default VegetableList;
