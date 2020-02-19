import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions/featureActions";

const AddedFeature = (props) => {
  console.log("Remove function props:", removeFeature(props));
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeature(props)} className="button">
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
