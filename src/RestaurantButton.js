import React from "react";

const RestaurantButton = props => {
  return (
    <button className="btn btn-primary" onClick={props.orderButton}>
      Add
    </button>
  );
};

export default RestaurantButton;
