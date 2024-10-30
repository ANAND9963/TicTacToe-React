const Instructions = ({
  hasGameStarted,
  resetGame,
  hasGameWon,
  players,
  isCirclenext,
  setHasGAmeStarted,
  setModeldisplay,matrix
}) => {
  return (
    <>
      <div className="instructions">
        <h3 id="instructioninfo">
            {
                !hasGameWon ? !hasGameStarted 
                    ? "Click The Button To Start"
                    :!matrix.includes(2)?"it's a tie": 
                    isCirclenext ? players[0].name+ "'s turn" : players[1].name + "'s turn":
                    !isCirclenext
                    ? players[0].name+ " Won the game"
                    : players[1].name + " won the game"
                
            }
          
             
        </h3>
        <button className="start-btn"
        onClick={()=>{setModeldisplay(true)}}>
          {hasGameStarted ? "NewGame" : "Start Gamey"}
        </button>
        {hasGameStarted ? (
          <button
            className="start-btn2"
            onClick={() => {
              resetGame();
            }}
          >
            Reset Game
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Instructions;
