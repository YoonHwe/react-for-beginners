import { useEffect } from "react";
import { useState } from "react";

function CoinTracker(){
    const [loading, setLoading] = useState(true);
    const [money, setMoney] = useState(0);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((res) => res.json())
        .then((json) => {
            setData(json)
            setLoading(false)
        })
    }, [])
    const changeMoney = (event) => {
        console.log(event.target.value);
        setMoney(event.target.value);
    }
    return (
        <div>
            <h1>Coins({data.length})</h1>
            <input type="number" onChange={changeMoney} placeholder="How Much Dollar You Have?"/>
            {loading ? <strong>Loading...</strong> : null}
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name} ({item.symbol}): {item.quotes['USD'].price} USD | You can get {money / item.quotes['USD'].price} {item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default CoinTracker;