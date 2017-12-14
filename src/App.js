import React, { Component } from 'react';
import CompOne from "./components/DivOne.js"
import "./App.css";


class App extends Component {

  state = {
    boxArr : []

  }




  render() {
    return (
      <div>

        <h1 className="title">The Simon Game</h1>
      <div className="contentConatiner">
      <CompOne />
      
       </div>
      </div>
    );
  }
}

export default App;
