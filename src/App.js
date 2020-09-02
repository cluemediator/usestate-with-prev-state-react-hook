import React from 'react';
import ClassCounter from './ClassCounter';
import HookCounter from './HookCounter';

function App() {
  return (
    <div className="App">
      <h3>useState with the previous state - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h3>
      <ClassCounter /><br /><br />
      <HookCounter />
    </div>
  );
}

export default App;
