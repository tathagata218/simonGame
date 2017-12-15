import React, { Component } from "react";
import "./divOne.css";
class CompOne extends Component{
render (){
    return (
    <div className="gameContent">
     
    <div className="inforDiv">
     <h1>Simon</h1>
    <div id="btnContent">
        <div>
            <div id ="pointCol">
                <h6>Points count</h6>
            </div>
            <p>Count</p>
        </div>
        <div>
            <div id ="startLight" ></div>
            <button>Start</button>
        </div>
        <div>
            <div id ="strictLight"></div>
            <button>Strict</button>
        </div>
    
    </div>

     </div>
        
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
