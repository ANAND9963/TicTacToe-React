
const Model = ({players,setPlayers,setModeldisplay,setHasGAmeStarted,resetGame}) => {


    const handleChange=(e,flag)=>{
        
        
        let newPlayers =[...players]
        if(flag){
            players[0]["name"] = e.target.value;
            players[0]["Score"] =0;
        }else{
            players[1]["name"] = e.target.value;
            players[1]["Score"] =0;
        }

        setPlayers(newPlayers);

    }
    const handleSubmit =(e) => {

        e.preventDefault();
        setHasGAmeStarted(true);
        setModeldisplay(false);
        resetGame();

    }

    return (
        <div className="model">
            <div className="model-container">
                <form className="model-form" onSubmit={(e)=>handleSubmit(e)}>
                <h2>Enter Players Name</h2>
          <input
            type="text"
            className="person-name1"
            placeholder="Enter  player 1"
            required
            onChange={(e)=>handleChange(e,true)}
          />
          <input
            type="text"
            className="person-name2"
            placeholder="Enter  player 2"
            required
            onChange={(e)=>handleChange(e,false)}
          />
          <input type="submit" className="submitbtn" value="Start Game" 
          />
                </form>

            </div>
        </div>
    )

}
export default Model;