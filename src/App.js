import React from 'react';
import './App.css';
import StaticSideContainer from './containers/StaticSideContainer.js';
import ScrollSideContainer from './containers/ScrollSideContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StaticSideContainer/>
        <ScrollSideContainer/>
      </header>
    </div>
  );
}

export default App;
