import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [list, setList] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(resp => resp.json())
      .then(data => setList(data))
  }, [])

  function addPlant(newPlant) {
    setList(prev => [...prev, newPlant])
  }

  return (
    <main>
      <NewPlantForm
        onAddPlant={addPlant} />
      <Search 
        search={search}
        setSearch={setSearch} />
      <PlantList
        list={list}
        setList={setList}
        search={search} />
    </main>
  );
}

export default PlantPage;
