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
        strictBtn : false,
        compTurn : false,
        playerTurn : false,
      }

clickStart = () => {
    
this.setState({
    startBtn : true
});


setInterval (this.compGame , 1000);

} 

clickStrict = () => {
    this.setState({
        strictBtn : true
    }); 
} 

clickOnOff = (event) => {
    if(event.target.checked){
    this.setState({
        gameOnandOff : event.target.checked
    });
    }
    else {
    this.setState({
        gameOnandOff : false,
        startBtn : false,
        strictBtn : false

    });
    }

 
}

compGame = () => {
    let element1 = document.getElementById("one");
    let element2 = document.getElementById("two");
    let element3 = document.getElementById("three");
    let element4 = document.getElementById("four");

    element1.click();

}

clickDiv1 = () =>{
    let test = new  Audio();
    test.src ="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
    if(this.state.gameOnandOff && this.state.startBtn){
    test.play();
        }
}

clickDiv2 = () =>{
    let test2 = new Audio();
    test2.src = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
    if(this.state.gameOnandOff && this.state.startBtn){
    test2.play();}
}
clickDiv3 = () =>{
    let test3 = new Audio();
    test3.src = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
    if(this.state.gameOnandOff && this.state.startBtn) {
    test3.play();}
}
clickDiv4 = () =>{
    let test4 = new Audio();
    let element = document.getElementById("four");
    test4.src = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
    if(this.state.gameOnandOff && this.state.startBtn){
    test4.play();}
}

colorChange = () => {
    alert("this works");
}

render (){
    return (
    <div className="gameContent">
     
    <div className="inforDiv">
     <h1>Simon</h1>
    <div id="btnContent">
        <div className="disBtn">
            <div id ="pointCol">
                <h1 id="countID">{this.state.count}</h1>
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
            <div id="one" name="one" className="divOne mainDiv" onClick={this.clickDiv1} ></div>
            <div id="two" name="two" className="divTwo mainDiv" onClick={this.clickDiv2}></div>
            <div id="three" name="three" className="divThree mainDiv" onClick={this.clickDiv3}></div>
            <div id="four" name="four" className="divFour mainDiv" onClick={this.clickDiv4}></div>
       </div> 
    </div>
    )
}

}

export default CompOne;
