import React from "react";
import { connect } from "react-redux";
import { buyItem } from "../actions/featureActions";

const AdditionalFeature = (props) => {
  console.log(props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.buyItem(props)} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return null;
};

export default connect(mapStateToProps, { buyItem })(AdditionalFeature);
