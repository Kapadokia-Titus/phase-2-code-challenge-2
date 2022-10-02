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

  return (
    <div>
      <YourBotArmy info={myBot} handleClick={handleClick} handleCancelClick={handleCancelClick}/>
      <BotCollection handleClick={handleClick} handleCancelClick={handleCancelClick}/>
    </div>
  )
}

export default BotsPage;
