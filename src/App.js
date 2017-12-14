import React, { Component } from 'react';
import CompOne from "./components/DivOne.js"


class App extends Component {
  render() {
    return (
      <div>
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
