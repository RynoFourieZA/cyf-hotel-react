import React from "react";

const RestaurantButton = props => {
  console.log("This is props on its own: ", props);
  console.log("This is props.orderButton: ", props.orderButton);
  return (
    <button className="btn btn-primary" onClick={props.orderButton}>
      Add
    </button>
  );
};

export default RestaurantButton;
