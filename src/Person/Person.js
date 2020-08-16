import React from 'react'

let person = (props) => {
  return(
    <div>
      <h1>This is {props.name} and my age is {props.age} </h1>
      <input onChange={ props.changed } value={props.name} />
    </div>
  )
}

export default person;