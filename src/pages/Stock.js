import {useState, useEffect} from "react"

const Stock = (props) => {
    const stockData = props.stockData
    const [stock, setStock] = useState(null)

    const getStock = () => {
        let mainStock;
        for(let i=0; i<stockData.length; i++){
            if(stockData[i].symbol === props.match.params.symbol){
                mainStock = stockData[i]
            }
        }
        setStock(mainStock)
    }

    useEffect(() => getStock(), [])

    const loaded = () => {
        return (
            <div className="stockShow">
                <div className="stockShow1">
                <h1 className="nameShow">{stock.name}</h1>
                <p className="symbolShow">({stock.symbol})</p>
                </div>
                <div className="stockShow2">
                <h3>Last Price: ${stock.lastPrice}</h3>
                <h3>Change: {stock.change.toFixed(2)}</h3>
                </div>
                <div className="stockShow3">
                <p>High: ${stock.high}</p>
                <p>Low: ${stock.low}</p>
                <p>Open: ${stock.open}</p>
                </div>
                <a className="backLink"href="/stocks"><button className="back">Go Back</button></a>    
            </div>
        )
    }
    const loading = () => {
        return <h1>Loading...</h1>
    }

    return stock ? loaded() : loading()
}

export default Stock


