import React, {useState} from "react";
import Game from "./Game";
import "./index.css";
import EndGame from "./EndGame";


export default function Home(){
    const [square,setSquare] = useState(Array(9).fill(""))
    const [player,setPlayer] = useState(true)
    const [isGameFinished,setIsGameFinished] = useState(false)
    const [draw,setDraw] = useState(false)
    const winTable = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]]
    
    function isGameOver(){
        if(!isGameFinished){
        for(let i=0;i<8;i++){
            if(square[winTable[i][0]]==="O" &&
                square[winTable[i][1]]==="O" &&
                square[winTable[i][2]]==="O"){
                    console.log("O won")
                    setIsGameFinished(true)
                    return;
                }
        }
        for(let i=0;i<8;i++){
            if(square[winTable[i][0]]==="X" &&
                square[winTable[i][1]]==="X" &&
                square[winTable[i][2]]==="X"){
                    console.log("X won")
                    setIsGameFinished(true)
                    return;
                }
        }

        if(!square.includes("")){
            setDraw(true)
            setIsGameFinished(true)
            console.log("Draw")
        }
    }
    }
    
    isGameOver()
    function handleclick(id){
        setSquare(square.map((item,index)=>{
            if(index===id){
                if(player){
                    return "O"
                }else{
                    return "X"
                }
            }else{
                return item
            }
        }))
        setPlayer(!player)
    }

    function restartGame(){
        setSquare(Array(9).fill(""))
        setIsGameFinished(false)
        setDraw(false) 
    }
    return(
        <div >
            {isGameFinished && <EndGame restartGame={restartGame}/>}
            <h1>Tic Tac Game</h1>
            <h4>Player One's turn</h4>
        <Game ArrayClick={square} handleclick={handleclick}/>
        </div>
    )
}