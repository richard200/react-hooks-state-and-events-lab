import React, { useState } from "react";

function Item({ name, category }) {

  let [inCart, setInCart] = useState(false)

  let HandleClick = () => {
    setInCart((inCart) => !inCart)
  }

  const itemClass = inCart ? "" : "in-cart"

  return (
 <div className = {itemClass}>
    <li className = {itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={HandleClick} className="add">Add to Cart</button>
    </li>
    </div>
  );
}

export default Item;
