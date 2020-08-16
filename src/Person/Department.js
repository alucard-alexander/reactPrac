import React, { Component } from 'react'

class Department extends Component{
  render(){
    return(
      <div>
        <h1> this is { this.props.name }, well now am { this.props.age } </h1>
      </div>
    )
  }
}

export default Department