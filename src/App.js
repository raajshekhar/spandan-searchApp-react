import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout/Layout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <div className="container">
          <Layout/>
        </div>
    </div>
  );
}

export default App;
