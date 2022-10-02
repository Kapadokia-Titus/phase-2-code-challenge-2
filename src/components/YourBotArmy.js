import React, {useEffect, useState} from "react";
import BotCard from "./BotCard";

function YourBotArmy({info}) {
  const [newInfo, setNewInfo] = useState(info)
 
  function handleMyBotClick(data){ 
    const dataClicked = info.filter(info => info.id !== data.id)
    setNewInfo({...newInfo, dataClicked})
  }


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {info.map(newInfo =><BotCard key={newInfo.id} bot={newInfo} onCardClick={handleMyBotClick}/>)}
         
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
