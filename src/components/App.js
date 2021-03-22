import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [plates, setPlates] = useState([])
  const [wallet, setWallet] = useState(30)

  useEffect(()=> {
    fetch(API)
      .then(r => r.json())
      .then(sushiR => {
        const updatedSushi = sushiR.map(sushi => {
          return {...sushi, eaten: false}
          })
        setSushis(updatedSushi)
      })
  }, [])

  const handleEatSushi = (eatenSushi) => {
    setWallet(wallet - eatenSushi.price)
    const updatedSushi = sushis.map(sushi => {
      if(sushi.id === eatenSushi.id) { 
        return {...sushi, eaten:true} }
      return sushi
      })
    setSushis(updatedSushi)
  }

  const emptyPlates = () => {
    return sushis.filter(sushi => sushis.eaten)
  }

  const addMoney = (amount) => {
    console.log(amount)
    setWallet(wallet + amount)
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} wallet={wallet} handleEatSushi={handleEatSushi} />
      <Table wallet={wallet} setPlates={emptyPlates()} addMoney={addMoney} />
    </div>
  );
}

export default App;
