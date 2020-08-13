import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>This is Alex's Portfolio</h1>
        <p>
          This will be the contents of my portfolio
        </p>
        <li>Title</li>
        <li>Picture LOOK NICE</li>
        <li>Credentials or Info</li>
        <li>About me</li>
        <li>Projects</li>
        <li>Links</li>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          poop your brain
        </a>
      </header>
    </div>
  );
}

export default App;
