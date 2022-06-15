export default function EndGame({restartGame}){
    return(
        <div className="EndGame">
            <h1 className="EndGame-Text">Game Over!</h1>
            <button className="btn" onClick={restartGame}>RESTART</button>
            <button className="btn">CLEAR HISTORY</button>
        </div>
    )
}