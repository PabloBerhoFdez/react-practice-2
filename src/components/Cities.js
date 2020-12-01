import React from 'react'

const Cities = (props)=>{

  const renderCities = ()=>{
    return props.cities.map( (city, index)=> <li key={index}>{city}</li>)
  }

  const changeAlignment = ()=>{
    props.changeAlignment()
  }

  return(
    <div>
      <h2>All my cities</h2>
      <button onClick={()=>changeAlignment()}>Change text align</button>
      <ul style={{textAlign: props.alignment}}>
        {renderCities()}
      </ul>
    </div>
  )
}

export default Cities