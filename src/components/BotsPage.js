import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {

  const [myBot, setMyBot] = useState([])
  
  function  handleClick(data){
    setMyBot( current=>[...current, data])
  }

  function handleCancelClick(id){ 
   fetch(`http://localhost:8002/bots/${id}`,{
    method:"DELETE"
   })
   .then(res =>res.json())
   .then(data=>{
    const dataClicked = myBot.filter(info => info.id !== id)
    setMyBot(current=>[...current, dataClicked])
   })
  }

  const withoutDuplicates = [...new Set(myBot)];

  return (
    <div>
      
      <YourBotArmy info={withoutDuplicates} />
      <BotCollection handleClick={handleClick} handleCancelClick={handleCancelClick}/>
    </div>
  )
}

export default BotsPage;
