import React from "react";
import { useState } from "react"

function Item({ name, category }) {
  const [inCart, setCart] = useState(false)

  function addCart(){
    setCart(!inCart)
  }

  const cartActions = inCart ? "Add to Cart" : "Remove From Cart"

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addCart}>{cartActions}</button>
    </li>
  );
}

export default Item;
