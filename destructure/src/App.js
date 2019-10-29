import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
function App() {
  return (
    <div className="App">
    <Greet name='Mary'  age='37'/>
    <Welcome name='Neymar' age = '29'/>
    </div>
  );
}

export default App;
