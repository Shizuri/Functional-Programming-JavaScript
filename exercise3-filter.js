function getStocksOver(stocks, minPrice) {
    var results = [];

    stocks.forEach(stock =>{
        if(stock.price >= minPrice){
            results.push(stock);
        }
    });
    
    return results;
}

var expensiveStocks = getStocksOver(
    [
        {symbol: "XFX", price: 240.20, volume: 23432},
        {symbol: "TNZ", price: 332.19, volume: 234},
        {symbol: "JXJ", price: 120.22, volume: 5323},
    ],
    150.00
)

console.log(expensiveStocks);
