import { useState } from "react";

const Grid = ({ hasGameStarted,matrix,SetMatrix,isCirclenext, setIsCirclenext, SetHAsGameWon ,hasGameWon , count, setCount, players ,setPlayers }) => {
  
  let [scenarious] = useState([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ]);

  

  const handleClick = (Index) => {
    // if (hasGameWon || matrix[Index] !== 2) return;
    let NewMatrix = [...matrix];

    if (isCirclenext) {
      NewMatrix[Index] = 0;
      setIsCirclenext(false);
    } else {
      NewMatrix[Index] = 1;
      setIsCirclenext(true);
    }

    SetMatrix(NewMatrix);
    checkToWin(NewMatrix);
  };

  const checkToWin = (NewMatrix) => {
   
    scenarious.map((scenario) => {
      if (NewMatrix[scenario[0]] !== 2) {
        if (
            NewMatrix[scenario[1]] === NewMatrix[scenario[0]] &&
            NewMatrix[scenario[2]] === NewMatrix[scenario[1]]
        ) {
          SetHAsGameWon(true);

          count++;
          
          
          if(isCirclenext){

            players[0]["Score"] = players[0]["Score"] + count;
            

          }else{
            players[1]["Score"] = players[1]["Score"] + count;
          }
          
          setPlayers(players);
          setCount(count);
  
        }
      }

      if (!matrix.includes(2) && hasGameWon === false) {
        
      }

    });
  };

  return (
    <>
      <div className="game" style={{
        pointerEvents: !hasGameStarted ? "none" :hasGameWon ? "none" : "auto"
      }}>
        {matrix.map((item, Index) => {
            
          return (
            <>
              {item === 2 ? (
                <div
                key={Index}
                  id={`square${Index + 1}`}
                  className="square"
                  onClick={() => {
                    handleClick(Index);
                  }}
                ></div>
              ) : (
                <>
                  {item === 0 ? (
                    <div
                    key={Index}
                      id={`square${Index + 1}`}
                      className="square cross"
                    ></div>
                  ) : (
                    <div
                    key={Index}
                      id={`square${Index + 1}`}
                      className="square circle"
                    ></div>
                  )}
                </>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Grid;
