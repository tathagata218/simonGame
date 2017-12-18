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
                <h1 id="countID">00</h1>
            </div>
            <p className="InfoScript">COUNT</p>          
        </div>
        <div className="disBtn">
            <button id="startGameBtn"></button>
            <p className="InfoScript">START</p>
        </div>
        <div className="disBtn">
            <div id="strictLight"></div>
            <button id="strictGameBtn"></button>
            <p className="InfoScript">STRICT</p>
        </div>
    
    </div>

    <div id ="slidBar">
        <h3 className="onOffSwitch">ON</h3>
        <label className="switch">
            <input type="checkbox"/>
            <span className="slider"></span>
        </label>
        <h3 className="onOffSwitch">OFF</h3>
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
