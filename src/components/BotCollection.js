import React, {useEffect, useState} from "react";
import BotCard from "./BotCard";

function BotCollection() {
  const [botArmy, setBotArmy] = useState([])

  useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then(res=> res.json())
    .then(data =>{
      setBotArmy(data)
    })
  },[])

  
  return (
    <div className="ui four column grid">
      <div className="row">
        {console.log(botArmy)}
        {botArmy.map(data =>(
          <BotCard bot={data}/>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
