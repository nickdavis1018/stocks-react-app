import React from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  const stockData = props.stockData
  return stockData.map((stock, index) => {
    return (
      <div key={index} className="stocksList">
      <Link to={`/stocks/${stock.symbol}`}>
        <h3>{stock.name}</h3>
      </Link>
      <h3 className="symbolDash">({stock.symbol})</h3>
              <h3>{stock.lastPrice}</h3>
              <h3>{stock.change.toFixed(2)}</h3>
              </div>
    );
  });
};

export default Dashboard;