import React from "react";
import Item from "./Item";
import { useState } from "react"
function ShoppingList({ items }) {
  const [pickedCategory, setCategory] = useState("All")

  function handleFilter(category){
    const pickedCategory = items.filter((item) => item.cateogry !== category); 
    setCategory(pickedCategory)
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onClick={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
