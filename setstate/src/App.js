import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter'
import Counter1 from './component/Counter1'
import Counter2 from './component/Counter2'
import Counter3 from './component/Counter3'
function App() {
  return (
    <div className="App">
    <Counter/>
    <Counter1/>
    <Counter2/>
    <Counter3/>
    </div>
  );
}

export default App;
