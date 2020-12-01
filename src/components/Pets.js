import React from 'react';

const Pets = (props)=>{


  const renderPets = () => {
    return props.pets.map((pet, index)=>{
      return(
        <div>
          <li key={index}>{pet.name} -- {pet.animal}</li>
          <button onClick={()=>props.deletePet(pet.name)}>Delete</button>
        </div>
      )
    })
  }  
  return (
    <div>
      <h2>Pets component</h2>
      <label htmlFor="addAnimal">Pet's name: </label>
      <input type="text" id="addAnimal" name="addAnimal"/>
      <button onClick={
        ()=>props.addPet(document.getElementById('addAnimal').value)
      }>
        Add
      </button>
      <ul>
        {renderPets()}
      </ul>
    </div>
  )
}

export default Pets