let exchanges = [
    [
        { symbol: "XFX", price: 240.20, volume: 23432 },
        { symbol: "TNZ", price: 332.19, volume: 234 },
    ],
    [
        { symbol: "JXJ", price: 120.22, volume: 5323 },
        { symbol: "NYN", price: 88.47, volume: 98275 },
    ]
];

Array.prototype.concatAll = function() {
    var results = [];

    // this.forEach(function(subArray) {
    //     subArray.forEach(function(item) {
    //         results.push(item);
    //     });
    // });

    this.forEach(subArray => {
        subArray.forEach(item =>{
            results.push(item);
        });
    });

    return results;
};

var stocks = exchanges.concatAll();

stocks.forEach(function(stock) {
    console.log(stock);
});

// exchanges.forEach(function(exchange){
//     exchange.forEach(function(stock) {
//         console.log(stock);
//     });
// });

// console.log(exchanges[0][0]);