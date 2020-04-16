import React from 'react';
import './App.css';
import Counter from './components/counter';
import MyName from "./components/myName"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <MyName />
      </header>
    </div>
  );
}

export default App;
