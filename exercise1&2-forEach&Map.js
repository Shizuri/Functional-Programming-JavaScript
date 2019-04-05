function getStockSymbols(stocks){
    var results = [];
    
  //   stocks.forEach(function(stock) {
  //     symbolsResult.push(stock.symbol);
  //   })
    
  //   stocks.forEach(res => results.push(res.symbol))
    
    
  //   stocks.map((res) =>{
  //     return results.push(res.symbol);
  //   })
    
    stocks.map(res => results.push(res.price));
    
    return results;
  }
  
  var symbols = getStockSymbols([
    {symbol: "XFX", price: 240.22, volume: 23423},
    {symbol: "ABC", price: 111.22, volume: 11111},
    {symbol: "DEF", price: 333.22, volume: 33333}
  ])
  
  
  console.log(symbols);