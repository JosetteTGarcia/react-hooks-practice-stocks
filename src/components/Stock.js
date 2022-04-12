import React from "react";

function Stock({stock, sendUpClick}) {

const {id, name, price} = stock

const handleClick = () => {
  sendUpClick(stock)
  console.log("step1")
}
  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
 