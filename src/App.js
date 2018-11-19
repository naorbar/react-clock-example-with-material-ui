import React, { Component } from 'react';
import Clock from './components/Clock';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock clockId='1' interval='5000'/>
        <Clock clockId='2' interval='2000'/>
        <Clock clockId='3' interval='1000'/>
      </div>
    );
  }
}

export default App;
