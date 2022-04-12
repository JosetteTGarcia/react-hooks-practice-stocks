import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";


function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [ownedStocks, setOwnedStocks] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically");
  const [filterBy, setFilterBy] = useState("Tech");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((resp) => resp.json())
    .then((stockData) => setStocks(stockData))
  }, [])

  function addDataToPort(selectedStock){  
    const newStock = stocks.find((stock) => stock.id === selectedStock.id);
    if (newStock) {
      setOwnedStocks([...ownedStocks, selectedStock])
    }  
  }

  function removeStock(selectedStock){
    setOwnedStocks((stocks) =>
      stocks.filter((stock) => stock.id !== selectedStock.id)
    );
  }


  const sortedStocks = [...stocks].sort((stock1, stock2) => {
    if (sortBy === "Alphabetically") {
      return stock1.name.localeCompare(stock2.name);
    } else {
      return stock1.price - stock2.price;
    }
  });

  const filteredStocks = sortedStocks.filter(
    (stock) => stock.type === filterBy
  );

  return (
    <div>
      <SearchBar sortBy={sortBy}
        onChangeSort={setSortBy}
        filterBy={filterBy}
        onChangeFilter={setFilterBy}
        />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} sendUpClick={addDataToPort}/>
        </div>
        <div className="col-4">
          <PortfolioContainer sendUpClick={removeStock}stocks={ownedStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
 