import React from 'react';
import API from './utils/API.js'
import Navbar from './Components/Navbar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <API/>
    </div>
  );
}

export default App;
