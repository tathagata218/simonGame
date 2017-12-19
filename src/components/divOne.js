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

clickDiv1 = () =>{
    let test = new  Audio();
    test.src ="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
    if(this.state.gameOnandOff){
    test.play();
        }
}

clickDiv2 = () =>{
    let test2 = new Audio();
    test2.src = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
    if(this.state.gameOnandOff){
    test2.play();}
}
clickDiv3 = () =>{
    let test3 = new Audio();
    test3.src = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
    if(this.state.gameOnandOff){
    test3.play();}
}
clickDiv4 = () =>{
    let test4 = new Audio();
    test4.src = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
    if(this.state.gameOnandOff){
    test4.play();}
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
            <div name="one" className="divOne mainDiv" onClick={this.clickDiv1}></div>
            <div name="two" className="divTwo mainDiv" onClick={this.clickDiv2}></div>
            <div name="three" className="divThree mainDiv" onClick={this.clickDiv3}></div>
            <div name="four" className="divFour mainDiv" onClick={this.clickDiv4}></div>
       </div> 
    </div>
    )
}

}

export default CompOne;
