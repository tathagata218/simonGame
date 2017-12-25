import React, { Component } from 'react';
import CompOne from "./components/DivOne.js"
import "./App.css";


class App extends Component {

 render() {
    return (
      <div>

         <div className="title"> </div>
      <div className="contentConatiner">
  
      <CompOne />
      
       </div>
      </div>
    );
  }
}

export default App;
