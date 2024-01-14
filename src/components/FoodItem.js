import React from "react";

function FoodItem(props) {
  const { FoodObj } = props;
  return (
    <li className={`pizza ${FoodObj.process === "difficult" && "sold-out"}`}>
      <img src={FoodObj.photoName} alt={FoodObj.name} />
      <div>
        <h3>{FoodObj.name}</h3>
        <p>{FoodObj.ingredients}</p>
      </div>
    </li>
  );
}

export default FoodItem;
