import React, { Component } from "react";
import "./divOne.css";
class CompOne extends Component{

    state = {
        playerChoice : [],
        compBoxArr :[],
        compCount : 0,
        numOfWins : 1,
        boxIntial : ["one","two","three","four"],
        startBtn : false,
        strictBtn : false,
        compTurn : false,
        playerTurn : false,
        strictBtnCount : 0
          }

clickStart = () => {
    this.setState({
        startBtn : true,
        compBoxArr :[]

    });

    this.compRandomNum();
    let time;

    let compBox = this.state.compBoxArr;
    for ( let i=0; i < this.state.numOfWins; i++){
       (function (i) {
        setTimeout (()=>{
            let element = document.getElementById(compBox[i])
            element.click();
        },1500*i);
        time = 1500*i;
       })(i)
    
    }
this.setState ({
playerTurn : true,
playerChoice : []
});



    
     console.log(this.state);
}

compRandomNum = () => {
    let compRandArr = this.state.compBoxArr;

    for( let i=0 ; i< 20; i++) {
        let randNum = Math.floor(Math.random()*4);
        compRandArr.push(this.state.boxIntial[randNum]);
    }

    this.setState({
        compBoxArr : compRandArr
    });

}





playerFunc = () => {

let arr1 = this.state.playerChoice;
let arr2 = this.state.compBoxArr;

if(arr1.length !== arr2.length || arr2.length !== arr1.length){
    alert("Game Over");
}
else if (arr1.length === arr2.length ) {

for(let i =0 ; i<arr1.length ; i++) {
    if(arr1[i] !== arr2[i]){
        alert("game Over")
        }

    else {
        this.clickStart();
    }
    }

}


}


clickStrict = () => {
    let strictCount = this.state.strictBtnCount;

    strictCount++;
    
    console.log(this.state.strictBtnCount);
    if( (strictCount % 2) !== 0 ) {

    this.setState({
        strictBtn : true,
        strictBtnCount : strictCount
    }); 

    document.getElementById("strictLight").style.backgroundColor = "red";}

    else if( (strictCount % 2) === 0 ) {
    
        this.setState({
        strictBtn : false,
        strictBtnCount : strictCount
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
        count : 0,
        playerChoice : [],
        compBoxArr : []


    });
    }

 
}



clickDiv1 = () =>{
    
    let test = new  Audio();
    let playerArray = this.state.playerChoice;
    playerArray.push("one");
    test.src ="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
    
    if(this.state.gameOnandOff && this.state.startBtn && this.state.playerTurn){
    test.play();
    document.getElementById("one").style.opacity = '.5';
    
    setTimeout(function(){document.getElementById("one").style.opacity = "1";},500); 
    
    this.setState({
        playerChoice : playerArray
    })

    }
    
    console.log(this.state);
    
}

clickDiv2 = () =>{
    let test2 = new Audio();
    let playerArray = this.state.playerChoice;
    playerArray.push("two");
    test2.src = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
    if(this.state.gameOnandOff && this.state.startBtn && this.state.playerTurn){
    test2.play();
    document.getElementById("two").style.opacity = '.5';
    setTimeout(function(){document.getElementById("two").style.opacity = "1";},500);
    this.setState({
        playerChoice : playerArray
    })
    }
    console.log(this.state);
}
clickDiv3 = () =>{
    let test3 = new Audio();
    let playerArray = this.state.playerChoice;
    playerArray.push("three");
    test3.src = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
    if(this.state.gameOnandOff && this.state.startBtn && this.state.playerTurn) {
    test3.play();
    document.getElementById("three").style.opacity = '.5';
    setTimeout(function(){document.getElementById("three").style.opacity = "1";},500);
    this.setState({
        playerChoice : playerArray
    })
    }
    console.log(this.state);
}
clickDiv4 = () =>{
    let test4 = new Audio();
    let playerArray = this.state.playerChoice;
    playerArray.push("four");
    test4.src = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
    if(this.state.gameOnandOff && this.state.startBtn && this.state.playerTurn){
    test4.play();
    document.getElementById("four").style.opacity = '.5';
    setTimeout(function(){document.getElementById("four").style.opacity = "1";},500);
    this.setState({
        playerChoice : playerArray
    })
    }
    console.log(this.state);
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
