import React, {useEffect, useState} from "react";
import BotCard from "./BotCard";

function YourBotArmy({info}) {
 
  console.log(info)


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {info.map(data =><BotCard key={data.id} bot={data}/>)}
         
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
