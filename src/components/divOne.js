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
    let timeOut1; 
    let timeOut2; 
    let timeOut3; 
    let timeOut4; 
    let timeOut5; 
   clearTimeout(timeOut1);
   clearTimeout(timeOut2);
   clearTimeout(timeOut3);
   clearTimeout(timeOut4);
   clearTimeout(timeOut5);
    this.setState({
        startBtn : true,
        playerTurn :true,        
        compBoxArr :[],
        playerChoice :[],
        returnRegularFunc : false,
        numOfWins : 1

    });
    this.compRandomNum();
     

//This is the recuring function -------------------------------------------------
const testFunction =  () => {
    clearTimeout(timeOut1);
    clearTimeout(timeOut2);
    clearTimeout(timeOut3);
    clearTimeout(timeOut4);
    clearTimeout(timeOut5);
    this.setState({
        playerChoice : []
    });

    let time;
//This is the First SetTImeout Function--------------------------------------------
    let compBox = this.state.compBoxArr;
    for ( let i=0; i < this.state.numOfWins; i++){
       (function (i) {
        timeOut1 = setTimeout (()=>{
            let element = document.getElementById(compBox[i])
            element.click();
        },500*i+1000);
        time = 500*i+1000;
       })(i)
       
    }
//This is the second SetTImeout Function--------------------------------------------

   timeOut2= setTimeout(() => {this.setState ({
        
    playerChoice : []
        });
    console.log(this.state);
    console.log(time);
    },time+100);

//This is the Third SetTImeout Function--------------------------------------------
   timeOut4=  setTimeout (() => {
        let arr1 = this.state.playerChoice;
        let arr2 = this.state.compBoxArr;
        
        
        
        for(let i = 0 ; i<arr1.length ; i++) {
            if(arr1[i] !== arr2[i]){
             if(this.state.strictBtn){
                this.setState({
                    returnRegularFunc :false
                });
             }
             else  {
                 this.setState({
                     strictOff: true,
                     playerChoice : [],
                     youGotItWrong : true
                 })
             } 
                }
        
            else {
                
            this.setState({
                playerChoice : [],
                returnRegularFunc : true,
               youGotItWrong : false

            });
            console.log(this.state);
            
                }
            }

    }, time+6000)



//This is the Fourth SetTImeout Function--------------------------------------------
 timeOut5 =  setTimeout (()=>{ 
    if(this.state.returnRegularFunc && this.state.gameOnandOff && !this.state.youGotItWrong){
        let numTurns = this.state.numOfWins + 1;
        this.setState({
            numOfWins : numTurns});
        testFunction();
        
    console.log("in the final func")}
    else if(this.state.strictOff && this.state.gameOnandOff && this.state.youGotItWrong){
        this.setState({
            numOfWins : this.state.numOfWins});
        testFunction();
    }

    else if(!this.state.returnRegularFunc && this.state.gameOnandOff){
        this.setState({
            numOfWins : 1});
            this.clickStart();
    }
}, time+6100);
}
testFunction();
     //console.log(this.state);
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

//This is the strict button function ----------------------------------------------------------------------

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

//This is the on and off button function -------------------------------------------------------------------------

clickOnOff = (event) => {
    if(event.target.checked){
    this.setState({
        gameOnandOff : event.target.checked
    });
    }
    else {
       
        window.clearTimeout()
    this.setState({
        gameOnandOff : false,
        startBtn : false,
        strictBtn : false,
        playerChoice : [],
        compBoxArr : [],
        numOfWins : 1, 
        returnRegularFunc : false

    });
    }

 
}

//This is the click div 1 fucntion------------------------------------------------------------------------------------

clickDiv1 = () =>{
    
    let test = new  Audio();
    let playerArray = this.state.playerChoice;
    playerArray.push("one");
    test.src ="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
    
    if(this.state.gameOnandOff && this.state.startBtn && this.state.playerTurn){
    test.play();
    document.getElementById("one").style.opacity = '.5';
    
    setTimeout(function(){document.getElementById("one").style.opacity = "1";},150); 
    
    this.setState({
        playerChoice : playerArray
    })

    }
    
    // console.log(this.state);
    
}
//This is the click div 2 fucntion------------------------------------------------------------------------------------
clickDiv2 = () =>{
    let test2 = new Audio();
    let playerArray = this.state.playerChoice;
    playerArray.push("two");
    test2.src = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
    if(this.state.gameOnandOff && this.state.startBtn && this.state.playerTurn){
    test2.play();
    document.getElementById("two").style.opacity = '.5';
    setTimeout(function(){document.getElementById("two").style.opacity = "1";},150);
    this.setState({
        playerChoice : playerArray
    })
    }
    // console.log(this.state);
}
//This is the click div 3 fucntion------------------------------------------------------------------------------------
clickDiv3 = () =>{
    let test3 = new Audio();
    let playerArray = this.state.playerChoice;
    playerArray.push("three");
    test3.src = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
    if(this.state.gameOnandOff && this.state.startBtn && this.state.playerTurn) {
    test3.play();
    document.getElementById("three").style.opacity = '.5';
    setTimeout(function(){document.getElementById("three").style.opacity = "1";},150);
    this.setState({
        playerChoice : playerArray
    })
    }
    // console.log(this.state);
}
//This is the click div 4 fucntion------------------------------------------------------------------------------------
clickDiv4 = () =>{
    let test4 = new Audio();
    let playerArray = this.state.playerChoice;
    playerArray.push("four");
    test4.src = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
    if(this.state.gameOnandOff && this.state.startBtn && this.state.playerTurn){
    test4.play();
    document.getElementById("four").style.opacity = '.5';
    setTimeout(function(){document.getElementById("four").style.opacity = "1";},150);
    this.setState({
        playerChoice : playerArray
    })
    }
    // console.log(this.state);
}

//This is the render method -------------------------------------------------------------------------------------------
render (){
    return (
    <div className="gameContent">
     
    <div className="inforDiv">
     <h1 id="gameCircleTitle">Simon</h1>
    <div id="btnContent">
        <div className="disBtn">
            <div id ="pointCol">
                <h1 id="countID">{this.state.numOfWins}</h1>
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
