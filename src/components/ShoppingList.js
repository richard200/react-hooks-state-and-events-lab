import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  let [selCategory, setSelCategory] = useState('All')
  
  function handleCat(e){
    setSelCategory(e.target.value)
  }

  let displayItems = items.filter((item) => {
    if (selCategory === "All")
    return true
    

    return item.category === selCategory;
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCat}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
