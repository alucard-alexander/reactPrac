import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'
import Department from './Person/Department.js';

class App extends Component{
  state ={
    persons: [
      { name: 'dilip', age: 25 },
      { name: 'kumar', age: 25 },
      { name: 'm', age: 25 }
    ],
    otherState: 'ckeck'
  }


  clickFunction = () => {
    this.setState(
      {
        persons: [
          { name: 'dilip', age: 24 },
          { name: 'kumar', age: 24 },
          { name: 'm', age: 24 }
        ]
      }
    )
    console.log(this.state)
  }

  inputChangeName = (event) => {
    this.setState({
      persons:[
        { name: 'dilip', age: 24 },
        { name: event.target.value, age: 24 },
        { name: 'm', age: 24 }
      ]
    })
  }

  render(){
    return(
      <div style={{color: 'red', width: '80%', margin: 'auto', textAlign: 'center'}}>
        <button onClick={this.clickFunction}>Click here function</button>
        <Person name = {this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age={this.state.persons[1].age} changed={ this.inputChangeName } />
        <Department name = {this.state.persons[2].name} age={this.state.persons[2].age} />
        <Department />
      </div>
    )
  }
}

export default App;

