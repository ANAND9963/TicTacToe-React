
const Playersinfo = ({players}) => {

    


    return (
        <>
        <div className="players-info">
        <h1>Tic Tac Toe</h1>
        <div className="player1-info">
          <img
            src={require("./Images/cross.png")}
            alt="cross"
            style={{ width: "1.5rem" }}
          />
          <span id="player1name">{players[0].name}</span> :
          <span id="player1score"> {players[0].Score} </span>
        </div>
        <div className="player2-info">
          <img
            src={require("./Images/circle.png")}
            alt="circle"
            style={{ width: "1.5rem" }}
          />
          <span id="player2name">{players[1].name}</span> :
          <span id="player2score"> {players[1].Score} </span>
        </div>
      </div>
        </>
    )
}

export default Playersinfo;