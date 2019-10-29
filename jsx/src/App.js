import React from 'react';
import logo from './logo.svg';
import './App.css';
import Withjsx from './with-jsx/Withjsx';
import Withoutjsx from './without-jsx/Withoutjsx'

function App() {
  return (
    <div className="App">
     <Withjsx/>
     <Withoutjsx/>
    </div>
  );
}

export default App;
