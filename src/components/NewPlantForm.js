import React from "react";

function NewPlantForm({onAddPlant}) {

  function handleSubmit(event) {
    event.preventDefault()

    const newPlant = {
      image: event.target.image.value,
      name: event.target.name.value,
      price: event.target.price.value
    }

    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then(onAddPlant(newPlant))

      event.target.reset()
  }

  
  return (
    <div 
      onSubmit={handleSubmit}
      className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
