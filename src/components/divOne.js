import React, { Component } from "react";
import "./divOne.css";
class CompOne extends Component{

    state = {
        playerChoice : [],
        compBoxArr :[],
        compCount : 0,
        numOfWins : 0,
        boxIntial : ["one","two","three","four"],
        startBtn : false,
        strictBtn : false,
        compTurn : false,
        playerTurn : false,
        strictBtnCount : 0
          }

clickStart = () => {
    let intervalCount = 0;

 let interval =  setInterval ( () => {
     intervalCount++; 
    
    let random = Math.floor(Math.random()*4);
  
    let newArrItems =this.state.compBoxArr;

    newArrItems.push(this.state.boxIntial[random]);

    this.setState({
        startBtn : true,
       compBoxArr :newArrItems,
       playerTurn : true,
       compTurn : false
    });
    
    let element = document.getElementById(this.state.boxIntial[random]);
     element.click();
    
     console.log(this.state);

     if(!this.state.playerTurn && this.state.compBoxArr.length !== intervalCount ){
        clearInterval(interval);
    }


}, 1000);



} 



playerFunc = () => {




}


clickStrict = () => {
    let strictCount = strictCount +1;
    
    console.log(strictCount % 2);
    if( (strictCount % 2) !== 0 ) {

    this.setState({
        strictBtn : true
    }); 

    document.getElementById("strictLight").style.backgroundColor = "red";}

    else if( (strictCount % 2) === 0 ) {
    
        this.setState({
        strictBtn : false
    }); 

    document.getElementById("strictLight").style.backgroundColor = "black";
    }
    
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
        strictBtn : false,
        count : 0

    });
    }

 
}



clickDiv1 = () =>{
    
    let test = new  Audio();
    let playerArray = this.state.playerChoice;
    playerArray.push("one");

    

    test.src ="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
    
    if(this.state.gameOnandOff && this.state.startBtn){
    test.play();
    document.getElementById("one").style.opacity = '.5';
    
    setTimeout(function(){document.getElementById("one").style.opacity = "1";},500); 
    
    this.setState({
        playerChoice : playerArray
    })

    }   
    
}

clickDiv2 = () =>{
    let test2 = new Audio();
    test2.src = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
    if(this.state.gameOnandOff && this.state.startBtn){
    test2.play();
    document.getElementById("two").style.opacity = '.5';
    setTimeout(function(){document.getElementById("two").style.opacity = "1";},500);
    
    }
}
clickDiv3 = () =>{
    let test3 = new Audio();
    test3.src = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
    if(this.state.gameOnandOff && this.state.startBtn) {
    test3.play();
    document.getElementById("three").style.opacity = '.5';
    setTimeout(function(){document.getElementById("three").style.opacity = "1";},500);
    }
}
clickDiv4 = () =>{
    let test4 = new Audio();
    
    test4.src = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
    if(this.state.gameOnandOff && this.state.startBtn){
    test4.play();
    document.getElementById("four").style.opacity = '.5';
    setTimeout(function(){document.getElementById("four").style.opacity = "1";},500);
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
