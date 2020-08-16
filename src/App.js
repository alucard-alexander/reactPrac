import React from 'react';
import './App.css';
import Person from './Person/Person.js'
import Department from './Person/Department.js';

function App() {
  return (
    <div style={{ color: 'red', width: '80%', margin: 'auto', 'text-align': 'center' }}>
      <Person name='dilip' />
      <Person name ='kumar'/>
      <Person name ='m'/>
      <Department name='dilip' />
      <Department/>
    </div>
  );
}

export default App;

