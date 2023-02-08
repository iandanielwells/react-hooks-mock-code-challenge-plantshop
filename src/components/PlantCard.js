import React, { useState } from "react";

function PlantCard( {image, name, price} ) {

  const [inStock, setInStock] = useState(true)

  //if this function does not work, then have to create two separate functions for handling both in and out of stock
  function handleClick(event) {
    setInStock(prev => !prev)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
