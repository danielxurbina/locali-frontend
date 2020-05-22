import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <NavBar/>
        <HomePage /> 
      </div>
    );
  }
}

export default App;
