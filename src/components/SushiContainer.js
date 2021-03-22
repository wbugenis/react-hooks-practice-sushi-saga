import React, {useState} from "react";
import Sushi from "./Sushi"
import MoreButton from "./MoreButton";

function SushiContainer({sushis, wallet, handleEatSushi}) {
  const [sushiPosition, setPosition] = useState(0)
  const sushiComponents = sushis.slice(sushiPosition, sushiPosition + 4).map(sushi => <Sushi wallet={wallet} key={sushi.id} sushi={sushi} handleEatSushi={handleEatSushi}/>)
  
  const updatePosition = () => {
    if(sushiPosition + 4 >= sushis.length){
      setPosition(0)
    } else {
      setPosition(sushiPosition + 4)
    }
  }

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton updatePosition={updatePosition}/>
    </div>
  );
}

export default SushiContainer;
