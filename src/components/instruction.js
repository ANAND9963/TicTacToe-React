const Instructions = ({hasGameStarted, resetGame}) => {

    return(
        <>
        <div className="instructions"> 
      <h3 id="instructioninfo">Click The Button To Start</h3>
      <button className="start-btn">{hasGameStarted ? "NewGame" : "Start Gamey"}</button>
      {!hasGameStarted ? <button className="start-btn2" onClick={()=>{
        resetGame();
      }}>Reset Game</button>:<></>}
      </div>
        </>
    )

}

export default Instructions;