import React from "react";

let Thumbnail = function(props) {
  return (
    <div>
      <span className="image">{props.image}</span> |
      <span className="name">{props.name}</span> |
      <span className="price">{props.price}</span> |
      <span className="condition">{props.condition}</span> |
    </div>
  );
};

export default Thumbnail;
