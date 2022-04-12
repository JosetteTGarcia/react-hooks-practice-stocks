import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, sendUpClick}) {
  
  const ownedStocksList = stocks.map((stock) => (
    <Stock key={stock.id} stock={stock} sendUpClick={sendUpClick}/>
  ))
  return (
    <div>
      <h2>My Portfolio</h2>
      {ownedStocksList}
    </div>
  );
}

export default PortfolioContainer;
 