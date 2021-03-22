import React, {useState} from "react";


function Sushi({sushi, wallet, handleEatSushi}) {
  const {id, name, img_url, price, eaten} = sushi

  const eatSushi = (sushi) => {
    console.log(wallet)
    if (wallet < price ) {
      alert ("NO SUSHI FOR YOU!")
    } else {
      handleEatSushi(sushi)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={eaten ? null : ()=>eatSushi(sushi) }>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={eaten ? null : img_url}
            alt={eaten ? null : `${name} Sushi`}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        id:{id} - {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
