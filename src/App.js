import React from 'react';
import Body from './Body'
import './App.css';
  
function App() {
  return (
    <div style={{ color: 'red', width: '80%', margin: 'auto', 'text-align': 'center' }}>
      <div id='body'></div>
      ReactDOM.render(<Body />, document.getElementById('body'))
    </div>
  );
}

export default App;
