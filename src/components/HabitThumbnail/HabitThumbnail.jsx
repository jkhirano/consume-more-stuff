import React from "react";
import { connect } from "react-redux";
// import { actionsGetHiyee } from "../../actions";
import { getThumbnail } from "../../actions";

let Thumbnail = function(props) {
  return (
    // need to figure out how to link this to modal
    // <a href="">
    <div>
      <span className="image">{props.image}</span> |
      <span className="name">{props.name}</span> |
      <span className="price">{props.price}</span> |
      <span className="condition">{props.condition}</span> |
    </div>
    // </a>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getThumbnail: function() {
      return dispatch(getThumbnail()); // dispatches getThumbnail in actions/index.js
    }
  };
};

const mapStateToProps = store => {
  return {};
};

Thumbnail = connect(
  mapDispatchToProps,
  mapStateToProps
)(Thumbnail);

export default Thumbnail;
