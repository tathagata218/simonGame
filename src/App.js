import React, { Component } from 'react';
import CompOne from "./components/DivOne.js"
import "./App.css";


class App extends Component {
  render() {
    return (
      <div>

        <h1>The Simon Game</h1>
      <div className="contentConatiner">
      <CompOne/>
       <CompOne/>
       <CompOne/>
       <CompOne/>
       </div>
      </div>
    );
  }
}

export default App;
