import React, { useState } from "react";

function Item({ name, category }) {

  let [item, setItem] = useState("")

  const itemClass = [item, setItem ? "" : "in-cart"]

  return (
    <div className={itemClass}>

   
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => setItem({itemClass})} className="add">Add to Cart</button>
    </li>
    </div>
  );
}

export default Item;
