import React from 'react';
import './App.css';
import Counter from './components/counter';
import MyName from "./components/myName";
import HookCounterFive from "./components/HookCounterFive";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        {/* <MyName /> */}
        <HookCounterFive />
      </header>
    </div>
  );
}

export default App;
