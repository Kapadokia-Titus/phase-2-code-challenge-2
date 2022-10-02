import React, {useEffect, useState} from "react";
import BotCard from "./BotCard";


function BotCollection({handleCancelClick, handleClick}) {
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
        {botArmy?.map(data =>(
         
          <BotCard  key={data.id} bot={data} onCardClick={handleClick} onCardCancel={handleCancelClick}/>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
