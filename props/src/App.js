import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Funcprop/Greet';
import Welcome from './Classprop/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name='Clark' age = '17'><p>Hey I am a children prop</p></Greet>
      <Greet name='Tony' age = '27'><button>Action</button></Greet>
      <Greet name='Mary'  age='37'/>
      <Welcome name='John' age = '25'><button>Action</button></Welcome>
      <Welcome name='Doe' age = '45'/>
      <Welcome name='Neymar' age = '29'/>
    </div>
  );
}

export default App;
