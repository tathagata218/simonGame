import React, { Component } from "react";
import "./divOne.css";
class CompOne extends Component{
render (){
    return (
    <div className="gameContent">
     <div className="inforDiv"></div>
        
        <div className="colorDivContainer">
            <div className="divOne mainDiv"></div>
            <div className="divTwo mainDiv"></div>
            <div className="divThree mainDiv"></div>
            <div className="divFour mainDiv"></div>
       </div> 
    </div>
    )
}

}

export default CompOne;
