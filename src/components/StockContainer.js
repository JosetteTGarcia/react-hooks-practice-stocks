import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, sendUpClick}) {
  
  const mainStockList = stocks.map((stock) => (
    <Stock key={stock.id} stock={stock} sendUpClick={sendUpClick}/>


  ))
  
  return (
    <div>
      <h2>Stocks</h2>
      {mainStockList}
    </div>
  );
}

export default StockContainer;
 