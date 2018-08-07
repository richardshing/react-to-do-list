import React, { Component } from 'react';
import './App.css';
import List from './List/List';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome!</h1>
        </header>
      
        <List className="App-list"/>

      </div>
    );
  }
}

export default App;
