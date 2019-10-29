import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './compoents/Greet'
import Welcome from './compoents/Welcome'


function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
    </div>
  );
}

export default App;
