import { useState } from "react";
import "./CSS/Style.css";
import Playersinfo from "./info";
import Grid from "./Grid";
import Instructions from "./instruction";

const Game = () => {
  let [players, setPlayers] = useState([
    { name: "player1", Score: 0 },
    { name: "player2", Score: 0 },
  ]);

  let [isCirclenext, setIsCirclenext] = useState(true);
  let [hasGameWon, SetHAsGameWon] = useState(false);

  let [hasGameStarted, setHasGAmeStarted] = useState(false);

  let [count, setCount] = useState(0);
  let [matrix, SetMatrix] = useState([2, 2, 2, 2, 2, 2, 2, 2, 2]);

  const resetGame =() => {
    
    
    setCount(0);
    setIsCirclenext(true);
    SetHAsGameWon(false);
    setHasGAmeStarted(false);
    matrix.fill(2);
    SetMatrix(matrix);

   
    
    
    
  }

  return (
    <>
      <Playersinfo players={players} />
      <Grid

        matrix = {matrix}
        SetMatrix = {SetMatrix}
        setPlayers={setPlayers}
        players={players}
        isCirclenext={isCirclenext}
        setIsCirclenext={setIsCirclenext}
        SetHAsGameWon={SetHAsGameWon}
        hasGameWon={hasGameWon}
        count={count}
        setCount={setCount}
        
      />
      <Instructions hasGameStarted ={hasGameStarted} resetGame ={resetGame}/>
    </>
  );
};

export default Game;
