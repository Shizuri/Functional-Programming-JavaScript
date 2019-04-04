var stocks = [
    { symbol: "XFX", price: 240.20, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 },
    { symbol: "JXJ", price: 120.22, volume: 5323 }
];

function highPriceSymbolsFun(arr, minPrice) {
    let result = [];
    arr.filter(res => res.price >= minPrice).map(res => result.push(res.symbol));
    return result;
}

let highPriceSymbols = highPriceSymbolsFun(stocks, 150.00);
console.log(highPriceSymbols);