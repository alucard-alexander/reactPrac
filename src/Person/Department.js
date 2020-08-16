import React, { Component } from 'react'

class Department extends Component{
  render(){
    return(
      <div>
        <hi> this is { this.props.name }</hi>
      </div>
    )
  }
}

export default Department