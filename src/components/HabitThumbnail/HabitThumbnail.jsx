import React from "react";
import { connect } from "react-redux";
// import { actionsGetHiyee } from "../../actions";
import { actionsGetThumbnail } from "../../actions";
// import { actionsToggle } from '../../actions';

let Thumbnail = function(props) {
  return (
    // need to figure out how to link this to modal
    // <a href="">

    // 2nd way:
    // handleThumbnailClick = () => {
    //   props.getThumbnail('detailedItem');
    // }
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
      return dispatch(actionsGetThumbnail()); // dispatches getThumbnail in actions/index.js
    }
  };
};

// 2nd way:
// const mapDispatchToProps = dispatch => {
//   return {
//     getThumbnail: link => {
//       console.log("send click to actions");
//       return dispatch(actionsGetThumbnail(link));
//     }
//   };
// };

const mapStateToProps = store => {
  console.log(store.message);
  return { message: store.message };
};

Thumbnail = connect(
  mapDispatchToProps,
  mapStateToProps
)(Thumbnail);

export default Thumbnail;
