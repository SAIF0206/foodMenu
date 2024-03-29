import React from "react";
import FoodItem from "./FoodItem";

const Items = [
  {
    name: "Carrot Halwa",
    ingredients: "Carrots, Sugar, Condense Milk",
    photoName: "./Items/carrotHalwa.jpeg",
    process: "easy",
  },
  {
    name: "Mutton Paya",
    ingredients: "Mutton Legs",
    photoName: "./Items/mutton.jpeg",
    process: "easy",
  },
  {
    name: "Chicken Lolipop",
    ingredients: "Deep fried chicken wings",
    photoName: "./Items/chicken.jpeg",
    process: "easy",
  },
  {
    name: "Pompfret Fish",
    ingredients: "White Pompfret Fish tawa fry",
    photoName: "./Items/fish.jpeg",
    process: "easy",
  },
  {
    name: "Paneer Pratha",
    ingredients: "Indian cottage cheeze stuffed pratha",
    photoName: "./Items/paneer.jpeg",
    process: "easy",
  },
  {
    name: "Jalebi",
    ingredients: "Sweet dish tu banti hai",
    photoName: "./Items/Jalebi.jpeg",
    process: "difficult",
  },
];

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Indian cuisine, straight from home made kitchen right under
        the obervation of Chef Avinash 👨‍🍳
      </p>
      <ul className="pizzas">
        {Items.map((item) => (
          <FoodItem FoodObj={item} key={item.name} />
        ))}
      </ul>
    </main>
  );
}

export default Menu;
