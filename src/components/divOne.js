import React, { Component } from "react";
import "./divOne.css";
class CompOne extends Component{

    state = {
        compBoxArr : [],
        playerChoice : [],
        count : 0,
        numOfWins : 0,
        boxIntial : ["one","two","three","four "],
        startBtn : false,
        stritctBtn : false
      }

clickStart = () => {

} 

clickStrict = () => {
    alert("this is Start button test");
} 

clickOnOff = (event) => {
if(event.target.checked){
    this.setState({
        gameOnandOff : event.target.checked
    });
}
else {
    this.setState({
        gameOnandOff : false
    });
}

 
} 


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
            <button id="startGameBtn" onClick={this.clickStart}></button>
            <p className="InfoScript">START</p>
        </div>
        <div className="disBtn">
            <div id="strictLight"></div>
            <button id="strictGameBtn" onClick={this.clickStrict}></button>
            <p className="InfoScript">STRICT</p>
        </div>
    
    </div>

    <div id ="slidBar">
        <h3 className="onOffSwitch">OFF</h3>
        <label className="switch">
            <input type="checkbox" id="checkOnOff" onChange={this.clickOnOff}/>
            <span className="slider"></span>
        </label>
        <h3 className="onOffSwitch">ON</h3>
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
