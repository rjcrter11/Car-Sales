import React from "react";
import { connect } from "react-redux";
import { buyItem } from "../actions/featureActions";

const AdditionalFeature = (props) => {
  console.log("Feature props", props);
  console.log("function props: ", buyItem(props));
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

export default connect(null, { buyItem })(AdditionalFeature);
