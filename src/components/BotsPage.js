import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {

  const [myBot, setMyBot] = useState([])
  
  function  handleClick(data){
    setMyBot( current=>[...current, data])
  }

  function handleCancelClick(event){ 
    console.log("delete clicked")
  }
  function handleMyBotClick(event){ 
    console.log("delete clicked")
  }
  const withoutDuplicates = [...new Set(myBot)];

  return (
    <div>
      
      <YourBotArmy info={withoutDuplicates} handleClick={handleMyBotClick} handleCancelClick={handleCancelClick}/>
      <BotCollection handleClick={handleClick} handleCancelClick={handleCancelClick}/>
    </div>
  )
}

export default BotsPage;
