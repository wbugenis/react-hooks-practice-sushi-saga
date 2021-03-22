import React, {useState} from "react"

const Adder = ({addMoney}) => {
    const [money, setMoney] = useState(0)

    const handleAddSubmit = (event)=> {
        event.preventDefault()
        addMoney(parseInt(event.target.money.value))
        setMoney(0)
    }

    return (
        <div>
            <form id="money-form" onSubmit={(event) => handleAddSubmit(event)}>
                <input type="number" name="money" value={money} 
                    onChange={event => setMoney(event.target.value)}
                    onFocus={event => event.target.select()}
                />
                <input type="submit" value="Add Funds" />
            </form>
        </div>
    )
}

export default Adder;