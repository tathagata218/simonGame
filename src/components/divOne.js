import React, { Component } from "react";
import "./divOne.css";
class CompOne extends Component{
render (){
    return (
    <div className="gameContent">
     
    <div className="inforDiv">
     <h1>Simon</h1>
    <div id="btnContent">
        <div className="disBtn">
            <div id ="pointCol">
                <p>Points count</p>
            </div>
            <p>Count</p>          
        </div>
        <div className="disBtn">
            <div id ="startLight" ></div>
            <button>Start</button>
        </div>
        <div className="disBtn">
            <div id="strictLight"></div>
            <div id ="strictbtnLight"></div>
            <button>Strict</button>
        </div>
    
    </div>

     </div>
        
        <div className="colorDivContainer">
            <div name="one" className="divOne mainDiv"></div>
            <div name="two" className="divTwo mainDiv"></div>
            <div name="three" className="divThree mainDiv"></div>
            <div name="four" className="divFour mainDiv"></div>
       </div> 
    </div>
    )
}

}

export default CompOne;
